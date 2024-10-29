'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b5163cf270a3fbac34827c4a2713eef4",
".git/config": "a20dfa616582601e17969088f12983cd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ed1fab506b4d9e1e84562067a3ff6f87",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0e7fed2e4b9f6cd509a4d9908563889e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a1ac8b7619bbe5d1458c06b7b99e8465",
".git/logs/refs/heads/master": "a1ac8b7619bbe5d1458c06b7b99e8465",
".git/logs/refs/remotes/origin/master": "b76a6f08b9f83b6068f72124dd961b32",
".git/objects/01/4998a6d04520d3f97d8905f196134e2dfdafc3": "4686996647c721e0309bcf061b05ad0a",
".git/objects/01/939d146aba2d5919a9feaed4f75781a1e3dabb": "a12a930214f59638064f3647ef14319f",
".git/objects/01/b4080c7aa0b03851ae968706b4cff35a27724d": "51dbaa93434fbee8d4e4fc4e5bd8f895",
".git/objects/03/a984740bb0d6e9e07db27496bcce9267c085be": "8cbca756083a0eb952b88cf77f251a7c",
".git/objects/09/4fe385d625da662eef2462f3b2a9f32a725738": "cb093f2ddd7ff5d14820eed1881d7cc8",
".git/objects/09/68f570fcd59fb56381d2e28654624b0500a941": "3426d627ba10b7e24f177fd9cd14a5b9",
".git/objects/09/7e3132342e74dcae83e51659925602c5b1d715": "946da7936fb18da0b7110d29ff61bea0",
".git/objects/09/8d2fb5851c92236b72f68263cd91886db729b6": "7605759c2a5f639931d24fdc64171045",
".git/objects/0b/8f4e7fd7f42856352cb8fca3374defb74c3947": "39e26db6b31dfedfcc2a740ee2496964",
".git/objects/0c/4397dfd5640fbe09b4e7863e5b3b464eb4e0d5": "8a69b3b005fbb1c9afe5ad6ef2e99c1d",
".git/objects/0c/b773600f5dcf20e2c90458b1dea09b25214af6": "b12200e4a0418a50cccb18c6a42999b1",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/15/91fa267398c0ec051e0ed82f6e587a3b601b7f": "c736d7dcab44a65fc2565457c5128aa1",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/01ddcebc03f1e19587e99a6612d18e72d5036d": "69aefcaf43b4e19b256ba6147bda8312",
".git/objects/1a/a0e755c9eed6add2d75e6d7938a537fbfc552b": "6321395245c47286e407f07e13fe8a63",
".git/objects/1c/2db60bb1c5d77f7045c13cedc3cbb3c8f3fec0": "dc097ee16d849120a65c1b8bb0894d19",
".git/objects/1d/bf003586317d1134fde12303ad6c9c783c8594": "e416832f7392daaefc0307cdf5f71c14",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/a612eb460bf414416cbd6cd8a8cc85ad29602c": "5567e7aa71003f03959ea88e50c387ce",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/c18c0f6cacd56e865754f02c7e57e7ba8b7739": "62119710f4e9e48a9220fadbb648d1e7",
".git/objects/28/128edcdacc8b3cc9d8a268464c24840f4e5cb9": "54d75281cd8872b81eb4f5712adae41b",
".git/objects/29/eb0d01ba4545663ae2079d8995a839f4a4869a": "3d858355b4e580572aec39ac4afa1e76",
".git/objects/2c/88cfc9ecfbe3fe16ab7bafa515aeec01a7eeb4": "77b843d53135addb80ee9eb226d5604c",
".git/objects/2d/ea3a144827abcbd040202f7d20c6463cfedcd8": "66feeabef49e6991d4927071d49ec845",
".git/objects/2f/3dd10f30b4048336ff3ea0c79f3a8efaa910ef": "860ff7b40060e73090dab0422da2521a",
".git/objects/30/4a0482af9f0d18d266c7943d2b4fd7343ae813": "376ef9c214587001f2167c359bd06def",
".git/objects/30/ece343f49d9dbf9eafabb5ee258716bc3faf5d": "168a05ef9a86e625350056f916cc5548",
".git/objects/31/4bd1c8d3dea91c3e546a0346d894a154a15b57": "efac25aee075ba20441d5def261bf5dd",
".git/objects/32/ed92d16419de2705f520567a7597b7699e197a": "c12379060315907c872e29cf7ce84ea9",
".git/objects/38/c2ea66248e588bb22520a575903d896b04b3dd": "c8e478e38a8cefd633abb61eb6542e59",
".git/objects/39/6f3b8bb2bfb98940e4fc50c6d1eeed8f98c716": "d7f8b08efdcc3a7498161b5bb74826d7",
".git/objects/41/8844fda6ff6d8dc512ea3cbe4a9e4d4dcb8781": "fc6f0eae973b7f37216bc00a9524c2c1",
".git/objects/42/082655b6f1d906f576bcfd96a9cd9beb1df52b": "5ec522784ef8ce6c8df7e96c05c3a51a",
".git/objects/42/bb7286f456f8975b6fc66a97237a18a2e2a2f0": "34c65702f0e40726d49923f409201414",
".git/objects/42/cb1802642f557fa5cd1d8a88a7a51565c00770": "85f72d3eb103a5bfd6abf32286ac9fc9",
".git/objects/47/86da8315824836b78115402521e33c3e046a6f": "faa3a26fb948cfbfd7c957fc609b576e",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/c61d2689b54f5b2f7164955af046a6a52b3d9d": "e12b8ac23c11c945bd2c17bd0545c1a5",
".git/objects/4a/e16019ff799056a2b7836c5192cfac6aa1a31a": "6a57c93c165640036ce21a0db6b8a543",
".git/objects/56/90cf7831d36d231db77d62f862b253d66aabab": "7fd61cc79c24344555b68eff7a2f58c3",
".git/objects/57/010e61a4c32f90e65043b9f00981cf8e89ab1b": "ff015381605e17eefa5a0cb2d80fc551",
".git/objects/57/9d60d0e55d3960a053f399ee509048832c09b9": "3baacb24cb1987ebff350eff1569e31e",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/8625260b603f9655dacaccd04a4ccc78c71b6f": "8efebe7b21dbec5edec76b86eccfd45e",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/d0bb97ac1d8201636814583af1b22526d8358d": "86bd667e05d373eb6d6bd0fb3832a4d0",
".git/objects/5e/049268f56c70b57d8ce0e86526ff77155093da": "8f380e5fb6278e2fa476f5480d9dc06e",
".git/objects/5e/b2be45d8595f0789cad4ec0e49c1f861294195": "ad9ac94c575dc8d724a6406c74664a10",
".git/objects/61/1192111cacc4c7716f2278dbf2605ac3437336": "c0eda2f4877a1832ad0cc69457207ce3",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/62/cb5b1b9e0cd7efdb4c0e893f0ea2347876dc34": "10d55f438c6a9f22b6b0c445c5f642fb",
".git/objects/68/30e5905ac70f48844c8c2b3811abd1bbf30225": "4370341c9cd0f5149f4dcb15089979cb",
".git/objects/6a/3c01c4032b4c57fd36ac60f3c4c15aa1733234": "7c7d14470cc25cee2f3cdb6a0ccf2082",
".git/objects/6a/4c4f929fa4dd2616fbb94846479eba5d402f45": "21fc4bcd3d028c1c0ee34ebaf62ec146",
".git/objects/71/20cc6a346d319e4423ad2db95a29c7fd2e1f5a": "98bdf5820bccebd2d7d4c9b3bef3c2b8",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/75/e1285e4f04b4ee17bb9129fdc8bf6369b5f2e8": "14a24660352b4ba17e5f95ce9d74114d",
".git/objects/77/9e310d2759f72738b879508f63f23ff032b684": "ccefc39be6c0649d2ef8f05f5fca7f3c",
".git/objects/7a/42ef9341c0502b9cc2236e9d98b476b746d9b2": "8211c69d3a4801eacfd8ea5469c10d1a",
".git/objects/7a/e61de72ef48236b309bea906b246d41556f8c2": "c555b957faef4f4693f0f86c7ae0f016",
".git/objects/7b/7e3151b21d33a016564e64b02176c8ec45df6b": "a93345431fa17f059449d9d5e8bf7a35",
".git/objects/81/96cd63c6f63c6f4db3cd2a76485b9b1ef98fc0": "1fc273764b33ee596f631ef93524ab66",
".git/objects/84/1b4e2ef82adbe588d8040f1846a07aefc1aeab": "45f630040af951e2ddaf9c635581a5e5",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/2ce175266f071f9a1d70c7d53134243a2f6567": "6f6c3a43127fed842bcea7b155a400eb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/51d72521cfffc7870f3a78258565966cc6830e": "ffd4330c95e909a8f77bc7c1d2d26be7",
".git/objects/8a/10e1e3415f260bf6fab8e1e9a86730a31099a7": "f95b15ff7eafd79a6b5855ebb7324edb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/f7fd026ef98b588fb21f455ea715e22971b175": "f365725cc015206bf2417ae9fcd62cb0",
".git/objects/90/0252837e5cdb387e58ef291dffa93792e39361": "3669d1730841cc16d73ff2695ec02324",
".git/objects/91/574db22174c333000d7bf7dd596370b3306a46": "8987668814870abbb90c3e227ba8455f",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/29dd956472b9b7aee96f74ab3f8a3c7bdb6173": "6a69ad00f2440db6959f9bb972a7794a",
".git/objects/96/c920c7bfb6de55baa597f91de4143e901f9107": "e2b4d9013b5d6a218ab72b1595d3dd88",
".git/objects/99/3f7c7dc235d63a8a3669305c76c52a861268c9": "cf2c364e25e7aa6f462a73d68099df46",
".git/objects/99/438314d07420be3fedd691c42400c4b7d5c3c6": "52f5cb4e0e5871f223fe29709becc626",
".git/objects/a2/5be26185f96e73d94b740517fb47967251649d": "781067ab7cdbae087ad53fbf811d1402",
".git/objects/a4/15cfa230b499ab8c169fbea88e0d96d5f7bec9": "29fba71e49befa2d1c3ca97af4c59bd6",
".git/objects/a4/4b3ae29627aa2c41fe9f9bdf2778242f65e374": "533510c38688c61b4b64a34181743a1a",
".git/objects/a5/0df8c77ff55f645b7245252675f05cd444255c": "fbccd71c1494b90299411f328fd72932",
".git/objects/a5/bc7ea94716dff8b65417a941bfbcb7c66bc215": "6c69a6c27a15d053c8e0114298c051cb",
".git/objects/a6/d7be2a2d2c47f0204d658648c495a91237360d": "f8fe362947effab71a7f29a64df06ac2",
".git/objects/a6/ecea8faf168714a298978a57a363eefcfbbfde": "fd82c25fb95344b9aade9db2b0d8c824",
".git/objects/a7/ba4fa5712c4b8dbcadb414afd62fb5f8ad478c": "c34be02938108c3fe78aeef2b83c9e3c",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/566030e78d4a81e8dde2d05d03137cdc9f22c6": "db5c15b8644dbea85a70c2b47eddf4f9",
".git/objects/b6/2cd245709c81c0088e463291e0a79ab8af6837": "a4446d132b25795b22501ac3b36f3567",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/c4e706dfae22478996a7edf141ae53e002b195": "2a9ee3d435092eabf6574c2bf0b5f192",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/f99805dd1a3002f789143f7623689a808a4ae8": "e70bf213d9dddf82a4a022d03eb82789",
".git/objects/bc/17fece08dffbf98b79ec043a677718a3aebe2e": "e7ea255dd222900e4167de7238ab9ca5",
".git/objects/bd/90d7087594479ba8d425e24d77ae1c8c112e07": "5f94f538408c942ac99b5fe5cfe46540",
".git/objects/bd/993063e0760689a4dacaac0471b54c7b2c7b18": "8abb2e1e5dd44bf6aa09969091ba1bb5",
".git/objects/bf/0778b413ce6aaa23df2516d26fca410addd8a5": "1b5891b26655d4de287b47876a1c60c5",
".git/objects/bf/b57672d36fe002f0cbecd1860a8796ff33de65": "39d9c9530b20b5f4ba0575488f5c5b14",
".git/objects/c4/b33b5fe3b5871a6aa0aa13c3d8a9a7d39037f6": "2250a19d234684ce24a7ee170db6e202",
".git/objects/c5/7c9adcda06630414a9593dfe675166323cbe8e": "316e68fab37d848d89150a19a034ef35",
".git/objects/c9/994534fef357601910c2fdd81524cf579373fa": "b4b842228d70c3ae420cc07e91aa95e5",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/19e688b7430c47c9f4ebea9e676b0ad62261c6": "8965cb5daceb3f0bd8cf543b8fb551b2",
".git/objects/cc/6f61bd1cca6ab600c40bcbd94b93cb06bbd1ba": "c07b1824117653842306fefed63546e5",
".git/objects/cd/b59f4995a5bbfa14ae973eaf33a80a2af1ea82": "158f87bb6edcc4c1a0494fcc98979138",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/23ea0fa8733698719d6ccb305574a9590a6c4c": "56dd82facb290c53ae633724bec4ec75",
".git/objects/d2/efb8f82c4f253f6381e9df0c898eea4663c430": "55f4582a039115386daf7387954132e2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/4a39e73f303b154d3ed0fc85f5551a3bc29d9e": "c5212d81d17cf0abc6bc400d1fbcb940",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/3443a3265d9bbfee60fc0519481af84963a44a": "0687eefdddd057f22276aef6436de7f7",
".git/objects/d8/601dd7408a5516700a594b5e1dd005190783b8": "016b8274ee3ca1c0f2f10736b48c2e64",
".git/objects/da/21cf2e5d5fd08e3cd0b0666dd741fb22e9d3c4": "c5964c3ac4ca3ef16e5093e175477094",
".git/objects/da/645b75fa1f56e67d1b4198fed7e386d5779b1d": "5564328865984c744b020ff8d8cf3f06",
".git/objects/df/2de8afe150f33bdbe0ae8f548f50a7178d753f": "5ead95ec2157f4e4b1bbb1ddc1f67366",
".git/objects/e5/a3b3b28d687b70395a77c436b1aa26011da06d": "59290e3c79dd9e1c929e9158a6a3f09c",
".git/objects/e7/b3c1f6f47690bf3bc693b6be2e7efeed04f8ef": "1d340b69d7ace731b6109f5d3be7daf8",
".git/objects/e9/dab869136bcf93f5f2e91e6b90839fe2d76058": "1f5df3834162ef1486d5bc861c0e9cca",
".git/objects/ea/cf80057054d2d247dae85a5daba469e6d6cdcc": "ca538f5a5d25081fd25a6cd7b813046a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/d738a2f064d5fe9a4bbbdc92fc69d5c996620f": "b73fbbd5de7dd3ce916f42f2c44395c7",
".git/objects/ee/1b3619faddc39c6df38e5197ecbca35de3d3d6": "910ccf0eddedf9afc581a3da3bb1bce0",
".git/objects/ef/ac6445d6e7ef2026718c5a6e8f59fd290f9cb6": "7cc996c98ec4db73ad9aa99198c90f23",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/9e6cc6ba56b5af11c5360d62d5557eb245ae61": "38f6f997814965211bad605acb8e54e8",
".git/objects/fe/6ec5aeae4a3fded981bedcb0c12b1505ef61fe": "d12dfc4759072ee442a6cbd441448047",
".git/objects/fe/9cb599932643ea985ae8abae67fcadf964e187": "2ae97092b2d273e753ee743decaf46b8",
".git/ORIG_HEAD": "356dbad1617450501ec4474aa45cf22f",
".git/refs/heads/master": "7a169bac3b95c692f4cb83bc775b703a",
".git/refs/remotes/origin/master": "7a169bac3b95c692f4cb83bc775b703a",
"assets/AssetManifest.bin": "ad8eb9397d5361dcfe831800b692aa0c",
"assets/AssetManifest.bin.json": "17417eaa45e64de8708e4f462a127005",
"assets/AssetManifest.json": "20add9e2a68a414585c619f1694013ce",
"assets/assets/fonts/Cairo-Bold.ttf": "ad486798eb3ea4fda12b90464dd0cfcd",
"assets/assets/fonts/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/icons/breakfast.webp": "452332d67697e1887b20f4f944bacd35",
"assets/assets/icons/coffee.webp": "b8eda9bddd2d97f4a9344e30b4c2da62",
"assets/assets/icons/instagram.png": "4a8c23476a7c20c5bee2a752a6f96e9e",
"assets/assets/icons/pasta.webp": "549e7299c6fc1651c4de06033befa164",
"assets/assets/icons/pishghaza.webp": "6c00a730b2fd6953c8b4b2374227fb12",
"assets/assets/icons/pitza.webp": "bfb18a5b9cb58dcc357cc3af0bbfa915",
"assets/assets/icons/salad.webp": "f7ee459df08257f53594a7f0516b0267",
"assets/assets/icons/whatsapp.png": "a59e768eebc730446e35f676487b8815",
"assets/assets/images/cake.jpg": "cf9ff8f0d8db97b48e20a4d2876bdee7",
"assets/assets/images/eggfry.webp": "bdeb9cf3e2943b54b0bc1f006905bd2d",
"assets/assets/images/french_toast.webp": "619b395772afd2b2550b8b174af59153",
"assets/assets/images/logo.png": "77f21db9851d4f756588e74aaf9e2578",
"assets/assets/images/taco.webp": "854d958f8eb538f59ceb4a1d996e85ad",
"assets/FontManifest.json": "9309a407d912badc3b17a314ce37dc0e",
"assets/fonts/MaterialIcons-Regular.otf": "aa8b461adc919df1a1bbf0b1abe0e540",
"assets/NOTICES": "f25efbbb059e1245cf0b587128ac4521",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "ed6e91ffed529a9cd9072da351ef2fa8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "39847b67592c48fae5476eaa7d6cf7d4",
"/": "39847b67592c48fae5476eaa7d6cf7d4",
"main.dart.js": "f76ae339d4738e1db551138a3dbda9ea",
"manifest.json": "1a67054f15e4cfbebcc648b2711a55d6",
"version.json": "e23e1c74e8d978a731a5d6933252762c",
"web.zip": "0bcc7c0bfbf43432ba81fabeee0f4484"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
