import { PluginSettingTab, App, Setting } from 'obsidian'
import {
	MarkdownPostProcessor,
	MarkdownPreviewRenderer,
	MarkdownView,
	Modal,
	Notice,
	Plugin,
	Editor,
} from 'obsidian'

import EmojiShortcodesPlugin from './main'

export interface EmojiPluginSettings {
	immediateReplace: boolean
	suggester: boolean
	historyPriority: boolean
	historyLimit: number
	history: string[]

	// toolbar
	twitterEmojiActive: boolean
}

export const DEFAULT_SETTINGS: EmojiPluginSettings = {
	immediateReplace: true,
	suggester: true,
	historyPriority: true,
	historyLimit: 100,
	history: [],
	twitterEmojiActive: false,
}

export class EmojiPluginSettingTab extends PluginSettingTab {
	plugin: EmojiShortcodesPlugin

	constructor(app: App, plugin: EmojiShortcodesPlugin) {
		super(app, plugin)
		this.plugin = plugin
	}

	display(): void {
		const { containerEl } = this

		containerEl.empty()

		containerEl.createEl('h2', { text: 'Emoji Shortcodes Plugin' })

		{
			// thing
			new Setting(containerEl)
				.setName('Twitter Emoji (v13)')
				.setDesc('Improved emoji support, but may cause unexpected behavior.')
				.addToggle((toggle) =>
					toggle
						.setValue(this.plugin.settings.twitterEmojiActive)
						.onChange(async (value) => {
							this.plugin.settings.twitterEmojiActive = value
							await this.plugin.saveSettings()
							if (value) {
								MarkdownPreviewRenderer.registerPostProcessor(
									EmojiPickerPlugin.postprocessor,
								)
							} else {
								MarkdownPreviewRenderer.unregisterPostProcessor(
									EmojiPickerPlugin.postprocessor,
								)
							}
						}),
				)
		}

		new Setting(containerEl)
			.setName('Immediate Emoji Replace')
			.setDesc(
				'If this is turned on, Emoji shortcodes will be immediately replaced after typing. Otherwise they are still stored as a shortcode and you only see the Emoji in Preview Mode.',
			)
			.addToggle((cb) => {
				cb.setValue(this.plugin.settings.immediateReplace).onChange(async (value) => {
					this.plugin.settings.immediateReplace = value
					await this.plugin.saveSettings()
				})
			})

		new Setting(containerEl)
			.setName('Emoji Suggester')
			.setDesc(
				"If this is turned on, a Suggester will appear everytime you type : followed by a letter. This will help you insert Emojis. (Doesn't work on mobile)",
			)
			.addToggle((cb) => {
				cb.setValue(this.plugin.settings.suggester).onChange(async (value) => {
					this.plugin.settings.suggester = value
					await this.plugin.saveSettings()
				})
			})

		new Setting(containerEl)
			.setName('Use History Priority')
			.setDesc('Suggester gives priority to recently used emoji.')
			.addToggle((cb) => {
				cb.setValue(this.plugin.settings.historyPriority).onChange(async (value) => {
					this.plugin.settings.historyPriority = value
					await this.plugin.saveSettings()
					this.display()
				})
			})

		if (this.plugin.settings.historyPriority) {
			new Setting(containerEl)
				.setName('History Limit')
				.setClass('ES-sub-setting')
				.addText((cb) => {
					cb.setPlaceholder(String(DEFAULT_SETTINGS.historyLimit))
						.setValue(String(this.plugin.settings.historyLimit))
						.onChange(async (value) => {
							this.plugin.settings.historyLimit =
								value !== '' ? Number(value) : DEFAULT_SETTINGS.historyLimit
							await this.plugin.saveSettings()
						})
				})

			new Setting(containerEl)
				.setName('Clear History')
				.setClass('ES-sub-setting')
				.addButton((cb) => {
					cb.setButtonText('Clear').onClick(async () => {
						this.plugin.settings.history = []
						await this.plugin.saveSettings()
					})
				})
		}

		new Setting(containerEl)
			.setName('Donate')
			.setDesc(
				'If you like this Plugin, consider donating to support continued development:',
			)
			.addButton((bt) => {
				bt.buttonEl.outerHTML = `<a href="https://ko-fi.com/phibr0"><img src="https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/61e11e22d8ff4a5b4a1b3346_Supportbutton-1.png"></a>`
			})
	}
}
