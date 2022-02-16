import { Component, createSignal } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {
    const [count, setCount] = createSignal(0);

    const onClick = () => {
        setCount((_count) => _count + 1);
    };

    return (
        <div class={styles.App}>
            <header class={styles.header}>
                <h2>{count()}</h2>
                <button onClick={onClick}>click me</button>
            </header>
        </div>
    );
};

export default App;
