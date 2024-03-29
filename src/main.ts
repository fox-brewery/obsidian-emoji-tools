import {
	Platform,
	Plugin,
	Notice,
	EditorSuggest,
	Editor,
	EditorPosition,
	TFile,
	EditorSuggestTriggerInfo,
	MarkdownView,
	EditorSuggestContext,
	MarkdownPreviewRenderer,
} from 'obsidian'
import DefinitionListPostProcessor from './definitionListPostProcessor'
import { emoji } from './emojiList.ts'
import EmojiMarkdownPostProcessor from './emojiPostProcessor.ts'
import {
	DEFAULT_SETTINGS,
	EmojiPluginSettings,
	EmojiPluginSettingTab,
} from './settings.ts'
import { EmojiModal, checkForInputBlock } from './util.ts'

export default class EmojiToolsPlugin extends Plugin {
	settings: EmojiPluginSettings
	emojiList: string[]

	async onload() {
		await this.loadSettings()
		this.addSettingTab(new EmojiPluginSettingTab(this.app, this))

		if (this.settings.twitterEmojiActive) {
			MarkdownPreviewRenderer.registerPostProcessor(EmojiToolsPlugin.postprocessor)
		}

		this.addCommand({
			id: 'emoji-picker:open-picker',
			name: 'Open emoji picker',
			hotkeys: [],
			checkCallback: (checking: boolean) => {
				const leaf = this.app.workspace.activeLeaf
				if (leaf) {
					if (!checking) {
						try {
							const theme = this.app.getTheme() === 'moonstone' ? 'light' : 'dark'
							const isNative = !this.settings.twitterEmojiActive
							const view = this.app.workspace.getActiveViewOfType(MarkdownView)
							if (!view) {
								return
							}
							const myModal = new EmojiModal(this.app, theme, isNative, view.editor)
							myModal.open()
						} catch (err) {
							new Notice(err instanceof Error ? err.message : String(err))
						}
					}
					return true
				}
				return false
			},
		})

		this.registerEditorSuggest(new EmojiSuggester(this))

		this.registerMarkdownPostProcessor(EmojiMarkdownPostProcessor.emojiProcessor)
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData())
		this.updateEmojiList()
	}

	async saveSettings() {
		await this.saveData(this.settings)
		this.updateEmojiList()
	}

	updateEmojiList() {
		const set = new Set(this.settings.history)
		this.emojiList = [
			...this.settings.history,
			...Object.keys(emoji).filter((e) => !set.has(e)),
		]
	}

	updateHistory(suggestion: string) {
		if (!this.settings.historyPriority) return

		const set = new Set([suggestion, ...this.settings.history])
		const history = [...set].slice(0, this.settings.historyLimit)

		this.settings = Object.assign(this.settings, { history })
		this.saveSettings()
	}
}

class EmojiSuggester extends EditorSuggest<string> {
	plugin: EmojiToolsPlugin

	constructor(plugin: EmojiToolsPlugin) {
		super(plugin.app)
		this.plugin = plugin
	}

	onTrigger(
		cursor: EditorPosition,
		editor: Editor,
		_: TFile,
	): EditorSuggestTriggerInfo | null {
		if (this.plugin.settings.suggester) {
			const sub = editor.getLine(cursor.line).substring(0, cursor.ch)
			const match = sub.match(/:\S+$/)?.first()
			if (match) {
				return {
					end: cursor,
					start: {
						ch: sub.lastIndexOf(match),
						line: cursor.line,
					},
					query: match,
				}
			}
		}
		return null
	}

	getSuggestions(context: EditorSuggestContext): string[] {
		const emoji_query = context.query.replace(':', '').toLowerCase()
		return this.plugin.emojiList.filter((p) => p.includes(emoji_query))
	}

	renderSuggestion(suggestion: string, el: HTMLElement): void {
		const outer = el.createDiv({ cls: 'ES-suggester-container' })
		outer.createDiv({ cls: 'ES-shortcode' }).setText(suggestion.replace(/:/g, ''))
		outer.createDiv({ cls: 'ES-emoji' }).setText(emoji[suggestion])
	}

	selectSuggestion(suggestion: string): void {
		if (this.context) {
			;(this.context.editor as Editor).replaceRange(
				this.plugin.settings.immediateReplace ? emoji[suggestion] : `${suggestion} `,
				this.context.start,
				this.context.end,
			)
			this.plugin.updateHistory(suggestion)
		}
	}
}
