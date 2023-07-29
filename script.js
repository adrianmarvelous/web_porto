// const buttons = document.getElementsByTagName("button");

// for (const button of buttons) {
//   button.addEventListener('click', () => {
//      var id = button.getAttribute("id");
    
//      var layerClass = "." + id+ "-layer";
     var layers = document.querySelectorAll(".top-layer");
     for (const layer of layers) {
       //layer.classList.add("active");
      setTimeout(() => {
        layer.classList.add("active");
      }, 10);
     };
//   });
// }
