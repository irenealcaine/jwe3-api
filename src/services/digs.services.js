import digs from "../data/dig_sites.json" with { type: "json" };

export const getAllDigs = () => {
  return digs;
};
