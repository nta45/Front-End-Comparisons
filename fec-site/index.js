
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
        "Solid": "https://codesandbox.io/p/github/nta45/Front-End-Comparisons/main?file=%2Fmy-solid-project%2Fsrc%2FApp.jsx&import=true",
        "TC39": "https://codesandbox.io/p/github/nta45/Front-End-Comparisons/main?file=%2Fmy-tc39-project%2Fsrc%2Fapp.js&import=true"
      };
  
      // Framework Data with Numerical Metrics
      const frameworksData = {
        "React": {
          "Compilation Required": "Yes (Babel, Webpack)",
          "Lines of Code (LOC)": 300, // Average LOC for a simple component
          "Code Complexity": 7, // Scale: 1 (Low) - 10 (High)
          "Modularity": 9, // Scale: 1 - 10
          "SSR vs CSR": "CSR with SSR options",
          "Runtime Performance": 120, // ms to render a simple component
          "Popularity": 1500000, // NPM downloads per week
          "Ease of Use": 6, // Scale: 1 - 10
          "Future-Proofing": 9 // Scale: 1 - 10
        },
        "Vue": {
          "Compilation Required": "Yes (Vue CLI, Vite)",
          "Lines of Code (LOC)": 250,
          "Code Complexity": 5,
          "Modularity": 9,
          "SSR vs CSR": "CSR with SSR options",
          "Runtime Performance": 110,
          "Popularity": 1000000,
          "Ease of Use": 8,
          "Future-Proofing": 9
        },
        "Angular": {
          "Compilation Required": "Yes (Angular CLI)",
          "Lines of Code (LOC)": 500,
          "Code Complexity": 8,
          "Modularity": 9,
          "SSR vs CSR": "SSR with Angular Universal",
          "Runtime Performance": 150,
          "Popularity": 900000,
          "Ease of Use": 5,
          "Future-Proofing": 9
        },
        "Svelte": {
          "Compilation Required": "Yes (Svelte Compiler)",
          "Lines of Code (LOC)": 200,
          "Code Complexity": 4,
          "Modularity": 8,
          "SSR vs CSR": "SSR and CSR",
          "Runtime Performance": 90,
          "Popularity": 400000,
          "Ease of Use": 8,
          "Future-Proofing": 9
        },
        "Lit": {
          "Compilation Required": "Yes (Build Tools)",
          "Lines of Code (LOC)": 220,
          "Code Complexity": 5,
          "Modularity": 7,
          "SSR vs CSR": "CSR",
          "Runtime Performance": 100,
          "Popularity": 300000,
          "Ease of Use": 7,
          "Future-Proofing": 8
        },
        "VanJS": {
          "Compilation Required": "No",
          "Lines of Code (LOC)": 150,
          "Code Complexity": 3,
          "Modularity": 6,
          "SSR vs CSR": "CSR",
          "Runtime Performance": 95,
          "Popularity": 50000,
          "Ease of Use": 9,
          "Future-Proofing": 7
        },
        "Web Components": {
          "Compilation Required": "No",
          "Lines of Code (LOC)": 180,
          "Code Complexity": 4,
          "Modularity": 7,
          "SSR vs CSR": "CSR",
          "Runtime Performance": 100,
          "Popularity": 200000,
          "Ease of Use": 7,
          "Future-Proofing": 10
        },
        "HTMX": {
          "Compilation Required": "No",
          "Lines of Code (LOC)": 100,
          "Code Complexity": 2,
          "Modularity": 5,
          "SSR vs CSR": "Server-Driven",
          "Runtime Performance": 80,
          "Popularity": 100000,
          "Ease of Use": 9,
          "Future-Proofing": 8
        },
        "UINL": {
          "Compilation Required": "No",
          "Lines of Code (LOC)": 160,
          "Code Complexity": 4,
          "Modularity": 6,
          "SSR vs CSR": "CSR",
          "Runtime Performance": 110,
          "Popularity": 40000,
          "Ease of Use": 7,
          "Future-Proofing": 6
        },
        "Solid": {
          "Compilation Required": "Yes (Vite)",
          "Lines of Code (LOC)": 210,
          "Code Complexity": 5,
          "Modularity": 8,
          "SSR vs CSR": "CSR with SSR options",
          "Runtime Performance": 85,
          "Popularity": 350000,
          "Ease of Use": 8,
          "Future-Proofing": 9
        },
        "TC39": {
          "Compilation Required": "N/A",
          "Lines of Code (LOC)": "N/A",
          "Code Complexity": "N/A",
          "Modularity": "N/A",
          "SSR vs CSR": "N/A",
          "Runtime Performance": "N/A",
          "Popularity": "N/A",
          "Ease of Use": "N/A",
          "Future-Proofing": "N/A"
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
        weighting["Runtime Performance"] = parseInt(document.getElementById('performance-weight').value);
        weighting["Ease of Use"] = parseInt(document.getElementById('ease-weight').value);
        weighting["Future-Proofing"] = parseInt(document.getElementById('future-weight').value);
      }
  
      // Function to Calculate Weighted Score for a Framework
      function calculateWeightedScore(framework) {
        const data = frameworksData[framework];
        let score = 0;
        // Only consider weighted criteria
        if (typeof data["Runtime Performance"] === 'number') {
          score += (data["Runtime Performance"] || 0) * weighting["Runtime Performance"];
        }
        if (typeof data["Ease of Use"] === 'number') {
          score += (data["Ease of Use"] || 0) * weighting["Ease of Use"];
        }
        if (typeof data["Future-Proofing"] === 'number') {
          score += (data["Future-Proofing"] || 0) * weighting["Future-Proofing"];
        }
        return score;
      }
  
      // Function to Sort Frameworks Based on Weighted Score
      function sortFrameworksByWeightedScore(frameworks) {
        return frameworks.sort((a, b) => calculateWeightedScore(b) - calculateWeightedScore(a));
      }
  
      // Function to Generate Comparison Table with Weighted Scores
      function generateTable(selectedFrameworks, selectedCriteria) {
        const sortedFrameworks = sortFrameworksByWeightedScore(selectedFrameworks);
        const tableBody = document.querySelector('#comparison-table tbody');
        tableBody.innerHTML = ''; // Clear existing rows

        console.log(selectedFrameworks);
  
        sortedFrameworks.forEach(framework => {
          const data = frameworksData[framework];
          const row = document.createElement('tr');
  
          // Framework Name
          const nameCell = document.createElement('td');
          nameCell.textContent = framework;
          row.appendChild(nameCell);
  
          // Populate based on selected criteria
          selectedCriteria.forEach(criteria => {
            const cell = document.createElement('td');
            let value = data[criteria] || "N/A";
            
            // Format numerical values with commas for readability
            if (typeof value === 'number') {
              value = value.toLocaleString();
            }
  
            cell.textContent = value;
            row.appendChild(cell);
          });
  
          // Calculate and Append Weighted Score
          const weightedScore = calculateWeightedScore(framework);
          const weightedCell = document.createElement('td');
          weightedCell.textContent = (weightedScore > 0) ? weightedScore.toLocaleString() : "N/A";
          row.appendChild(weightedCell);
  
          tableBody.appendChild(row);
        });
  
        // Show or hide the no-selection message
        const noSelectionMessage = document.getElementById('no-selection-message');
        if (sortedFrameworks.length === 0) {
          noSelectionMessage.style.display = 'block';
        } else {
          noSelectionMessage.style.display = 'none';
        }
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
                  label: function(context) {
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
  
      // Function to Sort Frameworks Based on Weighted Score
      function sortFrameworksByWeightedScore(frameworks) {
        return frameworks.sort((a, b) => calculateWeightedScore(b) - calculateWeightedScore(a));
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
  
      // Function to Render Radar Chart in the Dashboard
      function renderRadarChart(selectedFrameworks, selectedCriteria) {
        const ctx = document.getElementById('radarChart').getContext('2d');
  
        // Define the metrics to include in the Radar Chart
        // Exclude non-numerical or less relevant criteria
        const radarMetrics = ["Lines of Code (LOC)", "Code Complexity", "Modularity", "Runtime Performance", "Popularity", "Ease of Use", "Future-Proofing"];
  
        // Filter selected criteria to include only radarMetrics
        const filteredCriteria = selectedCriteria.filter(criteria => radarMetrics.includes(criteria));
  
        // Prepare data for each framework
        const datasets = selectedFrameworks.map(framework => {
          const data = filteredCriteria.map(criteria => {
            const value = frameworksData[framework][criteria];
            // Apply weighting if the criterion has a weight
            if (criteria in weighting && typeof value === 'number') {
              return value * weighting[criteria];
            }
            // Handle non-numeric or 'N/A' values
            return (typeof value === 'number') ? value : 0;
          });
  
          // Assign a unique color for each framework
          const color = getRandomColor();
  
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
  
        // Destroy existing Radar Chart if it exists
        if (window.radarChartInstance) {
          window.radarChartInstance.destroy();
        }
  
        // Create new Radar Chart
        window.radarChartInstance = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: filteredCriteria,
            datasets: datasets
          },
          options: {
            elements: {
              line: {
                borderWidth: 3
              }
            },
            scales: {
              r: {
                beginAtZero: true,
                ticks: {
                  // Adjust ticks based on the maximum weighted value
                  max: getMaxRadarValue(selectedFrameworks, filteredCriteria),
                  stepSize: 50
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
        for (let i = 0; i < 6; i++ ) {
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
  
      // Function to Handle Feedback Form Submission
      document.getElementById('feedback-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const feedback = document.getElementById('feedback').value;
        // Implement functionality to send feedback to your server or email
        alert('Thank you for your feedback!');
        this.reset();
      });
  
      // Initial Setup
      document.addEventListener('DOMContentLoaded', () => {
        setupTabs();
        setupFilters();
        setupWeightingSliders();
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