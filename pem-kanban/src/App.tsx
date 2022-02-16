import { Component } from 'solid-js';

import styles from './App.module.css';
import logo from './assets/pemedia.png';

const App: Component = () => {
    return (
        <div class={styles.App}>
            <div class={styles.sidebarHeader}>
                <img class={styles.logo} src={logo} alt="Pemedia Logo" />
            </div>
            <header class={styles.header}>2</header>
            <div class={styles.sidebar}>3</div>
            <div class={styles.main}>4</div>
        </div>
    );
};

export default App;
