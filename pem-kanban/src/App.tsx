import { Route, Routes } from 'solid-app-router';
import { Component, lazy } from 'solid-js';

import styles from './App.module.css';
import logo from './assets/pemedia.png';
import Header from './components/Header/Header';
const Project = lazy(() => import('./components/Project/Project'));
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
            <main class={styles.main}>
                <Routes>
                    <Route path="/projects/:id" element={<Project />} />
                    <Route path="/" element={<div>Projekte</div>} />
                    <Route path="/*all" element={<div>Not Found</div>} />
                </Routes>
            </main>
        </div>
    );
};

export default App;
