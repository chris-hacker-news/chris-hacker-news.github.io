var newsArray = [
  {
    "id": "12868594",
    "timestamp": "Nov 3, 2016 11:33:49 PM",
    "topic": "The etcd Operator: cluster configuration and management on Kubernetes",
    "url": "https://coreos.com/blog/introducing-the-etcd-operator.html",
    "votes": 3,
    "posted": "Nov 3, 2016 11:27:49 PM"
  },
  {
    "id": "12868527",
    "timestamp": "Nov 3, 2016 11:33:49 PM",
    "topic": "ASML Buys Stake in Carl Zeiss Unit for $1.1B",
    "url": "https://www.bloomberg.com/news/articles/2016-11-03/asml-buys-stake-in-carl-zeiss-unit-for-1-1-billion-in-euv-step",
    "votes": 3,
    "posted": "Nov 3, 2016 11:18:34 PM"
  },
  {
    "id": "12868494",
    "timestamp": "Nov 3, 2016 11:23:48 PM",
    "topic": "Why Are People Racist?",
    "url": "https://billmei.net/blog/why-are-people-racist",
    "votes": 6,
    "posted": "Nov 3, 2016 11:13:10 PM"
  },
  {
    "id": "12868439",
    "timestamp": "Nov 3, 2016 11:43:51 PM",
    "topic": "Fin: A Vibrator for Fingers",
    "url": "https://www.kickstarter.com/projects/dameproducts/fin-a-vibrator-for-fingers",
    "votes": 4,
    "posted": "Nov 3, 2016 11:06:41 PM"
  },
  {
    "id": "12868304",
    "timestamp": "Nov 3, 2016 11:43:50 PM",
    "topic": "Opus Audio Codec 1.2-alpha is out",
    "url": "https://www.opus-codec.org/release/dev/2016/11/03/libopus-1_2_alpha.html",
    "votes": 4,
    "posted": "Nov 3, 2016 10:47:35 PM"
  },
  {
    "id": "12868287",
    "timestamp": "Nov 3, 2016 11:43:50 PM",
    "topic": "Modern Linux service isolation",
    "url": "https://defenceforstartups.com/posts/modern-linux-service-isolation.html",
    "votes": 7,
    "posted": "Nov 3, 2016 10:46:03 PM"
  },
  {
    "id": "12868106",
    "timestamp": "Nov 3, 2016 11:03:46 PM",
    "topic": "Brexit needs to be approved by Parliament",
    "url": "http://www.bbc.com/news/uk-politics-37857785",
    "votes": 5,
    "posted": "Nov 3, 2016 10:24:51 PM"
  },
  {
    "id": "12868033",
    "timestamp": "Nov 3, 2016 10:43:44 PM",
    "topic": "Our Civic Duty as Techies",
    "url": "https://medium.com/@USCTO/our-civic-duty-as-techies-fd2008df76e4#.f0ee1jqjf",
    "votes": 5,
    "posted": "Nov 3, 2016 10:17:02 PM"
  },
  {
    "id": "12867843",
    "timestamp": "Nov 3, 2016 10:23:42 PM",
    "topic": "How Airbnb Makes It Hard to Sue for Discrimination",
    "url": "http://www.newyorker.com/business/currency/how-airbnb-makes-it-hard-to-sue-for-discrimination",
    "votes": 6,
    "posted": "Nov 3, 2016 9:53:21 PM"
  },
  {
    "id": "12867795",
    "timestamp": "Nov 3, 2016 10:03:40 PM",
    "topic": "GoPro trading halted as company misses revenue expectations by 23%",
    "url": "https://techcrunch.com/2016/11/03/gopro-trading-halted-as-company-misses-revenue-expectations-by-23/",
    "votes": 12,
    "posted": "Nov 3, 2016 9:47:14 PM"
  },
  {
    "id": "12867634",
    "timestamp": "Nov 3, 2016 9:43:38 PM",
    "topic": "Yet another JVM language? Whiley takes a fresh approach",
    "url": "http://www.javaworld.com/article/3137548/scripting-jvm-languages/yet-another-jvm-language-whiley-takes-a-fresh-approach.html",
    "votes": 3,
    "posted": "Nov 3, 2016 9:27:51 PM"
  },
  {
    "id": "12867500",
    "timestamp": "Nov 3, 2016 11:03:46 PM",
    "topic": "Mirai botnet almost gets Liberia offline",
    "url": "http://www.zdnet.com/article/mirai-botnet-attack-briefly-knocked-an-entire-country-offline/",
    "votes": 3,
    "posted": "Nov 3, 2016 9:10:41 PM"
  },
  {
    "id": "12867417",
    "timestamp": "Nov 3, 2016 11:43:50 PM",
    "topic": "Silicon Beach: Los Angeles booms as startup hub",
    "url": "http://www.economist.com/news/business/21709564-cheaper-location-tech-companies-takes-los-angeles-booms-startup-hub",
    "votes": 5,
    "posted": "Nov 3, 2016 9:00:24 PM"
  },
  {
    "id": "12867380",
    "timestamp": "Nov 3, 2016 9:23:35 PM",
    "topic": "Udacity the new ITT Tech?",
    "url": "https://tech.masters3d.com/udacity-the-new-itt-tech-ce26018c3f2",
    "votes": 4,
    "posted": "Nov 3, 2016 8:55:27 PM"
  },
  {
    "id": "12867356",
    "timestamp": "Nov 3, 2016 9:23:35 PM",
    "topic": "Why Are US Presidential Elections So Close?",
    "url": "http://nautil.us/issue/42/fakes/why-are-us-presidential-elections-so-close",
    "votes": 4,
    "posted": "Nov 3, 2016 8:53:10 PM"
  },
  {
    "id": "12867221",
    "timestamp": "Nov 3, 2016 8:53:31 PM",
    "topic": "A Conductor of Evolution’s Subtle Symphony",
    "url": "https://www.quantamagazine.org/20161103-richard-lenski-interview-evolution/",
    "votes": 3,
    "posted": "Nov 3, 2016 8:36:24 PM"
  },
  {
    "id": "12867199",
    "timestamp": "Nov 3, 2016 8:33:29 PM",
    "topic": "Tesorio (YC S15) Is Hiring Senior Back End and Full Stack Engineers",
    "url": "https://www.tesorio.com/careers/",
    "votes": 1,
    "posted": "Nov 3, 2016 8:32:55 PM"
  },
  {
    "id": "12867123",
    "timestamp": "Nov 3, 2016 8:43:30 PM",
    "topic": "Annotating Michael Nielsen\u0027s Book on Deep Learning: Chapter 1",
    "url": "http://fermatslibrary.com/s/using-neural-nets-to-recognize-handwritten-digits",
    "votes": 8,
    "posted": "Nov 3, 2016 8:24:23 PM"
  },
  {
    "id": "12867109",
    "timestamp": "Nov 3, 2016 9:43:38 PM",
    "topic": "Instacart CEO: Some Workers Must Earn Less for the Company to Grow",
    "url": "https://www.buzzfeed.com/carolineodonovan/instacart-ceo-some-workers-must-earn-less-for-the-company-to",
    "votes": 4,
    "posted": "Nov 3, 2016 8:22:34 PM"
  },
  {
    "id": "12866974",
    "timestamp": "Nov 3, 2016 9:23:35 PM",
    "topic": "List of silicon valley startups that are about to grow fast",
    "url": "http://www.yodas.com/hyper",
    "votes": 7,
    "posted": "Nov 3, 2016 8:07:24 PM"
  },
  {
    "id": "12866943",
    "timestamp": "Nov 3, 2016 8:23:28 PM",
    "topic": "Show HN: Sodaphonic – record and edit audio in the browser",
    "url": "https://sodaphonic.com",
    "votes": 4,
    "posted": "Nov 3, 2016 8:04:14 PM"
  },
  {
    "id": "12866784",
    "timestamp": "Nov 3, 2016 7:53:25 PM",
    "topic": "Apple Kills the Best MacBook Pro in the World",
    "url": "http://www.forbes.com/sites/ewanspence/2016/10/27/apple-kills-best-macbook-pro/#58f2206b39bf",
    "votes": 3,
    "posted": "Nov 3, 2016 7:48:43 PM"
  },
  {
    "id": "12866747",
    "timestamp": "Nov 3, 2016 8:03:26 PM",
    "topic": "Apollo Client 0.5",
    "url": "https://dev-blog.apollodata.com/apollo-client-0-5-f1eb3f122ace",
    "votes": 4,
    "posted": "Nov 3, 2016 7:44:22 PM"
  },
  {
    "id": "12866723",
    "timestamp": "Nov 3, 2016 8:43:31 PM",
    "topic": "Edward Snowden\u0027s Lecture at McGill University – Nov 2nd, 2016 – Start ±1:16:20",
    "url": "https://www.youtube.com/watch?v\u003d4x8ZI0IaInE",
    "votes": 5,
    "posted": "Nov 3, 2016 7:41:53 PM"
  },
  {
    "id": "12866695",
    "timestamp": "Nov 3, 2016 8:33:29 PM",
    "topic": "Ask HN: What is a “boring” web stack?",
    "votes": 7,
    "posted": "Nov 3, 2016 7:38:58 PM"
  },
  {
    "id": "12866629",
    "timestamp": "Nov 3, 2016 8:23:28 PM",
    "topic": "New Macbook Pro can\u0027t walk and chew gum at same time (watch wifi and USB \u003d fail)",
    "url": "https://www.youtube.com/watch?v\u003dNYVjIjBMx6o",
    "votes": 4,
    "posted": "Nov 3, 2016 7:33:31 PM"
  },
  {
    "id": "12866553",
    "timestamp": "Nov 3, 2016 8:43:30 PM",
    "topic": "Curiosity Mars Rover Checks Odd-Looking Iron Meteorite",
    "url": "http://www.jpl.nasa.gov/news/news.php?feature\u003d6667",
    "votes": 4,
    "posted": "Nov 3, 2016 7:25:17 PM"
  },
  {
    "id": "12866538",
    "timestamp": "Nov 3, 2016 8:33:29 PM",
    "topic": "Show HN: Quick JavaScript Tetris – Based on Yesterday\u0027s Show HN",
    "url": "https://github.com/sacert/Quick-Tetris",
    "votes": 3,
    "posted": "Nov 3, 2016 7:23:53 PM"
  },
  {
    "id": "12866328",
    "timestamp": "Nov 3, 2016 8:33:29 PM",
    "topic": "46% of 2015 Tech IPOs Are Underwater, 62% Under Their First Day Closes",
    "url": "https://mattermark.com/46-2015-tech-ipos-underwater-62-first-day-closes/",
    "votes": 4,
    "posted": "Nov 3, 2016 7:00:04 PM"
  },
  {
    "id": "12866156",
    "timestamp": "Nov 3, 2016 7:33:22 PM",
    "topic": "Introducing Unified Update Platform (UUP)",
    "url": "https://blogs.windows.com/windowsexperience/2016/11/03/introducing-unified-update-platform-uup/",
    "votes": 4,
    "posted": "Nov 3, 2016 6:41:45 PM"
  },
  {
    "id": "12866033",
    "timestamp": "Nov 3, 2016 9:13:34 PM",
    "topic": "Introducing Operators: Putting Operational Knowledge into Software on Kubernetes",
    "url": "https://coreos.com/blog/introducing-operators.html",
    "votes": 5,
    "posted": "Nov 3, 2016 6:29:37 PM"
  },
  {
    "id": "12865998",
    "timestamp": "Nov 3, 2016 7:13:21 PM",
    "topic": "Web fonts, boy, I don\u0027t know",
    "url": "http://meowni.ca/posts/web-fonts/",
    "votes": 3,
    "posted": "Nov 3, 2016 6:25:32 PM"
  },
  {
    "id": "12865971",
    "timestamp": "Nov 3, 2016 9:23:35 PM",
    "topic": "New Research Points the Finger at Employers for the Widespread Talent Shortage",
    "url": "https://www.fastcompany.com/3065019/new-research-points-the-finger-at-employers-for-the-widespread-talent-shortage",
    "votes": 4,
    "posted": "Nov 3, 2016 6:23:07 PM"
  },
  {
    "id": "12865922",
    "timestamp": "Nov 3, 2016 6:53:19 PM",
    "topic": "The Food Delivery Death Star",
    "url": "https://medium.com/@review/the-food-delivery-death-star-85f9a121313",
    "votes": 9,
    "posted": "Nov 3, 2016 6:18:50 PM"
  },
  {
    "id": "12865834",
    "timestamp": "Nov 3, 2016 6:13:13 PM",
    "topic": "Visual Studio Code October 2016 1.7.1",
    "url": "http://code.visualstudio.com/updates/v1_7#_171-recovery-build",
    "votes": 5,
    "posted": "Nov 3, 2016 6:09:18 PM"
  },
  {
    "id": "12865809",
    "timestamp": "Nov 3, 2016 9:23:36 PM",
    "topic": "Putin Grants Russian Citizenship to Steven Seagal",
    "url": "http://www.foxnews.com/entertainment/2016/11/03/putin-grants-russian-citizenship-to-steven-seagal.html",
    "votes": 3,
    "posted": "Nov 3, 2016 6:06:24 PM"
  },
  {
    "id": "12865698",
    "timestamp": "Nov 3, 2016 6:03:12 PM",
    "topic": "Tech firms shell out to hire and hoard talent",
    "url": "http://www.economist.com/news/business/21709574-tech-firms-battle-hire-and-hoard-talented-employees-huge-pay-packages-silicon-valley?cid1\u003dcust/ednew/n/bl/n/2016113n/owned/n/n/nwl/n/n/NA/8027532/n",
    "votes": 3,
    "posted": "Nov 3, 2016 5:55:14 PM"
  },
  {
    "id": "12865675",
    "timestamp": "Nov 3, 2016 9:23:35 PM",
    "topic": "The Biggest Supermoon in Nearly 70 Years",
    "url": "http://sciencebulletin.org/archives/7310.html",
    "votes": 4,
    "posted": "Nov 3, 2016 5:53:12 PM"
  },
  {
    "id": "12865628",
    "timestamp": "Nov 3, 2016 9:03:32 PM",
    "topic": "Tech firms shell out to hire and hoard talent",
    "url": "http://www.economist.com/news/business/21709574-tech-firms-battle-hire-and-hoard-talented-employees-huge-pay-packages-silicon-valley",
    "votes": 4,
    "posted": "Nov 3, 2016 5:48:10 PM"
  },
  {
    "id": "12865627",
    "timestamp": "Nov 3, 2016 9:53:39 PM",
    "topic": "Adobe Sensei – Unified artificial intelligence and machine learning",
    "url": "http://www.adobe.com/sensei.html",
    "votes": 5,
    "posted": "Nov 3, 2016 5:48:00 PM"
  },
  {
    "id": "12865321",
    "timestamp": "Nov 3, 2016 7:03:20 PM",
    "topic": "The YC Effect: Charting How YC Makes Your Company Better",
    "url": "http://themacro.com/articles/2016/11/the-yc-effect/",
    "votes": 4,
    "posted": "Nov 3, 2016 5:19:39 PM"
  },
  {
    "id": "12865169",
    "timestamp": "Nov 3, 2016 5:53:11 PM",
    "topic": "Ubuntu Core 16 delivers foundation for secure IoT",
    "url": "https://insights.ubuntu.com/2016/11/03/ubuntu-core-16-delivers-foundation-for-secure-iot/",
    "votes": 3,
    "posted": "Nov 3, 2016 5:06:20 PM"
  },
  {
    "id": "12865166",
    "timestamp": "Nov 3, 2016 5:53:11 PM",
    "topic": "Mars: Inside the High-Risk, High-Stakes Race to the Red Planet",
    "url": "http://www.nationalgeographic.com/magazine/2016/11/spacex-elon-musk-exploring-mars-planets-space-science/",
    "votes": 3,
    "posted": "Nov 3, 2016 5:06:01 PM"
  },
  {
    "id": "12865133",
    "timestamp": "Nov 3, 2016 5:23:09 PM",
    "topic": "MacBook Pro 2016 first look: One week later",
    "url": "http://www.imore.com/macbook-pro",
    "votes": 3,
    "posted": "Nov 3, 2016 5:02:31 PM"
  },
  {
    "id": "12864862",
    "timestamp": "Nov 3, 2016 7:13:21 PM",
    "topic": "Show HN: HTMLComponent – Component-Based UIs Using Only ES6 and Custom Elements",
    "url": "https://github.com/felipeccastro/html-component/",
    "votes": 6,
    "posted": "Nov 3, 2016 4:38:29 PM"
  },
  {
    "id": "12864806",
    "timestamp": "Nov 3, 2016 4:53:06 PM",
    "topic": "Why Slack may live to regret its smarmy letter to Microsoft",
    "url": "http://www.theverge.com/2016/11/3/13504932/slack-microsoft-teams-letter-wtf",
    "votes": 8,
    "posted": "Nov 3, 2016 4:32:37 PM"
  },
  {
    "id": "12864753",
    "timestamp": "Nov 3, 2016 4:33:04 PM",
    "topic": "Fullstack Academy (YC S12) is hiring developers who love teaching",
    "url": "https://fullstackacademy.workable.com/jobs/186349",
    "votes": 1,
    "posted": "Nov 3, 2016 4:28:11 PM"
  },
  {
    "id": "12864727",
    "timestamp": "Nov 3, 2016 4:43:05 PM",
    "topic": "The Steve Jobs email that outlined Apple’s strategy a year before his death",
    "url": "http://qz.com/196005/the-steve-jobs-email-that-outlined-apples-strategy-a-year-before-his-death/",
    "votes": 5,
    "posted": "Nov 3, 2016 4:25:41 PM"
  },
  {
    "id": "12864704",
    "timestamp": "Nov 3, 2016 4:43:05 PM",
    "topic": "FLV Player in JavaScript",
    "url": "https://github.com/Bilibili/flv.js",
    "votes": 3,
    "posted": "Nov 3, 2016 4:23:02 PM"
  },
  {
    "id": "12864673",
    "timestamp": "Nov 3, 2016 5:33:10 PM",
    "topic": "Wherefore art thou Macintosh?",
    "url": "http://www.asymco.com/2016/11/02/wherefore-art-thou-macintosh/",
    "votes": 4,
    "posted": "Nov 3, 2016 4:19:11 PM"
  },
  {
    "id": "12864475",
    "timestamp": "Nov 3, 2016 4:23:03 PM",
    "topic": "Mega Commuters in the U.S [pdf]",
    "url": "https://www.census.gov/hhes/commuting/files/2012/Paper-Poster_Megacommuting%20in%20the%20US.pdf",
    "votes": 7,
    "posted": "Nov 3, 2016 3:59:29 PM"
  },
  {
    "id": "12864429",
    "timestamp": "Nov 3, 2016 4:23:03 PM",
    "topic": "MicroG Project: A re-implementation of Google\u0027s Android apps and libraries",
    "url": "https://microg.org/?\u003d",
    "votes": 3,
    "posted": "Nov 3, 2016 3:55:01 PM"
  },
  {
    "id": "12864389",
    "timestamp": "Nov 3, 2016 4:23:03 PM",
    "topic": "Securing PostgreSQL [pdf]",
    "url": "http://thebuild.com/presentations/pgconfeu-2016-securing-postgresql.pdf",
    "votes": 5,
    "posted": "Nov 3, 2016 3:50:46 PM"
  },
  {
    "id": "12864151",
    "timestamp": "Nov 3, 2016 3:32:59 PM",
    "topic": "Silicon Valley’s “megacommute” even worse than L.A",
    "url": "http://www.mercurynews.com/2016/11/02/job-boom-intensifies-traffic-and-housing-woes/",
    "votes": 5,
    "posted": "Nov 3, 2016 3:25:39 PM"
  },
  {
    "id": "12864032",
    "timestamp": "Nov 3, 2016 5:13:08 PM",
    "topic": "The Power of Ten – Rules for Writing Safety Critical Code",
    "url": "http://spinroot.com/p10/",
    "votes": 3,
    "posted": "Nov 3, 2016 3:10:16 PM"
  },
  {
    "id": "12863898",
    "timestamp": "Nov 3, 2016 3:53:00 PM",
    "topic": "The Coming War in the Middle East",
    "url": "http://www.hoover.org/research/coming-war-middle-east",
    "votes": 12,
    "posted": "Nov 3, 2016 2:50:03 PM"
  },
  {
    "id": "12863820",
    "timestamp": "Nov 3, 2016 7:53:25 PM",
    "topic": "Show HN: Browse dead and dying startups",
    "url": "http://deathwatch.io/",
    "votes": 6,
    "posted": "Nov 3, 2016 2:40:02 PM"
  },
  {
    "id": "12863779",
    "timestamp": "Nov 3, 2016 6:23:15 PM",
    "topic": "A.I. accurately predicted the full baseball post-season back in July",
    "url": "http://www.marketwired.com/press-release/ai-makes-yet-another-remarkable-prediction-2172570.htm",
    "votes": 9,
    "posted": "Nov 3, 2016 2:35:11 PM"
  },
  {
    "id": "12863699",
    "timestamp": "Nov 3, 2016 2:52:55 PM",
    "topic": "BearSSL",
    "url": "https://bearssl.org/",
    "votes": 10,
    "posted": "Nov 3, 2016 2:23:29 PM"
  },
  {
    "id": "12863565",
    "timestamp": "Nov 3, 2016 7:33:22 PM",
    "topic": "Browsers, not apps, are the future of mobile",
    "url": "https://blog.intercom.com/browsers-not-apps-are-the-future-of-mobile/",
    "votes": 5,
    "posted": "Nov 3, 2016 2:01:41 PM"
  },
  {
    "id": "12863455",
    "timestamp": "Nov 3, 2016 4:23:03 PM",
    "topic": "Why hardware development is hard, part 1: Verilog is weird",
    "url": "https://danluu.com/why-hardware-development-is-hard/",
    "votes": 5,
    "posted": "Nov 3, 2016 1:37:10 PM"
  },
  {
    "id": "12863079",
    "timestamp": "Nov 3, 2016 1:02:47 PM",
    "topic": "Experimental Edge-Side Mustache Processing in Varnish (Edgestash)",
    "url": "https://info.varnish-software.com/blog/edgestash",
    "votes": 3,
    "posted": "Nov 3, 2016 12:35:18 PM"
  },
  {
    "id": "12862910",
    "timestamp": "Nov 3, 2016 1:22:48 PM",
    "topic": "Scala 2.12.0 is now available",
    "url": "http://www.scala-lang.org/news/2.12.0",
    "votes": 18,
    "posted": "Nov 3, 2016 12:06:47 PM"
  },
  {
    "id": "12862894",
    "timestamp": "Nov 3, 2016 12:12:43 PM",
    "topic": "Mentat (YC S16) is hiring a software engineer",
    "url": "https://angel.co/mentatapp/jobs/172775-software-engineer",
    "votes": 1,
    "posted": "Nov 3, 2016 12:05:02 PM"
  },
  {
    "id": "12862789",
    "timestamp": "Nov 3, 2016 12:32:44 PM",
    "topic": "The secret world of microwave networks",
    "url": "http://arstechnica.co.uk/information-technology/2016/11/private-microwave-networks-financial-hft/",
    "votes": 4,
    "posted": "Nov 3, 2016 11:41:47 AM"
  },
  {
    "id": "12862741",
    "timestamp": "Nov 3, 2016 11:52:41 AM",
    "topic": "Safer to Puff, E-Cigarettes Can’t Shake Their Reputation as a Menace",
    "url": "http://www.nytimes.com/2016/11/02/health/e-cigarette-vape-njoy-bankruptcy.html",
    "votes": 3,
    "posted": "Nov 3, 2016 11:27:17 AM"
  },
  {
    "id": "12862736",
    "timestamp": "Nov 3, 2016 11:52:41 AM",
    "topic": "British Government loses Article 50 court fight",
    "url": "http://www.bbc.co.uk/news/uk-politics-37857785",
    "votes": 25,
    "posted": "Nov 3, 2016 11:26:08 AM"
  },
  {
    "id": "12862721",
    "timestamp": "Nov 3, 2016 5:53:11 PM",
    "topic": "Korg Monologue – Monophonic Analogue Synthesizer",
    "url": "http://www.korg.com/us/products/synthesizers/monologue/",
    "votes": 4,
    "posted": "Nov 3, 2016 11:23:17 AM"
  },
  {
    "id": "12862608",
    "timestamp": "Nov 3, 2016 11:02:37 AM",
    "topic": "Org mode 9.0 released",
    "url": "http://orgmode.org/Changes.html",
    "votes": 4,
    "posted": "Nov 3, 2016 10:46:50 AM"
  },
  {
    "id": "12862541",
    "timestamp": "Nov 3, 2016 2:52:55 PM",
    "topic": "Fasttext and Torch: A fasttext implementation based on Torch",
    "url": "https://github.com/kemaswill/fasttext_torch",
    "votes": 6,
    "posted": "Nov 3, 2016 10:29:30 AM"
  },
  {
    "id": "12862488",
    "timestamp": "Nov 3, 2016 10:22:34 AM",
    "topic": "Mozilla Persona will shut down later this month",
    "url": "https://wiki.mozilla.org/Identity/Persona_Shutdown_Guidelines_for_Reliers",
    "votes": 3,
    "posted": "Nov 3, 2016 10:12:12 AM"
  },
  {
    "id": "12862355",
    "timestamp": "Nov 3, 2016 10:02:32 AM",
    "topic": "Mozilla, WebKit, Chrome removing a feature to protect consumers privacy",
    "url": "http://www.bleepingcomputer.com/news/software/battery-status-api-being-removed-from-firefox-due-to-privacy-concerns/",
    "votes": 3,
    "posted": "Nov 3, 2016 9:29:26 AM"
  },
  {
    "id": "12862323",
    "timestamp": "Nov 3, 2016 12:22:44 PM",
    "topic": "The 2016 MacBook Pro reviewed: An expensive MacBook Air on the inside",
    "url": "http://arstechnica.co.uk/apple/2016/11/macbook-pro-2016-no-touch-bar-review/",
    "votes": 4,
    "posted": "Nov 3, 2016 9:18:09 AM"
  },
  {
    "id": "12862308",
    "timestamp": "Nov 3, 2016 2:02:52 PM",
    "topic": "Making high-performance batteries from junkyard scraps",
    "url": "https://news.vanderbilt.edu/2016/11/02/making-high-performance-batteries-from-junkyard-scraps/",
    "votes": 3,
    "posted": "Nov 3, 2016 9:13:33 AM"
  },
  {
    "id": "12862268",
    "timestamp": "Nov 3, 2016 9:32:29 AM",
    "topic": "Aleppo siege: UN envoy Mistura \u0027appalled\u0027 by rebel attacks",
    "url": "http://www.bbc.com/news/world-middle-east-37816938",
    "votes": 4,
    "posted": "Nov 3, 2016 9:00:52 AM"
  },
  {
    "id": "12862195",
    "timestamp": "Nov 3, 2016 9:02:26 AM",
    "topic": "Show HN: Portainer – A lightweight management UI for Docker",
    "url": "http://portainer.io",
    "votes": 5,
    "posted": "Nov 3, 2016 8:36:17 AM"
  },
  {
    "id": "12862164",
    "timestamp": "Nov 3, 2016 9:42:30 AM",
    "topic": "How Steve Jobs Became a Billionaire",
    "url": "http://fortune.com/steve-jobs-pixar-apple-lawrence-levy/",
    "votes": 7,
    "posted": "Nov 3, 2016 8:28:02 AM"
  },
  {
    "id": "12862144",
    "timestamp": "Nov 3, 2016 9:02:27 AM",
    "topic": "A Bayesian election forecast",
    "url": "http://www.slate.com/features/pkremp_forecast/report.html",
    "votes": 4,
    "posted": "Nov 3, 2016 8:19:07 AM"
  },
  {
    "id": "12862139",
    "timestamp": "Nov 3, 2016 9:02:26 AM",
    "topic": "Migrating Pinterest profiles to React",
    "url": "https://engineering.pinterest.com/blog/migrating-pinterest-profiles-react",
    "votes": 5,
    "posted": "Nov 3, 2016 8:17:48 AM"
  },
  {
    "id": "12862130",
    "timestamp": "Nov 3, 2016 8:32:24 AM",
    "topic": "For the Cost of an iPhone, You Can Now Buy a Wind Turbine That Can Power a House",
    "url": "http://theusualroutine.com/2016/11/01/cost-iphone-can-now-buy-wind-turbine-can-power-entire-house-lifetime/",
    "votes": 4,
    "posted": "Nov 3, 2016 8:15:10 AM"
  },
  {
    "id": "12862061",
    "timestamp": "Nov 3, 2016 12:12:43 PM",
    "topic": "Razer Blade Stealth review",
    "url": "http://www.notebookcheck.net/Razer-Blade-Stealth-i7-7500U-Notebook-Review.182060.0.html",
    "votes": 3,
    "posted": "Nov 3, 2016 7:54:55 AM"
  },
  {
    "id": "12861920",
    "timestamp": "Nov 3, 2016 7:12:17 AM",
    "topic": "Streak (YC S11) Hiring a Customer Solutions Engineer",
    "votes": 1,
    "posted": "Nov 3, 2016 7:09:33 AM"
  },
  {
    "id": "12861855",
    "timestamp": "Nov 3, 2016 7:42:20 AM",
    "topic": "New Alzheimer’s Drug Clears Milestone in Human Clinical Trial",
    "url": "https://www.scientificamerican.com/article/new-alzheimer-s-drug-clears-milestone-in-human-clinical-trial1/",
    "votes": 4,
    "posted": "Nov 3, 2016 6:45:07 AM"
  },
  {
    "id": "12861823",
    "timestamp": "Nov 3, 2016 7:22:18 AM",
    "topic": "Curse broken Cubs win World Series with epic Game 7",
    "url": "http://www.msn.com/en-us/sports/mlb/curse-broken-cubs-win-world-series-with-epic-game-7/ar-AAjOjB4?OCID\u003dansmsnnews11",
    "votes": 8,
    "posted": "Nov 3, 2016 6:33:52 AM"
  },
  {
    "id": "12861815",
    "timestamp": "Nov 3, 2016 7:22:18 AM",
    "topic": "Too Many Startups Like Playing Startup",
    "url": "https://www.groovehq.com/blog/startups-playing-startup?utm_campaign\u003dMattermark+Daily\u0026utm_source\u003dhs_email\u0026utm_medium\u003demail\u0026utm_content\u003d36789099\u0026_hsenc\u003dp2ANqtz-9NgMcFUfuqycnQ_uT255UK9gZGEuMIpquw8R4WevPm5IgL0w9k8eSWlTm7ujNJ47OT0tbPhm0HNABuTZi9gk2c5NcXOA\u0026_hsmi\u003d36789099",
    "votes": 11,
    "posted": "Nov 3, 2016 6:30:33 AM"
  },
  {
    "id": "12861699",
    "timestamp": "Nov 3, 2016 10:42:36 AM",
    "topic": "Ask HN: What would you do on your sabbatical?",
    "votes": 5,
    "posted": "Nov 3, 2016 5:56:13 AM"
  },
  {
    "id": "12861635",
    "timestamp": "Nov 3, 2016 6:32:14 AM",
    "topic": "JavaScript and the Web Platform with Brendan Eich",
    "url": "https://javascriptair.com/episodes/2016-11-02/",
    "votes": 3,
    "posted": "Nov 3, 2016 5:39:53 AM"
  },
  {
    "id": "12861512",
    "timestamp": "Nov 3, 2016 7:12:17 AM",
    "topic": "How Bayesian Inference Works",
    "url": "http://www.datasciencecentral.com/profiles/blogs/how-bayesian-inference-works",
    "votes": 5,
    "posted": "Nov 3, 2016 5:06:21 AM"
  },
  {
    "id": "12861492",
    "timestamp": "Nov 3, 2016 5:32:09 AM",
    "topic": "How Uber Manages a Million Writes per Second",
    "url": "http://highscalability.com/blog/2016/9/28/how-uber-manages-a-million-writes-per-second-using-mesos-and.html",
    "votes": 3,
    "posted": "Nov 3, 2016 4:59:49 AM"
  },
  {
    "id": "12861472",
    "timestamp": "Nov 3, 2016 5:12:06 AM",
    "topic": "18F, the Government in-house tech startup, losing money",
    "url": "https://www.washingtonpost.com/news/powerpost/wp/2016/11/02/why-a-federal-high-tech-start-up-is-a-money-loser",
    "votes": 3,
    "posted": "Nov 3, 2016 4:52:49 AM"
  },
  {
    "id": "12861410",
    "timestamp": "Nov 3, 2016 9:02:27 AM",
    "topic": "The audacious plan to bring back supersonic flight",
    "url": "http://www.vox.com/energy-and-environment/2016/11/2/13409324/supersonic-flight-concorde",
    "votes": 3,
    "posted": "Nov 3, 2016 4:34:07 AM"
  },
  {
    "id": "12861318",
    "timestamp": "Nov 3, 2016 4:22:01 AM",
    "topic": "WOT Firefox Addon selling user data",
    "url": "http://www.ndr.de/nachrichten/netzwelt/Nackt-im-Netz-Millionen-Nutzer-ausgespaeht,nacktimnetz100.html",
    "votes": 9,
    "posted": "Nov 3, 2016 4:02:56 AM"
  },
  {
    "id": "12861305",
    "timestamp": "Nov 3, 2016 5:42:10 AM",
    "topic": "Writing more legible SQL",
    "url": "http://www.craigkerstiens.com/2016/01/08/writing-better-sql/",
    "votes": 8,
    "posted": "Nov 3, 2016 4:00:30 AM"
  },
  {
    "id": "12861119",
    "timestamp": "Nov 3, 2016 4:52:04 AM",
    "topic": "In the future, we will all be rental serfs",
    "url": "http://ftalphaville.ft.com/2016/11/02/2178646/in-the-future-we-will-all-be-rental-serfs/",
    "votes": 3,
    "posted": "Nov 3, 2016 3:19:51 AM"
  },
  {
    "id": "12861113",
    "timestamp": "Nov 3, 2016 3:21:56 AM",
    "topic": "iCracked (YC W12) Is Hiring Lead Engineers and Product Managers",
    "url": "https://www.icracked.com/careers",
    "votes": 1,
    "posted": "Nov 3, 2016 3:18:42 AM"
  },
  {
    "id": "12861100",
    "timestamp": "Nov 3, 2016 3:31:57 AM",
    "topic": "Pew Research: Donald Trump voters are more tolerant than Hillary Clinton voters",
    "url": "http://www.pewresearch.org/fact-tank/2016/11/01/its-harder-for-clinton-supporters-to-respect-trump-backers-than-vice-versa/",
    "votes": 5,
    "posted": "Nov 3, 2016 3:16:16 AM"
  },
  {
    "id": "12861097",
    "timestamp": "Nov 3, 2016 4:12:00 AM",
    "topic": "How the politics of debt explains everything",
    "url": "http://theweek.com/articles/657252/how-politics-debt-explains-everything",
    "votes": 4,
    "posted": "Nov 3, 2016 3:16:01 AM"
  },
  {
    "id": "12861053",
    "timestamp": "Nov 3, 2016 6:52:15 AM",
    "topic": "Why are some of the ugliest sites on the Web also the most popular?",
    "url": "http://thenextweb.com/dd/2016/02/17/why-are-some-of-the-ugliest-sites-on-the-web-also-the-most-popular/",
    "votes": 8,
    "posted": "Nov 3, 2016 3:09:27 AM"
  },
  {
    "id": "12860994",
    "timestamp": "Nov 3, 2016 4:32:02 AM",
    "topic": "I’m a Venture Backed Startup Founder and I Just Had a Baby",
    "url": "https://medium.com/@adi.zelnik.nouriel/im-a-venture-backed-startup-founder-and-i-just-had-a-baby-omg-25efb90af7bd#.semniirz8",
    "votes": 4,
    "posted": "Nov 3, 2016 2:54:25 AM"
  },
  {
    "id": "12860970",
    "timestamp": "Nov 3, 2016 4:12:00 AM",
    "topic": "Notes on my full-time testing of 7 Dropbox alternatives (2015)",
    "url": "https://vxlabs.com/2015/03/29/notes-testing-7-dropbox-alternatives/",
    "votes": 4,
    "posted": "Nov 3, 2016 2:47:03 AM"
  },
  {
    "id": "12860865",
    "timestamp": "Nov 3, 2016 3:01:55 AM",
    "topic": "Dear Microsoft [from Slack]",
    "url": "https://slackhq.com/dear-microsoft-8d20965d2849",
    "votes": 4,
    "posted": "Nov 3, 2016 2:20:37 AM"
  },
  {
    "id": "12860860",
    "timestamp": "Nov 3, 2016 3:31:57 AM",
    "topic": "Oldest known evidence of Aboriginal settlement in Australia found (49,000 years)",
    "url": "http://www.abc.net.au/news/2016-11-03/rock-shelter-shows-early-aboriginal-settlement-in-arid-australia/7983864",
    "votes": 3,
    "posted": "Nov 3, 2016 2:19:21 AM"
  },
  {
    "id": "12860834",
    "timestamp": "Nov 3, 2016 2:02:52 PM",
    "topic": "Why America Needs India\u0027s Rockets",
    "url": "https://www.bloomberg.com/view/articles/2016-11-01/why-america-needs-india-s-rockets",
    "votes": 5,
    "posted": "Nov 3, 2016 2:13:45 AM"
  },
  {
    "id": "12860806",
    "timestamp": "Nov 3, 2016 2:41:53 AM",
    "topic": "Visual Studio Code breaks npmjs.org, forced to rollback",
    "url": "https://code.visualstudio.com/updates#_17-rollback",
    "votes": 6,
    "posted": "Nov 3, 2016 2:07:03 AM"
  },
  {
    "id": "12860799",
    "timestamp": "Nov 3, 2016 4:12:00 AM",
    "topic": "Noam Chomsky and the Bicycle Theory",
    "url": "http://www.nytimes.com/2016/11/06/education/edlife/on-being-noam-chomsky.html",
    "votes": 5,
    "posted": "Nov 3, 2016 2:04:47 AM"
  },
  {
    "id": "12860790",
    "timestamp": "Nov 3, 2016 2:02:52 PM",
    "topic": "The Meaning of the Bones: Does Shakespeare really have “universal appeal”?",
    "url": "http://www.theparisreview.org/blog/2016/11/02/the-meaning-of-the-bones/",
    "votes": 4,
    "posted": "Nov 3, 2016 2:02:58 AM"
  },
  {
    "id": "12860788",
    "timestamp": "Nov 3, 2016 1:42:50 PM",
    "topic": "Supercomputer comes up with a profile of dark matter",
    "url": "http://phys.org/news/2016-11-supercomputer-profile-dark-standard-extension.html",
    "votes": 4,
    "posted": "Nov 3, 2016 2:01:59 AM"
  },
  {
    "id": "12860729",
    "timestamp": "Nov 3, 2016 3:01:55 AM",
    "topic": "Copyright Office Sets Trap for Unwary Website Owners",
    "url": "https://www.eff.org/deeplinks/2016/11/copyright-office-sets-trap-unwary-website-owners",
    "votes": 4,
    "posted": "Nov 3, 2016 1:50:27 AM"
  },
  {
    "id": "12860727",
    "timestamp": "Nov 3, 2016 2:21:51 AM",
    "topic": "The disturbing Facebook scandal we\u0027re all ignoring",
    "url": "http://www.businessinsider.com/facebook-scandal-we-ignore-2016-11",
    "votes": 3,
    "posted": "Nov 3, 2016 1:50:26 AM"
  },
  {
    "id": "12860655",
    "timestamp": "Nov 3, 2016 1:52:51 PM",
    "topic": "He Loved Opium, Murder and Wordsworth",
    "url": "http://www.nytimes.com/2016/10/30/books/review/he-loved-opium-murder-and-wordsworth.html?_r\u003d0",
    "votes": 7,
    "posted": "Nov 3, 2016 1:33:53 AM"
  },
  {
    "id": "12860602",
    "timestamp": "Nov 3, 2016 2:01:49 AM",
    "topic": "Show HN: SkateJS – a cross framework web components based library",
    "url": "https://github.com/skatejs/skatejs",
    "votes": 4,
    "posted": "Nov 3, 2016 1:23:27 AM"
  },
  {
    "id": "12860427",
    "timestamp": "Nov 3, 2016 4:12:00 AM",
    "topic": "Car insurance rates to be determined by Facebook posts",
    "url": "https://thestack.com/world/2016/11/02/admiral-facebook-car-insurance/",
    "votes": 3,
    "posted": "Nov 3, 2016 12:48:55 AM"
  },
  {
    "id": "12860413",
    "timestamp": "Nov 3, 2016 6:22:13 AM",
    "topic": "Getting what you paid for? Benchmark your VPS in 5 mins",
    "url": "https://haydenjames.io/web-host-doesnt-want-read-benchmark-vps/",
    "votes": 6,
    "posted": "Nov 3, 2016 12:45:49 AM"
  },
  {
    "id": "12860368",
    "timestamp": "Nov 3, 2016 2:41:53 AM",
    "topic": "Germany unveils zero-emissions train that only emits steam",
    "url": "http://www.independent.co.uk/news/world/europe/germany-unveils-zero-emissions-train-only-emits-steam-lower-saxony-hydrogen-powered-a7391581.html",
    "votes": 3,
    "posted": "Nov 3, 2016 12:35:10 AM"
  },
  {
    "id": "12860281",
    "timestamp": "Nov 3, 2016 1:21:46 AM",
    "topic": "When You Need Blockchain vs. Database",
    "url": "https://pbs.twimg.com/media/Cn2zMbTWYAAQA6i.png",
    "votes": 4,
    "posted": "Nov 3, 2016 12:18:32 AM"
  },
  {
    "id": "12860201",
    "timestamp": "Nov 3, 2016 1:31:47 AM",
    "topic": "Fitbit crashes 30% after missing on sales",
    "url": "http://uk.businessinsider.com/fitbit-shares-fall-after-q3-earnings-2016-11",
    "votes": 4,
    "posted": "Nov 3, 2016 12:04:46 AM"
  },
  {
    "id": "12860160",
    "timestamp": "Nov 3, 2016 12:21:41 AM",
    "topic": "Phil Schiller Inital Response to MBP Criticism",
    "url": "http://www.independent.co.uk/life-style/gadgets-and-tech/features/apple-macbook-pro-new-philip-schiller-interview-phil-iphone-ios-criticism-a7393156.html",
    "votes": 3,
    "posted": "Nov 2, 2016 11:58:54 PM"
  },
  {
    "id": "12860083",
    "timestamp": "Nov 2, 2016 11:51:38 PM",
    "topic": "AptDeco Is Hiring Full Stack Engineers and General Manager in NYC and DC",
    "url": "http://www.aptdeco.com/jobs",
    "votes": 1,
    "posted": "Nov 2, 2016 11:46:19 PM"
  },
  {
    "id": "12859989",
    "timestamp": "Nov 3, 2016 12:51:44 AM",
    "topic": "How This Poster in a Women\u0027s Restroom at a Bar Cleverly Combats Sexual Assault",
    "url": "http://www.adweek.com/adfreak/how-poster-womens-restroom-bar-cleverly-combats-sexual-assault-174370",
    "votes": 3,
    "posted": "Nov 2, 2016 11:31:01 PM"
  },
  {
    "id": "12859896",
    "timestamp": "Nov 3, 2016 1:31:47 AM",
    "topic": "How YC-Backed Vote.org Could Change Our Flawed Election System",
    "url": "https://backchannel.com/the-simple-secret-weapon-that-could-change-elections-9e51f95038df#.uyl8q5weq",
    "votes": 6,
    "posted": "Nov 2, 2016 11:14:46 PM"
  },
  {
    "id": "12859867",
    "timestamp": "Nov 3, 2016 12:01:39 AM",
    "topic": "Ask HN: How does unlimited vacation policy work in your company?",
    "votes": 3,
    "posted": "Nov 2, 2016 11:09:39 PM"
  },
  {
    "id": "12859806",
    "timestamp": "Nov 3, 2016 4:32:02 AM",
    "topic": "India’s digital payments industry will grow to $500.0B by 2020 [pdf]",
    "url": "http://image-src.bcg.com/BCG_COM/BCG-Google%20Digital%20Payments%202020-July%202016_tcm21-39245.pdf",
    "votes": 5,
    "posted": "Nov 2, 2016 11:03:52 PM"
  },
  {
    "id": "12859726",
    "timestamp": "Nov 3, 2016 2:21:51 AM",
    "topic": "Piper Disney Pixar 1080p [video]",
    "url": "https://vimeo.com/189901272",
    "votes": 4,
    "posted": "Nov 2, 2016 10:56:13 PM"
  },
  {
    "id": "12859436",
    "timestamp": "Nov 2, 2016 11:51:38 PM",
    "topic": "Nest\u0027s economics don\u0027t work. Why IoT devices should be sold as services",
    "url": "https://medium.com/@dconrad/why-iot-devices-should-be-sold-as-services-f73951871006",
    "votes": 3,
    "posted": "Nov 2, 2016 10:25:07 PM"
  },
  {
    "id": "12859351",
    "timestamp": "Nov 2, 2016 10:51:32 PM",
    "topic": "Things I Wish I\u0027d Known At 20",
    "url": "http://www.teejayvanslyke.com/2016/11/02/what-i-wish-id-known-at-20/",
    "votes": 5,
    "posted": "Nov 2, 2016 10:14:59 PM"
  },
  {
    "id": "12859347",
    "timestamp": "Nov 2, 2016 10:31:29 PM",
    "topic": "Visual Studio Code October Update – 1.7",
    "url": "https://code.visualstudio.com/updates/v1_7",
    "votes": 20,
    "posted": "Nov 2, 2016 10:14:46 PM"
  },
  {
    "id": "12859152",
    "timestamp": "Nov 2, 2016 10:31:29 PM",
    "topic": "The new Uber App",
    "url": "https://www.youtube.com/watch?v\u003dI1DdoN6NLDg",
    "votes": 4,
    "posted": "Nov 2, 2016 9:51:07 PM"
  },
  {
    "id": "12859042",
    "timestamp": "Nov 2, 2016 11:31:36 PM",
    "topic": "Ask HN: Any devs who want to partner up with a designer to spice up Linux Apps?",
    "votes": 4,
    "posted": "Nov 2, 2016 9:41:03 PM"
  },
  {
    "id": "12858993",
    "timestamp": "Nov 2, 2016 10:01:25 PM",
    "topic": "Facebook Q3 2016 Results",
    "url": "https://investor.fb.com/investor-news/press-release-details/2016/Facebook-Reports-Third-Quarter-2016-Results/default.aspx",
    "votes": 6,
    "posted": "Nov 2, 2016 9:36:46 PM"
  },
  {
    "id": "12858957",
    "timestamp": "Nov 2, 2016 10:11:27 PM",
    "topic": "Wait until insurers can see the contents of your fridge",
    "url": "https://www.theguardian.com/technology/2016/nov/02/admiral-facebook-data-insurers-internet-of-things",
    "votes": 3,
    "posted": "Nov 2, 2016 9:31:42 PM"
  },
  {
    "id": "12858913",
    "timestamp": "Nov 3, 2016 12:31:42 AM",
    "topic": "JAVA IS SUPERIOR TO REACT NATIVE IN PRACTICALLY EVERY WAY",
    "url": "http://www.codenameone.com/blog/java-is-superior-to-react-native-in-practically-every-way.html",
    "votes": 3,
    "posted": "Nov 2, 2016 9:26:43 PM"
  },
  {
    "id": "12858897",
    "timestamp": "Nov 3, 2016 2:31:52 AM",
    "topic": "Adobe’s Project Felix Uses AI to Help You Craft Hyper-Realistic 3-D Renderings",
    "url": "https://www.wired.com/2016/11/adobe-project-felix/",
    "votes": 4,
    "posted": "Nov 2, 2016 9:25:12 PM"
  },
  {
    "id": "12858890",
    "timestamp": "Nov 2, 2016 9:51:24 PM",
    "topic": "Steam bans misleading “bullshots” from its product pages",
    "url": "http://arstechnica.com/gaming/2016/11/steam-bans-misleading-bullshots-from-its-product-pages/",
    "votes": 4,
    "posted": "Nov 2, 2016 9:23:37 PM"
  },
  {
    "id": "12858826",
    "timestamp": "Nov 3, 2016 1:41:48 AM",
    "topic": "Hillary Clinton recognized as contributor to the open source project BleachBit",
    "url": "http://www.bleachbit.org/contributors",
    "votes": 7,
    "posted": "Nov 2, 2016 9:16:35 PM"
  },
  {
    "id": "12858716",
    "timestamp": "Nov 2, 2016 9:21:20 PM",
    "topic": "World\u0027s Largest Space Telescope Is Complete, Expected to Launch in 2018",
    "url": "http://www.space.com/34593-james-webb-space-telescope-complete-2018-launch.html?utm_source\u003dnotification",
    "votes": 3,
    "posted": "Nov 2, 2016 9:02:27 PM"
  },
  {
    "id": "12858689",
    "timestamp": "Nov 2, 2016 11:51:38 PM",
    "topic": "How to buy a $35,000 brand-new electric car for under $14,000",
    "url": "http://www.marketwatch.com/story/how-to-buy-a-35000-brand-new-electric-car-for-under-14000-2016-11-02",
    "votes": 4,
    "posted": "Nov 2, 2016 8:59:00 PM"
  },
  {
    "id": "12858637",
    "timestamp": "Nov 2, 2016 9:31:21 PM",
    "topic": "Tesla battery data shows path to over 500,000 miles on a single pack",
    "url": "https://electrek.co/2016/11/01/tesla-battery-degradation/",
    "votes": 4,
    "posted": "Nov 2, 2016 8:51:21 PM"
  },
  {
    "id": "12858627",
    "timestamp": "Nov 2, 2016 9:31:21 PM",
    "topic": "You can’t fix diversity in tech without fixing the technical interview",
    "url": "http://blog.interviewing.io/you-cant-fix-diversity-in-tech-without-fixing-the-technical-interview/",
    "votes": 13,
    "posted": "Nov 2, 2016 8:50:18 PM"
  },
  {
    "id": "12858480",
    "timestamp": "Nov 2, 2016 8:51:16 PM",
    "topic": "Ten Ways Your Data Project Is Going to Fail",
    "url": "http://www.martingoodson.com/ten-ways-your-data-project-is-going-to-fail/",
    "votes": 6,
    "posted": "Nov 2, 2016 8:33:27 PM"
  },
  {
    "id": "12858432",
    "timestamp": "Nov 3, 2016 3:22:58 PM",
    "topic": "Show HN: Unito – A sync engine for GitHub/JIRA/Wrike/Asana/+",
    "url": "https://unito.io/home",
    "votes": 9,
    "posted": "Nov 2, 2016 8:28:04 PM"
  },
  {
    "id": "12858382",
    "timestamp": "Nov 2, 2016 8:31:13 PM",
    "topic": "Review: The $1,499 2016 MacBook Pro is an expensive MacBook Air on the inside",
    "url": "http://m.arstechnica.com/apple/2016/11/review-cheapest-2016-macbook-pro-is-good-but-its-missing-all-the-cool-stuff/",
    "votes": 4,
    "posted": "Nov 2, 2016 8:23:36 PM"
  },
  {
    "id": "12858347",
    "timestamp": "Nov 2, 2016 8:51:16 PM",
    "topic": "Vim, 25 years since initial release",
    "url": "https://en.wikipedia.org/wiki/Vim_(text_editor)",
    "votes": 4,
    "posted": "Nov 2, 2016 8:20:07 PM"
  },
  {
    "id": "12858326",
    "timestamp": "Nov 2, 2016 9:01:18 PM",
    "topic": "Plasma Mobile: A Fully Open Phone OS from the KDE Project",
    "url": "https://plasma-mobile.org/",
    "votes": 9,
    "posted": "Nov 2, 2016 8:18:00 PM"
  },
  {
    "id": "12858137",
    "timestamp": "Nov 2, 2016 8:01:11 PM",
    "topic": "SimplyInsured (YC W13) Is Hiring Software Engineers",
    "url": "https://www.simplyinsured.com/jobs",
    "votes": 1,
    "posted": "Nov 2, 2016 8:00:06 PM"
  },
  {
    "id": "12858130",
    "timestamp": "Nov 2, 2016 11:41:37 PM",
    "topic": "How Sociopathic Capitalism Came to Rule the World",
    "url": "http://www.theatlantic.com/business/archive/2016/11/sociopathic-capitalism/506240/?single_page\u003dtrue",
    "votes": 4,
    "posted": "Nov 2, 2016 7:59:37 PM"
  },
  {
    "id": "12858127",
    "timestamp": "Nov 3, 2016 5:42:10 AM",
    "topic": "MH370 out of control and spiraling fast before crash, report says",
    "url": "http://edition.cnn.com/2016/11/02/asia/mh370-crash-landing-report/index.html",
    "votes": 6,
    "posted": "Nov 2, 2016 7:59:23 PM"
  },
  {
    "id": "12858120",
    "timestamp": "Nov 3, 2016 2:11:50 AM",
    "topic": "BART janitor grossed $270K in pay and benefits last year",
    "url": "http://www.eastbaytimes.com/2016/11/01/bart-janitor-grossed-270k-in-pay-and-benefits-last-year/",
    "votes": 6,
    "posted": "Nov 2, 2016 7:59:07 PM"
  },
  {
    "id": "12857988",
    "timestamp": "Nov 3, 2016 6:53:19 PM",
    "topic": "An Artist Is Building a Parthenon of Banned Books",
    "url": "http://www.smithsonianmag.com/smart-news/artist-building-parthenon-banned-books-180960923/?no-ist",
    "votes": 3,
    "posted": "Nov 2, 2016 7:47:27 PM"
  },
  {
    "id": "12857883",
    "timestamp": "Nov 2, 2016 10:01:25 PM",
    "topic": "The New Uber Rider App",
    "url": "http://www.theverge.com/2016/11/2/13490142/uber-app-redesign-streamline-shortcut-snapchat-filter",
    "votes": 5,
    "posted": "Nov 2, 2016 7:36:47 PM"
  },
  {
    "id": "12857869",
    "timestamp": "Nov 2, 2016 7:41:09 PM",
    "topic": "Real and Stealthy Attacks on State-Of-the-Art Face Recognition [pdf]",
    "url": "https://www.cs.cmu.edu/~sbhagava/papers/face-rec-ccs16.pdf",
    "votes": 3,
    "posted": "Nov 2, 2016 7:34:51 PM"
  },
  {
    "id": "12857792",
    "timestamp": "Nov 2, 2016 7:51:10 PM",
    "topic": "Our hiring process at Argo",
    "url": "https://dev.to/argo/our-hiring-process",
    "votes": 5,
    "posted": "Nov 2, 2016 7:27:00 PM"
  },
  {
    "id": "12857751",
    "timestamp": "Nov 2, 2016 7:41:08 PM",
    "topic": "Surface Book – It’s Easy to Switch from Mac to Surface",
    "url": "https://www.microsoft.com/en-us/surface/devices/surface-book/compare-to-mac",
    "votes": 5,
    "posted": "Nov 2, 2016 7:22:38 PM"
  },
  {
    "id": "12857738",
    "timestamp": "Nov 2, 2016 8:51:16 PM",
    "topic": "The new IFTTT is here",
    "url": "https://ifttt.com/blog/2016/11/the-new-ifttt-is-here",
    "votes": 5,
    "posted": "Nov 2, 2016 7:20:59 PM"
  },
  {
    "id": "12857736",
    "timestamp": "Nov 2, 2016 8:31:14 PM",
    "topic": "Robot consumes organic matter for power",
    "url": "http://www.dailymail.co.uk/sciencetech/article-3894132/amp/Scavenger-robot-EATS-organic-matter-Soft-bodied-foraging-droid-used-clean-contaminated-water.html",
    "votes": 3,
    "posted": "Nov 2, 2016 7:20:40 PM"
  },
  {
    "id": "12857607",
    "timestamp": "Nov 2, 2016 8:11:12 PM",
    "topic": "The Culture of Childhood: We’ve Almost Destroyed It",
    "url": "https://www.psychologytoday.com/blog/freedom-learn/201610/the-culture-childhood-we-ve-almost-destroyed-it",
    "votes": 5,
    "posted": "Nov 2, 2016 7:05:53 PM"
  },
  {
    "id": "12857592",
    "timestamp": "Nov 2, 2016 11:31:36 PM",
    "topic": "Alzheimer\u0027s treatment within reach after successful drug trial",
    "url": "https://www.theguardian.com/society/2016/nov/02/alzheimers-treatment-within-reach-after-successful-drug-trial-amyloid-plaques-bace1",
    "votes": 8,
    "posted": "Nov 2, 2016 7:04:06 PM"
  },
  {
    "id": "12857585",
    "timestamp": "Nov 3, 2016 3:22:58 PM",
    "topic": "Tangled Up in Spacetime",
    "url": "https://www.scientificamerican.com/article/tangled-up-in-spacetime/",
    "votes": 4,
    "posted": "Nov 2, 2016 7:03:41 PM"
  },
  {
    "id": "12857549",
    "timestamp": "Nov 3, 2016 12:51:44 AM",
    "topic": "Shepherding Random Numbers",
    "url": "http://inconvergent.net/shepherding-random-numbers/",
    "votes": 3,
    "posted": "Nov 2, 2016 7:00:14 PM"
  },
  {
    "id": "12857460",
    "timestamp": "Nov 2, 2016 7:11:05 PM",
    "topic": "Mobile is now the dominant source of worldwide internet usage",
    "url": "http://gs.statcounter.com/press/mobile-and-tablet-internet-usage-exceeds-desktop-for-first-time-worldwide",
    "votes": 3,
    "posted": "Nov 2, 2016 6:51:58 PM"
  },
  {
    "id": "12857404",
    "timestamp": "Nov 2, 2016 8:41:15 PM",
    "topic": "How the Internet Is Loosening Our Grip on the Truth",
    "url": "http://www.nytimes.com/2016/11/03/technology/how-the-internet-is-loosening-our-grip-on-the-truth.html",
    "votes": 3,
    "posted": "Nov 2, 2016 6:45:44 PM"
  },
  {
    "id": "12857393",
    "timestamp": "Nov 2, 2016 7:01:04 PM",
    "topic": "I tried to buy a satellite and all I got was this lousy $67,000",
    "url": "http://www.theregister.co.uk/2013/01/02/buythissatellite_project_what_happened_next/",
    "votes": 3,
    "posted": "Nov 2, 2016 6:44:04 PM"
  },
  {
    "id": "12857278",
    "timestamp": "Nov 2, 2016 10:41:30 PM",
    "topic": "A Hard Peace",
    "url": "https://nickdenton.org/a-hard-peace-e161e19bfaf",
    "votes": 3,
    "posted": "Nov 2, 2016 6:32:48 PM"
  },
  {
    "id": "12857258",
    "timestamp": "Nov 2, 2016 7:11:05 PM",
    "topic": "The NSA Chief Has a Phone for Top-Secret Messaging.  How It Works",
    "url": "http://www.defenseone.com/technology/2016/11/nsa-chief-has-phone-top-secret-messaging-heres-how-it-works/132845/",
    "votes": 5,
    "posted": "Nov 2, 2016 6:31:16 PM"
  },
  {
    "id": "12857195",
    "timestamp": "Nov 2, 2016 7:11:05 PM",
    "topic": "“Dear Microsoft” – Your Friends at Slack",
    "url": "https://slackhq.com/dear-microsoft-8d20965d2849#.abb8mff6k",
    "votes": 6,
    "posted": "Nov 2, 2016 6:25:21 PM"
  },
  {
    "id": "12857140",
    "timestamp": "Nov 2, 2016 8:41:15 PM",
    "topic": "A New Spin on the Quantum Brain",
    "url": "https://www.quantamagazine.org/20161102-quantum-neuroscience/",
    "votes": 5,
    "posted": "Nov 2, 2016 6:21:14 PM"
  },
  {
    "id": "12857107",
    "timestamp": "Nov 2, 2016 7:11:06 PM",
    "topic": "Why do millennials hate groceries?",
    "url": "http://www.theatlantic.com/business/archive/2016/11/millennials-groceries/506180/?single_page\u003dtrue",
    "votes": 4,
    "posted": "Nov 2, 2016 6:18:39 PM"
  },
  {
    "id": "12856968",
    "timestamp": "Nov 2, 2016 7:31:08 PM",
    "topic": "Introducing TJSON, a stricter, typed form of JSON",
    "url": "https://tonyarcieri.com/introducing-tjson-a-stricter-typed-form-of-json",
    "votes": 4,
    "posted": "Nov 2, 2016 6:06:42 PM"
  },
  {
    "id": "12856925",
    "timestamp": "Nov 2, 2016 6:31:00 PM",
    "topic": "Physicist honored for finding new symmetry in space and time",
    "url": "http://phys.org/news/2016-11-physicist-honored-symmetry-space.html",
    "votes": 4,
    "posted": "Nov 2, 2016 6:03:06 PM"
  },
  {
    "id": "12856806",
    "timestamp": "Nov 2, 2016 6:51:03 PM",
    "topic": "A Study Plan to Cure JavaScript Fatigue",
    "url": "https://medium.com/@sachagreif/a-study-plan-to-cure-javascript-fatigue-8ad3a54f2eb1#.vdxbscqxk",
    "votes": 4,
    "posted": "Nov 2, 2016 5:53:23 PM"
  },
  {
    "id": "12856740",
    "timestamp": "Nov 2, 2016 7:11:05 PM",
    "topic": "Show HN: Simple JavaScript Tetris",
    "url": "https://github.com/jstimpfle/tetris-on-a-plane/blob/master/tetris.js",
    "votes": 7,
    "posted": "Nov 2, 2016 5:46:55 PM"
  },
  {
    "id": "12856730",
    "timestamp": "Nov 2, 2016 6:00:57 PM",
    "topic": "Why Do Millennials Hate Groceries?",
    "url": "http://www.theatlantic.com/business/archive/2016/11/millennials-groceries/506180/?utm_source\u003dquartzfb\u0026amp;single_page\u003dtrue",
    "votes": 5,
    "posted": "Nov 2, 2016 5:45:57 PM"
  },
  {
    "id": "12856549",
    "timestamp": "Nov 2, 2016 11:21:35 PM",
    "topic": "Show HN: LoWe – Extending the functionality of Ubuntu running on Windows 10",
    "url": "https://github.com/kpocza/LoWe",
    "votes": 6,
    "posted": "Nov 2, 2016 5:29:36 PM"
  },
  {
    "id": "12856545",
    "timestamp": "Nov 2, 2016 6:00:58 PM",
    "topic": "On Wall Street, a high-ranking few still avoid email",
    "url": "http://www.reuters.com/article/us-wall-street-email-idUSKBN12W4F7",
    "votes": 3,
    "posted": "Nov 2, 2016 5:29:03 PM"
  },
  {
    "id": "12856533",
    "timestamp": "Nov 2, 2016 6:31:00 PM",
    "topic": "If Satan was a web developer",
    "url": "http://imgur.com/gallery/qA4Bu?utm_content\u003dbuffer56d42\u0026utm_medium\u003dsocial\u0026utm_source\u003dfacebook.com\u0026utm_campaign\u003dbuffer",
    "votes": 3,
    "posted": "Nov 2, 2016 5:28:13 PM"
  },
  {
    "id": "12856519",
    "timestamp": "Nov 2, 2016 7:21:07 PM",
    "topic": "New Uber App",
    "url": "https://newsroom.uber.com/newriderapp/",
    "votes": 7,
    "posted": "Nov 2, 2016 5:27:25 PM"
  },
  {
    "id": "12856488",
    "timestamp": "Nov 3, 2016 5:23:09 PM",
    "topic": "China: The Virtues of the Awful Convulsion",
    "url": "http://www.nybooks.com/articles/2016/10/27/china-the-virtues-of-the-awful-convulsion/",
    "votes": 3,
    "posted": "Nov 2, 2016 5:24:48 PM"
  },
  {
    "id": "12856287",
    "timestamp": "Nov 3, 2016 11:43:50 PM",
    "topic": "The Story of How McDonald’s First Got Its Start",
    "url": "http://www.smithsonianmag.com/history/story-how-mcdonalds-first-got-its-start-180960931/?no-ist",
    "votes": 4,
    "posted": "Nov 2, 2016 5:08:24 PM"
  },
  {
    "id": "12856224",
    "timestamp": "Nov 3, 2016 4:53:06 PM",
    "topic": "The Kingdom of the Dead: For post-Soviet people, Crimea was a gigantic madeleine",
    "url": "https://nplusonemag.com/online-only/online-only/the-kingdom-of-the-dead/",
    "votes": 3,
    "posted": "Nov 2, 2016 5:03:21 PM"
  },
  {
    "id": "12856003",
    "timestamp": "Nov 2, 2016 5:00:52 PM",
    "topic": "Microsoft Introduces Slack Competitor, Microsoft Teams",
    "url": "https://blogs.office.com/2016/11/02/introducing-microsoft-teams-the-chat-based-workspace-in-office-365/",
    "votes": 3,
    "posted": "Nov 2, 2016 4:46:34 PM"
  },
  {
    "id": "12855834",
    "timestamp": "Nov 2, 2016 5:30:55 PM",
    "topic": "MoMA makes most exhibition catalogs since 1929 available on the internet",
    "url": "https://www.moma.org/calendar/exhibitions/history",
    "votes": 4,
    "posted": "Nov 2, 2016 4:35:14 PM"
  },
  {
    "id": "12855741",
    "timestamp": "Nov 2, 2016 4:30:49 PM",
    "topic": "Captain401 (YC S15) is hiring full stack and UI engineers to reinvent the 401(k)",
    "url": "https://captain401.com/careers",
    "votes": 1,
    "posted": "Nov 2, 2016 4:27:44 PM"
  },
  {
    "id": "12855722",
    "timestamp": "Nov 2, 2016 4:40:50 PM",
    "topic": "Containerising Legacy Applications – The Clean and the Dirty Approach",
    "url": "http://blog.contino.io/blog/containerising-legacy-applications-the-clean-the-dirty-approach",
    "votes": 4,
    "posted": "Nov 2, 2016 4:26:13 PM"
  },
  {
    "id": "12855684",
    "timestamp": "Nov 2, 2016 4:40:51 PM",
    "topic": "Microsoft Teams (Slack Competitor)",
    "url": "https://products.office.com/en-US/microsoft-teams/",
    "votes": 6,
    "posted": "Nov 2, 2016 4:23:08 PM"
  },
  {
    "id": "12855636",
    "timestamp": "Nov 2, 2016 4:30:49 PM",
    "topic": "Ask HN: Experience vs. Education?",
    "votes": 5,
    "posted": "Nov 2, 2016 4:18:10 PM"
  },
  {
    "id": "12855535",
    "timestamp": "Nov 3, 2016 4:23:03 PM",
    "topic": "How pure is the beer in Germany?",
    "url": "http://www.bbc.com/travel/story/20161027-how-pure-is-the-beer-in-germany",
    "votes": 4,
    "posted": "Nov 2, 2016 4:09:56 PM"
  },
  {
    "id": "12855409",
    "timestamp": "Nov 2, 2016 9:11:19 PM",
    "topic": "New MacBook Pro Received Most Online Orders",
    "url": "http://www.macrumors.com/2016/11/02/phil-schiller-new-macbook-pro-interview/",
    "votes": 4,
    "posted": "Nov 2, 2016 3:58:22 PM"
  },
  {
    "id": "12855319",
    "timestamp": "Nov 2, 2016 4:30:49 PM",
    "topic": "[Linode] Network Update: Multihomed, Increased Transit, Peering",
    "url": "https://blog.linode.com/2016/11/02/network-update-multihomed-increased-transit-peering/",
    "votes": 6,
    "posted": "Nov 2, 2016 3:51:18 PM"
  },
  {
    "id": "12855291",
    "timestamp": "Nov 2, 2016 4:20:48 PM",
    "topic": "Dear Microsoft",
    "url": "https://slackhq.com/dear-microsoft-8d20965d2849#.3wj6j4611",
    "votes": 16,
    "posted": "Nov 2, 2016 3:49:07 PM"
  },
  {
    "id": "12855252",
    "timestamp": "Nov 2, 2016 7:51:10 PM",
    "topic": "Phil Schiller Discusses the new MacBook Pro",
    "url": "http://www.independent.co.uk/life-style/gadgets-and-tech/features/apple-macbook-pro-new-philip-schiller-interview-phil-iphone-ios-criticism-a7393156.html",
    "votes": 5,
    "posted": "Nov 2, 2016 3:46:04 PM"
  },
  {
    "id": "12855073",
    "timestamp": "Nov 2, 2016 4:10:47 PM",
    "topic": "The iMac and the Floppy Drive: A Conspiracy Theory (1998)",
    "url": "http://www.osnews.com/story/18/The_iMac_and_the_Floppy_Drive_A_Conspiracy_Theory",
    "votes": 3,
    "posted": "Nov 2, 2016 3:30:22 PM"
  },
  {
    "id": "12854895",
    "timestamp": "Nov 2, 2016 4:00:46 PM",
    "topic": "Darling – MacOS translation layer for Linux",
    "url": "https://www.darlinghq.org/",
    "votes": 13,
    "posted": "Nov 2, 2016 3:12:54 PM"
  },
  {
    "id": "12854877",
    "timestamp": "Nov 2, 2016 3:40:45 PM",
    "topic": "Pornhub Bypasses Ad Blockers with WebSockets",
    "url": "http://blog.bugreplay.com/post/152579164219/pornhubdodgesadblockersusingwebsockets?utm_source\u003dreddit-programming\u0026utm_medium\u003dpost",
    "votes": 6,
    "posted": "Nov 2, 2016 3:11:25 PM"
  },
  {
    "id": "12854785",
    "timestamp": "Nov 2, 2016 3:30:44 PM",
    "topic": "How Lyft screwed me out of a $350 referral bonus",
    "url": "http://imgur.com/gallery/QZbvw",
    "votes": 4,
    "posted": "Nov 2, 2016 3:03:09 PM"
  },
  {
    "id": "12854619",
    "timestamp": "Nov 2, 2016 3:00:41 PM",
    "topic": "Maybe Peter Thiel Is Just a Crank",
    "url": "http://nymag.com/selectall/2016/10/maybe-peter-thiel-is-just-a-crank.html",
    "votes": 10,
    "posted": "Nov 2, 2016 2:48:32 PM"
  },
  {
    "id": "12854483",
    "timestamp": "Nov 2, 2016 4:30:49 PM",
    "topic": "LastPass Multi-Device Access Is Now Free",
    "url": "https://blog.lastpass.com/2016/11/get-lastpass-everywhere-multi-device-access-is-now-free.html/",
    "votes": 9,
    "posted": "Nov 2, 2016 2:35:06 PM"
  },
  {
    "id": "12854463",
    "timestamp": "Nov 2, 2016 3:20:43 PM",
    "topic": "Ask HN: Ever been hired through a “who\u0027s hiring” post?",
    "votes": 6,
    "posted": "Nov 2, 2016 2:33:17 PM"
  },
  {
    "id": "12854453",
    "timestamp": "Nov 3, 2016 8:02:22 AM",
    "topic": "Coroutines in C",
    "url": "http://www.chiark.greenend.org.uk/~sgtatham/coroutines.html",
    "votes": 3,
    "posted": "Nov 2, 2016 2:32:00 PM"
  },
  {
    "id": "12854428",
    "timestamp": "Nov 2, 2016 3:10:42 PM",
    "topic": "LinkedIn launches Salary to chart what we earn",
    "url": "https://techcrunch.com/2016/11/02/linkedin-plots-a-place-on-the-economic-graph-launches-salary-to-chart-what-we-earn/",
    "votes": 4,
    "posted": "Nov 2, 2016 2:29:06 PM"
  },
  {
    "id": "12854336",
    "timestamp": "Nov 2, 2016 3:10:42 PM",
    "topic": "Emacs standing alone on a Linux Kernel",
    "url": "http://www.informatimago.com/linux/emacs-on-user-mode-linux.html",
    "votes": 7,
    "posted": "Nov 2, 2016 2:17:42 PM"
  },
  {
    "id": "12854331",
    "timestamp": "Nov 2, 2016 2:50:40 PM",
    "topic": "Free Shipping is a lie",
    "url": "https://www.fastcompany.com/3061686/free-shipping-is-a-lie",
    "votes": 4,
    "posted": "Nov 2, 2016 2:16:55 PM"
  },
  {
    "id": "12854320",
    "timestamp": "Nov 2, 2016 4:00:46 PM",
    "topic": "The Oblivion of Adam: What if you could remember every poem in the next life?",
    "url": "http://www.theparisreview.org/blog/2016/11/01/the-oblivion-of-adam/",
    "votes": 3,
    "posted": "Nov 2, 2016 2:15:08 PM"
  },
  {
    "id": "12854290",
    "timestamp": "Nov 3, 2016 1:51:49 AM",
    "topic": "Your HTTPS/TLS/SSL/SSH certificate tells where its key comes from",
    "url": "https://dan.enigmabridge.com/your-https-certificate-shows-where-its-key-comes-from/",
    "votes": 3,
    "posted": "Nov 2, 2016 2:10:40 PM"
  },
  {
    "id": "12854273",
    "timestamp": "Nov 2, 2016 2:30:38 PM",
    "topic": "Why Are Apple and Microsoft Using Such Old Processors in Their New Computers?",
    "url": "http://gizmodo.com/why-are-apple-and-microsoft-using-such-old-processors-i-1788302547",
    "votes": 13,
    "posted": "Nov 2, 2016 2:09:16 PM"
  },
  {
    "id": "12854209",
    "timestamp": "Nov 2, 2016 3:40:45 PM",
    "topic": "Neural Symbolic Machines: Learning Semantic Parsers with Weak Supervision",
    "url": "https://arxiv.org/abs/1611.00020",
    "votes": 3,
    "posted": "Nov 2, 2016 2:02:25 PM"
  },
  {
    "id": "12854128",
    "timestamp": "Nov 2, 2016 2:40:39 PM",
    "topic": "Microsoft Says Russian Hackers Exploited Flaw in Windows",
    "url": "http://www.wsj.com/articles/microsoft-says-russian-hackers-exploited-flaw-in-windows-1478039377",
    "votes": 3,
    "posted": "Nov 2, 2016 1:50:58 PM"
  },
  {
    "id": "12853990",
    "timestamp": "Nov 3, 2016 2:21:51 AM",
    "topic": "Using Haskell to Find Unused Spring MVC Code",
    "url": "https://tech.small-improvements.com/2016/11/01/using-haskell-to-find-unused-spring-mvc-code/",
    "votes": 8,
    "posted": "Nov 2, 2016 1:31:12 PM"
  },
  {
    "id": "12853939",
    "timestamp": "Nov 2, 2016 3:20:43 PM",
    "topic": "Still Don\u0027t Get #Blockchain?  an Explanation for Five-Year- Old",
    "url": "http://blockgeeks.com/guides/what-is-blockchain-technology-a-step-by-step-guide-than-anyone-can-understand/",
    "votes": 6,
    "posted": "Nov 2, 2016 1:22:02 PM"
  },
  {
    "id": "12853921",
    "timestamp": "Nov 2, 2016 8:41:15 PM",
    "topic": "CloudFlare issues wildcard SSL certs for domains without owners consent",
    "url": "https://groups.google.com/forum/m/#!topic/certificate-transparency/1tAcVS17wMM",
    "votes": 4,
    "posted": "Nov 2, 2016 1:19:53 PM"
  },
  {
    "id": "12853909",
    "timestamp": "Nov 2, 2016 1:40:33 PM",
    "topic": "In Greece, Property Is Debt",
    "url": "http://mobile.nytimes.com/2016/11/02/opinion/in-greece-property-is-debt.html?em_pos\u003dsmall\u0026emc\u003dedit_dk_20161102\u0026nl\u003ddealbook\u0026nl_art\u003d17\u0026nlid\u003d65508833\u0026ref\u003dheadline\u0026te\u003d1\u0026referer\u003d",
    "votes": 3,
    "posted": "Nov 2, 2016 1:17:22 PM"
  },
  {
    "id": "12853706",
    "timestamp": "Nov 2, 2016 3:00:41 PM",
    "topic": "Ways to Cultivate Gratitude at Work",
    "url": "http://greatergood.berkeley.edu/article/item/five_ways_to_cultivate_gratitude_at_work",
    "votes": 4,
    "posted": "Nov 2, 2016 12:33:30 PM"
  },
  {
    "id": "12853645",
    "timestamp": "Nov 2, 2016 1:20:31 PM",
    "topic": "Hey Bloomberg, Which Millennial Hurt You?",
    "url": "http://gizmodo.com/hey-bloomberg-which-millennial-hurt-you-1788469056",
    "votes": 5,
    "posted": "Nov 2, 2016 12:22:03 PM"
  },
  {
    "id": "12853639",
    "timestamp": "Nov 2, 2016 12:50:29 PM",
    "topic": "Tesla Model 3 will feature new type of glass developed in-house",
    "url": "https://electrek.co/2016/11/01/tesla-model-3-new-glass-in-house-elon-musk-tesla-glass-tech-group/",
    "votes": 3,
    "posted": "Nov 2, 2016 12:21:07 PM"
  },
  {
    "id": "12853611",
    "timestamp": "Nov 2, 2016 1:00:30 PM",
    "topic": "Cloth or Something",
    "url": "https://www.bleachbit.org/cloth-or-something",
    "votes": 6,
    "posted": "Nov 2, 2016 12:15:23 PM"
  },
  {
    "id": "12853531",
    "timestamp": "Nov 2, 2016 12:50:29 PM",
    "topic": "Switching from macOS: The Basics",
    "url": "http://blog.elementary.io/post/152626170946/switching-from-macos-the-basics",
    "votes": 6,
    "posted": "Nov 2, 2016 11:56:33 AM"
  },
  {
    "id": "12853451",
    "timestamp": "Nov 2, 2016 11:40:24 AM",
    "topic": "LeadGenius Hiring a Data Engineer",
    "url": "https://jobs.lever.co/leadgenius/4a084cbb-230d-4e25-a62f-5f75e81352eb",
    "votes": 1,
    "posted": "Nov 2, 2016 11:32:14 AM"
  },
  {
    "id": "12853383",
    "timestamp": "Nov 2, 2016 12:10:26 PM",
    "topic": "South African Reserve Bank Circulates Smart Contract Using Ethereum Blockchain",
    "url": "http://www.iafrikan.com/2016/11/02/south-african-reserve-bank-circulates-first-ever-smart-contract-using-private-ethereum-blockchain/",
    "votes": 4,
    "posted": "Nov 2, 2016 11:14:16 AM"
  },
  {
    "id": "12853319",
    "timestamp": "Nov 2, 2016 11:30:23 AM",
    "topic": "Why C.E.O.s are getting fired more",
    "url": "http://www.newyorker.com/magazine/2016/11/07/why-c-e-o-s-are-getting-fired-more",
    "votes": 5,
    "posted": "Nov 2, 2016 10:58:14 AM"
  },
  {
    "id": "12853281",
    "timestamp": "Nov 2, 2016 2:30:38 PM",
    "topic": "The Polls of the Future Are Reproducible and Open Source",
    "url": "http://www.slate.com/articles/technology/future_tense/2016/11/the_polls_of_the_future_will_be_reproducible_and_open_source.html",
    "votes": 4,
    "posted": "Nov 2, 2016 10:49:51 AM"
  },
  {
    "id": "12853248",
    "timestamp": "Nov 2, 2016 11:20:22 AM",
    "topic": "Signal and GIPHY",
    "url": "https://whispersystems.org/blog/giphy-experiment/",
    "votes": 6,
    "posted": "Nov 2, 2016 10:39:58 AM"
  },
  {
    "id": "12853222",
    "timestamp": "Nov 2, 2016 11:40:24 AM",
    "topic": "Why terrorism doesn\u0027t work. [2002, pdf]",
    "url": "http://www.agner.org/cultsel/terror.pdf",
    "votes": 7,
    "posted": "Nov 2, 2016 10:29:02 AM"
  },
  {
    "id": "12853219",
    "timestamp": "Nov 2, 2016 11:20:22 AM",
    "topic": "Why it’s healthy that Microsoft and Google are eating Apple’s lunch",
    "url": "https://cpbotha.net/2016/11/02/why-its-healthy-that-microsoft-and-google-are-eating-apples-lunch/",
    "votes": 6,
    "posted": "Nov 2, 2016 10:28:34 AM"
  },
  {
    "id": "12853211",
    "timestamp": "Nov 2, 2016 11:10:21 AM",
    "topic": "We continue checking Microsoft open source projects: analysis of PowerShell",
    "url": "http://www.viva64.com/en/b/0447/",
    "votes": 4,
    "posted": "Nov 2, 2016 10:25:51 AM"
  },
  {
    "id": "12853137",
    "timestamp": "Nov 2, 2016 10:20:17 AM",
    "topic": "Curl 7.51.0 released, fixing 11 vulnerabilities",
    "url": "https://curl.haxx.se/changes.html#7_51_0",
    "votes": 13,
    "posted": "Nov 2, 2016 10:01:10 AM"
  },
  {
    "id": "12853096",
    "timestamp": "Nov 2, 2016 10:40:18 AM",
    "topic": "Admiral to price car insurance based on Facebook posts",
    "url": "https://www.theguardian.com/technology/2016/nov/02/admiral-to-price-car-insurance-based-on-facebook-posts",
    "votes": 5,
    "posted": "Nov 2, 2016 9:50:32 AM"
  },
  {
    "id": "12852995",
    "timestamp": "Nov 2, 2016 4:30:50 PM",
    "topic": "Corrode project for porting C to Rust gains Mozilla\u0027s backing",
    "url": "http://www.infoworld.com/article/3136934/open-source-tools/project-for-porting-c-to-rust-gains-mozillas-backing.html",
    "votes": 3,
    "posted": "Nov 2, 2016 9:14:24 AM"
  },
  {
    "id": "12852912",
    "timestamp": "Nov 2, 2016 9:30:13 AM",
    "topic": "Announcing the Tor Browser User Manual",
    "url": "https://blog.torproject.org/blog/announcing-tor-browser-user-manual",
    "votes": 6,
    "posted": "Nov 2, 2016 8:43:04 AM"
  },
  {
    "id": "12852910",
    "timestamp": "Nov 2, 2016 3:00:41 PM",
    "topic": "How Ancient Humans Reached Remote South Pacific Islands",
    "url": "http://www.nytimes.com/2016/11/02/science/south-pacific-islands-migration.html",
    "votes": 5,
    "posted": "Nov 2, 2016 8:42:11 AM"
  },
  {
    "id": "12852687",
    "timestamp": "Nov 2, 2016 11:00:20 AM",
    "topic": "Ask HN: How to become a vegan?",
    "votes": 5,
    "posted": "Nov 2, 2016 7:21:03 AM"
  },
  {
    "id": "12852620",
    "timestamp": "Nov 2, 2016 7:10:02 AM",
    "topic": "WePay is hiring software engineers and SREs",
    "url": "https://go.wepay.com/careers",
    "votes": 1,
    "posted": "Nov 2, 2016 6:59:50 AM"
  },
  {
    "id": "12852453",
    "timestamp": "Nov 2, 2016 10:10:16 AM",
    "topic": "Using Microservices to Encode and Publish Videos at The New York Times",
    "url": "http://open.blogs.nytimes.com/2016/11/01/using-microservices-to-encode-and-publish-videos-at-the-new-york-times/?_r\u003d0\u0026pagewanted\u003dall",
    "votes": 4,
    "posted": "Nov 2, 2016 6:22:15 AM"
  },
  {
    "id": "12852379",
    "timestamp": "Nov 2, 2016 6:19:57 AM",
    "topic": "Pokemon Go Gets a Huge Revenue Boost",
    "url": "http://www.geek.com/games/pokemon-go-gets-a-huge-revenue-boost-thanks-to-halloween-event-1677654/",
    "votes": 3,
    "posted": "Nov 2, 2016 6:03:31 AM"
  },
  {
    "id": "12852372",
    "timestamp": "Nov 2, 2016 6:50:00 AM",
    "topic": "Build a Phased-Array Radar in Your Garage That Sees Through Walls",
    "url": "http://hackaday.com/2015/04/07/build-a-phased-array-radar-in-your-garage-that-sees-through-walls/",
    "votes": 4,
    "posted": "Nov 2, 2016 6:00:36 AM"
  },
  {
    "id": "12852316",
    "timestamp": "Nov 2, 2016 10:20:17 AM",
    "topic": "Reboot – conference for failed startup founders",
    "url": "http://www.rebootconf.com",
    "votes": 5,
    "posted": "Nov 2, 2016 5:46:16 AM"
  },
  {
    "id": "12852293",
    "timestamp": "Nov 2, 2016 5:59:55 AM",
    "topic": "Ask HN: Best linux laptop for developers",
    "votes": 5,
    "posted": "Nov 2, 2016 5:41:43 AM"
  },
  {
    "id": "12852282",
    "timestamp": "Nov 2, 2016 7:40:04 AM",
    "topic": "Dirty COW – (CVE-2016-5195) – Docker Container Escape",
    "url": "https://blog.paranoidsoftware.com/dirty-cow-cve-2016-5195-docker-container-escape/",
    "votes": 13,
    "posted": "Nov 2, 2016 5:38:08 AM"
  },
  {
    "id": "12852250",
    "timestamp": "Nov 2, 2016 6:41:01 PM",
    "topic": "The Right Way to Grant Equity to Your Employees",
    "url": "http://firstround.com/review/The-Right-Way-to-Grant-Equity-to-Your-Employees/",
    "votes": 4,
    "posted": "Nov 2, 2016 5:27:08 AM"
  },
  {
    "id": "12852235",
    "timestamp": "Nov 2, 2016 7:40:04 AM",
    "topic": "Abandoned in space in 1967, a US satellite has started transmitting again",
    "url": "http://www.thevintagenews.com/2016/10/31/abandoned-in-space-in-1967-a-us-satellite-has-started-transmitting-again/",
    "votes": 6,
    "posted": "Nov 2, 2016 5:22:12 AM"
  },
  {
    "id": "12852172",
    "timestamp": "Nov 2, 2016 1:10:31 PM",
    "topic": "Stuck between a rock and a hard placem: An explanation of Apple’s new MBP",
    "url": "http://macdaddy.io/apples-new-macbook-pros/",
    "votes": 5,
    "posted": "Nov 2, 2016 5:10:06 AM"
  },
  {
    "id": "12852104",
    "timestamp": "Nov 2, 2016 5:59:55 AM",
    "topic": "BART janitor grossed $270K in pay and benefits last year",
    "url": "http://www.mercurynews.com/2016/11/01/bart-janitor-grossed-270k-in-pay-and-benefits-last-year/?utm_campaign\u003dEchobox\u0026utm_medium\u003dSocial\u0026utm_source\u003dFacebook#link_time\u003d1478025682",
    "votes": 15,
    "posted": "Nov 2, 2016 4:46:28 AM"
  },
  {
    "id": "12852085",
    "timestamp": "Nov 2, 2016 4:49:50 AM",
    "topic": "Microsoft Concept Graph",
    "url": "https://concept.research.microsoft.com/Home/Introduction",
    "votes": 4,
    "posted": "Nov 2, 2016 4:38:41 AM"
  },
  {
    "id": "12852083",
    "timestamp": "Nov 2, 2016 8:30:08 AM",
    "topic": "Ask HN: How can rational thinking increase in individuals and societies?",
    "votes": 5,
    "posted": "Nov 2, 2016 4:38:05 AM"
  },
  {
    "id": "12852047",
    "timestamp": "Nov 2, 2016 4:49:50 AM",
    "topic": "Shopping coming to Instagram",
    "url": "http://blog.business.instagram.com/post/152598788716/shopping-coming-to-instagram",
    "votes": 4,
    "posted": "Nov 2, 2016 4:27:29 AM"
  },
  {
    "id": "12852042",
    "timestamp": "Nov 2, 2016 5:19:52 AM",
    "topic": "Cybersecurity firm fails to find links between Donald Trump and Russian bank",
    "url": "https://www.theguardian.com/us-news/2016/nov/01/cybersecurity-firm-fails-to-find-alleged-links-between-trump-and-russian-bank",
    "votes": 4,
    "posted": "Nov 2, 2016 4:26:35 AM"
  },
  {
    "id": "12851987",
    "timestamp": "Nov 2, 2016 4:59:51 AM",
    "topic": "Ask HN: Who is firing?",
    "votes": 20,
    "posted": "Nov 2, 2016 4:10:07 AM"
  },
  {
    "id": "12851918",
    "timestamp": "Nov 2, 2016 5:00:52 PM",
    "topic": "Sing to Me: Karaoke is self-compromise as spectacle",
    "url": "http://reallifemag.com/sing-to-me/",
    "votes": 3,
    "posted": "Nov 2, 2016 3:50:25 AM"
  },
  {
    "id": "12851864",
    "timestamp": "Nov 2, 2016 6:29:58 AM",
    "topic": "Getting Started with Webpack 2",
    "url": "https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783#.diw20huhm",
    "votes": 5,
    "posted": "Nov 2, 2016 3:33:22 AM"
  },
  {
    "id": "12851841",
    "timestamp": "Nov 2, 2016 6:29:58 AM",
    "topic": "What WikiLeaks just revealed about Google explains EVERYTHING",
    "url": "http://www.allenbwest.com/michaelcantrell/wikileaks-just-revealed-google-explains-everything",
    "votes": 7,
    "posted": "Nov 2, 2016 3:27:03 AM"
  },
  {
    "id": "12851821",
    "timestamp": "Nov 2, 2016 3:29:43 AM",
    "topic": "Taplytics is hiring",
    "url": "https://taplytics.com/jobs",
    "votes": 1,
    "posted": "Nov 2, 2016 3:22:50 AM"
  },
  {
    "id": "12851810",
    "timestamp": "Nov 2, 2016 6:29:58 AM",
    "topic": "New York Doesn\u0027t Need San Francisco\u0027s Google Bus Problem",
    "url": "http://www.villagevoice.com/news/new-york-doesnt-need-san-franciscos-google-bus-problem-9292209",
    "votes": 5,
    "posted": "Nov 2, 2016 3:20:45 AM"
  },
  {
    "id": "12851618",
    "timestamp": "Nov 2, 2016 6:09:56 AM",
    "topic": "Ask HN: What Is the Current State of the GNUstep Project?",
    "votes": 3,
    "posted": "Nov 2, 2016 2:29:14 AM"
  },
  {
    "id": "12851596",
    "timestamp": "Nov 2, 2016 3:39:44 AM",
    "topic": "The Costs of Running a Support Team in the Bay Area",
    "url": "http://www.peopledelight.com/costs-customer-support-bay-area/",
    "votes": 3,
    "posted": "Nov 2, 2016 2:22:10 AM"
  },
  {
    "id": "12851585",
    "timestamp": "Nov 2, 2016 2:59:41 AM",
    "topic": "The New MacBook Pros Mark the End of Upgradeable Apple Computers",
    "url": "http://motherboard.vice.com/read/new-macbook-pros-mark-the-end-of-upgradeable-apple-computers",
    "votes": 4,
    "posted": "Nov 2, 2016 2:20:39 AM"
  },
  {
    "id": "12851497",
    "timestamp": "Nov 2, 2016 7:10:02 AM",
    "topic": "Cloudflare gets wildcard certs for a domain using their DNS-only service",
    "url": "https://groups.google.com/forum/#!topic/certificate-transparency/1tAcVS17wMM",
    "votes": 6,
    "posted": "Nov 2, 2016 1:58:08 AM"
  },
  {
    "id": "12851491",
    "timestamp": "Nov 2, 2016 2:59:41 AM",
    "topic": "Facebook officially announces Gameroom, its PC Steam competitor",
    "url": "https://techcrunch.com/2016/11/01/facebook-gameroom/",
    "votes": 4,
    "posted": "Nov 2, 2016 1:57:16 AM"
  },
  {
    "id": "12851386",
    "timestamp": "Nov 2, 2016 6:29:58 AM",
    "topic": "Ask HN: Anyone doing Small scale manufacturing",
    "votes": 4,
    "posted": "Nov 2, 2016 1:34:12 AM"
  },
  {
    "id": "12851387",
    "timestamp": "Nov 2, 2016 6:50:00 AM",
    "topic": "Admiral to price car insurance based on Facebook posts",
    "url": "https://www.theguardian.com/technology/2016/nov/02/admiral-to-price-car-insurance-based-on-facebook-posts",
    "votes": 4,
    "posted": "Nov 2, 2016 1:34:12 AM"
  },
  {
    "id": "12851338",
    "timestamp": "Nov 2, 2016 6:10:59 PM",
    "topic": "\u0027How Much Suffering Can You Take?\u0027",
    "url": "http://www.nytimes.com/2016/11/06/sports/virginia-quintuple-anvil-triathlon.html",
    "votes": 6,
    "posted": "Nov 2, 2016 1:21:56 AM"
  },
  {
    "id": "12851307",
    "timestamp": "Nov 2, 2016 2:49:40 AM",
    "topic": "Putin wants to push Microsoft out of Russia",
    "url": "http://www.nbcnews.com/news/us-news/putin-wants-push-microsoft-out-russia-battle-us-n674781",
    "votes": 5,
    "posted": "Nov 2, 2016 1:15:46 AM"
  },
  {
    "id": "12851232",
    "timestamp": "Nov 2, 2016 3:50:46 PM",
    "topic": "Ask HN: Where can I find a simple (open source) Rogue-like to modify?",
    "votes": 8,
    "posted": "Nov 2, 2016 12:58:51 AM"
  },
  {
    "id": "12851177",
    "timestamp": "Nov 2, 2016 5:59:55 AM",
    "topic": "The Real Amount of Energy Used to Power the Internet",
    "url": "http://www.electronicsilentspring.com/real-amount-energy-power-internet/",
    "votes": 3,
    "posted": "Nov 2, 2016 12:47:37 AM"
  },
  {
    "id": "12851127",
    "timestamp": "Nov 2, 2016 1:09:33 AM",
    "topic": "Google Is Not What It Seems",
    "url": "https://wikileaks.org/google-is-not-what-it-seems/?utm\u003demail",
    "votes": 4,
    "posted": "Nov 2, 2016 12:38:54 AM"
  },
  {
    "id": "12851080",
    "timestamp": "Nov 2, 2016 1:09:33 AM",
    "topic": "System76 brings Ubuntu to $699 laptop with Kaby Lake chips",
    "url": "http://www.cio.com/article/3136394/laptop-computers/system76-brings-ubuntu-to-699-laptop-with-kaby-lake-chips.html",
    "votes": 5,
    "posted": "Nov 2, 2016 12:31:37 AM"
  },
  {
    "id": "12851070",
    "timestamp": "Nov 2, 2016 1:09:33 AM",
    "topic": "Does your mind jump around, stay on task or get stuck?",
    "url": "http://news.berkeley.edu/2016/10/31/wanderingmind/",
    "votes": 4,
    "posted": "Nov 2, 2016 12:28:48 AM"
  },
  {
    "id": "12851018",
    "timestamp": "Nov 2, 2016 4:09:46 AM",
    "topic": "The downside of believing in Apple",
    "url": "https://www.baldurbjarnason.com/notes/the-less-pro-apple/",
    "votes": 5,
    "posted": "Nov 2, 2016 12:20:04 AM"
  },
  {
    "id": "12850959",
    "timestamp": "Nov 2, 2016 12:39:30 AM",
    "topic": "Political Showdown: Peter Thiel vs. Google’s Eric Schmidt",
    "url": "https://medium.com/@trentlapinski/political-showdown-peter-thiel-vs-googles-eric-schmidt-1d1484636aa4#",
    "votes": 3,
    "posted": "Nov 2, 2016 12:08:14 AM"
  },
  {
    "id": "12850928",
    "timestamp": "Nov 2, 2016 12:39:30 AM",
    "topic": "Webcam spying without turning on the LED",
    "url": "https://www.grahamcluley.com/webcam-spying-without-turning-led-researchers-prove-possible/",
    "votes": 3,
    "posted": "Nov 2, 2016 12:03:37 AM"
  },
  {
    "id": "12850919",
    "timestamp": "Nov 2, 2016 12:09:27 AM",
    "topic": "A Random Walk Through Ada",
    "url": "http://cowlark.com/2014-04-27-ada/index.html",
    "votes": 3,
    "posted": "Nov 2, 2016 12:02:07 AM"
  },
  {
    "id": "12850918",
    "timestamp": "Nov 2, 2016 12:29:29 AM",
    "topic": "Async/await support landed in Firefox Nightly",
    "url": "https://blog.nightly.mozilla.org/2016/11/01/async-await-support-in-firefox/",
    "votes": 4,
    "posted": "Nov 2, 2016 12:01:51 AM"
  },
  {
    "id": "12850878",
    "timestamp": "Nov 2, 2016 12:59:32 AM",
    "topic": "Ribbonfarm Longform Blogging Course",
    "url": "http://www.ribbonfarm.com/2016/11/01/ribbonfarm-longform-blogging-course-nov-10-22/",
    "votes": 3,
    "posted": "Nov 1, 2016 11:56:12 PM"
  },
  {
    "id": "12850861",
    "timestamp": "Nov 2, 2016 6:29:59 AM",
    "topic": "Ask HN: Best website to get a custom logo?",
    "votes": 6,
    "posted": "Nov 1, 2016 11:54:40 PM"
  },
  {
    "id": "12850836",
    "timestamp": "Nov 1, 2016 11:59:26 PM",
    "topic": "BackerKit (YC W13) Is Hiring a Growth Intern",
    "url": "https://angel.co/backerkit/jobs/142199-growth-internship",
    "votes": 1,
    "posted": "Nov 1, 2016 11:50:27 PM"
  },
  {
    "id": "12850817",
    "timestamp": "Nov 2, 2016 12:39:30 AM",
    "topic": "Why People Love Going to Fancy Gyms",
    "url": "http://qz.com/816740/boutique-gyms-like-crossfit-and-pure-barre-are-raking-in-billions-by-making-fancy-fitness-a-status-symbol/",
    "votes": 3,
    "posted": "Nov 1, 2016 11:47:37 PM"
  },
  {
    "id": "12850708",
    "timestamp": "Nov 2, 2016 4:49:50 AM",
    "topic": "Our commitment to our customer’s security",
    "url": "https://blogs.technet.microsoft.com/mmpc/2016/11/01/our-commitment-to-our-customers-security/",
    "votes": 5,
    "posted": "Nov 1, 2016 11:32:35 PM"
  },
  {
    "id": "12850646",
    "timestamp": "Nov 1, 2016 11:59:26 PM",
    "topic": "The Story of XMLHTTP (2008)",
    "url": "http://www.alexhopmann.com/story-of-xmlhttp/",
    "votes": 3,
    "posted": "Nov 1, 2016 11:25:18 PM"
  },
  {
    "id": "12850641",
    "timestamp": "Nov 1, 2016 11:59:26 PM",
    "topic": "VERGE 3.0",
    "url": "http://www.theverge.com/2016/11/1/13484656/verge-5th-anniversary-relaunch-2016",
    "votes": 5,
    "posted": "Nov 1, 2016 11:24:02 PM"
  },
  {
    "id": "12850572",
    "timestamp": "Nov 2, 2016 12:09:27 AM",
    "topic": "Lenovo Phab 2 Pro – The World\u0027s First Tango-Enabled Smartphone",
    "url": "http://shop.lenovo.com/us/en/tango/",
    "votes": 4,
    "posted": "Nov 1, 2016 11:13:59 PM"
  },
  {
    "id": "12850544",
    "timestamp": "Nov 2, 2016 12:19:28 AM",
    "topic": "How Apple could have avoided much of the controversy",
    "url": "https://chuqui.com/2016/10/how-apple-could-have-avoided-much-of-the-controversy/",
    "votes": 5,
    "posted": "Nov 1, 2016 11:10:24 PM"
  },
  {
    "id": "12850537",
    "timestamp": "Nov 1, 2016 11:29:23 PM",
    "topic": "Chinese Yuan Becomes Official Currency in Zimbabwe",
    "url": "http://howafrica.com/breaking-the-chinese-yuan-becomes-official-currency-in-zimbabwe/",
    "votes": 4,
    "posted": "Nov 1, 2016 11:09:50 PM"
  },
  {
    "id": "12850502",
    "timestamp": "Nov 1, 2016 11:59:26 PM",
    "topic": "The Late 2016 entry-level 13″ MacBook Pro has a ridiculously fast SSD",
    "url": "https://9to5mac.com/2016/11/01/the-late-2016-entry-level-13-macbook-pro-has-a-ridiculously-fast-ssd/",
    "votes": 3,
    "posted": "Nov 1, 2016 11:06:23 PM"
  },
  {
    "id": "12850497",
    "timestamp": "Nov 1, 2016 11:19:22 PM",
    "topic": "This Year We Can End the Death Penalty in California",
    "url": "http://www.paulgraham.com/prop62.html",
    "votes": 15,
    "posted": "Nov 1, 2016 11:06:01 PM"
  },
  {
    "id": "12850453",
    "timestamp": "Nov 2, 2016 3:49:45 AM",
    "topic": "Young scientists ditch postdocs for biotech startups",
    "url": "http://www.nature.com/news/young-scientists-ditch-postdocs-for-biotech-start-ups-1.20912",
    "votes": 4,
    "posted": "Nov 1, 2016 11:00:58 PM"
  },
  {
    "id": "12850446",
    "timestamp": "Nov 1, 2016 11:39:24 PM",
    "topic": "50 Things I Pretend to Know Now That I Am Nearing 50",
    "url": "http://www.jamesaltucher.com/2016/07/50-things-pretend-know-now-nearing-50/",
    "votes": 4,
    "posted": "Nov 1, 2016 11:00:26 PM"
  },
  {
    "id": "12850379",
    "timestamp": "Nov 1, 2016 11:29:23 PM",
    "topic": "What Happens to the Markets If Donald Trump Wins?",
    "url": "http://www.nytimes.com/2016/11/01/business/dealbook/what-happens-to-the-markets-if-donald-trump-wins.html",
    "votes": 4,
    "posted": "Nov 1, 2016 10:54:10 PM"
  },
  {
    "id": "12850247",
    "timestamp": "Nov 1, 2016 10:49:19 PM",
    "topic": "Return of the Mac",
    "url": "http://www.paulgraham.com/mac.html",
    "votes": 20,
    "posted": "Nov 1, 2016 10:36:53 PM"
  },
  {
    "id": "12850227",
    "timestamp": "Nov 1, 2016 11:19:22 PM",
    "topic": "Extreme imaging using cell phones: SeeInTheDark [pdf]",
    "url": "http://graphics.stanford.edu/talks/seeinthedark-public-15sep16.key.pdf",
    "votes": 4,
    "posted": "Nov 1, 2016 10:32:39 PM"
  },
  {
    "id": "12850185",
    "timestamp": "Nov 1, 2016 11:19:22 PM",
    "topic": "The Problem with the Story Connecting Russia to Donald Trump’s Email Server",
    "url": "https://theintercept.com/2016/11/01/heres-the-problem-with-the-story-connecting-russia-to-donald-trumps-email-server/",
    "votes": 4,
    "posted": "Nov 1, 2016 10:27:48 PM"
  },
  {
    "id": "12850101",
    "timestamp": "Nov 1, 2016 10:29:16 PM",
    "topic": "Google Brain\u0027s Magenta: Multi-Style Image Transfer with Code",
    "url": "https://magenta.tensorflow.org/2016/11/01/multistyle-pastiche-generator/",
    "votes": 4,
    "posted": "Nov 1, 2016 10:17:46 PM"
  },
  {
    "id": "12850035",
    "timestamp": "Nov 1, 2016 11:19:22 PM",
    "topic": "A Visual Guide to State in React",
    "url": "https://daveceddia.com/visual-guide-to-state-in-react/",
    "votes": 3,
    "posted": "Nov 1, 2016 10:10:51 PM"
  },
  {
    "id": "12849828",
    "timestamp": "Nov 1, 2016 9:59:13 PM",
    "topic": "Gameroom",
    "url": "https://www.facebook.com/gameroom/",
    "votes": 5,
    "posted": "Nov 1, 2016 9:40:07 PM"
  },
  {
    "id": "12849798",
    "timestamp": "Nov 2, 2016 3:30:44 PM",
    "topic": "Randomness Requirements for Security (2005)",
    "url": "http://tools.ietf.org/html/rfc4086",
    "votes": 5,
    "posted": "Nov 1, 2016 9:35:08 PM"
  },
  {
    "id": "12849757",
    "timestamp": "Nov 1, 2016 9:49:11 PM",
    "topic": "“Design Patterns” Aren\u0027t",
    "url": "http://perl.plover.com/yak/design/",
    "votes": 9,
    "posted": "Nov 1, 2016 9:28:59 PM"
  },
  {
    "id": "12849721",
    "timestamp": "Nov 1, 2016 10:09:14 PM",
    "topic": "Mass Surveillance at Public Gatherings Is Why We Need Oversight Policies",
    "url": "https://www.eff.org/deeplinks/2016/10/mass-surveillance-public-gatherings-why-we-need-oversight-policies",
    "votes": 7,
    "posted": "Nov 1, 2016 9:23:56 PM"
  },
  {
    "id": "12849689",
    "timestamp": "Nov 1, 2016 9:29:09 PM",
    "topic": "Foursquare’s CEO says Yelp is shaking down local businesses",
    "url": "http://www.recode.net/2016/10/31/13479782/foursquare-jeff-glueck-yelp-local-businesses-robin-hood-recode-podcast",
    "votes": 9,
    "posted": "Nov 1, 2016 9:18:17 PM"
  },
  {
    "id": "12849688",
    "timestamp": "Nov 1, 2016 11:09:21 PM",
    "topic": "Microsoft’s IFTTT-like Flow is now out of beta",
    "url": "http://arstechnica.com/information-technology/2016/11/microsofts-ifttt-like-flow-is-now-out-of-beta/",
    "votes": 4,
    "posted": "Nov 1, 2016 9:17:29 PM"
  },
  {
    "id": "12849679",
    "timestamp": "Nov 1, 2016 9:39:10 PM",
    "topic": "Tesla and SolarCity",
    "url": "https://www.tesla.com/blog/tesla-and-solarcity",
    "votes": 3,
    "posted": "Nov 1, 2016 9:16:21 PM"
  },
  {
    "id": "12849656",
    "timestamp": "Nov 2, 2016 3:29:43 AM",
    "topic": "The Surprisingly Simple Advice You Will Never Follow: How to Predict the Future",
    "url": "https://medium.com/@irinatsumarava/the-surprisingly-simple-advice-you-will-never-follow-or-how-to-predict-the-future-58f8b25f1c6c#.logmgnmat",
    "votes": 3,
    "posted": "Nov 1, 2016 9:12:33 PM"
  },
  {
    "id": "12849622",
    "timestamp": "Nov 2, 2016 12:29:29 AM",
    "topic": "Too Smug to Jail",
    "url": "http://www.rollingstone.com/politics/features/too-smug-to-jail-w447825",
    "votes": 5,
    "posted": "Nov 1, 2016 9:06:22 PM"
  },
  {
    "id": "12849617",
    "timestamp": "Nov 2, 2016 4:29:48 AM",
    "topic": "An open approach for routing, switching, and transport",
    "url": "https://code.facebook.com/posts/1977308282496021/an-open-approach-for-switching-routing-and-transport/",
    "votes": 5,
    "posted": "Nov 1, 2016 9:06:05 PM"
  },
  {
    "id": "12849447",
    "timestamp": "Nov 1, 2016 9:29:09 PM",
    "topic": "Telescoping Linear Actuator [video]",
    "url": "https://www.youtube.com/watch?v\u003dxT3xcY1s1kQ\u0026t\u003d8s",
    "votes": 3,
    "posted": "Nov 1, 2016 8:48:01 PM"
  },
  {
    "id": "12849419",
    "timestamp": "Nov 1, 2016 9:39:10 PM",
    "topic": "After Apple\u0027s Disappointing MacBook Pro Refresh, What\u0027s an Engineer to Do?",
    "url": "https://www.linkedin.com/pulse/after-apples-disappointing-macbook-pro-refresh-whats-engineer-greg?trk\u003dhn",
    "votes": 6,
    "posted": "Nov 1, 2016 8:45:07 PM"
  },
  {
    "id": "12849294",
    "timestamp": "Nov 1, 2016 9:09:07 PM",
    "topic": "New MacBook Pros are unsurprisingly difficult to repair and upgrade",
    "url": "http://arstechnica.com/apple/2016/11/ifixit-new-macbook-pros-are-unsurprisingly-difficult-to-repair-and-upgrade/",
    "votes": 4,
    "posted": "Nov 1, 2016 8:29:15 PM"
  },
  {
    "id": "12849237",
    "timestamp": "Nov 1, 2016 8:29:02 PM",
    "topic": "Build the infrastructure to feed 10B middle class people (TerrAvion W14)",
    "url": "http://www.terravion.com/careers.html",
    "votes": 1,
    "posted": "Nov 1, 2016 8:22:42 PM"
  },
  {
    "id": "12849096",
    "timestamp": "Nov 1, 2016 8:29:02 PM",
    "topic": "YouTube\u0027s seven-year stand-off ends",
    "url": "http://www.bbc.com/news/technology-37839038",
    "votes": 3,
    "posted": "Nov 1, 2016 8:03:47 PM"
  },
  {
    "id": "12849079",
    "timestamp": "Nov 1, 2016 8:19:01 PM",
    "topic": "Keep Ruby Weird Again [video]",
    "url": "http://blog.testdouble.com/posts/2016-10-31-keep-ruby-weird-again.html",
    "votes": 3,
    "posted": "Nov 1, 2016 8:01:25 PM"
  },
  {
    "id": "12849072",
    "timestamp": "Nov 2, 2016 12:59:32 AM",
    "topic": "Firefox removes part of functionality due to privacy risks",
    "url": "https://www.theguardian.com/technology/2016/nov/01/firefox-disable-battery-status-api-tracking",
    "votes": 3,
    "posted": "Nov 1, 2016 8:00:33 PM"
  },
  {
    "id": "12848943",
    "timestamp": "Nov 1, 2016 11:29:23 PM",
    "topic": "Flow: Not All It\u0027s Cracked Up to Be",
    "url": "https://medium.com/myplanet-musings/flow-not-all-its-cracked-up-to-be-459207631ed9#.ivgkjd5tc",
    "votes": 4,
    "posted": "Nov 1, 2016 7:43:51 PM"
  },
  {
    "id": "12848917",
    "timestamp": "Nov 1, 2016 10:39:17 PM",
    "topic": "Show HN: vpnns – Per-app VPN using Linux namespaces",
    "url": "https://github.com/cernekee/ocproxy#vpnns-experimental",
    "votes": 3,
    "posted": "Nov 1, 2016 7:40:46 PM"
  },
  {
    "id": "12848698",
    "timestamp": "Nov 1, 2016 8:59:06 PM",
    "topic": "Signal and GIPHY",
    "url": "https://whispersystems.org/blog/giphy-experiment/",
    "votes": 4,
    "posted": "Nov 1, 2016 7:18:34 PM"
  },
  {
    "id": "12848656",
    "timestamp": "Nov 1, 2016 7:48:59 PM",
    "topic": "Show HN: academic.bio, a simple static site generator for academic webpages",
    "url": "http://my.academic.bio",
    "votes": 4,
    "posted": "Nov 1, 2016 7:14:02 PM"
  },
  {
    "id": "12848648",
    "timestamp": "Nov 1, 2016 7:38:58 PM",
    "topic": "Bones Found 76 Years Ago Could Actually Be Amelia Earhart’s",
    "url": "http://www.huffingtonpost.com/entry/amelia-earhart-skeleton_us_581883dde4b064e1b4b49b74",
    "votes": 4,
    "posted": "Nov 1, 2016 7:13:38 PM"
  },
  {
    "id": "12848444",
    "timestamp": "Nov 2, 2016 12:09:27 AM",
    "topic": "Show HN: A Curated List of Rabbit Holes on the Internet",
    "url": "https://github.com/torchhound/warren",
    "votes": 7,
    "posted": "Nov 1, 2016 6:55:43 PM"
  },
  {
    "id": "12848419",
    "timestamp": "Nov 1, 2016 7:08:54 PM",
    "topic": "HTML 5.1 is a W3C Recommendation",
    "url": "https://www.w3.org/blog/news/archives/5932",
    "votes": 6,
    "posted": "Nov 1, 2016 6:53:25 PM"
  },
  {
    "id": "12848400",
    "timestamp": "Nov 1, 2016 7:08:54 PM",
    "topic": "Last minute tips for YC Interviewees",
    "url": "http://initialized.com/last-minute-tips-for-yc-interviewees",
    "votes": 3,
    "posted": "Nov 1, 2016 6:52:31 PM"
  },
  {
    "id": "12848362",
    "timestamp": "Nov 1, 2016 7:08:55 PM",
    "topic": "X86 Register Encoding",
    "url": "https://eklitzke.org/x86-register-encoding",
    "votes": 3,
    "posted": "Nov 1, 2016 6:49:35 PM"
  },
  {
    "id": "12848353",
    "timestamp": "Nov 1, 2016 7:28:57 PM",
    "topic": "The Ontology2 Edition of DBpedia 2016-04",
    "url": "http://ontology2.com/the-book/dbpedia-2016-04.html",
    "votes": 3,
    "posted": "Nov 1, 2016 6:48:26 PM"
  },
  {
    "id": "12848253",
    "timestamp": "Nov 1, 2016 7:48:59 PM",
    "topic": "Sense’s gorgeous new sleep tracker has voice control for the perfect alarm clock",
    "url": "http://thenextweb.com/insider/2016/11/01/senses-gorgeous-new-sleep-tracker-adds-voice-control-get-way/",
    "votes": 3,
    "posted": "Nov 1, 2016 6:40:57 PM"
  },
  {
    "id": "12848153",
    "timestamp": "Nov 1, 2016 7:28:57 PM",
    "topic": "Show HN: Dockopotamus, a naive honeypot that uses docker",
    "url": "https://github.com/esell/dockopotamus",
    "votes": 3,
    "posted": "Nov 1, 2016 6:32:30 PM"
  },
  {
    "id": "12848053",
    "timestamp": "Nov 1, 2016 8:19:01 PM",
    "topic": "Google\u0027s Schmidt drew up draft plan for Clinton in 2014",
    "url": "http://www.itwire.com/government-tech-policy/75531-google-s-schmidt-drew-up-draft-plan-for-clinton-in-2014.html",
    "votes": 4,
    "posted": "Nov 1, 2016 6:25:23 PM"
  },
  {
    "id": "12847916",
    "timestamp": "Nov 1, 2016 10:19:15 PM",
    "topic": "Show HN: Bamboo – The freelance marketplace that wants you to stop using it",
    "url": "https://www.workwithbamboo.com/",
    "votes": 8,
    "posted": "Nov 1, 2016 6:13:39 PM"
  },
  {
    "id": "12847866",
    "timestamp": "Nov 1, 2016 6:28:50 PM",
    "topic": "Initial patches to add an MC layer for RISC-V",
    "url": "http://llvm.org/viewvc/llvm-project?view\u003drevision\u0026revision\u003d285707",
    "votes": 5,
    "posted": "Nov 1, 2016 6:09:05 PM"
  },
  {
    "id": "12847787",
    "timestamp": "Nov 1, 2016 6:08:48 PM",
    "topic": "Stealth Cell Tower Disguised as Printer",
    "url": "https://julianoliver.com/output/stealth-cell-tower",
    "votes": 3,
    "posted": "Nov 1, 2016 6:01:48 PM"
  },
  {
    "id": "12847611",
    "timestamp": "Nov 1, 2016 5:58:47 PM",
    "topic": "This year we can end the death penalty in California",
    "url": "http://paulgraham.com/prop62.html",
    "votes": 14,
    "posted": "Nov 1, 2016 5:48:01 PM"
  },
  {
    "id": "12847576",
    "timestamp": "Nov 1, 2016 6:28:50 PM",
    "topic": "WebAssembly Stack Machine",
    "url": "https://docs.google.com/document/d/1CieRxPy3Fp62LQdtWfhymikb_veZI7S9MnuCZw7biII/edit",
    "votes": 8,
    "posted": "Nov 1, 2016 5:45:15 PM"
  },
  {
    "id": "12847537",
    "timestamp": "Nov 1, 2016 6:08:48 PM",
    "topic": "U.S. Supreme Court Wants Government\u0027s Take on Case Over Prince and \u0027Dancing Baby\u0027",
    "url": "http://www.billboard.com/biz/articles/news/legal-and-management/7557867/us-supreme-court-wants-governments-take-on-case-over",
    "votes": 3,
    "posted": "Nov 1, 2016 5:42:40 PM"
  },
  {
    "id": "12847287",
    "timestamp": "Nov 1, 2016 5:48:44 PM",
    "topic": "Instapaper Premium is now free for everyone",
    "url": "http://blog.instapaper.com/post/152600596211",
    "votes": 17,
    "posted": "Nov 1, 2016 5:23:08 PM"
  },
  {
    "id": "12847172",
    "timestamp": "Nov 1, 2016 5:38:43 PM",
    "topic": "RStudio releases v1.0",
    "url": "https://blog.rstudio.org/2016/11/01/announcing-rstudio-v1-0/",
    "votes": 6,
    "posted": "Nov 1, 2016 5:13:02 PM"
  },
  {
    "id": "12847045",
    "timestamp": "Nov 1, 2016 5:48:44 PM",
    "topic": "Ask HN: Who needs contributors? (November 2016)",
    "votes": 12,
    "posted": "Nov 1, 2016 5:03:39 PM"
  },
  {
    "id": "12846994",
    "timestamp": "Nov 1, 2016 8:29:03 PM",
    "topic": "Browser extension creators selling users\u0027 browsing history [German source]",
    "votes": 6,
    "posted": "Nov 1, 2016 5:00:00 PM"
  },
  {
    "id": "12846785",
    "timestamp": "Nov 1, 2016 4:58:40 PM",
    "topic": "Let\u0027s Encrypt Crowdfunding Campaign",
    "url": "https://letsencrypt.org/2016/11/01/launching-our-crowdfunding-campaign.html",
    "votes": 2,
    "posted": "Nov 1, 2016 4:45:05 PM"
  },
  {
    "id": "12846742",
    "timestamp": "Nov 1, 2016 4:48:39 PM",
    "topic": "OneSignal is hiring full stack, mobile, and back end developers in Mountain View",
    "url": "http://jobs.onesignal.com/",
    "votes": 1,
    "posted": "Nov 1, 2016 4:41:05 PM"
  },
  {
    "id": "12846723",
    "timestamp": "Nov 1, 2016 7:08:55 PM",
    "topic": "A Provably Secure Proof-Of-Stake Blockchain Protocol [pdf]",
    "url": "http://eprint.iacr.org/2016/889.pdf",
    "votes": 3,
    "posted": "Nov 1, 2016 4:39:04 PM"
  },
  {
    "id": "12846722",
    "timestamp": "Nov 1, 2016 6:58:53 PM",
    "topic": "Django security releases issued: 1.10.3, 1.9.11 and 1.8.16",
    "url": "https://www.djangoproject.com/weblog/2016/nov/01/security-releases/",
    "votes": 4,
    "posted": "Nov 1, 2016 4:38:57 PM"
  },
  {
    "id": "12846716",
    "timestamp": "Nov 1, 2016 7:08:55 PM",
    "topic": "Pinterest Adds Three New Types of Promoted Pins",
    "url": "http://www.adweek.com/socialtimes/one-tap-pins-video-pins-app-pins/646764",
    "votes": 3,
    "posted": "Nov 1, 2016 4:38:30 PM"
  },
  {
    "id": "12846516",
    "timestamp": "Nov 1, 2016 4:38:38 PM",
    "topic": "Realistic alternatives to Apple computers",
    "url": "http://www.onebigfluke.com/2016/10/alternatives-to-apple-computers.html",
    "votes": 8,
    "posted": "Nov 1, 2016 4:24:01 PM"
  },
  {
    "id": "12846432",
    "timestamp": "Nov 2, 2016 1:20:32 PM",
    "topic": "Antirez/Bigdis (2010)",
    "url": "https://github.com/antirez/Bigdis",
    "votes": 4,
    "posted": "Nov 1, 2016 4:19:05 PM"
  },
  {
    "id": "12846216",
    "timestamp": "Nov 1, 2016 4:08:33 PM",
    "topic": "Ask HN: Who is hiring? (November 2016)",
    "votes": 3,
    "posted": "Nov 1, 2016 4:04:46 PM"
  },
  {
    "id": "12846146",
    "timestamp": "Nov 1, 2016 4:28:37 PM",
    "topic": "Ask HN: Who wants to be hired? (November 2016)",
    "votes": 9,
    "posted": "Nov 1, 2016 4:00:19 PM"
  },
  {
    "id": "12846145",
    "timestamp": "Nov 1, 2016 4:28:37 PM",
    "topic": "Ask HN: Freelancer? Seeking freelancer? (November 2016)",
    "votes": 11,
    "posted": "Nov 1, 2016 4:00:19 PM"
  },
  {
    "id": "12846104",
    "timestamp": "Nov 1, 2016 4:08:33 PM",
    "topic": "Windows file system compression had to be dumbed down",
    "url": "https://blogs.msdn.microsoft.com/oldnewthing/20161101-00/?p\u003d94615",
    "votes": 5,
    "posted": "Nov 1, 2016 3:54:39 PM"
  },
  {
    "id": "12846092",
    "timestamp": "Nov 1, 2016 7:08:55 PM",
    "topic": "AWS has 45% share of public cloud infrastructure market",
    "url": "http://www.geekwire.com/2016/study-aws-45-share-public-cloud-infrastructure-market-microsoft-google-ibm-combined/",
    "votes": 4,
    "posted": "Nov 1, 2016 3:51:55 PM"
  },
  {
    "id": "12846089",
    "timestamp": "Nov 1, 2016 4:08:34 PM",
    "topic": "Let\u0027s Automate Let\u0027s Encrypt",
    "url": "https://www.linuxjournal.com/content/lets-automate-lets-encrypt",
    "votes": 4,
    "posted": "Nov 1, 2016 3:51:46 PM"
  },
  {
    "id": "12846048",
    "timestamp": "Nov 1, 2016 4:08:34 PM",
    "topic": "It’s Finally Legal to Hack Your Own Devices (Even Your Car)",
    "url": "https://www.wired.com/2016/10/hacking-car-pacemaker-toaster-just-became-legal",
    "votes": 8,
    "posted": "Nov 1, 2016 3:47:15 PM"
  },
  {
    "id": "12845995",
    "timestamp": "Nov 1, 2016 3:58:32 PM",
    "topic": "Argonne researchers posit way to locally circumvent Second Law of Thermodynamics",
    "url": "https://www.anl.gov/articles/argonne-researchers-posit-way-locally-circumvent-second-law-thermodynamics",
    "votes": 3,
    "posted": "Nov 1, 2016 3:37:56 PM"
  },
  {
    "id": "12845954",
    "timestamp": "Nov 1, 2016 6:58:53 PM",
    "topic": "A new portion of bugs in LLVM",
    "url": "http://www.viva64.com/en/b/0446/",
    "votes": 17,
    "posted": "Nov 1, 2016 3:31:28 PM"
  },
  {
    "id": "12845945",
    "timestamp": "Nov 1, 2016 3:48:31 PM",
    "topic": "Life is Short",
    "url": "http://www.paulgraham.com/vb.html",
    "votes": 13,
    "posted": "Nov 1, 2016 3:29:28 PM"
  },
  {
    "id": "12845915",
    "timestamp": "Nov 1, 2016 3:38:30 PM",
    "topic": "Social Log-In Implementations – Security Risks and How to Do It Right",
    "url": "https://cloudrail.com/social-login-setups-good-bad-ugly/",
    "votes": 7,
    "posted": "Nov 1, 2016 3:24:25 PM"
  },
  {
    "id": "12845914",
    "timestamp": "Nov 2, 2016 5:20:54 PM",
    "topic": "Wikileaks: Google\u0027s “Strategic Plan”: Help Democrats Win Election, Track Voters",
    "url": "http://www.zerohedge.com/news/2016-11-01/wikileaks-reveals-googles-strategic-plan-help-democrats-win-election",
    "votes": 4,
    "posted": "Nov 1, 2016 3:24:23 PM"
  },
  {
    "id": "12845855",
    "timestamp": "Nov 1, 2016 3:48:31 PM",
    "topic": "The Mirai Botnet Is Proof the Security Industry Is Broken",
    "url": "https://blog.appcanary.com/2016/mirai-botnet-security-broken.html",
    "votes": 12,
    "posted": "Nov 1, 2016 3:13:57 PM"
  },
  {
    "id": "12845823",
    "timestamp": "Nov 1, 2016 4:18:35 PM",
    "topic": "Google’s Tango Team Has ‘Solved’ Inside-Out Positional Tracking for Wireless VR",
    "url": "http://uploadvr.com/inside-out-google-solve-tracking/",
    "votes": 4,
    "posted": "Nov 1, 2016 3:08:48 PM"
  },
  {
    "id": "12845714",
    "timestamp": "Nov 1, 2016 3:58:32 PM",
    "topic": "Debunking Trump\u0027s “secret server”",
    "url": "http://blog.erratasec.com/2016/11/debunking-trumps-secret-server.html#.WBie7-ErLyJ",
    "votes": 4,
    "posted": "Nov 1, 2016 2:56:10 PM"
  },
  {
    "id": "12845681",
    "timestamp": "Nov 2, 2016 4:49:50 AM",
    "topic": "Any Developer, Any App, Any Platform (Visual Studio and .NET)",
    "url": "https://msdn.microsoft.com/magazine/mt788617",
    "votes": 6,
    "posted": "Nov 1, 2016 2:51:21 PM"
  },
  {
    "id": "12845642",
    "timestamp": "Nov 1, 2016 6:28:50 PM",
    "topic": "Ask HN: Remote US employees \u003d tax nightmare?",
    "votes": 5,
    "posted": "Nov 1, 2016 2:47:08 PM"
  },
  {
    "id": "12845572",
    "timestamp": "Nov 1, 2016 7:08:55 PM",
    "topic": "R 3.3.2 is released",
    "url": "https://www.r-statistics.com/2016/11/r-3-3-2-is-released/",
    "votes": 4,
    "posted": "Nov 1, 2016 2:37:43 PM"
  },
  {
    "id": "12845533",
    "timestamp": "Nov 1, 2016 5:38:43 PM",
    "topic": "Apple tried and failed to reestablish trust in the Mac",
    "url": "https://medium.com/@NoisyNarrowBandDevice/apple-tried-and-failed-to-reestablish-trust-in-the-mac-5af3e363f8f4#.q0v331qfx",
    "votes": 4,
    "posted": "Nov 1, 2016 2:32:06 PM"
  },
  {
    "id": "12845475",
    "timestamp": "Nov 1, 2016 5:28:42 PM",
    "topic": "Libraries.io Joins Brave New Software",
    "url": "https://medium.com/@teabass/libraries-io-joins-brave-new-software-c8cb7bba93bf",
    "votes": 3,
    "posted": "Nov 1, 2016 2:26:19 PM"
  },
  {
    "id": "12845457",
    "timestamp": "Nov 1, 2016 2:38:26 PM",
    "topic": "Apple’s new MacBook Pro may be the world’s fastest stock laptop",
    "url": "http://www.computerworld.com/article/3136714/data-storage/apples-new-macbook-pro-may-be-the-worlds-fastest-stock-laptop.html",
    "votes": 7,
    "posted": "Nov 1, 2016 2:23:57 PM"
  },
  {
    "id": "12845400",
    "timestamp": "Nov 1, 2016 6:48:52 PM",
    "topic": "Show HN: App for receiving notifications from the command line",
    "url": "https://simplepush.io/",
    "votes": 4,
    "posted": "Nov 1, 2016 2:16:43 PM"
  },
  {
    "id": "12845321",
    "timestamp": "Nov 1, 2016 4:08:34 PM",
    "topic": "Eric Schmidt\u0027s 2014 plan for Hillary\u0027s campaign via Wikileaks",
    "url": "https://wikileaks.org/podesta-emails/emailid/37262",
    "votes": 7,
    "posted": "Nov 1, 2016 2:05:20 PM"
  },
  {
    "id": "12845174",
    "timestamp": "Nov 1, 2016 2:08:23 PM",
    "topic": "Dijkstra? Which flight from A to B requires the most hops, worldwide?",
    "url": "http://travel.stackexchange.com/questions/81783/what-commercial-flight-route-has-the-biggest-number-of-minimum-possible-stops",
    "votes": 3,
    "posted": "Nov 1, 2016 1:44:52 PM"
  },
  {
    "id": "12845035",
    "timestamp": "Nov 1, 2016 6:38:51 PM",
    "topic": "Stuck between a rock and a hard place",
    "url": "http://macdaddy.io/apples-new-macbook-pros/",
    "votes": 5,
    "posted": "Nov 1, 2016 1:23:21 PM"
  },
  {
    "id": "12844976",
    "timestamp": "Nov 1, 2016 1:38:20 PM",
    "topic": "Remote-First vs. Remote-Friendly",
    "url": "https://zachholman.com/posts/remote-first/",
    "votes": 3,
    "posted": "Nov 1, 2016 1:09:25 PM"
  },
  {
    "id": "12844973",
    "timestamp": "Nov 1, 2016 1:38:20 PM",
    "topic": "The Ultimate Guide to Remote Work – Zapier",
    "url": "https://zapier.com/learn/the-ultimate-guide-to-remote-working/",
    "votes": 4,
    "posted": "Nov 1, 2016 1:09:09 PM"
  },
  {
    "id": "12844964",
    "timestamp": "Nov 1, 2016 3:18:29 PM",
    "topic": "I Have a Unicode Email Address",
    "url": "https://medium.com/@zackbloom/i-have-a-unicode-email-address-fbecd630ec12#.bbdifln65",
    "votes": 5,
    "posted": "Nov 1, 2016 1:06:55 PM"
  },
  {
    "id": "12844683",
    "timestamp": "Nov 1, 2016 2:08:23 PM",
    "topic": "Nanobionic spinach plants can detect explosives",
    "url": "http://phys.org/news/2016-10-nanobionic-spinach-explosives.html",
    "votes": 8,
    "posted": "Nov 1, 2016 12:13:48 PM"
  },
  {
    "id": "12844629",
    "timestamp": "Nov 1, 2016 1:28:19 PM",
    "topic": "Physicists induce superconductivity in non-superconducting materials",
    "url": "http://phys.org/news/2016-10-physicists-superconductivity-non-superconducting-materials.html",
    "votes": 3,
    "posted": "Nov 1, 2016 11:56:44 AM"
  },
  {
    "id": "12844600",
    "timestamp": "Nov 1, 2016 12:38:16 PM",
    "topic": "How Apple could have avoided much of the controversy",
    "url": "https://chuqui.com/2016/10/how-apple-could-have-avoided-much-of-the-controversy/",
    "votes": 4,
    "posted": "Nov 1, 2016 11:49:54 AM"
  },
  {
    "id": "12844560",
    "timestamp": "Nov 1, 2016 11:38:11 AM",
    "topic": "Sift Science (YC S11) is hiring a Software Eng who has built scalable data infra",
    "url": "https://boards.greenhouse.io/siftscience/jobs/43188#.WBd60JMrIUE",
    "votes": 1,
    "posted": "Nov 1, 2016 11:36:22 AM"
  },
  {
    "id": "12844543",
    "timestamp": "Nov 1, 2016 12:08:13 PM",
    "topic": "MacOS Sierra Server",
    "url": "http://www.apple.com/macos/server/",
    "votes": 13,
    "posted": "Nov 1, 2016 11:29:45 AM"
  },
  {
    "id": "12844539",
    "timestamp": "Nov 1, 2016 12:08:14 PM",
    "topic": "This Summer in Redox: A Complete Rewrite of the Kernel",
    "url": "https://www.redox-os.org/news/this-summer-in-redox-15/",
    "votes": 4,
    "posted": "Nov 1, 2016 11:29:05 AM"
  },
  {
    "id": "12844526",
    "timestamp": "Nov 1, 2016 11:28:10 AM",
    "topic": "Goodbye selling ads, welcome branded content",
    "url": "https://www.techinasia.com/talk/goodbye-selling-ads-branded-content",
    "votes": 3,
    "posted": "Nov 1, 2016 11:23:35 AM"
  },
  {
    "id": "12844477",
    "timestamp": "Nov 1, 2016 11:48:12 AM",
    "topic": "Forget the FBI cache; the Podesta emails show how America is run",
    "url": "https://www.theguardian.com/commentisfree/2016/oct/31/the-podesta-emails-show-who-runs-america-and-how-they-do-it",
    "votes": 5,
    "posted": "Nov 1, 2016 11:06:33 AM"
  },
  {
    "id": "12844461",
    "timestamp": "Nov 1, 2016 11:28:10 AM",
    "topic": "UK government to spend extra £1.9bn fighting cyber-attacks",
    "url": "https://www.theguardian.com/technology/2016/nov/01/philp-hammond-to-spend-extra-19bn-fighting-cyber-attacks",
    "votes": 3,
    "posted": "Nov 1, 2016 11:02:54 AM"
  },
  {
    "id": "12844434",
    "timestamp": "Nov 1, 2016 11:38:11 AM",
    "topic": "musicForProgramming();",
    "url": "http://musicforprogramming.net/",
    "votes": 5,
    "posted": "Nov 1, 2016 10:53:51 AM"
  },
  {
    "id": "12844349",
    "timestamp": "Nov 1, 2016 10:58:07 AM",
    "topic": "The YANG 1.1 Data Modeling Language",
    "url": "http://www.rfc-editor.org/rfc/rfc7950.txt",
    "votes": 3,
    "posted": "Nov 1, 2016 10:31:25 AM"
  },
  {
    "id": "12844342",
    "timestamp": "Nov 1, 2016 10:48:06 AM",
    "topic": "Show HN: Algolia for Shopify – instant search for 300K+ store owners",
    "url": "https://community.algolia.com/shopify/",
    "votes": 3,
    "posted": "Nov 1, 2016 10:30:08 AM"
  },
  {
    "id": "12844317",
    "timestamp": "Nov 1, 2016 10:48:06 AM",
    "topic": "Show HN: Extract HTTP info from integration tests to create Swagger docs",
    "votes": 3,
    "posted": "Nov 1, 2016 10:23:19 AM"
  },
  {
    "id": "12844267",
    "timestamp": "Nov 1, 2016 11:38:11 AM",
    "topic": "Show HN: IMAP based message broker client written in Go",
    "url": "https://github.com/mikaa123/imapmq",
    "votes": 3,
    "posted": "Nov 1, 2016 10:06:14 AM"
  },
  {
    "id": "12844240",
    "timestamp": "Nov 1, 2016 11:08:08 AM",
    "topic": "Bottled Water: Real-Time Integration of PostgreSQL and Kafka",
    "url": "http://www.confluent.io/blog/bottled-water-real-time-integration-of-postgresql-and-kafka/",
    "votes": 4,
    "posted": "Nov 1, 2016 9:56:59 AM"
  },
  {
    "id": "12844227",
    "timestamp": "Nov 1, 2016 10:18:03 AM",
    "topic": "MacBook Pro (2016) disappointment pushes some Apple loyalists to Ubuntu Linux",
    "url": "http://betanews.com/2016/10/30/macbook-pro-2016-disappointment-pushes-some-apple-loyalists-to-ubuntu-linux/",
    "votes": 23,
    "posted": "Nov 1, 2016 9:52:42 AM"
  },
  {
    "id": "12844222",
    "timestamp": "Nov 1, 2016 11:38:11 AM",
    "topic": "Show HN: Corrode – A batteries-included js-library for reading binary data",
    "url": "https://github.com/screeny05/corrode",
    "votes": 4,
    "posted": "Nov 1, 2016 9:51:39 AM"
  },
  {
    "id": "12844186",
    "timestamp": "Nov 1, 2016 10:18:03 AM",
    "topic": "Why we send our friends investor updates",
    "url": "https://blog.yalabot.com/why-we-send-our-friends-investor-updates-about-our-startup-a96fd012f453#.idcbma52t",
    "votes": 4,
    "posted": "Nov 1, 2016 9:39:58 AM"
  },
  {
    "id": "12844173",
    "timestamp": "Nov 1, 2016 11:48:12 AM",
    "topic": "Wordpress on AWS: smooth and pain free",
    "url": "https://cloudonaut.io/wordpress-on-aws-smooth-and-pain-free/",
    "votes": 6,
    "posted": "Nov 1, 2016 9:35:18 AM"
  },
  {
    "id": "12844061",
    "timestamp": "Nov 1, 2016 4:48:39 PM",
    "topic": "A Study Plan to Cure JavaScript Fatigue",
    "url": "https://medium.com/@sachagreif/a-study-plan-to-cure-javascript-fatigue-8ad3a54f2eb1#.jp3y84emz",
    "votes": 4,
    "posted": "Nov 1, 2016 8:54:23 AM"
  },
  {
    "id": "12844057",
    "timestamp": "Nov 1, 2016 9:38:00 AM",
    "topic": "GNU Terry Pratchett",
    "url": "http://www.gnuterrypratchett.com/",
    "votes": 3,
    "posted": "Nov 1, 2016 8:53:10 AM"
  },
  {
    "id": "12843980",
    "timestamp": "Nov 1, 2016 4:58:40 PM",
    "topic": "SSH, the Secure Shell: The Definitive Guide(2001)",
    "url": "http://docstore.mik.ua/orelly/networking_2ndEd/ssh/index.htm",
    "votes": 4,
    "posted": "Nov 1, 2016 8:24:39 AM"
  },
  {
    "id": "12843897",
    "timestamp": "Nov 1, 2016 6:18:49 PM",
    "topic": "The Historical Significance of Fortune-Telling",
    "url": "http://daily.jstor.org/surprising-historical-significance-fortune-telling",
    "votes": 3,
    "posted": "Nov 1, 2016 7:53:14 AM"
  },
  {
    "id": "12843880",
    "timestamp": "Nov 1, 2016 7:47:50 AM",
    "topic": "You’re engiNEARer to your dream job. Join the team at BloomThat (YC S13)",
    "url": "https://jobs.lever.co/bloomthat",
    "votes": 1,
    "posted": "Nov 1, 2016 7:45:31 AM"
  },
  {
    "id": "12843790",
    "timestamp": "Nov 1, 2016 2:38:26 PM",
    "topic": "Transcontinental anaesthesia: a pilot study (2013)",
    "url": "http://bja.oxfordjournals.org/content/110/5/758.full",
    "votes": 4,
    "posted": "Nov 1, 2016 7:16:24 AM"
  },
  {
    "id": "12843782",
    "timestamp": "Nov 1, 2016 12:48:17 PM",
    "topic": "Show HN: My first Rails app",
    "url": "https://www.westoq.com/",
    "votes": 5,
    "posted": "Nov 1, 2016 7:14:44 AM"
  },
  {
    "id": "12843775",
    "timestamp": "Nov 1, 2016 10:38:04 AM",
    "topic": "Asus to surpass Apple in notebook sales: TrendForce",
    "url": "http://www.taipeitimes.com/News/biz/archives/2016/10/31/2003658243",
    "votes": 4,
    "posted": "Nov 1, 2016 7:13:02 AM"
  },
  {
    "id": "12843742",
    "timestamp": "Nov 1, 2016 7:57:51 AM",
    "topic": "How this pioneer built a SaaS hub in Chennai from scratch without VC money",
    "url": "https://www.techinasia.com/pioneer-who-built-saas-hub-from-scratch",
    "votes": 4,
    "posted": "Nov 1, 2016 7:02:31 AM"
  },
  {
    "id": "12843725",
    "timestamp": "Nov 1, 2016 7:37:49 AM",
    "topic": "Debunking a presidential candidate\u0027s “secret server”",
    "url": "http://blog.erratasec.com/2016/11/debunking-trumps-secret-server.html",
    "votes": 3,
    "posted": "Nov 1, 2016 6:57:02 AM"
  },
  {
    "id": "12843667",
    "timestamp": "Nov 1, 2016 11:28:10 AM",
    "topic": "Aboriginal Australians might carry DNA of unknown human species",
    "url": "http://www.abc.net.au/news/2016-10-26/dna-of-extinct-human-species-pacific-islanders-analysis-suggests/7968950",
    "votes": 3,
    "posted": "Nov 1, 2016 6:43:32 AM"
  },
  {
    "id": "12843597",
    "timestamp": "Nov 1, 2016 6:37:44 AM",
    "topic": "Math and Physics Taught by Robin Williams and Steve Martin",
    "url": "https://www.youtube.com/watch?v\u003dFHW45zw23gU",
    "votes": 3,
    "posted": "Nov 1, 2016 6:18:10 AM"
  },
  {
    "id": "12843590",
    "timestamp": "Nov 1, 2016 6:57:46 AM",
    "topic": "Ask HN: How to make a career working remotely?",
    "votes": 4,
    "posted": "Nov 1, 2016 6:15:48 AM"
  },
  {
    "id": "12843517",
    "timestamp": "Nov 1, 2016 4:38:38 PM",
    "topic": "Stark, Spare, Beautiful Midcentury British Safety Posters",
    "url": "http://www.slate.com/blogs/the_vault/2016/09/16/modernist_british_safety_posters_from_the_middle_of_the_twentieth_century.html",
    "votes": 3,
    "posted": "Nov 1, 2016 5:54:48 AM"
  },
  {
    "id": "12843466",
    "timestamp": "Nov 1, 2016 6:07:42 AM",
    "topic": "Show HN: My first web app",
    "url": "http://www.createamemo.com",
    "votes": 7,
    "posted": "Nov 1, 2016 5:39:48 AM"
  },
  {
    "id": "12843442",
    "timestamp": "Nov 1, 2016 2:18:24 PM",
    "topic": "Meet the Man Bringing Chinese Science Fiction to the West",
    "url": "http://www.newsweek.com/man-bringing-chinese-science-fiction-west-514893",
    "votes": 3,
    "posted": "Nov 1, 2016 5:33:23 AM"
  },
  {
    "id": "12843440",
    "timestamp": "Nov 1, 2016 8:17:52 AM",
    "topic": "Ask HN: What tools do you use to prototype web UI?",
    "votes": 6,
    "posted": "Nov 1, 2016 5:32:26 AM"
  },
  {
    "id": "12843397",
    "timestamp": "Nov 1, 2016 10:29:16 PM",
    "topic": "Ask HN: What\u0027s the best way to learn frontend development nowadays?",
    "votes": 6,
    "posted": "Nov 1, 2016 5:17:53 AM"
  },
  {
    "id": "12843369",
    "timestamp": "Nov 1, 2016 8:17:52 AM",
    "topic": "FreeDOS 1.2 RC1",
    "url": "http://opensource-usability.blogspot.com/2016/10/freedos-12-rc1.html",
    "votes": 4,
    "posted": "Nov 1, 2016 5:11:06 AM"
  },
  {
    "id": "12843344",
    "timestamp": "Nov 1, 2016 10:48:06 AM",
    "topic": "Show HN: Coffee Break, Mini Games on FB Messenger",
    "url": "https://coffeebreak.games",
    "votes": 5,
    "posted": "Nov 1, 2016 5:07:14 AM"
  },
  {
    "id": "12843253",
    "timestamp": "Nov 1, 2016 6:27:43 AM",
    "topic": "Is Dark Silicon Useful? (2012) [pdf]",
    "url": "http://cseweb.ucsd.edu/~mbtaylor/papers/taylor_dark_silicon_horsemen_dac_2012.pdf",
    "votes": 4,
    "posted": "Nov 1, 2016 4:51:02 AM"
  },
  {
    "id": "12843244",
    "timestamp": "Nov 1, 2016 5:57:41 AM",
    "topic": "Postmates Secures $141M in a ‘Super, Super Difficult’ Fundraising Effort",
    "url": "https://www.bloomberg.com/news/articles/2016-10-31/postmates-secures-141-million-in-a-super-super-difficult-fundraising-effort",
    "votes": 6,
    "posted": "Nov 1, 2016 4:48:57 AM"
  },
  {
    "id": "12843221",
    "timestamp": "Nov 1, 2016 5:47:40 AM",
    "topic": "Show HN: Physics-based CAD",
    "url": "http://www.prandtl.design/",
    "votes": 6,
    "posted": "Nov 1, 2016 4:45:50 AM"
  },
  {
    "id": "12843145",
    "timestamp": "Nov 1, 2016 4:57:36 AM",
    "topic": "Freelance Isn\u0027t Free Act Passes in NYC",
    "url": "https://blog.freelancersunion.org/2016/10/27/freelanceisntfreepassed/",
    "votes": 3,
    "posted": "Nov 1, 2016 4:31:55 AM"
  },
  {
    "id": "12843118",
    "timestamp": "Nov 1, 2016 5:17:37 AM",
    "topic": "Ask HN: what tool do you use to manage your todo list?",
    "votes": 4,
    "posted": "Nov 1, 2016 4:26:18 AM"
  },
  {
    "id": "12843094",
    "timestamp": "Nov 1, 2016 4:27:33 AM",
    "topic": "Checkr (YC S14) is hiring back end engineers to build the future of online trust",
    "url": "http://grnh.se/1nm6k8",
    "votes": 1,
    "posted": "Nov 1, 2016 4:17:46 AM"
  },
  {
    "id": "12843082",
    "timestamp": "Nov 1, 2016 10:38:04 AM",
    "topic": "JTAGing Mobile Phones",
    "url": "https://sysforensics.org/2016/08/jtaging-mobile-phones/",
    "votes": 3,
    "posted": "Nov 1, 2016 4:13:46 AM"
  },
  {
    "id": "12843009",
    "timestamp": "Nov 1, 2016 4:17:32 AM",
    "topic": "Microsoft Flow",
    "url": "https://flow.microsoft.com",
    "votes": 4,
    "posted": "Nov 1, 2016 3:55:34 AM"
  },
  {
    "id": "12842915",
    "timestamp": "Nov 1, 2016 3:47:30 AM",
    "topic": "Who\u0027s to Blame for the 16 GB RAM Limit on the New MacBook Pros: Apple or Intel?",
    "url": "http://daringfireball.net/linked/2016/10/31/intel-mbp-ram",
    "votes": 5,
    "posted": "Nov 1, 2016 3:29:18 AM"
  },
  {
    "id": "12842908",
    "timestamp": "Nov 1, 2016 3:57:31 AM",
    "topic": "IntelliJ IDEA 2016.3 EAP Is Open",
    "url": "https://blog.jetbrains.com/idea/2016/08/intellij-idea-2016-3-eap-is-open/",
    "votes": 3,
    "posted": "Nov 1, 2016 3:27:31 AM"
  },
  {
    "id": "12842875",
    "timestamp": "Nov 1, 2016 3:27:28 AM",
    "topic": "Trump shown to have used legally dubious tax evasion schemes",
    "url": "http://www.nytimes.com/2016/11/01/us/politics/donald-trump-tax.html?_r\u003d1\u0026register\u003dgoogle",
    "votes": 3,
    "posted": "Nov 1, 2016 3:19:11 AM"
  },
  {
    "id": "12842854",
    "timestamp": "Nov 1, 2016 5:27:38 AM",
    "topic": "JavaScript: A Horror Story",
    "url": "https://eev.ee/blog/2016/10/31/javascript-a-horror-story/",
    "votes": 3,
    "posted": "Nov 1, 2016 3:14:11 AM"
  },
  {
    "id": "12842802",
    "timestamp": "Nov 1, 2016 3:07:26 AM",
    "topic": "A Spy Has Given the FBI Information Alleging Russians Cultivate Donald Trump",
    "url": "http://www.motherjones.com/politics/2016/10/veteran-spy-gave-fbi-info-alleging-russian-operation-cultivate-donald-trump",
    "votes": 4,
    "posted": "Nov 1, 2016 3:00:05 AM"
  },
  {
    "id": "12842797",
    "timestamp": "Nov 1, 2016 3:17:27 AM",
    "topic": "KQ: Simple Job Queue for Python Using Kafka",
    "url": "https://github.com/joowani/kq",
    "votes": 7,
    "posted": "Nov 1, 2016 2:58:47 AM"
  },
  {
    "id": "12842684",
    "timestamp": "Nov 1, 2016 5:18:41 PM",
    "topic": "Firms envision ways for New York to absorb 9M residents",
    "url": "http://www.crainsnewyork.com/article/20161030/REAL_ESTATE/161029841/12-firms-envision-ways-for-new-york-to-absorb-9-million-residents",
    "votes": 5,
    "posted": "Nov 1, 2016 2:35:17 AM"
  },
  {
    "id": "12842616",
    "timestamp": "Nov 1, 2016 3:27:28 AM",
    "topic": "Breaking the Multicore Bottleneck",
    "url": "http://spectrum.ieee.org/semiconductors/processors/breaking-the-multicore-bottleneck",
    "votes": 4,
    "posted": "Nov 1, 2016 2:22:54 AM"
  },
  {
    "id": "12842406",
    "timestamp": "Nov 1, 2016 4:07:32 AM",
    "topic": "Show HN: Django-traffic, a Middleware for traffic visualizations in Kibana",
    "url": "https://koslib.com/2016/10/29/django-traffic-a-middleware-for-traffic-visualizations-in-kibana/",
    "votes": 3,
    "posted": "Nov 1, 2016 1:40:25 AM"
  },
  {
    "id": "12842270",
    "timestamp": "Nov 1, 2016 2:27:23 AM",
    "topic": "How Apple could have avoided much of the controversy",
    "url": "https://chuqui.com/2016/10/how-apple-could-have-avoided-much-of-the-controversy/",
    "votes": 7,
    "posted": "Nov 1, 2016 1:20:06 AM"
  },
  {
    "id": "12842249",
    "timestamp": "Nov 1, 2016 7:37:49 AM",
    "topic": "New leak may show if you were hacked by the NSA",
    "url": "http://arstechnica.com/security/2016/10/new-leak-may-show-if-you-were-hacked-by-the-nsa/",
    "votes": 3,
    "posted": "Nov 1, 2016 1:18:24 AM"
  },
  {
    "id": "12842204",
    "timestamp": "Nov 1, 2016 1:27:18 AM",
    "topic": "Walmart Will Manage Distribution Centers with OneOps, Jenkins, and Kubernetes",
    "url": "http://www.techbetter.com/walmart-will-manage-200-distribution-centers-oneops-jenkins-nexus-kubernetes/",
    "votes": 3,
    "posted": "Nov 1, 2016 1:12:57 AM"
  },
  {
    "id": "12842189",
    "timestamp": "Nov 1, 2016 5:37:39 AM",
    "topic": "Japan\u0027s purple machine [pdf]",
    "url": "http://ovid.cs.depaul.edu/Classes/CS233-W04/Papers/PurpleMagic.pdf",
    "votes": 3,
    "posted": "Nov 1, 2016 1:11:18 AM"
  },
  {
    "id": "12842090",
    "timestamp": "Nov 1, 2016 2:17:22 AM",
    "topic": "Eric Schmidt on how to identify, meet and update profiles on voter (real id.)",
    "url": "https://wikileaks.org/podesta-emails/emailid/37262",
    "votes": 8,
    "posted": "Nov 1, 2016 12:58:08 AM"
  },
  {
    "id": "12842080",
    "timestamp": "Nov 1, 2016 1:27:18 AM",
    "topic": "It\u0027s Harder to Get an Uber or Lyft If You\u0027re Black, Study Says",
    "url": "http://time.com/4551521/uber-lyft-black-discrimination/",
    "votes": 5,
    "posted": "Nov 1, 2016 12:57:03 AM"
  },
  {
    "id": "12842050",
    "timestamp": "Nov 1, 2016 12:57:14 AM",
    "topic": "Canopy Labs (YC S12) Is Hiring a SysOps Engineer",
    "votes": 1,
    "posted": "Nov 1, 2016 12:51:59 AM"
  },
  {
    "id": "12842018",
    "timestamp": "Nov 1, 2016 1:17:16 AM",
    "topic": "Peter Thiel Backing Trump Suggests Silicon Valley Is Out of Touch",
    "url": "http://www.nytimes.com/2016/11/01/technology/peter-thiel-on-donald-trump-media-silicon-valley.html",
    "votes": 5,
    "posted": "Nov 1, 2016 12:47:30 AM"
  },
  {
    "id": "12842015",
    "timestamp": "Nov 1, 2016 1:07:15 AM",
    "topic": "How a Fake British Accent Took Old Hollywood by Storm",
    "url": "http://www.atlasobscura.com/articles/how-a-fake-british-accent-took-old-hollywood-by-storm",
    "votes": 3,
    "posted": "Nov 1, 2016 12:46:33 AM"
  },
  {
    "id": "12842006",
    "timestamp": "Nov 1, 2016 12:57:14 AM",
    "topic": "Barack Obama: Now Is the Greatest Time to Be Alive",
    "url": "https://www.wired.com/2016/10/president-obama-guest-edits-wired-essay?mbid\u003dsocial_twitter",
    "votes": 12,
    "posted": "Nov 1, 2016 12:44:00 AM"
  },
  {
    "id": "12841993",
    "timestamp": "Nov 1, 2016 12:57:14 AM",
    "topic": "Google Is Not What It Seems",
    "url": "https://wikileaks.org/google-is-not-what-it-seems/",
    "votes": 4,
    "posted": "Nov 1, 2016 12:42:29 AM"
  },
  {
    "id": "12841981",
    "timestamp": "Nov 1, 2016 10:49:19 PM",
    "topic": "‘Post-Fire London was a magnificent, beautiful compromise’",
    "url": "http://www.apollo-magazine.com/post-fire-london-magnificent-beautiful-compromise/",
    "votes": 5,
    "posted": "Nov 1, 2016 12:40:45 AM"
  },
  {
    "id": "12841884",
    "timestamp": "Nov 1, 2016 10:48:06 AM",
    "topic": "Show HN: DotConfigs- Framework to auto-configure and sync between linux machines",
    "url": "https://github.com/BrandonBielicki/dotconfigs",
    "votes": 3,
    "posted": "Nov 1, 2016 12:23:54 AM"
  },
  {
    "id": "12841875",
    "timestamp": "Nov 3, 2016 11:13:47 PM",
    "topic": "Purses and foldouts – unexpected challenges of digitisation",
    "url": "http://blog.wellcomelibrary.org/2016/10/purses-and-foldouts-unexpected-challenges-of-digitisation/",
    "votes": 4,
    "posted": "Nov 1, 2016 12:22:25 AM"
  },
  {
    "id": "12841860",
    "timestamp": "Nov 1, 2016 12:47:13 AM",
    "topic": "Distrusting WoSign and StartCom Certificates",
    "url": "https://security.googleblog.com/2016/10/distrusting-wosign-and-startcom.html",
    "votes": 7,
    "posted": "Nov 1, 2016 12:20:57 AM"
  },
  {
    "id": "12841803",
    "timestamp": "Nov 1, 2016 7:17:47 AM",
    "topic": "Microsoft reimagines open source cloud hardware",
    "url": "https://azure.microsoft.com/en-us/blog/microsoft-reimagines-open-source-cloud-hardware/",
    "votes": 4,
    "posted": "Nov 1, 2016 12:11:01 AM"
  },
  {
    "id": "12841766",
    "timestamp": "Nov 1, 2016 2:57:25 AM",
    "topic": "Study says women better coders than men – but only if they hide their gender [pdf]",
    "url": "https://peerj.com/preprints/1733v1.pdf",
    "votes": 3,
    "posted": "Nov 1, 2016 12:05:13 AM"
  },
  {
    "id": "12841718",
    "timestamp": "Nov 1, 2016 12:17:09 AM",
    "topic": "Edge web platform status",
    "url": "https://developer.microsoft.com/en-us/microsoft-edge/platform/status/",
    "votes": 5,
    "posted": "Oct 31, 2016 11:58:21 PM"
  },
  {
    "id": "12841672",
    "timestamp": "Nov 1, 2016 12:07:08 AM",
    "topic": "Disclosing vulnerabilities before a patch is available to protect users",
    "url": "https://security.googleblog.com/2016/10/disclosing-vulnerabilities-to-protect.html?m\u003d1",
    "votes": 5,
    "posted": "Oct 31, 2016 11:50:34 PM"
  },
  {
    "id": "12841641",
    "timestamp": "Nov 1, 2016 12:17:09 AM",
    "topic": "This CNET page weighs 131 MB",
    "url": "https://twitter.com/addyosmani/status/793197147713773568",
    "votes": 5,
    "posted": "Oct 31, 2016 11:45:33 PM"
  },
  {
    "id": "12841628",
    "timestamp": "Oct 31, 2016 11:57:07 PM",
    "topic": "FBI\u0027s Comey opposed naming Russians, citing election timing",
    "url": "http://www.cnbc.com/2016/10/31/fbis-comey-opposed-naming-russians-citing-election-timing-source.html",
    "votes": 4,
    "posted": "Oct 31, 2016 11:43:12 PM"
  },
  {
    "id": "12841611",
    "timestamp": "Nov 1, 2016 12:17:10 AM",
    "topic": "CQRS increases consistency",
    "url": "https://jazzy.id.au/2016/10/08/cqrs-increases-consistency.html",
    "votes": 3,
    "posted": "Oct 31, 2016 11:40:38 PM"
  },
  {
    "id": "12841599",
    "timestamp": "Oct 31, 2016 11:57:07 PM",
    "topic": "VIM – Avoid the escape key",
    "url": "http://vim.wikia.com/wiki/Avoid_the_escape_key",
    "votes": 3,
    "posted": "Oct 31, 2016 11:38:16 PM"
  },
  {
    "id": "12841581",
    "timestamp": "Nov 1, 2016 12:27:11 AM",
    "topic": "The future of video… 5 steps between now and the VR/AR world",
    "url": "https://medium.com/@Nicquinn/the-future-of-video-5-steps-between-now-and-the-vr-ar-world-4f7b9a38a4bb#.crpk7l8gf",
    "votes": 3,
    "posted": "Oct 31, 2016 11:35:13 PM"
  },
  {
    "id": "12841552",
    "timestamp": "Oct 31, 2016 11:47:06 PM",
    "topic": "Google issues warning of critical Windows vulnerability in wild",
    "url": "http://arstechnica.com/security/2016/10/trick-or-treat-google-issues-warning-of-critical-windows-vulnerability/",
    "votes": 4,
    "posted": "Oct 31, 2016 11:30:51 PM"
  },
  {
    "id": "12841531",
    "timestamp": "Oct 31, 2016 11:37:04 PM",
    "topic": "Help Your Users Vote",
    "url": "https://medium.com/voteplz/help-your-users-vote-6ee61dcf224d#.l9us594st",
    "votes": 12,
    "posted": "Oct 31, 2016 11:26:30 PM"
  },
  {
    "id": "12841489",
    "timestamp": "Oct 31, 2016 11:27:03 PM",
    "topic": "Nitrous Service Shutdown – November 14th",
    "url": "https://community.nitrous.io/posts/nitrous-service-shutdown-november-14th",
    "votes": 7,
    "posted": "Oct 31, 2016 11:20:35 PM"
  },
  {
    "id": "12841444",
    "timestamp": "Oct 31, 2016 11:37:04 PM",
    "topic": "Notes on the upcoming release of Scala 2.12 (Java 8)",
    "url": "http://get-scala.org/2.12",
    "votes": 6,
    "posted": "Oct 31, 2016 11:14:56 PM"
  },
  {
    "id": "12841407",
    "timestamp": "Nov 1, 2016 12:57:14 AM",
    "topic": "Ask HN: Can the location of a company help avoid patent disputes?",
    "votes": 3,
    "posted": "Oct 31, 2016 11:10:06 PM"
  },
  {
    "id": "12841389",
    "timestamp": "Oct 31, 2016 11:47:06 PM",
    "topic": "I Put Ads in My App – This Is What Losing Looks Like",
    "url": "https://medium.com/@sisedi/i-put-ads-in-my-app-this-is-what-losing-looks-like-3249d34364f8",
    "votes": 3,
    "posted": "Oct 31, 2016 11:07:27 PM"
  },
  {
    "id": "12841323",
    "timestamp": "Oct 31, 2016 11:27:03 PM",
    "topic": "Nitrous.io is shutting down",
    "url": "http://us4.campaign-archive1.com/?u\u003d40aef44b6df80a146dc4163c7\u0026id\u003d99995282f8\u0026e\u003d952a866202",
    "votes": 13,
    "posted": "Oct 31, 2016 10:59:02 PM"
  },
  {
    "id": "12841299",
    "timestamp": "Nov 1, 2016 5:48:44 PM",
    "topic": "Simple Lane Detection – My Road to Self Drive Cars",
    "url": "http://sdc.autojazari.com/lane-detection/",
    "votes": 3,
    "posted": "Oct 31, 2016 10:54:55 PM"
  },
  {
    "id": "12841288",
    "timestamp": "Oct 31, 2016 11:17:02 PM",
    "topic": "A Trump Server May Have Been Communicating with a Russian Bank",
    "url": "http://www.slate.com/articles/news_and_politics/cover_story/2016/10/was_a_server_registered_to_the_trump_organization_communicating_with_russia.html",
    "votes": 11,
    "posted": "Oct 31, 2016 10:53:29 PM"
  },
  {
    "id": "12841278",
    "timestamp": "Oct 31, 2016 11:27:03 PM",
    "topic": "Intel, TSMC and other chipmakers weigh extreme ultraviolet lithography",
    "url": "http://spectrum.ieee.org/semiconductors/devices/leading-chipmakers-eye-euv-lithography-to-save-moores-law",
    "votes": 3,
    "posted": "Oct 31, 2016 10:51:53 PM"
  },
  {
    "id": "12841261",
    "timestamp": "Nov 1, 2016 3:07:26 AM",
    "topic": "Want more startups? Build a better safety net",
    "url": "https://www.bloomberg.com/view/articles/2016-10-28/want-more-startups-build-a-better-safety-net",
    "votes": 3,
    "posted": "Oct 31, 2016 10:50:15 PM"
  },
  {
    "id": "12841252",
    "timestamp": "Nov 1, 2016 1:17:17 AM",
    "topic": "Machines That Learn to Code and Take Your Job",
    "url": "https://dev.to/ben/machines-that-learn-to-code-and-take-your-job",
    "votes": 5,
    "posted": "Oct 31, 2016 10:48:30 PM"
  },
  {
    "id": "12841178",
    "timestamp": "Oct 31, 2016 11:57:07 PM",
    "topic": "Votes are being counted as fractions instead of as whole numbers",
    "url": "http://blackboxvoting.org/fraction-magic-1/",
    "votes": 4,
    "posted": "Oct 31, 2016 10:40:33 PM"
  },
  {
    "id": "12841149",
    "timestamp": "Oct 31, 2016 10:56:59 PM",
    "topic": "Why Mac apps never get “closed”",
    "url": "http://unix.stackexchange.com/a/5160/111087",
    "votes": 3,
    "posted": "Oct 31, 2016 10:37:00 PM"
  },
  {
    "id": "12841082",
    "timestamp": "Oct 31, 2016 10:46:57 PM",
    "topic": "Academics Write Papers Arguing Over How Many People Read (And Cite) Their Papers",
    "url": "http://www.smithsonianmag.com/smart-news/half-academic-studies-are-never-read-more-three-people-180950222/?no-ist",
    "votes": 7,
    "posted": "Oct 31, 2016 10:30:11 PM"
  },
  {
    "id": "12840940",
    "timestamp": "Nov 1, 2016 12:07:08 AM",
    "topic": "Touch Bar Everywhere",
    "url": "http://bitsplitting.org/2016/10/31/touch-bar-everywhere/",
    "votes": 3,
    "posted": "Oct 31, 2016 10:08:48 PM"
  },
  {
    "id": "12840938",
    "timestamp": "Oct 31, 2016 10:26:53 PM",
    "topic": "Google discloses Windows vulnerability just 10 days after reporting it to MSFT",
    "url": "http://venturebeat.com/2016/10/31/google-discloses-actively-exploited-windows-vulnerability-just-10-days-after-reporting-it-to-microsoft/",
    "votes": 4,
    "posted": "Oct 31, 2016 10:08:31 PM"
  },
  {
    "id": "12840903",
    "timestamp": "Oct 31, 2016 10:36:55 PM",
    "topic": "The death of transit? – APNIC Blog",
    "url": "https://blog.apnic.net/2016/10/28/the-death-of-transit/",
    "votes": 3,
    "posted": "Oct 31, 2016 10:03:05 PM"
  },
  {
    "id": "12840882",
    "timestamp": "Oct 31, 2016 11:17:01 PM",
    "topic": "Disappointment with 2016 Macbook Pro pushes Apple loyalists to alternatives",
    "url": "http://betanews.com/2016/10/30/macbook-pro-2016-disappointment-pushes-some-apple-loyalists-to-ubuntu-linux/",
    "votes": 5,
    "posted": "Oct 31, 2016 10:00:35 PM"
  },
  {
    "id": "12840803",
    "timestamp": "Oct 31, 2016 11:57:07 PM",
    "topic": "Service discovery at Stripe",
    "url": "https://stri.pe/blog/service-discovery-at-stripe",
    "votes": 10,
    "posted": "Oct 31, 2016 9:50:06 PM"
  },
  {
    "id": "12840787",
    "timestamp": "Oct 31, 2016 9:56:49 PM",
    "topic": "MacBook Pro: Take on some of the criticisms being levelled at the new models",
    "url": "https://9to5mac.com/2016/10/31/macbook-pro-diary-opinion-criticisms/",
    "votes": 3,
    "posted": "Oct 31, 2016 9:48:11 PM"
  },
  {
    "id": "12840778",
    "timestamp": "Oct 31, 2016 10:36:54 PM",
    "topic": "Keith Ohlfs, NeXTSTEP Designer, has passed away",
    "url": "https://techcrunch.com/2016/10/31/keith-ohlfs/",
    "votes": 7,
    "posted": "Oct 31, 2016 9:46:01 PM"
  },
  {
    "id": "12840766",
    "timestamp": "Nov 1, 2016 3:07:26 AM",
    "topic": "Recording Police Is Protected by the First Amendment, EFF Tells Court",
    "url": "https://www.eff.org/press/releases/recording-police-protected-first-amendment-eff-tells-court",
    "votes": 5,
    "posted": "Oct 31, 2016 9:44:16 PM"
  },
  {
    "id": "12840754",
    "timestamp": "Oct 31, 2016 10:36:55 PM",
    "topic": "How ReadMe Went from SaaS to On-Premises in Less Than One Week",
    "url": "http://stackshare.io/readme-io/how-readme-went-from-saas-to-on-premises-in-less-than-one-week",
    "votes": 19,
    "posted": "Oct 31, 2016 9:42:43 PM"
  },
  {
    "id": "12840690",
    "timestamp": "Oct 31, 2016 9:36:39 PM",
    "topic": "ReadMe (YC W15) is looking for a remote part-time developer blogger",
    "url": "http://readme.io/careers/#job-developer-blogger",
    "votes": 1,
    "posted": "Oct 31, 2016 9:33:26 PM"
  },
  {
    "id": "12840685",
    "timestamp": "Oct 31, 2016 9:46:41 PM",
    "topic": "How the Presidential Transition Works in the Social Media Age",
    "url": "https://www.whitehouse.gov/blog/2016/10/31/digital-transition-how-presidential-transition-works-social-media-age",
    "votes": 3,
    "posted": "Oct 31, 2016 9:33:01 PM"
  },
  {
    "id": "12840677",
    "timestamp": "Oct 31, 2016 9:56:49 PM",
    "topic": "New leak may show if you were hacked by the NSA",
    "url": "http://arstechnica.co.uk/security/2016/10/new-leak-may-show-if-you-were-hacked-by-the-nsa/",
    "votes": 4,
    "posted": "Oct 31, 2016 9:31:55 PM"
  },
  {
    "id": "12840645",
    "timestamp": "Nov 1, 2016 5:17:37 AM",
    "topic": "Gnome and Rust",
    "url": "https://siliconislandblog.wordpress.com/2016/10/31/thoughts-on-dx-gnome-and-rust/",
    "votes": 5,
    "posted": "Oct 31, 2016 9:27:57 PM"
  },
  {
    "id": "12840644",
    "timestamp": "Oct 31, 2016 9:46:42 PM",
    "topic": "Redux is Overhyped",
    "url": "https://medium.com/@shakiba/redux-is-overhyped-3ad6e42b7730#.qjcq7xtc5",
    "votes": 4,
    "posted": "Oct 31, 2016 9:27:54 PM"
  },
  {
    "id": "12840567",
    "timestamp": "Oct 31, 2016 10:36:56 PM",
    "topic": "Solving the Linux kernel code reviewer shortage",
    "url": "https://opensource.com/business/16/10/linux-kernel-review",
    "votes": 3,
    "posted": "Oct 31, 2016 9:19:20 PM"
  },
  {
    "id": "12840560",
    "timestamp": "Nov 1, 2016 1:07:16 AM",
    "topic": "Eight Atom Editor Packages for Easier Web Development",
    "url": "https://spin.atomicobject.com/2016/10/27/129088/",
    "votes": 4,
    "posted": "Oct 31, 2016 9:18:38 PM"
  },
  {
    "id": "12840555",
    "timestamp": "Oct 31, 2016 9:46:41 PM",
    "topic": "No One Saw Tesla’s Solar Roof Coming",
    "url": "https://www.bloomberg.com/news/articles/2016-10-31/no-one-saw-tesla-s-solar-roof-coming",
    "votes": 12,
    "posted": "Oct 31, 2016 9:18:08 PM"
  },
  {
    "id": "12840499",
    "timestamp": "Oct 31, 2016 9:36:39 PM",
    "topic": "Peter Thiel defends $1.25M donation to pro-Trump campaign",
    "url": "http://www.theverge.com/2016/10/31/13476734/investor-peter-thiel-donald-trump-donation-defense-speech",
    "votes": 6,
    "posted": "Oct 31, 2016 9:13:37 PM"
  },
  {
    "id": "12840492",
    "timestamp": "Nov 1, 2016 1:07:15 AM",
    "topic": "Sanos Operating System for Win32, Server Appliances",
    "url": "http://www.jbox.dk/sanos/",
    "votes": 4,
    "posted": "Oct 31, 2016 9:13:15 PM"
  },
  {
    "id": "12840476",
    "timestamp": "Nov 1, 2016 1:07:15 AM",
    "topic": "New documentation for spaCy NLP 1.0",
    "url": "https://spacy.io/docs",
    "votes": 4,
    "posted": "Oct 31, 2016 9:11:49 PM"
  },
  {
    "id": "12840473",
    "timestamp": "Oct 31, 2016 11:27:03 PM",
    "topic": "Maybe Peter Thiel Is Just a Crank",
    "url": "http://nymag.com/selectall/2016/10/maybe-peter-thiel-is-just-a-crank.html",
    "votes": 3,
    "posted": "Oct 31, 2016 9:11:29 PM"
  },
  {
    "id": "12840414",
    "timestamp": "Oct 31, 2016 9:46:42 PM",
    "topic": "Year 2038 problem",
    "url": "https://en.wikipedia.org/wiki/Year_2038_problem",
    "votes": 5,
    "posted": "Oct 31, 2016 9:05:10 PM"
  },
  {
    "id": "12840411",
    "timestamp": "Nov 3, 2016 12:31:42 AM",
    "topic": "Bringing the Drugstore Home: An Interview with Deanna Day",
    "url": "http://www.cabinetmagazine.org/issues/60/kastner_day.php",
    "votes": 3,
    "posted": "Oct 31, 2016 9:04:53 PM"
  },
  {
    "id": "12840397",
    "timestamp": "Oct 31, 2016 9:36:39 PM",
    "topic": "Is Finishing Side Projects Hard for You Too",
    "url": "https://medium.com/@jtwebman/is-finishing-side-projects-hard-5c3f03e131d8",
    "votes": 4,
    "posted": "Oct 31, 2016 9:03:27 PM"
  },
  {
    "id": "12840368",
    "timestamp": "Oct 31, 2016 10:06:50 PM",
    "topic": "The Cancelled Comma One Would Have Embarrassed the Car Industry",
    "url": "http://www.thedrive.com/tech/5772/the-cancelled-comma-one-would-have-embarrassed-the-car-industry",
    "votes": 4,
    "posted": "Oct 31, 2016 9:01:13 PM"
  },
  {
    "id": "12840335",
    "timestamp": "Nov 1, 2016 10:48:06 AM",
    "topic": "Show HN: How to train your brain with the Peg System",
    "url": "https://dacobots.com/#The_Peg_System",
    "votes": 3,
    "posted": "Oct 31, 2016 8:58:27 PM"
  },
  {
    "id": "12840329",
    "timestamp": "Oct 31, 2016 9:16:25 PM",
    "topic": "Making Chrome on Windows Faster with PGO",
    "url": "https://blog.chromium.org/2016/10/making-chrome-on-windows-faster-with-pgo.html",
    "votes": 7,
    "posted": "Oct 31, 2016 8:57:13 PM"
  },
  {
    "id": "12840326",
    "timestamp": "Oct 31, 2016 9:16:26 PM",
    "topic": "In the UK, You Will Go to Jail Not Just for Encryption, but for Noise, Too",
    "url": "http://falkvinge.net/2012/07/12/in-the-uk-you-will-go-to-jail-not-just-for-encryption-but-for-astronomical-noise-too/",
    "votes": 3,
    "posted": "Oct 31, 2016 8:57:04 PM"
  },
  {
    "id": "12840286",
    "timestamp": "Nov 1, 2016 10:48:06 AM",
    "topic": "Show HN: A simple front-end to Jekyll to create and publish academic websites",
    "url": "http://my.academic.bio",
    "votes": 4,
    "posted": "Oct 31, 2016 8:52:33 PM"
  },
  {
    "id": "12840284",
    "timestamp": "Oct 31, 2016 9:26:38 PM",
    "topic": "Ask HN: Is discussion of wikileaks not allowed?",
    "votes": 15,
    "posted": "Oct 31, 2016 8:52:02 PM"
  },
  {
    "id": "12840267",
    "timestamp": "Oct 31, 2016 10:36:56 PM",
    "topic": "Show HN: Load-Balanced LED Cluster Demo with Raspberry Pis",
    "url": "https://www.youtube.com/watch?v\u003dIaKRqBRq6CE",
    "votes": 4,
    "posted": "Oct 31, 2016 8:49:38 PM"
  },
  {
    "id": "12840262",
    "timestamp": "Oct 31, 2016 8:56:23 PM",
    "topic": "Apple says no fun allowed on the Touch Bar",
    "url": "https://techcrunch.com/2016/10/27/apple-says-no-fun-allowed-on-the-touch-bar/",
    "votes": 3,
    "posted": "Oct 31, 2016 8:48:40 PM"
  },
  {
    "id": "12840254",
    "timestamp": "Oct 31, 2016 8:56:23 PM",
    "topic": "How Florida\u0027s electricity utilities are manipulating voters to oppose solar",
    "url": "https://electrek.co/2016/10/30/how-the-electricity-utilities-use-a-little-bit-of-political-jiu-jitsu-to-steal-the-sun/",
    "votes": 3,
    "posted": "Oct 31, 2016 8:48:01 PM"
  },
  {
    "id": "12840251",
    "timestamp": "Oct 31, 2016 8:56:22 PM",
    "topic": "Clinton got previews of some debate questions",
    "url": "https://www.washingtonpost.com/news/the-fix/wp/2016/10/31/hacked-emails-suggest-trump-was-right-after-all-clinton-got-previews-of-some-debate-questions/?tid\u003dsm_tw",
    "votes": 7,
    "posted": "Oct 31, 2016 8:47:40 PM"
  },
  {
    "id": "12840118",
    "timestamp": "Oct 31, 2016 8:46:21 PM",
    "topic": "Peter Thiel Speaks at the National Press Club",
    "url": "https://www.youtube.com/watch?v\u003dob-LJqPQEJ4\u0026utm\u003demail",
    "votes": 5,
    "posted": "Oct 31, 2016 8:32:14 PM"
  },
  {
    "id": "12840116",
    "timestamp": "Oct 31, 2016 8:56:23 PM",
    "topic": "Warren wing wants Clinton to crack down on Apple, Google and Amazon",
    "url": "http://www.politico.com/story/2016/10/warren-clinton-google-apple-amazon-230274",
    "votes": 6,
    "posted": "Oct 31, 2016 8:32:05 PM"
  },
  {
    "id": "12840105",
    "timestamp": "Oct 31, 2016 8:56:23 PM",
    "topic": "We\u0027re bad at tracking deadly storms, but NY has a new way to see them coming",
    "url": "http://www.theverge.com/2016/10/31/13440952/extreme-weather-forecasting-new-york-mesonet-warning-system",
    "votes": 3,
    "posted": "Oct 31, 2016 8:30:39 PM"
  },
  {
    "id": "12840057",
    "timestamp": "Oct 31, 2016 8:46:21 PM",
    "topic": "Apple\u0027s October TV Surprise",
    "url": "http://joe-steel.com/2016-10-28-Apples-October-TV-Surprise.html",
    "votes": 10,
    "posted": "Oct 31, 2016 8:23:54 PM"
  },
  {
    "id": "12840012",
    "timestamp": "Oct 31, 2016 8:56:23 PM",
    "topic": "This Machine Was Built to Give You Nightmares",
    "url": "http://fivethirtyeight.com/features/this-machine-was-built-to-give-you-nightmares/",
    "votes": 3,
    "posted": "Oct 31, 2016 8:18:48 PM"
  },
  {
    "id": "12840009",
    "timestamp": "Oct 31, 2016 10:26:53 PM",
    "topic": "Disclosing vulnerabilities to protect users",
    "url": "https://security.googleblog.com/2016/10/disclosing-vulnerabilities-to-protect.html",
    "votes": 4,
    "posted": "Oct 31, 2016 8:18:40 PM"
  },
  {
    "id": "12840008",
    "timestamp": "Oct 31, 2016 8:46:21 PM",
    "topic": "Racial and Gender Discrimination in Transportation Network Companies",
    "url": "http://www.nber.org/papers/w22776",
    "votes": 4,
    "posted": "Oct 31, 2016 8:18:33 PM"
  },
  {
    "id": "12839971",
    "timestamp": "Nov 1, 2016 1:07:15 AM",
    "topic": "Show HN: Node-Lepton – Node.js Library for Dropbox Lepton",
    "url": "https://github.com/whitef0x0/node-lepton",
    "votes": 3,
    "posted": "Oct 31, 2016 8:13:49 PM"
  },
  {
    "id": "12839952",
    "timestamp": "Nov 1, 2016 2:18:24 PM",
    "topic": "The Lost Virtue of Cursive",
    "url": "http://www.newyorker.com/books/page-turner/the-lost-virtue-of-cursive",
    "votes": 3,
    "posted": "Oct 31, 2016 8:11:58 PM"
  },
  {
    "id": "12839901",
    "timestamp": "Oct 31, 2016 9:36:39 PM",
    "topic": "6 Foolproof Ways to Deal with Trolls on Medium",
    "url": "https://medium.com/@avalot/6-foolproof-ways-to-deal-with-trolls-on-medium-546865fdaed9#.f9is8nbuz",
    "votes": 4,
    "posted": "Oct 31, 2016 8:06:37 PM"
  },
  {
    "id": "12839861",
    "timestamp": "Oct 31, 2016 9:36:40 PM",
    "topic": "The Why: A Better Git Commit Message",
    "url": "https://8thlight.com/blog/dariusz-pasciak/2016/10/31/the-why-a-better-git-commit-message.html",
    "votes": 3,
    "posted": "Oct 31, 2016 8:01:46 PM"
  },
  {
    "id": "12839858",
    "timestamp": "Nov 1, 2016 2:18:24 PM",
    "topic": "C code for breaking the enigma cipher",
    "url": "http://practicalcryptography.com/cryptanalysis/breaking-machine-ciphers/cryptanalysis-enigma/",
    "votes": 3,
    "posted": "Oct 31, 2016 8:01:40 PM"
  },
  {
    "id": "12839838",
    "timestamp": "Nov 1, 2016 1:07:16 AM",
    "topic": "PPP found that 19% of 985 surveyed believe Hillary to be an “actual demon” [pdf]",
    "url": "http://www.publicpolicypolling.com/pdf/2015/PPP_Release_FL_104161.pdf",
    "votes": 5,
    "posted": "Oct 31, 2016 7:59:07 PM"
  },
  {
    "id": "12839827",
    "timestamp": "Oct 31, 2016 11:37:05 PM",
    "topic": "Avoiding being bitten by Python: Common Python pitfalls",
    "url": "https://medium.com/rmotr-com/avoiding-being-bitten-by-python-161b063e7da2#.cw10qn76i",
    "votes": 4,
    "posted": "Oct 31, 2016 7:57:30 PM"
  },
  {
    "id": "12839757",
    "timestamp": "Oct 31, 2016 8:16:18 PM",
    "topic": "Ycombinator.com Blacklisted by Norton",
    "votes": 5,
    "posted": "Oct 31, 2016 7:49:28 PM"
  },
  {
    "id": "12839743",
    "timestamp": "Oct 31, 2016 7:56:16 PM",
    "topic": "Microsoft\u0027s CoreRT turns C# into cross-platform C++",
    "url": "http://www.infoworld.com/article/3131551/open-source-tools/microsofts-corert-turns-c-into-cross-platform-c.html",
    "votes": 7,
    "posted": "Oct 31, 2016 7:47:12 PM"
  },
  {
    "id": "12839652",
    "timestamp": "Oct 31, 2016 8:16:18 PM",
    "topic": "My Quest for the Perfect Roast Chicken",
    "url": "https://medium.com/@mizzao/my-quest-for-the-perfect-roast-chicken-474418ea3051",
    "votes": 3,
    "posted": "Oct 31, 2016 7:35:44 PM"
  },
  {
    "id": "12839612",
    "timestamp": "Oct 31, 2016 11:17:01 PM",
    "topic": "Show HN: Sales for Nerds podcast (get some free Sandler Sales tips)",
    "url": "https://www.salesfornerds.io/episode-3-adam-boyd/",
    "votes": 4,
    "posted": "Oct 31, 2016 7:31:48 PM"
  },
  {
    "id": "12839426",
    "timestamp": "Oct 31, 2016 9:46:41 PM",
    "topic": "Teen hacker \u0027accidentally\u0027 causes 911 attack",
    "url": "http://www.bbc.com/news/technology-37821862",
    "votes": 3,
    "posted": "Oct 31, 2016 7:14:13 PM"
  },
  {
    "id": "12839364",
    "timestamp": "Oct 31, 2016 7:26:14 PM",
    "topic": "There Are No Such Things as Introversion or Extroversion",
    "url": "http://www.inc.com/joshua-spodek/there-are-no-such-things-as-introversion-or-extroversion.html",
    "votes": 3,
    "posted": "Oct 31, 2016 7:08:11 PM"
  },
  {
    "id": "12839315",
    "timestamp": "Oct 31, 2016 10:36:55 PM",
    "topic": "Linux Desktop Performance Tuning – Ninja Level",
    "url": "https://oded.ninja/2016/10/30/optimizing-your-linux-distro-ninja-level/",
    "votes": 5,
    "posted": "Oct 31, 2016 7:03:49 PM"
  },
  {
    "id": "12839118",
    "timestamp": "Nov 1, 2016 12:17:10 AM",
    "topic": "Hacking diet the middle path way",
    "url": "https://www.wired.com/2016/10/dan-zigmond-buddhas-diet/",
    "votes": 3,
    "posted": "Oct 31, 2016 6:46:20 PM"
  },
  {
    "id": "12839107",
    "timestamp": "Oct 31, 2016 9:06:25 PM",
    "topic": "Go See Ghostbusters Because It Matters",
    "url": "https://medium.com/code-like-a-girl/go-see-ghostbusters-because-it-matters-451d2fa28ef2#.px8erdp1k",
    "votes": 3,
    "posted": "Oct 31, 2016 6:45:39 PM"
  },
  {
    "id": "12839054",
    "timestamp": "Oct 31, 2016 6:46:08 PM",
    "topic": "LinkedIn is working on a project that should terrify the $175B hardware industry",
    "url": "http://www.businessinsider.com/how-linkedin-is-shrugging-off-the-175-billion-hardware-industry-2016-10",
    "votes": 4,
    "posted": "Oct 31, 2016 6:41:04 PM"
  },
  {
    "id": "12839037",
    "timestamp": "Oct 31, 2016 7:26:14 PM",
    "topic": "Peter Thiel Trump Speech",
    "url": "https://www.youtube.com/watch?v\u003dAfYLEPRiIyE",
    "votes": 9,
    "posted": "Oct 31, 2016 6:39:42 PM"
  },
  {
    "id": "12838987",
    "timestamp": "Oct 31, 2016 9:06:24 PM",
    "topic": "The Death of Transit?",
    "url": "https://labs.ripe.net/Members/gih/the-death-of-transit",
    "votes": 3,
    "posted": "Oct 31, 2016 6:35:18 PM"
  },
  {
    "id": "12838983",
    "timestamp": "Oct 31, 2016 10:36:55 PM",
    "topic": "A survey of attacks on Ethereum smart contracts",
    "url": "https://eprint.iacr.org/2016/1007",
    "votes": 3,
    "posted": "Oct 31, 2016 6:34:43 PM"
  },
  {
    "id": "12838934",
    "timestamp": "Oct 31, 2016 6:36:06 PM",
    "topic": "How Facebook, Instagram, and Twitter helped police target black activists",
    "url": "http://fusion.net/story/356808/facebook-twitter-instagram-geofeedia-tracking/",
    "votes": 3,
    "posted": "Oct 31, 2016 6:29:52 PM"
  },
  {
    "id": "12838908",
    "timestamp": "Oct 31, 2016 6:56:09 PM",
    "topic": "I Fooled the World into Thinking I Was a Successful EDM DJ–For an Art Project",
    "url": "http://thump.vice.com/en_us/article/i-fooled-the-world-into-thinking-i-was-a-successful-edm-djfor-an-art-project?utm_source\u003dthumpfbus",
    "votes": 5,
    "posted": "Oct 31, 2016 6:27:45 PM"
  },
  {
    "id": "12838904",
    "timestamp": "Oct 31, 2016 7:06:10 PM",
    "topic": "Minoca OS: A new open source operating system",
    "url": "https://blog.minocacorp.com/minoca-os-a-new-open-source-operating-system-4bb7998df3a7",
    "votes": 21,
    "posted": "Oct 31, 2016 6:27:17 PM"
  },
  {
    "id": "12838897",
    "timestamp": "Nov 1, 2016 3:47:30 AM",
    "topic": "The Challenge of Computer Mathematics [pdf]",
    "url": "http://www.cs.ru.nl/~freek/notes/RSpaper.pdf",
    "votes": 4,
    "posted": "Oct 31, 2016 6:26:37 PM"
  },
  {
    "id": "12838891",
    "timestamp": "Oct 31, 2016 6:36:06 PM",
    "topic": "Show HN: A 3D-printed turret so you can shoot aliens for Halloween",
    "url": "https://sidigital.co/alien-invasion",
    "votes": 8,
    "posted": "Oct 31, 2016 6:26:09 PM"
  },
  {
    "id": "12838890",
    "timestamp": "Oct 31, 2016 6:36:06 PM",
    "topic": "GIF Site Giphy Is Valued at $600M",
    "url": "http://www.wsj.com/articles/gif-site-giphy-is-valued-at-600-million-1477906202?",
    "votes": 3,
    "posted": "Oct 31, 2016 6:25:45 PM"
  },
  {
    "id": "12838858",
    "timestamp": "Oct 31, 2016 6:46:08 PM",
    "topic": "How Vine Overlooked the People of Color Who Made It Amazing",
    "url": "https://backchannel.com/how-vine-overlooked-the-people-of-color-who-made-it-amazing-2d80d4cde651#.ta510hwc1",
    "votes": 3,
    "posted": "Oct 31, 2016 6:23:03 PM"
  },
  {
    "id": "12838826",
    "timestamp": "Oct 31, 2016 6:46:08 PM",
    "topic": "Where to Go from Here",
    "url": "https://owensd.io/2016/10/31/where-to-go-from-here-2/",
    "votes": 3,
    "posted": "Oct 31, 2016 6:20:20 PM"
  },
  {
    "id": "12838782",
    "timestamp": "Oct 31, 2016 6:36:06 PM",
    "topic": "Microsoft open sources its next-gen cloud hardware design",
    "url": "https://techcrunch.com/2016/10/31/microsoft-open-sources-its-next-gen-cloud-hardware-design/",
    "votes": 3,
    "posted": "Oct 31, 2016 6:17:04 PM"
  },
  {
    "id": "12838754",
    "timestamp": "Oct 31, 2016 10:36:55 PM",
    "topic": "4K KVMs: Frustration with Terrible Hardware",
    "url": "http://penguindreams.org/blog/4k-uhd-kvm-switches-the-startech-sv231mdpu2-and-the-iogear-GCS62DP/",
    "votes": 5,
    "posted": "Oct 31, 2016 6:14:00 PM"
  },
  {
    "id": "12838751",
    "timestamp": "Oct 31, 2016 6:26:05 PM",
    "topic": "Making what people want isn’t enough. You have to share it.",
    "url": "https://blog.oldgeekjobs.com/be-a-prolific-sharer-31bfdfb50a40",
    "votes": 7,
    "posted": "Oct 31, 2016 6:13:47 PM"
  },
  {
    "id": "12838716",
    "timestamp": "Oct 31, 2016 6:16:04 PM",
    "topic": "Debian drops support for PowerPC",
    "url": "https://lists.debian.org/debian-devel-announce/2016/10/msg00008.html",
    "votes": 7,
    "posted": "Oct 31, 2016 6:10:35 PM"
  },
  {
    "id": "12838690",
    "timestamp": "Nov 1, 2016 3:18:29 PM",
    "topic": "Ask HN: Standing desks – still using over the long term?",
    "votes": 4,
    "posted": "Oct 31, 2016 6:08:26 PM"
  },
  {
    "id": "12838583",
    "timestamp": "Oct 31, 2016 10:46:57 PM",
    "topic": "Court: Uber drivers are company employees not self-employed contractors",
    "url": "http://arstechnica.com/tech-policy/2016/10/uber-drivers-employees-uk-court-ruling/",
    "votes": 3,
    "posted": "Oct 31, 2016 5:54:19 PM"
  },
  {
    "id": "12838547",
    "timestamp": "Oct 31, 2016 6:06:03 PM",
    "topic": "The budget explained in simple English",
    "url": "http://imgur.com/a/UBIXe",
    "votes": 4,
    "posted": "Oct 31, 2016 5:49:24 PM"
  },
  {
    "id": "12838463",
    "timestamp": "Oct 31, 2016 11:37:05 PM",
    "topic": "Palantir Wins Legal Battle Over Army Combat Data System",
    "url": "https://www.bloomberg.com/news/articles/2016-10-31/palantir-wins-legal-battle-over-army-combat-data-system",
    "votes": 4,
    "posted": "Oct 31, 2016 5:41:15 PM"
  },
  {
    "id": "12838335",
    "timestamp": "Oct 31, 2016 5:56:02 PM",
    "topic": "V8 JavaScript Engine: WebAssembly Browser Preview",
    "url": "http://v8project.blogspot.com/2016/10/webassembly-browser-preview.html",
    "votes": 4,
    "posted": "Oct 31, 2016 5:28:18 PM"
  },
  {
    "id": "12838301",
    "timestamp": "Oct 31, 2016 10:46:57 PM",
    "topic": "Beyond 10,000 Lines – Lessons Learned from a Large Phoenix Project",
    "url": "https://shift.infinite.red/beyond-10-000-lines-ba1adc17cc7b#.nm2rcl956",
    "votes": 4,
    "posted": "Oct 31, 2016 5:25:37 PM"
  },
  {
    "id": "12838203",
    "timestamp": "Oct 31, 2016 5:46:01 PM",
    "topic": "TWINKLE is a hypothetical integer factorization device circa 1999 by Adi Shamir",
    "url": "https://en.wikipedia.org/wiki/TWINKLE",
    "votes": 6,
    "posted": "Oct 31, 2016 5:16:13 PM"
  },
  {
    "id": "12838170",
    "timestamp": "Oct 31, 2016 5:25:59 PM",
    "topic": "WikiLeaks: Zuckerberg Got His Sheryl Sandberg-Arranged \u0027Play Date\u0027 with Podesta",
    "url": "https://slashdot.org/submission/6437683/wikileaks-zuckerberg-got-his-sheryl-sandberg-arranged-play-date-with-podesta",
    "votes": 12,
    "posted": "Oct 31, 2016 5:13:07 PM"
  },
  {
    "id": "12838152",
    "timestamp": "Oct 31, 2016 5:46:01 PM",
    "topic": "Show HN: Fast Style Transfer in TensorFlow",
    "url": "https://github.com/lengstrom/fast-style-transfer/",
    "votes": 11,
    "posted": "Oct 31, 2016 5:11:49 PM"
  },
  {
    "id": "12838134",
    "timestamp": "Oct 31, 2016 5:15:58 PM",
    "topic": "EasyPost is hiring back end engineers",
    "url": "https://www.easypost.com/jobs",
    "votes": 1,
    "posted": "Oct 31, 2016 5:10:17 PM"
  },
  {
    "id": "12838130",
    "timestamp": "Nov 1, 2016 3:57:31 AM",
    "topic": "Getting the Best Performance Out of NumPy",
    "url": "http://ipython-books.github.io/featured-01/",
    "votes": 4,
    "posted": "Oct 31, 2016 5:10:02 PM"
  },
  {
    "id": "12838109",
    "timestamp": "Nov 1, 2016 3:57:31 AM",
    "topic": "BSD Socket API Revamp",
    "url": "https://raw.githubusercontent.com/sustrik/dsock/master/rfc/sock-api-revamp-01.txt",
    "votes": 5,
    "posted": "Oct 31, 2016 5:08:15 PM"
  },
  {
    "id": "12838079",
    "timestamp": "Oct 31, 2016 10:46:57 PM",
    "topic": "Apple\u0027s desensitisation of the human race to fundamental security practices",
    "url": "https://www.troyhunt.com/apples-desensitisation-of-the-human-race-to-fundamental-security-practices/?utm_source\u003dfeedburner\u0026utm_medium\u003dfeed\u0026utm_campaign\u003dFeed%3A+TroyHunt+%28Troy+Hunt%29",
    "votes": 5,
    "posted": "Oct 31, 2016 5:06:35 PM"
  },
  {
    "id": "12838034",
    "timestamp": "Oct 31, 2016 6:56:09 PM",
    "topic": "Peter Thiel: I’m voting for Trump because",
    "url": "http://www.businessinsider.com/peter-thiel-trump-speech-national-press-club-2016-10",
    "votes": 4,
    "posted": "Oct 31, 2016 5:02:22 PM"
  },
  {
    "id": "12837794",
    "timestamp": "Oct 31, 2016 11:27:03 PM",
    "topic": "Ask HN: Which Mac do Apple employees use?",
    "votes": 8,
    "posted": "Oct 31, 2016 4:43:09 PM"
  },
  {
    "id": "12837766",
    "timestamp": "Oct 31, 2016 4:55:57 PM",
    "topic": "Peter Thiel: \u0027What Trump represents isn\u0027t crazy and it\u0027s not going away\u0027",
    "url": "http://www.cnbc.com/2016/10/31/peter-thiel-what-donald-trump-represents-isnt-crazy-and-its-not-going-away.html",
    "votes": 6,
    "posted": "Oct 31, 2016 4:41:07 PM"
  },
  {
    "id": "12837746",
    "timestamp": "Oct 31, 2016 4:45:55 PM",
    "topic": "Apple just told the world it has no idea who the Mac is for",
    "url": "https://medium.com/charged-tech/apple-just-told-the-world-it-has-no-idea-who-the-mac-is-for-722a2438389b#.8j5koelrj",
    "votes": 5,
    "posted": "Oct 31, 2016 4:39:05 PM"
  },
  {
    "id": "12837726",
    "timestamp": "Oct 31, 2016 5:05:57 PM",
    "topic": "Hacker News Dataset Update October 2016",
    "url": "http://aaron-hoffman.blogspot.com/2016/10/hacker-news-dataset-october-2016.html",
    "votes": 5,
    "posted": "Oct 31, 2016 4:37:21 PM"
  },
  {
    "id": "12837669",
    "timestamp": "Oct 31, 2016 6:06:03 PM",
    "topic": "Portier, a spiritual successor to Mozilla Persona",
    "url": "https://portier.github.io/",
    "votes": 3,
    "posted": "Oct 31, 2016 4:31:39 PM"
  },
  {
    "id": "12837659",
    "timestamp": "Oct 31, 2016 4:55:56 PM",
    "topic": "Steve Jobs would probably very upset with what Apple has become",
    "url": "http://qz.com/822818/steve-jobs-would-probably-very-upset-with-what-apple-aapl-has-become/",
    "votes": 7,
    "posted": "Oct 31, 2016 4:30:46 PM"
  },
  {
    "id": "12837641",
    "timestamp": "Oct 31, 2016 10:46:58 PM",
    "topic": "The entire US-Mexico border visualized in 200,000 satellite images",
    "url": "https://theintercept.com/2016/10/26/best-of-luck-with-the-wall/",
    "votes": 5,
    "posted": "Oct 31, 2016 4:28:35 PM"
  },
  {
    "id": "12837621",
    "timestamp": "Oct 31, 2016 10:46:58 PM",
    "topic": "Microsoft Edge in progress for WebAssembly browser preview",
    "url": "https://blogs.windows.com/msedgedev/2016/10/31/webassembly-browser-preview/",
    "votes": 4,
    "posted": "Oct 31, 2016 4:26:46 PM"
  },
  {
    "id": "12837569",
    "timestamp": "Oct 31, 2016 5:05:58 PM",
    "topic": "Japan’s Disposable Workers: “Dumping Ground”",
    "url": "https://vimeo.com/129833921",
    "votes": 4,
    "posted": "Oct 31, 2016 4:23:17 PM"
  },
  {
    "id": "12837444",
    "timestamp": "Oct 31, 2016 10:56:59 PM",
    "topic": "WebAssembly Browser Preview",
    "url": "https://hacks.mozilla.org/2016/10/webassembly-browser-preview/",
    "votes": 14,
    "posted": "Oct 31, 2016 4:11:35 PM"
  },
  {
    "id": "12837385",
    "timestamp": "Oct 31, 2016 10:56:59 PM",
    "topic": "Theshadowbrokers: Message#5 – Trick or Treat?",
    "url": "https://medium.com/@shadowbrokerss/message-5-trick-or-treat-e43f946f93e6#.72baoaiov",
    "votes": 3,
    "posted": "Oct 31, 2016 4:06:03 PM"
  },
  {
    "id": "12837381",
    "timestamp": "Oct 31, 2016 4:45:55 PM",
    "topic": "The 40 Books That Saved My Life",
    "url": "http://www.jamesaltucher.com/2016/10/books-saved-life/",
    "votes": 3,
    "posted": "Oct 31, 2016 4:05:39 PM"
  },
  {
    "id": "12837368",
    "timestamp": "Nov 1, 2016 12:17:10 AM",
    "topic": "Show HN: Portier, a spiritual successor to Mozilla Persona",
    "url": "http://portier.io",
    "votes": 15,
    "posted": "Oct 31, 2016 4:04:17 PM"
  },
  {
    "id": "12837357",
    "timestamp": "Oct 31, 2016 4:55:56 PM",
    "topic": "Ask HN: What is the best Hackintosh laptop for ios app developers?",
    "votes": 8,
    "posted": "Oct 31, 2016 4:03:38 PM"
  },
  {
    "id": "12837350",
    "timestamp": "Oct 31, 2016 4:15:52 PM",
    "topic": "Peter Thiel Speaks at the National Press Club – Live Stream",
    "url": "https://www.youtube.com/watch?v\u003dob-LJqPQEJ4",
    "votes": 6,
    "posted": "Oct 31, 2016 4:02:08 PM"
  },
  {
    "id": "12837296",
    "timestamp": "Oct 31, 2016 4:55:56 PM",
    "topic": "Shadow brokers dump more NSA data",
    "url": "https://medium.com/@shadowbrokerss/message-5-trick-or-treat-e43f946f93e6#.hj0bgclwv",
    "votes": 3,
    "posted": "Oct 31, 2016 3:57:47 PM"
  },
  {
    "id": "12837074",
    "timestamp": "Oct 31, 2016 11:17:02 PM",
    "topic": "Tesla Unveils Its New Line of Camouflaged Solar Panels",
    "url": "https://www.wired.com/2016/10/tesla-unveils-new-line-camouflaged-solar-panels/",
    "votes": 3,
    "posted": "Oct 31, 2016 3:36:56 PM"
  },
  {
    "id": "12837067",
    "timestamp": "Oct 31, 2016 4:35:54 PM",
    "topic": "Typing Chinese like English",
    "url": "https://tedclancy.wordpress.com/2016/10/31/typing-chinese",
    "votes": 6,
    "posted": "Oct 31, 2016 3:36:18 PM"
  },
  {
    "id": "12837036",
    "timestamp": "Oct 31, 2016 11:17:01 PM",
    "topic": "Tesla Solar",
    "url": "https://www.tesla.com/solar",
    "votes": 3,
    "posted": "Oct 31, 2016 3:33:09 PM"
  },
  {
    "id": "12837007",
    "timestamp": "Oct 31, 2016 11:17:02 PM",
    "topic": "Solar Storms Can Weaken Earth’s Magnetic Field",
    "url": "http://www.sciencemag.org/news/2016/10/solar-storms-can-weaken-earth-s-magnetic-field",
    "votes": 3,
    "posted": "Oct 31, 2016 3:30:50 PM"
  },
  {
    "id": "12836821",
    "timestamp": "Oct 31, 2016 11:17:01 PM",
    "topic": "UBlock/Adblock filters for known NSA exploit servers",
    "url": "https://github.com/gasull/adblock-nsa",
    "votes": 3,
    "posted": "Oct 31, 2016 3:12:20 PM"
  },
  {
    "id": "12836812",
    "timestamp": "Oct 31, 2016 4:05:51 PM",
    "topic": "2017 Chevrolet Bolt Tested: It’s a Real, Useful Car That Happens to Be an EV",
    "url": "http://www.caranddriver.com/reviews/2017-chevrolet-bolt-ev-test-review",
    "votes": 4,
    "posted": "Oct 31, 2016 3:11:25 PM"
  },
  {
    "id": "12836779",
    "timestamp": "Oct 31, 2016 11:17:01 PM",
    "topic": "Pragmatic Software Project Management Trifecta",
    "url": "http://peopleovertools.com/2016/07/03/pragmatic-project-management-trifecta.html",
    "votes": 4,
    "posted": "Oct 31, 2016 3:07:04 PM"
  },
  {
    "id": "12836646",
    "timestamp": "Oct 31, 2016 11:17:01 PM",
    "topic": "6 of the Most Exciting ES6 Features in Node.js v6 LTS",
    "url": "https://nodesource.com/blog/six-of-the-most-exciting-es6-features-in-node-js-v6-lts",
    "votes": 4,
    "posted": "Oct 31, 2016 2:50:11 PM"
  },
  {
    "id": "12836611",
    "timestamp": "Nov 1, 2016 9:27:59 AM",
    "topic": "Notes for a 2016 Democratic Campaign Eric Schmidt April 2014",
    "url": "https://wikileaks.org/podesta-emails/emailid/37262",
    "votes": 7,
    "posted": "Oct 31, 2016 2:46:02 PM"
  },
  {
    "id": "12836465",
    "timestamp": "Oct 31, 2016 3:15:47 PM",
    "topic": "Radeon R9 M370X (MacBook Pro 2015) vs. Radeon Pro 460 (MacBook Pro 2016)",
    "url": "http://gpuboss.com/gpus/Radeon-R9-M370X-Mac-vs-Radeon-Pro-460",
    "votes": 7,
    "posted": "Oct 31, 2016 2:26:16 PM"
  },
  {
    "id": "12836438",
    "timestamp": "Oct 31, 2016 2:35:43 PM",
    "topic": "Before the Flood [video]",
    "url": "https://www.youtube.com/watch?v\u003d90CkXVF-Q8M",
    "votes": 3,
    "posted": "Oct 31, 2016 2:22:36 PM"
  },
  {
    "id": "12836370",
    "timestamp": "Oct 31, 2016 2:45:44 PM",
    "topic": "Twitter is testing a new @reply",
    "url": "https://techcrunch.com/2016/10/28/complaining-about-twitter-on-twitter/",
    "votes": 4,
    "posted": "Oct 31, 2016 2:13:04 PM"
  },
  {
    "id": "12836367",
    "timestamp": "Oct 31, 2016 2:45:44 PM",
    "topic": "The $100M U.S. Government Fish Farm Nobody Wants",
    "url": "https://www.bloomberg.com/news/articles/2016-10-28/the-100-million-u-s-government-fish-farm-nobody-wants",
    "votes": 4,
    "posted": "Oct 31, 2016 2:12:50 PM"
  },
  {
    "id": "12836361",
    "timestamp": "Oct 31, 2016 3:15:47 PM",
    "topic": "MacBookPro vs. Surface Book",
    "url": "http://codeclimber.net.nz/archive/2016/10/28/MacBookPro-vs-Surface-Book.aspx",
    "votes": 8,
    "posted": "Oct 31, 2016 2:11:28 PM"
  },
  {
    "id": "12836355",
    "timestamp": "Oct 31, 2016 4:05:51 PM",
    "topic": "Jeff Bezos dismisses idea of a backup plan, says we must protect Earth",
    "url": "http://arstechnica.com/science/2016/10/jeff-bezos-dismisses-idea-of-a-backup-plan-says-we-must-protect-earth/",
    "votes": 3,
    "posted": "Oct 31, 2016 2:10:46 PM"
  },
  {
    "id": "12836337",
    "timestamp": "Oct 31, 2016 2:25:42 PM",
    "topic": "This Intel backed Finnish startup has turned laptop design upside down",
    "url": "http://nordic.businessinsider.com/eve-tech-crowdsourcing-2016-10/",
    "votes": 7,
    "posted": "Oct 31, 2016 2:08:16 PM"
  },
  {
    "id": "12836288",
    "timestamp": "Nov 1, 2016 9:27:59 AM",
    "topic": "Pirated CDs on Web Deal Another Blow to Music Industry",
    "url": "http://www.wsj.com/articles/boost-in-online-pirated-cd-sales-deal-another-blow-to-music-industry-1477867243",
    "votes": 3,
    "posted": "Oct 31, 2016 2:00:12 PM"
  },
  {
    "id": "12836243",
    "timestamp": "Oct 31, 2016 4:35:54 PM",
    "topic": "Front-End Tooling Survey – 2016",
    "url": "http://ashn.uk/survey-tooling-2016",
    "votes": 4,
    "posted": "Oct 31, 2016 1:52:13 PM"
  },
  {
    "id": "12836184",
    "timestamp": "Oct 31, 2016 1:55:40 PM",
    "topic": "Wssdl: A lua DSL for describing custom protocols in wireshark",
    "url": "https://github.com/diacritic/wssdl",
    "votes": 3,
    "posted": "Oct 31, 2016 1:44:08 PM"
  },
  {
    "id": "12836038",
    "timestamp": "Oct 31, 2016 2:25:42 PM",
    "topic": "What the Heck Is Happening at Apple?",
    "url": "http://www.cringely.com/2016/10/31/heck-happened-apple/",
    "votes": 5,
    "posted": "Oct 31, 2016 1:16:40 PM"
  },
  {
    "id": "12836015",
    "timestamp": "Oct 31, 2016 5:15:59 PM",
    "topic": "A Silent Cause of Bad Business Decisions",
    "url": "https://medium.dave-bailey.com/the-silent-cause-of-bad-business-decisions-b95d977b5ca7#.1jckdefsh",
    "votes": 4,
    "posted": "Oct 31, 2016 1:12:29 PM"
  },
  {
    "id": "12835898",
    "timestamp": "Oct 31, 2016 1:25:37 PM",
    "topic": "Ask HN: What do you regret in life?",
    "votes": 4,
    "posted": "Oct 31, 2016 12:47:03 PM"
  },
  {
    "id": "12835826",
    "timestamp": "Oct 31, 2016 12:45:35 PM",
    "topic": "CenturyLink to Buy Level 3 for $34B",
    "url": "https://www.bloomberg.com/news/articles/2016-10-31/centurylink-agrees-to-buy-level-3-for-34-billion-in-cash-stock",
    "votes": 5,
    "posted": "Oct 31, 2016 12:29:07 PM"
  },
  {
    "id": "12835771",
    "timestamp": "Oct 31, 2016 1:15:37 PM",
    "topic": "Create Dense 3D Point Clouds with OpenSfM",
    "url": "http://blog.mapillary.com/update/2016/10/31/denser-3d-point-clouds-in-opensfm.html",
    "votes": 7,
    "posted": "Oct 31, 2016 12:16:28 PM"
  },
  {
    "id": "12835701",
    "timestamp": "Oct 31, 2016 12:05:32 PM",
    "topic": "Strikingly (YC W13) is hiring in our Shanghai office",
    "url": "http://www.strikingly.com/s/careers?utm_source\u003dhn\u0026utm_content\u003dsh",
    "votes": 1,
    "posted": "Oct 31, 2016 12:00:57 PM"
  },
  {
    "id": "12835637",
    "timestamp": "Oct 31, 2016 11:55:31 AM",
    "topic": "Peter Thiel Defends His Most Contrarian Move Yet: Supporting Trump",
    "url": "http://www.nytimes.com/2016/10/31/technology/peter-thiel-defends-his-most-contrarian-move-yet-supporting-trump.html?src\u003dme",
    "votes": 4,
    "posted": "Oct 31, 2016 11:43:47 AM"
  },
  {
    "id": "12835588",
    "timestamp": "Oct 31, 2016 4:25:53 PM",
    "topic": "Apple Should Buy Netflix",
    "url": "https://stratechery.com/2016/apple-should-buy-netflix/",
    "votes": 6,
    "posted": "Oct 31, 2016 11:29:41 AM"
  },
  {
    "id": "12835211",
    "timestamp": "Oct 31, 2016 11:15:28 AM",
    "topic": "Apple just told the world it has no idea who the Mac is for",
    "url": "https://medium.com/charged-tech/apple-just-told-the-world-it-has-no-idea-who-the-mac-is-for-722a2438389b#.r94fbs5g3",
    "votes": 6,
    "posted": "Oct 31, 2016 10:13:32 AM"
  },
  {
    "id": "12835182",
    "timestamp": "Oct 31, 2016 3:35:49 PM",
    "topic": "Show HN: A Facebook Messenger Bot for Hacker News",
    "url": "https://m.me/324020827971424",
    "votes": 3,
    "posted": "Oct 31, 2016 10:05:53 AM"
  },
  {
    "id": "12835145",
    "timestamp": "Oct 31, 2016 10:55:26 AM",
    "topic": "Show HN: A curated list of open source applications built with Node.js",
    "url": "https://github.com/sqreen/awesome-nodejs-projects",
    "votes": 7,
    "posted": "Oct 31, 2016 9:59:40 AM"
  },
  {
    "id": "12835123",
    "timestamp": "Oct 31, 2016 10:35:25 AM",
    "topic": "Wikileaks tweets: Google boss Eric Schmidt on secret project",
    "url": "https://twitter.com/wikileaks/status/792858025212121088",
    "votes": 7,
    "posted": "Oct 31, 2016 9:55:48 AM"
  },
  {
    "id": "12835094",
    "timestamp": "Oct 31, 2016 10:05:22 AM",
    "topic": "Ask HN: Disappointed by the new Macbook, what alternatives do we have?",
    "votes": 21,
    "posted": "Oct 31, 2016 9:49:38 AM"
  },
  {
    "id": "12835044",
    "timestamp": "Oct 31, 2016 1:35:38 PM",
    "topic": "Show HN: Spongedown – markdown renderer with ascii diagram support",
    "url": "https://ivanceras.github.io/spongedown/",
    "votes": 5,
    "posted": "Oct 31, 2016 9:36:59 AM"
  },
  {
    "id": "12835000",
    "timestamp": "Oct 31, 2016 7:36:15 PM",
    "topic": "Ask HN: What to do while compiling?",
    "votes": 8,
    "posted": "Oct 31, 2016 9:24:19 AM"
  },
  {
    "id": "12834907",
    "timestamp": "Oct 31, 2016 9:05:18 AM",
    "topic": "Admit it: Microsoft is now a braver, more innovative company than Apple",
    "url": "http://mashable.com/2016/10/27/microsoft-better-apple/#gGEqKo9ceqqw",
    "votes": 4,
    "posted": "Oct 31, 2016 8:51:51 AM"
  },
  {
    "id": "12834902",
    "timestamp": "Oct 31, 2016 9:05:18 AM",
    "topic": "Benjamin Button Reviews the New MacBook Pro",
    "url": "https://blog.pinboard.in/2016/10/benjamin_button_reviews_the_new_macbook_pro/",
    "votes": 6,
    "posted": "Oct 31, 2016 8:51:16 AM"
  },
  {
    "id": "12834899",
    "timestamp": "Oct 31, 2016 12:35:34 PM",
    "topic": "Apple is ditching its iconic startup chime with the new MacBook Pro",
    "url": "http://www.theverge.com/2016/10/31/13472920/apple-macbook-pro-chime-gone",
    "votes": 3,
    "posted": "Oct 31, 2016 8:51:04 AM"
  },
  {
    "id": "12834857",
    "timestamp": "Oct 31, 2016 9:25:19 AM",
    "topic": "How Does Recent AI Progress Affect the Bostromian Paradigm?",
    "url": "http://slatestarcodex.com/2016/10/30/how-does-recent-ai-progress-affect-the-bostromian-paradigm/",
    "votes": 3,
    "posted": "Oct 31, 2016 8:38:42 AM"
  },
  {
    "id": "12834815",
    "timestamp": "Oct 31, 2016 9:55:21 AM",
    "topic": "JetBrains (Intellij IDEA, PHPStorm) offers all of their IDE\u0027s free to students",
    "url": "https://www.jetbrains.com/student/",
    "votes": 3,
    "posted": "Oct 31, 2016 8:24:09 AM"
  },
  {
    "id": "12834804",
    "timestamp": "Oct 31, 2016 8:55:17 AM",
    "topic": "Things I will tell my kids if they become entrepreneurs",
    "url": "http://www.slideshare.net/laurenthaug/things-i-will-tell-my-kids-if-they-become-entrepreneurs",
    "votes": 3,
    "posted": "Oct 31, 2016 8:19:00 AM"
  },
  {
    "id": "12834628",
    "timestamp": "Oct 31, 2016 7:25:10 AM",
    "topic": "Remix (YC W15) is hiring engineers to build the first transit planning platform",
    "url": "https://www.remix.com/jobs",
    "votes": 1,
    "posted": "Oct 31, 2016 7:14:43 AM"
  },
  {
    "id": "12834569",
    "timestamp": "Oct 31, 2016 8:45:16 AM",
    "topic": "Gamers – This is what a programmer looks like",
    "url": "http://angiejones.tech/representation-matters-us2020-rtp-gaming-expo/",
    "votes": 4,
    "posted": "Oct 31, 2016 6:56:01 AM"
  },
  {
    "id": "12834402",
    "timestamp": "Oct 31, 2016 3:45:49 PM",
    "topic": "The Dark Energy of a Theoretical Physicist",
    "url": "http://www.newyorker.com/culture/persons-of-interest/the-dark-energy-of-a-theoretical-physicist?mbid\u003dsocial_facebook",
    "votes": 4,
    "posted": "Oct 31, 2016 6:02:49 AM"
  },
  {
    "id": "12834401",
    "timestamp": "Nov 1, 2016 3:27:28 AM",
    "topic": "Ask HN: Surface book performance base swapping?",
    "votes": 4,
    "posted": "Oct 31, 2016 6:02:45 AM"
  },
  {
    "id": "12834346",
    "timestamp": "Oct 31, 2016 7:35:11 AM",
    "topic": "Django SQL Explorer",
    "url": "https://github.com/groveco/django-sql-explorer",
    "votes": 4,
    "posted": "Oct 31, 2016 5:39:24 AM"
  },
  {
    "id": "12834330",
    "timestamp": "Oct 31, 2016 6:15:05 AM",
    "topic": "Eric Holder: FBI Director James Comey Made a Serious Mistake",
    "url": "https://www.washingtonpost.com/opinions/eric-holder-james-comey-is-a-good-man-but-he-made-a-serious-mistake/2016/10/30/08e7208e-9f07-11e6-8832-23a007c77bb4_story.html",
    "votes": 3,
    "posted": "Oct 31, 2016 5:34:19 AM"
  },
  {
    "id": "12834327",
    "timestamp": "Oct 31, 2016 6:35:06 AM",
    "topic": "Show HN: Touch ID Support for `sudo` in MacOS Terminal",
    "url": "https://github.com/mattrajca/sudo-touchid",
    "votes": 5,
    "posted": "Oct 31, 2016 5:33:18 AM"
  },
  {
    "id": "12834311",
    "timestamp": "Oct 31, 2016 2:45:45 PM",
    "topic": "The Benjamin Franklin Method: How to Be a Better Writer",
    "url": "http://marketmeditations.com/benjamin-franklin-learn-to-write/",
    "votes": 5,
    "posted": "Oct 31, 2016 5:27:53 AM"
  },
  {
    "id": "12834300",
    "timestamp": "Oct 31, 2016 4:45:55 PM",
    "topic": "The Checklist (2007)",
    "url": "http://www.newyorker.com/magazine/2007/12/10/the-checklist",
    "votes": 3,
    "posted": "Oct 31, 2016 5:25:48 AM"
  },
  {
    "id": "12834293",
    "timestamp": "Oct 31, 2016 8:45:16 AM",
    "topic": "A Gamer Spent 200 Hours Building an Incredibly Detailed Digital San Francisco",
    "url": "http://www.citylab.com/design/2016/10/san-francisco-cities-skylines-mod/505265/",
    "votes": 4,
    "posted": "Oct 31, 2016 5:23:38 AM"
  },
  {
    "id": "12834274",
    "timestamp": "Oct 31, 2016 4:15:52 PM",
    "topic": "Istanbul\u0027s Wandering Songbirds",
    "url": "https://www.guernicamag.com/features/istanbuls-wandering-songbirds/",
    "votes": 3,
    "posted": "Oct 31, 2016 5:19:38 AM"
  },
  {
    "id": "12834254",
    "timestamp": "Nov 1, 2016 4:27:33 AM",
    "topic": "Here’s Why Public Wifi Is a Public Health Hazard",
    "url": "https://medium.com/matter/heres-why-public-wifi-is-a-public-health-hazard-dd5b8dcb55e6#.td5883tsl",
    "votes": 4,
    "posted": "Oct 31, 2016 5:14:17 AM"
  },
  {
    "id": "12833797",
    "timestamp": "Oct 31, 2016 3:44:53 AM",
    "topic": "How 2K Killed Irrational Games",
    "url": "https://hackernoon.com/how-2k-killed-irrational-games-a09d8865fd8b#.68bjzkfxw",
    "votes": 4,
    "posted": "Oct 31, 2016 3:02:02 AM"
  },
  {
    "id": "12833709",
    "timestamp": "Oct 31, 2016 3:15:47 PM",
    "topic": "John Berger: ‘If I’m a storyteller it’s because I listen’",
    "url": "https://www.theguardian.com/books/2016/oct/30/john-berger-at-90-interview-storyteller",
    "votes": 4,
    "posted": "Oct 31, 2016 2:41:47 AM"
  },
  {
    "id": "12833660",
    "timestamp": "Oct 31, 2016 7:25:10 AM",
    "topic": "Show HN: Async/await alternative",
    "url": "https://github.com/ujc/wait-for-stuff",
    "votes": 5,
    "posted": "Oct 31, 2016 2:32:03 AM"
  },
  {
    "id": "12833648",
    "timestamp": "Oct 31, 2016 3:14:50 AM",
    "topic": "Leaked Pentagon video is a science fiction story about the future of cities",
    "url": "http://arstechnica.com/tech-policy/2016/10/bizarre-leaked-pentagon-video-is-a-science-fiction-story-about-the-future-of-cities/?comments\u003d1",
    "votes": 3,
    "posted": "Oct 31, 2016 2:27:13 AM"
  },
  {
    "id": "12833647",
    "timestamp": "Oct 31, 2016 3:44:54 AM",
    "topic": "Spotify might be killing SSDs by design errors?",
    "url": "https://community.spotify.com/t5/Desktop-Linux-Windows-Web-Player/Spotify-killing-my-SSD/td-p/1365378",
    "votes": 3,
    "posted": "Oct 31, 2016 2:26:58 AM"
  },
  {
    "id": "12833624",
    "timestamp": "Oct 31, 2016 3:44:54 AM",
    "topic": "Tesla Solar Roof",
    "url": "https://www.tesla.com/solar",
    "votes": 5,
    "posted": "Oct 31, 2016 2:21:25 AM"
  },
  {
    "id": "12833618",
    "timestamp": "Oct 31, 2016 2:44:48 AM",
    "topic": "Publishers Are Rethinking Those ‘Around the Web’ Ads",
    "url": "http://www.nytimes.com/2016/10/31/business/media/publishers-rethink-outbrain-taboola-ads.html?_r\u003d0",
    "votes": 4,
    "posted": "Oct 31, 2016 2:19:52 AM"
  },
  {
    "id": "12833539",
    "timestamp": "Oct 31, 2016 5:45:02 AM",
    "topic": "Eric Schmidt to John Podesta: DC Lacked Talent in Software Arena for Clinton HQ",
    "url": "https://wikileaks.org/podesta-emails/emailid/37197",
    "votes": 5,
    "posted": "Oct 31, 2016 1:57:26 AM"
  },
  {
    "id": "12833481",
    "timestamp": "Oct 31, 2016 2:04:45 AM",
    "topic": "CTO Mentor Network – a virtual peer-to-peer network of CTOs",
    "url": "https://ctomentor.network/",
    "votes": 5,
    "posted": "Oct 31, 2016 1:38:18 AM"
  },
  {
    "id": "12833470",
    "timestamp": "Oct 31, 2016 3:24:52 AM",
    "topic": "Banks adopt blockchain for mortgage valuation system",
    "url": "https://www.ft.com/content/c856787c-9523-11e6-a1dc-bdf38d484582",
    "votes": 4,
    "posted": "Oct 31, 2016 1:35:35 AM"
  },
  {
    "id": "12833427",
    "timestamp": "Oct 31, 2016 8:55:17 AM",
    "topic": "Question: What do you use to keep your work and freelance calendars in sync?",
    "votes": 3,
    "posted": "Oct 31, 2016 1:26:28 AM"
  },
  {
    "id": "12833415",
    "timestamp": "Nov 1, 2016 6:07:42 AM",
    "topic": "Ask HN: Mechanical keyboards for programming",
    "votes": 9,
    "posted": "Oct 31, 2016 1:23:22 AM"
  },
  {
    "id": "12833228",
    "timestamp": "Oct 31, 2016 1:24:41 AM",
    "topic": "Automatic extraction of relevant features from time series",
    "url": "https://github.com/blue-yonder/tsfresh",
    "votes": 3,
    "posted": "Oct 31, 2016 12:41:46 AM"
  },
  {
    "id": "12833201",
    "timestamp": "Oct 31, 2016 1:54:44 AM",
    "topic": "Apple demolished by Microsoft at PC events",
    "url": "http://www.marketwatch.com/story/apple-demolished-by-microsoft-at-their-respective-pc-events-2016-10-27",
    "votes": 3,
    "posted": "Oct 31, 2016 12:36:54 AM"
  },
  {
    "id": "12833189",
    "timestamp": "Nov 2, 2016 8:41:15 PM",
    "topic": "Zadie Smith: dance lessons for writers",
    "url": "https://www.theguardian.com/books/2016/oct/29/zadie-smith-what-beyonce-taught-me",
    "votes": 4,
    "posted": "Oct 31, 2016 12:34:38 AM"
  },
  {
    "id": "12833111",
    "timestamp": "Oct 31, 2016 1:34:42 AM",
    "topic": "The Psychology of Writing and the Cognitive Science of the Perfect Daily Routine",
    "url": "https://www.brainpickings.org/2014/08/25/the-psychology-of-writing-daily-routine/",
    "votes": 3,
    "posted": "Oct 31, 2016 12:17:47 AM"
  },
  {
    "id": "12833059",
    "timestamp": "Oct 31, 2016 12:24:35 AM",
    "topic": "Shorpy: A massive archive of old photographs",
    "url": "http://www.shorpy.com/",
    "votes": 3,
    "posted": "Oct 31, 2016 12:05:35 AM"
  },
  {
    "id": "12833014",
    "timestamp": "Oct 31, 2016 12:24:35 AM",
    "topic": "NASA Scientists Suggest We’ve Been Underestimating Sea Level Rise",
    "url": "http://motherboard.vice.com/read/nasa-scientists-suggest-weve-been-underestimating-sea-level-rise",
    "votes": 3,
    "posted": "Oct 30, 2016 11:57:29 PM"
  },
  {
    "id": "12832989",
    "timestamp": "Oct 31, 2016 12:14:34 AM",
    "topic": "iSmell (2001)",
    "url": "https://en.wikipedia.org/wiki/ISmell",
    "votes": 5,
    "posted": "Oct 30, 2016 11:54:04 PM"
  },
  {
    "id": "12832939",
    "timestamp": "Oct 31, 2016 1:54:44 AM",
    "topic": "Vlany: Linux LD_PRELOAD rootkit",
    "url": "https://github.com/mempodippy/vlany",
    "votes": 4,
    "posted": "Oct 30, 2016 11:45:42 PM"
  },
  {
    "id": "12832848",
    "timestamp": "Oct 31, 2016 2:14:46 AM",
    "topic": "Mind-Boggling Painted Hands Illusions",
    "url": "http://www.mymodernmet.com/profiles/blogs/ray-massey-youre-in-good-hands",
    "votes": 4,
    "posted": "Oct 30, 2016 11:32:08 PM"
  },
  {
    "id": "12832834",
    "timestamp": "Oct 31, 2016 12:24:36 AM",
    "topic": "Are You an Angry Programmer? How to Be Competent and Incompetent Simultaneously",
    "url": "https://medium.com/@fagnerbrack/the-angry-programmer-52a93bfcbc3c",
    "votes": 4,
    "posted": "Oct 30, 2016 11:30:11 PM"
  },
  {
    "id": "12832832",
    "timestamp": "Oct 31, 2016 1:04:39 AM",
    "topic": "Inside Uber\u0027s plans to take over the skies with flying cars",
    "url": "https://www.wired.com/2016/10/uber-flying-cars-elevate-plan/",
    "votes": 3,
    "posted": "Oct 30, 2016 11:30:01 PM"
  },
  {
    "id": "12832628",
    "timestamp": "Oct 31, 2016 12:34:36 AM",
    "topic": "Lighthouse: Auditing and Performance Metrics for Progressive Web Apps",
    "url": "https://github.com/GoogleChrome/lighthouse",
    "votes": 4,
    "posted": "Oct 30, 2016 10:59:49 PM"
  },
  {
    "id": "12832512",
    "timestamp": "Oct 30, 2016 10:54:28 PM",
    "topic": "Foolish and Backward Nation (2012)",
    "url": "http://www.theatlantic.com/international/archive/2012/09/foolish-and-backward-nation-a-self-effacing-chinese-satire-of-america/261946/?single_page\u003dtrue",
    "votes": 3,
    "posted": "Oct 30, 2016 10:42:14 PM"
  },
  {
    "id": "12832510",
    "timestamp": "Oct 30, 2016 11:14:30 PM",
    "topic": "Price Optimisation Using Decision Tree (Regression Tree) – Machine Learning",
    "url": "http://www.datasciencecentral.com/profiles/blogs/price-optimisation-using-decision-tree-regression-tree",
    "votes": 3,
    "posted": "Oct 30, 2016 10:41:53 PM"
  },
  {
    "id": "12832509",
    "timestamp": "Oct 31, 2016 1:54:44 AM",
    "topic": "Pre-Socratics: A Painless Introduction",
    "url": "http://lukemuehlhauser.com/pre-socratics-a-painless-introduction/",
    "votes": 4,
    "posted": "Oct 30, 2016 10:41:49 PM"
  },
  {
    "id": "12832426",
    "timestamp": "Oct 30, 2016 10:34:26 PM",
    "topic": "Hyperloop Freight is a Joke",
    "url": "https://pedestrianobservations.wordpress.com/2016/10/29/hyperloop-freight-is-a-joke/",
    "votes": 5,
    "posted": "Oct 30, 2016 10:23:58 PM"
  },
  {
    "id": "12832382",
    "timestamp": "Oct 31, 2016 1:54:44 AM",
    "topic": "Silicon Valley’s corporate culture is ageist",
    "url": "https://www.ft.com/content/244d22b4-9c47-11e6-a6e4-8b8e77dd083a",
    "votes": 3,
    "posted": "Oct 30, 2016 10:18:06 PM"
  },
  {
    "id": "12832085",
    "timestamp": "Oct 30, 2016 9:44:22 PM",
    "topic": "San Francisco: Office space data says tech bubble is not popping",
    "url": "http://venturebeat.com/2016/10/30/dear-san-francisco-office-space-data-says-your-tech-bubble-is-not-popping-and-probably-never-will/",
    "votes": 3,
    "posted": "Oct 30, 2016 9:33:53 PM"
  },
  {
    "id": "12832027",
    "timestamp": "Oct 30, 2016 9:44:21 PM",
    "topic": "Ask HN: At 91, My Grandfather\u0027s Only Regret Is Never Skateboarding. Best VR Rig?",
    "votes": 9,
    "posted": "Oct 30, 2016 9:23:47 PM"
  },
  {
    "id": "12831992",
    "timestamp": "Oct 30, 2016 11:44:32 PM",
    "topic": "Apple Says It\u0027s Out of the Standalone Display Business",
    "url": "http://www.macrumors.com/2016/10/28/apple-out-of-display-business/",
    "votes": 3,
    "posted": "Oct 30, 2016 9:17:01 PM"
  },
  {
    "id": "12831867",
    "timestamp": "Oct 30, 2016 9:44:22 PM",
    "topic": "Anti-Intellectualism and the “Dumbing Down” of America",
    "url": "https://www.psychologytoday.com/blog/wired-success/201407/anti-intellectualism-and-the-dumbing-down-america",
    "votes": 5,
    "posted": "Oct 30, 2016 8:52:51 PM"
  },
  {
    "id": "12831808",
    "timestamp": "Oct 30, 2016 9:34:20 PM",
    "topic": "Ask HN: How to make secure email convenient?",
    "votes": 4,
    "posted": "Oct 30, 2016 8:42:46 PM"
  },
  {
    "id": "12831767",
    "timestamp": "Oct 31, 2016 1:04:39 AM",
    "topic": "Everything about the state of the Mac",
    "url": "http://mjtsai.com/blog/2016/10/27/new-macbook-pros-and-the-state-of-the-mac/",
    "votes": 3,
    "posted": "Oct 30, 2016 8:38:40 PM"
  },
  {
    "id": "12831764",
    "timestamp": "Oct 30, 2016 9:24:19 PM",
    "topic": "Family sues Amazon after hoverboard fire destroys $1M house",
    "url": "http://www.usatoday.com/story/money/nation-now/2016/10/27/family-sues-amazon-after-hoverboard-fire-destroys-1m-house/92866460/",
    "votes": 3,
    "posted": "Oct 30, 2016 8:38:11 PM"
  },
  {
    "id": "12831549",
    "timestamp": "Oct 31, 2016 12:54:38 AM",
    "topic": "Show HN: RPG MO, HTML5 MMORPG with Websockets",
    "url": "https://data.mo.ee/index2.html",
    "votes": 5,
    "posted": "Oct 30, 2016 7:56:25 PM"
  },
  {
    "id": "12831545",
    "timestamp": "Oct 31, 2016 1:14:40 AM",
    "topic": "Open Letter to Tim Cook",
    "url": "https://petersphilo.org/2016/10/29/open-letter-to-tim-cook/",
    "votes": 3,
    "posted": "Oct 30, 2016 7:55:41 PM"
  },
  {
    "id": "12831519",
    "timestamp": "Oct 30, 2016 8:34:15 PM",
    "topic": "PYNQ: Python Productivity for Zynq",
    "url": "http://www.pynq.io/",
    "votes": 3,
    "posted": "Oct 30, 2016 7:50:27 PM"
  },
  {
    "id": "12831508",
    "timestamp": "Oct 31, 2016 10:45:26 AM",
    "topic": "Payback? Russia Gets Hacked, Revealing Putin Aide\u0027s Secrets",
    "url": "https://yro.slashdot.org/story/16/10/29/0025244/payback-russia-gets-hacked-revealing-putin-aides-secrets",
    "votes": 7,
    "posted": "Oct 30, 2016 7:48:44 PM"
  },
  {
    "id": "12831452",
    "timestamp": "Oct 30, 2016 9:24:19 PM",
    "topic": "What are we getting very wrong about programming languages?",
    "url": "http://danghica.blogspot.com/2016/09/what-else-are-we-getting-wrong.html",
    "votes": 4,
    "posted": "Oct 30, 2016 7:39:15 PM"
  },
  {
    "id": "12831430",
    "timestamp": "Oct 30, 2016 8:14:13 PM",
    "topic": "No more ransom",
    "url": "https://www.nomoreransom.org/",
    "votes": 3,
    "posted": "Oct 30, 2016 7:34:35 PM"
  },
  {
    "id": "12831393",
    "timestamp": "Oct 30, 2016 8:04:12 PM",
    "topic": "Finnish startup has a solution to provide internet anywhere",
    "url": "http://nordic.businessinsider.com/this-finnish-startup-has-a-solution-to-internet-get-anywhere-and-just-raised-more-than-$10-million-in-series-a-funding-2016-10",
    "votes": 3,
    "posted": "Oct 30, 2016 7:29:17 PM"
  },
  {
    "id": "12831375",
    "timestamp": "Oct 30, 2016 7:44:10 PM",
    "topic": "What to do and eat in Tokyo, Japan",
    "url": "https://www.youcouldtravel.com/travel-blog/the-best-50-things-to-do-in-tokyo",
    "votes": 7,
    "posted": "Oct 30, 2016 7:27:15 PM"
  },
  {
    "id": "12831322",
    "timestamp": "Oct 30, 2016 8:04:12 PM",
    "topic": "Jeff Bezos proposes putting space colonists inside O\u0027Neill cylinders",
    "url": "http://www.geekwire.com/2016/jeff-bezos-space-colonies-oneill/",
    "votes": 3,
    "posted": "Oct 30, 2016 7:20:08 PM"
  },
  {
    "id": "12831273",
    "timestamp": "Oct 30, 2016 8:04:12 PM",
    "topic": "Fusuma: Multitouch gestures with libinput dirver on X11, Linux",
    "url": "https://github.com/iberianpig/fusuma",
    "votes": 6,
    "posted": "Oct 30, 2016 7:13:22 PM"
  },
  {
    "id": "12831228",
    "timestamp": "Oct 30, 2016 8:04:12 PM",
    "topic": "IoT Growing Faster Than the Ability to Defend It",
    "url": "https://www.scientificamerican.com/article/iot-growing-faster-than-the-ability-to-defend-it/",
    "votes": 3,
    "posted": "Oct 30, 2016 7:06:25 PM"
  },
  {
    "id": "12831109",
    "timestamp": "Oct 30, 2016 7:14:06 PM",
    "topic": "Turning Jupyter Notebooks into Data Applications",
    "url": "https://www.youtube.com/watch?v\u003dV3VxQGevHCU\u0026feature\u003dyoutu.be",
    "votes": 3,
    "posted": "Oct 30, 2016 6:48:24 PM"
  },
  {
    "id": "12831075",
    "timestamp": "Oct 30, 2016 7:14:06 PM",
    "topic": "Open Game Art",
    "url": "http://opengameart.org/",
    "votes": 4,
    "posted": "Oct 30, 2016 6:42:17 PM"
  },
  {
    "id": "12831052",
    "timestamp": "Oct 31, 2016 1:04:39 AM",
    "topic": "Why object literals in JavaScript are cool",
    "url": "https://rainsoft.io/why-object-literals-in-javascript-are-cool/",
    "votes": 3,
    "posted": "Oct 30, 2016 6:39:09 PM"
  },
  {
    "id": "12831007",
    "timestamp": "Oct 30, 2016 10:34:26 PM",
    "topic": "BDX: A cross-platform game engine for Blender 3D",
    "url": "https://github.com/GoranM/bdx",
    "votes": 3,
    "posted": "Oct 30, 2016 6:30:40 PM"
  },
  {
    "id": "12830993",
    "timestamp": "Oct 31, 2016 1:14:40 AM",
    "topic": "Serializability and Distributed Software Transactional Memory with Etcd3",
    "url": "https://coreos.com/blog/transactional-memory-with-etcd3.html",
    "votes": 4,
    "posted": "Oct 30, 2016 6:27:33 PM"
  },
  {
    "id": "12830813",
    "timestamp": "Oct 30, 2016 7:04:05 PM",
    "topic": "Be sensitive: the truth about the worlds fastest cashier woman",
    "url": "http://m.indiatoday.in/story/world-fastest-cashier-woman-viral-video-truth-about-her/1/798849.html",
    "votes": 3,
    "posted": "Oct 30, 2016 5:58:35 PM"
  },
  {
    "id": "12830766",
    "timestamp": "Oct 30, 2016 5:53:58 PM",
    "topic": "Iceland’s Prime Minister Resigns, After Pirate Party Makes Strong Gains",
    "url": "http://www.nytimes.com/2016/10/31/world/europe/icelands-prime-minister-resigns-after-pirate-party-makes-strong-gains.html",
    "votes": 3,
    "posted": "Oct 30, 2016 5:50:05 PM"
  },
  {
    "id": "12830763",
    "timestamp": "Oct 30, 2016 6:14:01 PM",
    "topic": "Show HN: Concurrently Logging HTTP Requests",
    "url": "https://github.com/PabloSichert/concurrency-logger",
    "votes": 3,
    "posted": "Oct 30, 2016 5:49:58 PM"
  },
  {
    "id": "12830761",
    "timestamp": "Oct 30, 2016 6:04:00 PM",
    "topic": "Elementary, my Dear Siri",
    "url": "http://taoofmac.com/space/blog/2016/10/29/2240",
    "votes": 4,
    "posted": "Oct 30, 2016 5:49:13 PM"
  },
  {
    "id": "12830746",
    "timestamp": "Oct 30, 2016 6:03:59 PM",
    "topic": "Show HN: Testing web applications, the easy way",
    "url": "https://github.com/nenadg/traquer/",
    "votes": 7,
    "posted": "Oct 30, 2016 5:47:13 PM"
  },
  {
    "id": "12830722",
    "timestamp": "Oct 31, 2016 8:55:17 AM",
    "topic": "Of Course Westworld’s Costumes Are 3D-Printed, Too",
    "url": "http://www.racked.com/2016/10/27/13408436/westworld-costumes",
    "votes": 4,
    "posted": "Oct 30, 2016 5:42:28 PM"
  },
  {
    "id": "12830719",
    "timestamp": "Oct 30, 2016 6:34:03 PM",
    "topic": "Functional Programs Are Imperative Pumpkins",
    "url": "https://blog.eventsourcing.com/your-functional-programs-are-imperative-pumpkins-d722ec1358b7",
    "votes": 5,
    "posted": "Oct 30, 2016 5:42:12 PM"
  },
  {
    "id": "12830685",
    "timestamp": "Oct 30, 2016 10:34:27 PM",
    "topic": "New MacBook Pro limited to 16GB of RAM, to save battery life",
    "url": "http://www.theverge.com/2016/10/28/13460496/apple-macbook-pro-16gb-ram-battery-life-phil-schiller",
    "votes": 5,
    "posted": "Oct 30, 2016 5:37:06 PM"
  },
  {
    "id": "12830650",
    "timestamp": "Oct 30, 2016 5:43:58 PM",
    "topic": "Why the Industrial Revolution Didn’t Happen in China",
    "url": "https://www.washingtonpost.com/news/wonk/wp/2016/10/28/why-the-industrial-revolution-didnt-happen-in-china/",
    "votes": 3,
    "posted": "Oct 30, 2016 5:29:42 PM"
  },
  {
    "id": "12830645",
    "timestamp": "Oct 30, 2016 6:14:01 PM",
    "topic": "Be angry with yourself, not Apple",
    "url": "https://blog.germano.io/macbook/",
    "votes": 12,
    "posted": "Oct 30, 2016 5:29:03 PM"
  },
  {
    "id": "12830592",
    "timestamp": "Oct 30, 2016 5:23:56 PM",
    "topic": "Apple Says Goodbye to the Startup Chime with the New MacBook Pro",
    "url": "https://pingie.com/2016/10/28/apple-says-goodbye-to-the-startup-chime-with-the-new-macbook-pro/?q",
    "votes": 4,
    "posted": "Oct 30, 2016 5:20:04 PM"
  },
  {
    "id": "12830585",
    "timestamp": "Oct 30, 2016 5:53:58 PM",
    "topic": "Iceland election: Pirate Party triples seats",
    "url": "http://www.bbc.co.uk/news/world-europe-37813564",
    "votes": 4,
    "posted": "Oct 30, 2016 5:19:26 PM"
  },
  {
    "id": "12830503",
    "timestamp": "Oct 30, 2016 7:34:09 PM",
    "topic": "The Mac Platform Decline",
    "url": "https://milen.me/writings/mac-platform-decline/",
    "votes": 4,
    "posted": "Oct 30, 2016 5:03:13 PM"
  },
  {
    "id": "12830458",
    "timestamp": "Oct 30, 2016 6:14:01 PM",
    "topic": "Show HN: Huge list of React.js projects",
    "url": "https://gist.github.com/sAbakumoff/7b8510adcb16bded189d747e34f5e114",
    "votes": 6,
    "posted": "Oct 30, 2016 4:56:32 PM"
  },
  {
    "id": "12830307",
    "timestamp": "Oct 30, 2016 4:43:52 PM",
    "topic": "Sonder E-Ink Keyboard",
    "url": "https://sonderdesign.com/",
    "votes": 6,
    "posted": "Oct 30, 2016 4:30:10 PM"
  },
  {
    "id": "12830233",
    "timestamp": "Oct 30, 2016 4:53:53 PM",
    "topic": "Barcelona Supercomputing Center",
    "url": "http://www.atlasobscura.com/places/barcelona-supercomputing-center",
    "votes": 3,
    "posted": "Oct 30, 2016 4:16:51 PM"
  },
  {
    "id": "12830206",
    "timestamp": "Oct 30, 2016 4:33:52 PM",
    "topic": "Buttery Smooth Emacs",
    "url": "https://www.facebook.com/notes/daniel-colascione/buttery-smooth-emacs/10155313440066102/",
    "votes": 3,
    "posted": "Oct 30, 2016 4:12:24 PM"
  },
  {
    "id": "12829997",
    "timestamp": "Oct 30, 2016 4:23:51 PM",
    "topic": "Veertu Leaves Mac App Store, Open Sourced",
    "url": "https://veertu.com/usb-bridged-networking-support/",
    "votes": 3,
    "posted": "Oct 30, 2016 3:34:33 PM"
  },
  {
    "id": "12829799",
    "timestamp": "Oct 30, 2016 3:13:45 PM",
    "topic": "Master LATEX in minutes",
    "url": "https://github.com/VoLuong/Master-Latex-in-minutes",
    "votes": 9,
    "posted": "Oct 30, 2016 2:56:24 PM"
  },
  {
    "id": "12829797",
    "timestamp": "Oct 30, 2016 3:13:45 PM",
    "topic": "Gaming’s rarest systems and games can be found at this huge museum in Texas",
    "url": "http://arstechnica.com/gaming/2016/10/americas-largest-gaming-museum-rare-games-crazy-prototypes-and-giant-pong/",
    "votes": 4,
    "posted": "Oct 30, 2016 2:55:55 PM"
  },
  {
    "id": "12829792",
    "timestamp": "Oct 30, 2016 3:13:45 PM",
    "topic": "PM2.5 exposure possibly leads to 1.37M people’s premature death in China",
    "url": "http://english.pku.edu.cn/news_events/news/research/5076.htm",
    "votes": 4,
    "posted": "Oct 30, 2016 2:54:52 PM"
  },
  {
    "id": "12829781",
    "timestamp": "Oct 30, 2016 3:13:45 PM",
    "topic": "How liars create the ‘illusion of truth’",
    "url": "http://www.bbc.com/future/story/20161026-how-liars-create-the-illusion-of-truth",
    "votes": 9,
    "posted": "Oct 30, 2016 2:52:02 PM"
  },
  {
    "id": "12829759",
    "timestamp": "Oct 30, 2016 3:53:49 PM",
    "topic": "I don\u0027t understand Python\u0027s Asyncio",
    "url": "http://lucumr.pocoo.org/2016/10/30/i-dont-understand-asyncio/",
    "votes": 7,
    "posted": "Oct 30, 2016 2:46:32 PM"
  },
  {
    "id": "12829702",
    "timestamp": "Oct 30, 2016 3:03:44 PM",
    "topic": "Horrible Things I Found Out When I Made A Video Game",
    "url": "http://www.cracked.com/blog/5-things-you-learn-when-making-modern-video-game/",
    "votes": 3,
    "posted": "Oct 30, 2016 2:36:34 PM"
  },
  {
    "id": "12829658",
    "timestamp": "Oct 30, 2016 2:43:42 PM",
    "topic": "Mono TLS 1.2 hits Mono/master",
    "url": "http://tirania.org/blog/archive/2016/Sep-30.html",
    "votes": 4,
    "posted": "Oct 30, 2016 2:26:44 PM"
  },
  {
    "id": "12829644",
    "timestamp": "Oct 30, 2016 7:14:07 PM",
    "topic": "How Podesta\u0027s Gmail Account Was Breached",
    "url": "http://www.thesmokinggun.com/documents/crime/how-john-podesta-got-hacked-839125",
    "votes": 3,
    "posted": "Oct 30, 2016 2:24:59 PM"
  },
  {
    "id": "12829598",
    "timestamp": "Oct 30, 2016 2:53:43 PM",
    "topic": "Windows Server 2016 persistent memory support supercharges storage IO",
    "url": "http://www.theregister.co.uk/2016/10/28/windows_server_2016_persistent_memory_support_supercharges_storage_io/",
    "votes": 4,
    "posted": "Oct 30, 2016 2:14:24 PM"
  },
  {
    "id": "12829561",
    "timestamp": "Oct 30, 2016 2:53:43 PM",
    "topic": "Good Enough Practices in Scientific Computing",
    "url": "https://arxiv.org/abs/1609.00037",
    "votes": 3,
    "posted": "Oct 30, 2016 2:03:09 PM"
  },
  {
    "id": "12829526",
    "timestamp": "Oct 30, 2016 2:03:38 PM",
    "topic": "MITM on sync+emerge \u003d root almost any gentoo system",
    "url": "https://bugs.gentoo.org/show_bug.cgi?id\u003d597804",
    "votes": 3,
    "posted": "Oct 30, 2016 1:55:32 PM"
  },
  {
    "id": "12829474",
    "timestamp": "Oct 30, 2016 2:03:38 PM",
    "topic": "In Germany, Syrians find mosques too conservative",
    "url": "http://www.reuters.com/article/us-europe-migrants-germany-mosques-insig-idUSKCN12S0HE",
    "votes": 6,
    "posted": "Oct 30, 2016 1:45:38 PM"
  },
  {
    "id": "12829411",
    "timestamp": "Oct 30, 2016 7:14:07 PM",
    "topic": "How I keep track of my to-dos using plain text",
    "url": "https://medium.com/@saola/how-i-keep-track-of-my-to-dos-using-plain-text-68b09b026d8d#.6vfvf2kmx",
    "votes": 7,
    "posted": "Oct 30, 2016 1:26:05 PM"
  },
  {
    "id": "12829271",
    "timestamp": "Oct 30, 2016 1:53:37 PM",
    "topic": "EA Games and Origin quietly bans an entire country",
    "url": "https://www.reddit.com/r/gaming/comments/5a51e2/ea_games_and_origin_quietly_bans_an_entire/",
    "votes": 3,
    "posted": "Oct 30, 2016 12:46:46 PM"
  },
  {
    "id": "12829196",
    "timestamp": "Oct 30, 2016 1:53:37 PM",
    "topic": "Sun, surf and low rents: why Lisbon could be the next tech capital",
    "url": "https://www.theguardian.com/world/2016/oct/29/lisbon-web-summit-sun-surf-cheap-rents-tech-capital",
    "votes": 4,
    "posted": "Oct 30, 2016 12:22:43 PM"
  },
  {
    "id": "12829183",
    "timestamp": "Oct 30, 2016 1:53:36 PM",
    "topic": "Qualcomm’s NXP Deal Is $47B Wager on Computers You Drive",
    "url": "https://www.bloomberg.com/news/articles/2016-10-27/qualcomm-s-nxp-deal-is-47-billion-wager-on-computers-you-drive",
    "votes": 3,
    "posted": "Oct 30, 2016 12:18:19 PM"
  },
  {
    "id": "12829178",
    "timestamp": "Oct 30, 2016 1:53:36 PM",
    "topic": "Python and Machine Learning in Astronomy [audio]",
    "url": "https://talkpython.fm/episodes/show/81/python-and-machine-learning-in-astronomy",
    "votes": 6,
    "posted": "Oct 30, 2016 12:14:53 PM"
  },
  {
    "id": "12828963",
    "timestamp": "Oct 30, 2016 11:23:25 AM",
    "topic": "Gender Equality Is Making Men Feel Discriminated Against [video]",
    "url": "https://hbr.org/video/5187346357001/gender-equality-is-making-men-feel-discriminated-against",
    "votes": 3,
    "posted": "Oct 30, 2016 11:05:01 AM"
  },
  {
    "id": "12828904",
    "timestamp": "Oct 30, 2016 1:53:36 PM",
    "topic": "AtomicBombing – brand new code injection form windows",
    "url": "https://breakingmalware.com/injection-techniques/atombombing-brand-new-code-injection-for-windows/",
    "votes": 3,
    "posted": "Oct 30, 2016 10:45:40 AM"
  },
  {
    "id": "12828887",
    "timestamp": "Oct 30, 2016 11:13:24 AM",
    "topic": "Ask HN: Why are SIM cards still a thing?",
    "votes": 15,
    "posted": "Oct 30, 2016 10:40:16 AM"
  },
  {
    "id": "12828746",
    "timestamp": "Oct 30, 2016 2:03:38 PM",
    "topic": "Pirate Party gets 14.5% of votes in Iceland election",
    "url": "http://icelandmonitor.mbl.is/elections2016/",
    "votes": 8,
    "posted": "Oct 30, 2016 9:46:07 AM"
  },
  {
    "id": "12828702",
    "timestamp": "Oct 30, 2016 1:13:33 PM",
    "topic": "Building a CustoMac: Buyer\u0027s Guide October 2016",
    "url": "https://www.tonymacx86.com/buyersguide/october/2016",
    "votes": 4,
    "posted": "Oct 30, 2016 9:26:05 AM"
  },
  {
    "id": "12828565",
    "timestamp": "Oct 30, 2016 10:53:23 AM",
    "topic": "giteveryday(7)",
    "url": "https://www.kernel.org/pub/software/scm/git/docs/giteveryday.html",
    "votes": 4,
    "posted": "Oct 30, 2016 8:13:26 AM"
  },
  {
    "id": "12828456",
    "timestamp": "Oct 30, 2016 9:23:16 AM",
    "topic": "UX Myths",
    "url": "http://uxmyths.com/",
    "votes": 5,
    "posted": "Oct 30, 2016 7:23:06 AM"
  },
  {
    "id": "12828400",
    "timestamp": "Oct 30, 2016 2:03:38 PM",
    "topic": "ZeroCash: Trustless Bitcoin Tumbling",
    "url": "http://www.alexkyte.me/2016/10/zerocash-bitcoin-with-privacy.html",
    "votes": 4,
    "posted": "Oct 30, 2016 7:05:26 AM"
  },
  {
    "id": "12828386",
    "timestamp": "Oct 30, 2016 2:03:38 PM",
    "topic": "Watch HN: The Mind Behind Linux – Linus Torvalds",
    "url": "https://www.youtube.com/watch?v\u003do8NPllzkFhE",
    "votes": 3,
    "posted": "Oct 30, 2016 7:00:40 AM"
  },
  {
    "id": "12828375",
    "timestamp": "Oct 30, 2016 9:33:17 AM",
    "topic": "The Feds Won’t Buy This $19M Stealth Boat–or Let It Be Sold Abroad",
    "url": "http://www.bloomberg.com/news/articles/2016-10-19/the-feds-won-t-buy-this-19-million-stealth-boat-or-let-it-be-sold-abroad?utm_content\u003dbusiness\u0026cmpid\u003dsocialflow-twitter-business\u0026utm_campaign\u003dsocialflow-organic\u0026utm_source\u003dtwitter\u0026utm_medium\u003dsocial",
    "votes": 4,
    "posted": "Oct 30, 2016 6:57:44 AM"
  },
  {
    "id": "12828360",
    "timestamp": "Oct 30, 2016 2:33:41 PM",
    "topic": "What does the post-MacOS future look like?",
    "url": "https://www.tbray.org/ongoing/When/201x/2016/10/29/Post-Mac",
    "votes": 3,
    "posted": "Oct 30, 2016 6:54:19 AM"
  },
  {
    "id": "12828255",
    "timestamp": "Oct 30, 2016 1:03:32 PM",
    "topic": "Show HN: MFile.io",
    "url": "https://mfile.io/76Zn0q",
    "votes": 6,
    "posted": "Oct 30, 2016 6:03:34 AM"
  },
  {
    "id": "12828249",
    "timestamp": "Oct 31, 2016 1:44:43 AM",
    "topic": "Mr. Money Mustache Donated His First $100,000 and Plans to Give Away More",
    "url": "http://www.mrmoneymustache.com/2016/10/26/notes-on-giving-away-100000/",
    "votes": 6,
    "posted": "Oct 30, 2016 6:01:26 AM"
  },
  {
    "id": "12828073",
    "timestamp": "Oct 30, 2016 2:03:38 PM",
    "topic": "Dagger: decompilation framework based on LLVM",
    "url": "http://dagger.repzret.org/",
    "votes": 3,
    "posted": "Oct 30, 2016 4:54:34 AM"
  },
  {
    "id": "12828070",
    "timestamp": "Oct 30, 2016 7:53:09 AM",
    "topic": "Silicon Valley Is Coming for Your Lunch",
    "url": "https://theringer.com/silicon-valley-is-coming-for-your-lunch-d08a2650e5d6#.652auqzdo",
    "votes": 3,
    "posted": "Oct 30, 2016 4:53:14 AM"
  },
  {
    "id": "12828003",
    "timestamp": "Oct 30, 2016 5:12:57 AM",
    "topic": "Is Vue.js easier for a beginner to learn than jQuery?",
    "url": "https://medium.com/js-dojo/vue-js-is-easier-to-learn-than-jquery-abbbb9c12cf8#.9cwt60spf",
    "votes": 4,
    "posted": "Oct 30, 2016 4:25:02 AM"
  },
  {
    "id": "12828001",
    "timestamp": "Oct 30, 2016 2:03:38 PM",
    "topic": "Tesla Unveils Its New Line of Camouflaged Solar Panels",
    "url": "https://www.wired.com/2016/10/tesla-unveils-new-line-camouflaged-solar-panels/",
    "votes": 3,
    "posted": "Oct 30, 2016 4:24:39 AM"
  },
  {
    "id": "12827946",
    "timestamp": "Oct 30, 2016 5:53:00 AM",
    "topic": "Steve Jobs on sales/marketing vs. product/engineering driven companies",
    "url": "https://twitter.com/ow/status/792284416286523392",
    "votes": 5,
    "posted": "Oct 30, 2016 4:11:32 AM"
  },
  {
    "id": "12827911",
    "timestamp": "Oct 30, 2016 6:23:02 AM",
    "topic": "My Mechanical Keyboard",
    "url": "http://joeposnanski.com/my-mechanical-keyboard/",
    "votes": 3,
    "posted": "Oct 30, 2016 4:00:33 AM"
  },
  {
    "id": "12827887",
    "timestamp": "Oct 30, 2016 4:12:52 AM",
    "topic": "Ask HN: How to deal with Indian people?",
    "votes": 6,
    "posted": "Oct 30, 2016 3:53:02 AM"
  },
  {
    "id": "12827868",
    "timestamp": "Oct 30, 2016 2:03:39 PM",
    "topic": "A Practical Lesson in XSS",
    "url": "http://technopy.com/xss-by-example.html",
    "votes": 4,
    "posted": "Oct 30, 2016 3:46:42 AM"
  },
  {
    "id": "12827802",
    "timestamp": "Oct 30, 2016 5:53:00 AM",
    "topic": "3Blue1Brown is creating animated math videos",
    "url": "https://www.patreon.com/3blue1brown",
    "votes": 5,
    "posted": "Oct 30, 2016 3:28:45 AM"
  },
  {
    "id": "12827753",
    "timestamp": "Oct 30, 2016 2:03:39 PM",
    "topic": "Prove you’re not Saddam Hussein, Apple tells customer",
    "url": "http://www.timesofisrael.com/prove-youre-not-saddam-hussein-apple-tells-customer/",
    "votes": 4,
    "posted": "Oct 30, 2016 3:17:49 AM"
  },
  {
    "id": "12827691",
    "timestamp": "Oct 30, 2016 3:32:49 AM",
    "topic": "Something magical happened to me today, and I wanted to tell you all about it",
    "url": "https://twitter.com/mwichary/status/791709895083102209",
    "votes": 3,
    "posted": "Oct 30, 2016 3:01:03 AM"
  },
  {
    "id": "12827528",
    "timestamp": "Oct 30, 2016 5:53:00 AM",
    "topic": "Apple Losing USB Is a Loss for Music",
    "url": "http://pitchfork.com/thepitch/1346-apple-losing-usb-is-a-loss-for-music/",
    "votes": 3,
    "posted": "Oct 30, 2016 2:16:43 AM"
  },
  {
    "id": "12827515",
    "timestamp": "Oct 30, 2016 9:33:17 AM",
    "topic": "Facebook Peering",
    "url": "https://www.facebook.com/peering",
    "votes": 5,
    "posted": "Oct 30, 2016 2:13:13 AM"
  },
  {
    "id": "12827492",
    "timestamp": "Oct 30, 2016 3:12:46 AM",
    "topic": "Ask HN: Good email host?",
    "votes": 5,
    "posted": "Oct 30, 2016 2:08:56 AM"
  },
  {
    "id": "12827441",
    "timestamp": "Oct 30, 2016 9:23:16 AM",
    "topic": "Mozilla Quantum",
    "url": "https://wiki.mozilla.org/Quantum",
    "votes": 6,
    "posted": "Oct 30, 2016 2:52:33 AM"
  },
  {
    "id": "12827412",
    "timestamp": "Oct 30, 2016 2:52:45 AM",
    "topic": "How I Found Myself Accused of Stealing Code from WordPress",
    "url": "https://medium.com/@talkol/how-i-found-myself-accused-of-stealing-code-from-wordpress-a7350da9f9f2#.x6g706ram",
    "votes": 4,
    "posted": "Oct 30, 2016 2:45:35 AM"
  },
  {
    "id": "12827196",
    "timestamp": "Oct 30, 2016 2:02:41 AM",
    "topic": "Ask HN: How to challenge a patent?",
    "votes": 6,
    "posted": "Oct 30, 2016 1:50:16 AM"
  },
  {
    "id": "12827173",
    "timestamp": "Oct 30, 2016 8:03:09 AM",
    "topic": "The new MacBook Pro looks and feels so good it\u0027s unreal",
    "url": "http://www.theverge.com/2016/10/27/13419182/apple-new-macbook-pro-video-photos-hands-on",
    "votes": 4,
    "posted": "Oct 30, 2016 1:45:52 AM"
  },
  {
    "id": "12827135",
    "timestamp": "Oct 30, 2016 3:32:49 AM",
    "topic": "The End of Adolescence",
    "url": "https://aeon.co/essays/adolescence-is-no-longer-a-bridge-between-childhood-and-adult-life",
    "votes": 4,
    "posted": "Oct 30, 2016 1:38:44 AM"
  },
  {
    "id": "12827078",
    "timestamp": "Oct 30, 2016 1:42:34 AM",
    "topic": "Microsoft is doing a better Apple impression than Apple",
    "url": "http://www.theverge.com/2016/10/28/13451832/microsoft-apple-hardware-videos-comparison",
    "votes": 3,
    "posted": "Oct 30, 2016 1:26:46 AM"
  },
  {
    "id": "12827064",
    "timestamp": "Oct 30, 2016 2:32:39 AM",
    "topic": "Doubts About the Promised Bounty of Genetically Modified Crops",
    "url": "http://www.nytimes.com/2016/10/30/business/gmo-promise-falls-short.html",
    "votes": 3,
    "posted": "Oct 30, 2016 1:24:19 AM"
  },
  {
    "id": "12827057",
    "timestamp": "Oct 30, 2016 1:32:33 AM",
    "topic": "GiveCampus (YC S15) is hiring Ruby engineers and biz dev for educational software",
    "votes": 1,
    "posted": "Oct 30, 2016 1:22:33 AM"
  },
  {
    "id": "12827000",
    "timestamp": "Nov 1, 2016 9:49:12 PM",
    "topic": "Rock-Smashing Monkeys Unintentionally Make Sharp Stone Tools",
    "url": "http://www.theatlantic.com/science/archive/2016/10/monkeys-unintentionally-make-sharp-edged-stone-tools/504602/?single_page\u003dtrue",
    "votes": 5,
    "posted": "Oct 30, 2016 1:08:47 AM"
  },
  {
    "id": "12826972",
    "timestamp": "Oct 30, 2016 2:22:37 AM",
    "topic": "What Tim Draper Thinks Elon Musk Got Right and Elizabeth Holmes Got Wrong",
    "url": "http://www.bizjournals.com/sanjose/news/2016/10/28/heres-what-tim-draper-thinks-elon-musk-got-right.html",
    "votes": 3,
    "posted": "Oct 30, 2016 1:03:07 AM"
  },
  {
    "id": "12826946",
    "timestamp": "Oct 30, 2016 1:12:32 AM",
    "topic": "Good News Fixing Your Car Isn’t Illegal Anymore",
    "url": "http://ifixit.org/blog/8510/car-repair-illegal-dmca/",
    "votes": 6,
    "posted": "Oct 30, 2016 12:59:29 AM"
  },
  {
    "id": "12826886",
    "timestamp": "Oct 30, 2016 1:32:33 AM",
    "topic": "Doubts About the Promised Bounty of Genetically Modified Crops",
    "url": "http://www.nytimes.com/2016/10/30/business/gmo-promise-falls-short.html?hp\u0026action\u003dclick\u0026pgtype\u003dHomepage\u0026clickSource\u003dimage\u0026module\u003dphoto-spot-region\u0026region\u003dtop-news\u0026WT.nav\u003dtop-news\u0026_r\u003d1\u0026login\u003dfacebook",
    "votes": 4,
    "posted": "Oct 30, 2016 12:43:42 AM"
  },
  {
    "id": "12826863",
    "timestamp": "Oct 30, 2016 2:52:45 AM",
    "topic": "Yasha Levine: Interview about Tor, spies and the cult of crypto",
    "url": "https://surveillancevalley.net/blog/interview-in-german-magazine-konkret-about-tor-and-the-cult-of-crypto",
    "votes": 4,
    "posted": "Oct 30, 2016 12:40:49 AM"
  },
  {
    "id": "12826862",
    "timestamp": "Oct 30, 2016 1:03:32 PM",
    "topic": "Show HN: End-to-End encrypted chat using Firebase and WebCrypto API",
    "url": "https://chat-a9892.firebaseapp.com",
    "votes": 5,
    "posted": "Oct 30, 2016 12:40:48 AM"
  },
  {
    "id": "12826833",
    "timestamp": "Oct 30, 2016 1:42:34 AM",
    "topic": "Update on the HydraDock situation",
    "url": "https://www.kickstarter.com/projects/kickshark/hydradock-11-port-usb-c-dock-for-apple-macbook/posts/1722716",
    "votes": 4,
    "posted": "Oct 30, 2016 12:33:18 AM"
  },
  {
    "id": "12826829",
    "timestamp": "Oct 30, 2016 12:52:30 AM",
    "topic": "Elon Musk Unveils Solar Roof",
    "url": "https://www.youtube.com/watch?v\u003ddRqSkR4ENAg",
    "votes": 4,
    "posted": "Oct 30, 2016 12:31:52 AM"
  },
  {
    "id": "12826811",
    "timestamp": "Oct 30, 2016 3:23:46 PM",
    "topic": "The Tunnel Vision Fallacy",
    "url": "https://hackernoon.com/the-tunnel-vision-fallacy-4847fc16fb9d#.clkdpy3eb?yc-news",
    "votes": 4,
    "posted": "Oct 30, 2016 12:28:05 AM"
  },
  {
    "id": "12826739",
    "timestamp": "Oct 30, 2016 12:52:30 AM",
    "topic": "Casual Sexism Fridays",
    "url": "https://www.mcsweeneys.net/articles/casual-sexism-fridays",
    "votes": 3,
    "posted": "Oct 30, 2016 12:17:08 AM"
  },
  {
    "id": "12826712",
    "timestamp": "Oct 30, 2016 8:03:10 AM",
    "topic": "Bret Victor – The Future of Programming",
    "url": "https://vimeo.com/71278954",
    "votes": 3,
    "posted": "Oct 30, 2016 12:11:59 AM"
  },
  {
    "id": "12826684",
    "timestamp": "Oct 30, 2016 1:42:34 AM",
    "topic": "Microsoft Cognition Toolkit",
    "url": "https://github.com/Microsoft/CNTK",
    "votes": 5,
    "posted": "Oct 30, 2016 12:06:58 AM"
  },
  {
    "id": "12826653",
    "timestamp": "Oct 30, 2016 12:32:28 AM",
    "topic": "We built a fake web toaster, and it was compromised in an hour",
    "url": "http://www.theatlantic.com/technology/archive/2016/10/we-built-a-fake-web-toaster-and-it-was-hacked-in-an-hour/505571/?single_page\u003dtrue",
    "votes": 4,
    "posted": "Oct 30, 2016 12:01:30 AM"
  },
  {
    "id": "12826536",
    "timestamp": "Oct 30, 2016 3:23:46 PM",
    "topic": "The Strange Inevitability of Evolution",
    "url": "http://nautil.us/issue/41/selection/the-strange-inevitability-of-evolution-rp",
    "votes": 3,
    "posted": "Oct 29, 2016 11:37:16 PM"
  },
  {
    "id": "12826521",
    "timestamp": "Oct 30, 2016 12:32:28 AM",
    "topic": "Microsoft Adaptive Keyboards Concepts",
    "url": "https://www.microsoft.com/appliedsciences/content/projects/AdaptiveHardware.aspx",
    "votes": 8,
    "posted": "Oct 29, 2016 11:33:17 PM"
  },
  {
    "id": "12826383",
    "timestamp": "Oct 29, 2016 11:32:22 PM",
    "topic": "Icelandic parliamentary election",
    "url": "http://icelandmonitor.mbl.is/elections2016/",
    "votes": 6,
    "posted": "Oct 29, 2016 11:07:58 PM"
  },
  {
    "id": "12826329",
    "timestamp": "Oct 29, 2016 11:32:23 PM",
    "topic": "Seattle: Highest Minimum Wage, Lowest Unemployment Rate",
    "url": "http://ritholtz.com/2016/10/seattle-highest-minimum-wage/",
    "votes": 4,
    "posted": "Oct 29, 2016 10:56:50 PM"
  },
  {
    "id": "12826185",
    "timestamp": "Oct 29, 2016 10:52:20 PM",
    "topic": "How I Found Myself Accused of Stealing Code from WordPress",
    "url": "https://medium.com/@talkol/how-i-found-myself-accused-of-stealing-code-from-wordpress-a7350da9f9f2#.5bypmvbbe",
    "votes": 4,
    "posted": "Oct 29, 2016 10:32:13 PM"
  },
  {
    "id": "12826136",
    "timestamp": "Oct 29, 2016 11:32:23 PM",
    "topic": "How One Man’s Bad Math Helped Ruin Decades of English Soccer",
    "url": "http://fivethirtyeight.com/features/how-one-mans-bad-math-helped-ruin-decades-of-english-soccer/",
    "votes": 6,
    "posted": "Oct 29, 2016 10:23:18 PM"
  },
  {
    "id": "12826126",
    "timestamp": "Oct 29, 2016 10:32:18 PM",
    "topic": "Blue Bottle, the Company That Won\u0027t Grind Your Coffee, Now Sells Ground Coffee",
    "url": "https://www.fastcodesign.com/3064283/wanted/blue-bottle-the-company-that-wont-grind-your-coffee-now-sells-ground-coffee",
    "votes": 3,
    "posted": "Oct 29, 2016 10:19:28 PM"
  },
  {
    "id": "12826095",
    "timestamp": "Nov 1, 2016 10:19:15 PM",
    "topic": "Philosophy Beyond the Academy",
    "url": "http://www.chronicle.com/article/Philosophy-Beyond-the-Academy/238052",
    "votes": 4,
    "posted": "Oct 29, 2016 10:13:21 PM"
  },
  {
    "id": "12826088",
    "timestamp": "Oct 30, 2016 12:12:26 AM",
    "topic": "Dear Matt Mullenweg: An Open Letter from Wix.com’s CEO Avishai Abrahami",
    "url": "http://www.wix.com/blog/2016/10/dear-matt-mullenweg-an-open-letter-from-wix-coms-ceo-avishai-abrahami/",
    "votes": 8,
    "posted": "Oct 29, 2016 10:11:56 PM"
  },
  {
    "id": "12826025",
    "timestamp": "Oct 29, 2016 10:12:16 PM",
    "topic": "How I Found Myself Accused of Stealing Code from WordPress",
    "url": "https://medium.com/@talkol/how-i-found-myself-accused-of-stealing-code-from-wordpress-a7350da9f9f2#.g8h9b4eql",
    "votes": 8,
    "posted": "Oct 29, 2016 10:02:04 PM"
  },
  {
    "id": "12826022",
    "timestamp": "Oct 29, 2016 10:22:16 PM",
    "topic": "The future of PCs and Macs looks expensive",
    "url": "http://www.theverge.com/2016/10/28/13452084/microsoft-apple-new-pc-surface-macbook-prices-expensive-exclusive",
    "votes": 4,
    "posted": "Oct 29, 2016 10:01:24 PM"
  },
  {
    "id": "12825996",
    "timestamp": "Oct 29, 2016 10:32:17 PM",
    "topic": "Don’t go to art school (2013)",
    "url": "https://medium.com/i-m-h-o/dont-go-to-art-school-138c5efd45e9#.87guodhbv",
    "votes": 5,
    "posted": "Oct 29, 2016 9:56:36 PM"
  },
  {
    "id": "12825953",
    "timestamp": "Oct 29, 2016 10:02:14 PM",
    "topic": "How I Became HackerRank 1 in Two Hours",
    "url": "http://williampross.com/became-hackerrank-1-two-hours?ref\u003dyc",
    "votes": 6,
    "posted": "Oct 29, 2016 9:48:41 PM"
  },
  {
    "id": "12825849",
    "timestamp": "Oct 30, 2016 2:12:37 AM",
    "topic": "End of the line for MacBook Pro",
    "votes": 7,
    "posted": "Oct 29, 2016 9:29:28 PM"
  },
  {
    "id": "12825808",
    "timestamp": "Oct 29, 2016 9:32:12 PM",
    "topic": "It\u0027s a Data Engineering Party Join the Muse (YC W12) as a Data Engineer",
    "url": "https://www.themuse.com/jobs/themuse/data-engineer-bea745",
    "votes": 1,
    "posted": "Oct 29, 2016 9:22:27 PM"
  },
  {
    "id": "12825735",
    "timestamp": "Oct 29, 2016 9:42:13 PM",
    "topic": "Gab Supports Your Right to Choose",
    "url": "https://medium.com/@Torbahax/gab-supports-your-right-to-choose-a57f157c77b9#.5ek1pe2px",
    "votes": 4,
    "posted": "Oct 29, 2016 9:11:15 PM"
  },
  {
    "id": "12825719",
    "timestamp": "Oct 29, 2016 9:22:11 PM",
    "topic": "Image hoster pushes 1.8 PB per month through Cloudflare CDN",
    "url": "http://postimage.org",
    "votes": 3,
    "posted": "Oct 29, 2016 9:07:46 PM"
  },
  {
    "id": "12825655",
    "timestamp": "Oct 29, 2016 9:02:08 PM",
    "topic": "Peter Thiel Defends His Most Contrarian Move Yet: Supporting Trump",
    "url": "http://www.nytimes.com/2016/10/31/technology/peter-thiel-defends-his-most-contrarian-move-yet-supporting-trump.html",
    "votes": 5,
    "posted": "Oct 29, 2016 8:54:59 PM"
  },
  {
    "id": "12825643",
    "timestamp": "Oct 29, 2016 9:12:10 PM",
    "topic": "ClintonCircle / DNC",
    "url": "https://clinton.media.mit.edu/dnc",
    "votes": 8,
    "posted": "Oct 29, 2016 8:52:37 PM"
  },
  {
    "id": "12825568",
    "timestamp": "Oct 30, 2016 4:02:51 AM",
    "topic": "Show HN: Journally – A simple journal, a daily personal organizer",
    "url": "http://journally.net",
    "votes": 6,
    "posted": "Oct 29, 2016 8:38:21 PM"
  },
  {
    "id": "12825501",
    "timestamp": "Oct 29, 2016 9:52:13 PM",
    "topic": "These are Tesla’s stunning new solar roof tiles for homes",
    "url": "https://techcrunch.com/2016/10/28/these-are-teslas-stunning-new-solar-roof-tiles-for-homes/",
    "votes": 3,
    "posted": "Oct 29, 2016 8:25:00 PM"
  },
  {
    "id": "12825479",
    "timestamp": "Oct 31, 2016 11:07:00 PM",
    "topic": "What’s a Woggin? A Bird, a Word, and a Linguistic Mystery",
    "url": "http://www.atlasobscura.com/articles/whats-a-woggin-a-bird-a-word-and-a-linguistic-mystery",
    "votes": 4,
    "posted": "Oct 29, 2016 8:21:37 PM"
  },
  {
    "id": "12825478",
    "timestamp": "Oct 30, 2016 12:22:27 AM",
    "topic": "Ask HN: How do you deal with grief?",
    "votes": 3,
    "posted": "Oct 29, 2016 8:21:18 PM"
  },
  {
    "id": "12825475",
    "timestamp": "Oct 29, 2016 8:32:06 PM",
    "topic": "Being a woman on the internet",
    "url": "http://micheleincalifornia.blogspot.com/2016/10/being-woman-on-internet_29.html",
    "votes": 3,
    "posted": "Oct 29, 2016 8:20:35 PM"
  },
  {
    "id": "12825366",
    "timestamp": "Oct 29, 2016 8:22:05 PM",
    "topic": "Frink",
    "url": "https://frinklang.org",
    "votes": 3,
    "posted": "Oct 29, 2016 8:07:15 PM"
  },
  {
    "id": "12825359",
    "timestamp": "Oct 29, 2016 10:32:18 PM",
    "topic": "Theory that income inequality is actually about housing",
    "url": "https://medium.com/the-ferenstein-wire/a-26-year-old-mit-graduate-is-turning-heads-over-his-theory-that-income-inequality-is-actually-2a3b423e0c#.vryllhupx",
    "votes": 3,
    "posted": "Oct 29, 2016 8:06:51 PM"
  },
  {
    "id": "12825111",
    "timestamp": "Oct 29, 2016 8:12:04 PM",
    "topic": "Why Alphabet’s stock repurchase is $7,019,340,976.83",
    "url": "http://www.marketwatch.com/story/why-alphabets-stock-repurchase-is-701934097683-2016-10-28?siteid\u003dyhoof2",
    "votes": 3,
    "posted": "Oct 29, 2016 7:32:29 PM"
  },
  {
    "id": "12825087",
    "timestamp": "Oct 29, 2016 8:12:04 PM",
    "topic": "AMD 2013 APUs to Include ARM Cortex-A5 Processor for TrustZone Capabilities",
    "url": "http://www.anandtech.com/show/6007/amd-2013-apus-to-include-arm-cortexa5-processor-for-trustzone-capabilities",
    "votes": 4,
    "posted": "Oct 29, 2016 7:29:06 PM"
  },
  {
    "id": "12824927",
    "timestamp": "Oct 29, 2016 8:02:03 PM",
    "topic": "Ask HN: What did you make in Django?",
    "votes": 5,
    "posted": "Oct 29, 2016 7:05:43 PM"
  },
  {
    "id": "12824812",
    "timestamp": "Oct 31, 2016 9:56:49 PM",
    "topic": "Inside the Frozen Zoo That Could Bring Extinct Animals Back to Life",
    "url": "http://www.gq.com/story/inside-the-frozen-zoo-that-could-bring-extinct-animals-back-to-life",
    "votes": 4,
    "posted": "Oct 29, 2016 6:50:19 PM"
  },
  {
    "id": "12824789",
    "timestamp": "Oct 29, 2016 7:31:59 PM",
    "topic": "Strategies of Human Mating (2006) [pdf]",
    "url": "http://www.weimag.ch/micha/dc/05_Buss_Strategies%20of%20Human%20Mating.pdf",
    "votes": 3,
    "posted": "Oct 29, 2016 6:46:29 PM"
  },
  {
    "id": "12824654",
    "timestamp": "Oct 29, 2016 7:52:02 PM",
    "topic": "Apple Says It\u0027s Out of the Standalone Display Business",
    "url": "http://www.macrumors.com/2016/10/28/apple-out-of-display-business/",
    "votes": 3,
    "posted": "Oct 29, 2016 6:22:41 PM"
  },
  {
    "id": "12824631",
    "timestamp": "Oct 29, 2016 6:31:54 PM",
    "topic": "WEB Is ICANN’s First Test of Accountability",
    "url": "https://afilias.info/blogs/web-icanns-first-test-accountability",
    "votes": 3,
    "posted": "Oct 29, 2016 6:18:25 PM"
  },
  {
    "id": "12824616",
    "timestamp": "Oct 29, 2016 6:51:56 PM",
    "topic": "Wickr Inc – When Honesty Disappears Behind the VCP Mountain",
    "url": "https://www.vulnerability-db.com/?q\u003darticles/2016/10/27/wickr-inc-when-honesty-disappears-behind-vcp-mountain",
    "votes": 4,
    "posted": "Oct 29, 2016 6:16:24 PM"
  },
  {
    "id": "12824559",
    "timestamp": "Oct 29, 2016 6:21:53 PM",
    "topic": "Boston is first major U.S. city to open source its website",
    "url": "http://www.routefifty.com/2016/10/boston-open-source-website/132720/",
    "votes": 3,
    "posted": "Oct 29, 2016 6:05:36 PM"
  },
  {
    "id": "12824478",
    "timestamp": "Oct 29, 2016 6:21:53 PM",
    "topic": "Intel driven MacBook Pros have secondary ARM processor for Touch ID and security",
    "url": "https://techcrunch.com/2016/10/28/apples-new-intel-driven-macbooks-have-a-secondary-arm-processor-that-runs-touch-id-and-security/",
    "votes": 5,
    "posted": "Oct 29, 2016 5:54:37 PM"
  },
  {
    "id": "12824421",
    "timestamp": "Oct 29, 2016 6:11:52 PM",
    "topic": "Academia, Love Me Back",
    "url": "https://vivatiffany.wordpress.com/2016/10/27/academia-love-me-back/",
    "votes": 10,
    "posted": "Oct 29, 2016 5:44:25 PM"
  },
  {
    "id": "12824380",
    "timestamp": "Oct 29, 2016 6:11:52 PM",
    "topic": "Universal adversarial perturbations",
    "url": "https://arxiv.org/abs/1610.08401",
    "votes": 4,
    "posted": "Oct 29, 2016 5:35:03 PM"
  },
  {
    "id": "12824367",
    "timestamp": "Oct 29, 2016 5:41:49 PM",
    "topic": "AtomBombing: A Code Injection That Bypasses Current Security Solutions",
    "url": "http://blog.ensilo.com/atombombing-a-code-injection-that-bypasses-current-security-solutions",
    "votes": 3,
    "posted": "Oct 29, 2016 5:32:30 PM"
  },
  {
    "id": "12824366",
    "timestamp": "Oct 29, 2016 5:41:49 PM",
    "topic": "Total Nightmare: USB-C and Thunderbolt 3",
    "url": "http://blog.fosketts.net/2016/10/29/total-nightmare-usb-c-thunderbolt-3/",
    "votes": 16,
    "posted": "Oct 29, 2016 5:32:09 PM"
  },
  {
    "id": "12824355",
    "timestamp": "Oct 29, 2016 5:41:49 PM",
    "topic": "WordPress creator slams Wix: ‘Your app editor is built with stolen code’",
    "url": "http://venturebeat.com/2016/10/28/wordpress-creator-matt-mullenweg-slams-wix-your-app-editor-is-built-with-stolen-code/",
    "votes": 4,
    "posted": "Oct 29, 2016 5:29:27 PM"
  },
  {
    "id": "12824349",
    "timestamp": "Oct 29, 2016 5:31:48 PM",
    "topic": "ESPN Loses 621,000 Subscribers; Worst Month in Company History",
    "url": "http://www.outkickthecoverage.com/espn-loses-621-000-subscribers-worst-month-in-company-history-102916",
    "votes": 3,
    "posted": "Oct 29, 2016 5:28:21 PM"
  },
  {
    "id": "12824335",
    "timestamp": "Oct 29, 2016 5:41:50 PM",
    "topic": "15 Hours with the 13” MacBook Pro, and How Apple’s T1 Bridges ARM and Intel",
    "url": "http://arstechnica.com/apple/2016/10/15-hours-with-the-13-macbook-pro-and-how-apples-t1-bridges-arm-and-intel/?comments\u003d1",
    "votes": 3,
    "posted": "Oct 29, 2016 5:25:35 PM"
  },
  {
    "id": "12824323",
    "timestamp": "Oct 29, 2016 6:11:52 PM",
    "topic": "Show HN: RethinkDB change feeds for indexing Algolia",
    "url": "https://github.com/rlancer/AlgoliaRethinkDB",
    "votes": 4,
    "posted": "Oct 29, 2016 5:24:18 PM"
  },
  {
    "id": "12824292",
    "timestamp": "Oct 29, 2016 5:31:48 PM",
    "topic": "Star-Shaped Structures Could Mean Longer Lasting Dental Fillings, Circuit Boards",
    "url": "http://www.sciencemag.org/news/2016/10/new-star-shaped-structures-could-mean-longer-lasting-dental-fillings-and-circuit-boards",
    "votes": 3,
    "posted": "Oct 29, 2016 5:17:43 PM"
  },
  {
    "id": "12824263",
    "timestamp": "Oct 29, 2016 6:31:54 PM",
    "topic": "The WhatsApp suicide",
    "url": "http://www.bbc.com/news/magazine-37735370",
    "votes": 4,
    "posted": "Oct 29, 2016 5:11:48 PM"
  },
  {
    "id": "12824222",
    "timestamp": "Oct 29, 2016 5:21:47 PM",
    "topic": "Watch thousands of books being re-shelved in a two minute time-lapse",
    "url": "https://www.dpreview.com/news/4686813680/watch-thousands-of-books-being-re-shelved-in-two-minute-time-lapse",
    "votes": 4,
    "posted": "Oct 29, 2016 5:02:23 PM"
  },
  {
    "id": "12824212",
    "timestamp": "Oct 29, 2016 5:21:47 PM",
    "topic": "Thomas Piketty\u0027s Capital in the 21st Century, in 20 minutes",
    "url": "http://boingboing.net/2014/10/23/thomas-pikettys-capital-in-t-2.html",
    "votes": 3,
    "posted": "Oct 29, 2016 4:59:51 PM"
  },
  {
    "id": "12824186",
    "timestamp": "Oct 29, 2016 5:21:47 PM",
    "topic": "A Learned Representation for Artistic Style",
    "url": "https://arxiv.org/abs/1610.07629",
    "votes": 4,
    "posted": "Oct 29, 2016 4:53:29 PM"
  },
  {
    "id": "12824162",
    "timestamp": "Oct 29, 2016 9:52:14 PM",
    "topic": "How I Became HackerRank #1 in Two Hours",
    "url": "http://williampross.com/became-hackerrank-1-two-hours/",
    "votes": 10,
    "posted": "Oct 29, 2016 4:47:12 PM"
  },
  {
    "id": "12824112",
    "timestamp": "Oct 31, 2016 10:36:55 PM",
    "topic": "The Atlas of Early Printing",
    "url": "https://atlas.lib.uiowa.edu",
    "votes": 5,
    "posted": "Oct 29, 2016 4:35:26 PM"
  },
  {
    "id": "12824106",
    "timestamp": "Oct 29, 2016 4:41:42 PM",
    "topic": "VirtualBox 5.1.8",
    "url": "https://www.virtualbox.org/wiki/Changelog#v8",
    "votes": 3,
    "posted": "Oct 29, 2016 4:33:22 PM"
  },
  {
    "id": "12824098",
    "timestamp": "Oct 29, 2016 5:21:47 PM",
    "topic": "Debounce and Throttle in React.Component – react-decoration1.3.0",
    "url": "https://github.com/mbasso/react-decoration/releases/tag/1.3.0",
    "votes": 3,
    "posted": "Oct 29, 2016 4:31:32 PM"
  },
  {
    "id": "12824092",
    "timestamp": "Oct 29, 2016 4:41:42 PM",
    "topic": "EasyMVP – Android library with annotation processing and bytecode weaving",
    "url": "https://github.com/6thsolution/EasyMVP",
    "votes": 6,
    "posted": "Oct 29, 2016 4:30:10 PM"
  },
  {
    "id": "12824052",
    "timestamp": "Oct 29, 2016 5:21:47 PM",
    "topic": "Immutables in Java",
    "url": "https://www.youtube.com/watch?v\u003d-Tydziij7s4",
    "votes": 4,
    "posted": "Oct 29, 2016 4:20:24 PM"
  },
  {
    "id": "12824050",
    "timestamp": "Oct 29, 2016 4:41:42 PM",
    "topic": "GraphicsMagick Image Processing System",
    "url": "http://www.graphicsmagick.org/index.html",
    "votes": 4,
    "posted": "Oct 29, 2016 4:19:31 PM"
  },
  {
    "id": "12823955",
    "timestamp": "Oct 29, 2016 5:51:50 PM",
    "topic": "A Quantum Leap for the Web ( Firefox with Servo Components by End of 2017 )",
    "url": "https://medium.com/mozilla-tech/a-quantum-leap-for-the-web-a3b7174b3c12#.nax3zxwzp",
    "votes": 4,
    "posted": "Oct 29, 2016 3:59:14 PM"
  },
  {
    "id": "12823952",
    "timestamp": "Oct 29, 2016 5:21:47 PM",
    "topic": "Lisp\u0027s Revenge",
    "url": "https://www.youtube.com/watch?v\u003dMTawgp3SKy8",
    "votes": 3,
    "posted": "Oct 29, 2016 3:58:36 PM"
  },
  {
    "id": "12823943",
    "timestamp": "Oct 29, 2016 4:51:43 PM",
    "topic": "Big-O notation explained by a self-taught programmer",
    "url": "https://justin.abrah.ms/computer-science/big-o-notation-explained.html",
    "votes": 4,
    "posted": "Oct 29, 2016 3:55:41 PM"
  },
  {
    "id": "12823937",
    "timestamp": "Oct 29, 2016 5:31:48 PM",
    "topic": "Step-by-step tutorial to build a modern JavaScript stack from scratch",
    "url": "https://github.com/verekia/js-stack-from-scratch",
    "votes": 7,
    "posted": "Oct 29, 2016 3:54:55 PM"
  },
  {
    "id": "12823849",
    "timestamp": "Oct 29, 2016 4:11:39 PM",
    "topic": "No Escape? Microsoft Is About to Eat Apple for Lunch",
    "url": "https://medium.com/javascript-scene/no-escape-microsoft-is-about-to-eat-apple-for-lunch-1fbef5048086",
    "votes": 5,
    "posted": "Oct 29, 2016 3:30:36 PM"
  },
  {
    "id": "12823760",
    "timestamp": "Oct 29, 2016 4:01:38 PM",
    "topic": "SpaceX says helium loading issue caused accident, seeks 2016 return to flight",
    "url": "http://arstechnica.com/science/2016/10/spacex-says-it-remains-on-track-to-return-to-flight-by-years-end/",
    "votes": 3,
    "posted": "Oct 29, 2016 3:06:21 PM"
  },
  {
    "id": "12823717",
    "timestamp": "Oct 29, 2016 4:11:38 PM",
    "topic": "CRISPR hacks expand uses of gene-editing toolbox",
    "url": "https://spectrumnews.org/news/toolbox/crispr-hacks-expand-uses-gene-editing-toolbox/",
    "votes": 3,
    "posted": "Oct 29, 2016 2:50:01 PM"
  },
  {
    "id": "12823592",
    "timestamp": "Oct 29, 2016 4:11:39 PM",
    "topic": "Apple just told the world it has no idea who the Mac is for",
    "url": "https://medium.com/charged-tech/apple-just-told-the-world-it-has-no-idea-who-the-mac-is-for-722a2438389b",
    "votes": 4,
    "posted": "Oct 29, 2016 1:55:25 PM"
  },
  {
    "id": "12823548",
    "timestamp": "Oct 29, 2016 4:11:39 PM",
    "topic": "WikiWikiWeb is back online",
    "url": "http://wiki.c2.com/",
    "votes": 9,
    "posted": "Oct 29, 2016 1:36:47 PM"
  },
  {
    "id": "12823519",
    "timestamp": "Oct 29, 2016 4:11:39 PM",
    "topic": "Brutal workaround for FF SVG path pattern issue on history.pushState",
    "url": "https://github.com/NeXTs/FF-SVG-path-pushState-workaround",
    "votes": 3,
    "posted": "Oct 29, 2016 1:27:35 PM"
  },
  {
    "id": "12823492",
    "timestamp": "Oct 29, 2016 1:51:27 PM",
    "topic": "Enigmail 2.0 (or Enigmail/p≡p) to automatically encrypt e-mails",
    "votes": 3,
    "posted": "Oct 29, 2016 1:13:59 PM"
  },
  {
    "id": "12823459",
    "timestamp": "Oct 29, 2016 3:01:33 PM",
    "topic": "On Leeuwenhoek (1677) ‘Concerning little animals’ (2015)",
    "url": "http://rstb.royalsocietypublishing.org/content/370/1666/20140344",
    "votes": 3,
    "posted": "Oct 29, 2016 12:59:18 PM"
  },
  {
    "id": "12823293",
    "timestamp": "Oct 29, 2016 1:21:25 PM",
    "topic": "Difference between CSS variables and preprocessor variables",
    "url": "https://css-tricks.com/difference-between-types-of-css-variables/?cez",
    "votes": 3,
    "posted": "Oct 29, 2016 11:30:45 AM"
  },
  {
    "id": "12823271",
    "timestamp": "Oct 29, 2016 2:11:28 PM",
    "topic": "Casual Introduction to Low-Level Graphics Programming",
    "url": "http://stephaniehurlburt.com/blog/2016/10/28/casual-introduction-to-low-level-graphics-programming",
    "votes": 4,
    "posted": "Oct 29, 2016 11:25:39 AM"
  },
  {
    "id": "12823240",
    "timestamp": "Oct 29, 2016 4:11:39 PM",
    "topic": "AI Pioneer Yoshua Bengio Is Launching Element AI, a Deep-Learning Incubator",
    "url": "https://www.wired.com/2016/10/ai-pioneer-yoshua-bengio-launching-element-ai-deep-learning-incubator/",
    "votes": 4,
    "posted": "Oct 29, 2016 11:11:54 AM"
  },
  {
    "id": "12823206",
    "timestamp": "Oct 29, 2016 4:11:39 PM",
    "topic": "Belgian court fines Skype for failing to intercept criminals\u0027 calls in 2012",
    "url": "http://www.theregister.co.uk/2016/10/27/belgian_court_fines_skype_intercept_criminals_calls/",
    "votes": 3,
    "posted": "Oct 29, 2016 10:50:04 AM"
  },
  {
    "id": "12823184",
    "timestamp": "Oct 29, 2016 6:01:51 PM",
    "topic": "Dirty COW Was Livepatched in Ubuntu Within Hours of Publication",
    "url": "http://blog.dustinkirkland.com/2016/10/dirty-cow-livepatched-in-ubuntu.html",
    "votes": 4,
    "posted": "Oct 29, 2016 10:39:18 AM"
  },
  {
    "id": "12823146",
    "timestamp": "Oct 29, 2016 4:11:40 PM",
    "topic": "Maxwell\u0027s demon",
    "url": "https://en.wikipedia.org/wiki/Maxwell%27s_demon",
    "votes": 5,
    "posted": "Oct 29, 2016 10:20:16 AM"
  },
  {
    "id": "12823126",
    "timestamp": "Oct 29, 2016 4:11:40 PM",
    "topic": "Scala 2.12.0 released",
    "url": "https://github.com/scala/scala/releases/tag/v2.12.0",
    "votes": 4,
    "posted": "Oct 29, 2016 10:12:56 AM"
  },
  {
    "id": "12823105",
    "timestamp": "Oct 29, 2016 11:51:18 AM",
    "topic": "The TPP\u0027s Last Stand",
    "url": "http://www.huffingtonpost.com/david-singh-grewal/the-tpps-last-stand_b_12657380.html",
    "votes": 4,
    "posted": "Oct 29, 2016 10:03:05 AM"
  },
  {
    "id": "12823024",
    "timestamp": "Oct 29, 2016 10:31:12 AM",
    "topic": "Was Joomla Sabotaged?",
    "url": "http://www.fionacoulter.com/blog/was-joomla-deliberately-sabotaged/",
    "votes": 6,
    "posted": "Oct 29, 2016 9:30:31 AM"
  },
  {
    "id": "12822946",
    "timestamp": "Oct 29, 2016 10:11:10 AM",
    "topic": "GC Pauses and Safe Points in the CLR",
    "url": "http://www.mattwarren.org/2016/08/08/GC-Pauses-and-Safe-Points/",
    "votes": 4,
    "posted": "Oct 29, 2016 8:54:31 AM"
  },
  {
    "id": "12822923",
    "timestamp": "Oct 29, 2016 10:01:10 AM",
    "topic": "The Photographer\u0027s Ephemeris: TPE for Desktop",
    "url": "http://photoephemeris.com/tpe-for-desktop",
    "votes": 4,
    "posted": "Oct 29, 2016 8:45:48 AM"
  },
  {
    "id": "12822833",
    "timestamp": "Oct 29, 2016 8:21:02 AM",
    "topic": "Airbnb Will Require Users to Agree to Nondiscrimination",
    "url": "https://www.airbnb.com/help/article/1523/general-questions-about-the-airbnb-community-commitment?topic\u003d533",
    "votes": 7,
    "posted": "Oct 29, 2016 8:08:28 AM"
  },
  {
    "id": "12822809",
    "timestamp": "Oct 29, 2016 10:51:13 AM",
    "topic": "5th RISC-V Workshop Preliminary Agenda",
    "url": "https://riscv.org/2016/10/5th-risc-v-workshop-agenda/",
    "votes": 3,
    "posted": "Oct 29, 2016 7:57:25 AM"
  },
  {
    "id": "12822742",
    "timestamp": "Oct 29, 2016 9:41:08 AM",
    "topic": "Liskov\u0027s Reading List for Computer Scientists",
    "url": "http://jpirker.com/hlf16-liskovs-reading-list-for-computer-scientists/",
    "votes": 4,
    "posted": "Oct 29, 2016 7:19:05 AM"
  },
  {
    "id": "12822602",
    "timestamp": "Oct 29, 2016 12:11:19 PM",
    "topic": "Welcome to the Linux Kernel’s documentation",
    "url": "https://kernel.org/doc/html/latest/",
    "votes": 5,
    "posted": "Oct 29, 2016 6:09:49 AM"
  },
  {
    "id": "12822598",
    "timestamp": "Oct 29, 2016 6:20:54 AM",
    "topic": "Tesla Unveils Its New Line of Camouflaged Solar Panels",
    "url": "https://www.wired.com/2016/10/tesla-unveils-new-line-camouflaged-solar-panels/",
    "votes": 3,
    "posted": "Oct 29, 2016 6:08:38 AM"
  },
  {
    "id": "12822597",
    "timestamp": "Oct 29, 2016 10:21:11 AM",
    "topic": "These are Tesla’s stunning new solar roof tiles for homes",
    "url": "https://techcrunch.com/2016/10/28/these-are-teslas-stunning-new-solar-roof-tiles-for-homes/",
    "votes": 4,
    "posted": "Oct 29, 2016 6:08:16 AM"
  },
  {
    "id": "12822533",
    "timestamp": "Oct 29, 2016 3:51:37 PM",
    "topic": "How 2K Killed Irrational Games – By Anonymous",
    "url": "https://hackernoon.com/how-2k-killed-irrational-games-a09d8865fd8b#.n17gpload",
    "votes": 5,
    "posted": "Oct 29, 2016 5:43:18 AM"
  },
  {
    "id": "12822483",
    "timestamp": "Oct 29, 2016 8:11:01 AM",
    "topic": "A Moment of Silence for the Black and Brown Talent That Grew on Vine",
    "url": "http://www.npr.org/sections/codeswitch/2016/10/28/499681576/vine-ending-grew-black-brown-talent",
    "votes": 3,
    "posted": "Oct 29, 2016 5:26:41 AM"
  },
  {
    "id": "12822388",
    "timestamp": "Oct 29, 2016 6:30:54 AM",
    "topic": "Tesla solar roof tiles video",
    "url": "https://www.youtube.com/watch?v\u003ddRqSkR4ENAg",
    "votes": 4,
    "posted": "Oct 29, 2016 4:56:34 AM"
  },
  {
    "id": "12822376",
    "timestamp": "Oct 29, 2016 6:10:53 AM",
    "topic": "NYC Passes First Freelancer Wage Theft Protections in the Nation",
    "url": "http://gothamist.com/2016/10/27/freelance_protection_nyc.php",
    "votes": 4,
    "posted": "Oct 29, 2016 4:50:43 AM"
  },
  {
    "id": "12822220",
    "timestamp": "Oct 29, 2016 5:40:51 AM",
    "topic": "Introducing the Robert Elder Software Linux Operating System",
    "url": "http://blog.robertelder.org/robert-elder-software-linux-operating-system/",
    "votes": 4,
    "posted": "Oct 29, 2016 3:58:45 AM"
  },
  {
    "id": "12822154",
    "timestamp": "Oct 29, 2016 6:10:53 AM",
    "topic": "Introducing the World\u0027s Most Advanced Chatbot Lawyer",
    "url": "https://www.lawbot.info/",
    "votes": 4,
    "posted": "Oct 29, 2016 3:38:56 AM"
  },
  {
    "id": "12822148",
    "timestamp": "Oct 29, 2016 4:50:47 AM",
    "topic": "NeuralEnhance image super resolution from the creator of NeuralDoodle",
    "url": "https://github.com/alexjc/neural-enhance",
    "votes": 5,
    "posted": "Oct 29, 2016 3:37:13 AM"
  },
  {
    "id": "12822145",
    "timestamp": "Oct 29, 2016 2:11:29 PM",
    "topic": "Reasons carriers are building new cell networks for the Internet of Things",
    "url": "https://techcrunch.com/2016/10/28/three-reasons-carriers-are-building-new-cell-networks-for-the-internet-of-things/",
    "votes": 5,
    "posted": "Oct 29, 2016 3:36:30 AM"
  },
  {
    "id": "12822124",
    "timestamp": "Oct 29, 2016 2:21:30 PM",
    "topic": "Photographers of 1870s London Documented Their Disappearing City",
    "url": "http://hyperallergic.com/299912/the-photographers-of-1870s-london-who-documented-their-disappearing-city/",
    "votes": 3,
    "posted": "Oct 29, 2016 3:29:44 AM"
  },
  {
    "id": "12822120",
    "timestamp": "Oct 29, 2016 4:00:43 AM",
    "topic": "Show HN: Put “gifs.com/save” in front of any Vine link",
    "url": "http://gifs.com/gif/66YY8R",
    "votes": 6,
    "posted": "Oct 29, 2016 3:27:34 AM"
  },
  {
    "id": "12822032",
    "timestamp": "Oct 29, 2016 4:50:47 AM",
    "topic": "Clinton\u0027s emails visualized by MIT",
    "url": "http://clinton.media.mit.edu",
    "votes": 7,
    "posted": "Oct 29, 2016 3:05:58 AM"
  },
  {
    "id": "12822018",
    "timestamp": "Oct 29, 2016 3:10:39 AM",
    "topic": "Powerwall 2 and Integrated Solar",
    "url": "https://powerwall.tesla.com/?powerwall2",
    "votes": 13,
    "posted": "Oct 29, 2016 3:01:45 AM"
  },
  {
    "id": "12821909",
    "timestamp": "Oct 29, 2016 4:41:42 PM",
    "topic": "Fewer numbers, better science",
    "url": "http://www.nature.com/news/fewer-numbers-better-science-1.20858",
    "votes": 3,
    "posted": "Oct 29, 2016 2:31:04 AM"
  },
  {
    "id": "12821908",
    "timestamp": "Oct 29, 2016 4:11:39 PM",
    "topic": "The American Cloud",
    "url": "https://aeon.co/essays/america-still-has-a-heartland-it-s-just-an-artificial-one",
    "votes": 5,
    "posted": "Oct 29, 2016 2:30:21 AM"
  },
  {
    "id": "12821885",
    "timestamp": "Oct 29, 2016 3:00:38 AM",
    "topic": "Tesla Powerwall 2.0",
    "url": "https://powerwall.tesla.com/",
    "votes": 8,
    "posted": "Oct 29, 2016 2:25:57 AM"
  },
  {
    "id": "12821768",
    "timestamp": "Oct 29, 2016 2:30:36 AM",
    "topic": "New Emails in Clinton Case Came from Anthony Weiner’s Computer",
    "url": "http://www.nytimes.com/2016/10/29/us/politics/fbi-hillary-clinton-email.html?hp\u0026action\u003dclick\u0026pgtype\u003dHomepage\u0026clickSource\u003dstory-heading\u0026module\u003dspan-ab-top-region\u0026region\u003dtop-news\u0026WT.nav\u003dtop-news",
    "votes": 7,
    "posted": "Oct 29, 2016 1:56:35 AM"
  },
  {
    "id": "12821750",
    "timestamp": "Oct 29, 2016 2:20:35 AM",
    "topic": "Are You an Angry Programmer?",
    "url": "https://medium.com/@fagnerbrack/the-angry-programmer-52a93bfcbc3c",
    "votes": 3,
    "posted": "Oct 29, 2016 1:51:26 AM"
  },
  {
    "id": "12821637",
    "timestamp": "Oct 29, 2016 3:41:36 PM",
    "topic": "A Map of the World Won Japan’s Prestigious Design Award",
    "url": "http://www.spoon-tamago.com/2016/10/28/hajime-narukawa-authagraph/",
    "votes": 3,
    "posted": "Oct 29, 2016 1:27:04 AM"
  },
  {
    "id": "12821586",
    "timestamp": "Oct 29, 2016 3:00:39 AM",
    "topic": "Sub-millisecond GC pauses in Go 1.8",
    "url": "https://groups.google.com/forum/?fromgroups#!topic/golang-dev/Ab1sFeoZg_8",
    "votes": 4,
    "posted": "Oct 29, 2016 1:15:34 AM"
  },
  {
    "id": "12821584",
    "timestamp": "Oct 29, 2016 2:50:38 AM",
    "topic": "The dawn of 3D games",
    "url": "http://grenouille-bouillie.blogspot.com/2007/10/dawn-of-3d-games.html",
    "votes": 4,
    "posted": "Oct 29, 2016 1:15:17 AM"
  },
  {
    "id": "12821541",
    "timestamp": "Oct 29, 2016 5:00:48 AM",
    "topic": "Facebook draws criticism for ‘ethnic affinity’ ad targeting",
    "url": "https://techcrunch.com/2016/10/28/facebook-ethnic-affinity/",
    "votes": 4,
    "posted": "Oct 29, 2016 1:07:18 AM"
  },
  {
    "id": "12821454",
    "timestamp": "Oct 29, 2016 1:00:29 AM",
    "topic": "Lever is hiring an engineering manager in SF – Join a 50/50 men and women team",
    "url": "https://www.lever.co/jobs?site\u003dHacker%20News\u0026instance\u003d30\u0026copy\u003dL",
    "votes": 1,
    "posted": "Oct 29, 2016 12:54:05 AM"
  },
  {
    "id": "12821413",
    "timestamp": "Oct 29, 2016 9:41:08 AM",
    "topic": "Show HN: New type of job board for teams and projects gt $50,000",
    "url": "http://45.55.223.60",
    "votes": 3,
    "posted": "Oct 29, 2016 12:46:52 AM"
  },
  {
    "id": "12821406",
    "timestamp": "Oct 29, 2016 1:40:32 AM",
    "topic": "Aks HN: How did you improve the quality of your code base?",
    "votes": 4,
    "posted": "Oct 29, 2016 12:46:18 AM"
  },
  {
    "id": "12821351",
    "timestamp": "Oct 29, 2016 7:51:00 AM",
    "topic": "Comma.ai cancels the Comma One following NHTSA letter",
    "url": "https://techcrunch.com/2016/10/28/comma-ai-cancels-the-comma-one-following-nhtsa-letter/",
    "votes": 3,
    "posted": "Oct 29, 2016 12:35:23 AM"
  },
  {
    "id": "12821247",
    "timestamp": "Oct 29, 2016 12:30:26 AM",
    "topic": "Emacs: Why You Should Not Swap CapsLock and Control",
    "url": "http://ergoemacs.org/emacs/swap_CapsLock_Ctrl.html",
    "votes": 3,
    "posted": "Oct 29, 2016 12:18:35 AM"
  },
  {
    "id": "12821188",
    "timestamp": "Oct 29, 2016 12:50:28 AM",
    "topic": "Leaked Pentagon video is science fiction about the future of cities",
    "url": "http://arstechnica.com/tech-policy/2016/10/bizarre-leaked-pentagon-video-is-a-science-fiction-story-about-the-future-of-cities/",
    "votes": 3,
    "posted": "Oct 29, 2016 12:08:56 AM"
  },
  {
    "id": "12821177",
    "timestamp": "Oct 29, 2016 12:20:24 AM",
    "topic": "Lenovo backs down, releases BiOS fix with AHCI, unblocking Linux on laptops",
    "url": "http://support.lenovo.com/us/en/products/Laptops-and-netbooks/Yoga-Series/yoga-900-13isk2/downloads/DS119354",
    "votes": 3,
    "posted": "Oct 29, 2016 12:07:35 AM"
  },
  {
    "id": "12821161",
    "timestamp": "Oct 29, 2016 12:20:25 AM",
    "topic": "(Linux Only) BiOS Update for Windows 10 (64-bit) – Yoga 900",
    "url": "http://support.lenovo.com/gb/en/products/Laptops-and-netbooks/Yoga-Series/yoga-900-13isk2/downloads/DS119354",
    "votes": 5,
    "posted": "Oct 29, 2016 12:05:09 AM"
  },
  {
    "id": "12821156",
    "timestamp": "Oct 29, 2016 12:30:26 AM",
    "topic": "The Cell’s Backup Genetic Instructions",
    "url": "https://www.quantamagazine.org/20161028-the-cells-backup-genetic-instructions/",
    "votes": 3,
    "posted": "Oct 29, 2016 12:04:17 AM"
  },
  {
    "id": "12821112",
    "timestamp": "Oct 29, 2016 3:30:41 AM",
    "topic": "Red-Lang: Live-coding of a clock demo, EVE-style",
    "url": "http://jugad2.blogspot.com/2016/10/red-lang-live-coding-of-clock-demo-eve.html",
    "votes": 3,
    "posted": "Oct 28, 2016 11:57:39 PM"
  },
  {
    "id": "12821019",
    "timestamp": "Oct 29, 2016 12:40:27 AM",
    "topic": "Defending against Rowhammer in the Linux kernel",
    "url": "https://lwn.net/SubscriberLink/704920/7be829926c94cd9f/",
    "votes": 6,
    "posted": "Oct 28, 2016 11:44:55 PM"
  },
  {
    "id": "12820957",
    "timestamp": "Oct 29, 2016 12:30:26 AM",
    "topic": "You Don\u0027t Need JQuery Ajax Requests",
    "url": "http://blog.garstasio.com/you-dont-need-jquery/ajax/",
    "votes": 5,
    "posted": "Oct 28, 2016 11:37:35 PM"
  },
  {
    "id": "12820906",
    "timestamp": "Oct 28, 2016 11:50:22 PM",
    "topic": "How to make e-mail encrypted for everyone",
    "url": "https://friendlybit.com/security/how-to-make-e-mail-encrypted-for-everyone/",
    "votes": 3,
    "posted": "Oct 28, 2016 11:28:50 PM"
  },
  {
    "id": "12820834",
    "timestamp": "Oct 29, 2016 12:10:24 AM",
    "topic": "Font Awesome 5 has raised $350 000 in 4 days",
    "url": "https://www.kickstarter.com/projects/232193852/font-awesome-5",
    "votes": 3,
    "posted": "Oct 28, 2016 11:22:35 PM"
  },
  {
    "id": "12820832",
    "timestamp": "Oct 28, 2016 11:30:20 PM",
    "topic": "Joomla Exploits in the Wild Against CVE-2016-8870 and CVE-2016-8869",
    "url": "https://blog.sucuri.net/2016/10/joomla-mass-exploits-privilege-vulnerability.html",
    "votes": 6,
    "posted": "Oct 28, 2016 11:22:24 PM"
  },
  {
    "id": "12820778",
    "timestamp": "Oct 28, 2016 11:30:20 PM",
    "topic": "Ask HN: Is Dell XPS Developer Edition a Good Replacement of Macbook Pro?",
    "votes": 6,
    "posted": "Oct 28, 2016 11:14:19 PM"
  },
  {
    "id": "12820711",
    "timestamp": "Nov 1, 2016 5:57:41 AM",
    "topic": "Ask HN: How would hiring react to high profile/notorious company on resume?",
    "votes": 6,
    "posted": "Oct 28, 2016 11:06:35 PM"
  },
  {
    "id": "12820608",
    "timestamp": "Oct 29, 2016 3:10:40 AM",
    "topic": "About the Touch Bar – MacOS Human Interface Guidelines",
    "url": "https://developer.apple.com/library/content/documentation/UserExperience/Conceptual/OSXHIGuidelines/AbouttheTouchBar.html#//apple_ref/doc/uid/20000957-CH104-SW1",
    "votes": 4,
    "posted": "Oct 28, 2016 10:56:15 PM"
  },
  {
    "id": "12820564",
    "timestamp": "Oct 28, 2016 11:10:18 PM",
    "topic": "The Wix Mobile App, a WordPress Joint",
    "url": "https://ma.tt/2016/10/wix-and-the-gpl/",
    "votes": 13,
    "posted": "Oct 28, 2016 10:51:15 PM"
  },
  {
    "id": "12820561",
    "timestamp": "Oct 28, 2016 11:00:17 PM",
    "topic": "Microsoft offers Apple users $650 off to trade a MacBook for a Surface",
    "url": "https://techcrunch.com/2016/10/28/microsoft-apple/?ncid\u003drss\u0026utm_source\u003dfeedburner\u0026utm_medium\u003dfeed\u0026utm_campaign\u003dFeed%3A+Techcrunch+%28TechCrunch%29\u0026utm_content\u003dFaceBook\u0026sr_share\u003dfacebook",
    "votes": 22,
    "posted": "Oct 28, 2016 10:51:00 PM"
  },
  {
    "id": "12820421",
    "timestamp": "Oct 28, 2016 11:40:21 PM",
    "topic": "Why html thinks \u0027chucknorris\u0027 is a color",
    "url": "http://stackoverflow.com/questions/8318911/why-does-html-think-chucknorris-is-a-color",
    "votes": 4,
    "posted": "Oct 28, 2016 10:38:00 PM"
  },
  {
    "id": "12820412",
    "timestamp": "Oct 28, 2016 11:00:17 PM",
    "topic": "Facebook Lets Advertisers Exclude Users by Race",
    "url": "https://www.propublica.org/article/facebook-lets-advertisers-exclude-users-by-race",
    "votes": 6,
    "posted": "Oct 28, 2016 10:36:54 PM"
  },
  {
    "id": "12820362",
    "timestamp": "Oct 29, 2016 2:21:30 PM",
    "topic": "Bonobos’ Andy Dunn shares his secrets on the future of retail",
    "url": "http://coveteur.com/2016/10/27/bonobo-andy-dunn-interview/",
    "votes": 4,
    "posted": "Oct 28, 2016 10:32:02 PM"
  },
  {
    "id": "12820127",
    "timestamp": "Oct 28, 2016 10:30:14 PM",
    "topic": "These Bees Bore Through Rock to Make Nests",
    "url": "http://blogs.discovermagazine.com/d-brief/2016/09/27/these-bees-bore-through-solid-rock-to-make-nests/",
    "votes": 3,
    "posted": "Oct 28, 2016 10:06:04 PM"
  },
  {
    "id": "12820107",
    "timestamp": "Oct 28, 2016 10:30:14 PM",
    "topic": "Apple Losing USB Is a Loss for Music",
    "url": "http://pitchfork.com/thepitch/1346-apple-losing-usb-is-a-loss-for-music/?mbid\u003dsocial_facebook",
    "votes": 3,
    "posted": "Oct 28, 2016 10:03:37 PM"
  },
  {
    "id": "12820106",
    "timestamp": "Oct 30, 2016 2:03:39 PM",
    "topic": "Show HN: Automate the creation of unique Vault tokens for Kubernetes Pods",
    "url": "https://github.com/kelseyhightower/vault-controller",
    "votes": 5,
    "posted": "Oct 28, 2016 10:03:31 PM"
  },
  {
    "id": "12820076",
    "timestamp": "Oct 28, 2016 10:30:14 PM",
    "topic": "Stan Ulam, John von Neumann, and the Monte Carlo Method (1987, Pdf)",
    "url": "http://permalink.lanl.gov/object/tr?what\u003dinfo:lanl-repo/lareport/LA-UR-88-9068",
    "votes": 3,
    "posted": "Oct 28, 2016 9:59:46 PM"
  },
  {
    "id": "12820038",
    "timestamp": "Oct 28, 2016 11:10:18 PM",
    "topic": "What comes after ‘iptables’? It’s successor, of course: `nftables`",
    "url": "http://developers.redhat.com/blog/2016/10/28/what-comes-after-iptables-its-successor-of-course-nftables/",
    "votes": 3,
    "posted": "Oct 28, 2016 9:55:04 PM"
  },
  {
    "id": "12820012",
    "timestamp": "Oct 29, 2016 12:10:24 AM",
    "topic": "FBI reviewing new emails in Clinton classified information probe",
    "url": "http://www.cnn.com/2016/10/28/politics/fbi-reviewing-new-emails-in-clinton-probe-director-tells-senate-judiciary-committee/index.html",
    "votes": 5,
    "posted": "Oct 28, 2016 9:52:10 PM"
  },
  {
    "id": "12819900",
    "timestamp": "Oct 28, 2016 10:00:12 PM",
    "topic": "New Clinton emails found during Anthony Weiner sexting probe",
    "url": "http://nypost.com/2016/10/28/new-clinton-emails-found-during-anthony-weiner-sexting-probe/",
    "votes": 4,
    "posted": "Oct 28, 2016 9:39:24 PM"
  },
  {
    "id": "12819890",
    "timestamp": "Oct 28, 2016 10:00:11 PM",
    "topic": "The bizarre role reversal of Apple and Microsoft",
    "url": "https://backchannel.com/the-bizarre-role-reversal-of-apple-and-microsoft-25d8b391d5b0#.xw7qjxmyh",
    "votes": 6,
    "posted": "Oct 28, 2016 9:38:31 PM"
  },
  {
    "id": "12819855",
    "timestamp": "Oct 28, 2016 9:40:09 PM",
    "topic": "FiveStars (YC W11) hiring experienced consumer PMs to make commerce human",
    "votes": 1,
    "posted": "Oct 28, 2016 9:35:34 PM"
  },
  {
    "id": "12819813",
    "timestamp": "Oct 28, 2016 9:50:10 PM",
    "topic": "New Emails in Clinton Case Came from Anthony Weiner’s Electronic Devices",
    "url": "http://www.nytimes.com/2016/10/29/us/politics/fbi-hillary-clinton-email.html",
    "votes": 4,
    "posted": "Oct 28, 2016 9:30:59 PM"
  },
  {
    "id": "12819797",
    "timestamp": "Oct 28, 2016 9:50:10 PM",
    "topic": "Stocks tank on news that the FBI is reopening its investigation into Clinton\u0027s",
    "url": "http://www.businessinsider.com/stocks-after-fbi-reopens-clinton-emails-investigation-2016-10",
    "votes": 4,
    "posted": "Oct 28, 2016 9:29:36 PM"
  },
  {
    "id": "12819770",
    "timestamp": "Oct 29, 2016 8:51:04 AM",
    "topic": "Million Dollar Shack: Trapped in Silicon Valley\u0027s Housing Bubble",
    "url": "https://www.youtube.com/watch?v\u003dSBjXUBMkkE8",
    "votes": 3,
    "posted": "Oct 28, 2016 9:26:45 PM"
  },
  {
    "id": "12819706",
    "timestamp": "Oct 30, 2016 4:42:55 AM",
    "topic": "Ask HN: How to go from zero knowledge to employable as a junior developer?",
    "votes": 4,
    "posted": "Oct 28, 2016 9:18:51 PM"
  },
  {
    "id": "12819672",
    "timestamp": "Oct 28, 2016 9:50:10 PM",
    "topic": "Today a greater percentage of Dutch people speak English than Canadians",
    "url": "https://en.wikipedia.org/wiki/List_of_countries_by_English-speaking_population",
    "votes": 5,
    "posted": "Oct 28, 2016 9:15:55 PM"
  },
  {
    "id": "12819640",
    "timestamp": "Oct 28, 2016 9:20:07 PM",
    "topic": "Technique reveals the basis for machine-learning systems\u0027 decisions",
    "url": "http://sciencebulletin.org/archives/7082.html",
    "votes": 3,
    "posted": "Oct 28, 2016 9:12:36 PM"
  },
  {
    "id": "12819595",
    "timestamp": "Oct 28, 2016 9:20:06 PM",
    "topic": "Secret Management with Vault",
    "url": "http://chairnerd.seatgeek.com/secret-management-with-vault/",
    "votes": 4,
    "posted": "Oct 28, 2016 9:07:27 PM"
  },
  {
    "id": "12819593",
    "timestamp": "Oct 28, 2016 9:50:10 PM",
    "topic": "Of course smart homes are targets for hackers",
    "url": "https://mjg59.dreamwidth.org/45483.html",
    "votes": 6,
    "posted": "Oct 28, 2016 9:07:24 PM"
  },
  {
    "id": "12819582",
    "timestamp": "Oct 28, 2016 9:20:07 PM",
    "topic": "Apple hikes prices in UK by 20pc in response to post-Brexit",
    "url": "http://www.telegraph.co.uk/technology/2016/10/28/apple-hikes-macbook-and-imac-prices-by-20pc-in-response-to-brexi/",
    "votes": 3,
    "posted": "Oct 28, 2016 9:06:11 PM"
  },
  {
    "id": "12819542",
    "timestamp": "Oct 28, 2016 9:20:07 PM",
    "topic": "A very valuable vulnerability",
    "url": "http://www.daemonology.net/blog/2016-10-28-A-very-valuable-vulnerability.html",
    "votes": 4,
    "posted": "Oct 28, 2016 9:03:11 PM"
  },
  {
    "id": "12819504",
    "timestamp": "Oct 28, 2016 9:30:08 PM",
    "topic": "How did one contractor steal 50TB of NSA data? Easily, say former spies",
    "url": "http://www.zdnet.com/article/how-did-one-contractor-steal-50tb-of-nsa-data-easily-say-former-spies/",
    "votes": 4,
    "posted": "Oct 28, 2016 8:59:32 PM"
  },
  {
    "id": "12819482",
    "timestamp": "Oct 28, 2016 9:10:06 PM",
    "topic": "Ask HN: Any other blind devs interested in working on dev tools for the blind?",
    "votes": 4,
    "posted": "Oct 28, 2016 8:57:16 PM"
  },
  {
    "id": "12819434",
    "timestamp": "Oct 28, 2016 9:10:05 PM",
    "topic": "Looking Back on the Largest DDoS in History",
    "url": "http://blog.statuspage.io/looking-back-on-the-largest-ddos-in-history",
    "votes": 4,
    "posted": "Oct 28, 2016 8:50:54 PM"
  },
  {
    "id": "12819358",
    "timestamp": "Oct 28, 2016 9:50:10 PM",
    "topic": "Kickstarter Campaign to Reissue Newton\u0027s Principia Gains Momentum",
    "url": "http://physicsbuzz.physicscentral.com/2016/10/everything-old-is-new-kickstarter.html",
    "votes": 3,
    "posted": "Oct 28, 2016 8:43:55 PM"
  },
  {
    "id": "12819322",
    "timestamp": "Oct 28, 2016 8:50:03 PM",
    "topic": "Imzy, a social network based on kindness, opens its doors to the public",
    "url": "http://www.theverge.com/2016/10/27/13416716/imzy-social-network-ex-reddit-launch-funding",
    "votes": 5,
    "posted": "Oct 28, 2016 8:40:24 PM"
  },
  {
    "id": "12819288",
    "timestamp": "Oct 28, 2016 8:50:03 PM",
    "topic": "George Hotz, Comma AI shuts down driverless car project",
    "url": "http://www.businessinsider.com/george-hotz-comma-ai-shuts-down-driverless-car-project-2016-10",
    "votes": 3,
    "posted": "Oct 28, 2016 8:36:23 PM"
  },
  {
    "id": "12819244",
    "timestamp": "Oct 28, 2016 8:50:03 PM",
    "topic": "Ex-Palantir Employees Are Struggling to Sell Their Shares",
    "url": "https://www.buzzfeed.com/williamalden/ex-palantir-employees-are-struggling-to-sell-their-shares",
    "votes": 4,
    "posted": "Oct 28, 2016 8:32:25 PM"
  },
  {
    "id": "12819195",
    "timestamp": "Oct 29, 2016 12:30:26 AM",
    "topic": "Elasticsearch 5.0.0 released",
    "url": "https://www.elastic.co/blog/elasticsearch-5-0-0-released",
    "votes": 4,
    "posted": "Oct 28, 2016 8:27:13 PM"
  },
  {
    "id": "12819190",
    "timestamp": "Oct 28, 2016 8:50:03 PM",
    "topic": "The End of Public Transit?",
    "url": "https://www.theatlantic.com/business/archive/2016/10/public-transportation-uber-chariot/505658/?single_page\u003dtrue",
    "votes": 5,
    "posted": "Oct 28, 2016 8:26:45 PM"
  },
  {
    "id": "12819156",
    "timestamp": "Oct 28, 2016 9:30:08 PM",
    "topic": "Datadog introduces anomaly detection",
    "url": "https://www.datadoghq.com/blog/introducing-anomaly-detection-datadog",
    "votes": 7,
    "posted": "Oct 28, 2016 8:23:51 PM"
  },
  {
    "id": "12819134",
    "timestamp": "Oct 28, 2016 8:50:02 PM",
    "topic": "Allan J. Lichtman\u0027s election prediction system",
    "url": "https://www.washingtonpost.com/news/the-fix/wp/2016/10/28/professor-whos-predicted-30-years-of-presidential-elections-correctly-is-doubling-down-on-a-trump-win/",
    "votes": 3,
    "posted": "Oct 28, 2016 8:22:30 PM"
  },
  {
    "id": "12819113",
    "timestamp": "Oct 28, 2016 8:50:02 PM",
    "topic": "Let researchers try new paths",
    "url": "http://www.nature.com/news/let-researchers-try-new-paths-1.20857",
    "votes": 3,
    "posted": "Oct 28, 2016 8:20:49 PM"
  },
  {
    "id": "12819074",
    "timestamp": "Oct 28, 2016 8:50:02 PM",
    "topic": "DDoS Letter to Chairman Wheeler",
    "url": "https://www.scribd.com/document/328854049/DDoS-Letter-to-Chairman-Wheeler#download",
    "votes": 5,
    "posted": "Oct 28, 2016 8:18:02 PM"
  },
  {
    "id": "12819049",
    "timestamp": "Oct 28, 2016 8:50:03 PM",
    "topic": "Ask HN: Help me pick out a weekend project.",
    "votes": 3,
    "posted": "Oct 28, 2016 8:15:59 PM"
  },
  {
    "id": "12819043",
    "timestamp": "Oct 28, 2016 8:40:00 PM",
    "topic": "Audio Emerges of Hillary Clinton Proposing Rigging Palestine Election",
    "url": "http://observer.com/2016/10/2006-audio-emerges-of-hillary-clinton-proposing-rigging-palestine-election/",
    "votes": 4,
    "posted": "Oct 28, 2016 8:15:37 PM"
  },
  {
    "id": "12818954",
    "timestamp": "Oct 28, 2016 8:50:03 PM",
    "topic": "About Leadership",
    "url": "http://blog.dilbert.com/post/152427079266/about-leadership",
    "votes": 3,
    "posted": "Oct 28, 2016 8:08:42 PM"
  },
  {
    "id": "12818912",
    "timestamp": "Oct 28, 2016 8:50:04 PM",
    "topic": "MacBook Pro vs. Surface Book: How 2016\u0027s Models Compare",
    "url": "http://www.laptopmag.com/articles/2016-macbook-pro-vs-surface-book",
    "votes": 3,
    "posted": "Oct 28, 2016 8:05:35 PM"
  },
  {
    "id": "12818905",
    "timestamp": "Oct 28, 2016 8:50:02 PM",
    "topic": "Newly Redesigned Boston.gov Just Went Open Source",
    "url": "http://www.routefifty.com/2016/10/boston-open-source-website/132720/?oref\u003dRouteFiftyTCO",
    "votes": 3,
    "posted": "Oct 28, 2016 8:05:08 PM"
  },
  {
    "id": "12818869",
    "timestamp": "Oct 28, 2016 8:50:04 PM",
    "topic": "Singapore’s Lee Hsien Loong on the U.S. Election, Free Trade",
    "url": "http://time.com/4545407/lee-hsien-loong-singapore-globalization/",
    "votes": 3,
    "posted": "Oct 28, 2016 8:02:05 PM"
  },
  {
    "id": "12818756",
    "timestamp": "Oct 28, 2016 8:29:59 PM",
    "topic": "New MacBook Pros Max Out at 16GB RAM Due to Battery Life Concerns",
    "url": "http://www.macrumors.com/2016/10/28/new-macbook-pros-no-32gb-ram-battery-life/",
    "votes": 4,
    "posted": "Oct 28, 2016 7:54:07 PM"
  },
  {
    "id": "12818732",
    "timestamp": "Oct 28, 2016 8:50:02 PM",
    "topic": "Apple Sucks Now, Here’s a ThinkPad Buyer’s Guide",
    "url": "http://hackaday.com/2016/10/28/apple-sucks-now-heres-a-thinkpad-buyers-guide/",
    "votes": 5,
    "posted": "Oct 28, 2016 7:52:19 PM"
  },
  {
    "id": "12818617",
    "timestamp": "Oct 28, 2016 7:59:57 PM",
    "topic": "Incident Report: Inadvertent Private Repository Disclosure",
    "url": "https://github.com/blog/2273-incident-report-inadvertent-private-repository-disclosure",
    "votes": 9,
    "posted": "Oct 28, 2016 7:42:38 PM"
  },
  {
    "id": "12818537",
    "timestamp": "Oct 28, 2016 8:40:00 PM",
    "topic": "Continuous MySQL Backup Validation at Facebook",
    "url": "https://code.facebook.com/posts/1007323976059780/continuous-mysql-backup-validation-restoring-backups",
    "votes": 5,
    "posted": "Oct 28, 2016 7:35:31 PM"
  },
  {
    "id": "12818528",
    "timestamp": "Oct 28, 2016 7:49:53 PM",
    "topic": "FBI reopens investigation of emails from Clinton’s private server",
    "url": "https://www.washingtonpost.com/politics/fbi-to-conduct-new-investigation-of-emails-from-clintons-private-server/2016/10/28/0b1e9468-9d31-11e6-9980-50913d68eacb_story.html?hpid\u003dhp_no-name_no-name%3Apage%2Fbreaking-news-bar\u0026tid\u003da_breakingnews",
    "votes": 18,
    "posted": "Oct 28, 2016 7:35:02 PM"
  },
  {
    "id": "12818487",
    "timestamp": "Oct 28, 2016 7:49:53 PM",
    "topic": "FBI reopens investigation into Clinton email use",
    "url": "http://www.foxnews.com/politics/2016/10/28/fbi-reopens-investigation-into-clinton-email-use.html",
    "votes": 4,
    "posted": "Oct 28, 2016 7:30:44 PM"
  },
  {
    "id": "12818459",
    "timestamp": "Oct 28, 2016 7:39:51 PM",
    "topic": "FBI Is Re-Opening Clinton E-Mail Investigation, Chaffetz Says",
    "url": "https://www.bloomberg.com/news/articles/2016-10-28/fbi-is-re-opening-clinton-e-mail-investigation-chaffetz-says",
    "votes": 8,
    "posted": "Oct 28, 2016 7:27:22 PM"
  },
  {
    "id": "12818392",
    "timestamp": "Oct 28, 2016 8:09:58 PM",
    "topic": "Machine Learning 101: An Intro to Utilizing Decision Trees",
    "url": "http://fr.talend.com/blog/2016/09/29/machine-learning-made-easy-with-talend-%E2%80%93-decision-trees",
    "votes": 3,
    "posted": "Oct 28, 2016 7:22:30 PM"
  },
  {
    "id": "12818103",
    "timestamp": "Oct 29, 2016 1:50:33 AM",
    "topic": "Hacker Tweets ‘No Man’s Sky Was a Mistake’ from Hello Games Account",
    "url": "http://www.theverge.com/2016/10/28/13453260/no-mans-sky-hello-games-hacked",
    "votes": 3,
    "posted": "Oct 28, 2016 6:58:12 PM"
  },
  {
    "id": "12818002",
    "timestamp": "Oct 28, 2016 7:39:51 PM",
    "topic": "Facebook lets advertisers exclude users by race",
    "url": "http://arstechnica.com/information-technology/2016/10/facebook-lets-advertisers-exclude-users-by-race/",
    "votes": 3,
    "posted": "Oct 28, 2016 6:49:55 PM"
  },
  {
    "id": "12817736",
    "timestamp": "Oct 28, 2016 6:59:48 PM",
    "topic": "Apple\u0027s Fastest Growing Product Category",
    "url": "https://twitter.com/dbreunig/status/792034409788518401",
    "votes": 8,
    "posted": "Oct 28, 2016 6:29:11 PM"
  },
  {
    "id": "12817722",
    "timestamp": "Oct 28, 2016 6:59:48 PM",
    "topic": "Zcash begins",
    "url": "https://z.cash/blog/zcash-begins.html",
    "votes": 16,
    "posted": "Oct 28, 2016 6:27:39 PM"
  },
  {
    "id": "12817550",
    "timestamp": "Oct 28, 2016 6:49:47 PM",
    "topic": "Y Combinator Interview Advice and Live Practice Sessions",
    "url": "https://medium.com/@kwindla/y-combinator-interview-advice-live-practice-sessions-87886a3cbf8a",
    "votes": 5,
    "posted": "Oct 28, 2016 6:12:50 PM"
  },
  {
    "id": "12817537",
    "timestamp": "Oct 28, 2016 6:19:44 PM",
    "topic": "Customer Success Lead",
    "url": "https://angel.co/l/V9Nkp",
    "votes": 1,
    "posted": "Oct 28, 2016 6:12:25 PM"
  },
  {
    "id": "12817468",
    "timestamp": "Oct 28, 2016 6:19:44 PM",
    "topic": "Eve: Programming designed for humans",
    "url": "http://programming.witheve.com/",
    "votes": 9,
    "posted": "Oct 28, 2016 6:05:32 PM"
  },
  {
    "id": "12817426",
    "timestamp": "Oct 28, 2016 6:19:44 PM",
    "topic": "Ask HN: What is your goto resource for learning about big data, ML, AI etc?",
    "votes": 7,
    "posted": "Oct 28, 2016 6:01:45 PM"
  },
  {
    "id": "12817404",
    "timestamp": "Oct 28, 2016 6:49:47 PM",
    "topic": "Microsoft, I forgive you",
    "url": "https://m.signalvnoise.com/microsoft-i-forgive-you-2fb6d6061a2c",
    "votes": 3,
    "posted": "Oct 28, 2016 6:00:17 PM"
  },
  {
    "id": "12817332",
    "timestamp": "Oct 28, 2016 6:19:45 PM",
    "topic": "Apple just told the world it has no idea who the Mac is for",
    "url": "https://medium.com/charged-tech/apple-just-told-the-world-it-has-no-idea-who-the-mac-is-for-722a2438389b#.3mb5olie9",
    "votes": 9,
    "posted": "Oct 28, 2016 5:54:33 PM"
  },
  {
    "id": "12817204",
    "timestamp": "Oct 28, 2016 7:19:50 PM",
    "topic": "Ask HN: T-shirt gift idea for a friendly sysadmin?",
    "votes": 3,
    "posted": "Oct 28, 2016 5:44:58 PM"
  },
  {
    "id": "12816618",
    "timestamp": "Oct 28, 2016 5:29:41 PM",
    "topic": "Chimpanzee genomic diversity reveals ancient admixture with bonobos",
    "url": "http://science.sciencemag.org/content/354/6311/477.full",
    "votes": 3,
    "posted": "Oct 28, 2016 5:09:22 PM"
  },
  {
    "id": "12816474",
    "timestamp": "Oct 28, 2016 5:09:39 PM",
    "topic": "New MacBook Pro Is Not a Laptop for Developers Anymore",
    "url": "https://blog.devteam.space/new-macbook-pro-is-not-a-laptop-for-developers-anymore-d0d4b1b8b7de#.tpt1vssco",
    "votes": 54,
    "posted": "Oct 28, 2016 4:54:26 PM"
  },
  {
    "id": "12816346",
    "timestamp": "Oct 28, 2016 5:09:39 PM",
    "topic": "No GPS, no problem: Next-generation navigation",
    "url": "http://robohub.org/no-gps-no-problem-next-generation-navigation/",
    "votes": 4,
    "posted": "Oct 28, 2016 4:41:55 PM"
  },
  {
    "id": "12816321",
    "timestamp": "Oct 28, 2016 4:59:38 PM",
    "topic": "George Hotz cancels Comma AI",
    "url": "https://mobile.twitter.com/comma_ai/status/791958413345382400",
    "votes": 7,
    "posted": "Oct 28, 2016 4:39:38 PM"
  },
  {
    "id": "12816193",
    "timestamp": "Oct 28, 2016 10:30:14 PM",
    "topic": "Google Brain creates its own encryption methodology [paper]",
    "url": "https://arxiv.org/abs/1610.06918",
    "votes": 3,
    "posted": "Oct 28, 2016 4:30:02 PM"
  },
  {
    "id": "12815948",
    "timestamp": "Oct 28, 2016 4:49:37 PM",
    "topic": "George Hotz cancels his Tesla Autopilot-like ‘comma one’",
    "url": "https://electrek.co/2016/10/28/george-hotz-cancels-his-tesla-autopilot-like-comma-one-after-request-from-nhtsa/",
    "votes": 6,
    "posted": "Oct 28, 2016 4:06:53 PM"
  },
  {
    "id": "12815920",
    "timestamp": "Oct 28, 2016 4:29:35 PM",
    "topic": "HP: the pros are moving from Mac to Z",
    "url": "http://www8.hp.com/us/en/campaigns/workstations/mac-to-z.html",
    "votes": 16,
    "posted": "Oct 28, 2016 4:04:36 PM"
  },
  {
    "id": "12815809",
    "timestamp": "Oct 28, 2016 4:19:34 PM",
    "topic": "Swiss Rail (SBB) to Sell Bitcoins via Its Ticket Machines",
    "url": "http://www.reuters.com/article/us-swiss-rail-bitcoin-idUSKCN12S1KR",
    "votes": 7,
    "posted": "Oct 28, 2016 3:56:22 PM"
  },
  {
    "id": "12815526",
    "timestamp": "Oct 28, 2016 5:29:40 PM",
    "topic": "Wall Street\u0027s Frantic Push to Hire Coders",
    "url": "http://www.bloomberg.com/news/articles/2016-10-28/wall-street-coders-wanted-elite-college-degrees-not-necessary",
    "votes": 4,
    "posted": "Oct 28, 2016 3:27:20 PM"
  },
  {
    "id": "12815514",
    "timestamp": "Oct 29, 2016 2:41:31 PM",
    "topic": "Why It Took So Long to Invent the Wheel (2012)",
    "url": "http://www.scientificamerican.com/article/why-it-took-so-long-to-inv/",
    "votes": 3,
    "posted": "Oct 28, 2016 3:26:18 PM"
  },
  {
    "id": "12815455",
    "timestamp": "Oct 28, 2016 3:39:29 PM",
    "topic": "Uber loses right to classify drivers as self-employed in UK",
    "url": "https://www.theguardian.com/technology/2016/oct/28/uber-uk-tribunal-self-employed-status",
    "votes": 4,
    "posted": "Oct 28, 2016 3:21:41 PM"
  },
  {
    "id": "12815441",
    "timestamp": "Oct 28, 2016 3:29:27 PM",
    "topic": "Uber drivers win employee rights case",
    "url": "http://www.bbc.co.uk/news/business-37802386",
    "votes": 7,
    "posted": "Oct 28, 2016 3:20:25 PM"
  },
  {
    "id": "12815425",
    "timestamp": "Oct 28, 2016 5:39:41 PM",
    "topic": "Uber UK drivers win employee rights case",
    "url": "http://www.bbc.com/news/business-37802386",
    "votes": 4,
    "posted": "Oct 28, 2016 3:18:33 PM"
  },
  {
    "id": "12815331",
    "timestamp": "Oct 28, 2016 3:19:26 PM",
    "topic": "MagicLeap opens new office in Finland",
    "url": "https://techcrunch.com/2016/10/28/magic-leap-goes-to-finland-in-pursuit-of-nordic-vr-and-ar-talent/?ncid\u003drss",
    "votes": 3,
    "posted": "Oct 28, 2016 3:06:41 PM"
  },
  {
    "id": "12815231",
    "timestamp": "Oct 28, 2016 3:19:26 PM",
    "topic": "Google AI invents its own cryptographic algorithm; no one knows how it works",
    "url": "http://arstechnica.co.uk/information-technology/2016/10/google-ai-neural-network-cryptography/",
    "votes": 20,
    "posted": "Oct 28, 2016 2:54:43 PM"
  },
  {
    "id": "12815183",
    "timestamp": "Oct 28, 2016 4:19:34 PM",
    "topic": "Ask HN: What laptop should I get instead of a Macbook Pro?",
    "votes": 9,
    "posted": "Oct 28, 2016 2:47:54 PM"
  },
  {
    "id": "12815080",
    "timestamp": "Oct 28, 2016 6:39:46 PM",
    "topic": "Facebook Lets Advertisers Exclude Users by Race",
    "url": "https://www.propublica.org/article/facebook-lets-advertisers-exclude-users-by-race",
    "votes": 8,
    "posted": "Oct 28, 2016 2:31:05 PM"
  },
  {
    "id": "12815068",
    "timestamp": "Oct 28, 2016 4:39:36 PM",
    "topic": "Bird Audio Detection: baseline tests – and the problem of generalisation",
    "url": "http://machine-listening.eecs.qmul.ac.uk/2016/10/bird-audio-detection-baseline-generalisation/",
    "votes": 3,
    "posted": "Oct 28, 2016 2:28:28 PM"
  },
  {
    "id": "12814997",
    "timestamp": "Oct 28, 2016 2:49:24 PM",
    "topic": "Apple Increases Prices of Macs in U.K. By 20 Percent",
    "url": "https://www.bloomberg.com/news/articles/2016-10-28/apple-increases-prices-of-macs-in-u-k-by-20-percent",
    "votes": 34,
    "posted": "Oct 28, 2016 2:13:18 PM"
  },
  {
    "id": "12814975",
    "timestamp": "Oct 28, 2016 2:19:22 PM",
    "topic": "Nissan got a sweetheart deal. Under hard Brexit, everyone will want one",
    "url": "https://www.theguardian.com/commentisfree/2016/oct/28/nissan-deal-hard-brexit-britain-trade-europe",
    "votes": 5,
    "posted": "Oct 28, 2016 2:09:17 PM"
  },
  {
    "id": "12814848",
    "timestamp": "Oct 28, 2016 7:39:52 PM",
    "topic": "Show HN: WSGI pure Python non-blocking HTTP2 server",
    "url": "https://github.com/hivesolutions/netius",
    "votes": 5,
    "posted": "Oct 28, 2016 1:39:31 PM"
  },
  {
    "id": "12814742",
    "timestamp": "Oct 28, 2016 1:49:19 PM",
    "topic": "Show HN: Sorting 50K Array, HTML5 Web Worker Demo",
    "url": "http://afshinm.github.io/50k/",
    "votes": 4,
    "posted": "Oct 28, 2016 1:12:50 PM"
  },
  {
    "id": "12814723",
    "timestamp": "Oct 28, 2016 1:09:16 PM",
    "topic": "Segment (YC S11) Is Hiring a Head of Solutions Enginering",
    "url": "https://boards.greenhouse.io/segment/jobs/463624",
    "votes": 1,
    "posted": "Oct 28, 2016 1:07:43 PM"
  },
  {
    "id": "12814676",
    "timestamp": "Oct 28, 2016 2:29:23 PM",
    "topic": "Code dependencies are the devil",
    "url": "https://medium.freecodecamp.com/code-dependencies-are-the-devil-35ed28b556d#.61nr09qp0",
    "votes": 3,
    "posted": "Oct 28, 2016 12:57:31 PM"
  },
  {
    "id": "12814655",
    "timestamp": "Oct 28, 2016 2:29:22 PM",
    "topic": "Macbook Pro Touch Bar runs watchOS",
    "url": "https://twitter.com/stroughtonsmith/status/791872723681239040",
    "votes": 4,
    "posted": "Oct 28, 2016 12:53:19 PM"
  },
  {
    "id": "12814590",
    "timestamp": "Oct 28, 2016 1:29:18 PM",
    "topic": "They Live and the secret history of the Mozilla logo",
    "url": "https://webcache.googleusercontent.com/search?q\u003dcache:_OntGpfw72kJ:https://www.jwz.org/blog/2016/10/they-live-and-the-secret-history-of-the-mozilla-logo/",
    "votes": 3,
    "posted": "Oct 28, 2016 12:36:08 PM"
  },
  {
    "id": "12814587",
    "timestamp": "Oct 28, 2016 1:19:17 PM",
    "topic": "IPv6 Performance – Revisited",
    "url": "https://ripe73.ripe.net/archives/video/1539/",
    "votes": 7,
    "posted": "Oct 28, 2016 12:35:56 PM"
  },
  {
    "id": "12814578",
    "timestamp": "Oct 28, 2016 1:49:19 PM",
    "topic": "Show HN: Bashcached – memcached built on bash and ncat with",
    "url": "https://github.com/MakeNowJust/bashcached",
    "votes": 3,
    "posted": "Oct 28, 2016 12:33:39 PM"
  },
  {
    "id": "12814523",
    "timestamp": "Oct 28, 2016 1:09:16 PM",
    "topic": "A Quantum Leap for the Web",
    "url": "https://medium.com/mozilla-tech/a-quantum-leap-for-the-web-a3b7174b3c12#.wgcqrdq94",
    "votes": 5,
    "posted": "Oct 28, 2016 12:18:36 PM"
  },
  {
    "id": "12814470",
    "timestamp": "Oct 29, 2016 12:20:25 AM",
    "topic": "Lenovo releases a BiOS update to make Yoga 900-13ISK2 compatible with Linux",
    "url": "http://support.lenovo.com/us/en/products/Laptops-and-netbooks/Yoga-Series/yoga-900-13isk2/downloads/DS119354",
    "votes": 6,
    "posted": "Oct 28, 2016 12:06:09 PM"
  },
  {
    "id": "12814467",
    "timestamp": "Oct 28, 2016 4:39:36 PM",
    "topic": "AlphaGo under a Magnifying Glass",
    "url": "http://deeplearningskysthelimit.blogspot.com/2016/04/part-2-alphago-under-magnifying-glass.html",
    "votes": 3,
    "posted": "Oct 28, 2016 12:05:32 PM"
  },
  {
    "id": "12814397",
    "timestamp": "Oct 28, 2016 12:49:14 PM",
    "topic": "Geoff Huston – A Speculation on DNS DDOS",
    "url": "https://ripe73.ripe.net/archives/video/1536/",
    "votes": 5,
    "posted": "Oct 28, 2016 11:49:43 AM"
  },
  {
    "id": "12814388",
    "timestamp": "Oct 28, 2016 3:19:27 PM",
    "topic": "India\u0027s Billion Digital Identities",
    "url": "http://thefinanser.com/2016/09/indias-billion-people-digital-identities.html/",
    "votes": 5,
    "posted": "Oct 28, 2016 11:46:56 AM"
  },
  {
    "id": "12814376",
    "timestamp": "Oct 28, 2016 12:49:14 PM",
    "topic": "Ask HN: How much have you made from your side project in 2016 and what is it?",
    "votes": 7,
    "posted": "Oct 28, 2016 11:44:46 AM"
  },
  {
    "id": "12814127",
    "timestamp": "Oct 28, 2016 12:49:14 PM",
    "topic": "How to Get Fired Using Switch Statements and Statement Expressions",
    "url": "http://blog.robertelder.org/switch-statements-statement-expressions/",
    "votes": 3,
    "posted": "Oct 28, 2016 10:51:07 AM"
  },
  {
    "id": "12814124",
    "timestamp": "Oct 28, 2016 12:29:12 PM",
    "topic": "Ask HN: Is Bash for Windows good enough to replace a Linux/Mac terminal?",
    "votes": 4,
    "posted": "Oct 28, 2016 10:50:57 AM"
  },
  {
    "id": "12813982",
    "timestamp": "Oct 28, 2016 12:49:14 PM",
    "topic": "10 pieces of advice to beginner data scientists",
    "url": "https://shapescience.xyz/blog/10-pieces-of-advice-to-beginner-data-scientists/",
    "votes": 5,
    "posted": "Oct 28, 2016 10:21:44 AM"
  },
  {
    "id": "12813922",
    "timestamp": "Oct 28, 2016 12:39:13 PM",
    "topic": "Web devs want to make the Internet of Shit worse. Much worse",
    "url": "http://www.theregister.co.uk/2016/10/28/web_devs_want_to_make_the_internet_of_st_worse/",
    "votes": 4,
    "posted": "Oct 28, 2016 10:07:11 AM"
  },
  {
    "id": "12813874",
    "timestamp": "Oct 28, 2016 10:19:03 AM",
    "topic": "Apple: #esc { margin-left: -30px }",
    "url": "https://twitter.com/rauchg/status/791694932587184128",
    "votes": 11,
    "posted": "Oct 28, 2016 9:55:21 AM"
  },
  {
    "id": "12813653",
    "timestamp": "Oct 28, 2016 12:39:13 PM",
    "topic": "Angular2 core team will not provide ES6 docs",
    "url": "https://github.com/angular/angular/issues/7600#issuecomment-196482829",
    "votes": 4,
    "posted": "Oct 28, 2016 8:53:54 AM"
  },
  {
    "id": "12813633",
    "timestamp": "Oct 28, 2016 10:19:02 AM",
    "topic": "Pre-Safe Sound: Playing ‘pink noise’ in the split second before impact (2015)",
    "url": "https://www.mercedes-benz.com/en/mercedes-benz/next/connectivity/pre-safe-sound-playing-pink-noise-in-the-split-second-before-impact/",
    "votes": 8,
    "posted": "Oct 28, 2016 8:46:27 AM"
  },
  {
    "id": "12813600",
    "timestamp": "Oct 28, 2016 8:38:54 AM",
    "topic": "Protect 20M K-12 students\u0027 data as a security engineer at Clever (YC S12)",
    "url": "https://clever.com/about/jobs#software-engineer-security",
    "votes": 1,
    "posted": "Oct 28, 2016 8:35:19 AM"
  },
  {
    "id": "12813588",
    "timestamp": "Oct 28, 2016 10:19:02 AM",
    "topic": "Scaleway Global Expansion Starts in Amsterdam",
    "url": "https://blog.online.net/2016/10/27/scaleway-global-expansion-starts-in-amsterdam/",
    "votes": 11,
    "posted": "Oct 28, 2016 8:31:32 AM"
  },
  {
    "id": "12813280",
    "timestamp": "Oct 30, 2016 6:03:59 PM",
    "topic": "Kierkegaard’s Rebellion",
    "url": "http://www.nybooks.com/articles/2016/11/10/kierkegaards-rebellion/",
    "votes": 3,
    "posted": "Oct 28, 2016 7:13:26 AM"
  },
  {
    "id": "12813069",
    "timestamp": "Oct 28, 2016 6:38:45 AM",
    "topic": "Engines of Evidence – A Conversation with Judea Pearl",
    "url": "https://www.edge.org/conversation/judea_pearl-engines-of-evidence",
    "votes": 3,
    "posted": "Oct 28, 2016 6:22:01 AM"
  },
  {
    "id": "12812815",
    "timestamp": "Oct 28, 2016 3:09:25 PM",
    "topic": "Remarks to Software Forum Dinner Meeting (1997)",
    "url": "http://www.klhess.com/sef_spch.html",
    "votes": 9,
    "posted": "Oct 28, 2016 5:35:12 AM"
  },
  {
    "id": "12812730",
    "timestamp": "Oct 28, 2016 5:28:39 AM",
    "topic": "Soylent halts sales of its powder as customers keep getting sick",
    "url": "http://www.latimes.com/business/technology/la-fi-tn-soylent-recall-20161027-story.html",
    "votes": 11,
    "posted": "Oct 28, 2016 5:11:28 AM"
  },
  {
    "id": "12812659",
    "timestamp": "Oct 28, 2016 4:58:37 AM",
    "topic": "Apptimize hiring in sales development",
    "url": "https://jobs.lever.co/apptimize/b47072d7-a69e-44db-9f44-015f29ebb081",
    "votes": 1,
    "posted": "Oct 28, 2016 4:53:43 AM"
  },
  {
    "id": "12812373",
    "timestamp": "Oct 28, 2016 4:08:33 AM",
    "topic": "The Reddit front page is entirely /r/the_donald posts",
    "votes": 20,
    "posted": "Oct 28, 2016 3:56:58 AM"
  },
  {
    "id": "12812297",
    "timestamp": "Oct 28, 2016 4:38:35 AM",
    "topic": "For crying out loud, Apple, just build a touchscreen Mac already",
    "url": "http://www.businessinsider.com/apple-macbook-pro-touch-bar-makes-no-sense-2016-10",
    "votes": 3,
    "posted": "Oct 28, 2016 3:42:10 AM"
  },
  {
    "id": "12812181",
    "timestamp": "Oct 28, 2016 6:18:44 AM",
    "topic": "The Red Cross Blood Service: Australia\u0027s largest ever leak of personal data",
    "url": "https://www.troyhunt.com/the-red-cross-blood-service-australias-largest-ever-leak-of-personal-data/",
    "votes": 5,
    "posted": "Oct 28, 2016 3:22:44 AM"
  },
  {
    "id": "12812126",
    "timestamp": "Oct 28, 2016 3:38:30 AM",
    "topic": "Tiny beads can deliver oxygen straight to the blood stream",
    "url": "http://arstechnica.com/science/2016/10/tiny-beads-can-deliver-oxygen-straight-to-the-blood-stream/",
    "votes": 3,
    "posted": "Oct 28, 2016 3:16:54 AM"
  },
  {
    "id": "12812124",
    "timestamp": "Oct 28, 2016 3:28:29 AM",
    "topic": "MacOS: Strolling into Ring-0 via I/O Kit Drivers",
    "url": "https://speakerdeck.com/patrickwardle/o-kit-drivers",
    "votes": 3,
    "posted": "Oct 28, 2016 3:16:49 AM"
  },
  {
    "id": "12812095",
    "timestamp": "Oct 28, 2016 3:48:31 AM",
    "topic": "Why Do Americans Stink at Math?",
    "url": "http://www.nytimes.com/2014/07/27/magazine/why-do-americans-stink-at-math.html",
    "votes": 3,
    "posted": "Oct 28, 2016 3:13:19 AM"
  },
  {
    "id": "12811946",
    "timestamp": "Oct 28, 2016 3:48:31 AM",
    "topic": "These Are the Charts That Scare Wall Street",
    "url": "http://www.bloomberg.com/news/articles/2016-10-27/these-are-the-charts-that-scare-wall-street?cmpid\u003dBBD102716_BIZ",
    "votes": 5,
    "posted": "Oct 28, 2016 2:57:41 AM"
  },
  {
    "id": "12811929",
    "timestamp": "Oct 28, 2016 4:38:35 AM",
    "topic": "Why didn\u0027t Apple use Lightening vs. USB 3.0-C on iPhone 7?",
    "votes": 4,
    "posted": "Oct 28, 2016 2:55:41 AM"
  },
  {
    "id": "12811805",
    "timestamp": "Oct 29, 2016 7:21:58 PM",
    "topic": "Show HN: Geochat – You are your city. Speak to the world",
    "url": "https://geochat.hackclub.com/",
    "votes": 17,
    "posted": "Oct 28, 2016 2:37:33 AM"
  },
  {
    "id": "12811788",
    "timestamp": "Oct 28, 2016 2:48:26 AM",
    "topic": "Apple’s new MacBook Pro kills off most of the ports you probably need",
    "url": "https://techcrunch.com/2016/10/27/apples-new-macbook-pro-just-killed-off-most-of-the-ports-you-probably-need/",
    "votes": 12,
    "posted": "Oct 28, 2016 2:33:45 AM"
  },
  {
    "id": "12811737",
    "timestamp": "Oct 28, 2016 2:38:25 AM",
    "topic": "Developing for Apple Touch Bar",
    "url": "https://developer.apple.com/reference/appkit/nstouchbar?language\u003dobjc",
    "votes": 13,
    "posted": "Oct 28, 2016 2:22:54 AM"
  },
  {
    "id": "12811728",
    "timestamp": "Oct 28, 2016 2:48:26 AM",
    "topic": "Christ\u0027s Burial Place Exposed for First Time in Centuries",
    "url": "http://news.nationalgeographic.com/2016/10/jesus-tomb-opened-church-holy-sepulchre/",
    "votes": 3,
    "posted": "Oct 28, 2016 2:21:37 AM"
  },
  {
    "id": "12811708",
    "timestamp": "Oct 28, 2016 2:38:25 AM",
    "topic": "The art of UX sketching and paper prototyping",
    "url": "https://uxplanet.org/the-art-of-ux-sketching-and-paper-prototyping-5dae5a1efc7d",
    "votes": 5,
    "posted": "Oct 28, 2016 2:17:25 AM"
  },
  {
    "id": "12811689",
    "timestamp": "Oct 28, 2016 2:28:24 AM",
    "topic": "Ask HN: Is Apple nuts for discontinuing 11“ MBA?",
    "votes": 3,
    "posted": "Oct 28, 2016 2:13:35 AM"
  },
  {
    "id": "12811685",
    "timestamp": "Oct 28, 2016 2:38:25 AM",
    "topic": "How Bullets in Westworld Work",
    "url": "https://www.reddit.com/r/westworld/comments/59h9ed/how_bullets_in_westworld_work/",
    "votes": 3,
    "posted": "Oct 28, 2016 2:13:11 AM"
  },
  {
    "id": "12811658",
    "timestamp": "Oct 28, 2016 2:28:24 AM",
    "topic": "Twitter Has an Old Media Problem. Here’s a Solution",
    "url": "http://www.nytimes.com/2016/10/27/opinion/twitter-has-an-old-media-problem-heres-a-solution.html?ref\u003dopinion",
    "votes": 3,
    "posted": "Oct 28, 2016 2:09:11 AM"
  },
  {
    "id": "12811619",
    "timestamp": "Oct 29, 2016 8:02:03 PM",
    "topic": "Turned down 18 times. Then Paul Beatty won the Booker",
    "url": "https://www.theguardian.com/books/2016/oct/26/man-booker-prize-winner-paul-beatty-the-sellout-interview",
    "votes": 4,
    "posted": "Oct 28, 2016 2:03:25 AM"
  },
  {
    "id": "12811597",
    "timestamp": "Oct 28, 2016 4:28:34 AM",
    "topic": "Facebook’s Free Basics Is an African Dictator’s Dream",
    "url": "http://foreignpolicy.com/2016/10/27/facebooks-plan-to-wire-africa-is-a-dictators-dream-come-true-free-basics-internet/",
    "votes": 3,
    "posted": "Oct 28, 2016 2:01:05 AM"
  },
  {
    "id": "12811520",
    "timestamp": "Oct 28, 2016 12:49:14 PM",
    "topic": "Ask HN: What\u0027s the point of distinguishing lambda, block and proc in Ruby?",
    "votes": 6,
    "posted": "Oct 28, 2016 1:47:52 AM"
  },
  {
    "id": "12811438",
    "timestamp": "Oct 28, 2016 1:38:20 AM",
    "topic": "Le Tote (YC S13) Is Hiring Full Stack Engineers Disrupt Fashion with Us",
    "url": "http://grnh.se/ia126p1",
    "votes": 1,
    "posted": "Oct 28, 2016 1:35:11 AM"
  },
  {
    "id": "12811397",
    "timestamp": "Oct 28, 2016 2:08:22 AM",
    "topic": "Judge confirms what many suspected: Feds hired CMU to break Tor",
    "url": "http://arstechnica.com/tech-policy/2016/02/judge-confirms-what-many-suspected-feds-hired-cmu-to-break-tor/",
    "votes": 4,
    "posted": "Oct 28, 2016 1:28:50 AM"
  },
  {
    "id": "12811071",
    "timestamp": "Oct 28, 2016 2:38:25 AM",
    "topic": "3 frameworks you can use to design your business",
    "url": "http://wedistill.com/3-frameworks-to-design-your-business/",
    "votes": 3,
    "posted": "Oct 28, 2016 12:49:11 AM"
  },
  {
    "id": "12811043",
    "timestamp": "Oct 28, 2016 1:28:19 AM",
    "topic": "Ask HN: What to do about key supplier TRIPLING their prices at short notice?",
    "votes": 5,
    "posted": "Oct 28, 2016 12:45:27 AM"
  },
  {
    "id": "12810987",
    "timestamp": "Oct 28, 2016 1:28:19 AM",
    "topic": "Hacksplaining: Comprehensive security training for developers",
    "url": "https://www.hacksplaining.com/",
    "votes": 4,
    "posted": "Oct 28, 2016 12:39:51 AM"
  },
  {
    "id": "12810978",
    "timestamp": "Oct 28, 2016 12:48:15 AM",
    "topic": "Dear Microsoft, let\u0027s open source Age of Empires II",
    "url": "https://medium.com/p/dear-microsoft-lets-open-source-age-of-empires-ii-e660c741ec11",
    "votes": 5,
    "posted": "Oct 28, 2016 12:38:33 AM"
  },
  {
    "id": "12810948",
    "timestamp": "Oct 28, 2016 3:18:29 AM",
    "topic": "Uber releases 98 page white paper on the future of urban transit [pdf]",
    "url": "http://uber.com/elevate.pdf",
    "votes": 3,
    "posted": "Oct 28, 2016 12:34:07 AM"
  },
  {
    "id": "12810922",
    "timestamp": "Oct 28, 2016 1:38:20 AM",
    "topic": "7 Design Principles to Make Great Software",
    "url": "https://blog.hive.com/hives-7-design-principles-c59d593ae58b#.33d6mc9n6",
    "votes": 3,
    "posted": "Oct 28, 2016 12:31:07 AM"
  },
  {
    "id": "12810832",
    "timestamp": "Oct 28, 2016 4:08:33 AM",
    "topic": "Embedded FPGAs Going Mainstream?",
    "url": "http://semiengineering.com/will-efpgas-go-mainstream/",
    "votes": 3,
    "posted": "Oct 28, 2016 12:21:14 AM"
  },
  {
    "id": "12810826",
    "timestamp": "Oct 28, 2016 1:18:18 AM",
    "topic": "Common Swift bird can spend up to 10 months in the air without landing",
    "url": "http://www.nytimes.com/2016/10/28/science/common-swifts.html",
    "votes": 3,
    "posted": "Oct 28, 2016 12:20:53 AM"
  },
  {
    "id": "12810799",
    "timestamp": "Oct 28, 2016 12:58:16 AM",
    "topic": "Ask HN: Helpful methods for debugging JavaScript / websites?",
    "votes": 3,
    "posted": "Oct 28, 2016 12:17:00 AM"
  },
  {
    "id": "12810724",
    "timestamp": "Oct 29, 2016 8:32:06 PM",
    "topic": "Enlightenment Scholarship by the Numbers (2014) [pdf]",
    "url": "http://arcade.stanford.edu/sites/default/files/article_pdfs/ROFL_v5_Edelstein_final.pdf",
    "votes": 4,
    "posted": "Oct 28, 2016 12:06:36 AM"
  },
  {
    "id": "12810647",
    "timestamp": "Oct 28, 2016 12:28:14 AM",
    "topic": "Addicted to your phone? This guy is trying to make it stop",
    "url": "http://www.theatlantic.com/magazine/archive/2016/11/the-binge-breaker/501122/?utm_source\u003dwdfb\u0026mbid\u003dsocial_fb\u0026amp;single_page\u003dtrue",
    "votes": 6,
    "posted": "Oct 27, 2016 11:57:24 PM"
  }
];