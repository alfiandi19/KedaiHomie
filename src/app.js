document.addEventListener("alpine:init", () => {
  alpine.data("product", () => ({
    item: [
      { id: 1, name: "Robusta Brazil", img: "1.jpg", price: 20000 },
      { id: 2, name: "Arabica Blend", img: "2.jpg", price: 20000 },
      { id: 3, name: "Primo Passo", img: "3.jpg", price: 25000 },
      { id: 4, name: "Aceh Gayo", img: "4.jpg", price: 20000 },
      { id: 4, name: "Luwak", img: "5.jpg", price: 25000 },
    ],
  }));
});
