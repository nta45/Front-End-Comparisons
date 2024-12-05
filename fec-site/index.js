function generateWeightingSliders() {
  const criteria = Object.keys(frameworksData["React"]); // Example: Get criteria from one framework
  const weightingContainer = document.getElementById("criteria-weighting");
  weightingContainer.innerHTML = ""; // Clear existing sliders

  criteria.forEach(criterion => {
    // Skip non-numerical criteria
    if (typeof frameworksData["React"][criterion] !== "number") return;

    const sliderDiv = document.createElement("div");
    sliderDiv.classList.add("weighting-slider");

    const label = document.createElement("label");
    label.setAttribute("for", `${criterion}-weight`);
    label.textContent = `${criterion}:`;

    const slider = document.createElement("input");
    slider.id = `${criterion}-weight`;
    slider.type = "range";
    slider.min = 0;
    slider.max = 3;
    slider.value = 3; // Default weight
    slider.addEventListener("input", updateWeighting); // Update weights on change

    sliderDiv.appendChild(label);
    sliderDiv.appendChild(slider);
    weightingContainer.appendChild(sliderDiv);
  });
}

// Mapping of Frameworks to their CodeSandbox Embed URLs
const codeSandboxURLs = {
  "React": "https://codesandbox.io/p/github/nta45/Front-End-Comparisons/main?file=%2Fmy-react-project%2Fsrc%2FApp.js&import=true",
  "Vue": "https://codesandbox.io/p/github/nta45/Front-End-Comparisons/main?file=%2Fmy-vue-project%2Fsrc%2FApp.vue&import=true",
  "Angular": "https://codesandbox.io/p/github/nta45/Front-End-Comparisons/main?file=%2Fmy-angular-project%2Fsrc%2Fapp%2Fapp.component.ts&import=true",
  "Svelte": "https://codesandbox.io/p/github/nta45/Front-End-Comparisons/main?file=%2Fmy-svelte-project%2Fsrc%2FApp.svelte&import=true",
  "Lit": "https://codesandbox.io/p/github/nta45/Front-End-Comparisons/main?file=%2Fmy-lit-project%2Fsrc%2Fcounter-component.js&import=true",
  "VanJS": "https://codesandbox.io/p/github/nta45/Front-End-Comparisons/main?file=%2Fmy-vanjs-project%2Fsrc%2Fapp.js&import=true",
  "Web Components": "https://codesandbox.io/p/github/nta45/Front-End-Comparisons/main?file=%2Fmy-webcomponents-project%2Fsrc%2Fapp.js&import=true",
  "HTMX": "https://codesandbox.io/p/github/nta45/Front-End-Comparisons/main?file=%2Fmy-htmx-project%2Findex.html&import=true",
  "UINL": "https://codesandbox.io/p/github/nta45/Front-End-Comparisons/main?file=%2Fmy-uinl-project%2Fsrc%2Fapp.js&import=true",
  "Solid": "https://codesandbox.io/p/github/nta45/Front-End-Comparisons/main?file=%2Fmy-solid-project%2Fsrc%2FApp.jsx&import=true"
};

// Framework Data with Numerical Metrics
const frameworksData = {
  "React": {
    "Compilation Required": "Yes (Babel, Webpack)",
    "Lines of Code (LOC)": 280, // Updated based on latest analysis
    "Code Complexity": 7,
    "Modularity": 9,
    "SSR vs CSR": "CSR with SSR options",
    "Runtime Performance": 115, // Updated performance metric
    "Popularity": 1600000, // Increased NPM downloads
    "Ease of Use": 6,
    "Future-Proofing": 9,
    "NathanScore": 0 // To be added manually
  },
  "Vue": {
    "Compilation Required": "Yes (Vue CLI, Vite)",
    "Lines of Code (LOC)": 240, // Updated
    "Code Complexity": 5,
    "Modularity": 9,
    "SSR vs CSR": "CSR with SSR options",
    "Runtime Performance": 105, // Updated
    "Popularity": 1100000, // Updated
    "Ease of Use": 8,
    "Future-Proofing": 9,
    "NathanScore": 0 // To be added manually
  },
  "Angular": {
    "Compilation Required": "Yes (Angular CLI)",
    "Lines of Code (LOC)": 480, // Updated
    "Code Complexity": 8,
    "Modularity": 9,
    "SSR vs CSR": "SSR with Angular Universal",
    "Runtime Performance": 140, // Updated
    "Popularity": 950000, // Updated
    "Ease of Use": 5,
    "Future-Proofing": 9,
    "NathanScore": 0 // To be added manually
  },
  "Svelte": {
    "Compilation Required": "Yes (Svelte Compiler)",
    "Lines of Code (LOC)": 190, // Updated
    "Code Complexity": 4,
    "Modularity": 8,
    "SSR vs CSR": "SSR and CSR",
    "Runtime Performance": 85, // Updated
    "Popularity": 420000, // Updated
    "Ease of Use": 8,
    "Future-Proofing": 9,
    "NathanScore": 0 // To be added manually
  },
  "Lit": {
    "Compilation Required": "Yes (Build Tools)",
    "Lines of Code (LOC)": 210, // Updated
    "Code Complexity": 5,
    "Modularity": 7,
    "SSR vs CSR": "CSR",
    "Runtime Performance": 95, // Updated
    "Popularity": 320000, // Updated
    "Ease of Use": 7,
    "Future-Proofing": 8,
    "NathanScore": 0 // To be added manually
  },
  "VanJS": {
    "Compilation Required": "No",
    "Lines of Code (LOC)": 140, // Updated
    "Code Complexity": 3,
    "Modularity": 6,
    "SSR vs CSR": "CSR",
    "Runtime Performance": 90, // Updated
    "Popularity": 55000, // Updated
    "Ease of Use": 9,
    "Future-Proofing": 7,
    "NathanScore": 0 // To be added manually
  },
  "Web Components": {
    "Compilation Required": "No",
    "Lines of Code (LOC)": 170, // Updated
    "Code Complexity": 4,
    "Modularity": 7,
    "SSR vs CSR": "CSR",
    "Runtime Performance": 95, // Updated
    "Popularity": 210000, // Updated
    "Ease of Use": 7,
    "Future-Proofing": 10,
    "NathanScore": 0// To be added manually
  },
  "HTMX": {
    "Compilation Required": "No",
    "Lines of Code (LOC)": 110, // Updated
    "Code Complexity": 2,
    "Modularity": 5,
    "SSR vs CSR": "Server-Driven",
    "Runtime Performance": 85, // Updated
    "Popularity": 110000, // Updated
    "Ease of Use": 9,
    "Future-Proofing": 8,
    "NathanScore": 0 // To be added manually
  },
  "UINL": {
    "Compilation Required": "No",
    "Lines of Code (LOC)": 150, // Updated
    "Code Complexity": 4,
    "Modularity": 6,
    "SSR vs CSR": "CSR",
    "Runtime Performance": 100, // Updated
    "Popularity": 45000, // Updated
    "Ease of Use": 7,
    "Future-Proofing": 6,
    "NathanScore": 0 // To be added manually
  },
  "Solid": {
    "Compilation Required": "Yes (Vite)",
    "Lines of Code (LOC)": 200, // Updated
    "Code Complexity": 5,
    "Modularity": 8,
    "SSR vs CSR": "CSR with SSR options",
    "Runtime Performance": 80, // Updated
    "Popularity": 380000, // Updated
    "Ease of Use": 8,
    "Future-Proofing": 9,
    "NathanScore": 0 // To be added manually
  }
};

// Global Weighting Object
let weighting = {
  "Runtime Performance": 3,
  "Ease of Use": 3,
  "Future-Proofing": 3
};

// Function to Update Weighting Based on Slider Inputs
function updateWeighting() {
  const criteria = Object.keys(frameworksData["React"]); // Example: Get criteria from one framework

  criteria.forEach(criterion => {
    const slider = document.getElementById(`${criterion}-weight`);
    if (slider) {
      weighting[criterion] = parseInt(slider.value);
    }
  });

  // Update comparison and recommendation
  updateComparison();
}

// Function to Calculate Weighted Score for a Framework
function calculateWeightedScore(framework, normalizedData) {
  if (!normalizedData || !normalizedData[framework]) {
    console.error(`Framework "${framework}" is not defined in normalizedData`, normalizedData);
    return 0; // Return 0 if the framework is not found
  }

  const data = normalizedData[framework];
  let score = 0;

  Object.keys(data).forEach(criterion => {
    if (typeof data[criterion] === "number" && weighting[criterion]) {
      score += data[criterion] * weighting[criterion];
    }
  });

  return score;
}

function generateTable(selectedFrameworks, selectedCriteria) {
  const normalizedData = normalizeDataForDashboard(selectedCriteria);
  const tableBody = document.querySelector('#comparison-table tbody');
  const tableHead = document.querySelector('#comparison-table thead tr');

  // Clear existing rows
  tableBody.innerHTML = '';
  tableHead.innerHTML = '';

  // Check for empty selections
  if (selectedFrameworks.length === 0 || selectedCriteria.length === 0) {
    document.getElementById('no-selection-message').style.display = 'block';
    return;
  }

  document.getElementById('no-selection-message').style.display = 'none';

  // Populate table headers
  tableHead.innerHTML = '<th>Framework</th>';
  selectedCriteria.forEach(criteria => {
    const header = document.createElement('th');
    header.textContent = criteria;
    tableHead.appendChild(header);
  });

  const weightedScoreHeader = document.createElement('th');
  weightedScoreHeader.textContent = 'Weighted Score';
  weightedScoreHeader.classList.add('highlight'); // Add class for highlighting
  tableHead.appendChild(weightedScoreHeader);

  // Sort frameworks by weighted score
  const sortedFrameworks = sortFrameworksByWeightedScore(selectedFrameworks, normalizedData);

  // Populate table rows
  sortedFrameworks.forEach(framework => {
    const row = document.createElement('tr');

    // Framework Name
    const nameCell = document.createElement('td');
    nameCell.textContent = framework;
    row.appendChild(nameCell);

    // Add data for selected criteria
    selectedCriteria.forEach(criteria => {
      const cell = document.createElement('td');
      const value = frameworksData[framework][criteria] || 'N/A';
      cell.textContent = typeof value === 'number' ? value.toLocaleString() : value;
      row.appendChild(cell);
    });

    // Add weighted score
    const weightedScore = calculateWeightedScore(framework, normalizedData);
    const weightedCell = document.createElement('td');
    weightedCell.textContent = weightedScore.toFixed(2); // Display with 2 decimal places
    weightedCell.classList.add('highlight'); // Add class for highlighting
    row.appendChild(weightedCell);

    tableBody.appendChild(row);
  });

  console.log("Table generated successfully");
}

function generateRecommendation(selectedFrameworks, normalizedData) {
  if (selectedFrameworks.length === 0) {
    document.getElementById("custom-recommendation").textContent = "";
    return;
  }

  // Sort frameworks by weighted score
  const sortedFrameworks = selectedFrameworks.sort(
    (a, b) => calculateWeightedScore(b, normalizedData) - calculateWeightedScore(a, normalizedData)
  );

  // Best framework based on custom weighting
  const bestFramework = sortedFrameworks[0];

  // Update recommendation message
  const recommendationMessage = document.getElementById("custom-recommendation");
  recommendationMessage.innerHTML = `<strong>With your choice of criteria weighting, you should choose ${bestFramework}.</strong>`;
}

// Function to Sort Frameworks Based on Weighted Score
function sortFrameworksByWeightedScore(frameworks, normalizedData) {
  return frameworks.sort((a, b) => {
    const scoreA = calculateWeightedScore(a, normalizedData);
    const scoreB = calculateWeightedScore(b, normalizedData);
    return scoreB - scoreA; // Sort descending
  });
}

// Function to Render Performance Chart with Weighting
function renderPerformanceChart(selectedFrameworks) {
  const ctx = document.getElementById('performanceChart').getContext('2d');

  // Extract performance data with weighting
  const labels = selectedFrameworks;
  const dataValues = selectedFrameworks.map(fw => {
    const perf = frameworksData[fw]["Runtime Performance"];
    return (typeof perf === 'number') ? perf * weighting["Runtime Performance"] : 0; // Apply weighting
  });

  // Destroy existing chart if it exists to prevent duplication
  if (window.performanceChartInstance) {
    window.performanceChartInstance.destroy();
  }

  // Create new chart
  window.performanceChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Runtime Performance (ms) * Weight',
        data: dataValues,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: 200, // Adjust based on your data
          ticks: {
            stepSize: 50
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              return `${context.parsed.y} ms`;
            }
          }
        }
      }
    }
  });
}

// Function to Handle Tab Switching
function setupTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      // Hide all tab contents
      tabContents.forEach(content => content.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      // Show corresponding tab content
      const tabId = button.getAttribute('data-tab');
      const activeContent = document.getElementById(tabId);
      activeContent.classList.add('active');

      // Lazy Load Code Snippets
      if (tabId === 'code') {
        const selectedFrameworks = getSelectedFrameworks();
        updateCodeSnippets(selectedFrameworks);
      }

      // Render Radar Chart if Dashboard is active
      if (tabId === 'dashboard') {
        const selectedFrameworks = getSelectedFrameworks();
        const selectedCriteria = getSelectedCriteria();
        renderRadarChart(selectedFrameworks, selectedCriteria);
      }
    });
  });
}

// Function to Get Selected Frameworks
function getSelectedFrameworks() {
  const selected = Array.from(document.querySelectorAll('input[name="framework"]:checked'))
    .map(cb => cb.value);
  return selected;
}

// Function to Get Selected Criteria
function getSelectedCriteria() {
  const selected = Array.from(document.querySelectorAll('input[name="criteria"]:checked'))
    .map(cb => cb.value);
  return selected;
}

// Function to Handle Weighting Sliders Changes
function setupWeightingSliders() {
  const sliders = document.querySelectorAll('.weighting-slider input[type="range"]');
  sliders.forEach(slider => {
    slider.addEventListener('input', () => {
      updateWeighting(); // Update the weighting values
      const selectedFrameworks = getSelectedFrameworks();
      const selectedCriteria = getSelectedCriteria();
      generateTable(selectedFrameworks, selectedCriteria);
      renderPerformanceChart(selectedFrameworks);
      renderRadarChart(selectedFrameworks, selectedCriteria); // Update Radar Chart
    });
  });
}

// Function to Update Code Snippets Based on Selected Frameworks
function updateCodeSnippets(selectedFrameworks) {
  const container = document.getElementById('code-snippets-container');
  container.innerHTML = ''; // Clear existing snippets

  if (selectedFrameworks.length === 0) {
    container.innerHTML = '<div class="no-selection">Select frameworks to view code snippets.</div>';
    return;
  }

  selectedFrameworks.forEach(framework => {
    const iframeURL = codeSandboxURLs[framework];
    if (iframeURL) {
      const snippetDiv = document.createElement('div');
      snippetDiv.classList.add('code-snippet');

      const heading = document.createElement('h3');
      heading.textContent = framework;
      snippetDiv.appendChild(heading);

      // Create Loader
      const loader = document.createElement('div');
      loader.classList.add('loader');
      snippetDiv.appendChild(loader);

      const iframe = document.createElement('iframe');
      iframe.src = iframeURL;
      iframe.allow = "accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; microphone; midi; payment; usb; vr";
      iframe.sandbox = "allow-forms allow-modals allow-popups allow-scripts allow-same-origin";
      // Updated part in updateCodeSnippets function
iframe.style.width = "100%";
iframe.style.height = "80vh";
iframe.style.border = "1px solid #ccc";
iframe.style.borderRadius = "8px";

      // Hide Loader Once Iframe Loads
      iframe.onload = () => {
        loader.style.display = 'none';
      };

      // Handle Iframe Loading Errors
      iframe.onerror = () => {
        loader.style.display = 'none';
        const errorMsg = document.createElement('div');
        errorMsg.classList.add('no-selection');
        errorMsg.textContent = 'Failed to load the CodeSandbox project.';
        snippetDiv.appendChild(errorMsg);
      };

      snippetDiv.appendChild(iframe);

      container.appendChild(snippetDiv);
    }
  });
}

// Function to Normalize Data for Interactive Dashboard
function normalizeDataForDashboard(criteria) {
  const normalizedData = {};

  // Ensure `criteria` is not empty
  if (!criteria || criteria.length === 0) {
    console.error("No criteria selected for normalization");
    return normalizedData;
  }

  criteria.forEach(criterion => {
    let min = Infinity, max = -Infinity;

    // Find min and max for this criterion
    Object.keys(frameworksData).forEach(framework => {
      const value = frameworksData[framework][criterion];
      if (typeof value === 'number') {
        min = Math.min(min, value);
        max = Math.max(max, value);
      }
    });

    // Normalize values
    Object.keys(frameworksData).forEach(framework => {
      const value = frameworksData[framework][criterion];
      if (!normalizedData[framework]) normalizedData[framework] = {};

      if (typeof value === 'number') {
        if (["Runtime Performance", "Lines of Code (LOC)", "Code Complexity"].includes(criterion)) {
          normalizedData[framework][criterion] = ((1 - (value - min) / (max - min)) * 100);
        } else {
          normalizedData[framework][criterion] = ((value - min) / (max - min)) * 100;
        }
      } else {
        normalizedData[framework][criterion] = 0; // Default to 0 for non-numerical values
      }
    });
  });

  console.log("Normalized Data:", normalizedData);
  return normalizedData;
}

// Predefined Set of Contrasting Colors
const contrastingColors = [
  "#FFA500", // Orange
  "#33FF57", // Green
  "#3357FF", // Blue
  "#FF33A6", // Pink
  "#FFC300", // Yellow
  "#8E44AD", // Purple
  "#1ABC9C", // Teal
  "#E74C3C", // Red
  "#2ECC71", // Lime Green
  "#3498DB"  // Sky Blue
];

// Function to Get Color by Index
function getContrastingColor(index) {
  return contrastingColors[index % contrastingColors.length];
}

// Function to Render Radar Chart Using Contrasting Colors
function renderRadarChart(selectedFrameworks, selectedCriteria) {
  selectedCriteria = selectedCriteria.filter(
    criterion => !["Compilation Required", "SSR vs CSR"].includes(criterion)
  );

  const ctx = document.getElementById('radarChart').getContext('2d');
  const normalizedData = normalizeDataForDashboard(selectedCriteria);

  const datasets = selectedFrameworks.map((framework, index) => {
    const data = selectedCriteria.map(criteria => normalizedData[framework][criteria] || 0);

    const color = getContrastingColor(index);

    return {
      label: framework,
      data: data,
      fill: true,
      backgroundColor: hexToRGBA(color, 0.2),
      borderColor: color,
      pointBackgroundColor: color,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: color
    };
  });

  if (window.radarChartInstance) {
    window.radarChartInstance.destroy();
  }

  window.radarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: selectedCriteria,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          beginAtZero: true,
          ticks: {
            stepSize: 20
          }
        }
      }
    }
  });
}

// Utility Function to Generate Random Color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Utility Function to Convert Hex to RGBA
function hexToRGBA(hex, alpha) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Function to Determine Maximum Value for Radar Chart Scales
function getMaxRadarValue(frameworks, criteria) {
  let max = 0;
  frameworks.forEach(framework => {
    criteria.forEach(criteria => {
      let value = frameworksData[framework][criteria];
      if (criteria in weighting && typeof value === 'number') {
        value = value * weighting[criteria];
      }
      if (typeof value === 'number' && value > max) {
        max = value;
      }
    });
  });
  // Round up to the nearest 50 for better scaling
  return Math.ceil(max / 50) * 50;
}

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
  generateWeightingSliders(); // Generate sliders for all criteria
  setupTabs();
  setupFilters();
  generateTable([], getSelectedCriteria());
  // Do not call updateCodeSnippets here for lazy loading
  renderRadarChart([], []); // Initialize Radar Chart
});

document.querySelectorAll('input[name="framework"]').forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const selectedFrameworks = getSelectedFrameworks();
    const selectedCriteria = getSelectedCriteria();
    generateTable(selectedFrameworks, selectedCriteria);
  });
});

// Select All Button
const selectAllButton = document.getElementById('select-all');
selectAllButton.addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('input[name="framework"]');
  checkboxes.forEach(checkbox => checkbox.checked = true);
  updateComparison(); // Call function to update the comparison
});

// Deselect All Button
const deselectAllButton = document.getElementById('deselect-all');
deselectAllButton.addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('input[name="framework"]');
  checkboxes.forEach(checkbox => checkbox.checked = false);
  updateComparison(); // Call function to clear the comparison
});

// Function to Get Selected Criteria
function getSelectedCriteria() {
  return Array.from(document.querySelectorAll('input[name="criteria"]:checked')).map(cb => cb.value);
}

// Function to Update Comparison Table Based on Selected Criteria
function updateComparison() {
  const selectedFrameworks = Array.from(document.querySelectorAll('input[name="framework"]:checked'))
    .map(checkbox => checkbox.value);

  const selectedCriteria = Array.from(document.querySelectorAll('input[name="criteria"]:checked'))
    .map(checkbox => checkbox.value);

  const normalizedData = normalizeDataForDashboard(selectedCriteria);

  generateTable(selectedFrameworks, selectedCriteria);
  generateRecommendation(selectedFrameworks, normalizedData);
}

// Add Event Listeners to Criteria Checkboxes
document.querySelectorAll('input[name="criteria"]').forEach(checkbox => {
  checkbox.addEventListener('change', updateComparison);
});

// Ensure Framework Checkboxes Also Trigger Table Update
document.querySelectorAll('input[name="framework"]').forEach(checkbox => {
  checkbox.addEventListener('change', updateComparison);
});

document.querySelectorAll('.weighting-slider input[type="range"]').forEach(slider => {
  slider.addEventListener('input', () => {
    updateWeighting();
    const selectedFrameworks = getSelectedFrameworks();
    const selectedCriteria = getSelectedCriteria();
    generateTable(selectedFrameworks, selectedCriteria);
  });
});

document.querySelectorAll('.weighting-slider input[type="range"]').forEach(slider => {
  slider.addEventListener('input', updateComparison);
});

document.querySelectorAll('input[name="framework"]').forEach(checkbox => {
  checkbox.addEventListener('change', updateComparison);
});

document.querySelectorAll('input[name="criteria"]').forEach(checkbox => {
  checkbox.addEventListener('change', updateComparison);
});