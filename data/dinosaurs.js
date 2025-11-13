export const dinosaurs = [
  {
    id: 1,
    name: "Acrocanthosaurus",
    slug: "acrocanthosaurus",
    image: "/images/acrocanthosaurus.webp",
    description: "At around 12m in length and more than six tonnes in weight, Acrocanthosaurus is one of the largest theropods and dates back to the Early Cretaceous period. This carnivorous dinosaur gets its name – which translates to ‘high-spined lizard’ – from the elongated spines running the length of its neck and back, while its sharp teeth and powerful jaw make it a fearsome predator comparable to the much more well-known Tyrannosaurus rex.",
    discovery: "Acrocanthosaurus was officially discovered in 1950 by J. Willis Stovall and Wann Langston Junior in Atoka County, Oklahoma, when the two palaeontologists dug up skeleton fragments including part of a skull. In the following decades there was little consensus on how to classify Acrocanthosaurus, and at various times it was believed to be a species of Allosaurus, Spinosaurus and Megalosaurus - but it is now considered part of the Carcharodontosaurus family.",
    paleology: "Fossil findings have confirmed that Acrocanthosaurus lived approximately 110-125 million years ago in the Southern states of the USA, most notably Texas, Oklahoma and Wyoming. Acrocanthosaurus was the apex predator of its time, with a diet consisting of other dinosaurs including Hadrosaurus, Tenontosaurus and Sauropods.",
    era: "Early Cretaceous",
    family: "Carcharodontosauridae",
    genus: "Acrocanthosaurus",
    height: 4.8,
    length: 12,
    weight: 7000,
    diet: ["Carnivore", "Live Prey"],
    egg_batch_size: [
      { min: 1, max: 1 }
    ],
    dig_sites: ["Antlers Formation", "Twin Mountains Formation"],
    security_rating: 6,
    minimum_population: 1,
    environment: [
      { water: 5, forest: 48, open_space: 48, prey: 1.00 }
    ],
    cohabitation: [
      { likes: ["Scavenger"], dislikes: ["Carnivores", "Therizinosaurus"] }
    ]
  },
  {
    id: 2,
    name: "Albertosaurus",
    slug: "albertosaurus",
    image: "/images/albertosaurus.webp",
    description: "A relative of the infamous Tyrannosaurus rex, Albertosaurus is a carnivorous theropod from the Late Cretaceous period. Believed to have been the apex predator of its time, Albertosaurus’ rows of razor-sharp teeth make light work of the smaller, herbivorous dinosaurs it preys on, while its sheer size – approximately 9.5m long and weighing around 4 tonnes – ensure other predators steer clear.",
    discovery: "Albertosaurus’ name is derived from the location of its earliest discoveries – Alberta’s Horseshoe Canyon Formation. In 1884 a partial skull was excavated by geologist Joseph B. Tyrrell, and five years later his colleague Thomas Chesmer Weston found another, although the fossils were originally classified as being part of the existing Laelaps incrassatus species. It was finally established as a new species and named in 1905, by American palaeontologist Henry Fairfield Osborn.",
    paleology: "Further discoveries along the floodplains of Horseshoe Canyon have led researchers to believe that Albertosaurus lived approximately 70 million years ago, living alongside a wide array of other dinosaurs including Saurolophus, Edmontosaurus and Troodon.",
    era: "Late Cretaceous",
    family: "Tyrannosauridae",
    genus: "Albertosaurus",
    height: 3.3,
    length: 9.5,
    weight: 4000,
    diet: ["Carnivore", "Live Prey"],
    egg_batch_size: [
      { min: 1, max: 2 }
    ],
    dig_sites: ["Horseshoe Canyon", "Formation B"],
    security_rating: 5,
    minimum_population: 1,
    environment: [
      { water: 11, sand: 9, open_space: 70, prey: 0.5 }
    ],
    cohabitation: [
      { likes: ["Scavenger", "Carnotaurus"], dislikes: ["Carnivores", "Therizinosaurus"] }
    ]
  },
  {
    id: 3,
    name: "Allosaurus",
    slug: "allosaurus",
    image: "/images/allosaurus.webp",
    description: "Allosaurus is one of the most fearsome dinosaurs ever to have roamed the earth, weighing up to two and a half tonnes and measuring around 12m in length. The apex predator of the Late Jurassic period, Allosaurus’ enormous skull contains rows of large, serrated teeth for tearing flesh, while its long, powerful tail helps it to balance.",
    discovery: "The first official discovery of Allosaurus fossils came in 1877, when Othniel Charles Marsh found fragments of an unknown dinosaur in Colorado. At the time, the fossils were so unlike any previously found dinosaur bones that Marsh named it Allosaurus, meaning ‘different lizard’. Two years later, more fossils were unearthed by H. F. Hubbell, although the quality of the near-complete skeleton was not realised until 1908, after Cope had died. With thousands of fossils emerging in the intervening years, Allosaurus fossils are now among the most commonly discovered dinosaur bones.",
    paleology: "Allosaurus lived around 150 million years ago in the forests and floodplains of the western United States, most notably Utah and Colorado. It co-existed with many other species of dinosaur, feeding mostly on large herbivores such as Stegosaurus and Apatosaurus.",
    era: "Late Jurassic",
    family: "Allosauridae",
    genus: "Allosaurus",
    height: 3.8,
    length: 12.1,
    weight: 2300,
    diet: ["Carnivore", "Live Prey"],
    egg_batch_size: [
      { min: 1, max: 3 }
    ],
    dig_sites: ["Cleveland Lloyd Dinosaur", "Quarry B", "Morrison Formation D"],
    security_rating: 5,
    minimum_population: 1,
    environment: [
      { water: 6, forest: 31, open_space: 63, prey: 0.5 }
    ],
    cohabitation: [
      { likes: ["Scavenger", "Ceratosaurus", "Metriacanthosaurus"], dislikes: ["Carnivores", "Therizinosaurus"] }
    ]
  },
  {
    id: 4,
    name: "Ankylodocus",
    slug: "ankylodocus",
    image: "/images/ankylodocus.webp",
    description: "The giant herbivorous sauropod Ankylodocus is a genetically engineered hybrid dinosaur that combines the base genomes of Ankylosaur and Diplodocus. Its appearance borrows notable characteristics from each of its parent genera – its long neck strongly resembles Diplodocus, while it takes the protective spikes on its body from Ankylosaurus.",
    discovery: "At around 6 metres tall and over 28 metres in length, this genus is the largest dinosaur ever engineered by Dr. Henry Wu, the chief geneticist at the bioengineering company InGen. The impressive size of Ankylodocus is its main selling point – Dr. Wu believing that new visitors will be drawn in by such an enormous animal.",
    paleology: "Research into Ankylodocus’ palaeoecology is at an early stage, but the genus is known to prefer an environment featuring grasslands and forests, sharing this habitat with a range of other dinosaurs. Ankylodocus exists mainly on a diet of tree ferns and conifers, and its vast size means it has very few predators. The genus tends to live alone or in small social groups.",
    era: "Holocene",
    family: "Hybrid",
    genus: "Hybrid",
    height: 5.9,
    length: 28,
    weight: 2300,
    diet: ["Tall Palaeobotany"],
    egg_batch_size: [
      { min: 1, max: 2 }
    ],
    security_rating: 4,
    minimum_population: 3,
    environment: [
      { water: 2, forest: 41, open_space: 19, tall_leaf: 8 }
    ],
    cohabitation: [
      { likes: ["Ankylosaurus", "Diplodocus"] }
    ]
  },
  {
    id: 5,
    name: "Ankylosaurus",
    slug: "ankylosaurus",
    image: "/images/ankylosaurus.png",
    description: "Famed for its clubbed tail and the armour plates that cover its back, Ankylosaurus is a genus of Ankylosaurus that lived around 70m years ago during the Late Cretaceous period. Ankylosaurus’ protective osteoderms and robust build – the average specimen weighs 8 tonnes and is 9.6m in length - defend it from predators such as Tyrannosaurus rex, while its large stomach digested up to 60kg of ferns and shrubs every day.",
    discovery: "Ankylosaurus was discovered in the Hell Creek Formation, Montana by Barnum Brown, four years after the famous palaeontologist, known as ‘Mr. Bones’, had discovered Tyrannosaur rex. The first fossils found were a collection of bones including two teeth and a skull fragment, although Brown actually unearthed numerous osteoderms in 1900, but incorrectly attributed them to Tyrannosaurus. Further Ankylosaurus fossils were found in Canada in 1910, including a complete skull.",
    paleology: "Ankylosaurus lived in Canada and the western United States, which had a warm, humid climate at that time, and preferred to stay close to rivers, forests and wetlands, allowing them to cool off during hotter periods.",
    era: "Late Cretaceous",
    family: "Ankylosauridae",
    genus: "Ankylosaurus",
    height: 3.6,
    length: 9.6,
    weight: 8000,
    diet: ["Ground Palaeobotany"],
    egg_batch_size: [
      { min: 1, max: 2 }
    ],
    dig_sites: ["Lance Formation Site C", "Scollard Formation B"],
    security_rating: 6,
    minimum_population: 1,
    environment: [
      { water: 3, open_space: 32, ground_leaf: 32, ground_fruit: 32 }
    ],
    cohabitation: [
      { likes: ["Sauropod", "Ornithomimosaurid", "Ceratopsid", "Hadrosaurid", "Pachycephalosaurid", "Scavenger"], dislikes: ["Carnivores", "Ankylosaurid", "Stegosaurid", "Therizinosaurus"] }
    ]
  },
  {
    id: 6,
    name: "Apatosaurus",
    slug: "apatosaurus",
    image: "/images/apatosaurus.webp",
    description: "At over 20m in length and around 20 tonnes, Apatosaurus is one of the largest dinosaurs ever to have existed. This herbivorous Sauropod has a long neck that allows it to feed on the leaves of tall trees as well as lower-hanging plants, while the tip of its tail can be whipped to produce a loud bang that scares off predators.",
    discovery: "Apatosaurus was discovered in 1877, when Othniel Charles Marsh unearthed a near-complete skeleton in the Rocky Mountains, Colorado. Its name, which translates to ‘deceptive lizard’, stems from Marsh’s initial misconception that its bone structure was that of an aquatic reptile.",
    paleology: "Fossils dating back to the Late Jurassic period (approximately 150 million years ago) have been found across the western United States and parts of Europe. The location of these findings have led researchers to believe that Apatosaurus lived near rivers, and co-existed with Camarasaurus, Ceratosaurus and the feared Allosaurus.",
    era: "Late Jurassic",
    family: "Diplodocidae",
    genus: "Apatosaurus",
    height: 6,
    length: 27,
    weight: 20000,
    diet: ["Tall Palaeobotany"],
    egg_batch_size: [
      { min: 1, max: 2 }
    ],
    dig_sites: ["Dinosaur National", "Monument A", "Morrison Formation B"],
    security_rating: 3,
    minimum_population: 1,
    environment: [
      { water: 3, forest: 39, open_space: 26, tall_leaf: 32 }
    ],
    cohabitation: [
      { likes: ["Brachiosaurus", "Ornithomimosaurid", "Ceratopsid","Ankylosaurid","Hadrosaurid","Pachycephalosaurid","Stegosaurid"], dislikes: ["Sauropod", "Indominus rex","Scorpios rex"] }
    ]
  },
  {
    id: 7,
    name: "Archaeornithomimus",
    slug: "archaeornithomimus",
    image: "/images/archaeornithomimus.webp",
    description: "Archaeornithomimus is a genus of bird-like theropod, with a sharp beak and long hind legs. Its size – this dinosaur weighs between 100 and 200lbs and reaches around 3.3m in length – and physical features led to its name, which translates to ‘ancient bird mimic’. Archaeornithomimus had an omnivorous diet consisting of everything from plants to eggs and even other juvenile dinosaurs.",
    discovery: "Remains of Archaeornithomimus have been found across Asia, with fossils found in China, Kyrgyzstan and Uzbekistan. The first discovery came in 1923, when Roy Chapman Andrews unearthed the bones of a new species, originally named Ornithomimus asiaticus. The prefix ‘archae’ (‘ancient’) was added in 1972, underlining Archaeornithomimus’ status as one of the oldest known species of Ornithomimid.",
    paleology: "This dinosaur lived in Asia between 70 and 95 million years ago during the Late Cretaceous period and preferred to live along the floodplains of rivers, where vegetation would be easy to come by. Archaeornithomimus co-existed in this period with many other dinosaurs including Gigantoraptor, Bactrosaurus and Sonidosaurus.",
    era: "Late Cretaceous",
    family: "Ornithomimidae",
    genus: "Archaeornithomimus",
    height: 2.2,
    length: 3.3,
    weight: 50,
    diet: ["Ground Palaeobotany"],
    egg_batch_size: [
      { min: 3, max: 6 }
    ],
    dig_sites: ["Bissekty Formation", "Iren Dabasu Formation"],
    security_rating: 1,
    minimum_population: 8,
    environment: [
      { water: 17, forest: 37, ground_fruit: 46 }
    ],
    cohabitation: [
      { likes: ["Sauropod", "Ceratopsid", "Ankylosaurid", "Hadrosaurid","Stegosaurid"], dislikes: ["Dr. Wu Hybrids", "Therizinosaurus"] }
    ]
  },
  {
    id: 8,
    name: "Atrociraptor",
    slug: "atrociraptor",
    image: "/images/atrociraptor.webp",
    description: "Atrociraptor is a carnivorous dinosaur from the dromaeosaurid family, and dates back to the Late Cretaceous period. The name Atrociraptor translates from Latin as ‘savage seizer’, in reference to the rows of serrated teeth it uses to catch and kill prey such as lizards and small mammals. This genus is one of InGen’s ‘designer dinosaurs’ and exists in a variety of colours. It grows to around 4m in length and has been bred to display great dexterity, high intelligence and large, powerful claws, making it an extremely efficient hunter.",
    discovery: "The first Atrociraptor remains were discovered in 1995 when a local man named Wayne Marshall unearthed a series of teeth and jaw parts from the Horseshoe Canyon Formation in Alberta, Canada. It wasn’t formally described until 2004, when palaeontologists Phillip J. Currie and David Varricchio gave it the name Atrociraptor. To this day, the 1995 finding is the only known Atrociraptor specimen.",
    paleology: "Atrociraptor lived along the floodplains and swamps of Alberta around 68.5 million years ago and shared its habitat with a range of other dinosaurs including Albertosaurus, Ornithomimus and Deinonychus.",
    era: "Late Cretaceous",
    family: "Dromaeosauridae",
    genus: "Atrociraptor",
    height: 2,
    length: 3.9,
    weight: 226,
    diet: ["Carnivore", "Live Prey"],
    egg_batch_size: [
      { min: 3, max: 4 }
    ],
    dig_sites: ["Horseshoe Canyon", "Formation A"],
    security_rating: 5,
    minimum_population: 2,
    environment: [
      { water: 6, forest: 33, open_space: 61, prey: 0.5 }
    ],
    cohabitation: [
      { dislikes: ["Carnivores", "Therizinosaurus"] }
    ]
  },
  {
    id: 9,
    name: "Attenborosaurus",
    slug: "attenborosaurus",
    image: "/images/attenborosaurus.webp",
    description: "Named after the esteemed British natural historian David Attenborough, Attenborosaurus is a genus of pliosaurid that grows up to 6.4m in length. Notable for its long neck and paddle-like limbs, this piscivorous marine reptile can move through the water at high speeds, catching prey with its long, sharp teeth.",
    discovery: "Attenborosaurus’ discovery is an interesting story; the first fossils were found in the United Kingdom in 1880 but were destroyed during the Second World War. Luckily, detailed plaster casts were made, allowing researchers to examine everything but the skin. Although the discovery was initially classified as another species of Plesiosaurus, analysis of the plaster casts confirmed that this was an entirely new genus. In 1993, American palaeontologist Bob Bakker gave the genus its name, in honour of Attenborough’s life’s work.",
    paleology: "Attenborosaurus lived approximately 190-200 million years ago during the Early Jurassic period, and roamed the warm waters just off the south coast of the United Kingdom, existing on a diet of fish and other marine life.",
    era: "Early Jurassic",
    family: "Pliosauridae",
    genus: "Attenborosaurus",
    height: 0.9,
    length: 6.4,
    weight: 1100,
    diet: ["Shoal"],
    egg_batch_size: [
      { min: 3, max: 5 }
    ],
    dig_sites: ["Jurassic Coast B"],
    security_rating: 1,
    minimum_population: 3,
    environment: [
      { open_space: 100, fish: 0.4 }
    ],
    cohabitation: [
      { likes: ["Marine (Medium)", "Marine (Small)"] }
    ]
  },
  {
    id: 10,
    name: "Baryonyx",
    slug: "baryonyx",
    image: "/images/baryonyx.webp",
    description: "The large theropod Baryonyx can grow up to 10m in length and is notable for its crocodile-like jaws. Baryonyx is primarily a piscivore – although it lives on land, it can grab fish out of rivers with its long claws, and swim in shallow waters to catch prey with its long, serrated teeth. It is believed that Baryonyx is also a scavenger, feeding on the carcasses of smaller dinosaurs on land.",
    discovery: "Baryonyx – translated to ‘heavy claw’ - was discovered in 1983 by an amateur fossil collector from the United Kingdom named William J. Walker, while surveying the clay pits of modern-day Surrey. His initial discovery consisted of a giant claw as well as some other bones, and further investigation unearthed a near-complete Baryonyx skeleton (now housed in the Natural History Museum in London).",
    paleology: "Baryonyx lived in the Early Cretaceous period, around 125m years ago, co-existed with other dinosaurs including Polocanthus, Iguanodon and Valdosaurus in parts of northern Europe and Africa. Baryonyx’s mainly fish-based diet suggests it preferred to live close to shallow water, roaming near rivers and marshes.",
    era: "Early Cretaceous",
    family: "Spinosauridae",
    genus: "Baryonyx",
    height: 2.6,
    length: 9.3,
    weight: 1700,
    diet: ["Piscivore", "Carnivore","Live Prey"],
    egg_batch_size: [
      { min: 1, max: 3 }
    ],
    dig_sites: ["Isle of Wight", "Smokejack Clay Pit"],
    security_rating: 4,
    minimum_population: 1,
    environment: [
      { water: 37, forest: 44, rock: 19 }
    ],
    cohabitation: [
      { likes: ["Scavenger", "Suchomimus"], dislikes: ["Carnivores", "Therizinosaurus"] }
    ]
  }
];
