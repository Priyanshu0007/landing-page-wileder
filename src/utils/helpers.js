export const scrollTosection=(gotTo)=>{
    document.querySelector("#"+gotTo).scrollIntoView({behavior:"smooth"});
}