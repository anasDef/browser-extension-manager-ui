const extensions = [
  {
    logo: "./assets/images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: false,
    id: 1,
  },
  {
    logo: "./assets/images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: false,
    id: 2,
  },
  {
    logo: "./assets/images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
    id: 3,
  },
  {
    logo: "./assets/images/logo-json-wizard.svg",
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: false,
    id: 4,
  },
  {
    logo: "./assets/images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: false,
    id: 5,
  },
  {
    logo: "./assets/images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
    id: 6,
  },
  {
    logo: "./assets/images/logo-markup-notes.svg",
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: false,
    id: 7,
  },
  {
    logo: "./assets/images/logo-grid-guides.svg",
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
    id: 8,
  },
  {
    logo: "./assets/images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: false,
    id: 9,
  },
  {
    logo: "./assets/images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: false,
    id: 10,
  },
  {
    logo: "./assets/images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
    id: 12,
  },
  {
    logo: "./assets/images/logo-console-plus.svg",
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: false,
    id: 13,
  },
];

// ============= get all extensions ============= //
function renderExtensions(array) {
  const extensionsList = document.getElementById("extensions-list");
  extensionsList.innerHTML = "";
  array.map((ext) => {
    const li = document.createElement("li");
    li.classList.add("extensions__extension");
    li.id = ext.id;

    const mainInfo = document.createElement("div");
    mainInfo.classList.add("extensions__main-info");

    const extensionImg = document.createElement("img");
    extensionImg.classList.add("extensions__extension-icon");
    extensionImg.src = ext.logo;
    extensionImg.alt = "extension icon";

    mainInfo.appendChild(extensionImg);

    const extensionsInfo = document.createElement("div");
    extensionsInfo.classList.add("extensions__extension-info");

    const extensionTitle = document.createElement("h3");
    extensionTitle.classList.add("extensions__extension-title");
    extensionTitle.innerHTML = ext.name;

    const extensionDescription = document.createElement("span");
    extensionDescription.classList.add("extensions__extension-description");
    extensionDescription.innerHTML = ext.description;

    extensionsInfo.appendChild(extensionTitle);
    extensionsInfo.appendChild(extensionDescription);

    mainInfo.appendChild(extensionsInfo);

    const extensionControls = document.createElement("div");
    extensionControls.classList.add("extensions__controls");

    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    removeBtn.classList.add("extensions__remove-btn");
    removeBtn.addEventListener("click", () => {
      removeExtension(ext.id);
    });

    const stateBtn = document.createElement("button");
    stateBtn.classList.add("extension__state-btn");
    ext.isActive
      ? stateBtn.classList.add("extension__state-btn--active")
      : stateBtn.classList.add("extension__state-btn");
    stateBtn.addEventListener("click", () => {
      toggleExtensionsState(ext.id);
      stateBtn.classList.toggle("extension__state-btn--active");
    });

    extensionControls.appendChild(removeBtn);
    extensionControls.appendChild(stateBtn);

    li.appendChild(mainInfo);
    li.appendChild(extensionControls);

    extensionsList.appendChild(li);
  });
}

renderExtensions(extensions);

// ============= toggle extensions state ============= //
function toggleExtensionsState(id) {
  extensions.map((ext) => {
    if (ext.id === id) ext.isActive = !ext.isActive;
  });
}

// ============= remove extension ============= //
function removeExtension(id) {
  // get extension
  const extension = extensions.filter((ext) => ext.id === id)[0];

  // get extension index
  const extensionIndex = extensions.indexOf(extension);

  // remove the extension
  extensions.splice(extensionIndex, 1);

  // render the new extensions array
  renderExtensions(extensions);
}

// ============= handle controls buttons  ============= //
const showAllBtn = document.getElementById("all-btn");
const showActiveBtn = document.getElementById("active-btn");
const showInActiveBtn = document.getElementById("inactive-btn");
const controlButtons = document.querySelectorAll(".controls__button");

controlButtons.forEach((button) => {
  button.addEventListener("click", () => {
    controlButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

// show all extensions //
showAllBtn.addEventListener("click", () => {
  renderExtensions(extensions);
});

//  show active or inactive extensions  //

function showActiveOrInactive(condition) {
  const extensionsCopy = extensions.filter((ext) => ext.isActive == condition);
  renderExtensions(extensionsCopy);
}

showActiveBtn.addEventListener("click", () => {
  showActiveOrInactive(true);
});

showInActiveBtn.addEventListener("click", () => {
  showActiveOrInactive(false);
});

// ============= toggle theme ============= //
const themeButton = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");

themeButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  themeIcon.src = document.documentElement.classList.contains("dark")
    ? "./assets/images/icon-sun.svg"
    : "./assets/images/icon-moon.svg";
});
