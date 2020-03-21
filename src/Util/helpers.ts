export const scrollToDiv = (ref: React.RefObject<HTMLDivElement>): void => {
  console.log("successfully called scrollToDiv")
  if(ref && ref.current) {     
    console.log("calling scroll into view")
    ref.current.scrollIntoView({behavior: 'smooth'})
  }
}

export const enumToKeyArray = (E: object) => Object.keys(E).filter(k => typeof E[k as any] === "number");
export const enumToValueArray = (E: object) => enumToKeyArray(E).map(k => E[k as any]);