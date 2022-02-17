import { Component, createSignal } from 'solid-js';

import styles from './App.module.css';
import logo from './assets/pemedia.png';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const projects = ['abs-docu', 'hrs-corporate', 'phantasialand'];

const App: Component = () => {
    const [selectedProject, setSelectedProject] = createSignal(projects[0]);

    return (
        <div class={styles.App}>
            <div class={styles.sidebarHeader}>
                <img class={styles.logo} src={logo} alt="Pemedia Logo" />
            </div>
            <div class={styles.header}>
                <Header selectedProject={selectedProject()} />
            </div>
            <div class={styles.sidebar}>
                <Sidebar
                    selectedProject={selectedProject()}
                    projects={projects}
                    onSelectProject={setSelectedProject}
                />
            </div>
            <main class={styles.main}>Main ...</main>
        </div>
    );
};

export default App;
