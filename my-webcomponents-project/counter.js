class MyEnhancedCounter extends HTMLElement {
  constructor() {
    super();
    
    // Attach shadow DOM
    this.attachShadow({ mode: 'open' });

    // Initial state from attribute or default
    this.count = parseInt(this.getAttribute('initial-count')) || 0;

    // Create template
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        h1 {
          font-family: Arial, sans-serif;
          color: #333;
        }
        button {
          margin: 5px;
          padding: 10px;
          font-size: 16px;
        }
        p {
          color: gray;
          font-family: sans-serif;
        }
        ::slotted(p) {
          color: blue;
          font-style: italic;
        }
      </style>
      <h1>Count: 0</h1>
      <button id="increment">Increment</button>
      <button id="decrement">Decrement</button>
      <button id="reset">Reset</button>
      <!-- Slot allows external content to be projected -->
      <slot></slot>
    `;

    // Clone the template content into the shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Bind event handlers
    this.incrementButton = this.shadowRoot.querySelector('#increment');
    this.decrementButton = this.shadowRoot.querySelector('#decrement');
    this.resetButton = this.shadowRoot.querySelector('#reset');
    this.display = this.shadowRoot.querySelector('h1');

    // Add event listeners for buttons
    this.incrementButton.addEventListener('click', () => this.increment());
    this.decrementButton.addEventListener('click', () => this.decrement());
    this.resetButton.addEventListener('click', () => this.reset());
  }

  // Connected Callback: Called when the element is added to the document
  connectedCallback() {
    this.render();  // Render the initial state
  }

  // Observe changes to the 'initial-count' attribute
  static get observedAttributes() {
    return ['initial-count'];
  }

  // Update count when the attribute changes
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'initial-count') {
      this.count = parseInt(newValue) || 0;
      this.render();
    }
  }

  // Increment the count
  increment() {
    this.count++;
    this.render();
  }

  // Decrement the count
  decrement() {
    this.count--;
    this.render();
  }

  // Reset the count
  reset() {
    this.count = 0;
    this.render();
  }

  // Update the DOM
  render() {
    this.display.textContent = `Count: ${this.count}`;
  }
}

// Define the custom element
customElements.define('my-enhanced-counter', MyEnhancedCounter);
