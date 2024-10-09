import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal } from 'solid-js';

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          {/* Editing <code>src/App.jsx</code> and saving to reload. */}
        </p>
        <p>{count()}</p>
        <div class={styles.countControls}>
          <button onClick={() => setCount(count() - 1)}>-</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count() + 1)}>+</button>
        </div>
        <br />
        <h7 class={styles.smallHeader}>This is a basic page of SolidJS - nta45.</h7>
      </header>
    </div>
  );
}

export default App;
