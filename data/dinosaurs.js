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
];
