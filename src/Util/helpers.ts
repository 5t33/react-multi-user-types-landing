export const scrollToDiv = (ref: React.RefObject<HTMLDivElement>): void => {
  console.log("successfully called scrollToDiv")
  if(ref && ref.current) {     
    console.log("calling scroll into view")
    ref.current.scrollIntoView({behavior: 'smooth'})
  }
}