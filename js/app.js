const imagenes = document.querySelectorAll(".card img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imagenGrande");
const cerrar = document.querySelector(".cerrar");

imagenes.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

cerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if(e.target !== modalImg){
        modal.style.display = "none";
    }
});
