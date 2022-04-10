const fontNames = [
    "icon-plus",
    "icon-plus1",
    "icon-plus2",
    "icon-plus3",
    "icon-plus4",
    "icon-plus5",
    "icon-plus6",
    "icon-plus7",
    "icon-plus8",
    "icon-plus9",
    "icon-px",
    "icon-abacus",
    "icon-accessible-icon-alt",
    "icon-adjust-alt",
    "icon-adjust-circle",
    "icon-adjust-half",
    "icon-adjust",
    "icon-adobe-alt",
    "icon-adobe",
    "icon-airplay",
    "icon-align-alt",
    "icon-align-center-alt",
    "icon-align-center-h",
    "icon-align-center-justify",
    "icon-align-center-v",
    "icon-align-center",
    "icon-align-justify",
    "icon-align-left-justify",
    "icon-align-left",
    "icon-align-letter-right",
    "icon-align-right-justify",
    "icon-align-right",
    "icon-align",
    "icon-amazon",
    "icon-ambulance",
    "icon-analysis",
    "icon-analytics",
    "icon-anchor",
    "icon-android-alt",
    "icon-android-phone-slash",
    "icon-android",
    "icon-angle-double-down",
    "icon-angle-double-left",
    "icon-angle-double-right",
    "icon-angle-double-up",
    "icon-angle-down",
    "icon-angle-left-b",
    "icon-angle-left",
    "icon-angle-right-b",
    "icon-angle-right",
    "icon-angle-up",
    "icon-angry",
    "icon-ankh",
    "icon-annoyed-alt",
    "icon-annoyed",
    "icon-apple-alt",
    "icon-apple",
    "icon-apps",
    "icon-archive-alt",
    "icon-archive",
    "icon-archway",
    "icon-arrow-break",
    "icon-arrow-circle-down",
    "icon-arrow-circle-left",
    "icon-arrow-circle-right",
    "icon-arrow-circle-up",
    "icon-arrow-compress-h",
    "icon-arrow-down-left",
    "icon-arrow-down-right",
    "icon-arrow-down",
    "icon-arrow-from-right",
    "icon-arrow-from-top",
    "icon-arrow-growth",
    "icon-arrow-left",
    "icon-arrow-random",
    "icon-arrow-resize-diagonal",
    "icon-arrow-right",
    "icon-arrow-to-bottom",
    "icon-arrow-to-right",
    "icon-arrow-up-left",
    "icon-arrow-up-right",
    "icon-arrow-up",
    "icon-arrow",
    "icon-arrows-h-alt",
    "icon-arrows-h",
    "icon-arrows-left-down",
    "icon-arrows-maximize",
    "icon-arrows-merge",
    "icon-arrows-resize-h",
    "icon-arrows-resize-v",
    "icon-arrows-resize",
    "icon-arrows-right-down",
    "icon-arrows-shrink-h",
    "icon-arrows-shrink-v",
    "icon-arrows-up-right",
    "icon-arrows-v-alt",
    "icon-arrows-v",
    "icon-assistive-listening-systems",
    "icon-asterisk",
    "icon-at",
    "icon-atom",
    "icon-auto-flash",
    "icon-award-alt",
    "icon-award",
    "icon-baby-carriage",
    "icon-backpack",
    "icon-backspace",
    "icon-backward",
    "icon-bag-alt",
    "icon-bag-slash",
    "icon-bag",
    "icon-balance-scale",
    "icon-ban",
    "icon-band-aid",
    "icon-bars",
    "icon-baseball-ball",
    "icon-basketball-hoop",
    "icon-basketball",
    "icon-bath",
    "icon-battery-bolt",
    "icon-battery-empty",
    "icon-bed-double",
    "icon-bed",
    "icon-behance-alt",
    "icon-behance",
    "icon-bell-school",
    "icon-bell-slash",
    "icon-bell",
    "icon-bill",
    "icon-bing",
    "icon-bitcoin-alt",
    "icon-bitcoin-circle",
    "icon-bitcoin-sign",
    "icon-bitcoin",
    "icon-black-berry",
    "icon-blogger-alt",
    "icon-blogger",
    "icon-bluetooth-b",
    "icon-bold",
    "icon-bolt-alt",
    "icon-bolt-slash",
    "icon-bolt",
    "icon-book-alt",
    "icon-book-medical",
    "icon-book-open",
    "icon-book-reader",
    "icon-book",
    "icon-bookmark-full",
    "icon-bookmark",
    "icon-books",
    "icon-boombox",
    "icon-border-alt",
    "icon-border-bottom",
    "icon-border-clear",
    "icon-border-horizontal",
    "icon-border-inner",
    "icon-border-left",
    "icon-border-out",
    "icon-border-right",
    "icon-border-top",
    "icon-border-vertical",
    "icon-bowling-ball",
    "icon-box",
    "icon-brackets-curly",
    "icon-brain",
    "icon-briefcase-alt",
    "icon-briefcase",
    "icon-bright",
    "icon-brightness-empty",
    "icon-brightness-half",
    "icon-brightness-low",
    "icon-brightness-minus",
    "icon-brightness-plus",
    "icon-brightness",
    "icon-bring-bottom",
    "icon-bring-front",
    "icon-browser",
    "icon-brush-alt",
    "icon-bug",
    "icon-building",
    "icon-bullseye",
    "icon-bus-alt",
    "icon-bus-school",
    "icon-bus",
    "icon-calculator-alt",
    "icon-calculator",
    "icon-calendar-alt",
    "icon-calendar-slash",
    "icon-calender",
    "icon-calling",
    "icon-camera-change",
    "icon-camera-plus",
    "icon-camera-slash",
    "icon-camera",
    "icon-cancel",
    "icon-capsule",
    "icon-capture",
    "icon-car-sideview",
    "icon-car-slash",
    "icon-car-wash",
    "icon-car",
    "icon-card-atm",
    "icon-caret-right",
    "icon-cell",
    "icon-celsius",
    "icon-channel-add",
    "icon-channel",
    "icon-chart-bar-alt",
    "icon-chart-bar",
    "icon-chart-down",
    "icon-chart-growth-alt",
    "icon-chart-growth",
    "icon-chart-line",
    "icon-chart-pie-alt",
    "icon-chart-pie",
    "icon-chart",
    "icon-chat-bubble-user",
    "icon-chat-info",
    "icon-chat",
    "icon-check-circle",
    "icon-check-square",
    "icon-check",
    "icon-circle-layer",
    "icon-circle",
    "icon-circuit",
    "icon-clapper-board",
    "icon-clinic-medical",
    "icon-clipboard-alt",
    "icon-clipboard-blank",
    "icon-clipboard-notes",
    "icon-clipboard",
    "icon-clock-eight",
    "icon-clock-five",
    "icon-clock-nine",
    "icon-clock-seven",
    "icon-clock-ten",
    "icon-clock-three",
    "icon-clock-two",
    "icon-clock",
    "icon-closed-captioning-slash",
    "icon-closed-captioning",
    "icon-cloud-block",
    "icon-cloud-bookmark",
    "icon-cloud-check",
    "icon-cloud-computing",
    "icon-cloud-data-connection",
    "icon-cloud-database-tree",
    "icon-cloud-download",
    "icon-cloud-drizzle",
    "icon-cloud-exclamation",
    "icon-cloud-hail",
    "icon-cloud-heart",
    "icon-cloud-info",
    "icon-cloud-lock",
    "icon-cloud-meatball",
    "icon-cloud-moon-hail",
    "icon-cloud-moon-meatball",
    "icon-cloud-moon-rain",
    "icon-cloud-moon-showers",
    "icon-cloud-moon",
    "icon-cloud-question",
    "icon-cloud-rain-sun",
    "icon-cloud-rain",
    "icon-cloud-redo",
    "icon-cloud-share",
    "icon-cloud-shield",
    "icon-cloud-showers-alt",
    "icon-cloud-showers-heavy",
    "icon-cloud-showers",
    "icon-cloud-slash",
    "icon-cloud-sun-hail",
    "icon-cloud-sun-meatball",
    "icon-cloud-sun-rain-alt",
    "icon-cloud-sun-rain",
    "icon-cloud-sun-tear",
    "icon-cloud-sun",
    "icon-cloud-times",
    "icon-cloud-unlock",
    "icon-cloud-upload",
    "icon-cloud-wifi",
    "icon-cloud-wind",
    "icon-cloud",
    "icon-clouds",
    "icon-club",
    "icon-code-branch",
    "icon-coffee",
    "icon-cog",
    "icon-coins",
    "icon-columns",
    "icon-comment-add",
    "icon-comment-alt-block",
    "icon-comment-alt-chart-lines",
    "icon-comment-alt-check",
    "icon-comment-alt-dots",
    "icon-comment-alt-download",
    "icon-comment-alt-edit",
    "icon-comment-alt-exclamation",
    "icon-comment-alt-heart",
    "icon-comment-alt-image",
    "icon-comment-alt-info",
    "icon-comment-alt-lines",
    "icon-comment-alt-lock",
    "icon-comment-alt-medical",
    "icon-comment-alt-message",
    "icon-comment-alt-notes",
    "icon-comment-alt-plus",
    "icon-comment-alt-question",
    "icon-comment-alt-redo",
    "icon-comment-alt-search",
    "icon-comment-alt-share",
    "icon-comment-alt-shield",
    "icon-comment-alt-slash",
    "icon-comment-alt-upload",
    "icon-comment-alt-verify",
    "icon-comment-alt",
    "icon-comment-block",
    "icon-comment-chart-line",
    "icon-comment-check",
    "icon-comment-dots",
    "icon-comment-download",
    "icon-comment-edit",
    "icon-comment-exclamation",
    "icon-comment-heart",
    "icon-comment-image",
    "icon-comment-info-alt",
    "icon-comment-info",
    "icon-comment-lines",
    "icon-comment-lock",
    "icon-comment-medical",
    "icon-comment-message",
    "icon-comment-notes",
    "icon-comment-plus",
    "icon-comment-question",
    "icon-comment-redo",
    "icon-comment-search",
    "icon-comment-share",
    "icon-comment-shield",
    "icon-comment-slash",
    "icon-comment-upload",
    "icon-comment-verify",
    "icon-comment",
    "icon-comments-alt",
    "icon-comments",
    "icon-compact-disc",
    "icon-comparison",
    "icon-compass",
    "icon-compress-alt-left",
    "icon-compress-alt",
    "icon-compress-arrows",
    "icon-compress-lines",
    "icon-compress-point",
    "icon-compress-v",
    "icon-compress",
    "icon-confused",
    "icon-constructor",
    "icon-copy-alt",
    "icon-copy-landscape",
    "icon-copy",
    "icon-copyright",
    "icon-corner-down-left",
    "icon-corner-down-right-alt",
    "icon-corner-down-right",
    "icon-corner-left-down",
    "icon-corner-right-down",
    "icon-corner-up-left-alt",
    "icon-corner-up-left",
    "icon-corner-up-right-alt",
    "icon-corner-up-right",
    "icon-coronavirus",
    "icon-create-dashboard",
    "icon-creative-commons-pd",
    "icon-credit-card-search",
    "icon-credit-card",
    "icon-crockery",
    "icon-crop-alt-rotate-left",
    "icon-crop-alt-rotate-right",
    "icon-crop-alt",
    "icon-crosshair-alt",
    "icon-crosshair",
    "icon-crosshairs",
    "icon-css3-simple",
    "icon-cube",
    "icon-dashboard",
    "icon-data-sharing",
    "icon-database-alt",
    "icon-database",
    "icon-desert",
    "icon-desktop-alt-slash",
    "icon-desktop-alt",
    "icon-desktop-cloud-alt",
    "icon-desktop-slash",
    "icon-desktop",
    "icon-dialpad-alt",
    "icon-dialpad",
    "icon-diamond",
    "icon-diary-alt",
    "icon-diary",
    "icon-dice-five",
    "icon-dice-four",
    "icon-dice-one",
    "icon-dice-six",
    "icon-dice-three",
    "icon-dice-two",
    "icon-direction",
    "icon-directions",
    "icon-discord",
    "icon-dizzy-meh",
    "icon-dna",
    "icon-docker",
    "icon-document-info",
    "icon-document-layout-center",
    "icon-document-layout-left",
    "icon-document-layout-right",
    "icon-dollar-alt",
    "icon-dollar-sign-alt",
    "icon-dollar-sign",
    "icon-download-alt",
    "icon-draggabledots",
    "icon-dribbble",
    "icon-drill",
    "icon-dropbox",
    "icon-dumbbell",
    "icon-ear",
    "icon-edit-alt",
    "icon-edit",
    "icon-elipsis-double-v-alt",
    "icon-ellipsis-h",
    "icon-ellipsis-v",
    "icon-emoji",
    "icon-english-to-chinese",
    "icon-enter",
    "icon-envelope-add",
    "icon-envelope-alt",
    "icon-envelope-block",
    "icon-envelope-bookmark",
    "icon-envelope-check",
    "icon-envelope-download-alt",
    "icon-envelope-download",
    "icon-envelope-edit",
    "icon-envelope-exclamation",
    "icon-envelope-heart",
    "icon-envelope-info",
    "icon-envelope-lock",
    "icon-envelope-minus",
    "icon-envelope-open",
    "icon-envelope-question",
    "icon-envelope-receive",
    "icon-envelope-redo",
    "icon-envelope-search",
    "icon-envelope-send",
    "icon-envelope-share",
    "icon-envelope-shield",
    "icon-envelope-star",
    "icon-envelope-times",
    "icon-envelope-upload-alt",
    "icon-envelope-upload",
    "icon-envelope",
    "icon-envelopes",
    "icon-equal-circle",
    "icon-estate",
    "icon-euro-circle",
    "icon-euro",
    "icon-exchange-alt",
    "icon-exchange",
    "icon-exclamation-circle",
    "icon-exclamation-octagon",
    "icon-exclamation-triangle",
    "icon-exclamation",
    "icon-exclude",
    "icon-exit",
    "icon-expand-alt",
    "icon-expand-arrows-alt",
    "icon-expand-arrows",
    "icon-expand-from-corner",
    "icon-expand-left",
    "icon-expand-right",
    "icon-export",
    "icon-exposure-alt",
    "icon-exposure-increase",
    "icon-external-link-alt",
    "icon-eye-slash",
    "icon-eye",
    "icon-facebook-f",
    "icon-facebook-messenger-alt",
    "icon-facebook-messenger",
    "icon-facebook",
    "icon-fahrenheit",
    "icon-fast-mail-alt",
    "icon-fast-mail",
    "icon-favorite",
    "icon-feedback",
    "icon-fidget-spinner",
    "icon-file-alt",
    "icon-file-blank",
    "icon-file-block-alt",
    "icon-file-bookmark-alt",
    "icon-file-check-alt",
    "icon-file-check",
    "icon-file-contract-dollar",
    "icon-file-contract",
    "icon-file-copy-alt",
    "icon-file-download-alt",
    "icon-file-download",
    "icon-file-edit-alt",
    "icon-file-exclamation-alt",
    "icon-file-exclamation",
    "icon-file-export",
    "icon-file-graph",
    "icon-file-heart",
    "icon-file-import",
    "icon-file-info-alt",
    "icon-file-landscape-alt",
    "icon-file-landscape",
    "icon-file-lanscape-slash",
    "icon-file-lock-alt",
    "icon-file-medical-alt",
    "icon-file-medical",
    "icon-file-minus-alt",
    "icon-file-minus",
    "icon-file-network",
    "icon-file-plus-alt",
    "icon-file-plus",
    "icon-file-question-alt",
    "icon-file-question",
    "icon-file-redo-alt",
    "icon-file-search-alt",
    "icon-file-share-alt",
    "icon-file-shield-alt",
    "icon-file-slash",
    "icon-file-times-alt",
    "icon-file-times",
    "icon-file-upload-alt",
    "icon-file-upload",
    "icon-file",
    "icon-files-landscapes-alt",
    "icon-files-landscapes",
    "icon-film",
    "icon-filter-slash",
    "icon-filter",
    "icon-fire",
    "icon-flask-potion",
    "icon-flask",
    "icon-flip-h-alt",
    "icon-flip-h",
    "icon-flip-v-alt",
    "icon-flip-v",
    "icon-flower",
    "icon-focus-add",
    "icon-focus-target",
    "icon-focus",
    "icon-folder-check",
    "icon-folder-download",
    "icon-folder-exclamation",
    "icon-folder-heart",
    "icon-folder-info",
    "icon-folder-lock",
    "icon-folder-medical",
    "icon-folder-minus",
    "icon-folder-network",
    "icon-folder-open",
    "icon-folder-plus",
    "icon-folder-question",
    "icon-folder-slash",
    "icon-folder-times",
    "icon-folder-upload",
    "icon-folder",
    "icon-font",
    "icon-football-american",
    "icon-football-ball",
    "icon-football",
    "icon-forecastcloud-moon-tear",
    "icon-forwaded-call",
    "icon-forward",
    "icon-frown",
    "icon-game-structure",
    "icon-gift",
    "icon-github-alt",
    "icon-github",
    "icon-gitlab",
    "icon-glass-martini-alt-slash",
    "icon-glass-martini-alt",
    "icon-glass-martini",
    "icon-glass-tea",
    "icon-glass",
    "icon-globe",
    "icon-gold",
    "icon-golf-ball",
    "icon-google-drive-alt",
    "icon-google-drive",
    "icon-google-hangouts-alt",
    "icon-google-hangouts",
    "icon-google-play",
    "icon-google",
    "icon-graduation-cap",
    "icon-graph-bar",
    "icon-grid",
    "icon-grids",
    "icon-grin-tongue-wink-alt",
    "icon-grin-tongue-wink",
    "icon-grin",
    "icon-grip-horizontal-line",
    "icon-hard-hat",
    "icon-hdd",
    "icon-head-side-cough",
    "icon-head-side-mask",
    "icon-head-side",
    "icon-headphone-slash",
    "icon-headphones-alt",
    "icon-headphones",
    "icon-heart-alt",
    "icon-heart-break",
    "icon-heart-medical",
    "icon-heart-rate",
    "icon-heart-sign",
    "icon-heart",
    "icon-heartbeat",
    "icon-hindi-to-chinese",
    "icon-hipchat",
    "icon-history-alt",
    "icon-history",
    "icon-home-alt",
    "icon-home",
    "icon-horizontal-align-center",
    "icon-horizontal-align-left",
    "icon-horizontal-align-right",
    "icon-horizontal-distribution-center",
    "icon-horizontal-distribution-left",
    "icon-horizontal-distribution-right",
    "icon-hospital-square-sign",
    "icon-hospital-symbol",
    "icon-hospital",
    "icon-hourglass",
    "icon-house-user",
    "icon-html3-alt",
    "icon-html3",
    "icon-html5-alt",
    "icon-html5",
    "icon-hunting",
    "icon-icons",
    "icon-illustration",
    "icon-image-alt-slash",
    "icon-image-block",
    "icon-image-broken",
    "icon-image-check",
    "icon-image-download",
    "icon-image-edit",
    "icon-image-lock",
    "icon-image-minus",
    "icon-image-plus",
    "icon-image-question",
    "icon-image-redo",
    "icon-image-resize-landscape",
    "icon-image-resize-square",
    "icon-image-search",
    "icon-image-share",
    "icon-image-shield",
    "icon-image-slash",
    "icon-image-times",
    "icon-image-upload",
    "icon-image-v",
    "icon-image",
    "icon-images",
    "icon-import",
    "icon-inbox",
    "icon-incoming-call",
    "icon-info-circle",
    "icon-info",
    "icon-instagram-alt",
    "icon-instagram",
    "icon-intercom-alt",
    "icon-intercom",
    "icon-invoice",
    "icon-italic",
    "icon-jackhammer",
    "icon-java-script",
    "icon-kayak",
    "icon-key-skeleton-alt",
    "icon-key-skeleton",
    "icon-keyboard-alt",
    "icon-keyboard-hide",
    "icon-keyboard-show",
    "icon-keyboard",
    "icon-keyhole-circle",
    "icon-keyhole-square-full",
    "icon-keyhole-square",
    "icon-kid",
    "icon-label-alt",
    "icon-label",
    "icon-lamp",
    "icon-language",
    "icon-laptop-cloud",
    "icon-laptop-connection",
    "icon-laptop",
    "icon-laughing",
    "icon-layer-group-slash",
    "icon-layer-group",
    "icon-layers-alt",
    "icon-layers-slash",
    "icon-layers",
    "icon-left-arrow-from-left",
    "icon-left-arrow-to-left",
    "icon-left-indent-alt",
    "icon-left-indent",
    "icon-left-to-right-text-direction",
    "icon-letter-chinese-a",
    "icon-letter-english-a",
    "icon-letter-hindi-a",
    "icon-letter-japanese-a",
    "icon-life-ring",
    "icon-lightbulb-alt",
    "icon-lightbulb",
    "icon-line-alt",
    "icon-line-spacing",
    "icon-line",
    "icon-link-add",
    "icon-link-alt",
    "icon-link-broken",
    "icon-link-h",
    "icon-link",
    "icon-linkedin-alt",
    "icon-linkedin",
    "icon-linux",
    "icon-lira-sign",
    "icon-list-ol-alt",
    "icon-list-ol",
    "icon-list-ui-alt",
    "icon-list-ul",
    "icon-location-arrow-alt",
    "icon-location-arrow",
    "icon-location-pin-alt",
    "icon-location-point",
    "icon-lock-access",
    "icon-lock-alt",
    "icon-lock-open-alt",
    "icon-lock-slash",
    "icon-lock",
    "icon-lottiefiles-alt",
    "icon-lottiefiles",
    "icon-luggage-cart",
    "icon-mailbox-alt",
    "icon-mailbox",
    "icon-map-marker-alt",
    "icon-map-marker-edit",
    "icon-map-marker-info",
    "icon-map-marker-minus",
    "icon-map-marker-plus",
    "icon-map-marker-question",
    "icon-map-marker-shield",
    "icon-map-marker-slash",
    "icon-map-marker",
    "icon-map-pin-alt",
    "icon-map-pin",
    "icon-map",
    "icon-mars",
    "icon-master-card",
    "icon-maximize-left",
    "icon-medal",
    "icon-medical-drip",
    "icon-medical-square-full",
    "icon-medical-square",
    "icon-medium-m",
    "icon-medkit",
    "icon-meeting-board",
    "icon-megaphone",
    "icon-meh-alt",
    "icon-meh-closed-eye",
    "icon-meh",
    "icon-message",
    "icon-metro",
    "icon-microphone-slash",
    "icon-microphone",
    "icon-microscope",
    "icon-microsoft",
    "icon-minus-circle",
    "icon-minus-path",
    "icon-minus-square-full",
    "icon-minus-square",
    "icon-minus",
    "icon-missed-call",
    "icon-mobile-android-alt",
    "icon-mobile-android",
    "icon-mobile-vibrate",
    "icon-modem",
    "icon-money-bill-slash",
    "icon-money-bill-stack",
    "icon-money-bill",
    "icon-money-insert",
    "icon-money-stack",
    "icon-money-withdraw",
    "icon-money-withdrawal",
    "icon-moneybag-alt",
    "icon-moneybag",
    "icon-monitor-heart-rate",
    "icon-monitor",
    "icon-moon-eclipse",
    "icon-moon",
    "icon-moonset",
    "icon-mountains-sun",
    "icon-mountains",
    "icon-mouse-alt-2",
    "icon-mouse-alt",
    "icon-mouse",
    "icon-multiply",
    "icon-music-note",
    "icon-music-tune-slash",
    "icon-music",
    "icon-n-a",
    "icon-navigator",
    "icon-nerd",
    "icon-newspaper",
    "icon-ninja",
    "icon-no-entry",
    "icon-notebooks",
    "icon-notes",
    "icon-object-group",
    "icon-object-ungroup",
    "icon-octagon",
    "icon-okta",
    "icon-opera-alt",
    "icon-opera",
    "icon-outgoing-call",
    "icon-package",
    "icon-padlock",
    "icon-pagelines",
    "icon-pagerduty",
    "icon-paint-tool",
    "icon-palette",
    "icon-panel-add",
    "icon-panorama-h-alt",
    "icon-panorama-h",
    "icon-panorama-v",
    "icon-paperclip",
    "icon-paragraph",
    "icon-parcel",
    "icon-parking-circle",
    "icon-parking-square",
    "icon-pathfinder-unite",
    "icon-pathfinder",
    "icon-pause-circle",
    "icon-pause",
    "icon-paypal",
    "icon-pen",
    "icon-pentagon",
    "icon-percentage",
    "icon-phone-alt",
    "icon-phone-pause",
    "icon-phone-slash",
    "icon-phone-times",
    "icon-phone-volume",
    "icon-phone",
    "icon-picture",
    "icon-pizza-slice",
    "icon-plane-arrival",
    "icon-plane-departure",
    "icon-plane-fly",
    "icon-plane",
    "icon-play-circle",
    "icon-play",
    "icon-plug",
    "icon-plus-circle",
    "icon-plus-square",
    "icon-plus10",
    "icon-podium",
    "icon-polygon",
    "icon-post-stamp",
    "icon-postcard",
    "icon-pound-circle",
    "icon-pound",
    "icon-power",
    "icon-prescription-bottle",
    "icon-presentation-check",
    "icon-presentation-edit",
    "icon-presentation-line",
    "icon-presentation-lines-alt",
    "icon-presentation-minus",
    "icon-presentation-play",
    "icon-presentation-plus",
    "icon-presentation-times",
    "icon-presentation",
    "icon-previous",
    "icon-pricetag-alt",
    "icon-print-slash",
    "icon-print",
    "icon-process",
    "icon-processor",
    "icon-programming-language",
    "icon-pump",
    "icon-puzzle-piece",
    "icon-qrcode-scan",
    "icon-question-circle",
    "icon-question",
    "icon-rainbow",
    "icon-raindrops-alt",
    "icon-raindrops",
    "icon-react",
    "icon-receipt-alt",
    "icon-receipt",
    "icon-record-audio",
    "icon-reddit-alien-alt",
    "icon-redo",
    "icon-refresh",
    "icon-registered",
    "icon-repeat",
    "icon-restaurant",
    "icon-right-indent-alt",
    "icon-right-to-left-text-direction",
    "icon-robot",
    "icon-rocket",
    "icon-rope-way",
    "icon-rotate-360",
    "icon-rss-alt",
    "icon-rss-interface",
    "icon-rss",
    "icon-ruler-combined",
    "icon-ruler",
    "icon-rupee-sign",
    "icon-sad-cry",
    "icon-sad-crying",
    "icon-sad-dizzy",
    "icon-sad-squint",
    "icon-sad",
    "icon-sanitizer-alt",
    "icon-sanitizer",
    "icon-save",
    "icon-scaling-left",
    "icon-scaling-right",
    "icon-scenery",
    "icon-schedule",
    "icon-screw",
    "icon-scroll-h",
    "icon-scroll",
    "icon-search-alt",
    "icon-search-minus",
    "icon-search-plus",
    "icon-search",
    "icon-selfie",
    "icon-server-alt",
    "icon-server-connection",
    "icon-server-network-alt",
    "icon-server-network",
    "icon-server",
    "icon-servers",
    "icon-servicemark",
    "icon-setting",
    "icon-share-alt",
    "icon-share",
    "icon-shield-check",
    "icon-shield-exclamation",
    "icon-shield-plus",
    "icon-shield-question",
    "icon-shield-slash",
    "icon-shield",
    "icon-ship",
    "icon-shop",
    "icon-shopping-bag",
    "icon-shopping-basket",
    "icon-shopping-cart-alt",
    "icon-shopping-cart",
    "icon-shovel",
    "icon-shrink",
    "icon-shuffle",
    "icon-shutter-alt",
    "icon-shutter",
    "icon-sick",
    "icon-sigma",
    "icon-sign-alt",
    "icon-sign-in-alt",
    "icon-sign-left",
    "icon-sign-out-alt",
    "icon-sign-right",
    "icon-signal-alt-3",
    "icon-signal-alt",
    "icon-signal",
    "icon-signin",
    "icon-signout",
    "icon-silence",
    "icon-silent-squint",
    "icon-sim-card",
    "icon-sitemap",
    "icon-skip-forward-alt",
    "icon-skip-forward-circle",
    "icon-skip-forward",
    "icon-skype-alt",
    "icon-skype",
    "icon-slack-alt",
    "icon-slack",
    "icon-slider-h-range",
    "icon-slider-h",
    "icon-sliders-v-alt",
    "icon-sliders-v",
    "icon-smile-beam",
    "icon-smile-dizzy",
    "icon-smile-squint-wink-alt",
    "icon-smile-squint-wink",
    "icon-smile-wink-alt",
    "icon-smile-wink",
    "icon-smile",
    "icon-snapchat-alt",
    "icon-snapchat-ghost",
    "icon-snapchat-square",
    "icon-snow-flake",
    "icon-snowflake-alt",
    "icon-snowflake",
    "icon-social-distancing",
    "icon-sort-amount-down",
    "icon-sort-amount-up",
    "icon-sort",
    "icon-sorting",
    "icon-space-key",
    "icon-spade",
    "icon-sperms",
    "icon-spin",
    "icon-spinner-alt",
    "icon-spinner",
    "icon-square-full",
    "icon-square-shape",
    "icon-square",
    "icon-squint",
    "icon-star-half-alt",
    "icon-star",
    "icon-step-backward-alt",
    "icon-step-backward-circle",
    "icon-step-backward",
    "icon-step-forward",
    "icon-stethoscope-alt",
    "icon-stethoscope",
    "icon-stop-circle",
    "icon-stopwatch-slash",
    "icon-stopwatch",
    "icon-store-alt",
    "icon-store-slash",
    "icon-store",
    "icon-streering",
    "icon-stretcher",
    "icon-subject",
    "icon-subway-alt",
    "icon-subway",
    "icon-suitcase-alt",
    "icon-suitcase",
    "icon-sun",
    "icon-sunset",
    "icon-surprise",
    "icon-swatchbook",
    "icon-swiggy",
    "icon-swimmer",
    "icon-sync-exclamation",
    "icon-sync-slash",
    "icon-sync",
    "icon-syringe",
    "icon-table-tennis",
    "icon-table",
    "icon-tablet",
    "icon-tablets",
    "icon-tachometer-fast-alt",
    "icon-tachometer-fast",
    "icon-tag-alt",
    "icon-tag",
    "icon-tape",
    "icon-taxi",
    "icon-tear",
    "icon-telegram-alt",
    "icon-telegram",
    "icon-telescope",
    "icon-temperature-empty",
    "icon-temperature-half",
    "icon-temperature-minus",
    "icon-temperature-plus",
    "icon-temperature-quarter",
    "icon-temperature-three-quarter",
    "icon-temperature",
    "icon-tennis-ball",
    "icon-text-fields",
    "icon-text-size",
    "icon-text-strike-through",
    "icon-text",
    "icon-th-large",
    "icon-th-slash",
    "icon-th",
    "icon-thermometer",
    "icon-thumbs-down",
    "icon-thumbs-up",
    "icon-thunderstorm-moon",
    "icon-thunderstorm-sun",
    "icon-thunderstorm",
    "icon-ticket",
    "icon-times-circle",
    "icon-times-square",
    "icon-times",
    "icon-toggle-off",
    "icon-toggle-on",
    "icon-toilet-paper",
    "icon-top-arrow-from-top",
    "icon-top-arrow-to-top",
    "icon-tornado",
    "icon-trademark-circle",
    "icon-trademark",
    "icon-traffic-barrier",
    "icon-traffic-light",
    "icon-transaction",
    "icon-trash-alt",
    "icon-trash",
    "icon-trees",
    "icon-triangle",
    "icon-trophy",
    "icon-trowel",
    "icon-truck-loading",
    "icon-truck",
    "icon-tumblr-alt",
    "icon-tumblr-square",
    "icon-tumblr",
    "icon-tv-retro-slash",
    "icon-tv-retro",
    "icon-twitter-alt",
    "icon-twitter",
    "icon-umbrella",
    "icon-unamused",
    "icon-underline",
    "icon-university",
    "icon-unlock-alt",
    "icon-unlock",
    "icon-upload-alt",
    "icon-upload",
    "icon-usd-circle",
    "icon-usd-square",
    "icon-user-arrows",
    "icon-user-check",
    "icon-user-circle",
    "icon-user-exclamation",
    "icon-user-location",
    "icon-user-md",
    "icon-user-minus",
    "icon-user-nurse",
    "icon-user-plus",
    "icon-user-square",
    "icon-user-times",
    "icon-user",
    "icon-users-alt",
    "icon-utensils-alt",
    "icon-utensils",
    "icon-vector-square-alt",
    "icon-vector-square",
    "icon-venus",
    "icon-vertical-align-bottom",
    "icon-vertical-align-center",
    "icon-vertical-align-top",
    "icon-vertical-distribute-bottom",
    "icon-vertical-distribution-center",
    "icon-vertical-distribution-top",
    "icon-video-question",
    "icon-video-slash",
    "icon-video",
    "icon-virus-slash",
    "icon-visual-studio",
    "icon-vk-alt",
    "icon-vk",
    "icon-voicemail-rectangle",
    "icon-voicemail",
    "icon-volleyball",
    "icon-volume-down",
    "icon-volume-mute",
    "icon-volume-off",
    "icon-volume-up",
    "icon-volume",
    "icon-vuejs-alt",
    "icon-vuejs",
    "icon-wall",
    "icon-wallet",
    "icon-watch-alt",
    "icon-watch",
    "icon-water-drop-slash",
    "icon-water-glass",
    "icon-water",
    "icon-web-grid-alt",
    "icon-web-grid",
    "icon-web-section-alt",
    "icon-web-section",
    "icon-webcam",
    "icon-weight",
    "icon-whatsapp-alt",
    "icon-whatsapp",
    "icon-wheel-barrow",
    "icon-wheelchair-alt",
    "icon-wheelchair",
    "icon-wifi-router",
    "icon-wifi-slash",
    "icon-wifi",
    "icon-wind-moon",
    "icon-wind-sun",
    "icon-wind",
    "icon-window-grid",
    "icon-window-maximize",
    "icon-window-section",
    "icon-window",
    "icon-windows",
    "icon-windsock",
    "icon-windy",
    "icon-wordpress-simple",
    "icon-wordpress",
    "icon-wrap-text",
    "icon-wrench",
    "icon-x-add",
    "icon-x",
    "icon-yen-circle",
    "icon-yen",
    "icon-yin-yang",
    "icon-youtube"
]

export default fontNames;