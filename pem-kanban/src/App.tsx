import { Component, createEffect, createSignal } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {
    const [count, setCount] = createSignal(0);
    const doubleCount = () => count() * 2;

    const onClick = () => {
        setCount((_count) => _count + 1);
    };

    createEffect(() => {
        console.log('send current doubleCount to API:', doubleCount());
    });

    return (
        <div class={styles.App}>
            <header class={styles.header}>
                <h2>{doubleCount()}</h2>
                <button onClick={onClick}>click me</button>
            </header>
        </div>
    );
};

export default App;
