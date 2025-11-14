import dinosaurs from "../data/dinosaurs.json" with { type: "json" };

// Campos que queremos mostrar en la lista (resumen)
const briefFields = [
  "id",
  "name",
  "slug",
  "image",
  "era",
  "description",
  "diet"
];

function pick(obj, keys) {
  const out = {};
  keys.forEach(k => {
    if (Object.prototype.hasOwnProperty.call(obj, k)) out[k] = obj[k];
  });
  return out;
}

export const getAllDinosaurs = () => {
  return dinosaurs.map(d => pick(d, briefFields));
};

export const getDinosaurBySlug = (slug) => {
  return dinosaurs.find(d => d.slug === slug);
};
