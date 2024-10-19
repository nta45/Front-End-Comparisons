// TC39 features like Arrow Functions, Template Literals, and Proxies

// Create state object using Proxy to track changes
let state = {
  count: 0,
};

// Proxy to handle state updates and re-render the view
const stateHandler = {
  set(obj, prop, value) {
    obj[prop] = value;
    render(); // Re-render whenever state changes
    return true;
  },
};

const proxyState = new Proxy(state, stateHandler);

// Function to update the DOM
const render = () => {
  document.getElementById("app").innerHTML = `
    <div class="container">
      <img src="https://tc39.es/assets/img/logo.svg" alt="TC39 Logo" class="logo">
      <h1>Count: ${proxyState.count}</h1>
      <button id="decrement">Decrement</button>
      <button id="reset">Reset</button>
      <button id="increment">Increment</button>
      <p>This is TC39 - nta45</p>
    </div>
  `;

  // Add event listeners after rendering
  document.getElementById("increment").onclick = () => proxyState.count++;
  document.getElementById("decrement").onclick = () => proxyState.count--;
  document.getElementById("reset").onclick = () => proxyState.count = 0;
};

// Initial render
render();

// Add styles to center and beautify the component
const style = document.createElement('style');
style.textContent = `
  body, html {
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
  }
  .container {
    text-align: center;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .logo {
    width: 100px;
    margin-bottom: 20px;
  }
  h1 {
    color: #333;
    margin-bottom: 20px;
  }
  button {
    margin: 5px;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    background-color: #6200ea;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  button:hover {
    background-color: #3700b3;
  }
  p {
    font-family: sans-serif;
    color: gray;
    margin-top: 20px;
  }
`;
document.head.appendChild(style);