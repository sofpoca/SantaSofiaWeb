const branches = [
  { title: "La Libertad", text: "Ferretería Santa Sofía - La Libertad, Carretera del Litoral, La Cantera, San Diego, El Jute, Puerto de La Libertad, La Libertad Costa, La Libertad, 0000, El Salvador", coords: [13.4874590, -89.3035001] },
  { title: "Santa Ana", text: "Ferretería Santa Sofía - Santa Ana, Barrio San Sebastián, Santa Ana, Santa Ana Centro, Santa Ana, El Salvador", coords: [13.985061269183506, -89.56326234966362] },
  { title: "Cara Sucia", text: "Ferretería Santa Sofía - Carretera del Litoral, La Cuchilla, Cara Sucia, San Francisco Menéndez, Ahuachapán Sur, Ahuachapán, 2113, El Salvador", coords: [13.7867881, -90.0369702] },
  { title: "Metalío", text: "Ferretería Santa Sofía - Metalío, Carretera del Litoral, Canton Metalio, Acajutla, Sonsonate Oeste, Sonsonate, El Salvador", coords: [13.646708782924973, -89.88195749750426] },
  { title: "Sonsonate Centro", text: "Ferretería Santa Sofía - Sonsonate centro, 5a Avenida Norte, Barrio San Francisco, Sonsonate, Sonsonate Centro, Sonsonate, 9601, El Salvador", coords: [13.7218498, -89.7307029] },
  { title: "Sonsonate - Sensunapan", text: "Ferreteria Santa Sofía - 6a Avenida Sur, Lotificacion Asturias, Sonsonate, Sonsonate Centro, Sonsonate, 9601, El Salvador", coords: [13.7141421, -89.7281051] },
  { title: "Sonsonate - Sonzacate", text: "Ferreteria Santa Sofia, Boulevard Las Palmeras, Colonia San Francisco, Urbanizacion Acuario, Sonzacate, Sonsonate Centro, Sonsonate, 9601, El Salvador", coords: [13.7275418, -89.7154981] }
];


let index = 0;

const card = document.getElementById("branch-card");
const titleEl = document.getElementById("branch-title");
const textEl = document.getElementById("branch-text");

function updateBranch(direction) {
  card.classList.remove("slide-left", "slide-right");
  void card.offsetWidth;

  titleEl.textContent = branches[index].title;
  textEl.textContent = branches[index].text;

  card.classList.add(direction);

  if (typeof updateMap === "function") {
    updateMap(branches[index].coords, branches[index].title);
  }
}

document.getElementById("next").onclick = () => {
  index = (index + 1) % branches.length;
  updateBranch("slide-right");
};

document.getElementById("prev").onclick = () => {
  index = (index - 1 + branches.length) % branches.length;
  updateBranch("slide-left");
};

function goToBranch(i, direction = "slide-right") {
  index = i;
  updateBranch(direction);
}

// 🔑 Hacerla accesible desde map.js
window.goToBranch = goToBranch;

updateBranch("slide-right");
