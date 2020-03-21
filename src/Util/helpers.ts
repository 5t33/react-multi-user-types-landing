export const scrollToDiv = (ref: React.RefObject<HTMLDivElement>): void => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
};

export const enumToKeyArray = (E: object) =>
  Object.keys(E).filter(k => typeof E[k as string | number] === "number");
export const enumToValueArray = (E: object) =>
  enumToKeyArray(E).map(k => E[k as string | number]);
