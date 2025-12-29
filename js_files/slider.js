let index = 0;

function showBranch(i) {
  document.getElementById("branch-title").textContent = branches[i].name;
  document.getElementById("branch-text").textContent = branches[i].text;
}

document.getElementById("next").onclick = () => {
  index = (index + 1) % branches.length;
  showBranch(index);
};

document.getElementById("prev").onclick = () => {
  index = (index - 1 + branches.length) % branches.length;
  showBranch(index);
};
