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
      { likes: ["Ankylosaurus", "Diplodocus"]}
    ]
  },
];
