// Projects page: show the group chosen in the dropdown.
// A link like projects.html#academic opens that group directly.
const filter = document.getElementById("project-filter");

if (filter) {
  const showGroup = () => {
    document.querySelectorAll(".project-group").forEach((group) => {
      group.classList.toggle("visible", group.id === filter.value);
    });
  };

  const fromHash = location.hash.slice(1);
  if ([...filter.options].some((o) => o.value === fromHash)) {
    filter.value = fromHash;
  }

  filter.addEventListener("change", () => {
    history.replaceState(null, "", "#" + filter.value);
    showGroup();
  });
  showGroup();
}
