export const BASE_POINT = "https://jsonplaceholder.typicode.com";
console.log(BASE_POINT);

export const API = "https://typicode.com";

// export function myButtonClick() {
//   const btn = document.querySelector("button") as HTMLButtonElement;
//   btn.addEventListener("click", (e: MouseEvent): void => {
//     if (e.target) {
//       console.log(e.target);
//       console.log(2 + 2, "hello i m button");
//     }
//     window.alert(2 + 2);
//     window.alert("hello i m button");
//   });
// }

export function discountPriceOfItem(price: number, discount: number): number {
  const discountPrice = (price * discount) / 100;
  return price - discountPrice;
}
