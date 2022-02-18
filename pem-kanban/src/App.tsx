import { Component } from 'solid-js';

import styles from './App.module.css';
import logo from './assets/pemedia.png';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const App: Component = () => {
    return (
        <div class={styles.App}>
            <div class={styles.sidebarHeader}>
                <img class={styles.logo} src={logo} alt="Pemedia Logo" />
            </div>
            <div class={styles.header}>
                <Header />
            </div>
            <div class={styles.sidebar}>
                <Sidebar />
            </div>
            <main class={styles.main}>Main ...</main>
        </div>
    );
};

export default App;
