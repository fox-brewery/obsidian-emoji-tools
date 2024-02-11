'use strict';

var obsidian = require('obsidian');

// Generated from: https://api.github.com/emojis
const emoji$1 = JSON.parse(`{
  ":100:": "💯",
  ":1234:": "🔢",
  ":+1:": "👍",
  ":-1:": "👎",
  ":1st_place_medal:": "🥇",
  ":2nd_place_medal:": "🥈",
  ":3rd_place_medal:": "🥉",
  ":8ball:": "🎱",
  ":a:": "🅰",
  ":ab:": "🆎",
  ":abacus:": "🧮",
  ":abc:": "🔤",
  ":abcd:": "🔡",
  ":accept:": "🉑",
  ":accordion:": "🪗",
  ":adhesive_bandage:": "🩹",
  ":adult:": "🧑",
  ":aerial_tramway:": "🚡",
  ":afghanistan:": "🇦‍🇫",
  ":airplane:": "✈",
  ":aland_islands:": "🇦‍🇽",
  ":alarm_clock:": "⏰",
  ":albania:": "🇦‍🇱",
  ":alembic:": "⚗",
  ":algeria:": "🇩‍🇿",
  ":alien:": "👽",
  ":ambulance:": "🚑",
  ":american_samoa:": "🇦‍🇸",
  ":amphora:": "🏺",
  ":anatomical_heart:": "🫀",
  ":anchor:": "⚓",
  ":andorra:": "🇦‍🇩",
  ":angel:": "👼",
  ":anger:": "💢",
  ":angola:": "🇦‍🇴",
  ":angry:": "😠",
  ":anguilla:": "🇦‍🇮",
  ":anguished:": "😧",
  ":ant:": "🐜",
  ":antarctica:": "🇦‍🇶",
  ":antigua_barbuda:": "🇦‍🇬",
  ":apple:": "🍎",
  ":aquarius:": "♒",
  ":argentina:": "🇦‍🇷",
  ":aries:": "♈",
  ":armenia:": "🇦‍🇲",
  ":arrow_backward:": "◀",
  ":arrow_double_down:": "⏬",
  ":arrow_double_up:": "⏫",
  ":arrow_down:": "⬇",
  ":arrow_down_small:": "🔽",
  ":arrow_forward:": "▶",
  ":arrow_heading_down:": "⤵",
  ":arrow_heading_up:": "⤴",
  ":arrow_left:": "⬅",
  ":arrow_lower_left:": "↙",
  ":arrow_lower_right:": "↘",
  ":arrow_right:": "➡",
  ":arrow_right_hook:": "↪",
  ":arrow_up:": "⬆",
  ":arrow_up_down:": "↕",
  ":arrow_up_small:": "🔼",
  ":arrow_upper_left:": "↖",
  ":arrow_upper_right:": "↗",
  ":arrows_clockwise:": "🔃",
  ":arrows_counterclockwise:": "🔄",
  ":art:": "🎨",
  ":articulated_lorry:": "🚛",
  ":artificial_satellite:": "🛰",
  ":artist:": "🧑‍🎨",
  ":aruba:": "🇦‍🇼",
  ":ascension_island:": "🇦‍🇨",
  ":asterisk:": "*‍⃣",
  ":astonished:": "😲",
  ":astronaut:": "🧑‍🚀",
  ":athletic_shoe:": "👟",
  ":atm:": "🏧",
  ":atom_symbol:": "⚛",
  ":australia:": "🇦‍🇺",
  ":austria:": "🇦‍🇹",
  ":auto_rickshaw:": "🛺",
  ":avocado:": "🥑",
  ":axe:": "🪓",
  ":azerbaijan:": "🇦‍🇿",
  ":b:": "🅱",
  ":baby:": "👶",
  ":baby_bottle:": "🍼",
  ":baby_chick:": "🐤",
  ":baby_symbol:": "🚼",
  ":back:": "🔙",
  ":bacon:": "🥓",
  ":badger:": "🦡",
  ":badminton:": "🏸",
  ":bagel:": "🥯",
  ":baggage_claim:": "🛄",
  ":baguette_bread:": "🥖",
  ":bahamas:": "🇧‍🇸",
  ":bahrain:": "🇧‍🇭",
  ":balance_scale:": "⚖",
  ":bald_man:": "👨‍🦲",
  ":bald_woman:": "👩‍🦲",
  ":ballet_shoes:": "🩰",
  ":balloon:": "🎈",
  ":ballot_box:": "🗳",
  ":ballot_box_with_check:": "☑",
  ":bamboo:": "🎍",
  ":banana:": "🍌",
  ":bangbang:": "‼",
  ":bangladesh:": "🇧‍🇩",
  ":banjo:": "🪕",
  ":bank:": "🏦",
  ":bar_chart:": "📊",
  ":barbados:": "🇧‍🇧",
  ":barber:": "💈",
  ":baseball:": "⚾",
  ":basket:": "🧺",
  ":basketball:": "🏀",
  ":basketball_man:": "⛹‍♂",
  ":basketball_woman:": "⛹‍♀",
  ":bat:": "🦇",
  ":bath:": "🛀",
  ":bathtub:": "🛁",
  ":battery:": "🔋",
  ":beach_umbrella:": "🏖",
  ":bear:": "🐻",
  ":bearded_person:": "🧔",
  ":beaver:": "🦫",
  ":bed:": "🛏",
  ":bee:": "🐝",
  ":beer:": "🍺",
  ":beers:": "🍻",
  ":beetle:": "🪲",
  ":beginner:": "🔰",
  ":belarus:": "🇧‍🇾",
  ":belgium:": "🇧‍🇪",
  ":belize:": "🇧‍🇿",
  ":bell:": "🔔",
  ":bell_pepper:": "🫑",
  ":bellhop_bell:": "🛎",
  ":benin:": "🇧‍🇯",
  ":bento:": "🍱",
  ":bermuda:": "🇧‍🇲",
  ":beverage_box:": "🧃",
  ":bhutan:": "🇧‍🇹",
  ":bicyclist:": "🚴",
  ":bike:": "🚲",
  ":biking_man:": "🚴‍♂",
  ":biking_woman:": "🚴‍♀",
  ":bikini:": "👙",
  ":billed_cap:": "🧢",
  ":biohazard:": "☣",
  ":bird:": "🐦",
  ":birthday:": "🎂",
  ":bison:": "🦬",
  ":black_cat:": "🐈‍⬛",
  ":black_circle:": "⚫",
  ":black_flag:": "🏴",
  ":black_heart:": "🖤",
  ":black_joker:": "🃏",
  ":black_large_square:": "⬛",
  ":black_medium_small_square:": "◾",
  ":black_medium_square:": "◼",
  ":black_nib:": "✒",
  ":black_small_square:": "▪",
  ":black_square_button:": "🔲",
  ":blond_haired_man:": "👱‍♂",
  ":blond_haired_person:": "👱",
  ":blond_haired_woman:": "👱‍♀",
  ":blonde_woman:": "👱‍♀",
  ":blossom:": "🌼",
  ":blowfish:": "🐡",
  ":blue_book:": "📘",
  ":blue_car:": "🚙",
  ":blue_heart:": "💙",
  ":blue_square:": "🟦",
  ":blueberries:": "🫐",
  ":blush:": "😊",
  ":boar:": "🐗",
  ":boat:": "⛵",
  ":bolivia:": "🇧‍🇴",
  ":bomb:": "💣",
  ":bone:": "🦴",
  ":book:": "📖",
  ":bookmark:": "🔖",
  ":bookmark_tabs:": "📑",
  ":books:": "📚",
  ":boom:": "💥",
  ":boomerang:": "🪃",
  ":boot:": "👢",
  ":bosnia_herzegovina:": "🇧‍🇦",
  ":botswana:": "🇧‍🇼",
  ":bouncing_ball_man:": "⛹‍♂",
  ":bouncing_ball_person:": "⛹",
  ":bouncing_ball_woman:": "⛹‍♀",
  ":bouquet:": "💐",
  ":bouvet_island:": "🇧‍🇻",
  ":bow:": "🙇",
  ":bow_and_arrow:": "🏹",
  ":bowing_man:": "🙇‍♂",
  ":bowing_woman:": "🙇‍♀",
  ":bowl_with_spoon:": "🥣",
  ":bowling:": "🎳",
  ":boxing_glove:": "🥊",
  ":boy:": "👦",
  ":brain:": "🧠",
  ":brazil:": "🇧‍🇷",
  ":bread:": "🍞",
  ":breast_feeding:": "🤱",
  ":bricks:": "🧱",
  ":bride_with_veil:": "👰‍♀",
  ":bridge_at_night:": "🌉",
  ":briefcase:": "💼",
  ":british_indian_ocean_territory:": "🇮‍🇴",
  ":british_virgin_islands:": "🇻‍🇬",
  ":broccoli:": "🥦",
  ":broken_heart:": "💔",
  ":broom:": "🧹",
  ":brown_circle:": "🟤",
  ":brown_heart:": "🤎",
  ":brown_square:": "🟫",
  ":brunei:": "🇧‍🇳",
  ":bubble_tea:": "🧋",
  ":bucket:": "🪣",
  ":bug:": "🐛",
  ":building_construction:": "🏗",
  ":bulb:": "💡",
  ":bulgaria:": "🇧‍🇬",
  ":bullettrain_front:": "🚅",
  ":bullettrain_side:": "🚄",
  ":burkina_faso:": "🇧‍🇫",
  ":burrito:": "🌯",
  ":burundi:": "🇧‍🇮",
  ":bus:": "🚌",
  ":business_suit_levitating:": "🕴",
  ":busstop:": "🚏",
  ":bust_in_silhouette:": "👤",
  ":busts_in_silhouette:": "👥",
  ":butter:": "🧈",
  ":butterfly:": "🦋",
  ":cactus:": "🌵",
  ":cake:": "🍰",
  ":calendar:": "📆",
  ":call_me_hand:": "🤙",
  ":calling:": "📲",
  ":cambodia:": "🇰‍🇭",
  ":camel:": "🐫",
  ":camera:": "📷",
  ":camera_flash:": "📸",
  ":cameroon:": "🇨‍🇲",
  ":camping:": "🏕",
  ":canada:": "🇨‍🇦",
  ":canary_islands:": "🇮‍🇨",
  ":cancer:": "♋",
  ":candle:": "🕯",
  ":candy:": "🍬",
  ":canned_food:": "🥫",
  ":canoe:": "🛶",
  ":cape_verde:": "🇨‍🇻",
  ":capital_abcd:": "🔠",
  ":capricorn:": "♑",
  ":car:": "🚗",
  ":card_file_box:": "🗃",
  ":card_index:": "📇",
  ":card_index_dividers:": "🗂",
  ":caribbean_netherlands:": "🇧‍🇶",
  ":carousel_horse:": "🎠",
  ":carpentry_saw:": "🪚",
  ":carrot:": "🥕",
  ":cartwheeling:": "🤸",
  ":cat:": "🐱",
  ":cat2:": "🐈",
  ":cayman_islands:": "🇰‍🇾",
  ":cd:": "💿",
  ":central_african_republic:": "🇨‍🇫",
  ":ceuta_melilla:": "🇪‍🇦",
  ":chad:": "🇹‍🇩",
  ":chains:": "⛓",
  ":chair:": "🪑",
  ":champagne:": "🍾",
  ":chart:": "💹",
  ":chart_with_downwards_trend:": "📉",
  ":chart_with_upwards_trend:": "📈",
  ":checkered_flag:": "🏁",
  ":cheese:": "🧀",
  ":cherries:": "🍒",
  ":cherry_blossom:": "🌸",
  ":chess_pawn:": "♟",
  ":chestnut:": "🌰",
  ":chicken:": "🐔",
  ":child:": "🧒",
  ":children_crossing:": "🚸",
  ":chile:": "🇨‍🇱",
  ":chipmunk:": "🐿",
  ":chocolate_bar:": "🍫",
  ":chopsticks:": "🥢",
  ":christmas_island:": "🇨‍🇽",
  ":christmas_tree:": "🎄",
  ":church:": "⛪",
  ":cinema:": "🎦",
  ":circus_tent:": "🎪",
  ":city_sunrise:": "🌇",
  ":city_sunset:": "🌆",
  ":cityscape:": "🏙",
  ":cl:": "🆑",
  ":clamp:": "🗜",
  ":clap:": "👏",
  ":clapper:": "🎬",
  ":classical_building:": "🏛",
  ":climbing:": "🧗",
  ":climbing_man:": "🧗‍♂",
  ":climbing_woman:": "🧗‍♀",
  ":clinking_glasses:": "🥂",
  ":clipboard:": "📋",
  ":clipperton_island:": "🇨‍🇵",
  ":clock1:": "🕐",
  ":clock10:": "🕙",
  ":clock1030:": "🕥",
  ":clock11:": "🕚",
  ":clock1130:": "🕦",
  ":clock12:": "🕛",
  ":clock1230:": "🕧",
  ":clock130:": "🕜",
  ":clock2:": "🕑",
  ":clock230:": "🕝",
  ":clock3:": "🕒",
  ":clock330:": "🕞",
  ":clock4:": "🕓",
  ":clock430:": "🕟",
  ":clock5:": "🕔",
  ":clock530:": "🕠",
  ":clock6:": "🕕",
  ":clock630:": "🕡",
  ":clock7:": "🕖",
  ":clock730:": "🕢",
  ":clock8:": "🕗",
  ":clock830:": "🕣",
  ":clock9:": "🕘",
  ":clock930:": "🕤",
  ":closed_book:": "📕",
  ":closed_lock_with_key:": "🔐",
  ":closed_umbrella:": "🌂",
  ":cloud:": "☁",
  ":cloud_with_lightning:": "🌩",
  ":cloud_with_lightning_and_rain:": "⛈",
  ":cloud_with_rain:": "🌧",
  ":cloud_with_snow:": "🌨",
  ":clown_face:": "🤡",
  ":clubs:": "♣",
  ":cn:": "🇨‍🇳",
  ":coat:": "🧥",
  ":cockroach:": "🪳",
  ":cocktail:": "🍸",
  ":coconut:": "🥥",
  ":cocos_islands:": "🇨‍🇨",
  ":coffee:": "☕",
  ":coffin:": "⚰",
  ":coin:": "🪙",
  ":cold_face:": "🥶",
  ":cold_sweat:": "😰",
  ":collision:": "💥",
  ":colombia:": "🇨‍🇴",
  ":comet:": "☄",
  ":comoros:": "🇰‍🇲",
  ":compass:": "🧭",
  ":computer:": "💻",
  ":computer_mouse:": "🖱",
  ":confetti_ball:": "🎊",
  ":confounded:": "😖",
  ":confused:": "😕",
  ":congo_brazzaville:": "🇨‍🇬",
  ":congo_kinshasa:": "🇨‍🇩",
  ":congratulations:": "㊗",
  ":construction:": "🚧",
  ":construction_worker:": "👷",
  ":construction_worker_man:": "👷‍♂",
  ":construction_worker_woman:": "👷‍♀",
  ":control_knobs:": "🎛",
  ":convenience_store:": "🏪",
  ":cook:": "🧑‍🍳",
  ":cook_islands:": "🇨‍🇰",
  ":cookie:": "🍪",
  ":cool:": "🆒",
  ":cop:": "👮",
  ":copyright:": "©",
  ":corn:": "🌽",
  ":costa_rica:": "🇨‍🇷",
  ":cote_divoire:": "🇨‍🇮",
  ":couch_and_lamp:": "🛋",
  ":couple:": "👫",
  ":couple_with_heart:": "💑",
  ":couple_with_heart_man_man:": "👨‍❤‍👨",
  ":couple_with_heart_woman_man:": "👩‍❤‍👨",
  ":couple_with_heart_woman_woman:": "👩‍❤‍👩",
  ":couplekiss:": "💏",
  ":couplekiss_man_man:": "👨‍❤‍💋‍👨",
  ":couplekiss_man_woman:": "👩‍❤‍💋‍👨",
  ":couplekiss_woman_woman:": "👩‍❤‍💋‍👩",
  ":cow:": "🐮",
  ":cow2:": "🐄",
  ":cowboy_hat_face:": "🤠",
  ":crab:": "🦀",
  ":crayon:": "🖍",
  ":credit_card:": "💳",
  ":crescent_moon:": "🌙",
  ":cricket:": "🦗",
  ":cricket_game:": "🏏",
  ":croatia:": "🇭‍🇷",
  ":crocodile:": "🐊",
  ":croissant:": "🥐",
  ":crossed_fingers:": "🤞",
  ":crossed_flags:": "🎌",
  ":crossed_swords:": "⚔",
  ":crown:": "👑",
  ":cry:": "😢",
  ":crying_cat_face:": "😿",
  ":crystal_ball:": "🔮",
  ":cuba:": "🇨‍🇺",
  ":cucumber:": "🥒",
  ":cup_with_straw:": "🥤",
  ":cupcake:": "🧁",
  ":cupid:": "💘",
  ":curacao:": "🇨‍🇼",
  ":curling_stone:": "🥌",
  ":curly_haired_man:": "👨‍🦱",
  ":curly_haired_woman:": "👩‍🦱",
  ":curly_loop:": "➰",
  ":currency_exchange:": "💱",
  ":curry:": "🍛",
  ":cursing_face:": "🤬",
  ":custard:": "🍮",
  ":customs:": "🛃",
  ":cut_of_meat:": "🥩",
  ":cyclone:": "🌀",
  ":cyprus:": "🇨‍🇾",
  ":czech_republic:": "🇨‍🇿",
  ":dagger:": "🗡",
  ":dancer:": "💃",
  ":dancers:": "👯",
  ":dancing_men:": "👯‍♂",
  ":dancing_women:": "👯‍♀",
  ":dango:": "🍡",
  ":dark_sunglasses:": "🕶",
  ":dart:": "🎯",
  ":dash:": "💨",
  ":date:": "📅",
  ":de:": "🇩‍🇪",
  ":deaf_man:": "🧏‍♂",
  ":deaf_person:": "🧏",
  ":deaf_woman:": "🧏‍♀",
  ":deciduous_tree:": "🌳",
  ":deer:": "🦌",
  ":denmark:": "🇩‍🇰",
  ":department_store:": "🏬",
  ":derelict_house:": "🏚",
  ":desert:": "🏜",
  ":desert_island:": "🏝",
  ":desktop_computer:": "🖥",
  ":detective:": "🕵",
  ":diamond_shape_with_a_dot_inside:": "💠",
  ":diamonds:": "♦",
  ":diego_garcia:": "🇩‍🇬",
  ":disappointed:": "😞",
  ":disappointed_relieved:": "😥",
  ":disguised_face:": "🥸",
  ":diving_mask:": "🤿",
  ":diya_lamp:": "🪔",
  ":dizzy:": "💫",
  ":dizzy_face:": "😵",
  ":djibouti:": "🇩‍🇯",
  ":dna:": "🧬",
  ":do_not_litter:": "🚯",
  ":dodo:": "🦤",
  ":dog:": "🐶",
  ":dog2:": "🐕",
  ":dollar:": "💵",
  ":dolls:": "🎎",
  ":dolphin:": "🐬",
  ":dominica:": "🇩‍🇲",
  ":dominican_republic:": "🇩‍🇴",
  ":door:": "🚪",
  ":doughnut:": "🍩",
  ":dove:": "🕊",
  ":dragon:": "🐉",
  ":dragon_face:": "🐲",
  ":dress:": "👗",
  ":dromedary_camel:": "🐪",
  ":drooling_face:": "🤤",
  ":drop_of_blood:": "🩸",
  ":droplet:": "💧",
  ":drum:": "🥁",
  ":duck:": "🦆",
  ":dumpling:": "🥟",
  ":dvd:": "📀",
  ":e-mail:": "📧",
  ":eagle:": "🦅",
  ":ear:": "👂",
  ":ear_of_rice:": "🌾",
  ":ear_with_hearing_aid:": "🦻",
  ":earth_africa:": "🌍",
  ":earth_americas:": "🌎",
  ":earth_asia:": "🌏",
  ":ecuador:": "🇪‍🇨",
  ":egg:": "🥚",
  ":eggplant:": "🍆",
  ":egypt:": "🇪‍🇬",
  ":eight:": "8‍⃣",
  ":eight_pointed_black_star:": "✴",
  ":eight_spoked_asterisk:": "✳",
  ":eject_button:": "⏏",
  ":el_salvador:": "🇸‍🇻",
  ":electric_plug:": "🔌",
  ":elephant:": "🐘",
  ":elevator:": "🛗",
  ":elf:": "🧝",
  ":elf_man:": "🧝‍♂",
  ":elf_woman:": "🧝‍♀",
  ":email:": "📧",
  ":end:": "🔚",
  ":england:": "🏴‍󠁧‍󠁢‍󠁥‍󠁮‍󠁧‍󠁿",
  ":envelope:": "✉",
  ":envelope_with_arrow:": "📩",
  ":equatorial_guinea:": "🇬‍🇶",
  ":eritrea:": "🇪‍🇷",
  ":es:": "🇪‍🇸",
  ":estonia:": "🇪‍🇪",
  ":ethiopia:": "🇪‍🇹",
  ":eu:": "🇪‍🇺",
  ":euro:": "💶",
  ":european_castle:": "🏰",
  ":european_post_office:": "🏤",
  ":european_union:": "🇪‍🇺",
  ":evergreen_tree:": "🌲",
  ":exclamation:": "❗",
  ":exploding_head:": "🤯",
  ":expressionless:": "😑",
  ":eye:": "👁",
  ":eye_speech_bubble:": "👁‍🗨",
  ":eyeglasses:": "👓",
  ":eyes:": "👀",
  ":face_exhaling:": "😮‍💨",
  ":face_in_clouds:": "😶‍🌫",
  ":face_with_head_bandage:": "🤕",
  ":face_with_spiral_eyes:": "😵‍💫",
  ":face_with_thermometer:": "🤒",
  ":facepalm:": "🤦",
  ":facepunch:": "👊",
  ":factory:": "🏭",
  ":factory_worker:": "🧑‍🏭",
  ":fairy:": "🧚",
  ":fairy_man:": "🧚‍♂",
  ":fairy_woman:": "🧚‍♀",
  ":falafel:": "🧆",
  ":falkland_islands:": "🇫‍🇰",
  ":fallen_leaf:": "🍂",
  ":family:": "👪",
  ":family_man_boy:": "👨‍👦",
  ":family_man_boy_boy:": "👨‍👦‍👦",
  ":family_man_girl:": "👨‍👧",
  ":family_man_girl_boy:": "👨‍👧‍👦",
  ":family_man_girl_girl:": "👨‍👧‍👧",
  ":family_man_man_boy:": "👨‍👨‍👦",
  ":family_man_man_boy_boy:": "👨‍👨‍👦‍👦",
  ":family_man_man_girl:": "👨‍👨‍👧",
  ":family_man_man_girl_boy:": "👨‍👨‍👧‍👦",
  ":family_man_man_girl_girl:": "👨‍👨‍👧‍👧",
  ":family_man_woman_boy:": "👨‍👩‍👦",
  ":family_man_woman_boy_boy:": "👨‍👩‍👦‍👦",
  ":family_man_woman_girl:": "👨‍👩‍👧",
  ":family_man_woman_girl_boy:": "👨‍👩‍👧‍👦",
  ":family_man_woman_girl_girl:": "👨‍👩‍👧‍👧",
  ":family_woman_boy:": "👩‍👦",
  ":family_woman_boy_boy:": "👩‍👦‍👦",
  ":family_woman_girl:": "👩‍👧",
  ":family_woman_girl_boy:": "👩‍👧‍👦",
  ":family_woman_girl_girl:": "👩‍👧‍👧",
  ":family_woman_woman_boy:": "👩‍👩‍👦",
  ":family_woman_woman_boy_boy:": "👩‍👩‍👦‍👦",
  ":family_woman_woman_girl:": "👩‍👩‍👧",
  ":family_woman_woman_girl_boy:": "👩‍👩‍👧‍👦",
  ":family_woman_woman_girl_girl:": "👩‍👩‍👧‍👧",
  ":farmer:": "🧑‍🌾",
  ":faroe_islands:": "🇫‍🇴",
  ":fast_forward:": "⏩",
  ":fax:": "📠",
  ":fearful:": "😨",
  ":feather:": "🪶",
  ":feet:": "🐾",
  ":female_detective:": "🕵‍♀",
  ":female_sign:": "♀",
  ":ferris_wheel:": "🎡",
  ":ferry:": "⛴",
  ":field_hockey:": "🏑",
  ":fiji:": "🇫‍🇯",
  ":file_cabinet:": "🗄",
  ":file_folder:": "📁",
  ":film_projector:": "📽",
  ":film_strip:": "🎞",
  ":finland:": "🇫‍🇮",
  ":fire:": "🔥",
  ":fire_engine:": "🚒",
  ":fire_extinguisher:": "🧯",
  ":firecracker:": "🧨",
  ":firefighter:": "🧑‍🚒",
  ":fireworks:": "🎆",
  ":first_quarter_moon:": "🌓",
  ":first_quarter_moon_with_face:": "🌛",
  ":fish:": "🐟",
  ":fish_cake:": "🍥",
  ":fishing_pole_and_fish:": "🎣",
  ":fist:": "✊",
  ":fist_left:": "🤛",
  ":fist_oncoming:": "👊",
  ":fist_raised:": "✊",
  ":fist_right:": "🤜",
  ":five:": "5‍⃣",
  ":flags:": "🎏",
  ":flamingo:": "🦩",
  ":flashlight:": "🔦",
  ":flat_shoe:": "🥿",
  ":flatbread:": "🫓",
  ":fleur_de_lis:": "⚜",
  ":flight_arrival:": "🛬",
  ":flight_departure:": "🛫",
  ":flipper:": "🐬",
  ":floppy_disk:": "💾",
  ":flower_playing_cards:": "🎴",
  ":flushed:": "😳",
  ":fly:": "🪰",
  ":flying_disc:": "🥏",
  ":flying_saucer:": "🛸",
  ":fog:": "🌫",
  ":foggy:": "🌁",
  ":fondue:": "🫕",
  ":foot:": "🦶",
  ":football:": "🏈",
  ":footprints:": "👣",
  ":fork_and_knife:": "🍴",
  ":fortune_cookie:": "🥠",
  ":fountain:": "⛲",
  ":fountain_pen:": "🖋",
  ":four:": "4‍⃣",
  ":four_leaf_clover:": "🍀",
  ":fox_face:": "🦊",
  ":fr:": "🇫‍🇷",
  ":framed_picture:": "🖼",
  ":free:": "🆓",
  ":french_guiana:": "🇬‍🇫",
  ":french_polynesia:": "🇵‍🇫",
  ":french_southern_territories:": "🇹‍🇫",
  ":fried_egg:": "🍳",
  ":fried_shrimp:": "🍤",
  ":fries:": "🍟",
  ":frog:": "🐸",
  ":frowning:": "😦",
  ":frowning_face:": "☹",
  ":frowning_man:": "🙍‍♂",
  ":frowning_person:": "🙍",
  ":frowning_woman:": "🙍‍♀",
  ":fu:": "🖕",
  ":fuelpump:": "⛽",
  ":full_moon:": "🌕",
  ":full_moon_with_face:": "🌝",
  ":funeral_urn:": "⚱",
  ":gabon:": "🇬‍🇦",
  ":gambia:": "🇬‍🇲",
  ":game_die:": "🎲",
  ":garlic:": "🧄",
  ":gb:": "🇬‍🇧",
  ":gear:": "⚙",
  ":gem:": "💎",
  ":gemini:": "♊",
  ":genie:": "🧞",
  ":genie_man:": "🧞‍♂",
  ":genie_woman:": "🧞‍♀",
  ":georgia:": "🇬‍🇪",
  ":ghana:": "🇬‍🇭",
  ":ghost:": "👻",
  ":gibraltar:": "🇬‍🇮",
  ":gift:": "🎁",
  ":gift_heart:": "💝",
  ":giraffe:": "🦒",
  ":girl:": "👧",
  ":globe_with_meridians:": "🌐",
  ":gloves:": "🧤",
  ":goal_net:": "🥅",
  ":goat:": "🐐",
  ":goggles:": "🥽",
  ":golf:": "⛳",
  ":golfing:": "🏌",
  ":golfing_man:": "🏌‍♂",
  ":golfing_woman:": "🏌‍♀",
  ":gorilla:": "🦍",
  ":grapes:": "🍇",
  ":greece:": "🇬‍🇷",
  ":green_apple:": "🍏",
  ":green_book:": "📗",
  ":green_circle:": "🟢",
  ":green_heart:": "💚",
  ":green_salad:": "🥗",
  ":green_square:": "🟩",
  ":greenland:": "🇬‍🇱",
  ":grenada:": "🇬‍🇩",
  ":grey_exclamation:": "❕",
  ":grey_question:": "❔",
  ":grimacing:": "😬",
  ":grin:": "😁",
  ":grinning:": "😀",
  ":guadeloupe:": "🇬‍🇵",
  ":guam:": "🇬‍🇺",
  ":guard:": "💂",
  ":guardsman:": "💂‍♂",
  ":guardswoman:": "💂‍♀",
  ":guatemala:": "🇬‍🇹",
  ":guernsey:": "🇬‍🇬",
  ":guide_dog:": "🦮",
  ":guinea:": "🇬‍🇳",
  ":guinea_bissau:": "🇬‍🇼",
  ":guitar:": "🎸",
  ":gun:": "🔫",
  ":guyana:": "🇬‍🇾",
  ":haircut:": "💇",
  ":haircut_man:": "💇‍♂",
  ":haircut_woman:": "💇‍♀",
  ":haiti:": "🇭‍🇹",
  ":hamburger:": "🍔",
  ":hammer:": "🔨",
  ":hammer_and_pick:": "⚒",
  ":hammer_and_wrench:": "🛠",
  ":hamster:": "🐹",
  ":hand:": "✋",
  ":hand_over_mouth:": "🤭",
  ":handbag:": "👜",
  ":handball_person:": "🤾",
  ":handshake:": "🤝",
  ":hankey:": "💩",
  ":hash:": "#‍⃣",
  ":hatched_chick:": "🐥",
  ":hatching_chick:": "🐣",
  ":headphones:": "🎧",
  ":headstone:": "🪦",
  ":health_worker:": "🧑‍⚕",
  ":hear_no_evil:": "🙉",
  ":heard_mcdonald_islands:": "🇭‍🇲",
  ":heart:": "❤️",
  ":heart_decoration:": "💟",
  ":heart_eyes:": "😍",
  ":heart_eyes_cat:": "😻",
  ":heart_on_fire:": "❤‍🔥",
  ":heartbeat:": "💓",
  ":heartpulse:": "💗",
  ":hearts:": "♥",
  ":heavy_check_mark:": "✔",
  ":heavy_division_sign:": "➗",
  ":heavy_dollar_sign:": "💲",
  ":heavy_exclamation_mark:": "❗",
  ":heavy_heart_exclamation:": "❣",
  ":heavy_minus_sign:": "➖",
  ":heavy_multiplication_x:": "✖",
  ":heavy_plus_sign:": "➕",
  ":hedgehog:": "🦔",
  ":helicopter:": "🚁",
  ":herb:": "🌿",
  ":hibiscus:": "🌺",
  ":high_brightness:": "🔆",
  ":high_heel:": "👠",
  ":hiking_boot:": "🥾",
  ":hindu_temple:": "🛕",
  ":hippopotamus:": "🦛",
  ":hocho:": "🔪",
  ":hole:": "🕳",
  ":honduras:": "🇭‍🇳",
  ":honey_pot:": "🍯",
  ":honeybee:": "🐝",
  ":hong_kong:": "🇭‍🇰",
  ":hook:": "🪝",
  ":horse:": "🐴",
  ":horse_racing:": "🏇",
  ":hospital:": "🏥",
  ":hot_face:": "🥵",
  ":hot_pepper:": "🌶",
  ":hotdog:": "🌭",
  ":hotel:": "🏨",
  ":hotsprings:": "♨",
  ":hourglass:": "⌛",
  ":hourglass_flowing_sand:": "⏳",
  ":house:": "🏠",
  ":house_with_garden:": "🏡",
  ":houses:": "🏘",
  ":hugs:": "🤗",
  ":hungary:": "🇭‍🇺",
  ":hushed:": "😯",
  ":hut:": "🛖",
  ":ice_cream:": "🍨",
  ":ice_cube:": "🧊",
  ":ice_hockey:": "🏒",
  ":ice_skate:": "⛸",
  ":icecream:": "🍦",
  ":iceland:": "🇮‍🇸",
  ":id:": "🆔",
  ":ideograph_advantage:": "🉐",
  ":imp:": "👿",
  ":inbox_tray:": "📥",
  ":incoming_envelope:": "📨",
  ":india:": "🇮‍🇳",
  ":indonesia:": "🇮‍🇩",
  ":infinity:": "♾",
  ":information_desk_person:": "💁",
  ":information_source:": "ℹ",
  ":innocent:": "😇",
  ":interrobang:": "⁉",
  ":iphone:": "📱",
  ":iran:": "🇮‍🇷",
  ":iraq:": "🇮‍🇶",
  ":ireland:": "🇮‍🇪",
  ":isle_of_man:": "🇮‍🇲",
  ":israel:": "🇮‍🇱",
  ":it:": "🇮‍🇹",
  ":izakaya_lantern:": "🏮",
  ":jack_o_lantern:": "🎃",
  ":jamaica:": "🇯‍🇲",
  ":japan:": "🗾",
  ":japanese_castle:": "🏯",
  ":japanese_goblin:": "👺",
  ":japanese_ogre:": "👹",
  ":jeans:": "👖",
  ":jersey:": "🇯‍🇪",
  ":jigsaw:": "🧩",
  ":jordan:": "🇯‍🇴",
  ":joy:": "😂",
  ":joy_cat:": "😹",
  ":joystick:": "🕹",
  ":jp:": "🇯‍🇵",
  ":judge:": "🧑‍⚖",
  ":juggling_person:": "🤹",
  ":kaaba:": "🕋",
  ":kangaroo:": "🦘",
  ":kazakhstan:": "🇰‍🇿",
  ":kenya:": "🇰‍🇪",
  ":key:": "🔑",
  ":keyboard:": "⌨",
  ":keycap_ten:": "🔟",
  ":kick_scooter:": "🛴",
  ":kimono:": "👘",
  ":kiribati:": "🇰‍🇮",
  ":kiss:": "💋",
  ":kissing:": "😗",
  ":kissing_cat:": "😽",
  ":kissing_closed_eyes:": "😚",
  ":kissing_heart:": "😘",
  ":kissing_smiling_eyes:": "😙",
  ":kite:": "🪁",
  ":kiwi_fruit:": "🥝",
  ":kneeling_man:": "🧎‍♂",
  ":kneeling_person:": "🧎",
  ":kneeling_woman:": "🧎‍♀",
  ":knife:": "🔪",
  ":knot:": "🪢",
  ":koala:": "🐨",
  ":koko:": "🈁",
  ":kosovo:": "🇽‍🇰",
  ":kr:": "🇰‍🇷",
  ":kuwait:": "🇰‍🇼",
  ":kyrgyzstan:": "🇰‍🇬",
  ":lab_coat:": "🥼",
  ":label:": "🏷",
  ":lacrosse:": "🥍",
  ":ladder:": "🪜",
  ":lady_beetle:": "🐞",
  ":lantern:": "🏮",
  ":laos:": "🇱‍🇦",
  ":large_blue_circle:": "🔵",
  ":large_blue_diamond:": "🔷",
  ":large_orange_diamond:": "🔶",
  ":last_quarter_moon:": "🌗",
  ":last_quarter_moon_with_face:": "🌜",
  ":latin_cross:": "✝",
  ":latvia:": "🇱‍🇻",
  ":laughing:": "😆",
  ":leafy_green:": "🥬",
  ":leaves:": "🍃",
  ":lebanon:": "🇱‍🇧",
  ":ledger:": "📒",
  ":left_luggage:": "🛅",
  ":left_right_arrow:": "↔",
  ":left_speech_bubble:": "🗨",
  ":leftwards_arrow_with_hook:": "↩",
  ":leg:": "🦵",
  ":lemon:": "🍋",
  ":leo:": "♌",
  ":leopard:": "🐆",
  ":lesotho:": "🇱‍🇸",
  ":level_slider:": "🎚",
  ":liberia:": "🇱‍🇷",
  ":libra:": "♎",
  ":libya:": "🇱‍🇾",
  ":liechtenstein:": "🇱‍🇮",
  ":light_rail:": "🚈",
  ":link:": "🔗",
  ":lion:": "🦁",
  ":lips:": "👄",
  ":lipstick:": "💄",
  ":lithuania:": "🇱‍🇹",
  ":lizard:": "🦎",
  ":llama:": "🦙",
  ":lobster:": "🦞",
  ":lock:": "🔒",
  ":lock_with_ink_pen:": "🔏",
  ":lollipop:": "🍭",
  ":long_drum:": "🪘",
  ":loop:": "➿",
  ":lotion_bottle:": "🧴",
  ":lotus_position:": "🧘",
  ":lotus_position_man:": "🧘‍♂",
  ":lotus_position_woman:": "🧘‍♀",
  ":loud_sound:": "🔊",
  ":loudspeaker:": "📢",
  ":love_hotel:": "🏩",
  ":love_letter:": "💌",
  ":love_you_gesture:": "🤟",
  ":low_brightness:": "🔅",
  ":luggage:": "🧳",
  ":lungs:": "🫁",
  ":luxembourg:": "🇱‍🇺",
  ":lying_face:": "🤥",
  ":m:": "Ⓜ",
  ":macau:": "🇲‍🇴",
  ":macedonia:": "🇲‍🇰",
  ":madagascar:": "🇲‍🇬",
  ":mag:": "🔍",
  ":mag_right:": "🔎",
  ":mage:": "🧙",
  ":mage_man:": "🧙‍♂",
  ":mage_woman:": "🧙‍♀",
  ":magic_wand:": "🪄",
  ":magnet:": "🧲",
  ":mahjong:": "🀄",
  ":mailbox:": "📫",
  ":mailbox_closed:": "📪",
  ":mailbox_with_mail:": "📬",
  ":mailbox_with_no_mail:": "📭",
  ":malawi:": "🇲‍🇼",
  ":malaysia:": "🇲‍🇾",
  ":maldives:": "🇲‍🇻",
  ":male_detective:": "🕵‍♂",
  ":male_sign:": "♂",
  ":mali:": "🇲‍🇱",
  ":malta:": "🇲‍🇹",
  ":mammoth:": "🦣",
  ":man:": "👨",
  ":man_artist:": "👨‍🎨",
  ":man_astronaut:": "👨‍🚀",
  ":man_beard:": "🧔‍♂",
  ":man_cartwheeling:": "🤸‍♂",
  ":man_cook:": "👨‍🍳",
  ":man_dancing:": "🕺",
  ":man_facepalming:": "🤦‍♂",
  ":man_factory_worker:": "👨‍🏭",
  ":man_farmer:": "👨‍🌾",
  ":man_feeding_baby:": "👨‍🍼",
  ":man_firefighter:": "👨‍🚒",
  ":man_health_worker:": "👨‍⚕",
  ":man_in_manual_wheelchair:": "👨‍🦽",
  ":man_in_motorized_wheelchair:": "👨‍🦼",
  ":man_in_tuxedo:": "🤵‍♂",
  ":man_judge:": "👨‍⚖",
  ":man_juggling:": "🤹‍♂",
  ":man_mechanic:": "👨‍🔧",
  ":man_office_worker:": "👨‍💼",
  ":man_pilot:": "👨‍✈",
  ":man_playing_handball:": "🤾‍♂",
  ":man_playing_water_polo:": "🤽‍♂",
  ":man_scientist:": "👨‍🔬",
  ":man_shrugging:": "🤷‍♂",
  ":man_singer:": "👨‍🎤",
  ":man_student:": "👨‍🎓",
  ":man_teacher:": "👨‍🏫",
  ":man_technologist:": "👨‍💻",
  ":man_with_gua_pi_mao:": "👲",
  ":man_with_probing_cane:": "👨‍🦯",
  ":man_with_turban:": "👳‍♂",
  ":man_with_veil:": "👰‍♂",
  ":mandarin:": "🍊",
  ":mango:": "🥭",
  ":mans_shoe:": "👞",
  ":mantelpiece_clock:": "🕰",
  ":manual_wheelchair:": "🦽",
  ":maple_leaf:": "🍁",
  ":marshall_islands:": "🇲‍🇭",
  ":martial_arts_uniform:": "🥋",
  ":martinique:": "🇲‍🇶",
  ":mask:": "😷",
  ":massage:": "💆",
  ":massage_man:": "💆‍♂",
  ":massage_woman:": "💆‍♀",
  ":mate:": "🧉",
  ":mauritania:": "🇲‍🇷",
  ":mauritius:": "🇲‍🇺",
  ":mayotte:": "🇾‍🇹",
  ":meat_on_bone:": "🍖",
  ":mechanic:": "🧑‍🔧",
  ":mechanical_arm:": "🦾",
  ":mechanical_leg:": "🦿",
  ":medal_military:": "🎖",
  ":medal_sports:": "🏅",
  ":medical_symbol:": "⚕",
  ":mega:": "📣",
  ":melon:": "🍈",
  ":memo:": "📝",
  ":men_wrestling:": "🤼‍♂",
  ":mending_heart:": "❤‍🩹",
  ":menorah:": "🕎",
  ":mens:": "🚹",
  ":mermaid:": "🧜‍♀",
  ":merman:": "🧜‍♂",
  ":merperson:": "🧜",
  ":metal:": "🤘",
  ":metro:": "🚇",
  ":mexico:": "🇲‍🇽",
  ":microbe:": "🦠",
  ":micronesia:": "🇫‍🇲",
  ":microphone:": "🎤",
  ":microscope:": "🔬",
  ":middle_finger:": "🖕",
  ":military_helmet:": "🪖",
  ":milk_glass:": "🥛",
  ":milky_way:": "🌌",
  ":minibus:": "🚐",
  ":minidisc:": "💽",
  ":mirror:": "🪞",
  ":mobile_phone_off:": "📴",
  ":moldova:": "🇲‍🇩",
  ":monaco:": "🇲‍🇨",
  ":money_mouth_face:": "🤑",
  ":money_with_wings:": "💸",
  ":moneybag:": "💰",
  ":mongolia:": "🇲‍🇳",
  ":monkey:": "🐒",
  ":monkey_face:": "🐵",
  ":monocle_face:": "🧐",
  ":monorail:": "🚝",
  ":montenegro:": "🇲‍🇪",
  ":montserrat:": "🇲‍🇸",
  ":moon:": "🌔",
  ":moon_cake:": "🥮",
  ":morocco:": "🇲‍🇦",
  ":mortar_board:": "🎓",
  ":mosque:": "🕌",
  ":mosquito:": "🦟",
  ":motor_boat:": "🛥",
  ":motor_scooter:": "🛵",
  ":motorcycle:": "🏍",
  ":motorized_wheelchair:": "🦼",
  ":motorway:": "🛣",
  ":mount_fuji:": "🗻",
  ":mountain:": "⛰",
  ":mountain_bicyclist:": "🚵",
  ":mountain_biking_man:": "🚵‍♂",
  ":mountain_biking_woman:": "🚵‍♀",
  ":mountain_cableway:": "🚠",
  ":mountain_railway:": "🚞",
  ":mountain_snow:": "🏔",
  ":mouse:": "🐭",
  ":mouse2:": "🐁",
  ":mouse_trap:": "🪤",
  ":movie_camera:": "🎥",
  ":moyai:": "🗿",
  ":mozambique:": "🇲‍🇿",
  ":mrs_claus:": "🤶",
  ":muscle:": "💪",
  ":mushroom:": "🍄",
  ":musical_keyboard:": "🎹",
  ":musical_note:": "🎵",
  ":musical_score:": "🎼",
  ":mute:": "🔇",
  ":mx_claus:": "🧑‍🎄",
  ":myanmar:": "🇲‍🇲",
  ":nail_care:": "💅",
  ":name_badge:": "📛",
  ":namibia:": "🇳‍🇦",
  ":national_park:": "🏞",
  ":nauru:": "🇳‍🇷",
  ":nauseated_face:": "🤢",
  ":nazar_amulet:": "🧿",
  ":necktie:": "👔",
  ":negative_squared_cross_mark:": "❎",
  ":nepal:": "🇳‍🇵",
  ":nerd_face:": "🤓",
  ":nesting_dolls:": "🪆",
  ":netherlands:": "🇳‍🇱",
  ":neutral_face:": "😐",
  ":new:": "🆕",
  ":new_caledonia:": "🇳‍🇨",
  ":new_moon:": "🌑",
  ":new_moon_with_face:": "🌚",
  ":new_zealand:": "🇳‍🇿",
  ":newspaper:": "📰",
  ":newspaper_roll:": "🗞",
  ":next_track_button:": "⏭",
  ":ng:": "🆖",
  ":ng_man:": "🙅‍♂",
  ":ng_woman:": "🙅‍♀",
  ":nicaragua:": "🇳‍🇮",
  ":niger:": "🇳‍🇪",
  ":nigeria:": "🇳‍🇬",
  ":night_with_stars:": "🌃",
  ":nine:": "9‍⃣",
  ":ninja:": "🥷",
  ":niue:": "🇳‍🇺",
  ":no_bell:": "🔕",
  ":no_bicycles:": "🚳",
  ":no_entry:": "⛔",
  ":no_entry_sign:": "🚫",
  ":no_good:": "🙅",
  ":no_good_man:": "🙅‍♂",
  ":no_good_woman:": "🙅‍♀",
  ":no_mobile_phones:": "📵",
  ":no_mouth:": "😶",
  ":no_pedestrians:": "🚷",
  ":no_smoking:": "🚭",
  ":non-potable_water:": "🚱",
  ":norfolk_island:": "🇳‍🇫",
  ":north_korea:": "🇰‍🇵",
  ":northern_mariana_islands:": "🇲‍🇵",
  ":norway:": "🇳‍🇴",
  ":nose:": "👃",
  ":notebook:": "📓",
  ":notebook_with_decorative_cover:": "📔",
  ":notes:": "🎶",
  ":nut_and_bolt:": "🔩",
  ":o:": "⭕",
  ":o2:": "🅾",
  ":ocean:": "🌊",
  ":octopus:": "🐙",
  ":oden:": "🍢",
  ":office:": "🏢",
  ":office_worker:": "🧑‍💼",
  ":oil_drum:": "🛢",
  ":ok:": "🆗",
  ":ok_hand:": "👌",
  ":ok_man:": "🙆‍♂",
  ":ok_person:": "🙆",
  ":ok_woman:": "🙆‍♀",
  ":old_key:": "🗝",
  ":older_adult:": "🧓",
  ":older_man:": "👴",
  ":older_woman:": "👵",
  ":olive:": "🫒",
  ":om:": "🕉",
  ":oman:": "🇴‍🇲",
  ":on:": "🔛",
  ":oncoming_automobile:": "🚘",
  ":oncoming_bus:": "🚍",
  ":oncoming_police_car:": "🚔",
  ":oncoming_taxi:": "🚖",
  ":one:": "1‍⃣",
  ":one_piece_swimsuit:": "🩱",
  ":onion:": "🧅",
  ":open_book:": "📖",
  ":open_file_folder:": "📂",
  ":open_hands:": "👐",
  ":open_mouth:": "😮",
  ":open_umbrella:": "☂",
  ":ophiuchus:": "⛎",
  ":orange:": "🍊",
  ":orange_book:": "📙",
  ":orange_circle:": "🟠",
  ":orange_heart:": "🧡",
  ":orange_square:": "🟧",
  ":orangutan:": "🦧",
  ":orthodox_cross:": "☦",
  ":otter:": "🦦",
  ":outbox_tray:": "📤",
  ":owl:": "🦉",
  ":ox:": "🐂",
  ":oyster:": "🦪",
  ":package:": "📦",
  ":page_facing_up:": "📄",
  ":page_with_curl:": "📃",
  ":pager:": "📟",
  ":paintbrush:": "🖌",
  ":pakistan:": "🇵‍🇰",
  ":palau:": "🇵‍🇼",
  ":palestinian_territories:": "🇵‍🇸",
  ":palm_tree:": "🌴",
  ":palms_up_together:": "🤲",
  ":panama:": "🇵‍🇦",
  ":pancakes:": "🥞",
  ":panda_face:": "🐼",
  ":paperclip:": "📎",
  ":paperclips:": "🖇",
  ":papua_new_guinea:": "🇵‍🇬",
  ":parachute:": "🪂",
  ":paraguay:": "🇵‍🇾",
  ":parasol_on_ground:": "⛱",
  ":parking:": "🅿",
  ":parrot:": "🦜",
  ":part_alternation_mark:": "〽",
  ":partly_sunny:": "⛅",
  ":partying_face:": "🥳",
  ":passenger_ship:": "🛳",
  ":passport_control:": "🛂",
  ":pause_button:": "⏸",
  ":paw_prints:": "🐾",
  ":peace_symbol:": "☮",
  ":peach:": "🍑",
  ":peacock:": "🦚",
  ":peanuts:": "🥜",
  ":pear:": "🍐",
  ":pen:": "🖊",
  ":pencil:": "📝",
  ":pencil2:": "✏",
  ":penguin:": "🐧",
  ":pensive:": "😔",
  ":people_holding_hands:": "🧑‍🤝‍🧑",
  ":people_hugging:": "🫂",
  ":performing_arts:": "🎭",
  ":persevere:": "😣",
  ":person_bald:": "🧑‍🦲",
  ":person_curly_hair:": "🧑‍🦱",
  ":person_feeding_baby:": "🧑‍🍼",
  ":person_fencing:": "🤺",
  ":person_in_manual_wheelchair:": "🧑‍🦽",
  ":person_in_motorized_wheelchair:": "🧑‍🦼",
  ":person_in_tuxedo:": "🤵",
  ":person_red_hair:": "🧑‍🦰",
  ":person_white_hair:": "🧑‍🦳",
  ":person_with_probing_cane:": "🧑‍🦯",
  ":person_with_turban:": "👳",
  ":person_with_veil:": "👰",
  ":peru:": "🇵‍🇪",
  ":petri_dish:": "🧫",
  ":philippines:": "🇵‍🇭",
  ":phone:": "☎",
  ":pick:": "⛏",
  ":pickup_truck:": "🛻",
  ":pie:": "🥧",
  ":pig:": "🐷",
  ":pig2:": "🐖",
  ":pig_nose:": "🐽",
  ":pill:": "💊",
  ":pilot:": "🧑‍✈",
  ":pinata:": "🪅",
  ":pinched_fingers:": "🤌",
  ":pinching_hand:": "🤏",
  ":pineapple:": "🍍",
  ":ping_pong:": "🏓",
  ":pirate_flag:": "🏴‍☠",
  ":pisces:": "♓",
  ":pitcairn_islands:": "🇵‍🇳",
  ":pizza:": "🍕",
  ":placard:": "🪧",
  ":place_of_worship:": "🛐",
  ":plate_with_cutlery:": "🍽",
  ":play_or_pause_button:": "⏯",
  ":pleading_face:": "🥺",
  ":plunger:": "🪠",
  ":point_down:": "👇",
  ":point_left:": "👈",
  ":point_right:": "👉",
  ":point_up:": "☝",
  ":point_up_2:": "👆",
  ":poland:": "🇵‍🇱",
  ":polar_bear:": "🐻‍❄",
  ":police_car:": "🚓",
  ":police_officer:": "👮",
  ":policeman:": "👮‍♂",
  ":policewoman:": "👮‍♀",
  ":poodle:": "🐩",
  ":poop:": "💩",
  ":popcorn:": "🍿",
  ":portugal:": "🇵‍🇹",
  ":post_office:": "🏣",
  ":postal_horn:": "📯",
  ":postbox:": "📮",
  ":potable_water:": "🚰",
  ":potato:": "🥔",
  ":potted_plant:": "🪴",
  ":pouch:": "👝",
  ":poultry_leg:": "🍗",
  ":pound:": "💷",
  ":pout:": "😡",
  ":pouting_cat:": "😾",
  ":pouting_face:": "🙎",
  ":pouting_man:": "🙎‍♂",
  ":pouting_woman:": "🙎‍♀",
  ":pray:": "🙏",
  ":prayer_beads:": "📿",
  ":pregnant_woman:": "🤰",
  ":pretzel:": "🥨",
  ":previous_track_button:": "⏮",
  ":prince:": "🤴",
  ":princess:": "👸",
  ":printer:": "🖨",
  ":probing_cane:": "🦯",
  ":puerto_rico:": "🇵‍🇷",
  ":punch:": "👊",
  ":purple_circle:": "🟣",
  ":purple_heart:": "💜",
  ":purple_square:": "🟪",
  ":purse:": "👛",
  ":pushpin:": "📌",
  ":put_litter_in_its_place:": "🚮",
  ":qatar:": "🇶‍🇦",
  ":question:": "❓",
  ":rabbit:": "🐰",
  ":rabbit2:": "🐇",
  ":raccoon:": "🦝",
  ":racehorse:": "🐎",
  ":racing_car:": "🏎",
  ":radio:": "📻",
  ":radio_button:": "🔘",
  ":radioactive:": "☢",
  ":rage:": "😡",
  ":railway_car:": "🚃",
  ":railway_track:": "🛤",
  ":rainbow:": "🌈",
  ":rainbow_flag:": "🏳‍🌈",
  ":raised_back_of_hand:": "🤚",
  ":raised_eyebrow:": "🤨",
  ":raised_hand:": "✋",
  ":raised_hand_with_fingers_splayed:": "🖐",
  ":raised_hands:": "🙌",
  ":raising_hand:": "🙋",
  ":raising_hand_man:": "🙋‍♂",
  ":raising_hand_woman:": "🙋‍♀",
  ":ram:": "🐏",
  ":ramen:": "🍜",
  ":rat:": "🐀",
  ":razor:": "🪒",
  ":receipt:": "🧾",
  ":record_button:": "⏺",
  ":recycle:": "♻",
  ":red_car:": "🚗",
  ":red_circle:": "🔴",
  ":red_envelope:": "🧧",
  ":red_haired_man:": "👨‍🦰",
  ":red_haired_woman:": "👩‍🦰",
  ":red_square:": "🟥",
  ":registered:": "®",
  ":relaxed:": "☺",
  ":relieved:": "😌",
  ":reminder_ribbon:": "🎗",
  ":repeat:": "🔁",
  ":repeat_one:": "🔂",
  ":rescue_worker_helmet:": "⛑",
  ":restroom:": "🚻",
  ":reunion:": "🇷‍🇪",
  ":revolving_hearts:": "💞",
  ":rewind:": "⏪",
  ":rhinoceros:": "🦏",
  ":ribbon:": "🎀",
  ":rice:": "🍚",
  ":rice_ball:": "🍙",
  ":rice_cracker:": "🍘",
  ":rice_scene:": "🎑",
  ":right_anger_bubble:": "🗯",
  ":ring:": "💍",
  ":ringed_planet:": "🪐",
  ":robot:": "🤖",
  ":rock:": "🪨",
  ":rocket:": "🚀",
  ":rofl:": "🤣",
  ":roll_eyes:": "🙄",
  ":roll_of_paper:": "🧻",
  ":roller_coaster:": "🎢",
  ":roller_skate:": "🛼",
  ":romania:": "🇷‍🇴",
  ":rooster:": "🐓",
  ":rose:": "🌹",
  ":rosette:": "🏵",
  ":rotating_light:": "🚨",
  ":round_pushpin:": "📍",
  ":rowboat:": "🚣",
  ":rowing_man:": "🚣‍♂",
  ":rowing_woman:": "🚣‍♀",
  ":ru:": "🇷‍🇺",
  ":rugby_football:": "🏉",
  ":runner:": "🏃",
  ":running:": "🏃",
  ":running_man:": "🏃‍♂",
  ":running_shirt_with_sash:": "🎽",
  ":running_woman:": "🏃‍♀",
  ":rwanda:": "🇷‍🇼",
  ":sa:": "🈂",
  ":safety_pin:": "🧷",
  ":safety_vest:": "🦺",
  ":sagittarius:": "♐",
  ":sailboat:": "⛵",
  ":sake:": "🍶",
  ":salt:": "🧂",
  ":samoa:": "🇼‍🇸",
  ":san_marino:": "🇸‍🇲",
  ":sandal:": "👡",
  ":sandwich:": "🥪",
  ":santa:": "🎅",
  ":sao_tome_principe:": "🇸‍🇹",
  ":sari:": "🥻",
  ":sassy_man:": "💁‍♂",
  ":sassy_woman:": "💁‍♀",
  ":satellite:": "📡",
  ":satisfied:": "😆",
  ":saudi_arabia:": "🇸‍🇦",
  ":sauna_man:": "🧖‍♂",
  ":sauna_person:": "🧖",
  ":sauna_woman:": "🧖‍♀",
  ":sauropod:": "🦕",
  ":saxophone:": "🎷",
  ":scarf:": "🧣",
  ":school:": "🏫",
  ":school_satchel:": "🎒",
  ":scientist:": "🧑‍🔬",
  ":scissors:": "✂",
  ":scorpion:": "🦂",
  ":scorpius:": "♏",
  ":scotland:": "🏴‍󠁧‍󠁢‍󠁳‍󠁣‍󠁴‍󠁿",
  ":scream:": "😱",
  ":scream_cat:": "🙀",
  ":screwdriver:": "🪛",
  ":scroll:": "📜",
  ":seal:": "🦭",
  ":seat:": "💺",
  ":secret:": "㊙",
  ":see_no_evil:": "🙈",
  ":seedling:": "🌱",
  ":selfie:": "🤳",
  ":senegal:": "🇸‍🇳",
  ":serbia:": "🇷‍🇸",
  ":service_dog:": "🐕‍🦺",
  ":seven:": "7‍⃣",
  ":sewing_needle:": "🪡",
  ":seychelles:": "🇸‍🇨",
  ":shallow_pan_of_food:": "🥘",
  ":shamrock:": "☘",
  ":shark:": "🦈",
  ":shaved_ice:": "🍧",
  ":sheep:": "🐑",
  ":shell:": "🐚",
  ":shield:": "🛡",
  ":shinto_shrine:": "⛩",
  ":ship:": "🚢",
  ":shirt:": "👕",
  ":shit:": "💩",
  ":shoe:": "👞",
  ":shopping:": "🛍",
  ":shopping_cart:": "🛒",
  ":shorts:": "🩳",
  ":shower:": "🚿",
  ":shrimp:": "🦐",
  ":shrug:": "🤷",
  ":shushing_face:": "🤫",
  ":sierra_leone:": "🇸‍🇱",
  ":signal_strength:": "📶",
  ":singapore:": "🇸‍🇬",
  ":singer:": "🧑‍🎤",
  ":sint_maarten:": "🇸‍🇽",
  ":six:": "6‍⃣",
  ":six_pointed_star:": "🔯",
  ":skateboard:": "🛹",
  ":ski:": "🎿",
  ":skier:": "⛷",
  ":skull:": "💀",
  ":skull_and_crossbones:": "☠",
  ":skunk:": "🦨",
  ":sled:": "🛷",
  ":sleeping:": "😴",
  ":sleeping_bed:": "🛌",
  ":sleepy:": "😪",
  ":slightly_frowning_face:": "🙁",
  ":slightly_smiling_face:": "🙂",
  ":slot_machine:": "🎰",
  ":sloth:": "🦥",
  ":slovakia:": "🇸‍🇰",
  ":slovenia:": "🇸‍🇮",
  ":small_airplane:": "🛩",
  ":small_blue_diamond:": "🔹",
  ":small_orange_diamond:": "🔸",
  ":small_red_triangle:": "🔺",
  ":small_red_triangle_down:": "🔻",
  ":smile:": "😄",
  ":smile_cat:": "😸",
  ":smiley:": "😃",
  ":smiley_cat:": "😺",
  ":smiling_face_with_tear:": "🥲",
  ":smiling_face_with_three_hearts:": "🥰",
  ":smiling_imp:": "😈",
  ":smirk:": "😏",
  ":smirk_cat:": "😼",
  ":smoking:": "🚬",
  ":snail:": "🐌",
  ":snake:": "🐍",
  ":sneezing_face:": "🤧",
  ":snowboarder:": "🏂",
  ":snowflake:": "❄",
  ":snowman:": "⛄",
  ":snowman_with_snow:": "☃",
  ":soap:": "🧼",
  ":sob:": "😭",
  ":soccer:": "⚽",
  ":socks:": "🧦",
  ":softball:": "🥎",
  ":solomon_islands:": "🇸‍🇧",
  ":somalia:": "🇸‍🇴",
  ":soon:": "🔜",
  ":sos:": "🆘",
  ":sound:": "🔉",
  ":south_africa:": "🇿‍🇦",
  ":south_georgia_south_sandwich_islands:": "🇬‍🇸",
  ":south_sudan:": "🇸‍🇸",
  ":space_invader:": "👾",
  ":spades:": "♠",
  ":spaghetti:": "🍝",
  ":sparkle:": "❇",
  ":sparkler:": "🎇",
  ":sparkles:": "✨",
  ":sparkling_heart:": "💖",
  ":speak_no_evil:": "🙊",
  ":speaker:": "🔈",
  ":speaking_head:": "🗣",
  ":speech_balloon:": "💬",
  ":speedboat:": "🚤",
  ":spider:": "🕷",
  ":spider_web:": "🕸",
  ":spiral_calendar:": "🗓",
  ":spiral_notepad:": "🗒",
  ":sponge:": "🧽",
  ":spoon:": "🥄",
  ":squid:": "🦑",
  ":sri_lanka:": "🇱‍🇰",
  ":st_barthelemy:": "🇧‍🇱",
  ":st_helena:": "🇸‍🇭",
  ":st_kitts_nevis:": "🇰‍🇳",
  ":st_lucia:": "🇱‍🇨",
  ":st_martin:": "🇲‍🇫",
  ":st_pierre_miquelon:": "🇵‍🇲",
  ":st_vincent_grenadines:": "🇻‍🇨",
  ":stadium:": "🏟",
  ":standing_man:": "🧍‍♂",
  ":standing_person:": "🧍",
  ":standing_woman:": "🧍‍♀",
  ":star:": "⭐",
  ":star2:": "🌟",
  ":star_and_crescent:": "☪",
  ":star_of_david:": "✡",
  ":star_struck:": "🤩",
  ":stars:": "🌠",
  ":station:": "🚉",
  ":statue_of_liberty:": "🗽",
  ":steam_locomotive:": "🚂",
  ":stethoscope:": "🩺",
  ":stew:": "🍲",
  ":stop_button:": "⏹",
  ":stop_sign:": "🛑",
  ":stopwatch:": "⏱",
  ":straight_ruler:": "📏",
  ":strawberry:": "🍓",
  ":stuck_out_tongue:": "😛",
  ":stuck_out_tongue_closed_eyes:": "😝",
  ":stuck_out_tongue_winking_eye:": "😜",
  ":student:": "🧑‍🎓",
  ":studio_microphone:": "🎙",
  ":stuffed_flatbread:": "🥙",
  ":sudan:": "🇸‍🇩",
  ":sun_behind_large_cloud:": "🌥",
  ":sun_behind_rain_cloud:": "🌦",
  ":sun_behind_small_cloud:": "🌤",
  ":sun_with_face:": "🌞",
  ":sunflower:": "🌻",
  ":sunglasses:": "😎",
  ":sunny:": "☀",
  ":sunrise:": "🌅",
  ":sunrise_over_mountains:": "🌄",
  ":superhero:": "🦸",
  ":superhero_man:": "🦸‍♂",
  ":superhero_woman:": "🦸‍♀",
  ":supervillain:": "🦹",
  ":supervillain_man:": "🦹‍♂",
  ":supervillain_woman:": "🦹‍♀",
  ":surfer:": "🏄",
  ":surfing_man:": "🏄‍♂",
  ":surfing_woman:": "🏄‍♀",
  ":suriname:": "🇸‍🇷",
  ":sushi:": "🍣",
  ":suspension_railway:": "🚟",
  ":svalbard_jan_mayen:": "🇸‍🇯",
  ":swan:": "🦢",
  ":swaziland:": "🇸‍🇿",
  ":sweat:": "😓",
  ":sweat_drops:": "💦",
  ":sweat_smile:": "😅",
  ":sweden:": "🇸‍🇪",
  ":sweet_potato:": "🍠",
  ":swim_brief:": "🩲",
  ":swimmer:": "🏊",
  ":swimming_man:": "🏊‍♂",
  ":swimming_woman:": "🏊‍♀",
  ":switzerland:": "🇨‍🇭",
  ":symbols:": "🔣",
  ":synagogue:": "🕍",
  ":syria:": "🇸‍🇾",
  ":syringe:": "💉",
  ":t-rex:": "🦖",
  ":taco:": "🌮",
  ":tada:": "🎉",
  ":taiwan:": "🇹‍🇼",
  ":tajikistan:": "🇹‍🇯",
  ":takeout_box:": "🥡",
  ":tamale:": "🫔",
  ":tanabata_tree:": "🎋",
  ":tangerine:": "🍊",
  ":tanzania:": "🇹‍🇿",
  ":taurus:": "♉",
  ":taxi:": "🚕",
  ":tea:": "🍵",
  ":teacher:": "🧑‍🏫",
  ":teapot:": "🫖",
  ":technologist:": "🧑‍💻",
  ":teddy_bear:": "🧸",
  ":telephone:": "☎",
  ":telephone_receiver:": "📞",
  ":telescope:": "🔭",
  ":tennis:": "🎾",
  ":tent:": "⛺",
  ":test_tube:": "🧪",
  ":thailand:": "🇹‍🇭",
  ":thermometer:": "🌡",
  ":thinking:": "🤔",
  ":thong_sandal:": "🩴",
  ":thought_balloon:": "💭",
  ":thread:": "🧵",
  ":three:": "3‍⃣",
  ":thumbsdown:": "👎",
  ":thumbsup:": "👍",
  ":ticket:": "🎫",
  ":tickets:": "🎟",
  ":tiger:": "🐯",
  ":tiger2:": "🐅",
  ":timer_clock:": "⏲",
  ":timor_leste:": "🇹‍🇱",
  ":tipping_hand_man:": "💁‍♂",
  ":tipping_hand_person:": "💁",
  ":tipping_hand_woman:": "💁‍♀",
  ":tired_face:": "😫",
  ":tm:": "™",
  ":togo:": "🇹‍🇬",
  ":toilet:": "🚽",
  ":tokelau:": "🇹‍🇰",
  ":tokyo_tower:": "🗼",
  ":tomato:": "🍅",
  ":tonga:": "🇹‍🇴",
  ":tongue:": "👅",
  ":toolbox:": "🧰",
  ":tooth:": "🦷",
  ":toothbrush:": "🪥",
  ":top:": "🔝",
  ":tophat:": "🎩",
  ":tornado:": "🌪",
  ":tr:": "🇹‍🇷",
  ":trackball:": "🖲",
  ":tractor:": "🚜",
  ":traffic_light:": "🚥",
  ":train:": "🚋",
  ":train2:": "🚆",
  ":tram:": "🚊",
  ":transgender_flag:": "🏳‍⚧",
  ":transgender_symbol:": "⚧",
  ":triangular_flag_on_post:": "🚩",
  ":triangular_ruler:": "📐",
  ":trident:": "🔱",
  ":trinidad_tobago:": "🇹‍🇹",
  ":tristan_da_cunha:": "🇹‍🇦",
  ":triumph:": "😤",
  ":trolleybus:": "🚎",
  ":trophy:": "🏆",
  ":tropical_drink:": "🍹",
  ":tropical_fish:": "🐠",
  ":truck:": "🚚",
  ":trumpet:": "🎺",
  ":tshirt:": "👕",
  ":tulip:": "🌷",
  ":tumbler_glass:": "🥃",
  ":tunisia:": "🇹‍🇳",
  ":turkey:": "🦃",
  ":turkmenistan:": "🇹‍🇲",
  ":turks_caicos_islands:": "🇹‍🇨",
  ":turtle:": "🐢",
  ":tuvalu:": "🇹‍🇻",
  ":tv:": "📺",
  ":twisted_rightwards_arrows:": "🔀",
  ":two:": "2‍⃣",
  ":two_hearts:": "💕",
  ":two_men_holding_hands:": "👬",
  ":two_women_holding_hands:": "👭",
  ":u5272:": "🈹",
  ":u5408:": "🈴",
  ":u55b6:": "🈺",
  ":u6307:": "🈯",
  ":u6708:": "🈷",
  ":u6709:": "🈶",
  ":u6e80:": "🈵",
  ":u7121:": "🈚",
  ":u7533:": "🈸",
  ":u7981:": "🈲",
  ":u7a7a:": "🈳",
  ":uganda:": "🇺‍🇬",
  ":uk:": "🇬‍🇧",
  ":ukraine:": "🇺‍🇦",
  ":umbrella:": "☔",
  ":unamused:": "😒",
  ":underage:": "🔞",
  ":unicorn:": "🦄",
  ":united_arab_emirates:": "🇦‍🇪",
  ":united_nations:": "🇺‍🇳",
  ":unlock:": "🔓",
  ":up:": "🆙",
  ":upside_down_face:": "🙃",
  ":uruguay:": "🇺‍🇾",
  ":us:": "🇺‍🇸",
  ":us_outlying_islands:": "🇺‍🇲",
  ":us_virgin_islands:": "🇻‍🇮",
  ":uzbekistan:": "🇺‍🇿",
  ":v:": "✌",
  ":vampire:": "🧛",
  ":vampire_man:": "🧛‍♂",
  ":vampire_woman:": "🧛‍♀",
  ":vanuatu:": "🇻‍🇺",
  ":vatican_city:": "🇻‍🇦",
  ":venezuela:": "🇻‍🇪",
  ":vertical_traffic_light:": "🚦",
  ":vhs:": "📼",
  ":vibration_mode:": "📳",
  ":video_camera:": "📹",
  ":video_game:": "🎮",
  ":vietnam:": "🇻‍🇳",
  ":violin:": "🎻",
  ":virgo:": "♍",
  ":volcano:": "🌋",
  ":volleyball:": "🏐",
  ":vomiting_face:": "🤮",
  ":vs:": "🆚",
  ":vulcan_salute:": "🖖",
  ":waffle:": "🧇",
  ":wales:": "🏴‍󠁧‍󠁢‍󠁷‍󠁬‍󠁳‍󠁿",
  ":walking:": "🚶",
  ":walking_man:": "🚶‍♂",
  ":walking_woman:": "🚶‍♀",
  ":wallis_futuna:": "🇼‍🇫",
  ":waning_crescent_moon:": "🌘",
  ":waning_gibbous_moon:": "🌖",
  ":warning:": "⚠",
  ":wastebasket:": "🗑",
  ":watch:": "⌚",
  ":water_buffalo:": "🐃",
  ":water_polo:": "🤽",
  ":watermelon:": "🍉",
  ":wave:": "👋",
  ":wavy_dash:": "〰",
  ":waxing_crescent_moon:": "🌒",
  ":waxing_gibbous_moon:": "🌔",
  ":wc:": "🚾",
  ":weary:": "😩",
  ":wedding:": "💒",
  ":weight_lifting:": "🏋",
  ":weight_lifting_man:": "🏋‍♂",
  ":weight_lifting_woman:": "🏋‍♀",
  ":western_sahara:": "🇪‍🇭",
  ":whale:": "🐳",
  ":whale2:": "🐋",
  ":wheel_of_dharma:": "☸",
  ":wheelchair:": "♿",
  ":white_check_mark:": "✅",
  ":white_circle:": "⚪",
  ":white_flag:": "🏳",
  ":white_flower:": "💮",
  ":white_haired_man:": "👨‍🦳",
  ":white_haired_woman:": "👩‍🦳",
  ":white_heart:": "🤍",
  ":white_large_square:": "⬜",
  ":white_medium_small_square:": "◽",
  ":white_medium_square:": "◻",
  ":white_small_square:": "▫",
  ":white_square_button:": "🔳",
  ":wilted_flower:": "🥀",
  ":wind_chime:": "🎐",
  ":wind_face:": "🌬",
  ":window:": "🪟",
  ":wine_glass:": "🍷",
  ":wink:": "😉",
  ":wolf:": "🐺",
  ":woman:": "👩",
  ":woman_artist:": "👩‍🎨",
  ":woman_astronaut:": "👩‍🚀",
  ":woman_beard:": "🧔‍♀",
  ":woman_cartwheeling:": "🤸‍♀",
  ":woman_cook:": "👩‍🍳",
  ":woman_dancing:": "💃",
  ":woman_facepalming:": "🤦‍♀",
  ":woman_factory_worker:": "👩‍🏭",
  ":woman_farmer:": "👩‍🌾",
  ":woman_feeding_baby:": "👩‍🍼",
  ":woman_firefighter:": "👩‍🚒",
  ":woman_health_worker:": "👩‍⚕",
  ":woman_in_manual_wheelchair:": "👩‍🦽",
  ":woman_in_motorized_wheelchair:": "👩‍🦼",
  ":woman_in_tuxedo:": "🤵‍♀",
  ":woman_judge:": "👩‍⚖",
  ":woman_juggling:": "🤹‍♀",
  ":woman_mechanic:": "👩‍🔧",
  ":woman_office_worker:": "👩‍💼",
  ":woman_pilot:": "👩‍✈",
  ":woman_playing_handball:": "🤾‍♀",
  ":woman_playing_water_polo:": "🤽‍♀",
  ":woman_scientist:": "👩‍🔬",
  ":woman_shrugging:": "🤷‍♀",
  ":woman_singer:": "👩‍🎤",
  ":woman_student:": "👩‍🎓",
  ":woman_teacher:": "👩‍🏫",
  ":woman_technologist:": "👩‍💻",
  ":woman_with_headscarf:": "🧕",
  ":woman_with_probing_cane:": "👩‍🦯",
  ":woman_with_turban:": "👳‍♀",
  ":woman_with_veil:": "👰‍♀",
  ":womans_clothes:": "👚",
  ":womans_hat:": "👒",
  ":women_wrestling:": "🤼‍♀",
  ":womens:": "🚺",
  ":wood:": "🪵",
  ":woozy_face:": "🥴",
  ":world_map:": "🗺",
  ":worm:": "🪱",
  ":worried:": "😟",
  ":wrench:": "🔧",
  ":wrestling:": "🤼",
  ":writing_hand:": "✍",
  ":x:": "❌",
  ":yarn:": "🧶",
  ":yawning_face:": "🥱",
  ":yellow_circle:": "🟡",
  ":yellow_heart:": "💛",
  ":yellow_square:": "🟨",
  ":yemen:": "🇾‍🇪",
  ":yen:": "💴",
  ":yin_yang:": "☯",
  ":yo_yo:": "🪀",
  ":yum:": "😋",
  ":zambia:": "🇿‍🇲",
  ":zany_face:": "🤪",
  ":zap:": "⚡",
  ":zebra:": "🦓",
  ":zero:": "0‍⃣",
  ":zimbabwe:": "🇿‍🇼",
  ":zipper_mouth_face:": "🤐",
  ":zombie:": "🧟",
  ":zombie_man:": "🧟‍♂",
  ":zombie_woman:": "🧟‍♀",
  ":zzz:": "💤"
}`);

class EmojiMarkdownPostProcessor {
    static emojiReplace(shortcode, el) {
        if ((typeof el.tagName === "string") && (el.tagName.indexOf("CODE") !== -1 || el.tagName.indexOf("MJX") !== -1)) {
            return false;
        }
        if (el.hasChildNodes()) {
            el.childNodes.forEach((child) => this.emojiReplace(shortcode, child));
        }
        else {
            el.textContent = el.textContent.replace(shortcode, emoji$1[shortcode] ?? shortcode);
        }
    }
}
EmojiMarkdownPostProcessor.emojiProcessor = (el) => {
    el.innerText.match(/[:][^\s:][^ \n:]*[:]/g)?.forEach((e) => EmojiMarkdownPostProcessor.emojiReplace(e, el));
};

const DEFAULT_SETTINGS = {
    immediateReplace: true,
    suggester: true,
    historyPriority: true,
    historyLimit: 100,
    history: [],
    twitterEmojiActive: false
};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }

    // Detect buggy property enumeration order in older V8 versions.

    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
    test1[5] = 'de';
    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });
    if (order2.join('') !== '0123456789') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }
    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};

/** @license React v17.0.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

createCommonjsModule(function (module, exports) {

var n = 60103,
  p = 60106;
exports.Fragment = 60107;
exports.StrictMode = 60108;
exports.Profiler = 60114;
var q = 60109,
  r = 60110,
  t = 60112;
exports.Suspense = 60113;
var u = 60115,
  v = 60116;
if ("function" === typeof Symbol && Symbol.for) {
  var w = Symbol.for;
  n = w("react.element");
  p = w("react.portal");
  exports.Fragment = w("react.fragment");
  exports.StrictMode = w("react.strict_mode");
  exports.Profiler = w("react.profiler");
  q = w("react.provider");
  r = w("react.context");
  t = w("react.forward_ref");
  exports.Suspense = w("react.suspense");
  u = w("react.memo");
  v = w("react.lazy");
}
var x = "function" === typeof Symbol && Symbol.iterator;
function y(a) {
  if (null === a || "object" !== typeof a) return null;
  a = x && a[x] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
function z(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var A = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  B = {};
function C(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A;
}
C.prototype.isReactComponent = {};
C.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(z(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};
C.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function D() {}
D.prototype = C.prototype;
function E(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A;
}
var F = E.prototype = new D();
F.constructor = E;
objectAssign(F, C.prototype);
F.isPureReactComponent = !0;
var G = {
    current: null
  },
  H = Object.prototype.hasOwnProperty,
  I = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function J(a, b, c) {
  var e,
    d = {},
    k = null,
    h = null;
  if (null != b) for (e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
  var g = arguments.length - 2;
  if (1 === g) d.children = c;else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
    d.children = f;
  }
  if (a && a.defaultProps) for (e in g = a.defaultProps, g) void 0 === d[e] && (d[e] = g[e]);
  return {
    $$typeof: n,
    type: a,
    key: k,
    ref: h,
    props: d,
    _owner: G.current
  };
}
function K(a, b) {
  return {
    $$typeof: n,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}
function L(a) {
  return "object" === typeof a && null !== a && a.$$typeof === n;
}
function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + a.replace(/[=:]/g, function (a) {
    return b[a];
  });
}
var M = /\/+/g;
function N(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function O(a, b, c, e, d) {
  var k = typeof a;
  if ("undefined" === k || "boolean" === k) a = null;
  var h = !1;
  if (null === a) h = !0;else switch (k) {
    case "string":
    case "number":
      h = !0;
      break;
    case "object":
      switch (a.$$typeof) {
        case n:
        case p:
          h = !0;
      }
  }
  if (h) return h = a, d = d(h), a = "" === e ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function (a) {
    return a;
  })) : null != d && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
  h = 0;
  e = "" === e ? "." : e + ":";
  if (Array.isArray(a)) for (var g = 0; g < a.length; g++) {
    k = a[g];
    var f = e + N(k, g);
    h += O(k, b, c, f, d);
  } else if (f = y(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);else if ("object" === k) throw b = "" + a, Error(z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
  return h;
}
function P(a, b, c) {
  if (null == a) return a;
  var e = [],
    d = 0;
  O(a, e, "", "", function (a) {
    return b.call(c, a, d++);
  });
  return e;
}
function Q(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    a._status = 0;
    a._result = b;
    b.then(function (b) {
      0 === a._status && (b = b.default, a._status = 1, a._result = b);
    }, function (b) {
      0 === a._status && (a._status = 2, a._result = b);
    });
  }
  if (1 === a._status) return a._result;
  throw a._result;
}
var R = {
  current: null
};
function S() {
  var a = R.current;
  if (null === a) throw Error(z(321));
  return a;
}
var T = {
  ReactCurrentDispatcher: R,
  ReactCurrentBatchConfig: {
    transition: 0
  },
  ReactCurrentOwner: G,
  IsSomeRendererActing: {
    current: !1
  },
  assign: objectAssign
};
exports.Children = {
  map: P,
  forEach: function (a, b, c) {
    P(a, function () {
      b.apply(this, arguments);
    }, c);
  },
  count: function (a) {
    var b = 0;
    P(a, function () {
      b++;
    });
    return b;
  },
  toArray: function (a) {
    return P(a, function (a) {
      return a;
    }) || [];
  },
  only: function (a) {
    if (!L(a)) throw Error(z(143));
    return a;
  }
};
exports.Component = C;
exports.PureComponent = E;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;
exports.cloneElement = function (a, b, c) {
  if (null === a || void 0 === a) throw Error(z(267, a));
  var e = objectAssign({}, a.props),
    d = a.key,
    k = a.ref,
    h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = G.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
    for (f in b) H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
  }
  var f = arguments.length - 2;
  if (1 === f) e.children = c;else if (1 < f) {
    g = Array(f);
    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
    e.children = g;
  }
  return {
    $$typeof: n,
    type: a.type,
    key: d,
    ref: k,
    props: e,
    _owner: h
  };
};
exports.createContext = function (a, b) {
  void 0 === b && (b = null);
  a = {
    $$typeof: r,
    _calculateChangedBits: b,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  a.Provider = {
    $$typeof: q,
    _context: a
  };
  return a.Consumer = a;
};
exports.createElement = J;
exports.createFactory = function (a) {
  var b = J.bind(null, a);
  b.type = a;
  return b;
};
exports.createRef = function () {
  return {
    current: null
  };
};
exports.forwardRef = function (a) {
  return {
    $$typeof: t,
    render: a
  };
};
exports.isValidElement = L;
exports.lazy = function (a) {
  return {
    $$typeof: v,
    _payload: {
      _status: -1,
      _result: a
    },
    _init: Q
  };
};
exports.memo = function (a, b) {
  return {
    $$typeof: u,
    type: a,
    compare: void 0 === b ? null : b
  };
};
exports.useCallback = function (a, b) {
  return S().useCallback(a, b);
};
exports.useContext = function (a, b) {
  return S().useContext(a, b);
};
exports.useDebugValue = function () {};
exports.useEffect = function (a, b) {
  return S().useEffect(a, b);
};
exports.useImperativeHandle = function (a, b, c) {
  return S().useImperativeHandle(a, b, c);
};
exports.useLayoutEffect = function (a, b) {
  return S().useLayoutEffect(a, b);
};
exports.useMemo = function (a, b) {
  return S().useMemo(a, b);
};
exports.useReducer = function (a, b, c) {
  return S().useReducer(a, b, c);
};
exports.useRef = function (a) {
  return S().useRef(a);
};
exports.useState = function (a) {
  return S().useState(a);
};
exports.version = "17.0.1";
});

/** @license React v17.0.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var react_development = createCommonjsModule(function (module, exports) {

{
  (function () {

    var _assign = objectAssign;

    // TODO: this is special because it gets imported during build.
    var ReactVersion = '17.0.1';

    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 0xeac7;
    var REACT_PORTAL_TYPE = 0xeaca;
    exports.Fragment = 0xeacb;
    exports.StrictMode = 0xeacc;
    exports.Profiler = 0xead2;
    var REACT_PROVIDER_TYPE = 0xeacd;
    var REACT_CONTEXT_TYPE = 0xeace;
    var REACT_FORWARD_REF_TYPE = 0xead0;
    exports.Suspense = 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = 0xead8;
    var REACT_MEMO_TYPE = 0xead3;
    var REACT_LAZY_TYPE = 0xead4;
    var REACT_BLOCK_TYPE = 0xead9;
    var REACT_SERVER_BLOCK_TYPE = 0xeada;
    var REACT_FUNDAMENTAL_TYPE = 0xead5;
    var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
    var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
    if (typeof Symbol === 'function' && Symbol.for) {
      var symbolFor = Symbol.for;
      REACT_ELEMENT_TYPE = symbolFor('react.element');
      REACT_PORTAL_TYPE = symbolFor('react.portal');
      exports.Fragment = symbolFor('react.fragment');
      exports.StrictMode = symbolFor('react.strict_mode');
      exports.Profiler = symbolFor('react.profiler');
      REACT_PROVIDER_TYPE = symbolFor('react.provider');
      REACT_CONTEXT_TYPE = symbolFor('react.context');
      REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
      exports.Suspense = symbolFor('react.suspense');
      REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
      REACT_MEMO_TYPE = symbolFor('react.memo');
      REACT_LAZY_TYPE = symbolFor('react.lazy');
      REACT_BLOCK_TYPE = symbolFor('react.block');
      REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
      REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
      symbolFor('react.scope');
      symbolFor('react.opaque.id');
      REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
      symbolFor('react.offscreen');
      REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }
    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';
    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== 'object') {
        return null;
      }
      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
      if (typeof maybeIterator === 'function') {
        return maybeIterator;
      }
      return null;
    }

    /**
     * Keeps track of the current dispatcher.
     */
    var ReactCurrentDispatcher = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };

    /**
     * Keeps track of the current batch's configuration such as how long an update
     * should suspend for if it needs to.
     */
    var ReactCurrentBatchConfig = {
      transition: 0
    };

    /**
     * Keeps track of the current owner.
     *
     * The current owner is the component who should own any components that are
     * currently being constructed.
     */
    var ReactCurrentOwner = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };
    var ReactDebugCurrentFrame = {};
    var currentExtraStackFrame = null;
    function setExtraStackFrame(stack) {
      {
        currentExtraStackFrame = stack;
      }
    }
    {
      ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
        {
          currentExtraStackFrame = stack;
        }
      }; // Stack implementation injected by the current renderer.

      ReactDebugCurrentFrame.getCurrentStack = null;
      ReactDebugCurrentFrame.getStackAddendum = function () {
        var stack = ''; // Add an extra top frame while an element is being validated

        if (currentExtraStackFrame) {
          stack += currentExtraStackFrame;
        } // Delegate to the injected renderer-specific implementation

        var impl = ReactDebugCurrentFrame.getCurrentStack;
        if (impl) {
          stack += impl() || '';
        }
        return stack;
      };
    }

    /**
     * Used by act() to track whether you're inside an act() scope.
     */
    var IsSomeRendererActing = {
      current: false
    };
    var ReactSharedInternals = {
      ReactCurrentDispatcher: ReactCurrentDispatcher,
      ReactCurrentBatchConfig: ReactCurrentBatchConfig,
      ReactCurrentOwner: ReactCurrentOwner,
      IsSomeRendererActing: IsSomeRendererActing,
      // Used by renderers to avoid bundling object-assign twice in UMD bundles:
      assign: _assign
    };
    {
      ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
    }

    // by calls to these methods by a Babel plugin.
    //
    // In PROD (or in packages without access to React internals),
    // they are left as they are instead.

    function warn(format) {
      {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        printWarning('warn', format, args);
      }
    }
    function error(format) {
      {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        printWarning('error', format, args);
      }
    }
    function printWarning(level, format, args) {
      // When changing this logic, you might want to also
      // update consoleWithStackDev.www.js as well.
      {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
        if (stack !== '') {
          format += '%s';
          args = args.concat([stack]);
        }
        var argsWithFormat = args.map(function (item) {
          return '' + item;
        }); // Careful: RN currently depends on this prefix

        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging

        Function.prototype.apply.call(console[level], console, argsWithFormat);
      }
    }
    var didWarnStateUpdateForUnmountedComponent = {};
    function warnNoop(publicInstance, callerName) {
      {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
        var warningKey = componentName + "." + callerName;
        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
          return;
        }
        error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
      }
    }
    /**
     * This is the abstract API for an update queue.
     */

    var ReactNoopUpdateQueue = {
      /**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function (publicInstance) {
        return false;
      },
      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueForceUpdate: function (publicInstance, callback, callerName) {
        warnNoop(publicInstance, 'forceUpdate');
      },
      /**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
        warnNoop(publicInstance, 'replaceState');
      },
      /**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueSetState: function (publicInstance, partialState, callback, callerName) {
        warnNoop(publicInstance, 'setState');
      }
    };
    var emptyObject = {};
    {
      Object.freeze(emptyObject);
    }
    /**
     * Base class helpers for the updating state of a component.
     */

    function Component(props, context, updater) {
      this.props = props;
      this.context = context; // If a component has string refs, we will assign a different object later.

      this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
      // renderer.

      this.updater = updater || ReactNoopUpdateQueue;
    }
    Component.prototype.isReactComponent = {};
    /**
     * Sets a subset of the state. Always use this to mutate
     * state. You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * There is no guarantee that calls to `setState` will run synchronously,
     * as they may eventually be batched together.  You can provide an optional
     * callback that will be executed when the call to setState is actually
     * completed.
     *
     * When a function is provided to setState, it will be called at some point in
     * the future (not synchronously). It will be called with the up to date
     * component arguments (state, props, context). These values can be different
     * from this.* because your function may be called after receiveProps but before
     * shouldComponentUpdate, and this new state, props, and context will not yet be
     * assigned to this.
     *
     * @param {object|function} partialState Next partial state or function to
     *        produce next partial state to be merged with current state.
     * @param {?function} callback Called after state is updated.
     * @final
     * @protected
     */

    Component.prototype.setState = function (partialState, callback) {
      if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
        {
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        }
      }
      this.updater.enqueueSetState(this, partialState, callback, 'setState');
    };
    /**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {?function} callback Called after update is complete.
     * @final
     * @protected
     */

    Component.prototype.forceUpdate = function (callback) {
      this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
    };
    /**
     * Deprecated APIs. These APIs used to exist on classic React classes but since
     * we would like to deprecate them, we're not going to move them over to this
     * modern base class. Instead, we define a getter that warns if it's accessed.
     */

    {
      var deprecatedAPIs = {
        isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
        replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
      };
      var defineDeprecationWarning = function (methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function () {
            warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
            return undefined;
          }
        });
      };
      for (var fnName in deprecatedAPIs) {
        if (deprecatedAPIs.hasOwnProperty(fnName)) {
          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        }
      }
    }
    function ComponentDummy() {}
    ComponentDummy.prototype = Component.prototype;
    /**
     * Convenience component with default shallow equality check for sCU.
     */

    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context; // If a component has string refs, we will assign a different object later.

      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

    _assign(pureComponentPrototype, Component.prototype);
    pureComponentPrototype.isPureReactComponent = true;

    // an immutable object with a single mutable value
    function createRef() {
      var refObject = {
        current: null
      };
      {
        Object.seal(refObject);
      }
      return refObject;
    }
    function getWrappedName(outerType, innerType, wrapperName) {
      var functionName = innerType.displayName || innerType.name || '';
      return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
    }
    function getContextName(type) {
      return type.displayName || 'Context';
    }
    function getComponentName(type) {
      if (type == null) {
        // Host root, text node or just invalid type.
        return null;
      }
      {
        if (typeof type.tag === 'number') {
          error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
        }
      }
      if (typeof type === 'function') {
        return type.displayName || type.name || null;
      }
      if (typeof type === 'string') {
        return type;
      }
      switch (type) {
        case exports.Fragment:
          return 'Fragment';
        case REACT_PORTAL_TYPE:
          return 'Portal';
        case exports.Profiler:
          return 'Profiler';
        case exports.StrictMode:
          return 'StrictMode';
        case exports.Suspense:
          return 'Suspense';
        case REACT_SUSPENSE_LIST_TYPE:
          return 'SuspenseList';
      }
      if (typeof type === 'object') {
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            var context = type;
            return getContextName(context) + '.Consumer';
          case REACT_PROVIDER_TYPE:
            var provider = type;
            return getContextName(provider._context) + '.Provider';
          case REACT_FORWARD_REF_TYPE:
            return getWrappedName(type, type.render, 'ForwardRef');
          case REACT_MEMO_TYPE:
            return getComponentName(type.type);
          case REACT_BLOCK_TYPE:
            return getComponentName(type._render);
          case REACT_LAZY_TYPE:
            {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return getComponentName(init(payload));
              } catch (x) {
                return null;
              }
            }
        }
      }
      return null;
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
    {
      didWarnAboutStringRefs = {};
    }
    function hasValidRef(config) {
      {
        if (hasOwnProperty.call(config, 'ref')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.ref !== undefined;
    }
    function hasValidKey(config) {
      {
        if (hasOwnProperty.call(config, 'key')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      var warnAboutAccessingKey = function () {
        {
          if (!specialPropKeyWarningShown) {
            specialPropKeyWarningShown = true;
            error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
          }
        }
      };
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, 'key', {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function defineRefPropWarningGetter(props, displayName) {
      var warnAboutAccessingRef = function () {
        {
          if (!specialPropRefWarningShown) {
            specialPropRefWarningShown = true;
            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
          }
        }
      };
      warnAboutAccessingRef.isReactWarning = true;
      Object.defineProperty(props, 'ref', {
        get: warnAboutAccessingRef,
        configurable: true
      });
    }
    function warnIfStringRefCannotBeAutoConverted(config) {
      {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
          var componentName = getComponentName(ReactCurrentOwner.current.type);
          if (!didWarnAboutStringRefs[componentName]) {
            error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
            didWarnAboutStringRefs[componentName] = true;
          }
        }
      }
    }
    /**
     * Factory method to create a new React element. This no longer adheres to
     * the class pattern, so do not use new to call it. Also, instanceof check
     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
     * if something is a React Element.
     *
     * @param {*} type
     * @param {*} props
     * @param {*} key
     * @param {string|object} ref
     * @param {*} owner
     * @param {*} self A *temporary* helper to detect places where `this` is
     * different from the `owner` when React.createElement is called, so that we
     * can warn. We want to get rid of owner and replace string `ref`s with arrow
     * functions, and as long as `this` and owner are the same, there will be no
     * change in behavior.
     * @param {*} source An annotation object (added by a transpiler or otherwise)
     * indicating filename, line number, and/or other information.
     * @internal
     */

    var ReactElement = function (type, key, ref, self, source, owner, props) {
      var element = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE,
        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,
        // Record the component responsible for creating this element.
        _owner: owner
      };
      {
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.

        Object.defineProperty(element._store, 'validated', {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        }); // self and source are DEV only properties.

        Object.defineProperty(element, '_self', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.

        Object.defineProperty(element, '_source', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source
        });
        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }
      return element;
    };
    /**
     * Create and return a new ReactElement of the given type.
     * See https://reactjs.org/docs/react-api.html#createelement
     */

    function createElement(type, config, children) {
      var propName; // Reserved names are extracted

      var props = {};
      var key = null;
      var ref = null;
      var self = null;
      var source = null;
      if (config != null) {
        if (hasValidRef(config)) {
          ref = config.ref;
          {
            warnIfStringRefCannotBeAutoConverted(config);
          }
        }
        if (hasValidKey(config)) {
          key = '' + config.key;
        }
        self = config.__self === undefined ? null : config.__self;
        source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
      } // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.

      var childrenLength = arguments.length - 2;
      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
        {
          if (Object.freeze) {
            Object.freeze(childArray);
          }
        }
        props.children = childArray;
      } // Resolve default props

      if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;
        for (propName in defaultProps) {
          if (props[propName] === undefined) {
            props[propName] = defaultProps[propName];
          }
        }
      }
      {
        if (key || ref) {
          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
          if (key) {
            defineKeyPropWarningGetter(props, displayName);
          }
          if (ref) {
            defineRefPropWarningGetter(props, displayName);
          }
        }
      }
      return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
      return newElement;
    }
    /**
     * Clone and return a new ReactElement using element as the starting point.
     * See https://reactjs.org/docs/react-api.html#cloneelement
     */

    function cloneElement(element, config, children) {
      if (!!(element === null || element === undefined)) {
        {
          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
        }
      }
      var propName; // Original props are copied

      var props = _assign({}, element.props); // Reserved names are extracted

      var key = element.key;
      var ref = element.ref; // Self is preserved since the owner is preserved.

      var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
      // transpiler, and the original source is probably a better indicator of the
      // true owner.

      var source = element._source; // Owner will be preserved, unless ref is overridden

      var owner = element._owner;
      if (config != null) {
        if (hasValidRef(config)) {
          // Silently steal the ref from the parent.
          ref = config.ref;
          owner = ReactCurrentOwner.current;
        }
        if (hasValidKey(config)) {
          key = '' + config.key;
        } // Remaining properties override existing props

        var defaultProps;
        if (element.type && element.type.defaultProps) {
          defaultProps = element.type.defaultProps;
        }
        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            if (config[propName] === undefined && defaultProps !== undefined) {
              // Resolve default props
              props[propName] = defaultProps[propName];
            } else {
              props[propName] = config[propName];
            }
          }
        }
      } // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.

      var childrenLength = arguments.length - 2;
      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
        props.children = childArray;
      }
      return ReactElement(element.type, key, ref, self, source, owner, props);
    }
    /**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a ReactElement.
     * @final
     */

    function isValidElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var SEPARATOR = '.';
    var SUBSEPARATOR = ':';
    /**
     * Escape and wrap key so it is safe to use as a reactid
     *
     * @param {string} key to be escaped.
     * @return {string} the escaped key.
     */

    function escape(key) {
      var escapeRegex = /[=:]/g;
      var escaperLookup = {
        '=': '=0',
        ':': '=2'
      };
      var escapedString = key.replace(escapeRegex, function (match) {
        return escaperLookup[match];
      });
      return '$' + escapedString;
    }
    /**
     * TODO: Test that a single child and an array with one item have the same key
     * pattern.
     */

    var didWarnAboutMaps = false;
    var userProvidedKeyEscapeRegex = /\/+/g;
    function escapeUserProvidedKey(text) {
      return text.replace(userProvidedKeyEscapeRegex, '$&/');
    }
    /**
     * Generate a key string that identifies a element within a set.
     *
     * @param {*} element A element that could contain a manual key.
     * @param {number} index Index that is used if a manual key is not provided.
     * @return {string}
     */

    function getElementKey(element, index) {
      // Do some typechecking here since we call this blindly. We want to ensure
      // that we don't block potential future ES APIs.
      if (typeof element === 'object' && element !== null && element.key != null) {
        // Explicit key
        return escape('' + element.key);
      } // Implicit key determined by the index in the set

      return index.toString(36);
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if (type === 'undefined' || type === 'boolean') {
        // All of the above are perceived as null.
        children = null;
      }
      var invokeCallback = false;
      if (children === null) {
        invokeCallback = true;
      } else {
        switch (type) {
          case 'string':
          case 'number':
            invokeCallback = true;
            break;
          case 'object':
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
            }
        }
      }
      if (invokeCallback) {
        var _child = children;
        var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
        // so that it's consistent if the number of children grows:

        var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
        if (Array.isArray(mappedChild)) {
          var escapedChildKey = '';
          if (childKey != null) {
            escapedChildKey = escapeUserProvidedKey(childKey) + '/';
          }
          mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
            return c;
          });
        } else if (mappedChild != null) {
          if (isValidElement(mappedChild)) {
            mappedChild = cloneAndReplaceKey(mappedChild,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            escapedPrefix + (
            // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            mappedChild.key && (!_child || _child.key !== mappedChild.key) ?
            // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
            escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
          }
          array.push(mappedChild);
        }
        return 1;
      }
      var child;
      var nextName;
      var subtreeCount = 0; // Count of children found in the current subtree.

      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          child = children[i];
          nextName = nextNamePrefix + getElementKey(child, i);
          subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
        }
      } else {
        var iteratorFn = getIteratorFn(children);
        if (typeof iteratorFn === 'function') {
          var iterableChildren = children;
          {
            // Warn about using Maps as children
            if (iteratorFn === iterableChildren.entries) {
              if (!didWarnAboutMaps) {
                warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
              }
              didWarnAboutMaps = true;
            }
          }
          var iterator = iteratorFn.call(iterableChildren);
          var step;
          var ii = 0;
          while (!(step = iterator.next()).done) {
            child = step.value;
            nextName = nextNamePrefix + getElementKey(child, ii++);
            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
          }
        } else if (type === 'object') {
          var childrenString = '' + children;
          {
            {
              throw Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
        }
      }
      return subtreeCount;
    }

    /**
     * Maps children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenmap
     *
     * The provided mapFunction(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} func The map function.
     * @param {*} context Context for mapFunction.
     * @return {object} Object containing the ordered map of results.
     */
    function mapChildren(children, func, context) {
      if (children == null) {
        return children;
      }
      var result = [];
      var count = 0;
      mapIntoArray(children, result, '', '', function (child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    /**
     * Count the number of children that are typically specified as
     * `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrencount
     *
     * @param {?*} children Children tree container.
     * @return {number} The number of children.
     */

    function countChildren(children) {
      var n = 0;
      mapChildren(children, function () {
        n++; // Don't return anything
      });
      return n;
    }

    /**
     * Iterates through children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
     *
     * The provided forEachFunc(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} forEachFunc
     * @param {*} forEachContext Context for forEachContext.
     */
    function forEachChildren(children, forEachFunc, forEachContext) {
      mapChildren(children, function () {
        forEachFunc.apply(this, arguments); // Don't return anything.
      }, forEachContext);
    }
    /**
     * Flatten a children object (typically specified as `props.children`) and
     * return an array with appropriately re-keyed children.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
     */

    function toArray(children) {
      return mapChildren(children, function (child) {
        return child;
      }) || [];
    }
    /**
     * Returns the first child in a collection of children and verifies that there
     * is only one child in the collection.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenonly
     *
     * The current implementation of this function assumes that a single child gets
     * passed without a wrapper, but the purpose of this helper function is to
     * abstract away the particular structure of children.
     *
     * @param {?object} children Child collection structure.
     * @return {ReactElement} The first and only `ReactElement` contained in the
     * structure.
     */

    function onlyChild(children) {
      if (!isValidElement(children)) {
        {
          throw Error("React.Children.only expected to receive a single React element child.");
        }
      }
      return children;
    }
    function createContext(defaultValue, calculateChangedBits) {
      if (calculateChangedBits === undefined) {
        calculateChangedBits = null;
      } else {
        {
          if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
            error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
          }
        }
      }
      var context = {
        $$typeof: REACT_CONTEXT_TYPE,
        _calculateChangedBits: calculateChangedBits,
        // As a workaround to support multiple concurrent renderers, we categorize
        // some renderers as primary and others as secondary. We only expect
        // there to be two concurrent renderers at most: React Native (primary) and
        // Fabric (secondary); React DOM (primary) and React ART (secondary).
        // Secondary renderers store their context values on separate fields.
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        // Used to track how many concurrent renderers this context currently
        // supports within in a single renderer. Such as parallel server rendering.
        _threadCount: 0,
        // These are circular
        Provider: null,
        Consumer: null
      };
      context.Provider = {
        $$typeof: REACT_PROVIDER_TYPE,
        _context: context
      };
      var hasWarnedAboutUsingNestedContextConsumers = false;
      var hasWarnedAboutUsingConsumerProvider = false;
      var hasWarnedAboutDisplayNameOnConsumer = false;
      {
        // A separate object, but proxies back to the original context object for
        // backwards compatibility. It has a different $$typeof, so we can properly
        // warn for the incorrect usage of Context as a Consumer.
        var Consumer = {
          $$typeof: REACT_CONTEXT_TYPE,
          _context: context,
          _calculateChangedBits: context._calculateChangedBits
        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

        Object.defineProperties(Consumer, {
          Provider: {
            get: function () {
              if (!hasWarnedAboutUsingConsumerProvider) {
                hasWarnedAboutUsingConsumerProvider = true;
                error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
              }
              return context.Provider;
            },
            set: function (_Provider) {
              context.Provider = _Provider;
            }
          },
          _currentValue: {
            get: function () {
              return context._currentValue;
            },
            set: function (_currentValue) {
              context._currentValue = _currentValue;
            }
          },
          _currentValue2: {
            get: function () {
              return context._currentValue2;
            },
            set: function (_currentValue2) {
              context._currentValue2 = _currentValue2;
            }
          },
          _threadCount: {
            get: function () {
              return context._threadCount;
            },
            set: function (_threadCount) {
              context._threadCount = _threadCount;
            }
          },
          Consumer: {
            get: function () {
              if (!hasWarnedAboutUsingNestedContextConsumers) {
                hasWarnedAboutUsingNestedContextConsumers = true;
                error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
              }
              return context.Consumer;
            }
          },
          displayName: {
            get: function () {
              return context.displayName;
            },
            set: function (displayName) {
              if (!hasWarnedAboutDisplayNameOnConsumer) {
                warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);
                hasWarnedAboutDisplayNameOnConsumer = true;
              }
            }
          }
        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

        context.Consumer = Consumer;
      }
      {
        context._currentRenderer = null;
        context._currentRenderer2 = null;
      }
      return context;
    }
    var Uninitialized = -1;
    var Pending = 0;
    var Resolved = 1;
    var Rejected = 2;
    function lazyInitializer(payload) {
      if (payload._status === Uninitialized) {
        var ctor = payload._result;
        var thenable = ctor(); // Transition to the next state.

        var pending = payload;
        pending._status = Pending;
        pending._result = thenable;
        thenable.then(function (moduleObject) {
          if (payload._status === Pending) {
            var defaultExport = moduleObject.default;
            {
              if (defaultExport === undefined) {
                error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' +
                // Break up imports to avoid accidentally parsing them as dependencies.
                'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
              }
            } // Transition to the next state.

            var resolved = payload;
            resolved._status = Resolved;
            resolved._result = defaultExport;
          }
        }, function (error) {
          if (payload._status === Pending) {
            // Transition to the next state.
            var rejected = payload;
            rejected._status = Rejected;
            rejected._result = error;
          }
        });
      }
      if (payload._status === Resolved) {
        return payload._result;
      } else {
        throw payload._result;
      }
    }
    function lazy(ctor) {
      var payload = {
        // We use these fields to store the result.
        _status: -1,
        _result: ctor
      };
      var lazyType = {
        $$typeof: REACT_LAZY_TYPE,
        _payload: payload,
        _init: lazyInitializer
      };
      {
        // In production, this would just set it on the object.
        var defaultProps;
        var propTypes; // $FlowFixMe

        Object.defineProperties(lazyType, {
          defaultProps: {
            configurable: true,
            get: function () {
              return defaultProps;
            },
            set: function (newDefaultProps) {
              error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
              defaultProps = newDefaultProps; // Match production behavior more closely:
              // $FlowFixMe

              Object.defineProperty(lazyType, 'defaultProps', {
                enumerable: true
              });
            }
          },
          propTypes: {
            configurable: true,
            get: function () {
              return propTypes;
            },
            set: function (newPropTypes) {
              error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
              propTypes = newPropTypes; // Match production behavior more closely:
              // $FlowFixMe

              Object.defineProperty(lazyType, 'propTypes', {
                enumerable: true
              });
            }
          }
        });
      }
      return lazyType;
    }
    function forwardRef(render) {
      {
        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
          error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
        } else if (typeof render !== 'function') {
          error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
        } else {
          if (render.length !== 0 && render.length !== 2) {
            error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
          }
        }
        if (render != null) {
          if (render.defaultProps != null || render.propTypes != null) {
            error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
          }
        }
      }
      var elementType = {
        $$typeof: REACT_FORWARD_REF_TYPE,
        render: render
      };
      {
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
          enumerable: false,
          configurable: true,
          get: function () {
            return ownName;
          },
          set: function (name) {
            ownName = name;
            if (render.displayName == null) {
              render.displayName = name;
            }
          }
        });
      }
      return elementType;
    }

    // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

    var enableScopeAPI = false; // Experimental Create Event Handle API.

    function isValidElementType(type) {
      if (typeof type === 'string' || typeof type === 'function') {
        return true;
      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

      if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
        return true;
      }
      if (typeof type === 'object' && type !== null) {
        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
          return true;
        }
      }
      return false;
    }
    function memo(type, compare) {
      {
        if (!isValidElementType(type)) {
          error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
        }
      }
      var elementType = {
        $$typeof: REACT_MEMO_TYPE,
        type: type,
        compare: compare === undefined ? null : compare
      };
      {
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
          enumerable: false,
          configurable: true,
          get: function () {
            return ownName;
          },
          set: function (name) {
            ownName = name;
            if (type.displayName == null) {
              type.displayName = name;
            }
          }
        });
      }
      return elementType;
    }
    function resolveDispatcher() {
      var dispatcher = ReactCurrentDispatcher.current;
      if (!(dispatcher !== null)) {
        {
          throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
        }
      }
      return dispatcher;
    }
    function useContext(Context, unstable_observedBits) {
      var dispatcher = resolveDispatcher();
      {
        if (unstable_observedBits !== undefined) {
          error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
        } // TODO: add a more generic warning for invalid values.

        if (Context._context !== undefined) {
          var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
          // and nobody should be using this in existing code.

          if (realContext.Consumer === Context) {
            error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
          } else if (realContext.Provider === Context) {
            error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
          }
        }
      }
      return dispatcher.useContext(Context, unstable_observedBits);
    }
    function useState(initialState) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useState(initialState);
    }
    function useReducer(reducer, initialArg, init) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useReducer(reducer, initialArg, init);
    }
    function useRef(initialValue) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useRef(initialValue);
    }
    function useEffect(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useEffect(create, deps);
    }
    function useLayoutEffect(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useLayoutEffect(create, deps);
    }
    function useCallback(callback, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useCallback(callback, deps);
    }
    function useMemo(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useMemo(create, deps);
    }
    function useImperativeHandle(ref, create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useImperativeHandle(ref, create, deps);
    }
    function useDebugValue(value, formatterFn) {
      {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDebugValue(value, formatterFn);
      }
    }

    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {}
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
      {
        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          prevLog = console.log;
          prevInfo = console.info;
          prevWarn = console.warn;
          prevError = console.error;
          prevGroup = console.group;
          prevGroupCollapsed = console.groupCollapsed;
          prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

          var props = {
            configurable: true,
            enumerable: true,
            value: disabledLog,
            writable: true
          }; // $FlowFixMe Flow thinks console is immutable.

          Object.defineProperties(console, {
            info: props,
            log: props,
            warn: props,
            error: props,
            group: props,
            groupCollapsed: props,
            groupEnd: props
          });
          /* eslint-enable react-internal/no-production-logging */
        }
        disabledDepth++;
      }
    }
    function reenableLogs() {
      {
        disabledDepth--;
        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          var props = {
            configurable: true,
            enumerable: true,
            writable: true
          }; // $FlowFixMe Flow thinks console is immutable.

          Object.defineProperties(console, {
            log: _assign({}, props, {
              value: prevLog
            }),
            info: _assign({}, props, {
              value: prevInfo
            }),
            warn: _assign({}, props, {
              value: prevWarn
            }),
            error: _assign({}, props, {
              value: prevError
            }),
            group: _assign({}, props, {
              value: prevGroup
            }),
            groupCollapsed: _assign({}, props, {
              value: prevGroupCollapsed
            }),
            groupEnd: _assign({}, props, {
              value: prevGroupEnd
            })
          });
          /* eslint-enable react-internal/no-production-logging */
        }
        if (disabledDepth < 0) {
          error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
        }
      }
    }
    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
      {
        if (prefix === undefined) {
          // Extract the VM specific prefix used by each line.
          try {
            throw Error();
          } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || '';
          }
        } // We use the prefix to ensure our stacks line up with native stack frames.

        return '\n' + prefix + name;
      }
    }
    var reentry = false;
    var componentFrameCache;
    {
      var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
      componentFrameCache = new PossiblyWeakMap();
    }
    function describeNativeComponentFrame(fn, construct) {
      // If something asked for a stack inside a fake render, it should get ignored.
      if (!fn || reentry) {
        return '';
      }
      {
        var frame = componentFrameCache.get(fn);
        if (frame !== undefined) {
          return frame;
        }
      }
      var control;
      reentry = true;
      var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

      Error.prepareStackTrace = undefined;
      var previousDispatcher;
      {
        previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.

        ReactCurrentDispatcher$1.current = null;
        disableLogs();
      }
      try {
        // This should throw.
        if (construct) {
          // Something should be setting the props in the constructor.
          var Fake = function () {
            throw Error();
          }; // $FlowFixMe

          Object.defineProperty(Fake.prototype, 'props', {
            set: function () {
              // We use a throwing setter instead of frozen or non-writable props
              // because that won't throw in a non-strict mode function.
              throw Error();
            }
          });
          if (typeof Reflect === 'object' && Reflect.construct) {
            // We construct a different control for this case to include any extra
            // frames added by the construct call.
            try {
              Reflect.construct(Fake, []);
            } catch (x) {
              control = x;
            }
            Reflect.construct(fn, [], Fake);
          } else {
            try {
              Fake.call();
            } catch (x) {
              control = x;
            }
            fn.call(Fake.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            control = x;
          }
          fn();
        }
      } catch (sample) {
        // This is inlined manually because closure doesn't do it for us.
        if (sample && control && typeof sample.stack === 'string') {
          // This extracts the first frame from the sample that isn't also in the control.
          // Skipping one frame that we assume is the frame that calls the two.
          var sampleLines = sample.stack.split('\n');
          var controlLines = control.stack.split('\n');
          var s = sampleLines.length - 1;
          var c = controlLines.length - 1;
          while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
            // We expect at least one stack frame to be shared.
            // Typically this will be the root most one. However, stack frames may be
            // cut off due to maximum stack limits. In this case, one maybe cut off
            // earlier than the other. We assume that the sample is longer or the same
            // and there for cut off earlier. So we should find the root most frame in
            // the sample somewhere in the control.
            c--;
          }
          for (; s >= 1 && c >= 0; s--, c--) {
            // Next we find the first one that isn't the same which should be the
            // frame that called our sample function and the control.
            if (sampleLines[s] !== controlLines[c]) {
              // In V8, the first line is describing the message but other VMs don't.
              // If we're about to return the first line, and the control is also on the same
              // line, that's a pretty good indicator that our sample threw at same line as
              // the control. I.e. before we entered the sample frame. So we ignore this result.
              // This can happen if you passed a class to function component, or non-function.
              if (s !== 1 || c !== 1) {
                do {
                  s--;
                  c--; // We may still have similar intermediate frames from the construct call.
                  // The next one that isn't the same should be our match though.

                  if (c < 0 || sampleLines[s] !== controlLines[c]) {
                    // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                    var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
                    {
                      if (typeof fn === 'function') {
                        componentFrameCache.set(fn, _frame);
                      }
                    } // Return the line we found.

                    return _frame;
                  }
                } while (s >= 1 && c >= 0);
              }
              break;
            }
          }
        }
      } finally {
        reentry = false;
        {
          ReactCurrentDispatcher$1.current = previousDispatcher;
          reenableLogs();
        }
        Error.prepareStackTrace = previousPrepareStackTrace;
      } // Fallback to just using the name if we couldn't make it throw.

      var name = fn ? fn.displayName || fn.name : '';
      var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
      {
        if (typeof fn === 'function') {
          componentFrameCache.set(fn, syntheticFrame);
        }
      }
      return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
      {
        return describeNativeComponentFrame(fn, false);
      }
    }
    function shouldConstruct(Component) {
      var prototype = Component.prototype;
      return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
      if (type == null) {
        return '';
      }
      if (typeof type === 'function') {
        {
          return describeNativeComponentFrame(type, shouldConstruct(type));
        }
      }
      if (typeof type === 'string') {
        return describeBuiltInComponentFrame(type);
      }
      switch (type) {
        case exports.Suspense:
          return describeBuiltInComponentFrame('Suspense');
        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame('SuspenseList');
      }
      if (typeof type === 'object') {
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return describeFunctionComponentFrame(type.render);
          case REACT_MEMO_TYPE:
            // Memo may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
          case REACT_BLOCK_TYPE:
            return describeFunctionComponentFrame(type._render);
          case REACT_LAZY_TYPE:
            {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                // Lazy may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch (x) {}
            }
        }
      }
      return '';
    }
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else {
          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
        }
      }
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
      {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(Object.prototype.hasOwnProperty);
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.

            try {
              // This is intentionally an invariant that gets caught. It's the same
              // behavior as without this statement except with a better message.
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                err.name = 'Invariant Violation';
                throw err;
              }
              error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
            } catch (ex) {
              error$1 = ex;
            }
            if (error$1 && !(error$1 instanceof Error)) {
              setCurrentlyValidatingElement(element);
              error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
              setCurrentlyValidatingElement(null);
            }
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
              // Only monitor this failure once because there tends to be a lot of the
              // same error.
              loggedTypeFailures[error$1.message] = true;
              setCurrentlyValidatingElement(element);
              error('Failed %s type: %s', location, error$1.message);
              setCurrentlyValidatingElement(null);
            }
          }
        }
      }
    }
    function setCurrentlyValidatingElement$1(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          setExtraStackFrame(stack);
        } else {
          setExtraStackFrame(null);
        }
      }
    }
    var propTypesMisspellWarningShown;
    {
      propTypesMisspellWarningShown = false;
    }
    function getDeclarationErrorAddendum() {
      if (ReactCurrentOwner.current) {
        var name = getComponentName(ReactCurrentOwner.current.type);
        if (name) {
          return '\n\nCheck the render method of `' + name + '`.';
        }
      }
      return '';
    }
    function getSourceInfoErrorAddendum(source) {
      if (source !== undefined) {
        var fileName = source.fileName.replace(/^.*[\\\/]/, '');
        var lineNumber = source.lineNumber;
        return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
      }
      return '';
    }
    function getSourceInfoErrorAddendumForProps(elementProps) {
      if (elementProps !== null && elementProps !== undefined) {
        return getSourceInfoErrorAddendum(elementProps.__source);
      }
      return '';
    }
    /**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */

    var ownerHasKeyUseWarning = {};
    function getCurrentComponentErrorInfo(parentType) {
      var info = getDeclarationErrorAddendum();
      if (!info) {
        var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
        if (parentName) {
          info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
      }
      return info;
    }
    /**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */

    function validateExplicitKey(element, parentType) {
      if (!element._store || element._store.validated || element.key != null) {
        return;
      }
      element._store.validated = true;
      var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
      if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
        return;
      }
      ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
      // property, it may be the creator of the child that's responsible for
      // assigning it a key.

      var childOwner = '';
      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
        // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
      }
      {
        setCurrentlyValidatingElement$1(element);
        error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
      }
    }
    /**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */

    function validateChildKeys(node, parentType) {
      if (typeof node !== 'object') {
        return;
      }
      if (Array.isArray(node)) {
        for (var i = 0; i < node.length; i++) {
          var child = node[i];
          if (isValidElement(child)) {
            validateExplicitKey(child, parentType);
          }
        }
      } else if (isValidElement(node)) {
        // This element was passed in a valid location.
        if (node._store) {
          node._store.validated = true;
        }
      } else if (node) {
        var iteratorFn = getIteratorFn(node);
        if (typeof iteratorFn === 'function') {
          // Entry iterators used to provide implicit keys,
          // but now we print a separate warning for them later.
          if (iteratorFn !== node.entries) {
            var iterator = iteratorFn.call(node);
            var step;
            while (!(step = iterator.next()).done) {
              if (isValidElement(step.value)) {
                validateExplicitKey(step.value, parentType);
              }
            }
          }
        }
      }
    }
    /**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */

    function validatePropTypes(element) {
      {
        var type = element.type;
        if (type === null || type === undefined || typeof type === 'string') {
          return;
        }
        var propTypes;
        if (typeof type === 'function') {
          propTypes = type.propTypes;
        } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
        // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) {
          propTypes = type.propTypes;
        } else {
          return;
        }
        if (propTypes) {
          // Intentionally inside to avoid triggering lazy initializers:
          var name = getComponentName(type);
          checkPropTypes(propTypes, element.props, 'prop', name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
          propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

          var _name = getComponentName(type);
          error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
        }
        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
          error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
        }
      }
    }
    /**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */

    function validateFragmentProps(fragment) {
      {
        var keys = Object.keys(fragment.props);
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (key !== 'children' && key !== 'key') {
            setCurrentlyValidatingElement$1(fragment);
            error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
            setCurrentlyValidatingElement$1(null);
            break;
          }
        }
        if (fragment.ref !== null) {
          setCurrentlyValidatingElement$1(fragment);
          error('Invalid attribute `ref` supplied to `React.Fragment`.');
          setCurrentlyValidatingElement$1(null);
        }
      }
    }
    function createElementWithValidation(type, props, children) {
      var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
      // succeed and there will likely be errors in render.

      if (!validType) {
        var info = '';
        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
        }
        var sourceInfo = getSourceInfoErrorAddendumForProps(props);
        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }
        var typeString;
        if (type === null) {
          typeString = 'null';
        } else if (Array.isArray(type)) {
          typeString = 'array';
        } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
          typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
          info = ' Did you accidentally export a JSX literal instead of a component?';
        } else {
          typeString = typeof type;
        }
        {
          error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
        }
      }
      var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
      // TODO: Drop this when these are no longer allowed as the type argument.

      if (element == null) {
        return element;
      } // Skip key warning if the type isn't valid since our key validation logic
      // doesn't expect a non-string/function type and can throw confusing errors.
      // We don't want exception behavior to differ between dev and prod.
      // (Rendering will throw with a helpful message and as soon as the type is
      // fixed, the key warnings will appear.)

      if (validType) {
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], type);
        }
      }
      if (type === exports.Fragment) {
        validateFragmentProps(element);
      } else {
        validatePropTypes(element);
      }
      return element;
    }
    var didWarnAboutDeprecatedCreateFactory = false;
    function createFactoryWithValidation(type) {
      var validatedFactory = createElementWithValidation.bind(null, type);
      validatedFactory.type = type;
      {
        if (!didWarnAboutDeprecatedCreateFactory) {
          didWarnAboutDeprecatedCreateFactory = true;
          warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
        } // Legacy hook: remove it

        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function () {
            warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
      return validatedFactory;
    }
    function cloneElementWithValidation(element, props, children) {
      var newElement = cloneElement.apply(this, arguments);
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], newElement.type);
      }
      validatePropTypes(newElement);
      return newElement;
    }
    {
      try {
        var frozenObject = Object.freeze({});
        /* eslint-disable no-new */

        new Map([[frozenObject, null]]);
        new Set([frozenObject]);
        /* eslint-enable no-new */
      } catch (e) {}
    }
    var createElement$1 = createElementWithValidation;
    var cloneElement$1 = cloneElementWithValidation;
    var createFactory = createFactoryWithValidation;
    var Children = {
      map: mapChildren,
      forEach: forEachChildren,
      count: countChildren,
      toArray: toArray,
      only: onlyChild
    };
    exports.Children = Children;
    exports.Component = Component;
    exports.PureComponent = PureComponent;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
    exports.cloneElement = cloneElement$1;
    exports.createContext = createContext;
    exports.createElement = createElement$1;
    exports.createFactory = createFactory;
    exports.createRef = createRef;
    exports.forwardRef = forwardRef;
    exports.isValidElement = isValidElement;
    exports.lazy = lazy;
    exports.memo = memo;
    exports.useCallback = useCallback;
    exports.useContext = useContext;
    exports.useDebugValue = useDebugValue;
    exports.useEffect = useEffect;
    exports.useImperativeHandle = useImperativeHandle;
    exports.useLayoutEffect = useLayoutEffect;
    exports.useMemo = useMemo;
    exports.useReducer = useReducer;
    exports.useRef = useRef;
    exports.useState = useState;
    exports.version = ReactVersion;
  })();
}
});

var react = createCommonjsModule(function (module) {

{
  module.exports = react_development;
}
});

var interopRequireDefault = createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var compressed$1 = true;
var categories$1 = [
	{
		id: "people",
		name: "Smileys & People",
		emojis: [
			"grinning",
			"smiley",
			"smile",
			"grin",
			"laughing",
			"sweat_smile",
			"rolling_on_the_floor_laughing",
			"joy",
			"slightly_smiling_face",
			"upside_down_face",
			"wink",
			"blush",
			"innocent",
			"smiling_face_with_3_hearts",
			"heart_eyes",
			"star-struck",
			"kissing_heart",
			"kissing",
			"relaxed",
			"kissing_closed_eyes",
			"kissing_smiling_eyes",
			"yum",
			"stuck_out_tongue",
			"stuck_out_tongue_winking_eye",
			"zany_face",
			"stuck_out_tongue_closed_eyes",
			"money_mouth_face",
			"hugging_face",
			"face_with_hand_over_mouth",
			"shushing_face",
			"thinking_face",
			"zipper_mouth_face",
			"face_with_raised_eyebrow",
			"neutral_face",
			"expressionless",
			"no_mouth",
			"smirk",
			"unamused",
			"face_with_rolling_eyes",
			"grimacing",
			"lying_face",
			"relieved",
			"pensive",
			"sleepy",
			"drooling_face",
			"sleeping",
			"mask",
			"face_with_thermometer",
			"face_with_head_bandage",
			"nauseated_face",
			"face_vomiting",
			"sneezing_face",
			"hot_face",
			"cold_face",
			"woozy_face",
			"dizzy_face",
			"exploding_head",
			"face_with_cowboy_hat",
			"partying_face",
			"sunglasses",
			"nerd_face",
			"face_with_monocle",
			"confused",
			"worried",
			"slightly_frowning_face",
			"white_frowning_face",
			"open_mouth",
			"hushed",
			"astonished",
			"flushed",
			"pleading_face",
			"frowning",
			"anguished",
			"fearful",
			"cold_sweat",
			"disappointed_relieved",
			"cry",
			"sob",
			"scream",
			"confounded",
			"persevere",
			"disappointed",
			"sweat",
			"weary",
			"tired_face",
			"yawning_face",
			"triumph",
			"rage",
			"angry",
			"face_with_symbols_on_mouth",
			"smiling_imp",
			"imp",
			"skull",
			"skull_and_crossbones",
			"hankey",
			"clown_face",
			"japanese_ogre",
			"japanese_goblin",
			"ghost",
			"alien",
			"space_invader",
			"robot_face",
			"smiley_cat",
			"smile_cat",
			"joy_cat",
			"heart_eyes_cat",
			"smirk_cat",
			"kissing_cat",
			"scream_cat",
			"crying_cat_face",
			"pouting_cat",
			"see_no_evil",
			"hear_no_evil",
			"speak_no_evil",
			"wave",
			"raised_back_of_hand",
			"raised_hand_with_fingers_splayed",
			"hand",
			"spock-hand",
			"ok_hand",
			"pinching_hand",
			"v",
			"crossed_fingers",
			"i_love_you_hand_sign",
			"the_horns",
			"call_me_hand",
			"point_left",
			"point_right",
			"point_up_2",
			"middle_finger",
			"point_down",
			"point_up",
			"+1",
			"-1",
			"fist",
			"facepunch",
			"left-facing_fist",
			"right-facing_fist",
			"clap",
			"raised_hands",
			"open_hands",
			"palms_up_together",
			"handshake",
			"pray",
			"writing_hand",
			"nail_care",
			"selfie",
			"muscle",
			"mechanical_arm",
			"mechanical_leg",
			"leg",
			"foot",
			"ear",
			"ear_with_hearing_aid",
			"nose",
			"brain",
			"tooth",
			"bone",
			"eyes",
			"eye",
			"tongue",
			"lips",
			"baby",
			"child",
			"boy",
			"girl",
			"adult",
			"person_with_blond_hair",
			"man",
			"bearded_person",
			"red_haired_man",
			"curly_haired_man",
			"white_haired_man",
			"bald_man",
			"woman",
			"red_haired_woman",
			"red_haired_person",
			"curly_haired_woman",
			"curly_haired_person",
			"white_haired_woman",
			"white_haired_person",
			"bald_woman",
			"bald_person",
			"blond-haired-woman",
			"blond-haired-man",
			"older_adult",
			"older_man",
			"older_woman",
			"person_frowning",
			"man-frowning",
			"woman-frowning",
			"person_with_pouting_face",
			"man-pouting",
			"woman-pouting",
			"no_good",
			"man-gesturing-no",
			"woman-gesturing-no",
			"ok_woman",
			"man-gesturing-ok",
			"woman-gesturing-ok",
			"information_desk_person",
			"man-tipping-hand",
			"woman-tipping-hand",
			"raising_hand",
			"man-raising-hand",
			"woman-raising-hand",
			"deaf_person",
			"deaf_man",
			"deaf_woman",
			"bow",
			"man-bowing",
			"woman-bowing",
			"face_palm",
			"man-facepalming",
			"woman-facepalming",
			"shrug",
			"man-shrugging",
			"woman-shrugging",
			"health_worker",
			"male-doctor",
			"female-doctor",
			"student",
			"male-student",
			"female-student",
			"teacher",
			"male-teacher",
			"female-teacher",
			"judge",
			"male-judge",
			"female-judge",
			"farmer",
			"male-farmer",
			"female-farmer",
			"cook",
			"male-cook",
			"female-cook",
			"mechanic",
			"male-mechanic",
			"female-mechanic",
			"factory_worker",
			"male-factory-worker",
			"female-factory-worker",
			"office_worker",
			"male-office-worker",
			"female-office-worker",
			"scientist",
			"male-scientist",
			"female-scientist",
			"technologist",
			"male-technologist",
			"female-technologist",
			"singer",
			"male-singer",
			"female-singer",
			"artist",
			"male-artist",
			"female-artist",
			"pilot",
			"male-pilot",
			"female-pilot",
			"astronaut",
			"male-astronaut",
			"female-astronaut",
			"firefighter",
			"male-firefighter",
			"female-firefighter",
			"cop",
			"male-police-officer",
			"female-police-officer",
			"sleuth_or_spy",
			"male-detective",
			"female-detective",
			"guardsman",
			"male-guard",
			"female-guard",
			"construction_worker",
			"male-construction-worker",
			"female-construction-worker",
			"prince",
			"princess",
			"man_with_turban",
			"man-wearing-turban",
			"woman-wearing-turban",
			"man_with_gua_pi_mao",
			"person_with_headscarf",
			"man_in_tuxedo",
			"bride_with_veil",
			"pregnant_woman",
			"breast-feeding",
			"angel",
			"santa",
			"mrs_claus",
			"superhero",
			"male_superhero",
			"female_superhero",
			"supervillain",
			"male_supervillain",
			"female_supervillain",
			"mage",
			"male_mage",
			"female_mage",
			"fairy",
			"male_fairy",
			"female_fairy",
			"vampire",
			"male_vampire",
			"female_vampire",
			"merperson",
			"merman",
			"mermaid",
			"elf",
			"male_elf",
			"female_elf",
			"genie",
			"male_genie",
			"female_genie",
			"zombie",
			"male_zombie",
			"female_zombie",
			"massage",
			"man-getting-massage",
			"woman-getting-massage",
			"haircut",
			"man-getting-haircut",
			"woman-getting-haircut",
			"walking",
			"man-walking",
			"woman-walking",
			"standing_person",
			"man_standing",
			"woman_standing",
			"kneeling_person",
			"man_kneeling",
			"woman_kneeling",
			"person_with_probing_cane",
			"man_with_probing_cane",
			"woman_with_probing_cane",
			"person_in_motorized_wheelchair",
			"man_in_motorized_wheelchair",
			"woman_in_motorized_wheelchair",
			"person_in_manual_wheelchair",
			"man_in_manual_wheelchair",
			"woman_in_manual_wheelchair",
			"runner",
			"man-running",
			"woman-running",
			"dancer",
			"man_dancing",
			"man_in_business_suit_levitating",
			"dancers",
			"man-with-bunny-ears-partying",
			"woman-with-bunny-ears-partying",
			"person_in_steamy_room",
			"man_in_steamy_room",
			"woman_in_steamy_room",
			"person_climbing",
			"man_climbing",
			"woman_climbing",
			"fencer",
			"horse_racing",
			"skier",
			"snowboarder",
			"golfer",
			"man-golfing",
			"woman-golfing",
			"surfer",
			"man-surfing",
			"woman-surfing",
			"rowboat",
			"man-rowing-boat",
			"woman-rowing-boat",
			"swimmer",
			"man-swimming",
			"woman-swimming",
			"person_with_ball",
			"man-bouncing-ball",
			"woman-bouncing-ball",
			"weight_lifter",
			"man-lifting-weights",
			"woman-lifting-weights",
			"bicyclist",
			"man-biking",
			"woman-biking",
			"mountain_bicyclist",
			"man-mountain-biking",
			"woman-mountain-biking",
			"person_doing_cartwheel",
			"man-cartwheeling",
			"woman-cartwheeling",
			"wrestlers",
			"man-wrestling",
			"woman-wrestling",
			"water_polo",
			"man-playing-water-polo",
			"woman-playing-water-polo",
			"handball",
			"man-playing-handball",
			"woman-playing-handball",
			"juggling",
			"man-juggling",
			"woman-juggling",
			"person_in_lotus_position",
			"man_in_lotus_position",
			"woman_in_lotus_position",
			"bath",
			"sleeping_accommodation",
			"people_holding_hands",
			"two_women_holding_hands",
			"couple",
			"two_men_holding_hands",
			"couplekiss",
			"woman-kiss-man",
			"man-kiss-man",
			"woman-kiss-woman",
			"couple_with_heart",
			"woman-heart-man",
			"man-heart-man",
			"woman-heart-woman",
			"family",
			"man-woman-boy",
			"man-woman-girl",
			"man-woman-girl-boy",
			"man-woman-boy-boy",
			"man-woman-girl-girl",
			"man-man-boy",
			"man-man-girl",
			"man-man-girl-boy",
			"man-man-boy-boy",
			"man-man-girl-girl",
			"woman-woman-boy",
			"woman-woman-girl",
			"woman-woman-girl-boy",
			"woman-woman-boy-boy",
			"woman-woman-girl-girl",
			"man-boy",
			"man-boy-boy",
			"man-girl",
			"man-girl-boy",
			"man-girl-girl",
			"woman-boy",
			"woman-boy-boy",
			"woman-girl",
			"woman-girl-boy",
			"woman-girl-girl",
			"speaking_head_in_silhouette",
			"bust_in_silhouette",
			"busts_in_silhouette",
			"footprints",
			"kiss",
			"love_letter",
			"cupid",
			"gift_heart",
			"sparkling_heart",
			"heartpulse",
			"heartbeat",
			"revolving_hearts",
			"two_hearts",
			"heart_decoration",
			"heavy_heart_exclamation_mark_ornament",
			"broken_heart",
			"heart",
			"orange_heart",
			"yellow_heart",
			"green_heart",
			"blue_heart",
			"purple_heart",
			"brown_heart",
			"black_heart",
			"white_heart",
			"100",
			"anger",
			"boom",
			"dizzy",
			"sweat_drops",
			"dash",
			"hole",
			"bomb",
			"speech_balloon",
			"eye-in-speech-bubble",
			"left_speech_bubble",
			"right_anger_bubble",
			"thought_balloon",
			"zzz"
		]
	},
	{
		id: "nature",
		name: "Animals & Nature",
		emojis: [
			"monkey_face",
			"monkey",
			"gorilla",
			"orangutan",
			"dog",
			"dog2",
			"guide_dog",
			"service_dog",
			"poodle",
			"wolf",
			"fox_face",
			"raccoon",
			"cat",
			"cat2",
			"lion_face",
			"tiger",
			"tiger2",
			"leopard",
			"horse",
			"racehorse",
			"unicorn_face",
			"zebra_face",
			"deer",
			"cow",
			"ox",
			"water_buffalo",
			"cow2",
			"pig",
			"pig2",
			"boar",
			"pig_nose",
			"ram",
			"sheep",
			"goat",
			"dromedary_camel",
			"camel",
			"llama",
			"giraffe_face",
			"elephant",
			"rhinoceros",
			"hippopotamus",
			"mouse",
			"mouse2",
			"rat",
			"hamster",
			"rabbit",
			"rabbit2",
			"chipmunk",
			"hedgehog",
			"bat",
			"bear",
			"koala",
			"panda_face",
			"sloth",
			"otter",
			"skunk",
			"kangaroo",
			"badger",
			"feet",
			"turkey",
			"chicken",
			"rooster",
			"hatching_chick",
			"baby_chick",
			"hatched_chick",
			"bird",
			"penguin",
			"dove_of_peace",
			"eagle",
			"duck",
			"swan",
			"owl",
			"flamingo",
			"peacock",
			"parrot",
			"frog",
			"crocodile",
			"turtle",
			"lizard",
			"snake",
			"dragon_face",
			"dragon",
			"sauropod",
			"t-rex",
			"whale",
			"whale2",
			"dolphin",
			"fish",
			"tropical_fish",
			"blowfish",
			"shark",
			"octopus",
			"shell",
			"snail",
			"butterfly",
			"bug",
			"ant",
			"bee",
			"beetle",
			"cricket",
			"spider",
			"spider_web",
			"scorpion",
			"mosquito",
			"microbe",
			"bouquet",
			"cherry_blossom",
			"white_flower",
			"rosette",
			"rose",
			"wilted_flower",
			"hibiscus",
			"sunflower",
			"blossom",
			"tulip",
			"seedling",
			"evergreen_tree",
			"deciduous_tree",
			"palm_tree",
			"cactus",
			"ear_of_rice",
			"herb",
			"shamrock",
			"four_leaf_clover",
			"maple_leaf",
			"fallen_leaf",
			"leaves"
		]
	},
	{
		id: "foods",
		name: "Food & Drink",
		emojis: [
			"grapes",
			"melon",
			"watermelon",
			"tangerine",
			"lemon",
			"banana",
			"pineapple",
			"mango",
			"apple",
			"green_apple",
			"pear",
			"peach",
			"cherries",
			"strawberry",
			"kiwifruit",
			"tomato",
			"coconut",
			"avocado",
			"eggplant",
			"potato",
			"carrot",
			"corn",
			"hot_pepper",
			"cucumber",
			"leafy_green",
			"broccoli",
			"garlic",
			"onion",
			"mushroom",
			"peanuts",
			"chestnut",
			"bread",
			"croissant",
			"baguette_bread",
			"pretzel",
			"bagel",
			"pancakes",
			"waffle",
			"cheese_wedge",
			"meat_on_bone",
			"poultry_leg",
			"cut_of_meat",
			"bacon",
			"hamburger",
			"fries",
			"pizza",
			"hotdog",
			"sandwich",
			"taco",
			"burrito",
			"stuffed_flatbread",
			"falafel",
			"egg",
			"fried_egg",
			"shallow_pan_of_food",
			"stew",
			"bowl_with_spoon",
			"green_salad",
			"popcorn",
			"butter",
			"salt",
			"canned_food",
			"bento",
			"rice_cracker",
			"rice_ball",
			"rice",
			"curry",
			"ramen",
			"spaghetti",
			"sweet_potato",
			"oden",
			"sushi",
			"fried_shrimp",
			"fish_cake",
			"moon_cake",
			"dango",
			"dumpling",
			"fortune_cookie",
			"takeout_box",
			"crab",
			"lobster",
			"shrimp",
			"squid",
			"oyster",
			"icecream",
			"shaved_ice",
			"ice_cream",
			"doughnut",
			"cookie",
			"birthday",
			"cake",
			"cupcake",
			"pie",
			"chocolate_bar",
			"candy",
			"lollipop",
			"custard",
			"honey_pot",
			"baby_bottle",
			"glass_of_milk",
			"coffee",
			"tea",
			"sake",
			"champagne",
			"wine_glass",
			"cocktail",
			"tropical_drink",
			"beer",
			"beers",
			"clinking_glasses",
			"tumbler_glass",
			"cup_with_straw",
			"beverage_box",
			"mate_drink",
			"ice_cube",
			"chopsticks",
			"knife_fork_plate",
			"fork_and_knife",
			"spoon",
			"hocho",
			"amphora"
		]
	},
	{
		id: "activity",
		name: "Activities",
		emojis: [
			"jack_o_lantern",
			"christmas_tree",
			"fireworks",
			"sparkler",
			"firecracker",
			"sparkles",
			"balloon",
			"tada",
			"confetti_ball",
			"tanabata_tree",
			"bamboo",
			"dolls",
			"flags",
			"wind_chime",
			"rice_scene",
			"red_envelope",
			"ribbon",
			"gift",
			"reminder_ribbon",
			"admission_tickets",
			"ticket",
			"medal",
			"trophy",
			"sports_medal",
			"first_place_medal",
			"second_place_medal",
			"third_place_medal",
			"soccer",
			"baseball",
			"softball",
			"basketball",
			"volleyball",
			"football",
			"rugby_football",
			"tennis",
			"flying_disc",
			"bowling",
			"cricket_bat_and_ball",
			"field_hockey_stick_and_ball",
			"ice_hockey_stick_and_puck",
			"lacrosse",
			"table_tennis_paddle_and_ball",
			"badminton_racquet_and_shuttlecock",
			"boxing_glove",
			"martial_arts_uniform",
			"goal_net",
			"golf",
			"ice_skate",
			"fishing_pole_and_fish",
			"diving_mask",
			"running_shirt_with_sash",
			"ski",
			"sled",
			"curling_stone",
			"dart",
			"yo-yo",
			"kite",
			"8ball",
			"crystal_ball",
			"nazar_amulet",
			"video_game",
			"joystick",
			"slot_machine",
			"game_die",
			"jigsaw",
			"teddy_bear",
			"spades",
			"hearts",
			"diamonds",
			"clubs",
			"chess_pawn",
			"black_joker",
			"mahjong",
			"flower_playing_cards",
			"performing_arts",
			"frame_with_picture",
			"art",
			"thread",
			"yarn"
		]
	},
	{
		id: "places",
		name: "Travel & Places",
		emojis: [
			"earth_africa",
			"earth_americas",
			"earth_asia",
			"globe_with_meridians",
			"world_map",
			"japan",
			"compass",
			"snow_capped_mountain",
			"mountain",
			"volcano",
			"mount_fuji",
			"camping",
			"beach_with_umbrella",
			"desert",
			"desert_island",
			"national_park",
			"stadium",
			"classical_building",
			"building_construction",
			"bricks",
			"house_buildings",
			"derelict_house_building",
			"house",
			"house_with_garden",
			"office",
			"post_office",
			"european_post_office",
			"hospital",
			"bank",
			"hotel",
			"love_hotel",
			"convenience_store",
			"school",
			"department_store",
			"factory",
			"japanese_castle",
			"european_castle",
			"wedding",
			"tokyo_tower",
			"statue_of_liberty",
			"church",
			"mosque",
			"hindu_temple",
			"synagogue",
			"shinto_shrine",
			"kaaba",
			"fountain",
			"tent",
			"foggy",
			"night_with_stars",
			"cityscape",
			"sunrise_over_mountains",
			"sunrise",
			"city_sunset",
			"city_sunrise",
			"bridge_at_night",
			"hotsprings",
			"carousel_horse",
			"ferris_wheel",
			"roller_coaster",
			"barber",
			"circus_tent",
			"steam_locomotive",
			"railway_car",
			"bullettrain_side",
			"bullettrain_front",
			"train2",
			"metro",
			"light_rail",
			"station",
			"tram",
			"monorail",
			"mountain_railway",
			"train",
			"bus",
			"oncoming_bus",
			"trolleybus",
			"minibus",
			"ambulance",
			"fire_engine",
			"police_car",
			"oncoming_police_car",
			"taxi",
			"oncoming_taxi",
			"car",
			"oncoming_automobile",
			"blue_car",
			"truck",
			"articulated_lorry",
			"tractor",
			"racing_car",
			"racing_motorcycle",
			"motor_scooter",
			"manual_wheelchair",
			"motorized_wheelchair",
			"auto_rickshaw",
			"bike",
			"scooter",
			"skateboard",
			"busstop",
			"motorway",
			"railway_track",
			"oil_drum",
			"fuelpump",
			"rotating_light",
			"traffic_light",
			"vertical_traffic_light",
			"octagonal_sign",
			"construction",
			"anchor",
			"boat",
			"canoe",
			"speedboat",
			"passenger_ship",
			"ferry",
			"motor_boat",
			"ship",
			"airplane",
			"small_airplane",
			"airplane_departure",
			"airplane_arriving",
			"parachute",
			"seat",
			"helicopter",
			"suspension_railway",
			"mountain_cableway",
			"aerial_tramway",
			"satellite",
			"rocket",
			"flying_saucer",
			"bellhop_bell",
			"luggage",
			"hourglass",
			"hourglass_flowing_sand",
			"watch",
			"alarm_clock",
			"stopwatch",
			"timer_clock",
			"mantelpiece_clock",
			"clock12",
			"clock1230",
			"clock1",
			"clock130",
			"clock2",
			"clock230",
			"clock3",
			"clock330",
			"clock4",
			"clock430",
			"clock5",
			"clock530",
			"clock6",
			"clock630",
			"clock7",
			"clock730",
			"clock8",
			"clock830",
			"clock9",
			"clock930",
			"clock10",
			"clock1030",
			"clock11",
			"clock1130",
			"new_moon",
			"waxing_crescent_moon",
			"first_quarter_moon",
			"moon",
			"full_moon",
			"waning_gibbous_moon",
			"last_quarter_moon",
			"waning_crescent_moon",
			"crescent_moon",
			"new_moon_with_face",
			"first_quarter_moon_with_face",
			"last_quarter_moon_with_face",
			"thermometer",
			"sunny",
			"full_moon_with_face",
			"sun_with_face",
			"ringed_planet",
			"star",
			"star2",
			"stars",
			"milky_way",
			"cloud",
			"partly_sunny",
			"thunder_cloud_and_rain",
			"mostly_sunny",
			"barely_sunny",
			"partly_sunny_rain",
			"rain_cloud",
			"snow_cloud",
			"lightning",
			"tornado",
			"fog",
			"wind_blowing_face",
			"cyclone",
			"rainbow",
			"closed_umbrella",
			"umbrella",
			"umbrella_with_rain_drops",
			"umbrella_on_ground",
			"zap",
			"snowflake",
			"snowman",
			"snowman_without_snow",
			"comet",
			"fire",
			"droplet",
			"ocean"
		]
	},
	{
		id: "objects",
		name: "Objects",
		emojis: [
			"eyeglasses",
			"dark_sunglasses",
			"goggles",
			"lab_coat",
			"safety_vest",
			"necktie",
			"shirt",
			"jeans",
			"scarf",
			"gloves",
			"coat",
			"socks",
			"dress",
			"kimono",
			"sari",
			"one-piece_swimsuit",
			"briefs",
			"shorts",
			"bikini",
			"womans_clothes",
			"purse",
			"handbag",
			"pouch",
			"shopping_bags",
			"school_satchel",
			"mans_shoe",
			"athletic_shoe",
			"hiking_boot",
			"womans_flat_shoe",
			"high_heel",
			"sandal",
			"ballet_shoes",
			"boot",
			"crown",
			"womans_hat",
			"tophat",
			"mortar_board",
			"billed_cap",
			"helmet_with_white_cross",
			"prayer_beads",
			"lipstick",
			"ring",
			"gem",
			"mute",
			"speaker",
			"sound",
			"loud_sound",
			"loudspeaker",
			"mega",
			"postal_horn",
			"bell",
			"no_bell",
			"musical_score",
			"musical_note",
			"notes",
			"studio_microphone",
			"level_slider",
			"control_knobs",
			"microphone",
			"headphones",
			"radio",
			"saxophone",
			"guitar",
			"musical_keyboard",
			"trumpet",
			"violin",
			"banjo",
			"drum_with_drumsticks",
			"iphone",
			"calling",
			"phone",
			"telephone_receiver",
			"pager",
			"fax",
			"battery",
			"electric_plug",
			"computer",
			"desktop_computer",
			"printer",
			"keyboard",
			"three_button_mouse",
			"trackball",
			"minidisc",
			"floppy_disk",
			"cd",
			"dvd",
			"abacus",
			"movie_camera",
			"film_frames",
			"film_projector",
			"clapper",
			"tv",
			"camera",
			"camera_with_flash",
			"video_camera",
			"vhs",
			"mag",
			"mag_right",
			"candle",
			"bulb",
			"flashlight",
			"izakaya_lantern",
			"diya_lamp",
			"notebook_with_decorative_cover",
			"closed_book",
			"book",
			"green_book",
			"blue_book",
			"orange_book",
			"books",
			"notebook",
			"ledger",
			"page_with_curl",
			"scroll",
			"page_facing_up",
			"newspaper",
			"rolled_up_newspaper",
			"bookmark_tabs",
			"bookmark",
			"label",
			"moneybag",
			"yen",
			"dollar",
			"euro",
			"pound",
			"money_with_wings",
			"credit_card",
			"receipt",
			"chart",
			"currency_exchange",
			"heavy_dollar_sign",
			"email",
			"e-mail",
			"incoming_envelope",
			"envelope_with_arrow",
			"outbox_tray",
			"inbox_tray",
			"package",
			"mailbox",
			"mailbox_closed",
			"mailbox_with_mail",
			"mailbox_with_no_mail",
			"postbox",
			"ballot_box_with_ballot",
			"pencil2",
			"black_nib",
			"lower_left_fountain_pen",
			"lower_left_ballpoint_pen",
			"lower_left_paintbrush",
			"lower_left_crayon",
			"memo",
			"briefcase",
			"file_folder",
			"open_file_folder",
			"card_index_dividers",
			"date",
			"calendar",
			"spiral_note_pad",
			"spiral_calendar_pad",
			"card_index",
			"chart_with_upwards_trend",
			"chart_with_downwards_trend",
			"bar_chart",
			"clipboard",
			"pushpin",
			"round_pushpin",
			"paperclip",
			"linked_paperclips",
			"straight_ruler",
			"triangular_ruler",
			"scissors",
			"card_file_box",
			"file_cabinet",
			"wastebasket",
			"lock",
			"unlock",
			"lock_with_ink_pen",
			"closed_lock_with_key",
			"key",
			"old_key",
			"hammer",
			"axe",
			"pick",
			"hammer_and_pick",
			"hammer_and_wrench",
			"dagger_knife",
			"crossed_swords",
			"gun",
			"bow_and_arrow",
			"shield",
			"wrench",
			"nut_and_bolt",
			"gear",
			"compression",
			"scales",
			"probing_cane",
			"link",
			"chains",
			"toolbox",
			"magnet",
			"alembic",
			"test_tube",
			"petri_dish",
			"dna",
			"microscope",
			"telescope",
			"satellite_antenna",
			"syringe",
			"drop_of_blood",
			"pill",
			"adhesive_bandage",
			"stethoscope",
			"door",
			"bed",
			"couch_and_lamp",
			"chair",
			"toilet",
			"shower",
			"bathtub",
			"razor",
			"lotion_bottle",
			"safety_pin",
			"broom",
			"basket",
			"roll_of_paper",
			"soap",
			"sponge",
			"fire_extinguisher",
			"shopping_trolley",
			"smoking",
			"coffin",
			"funeral_urn",
			"moyai"
		]
	},
	{
		id: "symbols",
		name: "Symbols",
		emojis: [
			"atm",
			"put_litter_in_its_place",
			"potable_water",
			"wheelchair",
			"mens",
			"womens",
			"restroom",
			"baby_symbol",
			"wc",
			"passport_control",
			"customs",
			"baggage_claim",
			"left_luggage",
			"warning",
			"children_crossing",
			"no_entry",
			"no_entry_sign",
			"no_bicycles",
			"no_smoking",
			"do_not_litter",
			"non-potable_water",
			"no_pedestrians",
			"no_mobile_phones",
			"underage",
			"radioactive_sign",
			"biohazard_sign",
			"arrow_up",
			"arrow_upper_right",
			"arrow_right",
			"arrow_lower_right",
			"arrow_down",
			"arrow_lower_left",
			"arrow_left",
			"arrow_upper_left",
			"arrow_up_down",
			"left_right_arrow",
			"leftwards_arrow_with_hook",
			"arrow_right_hook",
			"arrow_heading_up",
			"arrow_heading_down",
			"arrows_clockwise",
			"arrows_counterclockwise",
			"back",
			"end",
			"on",
			"soon",
			"top",
			"place_of_worship",
			"atom_symbol",
			"om_symbol",
			"star_of_david",
			"wheel_of_dharma",
			"yin_yang",
			"latin_cross",
			"orthodox_cross",
			"star_and_crescent",
			"peace_symbol",
			"menorah_with_nine_branches",
			"six_pointed_star",
			"aries",
			"taurus",
			"gemini",
			"cancer",
			"leo",
			"virgo",
			"libra",
			"scorpius",
			"sagittarius",
			"capricorn",
			"aquarius",
			"pisces",
			"ophiuchus",
			"twisted_rightwards_arrows",
			"repeat",
			"repeat_one",
			"arrow_forward",
			"fast_forward",
			"black_right_pointing_double_triangle_with_vertical_bar",
			"black_right_pointing_triangle_with_double_vertical_bar",
			"arrow_backward",
			"rewind",
			"black_left_pointing_double_triangle_with_vertical_bar",
			"arrow_up_small",
			"arrow_double_up",
			"arrow_down_small",
			"arrow_double_down",
			"double_vertical_bar",
			"black_square_for_stop",
			"black_circle_for_record",
			"eject",
			"cinema",
			"low_brightness",
			"high_brightness",
			"signal_strength",
			"vibration_mode",
			"mobile_phone_off",
			"female_sign",
			"male_sign",
			"medical_symbol",
			"infinity",
			"recycle",
			"fleur_de_lis",
			"trident",
			"name_badge",
			"beginner",
			"o",
			"white_check_mark",
			"ballot_box_with_check",
			"heavy_check_mark",
			"heavy_multiplication_x",
			"x",
			"negative_squared_cross_mark",
			"heavy_plus_sign",
			"heavy_minus_sign",
			"heavy_division_sign",
			"curly_loop",
			"loop",
			"part_alternation_mark",
			"eight_spoked_asterisk",
			"eight_pointed_black_star",
			"sparkle",
			"bangbang",
			"interrobang",
			"question",
			"grey_question",
			"grey_exclamation",
			"exclamation",
			"wavy_dash",
			"copyright",
			"registered",
			"tm",
			"hash",
			"keycap_star",
			"zero",
			"one",
			"two",
			"three",
			"four",
			"five",
			"six",
			"seven",
			"eight",
			"nine",
			"keycap_ten",
			"capital_abcd",
			"abcd",
			"1234",
			"symbols",
			"abc",
			"a",
			"ab",
			"b",
			"cl",
			"cool",
			"free",
			"information_source",
			"id",
			"m",
			"new",
			"ng",
			"o2",
			"ok",
			"parking",
			"sos",
			"up",
			"vs",
			"koko",
			"sa",
			"u6708",
			"u6709",
			"u6307",
			"ideograph_advantage",
			"u5272",
			"u7121",
			"u7981",
			"accept",
			"u7533",
			"u5408",
			"u7a7a",
			"congratulations",
			"secret",
			"u55b6",
			"u6e80",
			"red_circle",
			"large_orange_circle",
			"large_yellow_circle",
			"large_green_circle",
			"large_blue_circle",
			"large_purple_circle",
			"large_brown_circle",
			"black_circle",
			"white_circle",
			"large_red_square",
			"large_orange_square",
			"large_yellow_square",
			"large_green_square",
			"large_blue_square",
			"large_purple_square",
			"large_brown_square",
			"black_large_square",
			"white_large_square",
			"black_medium_square",
			"white_medium_square",
			"black_medium_small_square",
			"white_medium_small_square",
			"black_small_square",
			"white_small_square",
			"large_orange_diamond",
			"large_blue_diamond",
			"small_orange_diamond",
			"small_blue_diamond",
			"small_red_triangle",
			"small_red_triangle_down",
			"diamond_shape_with_a_dot_inside",
			"radio_button",
			"white_square_button",
			"black_square_button"
		]
	},
	{
		id: "flags",
		name: "Flags",
		emojis: [
			"checkered_flag",
			"cn",
			"crossed_flags",
			"de",
			"es",
			"flag-ac",
			"flag-ad",
			"flag-ae",
			"flag-af",
			"flag-ag",
			"flag-ai",
			"flag-al",
			"flag-am",
			"flag-ao",
			"flag-aq",
			"flag-ar",
			"flag-as",
			"flag-at",
			"flag-au",
			"flag-aw",
			"flag-ax",
			"flag-az",
			"flag-ba",
			"flag-bb",
			"flag-bd",
			"flag-be",
			"flag-bf",
			"flag-bg",
			"flag-bh",
			"flag-bi",
			"flag-bj",
			"flag-bl",
			"flag-bm",
			"flag-bn",
			"flag-bo",
			"flag-bq",
			"flag-br",
			"flag-bs",
			"flag-bt",
			"flag-bv",
			"flag-bw",
			"flag-by",
			"flag-bz",
			"flag-ca",
			"flag-cc",
			"flag-cd",
			"flag-cf",
			"flag-cg",
			"flag-ch",
			"flag-ci",
			"flag-ck",
			"flag-cl",
			"flag-cm",
			"flag-co",
			"flag-cp",
			"flag-cr",
			"flag-cu",
			"flag-cv",
			"flag-cw",
			"flag-cx",
			"flag-cy",
			"flag-cz",
			"flag-dg",
			"flag-dj",
			"flag-dk",
			"flag-dm",
			"flag-do",
			"flag-dz",
			"flag-ea",
			"flag-ec",
			"flag-ee",
			"flag-eg",
			"flag-eh",
			"flag-england",
			"flag-er",
			"flag-et",
			"flag-eu",
			"flag-fi",
			"flag-fj",
			"flag-fk",
			"flag-fm",
			"flag-fo",
			"flag-ga",
			"flag-gd",
			"flag-ge",
			"flag-gf",
			"flag-gg",
			"flag-gh",
			"flag-gi",
			"flag-gl",
			"flag-gm",
			"flag-gn",
			"flag-gp",
			"flag-gq",
			"flag-gr",
			"flag-gs",
			"flag-gt",
			"flag-gu",
			"flag-gw",
			"flag-gy",
			"flag-hk",
			"flag-hm",
			"flag-hn",
			"flag-hr",
			"flag-ht",
			"flag-hu",
			"flag-ic",
			"flag-id",
			"flag-ie",
			"flag-il",
			"flag-im",
			"flag-in",
			"flag-io",
			"flag-iq",
			"flag-ir",
			"flag-is",
			"flag-je",
			"flag-jm",
			"flag-jo",
			"flag-ke",
			"flag-kg",
			"flag-kh",
			"flag-ki",
			"flag-km",
			"flag-kn",
			"flag-kp",
			"flag-kw",
			"flag-ky",
			"flag-kz",
			"flag-la",
			"flag-lb",
			"flag-lc",
			"flag-li",
			"flag-lk",
			"flag-lr",
			"flag-ls",
			"flag-lt",
			"flag-lu",
			"flag-lv",
			"flag-ly",
			"flag-ma",
			"flag-mc",
			"flag-md",
			"flag-me",
			"flag-mf",
			"flag-mg",
			"flag-mh",
			"flag-mk",
			"flag-ml",
			"flag-mm",
			"flag-mn",
			"flag-mo",
			"flag-mp",
			"flag-mq",
			"flag-mr",
			"flag-ms",
			"flag-mt",
			"flag-mu",
			"flag-mv",
			"flag-mw",
			"flag-mx",
			"flag-my",
			"flag-mz",
			"flag-na",
			"flag-nc",
			"flag-ne",
			"flag-nf",
			"flag-ng",
			"flag-ni",
			"flag-nl",
			"flag-no",
			"flag-np",
			"flag-nr",
			"flag-nu",
			"flag-nz",
			"flag-om",
			"flag-pa",
			"flag-pe",
			"flag-pf",
			"flag-pg",
			"flag-ph",
			"flag-pk",
			"flag-pl",
			"flag-pm",
			"flag-pn",
			"flag-pr",
			"flag-ps",
			"flag-pt",
			"flag-pw",
			"flag-py",
			"flag-qa",
			"flag-re",
			"flag-ro",
			"flag-rs",
			"flag-rw",
			"flag-sa",
			"flag-sb",
			"flag-sc",
			"flag-scotland",
			"flag-sd",
			"flag-se",
			"flag-sg",
			"flag-sh",
			"flag-si",
			"flag-sj",
			"flag-sk",
			"flag-sl",
			"flag-sm",
			"flag-sn",
			"flag-so",
			"flag-sr",
			"flag-ss",
			"flag-st",
			"flag-sv",
			"flag-sx",
			"flag-sy",
			"flag-sz",
			"flag-ta",
			"flag-tc",
			"flag-td",
			"flag-tf",
			"flag-tg",
			"flag-th",
			"flag-tj",
			"flag-tk",
			"flag-tl",
			"flag-tm",
			"flag-tn",
			"flag-to",
			"flag-tr",
			"flag-tt",
			"flag-tv",
			"flag-tw",
			"flag-tz",
			"flag-ua",
			"flag-ug",
			"flag-um",
			"flag-uy",
			"flag-uz",
			"flag-va",
			"flag-vc",
			"flag-ve",
			"flag-vg",
			"flag-vi",
			"flag-vn",
			"flag-vu",
			"flag-wales",
			"flag-wf",
			"flag-ws",
			"flag-xk",
			"flag-ye",
			"flag-yt",
			"flag-za",
			"flag-zm",
			"flag-zw",
			"fr",
			"gb",
			"it",
			"jp",
			"kr",
			"pirate_flag",
			"rainbow-flag",
			"ru",
			"triangular_flag_on_post",
			"us",
			"waving_black_flag",
			"waving_white_flag"
		]
	}
];
var emojis$1 = {
	"100": {
		a: "Hundred Points Symbol",
		b: "1F4AF",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"score",
			"perfect",
			"numbers",
			"century",
			"exam",
			"quiz",
			"test",
			"pass",
			"hundred"
		],
		k: [
			26,
			5
		],
		o: 2
	},
	"1234": {
		a: "Input Symbol for Numbers",
		b: "1F522",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"numbers",
			"blue-square"
		],
		k: [
			28,
			5
		],
		o: 2
	},
	grinning: {
		a: "Grinning Face",
		b: "1F600",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"smile",
			"happy",
			"joy",
			":D",
			"grin"
		],
		k: [
			30,
			35
		],
		m: ":D",
		o: 2
	},
	monkey_face: {
		a: "Monkey Face",
		b: "1F435",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"circus"
		],
		k: [
			12,
			25
		],
		l: [
			":o)"
		],
		o: 2
	},
	grapes: {
		a: "Grapes",
		b: "1F347",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fruit",
			"food",
			"wine"
		],
		k: [
			6,
			31
		],
		o: 2
	},
	eyeglasses: {
		a: "Eyeglasses",
		b: "1F453",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fashion",
			"accessories",
			"eyesight",
			"nerdy",
			"dork",
			"geek"
		],
		k: [
			14,
			7
		],
		o: 2
	},
	checkered_flag: {
		a: "Chequered Flag",
		b: "1F3C1",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"contest",
			"finishline",
			"race",
			"gokart"
		],
		k: [
			8,
			39
		],
		o: 2
	},
	jack_o_lantern: {
		a: "Jack-O-Lantern",
		b: "1F383",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"halloween",
			"light",
			"pumpkin",
			"creepy",
			"fall"
		],
		k: [
			7,
			34
		],
		o: 2
	},
	wave: {
		skin_variations: {
			"1F3FB": {
				unified: "1F44B-1F3FB",
				non_qualified: null,
				image: "1f44b-1f3fb.png",
				sheet_x: 13,
				sheet_y: 27,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F44B-1F3FC",
				non_qualified: null,
				image: "1f44b-1f3fc.png",
				sheet_x: 13,
				sheet_y: 28,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F44B-1F3FD",
				non_qualified: null,
				image: "1f44b-1f3fd.png",
				sheet_x: 13,
				sheet_y: 29,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F44B-1F3FE",
				non_qualified: null,
				image: "1f44b-1f3fe.png",
				sheet_x: 13,
				sheet_y: 30,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F44B-1F3FF",
				non_qualified: null,
				image: "1f44b-1f3ff.png",
				sheet_x: 13,
				sheet_y: 31,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Waving Hand Sign",
		b: "1F44B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"hands",
			"gesture",
			"goodbye",
			"solong",
			"farewell",
			"hello",
			"hi",
			"palm"
		],
		k: [
			13,
			26
		],
		o: 2
	},
	earth_africa: {
		a: "Earth Globe Europe-Africa",
		b: "1F30D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"globe",
			"world",
			"international"
		],
		k: [
			5,
			32
		],
		o: 2
	},
	atm: {
		a: "Automated Teller Machine",
		b: "1F3E7",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"money",
			"sales",
			"cash",
			"blue-square",
			"payment",
			"bank"
		],
		k: [
			11,
			1
		],
		o: 2
	},
	melon: {
		a: "Melon",
		b: "1F348",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fruit",
			"nature",
			"food"
		],
		k: [
			6,
			32
		],
		o: 2
	},
	triangular_flag_on_post: {
		a: "Triangular Flag on Post",
		b: "1F6A9",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"mark",
			"milestone",
			"place"
		],
		k: [
			35,
			0
		],
		o: 2
	},
	put_litter_in_its_place: {
		a: "Put Litter in Its Place Symbol",
		b: "1F6AE",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"sign",
			"human",
			"info"
		],
		k: [
			35,
			5
		],
		o: 2
	},
	christmas_tree: {
		a: "Christmas Tree",
		b: "1F384",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"festival",
			"vacation",
			"december",
			"xmas",
			"celebration"
		],
		k: [
			7,
			35
		],
		o: 2
	},
	monkey: {
		a: "Monkey",
		b: "1F412",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"banana",
			"circus"
		],
		k: [
			11,
			46
		],
		o: 2
	},
	earth_americas: {
		a: "Earth Globe Americas",
		b: "1F30E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"globe",
			"world",
			"USA",
			"international"
		],
		k: [
			5,
			33
		],
		o: 2
	},
	dark_sunglasses: {
		a: "Dark Sunglasses",
		b: "1F576-FE0F",
		c: "1F576",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"cool",
			"accessories"
		],
		k: [
			29,
			33
		],
		o: 2
	},
	raised_back_of_hand: {
		skin_variations: {
			"1F3FB": {
				unified: "1F91A-1F3FB",
				non_qualified: null,
				image: "1f91a-1f3fb.png",
				sheet_x: 37,
				sheet_y: 44,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F91A-1F3FC",
				non_qualified: null,
				image: "1f91a-1f3fc.png",
				sheet_x: 37,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F91A-1F3FD",
				non_qualified: null,
				image: "1f91a-1f3fd.png",
				sheet_x: 37,
				sheet_y: 46,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F91A-1F3FE",
				non_qualified: null,
				image: "1f91a-1f3fe.png",
				sheet_x: 37,
				sheet_y: 47,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F91A-1F3FF",
				non_qualified: null,
				image: "1f91a-1f3ff.png",
				sheet_x: 37,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Raised Back of Hand",
		b: "1F91A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fingers",
			"raised",
			"backhand"
		],
		k: [
			37,
			43
		],
		o: 4
	},
	smiley: {
		a: "Smiling Face with Open Mouth",
		b: "1F603",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"happy",
			"joy",
			"haha",
			":D",
			":)",
			"smile",
			"funny"
		],
		k: [
			30,
			38
		],
		l: [
			"=)",
			"=-)"
		],
		m: ":)",
		o: 2
	},
	earth_asia: {
		a: "Earth Globe Asia-Australia",
		b: "1F30F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"globe",
			"world",
			"east",
			"international"
		],
		k: [
			5,
			34
		],
		o: 2
	},
	crossed_flags: {
		a: "Crossed Flags",
		b: "1F38C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"japanese",
			"nation",
			"country",
			"border"
		],
		k: [
			7,
			48
		],
		o: 2
	},
	watermelon: {
		a: "Watermelon",
		b: "1F349",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fruit",
			"food",
			"picnic",
			"summer"
		],
		k: [
			6,
			33
		],
		o: 2
	},
	goggles: {
		a: "Goggles",
		b: "1F97D",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			15
		],
		o: 11
	},
	raised_hand_with_fingers_splayed: {
		skin_variations: {
			"1F3FB": {
				unified: "1F590-1F3FB",
				non_qualified: null,
				image: "1f590-1f3fb.png",
				sheet_x: 29,
				sheet_y: 49,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F590-1F3FC",
				non_qualified: null,
				image: "1f590-1f3fc.png",
				sheet_x: 29,
				sheet_y: 50,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F590-1F3FD",
				non_qualified: null,
				image: "1f590-1f3fd.png",
				sheet_x: 29,
				sheet_y: 51,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F590-1F3FE",
				non_qualified: null,
				image: "1f590-1f3fe.png",
				sheet_x: 29,
				sheet_y: 52,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F590-1F3FF",
				non_qualified: null,
				image: "1f590-1f3ff.png",
				sheet_x: 29,
				sheet_y: 53,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Raised Hand with Fingers Splayed",
		b: "1F590-FE0F",
		c: "1F590",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"hand",
			"fingers",
			"palm"
		],
		k: [
			29,
			48
		],
		o: 2
	},
	smile: {
		a: "Smiling Face with Open Mouth and Smiling Eyes",
		b: "1F604",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"happy",
			"joy",
			"funny",
			"haha",
			"laugh",
			"like",
			":D",
			":)"
		],
		k: [
			30,
			39
		],
		l: [
			"C:",
			"c:",
			":D",
			":-D"
		],
		m: ":)",
		o: 2
	},
	potable_water: {
		a: "Potable Water Symbol",
		b: "1F6B0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"liquid",
			"restroom",
			"cleaning",
			"faucet"
		],
		k: [
			35,
			7
		],
		o: 2
	},
	fireworks: {
		a: "Fireworks",
		b: "1F386",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"festival",
			"carnival",
			"congratulations"
		],
		k: [
			7,
			42
		],
		o: 2
	},
	gorilla: {
		a: "Gorilla",
		b: "1F98D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"circus"
		],
		k: [
			42,
			31
		],
		o: 4
	},
	lab_coat: {
		a: "Lab Coat",
		b: "1F97C",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			14
		],
		o: 11
	},
	tangerine: {
		a: "Tangerine",
		b: "1F34A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"fruit",
			"nature",
			"orange"
		],
		k: [
			6,
			34
		],
		o: 2
	},
	wheelchair: {
		a: "Wheelchair Symbol",
		b: "267F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"disabled",
			"a11y",
			"accessibility"
		],
		k: [
			53,
			40
		],
		o: 2
	},
	waving_black_flag: {
		a: "Waving Black Flag",
		b: "1F3F4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			11,
			17
		],
		o: 2
	},
	orangutan: {
		a: "Orangutan",
		b: "1F9A7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			55
		],
		o: 12
	},
	sparkler: {
		a: "Firework Sparkler",
		b: "1F387",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"stars",
			"night",
			"shine"
		],
		k: [
			7,
			43
		],
		o: 2
	},
	globe_with_meridians: {
		a: "Globe with Meridians",
		b: "1F310",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"earth",
			"international",
			"world",
			"internet",
			"interweb",
			"i18n"
		],
		k: [
			5,
			35
		],
		o: 2
	},
	grin: {
		a: "Grinning Face with Smiling Eyes",
		b: "1F601",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"happy",
			"smile",
			"joy",
			"kawaii"
		],
		k: [
			30,
			36
		],
		o: 2
	},
	hand: {
		skin_variations: {
			"1F3FB": {
				unified: "270B-1F3FB",
				non_qualified: null,
				image: "270b-1f3fb.png",
				sheet_x: 54,
				sheet_y: 50,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "270B-1F3FC",
				non_qualified: null,
				image: "270b-1f3fc.png",
				sheet_x: 54,
				sheet_y: 51,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "270B-1F3FD",
				non_qualified: null,
				image: "270b-1f3fd.png",
				sheet_x: 54,
				sheet_y: 52,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "270B-1F3FE",
				non_qualified: null,
				image: "270b-1f3fe.png",
				sheet_x: 54,
				sheet_y: 53,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "270B-1F3FF",
				non_qualified: null,
				image: "270b-1f3ff.png",
				sheet_x: 54,
				sheet_y: 54,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Raised Hand",
		b: "270B",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			54,
			49
		],
		n: [
			"raised_hand"
		],
		o: 2
	},
	firecracker: {
		a: "Firecracker",
		b: "1F9E8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			27
		],
		o: 11
	},
	lemon: {
		a: "Lemon",
		b: "1F34B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fruit",
			"nature"
		],
		k: [
			6,
			35
		],
		o: 2
	},
	dog: {
		a: "Dog Face",
		b: "1F436",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"friend",
			"nature",
			"woof",
			"puppy",
			"pet",
			"faithful"
		],
		k: [
			12,
			26
		],
		o: 2
	},
	mens: {
		a: "Mens Symbol",
		b: "1F6B9",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"toilet",
			"restroom",
			"wc",
			"blue-square",
			"gender",
			"male"
		],
		k: [
			36,
			10
		],
		o: 2
	},
	"spock-hand": {
		skin_variations: {
			"1F3FB": {
				unified: "1F596-1F3FB",
				non_qualified: null,
				image: "1f596-1f3fb.png",
				sheet_x: 30,
				sheet_y: 4,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F596-1F3FC",
				non_qualified: null,
				image: "1f596-1f3fc.png",
				sheet_x: 30,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F596-1F3FD",
				non_qualified: null,
				image: "1f596-1f3fd.png",
				sheet_x: 30,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F596-1F3FE",
				non_qualified: null,
				image: "1f596-1f3fe.png",
				sheet_x: 30,
				sheet_y: 7,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F596-1F3FF",
				non_qualified: null,
				image: "1f596-1f3ff.png",
				sheet_x: 30,
				sheet_y: 8,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Raised Hand with Part Between Middle and Ring Fingers",
		b: "1F596",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			30,
			3
		],
		o: 2
	},
	world_map: {
		a: "World Map",
		b: "1F5FA-FE0F",
		c: "1F5FA",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"location",
			"direction"
		],
		k: [
			30,
			29
		],
		o: 2
	},
	laughing: {
		a: "Smiling Face with Open Mouth and Tightly-Closed Eyes",
		b: "1F606",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"happy",
			"joy",
			"lol",
			"satisfied",
			"haha",
			"face",
			"glad",
			"XD",
			"laugh"
		],
		k: [
			30,
			41
		],
		l: [
			":>",
			":->"
		],
		n: [
			"satisfied"
		],
		o: 2
	},
	waving_white_flag: {
		a: "Waving White Flag",
		b: "1F3F3-FE0F",
		c: "1F3F3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			11,
			12
		],
		o: 2
	},
	safety_vest: {
		a: "Safety Vest",
		b: "1F9BA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			43,
			54
		],
		o: 12
	},
	sweat_smile: {
		a: "Smiling Face with Open Mouth and Cold Sweat",
		b: "1F605",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"hot",
			"happy",
			"laugh",
			"sweat",
			"smile",
			"relief"
		],
		k: [
			30,
			40
		],
		o: 2
	},
	sparkles: {
		a: "Sparkles",
		b: "2728",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"stars",
			"shine",
			"shiny",
			"cool",
			"awesome",
			"good",
			"magic"
		],
		k: [
			55,
			16
		],
		o: 2
	},
	banana: {
		a: "Banana",
		b: "1F34C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fruit",
			"food",
			"monkey"
		],
		k: [
			6,
			36
		],
		o: 2
	},
	"rainbow-flag": {
		a: "Rainbow Flag",
		b: "1F3F3-FE0F-200D-1F308",
		c: "1F3F3-200D-1F308",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			11,
			11
		],
		o: 4
	},
	ok_hand: {
		skin_variations: {
			"1F3FB": {
				unified: "1F44C-1F3FB",
				non_qualified: null,
				image: "1f44c-1f3fb.png",
				sheet_x: 13,
				sheet_y: 33,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F44C-1F3FC",
				non_qualified: null,
				image: "1f44c-1f3fc.png",
				sheet_x: 13,
				sheet_y: 34,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F44C-1F3FD",
				non_qualified: null,
				image: "1f44c-1f3fd.png",
				sheet_x: 13,
				sheet_y: 35,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F44C-1F3FE",
				non_qualified: null,
				image: "1f44c-1f3fe.png",
				sheet_x: 13,
				sheet_y: 36,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F44C-1F3FF",
				non_qualified: null,
				image: "1f44c-1f3ff.png",
				sheet_x: 13,
				sheet_y: 37,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Ok Hand Sign",
		b: "1F44C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fingers",
			"limbs",
			"perfect",
			"ok",
			"okay"
		],
		k: [
			13,
			32
		],
		o: 2
	},
	japan: {
		a: "Silhouette of Japan",
		b: "1F5FE",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nation",
			"country",
			"japanese",
			"asia"
		],
		k: [
			30,
			33
		],
		o: 2
	},
	dog2: {
		a: "Dog",
		b: "1F415",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"friend",
			"doge",
			"pet",
			"faithful"
		],
		k: [
			11,
			50
		],
		o: 2
	},
	womens: {
		a: "Womens Symbol",
		b: "1F6BA",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"purple-square",
			"woman",
			"female",
			"toilet",
			"loo",
			"restroom",
			"gender"
		],
		k: [
			36,
			11
		],
		o: 2
	},
	necktie: {
		a: "Necktie",
		b: "1F454",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shirt",
			"suitup",
			"formal",
			"fashion",
			"cloth",
			"business"
		],
		k: [
			14,
			8
		],
		o: 2
	},
	pirate_flag: {
		a: "Pirate Flag",
		b: "1F3F4-200D-2620-FE0F",
		c: "1F3F4-200D-2620",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			11,
			13
		],
		o: 11
	},
	guide_dog: {
		a: "Guide Dog",
		b: "1F9AE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			43,
			2
		],
		o: 12
	},
	restroom: {
		a: "Restroom",
		b: "1F6BB",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"toilet",
			"refresh",
			"wc",
			"gender"
		],
		k: [
			36,
			12
		],
		o: 2
	},
	compass: {
		a: "Compass",
		b: "1F9ED",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			32
		],
		o: 11
	},
	rolling_on_the_floor_laughing: {
		a: "Rolling on the Floor Laughing",
		b: "1F923",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			38,
			20
		],
		o: 4
	},
	balloon: {
		a: "Balloon",
		b: "1F388",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"party",
			"celebration",
			"birthday",
			"circus"
		],
		k: [
			7,
			44
		],
		o: 2
	},
	pinching_hand: {
		skin_variations: {
			"1F3FB": {
				unified: "1F90F-1F3FB",
				non_qualified: null,
				image: "1f90f-1f3fb.png",
				sheet_x: 37,
				sheet_y: 18,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F90F-1F3FC",
				non_qualified: null,
				image: "1f90f-1f3fc.png",
				sheet_x: 37,
				sheet_y: 19,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F90F-1F3FD",
				non_qualified: null,
				image: "1f90f-1f3fd.png",
				sheet_x: 37,
				sheet_y: 20,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F90F-1F3FE",
				non_qualified: null,
				image: "1f90f-1f3fe.png",
				sheet_x: 37,
				sheet_y: 21,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F90F-1F3FF",
				non_qualified: null,
				image: "1f90f-1f3ff.png",
				sheet_x: 37,
				sheet_y: 22,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Pinching Hand",
		b: "1F90F",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			17
		],
		o: 12
	},
	pineapple: {
		a: "Pineapple",
		b: "1F34D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fruit",
			"nature",
			"food"
		],
		k: [
			6,
			37
		],
		o: 2
	},
	shirt: {
		a: "T-Shirt",
		b: "1F455",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			14,
			9
		],
		n: [
			"tshirt"
		],
		o: 2
	},
	service_dog: {
		a: "Service Dog",
		b: "1F415-200D-1F9BA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			11,
			49
		],
		o: 12
	},
	baby_symbol: {
		a: "Baby Symbol",
		b: "1F6BC",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"orange-square",
			"child"
		],
		k: [
			36,
			13
		],
		o: 2
	},
	joy: {
		a: "Face with Tears of Joy",
		b: "1F602",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"cry",
			"tears",
			"weep",
			"happy",
			"happytears",
			"haha"
		],
		k: [
			30,
			37
		],
		o: 2
	},
	tada: {
		a: "Party Popper",
		b: "1F389",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"party",
			"congratulations",
			"birthday",
			"magic",
			"circus",
			"celebration"
		],
		k: [
			7,
			45
		],
		o: 2
	},
	mango: {
		a: "Mango",
		b: "1F96D",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			3
		],
		o: 11
	},
	v: {
		skin_variations: {
			"1F3FB": {
				unified: "270C-1F3FB",
				non_qualified: null,
				image: "270c-1f3fb.png",
				sheet_x: 54,
				sheet_y: 56,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "270C-1F3FC",
				non_qualified: null,
				image: "270c-1f3fc.png",
				sheet_x: 55,
				sheet_y: 0,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "270C-1F3FD",
				non_qualified: null,
				image: "270c-1f3fd.png",
				sheet_x: 55,
				sheet_y: 1,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "270C-1F3FE",
				non_qualified: null,
				image: "270c-1f3fe.png",
				sheet_x: 55,
				sheet_y: 2,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "270C-1F3FF",
				non_qualified: null,
				image: "270c-1f3ff.png",
				sheet_x: 55,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Victory Hand",
		b: "270C-FE0F",
		c: "270C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fingers",
			"ohyeah",
			"hand",
			"peace",
			"victory",
			"two"
		],
		k: [
			54,
			55
		],
		o: 2
	},
	snow_capped_mountain: {
		a: "Snow Capped Mountain",
		b: "1F3D4-FE0F",
		c: "1F3D4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			10,
			39
		],
		o: 2
	},
	"flag-ac": {
		a: "Ascension Island Flag",
		b: "1F1E6-1F1E8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			31
		],
		o: 2
	},
	jeans: {
		a: "Jeans",
		b: "1F456",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fashion",
			"shopping"
		],
		k: [
			14,
			10
		],
		o: 2
	},
	poodle: {
		a: "Poodle",
		b: "1F429",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"dog",
			"animal",
			"101",
			"nature",
			"pet"
		],
		k: [
			12,
			13
		],
		o: 2
	},
	crossed_fingers: {
		skin_variations: {
			"1F3FB": {
				unified: "1F91E-1F3FB",
				non_qualified: null,
				image: "1f91e-1f3fb.png",
				sheet_x: 38,
				sheet_y: 6,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F91E-1F3FC",
				non_qualified: null,
				image: "1f91e-1f3fc.png",
				sheet_x: 38,
				sheet_y: 7,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F91E-1F3FD",
				non_qualified: null,
				image: "1f91e-1f3fd.png",
				sheet_x: 38,
				sheet_y: 8,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F91E-1F3FE",
				non_qualified: null,
				image: "1f91e-1f3fe.png",
				sheet_x: 38,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F91E-1F3FF",
				non_qualified: null,
				image: "1f91e-1f3ff.png",
				sheet_x: 38,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Hand with Index and Middle Fingers Crossed",
		b: "1F91E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"good",
			"lucky"
		],
		k: [
			38,
			5
		],
		n: [
			"hand_with_index_and_middle_fingers_crossed"
		],
		o: 4
	},
	"flag-ad": {
		a: "Andorra Flag",
		b: "1F1E6-1F1E9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			32
		],
		o: 2
	},
	slightly_smiling_face: {
		a: "Slightly Smiling Face",
		b: "1F642",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"smile"
		],
		k: [
			31,
			44
		],
		l: [
			":)",
			"(:",
			":-)"
		],
		o: 2
	},
	apple: {
		a: "Red Apple",
		b: "1F34E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fruit",
			"mac",
			"school"
		],
		k: [
			6,
			38
		],
		o: 2
	},
	wc: {
		a: "Water Closet",
		b: "1F6BE",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"toilet",
			"restroom",
			"blue-square"
		],
		k: [
			36,
			15
		],
		o: 2
	},
	scarf: {
		a: "Scarf",
		b: "1F9E3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			22
		],
		o: 5
	},
	mountain: {
		a: "Mountain",
		b: "26F0-FE0F",
		c: "26F0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"nature",
			"environment"
		],
		k: [
			54,
			11
		],
		o: 2
	},
	confetti_ball: {
		a: "Confetti Ball",
		b: "1F38A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"festival",
			"party",
			"birthday",
			"circus"
		],
		k: [
			7,
			46
		],
		o: 2
	},
	i_love_you_hand_sign: {
		skin_variations: {
			"1F3FB": {
				unified: "1F91F-1F3FB",
				non_qualified: null,
				image: "1f91f-1f3fb.png",
				sheet_x: 38,
				sheet_y: 12,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F91F-1F3FC",
				non_qualified: null,
				image: "1f91f-1f3fc.png",
				sheet_x: 38,
				sheet_y: 13,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F91F-1F3FD",
				non_qualified: null,
				image: "1f91f-1f3fd.png",
				sheet_x: 38,
				sheet_y: 14,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F91F-1F3FE",
				non_qualified: null,
				image: "1f91f-1f3fe.png",
				sheet_x: 38,
				sheet_y: 15,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F91F-1F3FF",
				non_qualified: null,
				image: "1f91f-1f3ff.png",
				sheet_x: 38,
				sheet_y: 16,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "I Love You Hand Sign",
		b: "1F91F",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			38,
			11
		],
		o: 5
	},
	wolf: {
		a: "Wolf Face",
		b: "1F43A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"wild"
		],
		k: [
			12,
			30
		],
		o: 2
	},
	gloves: {
		a: "Gloves",
		b: "1F9E4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			23
		],
		o: 5
	},
	"flag-ae": {
		a: "United Arab Emirates Flag",
		b: "1F1E6-1F1EA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			33
		],
		o: 2
	},
	upside_down_face: {
		a: "Upside-Down Face",
		b: "1F643",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"flipped",
			"silly",
			"smile"
		],
		k: [
			31,
			45
		],
		o: 2
	},
	green_apple: {
		a: "Green Apple",
		b: "1F34F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fruit",
			"nature"
		],
		k: [
			6,
			39
		],
		o: 2
	},
	passport_control: {
		a: "Passport Control",
		b: "1F6C2",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"custom",
			"blue-square"
		],
		k: [
			36,
			24
		],
		o: 2
	},
	volcano: {
		a: "Volcano",
		b: "1F30B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"nature",
			"disaster"
		],
		k: [
			5,
			30
		],
		o: 2
	},
	tanabata_tree: {
		a: "Tanabata Tree",
		b: "1F38B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"plant",
			"nature",
			"branch",
			"summer"
		],
		k: [
			7,
			47
		],
		o: 2
	},
	customs: {
		a: "Customs",
		b: "1F6C3",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"passport",
			"border",
			"blue-square"
		],
		k: [
			36,
			25
		],
		o: 2
	},
	coat: {
		a: "Coat",
		b: "1F9E5",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			24
		],
		o: 5
	},
	wink: {
		a: "Winking Face",
		b: "1F609",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"happy",
			"mischievous",
			"secret",
			";)",
			"smile",
			"eye"
		],
		k: [
			30,
			44
		],
		l: [
			";)",
			";-)"
		],
		m: ";)",
		o: 2
	},
	bamboo: {
		a: "Pine Decoration",
		b: "1F38D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"plant",
			"nature",
			"vegetable",
			"panda",
			"pine_decoration"
		],
		k: [
			7,
			49
		],
		o: 2
	},
	"flag-af": {
		a: "Afghanistan Flag",
		b: "1F1E6-1F1EB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			34
		],
		o: 2
	},
	fox_face: {
		a: "Fox Face",
		b: "1F98A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"face"
		],
		k: [
			42,
			28
		],
		o: 4
	},
	pear: {
		a: "Pear",
		b: "1F350",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fruit",
			"nature",
			"food"
		],
		k: [
			6,
			40
		],
		o: 2
	},
	mount_fuji: {
		a: "Mount Fuji",
		b: "1F5FB",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"mountain",
			"nature",
			"japanese"
		],
		k: [
			30,
			30
		],
		o: 2
	},
	the_horns: {
		skin_variations: {
			"1F3FB": {
				unified: "1F918-1F3FB",
				non_qualified: null,
				image: "1f918-1f3fb.png",
				sheet_x: 37,
				sheet_y: 32,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F918-1F3FC",
				non_qualified: null,
				image: "1f918-1f3fc.png",
				sheet_x: 37,
				sheet_y: 33,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F918-1F3FD",
				non_qualified: null,
				image: "1f918-1f3fd.png",
				sheet_x: 37,
				sheet_y: 34,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F918-1F3FE",
				non_qualified: null,
				image: "1f918-1f3fe.png",
				sheet_x: 37,
				sheet_y: 35,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F918-1F3FF",
				non_qualified: null,
				image: "1f918-1f3ff.png",
				sheet_x: 37,
				sheet_y: 36,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Sign of the Horns",
		b: "1F918",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			31
		],
		n: [
			"sign_of_the_horns"
		],
		o: 2
	},
	call_me_hand: {
		skin_variations: {
			"1F3FB": {
				unified: "1F919-1F3FB",
				non_qualified: null,
				image: "1f919-1f3fb.png",
				sheet_x: 37,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F919-1F3FC",
				non_qualified: null,
				image: "1f919-1f3fc.png",
				sheet_x: 37,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F919-1F3FD",
				non_qualified: null,
				image: "1f919-1f3fd.png",
				sheet_x: 37,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F919-1F3FE",
				non_qualified: null,
				image: "1f919-1f3fe.png",
				sheet_x: 37,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F919-1F3FF",
				non_qualified: null,
				image: "1f919-1f3ff.png",
				sheet_x: 37,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Call Me Hand",
		b: "1F919",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"hands",
			"gesture"
		],
		k: [
			37,
			37
		],
		o: 4
	},
	"flag-ag": {
		a: "Antigua & Barbuda Flag",
		b: "1F1E6-1F1EC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			35
		],
		o: 2
	},
	raccoon: {
		a: "Raccoon",
		b: "1F99D",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			47
		],
		o: 11
	},
	dolls: {
		a: "Japanese Dolls",
		b: "1F38E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"japanese",
			"toy",
			"kimono"
		],
		k: [
			7,
			50
		],
		o: 2
	},
	blush: {
		a: "Smiling Face with Smiling Eyes",
		b: "1F60A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"smile",
			"happy",
			"flushed",
			"crush",
			"embarrassed",
			"shy",
			"joy"
		],
		k: [
			30,
			45
		],
		m: ":)",
		o: 2
	},
	peach: {
		a: "Peach",
		b: "1F351",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fruit",
			"nature",
			"food"
		],
		k: [
			6,
			41
		],
		o: 2
	},
	baggage_claim: {
		a: "Baggage Claim",
		b: "1F6C4",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"airport",
			"transport"
		],
		k: [
			36,
			26
		],
		o: 2
	},
	socks: {
		a: "Socks",
		b: "1F9E6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			25
		],
		o: 5
	},
	camping: {
		a: "Camping",
		b: "1F3D5-FE0F",
		c: "1F3D5",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"outdoors",
			"tent"
		],
		k: [
			10,
			40
		],
		o: 2
	},
	dress: {
		a: "Dress",
		b: "1F457",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"clothes",
			"fashion",
			"shopping"
		],
		k: [
			14,
			11
		],
		o: 2
	},
	beach_with_umbrella: {
		a: "Beach with Umbrella",
		b: "1F3D6-FE0F",
		c: "1F3D6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			10,
			41
		],
		o: 2
	},
	cherries: {
		a: "Cherries",
		b: "1F352",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"fruit"
		],
		k: [
			6,
			42
		],
		o: 2
	},
	cat: {
		a: "Cat Face",
		b: "1F431",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"meow",
			"nature",
			"pet",
			"kitten"
		],
		k: [
			12,
			21
		],
		o: 2
	},
	point_left: {
		skin_variations: {
			"1F3FB": {
				unified: "1F448-1F3FB",
				non_qualified: null,
				image: "1f448-1f3fb.png",
				sheet_x: 13,
				sheet_y: 9,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F448-1F3FC",
				non_qualified: null,
				image: "1f448-1f3fc.png",
				sheet_x: 13,
				sheet_y: 10,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F448-1F3FD",
				non_qualified: null,
				image: "1f448-1f3fd.png",
				sheet_x: 13,
				sheet_y: 11,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F448-1F3FE",
				non_qualified: null,
				image: "1f448-1f3fe.png",
				sheet_x: 13,
				sheet_y: 12,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F448-1F3FF",
				non_qualified: null,
				image: "1f448-1f3ff.png",
				sheet_x: 13,
				sheet_y: 13,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "White Left Pointing Backhand Index",
		b: "1F448",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"direction",
			"fingers",
			"hand",
			"left"
		],
		k: [
			13,
			8
		],
		o: 2
	},
	left_luggage: {
		a: "Left Luggage",
		b: "1F6C5",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"travel"
		],
		k: [
			36,
			27
		],
		o: 2
	},
	"flag-ai": {
		a: "Anguilla Flag",
		b: "1F1E6-1F1EE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			36
		],
		o: 2
	},
	innocent: {
		a: "Smiling Face with Halo",
		b: "1F607",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"angel",
			"heaven",
			"halo"
		],
		k: [
			30,
			42
		],
		o: 2
	},
	flags: {
		a: "Carp Streamer",
		b: "1F38F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fish",
			"japanese",
			"koinobori",
			"carp",
			"banner"
		],
		k: [
			7,
			51
		],
		o: 2
	},
	warning: {
		a: "Warning Sign",
		b: "26A0-FE0F",
		c: "26A0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"exclamation",
			"wip",
			"alert",
			"error",
			"problem",
			"issue"
		],
		k: [
			53,
			50
		],
		o: 2
	},
	strawberry: {
		a: "Strawberry",
		b: "1F353",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fruit",
			"food",
			"nature"
		],
		k: [
			6,
			43
		],
		o: 2
	},
	point_right: {
		skin_variations: {
			"1F3FB": {
				unified: "1F449-1F3FB",
				non_qualified: null,
				image: "1f449-1f3fb.png",
				sheet_x: 13,
				sheet_y: 15,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F449-1F3FC",
				non_qualified: null,
				image: "1f449-1f3fc.png",
				sheet_x: 13,
				sheet_y: 16,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F449-1F3FD",
				non_qualified: null,
				image: "1f449-1f3fd.png",
				sheet_x: 13,
				sheet_y: 17,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F449-1F3FE",
				non_qualified: null,
				image: "1f449-1f3fe.png",
				sheet_x: 13,
				sheet_y: 18,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F449-1F3FF",
				non_qualified: null,
				image: "1f449-1f3ff.png",
				sheet_x: 13,
				sheet_y: 19,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "White Right Pointing Backhand Index",
		b: "1F449",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fingers",
			"hand",
			"direction",
			"right"
		],
		k: [
			13,
			14
		],
		o: 2
	},
	desert: {
		a: "Desert",
		b: "1F3DC-FE0F",
		c: "1F3DC",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"warm",
			"saharah"
		],
		k: [
			10,
			47
		],
		o: 2
	},
	kimono: {
		a: "Kimono",
		b: "1F458",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"dress",
			"fashion",
			"women",
			"female",
			"japanese"
		],
		k: [
			14,
			12
		],
		o: 2
	},
	"flag-al": {
		a: "Albania Flag",
		b: "1F1E6-1F1F1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			37
		],
		o: 2
	},
	wind_chime: {
		a: "Wind Chime",
		b: "1F390",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"ding",
			"spring",
			"bell"
		],
		k: [
			7,
			52
		],
		o: 2
	},
	smiling_face_with_3_hearts: {
		a: "Smiling Face with Smiling Eyes and Three Hearts",
		b: "1F970",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			6
		],
		o: 11
	},
	cat2: {
		a: "Cat",
		b: "1F408",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"meow",
			"pet",
			"cats"
		],
		k: [
			11,
			36
		],
		o: 2
	},
	rice_scene: {
		a: "Moon Viewing Ceremony",
		b: "1F391",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"japan",
			"asia",
			"tsukimi"
		],
		k: [
			7,
			53
		],
		o: 2
	},
	heart_eyes: {
		a: "Smiling Face with Heart-Shaped Eyes",
		b: "1F60D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"love",
			"like",
			"affection",
			"valentines",
			"infatuation",
			"crush",
			"heart"
		],
		k: [
			30,
			48
		],
		o: 2
	},
	sari: {
		a: "Sari",
		b: "1F97B",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			13
		],
		o: 12
	},
	"flag-am": {
		a: "Armenia Flag",
		b: "1F1E6-1F1F2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			38
		],
		o: 2
	},
	lion_face: {
		a: "Lion Face",
		b: "1F981",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			19
		],
		o: 2
	},
	desert_island: {
		a: "Desert Island",
		b: "1F3DD-FE0F",
		c: "1F3DD",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"tropical",
			"mojito"
		],
		k: [
			10,
			48
		],
		o: 2
	},
	point_up_2: {
		skin_variations: {
			"1F3FB": {
				unified: "1F446-1F3FB",
				non_qualified: null,
				image: "1f446-1f3fb.png",
				sheet_x: 12,
				sheet_y: 54,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F446-1F3FC",
				non_qualified: null,
				image: "1f446-1f3fc.png",
				sheet_x: 12,
				sheet_y: 55,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F446-1F3FD",
				non_qualified: null,
				image: "1f446-1f3fd.png",
				sheet_x: 12,
				sheet_y: 56,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F446-1F3FE",
				non_qualified: null,
				image: "1f446-1f3fe.png",
				sheet_x: 13,
				sheet_y: 0,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F446-1F3FF",
				non_qualified: null,
				image: "1f446-1f3ff.png",
				sheet_x: 13,
				sheet_y: 1,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "White Up Pointing Backhand Index",
		b: "1F446",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fingers",
			"hand",
			"direction",
			"up"
		],
		k: [
			12,
			53
		],
		o: 2
	},
	kiwifruit: {
		a: "Kiwifruit",
		b: "1F95D",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			44
		],
		o: 4
	},
	children_crossing: {
		a: "Children Crossing",
		b: "1F6B8",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"school",
			"warning",
			"danger",
			"sign",
			"driving",
			"yellow-diamond"
		],
		k: [
			36,
			9
		],
		o: 2
	},
	national_park: {
		a: "National Park",
		b: "1F3DE-FE0F",
		c: "1F3DE",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"environment",
			"nature"
		],
		k: [
			10,
			49
		],
		o: 2
	},
	no_entry: {
		a: "No Entry",
		b: "26D4",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"limit",
			"security",
			"privacy",
			"bad",
			"denied",
			"stop",
			"circle"
		],
		k: [
			54,
			8
		],
		o: 2
	},
	"one-piece_swimsuit": {
		a: "One-Piece Swimsuit",
		b: "1FA71",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			52
		],
		o: 12
	},
	tiger: {
		a: "Tiger Face",
		b: "1F42F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"cat",
			"danger",
			"wild",
			"nature",
			"roar"
		],
		k: [
			12,
			19
		],
		o: 2
	},
	red_envelope: {
		a: "Red Gift Envelope",
		b: "1F9E7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			26
		],
		o: 11
	},
	"star-struck": {
		a: "Grinning Face with Star Eyes",
		b: "1F929",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			38,
			43
		],
		n: [
			"grinning_face_with_star_eyes"
		],
		o: 5
	},
	middle_finger: {
		skin_variations: {
			"1F3FB": {
				unified: "1F595-1F3FB",
				non_qualified: null,
				image: "1f595-1f3fb.png",
				sheet_x: 29,
				sheet_y: 55,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F595-1F3FC",
				non_qualified: null,
				image: "1f595-1f3fc.png",
				sheet_x: 29,
				sheet_y: 56,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F595-1F3FD",
				non_qualified: null,
				image: "1f595-1f3fd.png",
				sheet_x: 30,
				sheet_y: 0,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F595-1F3FE",
				non_qualified: null,
				image: "1f595-1f3fe.png",
				sheet_x: 30,
				sheet_y: 1,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F595-1F3FF",
				non_qualified: null,
				image: "1f595-1f3ff.png",
				sheet_x: 30,
				sheet_y: 2,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Reversed Hand with Middle Finger Extended",
		b: "1F595",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			29,
			54
		],
		n: [
			"reversed_hand_with_middle_finger_extended"
		],
		o: 2
	},
	"flag-ao": {
		a: "Angola Flag",
		b: "1F1E6-1F1F4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			39
		],
		o: 2
	},
	tomato: {
		a: "Tomato",
		b: "1F345",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fruit",
			"vegetable",
			"nature",
			"food"
		],
		k: [
			6,
			29
		],
		o: 2
	},
	coconut: {
		a: "Coconut",
		b: "1F965",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			52
		],
		o: 5
	},
	ribbon: {
		a: "Ribbon",
		b: "1F380",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"decoration",
			"pink",
			"girl",
			"bowtie"
		],
		k: [
			7,
			31
		],
		o: 2
	},
	no_entry_sign: {
		a: "No Entry Sign",
		b: "1F6AB",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"forbid",
			"stop",
			"limit",
			"denied",
			"disallow",
			"circle"
		],
		k: [
			35,
			2
		],
		o: 2
	},
	point_down: {
		skin_variations: {
			"1F3FB": {
				unified: "1F447-1F3FB",
				non_qualified: null,
				image: "1f447-1f3fb.png",
				sheet_x: 13,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F447-1F3FC",
				non_qualified: null,
				image: "1f447-1f3fc.png",
				sheet_x: 13,
				sheet_y: 4,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F447-1F3FD",
				non_qualified: null,
				image: "1f447-1f3fd.png",
				sheet_x: 13,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F447-1F3FE",
				non_qualified: null,
				image: "1f447-1f3fe.png",
				sheet_x: 13,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F447-1F3FF",
				non_qualified: null,
				image: "1f447-1f3ff.png",
				sheet_x: 13,
				sheet_y: 7,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "White Down Pointing Backhand Index",
		b: "1F447",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fingers",
			"hand",
			"direction",
			"down"
		],
		k: [
			13,
			2
		],
		o: 2
	},
	"flag-aq": {
		a: "Antarctica Flag",
		b: "1F1E6-1F1F6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			40
		],
		o: 2
	},
	briefs: {
		a: "Briefs",
		b: "1FA72",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			53
		],
		o: 12
	},
	kissing_heart: {
		a: "Face Throwing a Kiss",
		b: "1F618",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"love",
			"like",
			"affection",
			"valentines",
			"infatuation",
			"kiss"
		],
		k: [
			31,
			2
		],
		l: [
			":*",
			":-*"
		],
		o: 2
	},
	tiger2: {
		a: "Tiger",
		b: "1F405",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"roar"
		],
		k: [
			11,
			33
		],
		o: 2
	},
	stadium: {
		a: "Stadium",
		b: "1F3DF-FE0F",
		c: "1F3DF",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"place",
			"sports",
			"concert",
			"venue"
		],
		k: [
			10,
			50
		],
		o: 2
	},
	leopard: {
		a: "Leopard",
		b: "1F406",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature"
		],
		k: [
			11,
			34
		],
		o: 2
	},
	no_bicycles: {
		a: "No Bicycles",
		b: "1F6B3",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"cyclist",
			"prohibited",
			"circle"
		],
		k: [
			35,
			10
		],
		o: 2
	},
	kissing: {
		a: "Kissing Face",
		b: "1F617",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"love",
			"like",
			"face",
			"3",
			"valentines",
			"infatuation",
			"kiss"
		],
		k: [
			31,
			1
		],
		o: 2
	},
	"flag-ar": {
		a: "Argentina Flag",
		b: "1F1E6-1F1F7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			41
		],
		o: 2
	},
	avocado: {
		a: "Avocado",
		b: "1F951",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fruit",
			"food"
		],
		k: [
			41,
			32
		],
		o: 4
	},
	point_up: {
		skin_variations: {
			"1F3FB": {
				unified: "261D-1F3FB",
				non_qualified: null,
				image: "261d-1f3fb.png",
				sheet_x: 53,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "261D-1F3FC",
				non_qualified: null,
				image: "261d-1f3fc.png",
				sheet_x: 53,
				sheet_y: 4,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "261D-1F3FD",
				non_qualified: null,
				image: "261d-1f3fd.png",
				sheet_x: 53,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "261D-1F3FE",
				non_qualified: null,
				image: "261d-1f3fe.png",
				sheet_x: 53,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "261D-1F3FF",
				non_qualified: null,
				image: "261d-1f3ff.png",
				sheet_x: 53,
				sheet_y: 7,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "White Up Pointing Index",
		b: "261D-FE0F",
		c: "261D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"hand",
			"fingers",
			"direction",
			"up"
		],
		k: [
			53,
			2
		],
		o: 2
	},
	gift: {
		a: "Wrapped Present",
		b: "1F381",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"present",
			"birthday",
			"christmas",
			"xmas"
		],
		k: [
			7,
			32
		],
		o: 2
	},
	classical_building: {
		a: "Classical Building",
		b: "1F3DB-FE0F",
		c: "1F3DB",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"art",
			"culture",
			"history"
		],
		k: [
			10,
			46
		],
		o: 2
	},
	shorts: {
		a: "Shorts",
		b: "1FA73",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			54
		],
		o: 12
	},
	"+1": {
		skin_variations: {
			"1F3FB": {
				unified: "1F44D-1F3FB",
				non_qualified: null,
				image: "1f44d-1f3fb.png",
				sheet_x: 13,
				sheet_y: 39,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F44D-1F3FC",
				non_qualified: null,
				image: "1f44d-1f3fc.png",
				sheet_x: 13,
				sheet_y: 40,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F44D-1F3FD",
				non_qualified: null,
				image: "1f44d-1f3fd.png",
				sheet_x: 13,
				sheet_y: 41,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F44D-1F3FE",
				non_qualified: null,
				image: "1f44d-1f3fe.png",
				sheet_x: 13,
				sheet_y: 42,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F44D-1F3FF",
				non_qualified: null,
				image: "1f44d-1f3ff.png",
				sheet_x: 13,
				sheet_y: 43,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Thumbs Up Sign",
		b: "1F44D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"thumbsup",
			"yes",
			"awesome",
			"good",
			"agree",
			"accept",
			"cool",
			"hand",
			"like"
		],
		k: [
			13,
			38
		],
		n: [
			"thumbsup"
		],
		o: 2
	},
	horse: {
		a: "Horse Face",
		b: "1F434",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"brown",
			"nature"
		],
		k: [
			12,
			24
		],
		o: 2
	},
	bikini: {
		a: "Bikini",
		b: "1F459",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"swimming",
			"female",
			"woman",
			"girl",
			"fashion",
			"beach",
			"summer"
		],
		k: [
			14,
			13
		],
		o: 2
	},
	no_smoking: {
		a: "No Smoking Symbol",
		b: "1F6AD",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"cigarette",
			"blue-square",
			"smell",
			"smoke"
		],
		k: [
			35,
			4
		],
		o: 2
	},
	eggplant: {
		a: "Aubergine",
		b: "1F346",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"vegetable",
			"nature",
			"food",
			"aubergine"
		],
		k: [
			6,
			30
		],
		o: 2
	},
	"flag-as": {
		a: "American Samoa Flag",
		b: "1F1E6-1F1F8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			42
		],
		o: 2
	},
	reminder_ribbon: {
		a: "Reminder Ribbon",
		b: "1F397-FE0F",
		c: "1F397",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sports",
			"cause",
			"support",
			"awareness"
		],
		k: [
			8,
			0
		],
		o: 2
	},
	building_construction: {
		a: "Building Construction",
		b: "1F3D7-FE0F",
		c: "1F3D7",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"wip",
			"working",
			"progress"
		],
		k: [
			10,
			42
		],
		o: 2
	},
	relaxed: {
		a: "White Smiling Face",
		b: "263A-FE0F",
		c: "263A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"blush",
			"massage",
			"happiness"
		],
		k: [
			53,
			17
		],
		o: 2
	},
	kissing_closed_eyes: {
		a: "Kissing Face with Closed Eyes",
		b: "1F61A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"love",
			"like",
			"affection",
			"valentines",
			"infatuation",
			"kiss"
		],
		k: [
			31,
			4
		],
		o: 2
	},
	"-1": {
		skin_variations: {
			"1F3FB": {
				unified: "1F44E-1F3FB",
				non_qualified: null,
				image: "1f44e-1f3fb.png",
				sheet_x: 13,
				sheet_y: 45,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F44E-1F3FC",
				non_qualified: null,
				image: "1f44e-1f3fc.png",
				sheet_x: 13,
				sheet_y: 46,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F44E-1F3FD",
				non_qualified: null,
				image: "1f44e-1f3fd.png",
				sheet_x: 13,
				sheet_y: 47,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F44E-1F3FE",
				non_qualified: null,
				image: "1f44e-1f3fe.png",
				sheet_x: 13,
				sheet_y: 48,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F44E-1F3FF",
				non_qualified: null,
				image: "1f44e-1f3ff.png",
				sheet_x: 13,
				sheet_y: 49,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Thumbs Down Sign",
		b: "1F44E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"thumbsdown",
			"no",
			"dislike",
			"hand"
		],
		k: [
			13,
			44
		],
		n: [
			"thumbsdown"
		],
		o: 2
	},
	admission_tickets: {
		a: "Admission Tickets",
		b: "1F39F-FE0F",
		c: "1F39F",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			8,
			5
		],
		o: 2
	},
	"flag-at": {
		a: "Austria Flag",
		b: "1F1E6-1F1F9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			43
		],
		o: 2
	},
	womans_clothes: {
		a: "Womans Clothes",
		b: "1F45A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fashion",
			"shopping_bags",
			"female"
		],
		k: [
			14,
			14
		],
		o: 2
	},
	do_not_litter: {
		a: "Do Not Litter Symbol",
		b: "1F6AF",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"trash",
			"bin",
			"garbage",
			"circle"
		],
		k: [
			35,
			6
		],
		o: 2
	},
	potato: {
		a: "Potato",
		b: "1F954",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"tuber",
			"vegatable",
			"starch"
		],
		k: [
			41,
			35
		],
		o: 4
	},
	racehorse: {
		a: "Horse",
		b: "1F40E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"gamble",
			"luck"
		],
		k: [
			11,
			42
		],
		o: 2
	},
	bricks: {
		a: "Brick",
		b: "1F9F1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			36
		],
		o: 11
	},
	fist: {
		skin_variations: {
			"1F3FB": {
				unified: "270A-1F3FB",
				non_qualified: null,
				image: "270a-1f3fb.png",
				sheet_x: 54,
				sheet_y: 44,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "270A-1F3FC",
				non_qualified: null,
				image: "270a-1f3fc.png",
				sheet_x: 54,
				sheet_y: 45,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "270A-1F3FD",
				non_qualified: null,
				image: "270a-1f3fd.png",
				sheet_x: 54,
				sheet_y: 46,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "270A-1F3FE",
				non_qualified: null,
				image: "270a-1f3fe.png",
				sheet_x: 54,
				sheet_y: 47,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "270A-1F3FF",
				non_qualified: null,
				image: "270a-1f3ff.png",
				sheet_x: 54,
				sheet_y: 48,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Raised Fist",
		b: "270A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fingers",
			"hand",
			"grasp"
		],
		k: [
			54,
			43
		],
		o: 2
	},
	house_buildings: {
		a: "House Buildings",
		b: "1F3D8-FE0F",
		c: "1F3D8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			10,
			43
		],
		o: 2
	},
	carrot: {
		a: "Carrot",
		b: "1F955",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"vegetable",
			"food",
			"orange"
		],
		k: [
			41,
			36
		],
		o: 4
	},
	ticket: {
		a: "Ticket",
		b: "1F3AB",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"event",
			"concert",
			"pass"
		],
		k: [
			8,
			17
		],
		o: 2
	},
	"flag-au": {
		a: "Australia Flag",
		b: "1F1E6-1F1FA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			44
		],
		o: 2
	},
	"non-potable_water": {
		a: "Non-Potable Water Symbol",
		b: "1F6B1",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"drink",
			"faucet",
			"tap",
			"circle"
		],
		k: [
			35,
			8
		],
		o: 2
	},
	purse: {
		a: "Purse",
		b: "1F45B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fashion",
			"accessories",
			"money",
			"sales",
			"shopping"
		],
		k: [
			14,
			15
		],
		o: 2
	},
	unicorn_face: {
		a: "Unicorn Face",
		b: "1F984",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			22
		],
		o: 2
	},
	kissing_smiling_eyes: {
		a: "Kissing Face with Smiling Eyes",
		b: "1F619",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"affection",
			"valentines",
			"infatuation",
			"kiss"
		],
		k: [
			31,
			3
		],
		o: 2
	},
	facepunch: {
		skin_variations: {
			"1F3FB": {
				unified: "1F44A-1F3FB",
				non_qualified: null,
				image: "1f44a-1f3fb.png",
				sheet_x: 13,
				sheet_y: 21,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F44A-1F3FC",
				non_qualified: null,
				image: "1f44a-1f3fc.png",
				sheet_x: 13,
				sheet_y: 22,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F44A-1F3FD",
				non_qualified: null,
				image: "1f44a-1f3fd.png",
				sheet_x: 13,
				sheet_y: 23,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F44A-1F3FE",
				non_qualified: null,
				image: "1f44a-1f3fe.png",
				sheet_x: 13,
				sheet_y: 24,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F44A-1F3FF",
				non_qualified: null,
				image: "1f44a-1f3ff.png",
				sheet_x: 13,
				sheet_y: 25,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Fisted Hand Sign",
		b: "1F44A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"angry",
			"violence",
			"fist",
			"hit",
			"attack",
			"hand"
		],
		k: [
			13,
			20
		],
		n: [
			"punch"
		],
		o: 2
	},
	medal: {
		a: "Medal",
		b: "1F396-FE0F",
		c: "1F396",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			7,
			56
		],
		o: 2
	},
	zebra_face: {
		a: "Zebra Face",
		b: "1F993",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			37
		],
		o: 5
	},
	handbag: {
		a: "Handbag",
		b: "1F45C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fashion",
			"accessory",
			"accessories",
			"shopping"
		],
		k: [
			14,
			16
		],
		o: 2
	},
	derelict_house_building: {
		a: "Derelict House Building",
		b: "1F3DA-FE0F",
		c: "1F3DA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			10,
			45
		],
		o: 2
	},
	yum: {
		a: "Face Savouring Delicious Food",
		b: "1F60B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"happy",
			"joy",
			"tongue",
			"smile",
			"face",
			"silly",
			"yummy",
			"nom",
			"delicious",
			"savouring"
		],
		k: [
			30,
			46
		],
		o: 2
	},
	corn: {
		a: "Ear of Maize",
		b: "1F33D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"vegetable",
			"plant"
		],
		k: [
			6,
			21
		],
		o: 2
	},
	"flag-aw": {
		a: "Aruba Flag",
		b: "1F1E6-1F1FC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			45
		],
		o: 2
	},
	no_pedestrians: {
		a: "No Pedestrians",
		b: "1F6B7",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"rules",
			"crossing",
			"walking",
			"circle"
		],
		k: [
			36,
			8
		],
		o: 2
	},
	house: {
		a: "House Building",
		b: "1F3E0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"building",
			"home"
		],
		k: [
			10,
			51
		],
		o: 2
	},
	hot_pepper: {
		a: "Hot Pepper",
		b: "1F336-FE0F",
		c: "1F336",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"spicy",
			"chilli",
			"chili"
		],
		k: [
			6,
			14
		],
		o: 2
	},
	"flag-ax": {
		a: "Åland Islands Flag",
		b: "1F1E6-1F1FD",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			46
		],
		o: 2
	},
	trophy: {
		a: "Trophy",
		b: "1F3C6",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"win",
			"award",
			"contest",
			"place",
			"ftw",
			"ceremony"
		],
		k: [
			9,
			26
		],
		o: 2
	},
	deer: {
		a: "Deer",
		b: "1F98C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"horns",
			"venison"
		],
		k: [
			42,
			30
		],
		o: 4
	},
	"left-facing_fist": {
		skin_variations: {
			"1F3FB": {
				unified: "1F91B-1F3FB",
				non_qualified: null,
				image: "1f91b-1f3fb.png",
				sheet_x: 37,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F91B-1F3FC",
				non_qualified: null,
				image: "1f91b-1f3fc.png",
				sheet_x: 37,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F91B-1F3FD",
				non_qualified: null,
				image: "1f91b-1f3fd.png",
				sheet_x: 37,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F91B-1F3FE",
				non_qualified: null,
				image: "1f91b-1f3fe.png",
				sheet_x: 37,
				sheet_y: 53,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F91B-1F3FF",
				non_qualified: null,
				image: "1f91b-1f3ff.png",
				sheet_x: 37,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Left-Facing Fist",
		b: "1F91B",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			49
		],
		o: 4
	},
	stuck_out_tongue: {
		a: "Face with Stuck-out Tongue",
		b: "1F61B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"prank",
			"childish",
			"playful",
			"mischievous",
			"smile",
			"tongue"
		],
		k: [
			31,
			5
		],
		l: [
			":p",
			":-p",
			":P",
			":-P",
			":b",
			":-b"
		],
		m: ":p",
		o: 2
	},
	pouch: {
		a: "Pouch",
		b: "1F45D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"bag",
			"accessories",
			"shopping"
		],
		k: [
			14,
			17
		],
		o: 2
	},
	no_mobile_phones: {
		a: "No Mobile Phones",
		b: "1F4F5",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"iphone",
			"mute",
			"circle"
		],
		k: [
			27,
			18
		],
		o: 2
	},
	stuck_out_tongue_winking_eye: {
		a: "Face with Stuck-out Tongue and Winking Eye",
		b: "1F61C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"prank",
			"childish",
			"playful",
			"mischievous",
			"smile",
			"wink",
			"tongue"
		],
		k: [
			31,
			6
		],
		l: [
			";p",
			";-p",
			";b",
			";-b",
			";P",
			";-P"
		],
		m: ";p",
		o: 2
	},
	sports_medal: {
		a: "Sports Medal",
		b: "1F3C5",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			9,
			25
		],
		o: 2
	},
	cucumber: {
		a: "Cucumber",
		b: "1F952",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fruit",
			"food",
			"pickle"
		],
		k: [
			41,
			33
		],
		o: 4
	},
	cow: {
		a: "Cow Face",
		b: "1F42E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"beef",
			"ox",
			"animal",
			"nature",
			"moo",
			"milk"
		],
		k: [
			12,
			18
		],
		o: 2
	},
	underage: {
		a: "No One Under Eighteen Symbol",
		b: "1F51E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"18",
			"drink",
			"pub",
			"night",
			"minor",
			"circle"
		],
		k: [
			28,
			1
		],
		o: 2
	},
	"flag-az": {
		a: "Azerbaijan Flag",
		b: "1F1E6-1F1FF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			47
		],
		o: 2
	},
	shopping_bags: {
		a: "Shopping Bags",
		b: "1F6CD-FE0F",
		c: "1F6CD",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			36,
			35
		],
		o: 2
	},
	"right-facing_fist": {
		skin_variations: {
			"1F3FB": {
				unified: "1F91C-1F3FB",
				non_qualified: null,
				image: "1f91c-1f3fb.png",
				sheet_x: 37,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F91C-1F3FC",
				non_qualified: null,
				image: "1f91c-1f3fc.png",
				sheet_x: 38,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F91C-1F3FD",
				non_qualified: null,
				image: "1f91c-1f3fd.png",
				sheet_x: 38,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F91C-1F3FE",
				non_qualified: null,
				image: "1f91c-1f3fe.png",
				sheet_x: 38,
				sheet_y: 2,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F91C-1F3FF",
				non_qualified: null,
				image: "1f91c-1f3ff.png",
				sheet_x: 38,
				sheet_y: 3,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Right-Facing Fist",
		b: "1F91C",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			55
		],
		o: 4
	},
	house_with_garden: {
		a: "House with Garden",
		b: "1F3E1",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"home",
			"plant",
			"nature"
		],
		k: [
			10,
			52
		],
		o: 2
	},
	clap: {
		skin_variations: {
			"1F3FB": {
				unified: "1F44F-1F3FB",
				non_qualified: null,
				image: "1f44f-1f3fb.png",
				sheet_x: 13,
				sheet_y: 51,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F44F-1F3FC",
				non_qualified: null,
				image: "1f44f-1f3fc.png",
				sheet_x: 13,
				sheet_y: 52,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F44F-1F3FD",
				non_qualified: null,
				image: "1f44f-1f3fd.png",
				sheet_x: 13,
				sheet_y: 53,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F44F-1F3FE",
				non_qualified: null,
				image: "1f44f-1f3fe.png",
				sheet_x: 13,
				sheet_y: 54,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F44F-1F3FF",
				non_qualified: null,
				image: "1f44f-1f3ff.png",
				sheet_x: 13,
				sheet_y: 55,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Clapping Hands Sign",
		b: "1F44F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"hands",
			"praise",
			"applause",
			"congrats",
			"yay"
		],
		k: [
			13,
			50
		],
		o: 2
	},
	leafy_green: {
		a: "Leafy Green",
		b: "1F96C",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			2
		],
		o: 11
	},
	office: {
		a: "Office Building",
		b: "1F3E2",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"building",
			"bureau",
			"work"
		],
		k: [
			10,
			53
		],
		o: 2
	},
	"flag-ba": {
		a: "Bosnia & Herzegovina Flag",
		b: "1F1E7-1F1E6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			48
		],
		o: 2
	},
	zany_face: {
		a: "Grinning Face with One Large and One Small Eye",
		b: "1F92A",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			38,
			44
		],
		n: [
			"grinning_face_with_one_large_and_one_small_eye"
		],
		o: 5
	},
	first_place_medal: {
		a: "First Place Medal",
		b: "1F947",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			22
		],
		o: 4
	},
	ox: {
		a: "Ox",
		b: "1F402",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"cow",
			"beef"
		],
		k: [
			11,
			30
		],
		o: 2
	},
	school_satchel: {
		a: "School Satchel",
		b: "1F392",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"student",
			"education",
			"bag",
			"backpack"
		],
		k: [
			7,
			54
		],
		o: 2
	},
	radioactive_sign: {
		a: "Radioactive Sign",
		b: "2622-FE0F",
		c: "2622",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			53,
			9
		],
		o: 2
	},
	second_place_medal: {
		a: "Second Place Medal",
		b: "1F948",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			23
		],
		o: 4
	},
	stuck_out_tongue_closed_eyes: {
		a: "Face with Stuck-out Tongue and Tightly-Closed Eyes",
		b: "1F61D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"prank",
			"playful",
			"mischievous",
			"smile",
			"tongue"
		],
		k: [
			31,
			7
		],
		o: 2
	},
	broccoli: {
		a: "Broccoli",
		b: "1F966",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			53
		],
		o: 5
	},
	biohazard_sign: {
		a: "Biohazard Sign",
		b: "2623-FE0F",
		c: "2623",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			53,
			10
		],
		o: 2
	},
	mans_shoe: {
		a: "Mans Shoe",
		b: "1F45E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fashion",
			"male"
		],
		k: [
			14,
			18
		],
		n: [
			"shoe"
		],
		o: 2
	},
	raised_hands: {
		skin_variations: {
			"1F3FB": {
				unified: "1F64C-1F3FB",
				non_qualified: null,
				image: "1f64c-1f3fb.png",
				sheet_x: 33,
				sheet_y: 9,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F64C-1F3FC",
				non_qualified: null,
				image: "1f64c-1f3fc.png",
				sheet_x: 33,
				sheet_y: 10,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F64C-1F3FD",
				non_qualified: null,
				image: "1f64c-1f3fd.png",
				sheet_x: 33,
				sheet_y: 11,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F64C-1F3FE",
				non_qualified: null,
				image: "1f64c-1f3fe.png",
				sheet_x: 33,
				sheet_y: 12,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F64C-1F3FF",
				non_qualified: null,
				image: "1f64c-1f3ff.png",
				sheet_x: 33,
				sheet_y: 13,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Person Raising Both Hands in Celebration",
		b: "1F64C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"gesture",
			"hooray",
			"yea",
			"celebration",
			"hands"
		],
		k: [
			33,
			8
		],
		o: 2
	},
	post_office: {
		a: "Japanese Post Office",
		b: "1F3E3",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"building",
			"envelope",
			"communication"
		],
		k: [
			10,
			54
		],
		o: 2
	},
	"flag-bb": {
		a: "Barbados Flag",
		b: "1F1E7-1F1E7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			49
		],
		o: 2
	},
	water_buffalo: {
		a: "Water Buffalo",
		b: "1F403",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"ox",
			"cow"
		],
		k: [
			11,
			31
		],
		o: 2
	},
	third_place_medal: {
		a: "Third Place Medal",
		b: "1F949",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			24
		],
		o: 4
	},
	european_post_office: {
		a: "European Post Office",
		b: "1F3E4",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"building",
			"email"
		],
		k: [
			10,
			55
		],
		o: 2
	},
	athletic_shoe: {
		a: "Athletic Shoe",
		b: "1F45F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shoes",
			"sports",
			"sneakers"
		],
		k: [
			14,
			19
		],
		o: 2
	},
	arrow_up: {
		a: "Upwards Black Arrow",
		b: "2B06-FE0F",
		c: "2B06",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"continue",
			"top",
			"direction"
		],
		k: [
			55,
			38
		],
		o: 2
	},
	cow2: {
		a: "Cow",
		b: "1F404",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"beef",
			"ox",
			"animal",
			"nature",
			"moo",
			"milk"
		],
		k: [
			11,
			32
		],
		o: 2
	},
	open_hands: {
		skin_variations: {
			"1F3FB": {
				unified: "1F450-1F3FB",
				non_qualified: null,
				image: "1f450-1f3fb.png",
				sheet_x: 14,
				sheet_y: 0,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F450-1F3FC",
				non_qualified: null,
				image: "1f450-1f3fc.png",
				sheet_x: 14,
				sheet_y: 1,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F450-1F3FD",
				non_qualified: null,
				image: "1f450-1f3fd.png",
				sheet_x: 14,
				sheet_y: 2,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F450-1F3FE",
				non_qualified: null,
				image: "1f450-1f3fe.png",
				sheet_x: 14,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F450-1F3FF",
				non_qualified: null,
				image: "1f450-1f3ff.png",
				sheet_x: 14,
				sheet_y: 4,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Open Hands Sign",
		b: "1F450",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fingers",
			"butterfly",
			"hands",
			"open"
		],
		k: [
			13,
			56
		],
		o: 2
	},
	garlic: {
		a: "Garlic",
		b: "1F9C4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			12
		],
		o: 12
	},
	money_mouth_face: {
		a: "Money-Mouth Face",
		b: "1F911",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"rich",
			"dollar",
			"money"
		],
		k: [
			37,
			24
		],
		o: 2
	},
	"flag-bd": {
		a: "Bangladesh Flag",
		b: "1F1E7-1F1E9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			50
		],
		o: 2
	},
	soccer: {
		a: "Soccer Ball",
		b: "26BD",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sports",
			"football"
		],
		k: [
			53,
			56
		],
		o: 2
	},
	hugging_face: {
		a: "Hugging Face",
		b: "1F917",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			30
		],
		o: 2
	},
	onion: {
		a: "Onion",
		b: "1F9C5",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			13
		],
		o: 12
	},
	arrow_upper_right: {
		a: "North East Arrow",
		b: "2197-FE0F",
		c: "2197",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"point",
			"direction",
			"diagonal",
			"northeast"
		],
		k: [
			52,
			17
		],
		o: 2
	},
	palms_up_together: {
		skin_variations: {
			"1F3FB": {
				unified: "1F932-1F3FB",
				non_qualified: null,
				image: "1f932-1f3fb.png",
				sheet_x: 39,
				sheet_y: 6,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F932-1F3FC",
				non_qualified: null,
				image: "1f932-1f3fc.png",
				sheet_x: 39,
				sheet_y: 7,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F932-1F3FD",
				non_qualified: null,
				image: "1f932-1f3fd.png",
				sheet_x: 39,
				sheet_y: 8,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F932-1F3FE",
				non_qualified: null,
				image: "1f932-1f3fe.png",
				sheet_x: 39,
				sheet_y: 9,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F932-1F3FF",
				non_qualified: null,
				image: "1f932-1f3ff.png",
				sheet_x: 39,
				sheet_y: 10,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Palms Up Together",
		b: "1F932",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			39,
			5
		],
		o: 5
	},
	pig: {
		a: "Pig Face",
		b: "1F437",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"oink",
			"nature"
		],
		k: [
			12,
			27
		],
		o: 2
	},
	hospital: {
		a: "Hospital",
		b: "1F3E5",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"building",
			"health",
			"surgery",
			"doctor"
		],
		k: [
			10,
			56
		],
		o: 2
	},
	hiking_boot: {
		a: "Hiking Boot",
		b: "1F97E",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			16
		],
		o: 11
	},
	"flag-be": {
		a: "Belgium Flag",
		b: "1F1E7-1F1EA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			51
		],
		o: 2
	},
	"flag-bf": {
		a: "Burkina Faso Flag",
		b: "1F1E7-1F1EB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			52
		],
		o: 2
	},
	mushroom: {
		a: "Mushroom",
		b: "1F344",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"plant",
			"vegetable"
		],
		k: [
			6,
			28
		],
		o: 2
	},
	pig2: {
		a: "Pig",
		b: "1F416",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature"
		],
		k: [
			11,
			51
		],
		o: 2
	},
	baseball: {
		a: "Baseball",
		b: "26BE",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sports",
			"balls"
		],
		k: [
			54,
			0
		],
		o: 2
	},
	face_with_hand_over_mouth: {
		a: "Smiling Face with Smiling Eyes and Hand Covering Mouth",
		b: "1F92D",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			38,
			47
		],
		n: [
			"smiling_face_with_smiling_eyes_and_hand_covering_mouth"
		],
		o: 5
	},
	handshake: {
		a: "Handshake",
		b: "1F91D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"agreement",
			"shake"
		],
		k: [
			38,
			4
		],
		o: 4
	},
	womans_flat_shoe: {
		a: "Flat Shoe",
		b: "1F97F",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			17
		],
		o: 11
	},
	bank: {
		a: "Bank",
		b: "1F3E6",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"building",
			"money",
			"sales",
			"cash",
			"business",
			"enterprise"
		],
		k: [
			11,
			0
		],
		o: 2
	},
	arrow_right: {
		a: "Black Rightwards Arrow",
		b: "27A1-FE0F",
		c: "27A1",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"next"
		],
		k: [
			55,
			32
		],
		o: 2
	},
	peanuts: {
		a: "Peanuts",
		b: "1F95C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"nut"
		],
		k: [
			41,
			43
		],
		o: 4
	},
	shushing_face: {
		a: "Face with Finger Covering Closed Lips",
		b: "1F92B",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			38,
			45
		],
		n: [
			"face_with_finger_covering_closed_lips"
		],
		o: 5
	},
	pray: {
		skin_variations: {
			"1F3FB": {
				unified: "1F64F-1F3FB",
				non_qualified: null,
				image: "1f64f-1f3fb.png",
				sheet_x: 33,
				sheet_y: 51,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F64F-1F3FC",
				non_qualified: null,
				image: "1f64f-1f3fc.png",
				sheet_x: 33,
				sheet_y: 52,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F64F-1F3FD",
				non_qualified: null,
				image: "1f64f-1f3fd.png",
				sheet_x: 33,
				sheet_y: 53,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F64F-1F3FE",
				non_qualified: null,
				image: "1f64f-1f3fe.png",
				sheet_x: 33,
				sheet_y: 54,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F64F-1F3FF",
				non_qualified: null,
				image: "1f64f-1f3ff.png",
				sheet_x: 33,
				sheet_y: 55,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Person with Folded Hands",
		b: "1F64F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"please",
			"hope",
			"wish",
			"namaste",
			"highfive"
		],
		k: [
			33,
			50
		],
		o: 2
	},
	softball: {
		a: "Softball",
		b: "1F94E",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			29
		],
		o: 11
	},
	high_heel: {
		a: "High-Heeled Shoe",
		b: "1F460",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fashion",
			"shoes",
			"female",
			"pumps",
			"stiletto"
		],
		k: [
			14,
			20
		],
		o: 2
	},
	"flag-bg": {
		a: "Bulgaria Flag",
		b: "1F1E7-1F1EC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			53
		],
		o: 2
	},
	arrow_lower_right: {
		a: "South East Arrow",
		b: "2198-FE0F",
		c: "2198",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"direction",
			"diagonal",
			"southeast"
		],
		k: [
			52,
			18
		],
		o: 2
	},
	hotel: {
		a: "Hotel",
		b: "1F3E8",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"building",
			"accomodation",
			"checkin"
		],
		k: [
			11,
			2
		],
		o: 2
	},
	boar: {
		a: "Boar",
		b: "1F417",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature"
		],
		k: [
			11,
			52
		],
		o: 2
	},
	sandal: {
		a: "Womans Sandal",
		b: "1F461",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shoes",
			"fashion",
			"flip flops"
		],
		k: [
			14,
			21
		],
		o: 2
	},
	"flag-bh": {
		a: "Bahrain Flag",
		b: "1F1E7-1F1ED",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			54
		],
		o: 2
	},
	arrow_down: {
		a: "Downwards Black Arrow",
		b: "2B07-FE0F",
		c: "2B07",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"direction",
			"bottom"
		],
		k: [
			55,
			39
		],
		o: 2
	},
	thinking_face: {
		a: "Thinking Face",
		b: "1F914",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			27
		],
		o: 2
	},
	writing_hand: {
		skin_variations: {
			"1F3FB": {
				unified: "270D-1F3FB",
				non_qualified: null,
				image: "270d-1f3fb.png",
				sheet_x: 55,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "270D-1F3FC",
				non_qualified: null,
				image: "270d-1f3fc.png",
				sheet_x: 55,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "270D-1F3FD",
				non_qualified: null,
				image: "270d-1f3fd.png",
				sheet_x: 55,
				sheet_y: 7,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "270D-1F3FE",
				non_qualified: null,
				image: "270d-1f3fe.png",
				sheet_x: 55,
				sheet_y: 8,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "270D-1F3FF",
				non_qualified: null,
				image: "270d-1f3ff.png",
				sheet_x: 55,
				sheet_y: 9,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Writing Hand",
		b: "270D-FE0F",
		c: "270D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"lower_left_ballpoint_pen",
			"stationery",
			"write",
			"compose"
		],
		k: [
			55,
			4
		],
		o: 2
	},
	chestnut: {
		a: "Chestnut",
		b: "1F330",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"squirrel"
		],
		k: [
			6,
			8
		],
		o: 2
	},
	basketball: {
		a: "Basketball and Hoop",
		b: "1F3C0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sports",
			"balls",
			"NBA"
		],
		k: [
			8,
			38
		],
		o: 2
	},
	pig_nose: {
		a: "Pig Nose",
		b: "1F43D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"oink"
		],
		k: [
			12,
			33
		],
		o: 2
	},
	love_hotel: {
		a: "Love Hotel",
		b: "1F3E9",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"like",
			"affection",
			"dating"
		],
		k: [
			11,
			3
		],
		o: 2
	},
	nail_care: {
		skin_variations: {
			"1F3FB": {
				unified: "1F485-1F3FB",
				non_qualified: null,
				image: "1f485-1f3fb.png",
				sheet_x: 24,
				sheet_y: 34,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F485-1F3FC",
				non_qualified: null,
				image: "1f485-1f3fc.png",
				sheet_x: 24,
				sheet_y: 35,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F485-1F3FD",
				non_qualified: null,
				image: "1f485-1f3fd.png",
				sheet_x: 24,
				sheet_y: 36,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F485-1F3FE",
				non_qualified: null,
				image: "1f485-1f3fe.png",
				sheet_x: 24,
				sheet_y: 37,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F485-1F3FF",
				non_qualified: null,
				image: "1f485-1f3ff.png",
				sheet_x: 24,
				sheet_y: 38,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Nail Polish",
		b: "1F485",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"beauty",
			"manicure",
			"finger",
			"fashion",
			"nail"
		],
		k: [
			24,
			33
		],
		o: 2
	},
	volleyball: {
		a: "Volleyball",
		b: "1F3D0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sports",
			"balls"
		],
		k: [
			10,
			35
		],
		o: 2
	},
	"flag-bi": {
		a: "Burundi Flag",
		b: "1F1E7-1F1EE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			55
		],
		o: 2
	},
	arrow_lower_left: {
		a: "South West Arrow",
		b: "2199-FE0F",
		c: "2199",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"direction",
			"diagonal",
			"southwest"
		],
		k: [
			52,
			19
		],
		o: 2
	},
	ram: {
		a: "Ram",
		b: "1F40F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"sheep",
			"nature"
		],
		k: [
			11,
			43
		],
		o: 2
	},
	ballet_shoes: {
		a: "Ballet Shoes",
		b: "1FA70",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			51
		],
		o: 12
	},
	zipper_mouth_face: {
		a: "Zipper-Mouth Face",
		b: "1F910",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"sealed",
			"zipper",
			"secret"
		],
		k: [
			37,
			23
		],
		o: 2
	},
	bread: {
		a: "Bread",
		b: "1F35E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"wheat",
			"breakfast",
			"toast"
		],
		k: [
			6,
			54
		],
		o: 2
	},
	convenience_store: {
		a: "Convenience Store",
		b: "1F3EA",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"building",
			"shopping",
			"groceries"
		],
		k: [
			11,
			4
		],
		o: 2
	},
	boot: {
		a: "Womans Boots",
		b: "1F462",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shoes",
			"fashion"
		],
		k: [
			14,
			22
		],
		o: 2
	},
	sheep: {
		a: "Sheep",
		b: "1F411",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"wool",
			"shipit"
		],
		k: [
			11,
			45
		],
		o: 2
	},
	face_with_raised_eyebrow: {
		a: "Face with One Eyebrow Raised",
		b: "1F928",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			38,
			42
		],
		n: [
			"face_with_one_eyebrow_raised"
		],
		o: 5
	},
	"flag-bj": {
		a: "Benin Flag",
		b: "1F1E7-1F1EF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			0,
			56
		],
		o: 2
	},
	arrow_left: {
		a: "Leftwards Black Arrow",
		b: "2B05-FE0F",
		c: "2B05",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"previous",
			"back"
		],
		k: [
			55,
			37
		],
		o: 2
	},
	selfie: {
		skin_variations: {
			"1F3FB": {
				unified: "1F933-1F3FB",
				non_qualified: null,
				image: "1f933-1f3fb.png",
				sheet_x: 39,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F933-1F3FC",
				non_qualified: null,
				image: "1f933-1f3fc.png",
				sheet_x: 39,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F933-1F3FD",
				non_qualified: null,
				image: "1f933-1f3fd.png",
				sheet_x: 39,
				sheet_y: 14,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F933-1F3FE",
				non_qualified: null,
				image: "1f933-1f3fe.png",
				sheet_x: 39,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F933-1F3FF",
				non_qualified: null,
				image: "1f933-1f3ff.png",
				sheet_x: 39,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Selfie",
		b: "1F933",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"camera",
			"phone"
		],
		k: [
			39,
			11
		],
		o: 4
	},
	croissant: {
		a: "Croissant",
		b: "1F950",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"bread",
			"french"
		],
		k: [
			41,
			31
		],
		o: 4
	},
	school: {
		a: "School",
		b: "1F3EB",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"building",
			"student",
			"education",
			"learn",
			"teach"
		],
		k: [
			11,
			5
		],
		o: 2
	},
	football: {
		a: "American Football",
		b: "1F3C8",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sports",
			"balls",
			"NFL"
		],
		k: [
			9,
			33
		],
		o: 2
	},
	goat: {
		a: "Goat",
		b: "1F410",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature"
		],
		k: [
			11,
			44
		],
		o: 2
	},
	department_store: {
		a: "Department Store",
		b: "1F3EC",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"building",
			"shopping",
			"mall"
		],
		k: [
			11,
			6
		],
		o: 2
	},
	"flag-bl": {
		a: "St. Barthélemy Flag",
		b: "1F1E7-1F1F1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			0
		],
		o: 2
	},
	crown: {
		a: "Crown",
		b: "1F451",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"king",
			"kod",
			"leader",
			"royalty",
			"lord"
		],
		k: [
			14,
			5
		],
		o: 2
	},
	arrow_upper_left: {
		a: "North West Arrow",
		b: "2196-FE0F",
		c: "2196",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"point",
			"direction",
			"diagonal",
			"northwest"
		],
		k: [
			52,
			16
		],
		o: 2
	},
	neutral_face: {
		a: "Neutral Face",
		b: "1F610",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"indifference",
			"meh",
			":|",
			"neutral"
		],
		k: [
			30,
			51
		],
		l: [
			":|",
			":-|"
		],
		o: 2
	},
	rugby_football: {
		a: "Rugby Football",
		b: "1F3C9",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sports",
			"team"
		],
		k: [
			9,
			34
		],
		o: 2
	},
	muscle: {
		skin_variations: {
			"1F3FB": {
				unified: "1F4AA-1F3FB",
				non_qualified: null,
				image: "1f4aa-1f3fb.png",
				sheet_x: 25,
				sheet_y: 53,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F4AA-1F3FC",
				non_qualified: null,
				image: "1f4aa-1f3fc.png",
				sheet_x: 25,
				sheet_y: 54,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F4AA-1F3FD",
				non_qualified: null,
				image: "1f4aa-1f3fd.png",
				sheet_x: 25,
				sheet_y: 55,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F4AA-1F3FE",
				non_qualified: null,
				image: "1f4aa-1f3fe.png",
				sheet_x: 25,
				sheet_y: 56,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F4AA-1F3FF",
				non_qualified: null,
				image: "1f4aa-1f3ff.png",
				sheet_x: 26,
				sheet_y: 0,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Flexed Biceps",
		b: "1F4AA",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"arm",
			"flex",
			"hand",
			"summer",
			"strong",
			"biceps"
		],
		k: [
			25,
			52
		],
		o: 2
	},
	baguette_bread: {
		a: "Baguette Bread",
		b: "1F956",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"bread",
			"french"
		],
		k: [
			41,
			37
		],
		o: 4
	},
	expressionless: {
		a: "Expressionless Face",
		b: "1F611",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"indifferent",
			"-_-",
			"meh",
			"deadpan"
		],
		k: [
			30,
			52
		],
		o: 2
	},
	womans_hat: {
		a: "Womans Hat",
		b: "1F452",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fashion",
			"accessories",
			"female",
			"lady",
			"spring"
		],
		k: [
			14,
			6
		],
		o: 2
	},
	pretzel: {
		a: "Pretzel",
		b: "1F968",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			55
		],
		o: 5
	},
	mechanical_arm: {
		a: "Mechanical Arm",
		b: "1F9BE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			6
		],
		o: 12
	},
	arrow_up_down: {
		a: "Up Down Arrow",
		b: "2195-FE0F",
		c: "2195",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"direction",
			"way",
			"vertical"
		],
		k: [
			52,
			15
		],
		o: 2
	},
	dromedary_camel: {
		a: "Dromedary Camel",
		b: "1F42A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"hot",
			"desert",
			"hump"
		],
		k: [
			12,
			14
		],
		o: 2
	},
	tennis: {
		a: "Tennis Racquet and Ball",
		b: "1F3BE",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sports",
			"balls",
			"green"
		],
		k: [
			8,
			36
		],
		o: 2
	},
	"flag-bm": {
		a: "Bermuda Flag",
		b: "1F1E7-1F1F2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			1
		],
		o: 2
	},
	factory: {
		a: "Factory",
		b: "1F3ED",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"building",
			"industry",
			"pollution",
			"smoke"
		],
		k: [
			11,
			7
		],
		o: 2
	},
	japanese_castle: {
		a: "Japanese Castle",
		b: "1F3EF",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"building"
		],
		k: [
			11,
			9
		],
		o: 2
	},
	no_mouth: {
		a: "Face Without Mouth",
		b: "1F636",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"hellokitty"
		],
		k: [
			31,
			32
		],
		o: 2
	},
	mechanical_leg: {
		a: "Mechanical Leg",
		b: "1F9BF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			7
		],
		o: 12
	},
	bagel: {
		a: "Bagel",
		b: "1F96F",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			5
		],
		o: 11
	},
	camel: {
		a: "Bactrian Camel",
		b: "1F42B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"hot",
			"desert",
			"hump"
		],
		k: [
			12,
			15
		],
		o: 2
	},
	tophat: {
		a: "Top Hat",
		b: "1F3A9",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"magic",
			"gentleman",
			"classy",
			"circus"
		],
		k: [
			8,
			15
		],
		o: 2
	},
	left_right_arrow: {
		a: "Left Right Arrow",
		b: "2194-FE0F",
		c: "2194",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shape",
			"direction",
			"horizontal",
			"sideways"
		],
		k: [
			52,
			14
		],
		o: 2
	},
	"flag-bn": {
		a: "Brunei Flag",
		b: "1F1E7-1F1F3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			2
		],
		o: 2
	},
	flying_disc: {
		a: "Flying Disc",
		b: "1F94F",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			30
		],
		o: 11
	},
	smirk: {
		a: "Smirking Face",
		b: "1F60F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"smile",
			"mean",
			"prank",
			"smug",
			"sarcasm"
		],
		k: [
			30,
			50
		],
		o: 2
	},
	mortar_board: {
		a: "Graduation Cap",
		b: "1F393",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"school",
			"college",
			"degree",
			"university",
			"graduation",
			"cap",
			"hat",
			"legal",
			"learn",
			"education"
		],
		k: [
			7,
			55
		],
		o: 2
	},
	european_castle: {
		a: "European Castle",
		b: "1F3F0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"building",
			"royalty",
			"history"
		],
		k: [
			11,
			10
		],
		o: 2
	},
	leg: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9B5-1F3FB",
				non_qualified: null,
				image: "1f9b5-1f3fb.png",
				sheet_x: 43,
				sheet_y: 6,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9B5-1F3FC",
				non_qualified: null,
				image: "1f9b5-1f3fc.png",
				sheet_x: 43,
				sheet_y: 7,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9B5-1F3FD",
				non_qualified: null,
				image: "1f9b5-1f3fd.png",
				sheet_x: 43,
				sheet_y: 8,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9B5-1F3FE",
				non_qualified: null,
				image: "1f9b5-1f3fe.png",
				sheet_x: 43,
				sheet_y: 9,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9B5-1F3FF",
				non_qualified: null,
				image: "1f9b5-1f3ff.png",
				sheet_x: 43,
				sheet_y: 10,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Leg",
		b: "1F9B5",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			43,
			5
		],
		o: 11
	},
	pancakes: {
		a: "Pancakes",
		b: "1F95E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"breakfast",
			"flapjacks",
			"hotcakes"
		],
		k: [
			41,
			45
		],
		o: 4
	},
	leftwards_arrow_with_hook: {
		a: "Leftwards Arrow with Hook",
		b: "21A9-FE0F",
		c: "21A9",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"back",
			"return",
			"blue-square",
			"undo",
			"enter"
		],
		k: [
			52,
			20
		],
		o: 2
	},
	"flag-bo": {
		a: "Bolivia Flag",
		b: "1F1E7-1F1F4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			3
		],
		o: 2
	},
	bowling: {
		a: "Bowling",
		b: "1F3B3",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sports",
			"fun",
			"play"
		],
		k: [
			8,
			25
		],
		o: 2
	},
	llama: {
		a: "Llama",
		b: "1F999",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			43
		],
		o: 11
	},
	arrow_right_hook: {
		a: "Rightwards Arrow with Hook",
		b: "21AA-FE0F",
		c: "21AA",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"return",
			"rotate",
			"direction"
		],
		k: [
			52,
			21
		],
		o: 2
	},
	wedding: {
		a: "Wedding",
		b: "1F492",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"love",
			"like",
			"affection",
			"couple",
			"marriage",
			"bride",
			"groom"
		],
		k: [
			25,
			28
		],
		o: 2
	},
	"flag-bq": {
		a: "Caribbean Netherlands Flag",
		b: "1F1E7-1F1F6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			4
		],
		o: 2
	},
	foot: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9B6-1F3FB",
				non_qualified: null,
				image: "1f9b6-1f3fb.png",
				sheet_x: 43,
				sheet_y: 12,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9B6-1F3FC",
				non_qualified: null,
				image: "1f9b6-1f3fc.png",
				sheet_x: 43,
				sheet_y: 13,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9B6-1F3FD",
				non_qualified: null,
				image: "1f9b6-1f3fd.png",
				sheet_x: 43,
				sheet_y: 14,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9B6-1F3FE",
				non_qualified: null,
				image: "1f9b6-1f3fe.png",
				sheet_x: 43,
				sheet_y: 15,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9B6-1F3FF",
				non_qualified: null,
				image: "1f9b6-1f3ff.png",
				sheet_x: 43,
				sheet_y: 16,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Foot",
		b: "1F9B6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			43,
			11
		],
		o: 11
	},
	giraffe_face: {
		a: "Giraffe Face",
		b: "1F992",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			36
		],
		o: 5
	},
	unamused: {
		a: "Unamused Face",
		b: "1F612",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"indifference",
			"bored",
			"straight face",
			"serious",
			"sarcasm"
		],
		k: [
			30,
			53
		],
		m: ":(",
		o: 2
	},
	billed_cap: {
		a: "Billed Cap",
		b: "1F9E2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			21
		],
		o: 5
	},
	waffle: {
		a: "Waffle",
		b: "1F9C7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			15
		],
		o: 12
	},
	cricket_bat_and_ball: {
		a: "Cricket Bat and Ball",
		b: "1F3CF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			10,
			34
		],
		o: 2
	},
	helmet_with_white_cross: {
		a: "Helmet with White Cross",
		b: "26D1-FE0F",
		c: "26D1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			54,
			6
		],
		o: 2
	},
	ear: {
		skin_variations: {
			"1F3FB": {
				unified: "1F442-1F3FB",
				non_qualified: null,
				image: "1f442-1f3fb.png",
				sheet_x: 12,
				sheet_y: 40,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F442-1F3FC",
				non_qualified: null,
				image: "1f442-1f3fc.png",
				sheet_x: 12,
				sheet_y: 41,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F442-1F3FD",
				non_qualified: null,
				image: "1f442-1f3fd.png",
				sheet_x: 12,
				sheet_y: 42,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F442-1F3FE",
				non_qualified: null,
				image: "1f442-1f3fe.png",
				sheet_x: 12,
				sheet_y: 43,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F442-1F3FF",
				non_qualified: null,
				image: "1f442-1f3ff.png",
				sheet_x: 12,
				sheet_y: 44,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Ear",
		b: "1F442",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"hear",
			"sound",
			"listen"
		],
		k: [
			12,
			39
		],
		o: 2
	},
	elephant: {
		a: "Elephant",
		b: "1F418",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"nose",
			"th",
			"circus"
		],
		k: [
			11,
			53
		],
		o: 2
	},
	cheese_wedge: {
		a: "Cheese Wedge",
		b: "1F9C0",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			8
		],
		o: 2
	},
	tokyo_tower: {
		a: "Tokyo Tower",
		b: "1F5FC",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"japanese"
		],
		k: [
			30,
			31
		],
		o: 2
	},
	arrow_heading_up: {
		a: "Arrow Pointing Rightwards Then Curving Upwards",
		b: "2934-FE0F",
		c: "2934",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"direction",
			"top"
		],
		k: [
			55,
			35
		],
		o: 2
	},
	field_hockey_stick_and_ball: {
		a: "Field Hockey Stick and Ball",
		b: "1F3D1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			10,
			36
		],
		o: 2
	},
	"flag-br": {
		a: "Brazil Flag",
		b: "1F1E7-1F1F7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			5
		],
		o: 2
	},
	face_with_rolling_eyes: {
		a: "Face with Rolling Eyes",
		b: "1F644",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			31,
			46
		],
		o: 2
	},
	ear_with_hearing_aid: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9BB-1F3FB",
				non_qualified: null,
				image: "1f9bb-1f3fb.png",
				sheet_x: 43,
				sheet_y: 56,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9BB-1F3FC",
				non_qualified: null,
				image: "1f9bb-1f3fc.png",
				sheet_x: 44,
				sheet_y: 0,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9BB-1F3FD",
				non_qualified: null,
				image: "1f9bb-1f3fd.png",
				sheet_x: 44,
				sheet_y: 1,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9BB-1F3FE",
				non_qualified: null,
				image: "1f9bb-1f3fe.png",
				sheet_x: 44,
				sheet_y: 2,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9BB-1F3FF",
				non_qualified: null,
				image: "1f9bb-1f3ff.png",
				sheet_x: 44,
				sheet_y: 3,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Ear with Hearing Aid",
		b: "1F9BB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			43,
			55
		],
		o: 12
	},
	arrow_heading_down: {
		a: "Arrow Pointing Rightwards Then Curving Downwards",
		b: "2935-FE0F",
		c: "2935",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"direction",
			"bottom"
		],
		k: [
			55,
			36
		],
		o: 2
	},
	ice_hockey_stick_and_puck: {
		a: "Ice Hockey Stick and Puck",
		b: "1F3D2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			10,
			37
		],
		o: 2
	},
	meat_on_bone: {
		a: "Meat on Bone",
		b: "1F356",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"good",
			"food",
			"drumstick"
		],
		k: [
			6,
			46
		],
		o: 2
	},
	prayer_beads: {
		a: "Prayer Beads",
		b: "1F4FF",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"dhikr",
			"religious"
		],
		k: [
			27,
			27
		],
		o: 2
	},
	statue_of_liberty: {
		a: "Statue of Liberty",
		b: "1F5FD",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"american",
			"newyork"
		],
		k: [
			30,
			32
		],
		o: 2
	},
	grimacing: {
		a: "Grimacing Face",
		b: "1F62C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"grimace",
			"teeth"
		],
		k: [
			31,
			22
		],
		o: 2
	},
	"flag-bs": {
		a: "Bahamas Flag",
		b: "1F1E7-1F1F8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			6
		],
		o: 2
	},
	rhinoceros: {
		a: "Rhinoceros",
		b: "1F98F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"horn"
		],
		k: [
			42,
			33
		],
		o: 4
	},
	lacrosse: {
		a: "Lacrosse Stick and Ball",
		b: "1F94D",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			28
		],
		o: 11
	},
	poultry_leg: {
		a: "Poultry Leg",
		b: "1F357",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"meat",
			"drumstick",
			"bird",
			"chicken",
			"turkey"
		],
		k: [
			6,
			47
		],
		o: 2
	},
	hippopotamus: {
		a: "Hippopotamus",
		b: "1F99B",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			45
		],
		o: 11
	},
	nose: {
		skin_variations: {
			"1F3FB": {
				unified: "1F443-1F3FB",
				non_qualified: null,
				image: "1f443-1f3fb.png",
				sheet_x: 12,
				sheet_y: 46,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F443-1F3FC",
				non_qualified: null,
				image: "1f443-1f3fc.png",
				sheet_x: 12,
				sheet_y: 47,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F443-1F3FD",
				non_qualified: null,
				image: "1f443-1f3fd.png",
				sheet_x: 12,
				sheet_y: 48,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F443-1F3FE",
				non_qualified: null,
				image: "1f443-1f3fe.png",
				sheet_x: 12,
				sheet_y: 49,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F443-1F3FF",
				non_qualified: null,
				image: "1f443-1f3ff.png",
				sheet_x: 12,
				sheet_y: 50,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Nose",
		b: "1F443",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"smell",
			"sniff"
		],
		k: [
			12,
			45
		],
		o: 2
	},
	arrows_clockwise: {
		a: "Clockwise Downwards and Upwards Open Circle Arrows",
		b: "1F503",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sync",
			"cycle",
			"round",
			"repeat"
		],
		k: [
			27,
			31
		],
		o: 2
	},
	"flag-bt": {
		a: "Bhutan Flag",
		b: "1F1E7-1F1F9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			7
		],
		o: 2
	},
	church: {
		a: "Church",
		b: "26EA",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"building",
			"religion",
			"christ"
		],
		k: [
			54,
			10
		],
		o: 2
	},
	lipstick: {
		a: "Lipstick",
		b: "1F484",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"female",
			"girl",
			"fashion",
			"woman"
		],
		k: [
			24,
			32
		],
		o: 2
	},
	lying_face: {
		a: "Lying Face",
		b: "1F925",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"lie",
			"pinocchio"
		],
		k: [
			38,
			22
		],
		o: 4
	},
	arrows_counterclockwise: {
		a: "Anticlockwise Downwards and Upwards Open Circle Arrows",
		b: "1F504",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"sync",
			"cycle"
		],
		k: [
			27,
			32
		],
		o: 2
	},
	"flag-bv": {
		a: "Bouvet Island Flag",
		b: "1F1E7-1F1FB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			8
		],
		o: 2
	},
	cut_of_meat: {
		a: "Cut of Meat",
		b: "1F969",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			56
		],
		o: 5
	},
	mosque: {
		a: "Mosque",
		b: "1F54C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"islam",
			"worship",
			"minaret"
		],
		k: [
			28,
			36
		],
		o: 2
	},
	ring: {
		a: "Ring",
		b: "1F48D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"wedding",
			"propose",
			"marriage",
			"valentines",
			"diamond",
			"fashion",
			"jewelry",
			"gem",
			"engagement"
		],
		k: [
			25,
			23
		],
		o: 2
	},
	brain: {
		a: "Brain",
		b: "1F9E0",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			19
		],
		o: 5
	},
	table_tennis_paddle_and_ball: {
		a: "Table Tennis Paddle and Ball",
		b: "1F3D3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			10,
			38
		],
		o: 2
	},
	relieved: {
		a: "Relieved Face",
		b: "1F60C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"relaxed",
			"phew",
			"massage",
			"happiness"
		],
		k: [
			30,
			47
		],
		o: 2
	},
	mouse: {
		a: "Mouse Face",
		b: "1F42D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"cheese_wedge",
			"rodent"
		],
		k: [
			12,
			17
		],
		o: 2
	},
	hindu_temple: {
		a: "Hindu Temple",
		b: "1F6D5",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			36,
			41
		],
		o: 12
	},
	back: {
		a: "Back with Leftwards Arrow Above",
		b: "1F519",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"arrow",
			"words",
			"return"
		],
		k: [
			27,
			53
		],
		o: 2
	},
	gem: {
		a: "Gem Stone",
		b: "1F48E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue",
			"ruby",
			"diamond",
			"jewelry"
		],
		k: [
			25,
			24
		],
		o: 2
	},
	pensive: {
		a: "Pensive Face",
		b: "1F614",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"sad",
			"depressed",
			"upset"
		],
		k: [
			30,
			55
		],
		o: 2
	},
	"flag-bw": {
		a: "Botswana Flag",
		b: "1F1E7-1F1FC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			9
		],
		o: 2
	},
	mouse2: {
		a: "Mouse",
		b: "1F401",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"rodent"
		],
		k: [
			11,
			29
		],
		o: 2
	},
	bacon: {
		a: "Bacon",
		b: "1F953",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"breakfast",
			"pork",
			"pig",
			"meat"
		],
		k: [
			41,
			34
		],
		o: 4
	},
	tooth: {
		a: "Tooth",
		b: "1F9B7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			43,
			17
		],
		o: 11
	},
	badminton_racquet_and_shuttlecock: {
		a: "Badminton Racquet and Shuttlecock",
		b: "1F3F8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			11,
			20
		],
		o: 2
	},
	rat: {
		a: "Rat",
		b: "1F400",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"mouse",
			"rodent"
		],
		k: [
			11,
			28
		],
		o: 2
	},
	synagogue: {
		a: "Synagogue",
		b: "1F54D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"judaism",
			"worship",
			"temple",
			"jewish"
		],
		k: [
			28,
			37
		],
		o: 2
	},
	end: {
		a: "End with Leftwards Arrow Above",
		b: "1F51A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"words",
			"arrow"
		],
		k: [
			27,
			54
		],
		o: 2
	},
	bone: {
		a: "Bone",
		b: "1F9B4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			43,
			4
		],
		o: 11
	},
	boxing_glove: {
		a: "Boxing Glove",
		b: "1F94A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sports",
			"fighting"
		],
		k: [
			41,
			25
		],
		o: 4
	},
	mute: {
		a: "Speaker with Cancellation Stroke",
		b: "1F507",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sound",
			"volume",
			"silence",
			"quiet"
		],
		k: [
			27,
			35
		],
		o: 2
	},
	hamburger: {
		a: "Hamburger",
		b: "1F354",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"meat",
			"fast food",
			"beef",
			"cheeseburger",
			"mcdonalds",
			"burger king"
		],
		k: [
			6,
			44
		],
		o: 2
	},
	"flag-by": {
		a: "Belarus Flag",
		b: "1F1E7-1F1FE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			10
		],
		o: 2
	},
	sleepy: {
		a: "Sleepy Face",
		b: "1F62A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"tired",
			"rest",
			"nap"
		],
		k: [
			31,
			20
		],
		o: 2
	},
	on: {
		a: "On with Exclamation Mark with Left Right Arrow Above",
		b: "1F51B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"arrow",
			"words"
		],
		k: [
			27,
			55
		],
		o: 2
	},
	martial_arts_uniform: {
		a: "Martial Arts Uniform",
		b: "1F94B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"judo",
			"karate",
			"taekwondo"
		],
		k: [
			41,
			26
		],
		o: 4
	},
	speaker: {
		a: "Speaker",
		b: "1F508",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sound",
			"volume",
			"silence",
			"broadcast"
		],
		k: [
			27,
			36
		],
		o: 2
	},
	drooling_face: {
		a: "Drooling Face",
		b: "1F924",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face"
		],
		k: [
			38,
			21
		],
		o: 4
	},
	eyes: {
		a: "Eyes",
		b: "1F440",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"look",
			"watch",
			"stalk",
			"peek",
			"see"
		],
		k: [
			12,
			36
		],
		o: 2
	},
	"flag-bz": {
		a: "Belize Flag",
		b: "1F1E7-1F1FF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			11
		],
		o: 2
	},
	hamster: {
		a: "Hamster Face",
		b: "1F439",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature"
		],
		k: [
			12,
			29
		],
		o: 2
	},
	shinto_shrine: {
		a: "Shinto Shrine",
		b: "26E9-FE0F",
		c: "26E9",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"temple",
			"japan",
			"kyoto"
		],
		k: [
			54,
			9
		],
		o: 2
	},
	fries: {
		a: "French Fries",
		b: "1F35F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"chips",
			"snack",
			"fast food"
		],
		k: [
			6,
			55
		],
		o: 2
	},
	goal_net: {
		a: "Goal Net",
		b: "1F945",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sports"
		],
		k: [
			41,
			21
		],
		o: 4
	},
	kaaba: {
		a: "Kaaba",
		b: "1F54B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"mecca",
			"mosque",
			"islam"
		],
		k: [
			28,
			35
		],
		o: 2
	},
	soon: {
		a: "Soon with Rightwards Arrow Above",
		b: "1F51C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"arrow",
			"words"
		],
		k: [
			27,
			56
		],
		o: 2
	},
	"flag-ca": {
		a: "Canada Flag",
		b: "1F1E8-1F1E6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			12
		],
		o: 2
	},
	rabbit: {
		a: "Rabbit Face",
		b: "1F430",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"pet",
			"spring",
			"magic",
			"bunny"
		],
		k: [
			12,
			20
		],
		o: 2
	},
	eye: {
		a: "Eye",
		b: "1F441-FE0F",
		c: "1F441",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"look",
			"see",
			"watch",
			"stare"
		],
		k: [
			12,
			38
		],
		o: 2
	},
	sleeping: {
		a: "Sleeping Face",
		b: "1F634",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"tired",
			"sleepy",
			"night",
			"zzz"
		],
		k: [
			31,
			30
		],
		o: 2
	},
	pizza: {
		a: "Slice of Pizza",
		b: "1F355",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"party"
		],
		k: [
			6,
			45
		],
		o: 2
	},
	sound: {
		a: "Speaker with One Sound Wave",
		b: "1F509",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"volume",
			"speaker",
			"broadcast"
		],
		k: [
			27,
			37
		],
		o: 2
	},
	rabbit2: {
		a: "Rabbit",
		b: "1F407",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"pet",
			"magic",
			"spring"
		],
		k: [
			11,
			35
		],
		o: 2
	},
	fountain: {
		a: "Fountain",
		b: "26F2",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"summer",
			"water",
			"fresh"
		],
		k: [
			54,
			13
		],
		o: 2
	},
	golf: {
		a: "Flag in Hole",
		b: "26F3",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sports",
			"business",
			"flag",
			"hole",
			"summer"
		],
		k: [
			54,
			14
		],
		o: 2
	},
	top: {
		a: "Top with Upwards Arrow Above",
		b: "1F51D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"words",
			"blue-square"
		],
		k: [
			28,
			0
		],
		o: 2
	},
	mask: {
		a: "Face with Medical Mask",
		b: "1F637",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"sick",
			"ill",
			"disease"
		],
		k: [
			31,
			33
		],
		o: 2
	},
	"flag-cc": {
		a: "Cocos (keeling) Islands Flag",
		b: "1F1E8-1F1E8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			13
		],
		o: 2
	},
	hotdog: {
		a: "Hot Dog",
		b: "1F32D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"frankfurter"
		],
		k: [
			6,
			5
		],
		o: 2
	},
	loud_sound: {
		a: "Speaker with Three Sound Waves",
		b: "1F50A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"volume",
			"noise",
			"noisy",
			"speaker",
			"broadcast"
		],
		k: [
			27,
			38
		],
		o: 2
	},
	tongue: {
		a: "Tongue",
		b: "1F445",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"mouth",
			"playful"
		],
		k: [
			12,
			52
		],
		o: 2
	},
	place_of_worship: {
		a: "Place of Worship",
		b: "1F6D0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"religion",
			"church",
			"temple",
			"prayer"
		],
		k: [
			36,
			38
		],
		o: 2
	},
	ice_skate: {
		a: "Ice Skate",
		b: "26F8-FE0F",
		c: "26F8",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sports"
		],
		k: [
			54,
			18
		],
		o: 2
	},
	sandwich: {
		a: "Sandwich",
		b: "1F96A",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			0
		],
		o: 5
	},
	chipmunk: {
		a: "Chipmunk",
		b: "1F43F-FE0F",
		c: "1F43F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"rodent",
			"squirrel"
		],
		k: [
			12,
			35
		],
		o: 2
	},
	loudspeaker: {
		a: "Public Address Loudspeaker",
		b: "1F4E2",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"volume",
			"sound"
		],
		k: [
			26,
			56
		],
		o: 2
	},
	lips: {
		a: "Mouth",
		b: "1F444",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"mouth",
			"kiss"
		],
		k: [
			12,
			51
		],
		o: 2
	},
	"flag-cd": {
		a: "Congo - Kinshasa Flag",
		b: "1F1E8-1F1E9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			14
		],
		o: 2
	},
	tent: {
		a: "Tent",
		b: "26FA",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"camping",
			"outdoors"
		],
		k: [
			54,
			37
		],
		o: 2
	},
	face_with_thermometer: {
		a: "Face with Thermometer",
		b: "1F912",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sick",
			"temperature",
			"thermometer",
			"cold",
			"fever"
		],
		k: [
			37,
			25
		],
		o: 2
	},
	taco: {
		a: "Taco",
		b: "1F32E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"mexican"
		],
		k: [
			6,
			6
		],
		o: 2
	},
	foggy: {
		a: "Foggy",
		b: "1F301",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"mountain"
		],
		k: [
			5,
			20
		],
		o: 2
	},
	"flag-cf": {
		a: "Central African Republic Flag",
		b: "1F1E8-1F1EB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			15
		],
		o: 2
	},
	baby: {
		skin_variations: {
			"1F3FB": {
				unified: "1F476-1F3FB",
				non_qualified: null,
				image: "1f476-1f3fb.png",
				sheet_x: 23,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F476-1F3FC",
				non_qualified: null,
				image: "1f476-1f3fc.png",
				sheet_x: 23,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F476-1F3FD",
				non_qualified: null,
				image: "1f476-1f3fd.png",
				sheet_x: 23,
				sheet_y: 7,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F476-1F3FE",
				non_qualified: null,
				image: "1f476-1f3fe.png",
				sheet_x: 23,
				sheet_y: 8,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F476-1F3FF",
				non_qualified: null,
				image: "1f476-1f3ff.png",
				sheet_x: 23,
				sheet_y: 9,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Baby",
		b: "1F476",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"child",
			"boy",
			"girl",
			"toddler"
		],
		k: [
			23,
			4
		],
		o: 2
	},
	atom_symbol: {
		a: "Atom Symbol",
		b: "269B-FE0F",
		c: "269B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"science",
			"physics",
			"chemistry"
		],
		k: [
			53,
			48
		],
		o: 2
	},
	fishing_pole_and_fish: {
		a: "Fishing Pole and Fish",
		b: "1F3A3",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"hobby",
			"summer"
		],
		k: [
			8,
			9
		],
		o: 2
	},
	hedgehog: {
		a: "Hedgehog",
		b: "1F994",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			38
		],
		o: 5
	},
	face_with_head_bandage: {
		a: "Face with Head-Bandage",
		b: "1F915",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"injured",
			"clumsy",
			"bandage",
			"hurt"
		],
		k: [
			37,
			28
		],
		o: 2
	},
	mega: {
		a: "Cheering Megaphone",
		b: "1F4E3",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sound",
			"speaker",
			"volume"
		],
		k: [
			27,
			0
		],
		o: 2
	},
	nauseated_face: {
		a: "Nauseated Face",
		b: "1F922",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"vomit",
			"gross",
			"green",
			"sick",
			"throw up",
			"ill"
		],
		k: [
			38,
			19
		],
		o: 4
	},
	child: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D2-1F3FB",
				non_qualified: null,
				image: "1f9d2-1f3fb.png",
				sheet_x: 48,
				sheet_y: 17,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9D2-1F3FC",
				non_qualified: null,
				image: "1f9d2-1f3fc.png",
				sheet_x: 48,
				sheet_y: 18,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9D2-1F3FD",
				non_qualified: null,
				image: "1f9d2-1f3fd.png",
				sheet_x: 48,
				sheet_y: 19,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9D2-1F3FE",
				non_qualified: null,
				image: "1f9d2-1f3fe.png",
				sheet_x: 48,
				sheet_y: 20,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9D2-1F3FF",
				non_qualified: null,
				image: "1f9d2-1f3ff.png",
				sheet_x: 48,
				sheet_y: 21,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Child",
		b: "1F9D2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			48,
			16
		],
		o: 5
	},
	"flag-cg": {
		a: "Congo - Brazzaville Flag",
		b: "1F1E8-1F1EC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			16
		],
		o: 2
	},
	bat: {
		a: "Bat",
		b: "1F987",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"blind",
			"vampire"
		],
		k: [
			42,
			25
		],
		o: 4
	},
	diving_mask: {
		a: "Diving Mask",
		b: "1F93F",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			15
		],
		o: 12
	},
	burrito: {
		a: "Burrito",
		b: "1F32F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"mexican"
		],
		k: [
			6,
			7
		],
		o: 2
	},
	postal_horn: {
		a: "Postal Horn",
		b: "1F4EF",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"instrument",
			"music"
		],
		k: [
			27,
			12
		],
		o: 2
	},
	night_with_stars: {
		a: "Night with Stars",
		b: "1F303",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"evening",
			"city",
			"downtown"
		],
		k: [
			5,
			22
		],
		o: 2
	},
	om_symbol: {
		a: "Om Symbol",
		b: "1F549-FE0F",
		c: "1F549",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			28,
			33
		],
		o: 2
	},
	star_of_david: {
		a: "Star of David",
		b: "2721-FE0F",
		c: "2721",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"judaism"
		],
		k: [
			55,
			15
		],
		o: 2
	},
	boy: {
		skin_variations: {
			"1F3FB": {
				unified: "1F466-1F3FB",
				non_qualified: null,
				image: "1f466-1f3fb.png",
				sheet_x: 14,
				sheet_y: 27,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F466-1F3FC",
				non_qualified: null,
				image: "1f466-1f3fc.png",
				sheet_x: 14,
				sheet_y: 28,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F466-1F3FD",
				non_qualified: null,
				image: "1f466-1f3fd.png",
				sheet_x: 14,
				sheet_y: 29,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F466-1F3FE",
				non_qualified: null,
				image: "1f466-1f3fe.png",
				sheet_x: 14,
				sheet_y: 30,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F466-1F3FF",
				non_qualified: null,
				image: "1f466-1f3ff.png",
				sheet_x: 14,
				sheet_y: 31,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Boy",
		b: "1F466",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"man",
			"male",
			"guy",
			"teenager"
		],
		k: [
			14,
			26
		],
		o: 2
	},
	bell: {
		a: "Bell",
		b: "1F514",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sound",
			"notification",
			"christmas",
			"xmas",
			"chime"
		],
		k: [
			27,
			48
		],
		o: 2
	},
	"flag-ch": {
		a: "Switzerland Flag",
		b: "1F1E8-1F1ED",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			17
		],
		o: 2
	},
	running_shirt_with_sash: {
		a: "Running Shirt with Sash",
		b: "1F3BD",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"play",
			"pageant"
		],
		k: [
			8,
			35
		],
		o: 2
	},
	stuffed_flatbread: {
		a: "Stuffed Flatbread",
		b: "1F959",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"flatbread",
			"stuffed",
			"gyro"
		],
		k: [
			41,
			40
		],
		o: 4
	},
	bear: {
		a: "Bear Face",
		b: "1F43B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"wild"
		],
		k: [
			12,
			31
		],
		o: 2
	},
	cityscape: {
		a: "Cityscape",
		b: "1F3D9-FE0F",
		c: "1F3D9",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"night life",
			"urban"
		],
		k: [
			10,
			44
		],
		o: 2
	},
	face_vomiting: {
		a: "Face with Open Mouth Vomiting",
		b: "1F92E",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			38,
			48
		],
		n: [
			"face_with_open_mouth_vomiting"
		],
		o: 5
	},
	wheel_of_dharma: {
		a: "Wheel of Dharma",
		b: "2638-FE0F",
		c: "2638",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"hinduism",
			"buddhism",
			"sikhism",
			"jainism"
		],
		k: [
			53,
			15
		],
		o: 2
	},
	ski: {
		a: "Ski and Ski Boot",
		b: "1F3BF",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sports",
			"winter",
			"cold",
			"snow"
		],
		k: [
			8,
			37
		],
		o: 2
	},
	girl: {
		skin_variations: {
			"1F3FB": {
				unified: "1F467-1F3FB",
				non_qualified: null,
				image: "1f467-1f3fb.png",
				sheet_x: 14,
				sheet_y: 33,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F467-1F3FC",
				non_qualified: null,
				image: "1f467-1f3fc.png",
				sheet_x: 14,
				sheet_y: 34,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F467-1F3FD",
				non_qualified: null,
				image: "1f467-1f3fd.png",
				sheet_x: 14,
				sheet_y: 35,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F467-1F3FE",
				non_qualified: null,
				image: "1f467-1f3fe.png",
				sheet_x: 14,
				sheet_y: 36,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F467-1F3FF",
				non_qualified: null,
				image: "1f467-1f3ff.png",
				sheet_x: 14,
				sheet_y: 37,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Girl",
		b: "1F467",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"female",
			"woman",
			"teenager"
		],
		k: [
			14,
			32
		],
		o: 2
	},
	falafel: {
		a: "Falafel",
		b: "1F9C6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			14
		],
		o: 12
	},
	sneezing_face: {
		a: "Sneezing Face",
		b: "1F927",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"gesundheit",
			"sneeze",
			"sick",
			"allergy"
		],
		k: [
			38,
			41
		],
		o: 4
	},
	no_bell: {
		a: "Bell with Cancellation Stroke",
		b: "1F515",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sound",
			"volume",
			"mute",
			"quiet",
			"silent"
		],
		k: [
			27,
			49
		],
		o: 2
	},
	koala: {
		a: "Koala",
		b: "1F428",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature"
		],
		k: [
			12,
			12
		],
		o: 2
	},
	sunrise_over_mountains: {
		a: "Sunrise over Mountains",
		b: "1F304",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"view",
			"vacation",
			"photo"
		],
		k: [
			5,
			23
		],
		o: 2
	},
	"flag-ci": {
		a: "Côte D’ivoire Flag",
		b: "1F1E8-1F1EE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			18
		],
		o: 2
	},
	sunrise: {
		a: "Sunrise",
		b: "1F305",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"morning",
			"view",
			"vacation",
			"photo"
		],
		k: [
			5,
			24
		],
		o: 2
	},
	yin_yang: {
		a: "Yin Yang",
		b: "262F-FE0F",
		c: "262F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"balance"
		],
		k: [
			53,
			14
		],
		o: 2
	},
	adult: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB",
				non_qualified: null,
				image: "1f9d1-1f3fb.png",
				sheet_x: 48,
				sheet_y: 11,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC",
				non_qualified: null,
				image: "1f9d1-1f3fc.png",
				sheet_x: 48,
				sheet_y: 12,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD",
				non_qualified: null,
				image: "1f9d1-1f3fd.png",
				sheet_x: 48,
				sheet_y: 13,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE",
				non_qualified: null,
				image: "1f9d1-1f3fe.png",
				sheet_x: 48,
				sheet_y: 14,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF",
				non_qualified: null,
				image: "1f9d1-1f3ff.png",
				sheet_x: 48,
				sheet_y: 15,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Adult",
		b: "1F9D1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			48,
			10
		],
		o: 5
	},
	hot_face: {
		a: "Overheated Face",
		b: "1F975",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			10
		],
		o: 11
	},
	musical_score: {
		a: "Musical Score",
		b: "1F3BC",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"treble",
			"clef",
			"compose"
		],
		k: [
			8,
			34
		],
		o: 2
	},
	sled: {
		a: "Sled",
		b: "1F6F7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			36,
			56
		],
		o: 5
	},
	egg: {
		a: "Egg",
		b: "1F95A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"chicken",
			"breakfast"
		],
		k: [
			41,
			41
		],
		o: 4
	},
	panda_face: {
		a: "Panda Face",
		b: "1F43C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"panda"
		],
		k: [
			12,
			32
		],
		o: 2
	},
	"flag-ck": {
		a: "Cook Islands Flag",
		b: "1F1E8-1F1F0",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			19
		],
		o: 2
	},
	"flag-cl": {
		a: "Chile Flag",
		b: "1F1E8-1F1F1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			20
		],
		o: 2
	},
	person_with_blond_hair: {
		skin_variations: {
			"1F3FB": {
				unified: "1F471-1F3FB",
				non_qualified: null,
				image: "1f471-1f3fb.png",
				sheet_x: 22,
				sheet_y: 20,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F471-1F3FC",
				non_qualified: null,
				image: "1f471-1f3fc.png",
				sheet_x: 22,
				sheet_y: 21,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F471-1F3FD",
				non_qualified: null,
				image: "1f471-1f3fd.png",
				sheet_x: 22,
				sheet_y: 22,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F471-1F3FE",
				non_qualified: null,
				image: "1f471-1f3fe.png",
				sheet_x: 22,
				sheet_y: 23,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F471-1F3FF",
				non_qualified: null,
				image: "1f471-1f3ff.png",
				sheet_x: 22,
				sheet_y: 24,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F471-200D-2642-FE0F",
		a: "Person with Blond Hair",
		b: "1F471",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			22,
			19
		],
		o: 2
	},
	sloth: {
		a: "Sloth",
		b: "1F9A5",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			53
		],
		o: 12
	},
	latin_cross: {
		a: "Latin Cross",
		b: "271D-FE0F",
		c: "271D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"christianity"
		],
		k: [
			55,
			14
		],
		o: 2
	},
	curling_stone: {
		a: "Curling Stone",
		b: "1F94C",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			27
		],
		o: 5
	},
	cold_face: {
		a: "Freezing Face",
		b: "1F976",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			11
		],
		o: 11
	},
	fried_egg: {
		a: "Cooking",
		b: "1F373",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"breakfast",
			"kitchen",
			"egg"
		],
		k: [
			7,
			18
		],
		n: [
			"cooking"
		],
		o: 2
	},
	city_sunset: {
		a: "Cityscape at Dusk",
		b: "1F306",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"evening",
			"sky",
			"buildings"
		],
		k: [
			5,
			25
		],
		o: 2
	},
	musical_note: {
		a: "Musical Note",
		b: "1F3B5",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"score",
			"tone",
			"sound"
		],
		k: [
			8,
			27
		],
		o: 2
	},
	"flag-cm": {
		a: "Cameroon Flag",
		b: "1F1E8-1F1F2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			21
		],
		o: 2
	},
	notes: {
		a: "Multiple Musical Notes",
		b: "1F3B6",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"music",
			"score"
		],
		k: [
			8,
			28
		],
		o: 2
	},
	woozy_face: {
		a: "Face with Uneven Eyes and Wavy Mouth",
		b: "1F974",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			9
		],
		o: 11
	},
	dart: {
		a: "Direct Hit",
		b: "1F3AF",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"game",
			"play",
			"bar"
		],
		k: [
			8,
			21
		],
		o: 2
	},
	orthodox_cross: {
		a: "Orthodox Cross",
		b: "2626-FE0F",
		c: "2626",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"suppedaneum",
			"religion"
		],
		k: [
			53,
			11
		],
		o: 2
	},
	shallow_pan_of_food: {
		a: "Shallow Pan of Food",
		b: "1F958",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"cooking",
			"casserole",
			"paella"
		],
		k: [
			41,
			39
		],
		o: 4
	},
	otter: {
		a: "Otter",
		b: "1F9A6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			54
		],
		o: 12
	},
	man: {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB",
				non_qualified: null,
				image: "1f468-1f3fb.png",
				sheet_x: 17,
				sheet_y: 23,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC",
				non_qualified: null,
				image: "1f468-1f3fc.png",
				sheet_x: 17,
				sheet_y: 24,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD",
				non_qualified: null,
				image: "1f468-1f3fd.png",
				sheet_x: 17,
				sheet_y: 25,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE",
				non_qualified: null,
				image: "1f468-1f3fe.png",
				sheet_x: 17,
				sheet_y: 26,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF",
				non_qualified: null,
				image: "1f468-1f3ff.png",
				sheet_x: 17,
				sheet_y: 27,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man",
		b: "1F468",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"mustache",
			"father",
			"dad",
			"guy",
			"classy",
			"sir",
			"moustache"
		],
		k: [
			17,
			22
		],
		o: 2
	},
	city_sunrise: {
		a: "Sunset over Buildings",
		b: "1F307",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"good morning",
			"dawn"
		],
		k: [
			5,
			26
		],
		o: 2
	},
	bearded_person: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D4-1F3FB",
				non_qualified: null,
				image: "1f9d4-1f3fb.png",
				sheet_x: 48,
				sheet_y: 29,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9D4-1F3FC",
				non_qualified: null,
				image: "1f9d4-1f3fc.png",
				sheet_x: 48,
				sheet_y: 30,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9D4-1F3FD",
				non_qualified: null,
				image: "1f9d4-1f3fd.png",
				sheet_x: 48,
				sheet_y: 31,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9D4-1F3FE",
				non_qualified: null,
				image: "1f9d4-1f3fe.png",
				sheet_x: 48,
				sheet_y: 32,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9D4-1F3FF",
				non_qualified: null,
				image: "1f9d4-1f3ff.png",
				sheet_x: 48,
				sheet_y: 33,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Bearded Person",
		b: "1F9D4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			48,
			28
		],
		o: 5
	},
	skunk: {
		a: "Skunk",
		b: "1F9A8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			56
		],
		o: 12
	},
	stew: {
		a: "Pot of Food",
		b: "1F372",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"meat",
			"soup"
		],
		k: [
			7,
			17
		],
		o: 2
	},
	cn: {
		a: "China Flag",
		b: "1F1E8-1F1F3",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"china",
			"chinese",
			"prc",
			"flag",
			"country",
			"nation",
			"banner"
		],
		k: [
			1,
			22
		],
		n: [
			"flag-cn"
		],
		o: 2
	},
	studio_microphone: {
		a: "Studio Microphone",
		b: "1F399-FE0F",
		c: "1F399",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sing",
			"recording",
			"artist",
			"talkshow"
		],
		k: [
			8,
			1
		],
		o: 2
	},
	star_and_crescent: {
		a: "Star and Crescent",
		b: "262A-FE0F",
		c: "262A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"islam"
		],
		k: [
			53,
			12
		],
		o: 2
	},
	"yo-yo": {
		a: "Yo-Yo",
		b: "1FA80",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			52,
			1
		],
		o: 12
	},
	bridge_at_night: {
		a: "Bridge at Night",
		b: "1F309",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"sanfrancisco"
		],
		k: [
			5,
			28
		],
		o: 2
	},
	dizzy_face: {
		a: "Dizzy Face",
		b: "1F635",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"spent",
			"unconscious",
			"xox",
			"dizzy"
		],
		k: [
			31,
			31
		],
		o: 2
	},
	red_haired_man: {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F9B0",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f9b0.png",
				sheet_x: 16,
				sheet_y: 24,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F9B0",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f9b0.png",
				sheet_x: 16,
				sheet_y: 25,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F9B0",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f9b0.png",
				sheet_x: 16,
				sheet_y: 26,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F9B0",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f9b0.png",
				sheet_x: 16,
				sheet_y: 27,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F9B0",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f9b0.png",
				sheet_x: 16,
				sheet_y: 28,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Red Haired Man",
		b: "1F468-200D-1F9B0",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			16,
			23
		],
		o: 11
	},
	kite: {
		a: "Kite",
		b: "1FA81",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			52,
			2
		],
		o: 12
	},
	bowl_with_spoon: {
		a: "Bowl with Spoon",
		b: "1F963",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			50
		],
		o: 5
	},
	"flag-co": {
		a: "Colombia Flag",
		b: "1F1E8-1F1F4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			23
		],
		o: 2
	},
	peace_symbol: {
		a: "Peace Symbol",
		b: "262E-FE0F",
		c: "262E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"hippie"
		],
		k: [
			53,
			13
		],
		o: 2
	},
	kangaroo: {
		a: "Kangaroo",
		b: "1F998",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			42
		],
		o: 11
	},
	hotsprings: {
		a: "Hot Springs",
		b: "2668-FE0F",
		c: "2668",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"bath",
			"warm",
			"relax"
		],
		k: [
			53,
			37
		],
		o: 2
	},
	exploding_head: {
		a: "Shocked Face with Exploding Head",
		b: "1F92F",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			38,
			49
		],
		n: [
			"shocked_face_with_exploding_head"
		],
		o: 5
	},
	level_slider: {
		a: "Level Slider",
		b: "1F39A-FE0F",
		c: "1F39A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"scale"
		],
		k: [
			8,
			2
		],
		o: 2
	},
	badger: {
		a: "Badger",
		b: "1F9A1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			51
		],
		o: 11
	},
	"8ball": {
		a: "Billiards",
		b: "1F3B1",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"pool",
			"hobby",
			"game",
			"luck",
			"magic"
		],
		k: [
			8,
			23
		],
		o: 2
	},
	curly_haired_man: {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F9B1",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f9b1.png",
				sheet_x: 16,
				sheet_y: 30,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F9B1",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f9b1.png",
				sheet_x: 16,
				sheet_y: 31,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F9B1",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f9b1.png",
				sheet_x: 16,
				sheet_y: 32,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F9B1",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f9b1.png",
				sheet_x: 16,
				sheet_y: 33,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F9B1",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f9b1.png",
				sheet_x: 16,
				sheet_y: 34,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Curly Haired Man",
		b: "1F468-200D-1F9B1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			16,
			29
		],
		o: 11
	},
	"flag-cp": {
		a: "Clipperton Island Flag",
		b: "1F1E8-1F1F5",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			24
		],
		o: 2
	},
	carousel_horse: {
		a: "Carousel Horse",
		b: "1F3A0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"carnival"
		],
		k: [
			8,
			6
		],
		o: 2
	},
	face_with_cowboy_hat: {
		a: "Face with Cowboy Hat",
		b: "1F920",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			38,
			17
		],
		o: 4
	},
	menorah_with_nine_branches: {
		a: "Menorah with Nine Branches",
		b: "1F54E",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			28,
			38
		],
		o: 2
	},
	green_salad: {
		a: "Green Salad",
		b: "1F957",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"healthy",
			"lettuce"
		],
		k: [
			41,
			38
		],
		o: 4
	},
	control_knobs: {
		a: "Control Knobs",
		b: "1F39B-FE0F",
		c: "1F39B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"dial"
		],
		k: [
			8,
			3
		],
		o: 2
	},
	popcorn: {
		a: "Popcorn",
		b: "1F37F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"movie theater",
			"films",
			"snack"
		],
		k: [
			7,
			30
		],
		o: 2
	},
	six_pointed_star: {
		a: "Six Pointed Star with Middle Dot",
		b: "1F52F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"purple-square",
			"religion",
			"jewish",
			"hexagram"
		],
		k: [
			28,
			18
		],
		o: 2
	},
	feet: {
		a: "Paw Prints",
		b: "1F43E",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			12,
			34
		],
		n: [
			"paw_prints"
		],
		o: 2
	},
	ferris_wheel: {
		a: "Ferris Wheel",
		b: "1F3A1",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"carnival",
			"londoneye"
		],
		k: [
			8,
			7
		],
		o: 2
	},
	microphone: {
		a: "Microphone",
		b: "1F3A4",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sound",
			"music",
			"PA",
			"sing",
			"talkshow"
		],
		k: [
			8,
			10
		],
		o: 2
	},
	crystal_ball: {
		a: "Crystal Ball",
		b: "1F52E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"disco",
			"party",
			"magic",
			"circus",
			"fortune_teller"
		],
		k: [
			28,
			17
		],
		o: 2
	},
	partying_face: {
		a: "Face with Party Horn and Party Hat",
		b: "1F973",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			8
		],
		o: 11
	},
	"flag-cr": {
		a: "Costa Rica Flag",
		b: "1F1E8-1F1F7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			25
		],
		o: 2
	},
	white_haired_man: {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F9B3",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f9b3.png",
				sheet_x: 16,
				sheet_y: 42,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F9B3",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f9b3.png",
				sheet_x: 16,
				sheet_y: 43,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F9B3",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f9b3.png",
				sheet_x: 16,
				sheet_y: 44,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F9B3",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f9b3.png",
				sheet_x: 16,
				sheet_y: 45,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F9B3",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f9b3.png",
				sheet_x: 16,
				sheet_y: 46,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "White Haired Man",
		b: "1F468-200D-1F9B3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			16,
			41
		],
		o: 11
	},
	headphones: {
		a: "Headphone",
		b: "1F3A7",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"music",
			"score",
			"gadgets"
		],
		k: [
			8,
			13
		],
		o: 2
	},
	bald_man: {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F9B2",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f9b2.png",
				sheet_x: 16,
				sheet_y: 36,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F9B2",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f9b2.png",
				sheet_x: 16,
				sheet_y: 37,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F9B2",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f9b2.png",
				sheet_x: 16,
				sheet_y: 38,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F9B2",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f9b2.png",
				sheet_x: 16,
				sheet_y: 39,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F9B2",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f9b2.png",
				sheet_x: 16,
				sheet_y: 40,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Bald Man",
		b: "1F468-200D-1F9B2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			16,
			35
		],
		o: 11
	},
	sunglasses: {
		a: "Smiling Face with Sunglasses",
		b: "1F60E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"cool",
			"smile",
			"summer",
			"beach",
			"sunglass"
		],
		k: [
			30,
			49
		],
		l: [
			"8)"
		],
		o: 2
	},
	butter: {
		a: "Butter",
		b: "1F9C8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			16
		],
		o: 12
	},
	roller_coaster: {
		a: "Roller Coaster",
		b: "1F3A2",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"carnival",
			"playground",
			"photo",
			"fun"
		],
		k: [
			8,
			8
		],
		o: 2
	},
	turkey: {
		a: "Turkey",
		b: "1F983",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"bird"
		],
		k: [
			42,
			21
		],
		o: 2
	},
	nazar_amulet: {
		a: "Nazar Amulet",
		b: "1F9FF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			50
		],
		o: 11
	},
	"flag-cu": {
		a: "Cuba Flag",
		b: "1F1E8-1F1FA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			26
		],
		o: 2
	},
	aries: {
		a: "Aries",
		b: "2648",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sign",
			"purple-square",
			"zodiac",
			"astrology"
		],
		k: [
			53,
			20
		],
		o: 2
	},
	"flag-cv": {
		a: "Cape Verde Flag",
		b: "1F1E8-1F1FB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			27
		],
		o: 2
	},
	barber: {
		a: "Barber Pole",
		b: "1F488",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"hair",
			"salon",
			"style"
		],
		k: [
			25,
			18
		],
		o: 2
	},
	taurus: {
		a: "Taurus",
		b: "2649",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"purple-square",
			"sign",
			"zodiac",
			"astrology"
		],
		k: [
			53,
			21
		],
		o: 2
	},
	salt: {
		a: "Salt Shaker",
		b: "1F9C2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			10
		],
		o: 11
	},
	woman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB",
				non_qualified: null,
				image: "1f469-1f3fb.png",
				sheet_x: 20,
				sheet_y: 10,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC",
				non_qualified: null,
				image: "1f469-1f3fc.png",
				sheet_x: 20,
				sheet_y: 11,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD",
				non_qualified: null,
				image: "1f469-1f3fd.png",
				sheet_x: 20,
				sheet_y: 12,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE",
				non_qualified: null,
				image: "1f469-1f3fe.png",
				sheet_x: 20,
				sheet_y: 13,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF",
				non_qualified: null,
				image: "1f469-1f3ff.png",
				sheet_x: 20,
				sheet_y: 14,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman",
		b: "1F469",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"female",
			"girls",
			"lady"
		],
		k: [
			20,
			9
		],
		o: 2
	},
	video_game: {
		a: "Video Game",
		b: "1F3AE",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"play",
			"console",
			"PS4",
			"controller"
		],
		k: [
			8,
			20
		],
		o: 2
	},
	chicken: {
		a: "Chicken",
		b: "1F414",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"cluck",
			"nature",
			"bird"
		],
		k: [
			11,
			48
		],
		o: 2
	},
	radio: {
		a: "Radio",
		b: "1F4FB",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"communication",
			"music",
			"podcast",
			"program"
		],
		k: [
			27,
			24
		],
		o: 2
	},
	nerd_face: {
		a: "Nerd Face",
		b: "1F913",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"nerdy",
			"geek",
			"dork"
		],
		k: [
			37,
			26
		],
		o: 2
	},
	red_haired_woman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F9B0",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f9b0.png",
				sheet_x: 19,
				sheet_y: 9,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F9B0",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f9b0.png",
				sheet_x: 19,
				sheet_y: 10,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F9B0",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f9b0.png",
				sheet_x: 19,
				sheet_y: 11,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F9B0",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f9b0.png",
				sheet_x: 19,
				sheet_y: 12,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F9B0",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f9b0.png",
				sheet_x: 19,
				sheet_y: 13,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Red Haired Woman",
		b: "1F469-200D-1F9B0",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			19,
			8
		],
		o: 11
	},
	circus_tent: {
		a: "Circus Tent",
		b: "1F3AA",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"festival",
			"carnival",
			"party"
		],
		k: [
			8,
			16
		],
		o: 2
	},
	face_with_monocle: {
		a: "Face with Monocle",
		b: "1F9D0",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			45,
			16
		],
		o: 5
	},
	canned_food: {
		a: "Canned Food",
		b: "1F96B",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			1
		],
		o: 5
	},
	"flag-cw": {
		a: "Curaçao Flag",
		b: "1F1E8-1F1FC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			28
		],
		o: 2
	},
	gemini: {
		a: "Gemini",
		b: "264A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sign",
			"zodiac",
			"purple-square",
			"astrology"
		],
		k: [
			53,
			22
		],
		o: 2
	},
	saxophone: {
		a: "Saxophone",
		b: "1F3B7",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"music",
			"instrument",
			"jazz",
			"blues"
		],
		k: [
			8,
			29
		],
		o: 2
	},
	rooster: {
		a: "Rooster",
		b: "1F413",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"chicken"
		],
		k: [
			11,
			47
		],
		o: 2
	},
	joystick: {
		a: "Joystick",
		b: "1F579-FE0F",
		c: "1F579",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"game",
			"play"
		],
		k: [
			29,
			36
		],
		o: 2
	},
	guitar: {
		a: "Guitar",
		b: "1F3B8",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"music",
			"instrument"
		],
		k: [
			8,
			30
		],
		o: 2
	},
	slot_machine: {
		a: "Slot Machine",
		b: "1F3B0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"bet",
			"gamble",
			"vegas",
			"fruit machine",
			"luck",
			"casino"
		],
		k: [
			8,
			22
		],
		o: 2
	},
	bento: {
		a: "Bento Box",
		b: "1F371",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"japanese",
			"box"
		],
		k: [
			7,
			16
		],
		o: 2
	},
	steam_locomotive: {
		a: "Steam Locomotive",
		b: "1F682",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"transportation",
			"vehicle",
			"train"
		],
		k: [
			34,
			1
		],
		o: 2
	},
	confused: {
		a: "Confused Face",
		b: "1F615",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"indifference",
			"huh",
			"weird",
			"hmmm",
			":/"
		],
		k: [
			30,
			56
		],
		l: [
			":\\",
			":-\\",
			":/",
			":-/"
		],
		o: 2
	},
	"flag-cx": {
		a: "Christmas Island Flag",
		b: "1F1E8-1F1FD",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			29
		],
		o: 2
	},
	hatching_chick: {
		a: "Hatching Chick",
		b: "1F423",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"chicken",
			"egg",
			"born",
			"baby",
			"bird"
		],
		k: [
			12,
			7
		],
		o: 2
	},
	cancer: {
		a: "Cancer",
		b: "264B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sign",
			"zodiac",
			"purple-square",
			"astrology"
		],
		k: [
			53,
			23
		],
		o: 2
	},
	red_haired_person: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F9B0",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f9b0.png",
				sheet_x: 47,
				sheet_y: 14,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F9B0",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f9b0.png",
				sheet_x: 47,
				sheet_y: 15,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F9B0",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f9b0.png",
				sheet_x: 47,
				sheet_y: 16,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F9B0",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f9b0.png",
				sheet_x: 47,
				sheet_y: 17,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F9B0",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f9b0.png",
				sheet_x: 47,
				sheet_y: 18,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Red Haired Person",
		b: "1F9D1-200D-1F9B0",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			47,
			13
		],
		o: 12
	},
	"flag-cy": {
		a: "Cyprus Flag",
		b: "1F1E8-1F1FE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			30
		],
		o: 2
	},
	worried: {
		a: "Worried Face",
		b: "1F61F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"concern",
			"nervous",
			":("
		],
		k: [
			31,
			9
		],
		o: 2
	},
	railway_car: {
		a: "Railway Car",
		b: "1F683",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"transportation",
			"vehicle"
		],
		k: [
			34,
			2
		],
		o: 2
	},
	leo: {
		a: "Leo",
		b: "264C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sign",
			"purple-square",
			"zodiac",
			"astrology"
		],
		k: [
			53,
			24
		],
		o: 2
	},
	curly_haired_woman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F9B1",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f9b1.png",
				sheet_x: 19,
				sheet_y: 15,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F9B1",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f9b1.png",
				sheet_x: 19,
				sheet_y: 16,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F9B1",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f9b1.png",
				sheet_x: 19,
				sheet_y: 17,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F9B1",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f9b1.png",
				sheet_x: 19,
				sheet_y: 18,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F9B1",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f9b1.png",
				sheet_x: 19,
				sheet_y: 19,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Curly Haired Woman",
		b: "1F469-200D-1F9B1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			19,
			14
		],
		o: 11
	},
	baby_chick: {
		a: "Baby Chick",
		b: "1F424",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"chicken",
			"bird"
		],
		k: [
			12,
			8
		],
		o: 2
	},
	musical_keyboard: {
		a: "Musical Keyboard",
		b: "1F3B9",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"piano",
			"instrument",
			"compose"
		],
		k: [
			8,
			31
		],
		o: 2
	},
	game_die: {
		a: "Game Die",
		b: "1F3B2",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"dice",
			"random",
			"tabletop",
			"play",
			"luck"
		],
		k: [
			8,
			24
		],
		o: 2
	},
	rice_cracker: {
		a: "Rice Cracker",
		b: "1F358",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"japanese"
		],
		k: [
			6,
			48
		],
		o: 2
	},
	virgo: {
		a: "Virgo",
		b: "264D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sign",
			"zodiac",
			"purple-square",
			"astrology"
		],
		k: [
			53,
			25
		],
		o: 2
	},
	"flag-cz": {
		a: "Czechia Flag",
		b: "1F1E8-1F1FF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			31
		],
		o: 2
	},
	curly_haired_person: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F9B1",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f9b1.png",
				sheet_x: 47,
				sheet_y: 20,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F9B1",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f9b1.png",
				sheet_x: 47,
				sheet_y: 21,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F9B1",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f9b1.png",
				sheet_x: 47,
				sheet_y: 22,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F9B1",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f9b1.png",
				sheet_x: 47,
				sheet_y: 23,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F9B1",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f9b1.png",
				sheet_x: 47,
				sheet_y: 24,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Curly Haired Person",
		b: "1F9D1-200D-1F9B1",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			47,
			19
		],
		o: 12
	},
	rice_ball: {
		a: "Rice Ball",
		b: "1F359",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"japanese"
		],
		k: [
			6,
			49
		],
		o: 2
	},
	hatched_chick: {
		a: "Front-Facing Baby Chick",
		b: "1F425",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"chicken",
			"baby",
			"bird"
		],
		k: [
			12,
			9
		],
		o: 2
	},
	jigsaw: {
		a: "Jigsaw Puzzle Piece",
		b: "1F9E9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			28
		],
		o: 11
	},
	trumpet: {
		a: "Trumpet",
		b: "1F3BA",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"music",
			"brass"
		],
		k: [
			8,
			32
		],
		o: 2
	},
	slightly_frowning_face: {
		a: "Slightly Frowning Face",
		b: "1F641",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"frowning",
			"disappointed",
			"sad",
			"upset"
		],
		k: [
			31,
			43
		],
		o: 2
	},
	bullettrain_side: {
		a: "High-Speed Train",
		b: "1F684",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"transportation",
			"vehicle"
		],
		k: [
			34,
			3
		],
		o: 2
	},
	libra: {
		a: "Libra",
		b: "264E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sign",
			"purple-square",
			"zodiac",
			"astrology"
		],
		k: [
			53,
			26
		],
		o: 2
	},
	de: {
		a: "Germany Flag",
		b: "1F1E9-1F1EA",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"german",
			"nation",
			"flag",
			"country",
			"banner"
		],
		k: [
			1,
			32
		],
		n: [
			"flag-de"
		],
		o: 2
	},
	rice: {
		a: "Cooked Rice",
		b: "1F35A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"china",
			"asian"
		],
		k: [
			6,
			50
		],
		o: 2
	},
	violin: {
		a: "Violin",
		b: "1F3BB",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"music",
			"instrument",
			"orchestra",
			"symphony"
		],
		k: [
			8,
			33
		],
		o: 2
	},
	white_haired_woman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F9B3",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f9b3.png",
				sheet_x: 19,
				sheet_y: 27,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F9B3",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f9b3.png",
				sheet_x: 19,
				sheet_y: 28,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F9B3",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f9b3.png",
				sheet_x: 19,
				sheet_y: 29,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F9B3",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f9b3.png",
				sheet_x: 19,
				sheet_y: 30,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F9B3",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f9b3.png",
				sheet_x: 19,
				sheet_y: 31,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "White Haired Woman",
		b: "1F469-200D-1F9B3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			19,
			26
		],
		o: 11
	},
	bird: {
		a: "Bird",
		b: "1F426",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"fly",
			"tweet",
			"spring"
		],
		k: [
			12,
			10
		],
		o: 2
	},
	white_frowning_face: {
		a: "White Frowning Face",
		b: "2639-FE0F",
		c: "2639",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			53,
			16
		],
		o: 2
	},
	bullettrain_front: {
		a: "High-Speed Train with Bullet Nose",
		b: "1F685",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"transportation",
			"vehicle",
			"speed",
			"fast",
			"public",
			"travel"
		],
		k: [
			34,
			4
		],
		o: 2
	},
	teddy_bear: {
		a: "Teddy Bear",
		b: "1F9F8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			43
		],
		o: 11
	},
	white_haired_person: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F9B3",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f9b3.png",
				sheet_x: 47,
				sheet_y: 32,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F9B3",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f9b3.png",
				sheet_x: 47,
				sheet_y: 33,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F9B3",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f9b3.png",
				sheet_x: 47,
				sheet_y: 34,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F9B3",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f9b3.png",
				sheet_x: 47,
				sheet_y: 35,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F9B3",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f9b3.png",
				sheet_x: 47,
				sheet_y: 36,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "White Haired Person",
		b: "1F9D1-200D-1F9B3",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			47,
			31
		],
		o: 12
	},
	spades: {
		a: "Black Spade Suit",
		b: "2660-FE0F",
		c: "2660",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"poker",
			"cards",
			"suits",
			"magic"
		],
		k: [
			53,
			33
		],
		o: 2
	},
	banjo: {
		a: "Banjo",
		b: "1FA95",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			52,
			9
		],
		o: 12
	},
	train2: {
		a: "Train",
		b: "1F686",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"transportation",
			"vehicle"
		],
		k: [
			34,
			5
		],
		o: 2
	},
	scorpius: {
		a: "Scorpius",
		b: "264F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sign",
			"zodiac",
			"purple-square",
			"astrology",
			"scorpio"
		],
		k: [
			53,
			27
		],
		o: 2
	},
	curry: {
		a: "Curry and Rice",
		b: "1F35B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"spicy",
			"hot",
			"indian"
		],
		k: [
			6,
			51
		],
		o: 2
	},
	open_mouth: {
		a: "Face with Open Mouth",
		b: "1F62E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"surprise",
			"impressed",
			"wow",
			"whoa",
			":O"
		],
		k: [
			31,
			24
		],
		l: [
			":o",
			":-o",
			":O",
			":-O"
		],
		o: 2
	},
	"flag-dg": {
		a: "Diego Garcia Flag",
		b: "1F1E9-1F1EC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			33
		],
		o: 2
	},
	penguin: {
		a: "Penguin",
		b: "1F427",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature"
		],
		k: [
			12,
			11
		],
		o: 2
	},
	hearts: {
		a: "Black Heart Suit",
		b: "2665-FE0F",
		c: "2665",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"poker",
			"cards",
			"magic",
			"suits"
		],
		k: [
			53,
			35
		],
		o: 2
	},
	ramen: {
		a: "Steaming Bowl",
		b: "1F35C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"japanese",
			"noodle",
			"chopsticks"
		],
		k: [
			6,
			52
		],
		o: 2
	},
	sagittarius: {
		a: "Sagittarius",
		b: "2650",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sign",
			"zodiac",
			"purple-square",
			"astrology"
		],
		k: [
			53,
			28
		],
		o: 2
	},
	bald_woman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F9B2",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f9b2.png",
				sheet_x: 19,
				sheet_y: 21,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F9B2",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f9b2.png",
				sheet_x: 19,
				sheet_y: 22,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F9B2",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f9b2.png",
				sheet_x: 19,
				sheet_y: 23,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F9B2",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f9b2.png",
				sheet_x: 19,
				sheet_y: 24,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F9B2",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f9b2.png",
				sheet_x: 19,
				sheet_y: 25,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Bald Woman",
		b: "1F469-200D-1F9B2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			19,
			20
		],
		o: 11
	},
	dove_of_peace: {
		a: "Dove of Peace",
		b: "1F54A-FE0F",
		c: "1F54A",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			28,
			34
		],
		o: 2
	},
	hushed: {
		a: "Hushed Face",
		b: "1F62F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"woo",
			"shh"
		],
		k: [
			31,
			25
		],
		o: 2
	},
	metro: {
		a: "Metro",
		b: "1F687",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"transportation",
			"blue-square",
			"mrt",
			"underground",
			"tube"
		],
		k: [
			34,
			6
		],
		o: 2
	},
	"flag-dj": {
		a: "Djibouti Flag",
		b: "1F1E9-1F1EF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			34
		],
		o: 2
	},
	drum_with_drumsticks: {
		a: "Drum with Drumsticks",
		b: "1F941",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			17
		],
		o: 4
	},
	spaghetti: {
		a: "Spaghetti",
		b: "1F35D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"italian",
			"noodle"
		],
		k: [
			6,
			53
		],
		o: 2
	},
	eagle: {
		a: "Eagle",
		b: "1F985",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"bird"
		],
		k: [
			42,
			23
		],
		o: 4
	},
	astonished: {
		a: "Astonished Face",
		b: "1F632",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"xox",
			"surprised",
			"poisoned"
		],
		k: [
			31,
			28
		],
		o: 2
	},
	capricorn: {
		a: "Capricorn",
		b: "2651",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sign",
			"zodiac",
			"purple-square",
			"astrology"
		],
		k: [
			53,
			29
		],
		o: 2
	},
	light_rail: {
		a: "Light Rail",
		b: "1F688",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"transportation",
			"vehicle"
		],
		k: [
			34,
			7
		],
		o: 2
	},
	"flag-dk": {
		a: "Denmark Flag",
		b: "1F1E9-1F1F0",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			35
		],
		o: 2
	},
	iphone: {
		a: "Mobile Phone",
		b: "1F4F1",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"technology",
			"apple",
			"gadgets",
			"dial"
		],
		k: [
			27,
			14
		],
		o: 2
	},
	bald_person: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F9B2",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f9b2.png",
				sheet_x: 47,
				sheet_y: 26,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F9B2",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f9b2.png",
				sheet_x: 47,
				sheet_y: 27,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F9B2",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f9b2.png",
				sheet_x: 47,
				sheet_y: 28,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F9B2",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f9b2.png",
				sheet_x: 47,
				sheet_y: 29,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F9B2",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f9b2.png",
				sheet_x: 47,
				sheet_y: 30,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Bald Person",
		b: "1F9D1-200D-1F9B2",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			47,
			25
		],
		o: 12
	},
	diamonds: {
		a: "Black Diamond Suit",
		b: "2666-FE0F",
		c: "2666",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"poker",
			"cards",
			"magic",
			"suits"
		],
		k: [
			53,
			36
		],
		o: 2
	},
	clubs: {
		a: "Black Club Suit",
		b: "2663-FE0F",
		c: "2663",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"poker",
			"cards",
			"magic",
			"suits"
		],
		k: [
			53,
			34
		],
		o: 2
	},
	aquarius: {
		a: "Aquarius",
		b: "2652",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sign",
			"purple-square",
			"zodiac",
			"astrology"
		],
		k: [
			53,
			30
		],
		o: 2
	},
	sweet_potato: {
		a: "Roasted Sweet Potato",
		b: "1F360",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"nature"
		],
		k: [
			6,
			56
		],
		o: 2
	},
	"flag-dm": {
		a: "Dominica Flag",
		b: "1F1E9-1F1F2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			36
		],
		o: 2
	},
	duck: {
		a: "Duck",
		b: "1F986",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"bird",
			"mallard"
		],
		k: [
			42,
			24
		],
		o: 4
	},
	calling: {
		a: "Mobile Phone with Rightwards Arrow at Left",
		b: "1F4F2",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"iphone",
			"incoming"
		],
		k: [
			27,
			15
		],
		o: 2
	},
	station: {
		a: "Station",
		b: "1F689",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"transportation",
			"vehicle",
			"public"
		],
		k: [
			34,
			8
		],
		o: 2
	},
	"blond-haired-woman": {
		skin_variations: {
			"1F3FB": {
				unified: "1F471-1F3FB-200D-2640-FE0F",
				non_qualified: "1F471-1F3FB-200D-2640",
				image: "1f471-1f3fb-200d-2640-fe0f.png",
				sheet_x: 22,
				sheet_y: 8,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F471-1F3FC-200D-2640-FE0F",
				non_qualified: "1F471-1F3FC-200D-2640",
				image: "1f471-1f3fc-200d-2640-fe0f.png",
				sheet_x: 22,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F471-1F3FD-200D-2640-FE0F",
				non_qualified: "1F471-1F3FD-200D-2640",
				image: "1f471-1f3fd-200d-2640-fe0f.png",
				sheet_x: 22,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F471-1F3FE-200D-2640-FE0F",
				non_qualified: "1F471-1F3FE-200D-2640",
				image: "1f471-1f3fe-200d-2640-fe0f.png",
				sheet_x: 22,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F471-1F3FF-200D-2640-FE0F",
				non_qualified: "1F471-1F3FF-200D-2640",
				image: "1f471-1f3ff-200d-2640-fe0f.png",
				sheet_x: 22,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Blond Haired Woman",
		b: "1F471-200D-2640-FE0F",
		c: "1F471-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			22,
			7
		],
		o: 4
	},
	flushed: {
		a: "Flushed Face",
		b: "1F633",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"blush",
			"shy",
			"flattered"
		],
		k: [
			31,
			29
		],
		o: 2
	},
	pisces: {
		a: "Pisces",
		b: "2653",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"purple-square",
			"sign",
			"zodiac",
			"astrology"
		],
		k: [
			53,
			31
		],
		o: 2
	},
	chess_pawn: {
		a: "Chess Pawn",
		b: "265F-FE0F",
		c: "265F",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			53,
			32
		],
		o: 11
	},
	"blond-haired-man": {
		skin_variations: {
			"1F3FB": {
				unified: "1F471-1F3FB-200D-2642-FE0F",
				non_qualified: "1F471-1F3FB-200D-2642",
				image: "1f471-1f3fb-200d-2642-fe0f.png",
				sheet_x: 22,
				sheet_y: 14,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F471-1F3FC-200D-2642-FE0F",
				non_qualified: "1F471-1F3FC-200D-2642",
				image: "1f471-1f3fc-200d-2642-fe0f.png",
				sheet_x: 22,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F471-1F3FD-200D-2642-FE0F",
				non_qualified: "1F471-1F3FD-200D-2642",
				image: "1f471-1f3fd-200d-2642-fe0f.png",
				sheet_x: 22,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F471-1F3FE-200D-2642-FE0F",
				non_qualified: "1F471-1F3FE-200D-2642",
				image: "1f471-1f3fe-200d-2642-fe0f.png",
				sheet_x: 22,
				sheet_y: 17,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F471-1F3FF-200D-2642-FE0F",
				non_qualified: "1F471-1F3FF-200D-2642",
				image: "1f471-1f3ff-200d-2642-fe0f.png",
				sheet_x: 22,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F471",
		a: "Blond Haired Man",
		b: "1F471-200D-2642-FE0F",
		c: "1F471-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			22,
			13
		],
		o: 4
	},
	phone: {
		a: "Black Telephone",
		b: "260E-FE0F",
		c: "260E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"technology",
			"communication",
			"dial",
			"telephone"
		],
		k: [
			52,
			54
		],
		n: [
			"telephone"
		],
		o: 2
	},
	oden: {
		a: "Oden",
		b: "1F362",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"japanese"
		],
		k: [
			7,
			1
		],
		o: 2
	},
	"flag-do": {
		a: "Dominican Republic Flag",
		b: "1F1E9-1F1F4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			37
		],
		o: 2
	},
	tram: {
		a: "Tram",
		b: "1F68A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"transportation",
			"vehicle"
		],
		k: [
			34,
			9
		],
		o: 2
	},
	swan: {
		a: "Swan",
		b: "1F9A2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			52
		],
		o: 11
	},
	pleading_face: {
		a: "Face with Pleading Eyes",
		b: "1F97A",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			12
		],
		o: 11
	},
	"flag-dz": {
		a: "Algeria Flag",
		b: "1F1E9-1F1FF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			38
		],
		o: 2
	},
	monorail: {
		a: "Monorail",
		b: "1F69D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"transportation",
			"vehicle"
		],
		k: [
			34,
			28
		],
		o: 2
	},
	owl: {
		a: "Owl",
		b: "1F989",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"bird",
			"hoot"
		],
		k: [
			42,
			27
		],
		o: 4
	},
	sushi: {
		a: "Sushi",
		b: "1F363",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"fish",
			"japanese",
			"rice"
		],
		k: [
			7,
			2
		],
		o: 2
	},
	telephone_receiver: {
		a: "Telephone Receiver",
		b: "1F4DE",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"technology",
			"communication",
			"dial"
		],
		k: [
			26,
			52
		],
		o: 2
	},
	black_joker: {
		a: "Playing Card Black Joker",
		b: "1F0CF",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"poker",
			"cards",
			"game",
			"play",
			"magic"
		],
		k: [
			0,
			15
		],
		o: 2
	},
	ophiuchus: {
		a: "Ophiuchus",
		b: "26CE",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sign",
			"purple-square",
			"constellation",
			"astrology"
		],
		k: [
			54,
			4
		],
		o: 2
	},
	frowning: {
		a: "Frowning Face with Open Mouth",
		b: "1F626",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"aw",
			"what"
		],
		k: [
			31,
			16
		],
		o: 2
	},
	older_adult: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D3-1F3FB",
				non_qualified: null,
				image: "1f9d3-1f3fb.png",
				sheet_x: 48,
				sheet_y: 23,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9D3-1F3FC",
				non_qualified: null,
				image: "1f9d3-1f3fc.png",
				sheet_x: 48,
				sheet_y: 24,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9D3-1F3FD",
				non_qualified: null,
				image: "1f9d3-1f3fd.png",
				sheet_x: 48,
				sheet_y: 25,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9D3-1F3FE",
				non_qualified: null,
				image: "1f9d3-1f3fe.png",
				sheet_x: 48,
				sheet_y: 26,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9D3-1F3FF",
				non_qualified: null,
				image: "1f9d3-1f3ff.png",
				sheet_x: 48,
				sheet_y: 27,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Older Adult",
		b: "1F9D3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			48,
			22
		],
		o: 5
	},
	"flag-ea": {
		a: "Ceuta & Melilla Flag",
		b: "1F1EA-1F1E6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			39
		],
		o: 2
	},
	flamingo: {
		a: "Flamingo",
		b: "1F9A9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			43,
			0
		],
		o: 12
	},
	pager: {
		a: "Pager",
		b: "1F4DF",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"bbcall",
			"oldschool",
			"90s"
		],
		k: [
			26,
			53
		],
		o: 2
	},
	mountain_railway: {
		a: "Mountain Railway",
		b: "1F69E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"transportation",
			"vehicle"
		],
		k: [
			34,
			29
		],
		o: 2
	},
	mahjong: {
		a: "Mahjong Tile Red Dragon",
		b: "1F004",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"game",
			"play",
			"chinese",
			"kanji"
		],
		k: [
			0,
			14
		],
		o: 2
	},
	older_man: {
		skin_variations: {
			"1F3FB": {
				unified: "1F474-1F3FB",
				non_qualified: null,
				image: "1f474-1f3fb.png",
				sheet_x: 22,
				sheet_y: 50,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F474-1F3FC",
				non_qualified: null,
				image: "1f474-1f3fc.png",
				sheet_x: 22,
				sheet_y: 51,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F474-1F3FD",
				non_qualified: null,
				image: "1f474-1f3fd.png",
				sheet_x: 22,
				sheet_y: 52,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F474-1F3FE",
				non_qualified: null,
				image: "1f474-1f3fe.png",
				sheet_x: 22,
				sheet_y: 53,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F474-1F3FF",
				non_qualified: null,
				image: "1f474-1f3ff.png",
				sheet_x: 22,
				sheet_y: 54,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Older Man",
		b: "1F474",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"human",
			"male",
			"men",
			"old",
			"elder",
			"senior"
		],
		k: [
			22,
			49
		],
		o: 2
	},
	twisted_rightwards_arrows: {
		a: "Twisted Rightwards Arrows",
		b: "1F500",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"shuffle",
			"music",
			"random"
		],
		k: [
			27,
			28
		],
		o: 2
	},
	fried_shrimp: {
		a: "Fried Shrimp",
		b: "1F364",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"animal",
			"appetizer",
			"summer"
		],
		k: [
			7,
			3
		],
		o: 2
	},
	anguished: {
		a: "Anguished Face",
		b: "1F627",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"stunned",
			"nervous"
		],
		k: [
			31,
			17
		],
		l: [
			"D:"
		],
		o: 2
	},
	repeat: {
		a: "Clockwise Rightwards and Leftwards Open Circle Arrows",
		b: "1F501",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"loop",
			"record"
		],
		k: [
			27,
			29
		],
		o: 2
	},
	fish_cake: {
		a: "Fish Cake with Swirl Design",
		b: "1F365",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"japan",
			"sea",
			"beach",
			"narutomaki",
			"pink",
			"swirl",
			"kamaboko",
			"surimi",
			"ramen"
		],
		k: [
			7,
			4
		],
		o: 2
	},
	fax: {
		a: "Fax Machine",
		b: "1F4E0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"communication",
			"technology"
		],
		k: [
			26,
			54
		],
		o: 2
	},
	older_woman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F475-1F3FB",
				non_qualified: null,
				image: "1f475-1f3fb.png",
				sheet_x: 22,
				sheet_y: 56,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F475-1F3FC",
				non_qualified: null,
				image: "1f475-1f3fc.png",
				sheet_x: 23,
				sheet_y: 0,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F475-1F3FD",
				non_qualified: null,
				image: "1f475-1f3fd.png",
				sheet_x: 23,
				sheet_y: 1,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F475-1F3FE",
				non_qualified: null,
				image: "1f475-1f3fe.png",
				sheet_x: 23,
				sheet_y: 2,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F475-1F3FF",
				non_qualified: null,
				image: "1f475-1f3ff.png",
				sheet_x: 23,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Older Woman",
		b: "1F475",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"human",
			"female",
			"women",
			"lady",
			"old",
			"elder",
			"senior"
		],
		k: [
			22,
			55
		],
		o: 2
	},
	"flag-ec": {
		a: "Ecuador Flag",
		b: "1F1EA-1F1E8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			40
		],
		o: 2
	},
	peacock: {
		a: "Peacock",
		b: "1F99A",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			44
		],
		o: 11
	},
	fearful: {
		a: "Fearful Face",
		b: "1F628",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"scared",
			"terrified",
			"nervous",
			"oops",
			"huh"
		],
		k: [
			31,
			18
		],
		o: 2
	},
	train: {
		a: "Tram Car",
		b: "1F68B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"transportation",
			"vehicle",
			"carriage",
			"public",
			"travel"
		],
		k: [
			34,
			10
		],
		o: 2
	},
	flower_playing_cards: {
		a: "Flower Playing Cards",
		b: "1F3B4",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"game",
			"sunset",
			"red"
		],
		k: [
			8,
			26
		],
		o: 2
	},
	repeat_one: {
		a: "Clockwise Rightwards and Leftwards Open Circle Arrows with Circled One Overlay",
		b: "1F502",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"loop"
		],
		k: [
			27,
			30
		],
		o: 2
	},
	moon_cake: {
		a: "Moon Cake",
		b: "1F96E",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			4
		],
		o: 11
	},
	performing_arts: {
		a: "Performing Arts",
		b: "1F3AD",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"acting",
			"theater",
			"drama"
		],
		k: [
			8,
			19
		],
		o: 2
	},
	cold_sweat: {
		a: "Face with Open Mouth and Cold Sweat",
		b: "1F630",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"nervous",
			"sweat"
		],
		k: [
			31,
			26
		],
		o: 2
	},
	person_frowning: {
		skin_variations: {
			"1F3FB": {
				unified: "1F64D-1F3FB",
				non_qualified: null,
				image: "1f64d-1f3fb.png",
				sheet_x: 33,
				sheet_y: 27,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F64D-1F3FC",
				non_qualified: null,
				image: "1f64d-1f3fc.png",
				sheet_x: 33,
				sheet_y: 28,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F64D-1F3FD",
				non_qualified: null,
				image: "1f64d-1f3fd.png",
				sheet_x: 33,
				sheet_y: 29,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F64D-1F3FE",
				non_qualified: null,
				image: "1f64d-1f3fe.png",
				sheet_x: 33,
				sheet_y: 30,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F64D-1F3FF",
				non_qualified: null,
				image: "1f64d-1f3ff.png",
				sheet_x: 33,
				sheet_y: 31,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F64D-200D-2640-FE0F",
		a: "Person Frowning",
		b: "1F64D",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			33,
			26
		],
		o: 2
	},
	"flag-ee": {
		a: "Estonia Flag",
		b: "1F1EA-1F1EA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			41
		],
		o: 2
	},
	battery: {
		a: "Battery",
		b: "1F50B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"power",
			"energy",
			"sustain"
		],
		k: [
			27,
			39
		],
		o: 2
	},
	parrot: {
		a: "Parrot",
		b: "1F99C",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			46
		],
		o: 11
	},
	bus: {
		a: "Bus",
		b: "1F68C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"car",
			"vehicle",
			"transportation"
		],
		k: [
			34,
			11
		],
		o: 2
	},
	"flag-eg": {
		a: "Egypt Flag",
		b: "1F1EA-1F1EC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			42
		],
		o: 2
	},
	arrow_forward: {
		a: "Black Right-Pointing Triangle",
		b: "25B6-FE0F",
		c: "25B6",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"right",
			"direction",
			"play"
		],
		k: [
			52,
			43
		],
		o: 2
	},
	"man-frowning": {
		skin_variations: {
			"1F3FB": {
				unified: "1F64D-1F3FB-200D-2642-FE0F",
				non_qualified: "1F64D-1F3FB-200D-2642",
				image: "1f64d-1f3fb-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 21,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F64D-1F3FC-200D-2642-FE0F",
				non_qualified: "1F64D-1F3FC-200D-2642",
				image: "1f64d-1f3fc-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 22,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F64D-1F3FD-200D-2642-FE0F",
				non_qualified: "1F64D-1F3FD-200D-2642",
				image: "1f64d-1f3fd-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 23,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F64D-1F3FE-200D-2642-FE0F",
				non_qualified: "1F64D-1F3FE-200D-2642",
				image: "1f64d-1f3fe-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 24,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F64D-1F3FF-200D-2642-FE0F",
				non_qualified: "1F64D-1F3FF-200D-2642",
				image: "1f64d-1f3ff-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 25,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Frowning",
		b: "1F64D-200D-2642-FE0F",
		c: "1F64D-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			33,
			20
		],
		o: 4
	},
	disappointed_relieved: {
		a: "Disappointed but Relieved Face",
		b: "1F625",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"phew",
			"sweat",
			"nervous"
		],
		k: [
			31,
			15
		],
		o: 2
	},
	electric_plug: {
		a: "Electric Plug",
		b: "1F50C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"charger",
			"power"
		],
		k: [
			27,
			40
		],
		o: 2
	},
	frame_with_picture: {
		a: "Frame with Picture",
		b: "1F5BC-FE0F",
		c: "1F5BC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			30,
			14
		],
		o: 2
	},
	oncoming_bus: {
		a: "Oncoming Bus",
		b: "1F68D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"vehicle",
			"transportation"
		],
		k: [
			34,
			12
		],
		o: 2
	},
	dango: {
		a: "Dango",
		b: "1F361",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"dessert",
			"sweet",
			"japanese",
			"barbecue",
			"meat"
		],
		k: [
			7,
			0
		],
		o: 2
	},
	frog: {
		a: "Frog Face",
		b: "1F438",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"croak",
			"toad"
		],
		k: [
			12,
			28
		],
		o: 2
	},
	computer: {
		a: "Personal Computer",
		b: "1F4BB",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"technology",
			"laptop",
			"screen",
			"display",
			"monitor"
		],
		k: [
			26,
			17
		],
		o: 2
	},
	art: {
		a: "Artist Palette",
		b: "1F3A8",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"design",
			"paint",
			"draw",
			"colors"
		],
		k: [
			8,
			14
		],
		o: 2
	},
	"flag-eh": {
		a: "Western Sahara Flag",
		b: "1F1EA-1F1ED",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			43
		],
		o: 2
	},
	fast_forward: {
		a: "Black Right-Pointing Double Triangle",
		b: "23E9",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"play",
			"speed",
			"continue"
		],
		k: [
			52,
			26
		],
		o: 2
	},
	cry: {
		a: "Crying Face",
		b: "1F622",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"tears",
			"sad",
			"depressed",
			"upset",
			":'("
		],
		k: [
			31,
			12
		],
		l: [
			":'("
		],
		m: ":'(",
		o: 2
	},
	"woman-frowning": {
		skin_variations: {
			"1F3FB": {
				unified: "1F64D-1F3FB-200D-2640-FE0F",
				non_qualified: "1F64D-1F3FB-200D-2640",
				image: "1f64d-1f3fb-200d-2640-fe0f.png",
				sheet_x: 33,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F64D-1F3FC-200D-2640-FE0F",
				non_qualified: "1F64D-1F3FC-200D-2640",
				image: "1f64d-1f3fc-200d-2640-fe0f.png",
				sheet_x: 33,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F64D-1F3FD-200D-2640-FE0F",
				non_qualified: "1F64D-1F3FD-200D-2640",
				image: "1f64d-1f3fd-200d-2640-fe0f.png",
				sheet_x: 33,
				sheet_y: 17,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F64D-1F3FE-200D-2640-FE0F",
				non_qualified: "1F64D-1F3FE-200D-2640",
				image: "1f64d-1f3fe-200d-2640-fe0f.png",
				sheet_x: 33,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F64D-1F3FF-200D-2640-FE0F",
				non_qualified: "1F64D-1F3FF-200D-2640",
				image: "1f64d-1f3ff-200d-2640-fe0f.png",
				sheet_x: 33,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F64D",
		a: "Woman Frowning",
		b: "1F64D-200D-2640-FE0F",
		c: "1F64D-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			33,
			14
		],
		o: 4
	},
	trolleybus: {
		a: "Trolleybus",
		b: "1F68E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"bart",
			"transportation",
			"vehicle"
		],
		k: [
			34,
			13
		],
		o: 2
	},
	crocodile: {
		a: "Crocodile",
		b: "1F40A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"reptile",
			"lizard",
			"alligator"
		],
		k: [
			11,
			38
		],
		o: 2
	},
	dumpling: {
		a: "Dumpling",
		b: "1F95F",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			46
		],
		o: 5
	},
	black_right_pointing_double_triangle_with_vertical_bar: {
		a: "Black Right Pointing Double Triangle with Vertical Bar",
		b: "23ED-FE0F",
		c: "23ED",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			52,
			30
		],
		o: 2
	},
	desktop_computer: {
		a: "Desktop Computer",
		b: "1F5A5-FE0F",
		c: "1F5A5",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"technology",
			"computing",
			"screen"
		],
		k: [
			30,
			10
		],
		o: 2
	},
	person_with_pouting_face: {
		skin_variations: {
			"1F3FB": {
				unified: "1F64E-1F3FB",
				non_qualified: null,
				image: "1f64e-1f3fb.png",
				sheet_x: 33,
				sheet_y: 45,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F64E-1F3FC",
				non_qualified: null,
				image: "1f64e-1f3fc.png",
				sheet_x: 33,
				sheet_y: 46,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F64E-1F3FD",
				non_qualified: null,
				image: "1f64e-1f3fd.png",
				sheet_x: 33,
				sheet_y: 47,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F64E-1F3FE",
				non_qualified: null,
				image: "1f64e-1f3fe.png",
				sheet_x: 33,
				sheet_y: 48,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F64E-1F3FF",
				non_qualified: null,
				image: "1f64e-1f3ff.png",
				sheet_x: 33,
				sheet_y: 49,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F64E-200D-2640-FE0F",
		a: "Person with Pouting Face",
		b: "1F64E",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			33,
			44
		],
		o: 2
	},
	turtle: {
		a: "Turtle",
		b: "1F422",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"slow",
			"nature",
			"tortoise"
		],
		k: [
			12,
			6
		],
		o: 2
	},
	sob: {
		a: "Loudly Crying Face",
		b: "1F62D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"cry",
			"tears",
			"sad",
			"upset",
			"depressed"
		],
		k: [
			31,
			23
		],
		m: ":'(",
		o: 2
	},
	"flag-er": {
		a: "Eritrea Flag",
		b: "1F1EA-1F1F7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			44
		],
		o: 2
	},
	thread: {
		a: "Spool of Thread",
		b: "1F9F5",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			40
		],
		o: 11
	},
	minibus: {
		a: "Minibus",
		b: "1F690",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"vehicle",
			"car",
			"transportation"
		],
		k: [
			34,
			15
		],
		o: 2
	},
	fortune_cookie: {
		a: "Fortune Cookie",
		b: "1F960",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			47
		],
		o: 5
	},
	yarn: {
		a: "Ball of Yarn",
		b: "1F9F6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			41
		],
		o: 11
	},
	takeout_box: {
		a: "Takeout Box",
		b: "1F961",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			48
		],
		o: 5
	},
	"man-pouting": {
		skin_variations: {
			"1F3FB": {
				unified: "1F64E-1F3FB-200D-2642-FE0F",
				non_qualified: "1F64E-1F3FB-200D-2642",
				image: "1f64e-1f3fb-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F64E-1F3FC-200D-2642-FE0F",
				non_qualified: "1F64E-1F3FC-200D-2642",
				image: "1f64e-1f3fc-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F64E-1F3FD-200D-2642-FE0F",
				non_qualified: "1F64E-1F3FD-200D-2642",
				image: "1f64e-1f3fd-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F64E-1F3FE-200D-2642-FE0F",
				non_qualified: "1F64E-1F3FE-200D-2642",
				image: "1f64e-1f3fe-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F64E-1F3FF-200D-2642-FE0F",
				non_qualified: "1F64E-1F3FF-200D-2642",
				image: "1f64e-1f3ff-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Pouting",
		b: "1F64E-200D-2642-FE0F",
		c: "1F64E-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			33,
			38
		],
		o: 4
	},
	printer: {
		a: "Printer",
		b: "1F5A8-FE0F",
		c: "1F5A8",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"paper",
			"ink"
		],
		k: [
			30,
			11
		],
		o: 2
	},
	scream: {
		a: "Face Screaming in Fear",
		b: "1F631",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"munch",
			"scared",
			"omg"
		],
		k: [
			31,
			27
		],
		o: 2
	},
	es: {
		a: "Spain Flag",
		b: "1F1EA-1F1F8",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"spain",
			"flag",
			"nation",
			"country",
			"banner"
		],
		k: [
			1,
			45
		],
		n: [
			"flag-es"
		],
		o: 2
	},
	ambulance: {
		a: "Ambulance",
		b: "1F691",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"health",
			"911",
			"hospital"
		],
		k: [
			34,
			16
		],
		o: 2
	},
	black_right_pointing_triangle_with_double_vertical_bar: {
		a: "Black Right Pointing Triangle with Double Vertical Bar",
		b: "23EF-FE0F",
		c: "23EF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			52,
			32
		],
		o: 2
	},
	lizard: {
		a: "Lizard",
		b: "1F98E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"reptile"
		],
		k: [
			42,
			32
		],
		o: 4
	},
	"flag-et": {
		a: "Ethiopia Flag",
		b: "1F1EA-1F1F9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			46
		],
		o: 2
	},
	keyboard: {
		a: "Keyboard",
		b: "2328-FE0F",
		c: "2328",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"technology",
			"computer",
			"type",
			"input",
			"text"
		],
		k: [
			52,
			24
		],
		o: 2
	},
	crab: {
		a: "Crab",
		b: "1F980",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"crustacean"
		],
		k: [
			42,
			18
		],
		o: 2
	},
	confounded: {
		a: "Confounded Face",
		b: "1F616",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"confused",
			"sick",
			"unwell",
			"oops",
			":S"
		],
		k: [
			31,
			0
		],
		o: 2
	},
	snake: {
		a: "Snake",
		b: "1F40D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"evil",
			"nature",
			"hiss",
			"python"
		],
		k: [
			11,
			41
		],
		o: 2
	},
	"woman-pouting": {
		skin_variations: {
			"1F3FB": {
				unified: "1F64E-1F3FB-200D-2640-FE0F",
				non_qualified: "1F64E-1F3FB-200D-2640",
				image: "1f64e-1f3fb-200d-2640-fe0f.png",
				sheet_x: 33,
				sheet_y: 33,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F64E-1F3FC-200D-2640-FE0F",
				non_qualified: "1F64E-1F3FC-200D-2640",
				image: "1f64e-1f3fc-200d-2640-fe0f.png",
				sheet_x: 33,
				sheet_y: 34,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F64E-1F3FD-200D-2640-FE0F",
				non_qualified: "1F64E-1F3FD-200D-2640",
				image: "1f64e-1f3fd-200d-2640-fe0f.png",
				sheet_x: 33,
				sheet_y: 35,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F64E-1F3FE-200D-2640-FE0F",
				non_qualified: "1F64E-1F3FE-200D-2640",
				image: "1f64e-1f3fe-200d-2640-fe0f.png",
				sheet_x: 33,
				sheet_y: 36,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F64E-1F3FF-200D-2640-FE0F",
				non_qualified: "1F64E-1F3FF-200D-2640",
				image: "1f64e-1f3ff-200d-2640-fe0f.png",
				sheet_x: 33,
				sheet_y: 37,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F64E",
		a: "Woman Pouting",
		b: "1F64E-200D-2640-FE0F",
		c: "1F64E-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			33,
			32
		],
		o: 4
	},
	arrow_backward: {
		a: "Black Left-Pointing Triangle",
		b: "25C0-FE0F",
		c: "25C0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"left",
			"direction"
		],
		k: [
			52,
			44
		],
		o: 2
	},
	fire_engine: {
		a: "Fire Engine",
		b: "1F692",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"transportation",
			"cars",
			"vehicle"
		],
		k: [
			34,
			17
		],
		o: 2
	},
	rewind: {
		a: "Black Left-Pointing Double Triangle",
		b: "23EA",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"play",
			"blue-square"
		],
		k: [
			52,
			27
		],
		o: 2
	},
	three_button_mouse: {
		a: "Three Button Mouse",
		b: "1F5B1-FE0F",
		c: "1F5B1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			30,
			12
		],
		o: 2
	},
	no_good: {
		skin_variations: {
			"1F3FB": {
				unified: "1F645-1F3FB",
				non_qualified: null,
				image: "1f645-1f3fb.png",
				sheet_x: 32,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F645-1F3FC",
				non_qualified: null,
				image: "1f645-1f3fc.png",
				sheet_x: 32,
				sheet_y: 4,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F645-1F3FD",
				non_qualified: null,
				image: "1f645-1f3fd.png",
				sheet_x: 32,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F645-1F3FE",
				non_qualified: null,
				image: "1f645-1f3fe.png",
				sheet_x: 32,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F645-1F3FF",
				non_qualified: null,
				image: "1f645-1f3ff.png",
				sheet_x: 32,
				sheet_y: 7,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F645-200D-2640-FE0F",
		a: "Face with No Good Gesture",
		b: "1F645",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			32,
			2
		],
		o: 2
	},
	police_car: {
		a: "Police Car",
		b: "1F693",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"vehicle",
			"cars",
			"transportation",
			"law",
			"legal",
			"enforcement"
		],
		k: [
			34,
			18
		],
		o: 2
	},
	dragon_face: {
		a: "Dragon Face",
		b: "1F432",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"myth",
			"nature",
			"chinese",
			"green"
		],
		k: [
			12,
			22
		],
		o: 2
	},
	persevere: {
		a: "Persevering Face",
		b: "1F623",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"sick",
			"no",
			"upset",
			"oops"
		],
		k: [
			31,
			13
		],
		o: 2
	},
	lobster: {
		a: "Lobster",
		b: "1F99E",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			48
		],
		o: 11
	},
	"flag-eu": {
		a: "European Union Flag",
		b: "1F1EA-1F1FA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			47
		],
		o: 2
	},
	disappointed: {
		a: "Disappointed Face",
		b: "1F61E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"sad",
			"upset",
			"depressed",
			":("
		],
		k: [
			31,
			8
		],
		l: [
			"):",
			":(",
			":-("
		],
		m: ":(",
		o: 2
	},
	shrimp: {
		a: "Shrimp",
		b: "1F990",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"ocean",
			"nature",
			"seafood"
		],
		k: [
			42,
			34
		],
		o: 4
	},
	dragon: {
		a: "Dragon",
		b: "1F409",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"myth",
			"nature",
			"chinese",
			"green"
		],
		k: [
			11,
			37
		],
		o: 2
	},
	"man-gesturing-no": {
		skin_variations: {
			"1F3FB": {
				unified: "1F645-1F3FB-200D-2642-FE0F",
				non_qualified: "1F645-1F3FB-200D-2642",
				image: "1f645-1f3fb-200d-2642-fe0f.png",
				sheet_x: 31,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F645-1F3FC-200D-2642-FE0F",
				non_qualified: "1F645-1F3FC-200D-2642",
				image: "1f645-1f3fc-200d-2642-fe0f.png",
				sheet_x: 31,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F645-1F3FD-200D-2642-FE0F",
				non_qualified: "1F645-1F3FD-200D-2642",
				image: "1f645-1f3fd-200d-2642-fe0f.png",
				sheet_x: 31,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F645-1F3FE-200D-2642-FE0F",
				non_qualified: "1F645-1F3FE-200D-2642",
				image: "1f645-1f3fe-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F645-1F3FF-200D-2642-FE0F",
				non_qualified: "1F645-1F3FF-200D-2642",
				image: "1f645-1f3ff-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Gesturing No",
		b: "1F645-200D-2642-FE0F",
		c: "1F645-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			31,
			53
		],
		o: 4
	},
	"flag-fi": {
		a: "Finland Flag",
		b: "1F1EB-1F1EE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			48
		],
		o: 2
	},
	trackball: {
		a: "Trackball",
		b: "1F5B2-FE0F",
		c: "1F5B2",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"technology",
			"trackpad"
		],
		k: [
			30,
			13
		],
		o: 2
	},
	black_left_pointing_double_triangle_with_vertical_bar: {
		a: "Black Left Pointing Double Triangle with Vertical Bar",
		b: "23EE-FE0F",
		c: "23EE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			52,
			31
		],
		o: 2
	},
	oncoming_police_car: {
		a: "Oncoming Police Car",
		b: "1F694",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"vehicle",
			"law",
			"legal",
			"enforcement",
			"911"
		],
		k: [
			34,
			19
		],
		o: 2
	},
	minidisc: {
		a: "Minidisc",
		b: "1F4BD",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"technology",
			"record",
			"data",
			"disk",
			"90s"
		],
		k: [
			26,
			19
		],
		o: 2
	},
	sweat: {
		a: "Face with Cold Sweat",
		b: "1F613",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"hot",
			"sad",
			"tired",
			"exercise"
		],
		k: [
			30,
			54
		],
		o: 2
	},
	squid: {
		a: "Squid",
		b: "1F991",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"ocean",
			"sea"
		],
		k: [
			42,
			35
		],
		o: 4
	},
	sauropod: {
		a: "Sauropod",
		b: "1F995",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			39
		],
		o: 5
	},
	arrow_up_small: {
		a: "Up-Pointing Small Red Triangle",
		b: "1F53C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"triangle",
			"direction",
			"point",
			"forward",
			"top"
		],
		k: [
			28,
			31
		],
		o: 2
	},
	"flag-fj": {
		a: "Fiji Flag",
		b: "1F1EB-1F1EF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			49
		],
		o: 2
	},
	"woman-gesturing-no": {
		skin_variations: {
			"1F3FB": {
				unified: "1F645-1F3FB-200D-2640-FE0F",
				non_qualified: "1F645-1F3FB-200D-2640",
				image: "1f645-1f3fb-200d-2640-fe0f.png",
				sheet_x: 31,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F645-1F3FC-200D-2640-FE0F",
				non_qualified: "1F645-1F3FC-200D-2640",
				image: "1f645-1f3fc-200d-2640-fe0f.png",
				sheet_x: 31,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F645-1F3FD-200D-2640-FE0F",
				non_qualified: "1F645-1F3FD-200D-2640",
				image: "1f645-1f3fd-200d-2640-fe0f.png",
				sheet_x: 31,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F645-1F3FE-200D-2640-FE0F",
				non_qualified: "1F645-1F3FE-200D-2640",
				image: "1f645-1f3fe-200d-2640-fe0f.png",
				sheet_x: 31,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F645-1F3FF-200D-2640-FE0F",
				non_qualified: "1F645-1F3FF-200D-2640",
				image: "1f645-1f3ff-200d-2640-fe0f.png",
				sheet_x: 31,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F645",
		a: "Woman Gesturing No",
		b: "1F645-200D-2640-FE0F",
		c: "1F645-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			31,
			47
		],
		o: 4
	},
	taxi: {
		a: "Taxi",
		b: "1F695",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"uber",
			"vehicle",
			"cars",
			"transportation"
		],
		k: [
			34,
			20
		],
		o: 2
	},
	"flag-fk": {
		a: "Falkland Islands Flag",
		b: "1F1EB-1F1F0",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			50
		],
		o: 2
	},
	floppy_disk: {
		a: "Floppy Disk",
		b: "1F4BE",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"oldschool",
			"technology",
			"save",
			"90s",
			"80s"
		],
		k: [
			26,
			20
		],
		o: 2
	},
	"t-rex": {
		a: "T-Rex",
		b: "1F996",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			40
		],
		o: 5
	},
	oyster: {
		a: "Oyster",
		b: "1F9AA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			43,
			1
		],
		o: 12
	},
	arrow_double_up: {
		a: "Black Up-Pointing Double Triangle",
		b: "23EB",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"direction",
			"top"
		],
		k: [
			52,
			28
		],
		o: 2
	},
	oncoming_taxi: {
		a: "Oncoming Taxi",
		b: "1F696",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"vehicle",
			"cars",
			"uber"
		],
		k: [
			34,
			21
		],
		o: 2
	},
	ok_woman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F646-1F3FB",
				non_qualified: null,
				image: "1f646-1f3fb.png",
				sheet_x: 32,
				sheet_y: 21,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F646-1F3FC",
				non_qualified: null,
				image: "1f646-1f3fc.png",
				sheet_x: 32,
				sheet_y: 22,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F646-1F3FD",
				non_qualified: null,
				image: "1f646-1f3fd.png",
				sheet_x: 32,
				sheet_y: 23,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F646-1F3FE",
				non_qualified: null,
				image: "1f646-1f3fe.png",
				sheet_x: 32,
				sheet_y: 24,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F646-1F3FF",
				non_qualified: null,
				image: "1f646-1f3ff.png",
				sheet_x: 32,
				sheet_y: 25,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F646-200D-2640-FE0F",
		a: "Face with Ok Gesture",
		b: "1F646",
		d: true,
		e: true,
		f: true,
		h: false,
		j: [
			"women",
			"girl",
			"female",
			"pink",
			"human",
			"woman"
		],
		k: [
			32,
			20
		],
		o: 2
	},
	weary: {
		a: "Weary Face",
		b: "1F629",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"tired",
			"sleepy",
			"sad",
			"frustrated",
			"upset"
		],
		k: [
			31,
			19
		],
		o: 2
	},
	"man-gesturing-ok": {
		skin_variations: {
			"1F3FB": {
				unified: "1F646-1F3FB-200D-2642-FE0F",
				non_qualified: "1F646-1F3FB-200D-2642",
				image: "1f646-1f3fb-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F646-1F3FC-200D-2642-FE0F",
				non_qualified: "1F646-1F3FC-200D-2642",
				image: "1f646-1f3fc-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F646-1F3FD-200D-2642-FE0F",
				non_qualified: "1F646-1F3FD-200D-2642",
				image: "1f646-1f3fd-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 17,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F646-1F3FE-200D-2642-FE0F",
				non_qualified: "1F646-1F3FE-200D-2642",
				image: "1f646-1f3fe-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F646-1F3FF-200D-2642-FE0F",
				non_qualified: "1F646-1F3FF-200D-2642",
				image: "1f646-1f3ff-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Gesturing Ok",
		b: "1F646-200D-2642-FE0F",
		c: "1F646-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			32,
			14
		],
		o: 4
	},
	arrow_down_small: {
		a: "Down-Pointing Small Red Triangle",
		b: "1F53D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"direction",
			"bottom"
		],
		k: [
			28,
			32
		],
		o: 2
	},
	tired_face: {
		a: "Tired Face",
		b: "1F62B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sick",
			"whine",
			"upset",
			"frustrated"
		],
		k: [
			31,
			21
		],
		o: 2
	},
	car: {
		a: "Automobile",
		b: "1F697",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			34,
			22
		],
		n: [
			"red_car"
		],
		o: 2
	},
	icecream: {
		a: "Soft Ice Cream",
		b: "1F366",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"hot",
			"dessert",
			"summer"
		],
		k: [
			7,
			5
		],
		o: 2
	},
	cd: {
		a: "Optical Disc",
		b: "1F4BF",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"technology",
			"dvd",
			"disk",
			"disc",
			"90s"
		],
		k: [
			26,
			21
		],
		o: 2
	},
	whale: {
		a: "Spouting Whale",
		b: "1F433",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"sea",
			"ocean"
		],
		k: [
			12,
			23
		],
		o: 2
	},
	"flag-fm": {
		a: "Micronesia Flag",
		b: "1F1EB-1F1F2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			51
		],
		o: 2
	},
	oncoming_automobile: {
		a: "Oncoming Automobile",
		b: "1F698",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"car",
			"vehicle",
			"transportation"
		],
		k: [
			34,
			23
		],
		o: 2
	},
	arrow_double_down: {
		a: "Black Down-Pointing Double Triangle",
		b: "23EC",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"direction",
			"bottom"
		],
		k: [
			52,
			29
		],
		o: 2
	},
	"woman-gesturing-ok": {
		skin_variations: {
			"1F3FB": {
				unified: "1F646-1F3FB-200D-2640-FE0F",
				non_qualified: "1F646-1F3FB-200D-2640",
				image: "1f646-1f3fb-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F646-1F3FC-200D-2640-FE0F",
				non_qualified: "1F646-1F3FC-200D-2640",
				image: "1f646-1f3fc-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F646-1F3FD-200D-2640-FE0F",
				non_qualified: "1F646-1F3FD-200D-2640",
				image: "1f646-1f3fd-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F646-1F3FE-200D-2640-FE0F",
				non_qualified: "1F646-1F3FE-200D-2640",
				image: "1f646-1f3fe-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F646-1F3FF-200D-2640-FE0F",
				non_qualified: "1F646-1F3FF-200D-2640",
				image: "1f646-1f3ff-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F646",
		a: "Woman Gesturing Ok",
		b: "1F646-200D-2640-FE0F",
		c: "1F646-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			32,
			8
		],
		o: 4
	},
	yawning_face: {
		a: "Yawning Face",
		b: "1F971",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			7
		],
		o: 12
	},
	dvd: {
		a: "Dvd",
		b: "1F4C0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"cd",
			"disk",
			"disc"
		],
		k: [
			26,
			22
		],
		o: 2
	},
	whale2: {
		a: "Whale",
		b: "1F40B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"sea",
			"ocean"
		],
		k: [
			11,
			39
		],
		o: 2
	},
	"flag-fo": {
		a: "Faroe Islands Flag",
		b: "1F1EB-1F1F4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			52
		],
		o: 2
	},
	shaved_ice: {
		a: "Shaved Ice",
		b: "1F367",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"hot",
			"dessert",
			"summer"
		],
		k: [
			7,
			6
		],
		o: 2
	},
	double_vertical_bar: {
		a: "Double Vertical Bar",
		b: "23F8-FE0F",
		c: "23F8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			52,
			37
		],
		o: 2
	},
	information_desk_person: {
		skin_variations: {
			"1F3FB": {
				unified: "1F481-1F3FB",
				non_qualified: null,
				image: "1f481-1f3fb.png",
				sheet_x: 24,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F481-1F3FC",
				non_qualified: null,
				image: "1f481-1f3fc.png",
				sheet_x: 24,
				sheet_y: 4,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F481-1F3FD",
				non_qualified: null,
				image: "1f481-1f3fd.png",
				sheet_x: 24,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F481-1F3FE",
				non_qualified: null,
				image: "1f481-1f3fe.png",
				sheet_x: 24,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F481-1F3FF",
				non_qualified: null,
				image: "1f481-1f3ff.png",
				sheet_x: 24,
				sheet_y: 7,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F481-200D-2640-FE0F",
		a: "Information Desk Person",
		b: "1F481",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			24,
			2
		],
		o: 2
	},
	dolphin: {
		a: "Dolphin",
		b: "1F42C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"fish",
			"sea",
			"ocean",
			"flipper",
			"fins",
			"beach"
		],
		k: [
			12,
			16
		],
		n: [
			"flipper"
		],
		o: 2
	},
	blue_car: {
		a: "Recreational Vehicle",
		b: "1F699",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"transportation",
			"vehicle"
		],
		k: [
			34,
			24
		],
		o: 2
	},
	ice_cream: {
		a: "Ice Cream",
		b: "1F368",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"hot",
			"dessert"
		],
		k: [
			7,
			7
		],
		o: 2
	},
	fr: {
		a: "France Flag",
		b: "1F1EB-1F1F7",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"banner",
			"flag",
			"nation",
			"france",
			"french",
			"country"
		],
		k: [
			1,
			53
		],
		n: [
			"flag-fr"
		],
		o: 2
	},
	triumph: {
		a: "Face with Look of Triumph",
		b: "1F624",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"gas",
			"phew",
			"proud",
			"pride"
		],
		k: [
			31,
			14
		],
		o: 2
	},
	abacus: {
		a: "Abacus",
		b: "1F9EE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			33
		],
		o: 11
	},
	"man-tipping-hand": {
		skin_variations: {
			"1F3FB": {
				unified: "1F481-1F3FB-200D-2642-FE0F",
				non_qualified: "1F481-1F3FB-200D-2642",
				image: "1f481-1f3fb-200d-2642-fe0f.png",
				sheet_x: 23,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F481-1F3FC-200D-2642-FE0F",
				non_qualified: "1F481-1F3FC-200D-2642",
				image: "1f481-1f3fc-200d-2642-fe0f.png",
				sheet_x: 23,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F481-1F3FD-200D-2642-FE0F",
				non_qualified: "1F481-1F3FD-200D-2642",
				image: "1f481-1f3fd-200d-2642-fe0f.png",
				sheet_x: 23,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F481-1F3FE-200D-2642-FE0F",
				non_qualified: "1F481-1F3FE-200D-2642",
				image: "1f481-1f3fe-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F481-1F3FF-200D-2642-FE0F",
				non_qualified: "1F481-1F3FF-200D-2642",
				image: "1f481-1f3ff-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Tipping Hand",
		b: "1F481-200D-2642-FE0F",
		c: "1F481-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			23,
			53
		],
		o: 4
	},
	doughnut: {
		a: "Doughnut",
		b: "1F369",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"dessert",
			"snack",
			"sweet",
			"donut"
		],
		k: [
			7,
			8
		],
		o: 2
	},
	fish: {
		a: "Fish",
		b: "1F41F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"food",
			"nature"
		],
		k: [
			12,
			3
		],
		o: 2
	},
	truck: {
		a: "Delivery Truck",
		b: "1F69A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"cars",
			"transportation"
		],
		k: [
			34,
			25
		],
		o: 2
	},
	movie_camera: {
		a: "Movie Camera",
		b: "1F3A5",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"film",
			"record"
		],
		k: [
			8,
			11
		],
		o: 2
	},
	"flag-ga": {
		a: "Gabon Flag",
		b: "1F1EC-1F1E6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			54
		],
		o: 2
	},
	rage: {
		a: "Pouting Face",
		b: "1F621",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"angry",
			"mad",
			"hate",
			"despise"
		],
		k: [
			31,
			11
		],
		o: 2
	},
	black_square_for_stop: {
		a: "Black Square for Stop",
		b: "23F9-FE0F",
		c: "23F9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			52,
			38
		],
		o: 2
	},
	articulated_lorry: {
		a: "Articulated Lorry",
		b: "1F69B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"vehicle",
			"cars",
			"transportation",
			"express"
		],
		k: [
			34,
			26
		],
		o: 2
	},
	angry: {
		a: "Angry Face",
		b: "1F620",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"mad",
			"face",
			"annoyed",
			"frustrated"
		],
		k: [
			31,
			10
		],
		l: [
			">:(",
			">:-("
		],
		o: 2
	},
	cookie: {
		a: "Cookie",
		b: "1F36A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"snack",
			"oreo",
			"chocolate",
			"sweet",
			"dessert"
		],
		k: [
			7,
			9
		],
		o: 2
	},
	gb: {
		a: "United Kingdom Flag",
		b: "1F1EC-1F1E7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			55
		],
		n: [
			"uk",
			"flag-gb"
		],
		o: 2
	},
	tropical_fish: {
		a: "Tropical Fish",
		b: "1F420",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"swim",
			"ocean",
			"beach",
			"nemo"
		],
		k: [
			12,
			4
		],
		o: 2
	},
	"woman-tipping-hand": {
		skin_variations: {
			"1F3FB": {
				unified: "1F481-1F3FB-200D-2640-FE0F",
				non_qualified: "1F481-1F3FB-200D-2640",
				image: "1f481-1f3fb-200d-2640-fe0f.png",
				sheet_x: 23,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F481-1F3FC-200D-2640-FE0F",
				non_qualified: "1F481-1F3FC-200D-2640",
				image: "1f481-1f3fc-200d-2640-fe0f.png",
				sheet_x: 23,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F481-1F3FD-200D-2640-FE0F",
				non_qualified: "1F481-1F3FD-200D-2640",
				image: "1f481-1f3fd-200d-2640-fe0f.png",
				sheet_x: 23,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F481-1F3FE-200D-2640-FE0F",
				non_qualified: "1F481-1F3FE-200D-2640",
				image: "1f481-1f3fe-200d-2640-fe0f.png",
				sheet_x: 23,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F481-1F3FF-200D-2640-FE0F",
				non_qualified: "1F481-1F3FF-200D-2640",
				image: "1f481-1f3ff-200d-2640-fe0f.png",
				sheet_x: 23,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F481",
		a: "Woman Tipping Hand",
		b: "1F481-200D-2640-FE0F",
		c: "1F481-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			23,
			47
		],
		o: 4
	},
	black_circle_for_record: {
		a: "Black Circle for Record",
		b: "23FA-FE0F",
		c: "23FA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			52,
			39
		],
		o: 2
	},
	film_frames: {
		a: "Film Frames",
		b: "1F39E-FE0F",
		c: "1F39E",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			8,
			4
		],
		o: 2
	},
	film_projector: {
		a: "Film Projector",
		b: "1F4FD-FE0F",
		c: "1F4FD",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"video",
			"tape",
			"record",
			"movie"
		],
		k: [
			27,
			26
		],
		o: 2
	},
	"flag-gd": {
		a: "Grenada Flag",
		b: "1F1EC-1F1E9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			1,
			56
		],
		o: 2
	},
	blowfish: {
		a: "Blowfish",
		b: "1F421",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"food",
			"sea",
			"ocean"
		],
		k: [
			12,
			5
		],
		o: 2
	},
	face_with_symbols_on_mouth: {
		a: "Serious Face with Symbols Covering Mouth",
		b: "1F92C",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			38,
			46
		],
		n: [
			"serious_face_with_symbols_covering_mouth"
		],
		o: 5
	},
	birthday: {
		a: "Birthday Cake",
		b: "1F382",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"dessert",
			"cake"
		],
		k: [
			7,
			33
		],
		o: 2
	},
	eject: {
		a: "Eject",
		b: "23CF-FE0F",
		c: "23CF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			52,
			25
		],
		o: 2
	},
	raising_hand: {
		skin_variations: {
			"1F3FB": {
				unified: "1F64B-1F3FB",
				non_qualified: null,
				image: "1f64b-1f3fb.png",
				sheet_x: 33,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F64B-1F3FC",
				non_qualified: null,
				image: "1f64b-1f3fc.png",
				sheet_x: 33,
				sheet_y: 4,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F64B-1F3FD",
				non_qualified: null,
				image: "1f64b-1f3fd.png",
				sheet_x: 33,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F64B-1F3FE",
				non_qualified: null,
				image: "1f64b-1f3fe.png",
				sheet_x: 33,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F64B-1F3FF",
				non_qualified: null,
				image: "1f64b-1f3ff.png",
				sheet_x: 33,
				sheet_y: 7,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F64B-200D-2640-FE0F",
		a: "Happy Person Raising One Hand",
		b: "1F64B",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			33,
			2
		],
		o: 2
	},
	tractor: {
		a: "Tractor",
		b: "1F69C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"vehicle",
			"car",
			"farming",
			"agriculture"
		],
		k: [
			34,
			27
		],
		o: 2
	},
	"flag-ge": {
		a: "Georgia Flag",
		b: "1F1EC-1F1EA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			0
		],
		o: 2
	},
	smiling_imp: {
		a: "Smiling Face with Horns",
		b: "1F608",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"devil",
			"horns"
		],
		k: [
			30,
			43
		],
		o: 2
	},
	racing_car: {
		a: "Racing Car",
		b: "1F3CE-FE0F",
		c: "1F3CE",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sports",
			"race",
			"fast",
			"formula",
			"f1"
		],
		k: [
			10,
			33
		],
		o: 2
	},
	cinema: {
		a: "Cinema",
		b: "1F3A6",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"record",
			"film",
			"movie",
			"curtain",
			"stage",
			"theater"
		],
		k: [
			8,
			12
		],
		o: 2
	},
	clapper: {
		a: "Clapper Board",
		b: "1F3AC",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"movie",
			"film",
			"record"
		],
		k: [
			8,
			18
		],
		o: 2
	},
	shark: {
		a: "Shark",
		b: "1F988",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"nature",
			"fish",
			"sea",
			"ocean",
			"jaws",
			"fins",
			"beach"
		],
		k: [
			42,
			26
		],
		o: 4
	},
	cake: {
		a: "Shortcake",
		b: "1F370",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"dessert"
		],
		k: [
			7,
			15
		],
		o: 2
	},
	"man-raising-hand": {
		skin_variations: {
			"1F3FB": {
				unified: "1F64B-1F3FB-200D-2642-FE0F",
				non_qualified: "1F64B-1F3FB-200D-2642",
				image: "1f64b-1f3fb-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F64B-1F3FC-200D-2642-FE0F",
				non_qualified: "1F64B-1F3FC-200D-2642",
				image: "1f64b-1f3fc-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F64B-1F3FD-200D-2642-FE0F",
				non_qualified: "1F64B-1F3FD-200D-2642",
				image: "1f64b-1f3fd-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F64B-1F3FE-200D-2642-FE0F",
				non_qualified: "1F64B-1F3FE-200D-2642",
				image: "1f64b-1f3fe-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F64B-1F3FF-200D-2642-FE0F",
				non_qualified: "1F64B-1F3FF-200D-2642",
				image: "1f64b-1f3ff-200d-2642-fe0f.png",
				sheet_x: 33,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Raising Hand",
		b: "1F64B-200D-2642-FE0F",
		c: "1F64B-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			32,
			53
		],
		o: 4
	},
	octopus: {
		a: "Octopus",
		b: "1F419",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"creature",
			"ocean",
			"sea",
			"nature",
			"beach"
		],
		k: [
			11,
			54
		],
		o: 2
	},
	"woman-raising-hand": {
		skin_variations: {
			"1F3FB": {
				unified: "1F64B-1F3FB-200D-2640-FE0F",
				non_qualified: "1F64B-1F3FB-200D-2640",
				image: "1f64b-1f3fb-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F64B-1F3FC-200D-2640-FE0F",
				non_qualified: "1F64B-1F3FC-200D-2640",
				image: "1f64b-1f3fc-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F64B-1F3FD-200D-2640-FE0F",
				non_qualified: "1F64B-1F3FD-200D-2640",
				image: "1f64b-1f3fd-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F64B-1F3FE-200D-2640-FE0F",
				non_qualified: "1F64B-1F3FE-200D-2640",
				image: "1f64b-1f3fe-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F64B-1F3FF-200D-2640-FE0F",
				non_qualified: "1F64B-1F3FF-200D-2640",
				image: "1f64b-1f3ff-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F64B",
		a: "Woman Raising Hand",
		b: "1F64B-200D-2640-FE0F",
		c: "1F64B-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			32,
			47
		],
		o: 4
	},
	"flag-gf": {
		a: "French Guiana Flag",
		b: "1F1EC-1F1EB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			1
		],
		o: 2
	},
	tv: {
		a: "Television",
		b: "1F4FA",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"technology",
			"program",
			"oldschool",
			"show",
			"television"
		],
		k: [
			27,
			23
		],
		o: 2
	},
	imp: {
		a: "Imp",
		b: "1F47F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"devil",
			"angry",
			"horns"
		],
		k: [
			23,
			45
		],
		o: 2
	},
	cupcake: {
		a: "Cupcake",
		b: "1F9C1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			9
		],
		o: 11
	},
	racing_motorcycle: {
		a: "Racing Motorcycle",
		b: "1F3CD-FE0F",
		c: "1F3CD",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			10,
			32
		],
		o: 2
	},
	low_brightness: {
		a: "Low Brightness Symbol",
		b: "1F505",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sun",
			"afternoon",
			"warm",
			"summer"
		],
		k: [
			27,
			33
		],
		o: 2
	},
	shell: {
		a: "Spiral Shell",
		b: "1F41A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"sea",
			"beach"
		],
		k: [
			11,
			55
		],
		o: 2
	},
	"flag-gg": {
		a: "Guernsey Flag",
		b: "1F1EC-1F1EC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			2
		],
		o: 2
	},
	high_brightness: {
		a: "High Brightness Symbol",
		b: "1F506",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sun",
			"light"
		],
		k: [
			27,
			34
		],
		o: 2
	},
	deaf_person: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9CF-1F3FB",
				non_qualified: null,
				image: "1f9cf-1f3fb.png",
				sheet_x: 45,
				sheet_y: 11,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9CF-1F3FC",
				non_qualified: null,
				image: "1f9cf-1f3fc.png",
				sheet_x: 45,
				sheet_y: 12,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9CF-1F3FD",
				non_qualified: null,
				image: "1f9cf-1f3fd.png",
				sheet_x: 45,
				sheet_y: 13,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9CF-1F3FE",
				non_qualified: null,
				image: "1f9cf-1f3fe.png",
				sheet_x: 45,
				sheet_y: 14,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9CF-1F3FF",
				non_qualified: null,
				image: "1f9cf-1f3ff.png",
				sheet_x: 45,
				sheet_y: 15,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Deaf Person",
		b: "1F9CF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			45,
			10
		],
		o: 12
	},
	skull: {
		a: "Skull",
		b: "1F480",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"dead",
			"skeleton",
			"creepy",
			"death"
		],
		k: [
			23,
			46
		],
		o: 2
	},
	motor_scooter: {
		a: "Motor Scooter",
		b: "1F6F5",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"vehicle",
			"vespa",
			"sasha"
		],
		k: [
			36,
			54
		],
		o: 4
	},
	camera: {
		a: "Camera",
		b: "1F4F7",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"gadgets",
			"photography"
		],
		k: [
			27,
			20
		],
		o: 2
	},
	pie: {
		a: "Pie",
		b: "1F967",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			54
		],
		o: 5
	},
	"flag-gh": {
		a: "Ghana Flag",
		b: "1F1EC-1F1ED",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			3
		],
		o: 2
	},
	deaf_man: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9CF-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9CF-1F3FB-200D-2642",
				image: "1f9cf-1f3fb-200d-2642-fe0f.png",
				sheet_x: 45,
				sheet_y: 5,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9CF-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9CF-1F3FC-200D-2642",
				image: "1f9cf-1f3fc-200d-2642-fe0f.png",
				sheet_x: 45,
				sheet_y: 6,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9CF-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9CF-1F3FD-200D-2642",
				image: "1f9cf-1f3fd-200d-2642-fe0f.png",
				sheet_x: 45,
				sheet_y: 7,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9CF-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9CF-1F3FE-200D-2642",
				image: "1f9cf-1f3fe-200d-2642-fe0f.png",
				sheet_x: 45,
				sheet_y: 8,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9CF-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9CF-1F3FF-200D-2642",
				image: "1f9cf-1f3ff-200d-2642-fe0f.png",
				sheet_x: 45,
				sheet_y: 9,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Deaf Man",
		b: "1F9CF-200D-2642-FE0F",
		c: "1F9CF-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			45,
			4
		],
		o: 12
	},
	skull_and_crossbones: {
		a: "Skull and Crossbones",
		b: "2620-FE0F",
		c: "2620",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"poison",
			"danger",
			"deadly",
			"scary",
			"death",
			"pirate",
			"evil"
		],
		k: [
			53,
			8
		],
		o: 2
	},
	camera_with_flash: {
		a: "Camera with Flash",
		b: "1F4F8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			27,
			21
		],
		o: 2
	},
	signal_strength: {
		a: "Antenna with Bars",
		b: "1F4F6",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"reception",
			"phone",
			"internet",
			"connection",
			"wifi",
			"bluetooth",
			"bars"
		],
		k: [
			27,
			19
		],
		o: 2
	},
	chocolate_bar: {
		a: "Chocolate Bar",
		b: "1F36B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"snack",
			"dessert",
			"sweet"
		],
		k: [
			7,
			10
		],
		o: 2
	},
	manual_wheelchair: {
		a: "Manual Wheelchair",
		b: "1F9BD",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			5
		],
		o: 12
	},
	snail: {
		a: "Snail",
		b: "1F40C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"slow",
			"animal",
			"shell"
		],
		k: [
			11,
			40
		],
		o: 2
	},
	motorized_wheelchair: {
		a: "Motorized Wheelchair",
		b: "1F9BC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			4
		],
		o: 12
	},
	"flag-gi": {
		a: "Gibraltar Flag",
		b: "1F1EC-1F1EE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			4
		],
		o: 2
	},
	hankey: {
		a: "Pile of Poo",
		b: "1F4A9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			25,
			51
		],
		n: [
			"poop",
			"shit"
		],
		o: 2
	},
	vibration_mode: {
		a: "Vibration Mode",
		b: "1F4F3",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"orange-square",
			"phone"
		],
		k: [
			27,
			16
		],
		o: 2
	},
	deaf_woman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9CF-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9CF-1F3FB-200D-2640",
				image: "1f9cf-1f3fb-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 56,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9CF-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9CF-1F3FC-200D-2640",
				image: "1f9cf-1f3fc-200d-2640-fe0f.png",
				sheet_x: 45,
				sheet_y: 0,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9CF-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9CF-1F3FD-200D-2640",
				image: "1f9cf-1f3fd-200d-2640-fe0f.png",
				sheet_x: 45,
				sheet_y: 1,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9CF-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9CF-1F3FE-200D-2640",
				image: "1f9cf-1f3fe-200d-2640-fe0f.png",
				sheet_x: 45,
				sheet_y: 2,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9CF-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9CF-1F3FF-200D-2640",
				image: "1f9cf-1f3ff-200d-2640-fe0f.png",
				sheet_x: 45,
				sheet_y: 3,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Deaf Woman",
		b: "1F9CF-200D-2640-FE0F",
		c: "1F9CF-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			55
		],
		o: 12
	},
	butterfly: {
		a: "Butterfly",
		b: "1F98B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"insect",
			"nature",
			"caterpillar"
		],
		k: [
			42,
			29
		],
		o: 4
	},
	video_camera: {
		a: "Video Camera",
		b: "1F4F9",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"film",
			"record"
		],
		k: [
			27,
			22
		],
		o: 2
	},
	candy: {
		a: "Candy",
		b: "1F36C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"snack",
			"dessert",
			"sweet",
			"lolly"
		],
		k: [
			7,
			11
		],
		o: 2
	},
	auto_rickshaw: {
		a: "Auto Rickshaw",
		b: "1F6FA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			2
		],
		o: 12
	},
	bow: {
		skin_variations: {
			"1F3FB": {
				unified: "1F647-1F3FB",
				non_qualified: null,
				image: "1f647-1f3fb.png",
				sheet_x: 32,
				sheet_y: 39,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F647-1F3FC",
				non_qualified: null,
				image: "1f647-1f3fc.png",
				sheet_x: 32,
				sheet_y: 40,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F647-1F3FD",
				non_qualified: null,
				image: "1f647-1f3fd.png",
				sheet_x: 32,
				sheet_y: 41,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F647-1F3FE",
				non_qualified: null,
				image: "1f647-1f3fe.png",
				sheet_x: 32,
				sheet_y: 42,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F647-1F3FF",
				non_qualified: null,
				image: "1f647-1f3ff.png",
				sheet_x: 32,
				sheet_y: 43,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F647-200D-2642-FE0F",
		a: "Person Bowing Deeply",
		b: "1F647",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			32,
			38
		],
		o: 2
	},
	mobile_phone_off: {
		a: "Mobile Phone off",
		b: "1F4F4",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"mute",
			"orange-square",
			"silence",
			"quiet"
		],
		k: [
			27,
			17
		],
		o: 2
	},
	clown_face: {
		a: "Clown Face",
		b: "1F921",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face"
		],
		k: [
			38,
			18
		],
		o: 4
	},
	lollipop: {
		a: "Lollipop",
		b: "1F36D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"snack",
			"candy",
			"sweet"
		],
		k: [
			7,
			12
		],
		o: 2
	},
	"flag-gl": {
		a: "Greenland Flag",
		b: "1F1EC-1F1F1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			5
		],
		o: 2
	},
	vhs: {
		a: "Videocassette",
		b: "1F4FC",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"record",
			"video",
			"oldschool",
			"90s",
			"80s"
		],
		k: [
			27,
			25
		],
		o: 2
	},
	bug: {
		a: "Bug",
		b: "1F41B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"insect",
			"nature",
			"worm"
		],
		k: [
			11,
			56
		],
		o: 2
	},
	bike: {
		a: "Bicycle",
		b: "1F6B2",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sports",
			"bicycle",
			"exercise",
			"hipster"
		],
		k: [
			35,
			9
		],
		o: 2
	},
	"man-bowing": {
		skin_variations: {
			"1F3FB": {
				unified: "1F647-1F3FB-200D-2642-FE0F",
				non_qualified: "1F647-1F3FB-200D-2642",
				image: "1f647-1f3fb-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 33,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F647-1F3FC-200D-2642-FE0F",
				non_qualified: "1F647-1F3FC-200D-2642",
				image: "1f647-1f3fc-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 34,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F647-1F3FD-200D-2642-FE0F",
				non_qualified: "1F647-1F3FD-200D-2642",
				image: "1f647-1f3fd-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 35,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F647-1F3FE-200D-2642-FE0F",
				non_qualified: "1F647-1F3FE-200D-2642",
				image: "1f647-1f3fe-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 36,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F647-1F3FF-200D-2642-FE0F",
				non_qualified: "1F647-1F3FF-200D-2642",
				image: "1f647-1f3ff-200d-2642-fe0f.png",
				sheet_x: 32,
				sheet_y: 37,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F647",
		a: "Man Bowing",
		b: "1F647-200D-2642-FE0F",
		c: "1F647-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			32,
			32
		],
		o: 4
	},
	female_sign: {
		a: "Female Sign",
		b: "2640-FE0F",
		c: "2640",
		d: false,
		e: true,
		f: true,
		h: true,
		k: [
			53,
			18
		],
		o: 4
	},
	japanese_ogre: {
		a: "Japanese Ogre",
		b: "1F479",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"monster",
			"red",
			"mask",
			"halloween",
			"scary",
			"creepy",
			"devil",
			"demon",
			"japanese",
			"ogre"
		],
		k: [
			23,
			34
		],
		o: 2
	},
	custard: {
		a: "Custard",
		b: "1F36E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"dessert",
			"food"
		],
		k: [
			7,
			13
		],
		o: 2
	},
	ant: {
		a: "Ant",
		b: "1F41C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"insect",
			"nature",
			"bug"
		],
		k: [
			12,
			0
		],
		o: 2
	},
	mag: {
		a: "Left-Pointing Magnifying Glass",
		b: "1F50D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"search",
			"zoom",
			"find",
			"detective"
		],
		k: [
			27,
			41
		],
		o: 2
	},
	"flag-gm": {
		a: "Gambia Flag",
		b: "1F1EC-1F1F2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			6
		],
		o: 2
	},
	honey_pot: {
		a: "Honey Pot",
		b: "1F36F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"bees",
			"sweet",
			"kitchen"
		],
		k: [
			7,
			14
		],
		o: 2
	},
	"woman-bowing": {
		skin_variations: {
			"1F3FB": {
				unified: "1F647-1F3FB-200D-2640-FE0F",
				non_qualified: "1F647-1F3FB-200D-2640",
				image: "1f647-1f3fb-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 27,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F647-1F3FC-200D-2640-FE0F",
				non_qualified: "1F647-1F3FC-200D-2640",
				image: "1f647-1f3fc-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 28,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F647-1F3FD-200D-2640-FE0F",
				non_qualified: "1F647-1F3FD-200D-2640",
				image: "1f647-1f3fd-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 29,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F647-1F3FE-200D-2640-FE0F",
				non_qualified: "1F647-1F3FE-200D-2640",
				image: "1f647-1f3fe-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F647-1F3FF-200D-2640-FE0F",
				non_qualified: "1F647-1F3FF-200D-2640",
				image: "1f647-1f3ff-200d-2640-fe0f.png",
				sheet_x: 32,
				sheet_y: 31,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Bowing",
		b: "1F647-200D-2640-FE0F",
		c: "1F647-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			32,
			26
		],
		o: 4
	},
	male_sign: {
		a: "Male Sign",
		b: "2642-FE0F",
		c: "2642",
		d: false,
		e: true,
		f: true,
		h: true,
		k: [
			53,
			19
		],
		o: 4
	},
	mag_right: {
		a: "Right-Pointing Magnifying Glass",
		b: "1F50E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"search",
			"zoom",
			"find",
			"detective"
		],
		k: [
			27,
			42
		],
		o: 2
	},
	japanese_goblin: {
		a: "Japanese Goblin",
		b: "1F47A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"red",
			"evil",
			"mask",
			"monster",
			"scary",
			"creepy",
			"japanese",
			"goblin"
		],
		k: [
			23,
			35
		],
		o: 2
	},
	scooter: {
		a: "Scooter",
		b: "1F6F4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			36,
			53
		],
		o: 4
	},
	bee: {
		a: "Honeybee",
		b: "1F41D",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			12,
			1
		],
		n: [
			"honeybee"
		],
		o: 2
	},
	"flag-gn": {
		a: "Guinea Flag",
		b: "1F1EC-1F1F3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			7
		],
		o: 2
	},
	candle: {
		a: "Candle",
		b: "1F56F-FE0F",
		c: "1F56F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fire",
			"wax"
		],
		k: [
			29,
			6
		],
		o: 2
	},
	skateboard: {
		a: "Skateboard",
		b: "1F6F9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			1
		],
		o: 11
	},
	medical_symbol: {
		a: "Medical Symbol",
		b: "2695-FE0F",
		c: "2695",
		d: false,
		e: true,
		f: true,
		h: true,
		k: [
			53,
			44
		],
		n: [
			"staff_of_aesculapius"
		],
		o: 4
	},
	ghost: {
		a: "Ghost",
		b: "1F47B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"halloween",
			"spooky",
			"scary"
		],
		k: [
			23,
			36
		],
		o: 2
	},
	beetle: {
		a: "Lady Beetle",
		b: "1F41E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"insect",
			"nature",
			"ladybug"
		],
		k: [
			12,
			2
		],
		o: 2
	},
	face_palm: {
		skin_variations: {
			"1F3FB": {
				unified: "1F926-1F3FB",
				non_qualified: null,
				image: "1f926-1f3fb.png",
				sheet_x: 38,
				sheet_y: 36,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F926-1F3FC",
				non_qualified: null,
				image: "1f926-1f3fc.png",
				sheet_x: 38,
				sheet_y: 37,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F926-1F3FD",
				non_qualified: null,
				image: "1f926-1f3fd.png",
				sheet_x: 38,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F926-1F3FE",
				non_qualified: null,
				image: "1f926-1f3fe.png",
				sheet_x: 38,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F926-1F3FF",
				non_qualified: null,
				image: "1f926-1f3ff.png",
				sheet_x: 38,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		a: "Face Palm",
		b: "1F926",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			38,
			35
		],
		o: 4
	},
	"flag-gp": {
		a: "Guadeloupe Flag",
		b: "1F1EC-1F1F5",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			8
		],
		o: 2
	},
	baby_bottle: {
		a: "Baby Bottle",
		b: "1F37C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"food",
			"container",
			"milk"
		],
		k: [
			7,
			27
		],
		o: 2
	},
	infinity: {
		a: "Infinity",
		b: "267E-FE0F",
		c: "267E",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			53,
			39
		],
		o: 11
	},
	glass_of_milk: {
		a: "Glass of Milk",
		b: "1F95B",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			42
		],
		o: 4
	},
	"man-facepalming": {
		skin_variations: {
			"1F3FB": {
				unified: "1F926-1F3FB-200D-2642-FE0F",
				non_qualified: "1F926-1F3FB-200D-2642",
				image: "1f926-1f3fb-200d-2642-fe0f.png",
				sheet_x: 38,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F926-1F3FC-200D-2642-FE0F",
				non_qualified: "1F926-1F3FC-200D-2642",
				image: "1f926-1f3fc-200d-2642-fe0f.png",
				sheet_x: 38,
				sheet_y: 31,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F926-1F3FD-200D-2642-FE0F",
				non_qualified: "1F926-1F3FD-200D-2642",
				image: "1f926-1f3fd-200d-2642-fe0f.png",
				sheet_x: 38,
				sheet_y: 32,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F926-1F3FE-200D-2642-FE0F",
				non_qualified: "1F926-1F3FE-200D-2642",
				image: "1f926-1f3fe-200d-2642-fe0f.png",
				sheet_x: 38,
				sheet_y: 33,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F926-1F3FF-200D-2642-FE0F",
				non_qualified: "1F926-1F3FF-200D-2642",
				image: "1f926-1f3ff-200d-2642-fe0f.png",
				sheet_x: 38,
				sheet_y: 34,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Facepalming",
		b: "1F926-200D-2642-FE0F",
		c: "1F926-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			38,
			29
		],
		o: 4
	},
	cricket: {
		a: "Cricket",
		b: "1F997",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sports"
		],
		k: [
			42,
			41
		],
		o: 5
	},
	busstop: {
		a: "Bus Stop",
		b: "1F68F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"transportation",
			"wait"
		],
		k: [
			34,
			14
		],
		o: 2
	},
	"flag-gq": {
		a: "Equatorial Guinea Flag",
		b: "1F1EC-1F1F6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			9
		],
		o: 2
	},
	alien: {
		a: "Extraterrestrial Alien",
		b: "1F47D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"UFO",
			"paul",
			"weird",
			"outer_space"
		],
		k: [
			23,
			43
		],
		o: 2
	},
	bulb: {
		a: "Electric Light Bulb",
		b: "1F4A1",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"light",
			"electricity",
			"idea"
		],
		k: [
			25,
			43
		],
		o: 2
	},
	"woman-facepalming": {
		skin_variations: {
			"1F3FB": {
				unified: "1F926-1F3FB-200D-2640-FE0F",
				non_qualified: "1F926-1F3FB-200D-2640",
				image: "1f926-1f3fb-200d-2640-fe0f.png",
				sheet_x: 38,
				sheet_y: 24,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F926-1F3FC-200D-2640-FE0F",
				non_qualified: "1F926-1F3FC-200D-2640",
				image: "1f926-1f3fc-200d-2640-fe0f.png",
				sheet_x: 38,
				sheet_y: 25,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F926-1F3FD-200D-2640-FE0F",
				non_qualified: "1F926-1F3FD-200D-2640",
				image: "1f926-1f3fd-200d-2640-fe0f.png",
				sheet_x: 38,
				sheet_y: 26,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F926-1F3FE-200D-2640-FE0F",
				non_qualified: "1F926-1F3FE-200D-2640",
				image: "1f926-1f3fe-200d-2640-fe0f.png",
				sheet_x: 38,
				sheet_y: 27,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F926-1F3FF-200D-2640-FE0F",
				non_qualified: "1F926-1F3FF-200D-2640",
				image: "1f926-1f3ff-200d-2640-fe0f.png",
				sheet_x: 38,
				sheet_y: 28,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Facepalming",
		b: "1F926-200D-2640-FE0F",
		c: "1F926-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			38,
			23
		],
		o: 4
	},
	spider: {
		a: "Spider",
		b: "1F577-FE0F",
		c: "1F577",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"arachnid"
		],
		k: [
			29,
			34
		],
		o: 2
	},
	space_invader: {
		a: "Alien Monster",
		b: "1F47E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"game",
			"arcade",
			"play"
		],
		k: [
			23,
			44
		],
		o: 2
	},
	motorway: {
		a: "Motorway",
		b: "1F6E3-FE0F",
		c: "1F6E3",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"road",
			"cupertino",
			"interstate",
			"highway"
		],
		k: [
			36,
			45
		],
		o: 2
	},
	"flag-gr": {
		a: "Greece Flag",
		b: "1F1EC-1F1F7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			10
		],
		o: 2
	},
	recycle: {
		a: "Black Universal Recycling Symbol",
		b: "267B-FE0F",
		c: "267B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"arrow",
			"environment",
			"garbage",
			"trash"
		],
		k: [
			53,
			38
		],
		o: 2
	},
	coffee: {
		a: "Hot Beverage",
		b: "2615",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"beverage",
			"caffeine",
			"latte",
			"espresso"
		],
		k: [
			53,
			0
		],
		o: 2
	},
	flashlight: {
		a: "Electric Torch",
		b: "1F526",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"dark",
			"camping",
			"sight",
			"night"
		],
		k: [
			28,
			9
		],
		o: 2
	},
	spider_web: {
		a: "Spider Web",
		b: "1F578-FE0F",
		c: "1F578",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"insect",
			"arachnid",
			"silk"
		],
		k: [
			29,
			35
		],
		o: 2
	},
	izakaya_lantern: {
		a: "Izakaya Lantern",
		b: "1F3EE",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"light",
			"paper",
			"halloween",
			"spooky"
		],
		k: [
			11,
			8
		],
		n: [
			"lantern"
		],
		o: 2
	},
	"flag-gs": {
		a: "South Georgia & South Sandwich Islands Flag",
		b: "1F1EC-1F1F8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			11
		],
		o: 2
	},
	shrug: {
		skin_variations: {
			"1F3FB": {
				unified: "1F937-1F3FB",
				non_qualified: null,
				image: "1f937-1f3fb.png",
				sheet_x: 39,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F937-1F3FC",
				non_qualified: null,
				image: "1f937-1f3fc.png",
				sheet_x: 39,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F937-1F3FD",
				non_qualified: null,
				image: "1f937-1f3fd.png",
				sheet_x: 39,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F937-1F3FE",
				non_qualified: null,
				image: "1f937-1f3fe.png",
				sheet_x: 39,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F937-1F3FF",
				non_qualified: null,
				image: "1f937-1f3ff.png",
				sheet_x: 39,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		a: "Shrug",
		b: "1F937",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			39,
			47
		],
		o: 4
	},
	fleur_de_lis: {
		a: "Fleur De Lis",
		b: "269C-FE0F",
		c: "269C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"decorative",
			"scout"
		],
		k: [
			53,
			49
		],
		o: 2
	},
	robot_face: {
		a: "Robot Face",
		b: "1F916",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			29
		],
		o: 2
	},
	railway_track: {
		a: "Railway Track",
		b: "1F6E4-FE0F",
		c: "1F6E4",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"train",
			"transportation"
		],
		k: [
			36,
			46
		],
		o: 2
	},
	tea: {
		a: "Teacup Without Handle",
		b: "1F375",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"drink",
			"bowl",
			"breakfast",
			"green",
			"british"
		],
		k: [
			7,
			20
		],
		o: 2
	},
	"flag-gt": {
		a: "Guatemala Flag",
		b: "1F1EC-1F1F9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			12
		],
		o: 2
	},
	oil_drum: {
		a: "Oil Drum",
		b: "1F6E2-FE0F",
		c: "1F6E2",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"barrell"
		],
		k: [
			36,
			44
		],
		o: 2
	},
	diya_lamp: {
		a: "Diya Lamp",
		b: "1FA94",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			52,
			8
		],
		o: 12
	},
	sake: {
		a: "Sake Bottle and Cup",
		b: "1F376",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"wine",
			"drink",
			"drunk",
			"beverage",
			"japanese",
			"alcohol",
			"booze"
		],
		k: [
			7,
			21
		],
		o: 2
	},
	trident: {
		a: "Trident Emblem",
		b: "1F531",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"weapon",
			"spear"
		],
		k: [
			28,
			20
		],
		o: 2
	},
	"man-shrugging": {
		skin_variations: {
			"1F3FB": {
				unified: "1F937-1F3FB-200D-2642-FE0F",
				non_qualified: "1F937-1F3FB-200D-2642",
				image: "1f937-1f3fb-200d-2642-fe0f.png",
				sheet_x: 39,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F937-1F3FC-200D-2642-FE0F",
				non_qualified: "1F937-1F3FC-200D-2642",
				image: "1f937-1f3fc-200d-2642-fe0f.png",
				sheet_x: 39,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F937-1F3FD-200D-2642-FE0F",
				non_qualified: "1F937-1F3FD-200D-2642",
				image: "1f937-1f3fd-200d-2642-fe0f.png",
				sheet_x: 39,
				sheet_y: 44,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F937-1F3FE-200D-2642-FE0F",
				non_qualified: "1F937-1F3FE-200D-2642",
				image: "1f937-1f3fe-200d-2642-fe0f.png",
				sheet_x: 39,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F937-1F3FF-200D-2642-FE0F",
				non_qualified: "1F937-1F3FF-200D-2642",
				image: "1f937-1f3ff-200d-2642-fe0f.png",
				sheet_x: 39,
				sheet_y: 46,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Shrugging",
		b: "1F937-200D-2642-FE0F",
		c: "1F937-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			39,
			41
		],
		o: 4
	},
	smiley_cat: {
		a: "Smiling Cat Face with Open Mouth",
		b: "1F63A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"cats",
			"happy",
			"smile"
		],
		k: [
			31,
			36
		],
		o: 2
	},
	scorpion: {
		a: "Scorpion",
		b: "1F982",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"arachnid"
		],
		k: [
			42,
			20
		],
		o: 2
	},
	"woman-shrugging": {
		skin_variations: {
			"1F3FB": {
				unified: "1F937-1F3FB-200D-2640-FE0F",
				non_qualified: "1F937-1F3FB-200D-2640",
				image: "1f937-1f3fb-200d-2640-fe0f.png",
				sheet_x: 39,
				sheet_y: 36,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F937-1F3FC-200D-2640-FE0F",
				non_qualified: "1F937-1F3FC-200D-2640",
				image: "1f937-1f3fc-200d-2640-fe0f.png",
				sheet_x: 39,
				sheet_y: 37,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F937-1F3FD-200D-2640-FE0F",
				non_qualified: "1F937-1F3FD-200D-2640",
				image: "1f937-1f3fd-200d-2640-fe0f.png",
				sheet_x: 39,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F937-1F3FE-200D-2640-FE0F",
				non_qualified: "1F937-1F3FE-200D-2640",
				image: "1f937-1f3fe-200d-2640-fe0f.png",
				sheet_x: 39,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F937-1F3FF-200D-2640-FE0F",
				non_qualified: "1F937-1F3FF-200D-2640",
				image: "1f937-1f3ff-200d-2640-fe0f.png",
				sheet_x: 39,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Shrugging",
		b: "1F937-200D-2640-FE0F",
		c: "1F937-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			39,
			35
		],
		o: 4
	},
	notebook_with_decorative_cover: {
		a: "Notebook with Decorative Cover",
		b: "1F4D4",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"classroom",
			"notes",
			"record",
			"paper",
			"study"
		],
		k: [
			26,
			42
		],
		o: 2
	},
	fuelpump: {
		a: "Fuel Pump",
		b: "26FD",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"gas station",
			"petroleum"
		],
		k: [
			54,
			38
		],
		o: 2
	},
	name_badge: {
		a: "Name Badge",
		b: "1F4DB",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"fire",
			"forbid"
		],
		k: [
			26,
			49
		],
		o: 2
	},
	mosquito: {
		a: "Mosquito",
		b: "1F99F",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			49
		],
		o: 11
	},
	"flag-gu": {
		a: "Guam Flag",
		b: "1F1EC-1F1FA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			13
		],
		o: 2
	},
	smile_cat: {
		a: "Grinning Cat Face with Smiling Eyes",
		b: "1F638",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"cats",
			"smile"
		],
		k: [
			31,
			34
		],
		o: 2
	},
	champagne: {
		a: "Bottle with Popping Cork",
		b: "1F37E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"drink",
			"wine",
			"bottle",
			"celebration"
		],
		k: [
			7,
			29
		],
		o: 2
	},
	joy_cat: {
		a: "Cat Face with Tears of Joy",
		b: "1F639",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"cats",
			"haha",
			"happy",
			"tears"
		],
		k: [
			31,
			35
		],
		o: 2
	},
	closed_book: {
		a: "Closed Book",
		b: "1F4D5",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"read",
			"library",
			"knowledge",
			"textbook",
			"learn"
		],
		k: [
			26,
			43
		],
		o: 2
	},
	health_worker: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-2695-FE0F",
				non_qualified: "1F9D1-1F3FB-200D-2695",
				image: "1f9d1-1f3fb-200d-2695-fe0f.png",
				sheet_x: 47,
				sheet_y: 50,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-2695-FE0F",
				non_qualified: "1F9D1-1F3FC-200D-2695",
				image: "1f9d1-1f3fc-200d-2695-fe0f.png",
				sheet_x: 47,
				sheet_y: 51,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-2695-FE0F",
				non_qualified: "1F9D1-1F3FD-200D-2695",
				image: "1f9d1-1f3fd-200d-2695-fe0f.png",
				sheet_x: 47,
				sheet_y: 52,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-2695-FE0F",
				non_qualified: "1F9D1-1F3FE-200D-2695",
				image: "1f9d1-1f3fe-200d-2695-fe0f.png",
				sheet_x: 47,
				sheet_y: 53,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-2695-FE0F",
				non_qualified: "1F9D1-1F3FF-200D-2695",
				image: "1f9d1-1f3ff-200d-2695-fe0f.png",
				sheet_x: 47,
				sheet_y: 54,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Health Worker",
		b: "1F9D1-200D-2695-FE0F",
		c: "1F9D1-200D-2695",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			47,
			49
		],
		o: 12
	},
	rotating_light: {
		a: "Police Cars Revolving Light",
		b: "1F6A8",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"police",
			"ambulance",
			"911",
			"emergency",
			"alert",
			"error",
			"pinged",
			"law",
			"legal"
		],
		k: [
			34,
			56
		],
		o: 2
	},
	microbe: {
		a: "Microbe",
		b: "1F9A0",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			42,
			50
		],
		o: 11
	},
	"flag-gw": {
		a: "Guinea-Bissau Flag",
		b: "1F1EC-1F1FC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			14
		],
		o: 2
	},
	wine_glass: {
		a: "Wine Glass",
		b: "1F377",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"drink",
			"beverage",
			"drunk",
			"alcohol",
			"booze"
		],
		k: [
			7,
			22
		],
		o: 2
	},
	beginner: {
		a: "Japanese Symbol for Beginner",
		b: "1F530",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"badge",
			"shield"
		],
		k: [
			28,
			19
		],
		o: 2
	},
	bouquet: {
		a: "Bouquet",
		b: "1F490",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"flowers",
			"nature",
			"spring"
		],
		k: [
			25,
			26
		],
		o: 2
	},
	heart_eyes_cat: {
		a: "Smiling Cat Face with Heart-Shaped Eyes",
		b: "1F63B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"love",
			"like",
			"affection",
			"cats",
			"valentines",
			"heart"
		],
		k: [
			31,
			37
		],
		o: 2
	},
	"male-doctor": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-2695-FE0F",
				non_qualified: "1F468-1F3FB-200D-2695",
				image: "1f468-1f3fb-200d-2695-fe0f.png",
				sheet_x: 17,
				sheet_y: 3,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-2695-FE0F",
				non_qualified: "1F468-1F3FC-200D-2695",
				image: "1f468-1f3fc-200d-2695-fe0f.png",
				sheet_x: 17,
				sheet_y: 4,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-2695-FE0F",
				non_qualified: "1F468-1F3FD-200D-2695",
				image: "1f468-1f3fd-200d-2695-fe0f.png",
				sheet_x: 17,
				sheet_y: 5,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-2695-FE0F",
				non_qualified: "1F468-1F3FE-200D-2695",
				image: "1f468-1f3fe-200d-2695-fe0f.png",
				sheet_x: 17,
				sheet_y: 6,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-2695-FE0F",
				non_qualified: "1F468-1F3FF-200D-2695",
				image: "1f468-1f3ff-200d-2695-fe0f.png",
				sheet_x: 17,
				sheet_y: 7,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Doctor",
		b: "1F468-200D-2695-FE0F",
		c: "1F468-200D-2695",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			17,
			2
		],
		o: 4
	},
	book: {
		a: "Open Book",
		b: "1F4D6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			26,
			44
		],
		n: [
			"open_book"
		],
		o: 2
	},
	traffic_light: {
		a: "Horizontal Traffic Light",
		b: "1F6A5",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"transportation",
			"signal"
		],
		k: [
			34,
			53
		],
		o: 2
	},
	cocktail: {
		a: "Cocktail Glass",
		b: "1F378",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"drink",
			"drunk",
			"alcohol",
			"beverage",
			"booze",
			"mojito"
		],
		k: [
			7,
			23
		],
		o: 2
	},
	o: {
		a: "Heavy Large Circle",
		b: "2B55",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"circle",
			"round"
		],
		k: [
			55,
			43
		],
		o: 2
	},
	"flag-gy": {
		a: "Guyana Flag",
		b: "1F1EC-1F1FE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			15
		],
		o: 2
	},
	"female-doctor": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-2695-FE0F",
				non_qualified: "1F469-1F3FB-200D-2695",
				image: "1f469-1f3fb-200d-2695-fe0f.png",
				sheet_x: 19,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-2695-FE0F",
				non_qualified: "1F469-1F3FC-200D-2695",
				image: "1f469-1f3fc-200d-2695-fe0f.png",
				sheet_x: 19,
				sheet_y: 46,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-2695-FE0F",
				non_qualified: "1F469-1F3FD-200D-2695",
				image: "1f469-1f3fd-200d-2695-fe0f.png",
				sheet_x: 19,
				sheet_y: 47,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-2695-FE0F",
				non_qualified: "1F469-1F3FE-200D-2695",
				image: "1f469-1f3fe-200d-2695-fe0f.png",
				sheet_x: 19,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-2695-FE0F",
				non_qualified: "1F469-1F3FF-200D-2695",
				image: "1f469-1f3ff-200d-2695-fe0f.png",
				sheet_x: 19,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Doctor",
		b: "1F469-200D-2695-FE0F",
		c: "1F469-200D-2695",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			19,
			44
		],
		o: 4
	},
	smirk_cat: {
		a: "Cat Face with Wry Smile",
		b: "1F63C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"cats",
			"smirk"
		],
		k: [
			31,
			38
		],
		o: 2
	},
	green_book: {
		a: "Green Book",
		b: "1F4D7",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"read",
			"library",
			"knowledge",
			"study"
		],
		k: [
			26,
			45
		],
		o: 2
	},
	cherry_blossom: {
		a: "Cherry Blossom",
		b: "1F338",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"plant",
			"spring",
			"flower"
		],
		k: [
			6,
			16
		],
		o: 2
	},
	"flag-hk": {
		a: "Hong Kong Sar China Flag",
		b: "1F1ED-1F1F0",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			16
		],
		o: 2
	},
	vertical_traffic_light: {
		a: "Vertical Traffic Light",
		b: "1F6A6",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"transportation",
			"driving"
		],
		k: [
			34,
			54
		],
		o: 2
	},
	white_check_mark: {
		a: "White Heavy Check Mark",
		b: "2705",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"green-square",
			"ok",
			"agree",
			"vote",
			"election",
			"answer",
			"tick"
		],
		k: [
			54,
			40
		],
		o: 2
	},
	tropical_drink: {
		a: "Tropical Drink",
		b: "1F379",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"beverage",
			"cocktail",
			"summer",
			"beach",
			"alcohol",
			"booze",
			"mojito"
		],
		k: [
			7,
			24
		],
		o: 2
	},
	kissing_cat: {
		a: "Kissing Cat Face with Closed Eyes",
		b: "1F63D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"cats",
			"kiss"
		],
		k: [
			31,
			39
		],
		o: 2
	},
	"flag-hm": {
		a: "Heard & Mcdonald Islands Flag",
		b: "1F1ED-1F1F2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			17
		],
		o: 2
	},
	octagonal_sign: {
		a: "Octagonal Sign",
		b: "1F6D1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			36,
			39
		],
		o: 4
	},
	white_flower: {
		a: "White Flower",
		b: "1F4AE",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"japanese",
			"spring"
		],
		k: [
			26,
			4
		],
		o: 2
	},
	ballot_box_with_check: {
		a: "Ballot Box with Check",
		b: "2611-FE0F",
		c: "2611",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"ok",
			"agree",
			"confirm",
			"black-square",
			"vote",
			"election",
			"yes",
			"tick"
		],
		k: [
			52,
			55
		],
		o: 2
	},
	student: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F393",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f393.png",
				sheet_x: 45,
				sheet_y: 30,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F393",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f393.png",
				sheet_x: 45,
				sheet_y: 31,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F393",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f393.png",
				sheet_x: 45,
				sheet_y: 32,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F393",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f393.png",
				sheet_x: 45,
				sheet_y: 33,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F393",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f393.png",
				sheet_x: 45,
				sheet_y: 34,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Student",
		b: "1F9D1-200D-1F393",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			45,
			29
		],
		o: 12
	},
	blue_book: {
		a: "Blue Book",
		b: "1F4D8",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"read",
			"library",
			"knowledge",
			"learn",
			"study"
		],
		k: [
			26,
			46
		],
		o: 2
	},
	beer: {
		a: "Beer Mug",
		b: "1F37A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"relax",
			"beverage",
			"drink",
			"drunk",
			"party",
			"pub",
			"summer",
			"alcohol",
			"booze"
		],
		k: [
			7,
			25
		],
		o: 2
	},
	construction: {
		a: "Construction Sign",
		b: "1F6A7",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"wip",
			"progress",
			"caution",
			"warning"
		],
		k: [
			34,
			55
		],
		o: 2
	},
	rosette: {
		a: "Rosette",
		b: "1F3F5-FE0F",
		c: "1F3F5",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"flower",
			"decoration",
			"military"
		],
		k: [
			11,
			18
		],
		o: 2
	},
	heavy_check_mark: {
		a: "Heavy Check Mark",
		b: "2714-FE0F",
		c: "2714",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"ok",
			"nike",
			"answer",
			"yes",
			"tick"
		],
		k: [
			55,
			12
		],
		o: 2
	},
	scream_cat: {
		a: "Weary Cat Face",
		b: "1F640",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"cats",
			"munch",
			"scared",
			"scream"
		],
		k: [
			31,
			42
		],
		o: 2
	},
	orange_book: {
		a: "Orange Book",
		b: "1F4D9",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"read",
			"library",
			"knowledge",
			"textbook",
			"study"
		],
		k: [
			26,
			47
		],
		o: 2
	},
	beers: {
		a: "Clinking Beer Mugs",
		b: "1F37B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"relax",
			"beverage",
			"drink",
			"drunk",
			"party",
			"pub",
			"summer",
			"alcohol",
			"booze"
		],
		k: [
			7,
			26
		],
		o: 2
	},
	"male-student": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F393",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f393.png",
				sheet_x: 14,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F393",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f393.png",
				sheet_x: 14,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F393",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f393.png",
				sheet_x: 14,
				sheet_y: 53,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F393",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f393.png",
				sheet_x: 14,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F393",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f393.png",
				sheet_x: 14,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Student",
		b: "1F468-200D-1F393",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			14,
			50
		],
		o: 4
	},
	"flag-hn": {
		a: "Honduras Flag",
		b: "1F1ED-1F1F3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			18
		],
		o: 2
	},
	crying_cat_face: {
		a: "Crying Cat Face",
		b: "1F63F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"tears",
			"weep",
			"sad",
			"cats",
			"upset",
			"cry"
		],
		k: [
			31,
			41
		],
		o: 2
	},
	anchor: {
		a: "Anchor",
		b: "2693",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"ship",
			"ferry",
			"sea",
			"boat"
		],
		k: [
			53,
			42
		],
		o: 2
	},
	"flag-hr": {
		a: "Croatia Flag",
		b: "1F1ED-1F1F7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			19
		],
		o: 2
	},
	heavy_multiplication_x: {
		a: "Heavy Multiplication X",
		b: "2716-FE0F",
		c: "2716",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"math",
			"calculation"
		],
		k: [
			55,
			13
		],
		o: 2
	},
	"female-student": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F393",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f393.png",
				sheet_x: 17,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F393",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f393.png",
				sheet_x: 17,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F393",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f393.png",
				sheet_x: 17,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F393",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f393.png",
				sheet_x: 17,
				sheet_y: 44,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F393",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f393.png",
				sheet_x: 17,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Student",
		b: "1F469-200D-1F393",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			17,
			40
		],
		o: 4
	},
	rose: {
		a: "Rose",
		b: "1F339",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"flowers",
			"valentines",
			"love",
			"spring"
		],
		k: [
			6,
			17
		],
		o: 2
	},
	books: {
		a: "Books",
		b: "1F4DA",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"literature",
			"library",
			"study"
		],
		k: [
			26,
			48
		],
		o: 2
	},
	clinking_glasses: {
		a: "Clinking Glasses",
		b: "1F942",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"beverage",
			"drink",
			"party",
			"alcohol",
			"celebrate",
			"cheers"
		],
		k: [
			41,
			18
		],
		o: 4
	},
	teacher: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F3EB",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f3eb.png",
				sheet_x: 45,
				sheet_y: 48,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F3EB",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f3eb.png",
				sheet_x: 45,
				sheet_y: 49,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F3EB",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f3eb.png",
				sheet_x: 45,
				sheet_y: 50,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F3EB",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f3eb.png",
				sheet_x: 45,
				sheet_y: 51,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F3EB",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f3eb.png",
				sheet_x: 45,
				sheet_y: 52,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Teacher",
		b: "1F9D1-200D-1F3EB",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			45,
			47
		],
		o: 12
	},
	x: {
		a: "Cross Mark",
		b: "274C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"no",
			"delete",
			"remove",
			"cancel"
		],
		k: [
			55,
			21
		],
		o: 2
	},
	pouting_cat: {
		a: "Pouting Cat Face",
		b: "1F63E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"cats"
		],
		k: [
			31,
			40
		],
		o: 2
	},
	wilted_flower: {
		a: "Wilted Flower",
		b: "1F940",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"plant",
			"nature",
			"flower"
		],
		k: [
			41,
			16
		],
		o: 4
	},
	boat: {
		a: "Sailboat",
		b: "26F5",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			54,
			16
		],
		n: [
			"sailboat"
		],
		o: 2
	},
	"flag-ht": {
		a: "Haiti Flag",
		b: "1F1ED-1F1F9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			20
		],
		o: 2
	},
	tumbler_glass: {
		a: "Tumbler Glass",
		b: "1F943",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"drink",
			"beverage",
			"drunk",
			"alcohol",
			"liquor",
			"booze",
			"bourbon",
			"scotch",
			"whisky",
			"glass",
			"shot"
		],
		k: [
			41,
			19
		],
		o: 4
	},
	notebook: {
		a: "Notebook",
		b: "1F4D3",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"stationery",
			"record",
			"notes",
			"paper",
			"study"
		],
		k: [
			26,
			41
		],
		o: 2
	},
	"male-teacher": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F3EB",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f3eb.png",
				sheet_x: 15,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F3EB",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f3eb.png",
				sheet_x: 15,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F3EB",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f3eb.png",
				sheet_x: 15,
				sheet_y: 14,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F3EB",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f3eb.png",
				sheet_x: 15,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F3EB",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f3eb.png",
				sheet_x: 15,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Teacher",
		b: "1F468-200D-1F3EB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			11
		],
		o: 4
	},
	ledger: {
		a: "Ledger",
		b: "1F4D2",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"notes",
			"paper"
		],
		k: [
			26,
			40
		],
		o: 2
	},
	"flag-hu": {
		a: "Hungary Flag",
		b: "1F1ED-1F1FA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			21
		],
		o: 2
	},
	cup_with_straw: {
		a: "Cup with Straw",
		b: "1F964",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			51
		],
		o: 5
	},
	hibiscus: {
		a: "Hibiscus",
		b: "1F33A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"plant",
			"vegetable",
			"flowers",
			"beach"
		],
		k: [
			6,
			18
		],
		o: 2
	},
	see_no_evil: {
		a: "See-No-Evil Monkey",
		b: "1F648",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"monkey",
			"animal",
			"nature",
			"haha"
		],
		k: [
			32,
			44
		],
		o: 2
	},
	canoe: {
		a: "Canoe",
		b: "1F6F6",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"boat",
			"paddle",
			"water",
			"ship"
		],
		k: [
			36,
			55
		],
		o: 4
	},
	negative_squared_cross_mark: {
		a: "Negative Squared Cross Mark",
		b: "274E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"x",
			"green-square",
			"no",
			"deny"
		],
		k: [
			55,
			22
		],
		o: 2
	},
	"flag-ic": {
		a: "Canary Islands Flag",
		b: "1F1EE-1F1E8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			22
		],
		o: 2
	},
	beverage_box: {
		a: "Beverage Box",
		b: "1F9C3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			11
		],
		o: 12
	},
	speedboat: {
		a: "Speedboat",
		b: "1F6A4",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"ship",
			"transportation",
			"vehicle",
			"summer"
		],
		k: [
			34,
			52
		],
		o: 2
	},
	heavy_plus_sign: {
		a: "Heavy Plus Sign",
		b: "2795",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"math",
			"calculation",
			"addition",
			"more",
			"increase"
		],
		k: [
			55,
			29
		],
		o: 2
	},
	sunflower: {
		a: "Sunflower",
		b: "1F33B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"plant",
			"fall"
		],
		k: [
			6,
			19
		],
		o: 2
	},
	page_with_curl: {
		a: "Page with Curl",
		b: "1F4C3",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"documents",
			"office",
			"paper"
		],
		k: [
			26,
			25
		],
		o: 2
	},
	"female-teacher": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F3EB",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f3eb.png",
				sheet_x: 18,
				sheet_y: 2,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F3EB",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f3eb.png",
				sheet_x: 18,
				sheet_y: 3,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F3EB",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f3eb.png",
				sheet_x: 18,
				sheet_y: 4,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F3EB",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f3eb.png",
				sheet_x: 18,
				sheet_y: 5,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F3EB",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f3eb.png",
				sheet_x: 18,
				sheet_y: 6,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Teacher",
		b: "1F469-200D-1F3EB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			18,
			1
		],
		o: 4
	},
	hear_no_evil: {
		a: "Hear-No-Evil Monkey",
		b: "1F649",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"monkey",
			"nature"
		],
		k: [
			32,
			45
		],
		o: 2
	},
	mate_drink: {
		a: "Mate Drink",
		b: "1F9C9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			17
		],
		o: 12
	},
	passenger_ship: {
		a: "Passenger Ship",
		b: "1F6F3-FE0F",
		c: "1F6F3",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"yacht",
			"cruise",
			"ferry"
		],
		k: [
			36,
			52
		],
		o: 2
	},
	judge: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-2696-FE0F",
				non_qualified: "1F9D1-1F3FB-200D-2696",
				image: "1f9d1-1f3fb-200d-2696-fe0f.png",
				sheet_x: 47,
				sheet_y: 56,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-2696-FE0F",
				non_qualified: "1F9D1-1F3FC-200D-2696",
				image: "1f9d1-1f3fc-200d-2696-fe0f.png",
				sheet_x: 48,
				sheet_y: 0,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-2696-FE0F",
				non_qualified: "1F9D1-1F3FD-200D-2696",
				image: "1f9d1-1f3fd-200d-2696-fe0f.png",
				sheet_x: 48,
				sheet_y: 1,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-2696-FE0F",
				non_qualified: "1F9D1-1F3FE-200D-2696",
				image: "1f9d1-1f3fe-200d-2696-fe0f.png",
				sheet_x: 48,
				sheet_y: 2,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-2696-FE0F",
				non_qualified: "1F9D1-1F3FF-200D-2696",
				image: "1f9d1-1f3ff-200d-2696-fe0f.png",
				sheet_x: 48,
				sheet_y: 3,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Judge",
		b: "1F9D1-200D-2696-FE0F",
		c: "1F9D1-200D-2696",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			47,
			55
		],
		o: 12
	},
	scroll: {
		a: "Scroll",
		b: "1F4DC",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"documents",
			"ancient",
			"history",
			"paper"
		],
		k: [
			26,
			50
		],
		o: 2
	},
	blossom: {
		a: "Blossom",
		b: "1F33C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"flowers",
			"yellow"
		],
		k: [
			6,
			20
		],
		o: 2
	},
	"flag-id": {
		a: "Indonesia Flag",
		b: "1F1EE-1F1E9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			23
		],
		o: 2
	},
	speak_no_evil: {
		a: "Speak-No-Evil Monkey",
		b: "1F64A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"monkey",
			"animal",
			"nature",
			"omg"
		],
		k: [
			32,
			46
		],
		o: 2
	},
	heavy_minus_sign: {
		a: "Heavy Minus Sign",
		b: "2796",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"math",
			"calculation",
			"subtract",
			"less"
		],
		k: [
			55,
			30
		],
		o: 2
	},
	"flag-ie": {
		a: "Ireland Flag",
		b: "1F1EE-1F1EA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			24
		],
		o: 2
	},
	ice_cube: {
		a: "Ice Cube",
		b: "1F9CA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			18
		],
		o: 12
	},
	page_facing_up: {
		a: "Page Facing Up",
		b: "1F4C4",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"documents",
			"office",
			"paper",
			"information"
		],
		k: [
			26,
			26
		],
		o: 2
	},
	"male-judge": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-2696-FE0F",
				non_qualified: "1F468-1F3FB-200D-2696",
				image: "1f468-1f3fb-200d-2696-fe0f.png",
				sheet_x: 17,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-2696-FE0F",
				non_qualified: "1F468-1F3FC-200D-2696",
				image: "1f468-1f3fc-200d-2696-fe0f.png",
				sheet_x: 17,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-2696-FE0F",
				non_qualified: "1F468-1F3FD-200D-2696",
				image: "1f468-1f3fd-200d-2696-fe0f.png",
				sheet_x: 17,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-2696-FE0F",
				non_qualified: "1F468-1F3FE-200D-2696",
				image: "1f468-1f3fe-200d-2696-fe0f.png",
				sheet_x: 17,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-2696-FE0F",
				non_qualified: "1F468-1F3FF-200D-2696",
				image: "1f468-1f3ff-200d-2696-fe0f.png",
				sheet_x: 17,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Judge",
		b: "1F468-200D-2696-FE0F",
		c: "1F468-200D-2696",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			17,
			8
		],
		o: 4
	},
	tulip: {
		a: "Tulip",
		b: "1F337",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"flowers",
			"plant",
			"nature",
			"summer",
			"spring"
		],
		k: [
			6,
			15
		],
		o: 2
	},
	ferry: {
		a: "Ferry",
		b: "26F4-FE0F",
		c: "26F4",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"boat",
			"ship",
			"yacht"
		],
		k: [
			54,
			15
		],
		o: 2
	},
	kiss: {
		a: "Kiss Mark",
		b: "1F48B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"face",
			"lips",
			"love",
			"like",
			"affection",
			"valentines"
		],
		k: [
			25,
			21
		],
		o: 2
	},
	heavy_division_sign: {
		a: "Heavy Division Sign",
		b: "2797",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"divide",
			"math",
			"calculation"
		],
		k: [
			55,
			31
		],
		o: 2
	},
	newspaper: {
		a: "Newspaper",
		b: "1F4F0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"press",
			"headline"
		],
		k: [
			27,
			13
		],
		o: 2
	},
	"female-judge": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-2696-FE0F",
				non_qualified: "1F469-1F3FB-200D-2696",
				image: "1f469-1f3fb-200d-2696-fe0f.png",
				sheet_x: 19,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-2696-FE0F",
				non_qualified: "1F469-1F3FC-200D-2696",
				image: "1f469-1f3fc-200d-2696-fe0f.png",
				sheet_x: 19,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-2696-FE0F",
				non_qualified: "1F469-1F3FD-200D-2696",
				image: "1f469-1f3fd-200d-2696-fe0f.png",
				sheet_x: 19,
				sheet_y: 53,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-2696-FE0F",
				non_qualified: "1F469-1F3FE-200D-2696",
				image: "1f469-1f3fe-200d-2696-fe0f.png",
				sheet_x: 19,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-2696-FE0F",
				non_qualified: "1F469-1F3FF-200D-2696",
				image: "1f469-1f3ff-200d-2696-fe0f.png",
				sheet_x: 19,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Judge",
		b: "1F469-200D-2696-FE0F",
		c: "1F469-200D-2696",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			19,
			50
		],
		o: 4
	},
	seedling: {
		a: "Seedling",
		b: "1F331",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"plant",
			"nature",
			"grass",
			"lawn",
			"spring"
		],
		k: [
			6,
			9
		],
		o: 2
	},
	love_letter: {
		a: "Love Letter",
		b: "1F48C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"email",
			"like",
			"affection",
			"envelope",
			"valentines"
		],
		k: [
			25,
			22
		],
		o: 2
	},
	chopsticks: {
		a: "Chopsticks",
		b: "1F962",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			49
		],
		o: 5
	},
	motor_boat: {
		a: "Motor Boat",
		b: "1F6E5-FE0F",
		c: "1F6E5",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"ship"
		],
		k: [
			36,
			47
		],
		o: 2
	},
	"flag-il": {
		a: "Israel Flag",
		b: "1F1EE-1F1F1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			25
		],
		o: 2
	},
	curly_loop: {
		a: "Curly Loop",
		b: "27B0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"scribble",
			"draw",
			"shape",
			"squiggle"
		],
		k: [
			55,
			33
		],
		o: 2
	},
	"flag-im": {
		a: "Isle of Man Flag",
		b: "1F1EE-1F1F2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			26
		],
		o: 2
	},
	evergreen_tree: {
		a: "Evergreen Tree",
		b: "1F332",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"plant",
			"nature"
		],
		k: [
			6,
			10
		],
		o: 2
	},
	cupid: {
		a: "Heart with Arrow",
		b: "1F498",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"love",
			"like",
			"heart",
			"affection",
			"valentines"
		],
		k: [
			25,
			34
		],
		o: 2
	},
	loop: {
		a: "Double Curly Loop",
		b: "27BF",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"tape",
			"cassette"
		],
		k: [
			55,
			34
		],
		o: 2
	},
	ship: {
		a: "Ship",
		b: "1F6A2",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"transportation",
			"titanic",
			"deploy"
		],
		k: [
			34,
			33
		],
		o: 2
	},
	farmer: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F33E",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f33e.png",
				sheet_x: 45,
				sheet_y: 18,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F33E",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f33e.png",
				sheet_x: 45,
				sheet_y: 19,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F33E",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f33e.png",
				sheet_x: 45,
				sheet_y: 20,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F33E",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f33e.png",
				sheet_x: 45,
				sheet_y: 21,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F33E",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f33e.png",
				sheet_x: 45,
				sheet_y: 22,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Farmer",
		b: "1F9D1-200D-1F33E",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			45,
			17
		],
		o: 12
	},
	rolled_up_newspaper: {
		a: "Rolled Up Newspaper",
		b: "1F5DE-FE0F",
		c: "1F5DE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			30,
			23
		],
		o: 2
	},
	knife_fork_plate: {
		a: "Knife Fork Plate",
		b: "1F37D-FE0F",
		c: "1F37D",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			7,
			28
		],
		o: 2
	},
	fork_and_knife: {
		a: "Fork and Knife",
		b: "1F374",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"cutlery",
			"kitchen"
		],
		k: [
			7,
			19
		],
		o: 2
	},
	"male-farmer": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F33E",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f33e.png",
				sheet_x: 14,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F33E",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f33e.png",
				sheet_x: 14,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F33E",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f33e.png",
				sheet_x: 14,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F33E",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f33e.png",
				sheet_x: 14,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F33E",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f33e.png",
				sheet_x: 14,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Farmer",
		b: "1F468-200D-1F33E",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			14,
			38
		],
		o: 4
	},
	bookmark_tabs: {
		a: "Bookmark Tabs",
		b: "1F4D1",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"favorite",
			"save",
			"order",
			"tidy"
		],
		k: [
			26,
			39
		],
		o: 2
	},
	part_alternation_mark: {
		a: "Part Alternation Mark",
		b: "303D-FE0F",
		c: "303D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"graph",
			"presentation",
			"stats",
			"business",
			"economics",
			"bad"
		],
		k: [
			55,
			45
		],
		o: 2
	},
	"flag-in": {
		a: "India Flag",
		b: "1F1EE-1F1F3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			27
		],
		o: 2
	},
	gift_heart: {
		a: "Heart with Ribbon",
		b: "1F49D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"love",
			"valentines"
		],
		k: [
			25,
			39
		],
		o: 2
	},
	airplane: {
		a: "Airplane",
		b: "2708-FE0F",
		c: "2708",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"vehicle",
			"transportation",
			"flight",
			"fly"
		],
		k: [
			54,
			41
		],
		o: 2
	},
	deciduous_tree: {
		a: "Deciduous Tree",
		b: "1F333",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"plant",
			"nature"
		],
		k: [
			6,
			11
		],
		o: 2
	},
	spoon: {
		a: "Spoon",
		b: "1F944",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"cutlery",
			"kitchen",
			"tableware"
		],
		k: [
			41,
			20
		],
		o: 4
	},
	"flag-io": {
		a: "British Indian Ocean Territory Flag",
		b: "1F1EE-1F1F4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			28
		],
		o: 2
	},
	palm_tree: {
		a: "Palm Tree",
		b: "1F334",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"plant",
			"vegetable",
			"nature",
			"summer",
			"beach",
			"mojito",
			"tropical"
		],
		k: [
			6,
			12
		],
		o: 2
	},
	sparkling_heart: {
		a: "Sparkling Heart",
		b: "1F496",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"love",
			"like",
			"affection",
			"valentines"
		],
		k: [
			25,
			32
		],
		o: 2
	},
	"female-farmer": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F33E",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f33e.png",
				sheet_x: 17,
				sheet_y: 29,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F33E",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f33e.png",
				sheet_x: 17,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F33E",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f33e.png",
				sheet_x: 17,
				sheet_y: 31,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F33E",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f33e.png",
				sheet_x: 17,
				sheet_y: 32,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F33E",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f33e.png",
				sheet_x: 17,
				sheet_y: 33,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Farmer",
		b: "1F469-200D-1F33E",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			17,
			28
		],
		o: 4
	},
	eight_spoked_asterisk: {
		a: "Eight Spoked Asterisk",
		b: "2733-FE0F",
		c: "2733",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"star",
			"sparkle",
			"green-square"
		],
		k: [
			55,
			17
		],
		o: 2
	},
	small_airplane: {
		a: "Small Airplane",
		b: "1F6E9-FE0F",
		c: "1F6E9",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"flight",
			"transportation",
			"fly",
			"vehicle"
		],
		k: [
			36,
			48
		],
		o: 2
	},
	bookmark: {
		a: "Bookmark",
		b: "1F516",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"favorite",
			"label",
			"save"
		],
		k: [
			27,
			50
		],
		o: 2
	},
	cook: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F373",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f373.png",
				sheet_x: 45,
				sheet_y: 24,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F373",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f373.png",
				sheet_x: 45,
				sheet_y: 25,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F373",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f373.png",
				sheet_x: 45,
				sheet_y: 26,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F373",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f373.png",
				sheet_x: 45,
				sheet_y: 27,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F373",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f373.png",
				sheet_x: 45,
				sheet_y: 28,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Cook",
		b: "1F9D1-200D-1F373",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			45,
			23
		],
		o: 12
	},
	eight_pointed_black_star: {
		a: "Eight Pointed Black Star",
		b: "2734-FE0F",
		c: "2734",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"orange-square",
			"shape",
			"polygon"
		],
		k: [
			55,
			18
		],
		o: 2
	},
	heartpulse: {
		a: "Growing Heart",
		b: "1F497",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"like",
			"love",
			"affection",
			"valentines",
			"pink"
		],
		k: [
			25,
			33
		],
		o: 2
	},
	label: {
		a: "Label",
		b: "1F3F7-FE0F",
		c: "1F3F7",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sale",
			"tag"
		],
		k: [
			11,
			19
		],
		o: 2
	},
	"flag-iq": {
		a: "Iraq Flag",
		b: "1F1EE-1F1F6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			29
		],
		o: 2
	},
	hocho: {
		a: "Hocho",
		b: "1F52A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"knife",
			"blade",
			"cutlery",
			"kitchen",
			"weapon"
		],
		k: [
			28,
			13
		],
		n: [
			"knife"
		],
		o: 2
	},
	cactus: {
		a: "Cactus",
		b: "1F335",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"vegetable",
			"plant",
			"nature"
		],
		k: [
			6,
			13
		],
		o: 2
	},
	airplane_departure: {
		a: "Airplane Departure",
		b: "1F6EB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			36,
			49
		],
		o: 2
	},
	airplane_arriving: {
		a: "Airplane Arriving",
		b: "1F6EC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			36,
			50
		],
		o: 2
	},
	ear_of_rice: {
		a: "Ear of Rice",
		b: "1F33E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"plant"
		],
		k: [
			6,
			22
		],
		o: 2
	},
	"flag-ir": {
		a: "Iran Flag",
		b: "1F1EE-1F1F7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			30
		],
		o: 2
	},
	moneybag: {
		a: "Money Bag",
		b: "1F4B0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"dollar",
			"payment",
			"coins",
			"sale"
		],
		k: [
			26,
			6
		],
		o: 2
	},
	"male-cook": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F373",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f373.png",
				sheet_x: 14,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F373",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f373.png",
				sheet_x: 14,
				sheet_y: 46,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F373",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f373.png",
				sheet_x: 14,
				sheet_y: 47,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F373",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f373.png",
				sheet_x: 14,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F373",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f373.png",
				sheet_x: 14,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Cook",
		b: "1F468-200D-1F373",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			14,
			44
		],
		o: 4
	},
	heartbeat: {
		a: "Beating Heart",
		b: "1F493",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"love",
			"like",
			"affection",
			"valentines",
			"pink",
			"heart"
		],
		k: [
			25,
			29
		],
		o: 2
	},
	sparkle: {
		a: "Sparkle",
		b: "2747-FE0F",
		c: "2747",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"stars",
			"green-square",
			"awesome",
			"good",
			"fireworks"
		],
		k: [
			55,
			20
		],
		o: 2
	},
	amphora: {
		a: "Amphora",
		b: "1F3FA",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"vase",
			"jar"
		],
		k: [
			11,
			22
		],
		o: 2
	},
	yen: {
		a: "Banknote with Yen Sign",
		b: "1F4B4",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"money",
			"sales",
			"japanese",
			"dollar",
			"currency"
		],
		k: [
			26,
			10
		],
		o: 2
	},
	revolving_hearts: {
		a: "Revolving Hearts",
		b: "1F49E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"love",
			"like",
			"affection",
			"valentines"
		],
		k: [
			25,
			40
		],
		o: 2
	},
	bangbang: {
		a: "Double Exclamation Mark",
		b: "203C-FE0F",
		c: "203C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"exclamation",
			"surprise"
		],
		k: [
			52,
			10
		],
		o: 2
	},
	parachute: {
		a: "Parachute",
		b: "1FA82",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			52,
			3
		],
		o: 12
	},
	herb: {
		a: "Herb",
		b: "1F33F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"vegetable",
			"plant",
			"medicine",
			"weed",
			"grass",
			"lawn"
		],
		k: [
			6,
			23
		],
		o: 2
	},
	"flag-is": {
		a: "Iceland Flag",
		b: "1F1EE-1F1F8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			31
		],
		o: 2
	},
	"female-cook": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F373",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f373.png",
				sheet_x: 17,
				sheet_y: 35,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F373",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f373.png",
				sheet_x: 17,
				sheet_y: 36,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F373",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f373.png",
				sheet_x: 17,
				sheet_y: 37,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F373",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f373.png",
				sheet_x: 17,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F373",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f373.png",
				sheet_x: 17,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Cook",
		b: "1F469-200D-1F373",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			17,
			34
		],
		o: 4
	},
	mechanic: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F527",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f527.png",
				sheet_x: 46,
				sheet_y: 15,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F527",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f527.png",
				sheet_x: 46,
				sheet_y: 16,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F527",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f527.png",
				sheet_x: 46,
				sheet_y: 17,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F527",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f527.png",
				sheet_x: 46,
				sheet_y: 18,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F527",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f527.png",
				sheet_x: 46,
				sheet_y: 19,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Mechanic",
		b: "1F9D1-200D-1F527",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			46,
			14
		],
		o: 12
	},
	interrobang: {
		a: "Exclamation Question Mark",
		b: "2049-FE0F",
		c: "2049",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"wat",
			"punctuation",
			"surprise"
		],
		k: [
			52,
			11
		],
		o: 2
	},
	seat: {
		a: "Seat",
		b: "1F4BA",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sit",
			"airplane",
			"transport",
			"bus",
			"flight",
			"fly"
		],
		k: [
			26,
			16
		],
		o: 2
	},
	dollar: {
		a: "Banknote with Dollar Sign",
		b: "1F4B5",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"money",
			"sales",
			"bill",
			"currency"
		],
		k: [
			26,
			11
		],
		o: 2
	},
	two_hearts: {
		a: "Two Hearts",
		b: "1F495",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"love",
			"like",
			"affection",
			"valentines",
			"heart"
		],
		k: [
			25,
			31
		],
		o: 2
	},
	it: {
		a: "Italy Flag",
		b: "1F1EE-1F1F9",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"italy",
			"flag",
			"nation",
			"country",
			"banner"
		],
		k: [
			2,
			32
		],
		n: [
			"flag-it"
		],
		o: 2
	},
	shamrock: {
		a: "Shamrock",
		b: "2618-FE0F",
		c: "2618",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"vegetable",
			"plant",
			"nature",
			"irish",
			"clover"
		],
		k: [
			53,
			1
		],
		o: 2
	},
	four_leaf_clover: {
		a: "Four Leaf Clover",
		b: "1F340",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"vegetable",
			"plant",
			"nature",
			"lucky",
			"irish"
		],
		k: [
			6,
			24
		],
		o: 2
	},
	euro: {
		a: "Banknote with Euro Sign",
		b: "1F4B6",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"money",
			"sales",
			"dollar",
			"currency"
		],
		k: [
			26,
			12
		],
		o: 2
	},
	question: {
		a: "Black Question Mark Ornament",
		b: "2753",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"doubt",
			"confused"
		],
		k: [
			55,
			23
		],
		o: 2
	},
	helicopter: {
		a: "Helicopter",
		b: "1F681",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"transportation",
			"vehicle",
			"fly"
		],
		k: [
			34,
			0
		],
		o: 2
	},
	heart_decoration: {
		a: "Heart Decoration",
		b: "1F49F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"purple-square",
			"love",
			"like"
		],
		k: [
			25,
			41
		],
		o: 2
	},
	"flag-je": {
		a: "Jersey Flag",
		b: "1F1EF-1F1EA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			33
		],
		o: 2
	},
	"male-mechanic": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F527",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f527.png",
				sheet_x: 15,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F527",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f527.png",
				sheet_x: 15,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F527",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f527.png",
				sheet_x: 15,
				sheet_y: 53,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F527",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f527.png",
				sheet_x: 15,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F527",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f527.png",
				sheet_x: 15,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Mechanic",
		b: "1F468-200D-1F527",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			50
		],
		o: 4
	},
	suspension_railway: {
		a: "Suspension Railway",
		b: "1F69F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"vehicle",
			"transportation"
		],
		k: [
			34,
			30
		],
		o: 2
	},
	heavy_heart_exclamation_mark_ornament: {
		a: "Heavy Heart Exclamation Mark Ornament",
		b: "2763-FE0F",
		c: "2763",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			55,
			27
		],
		o: 2
	},
	"female-mechanic": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F527",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f527.png",
				sheet_x: 18,
				sheet_y: 36,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F527",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f527.png",
				sheet_x: 18,
				sheet_y: 37,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F527",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f527.png",
				sheet_x: 18,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F527",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f527.png",
				sheet_x: 18,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F527",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f527.png",
				sheet_x: 18,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Mechanic",
		b: "1F469-200D-1F527",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			18,
			35
		],
		o: 4
	},
	"flag-jm": {
		a: "Jamaica Flag",
		b: "1F1EF-1F1F2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			34
		],
		o: 2
	},
	grey_question: {
		a: "White Question Mark Ornament",
		b: "2754",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"doubts",
			"gray",
			"huh",
			"confused"
		],
		k: [
			55,
			24
		],
		o: 2
	},
	maple_leaf: {
		a: "Maple Leaf",
		b: "1F341",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"plant",
			"vegetable",
			"ca",
			"fall"
		],
		k: [
			6,
			25
		],
		o: 2
	},
	pound: {
		a: "Banknote with Pound Sign",
		b: "1F4B7",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"british",
			"sterling",
			"money",
			"sales",
			"bills",
			"uk",
			"england",
			"currency"
		],
		k: [
			26,
			13
		],
		o: 2
	},
	money_with_wings: {
		a: "Money with Wings",
		b: "1F4B8",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"dollar",
			"bills",
			"payment",
			"sale"
		],
		k: [
			26,
			14
		],
		o: 2
	},
	"flag-jo": {
		a: "Jordan Flag",
		b: "1F1EF-1F1F4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			35
		],
		o: 2
	},
	fallen_leaf: {
		a: "Fallen Leaf",
		b: "1F342",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"plant",
			"vegetable",
			"leaves"
		],
		k: [
			6,
			26
		],
		o: 2
	},
	factory_worker: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F3ED",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f3ed.png",
				sheet_x: 45,
				sheet_y: 54,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F3ED",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f3ed.png",
				sheet_x: 45,
				sheet_y: 55,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F3ED",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f3ed.png",
				sheet_x: 45,
				sheet_y: 56,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F3ED",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f3ed.png",
				sheet_x: 46,
				sheet_y: 0,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F3ED",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f3ed.png",
				sheet_x: 46,
				sheet_y: 1,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Factory Worker",
		b: "1F9D1-200D-1F3ED",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			45,
			53
		],
		o: 12
	},
	broken_heart: {
		a: "Broken Heart",
		b: "1F494",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sad",
			"sorry",
			"break",
			"heart",
			"heartbreak"
		],
		k: [
			25,
			30
		],
		l: [
			"</3"
		],
		m: "</3",
		o: 2
	},
	grey_exclamation: {
		a: "White Exclamation Mark Ornament",
		b: "2755",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"surprise",
			"punctuation",
			"gray",
			"wow",
			"warning"
		],
		k: [
			55,
			25
		],
		o: 2
	},
	mountain_cableway: {
		a: "Mountain Cableway",
		b: "1F6A0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"transportation",
			"vehicle",
			"ski"
		],
		k: [
			34,
			31
		],
		o: 2
	},
	exclamation: {
		a: "Heavy Exclamation Mark Symbol",
		b: "2757",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"heavy_exclamation_mark",
			"danger",
			"surprise",
			"punctuation",
			"wow",
			"warning"
		],
		k: [
			55,
			26
		],
		n: [
			"heavy_exclamation_mark"
		],
		o: 2
	},
	leaves: {
		a: "Leaf Fluttering in Wind",
		b: "1F343",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"plant",
			"tree",
			"vegetable",
			"grass",
			"lawn",
			"spring"
		],
		k: [
			6,
			27
		],
		o: 2
	},
	heart: {
		a: "Heavy Black Heart",
		b: "2764-FE0F",
		c: "2764",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"love",
			"like",
			"valentines"
		],
		k: [
			55,
			28
		],
		l: [
			"<3"
		],
		m: "<3",
		o: 2
	},
	jp: {
		a: "Japan Flag",
		b: "1F1EF-1F1F5",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"japanese",
			"nation",
			"flag",
			"country",
			"banner"
		],
		k: [
			2,
			36
		],
		n: [
			"flag-jp"
		],
		o: 2
	},
	"male-factory-worker": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F3ED",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f3ed.png",
				sheet_x: 15,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F3ED",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f3ed.png",
				sheet_x: 15,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F3ED",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f3ed.png",
				sheet_x: 15,
				sheet_y: 20,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F3ED",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f3ed.png",
				sheet_x: 15,
				sheet_y: 21,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F3ED",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f3ed.png",
				sheet_x: 15,
				sheet_y: 22,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Factory Worker",
		b: "1F468-200D-1F3ED",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			17
		],
		o: 4
	},
	credit_card: {
		a: "Credit Card",
		b: "1F4B3",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"money",
			"sales",
			"dollar",
			"bill",
			"payment",
			"shopping"
		],
		k: [
			26,
			9
		],
		o: 2
	},
	aerial_tramway: {
		a: "Aerial Tramway",
		b: "1F6A1",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"transportation",
			"vehicle",
			"ski"
		],
		k: [
			34,
			32
		],
		o: 2
	},
	"female-factory-worker": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F3ED",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f3ed.png",
				sheet_x: 18,
				sheet_y: 8,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F3ED",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f3ed.png",
				sheet_x: 18,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F3ED",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f3ed.png",
				sheet_x: 18,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F3ED",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f3ed.png",
				sheet_x: 18,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F3ED",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f3ed.png",
				sheet_x: 18,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Factory Worker",
		b: "1F469-200D-1F3ED",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			18,
			7
		],
		o: 4
	},
	receipt: {
		a: "Receipt",
		b: "1F9FE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			49
		],
		o: 11
	},
	wavy_dash: {
		a: "Wavy Dash",
		b: "3030-FE0F",
		c: "3030",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"draw",
			"line",
			"moustache",
			"mustache",
			"squiggle",
			"scribble"
		],
		k: [
			55,
			44
		],
		o: 2
	},
	"flag-ke": {
		a: "Kenya Flag",
		b: "1F1F0-1F1EA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			37
		],
		o: 2
	},
	satellite: {
		a: "Satellite",
		b: "1F6F0-FE0F",
		c: "1F6F0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"communication",
			"future",
			"radio",
			"space"
		],
		k: [
			36,
			51
		],
		o: 2
	},
	orange_heart: {
		a: "Orange Heart",
		b: "1F9E1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			20
		],
		o: 5
	},
	yellow_heart: {
		a: "Yellow Heart",
		b: "1F49B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"love",
			"like",
			"affection",
			"valentines"
		],
		k: [
			25,
			37
		],
		m: "<3",
		o: 2
	},
	copyright: {
		a: "Copyright Sign",
		b: "00A9-FE0F",
		c: "00A9",
		d: true,
		e: true,
		f: true,
		h: false,
		j: [
			"ip",
			"license",
			"circle",
			"law",
			"legal"
		],
		k: [
			0,
			12
		],
		o: 2
	},
	rocket: {
		a: "Rocket",
		b: "1F680",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"launch",
			"ship",
			"staffmode",
			"NASA",
			"outer space",
			"outer_space",
			"fly"
		],
		k: [
			33,
			56
		],
		o: 2
	},
	chart: {
		a: "Chart with Upwards Trend and Yen Sign",
		b: "1F4B9",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"green-square",
			"graph",
			"presentation",
			"stats"
		],
		k: [
			26,
			15
		],
		o: 2
	},
	"flag-kg": {
		a: "Kyrgyzstan Flag",
		b: "1F1F0-1F1EC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			38
		],
		o: 2
	},
	office_worker: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F4BC",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f4bc.png",
				sheet_x: 46,
				sheet_y: 9,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F4BC",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f4bc.png",
				sheet_x: 46,
				sheet_y: 10,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F4BC",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f4bc.png",
				sheet_x: 46,
				sheet_y: 11,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F4BC",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f4bc.png",
				sheet_x: 46,
				sheet_y: 12,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F4BC",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f4bc.png",
				sheet_x: 46,
				sheet_y: 13,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Office Worker",
		b: "1F9D1-200D-1F4BC",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			46,
			8
		],
		o: 12
	},
	currency_exchange: {
		a: "Currency Exchange",
		b: "1F4B1",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"money",
			"sales",
			"dollar",
			"travel"
		],
		k: [
			26,
			7
		],
		o: 2
	},
	registered: {
		a: "Registered Sign",
		b: "00AE-FE0F",
		c: "00AE",
		d: true,
		e: true,
		f: true,
		h: false,
		j: [
			"alphabet",
			"circle"
		],
		k: [
			0,
			13
		],
		o: 2
	},
	green_heart: {
		a: "Green Heart",
		b: "1F49A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"love",
			"like",
			"affection",
			"valentines"
		],
		k: [
			25,
			36
		],
		m: "<3",
		o: 2
	},
	flying_saucer: {
		a: "Flying Saucer",
		b: "1F6F8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			0
		],
		o: 5
	},
	"flag-kh": {
		a: "Cambodia Flag",
		b: "1F1F0-1F1ED",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			39
		],
		o: 2
	},
	"male-office-worker": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F4BC",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f4bc.png",
				sheet_x: 15,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F4BC",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f4bc.png",
				sheet_x: 15,
				sheet_y: 46,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F4BC",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f4bc.png",
				sheet_x: 15,
				sheet_y: 47,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F4BC",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f4bc.png",
				sheet_x: 15,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F4BC",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f4bc.png",
				sheet_x: 15,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Office Worker",
		b: "1F468-200D-1F4BC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			44
		],
		o: 4
	},
	tm: {
		a: "Trade Mark Sign",
		b: "2122-FE0F",
		c: "2122",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"trademark",
			"brand",
			"law",
			"legal"
		],
		k: [
			52,
			12
		],
		o: 2
	},
	bellhop_bell: {
		a: "Bellhop Bell",
		b: "1F6CE-FE0F",
		c: "1F6CE",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"service"
		],
		k: [
			36,
			36
		],
		o: 2
	},
	blue_heart: {
		a: "Blue Heart",
		b: "1F499",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"love",
			"like",
			"affection",
			"valentines"
		],
		k: [
			25,
			35
		],
		m: "<3",
		o: 2
	},
	"flag-ki": {
		a: "Kiribati Flag",
		b: "1F1F0-1F1EE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			40
		],
		o: 2
	},
	heavy_dollar_sign: {
		a: "Heavy Dollar Sign",
		b: "1F4B2",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"money",
			"sales",
			"payment",
			"currency",
			"buck"
		],
		k: [
			26,
			8
		],
		o: 2
	},
	"female-office-worker": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F4BC",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f4bc.png",
				sheet_x: 18,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F4BC",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f4bc.png",
				sheet_x: 18,
				sheet_y: 31,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F4BC",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f4bc.png",
				sheet_x: 18,
				sheet_y: 32,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F4BC",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f4bc.png",
				sheet_x: 18,
				sheet_y: 33,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F4BC",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f4bc.png",
				sheet_x: 18,
				sheet_y: 34,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Office Worker",
		b: "1F469-200D-1F4BC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			18,
			29
		],
		o: 4
	},
	purple_heart: {
		a: "Purple Heart",
		b: "1F49C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"love",
			"like",
			"affection",
			"valentines"
		],
		k: [
			25,
			38
		],
		m: "<3",
		o: 2
	},
	scientist: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F52C",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f52c.png",
				sheet_x: 46,
				sheet_y: 21,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F52C",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f52c.png",
				sheet_x: 46,
				sheet_y: 22,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F52C",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f52c.png",
				sheet_x: 46,
				sheet_y: 23,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F52C",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f52c.png",
				sheet_x: 46,
				sheet_y: 24,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F52C",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f52c.png",
				sheet_x: 46,
				sheet_y: 25,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Scientist",
		b: "1F9D1-200D-1F52C",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			46,
			20
		],
		o: 12
	},
	luggage: {
		a: "Luggage",
		b: "1F9F3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			38
		],
		o: 11
	},
	hash: {
		a: "Hash Key",
		b: "0023-FE0F-20E3",
		c: "0023-20E3",
		d: true,
		e: true,
		f: true,
		h: false,
		j: [
			"symbol",
			"blue-square",
			"twitter"
		],
		k: [
			0,
			0
		],
		o: 0
	},
	"flag-km": {
		a: "Comoros Flag",
		b: "1F1F0-1F1F2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			41
		],
		o: 2
	},
	email: {
		a: "Envelope",
		b: "2709-FE0F",
		c: "2709",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"letter",
			"postal",
			"inbox",
			"communication"
		],
		k: [
			54,
			42
		],
		n: [
			"envelope"
		],
		o: 2
	},
	"e-mail": {
		a: "E-Mail Symbol",
		b: "1F4E7",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"communication",
			"inbox"
		],
		k: [
			27,
			4
		],
		o: 2
	},
	keycap_star: {
		a: "Keycap Star",
		b: "002A-FE0F-20E3",
		c: "002A-20E3",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			0,
			1
		],
		o: 0
	},
	"flag-kn": {
		a: "St. Kitts & Nevis Flag",
		b: "1F1F0-1F1F3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			42
		],
		o: 2
	},
	hourglass: {
		a: "Hourglass",
		b: "231B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"clock",
			"oldschool",
			"limit",
			"exam",
			"quiz",
			"test"
		],
		k: [
			52,
			23
		],
		o: 2
	},
	brown_heart: {
		a: "Brown Heart",
		b: "1F90E",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			16
		],
		o: 12
	},
	"male-scientist": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F52C",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f52c.png",
				sheet_x: 16,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F52C",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f52c.png",
				sheet_x: 16,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F52C",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f52c.png",
				sheet_x: 16,
				sheet_y: 2,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F52C",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f52c.png",
				sheet_x: 16,
				sheet_y: 3,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F52C",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f52c.png",
				sheet_x: 16,
				sheet_y: 4,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Scientist",
		b: "1F468-200D-1F52C",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			56
		],
		o: 4
	},
	hourglass_flowing_sand: {
		a: "Hourglass with Flowing Sand",
		b: "23F3",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"oldschool",
			"time",
			"countdown"
		],
		k: [
			52,
			36
		],
		o: 2
	},
	black_heart: {
		a: "Black Heart",
		b: "1F5A4",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"evil"
		],
		k: [
			30,
			9
		],
		o: 4
	},
	zero: {
		a: "Keycap 0",
		b: "0030-FE0F-20E3",
		c: "0030-20E3",
		d: true,
		e: true,
		f: true,
		h: false,
		j: [
			"0",
			"numbers",
			"blue-square",
			"null"
		],
		k: [
			0,
			2
		],
		o: 0
	},
	incoming_envelope: {
		a: "Incoming Envelope",
		b: "1F4E8",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"email",
			"inbox"
		],
		k: [
			27,
			5
		],
		o: 2
	},
	"flag-kp": {
		a: "North Korea Flag",
		b: "1F1F0-1F1F5",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			43
		],
		o: 2
	},
	"female-scientist": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F52C",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f52c.png",
				sheet_x: 18,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F52C",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f52c.png",
				sheet_x: 18,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F52C",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f52c.png",
				sheet_x: 18,
				sheet_y: 44,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F52C",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f52c.png",
				sheet_x: 18,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F52C",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f52c.png",
				sheet_x: 18,
				sheet_y: 46,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Scientist",
		b: "1F469-200D-1F52C",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			18,
			41
		],
		o: 4
	},
	watch: {
		a: "Watch",
		b: "231A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"accessories"
		],
		k: [
			52,
			22
		],
		o: 2
	},
	white_heart: {
		a: "White Heart",
		b: "1F90D",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			15
		],
		o: 12
	},
	one: {
		a: "Keycap 1",
		b: "0031-FE0F-20E3",
		c: "0031-20E3",
		d: true,
		e: true,
		f: true,
		h: false,
		j: [
			"blue-square",
			"numbers",
			"1"
		],
		k: [
			0,
			3
		],
		o: 0
	},
	kr: {
		a: "South Korea Flag",
		b: "1F1F0-1F1F7",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"south",
			"korea",
			"nation",
			"flag",
			"country",
			"banner"
		],
		k: [
			2,
			44
		],
		n: [
			"flag-kr"
		],
		o: 2
	},
	envelope_with_arrow: {
		a: "Envelope with Downwards Arrow Above",
		b: "1F4E9",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"email",
			"communication"
		],
		k: [
			27,
			6
		],
		o: 2
	},
	technologist: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F4BB",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f4bb.png",
				sheet_x: 46,
				sheet_y: 3,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F4BB",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f4bb.png",
				sheet_x: 46,
				sheet_y: 4,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F4BB",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f4bb.png",
				sheet_x: 46,
				sheet_y: 5,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F4BB",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f4bb.png",
				sheet_x: 46,
				sheet_y: 6,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F4BB",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f4bb.png",
				sheet_x: 46,
				sheet_y: 7,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Technologist",
		b: "1F9D1-200D-1F4BB",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			46,
			2
		],
		o: 12
	},
	outbox_tray: {
		a: "Outbox Tray",
		b: "1F4E4",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"inbox",
			"email"
		],
		k: [
			27,
			1
		],
		o: 2
	},
	"male-technologist": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F4BB",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f4bb.png",
				sheet_x: 15,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F4BB",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f4bb.png",
				sheet_x: 15,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F4BB",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f4bb.png",
				sheet_x: 15,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F4BB",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f4bb.png",
				sheet_x: 15,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F4BB",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f4bb.png",
				sheet_x: 15,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Technologist",
		b: "1F468-200D-1F4BB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			38
		],
		o: 4
	},
	alarm_clock: {
		a: "Alarm Clock",
		b: "23F0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"wake"
		],
		k: [
			52,
			33
		],
		o: 2
	},
	"flag-kw": {
		a: "Kuwait Flag",
		b: "1F1F0-1F1FC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			45
		],
		o: 2
	},
	two: {
		a: "Keycap 2",
		b: "0032-FE0F-20E3",
		c: "0032-20E3",
		d: true,
		e: true,
		f: true,
		h: false,
		j: [
			"numbers",
			"2",
			"prime",
			"blue-square"
		],
		k: [
			0,
			4
		],
		o: 0
	},
	anger: {
		a: "Anger Symbol",
		b: "1F4A2",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"angry",
			"mad"
		],
		k: [
			25,
			44
		],
		o: 2
	},
	inbox_tray: {
		a: "Inbox Tray",
		b: "1F4E5",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"email",
			"documents"
		],
		k: [
			27,
			2
		],
		o: 2
	},
	three: {
		a: "Keycap 3",
		b: "0033-FE0F-20E3",
		c: "0033-20E3",
		d: true,
		e: true,
		f: true,
		h: false,
		j: [
			"3",
			"numbers",
			"prime",
			"blue-square"
		],
		k: [
			0,
			5
		],
		o: 0
	},
	"flag-ky": {
		a: "Cayman Islands Flag",
		b: "1F1F0-1F1FE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			46
		],
		o: 2
	},
	stopwatch: {
		a: "Stopwatch",
		b: "23F1-FE0F",
		c: "23F1",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"deadline"
		],
		k: [
			52,
			34
		],
		o: 2
	},
	"female-technologist": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F4BB",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f4bb.png",
				sheet_x: 18,
				sheet_y: 24,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F4BB",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f4bb.png",
				sheet_x: 18,
				sheet_y: 25,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F4BB",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f4bb.png",
				sheet_x: 18,
				sheet_y: 26,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F4BB",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f4bb.png",
				sheet_x: 18,
				sheet_y: 27,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F4BB",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f4bb.png",
				sheet_x: 18,
				sheet_y: 28,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Technologist",
		b: "1F469-200D-1F4BB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			18,
			23
		],
		o: 4
	},
	boom: {
		a: "Collision Symbol",
		b: "1F4A5",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"bomb",
			"explode",
			"explosion",
			"collision",
			"blown"
		],
		k: [
			25,
			47
		],
		n: [
			"collision"
		],
		o: 2
	},
	"flag-kz": {
		a: "Kazakhstan Flag",
		b: "1F1F0-1F1FF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			47
		],
		o: 2
	},
	four: {
		a: "Keycap 4",
		b: "0034-FE0F-20E3",
		c: "0034-20E3",
		d: true,
		e: true,
		f: true,
		h: false,
		j: [
			"4",
			"numbers",
			"blue-square"
		],
		k: [
			0,
			6
		],
		o: 0
	},
	timer_clock: {
		a: "Timer Clock",
		b: "23F2-FE0F",
		c: "23F2",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"alarm"
		],
		k: [
			52,
			35
		],
		o: 2
	},
	singer: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F3A4",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f3a4.png",
				sheet_x: 45,
				sheet_y: 36,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F3A4",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f3a4.png",
				sheet_x: 45,
				sheet_y: 37,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F3A4",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f3a4.png",
				sheet_x: 45,
				sheet_y: 38,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F3A4",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f3a4.png",
				sheet_x: 45,
				sheet_y: 39,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F3A4",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f3a4.png",
				sheet_x: 45,
				sheet_y: 40,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Singer",
		b: "1F9D1-200D-1F3A4",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			45,
			35
		],
		o: 12
	},
	"package": {
		a: "Package",
		b: "1F4E6",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"mail",
			"gift",
			"cardboard",
			"box",
			"moving"
		],
		k: [
			27,
			3
		],
		o: 2
	},
	mailbox: {
		a: "Closed Mailbox with Raised Flag",
		b: "1F4EB",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"email",
			"inbox",
			"communication"
		],
		k: [
			27,
			8
		],
		o: 2
	},
	"flag-la": {
		a: "Laos Flag",
		b: "1F1F1-1F1E6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			48
		],
		o: 2
	},
	dizzy: {
		a: "Dizzy Symbol",
		b: "1F4AB",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"star",
			"sparkle",
			"shoot",
			"magic"
		],
		k: [
			26,
			1
		],
		o: 2
	},
	five: {
		a: "Keycap 5",
		b: "0035-FE0F-20E3",
		c: "0035-20E3",
		d: true,
		e: true,
		f: true,
		h: false,
		j: [
			"5",
			"numbers",
			"blue-square",
			"prime"
		],
		k: [
			0,
			7
		],
		o: 0
	},
	"male-singer": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F3A4",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f3a4.png",
				sheet_x: 15,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F3A4",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f3a4.png",
				sheet_x: 15,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F3A4",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f3a4.png",
				sheet_x: 15,
				sheet_y: 2,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F3A4",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f3a4.png",
				sheet_x: 15,
				sheet_y: 3,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F3A4",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f3a4.png",
				sheet_x: 15,
				sheet_y: 4,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Singer",
		b: "1F468-200D-1F3A4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			14,
			56
		],
		o: 4
	},
	mantelpiece_clock: {
		a: "Mantelpiece Clock",
		b: "1F570-FE0F",
		c: "1F570",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time"
		],
		k: [
			29,
			7
		],
		o: 2
	},
	"female-singer": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F3A4",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f3a4.png",
				sheet_x: 17,
				sheet_y: 47,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F3A4",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f3a4.png",
				sheet_x: 17,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F3A4",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f3a4.png",
				sheet_x: 17,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F3A4",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f3a4.png",
				sheet_x: 17,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F3A4",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f3a4.png",
				sheet_x: 17,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Singer",
		b: "1F469-200D-1F3A4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			17,
			46
		],
		o: 4
	},
	"flag-lb": {
		a: "Lebanon Flag",
		b: "1F1F1-1F1E7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			49
		],
		o: 2
	},
	six: {
		a: "Keycap 6",
		b: "0036-FE0F-20E3",
		c: "0036-20E3",
		d: true,
		e: true,
		f: true,
		h: false,
		j: [
			"6",
			"numbers",
			"blue-square"
		],
		k: [
			0,
			8
		],
		o: 0
	},
	mailbox_closed: {
		a: "Closed Mailbox with Lowered Flag",
		b: "1F4EA",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"email",
			"communication",
			"inbox"
		],
		k: [
			27,
			7
		],
		o: 2
	},
	sweat_drops: {
		a: "Splashing Sweat Symbol",
		b: "1F4A6",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"water",
			"drip",
			"oops"
		],
		k: [
			25,
			48
		],
		o: 2
	},
	clock12: {
		a: "Clock Face Twelve Oclock",
		b: "1F55B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"noon",
			"midnight",
			"midday",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			50
		],
		o: 2
	},
	seven: {
		a: "Keycap 7",
		b: "0037-FE0F-20E3",
		c: "0037-20E3",
		d: true,
		e: true,
		f: true,
		h: false,
		j: [
			"7",
			"numbers",
			"blue-square",
			"prime"
		],
		k: [
			0,
			9
		],
		o: 0
	},
	mailbox_with_mail: {
		a: "Open Mailbox with Raised Flag",
		b: "1F4EC",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"email",
			"inbox",
			"communication"
		],
		k: [
			27,
			9
		],
		o: 2
	},
	clock1230: {
		a: "Clock Face Twelve-Thirty",
		b: "1F567",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			29,
			5
		],
		o: 2
	},
	dash: {
		a: "Dash Symbol",
		b: "1F4A8",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"wind",
			"air",
			"fast",
			"shoo",
			"fart",
			"smoke",
			"puff"
		],
		k: [
			25,
			50
		],
		o: 2
	},
	artist: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F3A8",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f3a8.png",
				sheet_x: 45,
				sheet_y: 42,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F3A8",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f3a8.png",
				sheet_x: 45,
				sheet_y: 43,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F3A8",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f3a8.png",
				sheet_x: 45,
				sheet_y: 44,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F3A8",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f3a8.png",
				sheet_x: 45,
				sheet_y: 45,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F3A8",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f3a8.png",
				sheet_x: 45,
				sheet_y: 46,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Artist",
		b: "1F9D1-200D-1F3A8",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			45,
			41
		],
		o: 12
	},
	"flag-lc": {
		a: "St. Lucia Flag",
		b: "1F1F1-1F1E8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			50
		],
		o: 2
	},
	hole: {
		a: "Hole",
		b: "1F573-FE0F",
		c: "1F573",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"embarrassing"
		],
		k: [
			29,
			8
		],
		o: 2
	},
	"male-artist": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F3A8",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f3a8.png",
				sheet_x: 15,
				sheet_y: 6,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F3A8",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f3a8.png",
				sheet_x: 15,
				sheet_y: 7,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F3A8",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f3a8.png",
				sheet_x: 15,
				sheet_y: 8,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F3A8",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f3a8.png",
				sheet_x: 15,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F3A8",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f3a8.png",
				sheet_x: 15,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Artist",
		b: "1F468-200D-1F3A8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			5
		],
		o: 4
	},
	clock1: {
		a: "Clock Face One Oclock",
		b: "1F550",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			39
		],
		o: 2
	},
	eight: {
		a: "Keycap 8",
		b: "0038-FE0F-20E3",
		c: "0038-20E3",
		d: true,
		e: true,
		f: true,
		h: false,
		j: [
			"8",
			"blue-square",
			"numbers"
		],
		k: [
			0,
			10
		],
		o: 0
	},
	mailbox_with_no_mail: {
		a: "Open Mailbox with Lowered Flag",
		b: "1F4ED",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"email",
			"inbox"
		],
		k: [
			27,
			10
		],
		o: 2
	},
	"flag-li": {
		a: "Liechtenstein Flag",
		b: "1F1F1-1F1EE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			51
		],
		o: 2
	},
	bomb: {
		a: "Bomb",
		b: "1F4A3",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"boom",
			"explode",
			"explosion",
			"terrorism"
		],
		k: [
			25,
			45
		],
		o: 2
	},
	nine: {
		a: "Keycap 9",
		b: "0039-FE0F-20E3",
		c: "0039-20E3",
		d: true,
		e: true,
		f: true,
		h: false,
		j: [
			"blue-square",
			"numbers",
			"9"
		],
		k: [
			0,
			11
		],
		o: 0
	},
	postbox: {
		a: "Postbox",
		b: "1F4EE",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"email",
			"letter",
			"envelope"
		],
		k: [
			27,
			11
		],
		o: 2
	},
	"female-artist": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F3A8",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f3a8.png",
				sheet_x: 17,
				sheet_y: 53,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F3A8",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f3a8.png",
				sheet_x: 17,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F3A8",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f3a8.png",
				sheet_x: 17,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F3A8",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f3a8.png",
				sheet_x: 17,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F3A8",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f3a8.png",
				sheet_x: 18,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Artist",
		b: "1F469-200D-1F3A8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			17,
			52
		],
		o: 4
	},
	clock130: {
		a: "Clock Face One-Thirty",
		b: "1F55C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			51
		],
		o: 2
	},
	"flag-lk": {
		a: "Sri Lanka Flag",
		b: "1F1F1-1F1F0",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			52
		],
		o: 2
	},
	ballot_box_with_ballot: {
		a: "Ballot Box with Ballot",
		b: "1F5F3-FE0F",
		c: "1F5F3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			30,
			28
		],
		o: 2
	},
	pilot: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-2708-FE0F",
				non_qualified: "1F9D1-1F3FB-200D-2708",
				image: "1f9d1-1f3fb-200d-2708-fe0f.png",
				sheet_x: 48,
				sheet_y: 5,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-2708-FE0F",
				non_qualified: "1F9D1-1F3FC-200D-2708",
				image: "1f9d1-1f3fc-200d-2708-fe0f.png",
				sheet_x: 48,
				sheet_y: 6,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-2708-FE0F",
				non_qualified: "1F9D1-1F3FD-200D-2708",
				image: "1f9d1-1f3fd-200d-2708-fe0f.png",
				sheet_x: 48,
				sheet_y: 7,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-2708-FE0F",
				non_qualified: "1F9D1-1F3FE-200D-2708",
				image: "1f9d1-1f3fe-200d-2708-fe0f.png",
				sheet_x: 48,
				sheet_y: 8,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-2708-FE0F",
				non_qualified: "1F9D1-1F3FF-200D-2708",
				image: "1f9d1-1f3ff-200d-2708-fe0f.png",
				sheet_x: 48,
				sheet_y: 9,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Pilot",
		b: "1F9D1-200D-2708-FE0F",
		c: "1F9D1-200D-2708",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			48,
			4
		],
		o: 12
	},
	keycap_ten: {
		a: "Keycap Ten",
		b: "1F51F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"numbers",
			"10",
			"blue-square"
		],
		k: [
			28,
			2
		],
		o: 2
	},
	clock2: {
		a: "Clock Face Two Oclock",
		b: "1F551",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			40
		],
		o: 2
	},
	"flag-lr": {
		a: "Liberia Flag",
		b: "1F1F1-1F1F7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			53
		],
		o: 2
	},
	speech_balloon: {
		a: "Speech Balloon",
		b: "1F4AC",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"bubble",
			"words",
			"message",
			"talk",
			"chatting"
		],
		k: [
			26,
			2
		],
		o: 2
	},
	"eye-in-speech-bubble": {
		a: "Eye in Speech Bubble",
		b: "1F441-FE0F-200D-1F5E8-FE0F",
		d: true,
		e: true,
		f: false,
		h: false,
		k: [
			12,
			37
		],
		o: 2
	},
	"flag-ls": {
		a: "Lesotho Flag",
		b: "1F1F1-1F1F8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			54
		],
		o: 2
	},
	clock230: {
		a: "Clock Face Two-Thirty",
		b: "1F55D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			52
		],
		o: 2
	},
	"male-pilot": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-2708-FE0F",
				non_qualified: "1F468-1F3FB-200D-2708",
				image: "1f468-1f3fb-200d-2708-fe0f.png",
				sheet_x: 17,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-2708-FE0F",
				non_qualified: "1F468-1F3FC-200D-2708",
				image: "1f468-1f3fc-200d-2708-fe0f.png",
				sheet_x: 17,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-2708-FE0F",
				non_qualified: "1F468-1F3FD-200D-2708",
				image: "1f468-1f3fd-200d-2708-fe0f.png",
				sheet_x: 17,
				sheet_y: 17,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-2708-FE0F",
				non_qualified: "1F468-1F3FE-200D-2708",
				image: "1f468-1f3fe-200d-2708-fe0f.png",
				sheet_x: 17,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-2708-FE0F",
				non_qualified: "1F468-1F3FF-200D-2708",
				image: "1f468-1f3ff-200d-2708-fe0f.png",
				sheet_x: 17,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Pilot",
		b: "1F468-200D-2708-FE0F",
		c: "1F468-200D-2708",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			17,
			14
		],
		o: 4
	},
	capital_abcd: {
		a: "Input Symbol for Latin Capital Letters",
		b: "1F520",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"alphabet",
			"words",
			"blue-square"
		],
		k: [
			28,
			3
		],
		o: 2
	},
	pencil2: {
		a: "Pencil",
		b: "270F-FE0F",
		c: "270F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"stationery",
			"write",
			"paper",
			"writing",
			"school",
			"study"
		],
		k: [
			55,
			10
		],
		o: 2
	},
	"female-pilot": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-2708-FE0F",
				non_qualified: "1F469-1F3FB-200D-2708",
				image: "1f469-1f3fb-200d-2708-fe0f.png",
				sheet_x: 20,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-2708-FE0F",
				non_qualified: "1F469-1F3FC-200D-2708",
				image: "1f469-1f3fc-200d-2708-fe0f.png",
				sheet_x: 20,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-2708-FE0F",
				non_qualified: "1F469-1F3FD-200D-2708",
				image: "1f469-1f3fd-200d-2708-fe0f.png",
				sheet_x: 20,
				sheet_y: 2,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-2708-FE0F",
				non_qualified: "1F469-1F3FE-200D-2708",
				image: "1f469-1f3fe-200d-2708-fe0f.png",
				sheet_x: 20,
				sheet_y: 3,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-2708-FE0F",
				non_qualified: "1F469-1F3FF-200D-2708",
				image: "1f469-1f3ff-200d-2708-fe0f.png",
				sheet_x: 20,
				sheet_y: 4,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Pilot",
		b: "1F469-200D-2708-FE0F",
		c: "1F469-200D-2708",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			19,
			56
		],
		o: 4
	},
	black_nib: {
		a: "Black Nib",
		b: "2712-FE0F",
		c: "2712",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"pen",
			"stationery",
			"writing",
			"write"
		],
		k: [
			55,
			11
		],
		o: 2
	},
	left_speech_bubble: {
		a: "Left Speech Bubble",
		b: "1F5E8-FE0F",
		c: "1F5E8",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"words",
			"message",
			"talk",
			"chatting"
		],
		k: [
			30,
			26
		],
		o: 2
	},
	clock3: {
		a: "Clock Face Three Oclock",
		b: "1F552",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			41
		],
		o: 2
	},
	abcd: {
		a: "Input Symbol for Latin Small Letters",
		b: "1F521",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"alphabet"
		],
		k: [
			28,
			4
		],
		o: 2
	},
	"flag-lt": {
		a: "Lithuania Flag",
		b: "1F1F1-1F1F9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			55
		],
		o: 2
	},
	clock330: {
		a: "Clock Face Three-Thirty",
		b: "1F55E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			53
		],
		o: 2
	},
	astronaut: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F680",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f680.png",
				sheet_x: 46,
				sheet_y: 27,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F680",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f680.png",
				sheet_x: 46,
				sheet_y: 28,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F680",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f680.png",
				sheet_x: 46,
				sheet_y: 29,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F680",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f680.png",
				sheet_x: 46,
				sheet_y: 30,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F680",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f680.png",
				sheet_x: 46,
				sheet_y: 31,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Astronaut",
		b: "1F9D1-200D-1F680",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			46,
			26
		],
		o: 12
	},
	"flag-lu": {
		a: "Luxembourg Flag",
		b: "1F1F1-1F1FA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			2,
			56
		],
		o: 2
	},
	right_anger_bubble: {
		a: "Right Anger Bubble",
		b: "1F5EF-FE0F",
		c: "1F5EF",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"caption",
			"speech",
			"thinking",
			"mad"
		],
		k: [
			30,
			27
		],
		o: 2
	},
	lower_left_fountain_pen: {
		a: "Lower Left Fountain Pen",
		b: "1F58B-FE0F",
		c: "1F58B",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			29,
			45
		],
		o: 2
	},
	"male-astronaut": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F680",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f680.png",
				sheet_x: 16,
				sheet_y: 6,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F680",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f680.png",
				sheet_x: 16,
				sheet_y: 7,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F680",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f680.png",
				sheet_x: 16,
				sheet_y: 8,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F680",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f680.png",
				sheet_x: 16,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F680",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f680.png",
				sheet_x: 16,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Astronaut",
		b: "1F468-200D-1F680",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			16,
			5
		],
		o: 4
	},
	thought_balloon: {
		a: "Thought Balloon",
		b: "1F4AD",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"bubble",
			"cloud",
			"speech",
			"thinking",
			"dream"
		],
		k: [
			26,
			3
		],
		o: 2
	},
	symbols: {
		a: "Input Symbol for Symbols",
		b: "1F523",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"music",
			"note",
			"ampersand",
			"percent",
			"glyphs",
			"characters"
		],
		k: [
			28,
			6
		],
		o: 2
	},
	clock4: {
		a: "Clock Face Four Oclock",
		b: "1F553",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			42
		],
		o: 2
	},
	"flag-lv": {
		a: "Latvia Flag",
		b: "1F1F1-1F1FB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			0
		],
		o: 2
	},
	lower_left_ballpoint_pen: {
		a: "Lower Left Ballpoint Pen",
		b: "1F58A-FE0F",
		c: "1F58A",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			29,
			44
		],
		o: 2
	},
	abc: {
		a: "Input Symbol for Latin Letters",
		b: "1F524",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"alphabet"
		],
		k: [
			28,
			7
		],
		o: 2
	},
	zzz: {
		a: "Sleeping Symbol",
		b: "1F4A4",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sleepy",
			"tired",
			"dream"
		],
		k: [
			25,
			46
		],
		o: 2
	},
	lower_left_paintbrush: {
		a: "Lower Left Paintbrush",
		b: "1F58C-FE0F",
		c: "1F58C",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			29,
			46
		],
		o: 2
	},
	"female-astronaut": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F680",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f680.png",
				sheet_x: 18,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F680",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f680.png",
				sheet_x: 18,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F680",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f680.png",
				sheet_x: 18,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F680",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f680.png",
				sheet_x: 18,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F680",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f680.png",
				sheet_x: 18,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Astronaut",
		b: "1F469-200D-1F680",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			18,
			47
		],
		o: 4
	},
	"flag-ly": {
		a: "Libya Flag",
		b: "1F1F1-1F1FE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			1
		],
		o: 2
	},
	clock430: {
		a: "Clock Face Four-Thirty",
		b: "1F55F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			54
		],
		o: 2
	},
	"flag-ma": {
		a: "Morocco Flag",
		b: "1F1F2-1F1E6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			2
		],
		o: 2
	},
	a: {
		a: "Negative Squared Latin Capital Letter a",
		b: "1F170-FE0F",
		c: "1F170",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"red-square",
			"alphabet",
			"letter"
		],
		k: [
			0,
			16
		],
		o: 2
	},
	clock5: {
		a: "Clock Face Five Oclock",
		b: "1F554",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			43
		],
		o: 2
	},
	lower_left_crayon: {
		a: "Lower Left Crayon",
		b: "1F58D-FE0F",
		c: "1F58D",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			29,
			47
		],
		o: 2
	},
	firefighter: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F692",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f692.png",
				sheet_x: 46,
				sheet_y: 33,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F692",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f692.png",
				sheet_x: 46,
				sheet_y: 34,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F692",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f692.png",
				sheet_x: 46,
				sheet_y: 35,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F692",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f692.png",
				sheet_x: 46,
				sheet_y: 36,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F692",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f692.png",
				sheet_x: 46,
				sheet_y: 37,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Firefighter",
		b: "1F9D1-200D-1F692",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			46,
			32
		],
		o: 12
	},
	"male-firefighter": {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F692",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f692.png",
				sheet_x: 16,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F692",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f692.png",
				sheet_x: 16,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F692",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f692.png",
				sheet_x: 16,
				sheet_y: 14,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F692",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f692.png",
				sheet_x: 16,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F692",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f692.png",
				sheet_x: 16,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Firefighter",
		b: "1F468-200D-1F692",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			16,
			11
		],
		o: 4
	},
	memo: {
		a: "Memo",
		b: "1F4DD",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"write",
			"documents",
			"stationery",
			"pencil",
			"paper",
			"writing",
			"legal",
			"exam",
			"quiz",
			"test",
			"study",
			"compose"
		],
		k: [
			26,
			51
		],
		n: [
			"pencil"
		],
		o: 2
	},
	ab: {
		a: "Negative Squared Ab",
		b: "1F18E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"red-square",
			"alphabet"
		],
		k: [
			0,
			20
		],
		o: 2
	},
	"flag-mc": {
		a: "Monaco Flag",
		b: "1F1F2-1F1E8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			3
		],
		o: 2
	},
	clock530: {
		a: "Clock Face Five-Thirty",
		b: "1F560",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			55
		],
		o: 2
	},
	briefcase: {
		a: "Briefcase",
		b: "1F4BC",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"business",
			"documents",
			"work",
			"law",
			"legal",
			"job",
			"career"
		],
		k: [
			26,
			18
		],
		o: 2
	},
	"female-firefighter": {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F692",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f692.png",
				sheet_x: 18,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F692",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f692.png",
				sheet_x: 18,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F692",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f692.png",
				sheet_x: 18,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F692",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f692.png",
				sheet_x: 19,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F692",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f692.png",
				sheet_x: 19,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Firefighter",
		b: "1F469-200D-1F692",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			18,
			53
		],
		o: 4
	},
	clock6: {
		a: "Clock Face Six Oclock",
		b: "1F555",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule",
			"dawn",
			"dusk"
		],
		k: [
			28,
			44
		],
		o: 2
	},
	b: {
		a: "Negative Squared Latin Capital Letter B",
		b: "1F171-FE0F",
		c: "1F171",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"red-square",
			"alphabet",
			"letter"
		],
		k: [
			0,
			17
		],
		o: 2
	},
	"flag-md": {
		a: "Moldova Flag",
		b: "1F1F2-1F1E9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			4
		],
		o: 2
	},
	clock630: {
		a: "Clock Face Six-Thirty",
		b: "1F561",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			56
		],
		o: 2
	},
	cl: {
		a: "Squared Cl",
		b: "1F191",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"alphabet",
			"words",
			"red-square"
		],
		k: [
			0,
			21
		],
		o: 2
	},
	"flag-me": {
		a: "Montenegro Flag",
		b: "1F1F2-1F1EA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			5
		],
		o: 2
	},
	file_folder: {
		a: "File Folder",
		b: "1F4C1",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"documents",
			"business",
			"office"
		],
		k: [
			26,
			23
		],
		o: 2
	},
	cop: {
		skin_variations: {
			"1F3FB": {
				unified: "1F46E-1F3FB",
				non_qualified: null,
				image: "1f46e-1f3fb.png",
				sheet_x: 21,
				sheet_y: 50,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F46E-1F3FC",
				non_qualified: null,
				image: "1f46e-1f3fc.png",
				sheet_x: 21,
				sheet_y: 51,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F46E-1F3FD",
				non_qualified: null,
				image: "1f46e-1f3fd.png",
				sheet_x: 21,
				sheet_y: 52,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F46E-1F3FE",
				non_qualified: null,
				image: "1f46e-1f3fe.png",
				sheet_x: 21,
				sheet_y: 53,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F46E-1F3FF",
				non_qualified: null,
				image: "1f46e-1f3ff.png",
				sheet_x: 21,
				sheet_y: 54,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F46E-200D-2642-FE0F",
		a: "Police Officer",
		b: "1F46E",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			21,
			49
		],
		o: 2
	},
	"male-police-officer": {
		skin_variations: {
			"1F3FB": {
				unified: "1F46E-1F3FB-200D-2642-FE0F",
				non_qualified: "1F46E-1F3FB-200D-2642",
				image: "1f46e-1f3fb-200d-2642-fe0f.png",
				sheet_x: 21,
				sheet_y: 44,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F46E-1F3FC-200D-2642-FE0F",
				non_qualified: "1F46E-1F3FC-200D-2642",
				image: "1f46e-1f3fc-200d-2642-fe0f.png",
				sheet_x: 21,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F46E-1F3FD-200D-2642-FE0F",
				non_qualified: "1F46E-1F3FD-200D-2642",
				image: "1f46e-1f3fd-200d-2642-fe0f.png",
				sheet_x: 21,
				sheet_y: 46,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F46E-1F3FE-200D-2642-FE0F",
				non_qualified: "1F46E-1F3FE-200D-2642",
				image: "1f46e-1f3fe-200d-2642-fe0f.png",
				sheet_x: 21,
				sheet_y: 47,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F46E-1F3FF-200D-2642-FE0F",
				non_qualified: "1F46E-1F3FF-200D-2642",
				image: "1f46e-1f3ff-200d-2642-fe0f.png",
				sheet_x: 21,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F46E",
		a: "Male Police Officer",
		b: "1F46E-200D-2642-FE0F",
		c: "1F46E-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			21,
			43
		],
		o: 4
	},
	cool: {
		a: "Squared Cool",
		b: "1F192",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"words",
			"blue-square"
		],
		k: [
			0,
			22
		],
		o: 2
	},
	clock7: {
		a: "Clock Face Seven Oclock",
		b: "1F556",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			45
		],
		o: 2
	},
	"flag-mf": {
		a: "St. Martin Flag",
		b: "1F1F2-1F1EB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			6
		],
		o: 2
	},
	open_file_folder: {
		a: "Open File Folder",
		b: "1F4C2",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"documents",
			"load"
		],
		k: [
			26,
			24
		],
		o: 2
	},
	card_index_dividers: {
		a: "Card Index Dividers",
		b: "1F5C2-FE0F",
		c: "1F5C2",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"organizing",
			"business",
			"stationery"
		],
		k: [
			30,
			15
		],
		o: 2
	},
	"flag-mg": {
		a: "Madagascar Flag",
		b: "1F1F2-1F1EC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			7
		],
		o: 2
	},
	free: {
		a: "Squared Free",
		b: "1F193",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"words"
		],
		k: [
			0,
			23
		],
		o: 2
	},
	"female-police-officer": {
		skin_variations: {
			"1F3FB": {
				unified: "1F46E-1F3FB-200D-2640-FE0F",
				non_qualified: "1F46E-1F3FB-200D-2640",
				image: "1f46e-1f3fb-200d-2640-fe0f.png",
				sheet_x: 21,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F46E-1F3FC-200D-2640-FE0F",
				non_qualified: "1F46E-1F3FC-200D-2640",
				image: "1f46e-1f3fc-200d-2640-fe0f.png",
				sheet_x: 21,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F46E-1F3FD-200D-2640-FE0F",
				non_qualified: "1F46E-1F3FD-200D-2640",
				image: "1f46e-1f3fd-200d-2640-fe0f.png",
				sheet_x: 21,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F46E-1F3FE-200D-2640-FE0F",
				non_qualified: "1F46E-1F3FE-200D-2640",
				image: "1f46e-1f3fe-200d-2640-fe0f.png",
				sheet_x: 21,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F46E-1F3FF-200D-2640-FE0F",
				non_qualified: "1F46E-1F3FF-200D-2640",
				image: "1f46e-1f3ff-200d-2640-fe0f.png",
				sheet_x: 21,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Police Officer",
		b: "1F46E-200D-2640-FE0F",
		c: "1F46E-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			21,
			37
		],
		o: 4
	},
	clock730: {
		a: "Clock Face Seven-Thirty",
		b: "1F562",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			29,
			0
		],
		o: 2
	},
	date: {
		a: "Calendar",
		b: "1F4C5",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"calendar",
			"schedule"
		],
		k: [
			26,
			27
		],
		o: 2
	},
	clock8: {
		a: "Clock Face Eight Oclock",
		b: "1F557",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			46
		],
		o: 2
	},
	information_source: {
		a: "Information Source",
		b: "2139-FE0F",
		c: "2139",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"alphabet",
			"letter"
		],
		k: [
			52,
			13
		],
		o: 2
	},
	sleuth_or_spy: {
		skin_variations: {
			"1F3FB": {
				unified: "1F575-1F3FB",
				non_qualified: null,
				image: "1f575-1f3fb.png",
				sheet_x: 29,
				sheet_y: 28,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F575-1F3FC",
				non_qualified: null,
				image: "1f575-1f3fc.png",
				sheet_x: 29,
				sheet_y: 29,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F575-1F3FD",
				non_qualified: null,
				image: "1f575-1f3fd.png",
				sheet_x: 29,
				sheet_y: 30,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F575-1F3FE",
				non_qualified: null,
				image: "1f575-1f3fe.png",
				sheet_x: 29,
				sheet_y: 31,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F575-1F3FF",
				non_qualified: null,
				image: "1f575-1f3ff.png",
				sheet_x: 29,
				sheet_y: 32,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F575-FE0F-200D-2642-FE0F",
		a: "Sleuth or Spy",
		b: "1F575-FE0F",
		c: "1F575",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			29,
			27
		],
		o: 2
	},
	"flag-mh": {
		a: "Marshall Islands Flag",
		b: "1F1F2-1F1ED",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			8
		],
		o: 2
	},
	clock830: {
		a: "Clock Face Eight-Thirty",
		b: "1F563",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			29,
			1
		],
		o: 2
	},
	calendar: {
		a: "Tear-off Calendar",
		b: "1F4C6",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"schedule",
			"date",
			"planning"
		],
		k: [
			26,
			28
		],
		o: 2
	},
	"male-detective": {
		skin_variations: {
			"1F3FB": {
				unified: "1F575-1F3FB-200D-2642-FE0F",
				non_qualified: "1F575-1F3FB-200D-2642",
				image: "1f575-1f3fb-200d-2642-fe0f.png",
				sheet_x: 29,
				sheet_y: 22,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F575-1F3FC-200D-2642-FE0F",
				non_qualified: "1F575-1F3FC-200D-2642",
				image: "1f575-1f3fc-200d-2642-fe0f.png",
				sheet_x: 29,
				sheet_y: 23,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F575-1F3FD-200D-2642-FE0F",
				non_qualified: "1F575-1F3FD-200D-2642",
				image: "1f575-1f3fd-200d-2642-fe0f.png",
				sheet_x: 29,
				sheet_y: 24,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F575-1F3FE-200D-2642-FE0F",
				non_qualified: "1F575-1F3FE-200D-2642",
				image: "1f575-1f3fe-200d-2642-fe0f.png",
				sheet_x: 29,
				sheet_y: 25,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F575-1F3FF-200D-2642-FE0F",
				non_qualified: "1F575-1F3FF-200D-2642",
				image: "1f575-1f3ff-200d-2642-fe0f.png",
				sheet_x: 29,
				sheet_y: 26,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F575-FE0F",
		a: "Male Detective",
		b: "1F575-FE0F-200D-2642-FE0F",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			29,
			21
		],
		o: 4
	},
	"flag-mk": {
		a: "North Macedonia Flag",
		b: "1F1F2-1F1F0",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			9
		],
		o: 2
	},
	id: {
		a: "Squared Id",
		b: "1F194",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"purple-square",
			"words"
		],
		k: [
			0,
			24
		],
		o: 2
	},
	spiral_note_pad: {
		a: "Spiral Note Pad",
		b: "1F5D2-FE0F",
		c: "1F5D2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			30,
			19
		],
		o: 2
	},
	"female-detective": {
		skin_variations: {
			"1F3FB": {
				unified: "1F575-1F3FB-200D-2640-FE0F",
				non_qualified: "1F575-1F3FB-200D-2640",
				image: "1f575-1f3fb-200d-2640-fe0f.png",
				sheet_x: 29,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F575-1F3FC-200D-2640-FE0F",
				non_qualified: "1F575-1F3FC-200D-2640",
				image: "1f575-1f3fc-200d-2640-fe0f.png",
				sheet_x: 29,
				sheet_y: 17,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F575-1F3FD-200D-2640-FE0F",
				non_qualified: "1F575-1F3FD-200D-2640",
				image: "1f575-1f3fd-200d-2640-fe0f.png",
				sheet_x: 29,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F575-1F3FE-200D-2640-FE0F",
				non_qualified: "1F575-1F3FE-200D-2640",
				image: "1f575-1f3fe-200d-2640-fe0f.png",
				sheet_x: 29,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F575-1F3FF-200D-2640-FE0F",
				non_qualified: "1F575-1F3FF-200D-2640",
				image: "1f575-1f3ff-200d-2640-fe0f.png",
				sheet_x: 29,
				sheet_y: 20,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Detective",
		b: "1F575-FE0F-200D-2640-FE0F",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			29,
			15
		],
		o: 4
	},
	clock9: {
		a: "Clock Face Nine Oclock",
		b: "1F558",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			47
		],
		o: 2
	},
	"flag-ml": {
		a: "Mali Flag",
		b: "1F1F2-1F1F1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			10
		],
		o: 2
	},
	m: {
		a: "Circled Latin Capital Letter M",
		b: "24C2-FE0F",
		c: "24C2",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"alphabet",
			"blue-circle",
			"letter"
		],
		k: [
			52,
			40
		],
		o: 2
	},
	"flag-mm": {
		a: "Myanmar (burma) Flag",
		b: "1F1F2-1F1F2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			11
		],
		o: 2
	},
	clock930: {
		a: "Clock Face Nine-Thirty",
		b: "1F564",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			29,
			2
		],
		o: 2
	},
	guardsman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F482-1F3FB",
				non_qualified: null,
				image: "1f482-1f3fb.png",
				sheet_x: 24,
				sheet_y: 21,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F482-1F3FC",
				non_qualified: null,
				image: "1f482-1f3fc.png",
				sheet_x: 24,
				sheet_y: 22,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F482-1F3FD",
				non_qualified: null,
				image: "1f482-1f3fd.png",
				sheet_x: 24,
				sheet_y: 23,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F482-1F3FE",
				non_qualified: null,
				image: "1f482-1f3fe.png",
				sheet_x: 24,
				sheet_y: 24,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F482-1F3FF",
				non_qualified: null,
				image: "1f482-1f3ff.png",
				sheet_x: 24,
				sheet_y: 25,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F482-200D-2642-FE0F",
		a: "Guardsman",
		b: "1F482",
		d: true,
		e: true,
		f: true,
		h: false,
		j: [
			"uk",
			"gb",
			"british",
			"male",
			"guy",
			"royal"
		],
		k: [
			24,
			20
		],
		o: 2
	},
	"new": {
		a: "Squared New",
		b: "1F195",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"words",
			"start"
		],
		k: [
			0,
			25
		],
		o: 2
	},
	spiral_calendar_pad: {
		a: "Spiral Calendar Pad",
		b: "1F5D3-FE0F",
		c: "1F5D3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			30,
			20
		],
		o: 2
	},
	ng: {
		a: "Squared Ng",
		b: "1F196",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"words",
			"shape",
			"icon"
		],
		k: [
			0,
			26
		],
		o: 2
	},
	card_index: {
		a: "Card Index",
		b: "1F4C7",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"business",
			"stationery"
		],
		k: [
			26,
			29
		],
		o: 2
	},
	clock10: {
		a: "Clock Face Ten Oclock",
		b: "1F559",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			48
		],
		o: 2
	},
	"flag-mn": {
		a: "Mongolia Flag",
		b: "1F1F2-1F1F3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			12
		],
		o: 2
	},
	"male-guard": {
		skin_variations: {
			"1F3FB": {
				unified: "1F482-1F3FB-200D-2642-FE0F",
				non_qualified: "1F482-1F3FB-200D-2642",
				image: "1f482-1f3fb-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F482-1F3FC-200D-2642-FE0F",
				non_qualified: "1F482-1F3FC-200D-2642",
				image: "1f482-1f3fc-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F482-1F3FD-200D-2642-FE0F",
				non_qualified: "1F482-1F3FD-200D-2642",
				image: "1f482-1f3fd-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 17,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F482-1F3FE-200D-2642-FE0F",
				non_qualified: "1F482-1F3FE-200D-2642",
				image: "1f482-1f3fe-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F482-1F3FF-200D-2642-FE0F",
				non_qualified: "1F482-1F3FF-200D-2642",
				image: "1f482-1f3ff-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F482",
		a: "Male Guard",
		b: "1F482-200D-2642-FE0F",
		c: "1F482-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			24,
			14
		],
		o: 4
	},
	"flag-mo": {
		a: "Macao Sar China Flag",
		b: "1F1F2-1F1F4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			13
		],
		o: 2
	},
	clock1030: {
		a: "Clock Face Ten-Thirty",
		b: "1F565",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			29,
			3
		],
		o: 2
	},
	chart_with_upwards_trend: {
		a: "Chart with Upwards Trend",
		b: "1F4C8",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"graph",
			"presentation",
			"stats",
			"recovery",
			"business",
			"economics",
			"money",
			"sales",
			"good",
			"success"
		],
		k: [
			26,
			30
		],
		o: 2
	},
	o2: {
		a: "Negative Squared Latin Capital Letter O",
		b: "1F17E-FE0F",
		c: "1F17E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"alphabet",
			"red-square",
			"letter"
		],
		k: [
			0,
			18
		],
		o: 2
	},
	"female-guard": {
		skin_variations: {
			"1F3FB": {
				unified: "1F482-1F3FB-200D-2640-FE0F",
				non_qualified: "1F482-1F3FB-200D-2640",
				image: "1f482-1f3fb-200d-2640-fe0f.png",
				sheet_x: 24,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F482-1F3FC-200D-2640-FE0F",
				non_qualified: "1F482-1F3FC-200D-2640",
				image: "1f482-1f3fc-200d-2640-fe0f.png",
				sheet_x: 24,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F482-1F3FD-200D-2640-FE0F",
				non_qualified: "1F482-1F3FD-200D-2640",
				image: "1f482-1f3fd-200d-2640-fe0f.png",
				sheet_x: 24,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F482-1F3FE-200D-2640-FE0F",
				non_qualified: "1F482-1F3FE-200D-2640",
				image: "1f482-1f3fe-200d-2640-fe0f.png",
				sheet_x: 24,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F482-1F3FF-200D-2640-FE0F",
				non_qualified: "1F482-1F3FF-200D-2640",
				image: "1f482-1f3ff-200d-2640-fe0f.png",
				sheet_x: 24,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Guard",
		b: "1F482-200D-2640-FE0F",
		c: "1F482-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			24,
			8
		],
		o: 4
	},
	chart_with_downwards_trend: {
		a: "Chart with Downwards Trend",
		b: "1F4C9",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"graph",
			"presentation",
			"stats",
			"recession",
			"business",
			"economics",
			"money",
			"sales",
			"bad",
			"failure"
		],
		k: [
			26,
			31
		],
		o: 2
	},
	"flag-mp": {
		a: "Northern Mariana Islands Flag",
		b: "1F1F2-1F1F5",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			14
		],
		o: 2
	},
	ok: {
		a: "Squared Ok",
		b: "1F197",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"good",
			"agree",
			"yes",
			"blue-square"
		],
		k: [
			0,
			27
		],
		o: 2
	},
	clock11: {
		a: "Clock Face Eleven Oclock",
		b: "1F55A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			28,
			49
		],
		o: 2
	},
	construction_worker: {
		skin_variations: {
			"1F3FB": {
				unified: "1F477-1F3FB",
				non_qualified: null,
				image: "1f477-1f3fb.png",
				sheet_x: 23,
				sheet_y: 23,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F477-1F3FC",
				non_qualified: null,
				image: "1f477-1f3fc.png",
				sheet_x: 23,
				sheet_y: 24,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F477-1F3FD",
				non_qualified: null,
				image: "1f477-1f3fd.png",
				sheet_x: 23,
				sheet_y: 25,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F477-1F3FE",
				non_qualified: null,
				image: "1f477-1f3fe.png",
				sheet_x: 23,
				sheet_y: 26,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F477-1F3FF",
				non_qualified: null,
				image: "1f477-1f3ff.png",
				sheet_x: 23,
				sheet_y: 27,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F477-200D-2642-FE0F",
		a: "Construction Worker",
		b: "1F477",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			23,
			22
		],
		o: 2
	},
	"male-construction-worker": {
		skin_variations: {
			"1F3FB": {
				unified: "1F477-1F3FB-200D-2642-FE0F",
				non_qualified: "1F477-1F3FB-200D-2642",
				image: "1f477-1f3fb-200d-2642-fe0f.png",
				sheet_x: 23,
				sheet_y: 17,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F477-1F3FC-200D-2642-FE0F",
				non_qualified: "1F477-1F3FC-200D-2642",
				image: "1f477-1f3fc-200d-2642-fe0f.png",
				sheet_x: 23,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F477-1F3FD-200D-2642-FE0F",
				non_qualified: "1F477-1F3FD-200D-2642",
				image: "1f477-1f3fd-200d-2642-fe0f.png",
				sheet_x: 23,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F477-1F3FE-200D-2642-FE0F",
				non_qualified: "1F477-1F3FE-200D-2642",
				image: "1f477-1f3fe-200d-2642-fe0f.png",
				sheet_x: 23,
				sheet_y: 20,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F477-1F3FF-200D-2642-FE0F",
				non_qualified: "1F477-1F3FF-200D-2642",
				image: "1f477-1f3ff-200d-2642-fe0f.png",
				sheet_x: 23,
				sheet_y: 21,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F477",
		a: "Male Construction Worker",
		b: "1F477-200D-2642-FE0F",
		c: "1F477-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			23,
			16
		],
		o: 4
	},
	clock1130: {
		a: "Clock Face Eleven-Thirty",
		b: "1F566",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"time",
			"late",
			"early",
			"schedule"
		],
		k: [
			29,
			4
		],
		o: 2
	},
	"flag-mq": {
		a: "Martinique Flag",
		b: "1F1F2-1F1F6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			15
		],
		o: 2
	},
	bar_chart: {
		a: "Bar Chart",
		b: "1F4CA",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"graph",
			"presentation",
			"stats"
		],
		k: [
			26,
			32
		],
		o: 2
	},
	parking: {
		a: "Negative Squared Latin Capital Letter P",
		b: "1F17F-FE0F",
		c: "1F17F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"cars",
			"blue-square",
			"alphabet",
			"letter"
		],
		k: [
			0,
			19
		],
		o: 2
	},
	new_moon: {
		a: "New Moon Symbol",
		b: "1F311",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		k: [
			5,
			36
		],
		o: 2
	},
	"female-construction-worker": {
		skin_variations: {
			"1F3FB": {
				unified: "1F477-1F3FB-200D-2640-FE0F",
				non_qualified: "1F477-1F3FB-200D-2640",
				image: "1f477-1f3fb-200d-2640-fe0f.png",
				sheet_x: 23,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F477-1F3FC-200D-2640-FE0F",
				non_qualified: "1F477-1F3FC-200D-2640",
				image: "1f477-1f3fc-200d-2640-fe0f.png",
				sheet_x: 23,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F477-1F3FD-200D-2640-FE0F",
				non_qualified: "1F477-1F3FD-200D-2640",
				image: "1f477-1f3fd-200d-2640-fe0f.png",
				sheet_x: 23,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F477-1F3FE-200D-2640-FE0F",
				non_qualified: "1F477-1F3FE-200D-2640",
				image: "1f477-1f3fe-200d-2640-fe0f.png",
				sheet_x: 23,
				sheet_y: 14,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F477-1F3FF-200D-2640-FE0F",
				non_qualified: "1F477-1F3FF-200D-2640",
				image: "1f477-1f3ff-200d-2640-fe0f.png",
				sheet_x: 23,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Construction Worker",
		b: "1F477-200D-2640-FE0F",
		c: "1F477-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			23,
			10
		],
		o: 4
	},
	sos: {
		a: "Squared Sos",
		b: "1F198",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"help",
			"red-square",
			"words",
			"emergency",
			"911"
		],
		k: [
			0,
			28
		],
		o: 2
	},
	clipboard: {
		a: "Clipboard",
		b: "1F4CB",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"stationery",
			"documents"
		],
		k: [
			26,
			33
		],
		o: 2
	},
	"flag-mr": {
		a: "Mauritania Flag",
		b: "1F1F2-1F1F7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			16
		],
		o: 2
	},
	prince: {
		skin_variations: {
			"1F3FB": {
				unified: "1F934-1F3FB",
				non_qualified: null,
				image: "1f934-1f3fb.png",
				sheet_x: 39,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F934-1F3FC",
				non_qualified: null,
				image: "1f934-1f3fc.png",
				sheet_x: 39,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F934-1F3FD",
				non_qualified: null,
				image: "1f934-1f3fd.png",
				sheet_x: 39,
				sheet_y: 20,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F934-1F3FE",
				non_qualified: null,
				image: "1f934-1f3fe.png",
				sheet_x: 39,
				sheet_y: 21,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F934-1F3FF",
				non_qualified: null,
				image: "1f934-1f3ff.png",
				sheet_x: 39,
				sheet_y: 22,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Prince",
		b: "1F934",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"boy",
			"man",
			"male",
			"crown",
			"royal",
			"king"
		],
		k: [
			39,
			17
		],
		o: 4
	},
	waxing_crescent_moon: {
		a: "Waxing Crescent Moon Symbol",
		b: "1F312",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		k: [
			5,
			37
		],
		o: 2
	},
	"flag-ms": {
		a: "Montserrat Flag",
		b: "1F1F2-1F1F8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			17
		],
		o: 2
	},
	pushpin: {
		a: "Pushpin",
		b: "1F4CC",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"stationery",
			"mark",
			"here"
		],
		k: [
			26,
			34
		],
		o: 2
	},
	up: {
		a: "Squared Up with Exclamation Mark",
		b: "1F199",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"above",
			"high"
		],
		k: [
			0,
			29
		],
		o: 2
	},
	"flag-mt": {
		a: "Malta Flag",
		b: "1F1F2-1F1F9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			18
		],
		o: 2
	},
	princess: {
		skin_variations: {
			"1F3FB": {
				unified: "1F478-1F3FB",
				non_qualified: null,
				image: "1f478-1f3fb.png",
				sheet_x: 23,
				sheet_y: 29,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F478-1F3FC",
				non_qualified: null,
				image: "1f478-1f3fc.png",
				sheet_x: 23,
				sheet_y: 30,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F478-1F3FD",
				non_qualified: null,
				image: "1f478-1f3fd.png",
				sheet_x: 23,
				sheet_y: 31,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F478-1F3FE",
				non_qualified: null,
				image: "1f478-1f3fe.png",
				sheet_x: 23,
				sheet_y: 32,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F478-1F3FF",
				non_qualified: null,
				image: "1f478-1f3ff.png",
				sheet_x: 23,
				sheet_y: 33,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Princess",
		b: "1F478",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"girl",
			"woman",
			"female",
			"blond",
			"crown",
			"royal",
			"queen"
		],
		k: [
			23,
			28
		],
		o: 2
	},
	round_pushpin: {
		a: "Round Pushpin",
		b: "1F4CD",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"stationery",
			"location",
			"map",
			"here"
		],
		k: [
			26,
			35
		],
		o: 2
	},
	first_quarter_moon: {
		a: "First Quarter Moon Symbol",
		b: "1F313",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		k: [
			5,
			38
		],
		o: 2
	},
	vs: {
		a: "Squared Vs",
		b: "1F19A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"words",
			"orange-square"
		],
		k: [
			0,
			30
		],
		o: 2
	},
	"flag-mu": {
		a: "Mauritius Flag",
		b: "1F1F2-1F1FA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			19
		],
		o: 2
	},
	koko: {
		a: "Squared Katakana Koko",
		b: "1F201",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"blue-square",
			"here",
			"katakana",
			"japanese",
			"destination"
		],
		k: [
			5,
			4
		],
		o: 2
	},
	man_with_turban: {
		skin_variations: {
			"1F3FB": {
				unified: "1F473-1F3FB",
				non_qualified: null,
				image: "1f473-1f3fb.png",
				sheet_x: 22,
				sheet_y: 44,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F473-1F3FC",
				non_qualified: null,
				image: "1f473-1f3fc.png",
				sheet_x: 22,
				sheet_y: 45,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F473-1F3FD",
				non_qualified: null,
				image: "1f473-1f3fd.png",
				sheet_x: 22,
				sheet_y: 46,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F473-1F3FE",
				non_qualified: null,
				image: "1f473-1f3fe.png",
				sheet_x: 22,
				sheet_y: 47,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F473-1F3FF",
				non_qualified: null,
				image: "1f473-1f3ff.png",
				sheet_x: 22,
				sheet_y: 48,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F473-200D-2642-FE0F",
		a: "Man with Turban",
		b: "1F473",
		d: true,
		e: true,
		f: true,
		h: false,
		j: [
			"male",
			"indian",
			"hinduism",
			"arabs"
		],
		k: [
			22,
			43
		],
		o: 2
	},
	moon: {
		a: "Waxing Gibbous Moon Symbol",
		b: "1F314",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			5,
			39
		],
		n: [
			"waxing_gibbous_moon"
		],
		o: 2
	},
	paperclip: {
		a: "Paperclip",
		b: "1F4CE",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"documents",
			"stationery"
		],
		k: [
			26,
			36
		],
		o: 2
	},
	linked_paperclips: {
		a: "Linked Paperclips",
		b: "1F587-FE0F",
		c: "1F587",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			29,
			43
		],
		o: 2
	},
	"man-wearing-turban": {
		skin_variations: {
			"1F3FB": {
				unified: "1F473-1F3FB-200D-2642-FE0F",
				non_qualified: "1F473-1F3FB-200D-2642",
				image: "1f473-1f3fb-200d-2642-fe0f.png",
				sheet_x: 22,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F473-1F3FC-200D-2642-FE0F",
				non_qualified: "1F473-1F3FC-200D-2642",
				image: "1f473-1f3fc-200d-2642-fe0f.png",
				sheet_x: 22,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F473-1F3FD-200D-2642-FE0F",
				non_qualified: "1F473-1F3FD-200D-2642",
				image: "1f473-1f3fd-200d-2642-fe0f.png",
				sheet_x: 22,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F473-1F3FE-200D-2642-FE0F",
				non_qualified: "1F473-1F3FE-200D-2642",
				image: "1f473-1f3fe-200d-2642-fe0f.png",
				sheet_x: 22,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F473-1F3FF-200D-2642-FE0F",
				non_qualified: "1F473-1F3FF-200D-2642",
				image: "1f473-1f3ff-200d-2642-fe0f.png",
				sheet_x: 22,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F473",
		a: "Man Wearing Turban",
		b: "1F473-200D-2642-FE0F",
		c: "1F473-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			22,
			37
		],
		o: 4
	},
	sa: {
		a: "Squared Katakana Sa",
		b: "1F202-FE0F",
		c: "1F202",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"japanese",
			"blue-square",
			"katakana"
		],
		k: [
			5,
			5
		],
		o: 2
	},
	full_moon: {
		a: "Full Moon Symbol",
		b: "1F315",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"yellow",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		k: [
			5,
			40
		],
		o: 2
	},
	"flag-mv": {
		a: "Maldives Flag",
		b: "1F1F2-1F1FB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			20
		],
		o: 2
	},
	"flag-mw": {
		a: "Malawi Flag",
		b: "1F1F2-1F1FC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			21
		],
		o: 2
	},
	waning_gibbous_moon: {
		a: "Waning Gibbous Moon Symbol",
		b: "1F316",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep",
			"waxing_gibbous_moon"
		],
		k: [
			5,
			41
		],
		o: 2
	},
	"woman-wearing-turban": {
		skin_variations: {
			"1F3FB": {
				unified: "1F473-1F3FB-200D-2640-FE0F",
				non_qualified: "1F473-1F3FB-200D-2640",
				image: "1f473-1f3fb-200d-2640-fe0f.png",
				sheet_x: 22,
				sheet_y: 32,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F473-1F3FC-200D-2640-FE0F",
				non_qualified: "1F473-1F3FC-200D-2640",
				image: "1f473-1f3fc-200d-2640-fe0f.png",
				sheet_x: 22,
				sheet_y: 33,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F473-1F3FD-200D-2640-FE0F",
				non_qualified: "1F473-1F3FD-200D-2640",
				image: "1f473-1f3fd-200d-2640-fe0f.png",
				sheet_x: 22,
				sheet_y: 34,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F473-1F3FE-200D-2640-FE0F",
				non_qualified: "1F473-1F3FE-200D-2640",
				image: "1f473-1f3fe-200d-2640-fe0f.png",
				sheet_x: 22,
				sheet_y: 35,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F473-1F3FF-200D-2640-FE0F",
				non_qualified: "1F473-1F3FF-200D-2640",
				image: "1f473-1f3ff-200d-2640-fe0f.png",
				sheet_x: 22,
				sheet_y: 36,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Wearing Turban",
		b: "1F473-200D-2640-FE0F",
		c: "1F473-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			22,
			31
		],
		o: 4
	},
	u6708: {
		a: "Squared Cjk Unified Ideograph-6708",
		b: "1F237-FE0F",
		c: "1F237",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"chinese",
			"month",
			"moon",
			"japanese",
			"orange-square",
			"kanji"
		],
		k: [
			5,
			13
		],
		o: 2
	},
	straight_ruler: {
		a: "Straight Ruler",
		b: "1F4CF",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"stationery",
			"calculate",
			"length",
			"math",
			"school",
			"drawing",
			"architect",
			"sketch"
		],
		k: [
			26,
			37
		],
		o: 2
	},
	u6709: {
		a: "Squared Cjk Unified Ideograph-6709",
		b: "1F236",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"orange-square",
			"chinese",
			"have",
			"kanji"
		],
		k: [
			5,
			12
		],
		o: 2
	},
	triangular_ruler: {
		a: "Triangular Ruler",
		b: "1F4D0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"stationery",
			"math",
			"architect",
			"sketch"
		],
		k: [
			26,
			38
		],
		o: 2
	},
	man_with_gua_pi_mao: {
		skin_variations: {
			"1F3FB": {
				unified: "1F472-1F3FB",
				non_qualified: null,
				image: "1f472-1f3fb.png",
				sheet_x: 22,
				sheet_y: 26,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F472-1F3FC",
				non_qualified: null,
				image: "1f472-1f3fc.png",
				sheet_x: 22,
				sheet_y: 27,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F472-1F3FD",
				non_qualified: null,
				image: "1f472-1f3fd.png",
				sheet_x: 22,
				sheet_y: 28,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F472-1F3FE",
				non_qualified: null,
				image: "1f472-1f3fe.png",
				sheet_x: 22,
				sheet_y: 29,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F472-1F3FF",
				non_qualified: null,
				image: "1f472-1f3ff.png",
				sheet_x: 22,
				sheet_y: 30,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man with Gua Pi Mao",
		b: "1F472",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"male",
			"boy",
			"chinese"
		],
		k: [
			22,
			25
		],
		o: 2
	},
	"flag-mx": {
		a: "Mexico Flag",
		b: "1F1F2-1F1FD",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			22
		],
		o: 2
	},
	last_quarter_moon: {
		a: "Last Quarter Moon Symbol",
		b: "1F317",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		k: [
			5,
			42
		],
		o: 2
	},
	person_with_headscarf: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D5-1F3FB",
				non_qualified: null,
				image: "1f9d5-1f3fb.png",
				sheet_x: 48,
				sheet_y: 35,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9D5-1F3FC",
				non_qualified: null,
				image: "1f9d5-1f3fc.png",
				sheet_x: 48,
				sheet_y: 36,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9D5-1F3FD",
				non_qualified: null,
				image: "1f9d5-1f3fd.png",
				sheet_x: 48,
				sheet_y: 37,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9D5-1F3FE",
				non_qualified: null,
				image: "1f9d5-1f3fe.png",
				sheet_x: 48,
				sheet_y: 38,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9D5-1F3FF",
				non_qualified: null,
				image: "1f9d5-1f3ff.png",
				sheet_x: 48,
				sheet_y: 39,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Person with Headscarf",
		b: "1F9D5",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			48,
			34
		],
		o: 5
	},
	waning_crescent_moon: {
		a: "Waning Crescent Moon Symbol",
		b: "1F318",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		k: [
			5,
			43
		],
		o: 2
	},
	u6307: {
		a: "Squared Cjk Unified Ideograph-6307",
		b: "1F22F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"chinese",
			"point",
			"green-square",
			"kanji"
		],
		k: [
			5,
			7
		],
		o: 2
	},
	scissors: {
		a: "Black Scissors",
		b: "2702-FE0F",
		c: "2702",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"stationery",
			"cut"
		],
		k: [
			54,
			39
		],
		o: 2
	},
	"flag-my": {
		a: "Malaysia Flag",
		b: "1F1F2-1F1FE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			23
		],
		o: 2
	},
	ideograph_advantage: {
		a: "Circled Ideograph Advantage",
		b: "1F250",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"chinese",
			"kanji",
			"obtain",
			"get",
			"circle"
		],
		k: [
			5,
			17
		],
		o: 2
	},
	man_in_tuxedo: {
		skin_variations: {
			"1F3FB": {
				unified: "1F935-1F3FB",
				non_qualified: null,
				image: "1f935-1f3fb.png",
				sheet_x: 39,
				sheet_y: 24,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F935-1F3FC",
				non_qualified: null,
				image: "1f935-1f3fc.png",
				sheet_x: 39,
				sheet_y: 25,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F935-1F3FD",
				non_qualified: null,
				image: "1f935-1f3fd.png",
				sheet_x: 39,
				sheet_y: 26,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F935-1F3FE",
				non_qualified: null,
				image: "1f935-1f3fe.png",
				sheet_x: 39,
				sheet_y: 27,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F935-1F3FF",
				non_qualified: null,
				image: "1f935-1f3ff.png",
				sheet_x: 39,
				sheet_y: 28,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man in Tuxedo",
		b: "1F935",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"couple",
			"marriage",
			"wedding",
			"groom"
		],
		k: [
			39,
			23
		],
		o: 4
	},
	"flag-mz": {
		a: "Mozambique Flag",
		b: "1F1F2-1F1FF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			24
		],
		o: 2
	},
	card_file_box: {
		a: "Card File Box",
		b: "1F5C3-FE0F",
		c: "1F5C3",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"business",
			"stationery"
		],
		k: [
			30,
			16
		],
		o: 2
	},
	crescent_moon: {
		a: "Crescent Moon",
		b: "1F319",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"night",
			"sleep",
			"sky",
			"evening",
			"magic"
		],
		k: [
			5,
			44
		],
		o: 2
	},
	"flag-na": {
		a: "Namibia Flag",
		b: "1F1F3-1F1E6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			25
		],
		o: 2
	},
	bride_with_veil: {
		skin_variations: {
			"1F3FB": {
				unified: "1F470-1F3FB",
				non_qualified: null,
				image: "1f470-1f3fb.png",
				sheet_x: 22,
				sheet_y: 2,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F470-1F3FC",
				non_qualified: null,
				image: "1f470-1f3fc.png",
				sheet_x: 22,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F470-1F3FD",
				non_qualified: null,
				image: "1f470-1f3fd.png",
				sheet_x: 22,
				sheet_y: 4,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F470-1F3FE",
				non_qualified: null,
				image: "1f470-1f3fe.png",
				sheet_x: 22,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F470-1F3FF",
				non_qualified: null,
				image: "1f470-1f3ff.png",
				sheet_x: 22,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Bride with Veil",
		b: "1F470",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"couple",
			"marriage",
			"wedding",
			"woman",
			"bride"
		],
		k: [
			22,
			1
		],
		o: 2
	},
	new_moon_with_face: {
		a: "New Moon with Face",
		b: "1F31A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		k: [
			5,
			45
		],
		o: 2
	},
	file_cabinet: {
		a: "File Cabinet",
		b: "1F5C4-FE0F",
		c: "1F5C4",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"filing",
			"organizing"
		],
		k: [
			30,
			17
		],
		o: 2
	},
	u5272: {
		a: "Squared Cjk Unified Ideograph-5272",
		b: "1F239",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"cut",
			"divide",
			"chinese",
			"kanji",
			"pink-square"
		],
		k: [
			5,
			15
		],
		o: 2
	},
	wastebasket: {
		a: "Wastebasket",
		b: "1F5D1-FE0F",
		c: "1F5D1",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"bin",
			"trash",
			"rubbish",
			"garbage",
			"toss"
		],
		k: [
			30,
			18
		],
		o: 2
	},
	pregnant_woman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F930-1F3FB",
				non_qualified: null,
				image: "1f930-1f3fb.png",
				sheet_x: 38,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F930-1F3FC",
				non_qualified: null,
				image: "1f930-1f3fc.png",
				sheet_x: 38,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F930-1F3FD",
				non_qualified: null,
				image: "1f930-1f3fd.png",
				sheet_x: 38,
				sheet_y: 53,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F930-1F3FE",
				non_qualified: null,
				image: "1f930-1f3fe.png",
				sheet_x: 38,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F930-1F3FF",
				non_qualified: null,
				image: "1f930-1f3ff.png",
				sheet_x: 38,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Pregnant Woman",
		b: "1F930",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"baby"
		],
		k: [
			38,
			50
		],
		o: 4
	},
	first_quarter_moon_with_face: {
		a: "First Quarter Moon with Face",
		b: "1F31B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		k: [
			5,
			46
		],
		o: 2
	},
	"flag-nc": {
		a: "New Caledonia Flag",
		b: "1F1F3-1F1E8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			26
		],
		o: 2
	},
	u7121: {
		a: "Squared Cjk Unified Ideograph-7121",
		b: "1F21A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nothing",
			"chinese",
			"kanji",
			"japanese",
			"orange-square"
		],
		k: [
			5,
			6
		],
		o: 2
	},
	lock: {
		a: "Lock",
		b: "1F512",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"security",
			"password",
			"padlock"
		],
		k: [
			27,
			46
		],
		o: 2
	},
	"flag-ne": {
		a: "Niger Flag",
		b: "1F1F3-1F1EA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			27
		],
		o: 2
	},
	last_quarter_moon_with_face: {
		a: "Last Quarter Moon with Face",
		b: "1F31C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		k: [
			5,
			47
		],
		o: 2
	},
	"breast-feeding": {
		skin_variations: {
			"1F3FB": {
				unified: "1F931-1F3FB",
				non_qualified: null,
				image: "1f931-1f3fb.png",
				sheet_x: 39,
				sheet_y: 0,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F931-1F3FC",
				non_qualified: null,
				image: "1f931-1f3fc.png",
				sheet_x: 39,
				sheet_y: 1,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F931-1F3FD",
				non_qualified: null,
				image: "1f931-1f3fd.png",
				sheet_x: 39,
				sheet_y: 2,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F931-1F3FE",
				non_qualified: null,
				image: "1f931-1f3fe.png",
				sheet_x: 39,
				sheet_y: 3,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F931-1F3FF",
				non_qualified: null,
				image: "1f931-1f3ff.png",
				sheet_x: 39,
				sheet_y: 4,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Breast-Feeding",
		b: "1F931",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			38,
			56
		],
		o: 5
	},
	u7981: {
		a: "Squared Cjk Unified Ideograph-7981",
		b: "1F232",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"kanji",
			"japanese",
			"chinese",
			"forbidden",
			"limit",
			"restricted",
			"red-square"
		],
		k: [
			5,
			8
		],
		o: 2
	},
	accept: {
		a: "Circled Ideograph Accept",
		b: "1F251",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"ok",
			"good",
			"chinese",
			"kanji",
			"agree",
			"yes",
			"orange-circle"
		],
		k: [
			5,
			18
		],
		o: 2
	},
	angel: {
		skin_variations: {
			"1F3FB": {
				unified: "1F47C-1F3FB",
				non_qualified: null,
				image: "1f47c-1f3fb.png",
				sheet_x: 23,
				sheet_y: 38,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F47C-1F3FC",
				non_qualified: null,
				image: "1f47c-1f3fc.png",
				sheet_x: 23,
				sheet_y: 39,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F47C-1F3FD",
				non_qualified: null,
				image: "1f47c-1f3fd.png",
				sheet_x: 23,
				sheet_y: 40,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F47C-1F3FE",
				non_qualified: null,
				image: "1f47c-1f3fe.png",
				sheet_x: 23,
				sheet_y: 41,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F47C-1F3FF",
				non_qualified: null,
				image: "1f47c-1f3ff.png",
				sheet_x: 23,
				sheet_y: 42,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Baby Angel",
		b: "1F47C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"heaven",
			"wings",
			"halo"
		],
		k: [
			23,
			37
		],
		o: 2
	},
	unlock: {
		a: "Open Lock",
		b: "1F513",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"privacy",
			"security"
		],
		k: [
			27,
			47
		],
		o: 2
	},
	"flag-nf": {
		a: "Norfolk Island Flag",
		b: "1F1F3-1F1EB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			28
		],
		o: 2
	},
	thermometer: {
		a: "Thermometer",
		b: "1F321-FE0F",
		c: "1F321",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"weather",
			"temperature",
			"hot",
			"cold"
		],
		k: [
			5,
			52
		],
		o: 2
	},
	"flag-ng": {
		a: "Nigeria Flag",
		b: "1F1F3-1F1EC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			29
		],
		o: 2
	},
	u7533: {
		a: "Squared Cjk Unified Ideograph-7533",
		b: "1F238",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"chinese",
			"japanese",
			"kanji",
			"orange-square"
		],
		k: [
			5,
			14
		],
		o: 2
	},
	sunny: {
		a: "Black Sun with Rays",
		b: "2600-FE0F",
		c: "2600",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"weather",
			"nature",
			"brightness",
			"summer",
			"beach",
			"spring"
		],
		k: [
			52,
			49
		],
		o: 2
	},
	lock_with_ink_pen: {
		a: "Lock with Ink Pen",
		b: "1F50F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"security",
			"secret"
		],
		k: [
			27,
			43
		],
		o: 2
	},
	santa: {
		skin_variations: {
			"1F3FB": {
				unified: "1F385-1F3FB",
				non_qualified: null,
				image: "1f385-1f3fb.png",
				sheet_x: 7,
				sheet_y: 37,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F385-1F3FC",
				non_qualified: null,
				image: "1f385-1f3fc.png",
				sheet_x: 7,
				sheet_y: 38,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F385-1F3FD",
				non_qualified: null,
				image: "1f385-1f3fd.png",
				sheet_x: 7,
				sheet_y: 39,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F385-1F3FE",
				non_qualified: null,
				image: "1f385-1f3fe.png",
				sheet_x: 7,
				sheet_y: 40,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F385-1F3FF",
				non_qualified: null,
				image: "1f385-1f3ff.png",
				sheet_x: 7,
				sheet_y: 41,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Father Christmas",
		b: "1F385",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"festival",
			"man",
			"male",
			"xmas",
			"father christmas"
		],
		k: [
			7,
			36
		],
		o: 2
	},
	closed_lock_with_key: {
		a: "Closed Lock with Key",
		b: "1F510",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"security",
			"privacy"
		],
		k: [
			27,
			44
		],
		o: 2
	},
	u5408: {
		a: "Squared Cjk Unified Ideograph-5408",
		b: "1F234",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"japanese",
			"chinese",
			"join",
			"kanji",
			"red-square"
		],
		k: [
			5,
			10
		],
		o: 2
	},
	"flag-ni": {
		a: "Nicaragua Flag",
		b: "1F1F3-1F1EE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			30
		],
		o: 2
	},
	mrs_claus: {
		skin_variations: {
			"1F3FB": {
				unified: "1F936-1F3FB",
				non_qualified: null,
				image: "1f936-1f3fb.png",
				sheet_x: 39,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F936-1F3FC",
				non_qualified: null,
				image: "1f936-1f3fc.png",
				sheet_x: 39,
				sheet_y: 31,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F936-1F3FD",
				non_qualified: null,
				image: "1f936-1f3fd.png",
				sheet_x: 39,
				sheet_y: 32,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F936-1F3FE",
				non_qualified: null,
				image: "1f936-1f3fe.png",
				sheet_x: 39,
				sheet_y: 33,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F936-1F3FF",
				non_qualified: null,
				image: "1f936-1f3ff.png",
				sheet_x: 39,
				sheet_y: 34,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Mother Christmas",
		b: "1F936",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"woman",
			"female",
			"xmas",
			"mother christmas"
		],
		k: [
			39,
			29
		],
		n: [
			"mother_christmas"
		],
		o: 4
	},
	full_moon_with_face: {
		a: "Full Moon with Face",
		b: "1F31D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"twilight",
			"planet",
			"space",
			"night",
			"evening",
			"sleep"
		],
		k: [
			5,
			48
		],
		o: 2
	},
	key: {
		a: "Key",
		b: "1F511",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"lock",
			"door",
			"password"
		],
		k: [
			27,
			45
		],
		o: 2
	},
	superhero: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9B8-1F3FB",
				non_qualified: null,
				image: "1f9b8-1f3fb.png",
				sheet_x: 43,
				sheet_y: 31,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9B8-1F3FC",
				non_qualified: null,
				image: "1f9b8-1f3fc.png",
				sheet_x: 43,
				sheet_y: 32,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9B8-1F3FD",
				non_qualified: null,
				image: "1f9b8-1f3fd.png",
				sheet_x: 43,
				sheet_y: 33,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9B8-1F3FE",
				non_qualified: null,
				image: "1f9b8-1f3fe.png",
				sheet_x: 43,
				sheet_y: 34,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9B8-1F3FF",
				non_qualified: null,
				image: "1f9b8-1f3ff.png",
				sheet_x: 43,
				sheet_y: 35,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Superhero",
		b: "1F9B8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			43,
			30
		],
		o: 11
	},
	"flag-nl": {
		a: "Netherlands Flag",
		b: "1F1F3-1F1F1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			31
		],
		o: 2
	},
	u7a7a: {
		a: "Squared Cjk Unified Ideograph-7a7a",
		b: "1F233",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"kanji",
			"japanese",
			"chinese",
			"empty",
			"sky",
			"blue-square"
		],
		k: [
			5,
			9
		],
		o: 2
	},
	sun_with_face: {
		a: "Sun with Face",
		b: "1F31E",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"morning",
			"sky"
		],
		k: [
			5,
			49
		],
		o: 2
	},
	male_superhero: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9B8-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9B8-1F3FB-200D-2642",
				image: "1f9b8-1f3fb-200d-2642-fe0f.png",
				sheet_x: 43,
				sheet_y: 25,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9B8-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9B8-1F3FC-200D-2642",
				image: "1f9b8-1f3fc-200d-2642-fe0f.png",
				sheet_x: 43,
				sheet_y: 26,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9B8-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9B8-1F3FD-200D-2642",
				image: "1f9b8-1f3fd-200d-2642-fe0f.png",
				sheet_x: 43,
				sheet_y: 27,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9B8-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9B8-1F3FE-200D-2642",
				image: "1f9b8-1f3fe-200d-2642-fe0f.png",
				sheet_x: 43,
				sheet_y: 28,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9B8-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9B8-1F3FF-200D-2642",
				image: "1f9b8-1f3ff-200d-2642-fe0f.png",
				sheet_x: 43,
				sheet_y: 29,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Superhero",
		b: "1F9B8-200D-2642-FE0F",
		c: "1F9B8-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			43,
			24
		],
		o: 11
	},
	ringed_planet: {
		a: "Ringed Planet",
		b: "1FA90",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			52,
			4
		],
		o: 12
	},
	old_key: {
		a: "Old Key",
		b: "1F5DD-FE0F",
		c: "1F5DD",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"lock",
			"door",
			"password"
		],
		k: [
			30,
			22
		],
		o: 2
	},
	congratulations: {
		a: "Circled Ideograph Congratulation",
		b: "3297-FE0F",
		c: "3297",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"chinese",
			"kanji",
			"japanese",
			"red-circle"
		],
		k: [
			55,
			46
		],
		o: 2
	},
	"flag-no": {
		a: "Norway Flag",
		b: "1F1F3-1F1F4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			32
		],
		o: 2
	},
	star: {
		a: "White Medium Star",
		b: "2B50",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"night",
			"yellow"
		],
		k: [
			55,
			42
		],
		o: 2
	},
	secret: {
		a: "Circled Ideograph Secret",
		b: "3299-FE0F",
		c: "3299",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"privacy",
			"chinese",
			"sshh",
			"kanji",
			"red-circle"
		],
		k: [
			55,
			47
		],
		o: 2
	},
	"flag-np": {
		a: "Nepal Flag",
		b: "1F1F3-1F1F5",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			33
		],
		o: 2
	},
	female_superhero: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9B8-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9B8-1F3FB-200D-2640",
				image: "1f9b8-1f3fb-200d-2640-fe0f.png",
				sheet_x: 43,
				sheet_y: 19,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9B8-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9B8-1F3FC-200D-2640",
				image: "1f9b8-1f3fc-200d-2640-fe0f.png",
				sheet_x: 43,
				sheet_y: 20,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9B8-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9B8-1F3FD-200D-2640",
				image: "1f9b8-1f3fd-200d-2640-fe0f.png",
				sheet_x: 43,
				sheet_y: 21,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9B8-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9B8-1F3FE-200D-2640",
				image: "1f9b8-1f3fe-200d-2640-fe0f.png",
				sheet_x: 43,
				sheet_y: 22,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9B8-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9B8-1F3FF-200D-2640",
				image: "1f9b8-1f3ff-200d-2640-fe0f.png",
				sheet_x: 43,
				sheet_y: 23,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Superhero",
		b: "1F9B8-200D-2640-FE0F",
		c: "1F9B8-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			43,
			18
		],
		o: 11
	},
	hammer: {
		a: "Hammer",
		b: "1F528",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"tools",
			"build",
			"create"
		],
		k: [
			28,
			11
		],
		o: 2
	},
	star2: {
		a: "Glowing Star",
		b: "1F31F",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"night",
			"sparkle",
			"awesome",
			"good",
			"magic"
		],
		k: [
			5,
			50
		],
		o: 2
	},
	"flag-nr": {
		a: "Nauru Flag",
		b: "1F1F3-1F1F7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			34
		],
		o: 2
	},
	axe: {
		a: "Axe",
		b: "1FA93",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			52,
			7
		],
		o: 12
	},
	u55b6: {
		a: "Squared Cjk Unified Ideograph-55b6",
		b: "1F23A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"japanese",
			"opening hours",
			"orange-square"
		],
		k: [
			5,
			16
		],
		o: 2
	},
	supervillain: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9B9-1F3FB",
				non_qualified: null,
				image: "1f9b9-1f3fb.png",
				sheet_x: 43,
				sheet_y: 49,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9B9-1F3FC",
				non_qualified: null,
				image: "1f9b9-1f3fc.png",
				sheet_x: 43,
				sheet_y: 50,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9B9-1F3FD",
				non_qualified: null,
				image: "1f9b9-1f3fd.png",
				sheet_x: 43,
				sheet_y: 51,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9B9-1F3FE",
				non_qualified: null,
				image: "1f9b9-1f3fe.png",
				sheet_x: 43,
				sheet_y: 52,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9B9-1F3FF",
				non_qualified: null,
				image: "1f9b9-1f3ff.png",
				sheet_x: 43,
				sheet_y: 53,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Supervillain",
		b: "1F9B9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			43,
			48
		],
		o: 11
	},
	stars: {
		a: "Shooting Star",
		b: "1F320",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"night",
			"photo"
		],
		k: [
			5,
			51
		],
		o: 2
	},
	u6e80: {
		a: "Squared Cjk Unified Ideograph-6e80",
		b: "1F235",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"full",
			"chinese",
			"japanese",
			"red-square",
			"kanji"
		],
		k: [
			5,
			11
		],
		o: 2
	},
	"flag-nu": {
		a: "Niue Flag",
		b: "1F1F3-1F1FA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			35
		],
		o: 2
	},
	pick: {
		a: "Pick",
		b: "26CF-FE0F",
		c: "26CF",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"tools",
			"dig"
		],
		k: [
			54,
			5
		],
		o: 2
	},
	male_supervillain: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9B9-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9B9-1F3FB-200D-2642",
				image: "1f9b9-1f3fb-200d-2642-fe0f.png",
				sheet_x: 43,
				sheet_y: 43,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9B9-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9B9-1F3FC-200D-2642",
				image: "1f9b9-1f3fc-200d-2642-fe0f.png",
				sheet_x: 43,
				sheet_y: 44,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9B9-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9B9-1F3FD-200D-2642",
				image: "1f9b9-1f3fd-200d-2642-fe0f.png",
				sheet_x: 43,
				sheet_y: 45,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9B9-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9B9-1F3FE-200D-2642",
				image: "1f9b9-1f3fe-200d-2642-fe0f.png",
				sheet_x: 43,
				sheet_y: 46,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9B9-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9B9-1F3FF-200D-2642",
				image: "1f9b9-1f3ff-200d-2642-fe0f.png",
				sheet_x: 43,
				sheet_y: 47,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Supervillain",
		b: "1F9B9-200D-2642-FE0F",
		c: "1F9B9-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			43,
			42
		],
		o: 11
	},
	female_supervillain: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9B9-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9B9-1F3FB-200D-2640",
				image: "1f9b9-1f3fb-200d-2640-fe0f.png",
				sheet_x: 43,
				sheet_y: 37,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9B9-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9B9-1F3FC-200D-2640",
				image: "1f9b9-1f3fc-200d-2640-fe0f.png",
				sheet_x: 43,
				sheet_y: 38,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9B9-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9B9-1F3FD-200D-2640",
				image: "1f9b9-1f3fd-200d-2640-fe0f.png",
				sheet_x: 43,
				sheet_y: 39,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9B9-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9B9-1F3FE-200D-2640",
				image: "1f9b9-1f3fe-200d-2640-fe0f.png",
				sheet_x: 43,
				sheet_y: 40,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9B9-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9B9-1F3FF-200D-2640",
				image: "1f9b9-1f3ff-200d-2640-fe0f.png",
				sheet_x: 43,
				sheet_y: 41,
				added_in: "11.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Supervillain",
		b: "1F9B9-200D-2640-FE0F",
		c: "1F9B9-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			43,
			36
		],
		o: 11
	},
	hammer_and_pick: {
		a: "Hammer and Pick",
		b: "2692-FE0F",
		c: "2692",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"tools",
			"build",
			"create"
		],
		k: [
			53,
			41
		],
		o: 2
	},
	milky_way: {
		a: "Milky Way",
		b: "1F30C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"photo",
			"space",
			"stars"
		],
		k: [
			5,
			31
		],
		o: 2
	},
	red_circle: {
		a: "Large Red Circle",
		b: "1F534",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shape",
			"error",
			"danger"
		],
		k: [
			28,
			23
		],
		o: 2
	},
	"flag-nz": {
		a: "New Zealand Flag",
		b: "1F1F3-1F1FF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			36
		],
		o: 2
	},
	large_orange_circle: {
		a: "Large Orange Circle",
		b: "1F7E0",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			3
		],
		o: 12
	},
	hammer_and_wrench: {
		a: "Hammer and Wrench",
		b: "1F6E0-FE0F",
		c: "1F6E0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"tools",
			"build",
			"create"
		],
		k: [
			36,
			42
		],
		o: 2
	},
	"flag-om": {
		a: "Oman Flag",
		b: "1F1F4-1F1F2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			37
		],
		o: 2
	},
	cloud: {
		a: "Cloud",
		b: "2601-FE0F",
		c: "2601",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"weather",
			"sky"
		],
		k: [
			52,
			50
		],
		o: 2
	},
	mage: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D9-1F3FB",
				non_qualified: null,
				image: "1f9d9-1f3fb.png",
				sheet_x: 49,
				sheet_y: 50,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D9-1F3FB-200D-2640-FE0F"
			},
			"1F3FC": {
				unified: "1F9D9-1F3FC",
				non_qualified: null,
				image: "1f9d9-1f3fc.png",
				sheet_x: 49,
				sheet_y: 51,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D9-1F3FC-200D-2640-FE0F"
			},
			"1F3FD": {
				unified: "1F9D9-1F3FD",
				non_qualified: null,
				image: "1f9d9-1f3fd.png",
				sheet_x: 49,
				sheet_y: 52,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D9-1F3FD-200D-2640-FE0F"
			},
			"1F3FE": {
				unified: "1F9D9-1F3FE",
				non_qualified: null,
				image: "1f9d9-1f3fe.png",
				sheet_x: 49,
				sheet_y: 53,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D9-1F3FE-200D-2640-FE0F"
			},
			"1F3FF": {
				unified: "1F9D9-1F3FF",
				non_qualified: null,
				image: "1f9d9-1f3ff.png",
				sheet_x: 49,
				sheet_y: 54,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D9-1F3FF-200D-2640-FE0F"
			}
		},
		obsoleted_by: "1F9D9-200D-2640-FE0F",
		a: "Mage",
		b: "1F9D9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			49,
			49
		],
		o: 5
	},
	dagger_knife: {
		a: "Dagger Knife",
		b: "1F5E1-FE0F",
		c: "1F5E1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			30,
			24
		],
		o: 2
	},
	partly_sunny: {
		a: "Sun Behind Cloud",
		b: "26C5",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"weather",
			"nature",
			"cloudy",
			"morning",
			"fall",
			"spring"
		],
		k: [
			54,
			2
		],
		o: 2
	},
	large_yellow_circle: {
		a: "Large Yellow Circle",
		b: "1F7E1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			4
		],
		o: 12
	},
	male_mage: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D9-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9D9-1F3FB-200D-2642",
				image: "1f9d9-1f3fb-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 44,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9D9-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9D9-1F3FC-200D-2642",
				image: "1f9d9-1f3fc-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 45,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9D9-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9D9-1F3FD-200D-2642",
				image: "1f9d9-1f3fd-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 46,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9D9-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9D9-1F3FE-200D-2642",
				image: "1f9d9-1f3fe-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 47,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9D9-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9D9-1F3FF-200D-2642",
				image: "1f9d9-1f3ff-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 48,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Mage",
		b: "1F9D9-200D-2642-FE0F",
		c: "1F9D9-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			49,
			43
		],
		o: 5
	},
	"flag-pa": {
		a: "Panama Flag",
		b: "1F1F5-1F1E6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			38
		],
		o: 2
	},
	thunder_cloud_and_rain: {
		a: "Thunder Cloud and Rain",
		b: "26C8-FE0F",
		c: "26C8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			54,
			3
		],
		o: 2
	},
	large_green_circle: {
		a: "Large Green Circle",
		b: "1F7E2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			5
		],
		o: 12
	},
	female_mage: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D9-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9D9-1F3FB-200D-2640",
				image: "1f9d9-1f3fb-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 38,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D9-1F3FB"
			},
			"1F3FC": {
				unified: "1F9D9-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9D9-1F3FC-200D-2640",
				image: "1f9d9-1f3fc-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 39,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D9-1F3FC"
			},
			"1F3FD": {
				unified: "1F9D9-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9D9-1F3FD-200D-2640",
				image: "1f9d9-1f3fd-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 40,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D9-1F3FD"
			},
			"1F3FE": {
				unified: "1F9D9-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9D9-1F3FE-200D-2640",
				image: "1f9d9-1f3fe-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 41,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D9-1F3FE"
			},
			"1F3FF": {
				unified: "1F9D9-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9D9-1F3FF-200D-2640",
				image: "1f9d9-1f3ff-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 42,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D9-1F3FF"
			}
		},
		obsoletes: "1F9D9",
		a: "Female Mage",
		b: "1F9D9-200D-2640-FE0F",
		c: "1F9D9-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			49,
			37
		],
		o: 5
	},
	crossed_swords: {
		a: "Crossed Swords",
		b: "2694-FE0F",
		c: "2694",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"weapon"
		],
		k: [
			53,
			43
		],
		o: 2
	},
	"flag-pe": {
		a: "Peru Flag",
		b: "1F1F5-1F1EA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			39
		],
		o: 2
	},
	gun: {
		a: "Pistol",
		b: "1F52B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"violence",
			"weapon",
			"pistol",
			"revolver"
		],
		k: [
			28,
			14
		],
		o: 2
	},
	mostly_sunny: {
		a: "Mostly Sunny",
		b: "1F324-FE0F",
		c: "1F324",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			5,
			53
		],
		n: [
			"sun_small_cloud"
		],
		o: 2
	},
	fairy: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DA-1F3FB",
				non_qualified: null,
				image: "1f9da-1f3fb.png",
				sheet_x: 50,
				sheet_y: 11,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false,
				obsoleted_by: "1F9DA-1F3FB-200D-2640-FE0F"
			},
			"1F3FC": {
				unified: "1F9DA-1F3FC",
				non_qualified: null,
				image: "1f9da-1f3fc.png",
				sheet_x: 50,
				sheet_y: 12,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false,
				obsoleted_by: "1F9DA-1F3FC-200D-2640-FE0F"
			},
			"1F3FD": {
				unified: "1F9DA-1F3FD",
				non_qualified: null,
				image: "1f9da-1f3fd.png",
				sheet_x: 50,
				sheet_y: 13,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false,
				obsoleted_by: "1F9DA-1F3FD-200D-2640-FE0F"
			},
			"1F3FE": {
				unified: "1F9DA-1F3FE",
				non_qualified: null,
				image: "1f9da-1f3fe.png",
				sheet_x: 50,
				sheet_y: 14,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false,
				obsoleted_by: "1F9DA-1F3FE-200D-2640-FE0F"
			},
			"1F3FF": {
				unified: "1F9DA-1F3FF",
				non_qualified: null,
				image: "1f9da-1f3ff.png",
				sheet_x: 50,
				sheet_y: 15,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false,
				obsoleted_by: "1F9DA-1F3FF-200D-2640-FE0F"
			}
		},
		obsoleted_by: "1F9DA-200D-2640-FE0F",
		a: "Fairy",
		b: "1F9DA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			50,
			10
		],
		o: 5
	},
	"flag-pf": {
		a: "French Polynesia Flag",
		b: "1F1F5-1F1EB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			40
		],
		o: 2
	},
	large_blue_circle: {
		a: "Large Blue Circle",
		b: "1F535",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shape",
			"icon",
			"button"
		],
		k: [
			28,
			24
		],
		o: 2
	},
	large_purple_circle: {
		a: "Large Purple Circle",
		b: "1F7E3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			6
		],
		o: 12
	},
	bow_and_arrow: {
		a: "Bow and Arrow",
		b: "1F3F9",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sports"
		],
		k: [
			11,
			21
		],
		o: 2
	},
	male_fairy: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DA-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9DA-1F3FB-200D-2642",
				image: "1f9da-1f3fb-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 5,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9DA-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9DA-1F3FC-200D-2642",
				image: "1f9da-1f3fc-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 6,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9DA-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9DA-1F3FD-200D-2642",
				image: "1f9da-1f3fd-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 7,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9DA-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9DA-1F3FE-200D-2642",
				image: "1f9da-1f3fe-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 8,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9DA-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9DA-1F3FF-200D-2642",
				image: "1f9da-1f3ff-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 9,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		a: "Male Fairy",
		b: "1F9DA-200D-2642-FE0F",
		c: "1F9DA-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			50,
			4
		],
		o: 5
	},
	barely_sunny: {
		a: "Barely Sunny",
		b: "1F325-FE0F",
		c: "1F325",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			5,
			54
		],
		n: [
			"sun_behind_cloud"
		],
		o: 2
	},
	"flag-pg": {
		a: "Papua New Guinea Flag",
		b: "1F1F5-1F1EC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			41
		],
		o: 2
	},
	shield: {
		a: "Shield",
		b: "1F6E1-FE0F",
		c: "1F6E1",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"protection",
			"security"
		],
		k: [
			36,
			43
		],
		o: 2
	},
	partly_sunny_rain: {
		a: "Partly Sunny Rain",
		b: "1F326-FE0F",
		c: "1F326",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			5,
			55
		],
		n: [
			"sun_behind_rain_cloud"
		],
		o: 2
	},
	large_brown_circle: {
		a: "Large Brown Circle",
		b: "1F7E4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			7
		],
		o: 12
	},
	female_fairy: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DA-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9DA-1F3FB-200D-2640",
				image: "1f9da-1f3fb-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 56,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false,
				obsoletes: "1F9DA-1F3FB"
			},
			"1F3FC": {
				unified: "1F9DA-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9DA-1F3FC-200D-2640",
				image: "1f9da-1f3fc-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 0,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false,
				obsoletes: "1F9DA-1F3FC"
			},
			"1F3FD": {
				unified: "1F9DA-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9DA-1F3FD-200D-2640",
				image: "1f9da-1f3fd-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 1,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false,
				obsoletes: "1F9DA-1F3FD"
			},
			"1F3FE": {
				unified: "1F9DA-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9DA-1F3FE-200D-2640",
				image: "1f9da-1f3fe-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 2,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false,
				obsoletes: "1F9DA-1F3FE"
			},
			"1F3FF": {
				unified: "1F9DA-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9DA-1F3FF-200D-2640",
				image: "1f9da-1f3ff-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 3,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false,
				obsoletes: "1F9DA-1F3FF"
			}
		},
		obsoletes: "1F9DA",
		a: "Female Fairy",
		b: "1F9DA-200D-2640-FE0F",
		c: "1F9DA-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			49,
			55
		],
		o: 5
	},
	"flag-ph": {
		a: "Philippines Flag",
		b: "1F1F5-1F1ED",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			42
		],
		o: 2
	},
	"flag-pk": {
		a: "Pakistan Flag",
		b: "1F1F5-1F1F0",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			43
		],
		o: 2
	},
	black_circle: {
		a: "Medium Black Circle",
		b: "26AB",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shape",
			"button",
			"round"
		],
		k: [
			53,
			53
		],
		o: 2
	},
	wrench: {
		a: "Wrench",
		b: "1F527",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"tools",
			"diy",
			"ikea",
			"fix",
			"maintainer"
		],
		k: [
			28,
			10
		],
		o: 2
	},
	vampire: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DB-1F3FB",
				non_qualified: null,
				image: "1f9db-1f3fb.png",
				sheet_x: 50,
				sheet_y: 29,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DB-1F3FB-200D-2640-FE0F"
			},
			"1F3FC": {
				unified: "1F9DB-1F3FC",
				non_qualified: null,
				image: "1f9db-1f3fc.png",
				sheet_x: 50,
				sheet_y: 30,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DB-1F3FC-200D-2640-FE0F"
			},
			"1F3FD": {
				unified: "1F9DB-1F3FD",
				non_qualified: null,
				image: "1f9db-1f3fd.png",
				sheet_x: 50,
				sheet_y: 31,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DB-1F3FD-200D-2640-FE0F"
			},
			"1F3FE": {
				unified: "1F9DB-1F3FE",
				non_qualified: null,
				image: "1f9db-1f3fe.png",
				sheet_x: 50,
				sheet_y: 32,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DB-1F3FE-200D-2640-FE0F"
			},
			"1F3FF": {
				unified: "1F9DB-1F3FF",
				non_qualified: null,
				image: "1f9db-1f3ff.png",
				sheet_x: 50,
				sheet_y: 33,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DB-1F3FF-200D-2640-FE0F"
			}
		},
		obsoleted_by: "1F9DB-200D-2640-FE0F",
		a: "Vampire",
		b: "1F9DB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			50,
			28
		],
		o: 5
	},
	rain_cloud: {
		a: "Rain Cloud",
		b: "1F327-FE0F",
		c: "1F327",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			5,
			56
		],
		o: 2
	},
	snow_cloud: {
		a: "Snow Cloud",
		b: "1F328-FE0F",
		c: "1F328",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			6,
			0
		],
		o: 2
	},
	"flag-pl": {
		a: "Poland Flag",
		b: "1F1F5-1F1F1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			44
		],
		o: 2
	},
	male_vampire: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DB-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9DB-1F3FB-200D-2642",
				image: "1f9db-1f3fb-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 23,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9DB-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9DB-1F3FC-200D-2642",
				image: "1f9db-1f3fc-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 24,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9DB-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9DB-1F3FD-200D-2642",
				image: "1f9db-1f3fd-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 25,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9DB-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9DB-1F3FE-200D-2642",
				image: "1f9db-1f3fe-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 26,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9DB-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9DB-1F3FF-200D-2642",
				image: "1f9db-1f3ff-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 27,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Male Vampire",
		b: "1F9DB-200D-2642-FE0F",
		c: "1F9DB-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			50,
			22
		],
		o: 5
	},
	nut_and_bolt: {
		a: "Nut and Bolt",
		b: "1F529",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"handy",
			"tools",
			"fix"
		],
		k: [
			28,
			12
		],
		o: 2
	},
	white_circle: {
		a: "Medium White Circle",
		b: "26AA",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shape",
			"round"
		],
		k: [
			53,
			52
		],
		o: 2
	},
	female_vampire: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DB-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9DB-1F3FB-200D-2640",
				image: "1f9db-1f3fb-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 17,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DB-1F3FB"
			},
			"1F3FC": {
				unified: "1F9DB-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9DB-1F3FC-200D-2640",
				image: "1f9db-1f3fc-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 18,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DB-1F3FC"
			},
			"1F3FD": {
				unified: "1F9DB-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9DB-1F3FD-200D-2640",
				image: "1f9db-1f3fd-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 19,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DB-1F3FD"
			},
			"1F3FE": {
				unified: "1F9DB-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9DB-1F3FE-200D-2640",
				image: "1f9db-1f3fe-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 20,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DB-1F3FE"
			},
			"1F3FF": {
				unified: "1F9DB-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9DB-1F3FF-200D-2640",
				image: "1f9db-1f3ff-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 21,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DB-1F3FF"
			}
		},
		obsoletes: "1F9DB",
		a: "Female Vampire",
		b: "1F9DB-200D-2640-FE0F",
		c: "1F9DB-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			50,
			16
		],
		o: 5
	},
	"flag-pm": {
		a: "St. Pierre & Miquelon Flag",
		b: "1F1F5-1F1F2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			45
		],
		o: 2
	},
	large_red_square: {
		a: "Large Red Square",
		b: "1F7E5",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			8
		],
		o: 12
	},
	lightning: {
		a: "Lightning",
		b: "1F329-FE0F",
		c: "1F329",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			6,
			1
		],
		n: [
			"lightning_cloud"
		],
		o: 2
	},
	gear: {
		a: "Gear",
		b: "2699-FE0F",
		c: "2699",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"cog"
		],
		k: [
			53,
			47
		],
		o: 2
	},
	merperson: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DC-1F3FB",
				non_qualified: null,
				image: "1f9dc-1f3fb.png",
				sheet_x: 50,
				sheet_y: 47,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DC-1F3FB-200D-2642-FE0F"
			},
			"1F3FC": {
				unified: "1F9DC-1F3FC",
				non_qualified: null,
				image: "1f9dc-1f3fc.png",
				sheet_x: 50,
				sheet_y: 48,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DC-1F3FC-200D-2642-FE0F"
			},
			"1F3FD": {
				unified: "1F9DC-1F3FD",
				non_qualified: null,
				image: "1f9dc-1f3fd.png",
				sheet_x: 50,
				sheet_y: 49,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DC-1F3FD-200D-2642-FE0F"
			},
			"1F3FE": {
				unified: "1F9DC-1F3FE",
				non_qualified: null,
				image: "1f9dc-1f3fe.png",
				sheet_x: 50,
				sheet_y: 50,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DC-1F3FE-200D-2642-FE0F"
			},
			"1F3FF": {
				unified: "1F9DC-1F3FF",
				non_qualified: null,
				image: "1f9dc-1f3ff.png",
				sheet_x: 50,
				sheet_y: 51,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DC-1F3FF-200D-2642-FE0F"
			}
		},
		obsoleted_by: "1F9DC-200D-2642-FE0F",
		a: "Merperson",
		b: "1F9DC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			50,
			46
		],
		o: 5
	},
	tornado: {
		a: "Tornado",
		b: "1F32A-FE0F",
		c: "1F32A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"weather",
			"cyclone",
			"twister"
		],
		k: [
			6,
			2
		],
		n: [
			"tornado_cloud"
		],
		o: 2
	},
	large_orange_square: {
		a: "Large Orange Square",
		b: "1F7E7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			10
		],
		o: 12
	},
	"flag-pn": {
		a: "Pitcairn Islands Flag",
		b: "1F1F5-1F1F3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			46
		],
		o: 2
	},
	compression: {
		a: "Compression",
		b: "1F5DC-FE0F",
		c: "1F5DC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			30,
			21
		],
		o: 2
	},
	merman: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DC-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9DC-1F3FB-200D-2642",
				image: "1f9dc-1f3fb-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 41,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DC-1F3FB"
			},
			"1F3FC": {
				unified: "1F9DC-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9DC-1F3FC-200D-2642",
				image: "1f9dc-1f3fc-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 42,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DC-1F3FC"
			},
			"1F3FD": {
				unified: "1F9DC-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9DC-1F3FD-200D-2642",
				image: "1f9dc-1f3fd-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 43,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DC-1F3FD"
			},
			"1F3FE": {
				unified: "1F9DC-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9DC-1F3FE-200D-2642",
				image: "1f9dc-1f3fe-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 44,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DC-1F3FE"
			},
			"1F3FF": {
				unified: "1F9DC-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9DC-1F3FF-200D-2642",
				image: "1f9dc-1f3ff-200d-2642-fe0f.png",
				sheet_x: 50,
				sheet_y: 45,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DC-1F3FF"
			}
		},
		obsoletes: "1F9DC",
		a: "Merman",
		b: "1F9DC-200D-2642-FE0F",
		c: "1F9DC-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			50,
			40
		],
		o: 5
	},
	large_yellow_square: {
		a: "Large Yellow Square",
		b: "1F7E8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			11
		],
		o: 12
	},
	fog: {
		a: "Fog",
		b: "1F32B-FE0F",
		c: "1F32B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"weather"
		],
		k: [
			6,
			3
		],
		o: 2
	},
	scales: {
		a: "Scales",
		b: "2696-FE0F",
		c: "2696",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			53,
			45
		],
		o: 2
	},
	"flag-pr": {
		a: "Puerto Rico Flag",
		b: "1F1F5-1F1F7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			47
		],
		o: 2
	},
	wind_blowing_face: {
		a: "Wind Blowing Face",
		b: "1F32C-FE0F",
		c: "1F32C",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			6,
			4
		],
		o: 2
	},
	"flag-ps": {
		a: "Palestinian Territories Flag",
		b: "1F1F5-1F1F8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			48
		],
		o: 2
	},
	mermaid: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DC-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9DC-1F3FB-200D-2640",
				image: "1f9dc-1f3fb-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 35,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9DC-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9DC-1F3FC-200D-2640",
				image: "1f9dc-1f3fc-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 36,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9DC-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9DC-1F3FD-200D-2640",
				image: "1f9dc-1f3fd-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 37,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9DC-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9DC-1F3FE-200D-2640",
				image: "1f9dc-1f3fe-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 38,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9DC-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9DC-1F3FF-200D-2640",
				image: "1f9dc-1f3ff-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 39,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Mermaid",
		b: "1F9DC-200D-2640-FE0F",
		c: "1F9DC-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			50,
			34
		],
		o: 5
	},
	probing_cane: {
		a: "Probing Cane",
		b: "1F9AF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			43,
			3
		],
		o: 12
	},
	large_green_square: {
		a: "Large Green Square",
		b: "1F7E9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			12
		],
		o: 12
	},
	"flag-pt": {
		a: "Portugal Flag",
		b: "1F1F5-1F1F9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			49
		],
		o: 2
	},
	link: {
		a: "Link Symbol",
		b: "1F517",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"rings",
			"url"
		],
		k: [
			27,
			51
		],
		o: 2
	},
	large_blue_square: {
		a: "Large Blue Square",
		b: "1F7E6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			9
		],
		o: 12
	},
	elf: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DD-1F3FB",
				non_qualified: null,
				image: "1f9dd-1f3fb.png",
				sheet_x: 51,
				sheet_y: 8,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DD-1F3FB-200D-2642-FE0F"
			},
			"1F3FC": {
				unified: "1F9DD-1F3FC",
				non_qualified: null,
				image: "1f9dd-1f3fc.png",
				sheet_x: 51,
				sheet_y: 9,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DD-1F3FC-200D-2642-FE0F"
			},
			"1F3FD": {
				unified: "1F9DD-1F3FD",
				non_qualified: null,
				image: "1f9dd-1f3fd.png",
				sheet_x: 51,
				sheet_y: 10,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DD-1F3FD-200D-2642-FE0F"
			},
			"1F3FE": {
				unified: "1F9DD-1F3FE",
				non_qualified: null,
				image: "1f9dd-1f3fe.png",
				sheet_x: 51,
				sheet_y: 11,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DD-1F3FE-200D-2642-FE0F"
			},
			"1F3FF": {
				unified: "1F9DD-1F3FF",
				non_qualified: null,
				image: "1f9dd-1f3ff.png",
				sheet_x: 51,
				sheet_y: 12,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9DD-1F3FF-200D-2642-FE0F"
			}
		},
		obsoleted_by: "1F9DD-200D-2642-FE0F",
		a: "Elf",
		b: "1F9DD",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			7
		],
		o: 5
	},
	cyclone: {
		a: "Cyclone",
		b: "1F300",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"weather",
			"swirl",
			"blue",
			"cloud",
			"vortex",
			"spiral",
			"whirlpool",
			"spin",
			"tornado",
			"hurricane",
			"typhoon"
		],
		k: [
			5,
			19
		],
		o: 2
	},
	rainbow: {
		a: "Rainbow",
		b: "1F308",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"nature",
			"happy",
			"unicorn_face",
			"photo",
			"sky",
			"spring"
		],
		k: [
			5,
			27
		],
		o: 2
	},
	male_elf: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DD-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9DD-1F3FB-200D-2642",
				image: "1f9dd-1f3fb-200d-2642-fe0f.png",
				sheet_x: 51,
				sheet_y: 2,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DD-1F3FB"
			},
			"1F3FC": {
				unified: "1F9DD-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9DD-1F3FC-200D-2642",
				image: "1f9dd-1f3fc-200d-2642-fe0f.png",
				sheet_x: 51,
				sheet_y: 3,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DD-1F3FC"
			},
			"1F3FD": {
				unified: "1F9DD-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9DD-1F3FD-200D-2642",
				image: "1f9dd-1f3fd-200d-2642-fe0f.png",
				sheet_x: 51,
				sheet_y: 4,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DD-1F3FD"
			},
			"1F3FE": {
				unified: "1F9DD-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9DD-1F3FE-200D-2642",
				image: "1f9dd-1f3fe-200d-2642-fe0f.png",
				sheet_x: 51,
				sheet_y: 5,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DD-1F3FE"
			},
			"1F3FF": {
				unified: "1F9DD-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9DD-1F3FF-200D-2642",
				image: "1f9dd-1f3ff-200d-2642-fe0f.png",
				sheet_x: 51,
				sheet_y: 6,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9DD-1F3FF"
			}
		},
		obsoletes: "1F9DD",
		a: "Male Elf",
		b: "1F9DD-200D-2642-FE0F",
		c: "1F9DD-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			1
		],
		o: 5
	},
	"flag-pw": {
		a: "Palau Flag",
		b: "1F1F5-1F1FC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			50
		],
		o: 2
	},
	chains: {
		a: "Chains",
		b: "26D3-FE0F",
		c: "26D3",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"lock",
			"arrest"
		],
		k: [
			54,
			7
		],
		o: 2
	},
	large_purple_square: {
		a: "Large Purple Square",
		b: "1F7EA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			13
		],
		o: 12
	},
	female_elf: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9DD-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9DD-1F3FB-200D-2640",
				image: "1f9dd-1f3fb-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 53,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9DD-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9DD-1F3FC-200D-2640",
				image: "1f9dd-1f3fc-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 54,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9DD-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9DD-1F3FD-200D-2640",
				image: "1f9dd-1f3fd-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 55,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9DD-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9DD-1F3FE-200D-2640",
				image: "1f9dd-1f3fe-200d-2640-fe0f.png",
				sheet_x: 50,
				sheet_y: 56,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9DD-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9DD-1F3FF-200D-2640",
				image: "1f9dd-1f3ff-200d-2640-fe0f.png",
				sheet_x: 51,
				sheet_y: 0,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Female Elf",
		b: "1F9DD-200D-2640-FE0F",
		c: "1F9DD-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			50,
			52
		],
		o: 5
	},
	"flag-py": {
		a: "Paraguay Flag",
		b: "1F1F5-1F1FE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			51
		],
		o: 2
	},
	closed_umbrella: {
		a: "Closed Umbrella",
		b: "1F302",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"weather",
			"rain",
			"drizzle"
		],
		k: [
			5,
			21
		],
		o: 2
	},
	toolbox: {
		a: "Toolbox",
		b: "1F9F0",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			35
		],
		o: 11
	},
	large_brown_square: {
		a: "Large Brown Square",
		b: "1F7EB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			37,
			14
		],
		o: 12
	},
	magnet: {
		a: "Magnet",
		b: "1F9F2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			37
		],
		o: 11
	},
	genie: {
		obsoleted_by: "1F9DE-200D-2642-FE0F",
		a: "Genie",
		b: "1F9DE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			15
		],
		o: 5
	},
	"flag-qa": {
		a: "Qatar Flag",
		b: "1F1F6-1F1E6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			52
		],
		o: 2
	},
	umbrella: {
		a: "Umbrella",
		b: "2602-FE0F",
		c: "2602",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"rainy",
			"weather",
			"spring"
		],
		k: [
			52,
			51
		],
		o: 2
	},
	black_large_square: {
		a: "Black Large Square",
		b: "2B1B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shape",
			"icon",
			"button"
		],
		k: [
			55,
			40
		],
		o: 2
	},
	male_genie: {
		obsoletes: "1F9DE",
		a: "Male Genie",
		b: "1F9DE-200D-2642-FE0F",
		c: "1F9DE-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			14
		],
		o: 5
	},
	umbrella_with_rain_drops: {
		a: "Umbrella with Rain Drops",
		b: "2614",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			52,
			56
		],
		o: 2
	},
	"flag-re": {
		a: "Réunion Flag",
		b: "1F1F7-1F1EA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			53
		],
		o: 2
	},
	white_large_square: {
		a: "White Large Square",
		b: "2B1C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shape",
			"icon",
			"stone",
			"button"
		],
		k: [
			55,
			41
		],
		o: 2
	},
	alembic: {
		a: "Alembic",
		b: "2697-FE0F",
		c: "2697",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"distilling",
			"science",
			"experiment",
			"chemistry"
		],
		k: [
			53,
			46
		],
		o: 2
	},
	black_medium_square: {
		a: "Black Medium Square",
		b: "25FC-FE0F",
		c: "25FC",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shape",
			"button",
			"icon"
		],
		k: [
			52,
			46
		],
		o: 2
	},
	test_tube: {
		a: "Test Tube",
		b: "1F9EA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			29
		],
		o: 11
	},
	"flag-ro": {
		a: "Romania Flag",
		b: "1F1F7-1F1F4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			54
		],
		o: 2
	},
	female_genie: {
		a: "Female Genie",
		b: "1F9DE-200D-2640-FE0F",
		c: "1F9DE-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			13
		],
		o: 5
	},
	umbrella_on_ground: {
		a: "Umbrella on Ground",
		b: "26F1-FE0F",
		c: "26F1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			54,
			12
		],
		o: 2
	},
	zombie: {
		obsoleted_by: "1F9DF-200D-2642-FE0F",
		a: "Zombie",
		b: "1F9DF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			18
		],
		o: 5
	},
	zap: {
		a: "High Voltage Sign",
		b: "26A1",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"thunder",
			"weather",
			"lightning bolt",
			"fast"
		],
		k: [
			53,
			51
		],
		o: 2
	},
	white_medium_square: {
		a: "White Medium Square",
		b: "25FB-FE0F",
		c: "25FB",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shape",
			"stone",
			"icon"
		],
		k: [
			52,
			45
		],
		o: 2
	},
	"flag-rs": {
		a: "Serbia Flag",
		b: "1F1F7-1F1F8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			3,
			55
		],
		o: 2
	},
	petri_dish: {
		a: "Petri Dish",
		b: "1F9EB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			30
		],
		o: 11
	},
	snowflake: {
		a: "Snowflake",
		b: "2744-FE0F",
		c: "2744",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"winter",
			"season",
			"cold",
			"weather",
			"christmas",
			"xmas"
		],
		k: [
			55,
			19
		],
		o: 2
	},
	dna: {
		a: "Dna Double Helix",
		b: "1F9EC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			31
		],
		o: 11
	},
	male_zombie: {
		obsoletes: "1F9DF",
		a: "Male Zombie",
		b: "1F9DF-200D-2642-FE0F",
		c: "1F9DF-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			17
		],
		o: 5
	},
	black_medium_small_square: {
		a: "Black Medium Small Square",
		b: "25FE",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"icon",
			"shape",
			"button"
		],
		k: [
			52,
			48
		],
		o: 2
	},
	ru: {
		a: "Russia Flag",
		b: "1F1F7-1F1FA",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"russian",
			"federation",
			"flag",
			"nation",
			"country",
			"banner"
		],
		k: [
			3,
			56
		],
		n: [
			"flag-ru"
		],
		o: 2
	},
	female_zombie: {
		a: "Female Zombie",
		b: "1F9DF-200D-2640-FE0F",
		c: "1F9DF-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			16
		],
		o: 5
	},
	"flag-rw": {
		a: "Rwanda Flag",
		b: "1F1F7-1F1FC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			0
		],
		o: 2
	},
	snowman: {
		a: "Snowman",
		b: "2603-FE0F",
		c: "2603",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"winter",
			"season",
			"cold",
			"weather",
			"christmas",
			"xmas",
			"frozen",
			"without_snow"
		],
		k: [
			52,
			52
		],
		o: 2
	},
	white_medium_small_square: {
		a: "White Medium Small Square",
		b: "25FD",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shape",
			"stone",
			"icon",
			"button"
		],
		k: [
			52,
			47
		],
		o: 2
	},
	microscope: {
		a: "Microscope",
		b: "1F52C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"laboratory",
			"experiment",
			"zoomin",
			"science",
			"study"
		],
		k: [
			28,
			15
		],
		o: 2
	},
	snowman_without_snow: {
		a: "Snowman Without Snow",
		b: "26C4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			54,
			1
		],
		o: 2
	},
	telescope: {
		a: "Telescope",
		b: "1F52D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"stars",
			"space",
			"zoom",
			"science",
			"astronomy"
		],
		k: [
			28,
			16
		],
		o: 2
	},
	massage: {
		skin_variations: {
			"1F3FB": {
				unified: "1F486-1F3FB",
				non_qualified: null,
				image: "1f486-1f3fb.png",
				sheet_x: 24,
				sheet_y: 52,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F486-1F3FC",
				non_qualified: null,
				image: "1f486-1f3fc.png",
				sheet_x: 24,
				sheet_y: 53,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F486-1F3FD",
				non_qualified: null,
				image: "1f486-1f3fd.png",
				sheet_x: 24,
				sheet_y: 54,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F486-1F3FE",
				non_qualified: null,
				image: "1f486-1f3fe.png",
				sheet_x: 24,
				sheet_y: 55,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F486-1F3FF",
				non_qualified: null,
				image: "1f486-1f3ff.png",
				sheet_x: 24,
				sheet_y: 56,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F486-200D-2640-FE0F",
		a: "Face Massage",
		b: "1F486",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			24,
			51
		],
		o: 2
	},
	black_small_square: {
		a: "Black Small Square",
		b: "25AA-FE0F",
		c: "25AA",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shape",
			"icon"
		],
		k: [
			52,
			41
		],
		o: 2
	},
	"flag-sa": {
		a: "Saudi Arabia Flag",
		b: "1F1F8-1F1E6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			1
		],
		o: 2
	},
	"man-getting-massage": {
		skin_variations: {
			"1F3FB": {
				unified: "1F486-1F3FB-200D-2642-FE0F",
				non_qualified: "1F486-1F3FB-200D-2642",
				image: "1f486-1f3fb-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 46,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F486-1F3FC-200D-2642-FE0F",
				non_qualified: "1F486-1F3FC-200D-2642",
				image: "1f486-1f3fc-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 47,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F486-1F3FD-200D-2642-FE0F",
				non_qualified: "1F486-1F3FD-200D-2642",
				image: "1f486-1f3fd-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F486-1F3FE-200D-2642-FE0F",
				non_qualified: "1F486-1F3FE-200D-2642",
				image: "1f486-1f3fe-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F486-1F3FF-200D-2642-FE0F",
				non_qualified: "1F486-1F3FF-200D-2642",
				image: "1f486-1f3ff-200d-2642-fe0f.png",
				sheet_x: 24,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Getting Massage",
		b: "1F486-200D-2642-FE0F",
		c: "1F486-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			24,
			45
		],
		o: 4
	},
	comet: {
		a: "Comet",
		b: "2604-FE0F",
		c: "2604",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"space"
		],
		k: [
			52,
			53
		],
		o: 2
	},
	white_small_square: {
		a: "White Small Square",
		b: "25AB-FE0F",
		c: "25AB",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shape",
			"icon"
		],
		k: [
			52,
			42
		],
		o: 2
	},
	"flag-sb": {
		a: "Solomon Islands Flag",
		b: "1F1F8-1F1E7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			2
		],
		o: 2
	},
	satellite_antenna: {
		a: "Satellite Antenna",
		b: "1F4E1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			26,
			55
		],
		o: 2
	},
	large_orange_diamond: {
		a: "Large Orange Diamond",
		b: "1F536",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shape",
			"jewel",
			"gem"
		],
		k: [
			28,
			25
		],
		o: 2
	},
	"woman-getting-massage": {
		skin_variations: {
			"1F3FB": {
				unified: "1F486-1F3FB-200D-2640-FE0F",
				non_qualified: "1F486-1F3FB-200D-2640",
				image: "1f486-1f3fb-200d-2640-fe0f.png",
				sheet_x: 24,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F486-1F3FC-200D-2640-FE0F",
				non_qualified: "1F486-1F3FC-200D-2640",
				image: "1f486-1f3fc-200d-2640-fe0f.png",
				sheet_x: 24,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F486-1F3FD-200D-2640-FE0F",
				non_qualified: "1F486-1F3FD-200D-2640",
				image: "1f486-1f3fd-200d-2640-fe0f.png",
				sheet_x: 24,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F486-1F3FE-200D-2640-FE0F",
				non_qualified: "1F486-1F3FE-200D-2640",
				image: "1f486-1f3fe-200d-2640-fe0f.png",
				sheet_x: 24,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F486-1F3FF-200D-2640-FE0F",
				non_qualified: "1F486-1F3FF-200D-2640",
				image: "1f486-1f3ff-200d-2640-fe0f.png",
				sheet_x: 24,
				sheet_y: 44,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F486",
		a: "Woman Getting Massage",
		b: "1F486-200D-2640-FE0F",
		c: "1F486-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			24,
			39
		],
		o: 4
	},
	fire: {
		a: "Fire",
		b: "1F525",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"hot",
			"cook",
			"flame"
		],
		k: [
			28,
			8
		],
		o: 2
	},
	syringe: {
		a: "Syringe",
		b: "1F489",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"health",
			"hospital",
			"drugs",
			"blood",
			"medicine",
			"needle",
			"doctor",
			"nurse"
		],
		k: [
			25,
			19
		],
		o: 2
	},
	"flag-sc": {
		a: "Seychelles Flag",
		b: "1F1F8-1F1E8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			3
		],
		o: 2
	},
	large_blue_diamond: {
		a: "Large Blue Diamond",
		b: "1F537",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shape",
			"jewel",
			"gem"
		],
		k: [
			28,
			26
		],
		o: 2
	},
	"flag-sd": {
		a: "Sudan Flag",
		b: "1F1F8-1F1E9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			4
		],
		o: 2
	},
	droplet: {
		a: "Droplet",
		b: "1F4A7",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"water",
			"drip",
			"faucet",
			"spring"
		],
		k: [
			25,
			49
		],
		o: 2
	},
	drop_of_blood: {
		a: "Drop of Blood",
		b: "1FA78",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			55
		],
		o: 12
	},
	haircut: {
		skin_variations: {
			"1F3FB": {
				unified: "1F487-1F3FB",
				non_qualified: null,
				image: "1f487-1f3fb.png",
				sheet_x: 25,
				sheet_y: 13,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F487-1F3FC",
				non_qualified: null,
				image: "1f487-1f3fc.png",
				sheet_x: 25,
				sheet_y: 14,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F487-1F3FD",
				non_qualified: null,
				image: "1f487-1f3fd.png",
				sheet_x: 25,
				sheet_y: 15,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F487-1F3FE",
				non_qualified: null,
				image: "1f487-1f3fe.png",
				sheet_x: 25,
				sheet_y: 16,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F487-1F3FF",
				non_qualified: null,
				image: "1f487-1f3ff.png",
				sheet_x: 25,
				sheet_y: 17,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F487-200D-2640-FE0F",
		a: "Haircut",
		b: "1F487",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			25,
			12
		],
		o: 2
	},
	ocean: {
		a: "Water Wave",
		b: "1F30A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sea",
			"water",
			"wave",
			"nature",
			"tsunami",
			"disaster"
		],
		k: [
			5,
			29
		],
		o: 2
	},
	"flag-se": {
		a: "Sweden Flag",
		b: "1F1F8-1F1EA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			5
		],
		o: 2
	},
	"man-getting-haircut": {
		skin_variations: {
			"1F3FB": {
				unified: "1F487-1F3FB-200D-2642-FE0F",
				non_qualified: "1F487-1F3FB-200D-2642",
				image: "1f487-1f3fb-200d-2642-fe0f.png",
				sheet_x: 25,
				sheet_y: 7,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F487-1F3FC-200D-2642-FE0F",
				non_qualified: "1F487-1F3FC-200D-2642",
				image: "1f487-1f3fc-200d-2642-fe0f.png",
				sheet_x: 25,
				sheet_y: 8,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F487-1F3FD-200D-2642-FE0F",
				non_qualified: "1F487-1F3FD-200D-2642",
				image: "1f487-1f3fd-200d-2642-fe0f.png",
				sheet_x: 25,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F487-1F3FE-200D-2642-FE0F",
				non_qualified: "1F487-1F3FE-200D-2642",
				image: "1f487-1f3fe-200d-2642-fe0f.png",
				sheet_x: 25,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F487-1F3FF-200D-2642-FE0F",
				non_qualified: "1F487-1F3FF-200D-2642",
				image: "1f487-1f3ff-200d-2642-fe0f.png",
				sheet_x: 25,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Getting Haircut",
		b: "1F487-200D-2642-FE0F",
		c: "1F487-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			25,
			6
		],
		o: 4
	},
	small_orange_diamond: {
		a: "Small Orange Diamond",
		b: "1F538",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shape",
			"jewel",
			"gem"
		],
		k: [
			28,
			27
		],
		o: 2
	},
	pill: {
		a: "Pill",
		b: "1F48A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"health",
			"medicine",
			"doctor",
			"pharmacy",
			"drug"
		],
		k: [
			25,
			20
		],
		o: 2
	},
	"woman-getting-haircut": {
		skin_variations: {
			"1F3FB": {
				unified: "1F487-1F3FB-200D-2640-FE0F",
				non_qualified: "1F487-1F3FB-200D-2640",
				image: "1f487-1f3fb-200d-2640-fe0f.png",
				sheet_x: 25,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F487-1F3FC-200D-2640-FE0F",
				non_qualified: "1F487-1F3FC-200D-2640",
				image: "1f487-1f3fc-200d-2640-fe0f.png",
				sheet_x: 25,
				sheet_y: 2,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F487-1F3FD-200D-2640-FE0F",
				non_qualified: "1F487-1F3FD-200D-2640",
				image: "1f487-1f3fd-200d-2640-fe0f.png",
				sheet_x: 25,
				sheet_y: 3,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F487-1F3FE-200D-2640-FE0F",
				non_qualified: "1F487-1F3FE-200D-2640",
				image: "1f487-1f3fe-200d-2640-fe0f.png",
				sheet_x: 25,
				sheet_y: 4,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F487-1F3FF-200D-2640-FE0F",
				non_qualified: "1F487-1F3FF-200D-2640",
				image: "1f487-1f3ff-200d-2640-fe0f.png",
				sheet_x: 25,
				sheet_y: 5,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F487",
		a: "Woman Getting Haircut",
		b: "1F487-200D-2640-FE0F",
		c: "1F487-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			25,
			0
		],
		o: 4
	},
	small_blue_diamond: {
		a: "Small Blue Diamond",
		b: "1F539",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shape",
			"jewel",
			"gem"
		],
		k: [
			28,
			28
		],
		o: 2
	},
	"flag-sg": {
		a: "Singapore Flag",
		b: "1F1F8-1F1EC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			6
		],
		o: 2
	},
	adhesive_bandage: {
		a: "Adhesive Bandage",
		b: "1FA79",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			56
		],
		o: 12
	},
	walking: {
		skin_variations: {
			"1F3FB": {
				unified: "1F6B6-1F3FB",
				non_qualified: null,
				image: "1f6b6-1f3fb.png",
				sheet_x: 36,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F6B6-1F3FC",
				non_qualified: null,
				image: "1f6b6-1f3fc.png",
				sheet_x: 36,
				sheet_y: 4,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F6B6-1F3FD",
				non_qualified: null,
				image: "1f6b6-1f3fd.png",
				sheet_x: 36,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F6B6-1F3FE",
				non_qualified: null,
				image: "1f6b6-1f3fe.png",
				sheet_x: 36,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F6B6-1F3FF",
				non_qualified: null,
				image: "1f6b6-1f3ff.png",
				sheet_x: 36,
				sheet_y: 7,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F6B6-200D-2642-FE0F",
		a: "Pedestrian",
		b: "1F6B6",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			36,
			2
		],
		o: 2
	},
	small_red_triangle: {
		a: "Up-Pointing Red Triangle",
		b: "1F53A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shape",
			"direction",
			"up",
			"top"
		],
		k: [
			28,
			29
		],
		o: 2
	},
	"flag-sh": {
		a: "St. Helena Flag",
		b: "1F1F8-1F1ED",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			7
		],
		o: 2
	},
	stethoscope: {
		a: "Stethoscope",
		b: "1FA7A",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			52,
			0
		],
		o: 12
	},
	"man-walking": {
		skin_variations: {
			"1F3FB": {
				unified: "1F6B6-1F3FB-200D-2642-FE0F",
				non_qualified: "1F6B6-1F3FB-200D-2642",
				image: "1f6b6-1f3fb-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F6B6-1F3FC-200D-2642-FE0F",
				non_qualified: "1F6B6-1F3FC-200D-2642",
				image: "1f6b6-1f3fc-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F6B6-1F3FD-200D-2642-FE0F",
				non_qualified: "1F6B6-1F3FD-200D-2642",
				image: "1f6b6-1f3fd-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F6B6-1F3FE-200D-2642-FE0F",
				non_qualified: "1F6B6-1F3FE-200D-2642",
				image: "1f6b6-1f3fe-200d-2642-fe0f.png",
				sheet_x: 36,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F6B6-1F3FF-200D-2642-FE0F",
				non_qualified: "1F6B6-1F3FF-200D-2642",
				image: "1f6b6-1f3ff-200d-2642-fe0f.png",
				sheet_x: 36,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F6B6",
		a: "Man Walking",
		b: "1F6B6-200D-2642-FE0F",
		c: "1F6B6-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			35,
			53
		],
		o: 4
	},
	"flag-si": {
		a: "Slovenia Flag",
		b: "1F1F8-1F1EE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			8
		],
		o: 2
	},
	door: {
		a: "Door",
		b: "1F6AA",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"house",
			"entry",
			"exit"
		],
		k: [
			35,
			1
		],
		o: 2
	},
	small_red_triangle_down: {
		a: "Down-Pointing Red Triangle",
		b: "1F53B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shape",
			"direction",
			"bottom"
		],
		k: [
			28,
			30
		],
		o: 2
	},
	"flag-sj": {
		a: "Svalbard & Jan Mayen Flag",
		b: "1F1F8-1F1EF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			9
		],
		o: 2
	},
	diamond_shape_with_a_dot_inside: {
		a: "Diamond Shape with a Dot Inside",
		b: "1F4A0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"jewel",
			"blue",
			"gem",
			"crystal",
			"fancy"
		],
		k: [
			25,
			42
		],
		o: 2
	},
	"woman-walking": {
		skin_variations: {
			"1F3FB": {
				unified: "1F6B6-1F3FB-200D-2640-FE0F",
				non_qualified: "1F6B6-1F3FB-200D-2640",
				image: "1f6b6-1f3fb-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F6B6-1F3FC-200D-2640-FE0F",
				non_qualified: "1F6B6-1F3FC-200D-2640",
				image: "1f6b6-1f3fc-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F6B6-1F3FD-200D-2640-FE0F",
				non_qualified: "1F6B6-1F3FD-200D-2640",
				image: "1f6b6-1f3fd-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F6B6-1F3FE-200D-2640-FE0F",
				non_qualified: "1F6B6-1F3FE-200D-2640",
				image: "1f6b6-1f3fe-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F6B6-1F3FF-200D-2640-FE0F",
				non_qualified: "1F6B6-1F3FF-200D-2640",
				image: "1f6b6-1f3ff-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Walking",
		b: "1F6B6-200D-2640-FE0F",
		c: "1F6B6-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			35,
			47
		],
		o: 4
	},
	bed: {
		a: "Bed",
		b: "1F6CF-FE0F",
		c: "1F6CF",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sleep",
			"rest"
		],
		k: [
			36,
			37
		],
		o: 2
	},
	radio_button: {
		a: "Radio Button",
		b: "1F518",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"input",
			"old",
			"music",
			"circle"
		],
		k: [
			27,
			52
		],
		o: 2
	},
	"flag-sk": {
		a: "Slovakia Flag",
		b: "1F1F8-1F1F0",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			10
		],
		o: 2
	},
	standing_person: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9CD-1F3FB",
				non_qualified: null,
				image: "1f9cd-1f3fb.png",
				sheet_x: 44,
				sheet_y: 32,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9CD-1F3FC",
				non_qualified: null,
				image: "1f9cd-1f3fc.png",
				sheet_x: 44,
				sheet_y: 33,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9CD-1F3FD",
				non_qualified: null,
				image: "1f9cd-1f3fd.png",
				sheet_x: 44,
				sheet_y: 34,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9CD-1F3FE",
				non_qualified: null,
				image: "1f9cd-1f3fe.png",
				sheet_x: 44,
				sheet_y: 35,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9CD-1F3FF",
				non_qualified: null,
				image: "1f9cd-1f3ff.png",
				sheet_x: 44,
				sheet_y: 36,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Standing Person",
		b: "1F9CD",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			31
		],
		o: 12
	},
	couch_and_lamp: {
		a: "Couch and Lamp",
		b: "1F6CB-FE0F",
		c: "1F6CB",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"read",
			"chill"
		],
		k: [
			36,
			28
		],
		o: 2
	},
	man_standing: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9CD-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9CD-1F3FB-200D-2642",
				image: "1f9cd-1f3fb-200d-2642-fe0f.png",
				sheet_x: 44,
				sheet_y: 26,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9CD-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9CD-1F3FC-200D-2642",
				image: "1f9cd-1f3fc-200d-2642-fe0f.png",
				sheet_x: 44,
				sheet_y: 27,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9CD-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9CD-1F3FD-200D-2642",
				image: "1f9cd-1f3fd-200d-2642-fe0f.png",
				sheet_x: 44,
				sheet_y: 28,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9CD-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9CD-1F3FE-200D-2642",
				image: "1f9cd-1f3fe-200d-2642-fe0f.png",
				sheet_x: 44,
				sheet_y: 29,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9CD-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9CD-1F3FF-200D-2642",
				image: "1f9cd-1f3ff-200d-2642-fe0f.png",
				sheet_x: 44,
				sheet_y: 30,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Standing",
		b: "1F9CD-200D-2642-FE0F",
		c: "1F9CD-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			25
		],
		o: 12
	},
	white_square_button: {
		a: "White Square Button",
		b: "1F533",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shape",
			"input"
		],
		k: [
			28,
			22
		],
		o: 2
	},
	"flag-sl": {
		a: "Sierra Leone Flag",
		b: "1F1F8-1F1F1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			11
		],
		o: 2
	},
	chair: {
		a: "Chair",
		b: "1FA91",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			52,
			5
		],
		o: 12
	},
	toilet: {
		a: "Toilet",
		b: "1F6BD",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"restroom",
			"wc",
			"washroom",
			"bathroom",
			"potty"
		],
		k: [
			36,
			14
		],
		o: 2
	},
	black_square_button: {
		a: "Black Square Button",
		b: "1F532",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"shape",
			"input",
			"frame"
		],
		k: [
			28,
			21
		],
		o: 2
	},
	"flag-sm": {
		a: "San Marino Flag",
		b: "1F1F8-1F1F2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			12
		],
		o: 2
	},
	woman_standing: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9CD-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9CD-1F3FB-200D-2640",
				image: "1f9cd-1f3fb-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 20,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9CD-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9CD-1F3FC-200D-2640",
				image: "1f9cd-1f3fc-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 21,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9CD-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9CD-1F3FD-200D-2640",
				image: "1f9cd-1f3fd-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 22,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9CD-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9CD-1F3FE-200D-2640",
				image: "1f9cd-1f3fe-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 23,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9CD-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9CD-1F3FF-200D-2640",
				image: "1f9cd-1f3ff-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 24,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Standing",
		b: "1F9CD-200D-2640-FE0F",
		c: "1F9CD-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			19
		],
		o: 12
	},
	kneeling_person: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9CE-1F3FB",
				non_qualified: null,
				image: "1f9ce-1f3fb.png",
				sheet_x: 44,
				sheet_y: 50,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9CE-1F3FC",
				non_qualified: null,
				image: "1f9ce-1f3fc.png",
				sheet_x: 44,
				sheet_y: 51,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9CE-1F3FD",
				non_qualified: null,
				image: "1f9ce-1f3fd.png",
				sheet_x: 44,
				sheet_y: 52,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9CE-1F3FE",
				non_qualified: null,
				image: "1f9ce-1f3fe.png",
				sheet_x: 44,
				sheet_y: 53,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9CE-1F3FF",
				non_qualified: null,
				image: "1f9ce-1f3ff.png",
				sheet_x: 44,
				sheet_y: 54,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Kneeling Person",
		b: "1F9CE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			49
		],
		o: 12
	},
	shower: {
		a: "Shower",
		b: "1F6BF",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"clean",
			"water",
			"bathroom"
		],
		k: [
			36,
			16
		],
		o: 2
	},
	"flag-sn": {
		a: "Senegal Flag",
		b: "1F1F8-1F1F3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			13
		],
		o: 2
	},
	bathtub: {
		a: "Bathtub",
		b: "1F6C1",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"clean",
			"shower",
			"bathroom"
		],
		k: [
			36,
			23
		],
		o: 2
	},
	"flag-so": {
		a: "Somalia Flag",
		b: "1F1F8-1F1F4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			14
		],
		o: 2
	},
	man_kneeling: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9CE-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9CE-1F3FB-200D-2642",
				image: "1f9ce-1f3fb-200d-2642-fe0f.png",
				sheet_x: 44,
				sheet_y: 44,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9CE-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9CE-1F3FC-200D-2642",
				image: "1f9ce-1f3fc-200d-2642-fe0f.png",
				sheet_x: 44,
				sheet_y: 45,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9CE-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9CE-1F3FD-200D-2642",
				image: "1f9ce-1f3fd-200d-2642-fe0f.png",
				sheet_x: 44,
				sheet_y: 46,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9CE-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9CE-1F3FE-200D-2642",
				image: "1f9ce-1f3fe-200d-2642-fe0f.png",
				sheet_x: 44,
				sheet_y: 47,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9CE-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9CE-1F3FF-200D-2642",
				image: "1f9ce-1f3ff-200d-2642-fe0f.png",
				sheet_x: 44,
				sheet_y: 48,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Kneeling",
		b: "1F9CE-200D-2642-FE0F",
		c: "1F9CE-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			43
		],
		o: 12
	},
	"flag-sr": {
		a: "Suriname Flag",
		b: "1F1F8-1F1F7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			15
		],
		o: 2
	},
	woman_kneeling: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9CE-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9CE-1F3FB-200D-2640",
				image: "1f9ce-1f3fb-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 38,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9CE-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9CE-1F3FC-200D-2640",
				image: "1f9ce-1f3fc-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 39,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9CE-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9CE-1F3FD-200D-2640",
				image: "1f9ce-1f3fd-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 40,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9CE-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9CE-1F3FE-200D-2640",
				image: "1f9ce-1f3fe-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 41,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9CE-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9CE-1F3FF-200D-2640",
				image: "1f9ce-1f3ff-200d-2640-fe0f.png",
				sheet_x: 44,
				sheet_y: 42,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Kneeling",
		b: "1F9CE-200D-2640-FE0F",
		c: "1F9CE-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			44,
			37
		],
		o: 12
	},
	razor: {
		a: "Razor",
		b: "1FA92",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			52,
			6
		],
		o: 12
	},
	person_with_probing_cane: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F9AF",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f9af.png",
				sheet_x: 47,
				sheet_y: 8,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F9AF",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f9af.png",
				sheet_x: 47,
				sheet_y: 9,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F9AF",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f9af.png",
				sheet_x: 47,
				sheet_y: 10,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F9AF",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f9af.png",
				sheet_x: 47,
				sheet_y: 11,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F9AF",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f9af.png",
				sheet_x: 47,
				sheet_y: 12,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Person with Probing Cane",
		b: "1F9D1-200D-1F9AF",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			47,
			7
		],
		o: 12
	},
	"flag-ss": {
		a: "South Sudan Flag",
		b: "1F1F8-1F1F8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			16
		],
		o: 2
	},
	lotion_bottle: {
		a: "Lotion Bottle",
		b: "1F9F4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			39
		],
		o: 11
	},
	"flag-st": {
		a: "São Tomé & Príncipe Flag",
		b: "1F1F8-1F1F9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			17
		],
		o: 2
	},
	safety_pin: {
		a: "Safety Pin",
		b: "1F9F7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			42
		],
		o: 11
	},
	man_with_probing_cane: {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F9AF",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f9af.png",
				sheet_x: 16,
				sheet_y: 18,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F9AF",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f9af.png",
				sheet_x: 16,
				sheet_y: 19,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F9AF",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f9af.png",
				sheet_x: 16,
				sheet_y: 20,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F9AF",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f9af.png",
				sheet_x: 16,
				sheet_y: 21,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F9AF",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f9af.png",
				sheet_x: 16,
				sheet_y: 22,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man with Probing Cane",
		b: "1F468-200D-1F9AF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			16,
			17
		],
		o: 12
	},
	broom: {
		a: "Broom",
		b: "1F9F9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			44
		],
		o: 11
	},
	woman_with_probing_cane: {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F9AF",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f9af.png",
				sheet_x: 19,
				sheet_y: 3,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F9AF",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f9af.png",
				sheet_x: 19,
				sheet_y: 4,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F9AF",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f9af.png",
				sheet_x: 19,
				sheet_y: 5,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F9AF",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f9af.png",
				sheet_x: 19,
				sheet_y: 6,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F9AF",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f9af.png",
				sheet_x: 19,
				sheet_y: 7,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman with Probing Cane",
		b: "1F469-200D-1F9AF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			19,
			2
		],
		o: 12
	},
	"flag-sv": {
		a: "El Salvador Flag",
		b: "1F1F8-1F1FB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			18
		],
		o: 2
	},
	"flag-sx": {
		a: "Sint Maarten Flag",
		b: "1F1F8-1F1FD",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			19
		],
		o: 2
	},
	basket: {
		a: "Basket",
		b: "1F9FA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			45
		],
		o: 11
	},
	person_in_motorized_wheelchair: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F9BC",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f9bc.png",
				sheet_x: 47,
				sheet_y: 38,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F9BC",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f9bc.png",
				sheet_x: 47,
				sheet_y: 39,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F9BC",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f9bc.png",
				sheet_x: 47,
				sheet_y: 40,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F9BC",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f9bc.png",
				sheet_x: 47,
				sheet_y: 41,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F9BC",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f9bc.png",
				sheet_x: 47,
				sheet_y: 42,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Person in Motorized Wheelchair",
		b: "1F9D1-200D-1F9BC",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			47,
			37
		],
		o: 12
	},
	man_in_motorized_wheelchair: {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F9BC",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f9bc.png",
				sheet_x: 16,
				sheet_y: 48,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F9BC",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f9bc.png",
				sheet_x: 16,
				sheet_y: 49,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F9BC",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f9bc.png",
				sheet_x: 16,
				sheet_y: 50,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F9BC",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f9bc.png",
				sheet_x: 16,
				sheet_y: 51,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F9BC",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f9bc.png",
				sheet_x: 16,
				sheet_y: 52,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man in Motorized Wheelchair",
		b: "1F468-200D-1F9BC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			16,
			47
		],
		o: 12
	},
	"flag-sy": {
		a: "Syria Flag",
		b: "1F1F8-1F1FE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			20
		],
		o: 2
	},
	roll_of_paper: {
		a: "Roll of Paper",
		b: "1F9FB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			46
		],
		o: 11
	},
	woman_in_motorized_wheelchair: {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F9BC",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f9bc.png",
				sheet_x: 19,
				sheet_y: 33,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F9BC",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f9bc.png",
				sheet_x: 19,
				sheet_y: 34,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F9BC",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f9bc.png",
				sheet_x: 19,
				sheet_y: 35,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F9BC",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f9bc.png",
				sheet_x: 19,
				sheet_y: 36,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F9BC",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f9bc.png",
				sheet_x: 19,
				sheet_y: 37,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman in Motorized Wheelchair",
		b: "1F469-200D-1F9BC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			19,
			32
		],
		o: 12
	},
	"flag-sz": {
		a: "Eswatini Flag",
		b: "1F1F8-1F1FF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			21
		],
		o: 2
	},
	soap: {
		a: "Bar of Soap",
		b: "1F9FC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			47
		],
		o: 11
	},
	"flag-ta": {
		a: "Tristan Da Cunha Flag",
		b: "1F1F9-1F1E6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			22
		],
		o: 2
	},
	sponge: {
		a: "Sponge",
		b: "1F9FD",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			48
		],
		o: 11
	},
	person_in_manual_wheelchair: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F9BD",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f9bd.png",
				sheet_x: 47,
				sheet_y: 44,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F9BD",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f9bd.png",
				sheet_x: 47,
				sheet_y: 45,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F9BD",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f9bd.png",
				sheet_x: 47,
				sheet_y: 46,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F9BD",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f9bd.png",
				sheet_x: 47,
				sheet_y: 47,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F9BD",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f9bd.png",
				sheet_x: 47,
				sheet_y: 48,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: false,
				has_img_facebook: false
			}
		},
		a: "Person in Manual Wheelchair",
		b: "1F9D1-200D-1F9BD",
		d: true,
		e: false,
		f: false,
		h: false,
		k: [
			47,
			43
		],
		o: 12
	},
	fire_extinguisher: {
		a: "Fire Extinguisher",
		b: "1F9EF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			51,
			34
		],
		o: 11
	},
	man_in_manual_wheelchair: {
		skin_variations: {
			"1F3FB": {
				unified: "1F468-1F3FB-200D-1F9BD",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f9bd.png",
				sheet_x: 16,
				sheet_y: 54,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F468-1F3FC-200D-1F9BD",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f9bd.png",
				sheet_x: 16,
				sheet_y: 55,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F468-1F3FD-200D-1F9BD",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f9bd.png",
				sheet_x: 16,
				sheet_y: 56,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F468-1F3FE-200D-1F9BD",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f9bd.png",
				sheet_x: 17,
				sheet_y: 0,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F468-1F3FF-200D-1F9BD",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f9bd.png",
				sheet_x: 17,
				sheet_y: 1,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man in Manual Wheelchair",
		b: "1F468-200D-1F9BD",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			16,
			53
		],
		o: 12
	},
	"flag-tc": {
		a: "Turks & Caicos Islands Flag",
		b: "1F1F9-1F1E8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			23
		],
		o: 2
	},
	woman_in_manual_wheelchair: {
		skin_variations: {
			"1F3FB": {
				unified: "1F469-1F3FB-200D-1F9BD",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f9bd.png",
				sheet_x: 19,
				sheet_y: 39,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F469-1F3FC-200D-1F9BD",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f9bd.png",
				sheet_x: 19,
				sheet_y: 40,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F469-1F3FD-200D-1F9BD",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f9bd.png",
				sheet_x: 19,
				sheet_y: 41,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F469-1F3FE-200D-1F9BD",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f9bd.png",
				sheet_x: 19,
				sheet_y: 42,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F469-1F3FF-200D-1F9BD",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f9bd.png",
				sheet_x: 19,
				sheet_y: 43,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman in Manual Wheelchair",
		b: "1F469-200D-1F9BD",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			19,
			38
		],
		o: 12
	},
	"flag-td": {
		a: "Chad Flag",
		b: "1F1F9-1F1E9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			24
		],
		o: 2
	},
	shopping_trolley: {
		a: "Shopping Trolley",
		b: "1F6D2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			36,
			40
		],
		o: 4
	},
	runner: {
		skin_variations: {
			"1F3FB": {
				unified: "1F3C3-1F3FB",
				non_qualified: null,
				image: "1f3c3-1f3fb.png",
				sheet_x: 9,
				sheet_y: 2,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F3C3-1F3FC",
				non_qualified: null,
				image: "1f3c3-1f3fc.png",
				sheet_x: 9,
				sheet_y: 3,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F3C3-1F3FD",
				non_qualified: null,
				image: "1f3c3-1f3fd.png",
				sheet_x: 9,
				sheet_y: 4,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F3C3-1F3FE",
				non_qualified: null,
				image: "1f3c3-1f3fe.png",
				sheet_x: 9,
				sheet_y: 5,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F3C3-1F3FF",
				non_qualified: null,
				image: "1f3c3-1f3ff.png",
				sheet_x: 9,
				sheet_y: 6,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F3C3-200D-2642-FE0F",
		a: "Runner",
		b: "1F3C3",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			9,
			1
		],
		n: [
			"running"
		],
		o: 2
	},
	"flag-tf": {
		a: "French Southern Territories Flag",
		b: "1F1F9-1F1EB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			25
		],
		o: 2
	},
	smoking: {
		a: "Smoking Symbol",
		b: "1F6AC",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"kills",
			"tobacco",
			"cigarette",
			"joint",
			"smoke"
		],
		k: [
			35,
			3
		],
		o: 2
	},
	coffin: {
		a: "Coffin",
		b: "26B0-FE0F",
		c: "26B0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"vampire",
			"dead",
			"die",
			"death",
			"rip",
			"graveyard",
			"cemetery",
			"casket",
			"funeral",
			"box"
		],
		k: [
			53,
			54
		],
		o: 2
	},
	"man-running": {
		skin_variations: {
			"1F3FB": {
				unified: "1F3C3-1F3FB-200D-2642-FE0F",
				non_qualified: "1F3C3-1F3FB-200D-2642",
				image: "1f3c3-1f3fb-200d-2642-fe0f.png",
				sheet_x: 8,
				sheet_y: 53,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3C3-1F3FC-200D-2642-FE0F",
				non_qualified: "1F3C3-1F3FC-200D-2642",
				image: "1f3c3-1f3fc-200d-2642-fe0f.png",
				sheet_x: 8,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3C3-1F3FD-200D-2642-FE0F",
				non_qualified: "1F3C3-1F3FD-200D-2642",
				image: "1f3c3-1f3fd-200d-2642-fe0f.png",
				sheet_x: 8,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3C3-1F3FE-200D-2642-FE0F",
				non_qualified: "1F3C3-1F3FE-200D-2642",
				image: "1f3c3-1f3fe-200d-2642-fe0f.png",
				sheet_x: 8,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3C3-1F3FF-200D-2642-FE0F",
				non_qualified: "1F3C3-1F3FF-200D-2642",
				image: "1f3c3-1f3ff-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F3C3",
		a: "Man Running",
		b: "1F3C3-200D-2642-FE0F",
		c: "1F3C3-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			8,
			52
		],
		o: 4
	},
	"flag-tg": {
		a: "Togo Flag",
		b: "1F1F9-1F1EC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			26
		],
		o: 2
	},
	"woman-running": {
		skin_variations: {
			"1F3FB": {
				unified: "1F3C3-1F3FB-200D-2640-FE0F",
				non_qualified: "1F3C3-1F3FB-200D-2640",
				image: "1f3c3-1f3fb-200d-2640-fe0f.png",
				sheet_x: 8,
				sheet_y: 47,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3C3-1F3FC-200D-2640-FE0F",
				non_qualified: "1F3C3-1F3FC-200D-2640",
				image: "1f3c3-1f3fc-200d-2640-fe0f.png",
				sheet_x: 8,
				sheet_y: 48,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3C3-1F3FD-200D-2640-FE0F",
				non_qualified: "1F3C3-1F3FD-200D-2640",
				image: "1f3c3-1f3fd-200d-2640-fe0f.png",
				sheet_x: 8,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3C3-1F3FE-200D-2640-FE0F",
				non_qualified: "1F3C3-1F3FE-200D-2640",
				image: "1f3c3-1f3fe-200d-2640-fe0f.png",
				sheet_x: 8,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3C3-1F3FF-200D-2640-FE0F",
				non_qualified: "1F3C3-1F3FF-200D-2640",
				image: "1f3c3-1f3ff-200d-2640-fe0f.png",
				sheet_x: 8,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Running",
		b: "1F3C3-200D-2640-FE0F",
		c: "1F3C3-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			8,
			46
		],
		o: 4
	},
	funeral_urn: {
		a: "Funeral Urn",
		b: "26B1-FE0F",
		c: "26B1",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"dead",
			"die",
			"death",
			"rip",
			"ashes"
		],
		k: [
			53,
			55
		],
		o: 2
	},
	"flag-th": {
		a: "Thailand Flag",
		b: "1F1F9-1F1ED",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			27
		],
		o: 2
	},
	moyai: {
		a: "Moyai",
		b: "1F5FF",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"rock",
			"easter island",
			"moai"
		],
		k: [
			30,
			34
		],
		o: 2
	},
	"flag-tj": {
		a: "Tajikistan Flag",
		b: "1F1F9-1F1EF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			28
		],
		o: 2
	},
	dancer: {
		skin_variations: {
			"1F3FB": {
				unified: "1F483-1F3FB",
				non_qualified: null,
				image: "1f483-1f3fb.png",
				sheet_x: 24,
				sheet_y: 27,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F483-1F3FC",
				non_qualified: null,
				image: "1f483-1f3fc.png",
				sheet_x: 24,
				sheet_y: 28,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F483-1F3FD",
				non_qualified: null,
				image: "1f483-1f3fd.png",
				sheet_x: 24,
				sheet_y: 29,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F483-1F3FE",
				non_qualified: null,
				image: "1f483-1f3fe.png",
				sheet_x: 24,
				sheet_y: 30,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F483-1F3FF",
				non_qualified: null,
				image: "1f483-1f3ff.png",
				sheet_x: 24,
				sheet_y: 31,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Dancer",
		b: "1F483",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"female",
			"girl",
			"woman",
			"fun"
		],
		k: [
			24,
			26
		],
		o: 2
	},
	"flag-tk": {
		a: "Tokelau Flag",
		b: "1F1F9-1F1F0",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			29
		],
		o: 2
	},
	man_dancing: {
		skin_variations: {
			"1F3FB": {
				unified: "1F57A-1F3FB",
				non_qualified: null,
				image: "1f57a-1f3fb.png",
				sheet_x: 29,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F57A-1F3FC",
				non_qualified: null,
				image: "1f57a-1f3fc.png",
				sheet_x: 29,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F57A-1F3FD",
				non_qualified: null,
				image: "1f57a-1f3fd.png",
				sheet_x: 29,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F57A-1F3FE",
				non_qualified: null,
				image: "1f57a-1f3fe.png",
				sheet_x: 29,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F57A-1F3FF",
				non_qualified: null,
				image: "1f57a-1f3ff.png",
				sheet_x: 29,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Dancing",
		b: "1F57A",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"male",
			"boy",
			"fun",
			"dancer"
		],
		k: [
			29,
			37
		],
		o: 4
	},
	"flag-tl": {
		a: "Timor-Leste Flag",
		b: "1F1F9-1F1F1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			30
		],
		o: 2
	},
	man_in_business_suit_levitating: {
		skin_variations: {
			"1F3FB": {
				unified: "1F574-1F3FB",
				non_qualified: null,
				image: "1f574-1f3fb.png",
				sheet_x: 29,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F574-1F3FC",
				non_qualified: null,
				image: "1f574-1f3fc.png",
				sheet_x: 29,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F574-1F3FD",
				non_qualified: null,
				image: "1f574-1f3fd.png",
				sheet_x: 29,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F574-1F3FE",
				non_qualified: null,
				image: "1f574-1f3fe.png",
				sheet_x: 29,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F574-1F3FF",
				non_qualified: null,
				image: "1f574-1f3ff.png",
				sheet_x: 29,
				sheet_y: 14,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man in Business Suit Levitating",
		b: "1F574-FE0F",
		c: "1F574",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			29,
			9
		],
		o: 2
	},
	"flag-tm": {
		a: "Turkmenistan Flag",
		b: "1F1F9-1F1F2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			31
		],
		o: 2
	},
	dancers: {
		obsoleted_by: "1F46F-200D-2640-FE0F",
		a: "Woman with Bunny Ears",
		b: "1F46F",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			22,
			0
		],
		o: 2
	},
	"man-with-bunny-ears-partying": {
		a: "Man with Bunny Ears Partying",
		b: "1F46F-200D-2642-FE0F",
		c: "1F46F-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			21,
			56
		],
		o: 4
	},
	"flag-tn": {
		a: "Tunisia Flag",
		b: "1F1F9-1F1F3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			32
		],
		o: 2
	},
	"flag-to": {
		a: "Tonga Flag",
		b: "1F1F9-1F1F4",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			33
		],
		o: 2
	},
	"woman-with-bunny-ears-partying": {
		obsoletes: "1F46F",
		a: "Woman with Bunny Ears Partying",
		b: "1F46F-200D-2640-FE0F",
		c: "1F46F-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			21,
			55
		],
		o: 4
	},
	"flag-tr": {
		a: "Turkey Flag",
		b: "1F1F9-1F1F7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			34
		],
		o: 2
	},
	person_in_steamy_room: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D6-1F3FB",
				non_qualified: null,
				image: "1f9d6-1f3fb.png",
				sheet_x: 48,
				sheet_y: 53,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D6-1F3FB-200D-2642-FE0F"
			},
			"1F3FC": {
				unified: "1F9D6-1F3FC",
				non_qualified: null,
				image: "1f9d6-1f3fc.png",
				sheet_x: 48,
				sheet_y: 54,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D6-1F3FC-200D-2642-FE0F"
			},
			"1F3FD": {
				unified: "1F9D6-1F3FD",
				non_qualified: null,
				image: "1f9d6-1f3fd.png",
				sheet_x: 48,
				sheet_y: 55,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D6-1F3FD-200D-2642-FE0F"
			},
			"1F3FE": {
				unified: "1F9D6-1F3FE",
				non_qualified: null,
				image: "1f9d6-1f3fe.png",
				sheet_x: 48,
				sheet_y: 56,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D6-1F3FE-200D-2642-FE0F"
			},
			"1F3FF": {
				unified: "1F9D6-1F3FF",
				non_qualified: null,
				image: "1f9d6-1f3ff.png",
				sheet_x: 49,
				sheet_y: 0,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D6-1F3FF-200D-2642-FE0F"
			}
		},
		obsoleted_by: "1F9D6-200D-2642-FE0F",
		a: "Person in Steamy Room",
		b: "1F9D6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			48,
			52
		],
		o: 5
	},
	man_in_steamy_room: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D6-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9D6-1F3FB-200D-2642",
				image: "1f9d6-1f3fb-200d-2642-fe0f.png",
				sheet_x: 48,
				sheet_y: 47,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D6-1F3FB"
			},
			"1F3FC": {
				unified: "1F9D6-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9D6-1F3FC-200D-2642",
				image: "1f9d6-1f3fc-200d-2642-fe0f.png",
				sheet_x: 48,
				sheet_y: 48,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D6-1F3FC"
			},
			"1F3FD": {
				unified: "1F9D6-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9D6-1F3FD-200D-2642",
				image: "1f9d6-1f3fd-200d-2642-fe0f.png",
				sheet_x: 48,
				sheet_y: 49,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D6-1F3FD"
			},
			"1F3FE": {
				unified: "1F9D6-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9D6-1F3FE-200D-2642",
				image: "1f9d6-1f3fe-200d-2642-fe0f.png",
				sheet_x: 48,
				sheet_y: 50,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D6-1F3FE"
			},
			"1F3FF": {
				unified: "1F9D6-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9D6-1F3FF-200D-2642",
				image: "1f9d6-1f3ff-200d-2642-fe0f.png",
				sheet_x: 48,
				sheet_y: 51,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D6-1F3FF"
			}
		},
		obsoletes: "1F9D6",
		a: "Man in Steamy Room",
		b: "1F9D6-200D-2642-FE0F",
		c: "1F9D6-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			48,
			46
		],
		o: 5
	},
	"flag-tt": {
		a: "Trinidad & Tobago Flag",
		b: "1F1F9-1F1F9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			35
		],
		o: 2
	},
	woman_in_steamy_room: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D6-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9D6-1F3FB-200D-2640",
				image: "1f9d6-1f3fb-200d-2640-fe0f.png",
				sheet_x: 48,
				sheet_y: 41,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9D6-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9D6-1F3FC-200D-2640",
				image: "1f9d6-1f3fc-200d-2640-fe0f.png",
				sheet_x: 48,
				sheet_y: 42,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9D6-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9D6-1F3FD-200D-2640",
				image: "1f9d6-1f3fd-200d-2640-fe0f.png",
				sheet_x: 48,
				sheet_y: 43,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9D6-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9D6-1F3FE-200D-2640",
				image: "1f9d6-1f3fe-200d-2640-fe0f.png",
				sheet_x: 48,
				sheet_y: 44,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9D6-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9D6-1F3FF-200D-2640",
				image: "1f9d6-1f3ff-200d-2640-fe0f.png",
				sheet_x: 48,
				sheet_y: 45,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman in Steamy Room",
		b: "1F9D6-200D-2640-FE0F",
		c: "1F9D6-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			48,
			40
		],
		o: 5
	},
	"flag-tv": {
		a: "Tuvalu Flag",
		b: "1F1F9-1F1FB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			36
		],
		o: 2
	},
	"flag-tw": {
		a: "Taiwan Flag",
		b: "1F1F9-1F1FC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			37
		],
		o: 2
	},
	person_climbing: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D7-1F3FB",
				non_qualified: null,
				image: "1f9d7-1f3fb.png",
				sheet_x: 49,
				sheet_y: 14,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D7-1F3FB-200D-2640-FE0F"
			},
			"1F3FC": {
				unified: "1F9D7-1F3FC",
				non_qualified: null,
				image: "1f9d7-1f3fc.png",
				sheet_x: 49,
				sheet_y: 15,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D7-1F3FC-200D-2640-FE0F"
			},
			"1F3FD": {
				unified: "1F9D7-1F3FD",
				non_qualified: null,
				image: "1f9d7-1f3fd.png",
				sheet_x: 49,
				sheet_y: 16,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D7-1F3FD-200D-2640-FE0F"
			},
			"1F3FE": {
				unified: "1F9D7-1F3FE",
				non_qualified: null,
				image: "1f9d7-1f3fe.png",
				sheet_x: 49,
				sheet_y: 17,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D7-1F3FE-200D-2640-FE0F"
			},
			"1F3FF": {
				unified: "1F9D7-1F3FF",
				non_qualified: null,
				image: "1f9d7-1f3ff.png",
				sheet_x: 49,
				sheet_y: 18,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D7-1F3FF-200D-2640-FE0F"
			}
		},
		obsoleted_by: "1F9D7-200D-2640-FE0F",
		a: "Person Climbing",
		b: "1F9D7",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			49,
			13
		],
		o: 5
	},
	man_climbing: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D7-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9D7-1F3FB-200D-2642",
				image: "1f9d7-1f3fb-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 8,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9D7-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9D7-1F3FC-200D-2642",
				image: "1f9d7-1f3fc-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 9,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9D7-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9D7-1F3FD-200D-2642",
				image: "1f9d7-1f3fd-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 10,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9D7-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9D7-1F3FE-200D-2642",
				image: "1f9d7-1f3fe-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 11,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9D7-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9D7-1F3FF-200D-2642",
				image: "1f9d7-1f3ff-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 12,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Climbing",
		b: "1F9D7-200D-2642-FE0F",
		c: "1F9D7-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			49,
			7
		],
		o: 5
	},
	"flag-tz": {
		a: "Tanzania Flag",
		b: "1F1F9-1F1FF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			38
		],
		o: 2
	},
	"flag-ua": {
		a: "Ukraine Flag",
		b: "1F1FA-1F1E6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			39
		],
		o: 2
	},
	woman_climbing: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D7-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9D7-1F3FB-200D-2640",
				image: "1f9d7-1f3fb-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 2,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D7-1F3FB"
			},
			"1F3FC": {
				unified: "1F9D7-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9D7-1F3FC-200D-2640",
				image: "1f9d7-1f3fc-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 3,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D7-1F3FC"
			},
			"1F3FD": {
				unified: "1F9D7-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9D7-1F3FD-200D-2640",
				image: "1f9d7-1f3fd-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 4,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D7-1F3FD"
			},
			"1F3FE": {
				unified: "1F9D7-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9D7-1F3FE-200D-2640",
				image: "1f9d7-1f3fe-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 5,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D7-1F3FE"
			},
			"1F3FF": {
				unified: "1F9D7-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9D7-1F3FF-200D-2640",
				image: "1f9d7-1f3ff-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 6,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D7-1F3FF"
			}
		},
		obsoletes: "1F9D7",
		a: "Woman Climbing",
		b: "1F9D7-200D-2640-FE0F",
		c: "1F9D7-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			49,
			1
		],
		o: 5
	},
	"flag-ug": {
		a: "Uganda Flag",
		b: "1F1FA-1F1EC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			40
		],
		o: 2
	},
	fencer: {
		a: "Fencer",
		b: "1F93A",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			40,
			32
		],
		o: 4
	},
	"flag-um": {
		a: "U.s. Outlying Islands Flag",
		b: "1F1FA-1F1F2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			41
		],
		o: 2
	},
	horse_racing: {
		skin_variations: {
			"1F3FB": {
				unified: "1F3C7-1F3FB",
				non_qualified: null,
				image: "1f3c7-1f3fb.png",
				sheet_x: 9,
				sheet_y: 28,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3C7-1F3FC",
				non_qualified: null,
				image: "1f3c7-1f3fc.png",
				sheet_x: 9,
				sheet_y: 29,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3C7-1F3FD",
				non_qualified: null,
				image: "1f3c7-1f3fd.png",
				sheet_x: 9,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3C7-1F3FE",
				non_qualified: null,
				image: "1f3c7-1f3fe.png",
				sheet_x: 9,
				sheet_y: 31,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3C7-1F3FF",
				non_qualified: null,
				image: "1f3c7-1f3ff.png",
				sheet_x: 9,
				sheet_y: 32,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Horse Racing",
		b: "1F3C7",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"animal",
			"betting",
			"competition",
			"gambling",
			"luck"
		],
		k: [
			9,
			27
		],
		o: 2
	},
	skier: {
		a: "Skier",
		b: "26F7-FE0F",
		c: "26F7",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sports",
			"winter",
			"snow"
		],
		k: [
			54,
			17
		],
		o: 2
	},
	"flag-un": {
		a: "United Nations Flag",
		b: "1F1FA-1F1F3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			42
		],
		o: 4
	},
	us: {
		a: "United States Flag",
		b: "1F1FA-1F1F8",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"united",
			"states",
			"america",
			"flag",
			"nation",
			"country",
			"banner"
		],
		k: [
			4,
			43
		],
		n: [
			"flag-us"
		],
		o: 2
	},
	snowboarder: {
		skin_variations: {
			"1F3FB": {
				unified: "1F3C2-1F3FB",
				non_qualified: null,
				image: "1f3c2-1f3fb.png",
				sheet_x: 8,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3C2-1F3FC",
				non_qualified: null,
				image: "1f3c2-1f3fc.png",
				sheet_x: 8,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3C2-1F3FD",
				non_qualified: null,
				image: "1f3c2-1f3fd.png",
				sheet_x: 8,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3C2-1F3FE",
				non_qualified: null,
				image: "1f3c2-1f3fe.png",
				sheet_x: 8,
				sheet_y: 44,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3C2-1F3FF",
				non_qualified: null,
				image: "1f3c2-1f3ff.png",
				sheet_x: 8,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Snowboarder",
		b: "1F3C2",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"sports",
			"winter"
		],
		k: [
			8,
			40
		],
		o: 2
	},
	golfer: {
		skin_variations: {
			"1F3FB": {
				unified: "1F3CC-1F3FB",
				non_qualified: null,
				image: "1f3cc-1f3fb.png",
				sheet_x: 10,
				sheet_y: 27,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F3CC-1F3FC",
				non_qualified: null,
				image: "1f3cc-1f3fc.png",
				sheet_x: 10,
				sheet_y: 28,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F3CC-1F3FD",
				non_qualified: null,
				image: "1f3cc-1f3fd.png",
				sheet_x: 10,
				sheet_y: 29,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F3CC-1F3FE",
				non_qualified: null,
				image: "1f3cc-1f3fe.png",
				sheet_x: 10,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F3CC-1F3FF",
				non_qualified: null,
				image: "1f3cc-1f3ff.png",
				sheet_x: 10,
				sheet_y: 31,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F3CC-FE0F-200D-2642-FE0F",
		a: "Golfer",
		b: "1F3CC-FE0F",
		c: "1F3CC",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			10,
			26
		],
		o: 2
	},
	"flag-uy": {
		a: "Uruguay Flag",
		b: "1F1FA-1F1FE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			44
		],
		o: 2
	},
	"flag-uz": {
		a: "Uzbekistan Flag",
		b: "1F1FA-1F1FF",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			45
		],
		o: 2
	},
	"man-golfing": {
		skin_variations: {
			"1F3FB": {
				unified: "1F3CC-1F3FB-200D-2642-FE0F",
				non_qualified: "1F3CC-1F3FB-200D-2642",
				image: "1f3cc-1f3fb-200d-2642-fe0f.png",
				sheet_x: 10,
				sheet_y: 21,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3CC-1F3FC-200D-2642-FE0F",
				non_qualified: "1F3CC-1F3FC-200D-2642",
				image: "1f3cc-1f3fc-200d-2642-fe0f.png",
				sheet_x: 10,
				sheet_y: 22,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3CC-1F3FD-200D-2642-FE0F",
				non_qualified: "1F3CC-1F3FD-200D-2642",
				image: "1f3cc-1f3fd-200d-2642-fe0f.png",
				sheet_x: 10,
				sheet_y: 23,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3CC-1F3FE-200D-2642-FE0F",
				non_qualified: "1F3CC-1F3FE-200D-2642",
				image: "1f3cc-1f3fe-200d-2642-fe0f.png",
				sheet_x: 10,
				sheet_y: 24,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3CC-1F3FF-200D-2642-FE0F",
				non_qualified: "1F3CC-1F3FF-200D-2642",
				image: "1f3cc-1f3ff-200d-2642-fe0f.png",
				sheet_x: 10,
				sheet_y: 25,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F3CC-FE0F",
		a: "Man Golfing",
		b: "1F3CC-FE0F-200D-2642-FE0F",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			10,
			20
		],
		o: 4
	},
	"flag-va": {
		a: "Vatican City Flag",
		b: "1F1FB-1F1E6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			46
		],
		o: 2
	},
	"woman-golfing": {
		skin_variations: {
			"1F3FB": {
				unified: "1F3CC-1F3FB-200D-2640-FE0F",
				non_qualified: "1F3CC-1F3FB-200D-2640",
				image: "1f3cc-1f3fb-200d-2640-fe0f.png",
				sheet_x: 10,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3CC-1F3FC-200D-2640-FE0F",
				non_qualified: "1F3CC-1F3FC-200D-2640",
				image: "1f3cc-1f3fc-200d-2640-fe0f.png",
				sheet_x: 10,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3CC-1F3FD-200D-2640-FE0F",
				non_qualified: "1F3CC-1F3FD-200D-2640",
				image: "1f3cc-1f3fd-200d-2640-fe0f.png",
				sheet_x: 10,
				sheet_y: 17,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3CC-1F3FE-200D-2640-FE0F",
				non_qualified: "1F3CC-1F3FE-200D-2640",
				image: "1f3cc-1f3fe-200d-2640-fe0f.png",
				sheet_x: 10,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3CC-1F3FF-200D-2640-FE0F",
				non_qualified: "1F3CC-1F3FF-200D-2640",
				image: "1f3cc-1f3ff-200d-2640-fe0f.png",
				sheet_x: 10,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Golfing",
		b: "1F3CC-FE0F-200D-2640-FE0F",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			10,
			14
		],
		o: 4
	},
	"flag-vc": {
		a: "St. Vincent & Grenadines Flag",
		b: "1F1FB-1F1E8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			47
		],
		o: 2
	},
	surfer: {
		skin_variations: {
			"1F3FB": {
				unified: "1F3C4-1F3FB",
				non_qualified: null,
				image: "1f3c4-1f3fb.png",
				sheet_x: 9,
				sheet_y: 20,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F3C4-1F3FC",
				non_qualified: null,
				image: "1f3c4-1f3fc.png",
				sheet_x: 9,
				sheet_y: 21,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F3C4-1F3FD",
				non_qualified: null,
				image: "1f3c4-1f3fd.png",
				sheet_x: 9,
				sheet_y: 22,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F3C4-1F3FE",
				non_qualified: null,
				image: "1f3c4-1f3fe.png",
				sheet_x: 9,
				sheet_y: 23,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F3C4-1F3FF",
				non_qualified: null,
				image: "1f3c4-1f3ff.png",
				sheet_x: 9,
				sheet_y: 24,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F3C4-200D-2642-FE0F",
		a: "Surfer",
		b: "1F3C4",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			9,
			19
		],
		o: 2
	},
	"man-surfing": {
		skin_variations: {
			"1F3FB": {
				unified: "1F3C4-1F3FB-200D-2642-FE0F",
				non_qualified: "1F3C4-1F3FB-200D-2642",
				image: "1f3c4-1f3fb-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 14,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3C4-1F3FC-200D-2642-FE0F",
				non_qualified: "1F3C4-1F3FC-200D-2642",
				image: "1f3c4-1f3fc-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3C4-1F3FD-200D-2642-FE0F",
				non_qualified: "1F3C4-1F3FD-200D-2642",
				image: "1f3c4-1f3fd-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3C4-1F3FE-200D-2642-FE0F",
				non_qualified: "1F3C4-1F3FE-200D-2642",
				image: "1f3c4-1f3fe-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 17,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3C4-1F3FF-200D-2642-FE0F",
				non_qualified: "1F3C4-1F3FF-200D-2642",
				image: "1f3c4-1f3ff-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F3C4",
		a: "Man Surfing",
		b: "1F3C4-200D-2642-FE0F",
		c: "1F3C4-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			9,
			13
		],
		o: 4
	},
	"flag-ve": {
		a: "Venezuela Flag",
		b: "1F1FB-1F1EA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			48
		],
		o: 2
	},
	"flag-vg": {
		a: "British Virgin Islands Flag",
		b: "1F1FB-1F1EC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			49
		],
		o: 2
	},
	"woman-surfing": {
		skin_variations: {
			"1F3FB": {
				unified: "1F3C4-1F3FB-200D-2640-FE0F",
				non_qualified: "1F3C4-1F3FB-200D-2640",
				image: "1f3c4-1f3fb-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 8,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3C4-1F3FC-200D-2640-FE0F",
				non_qualified: "1F3C4-1F3FC-200D-2640",
				image: "1f3c4-1f3fc-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3C4-1F3FD-200D-2640-FE0F",
				non_qualified: "1F3C4-1F3FD-200D-2640",
				image: "1f3c4-1f3fd-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3C4-1F3FE-200D-2640-FE0F",
				non_qualified: "1F3C4-1F3FE-200D-2640",
				image: "1f3c4-1f3fe-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3C4-1F3FF-200D-2640-FE0F",
				non_qualified: "1F3C4-1F3FF-200D-2640",
				image: "1f3c4-1f3ff-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Surfing",
		b: "1F3C4-200D-2640-FE0F",
		c: "1F3C4-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			9,
			7
		],
		o: 4
	},
	rowboat: {
		skin_variations: {
			"1F3FB": {
				unified: "1F6A3-1F3FB",
				non_qualified: null,
				image: "1f6a3-1f3fb.png",
				sheet_x: 34,
				sheet_y: 47,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F6A3-1F3FC",
				non_qualified: null,
				image: "1f6a3-1f3fc.png",
				sheet_x: 34,
				sheet_y: 48,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F6A3-1F3FD",
				non_qualified: null,
				image: "1f6a3-1f3fd.png",
				sheet_x: 34,
				sheet_y: 49,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F6A3-1F3FE",
				non_qualified: null,
				image: "1f6a3-1f3fe.png",
				sheet_x: 34,
				sheet_y: 50,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F6A3-1F3FF",
				non_qualified: null,
				image: "1f6a3-1f3ff.png",
				sheet_x: 34,
				sheet_y: 51,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F6A3-200D-2642-FE0F",
		a: "Rowboat",
		b: "1F6A3",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			34,
			46
		],
		o: 2
	},
	"flag-vi": {
		a: "U.s. Virgin Islands Flag",
		b: "1F1FB-1F1EE",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			50
		],
		o: 2
	},
	"man-rowing-boat": {
		skin_variations: {
			"1F3FB": {
				unified: "1F6A3-1F3FB-200D-2642-FE0F",
				non_qualified: "1F6A3-1F3FB-200D-2642",
				image: "1f6a3-1f3fb-200d-2642-fe0f.png",
				sheet_x: 34,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F6A3-1F3FC-200D-2642-FE0F",
				non_qualified: "1F6A3-1F3FC-200D-2642",
				image: "1f6a3-1f3fc-200d-2642-fe0f.png",
				sheet_x: 34,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F6A3-1F3FD-200D-2642-FE0F",
				non_qualified: "1F6A3-1F3FD-200D-2642",
				image: "1f6a3-1f3fd-200d-2642-fe0f.png",
				sheet_x: 34,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F6A3-1F3FE-200D-2642-FE0F",
				non_qualified: "1F6A3-1F3FE-200D-2642",
				image: "1f6a3-1f3fe-200d-2642-fe0f.png",
				sheet_x: 34,
				sheet_y: 44,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F6A3-1F3FF-200D-2642-FE0F",
				non_qualified: "1F6A3-1F3FF-200D-2642",
				image: "1f6a3-1f3ff-200d-2642-fe0f.png",
				sheet_x: 34,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F6A3",
		a: "Man Rowing Boat",
		b: "1F6A3-200D-2642-FE0F",
		c: "1F6A3-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			34,
			40
		],
		o: 4
	},
	"flag-vn": {
		a: "Vietnam Flag",
		b: "1F1FB-1F1F3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			51
		],
		o: 2
	},
	"flag-vu": {
		a: "Vanuatu Flag",
		b: "1F1FB-1F1FA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			52
		],
		o: 2
	},
	"woman-rowing-boat": {
		skin_variations: {
			"1F3FB": {
				unified: "1F6A3-1F3FB-200D-2640-FE0F",
				non_qualified: "1F6A3-1F3FB-200D-2640",
				image: "1f6a3-1f3fb-200d-2640-fe0f.png",
				sheet_x: 34,
				sheet_y: 35,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F6A3-1F3FC-200D-2640-FE0F",
				non_qualified: "1F6A3-1F3FC-200D-2640",
				image: "1f6a3-1f3fc-200d-2640-fe0f.png",
				sheet_x: 34,
				sheet_y: 36,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F6A3-1F3FD-200D-2640-FE0F",
				non_qualified: "1F6A3-1F3FD-200D-2640",
				image: "1f6a3-1f3fd-200d-2640-fe0f.png",
				sheet_x: 34,
				sheet_y: 37,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F6A3-1F3FE-200D-2640-FE0F",
				non_qualified: "1F6A3-1F3FE-200D-2640",
				image: "1f6a3-1f3fe-200d-2640-fe0f.png",
				sheet_x: 34,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F6A3-1F3FF-200D-2640-FE0F",
				non_qualified: "1F6A3-1F3FF-200D-2640",
				image: "1f6a3-1f3ff-200d-2640-fe0f.png",
				sheet_x: 34,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Rowing Boat",
		b: "1F6A3-200D-2640-FE0F",
		c: "1F6A3-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			34,
			34
		],
		o: 4
	},
	swimmer: {
		skin_variations: {
			"1F3FB": {
				unified: "1F3CA-1F3FB",
				non_qualified: null,
				image: "1f3ca-1f3fb.png",
				sheet_x: 9,
				sheet_y: 48,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F3CA-1F3FC",
				non_qualified: null,
				image: "1f3ca-1f3fc.png",
				sheet_x: 9,
				sheet_y: 49,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F3CA-1F3FD",
				non_qualified: null,
				image: "1f3ca-1f3fd.png",
				sheet_x: 9,
				sheet_y: 50,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F3CA-1F3FE",
				non_qualified: null,
				image: "1f3ca-1f3fe.png",
				sheet_x: 9,
				sheet_y: 51,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F3CA-1F3FF",
				non_qualified: null,
				image: "1f3ca-1f3ff.png",
				sheet_x: 9,
				sheet_y: 52,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F3CA-200D-2642-FE0F",
		a: "Swimmer",
		b: "1F3CA",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			9,
			47
		],
		o: 2
	},
	"flag-wf": {
		a: "Wallis & Futuna Flag",
		b: "1F1FC-1F1EB",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			53
		],
		o: 2
	},
	"man-swimming": {
		skin_variations: {
			"1F3FB": {
				unified: "1F3CA-1F3FB-200D-2642-FE0F",
				non_qualified: "1F3CA-1F3FB-200D-2642",
				image: "1f3ca-1f3fb-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 42,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3CA-1F3FC-200D-2642-FE0F",
				non_qualified: "1F3CA-1F3FC-200D-2642",
				image: "1f3ca-1f3fc-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3CA-1F3FD-200D-2642-FE0F",
				non_qualified: "1F3CA-1F3FD-200D-2642",
				image: "1f3ca-1f3fd-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 44,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3CA-1F3FE-200D-2642-FE0F",
				non_qualified: "1F3CA-1F3FE-200D-2642",
				image: "1f3ca-1f3fe-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3CA-1F3FF-200D-2642-FE0F",
				non_qualified: "1F3CA-1F3FF-200D-2642",
				image: "1f3ca-1f3ff-200d-2642-fe0f.png",
				sheet_x: 9,
				sheet_y: 46,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F3CA",
		a: "Man Swimming",
		b: "1F3CA-200D-2642-FE0F",
		c: "1F3CA-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			9,
			41
		],
		o: 4
	},
	"flag-ws": {
		a: "Samoa Flag",
		b: "1F1FC-1F1F8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			54
		],
		o: 2
	},
	"woman-swimming": {
		skin_variations: {
			"1F3FB": {
				unified: "1F3CA-1F3FB-200D-2640-FE0F",
				non_qualified: "1F3CA-1F3FB-200D-2640",
				image: "1f3ca-1f3fb-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 36,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3CA-1F3FC-200D-2640-FE0F",
				non_qualified: "1F3CA-1F3FC-200D-2640",
				image: "1f3ca-1f3fc-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 37,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3CA-1F3FD-200D-2640-FE0F",
				non_qualified: "1F3CA-1F3FD-200D-2640",
				image: "1f3ca-1f3fd-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3CA-1F3FE-200D-2640-FE0F",
				non_qualified: "1F3CA-1F3FE-200D-2640",
				image: "1f3ca-1f3fe-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3CA-1F3FF-200D-2640-FE0F",
				non_qualified: "1F3CA-1F3FF-200D-2640",
				image: "1f3ca-1f3ff-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Swimming",
		b: "1F3CA-200D-2640-FE0F",
		c: "1F3CA-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			9,
			35
		],
		o: 4
	},
	"flag-xk": {
		a: "Kosovo Flag",
		b: "1F1FD-1F1F0",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			55
		],
		o: 2
	},
	person_with_ball: {
		skin_variations: {
			"1F3FB": {
				unified: "26F9-1F3FB",
				non_qualified: null,
				image: "26f9-1f3fb.png",
				sheet_x: 54,
				sheet_y: 32,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "26F9-1F3FC",
				non_qualified: null,
				image: "26f9-1f3fc.png",
				sheet_x: 54,
				sheet_y: 33,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "26F9-1F3FD",
				non_qualified: null,
				image: "26f9-1f3fd.png",
				sheet_x: 54,
				sheet_y: 34,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "26F9-1F3FE",
				non_qualified: null,
				image: "26f9-1f3fe.png",
				sheet_x: 54,
				sheet_y: 35,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "26F9-1F3FF",
				non_qualified: null,
				image: "26f9-1f3ff.png",
				sheet_x: 54,
				sheet_y: 36,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "26F9-FE0F-200D-2642-FE0F",
		a: "Person with Ball",
		b: "26F9-FE0F",
		c: "26F9",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			54,
			31
		],
		o: 2
	},
	"flag-ye": {
		a: "Yemen Flag",
		b: "1F1FE-1F1EA",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			4,
			56
		],
		o: 2
	},
	"man-bouncing-ball": {
		skin_variations: {
			"1F3FB": {
				unified: "26F9-1F3FB-200D-2642-FE0F",
				non_qualified: "26F9-1F3FB-200D-2642",
				image: "26f9-1f3fb-200d-2642-fe0f.png",
				sheet_x: 54,
				sheet_y: 26,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "26F9-1F3FC-200D-2642-FE0F",
				non_qualified: "26F9-1F3FC-200D-2642",
				image: "26f9-1f3fc-200d-2642-fe0f.png",
				sheet_x: 54,
				sheet_y: 27,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "26F9-1F3FD-200D-2642-FE0F",
				non_qualified: "26F9-1F3FD-200D-2642",
				image: "26f9-1f3fd-200d-2642-fe0f.png",
				sheet_x: 54,
				sheet_y: 28,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "26F9-1F3FE-200D-2642-FE0F",
				non_qualified: "26F9-1F3FE-200D-2642",
				image: "26f9-1f3fe-200d-2642-fe0f.png",
				sheet_x: 54,
				sheet_y: 29,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "26F9-1F3FF-200D-2642-FE0F",
				non_qualified: "26F9-1F3FF-200D-2642",
				image: "26f9-1f3ff-200d-2642-fe0f.png",
				sheet_x: 54,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "26F9-FE0F",
		a: "Man Bouncing Ball",
		b: "26F9-FE0F-200D-2642-FE0F",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			54,
			25
		],
		o: 4
	},
	"flag-yt": {
		a: "Mayotte Flag",
		b: "1F1FE-1F1F9",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			5,
			0
		],
		o: 2
	},
	"woman-bouncing-ball": {
		skin_variations: {
			"1F3FB": {
				unified: "26F9-1F3FB-200D-2640-FE0F",
				non_qualified: "26F9-1F3FB-200D-2640",
				image: "26f9-1f3fb-200d-2640-fe0f.png",
				sheet_x: 54,
				sheet_y: 20,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "26F9-1F3FC-200D-2640-FE0F",
				non_qualified: "26F9-1F3FC-200D-2640",
				image: "26f9-1f3fc-200d-2640-fe0f.png",
				sheet_x: 54,
				sheet_y: 21,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "26F9-1F3FD-200D-2640-FE0F",
				non_qualified: "26F9-1F3FD-200D-2640",
				image: "26f9-1f3fd-200d-2640-fe0f.png",
				sheet_x: 54,
				sheet_y: 22,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "26F9-1F3FE-200D-2640-FE0F",
				non_qualified: "26F9-1F3FE-200D-2640",
				image: "26f9-1f3fe-200d-2640-fe0f.png",
				sheet_x: 54,
				sheet_y: 23,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "26F9-1F3FF-200D-2640-FE0F",
				non_qualified: "26F9-1F3FF-200D-2640",
				image: "26f9-1f3ff-200d-2640-fe0f.png",
				sheet_x: 54,
				sheet_y: 24,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Bouncing Ball",
		b: "26F9-FE0F-200D-2640-FE0F",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			54,
			19
		],
		o: 4
	},
	"flag-za": {
		a: "South Africa Flag",
		b: "1F1FF-1F1E6",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			5,
			1
		],
		o: 2
	},
	"flag-zm": {
		a: "Zambia Flag",
		b: "1F1FF-1F1F2",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			5,
			2
		],
		o: 2
	},
	weight_lifter: {
		skin_variations: {
			"1F3FB": {
				unified: "1F3CB-1F3FB",
				non_qualified: null,
				image: "1f3cb-1f3fb.png",
				sheet_x: 10,
				sheet_y: 9,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F3CB-1F3FC",
				non_qualified: null,
				image: "1f3cb-1f3fc.png",
				sheet_x: 10,
				sheet_y: 10,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F3CB-1F3FD",
				non_qualified: null,
				image: "1f3cb-1f3fd.png",
				sheet_x: 10,
				sheet_y: 11,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F3CB-1F3FE",
				non_qualified: null,
				image: "1f3cb-1f3fe.png",
				sheet_x: 10,
				sheet_y: 12,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F3CB-1F3FF",
				non_qualified: null,
				image: "1f3cb-1f3ff.png",
				sheet_x: 10,
				sheet_y: 13,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F3CB-FE0F-200D-2642-FE0F",
		a: "Weight Lifter",
		b: "1F3CB-FE0F",
		c: "1F3CB",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			10,
			8
		],
		o: 2
	},
	"man-lifting-weights": {
		skin_variations: {
			"1F3FB": {
				unified: "1F3CB-1F3FB-200D-2642-FE0F",
				non_qualified: "1F3CB-1F3FB-200D-2642",
				image: "1f3cb-1f3fb-200d-2642-fe0f.png",
				sheet_x: 10,
				sheet_y: 3,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3CB-1F3FC-200D-2642-FE0F",
				non_qualified: "1F3CB-1F3FC-200D-2642",
				image: "1f3cb-1f3fc-200d-2642-fe0f.png",
				sheet_x: 10,
				sheet_y: 4,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3CB-1F3FD-200D-2642-FE0F",
				non_qualified: "1F3CB-1F3FD-200D-2642",
				image: "1f3cb-1f3fd-200d-2642-fe0f.png",
				sheet_x: 10,
				sheet_y: 5,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3CB-1F3FE-200D-2642-FE0F",
				non_qualified: "1F3CB-1F3FE-200D-2642",
				image: "1f3cb-1f3fe-200d-2642-fe0f.png",
				sheet_x: 10,
				sheet_y: 6,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3CB-1F3FF-200D-2642-FE0F",
				non_qualified: "1F3CB-1F3FF-200D-2642",
				image: "1f3cb-1f3ff-200d-2642-fe0f.png",
				sheet_x: 10,
				sheet_y: 7,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F3CB-FE0F",
		a: "Man Lifting Weights",
		b: "1F3CB-FE0F-200D-2642-FE0F",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			10,
			2
		],
		o: 4
	},
	"flag-zw": {
		a: "Zimbabwe Flag",
		b: "1F1FF-1F1FC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			5,
			3
		],
		o: 2
	},
	"woman-lifting-weights": {
		skin_variations: {
			"1F3FB": {
				unified: "1F3CB-1F3FB-200D-2640-FE0F",
				non_qualified: "1F3CB-1F3FB-200D-2640",
				image: "1f3cb-1f3fb-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F3CB-1F3FC-200D-2640-FE0F",
				non_qualified: "1F3CB-1F3FC-200D-2640",
				image: "1f3cb-1f3fc-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F3CB-1F3FD-200D-2640-FE0F",
				non_qualified: "1F3CB-1F3FD-200D-2640",
				image: "1f3cb-1f3fd-200d-2640-fe0f.png",
				sheet_x: 9,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F3CB-1F3FE-200D-2640-FE0F",
				non_qualified: "1F3CB-1F3FE-200D-2640",
				image: "1f3cb-1f3fe-200d-2640-fe0f.png",
				sheet_x: 10,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F3CB-1F3FF-200D-2640-FE0F",
				non_qualified: "1F3CB-1F3FF-200D-2640",
				image: "1f3cb-1f3ff-200d-2640-fe0f.png",
				sheet_x: 10,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Lifting Weights",
		b: "1F3CB-FE0F-200D-2640-FE0F",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			9,
			53
		],
		o: 4
	},
	"flag-england": {
		a: "England Flag",
		b: "1F3F4-E0067-E0062-E0065-E006E-E0067-E007F",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			11,
			14
		],
		o: 5
	},
	bicyclist: {
		skin_variations: {
			"1F3FB": {
				unified: "1F6B4-1F3FB",
				non_qualified: null,
				image: "1f6b4-1f3fb.png",
				sheet_x: 35,
				sheet_y: 24,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F6B4-1F3FC",
				non_qualified: null,
				image: "1f6b4-1f3fc.png",
				sheet_x: 35,
				sheet_y: 25,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F6B4-1F3FD",
				non_qualified: null,
				image: "1f6b4-1f3fd.png",
				sheet_x: 35,
				sheet_y: 26,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F6B4-1F3FE",
				non_qualified: null,
				image: "1f6b4-1f3fe.png",
				sheet_x: 35,
				sheet_y: 27,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F6B4-1F3FF",
				non_qualified: null,
				image: "1f6b4-1f3ff.png",
				sheet_x: 35,
				sheet_y: 28,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F6B4-200D-2642-FE0F",
		a: "Bicyclist",
		b: "1F6B4",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			35,
			23
		],
		o: 2
	},
	"flag-scotland": {
		a: "Scotland Flag",
		b: "1F3F4-E0067-E0062-E0073-E0063-E0074-E007F",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			11,
			15
		],
		o: 5
	},
	"flag-wales": {
		a: "Wales Flag",
		b: "1F3F4-E0067-E0062-E0077-E006C-E0073-E007F",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			11,
			16
		],
		o: 5
	},
	"man-biking": {
		skin_variations: {
			"1F3FB": {
				unified: "1F6B4-1F3FB-200D-2642-FE0F",
				non_qualified: "1F6B4-1F3FB-200D-2642",
				image: "1f6b4-1f3fb-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F6B4-1F3FC-200D-2642-FE0F",
				non_qualified: "1F6B4-1F3FC-200D-2642",
				image: "1f6b4-1f3fc-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F6B4-1F3FD-200D-2642-FE0F",
				non_qualified: "1F6B4-1F3FD-200D-2642",
				image: "1f6b4-1f3fd-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 20,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F6B4-1F3FE-200D-2642-FE0F",
				non_qualified: "1F6B4-1F3FE-200D-2642",
				image: "1f6b4-1f3fe-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 21,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F6B4-1F3FF-200D-2642-FE0F",
				non_qualified: "1F6B4-1F3FF-200D-2642",
				image: "1f6b4-1f3ff-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 22,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F6B4",
		a: "Man Biking",
		b: "1F6B4-200D-2642-FE0F",
		c: "1F6B4-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			35,
			17
		],
		o: 4
	},
	"woman-biking": {
		skin_variations: {
			"1F3FB": {
				unified: "1F6B4-1F3FB-200D-2640-FE0F",
				non_qualified: "1F6B4-1F3FB-200D-2640",
				image: "1f6b4-1f3fb-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F6B4-1F3FC-200D-2640-FE0F",
				non_qualified: "1F6B4-1F3FC-200D-2640",
				image: "1f6b4-1f3fc-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F6B4-1F3FD-200D-2640-FE0F",
				non_qualified: "1F6B4-1F3FD-200D-2640",
				image: "1f6b4-1f3fd-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 14,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F6B4-1F3FE-200D-2640-FE0F",
				non_qualified: "1F6B4-1F3FE-200D-2640",
				image: "1f6b4-1f3fe-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F6B4-1F3FF-200D-2640-FE0F",
				non_qualified: "1F6B4-1F3FF-200D-2640",
				image: "1f6b4-1f3ff-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Biking",
		b: "1F6B4-200D-2640-FE0F",
		c: "1F6B4-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			35,
			11
		],
		o: 4
	},
	mountain_bicyclist: {
		skin_variations: {
			"1F3FB": {
				unified: "1F6B5-1F3FB",
				non_qualified: null,
				image: "1f6b5-1f3fb.png",
				sheet_x: 35,
				sheet_y: 42,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F6B5-1F3FC",
				non_qualified: null,
				image: "1f6b5-1f3fc.png",
				sheet_x: 35,
				sheet_y: 43,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F6B5-1F3FD",
				non_qualified: null,
				image: "1f6b5-1f3fd.png",
				sheet_x: 35,
				sheet_y: 44,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F6B5-1F3FE",
				non_qualified: null,
				image: "1f6b5-1f3fe.png",
				sheet_x: 35,
				sheet_y: 45,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F6B5-1F3FF",
				non_qualified: null,
				image: "1f6b5-1f3ff.png",
				sheet_x: 35,
				sheet_y: 46,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		obsoleted_by: "1F6B5-200D-2642-FE0F",
		a: "Mountain Bicyclist",
		b: "1F6B5",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			35,
			41
		],
		o: 2
	},
	"man-mountain-biking": {
		skin_variations: {
			"1F3FB": {
				unified: "1F6B5-1F3FB-200D-2642-FE0F",
				non_qualified: "1F6B5-1F3FB-200D-2642",
				image: "1f6b5-1f3fb-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 36,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F6B5-1F3FC-200D-2642-FE0F",
				non_qualified: "1F6B5-1F3FC-200D-2642",
				image: "1f6b5-1f3fc-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 37,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F6B5-1F3FD-200D-2642-FE0F",
				non_qualified: "1F6B5-1F3FD-200D-2642",
				image: "1f6b5-1f3fd-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F6B5-1F3FE-200D-2642-FE0F",
				non_qualified: "1F6B5-1F3FE-200D-2642",
				image: "1f6b5-1f3fe-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F6B5-1F3FF-200D-2642-FE0F",
				non_qualified: "1F6B5-1F3FF-200D-2642",
				image: "1f6b5-1f3ff-200d-2642-fe0f.png",
				sheet_x: 35,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		obsoletes: "1F6B5",
		a: "Man Mountain Biking",
		b: "1F6B5-200D-2642-FE0F",
		c: "1F6B5-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			35,
			35
		],
		o: 4
	},
	"woman-mountain-biking": {
		skin_variations: {
			"1F3FB": {
				unified: "1F6B5-1F3FB-200D-2640-FE0F",
				non_qualified: "1F6B5-1F3FB-200D-2640",
				image: "1f6b5-1f3fb-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F6B5-1F3FC-200D-2640-FE0F",
				non_qualified: "1F6B5-1F3FC-200D-2640",
				image: "1f6b5-1f3fc-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 31,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F6B5-1F3FD-200D-2640-FE0F",
				non_qualified: "1F6B5-1F3FD-200D-2640",
				image: "1f6b5-1f3fd-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 32,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F6B5-1F3FE-200D-2640-FE0F",
				non_qualified: "1F6B5-1F3FE-200D-2640",
				image: "1f6b5-1f3fe-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 33,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F6B5-1F3FF-200D-2640-FE0F",
				non_qualified: "1F6B5-1F3FF-200D-2640",
				image: "1f6b5-1f3ff-200d-2640-fe0f.png",
				sheet_x: 35,
				sheet_y: 34,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Mountain Biking",
		b: "1F6B5-200D-2640-FE0F",
		c: "1F6B5-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			35,
			29
		],
		o: 4
	},
	person_doing_cartwheel: {
		skin_variations: {
			"1F3FB": {
				unified: "1F938-1F3FB",
				non_qualified: null,
				image: "1f938-1f3fb.png",
				sheet_x: 40,
				sheet_y: 9,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F938-1F3FC",
				non_qualified: null,
				image: "1f938-1f3fc.png",
				sheet_x: 40,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F938-1F3FD",
				non_qualified: null,
				image: "1f938-1f3fd.png",
				sheet_x: 40,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F938-1F3FE",
				non_qualified: null,
				image: "1f938-1f3fe.png",
				sheet_x: 40,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F938-1F3FF",
				non_qualified: null,
				image: "1f938-1f3ff.png",
				sheet_x: 40,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		a: "Person Doing Cartwheel",
		b: "1F938",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			40,
			8
		],
		o: 4
	},
	"man-cartwheeling": {
		skin_variations: {
			"1F3FB": {
				unified: "1F938-1F3FB-200D-2642-FE0F",
				non_qualified: "1F938-1F3FB-200D-2642",
				image: "1f938-1f3fb-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 3,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F938-1F3FC-200D-2642-FE0F",
				non_qualified: "1F938-1F3FC-200D-2642",
				image: "1f938-1f3fc-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 4,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F938-1F3FD-200D-2642-FE0F",
				non_qualified: "1F938-1F3FD-200D-2642",
				image: "1f938-1f3fd-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 5,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F938-1F3FE-200D-2642-FE0F",
				non_qualified: "1F938-1F3FE-200D-2642",
				image: "1f938-1f3fe-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 6,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F938-1F3FF-200D-2642-FE0F",
				non_qualified: "1F938-1F3FF-200D-2642",
				image: "1f938-1f3ff-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 7,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Cartwheeling",
		b: "1F938-200D-2642-FE0F",
		c: "1F938-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			40,
			2
		],
		o: 4
	},
	"woman-cartwheeling": {
		skin_variations: {
			"1F3FB": {
				unified: "1F938-1F3FB-200D-2640-FE0F",
				non_qualified: "1F938-1F3FB-200D-2640",
				image: "1f938-1f3fb-200d-2640-fe0f.png",
				sheet_x: 39,
				sheet_y: 54,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F938-1F3FC-200D-2640-FE0F",
				non_qualified: "1F938-1F3FC-200D-2640",
				image: "1f938-1f3fc-200d-2640-fe0f.png",
				sheet_x: 39,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F938-1F3FD-200D-2640-FE0F",
				non_qualified: "1F938-1F3FD-200D-2640",
				image: "1f938-1f3fd-200d-2640-fe0f.png",
				sheet_x: 39,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F938-1F3FE-200D-2640-FE0F",
				non_qualified: "1F938-1F3FE-200D-2640",
				image: "1f938-1f3fe-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F938-1F3FF-200D-2640-FE0F",
				non_qualified: "1F938-1F3FF-200D-2640",
				image: "1f938-1f3ff-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Cartwheeling",
		b: "1F938-200D-2640-FE0F",
		c: "1F938-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			39,
			53
		],
		o: 4
	},
	wrestlers: {
		a: "Wrestlers",
		b: "1F93C",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			40,
			35
		],
		o: 4
	},
	"man-wrestling": {
		a: "Man Wrestling",
		b: "1F93C-200D-2642-FE0F",
		c: "1F93C-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			40,
			34
		],
		o: 4
	},
	"woman-wrestling": {
		a: "Woman Wrestling",
		b: "1F93C-200D-2640-FE0F",
		c: "1F93C-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			40,
			33
		],
		o: 4
	},
	water_polo: {
		skin_variations: {
			"1F3FB": {
				unified: "1F93D-1F3FB",
				non_qualified: null,
				image: "1f93d-1f3fb.png",
				sheet_x: 40,
				sheet_y: 49,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F93D-1F3FC",
				non_qualified: null,
				image: "1f93d-1f3fc.png",
				sheet_x: 40,
				sheet_y: 50,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F93D-1F3FD",
				non_qualified: null,
				image: "1f93d-1f3fd.png",
				sheet_x: 40,
				sheet_y: 51,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F93D-1F3FE",
				non_qualified: null,
				image: "1f93d-1f3fe.png",
				sheet_x: 40,
				sheet_y: 52,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F93D-1F3FF",
				non_qualified: null,
				image: "1f93d-1f3ff.png",
				sheet_x: 40,
				sheet_y: 53,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		a: "Water Polo",
		b: "1F93D",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			40,
			48
		],
		o: 4
	},
	"man-playing-water-polo": {
		skin_variations: {
			"1F3FB": {
				unified: "1F93D-1F3FB-200D-2642-FE0F",
				non_qualified: "1F93D-1F3FB-200D-2642",
				image: "1f93d-1f3fb-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 43,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F93D-1F3FC-200D-2642-FE0F",
				non_qualified: "1F93D-1F3FC-200D-2642",
				image: "1f93d-1f3fc-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 44,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F93D-1F3FD-200D-2642-FE0F",
				non_qualified: "1F93D-1F3FD-200D-2642",
				image: "1f93d-1f3fd-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 45,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F93D-1F3FE-200D-2642-FE0F",
				non_qualified: "1F93D-1F3FE-200D-2642",
				image: "1f93d-1f3fe-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 46,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F93D-1F3FF-200D-2642-FE0F",
				non_qualified: "1F93D-1F3FF-200D-2642",
				image: "1f93d-1f3ff-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 47,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Playing Water Polo",
		b: "1F93D-200D-2642-FE0F",
		c: "1F93D-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			40,
			42
		],
		o: 4
	},
	"woman-playing-water-polo": {
		skin_variations: {
			"1F3FB": {
				unified: "1F93D-1F3FB-200D-2640-FE0F",
				non_qualified: "1F93D-1F3FB-200D-2640",
				image: "1f93d-1f3fb-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 37,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F93D-1F3FC-200D-2640-FE0F",
				non_qualified: "1F93D-1F3FC-200D-2640",
				image: "1f93d-1f3fc-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 38,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F93D-1F3FD-200D-2640-FE0F",
				non_qualified: "1F93D-1F3FD-200D-2640",
				image: "1f93d-1f3fd-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 39,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F93D-1F3FE-200D-2640-FE0F",
				non_qualified: "1F93D-1F3FE-200D-2640",
				image: "1f93d-1f3fe-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 40,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F93D-1F3FF-200D-2640-FE0F",
				non_qualified: "1F93D-1F3FF-200D-2640",
				image: "1f93d-1f3ff-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 41,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Playing Water Polo",
		b: "1F93D-200D-2640-FE0F",
		c: "1F93D-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			40,
			36
		],
		o: 4
	},
	handball: {
		skin_variations: {
			"1F3FB": {
				unified: "1F93E-1F3FB",
				non_qualified: null,
				image: "1f93e-1f3fb.png",
				sheet_x: 41,
				sheet_y: 10,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC": {
				unified: "1F93E-1F3FC",
				non_qualified: null,
				image: "1f93e-1f3fc.png",
				sheet_x: 41,
				sheet_y: 11,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD": {
				unified: "1F93E-1F3FD",
				non_qualified: null,
				image: "1f93e-1f3fd.png",
				sheet_x: 41,
				sheet_y: 12,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE": {
				unified: "1F93E-1F3FE",
				non_qualified: null,
				image: "1f93e-1f3fe.png",
				sheet_x: 41,
				sheet_y: 13,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF": {
				unified: "1F93E-1F3FF",
				non_qualified: null,
				image: "1f93e-1f3ff.png",
				sheet_x: 41,
				sheet_y: 14,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: false
			}
		},
		a: "Handball",
		b: "1F93E",
		d: true,
		e: true,
		f: true,
		h: false,
		k: [
			41,
			9
		],
		o: 4
	},
	"man-playing-handball": {
		skin_variations: {
			"1F3FB": {
				unified: "1F93E-1F3FB-200D-2642-FE0F",
				non_qualified: "1F93E-1F3FB-200D-2642",
				image: "1f93e-1f3fb-200d-2642-fe0f.png",
				sheet_x: 41,
				sheet_y: 4,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F93E-1F3FC-200D-2642-FE0F",
				non_qualified: "1F93E-1F3FC-200D-2642",
				image: "1f93e-1f3fc-200d-2642-fe0f.png",
				sheet_x: 41,
				sheet_y: 5,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F93E-1F3FD-200D-2642-FE0F",
				non_qualified: "1F93E-1F3FD-200D-2642",
				image: "1f93e-1f3fd-200d-2642-fe0f.png",
				sheet_x: 41,
				sheet_y: 6,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F93E-1F3FE-200D-2642-FE0F",
				non_qualified: "1F93E-1F3FE-200D-2642",
				image: "1f93e-1f3fe-200d-2642-fe0f.png",
				sheet_x: 41,
				sheet_y: 7,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F93E-1F3FF-200D-2642-FE0F",
				non_qualified: "1F93E-1F3FF-200D-2642",
				image: "1f93e-1f3ff-200d-2642-fe0f.png",
				sheet_x: 41,
				sheet_y: 8,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Playing Handball",
		b: "1F93E-200D-2642-FE0F",
		c: "1F93E-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			41,
			3
		],
		o: 4
	},
	"woman-playing-handball": {
		skin_variations: {
			"1F3FB": {
				unified: "1F93E-1F3FB-200D-2640-FE0F",
				non_qualified: "1F93E-1F3FB-200D-2640",
				image: "1f93e-1f3fb-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 55,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F93E-1F3FC-200D-2640-FE0F",
				non_qualified: "1F93E-1F3FC-200D-2640",
				image: "1f93e-1f3fc-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 56,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F93E-1F3FD-200D-2640-FE0F",
				non_qualified: "1F93E-1F3FD-200D-2640",
				image: "1f93e-1f3fd-200d-2640-fe0f.png",
				sheet_x: 41,
				sheet_y: 0,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F93E-1F3FE-200D-2640-FE0F",
				non_qualified: "1F93E-1F3FE-200D-2640",
				image: "1f93e-1f3fe-200d-2640-fe0f.png",
				sheet_x: 41,
				sheet_y: 1,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F93E-1F3FF-200D-2640-FE0F",
				non_qualified: "1F93E-1F3FF-200D-2640",
				image: "1f93e-1f3ff-200d-2640-fe0f.png",
				sheet_x: 41,
				sheet_y: 2,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Playing Handball",
		b: "1F93E-200D-2640-FE0F",
		c: "1F93E-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			40,
			54
		],
		o: 4
	},
	juggling: {
		skin_variations: {
			"1F3FB": {
				unified: "1F939-1F3FB",
				non_qualified: null,
				image: "1f939-1f3fb.png",
				sheet_x: 40,
				sheet_y: 27,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F939-1F3FC",
				non_qualified: null,
				image: "1f939-1f3fc.png",
				sheet_x: 40,
				sheet_y: 28,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F939-1F3FD",
				non_qualified: null,
				image: "1f939-1f3fd.png",
				sheet_x: 40,
				sheet_y: 29,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F939-1F3FE",
				non_qualified: null,
				image: "1f939-1f3fe.png",
				sheet_x: 40,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F939-1F3FF",
				non_qualified: null,
				image: "1f939-1f3ff.png",
				sheet_x: 40,
				sheet_y: 31,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Juggling",
		b: "1F939",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			40,
			26
		],
		o: 4
	},
	"man-juggling": {
		skin_variations: {
			"1F3FB": {
				unified: "1F939-1F3FB-200D-2642-FE0F",
				non_qualified: "1F939-1F3FB-200D-2642",
				image: "1f939-1f3fb-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 21,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F939-1F3FC-200D-2642-FE0F",
				non_qualified: "1F939-1F3FC-200D-2642",
				image: "1f939-1f3fc-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 22,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F939-1F3FD-200D-2642-FE0F",
				non_qualified: "1F939-1F3FD-200D-2642",
				image: "1f939-1f3fd-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 23,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F939-1F3FE-200D-2642-FE0F",
				non_qualified: "1F939-1F3FE-200D-2642",
				image: "1f939-1f3fe-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 24,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F939-1F3FF-200D-2642-FE0F",
				non_qualified: "1F939-1F3FF-200D-2642",
				image: "1f939-1f3ff-200d-2642-fe0f.png",
				sheet_x: 40,
				sheet_y: 25,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man Juggling",
		b: "1F939-200D-2642-FE0F",
		c: "1F939-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			40,
			20
		],
		o: 4
	},
	"woman-juggling": {
		skin_variations: {
			"1F3FB": {
				unified: "1F939-1F3FB-200D-2640-FE0F",
				non_qualified: "1F939-1F3FB-200D-2640",
				image: "1f939-1f3fb-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 15,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F939-1F3FC-200D-2640-FE0F",
				non_qualified: "1F939-1F3FC-200D-2640",
				image: "1f939-1f3fc-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 16,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F939-1F3FD-200D-2640-FE0F",
				non_qualified: "1F939-1F3FD-200D-2640",
				image: "1f939-1f3fd-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 17,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F939-1F3FE-200D-2640-FE0F",
				non_qualified: "1F939-1F3FE-200D-2640",
				image: "1f939-1f3fe-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 18,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F939-1F3FF-200D-2640-FE0F",
				non_qualified: "1F939-1F3FF-200D-2640",
				image: "1f939-1f3ff-200d-2640-fe0f.png",
				sheet_x: 40,
				sheet_y: 19,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Woman Juggling",
		b: "1F939-200D-2640-FE0F",
		c: "1F939-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			40,
			14
		],
		o: 4
	},
	person_in_lotus_position: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D8-1F3FB",
				non_qualified: null,
				image: "1f9d8-1f3fb.png",
				sheet_x: 49,
				sheet_y: 32,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D8-1F3FB-200D-2640-FE0F"
			},
			"1F3FC": {
				unified: "1F9D8-1F3FC",
				non_qualified: null,
				image: "1f9d8-1f3fc.png",
				sheet_x: 49,
				sheet_y: 33,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D8-1F3FC-200D-2640-FE0F"
			},
			"1F3FD": {
				unified: "1F9D8-1F3FD",
				non_qualified: null,
				image: "1f9d8-1f3fd.png",
				sheet_x: 49,
				sheet_y: 34,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D8-1F3FD-200D-2640-FE0F"
			},
			"1F3FE": {
				unified: "1F9D8-1F3FE",
				non_qualified: null,
				image: "1f9d8-1f3fe.png",
				sheet_x: 49,
				sheet_y: 35,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D8-1F3FE-200D-2640-FE0F"
			},
			"1F3FF": {
				unified: "1F9D8-1F3FF",
				non_qualified: null,
				image: "1f9d8-1f3ff.png",
				sheet_x: 49,
				sheet_y: 36,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoleted_by: "1F9D8-1F3FF-200D-2640-FE0F"
			}
		},
		obsoleted_by: "1F9D8-200D-2640-FE0F",
		a: "Person in Lotus Position",
		b: "1F9D8",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			49,
			31
		],
		o: 5
	},
	man_in_lotus_position: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D8-1F3FB-200D-2642-FE0F",
				non_qualified: "1F9D8-1F3FB-200D-2642",
				image: "1f9d8-1f3fb-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 26,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F9D8-1F3FC-200D-2642-FE0F",
				non_qualified: "1F9D8-1F3FC-200D-2642",
				image: "1f9d8-1f3fc-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 27,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F9D8-1F3FD-200D-2642-FE0F",
				non_qualified: "1F9D8-1F3FD-200D-2642",
				image: "1f9d8-1f3fd-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 28,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F9D8-1F3FE-200D-2642-FE0F",
				non_qualified: "1F9D8-1F3FE-200D-2642",
				image: "1f9d8-1f3fe-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 29,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F9D8-1F3FF-200D-2642-FE0F",
				non_qualified: "1F9D8-1F3FF-200D-2642",
				image: "1f9d8-1f3ff-200d-2642-fe0f.png",
				sheet_x: 49,
				sheet_y: 30,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man in Lotus Position",
		b: "1F9D8-200D-2642-FE0F",
		c: "1F9D8-200D-2642",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			49,
			25
		],
		o: 5
	},
	woman_in_lotus_position: {
		skin_variations: {
			"1F3FB": {
				unified: "1F9D8-1F3FB-200D-2640-FE0F",
				non_qualified: "1F9D8-1F3FB-200D-2640",
				image: "1f9d8-1f3fb-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 20,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D8-1F3FB"
			},
			"1F3FC": {
				unified: "1F9D8-1F3FC-200D-2640-FE0F",
				non_qualified: "1F9D8-1F3FC-200D-2640",
				image: "1f9d8-1f3fc-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 21,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D8-1F3FC"
			},
			"1F3FD": {
				unified: "1F9D8-1F3FD-200D-2640-FE0F",
				non_qualified: "1F9D8-1F3FD-200D-2640",
				image: "1f9d8-1f3fd-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 22,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D8-1F3FD"
			},
			"1F3FE": {
				unified: "1F9D8-1F3FE-200D-2640-FE0F",
				non_qualified: "1F9D8-1F3FE-200D-2640",
				image: "1f9d8-1f3fe-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 23,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D8-1F3FE"
			},
			"1F3FF": {
				unified: "1F9D8-1F3FF-200D-2640-FE0F",
				non_qualified: "1F9D8-1F3FF-200D-2640",
				image: "1f9d8-1f3ff-200d-2640-fe0f.png",
				sheet_x: 49,
				sheet_y: 24,
				added_in: "5.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true,
				obsoletes: "1F9D8-1F3FF"
			}
		},
		obsoletes: "1F9D8",
		a: "Woman in Lotus Position",
		b: "1F9D8-200D-2640-FE0F",
		c: "1F9D8-200D-2640",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			49,
			19
		],
		o: 5
	},
	bath: {
		skin_variations: {
			"1F3FB": {
				unified: "1F6C0-1F3FB",
				non_qualified: null,
				image: "1f6c0-1f3fb.png",
				sheet_x: 36,
				sheet_y: 18,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F6C0-1F3FC",
				non_qualified: null,
				image: "1f6c0-1f3fc.png",
				sheet_x: 36,
				sheet_y: 19,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F6C0-1F3FD",
				non_qualified: null,
				image: "1f6c0-1f3fd.png",
				sheet_x: 36,
				sheet_y: 20,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F6C0-1F3FE",
				non_qualified: null,
				image: "1f6c0-1f3fe.png",
				sheet_x: 36,
				sheet_y: 21,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F6C0-1F3FF",
				non_qualified: null,
				image: "1f6c0-1f3ff.png",
				sheet_x: 36,
				sheet_y: 22,
				added_in: "2.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Bath",
		b: "1F6C0",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"clean",
			"shower",
			"bathroom"
		],
		k: [
			36,
			17
		],
		o: 2
	},
	sleeping_accommodation: {
		skin_variations: {
			"1F3FB": {
				unified: "1F6CC-1F3FB",
				non_qualified: null,
				image: "1f6cc-1f3fb.png",
				sheet_x: 36,
				sheet_y: 30,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F6CC-1F3FC",
				non_qualified: null,
				image: "1f6cc-1f3fc.png",
				sheet_x: 36,
				sheet_y: 31,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F6CC-1F3FD",
				non_qualified: null,
				image: "1f6cc-1f3fd.png",
				sheet_x: 36,
				sheet_y: 32,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F6CC-1F3FE",
				non_qualified: null,
				image: "1f6cc-1f3fe.png",
				sheet_x: 36,
				sheet_y: 33,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F6CC-1F3FF",
				non_qualified: null,
				image: "1f6cc-1f3ff.png",
				sheet_x: 36,
				sheet_y: 34,
				added_in: "4.0",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Sleeping Accommodation",
		b: "1F6CC",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			36,
			29
		],
		o: 2
	},
	people_holding_hands: {
		skin_variations: {
			"1F3FB-1F3FB": {
				unified: "1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FB",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb.png",
				sheet_x: 46,
				sheet_y: 39,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FB-1F3FC": {
				unified: "1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FC",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc.png",
				sheet_x: 46,
				sheet_y: 40,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FB-1F3FD": {
				unified: "1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FD",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd.png",
				sheet_x: 46,
				sheet_y: 41,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FB-1F3FE": {
				unified: "1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FE",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe.png",
				sheet_x: 46,
				sheet_y: 42,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FB-1F3FF": {
				unified: "1F9D1-1F3FB-200D-1F91D-200D-1F9D1-1F3FF",
				non_qualified: null,
				image: "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff.png",
				sheet_x: 46,
				sheet_y: 43,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC-1F3FB": {
				unified: "1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FB",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb.png",
				sheet_x: 46,
				sheet_y: 44,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC-1F3FC": {
				unified: "1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FC",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc.png",
				sheet_x: 46,
				sheet_y: 45,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC-1F3FD": {
				unified: "1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FD",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd.png",
				sheet_x: 46,
				sheet_y: 46,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC-1F3FE": {
				unified: "1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FE",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe.png",
				sheet_x: 46,
				sheet_y: 47,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC-1F3FF": {
				unified: "1F9D1-1F3FC-200D-1F91D-200D-1F9D1-1F3FF",
				non_qualified: null,
				image: "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff.png",
				sheet_x: 46,
				sheet_y: 48,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD-1F3FB": {
				unified: "1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FB",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb.png",
				sheet_x: 46,
				sheet_y: 49,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FC": {
				unified: "1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FC",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc.png",
				sheet_x: 46,
				sheet_y: 50,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FD": {
				unified: "1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FD",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd.png",
				sheet_x: 46,
				sheet_y: 51,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FE": {
				unified: "1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FE",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe.png",
				sheet_x: 46,
				sheet_y: 52,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD-1F3FF": {
				unified: "1F9D1-1F3FD-200D-1F91D-200D-1F9D1-1F3FF",
				non_qualified: null,
				image: "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff.png",
				sheet_x: 46,
				sheet_y: 53,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE-1F3FB": {
				unified: "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FB",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb.png",
				sheet_x: 46,
				sheet_y: 54,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FC": {
				unified: "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FC",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc.png",
				sheet_x: 46,
				sheet_y: 55,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FD": {
				unified: "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FD",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd.png",
				sheet_x: 46,
				sheet_y: 56,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FE": {
				unified: "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FE",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe.png",
				sheet_x: 47,
				sheet_y: 0,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FF": {
				unified: "1F9D1-1F3FE-200D-1F91D-200D-1F9D1-1F3FF",
				non_qualified: null,
				image: "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff.png",
				sheet_x: 47,
				sheet_y: 1,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF-1F3FB": {
				unified: "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FB",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb.png",
				sheet_x: 47,
				sheet_y: 2,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FC": {
				unified: "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FC",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc.png",
				sheet_x: 47,
				sheet_y: 3,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FD": {
				unified: "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FD",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd.png",
				sheet_x: 47,
				sheet_y: 4,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FE": {
				unified: "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FE",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe.png",
				sheet_x: 47,
				sheet_y: 5,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FF": {
				unified: "1F9D1-1F3FF-200D-1F91D-200D-1F9D1-1F3FF",
				non_qualified: null,
				image: "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff.png",
				sheet_x: 47,
				sheet_y: 6,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "People Holding Hands",
		b: "1F9D1-200D-1F91D-200D-1F9D1",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			46,
			38
		],
		o: 12
	},
	two_women_holding_hands: {
		skin_variations: {
			"1F3FB": {
				unified: "1F46D-1F3FB",
				non_qualified: null,
				image: "1f46d-1f3fb.png",
				sheet_x: 21,
				sheet_y: 12,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F46D-1F3FC",
				non_qualified: null,
				image: "1f46d-1f3fc.png",
				sheet_x: 21,
				sheet_y: 13,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F46D-1F3FD",
				non_qualified: null,
				image: "1f46d-1f3fd.png",
				sheet_x: 21,
				sheet_y: 14,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F46D-1F3FE",
				non_qualified: null,
				image: "1f46d-1f3fe.png",
				sheet_x: 21,
				sheet_y: 15,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F46D-1F3FF",
				non_qualified: null,
				image: "1f46d-1f3ff.png",
				sheet_x: 21,
				sheet_y: 16,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FB-1F3FC": {
				unified: "1F469-1F3FB-200D-1F91D-200D-1F469-1F3FC",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc.png",
				sheet_x: 21,
				sheet_y: 17,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FB-1F3FD": {
				unified: "1F469-1F3FB-200D-1F91D-200D-1F469-1F3FD",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd.png",
				sheet_x: 21,
				sheet_y: 18,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FB-1F3FE": {
				unified: "1F469-1F3FB-200D-1F91D-200D-1F469-1F3FE",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe.png",
				sheet_x: 21,
				sheet_y: 19,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FB-1F3FF": {
				unified: "1F469-1F3FB-200D-1F91D-200D-1F469-1F3FF",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff.png",
				sheet_x: 21,
				sheet_y: 20,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC-1F3FB": {
				unified: "1F469-1F3FC-200D-1F91D-200D-1F469-1F3FB",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb.png",
				sheet_x: 21,
				sheet_y: 21,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC-1F3FD": {
				unified: "1F469-1F3FC-200D-1F91D-200D-1F469-1F3FD",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd.png",
				sheet_x: 21,
				sheet_y: 22,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC-1F3FE": {
				unified: "1F469-1F3FC-200D-1F91D-200D-1F469-1F3FE",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe.png",
				sheet_x: 21,
				sheet_y: 23,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC-1F3FF": {
				unified: "1F469-1F3FC-200D-1F91D-200D-1F469-1F3FF",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff.png",
				sheet_x: 21,
				sheet_y: 24,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD-1F3FB": {
				unified: "1F469-1F3FD-200D-1F91D-200D-1F469-1F3FB",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb.png",
				sheet_x: 21,
				sheet_y: 25,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FC": {
				unified: "1F469-1F3FD-200D-1F91D-200D-1F469-1F3FC",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc.png",
				sheet_x: 21,
				sheet_y: 26,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FE": {
				unified: "1F469-1F3FD-200D-1F91D-200D-1F469-1F3FE",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe.png",
				sheet_x: 21,
				sheet_y: 27,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD-1F3FF": {
				unified: "1F469-1F3FD-200D-1F91D-200D-1F469-1F3FF",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff.png",
				sheet_x: 21,
				sheet_y: 28,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE-1F3FB": {
				unified: "1F469-1F3FE-200D-1F91D-200D-1F469-1F3FB",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb.png",
				sheet_x: 21,
				sheet_y: 29,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FC": {
				unified: "1F469-1F3FE-200D-1F91D-200D-1F469-1F3FC",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc.png",
				sheet_x: 21,
				sheet_y: 30,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FD": {
				unified: "1F469-1F3FE-200D-1F91D-200D-1F469-1F3FD",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd.png",
				sheet_x: 21,
				sheet_y: 31,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FF": {
				unified: "1F469-1F3FE-200D-1F91D-200D-1F469-1F3FF",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff.png",
				sheet_x: 21,
				sheet_y: 32,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF-1F3FB": {
				unified: "1F469-1F3FF-200D-1F91D-200D-1F469-1F3FB",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb.png",
				sheet_x: 21,
				sheet_y: 33,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FC": {
				unified: "1F469-1F3FF-200D-1F91D-200D-1F469-1F3FC",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc.png",
				sheet_x: 21,
				sheet_y: 34,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FD": {
				unified: "1F469-1F3FF-200D-1F91D-200D-1F469-1F3FD",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd.png",
				sheet_x: 21,
				sheet_y: 35,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FE": {
				unified: "1F469-1F3FF-200D-1F91D-200D-1F469-1F3FE",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe.png",
				sheet_x: 21,
				sheet_y: 36,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Two Women Holding Hands",
		b: "1F46D",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"pair",
			"friendship",
			"couple",
			"love",
			"like",
			"female",
			"people",
			"human"
		],
		k: [
			21,
			11
		],
		n: [
			"women_holding_hands"
		],
		o: 2
	},
	couple: {
		skin_variations: {
			"1F3FB": {
				unified: "1F46B-1F3FB",
				non_qualified: null,
				image: "1f46b-1f3fb.png",
				sheet_x: 20,
				sheet_y: 17,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F46B-1F3FC",
				non_qualified: null,
				image: "1f46b-1f3fc.png",
				sheet_x: 20,
				sheet_y: 18,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F46B-1F3FD",
				non_qualified: null,
				image: "1f46b-1f3fd.png",
				sheet_x: 20,
				sheet_y: 19,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F46B-1F3FE",
				non_qualified: null,
				image: "1f46b-1f3fe.png",
				sheet_x: 20,
				sheet_y: 20,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F46B-1F3FF",
				non_qualified: null,
				image: "1f46b-1f3ff.png",
				sheet_x: 20,
				sheet_y: 21,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FB-1F3FC": {
				unified: "1F469-1F3FB-200D-1F91D-200D-1F468-1F3FC",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc.png",
				sheet_x: 20,
				sheet_y: 22,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FB-1F3FD": {
				unified: "1F469-1F3FB-200D-1F91D-200D-1F468-1F3FD",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd.png",
				sheet_x: 20,
				sheet_y: 23,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FB-1F3FE": {
				unified: "1F469-1F3FB-200D-1F91D-200D-1F468-1F3FE",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe.png",
				sheet_x: 20,
				sheet_y: 24,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FB-1F3FF": {
				unified: "1F469-1F3FB-200D-1F91D-200D-1F468-1F3FF",
				non_qualified: null,
				image: "1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff.png",
				sheet_x: 20,
				sheet_y: 25,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC-1F3FB": {
				unified: "1F469-1F3FC-200D-1F91D-200D-1F468-1F3FB",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb.png",
				sheet_x: 20,
				sheet_y: 26,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC-1F3FD": {
				unified: "1F469-1F3FC-200D-1F91D-200D-1F468-1F3FD",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd.png",
				sheet_x: 20,
				sheet_y: 27,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC-1F3FE": {
				unified: "1F469-1F3FC-200D-1F91D-200D-1F468-1F3FE",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe.png",
				sheet_x: 20,
				sheet_y: 28,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC-1F3FF": {
				unified: "1F469-1F3FC-200D-1F91D-200D-1F468-1F3FF",
				non_qualified: null,
				image: "1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff.png",
				sheet_x: 20,
				sheet_y: 29,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FB": {
				unified: "1F469-1F3FD-200D-1F91D-200D-1F468-1F3FB",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb.png",
				sheet_x: 20,
				sheet_y: 30,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FC": {
				unified: "1F469-1F3FD-200D-1F91D-200D-1F468-1F3FC",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc.png",
				sheet_x: 20,
				sheet_y: 31,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FE": {
				unified: "1F469-1F3FD-200D-1F91D-200D-1F468-1F3FE",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe.png",
				sheet_x: 20,
				sheet_y: 32,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FF": {
				unified: "1F469-1F3FD-200D-1F91D-200D-1F468-1F3FF",
				non_qualified: null,
				image: "1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff.png",
				sheet_x: 20,
				sheet_y: 33,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FB": {
				unified: "1F469-1F3FE-200D-1F91D-200D-1F468-1F3FB",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb.png",
				sheet_x: 20,
				sheet_y: 34,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FC": {
				unified: "1F469-1F3FE-200D-1F91D-200D-1F468-1F3FC",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc.png",
				sheet_x: 20,
				sheet_y: 35,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FD": {
				unified: "1F469-1F3FE-200D-1F91D-200D-1F468-1F3FD",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd.png",
				sheet_x: 20,
				sheet_y: 36,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FF": {
				unified: "1F469-1F3FE-200D-1F91D-200D-1F468-1F3FF",
				non_qualified: null,
				image: "1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff.png",
				sheet_x: 20,
				sheet_y: 37,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FB": {
				unified: "1F469-1F3FF-200D-1F91D-200D-1F468-1F3FB",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb.png",
				sheet_x: 20,
				sheet_y: 38,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FC": {
				unified: "1F469-1F3FF-200D-1F91D-200D-1F468-1F3FC",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc.png",
				sheet_x: 20,
				sheet_y: 39,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FD": {
				unified: "1F469-1F3FF-200D-1F91D-200D-1F468-1F3FD",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd.png",
				sheet_x: 20,
				sheet_y: 40,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FE": {
				unified: "1F469-1F3FF-200D-1F91D-200D-1F468-1F3FE",
				non_qualified: null,
				image: "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe.png",
				sheet_x: 20,
				sheet_y: 41,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Man and Woman Holding Hands",
		b: "1F46B",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"pair",
			"people",
			"human",
			"love",
			"date",
			"dating",
			"like",
			"affection",
			"valentines",
			"marriage"
		],
		k: [
			20,
			16
		],
		n: [
			"man_and_woman_holding_hands",
			"woman_and_man_holding_hands"
		],
		o: 2
	},
	two_men_holding_hands: {
		skin_variations: {
			"1F3FB": {
				unified: "1F46C-1F3FB",
				non_qualified: null,
				image: "1f46c-1f3fb.png",
				sheet_x: 20,
				sheet_y: 43,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC": {
				unified: "1F46C-1F3FC",
				non_qualified: null,
				image: "1f46c-1f3fc.png",
				sheet_x: 20,
				sheet_y: 44,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD": {
				unified: "1F46C-1F3FD",
				non_qualified: null,
				image: "1f46c-1f3fd.png",
				sheet_x: 20,
				sheet_y: 45,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE": {
				unified: "1F46C-1F3FE",
				non_qualified: null,
				image: "1f46c-1f3fe.png",
				sheet_x: 20,
				sheet_y: 46,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF": {
				unified: "1F46C-1F3FF",
				non_qualified: null,
				image: "1f46c-1f3ff.png",
				sheet_x: 20,
				sheet_y: 47,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FB-1F3FC": {
				unified: "1F468-1F3FB-200D-1F91D-200D-1F468-1F3FC",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc.png",
				sheet_x: 20,
				sheet_y: 48,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FB-1F3FD": {
				unified: "1F468-1F3FB-200D-1F91D-200D-1F468-1F3FD",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd.png",
				sheet_x: 20,
				sheet_y: 49,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FB-1F3FE": {
				unified: "1F468-1F3FB-200D-1F91D-200D-1F468-1F3FE",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe.png",
				sheet_x: 20,
				sheet_y: 50,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FB-1F3FF": {
				unified: "1F468-1F3FB-200D-1F91D-200D-1F468-1F3FF",
				non_qualified: null,
				image: "1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff.png",
				sheet_x: 20,
				sheet_y: 51,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC-1F3FB": {
				unified: "1F468-1F3FC-200D-1F91D-200D-1F468-1F3FB",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb.png",
				sheet_x: 20,
				sheet_y: 52,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FC-1F3FD": {
				unified: "1F468-1F3FC-200D-1F91D-200D-1F468-1F3FD",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd.png",
				sheet_x: 20,
				sheet_y: 53,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC-1F3FE": {
				unified: "1F468-1F3FC-200D-1F91D-200D-1F468-1F3FE",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe.png",
				sheet_x: 20,
				sheet_y: 54,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FC-1F3FF": {
				unified: "1F468-1F3FC-200D-1F91D-200D-1F468-1F3FF",
				non_qualified: null,
				image: "1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff.png",
				sheet_x: 20,
				sheet_y: 55,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD-1F3FB": {
				unified: "1F468-1F3FD-200D-1F91D-200D-1F468-1F3FB",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb.png",
				sheet_x: 20,
				sheet_y: 56,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FC": {
				unified: "1F468-1F3FD-200D-1F91D-200D-1F468-1F3FC",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc.png",
				sheet_x: 21,
				sheet_y: 0,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FD-1F3FE": {
				unified: "1F468-1F3FD-200D-1F91D-200D-1F468-1F3FE",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe.png",
				sheet_x: 21,
				sheet_y: 1,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FD-1F3FF": {
				unified: "1F468-1F3FD-200D-1F91D-200D-1F468-1F3FF",
				non_qualified: null,
				image: "1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff.png",
				sheet_x: 21,
				sheet_y: 2,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FE-1F3FB": {
				unified: "1F468-1F3FE-200D-1F91D-200D-1F468-1F3FB",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb.png",
				sheet_x: 21,
				sheet_y: 3,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FC": {
				unified: "1F468-1F3FE-200D-1F91D-200D-1F468-1F3FC",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc.png",
				sheet_x: 21,
				sheet_y: 4,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FD": {
				unified: "1F468-1F3FE-200D-1F91D-200D-1F468-1F3FD",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd.png",
				sheet_x: 21,
				sheet_y: 5,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FE-1F3FF": {
				unified: "1F468-1F3FE-200D-1F91D-200D-1F468-1F3FF",
				non_qualified: null,
				image: "1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff.png",
				sheet_x: 21,
				sheet_y: 6,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: false,
				has_img_twitter: true,
				has_img_facebook: false
			},
			"1F3FF-1F3FB": {
				unified: "1F468-1F3FF-200D-1F91D-200D-1F468-1F3FB",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb.png",
				sheet_x: 21,
				sheet_y: 7,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FC": {
				unified: "1F468-1F3FF-200D-1F91D-200D-1F468-1F3FC",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc.png",
				sheet_x: 21,
				sheet_y: 8,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FD": {
				unified: "1F468-1F3FF-200D-1F91D-200D-1F468-1F3FD",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd.png",
				sheet_x: 21,
				sheet_y: 9,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			},
			"1F3FF-1F3FE": {
				unified: "1F468-1F3FF-200D-1F91D-200D-1F468-1F3FE",
				non_qualified: null,
				image: "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe.png",
				sheet_x: 21,
				sheet_y: 10,
				added_in: "12.1",
				has_img_apple: true,
				has_img_google: true,
				has_img_twitter: true,
				has_img_facebook: true
			}
		},
		a: "Two Men Holding Hands",
		b: "1F46C",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"pair",
			"couple",
			"love",
			"like",
			"bromance",
			"friendship",
			"people",
			"human"
		],
		k: [
			20,
			42
		],
		n: [
			"men_holding_hands"
		],
		o: 2
	},
	couplekiss: {
		obsoleted_by: "1F469-200D-2764-FE0F-200D-1F48B-200D-1F468",
		a: "Kiss",
		b: "1F48F",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			25,
			25
		],
		o: 2
	},
	"woman-kiss-man": {
		obsoletes: "1F48F",
		a: "Woman Kiss Man",
		b: "1F469-200D-2764-FE0F-200D-1F48B-200D-1F468",
		c: "1F469-200D-2764-200D-1F48B-200D-1F468",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			20,
			7
		],
		o: 2
	},
	"man-kiss-man": {
		a: "Man Kiss Man",
		b: "1F468-200D-2764-FE0F-200D-1F48B-200D-1F468",
		c: "1F468-200D-2764-200D-1F48B-200D-1F468",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			17,
			21
		],
		o: 2
	},
	"woman-kiss-woman": {
		a: "Woman Kiss Woman",
		b: "1F469-200D-2764-FE0F-200D-1F48B-200D-1F469",
		c: "1F469-200D-2764-200D-1F48B-200D-1F469",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			20,
			8
		],
		o: 2
	},
	couple_with_heart: {
		obsoleted_by: "1F469-200D-2764-FE0F-200D-1F468",
		a: "Couple with Heart",
		b: "1F491",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			25,
			27
		],
		o: 2
	},
	"woman-heart-man": {
		obsoletes: "1F491",
		a: "Woman Heart Man",
		b: "1F469-200D-2764-FE0F-200D-1F468",
		c: "1F469-200D-2764-200D-1F468",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			20,
			5
		],
		o: 2
	},
	"man-heart-man": {
		a: "Man Heart Man",
		b: "1F468-200D-2764-FE0F-200D-1F468",
		c: "1F468-200D-2764-200D-1F468",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			17,
			20
		],
		o: 2
	},
	"woman-heart-woman": {
		a: "Woman Heart Woman",
		b: "1F469-200D-2764-FE0F-200D-1F469",
		c: "1F469-200D-2764-200D-1F469",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			20,
			6
		],
		o: 2
	},
	family: {
		obsoleted_by: "1F468-200D-1F469-200D-1F466",
		a: "Family",
		b: "1F46A",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			20,
			15
		],
		n: [
			"man-woman-boy"
		],
		o: 2
	},
	"man-woman-boy": {
		obsoletes: "1F46A",
		a: "Man Woman Boy",
		b: "1F468-200D-1F469-200D-1F466",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			33
		],
		n: [
			"family"
		],
		o: 2
	},
	"man-woman-girl": {
		a: "Man Woman Girl",
		b: "1F468-200D-1F469-200D-1F467",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			35
		],
		o: 2
	},
	"man-woman-girl-boy": {
		a: "Man Woman Girl Boy",
		b: "1F468-200D-1F469-200D-1F467-200D-1F466",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			36
		],
		o: 2
	},
	"man-woman-boy-boy": {
		a: "Man Woman Boy Boy",
		b: "1F468-200D-1F469-200D-1F466-200D-1F466",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			34
		],
		o: 2
	},
	"man-woman-girl-girl": {
		a: "Man Woman Girl Girl",
		b: "1F468-200D-1F469-200D-1F467-200D-1F467",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			37
		],
		o: 2
	},
	"man-man-boy": {
		a: "Man Man Boy",
		b: "1F468-200D-1F468-200D-1F466",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			28
		],
		o: 2
	},
	"man-man-girl": {
		a: "Man Man Girl",
		b: "1F468-200D-1F468-200D-1F467",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			30
		],
		o: 2
	},
	"man-man-girl-boy": {
		a: "Man Man Girl Boy",
		b: "1F468-200D-1F468-200D-1F467-200D-1F466",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			31
		],
		o: 2
	},
	"man-man-boy-boy": {
		a: "Man Man Boy Boy",
		b: "1F468-200D-1F468-200D-1F466-200D-1F466",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			29
		],
		o: 2
	},
	"man-man-girl-girl": {
		a: "Man Man Girl Girl",
		b: "1F468-200D-1F468-200D-1F467-200D-1F467",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			32
		],
		o: 2
	},
	"woman-woman-boy": {
		a: "Woman Woman Boy",
		b: "1F469-200D-1F469-200D-1F466",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			18,
			18
		],
		o: 2
	},
	"woman-woman-girl": {
		a: "Woman Woman Girl",
		b: "1F469-200D-1F469-200D-1F467",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			18,
			20
		],
		o: 2
	},
	"woman-woman-girl-boy": {
		a: "Woman Woman Girl Boy",
		b: "1F469-200D-1F469-200D-1F467-200D-1F466",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			18,
			21
		],
		o: 2
	},
	"woman-woman-boy-boy": {
		a: "Woman Woman Boy Boy",
		b: "1F469-200D-1F469-200D-1F466-200D-1F466",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			18,
			19
		],
		o: 2
	},
	"woman-woman-girl-girl": {
		a: "Woman Woman Girl Girl",
		b: "1F469-200D-1F469-200D-1F467-200D-1F467",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			18,
			22
		],
		o: 2
	},
	"man-boy": {
		a: "Man Boy",
		b: "1F468-200D-1F466",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			24
		],
		o: 4
	},
	"man-boy-boy": {
		a: "Man Boy Boy",
		b: "1F468-200D-1F466-200D-1F466",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			23
		],
		o: 4
	},
	"man-girl": {
		a: "Man Girl",
		b: "1F468-200D-1F467",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			27
		],
		o: 4
	},
	"man-girl-boy": {
		a: "Man Girl Boy",
		b: "1F468-200D-1F467-200D-1F466",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			25
		],
		o: 4
	},
	"man-girl-girl": {
		a: "Man Girl Girl",
		b: "1F468-200D-1F467-200D-1F467",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			15,
			26
		],
		o: 4
	},
	"woman-boy": {
		a: "Woman Boy",
		b: "1F469-200D-1F466",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			18,
			14
		],
		o: 4
	},
	"woman-boy-boy": {
		a: "Woman Boy Boy",
		b: "1F469-200D-1F466-200D-1F466",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			18,
			13
		],
		o: 4
	},
	"woman-girl": {
		a: "Woman Girl",
		b: "1F469-200D-1F467",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			18,
			17
		],
		o: 4
	},
	"woman-girl-boy": {
		a: "Woman Girl Boy",
		b: "1F469-200D-1F467-200D-1F466",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			18,
			15
		],
		o: 4
	},
	"woman-girl-girl": {
		a: "Woman Girl Girl",
		b: "1F469-200D-1F467-200D-1F467",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			18,
			16
		],
		o: 4
	},
	speaking_head_in_silhouette: {
		a: "Speaking Head in Silhouette",
		b: "1F5E3-FE0F",
		c: "1F5E3",
		d: true,
		e: true,
		f: true,
		h: true,
		k: [
			30,
			25
		],
		o: 2
	},
	bust_in_silhouette: {
		a: "Bust in Silhouette",
		b: "1F464",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"user",
			"person",
			"human"
		],
		k: [
			14,
			24
		],
		o: 2
	},
	busts_in_silhouette: {
		a: "Busts in Silhouette",
		b: "1F465",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"user",
			"person",
			"human",
			"group",
			"team"
		],
		k: [
			14,
			25
		],
		o: 2
	},
	footprints: {
		a: "Footprints",
		b: "1F463",
		d: true,
		e: true,
		f: true,
		h: true,
		j: [
			"feet",
			"tracking",
			"walking",
			"beach"
		],
		k: [
			14,
			23
		],
		o: 2
	}
};
var aliases$1 = {
	raised_hand: "hand",
	satisfied: "laughing",
	tshirt: "shirt",
	hand_with_index_and_middle_fingers_crossed: "crossed_fingers",
	sign_of_the_horns: "the_horns",
	grinning_face_with_star_eyes: "star-struck",
	reversed_hand_with_middle_finger_extended: "middle_finger",
	thumbsup: "+1",
	thumbsdown: "-1",
	punch: "facepunch",
	grinning_face_with_one_large_and_one_small_eye: "zany_face",
	shoe: "mans_shoe",
	smiling_face_with_smiling_eyes_and_hand_covering_mouth: "face_with_hand_over_mouth",
	face_with_finger_covering_closed_lips: "shushing_face",
	face_with_one_eyebrow_raised: "face_with_raised_eyebrow",
	face_with_open_mouth_vomiting: "face_vomiting",
	cooking: "fried_egg",
	"flag-cn": "cn",
	shocked_face_with_exploding_head: "exploding_head",
	paw_prints: "feet",
	"flag-de": "de",
	telephone: "phone",
	"flag-es": "es",
	red_car: "car",
	flipper: "dolphin",
	"flag-fr": "fr",
	uk: "gb",
	"flag-gb": "gb",
	serious_face_with_symbols_covering_mouth: "face_with_symbols_on_mouth",
	poop: "hankey",
	shit: "hankey",
	honeybee: "bee",
	staff_of_aesculapius: "medical_symbol",
	lantern: "izakaya_lantern",
	open_book: "book",
	sailboat: "boat",
	knife: "hocho",
	"flag-it": "it",
	heavy_exclamation_mark: "exclamation",
	"flag-jp": "jp",
	envelope: "email",
	"flag-kr": "kr",
	collision: "boom",
	pencil: "memo",
	waxing_gibbous_moon: "moon",
	mother_christmas: "mrs_claus",
	sun_small_cloud: "mostly_sunny",
	sun_behind_cloud: "barely_sunny",
	sun_behind_rain_cloud: "partly_sunny_rain",
	lightning_cloud: "lightning",
	tornado_cloud: "tornado",
	"flag-ru": "ru",
	running: "runner",
	"flag-us": "us",
	women_holding_hands: "two_women_holding_hands",
	man_and_woman_holding_hands: "couple",
	woman_and_man_holding_hands: "couple",
	men_holding_hands: "two_men_holding_hands",
	"man-woman-boy": "family",
	family: "man-woman-boy"
};
var require$$2 = {
	compressed: compressed$1,
	categories: categories$1,
	emojis: emojis$1,
	aliases: aliases$1
};

var classCallCheck = createCommonjsModule(function (module) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var toPrimitive_1 = createCommonjsModule(function (module) {
var _typeof = _typeof_1["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var toPropertyKey_1 = createCommonjsModule(function (module) {
var _typeof = _typeof_1["default"];

function toPropertyKey(t) {
  var i = toPrimitive_1(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var createClass = createCommonjsModule(function (module) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey_1(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var data = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uncompress = exports.compress = exports.buildSearch = void 0;
var mapping = {
  name: 'a',
  unified: 'b',
  non_qualified: 'c',
  has_img_apple: 'd',
  has_img_google: 'e',
  has_img_twitter: 'f',
  has_img_facebook: 'h',
  keywords: 'j',
  sheet: 'k',
  emoticons: 'l',
  text: 'm',
  short_names: 'n',
  added_in: 'o'
};
var buildSearch = function buildSearch(emoji) {
  var search = [];
  var addToSearch = function addToSearch(strings, split) {
    if (!strings) {
      return;
    }
    (Array.isArray(strings) ? strings : [strings]).forEach(function (string) {
      (split ? string.split(/[-|_|\s]+/) : [string]).forEach(function (s) {
        s = s.toLowerCase();
        if (search.indexOf(s) == -1) {
          search.push(s);
        }
      });
    });
  };
  addToSearch(emoji.short_names, true);
  addToSearch(emoji.name, true);
  addToSearch(emoji.keywords, false);
  addToSearch(emoji.emoticons, false);
  return search.join(',');
};
exports.buildSearch = buildSearch;
var compress = function compress(emoji) {
  emoji.short_names = emoji.short_names.filter(function (short_name) {
    return short_name !== emoji.short_name;
  });
  delete emoji.short_name;
  emoji.sheet = [emoji.sheet_x, emoji.sheet_y];
  delete emoji.sheet_x;
  delete emoji.sheet_y;
  emoji.added_in = parseInt(emoji.added_in);
  if (emoji.added_in === 6) {
    delete emoji.added_in;
  }
  for (var key in mapping) {
    emoji[mapping[key]] = emoji[key];
    delete emoji[key];
  }
  for (var _key in emoji) {
    var value = emoji[_key];
    if (Array.isArray(value) && !value.length) {
      delete emoji[_key];
    } else if (typeof value === 'string' && !value.length) {
      delete emoji[_key];
    } else if (value === null) {
      delete emoji[_key];
    }
  }
};
exports.compress = compress;
var uncompress = function uncompress(data) {
  data.compressed = false;
  for (var id in data.emojis) {
    var emoji = data.emojis[id];
    for (var key in mapping) {
      emoji[key] = emoji[mapping[key]];
      delete emoji[mapping[key]];
    }
    if (!emoji.short_names) emoji.short_names = [];
    emoji.short_names.unshift(id);
    emoji.sheet_x = emoji.sheet[0];
    emoji.sheet_y = emoji.sheet[1];
    delete emoji.sheet;
    if (!emoji.text) emoji.text = '';
    if (!emoji.added_in) emoji.added_in = 6;
    emoji.added_in = emoji.added_in.toFixed(1);
    emoji.search = buildSearch(emoji);
  }
};
exports.uncompress = uncompress;
});

var stringFromCodePoint = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _String = String;
var _default = _String.fromCodePoint || function stringFromCodePoint() {
  var MAX_SIZE = 0x4000;
  var codeUnits = [];
  var highSurrogate;
  var lowSurrogate;
  var index = -1;
  var length = arguments.length;
  if (!length) {
    return '';
  }
  var result = '';
  while (++index < length) {
    var codePoint = Number(arguments[index]);
    if (!isFinite(codePoint) ||
    // `NaN`, `+Infinity`, or `-Infinity`
    codePoint < 0 ||
    // not a valid Unicode code point
    codePoint > 0x10ffff ||
    // not a valid Unicode code point
    Math.floor(codePoint) != codePoint // not an integer
    ) {
      throw RangeError('Invalid code point: ' + codePoint);
    }
    if (codePoint <= 0xffff) {
      // BMP code point
      codeUnits.push(codePoint);
    } else {
      // Astral code point; split in surrogate halves
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      codePoint -= 0x10000;
      highSurrogate = (codePoint >> 10) + 0xd800;
      lowSurrogate = codePoint % 0x400 + 0xdc00;
      codeUnits.push(highSurrogate, lowSurrogate);
    }
    if (index + 1 === length || codeUnits.length > MAX_SIZE) {
      result += String.fromCharCode.apply(null, codeUnits);
      codeUnits.length = 0;
    }
  }
  return result;
};
exports["default"] = _default;
});

var getData_1 = getData;
var getEmojiDataFromNative_1 = getEmojiDataFromNative;
var getSanitizedData_1 = getSanitizedData;
var uniq_1 = uniq;
var intersect_1 = intersect;
var deepMerge_1 = deepMerge;
var unifiedToNative_1 = unifiedToNative;
var measureScrollbar_1 = measureScrollbar;
var throttleIdleTask_1 = throttleIdleTask;
var _typeof2 = interopRequireDefault(_typeof_1);

var _stringFromCodePoint = interopRequireDefault(stringFromCodePoint);
var COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
var SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];
function unifiedToNative(unified) {
  var unicodes = unified.split('-'),
    codePoints = unicodes.map(function (u) {
      return "0x".concat(u);
    });
  return _stringFromCodePoint["default"].apply(null, codePoints);
}
function sanitize(emoji) {
  var name = emoji.name,
    short_names = emoji.short_names,
    skin_tone = emoji.skin_tone,
    skin_variations = emoji.skin_variations,
    emoticons = emoji.emoticons,
    unified = emoji.unified,
    custom = emoji.custom,
    customCategory = emoji.customCategory,
    imageUrl = emoji.imageUrl,
    id = emoji.id || short_names[0],
    colons = ":".concat(id, ":");
  if (custom) {
    return {
      id: id,
      name: name,
      short_names: short_names,
      colons: colons,
      emoticons: emoticons,
      custom: custom,
      customCategory: customCategory,
      imageUrl: imageUrl
    };
  }
  if (skin_tone) {
    colons += ":skin-tone-".concat(skin_tone, ":");
  }
  return {
    id: id,
    name: name,
    short_names: short_names,
    colons: colons,
    emoticons: emoticons,
    unified: unified.toLowerCase(),
    skin: skin_tone || (skin_variations ? 1 : null),
    "native": unifiedToNative(unified)
  };
}
function getSanitizedData() {
  return sanitize(getData.apply(void 0, arguments));
}
function getData(emoji, skin, set, data$1) {
  var emojiData = {};
  if (typeof emoji == 'string') {
    var matches = emoji.match(COLONS_REGEX);
    if (matches) {
      emoji = matches[1];
      if (matches[2]) {
        skin = parseInt(matches[2], 10);
      }
    }
    if (data$1.aliases.hasOwnProperty(emoji)) {
      emoji = data$1.aliases[emoji];
    }
    if (data$1.emojis.hasOwnProperty(emoji)) {
      emojiData = data$1.emojis[emoji];
    } else {
      return null;
    }
  } else if (emoji.id) {
    if (data$1.aliases.hasOwnProperty(emoji.id)) {
      emoji.id = data$1.aliases[emoji.id];
    }
    if (data$1.emojis.hasOwnProperty(emoji.id)) {
      emojiData = data$1.emojis[emoji.id];
      skin || (skin = emoji.skin);
    }
  }
  if (!Object.keys(emojiData).length) {
    emojiData = emoji;
    emojiData.custom = true;
    if (!emojiData.search) {
      emojiData.search = (0, data.buildSearch)(emoji);
    }
  }
  emojiData.emoticons || (emojiData.emoticons = []);
  emojiData.variations || (emojiData.variations = []);
  if (emojiData.skin_variations && skin > 1) {
    emojiData = JSON.parse(JSON.stringify(emojiData));
    var skinKey = SKINS[skin - 1],
      variationData = emojiData.skin_variations[skinKey];
    if (variationData) {
      if (!variationData.variations && emojiData.variations) {
        delete emojiData.variations;
      }
      if (set && (variationData["has_img_".concat(set)] == undefined || variationData["has_img_".concat(set)]) || !set) {
        emojiData.skin_tone = skin;
        for (var k in variationData) {
          var v = variationData[k];
          emojiData[k] = v;
        }
      }
    }
  }
  if (emojiData.variations && emojiData.variations.length) {
    emojiData = JSON.parse(JSON.stringify(emojiData));
    emojiData.unified = emojiData.variations.shift();
  }
  return emojiData;
}
function getEmojiDataFromNative(nativeString, set, data$1) {
  if (data$1.compressed) {
    (0, data.uncompress)(data$1);
  }
  var skinTones = ['🏻', '🏼', '🏽', '🏾', '🏿'];
  var skinCodes = ['1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];
  var skin;
  var skinCode;
  var baseNativeString = nativeString;
  skinTones.forEach(function (skinTone, skinToneIndex) {
    if (nativeString.indexOf(skinTone) > 0) {
      skin = skinToneIndex + 2;
      skinCode = skinCodes[skinToneIndex];
    }
  });
  var emojiData;
  for (var id in data$1.emojis) {
    var emoji = data$1.emojis[id];
    var emojiUnified = emoji.unified;
    if (emoji.variations && emoji.variations.length) {
      emojiUnified = emoji.variations.shift();
    }
    if (skin && emoji.skin_variations && emoji.skin_variations[skinCode]) {
      emojiUnified = emoji.skin_variations[skinCode].unified;
    }
    if (unifiedToNative(emojiUnified) === baseNativeString) emojiData = emoji;
  }
  if (!emojiData) {
    return null;
  }
  emojiData.id = emojiData.short_names[0];
  return getSanitizedData(emojiData, skin, set, data$1);
}
function uniq(arr) {
  return arr.reduce(function (acc, item) {
    if (acc.indexOf(item) === -1) {
      acc.push(item);
    }
    return acc;
  }, []);
}
function intersect(a, b) {
  var uniqA = uniq(a);
  var uniqB = uniq(b);
  return uniqA.filter(function (item) {
    return uniqB.indexOf(item) >= 0;
  });
}
function deepMerge(a, b) {
  var o = {};
  for (var key in a) {
    var originalValue = a[key],
      value = originalValue;
    if (b.hasOwnProperty(key)) {
      value = b[key];
    }
    if ((0, _typeof2["default"])(value) === 'object') {
      value = deepMerge(originalValue, value);
    }
    o[key] = value;
  }
  return o;
} // https://github.com/sonicdoe/measure-scrollbar

function measureScrollbar() {
  if (typeof document == 'undefined') return 0;
  var div = document.createElement('div');
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.overflow = 'scroll';
  div.style.position = 'absolute';
  div.style.top = '-9999px';
  document.body.appendChild(div);
  var scrollbarWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollbarWidth;
} // Use requestIdleCallback() if available, else fall back to setTimeout().
// Throttle so as not to run too frequently.

function throttleIdleTask(func) {
  var doIdleTask = typeof requestIdleCallback === 'function' ? requestIdleCallback : setTimeout;
  var running = false;
  return function throttled() {
    if (running) {
      return;
    }
    running = true;
    doIdleTask(function () {
      running = false;
      func();
    });
  };
}

var utils = /*#__PURE__*/Object.defineProperty({
	getData: getData_1,
	getEmojiDataFromNative: getEmojiDataFromNative_1,
	getSanitizedData: getSanitizedData_1,
	uniq: uniq_1,
	intersect: intersect_1,
	deepMerge: deepMerge_1,
	unifiedToNative: unifiedToNative_1,
	measureScrollbar: measureScrollbar_1,
	throttleIdleTask: throttleIdleTask_1
}, '__esModule', {value: true});

var store = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var NAMESPACE = 'emoji-mart';
var isLocalStorageSupported = typeof window !== 'undefined' && 'localStorage' in window;
var getter;
var setter;
function setHandlers(handlers) {
  handlers || (handlers = {});
  getter = handlers.getter;
  setter = handlers.setter;
}
function setNamespace(namespace) {
  NAMESPACE = namespace;
}
function update(state) {
  for (var key in state) {
    var value = state[key];
    set(key, value);
  }
}
function set(key, value) {
  if (setter) {
    setter(key, value);
  } else {
    if (!isLocalStorageSupported) return;
    try {
      window.localStorage["".concat(NAMESPACE, ".").concat(key)] = JSON.stringify(value);
    } catch (e) {}
  }
}
function get(key) {
  if (getter) {
    return getter(key);
  } else {
    if (!isLocalStorageSupported) return;
    try {
      var value = window.localStorage["".concat(NAMESPACE, ".").concat(key)];
      if (value) {
        return JSON.parse(value);
      }
    } catch (e) {
      return;
    }
  }
}
var _default = {
  update: update,
  set: set,
  get: get,
  setNamespace: setNamespace,
  setHandlers: setHandlers
};
exports["default"] = _default;
});

var nimbleEmojiIndex = createCommonjsModule(function (module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = interopRequireDefault(classCallCheck);
var _createClass2 = interopRequireDefault(createClass);


var _store = interopRequireDefault(store);
var NimbleEmojiIndex = /*#__PURE__*/
function () {
  function NimbleEmojiIndex(data$1, set) {
    (0, _classCallCheck2["default"])(this, NimbleEmojiIndex);
    if (data$1.compressed) {
      (0, data.uncompress)(data$1);
    }
    this.data = data$1 || {};
    this.set = set || null;
    this.originalPool = {};
    this.index = {};
    this.emojis = {};
    this.emoticons = {};
    this.customEmojisList = [];
    this.buildIndex();
  }
  (0, _createClass2["default"])(NimbleEmojiIndex, [{
    key: "buildIndex",
    value: function buildIndex() {
      var _this = this;
      var _loop = function _loop(emoji) {
        var emojiData = _this.data.emojis[emoji],
          short_names = emojiData.short_names,
          emoticons = emojiData.emoticons,
          skin_variations = emojiData.skin_variations,
          id = short_names[0];
        if (emoticons) {
          emoticons.forEach(function (emoticon) {
            if (_this.emoticons[emoticon]) {
              return;
            }
            _this.emoticons[emoticon] = id;
          });
        } // If skin variations include them

        if (skin_variations) {
          _this.emojis[id] = {};
          for (var skinTone = 1; skinTone <= 6; skinTone++) {
            _this.emojis[id][skinTone] = (0, utils.getSanitizedData)({
              id: id,
              skin: skinTone
            }, skinTone, _this.set, _this.data);
          }
        } else {
          _this.emojis[id] = (0, utils.getSanitizedData)(id, null, _this.set, _this.data);
        }
        _this.originalPool[id] = emojiData;
      };
      for (var emoji in this.data.emojis) {
        _loop(emoji);
      }
    }
  }, {
    key: "clearCustomEmojis",
    value: function clearCustomEmojis(pool) {
      var _this2 = this;
      this.customEmojisList.forEach(function (emoji) {
        var emojiId = emoji.id || emoji.short_names[0];
        delete pool[emojiId];
        delete _this2.emojis[emojiId];
      });
    }
  }, {
    key: "addCustomToPool",
    value: function addCustomToPool(custom, pool) {
      var _this3 = this;
      if (this.customEmojisList.length) this.clearCustomEmojis(pool);
      custom.forEach(function (emoji) {
        var emojiId = emoji.id || emoji.short_names[0];
        if (emojiId && !pool[emojiId]) {
          pool[emojiId] = (0, utils.getData)(emoji, null, null, _this3.data);
          _this3.emojis[emojiId] = (0, utils.getSanitizedData)(emoji, null, null, _this3.data);
        }
      });
      this.customEmojisList = custom;
      this.index = {};
    }
  }, {
    key: "search",
    value: function search(value) {
      var _this4 = this;
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        emojisToShowFilter = _ref.emojisToShowFilter,
        maxResults = _ref.maxResults,
        include = _ref.include,
        exclude = _ref.exclude,
        _ref$custom = _ref.custom,
        custom = _ref$custom === void 0 ? [] : _ref$custom;
      if (this.customEmojisList != custom) this.addCustomToPool(custom, this.originalPool);
      var skinTone = _store["default"].get('skin') || 1;
      maxResults || (maxResults = 75);
      include || (include = []);
      exclude || (exclude = []);
      var results = null,
        pool = this.originalPool;
      if (value.length) {
        if (value == '-' || value == '-1') {
          return [this.emojis['-1'][skinTone]];
        }
        var values = value.toLowerCase().split(/[\s|,|\-|_]+/),
          allResults = [];
        if (values.length > 2) {
          values = [values[0], values[1]];
        }
        if (include.length || exclude.length) {
          pool = {};
          this.data.categories.forEach(function (category) {
            var isIncluded = include && include.length ? include.indexOf(category.id) > -1 : true;
            var isExcluded = exclude && exclude.length ? exclude.indexOf(category.id) > -1 : false;
            if (!isIncluded || isExcluded) {
              return;
            }
            category.emojis.forEach(function (emojiId) {
              return pool[emojiId] = _this4.data.emojis[emojiId];
            });
          });
          if (custom.length) {
            var customIsIncluded = include && include.length ? include.indexOf('custom') > -1 : true;
            var customIsExcluded = exclude && exclude.length ? exclude.indexOf('custom') > -1 : false;
            if (customIsIncluded && !customIsExcluded) {
              this.addCustomToPool(custom, pool);
            }
          }
        }
        allResults = values.map(function (value) {
          var aPool = pool,
            aIndex = _this4.index,
            length = 0;
          for (var charIndex = 0; charIndex < value.length; charIndex++) {
            var _char = value[charIndex];
            length++;
            aIndex[_char] || (aIndex[_char] = {});
            aIndex = aIndex[_char];
            if (!aIndex.results) {
              (function () {
                var scores = {};
                aIndex.results = [];
                aIndex.pool = {};
                for (var id in aPool) {
                  var emoji = aPool[id],
                    search = emoji.search,
                    sub = value.substr(0, length),
                    subIndex = search.indexOf(sub);
                  if (subIndex != -1) {
                    var score = subIndex + 1;
                    if (sub == id) score = 0;
                    if (_this4.emojis[id] && _this4.emojis[id][skinTone]) {
                      aIndex.results.push(_this4.emojis[id][skinTone]);
                    } else {
                      aIndex.results.push(_this4.emojis[id]);
                    }
                    aIndex.pool[id] = emoji;
                    scores[id] = score;
                  }
                }
                aIndex.results.sort(function (a, b) {
                  var aScore = scores[a.id],
                    bScore = scores[b.id];
                  if (aScore == bScore) {
                    return a.id.localeCompare(b.id);
                  } else {
                    return aScore - bScore;
                  }
                });
              })();
            }
            aPool = aIndex.pool;
          }
          return aIndex.results;
        }).filter(function (a) {
          return a;
        });
        if (allResults.length > 1) {
          results = utils.intersect.apply(null, allResults);
        } else if (allResults.length) {
          results = allResults[0];
        } else {
          results = [];
        }
      }
      if (results) {
        if (emojisToShowFilter) {
          results = results.filter(function (result) {
            return emojisToShowFilter(pool[result.id]);
          });
        }
        if (results && results.length > maxResults) {
          results = results.slice(0, maxResults);
        }
      }
      return results;
    }
  }]);
  return NimbleEmojiIndex;
}();
exports["default"] = NimbleEmojiIndex;
});

var emojiIndex_1 = createCommonjsModule(function (module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _all = interopRequireDefault(require$$2);
var _nimbleEmojiIndex = interopRequireDefault(nimbleEmojiIndex);
var emojiIndex = new _nimbleEmojiIndex["default"](_all["default"]);
var emojis = emojiIndex.emojis,
  emoticons = emojiIndex.emoticons;
function search() {
  return emojiIndex.search.apply(emojiIndex, arguments);
}
var _default = {
  search: search,
  emojis: emojis,
  emoticons: emoticons
};
exports["default"] = _default;
});

var frequently_1 = createCommonjsModule(function (module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _store = interopRequireDefault(store);
var DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart', 'poop'];
var frequently, initialized;
var defaults = {};
function init() {
  initialized = true;
  frequently = _store["default"].get('frequently');
}
function add(emoji) {
  if (!initialized) init();
  var id = emoji.id;
  frequently || (frequently = defaults);
  frequently[id] || (frequently[id] = 0);
  frequently[id] += 1;
  _store["default"].set('last', id);
  _store["default"].set('frequently', frequently);
}
function get(perLine) {
  if (!initialized) init();
  if (!frequently) {
    defaults = {};
    var result = [];
    for (var i = 0; i < perLine; i++) {
      defaults[DEFAULTS[i]] = perLine - i;
      result.push(DEFAULTS[i]);
    }
    return result;
  }
  var quantity = perLine * 4;
  var frequentlyKeys = [];
  for (var key in frequently) {
    if (frequently.hasOwnProperty(key)) {
      frequentlyKeys.push(key);
    }
  }
  var sorted = frequentlyKeys.sort(function (a, b) {
    return frequently[a] - frequently[b];
  }).reverse();
  var sliced = sorted.slice(0, quantity);
  var last = _store["default"].get('last');
  if (last && sliced.indexOf(last) == -1) {
    sliced.pop();
    sliced.push(last);
  }
  return sliced;
}
var _default = {
  add: add,
  get: get
};
exports["default"] = _default;
});

var defineProperty = createCommonjsModule(function (module) {
function _defineProperty(obj, key, value) {
  key = toPropertyKey_1(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var assertThisInitialized = createCommonjsModule(function (module) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var possibleConstructorReturn = createCommonjsModule(function (module) {
var _typeof = _typeof_1["default"];

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var inherits = createCommonjsModule(function (module) {
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var interopRequireWildcard = createCommonjsModule(function (module) {
var _typeof = _typeof_1["default"];
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
    "default": e
  };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = {
      __proto__: null
    },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
    var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
    i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
  }
  return n["default"] = e, t && t.set(e, n), n;
}
module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var reactIs_development = createCommonjsModule(function (module, exports) {

{
  (function () {

    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' ||
      // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }
    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;
        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;
            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;
              default:
                var $$typeofType = type && type.$$typeof;
                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;
                  default:
                    return $$typeof;
                }
            }
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }
      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode

    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }
    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

{
  module.exports = reactIs_development;
}
});

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function () {};
{
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = has$1;
  printWarning$1 = function (text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {/**/}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning$1('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function () {
  {
    loggedTypeFailures = {};
  }
};
var checkPropTypes_1 = checkPropTypes;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */






var printWarning = function () {};
{
  printWarning = function (text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
function emptyFunctionThatReturnsNull() {
  return null;
}
var factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data : {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;
  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;
      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if (typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }
  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
          expectedType: expectedType
        });
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }
  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }
      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }
  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') ;
      return emptyFunctionThatReturnsNull;
    }
    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }
    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has$1(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }
  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
  }
  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has$1(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }
        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }
        return true;
      default:
        return false;
    }
  }
  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }
    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }
  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var propTypes = createCommonjsModule(function (module) {
{
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
}
});

var svgs = createCommonjsModule(function (module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = exports.categories = void 0;
var _react = interopRequireDefault(react);
var categories = {
  activity: function activity() {
    return _react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, _react["default"].createElement("path", {
      d: "M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"
    }));
  },
  custom: function custom() {
    return _react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, _react["default"].createElement("g", {
      transform: "translate(2.000000, 1.000000)"
    }, _react["default"].createElement("rect", {
      id: "Rectangle",
      x: "8",
      y: "0",
      width: "3",
      height: "21",
      rx: "1.5"
    }), _react["default"].createElement("rect", {
      id: "Rectangle",
      transform: "translate(9.843, 10.549) rotate(60) translate(-9.843, -10.549) ",
      x: "8.343",
      y: "0.049",
      width: "3",
      height: "21",
      rx: "1.5"
    }), _react["default"].createElement("rect", {
      id: "Rectangle",
      transform: "translate(9.843, 10.549) rotate(-60) translate(-9.843, -10.549) ",
      x: "8.343",
      y: "0.049",
      width: "3",
      height: "21",
      rx: "1.5"
    })));
  },
  flags: function flags() {
    return _react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, _react["default"].createElement("path", {
      d: "M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"
    }));
  },
  foods: function foods() {
    return _react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, _react["default"].createElement("path", {
      d: "M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"
    }));
  },
  nature: function nature() {
    return _react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, _react["default"].createElement("path", {
      d: "M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"
    }), _react["default"].createElement("path", {
      d: "M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"
    }));
  },
  objects: function objects() {
    return _react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, _react["default"].createElement("path", {
      d: "M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"
    }), _react["default"].createElement("path", {
      d: "M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"
    }));
  },
  people: function people() {
    return _react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, _react["default"].createElement("path", {
      d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
    }), _react["default"].createElement("path", {
      d: "M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"
    }));
  },
  places: function places() {
    return _react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, _react["default"].createElement("path", {
      d: "M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"
    }), _react["default"].createElement("path", {
      d: "M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"
    }));
  },
  recent: function recent() {
    return _react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, _react["default"].createElement("path", {
      d: "M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"
    }), _react["default"].createElement("path", {
      d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
    }));
  },
  symbols: function symbols() {
    return _react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, _react["default"].createElement("path", {
      d: "M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"
    }));
  }
};
exports.categories = categories;
var search = {
  search: function search() {
    return _react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "13",
      height: "13",
      viewBox: "0 0 20 20",
      opacity: "0.5"
    }, _react["default"].createElement("path", {
      d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
    }));
  },
  "delete": function _delete() {
    return _react["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "13",
      height: "13",
      viewBox: "0 0 20 20",
      opacity: "0.5"
    }, _react["default"].createElement("path", {
      d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
    }));
  }
};
exports.search = search;
});

var sharedProps = createCommonjsModule(function (module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PickerPropTypes = exports.EmojiPropTypes = void 0;
var _propTypes = interopRequireDefault(propTypes);
var EmojiPropTypes = {
  data: _propTypes["default"].object.isRequired,
  onOver: _propTypes["default"].func,
  onLeave: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  fallback: _propTypes["default"].func,
  backgroundImageFn: _propTypes["default"].func,
  "native": _propTypes["default"].bool,
  forceSize: _propTypes["default"].bool,
  tooltip: _propTypes["default"].bool,
  useButton: _propTypes["default"].bool,
  skin: _propTypes["default"].oneOf([1, 2, 3, 4, 5, 6]),
  sheetSize: _propTypes["default"].oneOf([16, 20, 32, 64]),
  sheetColumns: _propTypes["default"].number,
  sheetRows: _propTypes["default"].number,
  set: _propTypes["default"].oneOf(['apple', 'google', 'twitter', 'facebook']),
  size: _propTypes["default"].number.isRequired,
  emoji: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired
};
exports.EmojiPropTypes = EmojiPropTypes;
var PickerPropTypes = {
  onClick: _propTypes["default"].func,
  onSelect: _propTypes["default"].func,
  onSkinChange: _propTypes["default"].func,
  perLine: _propTypes["default"].number,
  emojiSize: _propTypes["default"].number,
  i18n: _propTypes["default"].object,
  style: _propTypes["default"].object,
  title: _propTypes["default"].string,
  emoji: _propTypes["default"].string,
  color: _propTypes["default"].string,
  set: EmojiPropTypes.set,
  skin: EmojiPropTypes.skin,
  "native": _propTypes["default"].bool,
  backgroundImageFn: EmojiPropTypes.backgroundImageFn,
  sheetSize: EmojiPropTypes.sheetSize,
  emojisToShowFilter: _propTypes["default"].func,
  showPreview: _propTypes["default"].bool,
  showSkinTones: _propTypes["default"].bool,
  emojiTooltip: EmojiPropTypes.tooltip,
  useButton: EmojiPropTypes.useButton,
  theme: _propTypes["default"].oneOf(['auto', 'light', 'dark']),
  include: _propTypes["default"].arrayOf(_propTypes["default"].string),
  exclude: _propTypes["default"].arrayOf(_propTypes["default"].string),
  recent: _propTypes["default"].arrayOf(_propTypes["default"].string),
  autoFocus: _propTypes["default"].bool,
  enableFrequentEmojiSort: _propTypes["default"].bool,
  custom: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string.isRequired,
    short_names: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
    emoticons: _propTypes["default"].arrayOf(_propTypes["default"].string),
    keywords: _propTypes["default"].arrayOf(_propTypes["default"].string),
    imageUrl: _propTypes["default"].string,
    spriteUrl: _propTypes["default"].string,
    sheet_x: _propTypes["default"].number,
    sheet_y: _propTypes["default"].number,
    size: _propTypes["default"].number,
    sheetColumns: _propTypes["default"].number,
    sheetRows: _propTypes["default"].number
  })),
  skinEmoji: _propTypes["default"].string,
  notFound: _propTypes["default"].func,
  notFoundEmoji: _propTypes["default"].string,
  icons: _propTypes["default"].object
};
exports.PickerPropTypes = PickerPropTypes;
});

var anchors = createCommonjsModule(function (module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = interopRequireDefault(classCallCheck);
var _createClass2 = interopRequireDefault(createClass);
var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);
var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf);
var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized);
var _inherits2 = interopRequireDefault(inherits);
var _react = interopRequireDefault(react);
var _propTypes = interopRequireDefault(propTypes);
var Anchors = /*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Anchors, _React$PureComponent);
  function Anchors(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Anchors);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Anchors).call(this, props));
    var defaultCategory = props.categories.filter(function (category) {
      return category.first;
    })[0];
    _this.state = {
      selected: defaultCategory.name
    };
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setButtonsRef = _this.setButtonsRef.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }
  (0, _createClass2["default"])(Anchors, [{
    key: "handleClick",
    value: function handleClick(e) {
      var index = e.currentTarget.getAttribute('data-index');
      var _this$props = this.props,
        categories = _this$props.categories,
        onAnchorClick = _this$props.onAnchorClick;
      onAnchorClick(categories[index], index);
    }
  }, {
    key: "setButtonsRef",
    value: function setButtonsRef(c) {
      this.buttons = c;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        categories = _this$props2.categories,
        color = _this$props2.color,
        i18n = _this$props2.i18n,
        icons = _this$props2.icons,
        selected = this.state.selected;
      return _react["default"].createElement("nav", {
        className: "emoji-mart-anchors",
        "aria-label": i18n.categorieslabel,
        ref: this.setButtonsRef
      }, categories.map(function (category, i) {
        var id = category.id,
          name = category.name,
          anchor = category.anchor,
          isSelected = name == selected;
        if (anchor === false) {
          return null;
        }
        var iconId = id.startsWith('custom-') ? 'custom' : id;
        return _react["default"].createElement("button", {
          key: id,
          "aria-label": i18n.categories[iconId],
          title: i18n.categories[iconId],
          "data-index": i,
          type: 'button',
          onClick: _this2.handleClick,
          className: "emoji-mart-anchor ".concat(isSelected ? 'emoji-mart-anchor-selected' : ''),
          style: {
            color: isSelected ? color : null
          }
        }, _react["default"].createElement("div", {
          className: "emoji-mart-anchor-icon"
        }, icons.categories[iconId]()), _react["default"].createElement("span", {
          className: "emoji-mart-anchor-bar",
          style: {
            backgroundColor: color
          }
        }));
      }));
    }
  }]);
  return Anchors;
}(_react["default"].PureComponent);
exports["default"] = Anchors;
Anchors.propTypes
/* remove-proptypes */ = {
  categories: _propTypes["default"].array,
  onAnchorClick: _propTypes["default"].func,
  icons: _propTypes["default"].object
};
Anchors.defaultProps = {
  categories: [],
  onAnchorClick: function onAnchorClick() {},
  icons: {}
};
});

var sharedDefaultProps = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmojiDefaultProps = exports.PickerDefaultProps = void 0;
var EmojiDefaultProps = {
  skin: 1,
  set: 'apple',
  sheetSize: 64,
  sheetColumns: 57,
  sheetRows: 57,
  "native": false,
  forceSize: false,
  tooltip: false,
  useButton: true,
  backgroundImageFn: function backgroundImageFn(set, sheetSize) {
    return "https://unpkg.com/emoji-datasource-".concat(set, "@").concat("5.0.1", "/img/").concat(set, "/sheets-256/").concat(sheetSize, ".png");
  }
};
exports.EmojiDefaultProps = EmojiDefaultProps;
var PickerDefaultProps = {
  onClick: function onClick() {},
  onSelect: function onSelect() {},
  onSkinChange: function onSkinChange() {},
  emojiSize: 24,
  perLine: 9,
  i18n: {},
  style: {},
  title: 'Emoji Mart™',
  emoji: 'department_store',
  color: '#ae65c5',
  set: EmojiDefaultProps.set,
  theme: 'light',
  skin: null,
  defaultSkin: EmojiDefaultProps.skin,
  "native": EmojiDefaultProps["native"],
  sheetSize: EmojiDefaultProps.sheetSize,
  backgroundImageFn: EmojiDefaultProps.backgroundImageFn,
  emojisToShowFilter: null,
  showPreview: true,
  showSkinTones: true,
  emojiTooltip: EmojiDefaultProps.tooltip,
  useButton: EmojiDefaultProps.useButton,
  autoFocus: false,
  enableFrequentEmojiSort: false,
  custom: [],
  skinEmoji: '',
  notFound: function notFound() {},
  notFoundEmoji: 'sleuth_or_spy',
  icons: {}
};
exports.PickerDefaultProps = PickerDefaultProps;
});

var nimbleEmoji = createCommonjsModule(function (module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = interopRequireDefault(_extends_1);
var _defineProperty2 = interopRequireDefault(defineProperty);
var _react = interopRequireDefault(react);
var _propTypes = interopRequireDefault(propTypes);




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0, _defineProperty2["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var _getData = function _getData(props) {
  var emoji = props.emoji,
    skin = props.skin,
    set = props.set,
    data = props.data;
  return (0, utils.getData)(emoji, skin, set, data);
};
var _getPosition = function _getPosition(props) {
  var _getData2 = _getData(props),
    sheet_x = _getData2.sheet_x,
    sheet_y = _getData2.sheet_y,
    multiplyX = 100 / (props.sheetColumns - 1),
    multiplyY = 100 / (props.sheetRows - 1);
  return "".concat(multiplyX * sheet_x, "% ").concat(multiplyY * sheet_y, "%");
};
var _getSanitizedData = function _getSanitizedData(props) {
  var emoji = props.emoji,
    skin = props.skin,
    set = props.set,
    data = props.data;
  return (0, utils.getSanitizedData)(emoji, skin, set, data);
};
var _handleClick = function _handleClick(e, props) {
  if (!props.onClick) {
    return;
  }
  var onClick = props.onClick,
    emoji = _getSanitizedData(props);
  onClick(emoji, e);
};
var _handleOver = function _handleOver(e, props) {
  if (!props.onOver) {
    return;
  }
  var onOver = props.onOver,
    emoji = _getSanitizedData(props);
  onOver(emoji, e);
};
var _handleLeave = function _handleLeave(e, props) {
  if (!props.onLeave) {
    return;
  }
  var onLeave = props.onLeave,
    emoji = _getSanitizedData(props);
  onLeave(emoji, e);
};
var _handleKeyDown = function _handleKeyDown(e, props) {
  e.preventDefault();
  if (!props.onKeyDown) {
    return;
  }
  var onKeyDown = props.onKeyDown,
    emoji = _getSanitizedData(props);
  onKeyDown(e, emoji);
};
var _isNumeric = function _isNumeric(value) {
  return !isNaN(value - parseFloat(value));
};
var _convertStyleToCSS = function _convertStyleToCSS(style) {
  var div = document.createElement('div');
  for (var key in style) {
    var value = style[key];
    if (_isNumeric(value)) {
      value += 'px';
    }
    div.style[key] = value;
  }
  return div.getAttribute('style');
};
var NimbleEmoji = function NimbleEmoji(props) {
  if (props.data.compressed) {
    (0, data.uncompress)(props.data);
  }
  for (var k in NimbleEmoji.defaultProps) {
    if (props[k] == undefined && NimbleEmoji.defaultProps[k] != undefined) {
      props[k] = NimbleEmoji.defaultProps[k];
    }
  }
  var data$1 = _getData(props);
  if (!data$1) {
    if (props.fallback) {
      return props.fallback(null, props);
    } else {
      return null;
    }
  }
  var unified = data$1.unified,
    custom = data$1.custom,
    short_names = data$1.short_names,
    imageUrl = data$1.imageUrl,
    style = {},
    children = props.children,
    className = 'emoji-mart-emoji',
    nativeEmoji = unified && (0, utils.unifiedToNative)(unified),
    label = [nativeEmoji].concat(short_names).filter(Boolean).join(', '),
    title = null;
  if (!unified && !custom) {
    if (props.fallback) {
      return props.fallback(data$1, props);
    } else {
      return null;
    }
  }
  if (props.tooltip) {
    title = short_names[0];
  }
  if (props["native"] && unified) {
    className += ' emoji-mart-emoji-native';
    style = {
      fontSize: props.size
    };
    children = nativeEmoji;
    if (props.forceSize) {
      style.display = 'inline-block';
      style.width = props.size;
      style.height = props.size;
      style.wordBreak = 'keep-all';
    }
  } else if (custom) {
    className += ' emoji-mart-emoji-custom';
    style = {
      width: props.size,
      height: props.size,
      display: 'inline-block'
    };
    if (data$1.spriteUrl) {
      style = _objectSpread({}, style, {
        backgroundImage: "url(".concat(data$1.spriteUrl, ")"),
        backgroundSize: "".concat(100 * props.sheetColumns, "% ").concat(100 * props.sheetRows, "%"),
        backgroundPosition: _getPosition(props)
      });
    } else {
      style = _objectSpread({}, style, {
        backgroundImage: "url(".concat(imageUrl, ")"),
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      });
    }
  } else {
    var setHasEmoji = data$1["has_img_".concat(props.set)] == undefined || data$1["has_img_".concat(props.set)];
    if (!setHasEmoji) {
      if (props.fallback) {
        return props.fallback(data$1, props);
      } else {
        return null;
      }
    } else {
      style = {
        width: props.size,
        height: props.size,
        display: 'inline-block',
        backgroundImage: "url(".concat(props.backgroundImageFn(props.set, props.sheetSize), ")"),
        backgroundSize: "".concat(100 * props.sheetColumns, "% ").concat(100 * props.sheetRows, "%"),
        backgroundPosition: _getPosition(props)
      };
    }
  }
  var Tag = {
    name: 'span',
    props: {}
  };
  if (props.onClick && props.useButton) {
    Tag.name = 'button';
    Tag.props = {
      type: 'button',
      tabIndex: '-1'
    };
  }
  if (props.html) {
    style = _convertStyleToCSS(style);
    return "<".concat(Tag.name, " style='").concat(style, "' aria-label='").concat(label, "' ").concat(title ? "title='".concat(title, "'") : '', " class='").concat(className, "'>").concat(children || '', "</").concat(Tag.name, ">");
  } else {
    return _react["default"].createElement(Tag.name, (0, _extends2["default"])({
      id: "emoji-mart-".concat(props.emoji),
      onKeyDown: function onKeyDown(e) {
        return _handleKeyDown(e, props);
      },
      onClick: function onClick(e) {
        return _handleClick(e, props);
      },
      onMouseEnter: function onMouseEnter(e) {
        return _handleOver(e, props);
      },
      onMouseLeave: function onMouseLeave(e) {
        return _handleLeave(e, props);
      },
      "aria-label": label,
      title: title,
      className: className
    }, Tag.props), _react["default"].createElement("span", {
      style: style
    }, children));
  }
};
NimbleEmoji.propTypes
/* remove-proptypes */ = _objectSpread({}, sharedProps.EmojiPropTypes, {
  data: _propTypes["default"].object.isRequired
});
NimbleEmoji.defaultProps = sharedDefaultProps.EmojiDefaultProps;
var _default = NimbleEmoji;
exports["default"] = _default;
});

var notFound = createCommonjsModule(function (module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = interopRequireDefault(defineProperty);
var _classCallCheck2 = interopRequireDefault(classCallCheck);
var _createClass2 = interopRequireDefault(createClass);
var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);
var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf);
    });
  }
}
}