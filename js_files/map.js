let map;

function initMap() {
  map = L.map("map").setView([13.854, -89.470], 9);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
  }).addTo(map);

  branches.forEach((branch, i) => {
    const marker = L.marker(branch.coords).addTo(map);

    marker.on("mouseover", () => {
      marker.bindPopup(`<b>${branch.title}</b>`).openPopup();

      if (typeof window.goToBranch === "function") {
        window.goToBranch(i);
      }
    });

    marker.on("mouseout", () => {
      marker.closePopup();
    });
  });
}

document.addEventListener("DOMContentLoaded", initMap);