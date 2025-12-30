let map;
let mapInitialized = false;
let activeIndex = null;
let resetTimer = null;

const initialView = {
  center: [13.854, -89.470],
  zoom: 9
};

function initMap() {
  if (mapInitialized) return;

  map = L.map("map").setView(initialView.center, initialView.zoom);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
  }).addTo(map);

  branches.forEach((branch, i) => {
    const marker = L.marker(branch.coords).addTo(map);

    marker.on("mouseover", () => {
      if (resetTimer) {
        clearTimeout(resetTimer);
        resetTimer = null;
      }

      if (activeIndex === i) return;
      activeIndex = i;

      marker.bindPopup(`<b>${branch.title}</b>`).openPopup();

      if (typeof goToBranch === "function") {
        goToBranch(i);
      }

      map.flyTo(branch.coords, 13, {
        duration: 0.9,
        easeLinearity: 0.3
      });
    });

    marker.on("mouseout", () => {
      resetTimer = setTimeout(() => {
        activeIndex = null;
        map.flyTo(initialView.center, initialView.zoom, {
          duration: 1,
          easeLinearity: 0.3
        });
      }, 3000);
    });

    marker.on("click", () => {
      window.open(branch.link, "_blank");
    });
  });

  mapInitialized = true;
}

function updateMap(coords) {
  if (!map) return;

  if (resetTimer) {
    clearTimeout(resetTimer);
    resetTimer = null;
  }

  map.flyTo(coords, 13, {
    duration: 0.7,
    easeLinearity: 0.1
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver(() => {
    const section = document.getElementById("sucursales");
    if (section && section.classList.contains("active")) {
      initMap();
      setTimeout(() => {
        map.invalidateSize();
      }, 300);
    }
  });

  observer.observe(document.body, {
    attributes: true,
    subtree: true,
    attributeFilter: ["class"]
  });
});
