import { Component, For } from 'solid-js';

import styles from './Sidebar.module.css';
import * as store from '../../store';

const Sidebar: Component = () => {
    return (
        <nav class={styles.Sidebar}>
            <p>Projekte</p>
            <For each={store.projects()}>
                {(project) => (
                    <a
                        class={store.selectedProject() === project ? styles.selected : ''}
                        onclick={() => store.setSelectedProject(project)}
                    >
                        # {project}
                    </a>
                )}
            </For>
        </nav>
    );
};

export default Sidebar;
