import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class MyCounter extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-color: #f0f0f0;
      font-family: Arial, sans-serif;
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
    img {
      width: 100px;
      margin-bottom: 20px;
    }
  `;

  static properties = {
    count: { type: Number }
  };

  constructor() {
    super();
    this.count = 0; // Initialize count to 0
  }

  // Increment the count
  increment() {
    this.count++;
  }

  // Decrement the count
  decrement() {
    this.count--;
  }

  // Reset the count
  reset() {
    this.count = 0;
  }

  render() {
    return html`
      <img src="https://lit.dev/images/logo.svg" alt="Lit Logo">
      <h1>Count: ${this.count}</h1>
      <button @click="${this.increment}">Increment</button>
      <button @click="${this.decrement}">Decrement</button>
      <button @click="${this.reset}">Reset</button>
      <p>This is a Lit-based Counter - nta45</p>
    `;
  }
}

// Register the custom element
customElements.define('my-counter', MyCounter);