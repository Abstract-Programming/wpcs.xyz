const repo_link = "https://github.com/Abstract-Programming/wpcs.xyz",
  module_repo = "https://storage.wpcs.xyz",
  module_repo_dir = "/modules/",
  module_language = ".js",
  module_registry = "https://api.wpcs.xyz",
  module_registry_dir = "/registry",
  acsii_logo =
    "           (         (        )     )    )  \n (  (      )\\ )  (   )\\ )  ( /(  ( /( ( /(  \n )\\))(   '(()/(  )\\ (()/(  )\\()) )\\()))\\()) \n((_)()\\ )  /(_)|((_) /(_))((_)\\ ((_)\\((_)\\  \n_(())\\_)()(_)) )\\___(_))  __((_)_ ((_)_((_) \n\\ \\((_)/ /| _ ((/ __/ __| \\ \\/ | \\ / /_  /  \n \\ \\/\\/ / |  _/| (__\\__ \\_ >  < \\ V / / /   \n  \\_/\\_/  |_|   \\___|___(_)_/\\_\\ |_| /___|  \n                                            \n",
  log_level_debug = "[DEBUG] ",
  log_level_info = "[INFO] ",
  log_level_warn = "[WARN] ",
  uncolored_term_prompt = "local@wpcs.xyz $ ",
  teal_colored_prompt = teal("local@wpcs.xyz $ "),
  term_prompt = teal_colored_prompt;
let wpcs_ping,
  storage_wpcs_ping,
  api_wpcs_ping,
  debug = !1,
  module_loading_messages = !1,
  module_verification = !1,
  modules_enabled = !0,
  log_marker = "[wpcs] ",
  modules_fetched = 0,
  processing_time = 0,
  soft_reload = !1;
const authorized_scripts = [
    "https://www.googletagmanager.com/gtag/js?id=G-VJXM9LTMFX",
    "https://storage.wpcs.xyz/resources/ajax/libs/jquery/3.5.1/jquery.min.js",
    "https://storage.wpcs.xyz/resources/alfg/ping.js@0.2.2/dist/ping.min.js",
    "https://storage.wpcs.xyz/resources/npm/jquery.terminal/js/jquery.terminal.min.js",
    "https://storage.wpcs.xyz/resources/npm/jquery.terminal/js/autocomplete_menu.min.js",
    "https://wpcs.xyz/js/vendor/modernizr-3.11.2.min.js",
    "https://wpcs.xyz/js/pkg_modules/colors.min.js",
    "https://wpcs.xyz/js/config.js",
    "https://wpcs.xyz/js/plugins.js",
    "https://wpcs.xyz/js/main.js",
    "https://wpcs.xyz/js/pkg_modules/spinner.js",
    "https://uppkg.com/axios/dist/axios.min.js",
  ],
  langs = [
    "af",
    "sq",
    "am",
    "ar",
    "hy",
    "az",
    "eu",
    "be",
    "bn",
    "bs",
    "bg",
    "ca",
    "ceb",
    "ny",
    "zh-CN",
    "zh-TW",
    "co",
    "hr",
    "cs",
    "da",
    "nl",
    "eo",
    "et",
    "tl",
    "fi",
    "fr",
    "fy",
    "gl",
    "ka",
    "de",
    "el",
    "gu",
    "ht",
    "ha",
    "haw",
    "iw",
    "hi",
    "hmn",
    "hu",
    "is",
    "ig",
    "id",
    "ga",
    "it",
    "ja",
    "jw",
    "kn",
    "kk",
    "km",
    "rw",
    "ko",
    "ku",
    "ky",
    "lo",
    "la",
    "lv",
    "lt",
    "lb",
    "mk",
    "mg",
    "ms",
    "ml",
    "mt",
    "mi",
    "mr",
    "mn",
    "my",
    "ne",
    "no",
    "or",
    "ps",
    "fa",
    "pl",
    "pt",
    "pa",
    "ro",
    "ru",
    "sm",
    "gd",
    "sr",
    "st",
    "sn",
    "sd",
    "si",
    "sk",
    "sl",
    "so",
    "es",
    "su",
    "sw",
    "sv",
    "tg",
    "ta",
    "tt",
    "te",
    "th",
    "tr",
    "tk",
    "uk",
    "ur",
    "ug",
    "uz",
    "vi",
    "cy",
    "xh",
    "yi",
    "yo",
    "zu",
  ];
let global_context;
