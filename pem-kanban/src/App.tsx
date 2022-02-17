import { Component, createSignal, For } from 'solid-js';

import styles from './App.module.css';
import logo from './assets/pemedia.png';

const projects = ['abs-docu', 'hrs-corporate', 'phantasialand'];

const App: Component = () => {
    const [selectedProject, setSelectedProject] = createSignal(projects[0]);
    return (
        <div class={styles.App}>
            <div class={styles.sidebarHeader}>
                <img class={styles.logo} src={logo} alt="Pemedia Logo" />
            </div>
            <header class={styles.header}>
                <h1># {selectedProject()}</h1>
            </header>
            <nav class={styles.sidebar}>
                <p>Projekte</p>
                <For each={projects}>
                    {(project) => (
                        <a
                            class={selectedProject() === project ? styles.selected : ''}
                            onclick={() => setSelectedProject(project)}
                        >
                            # {project}
                        </a>
                    )}
                </For>
            </nav>
            <main class={styles.main}>Main ...</main>
        </div>
    );
};

export default App;
