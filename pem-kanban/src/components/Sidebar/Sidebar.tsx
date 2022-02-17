import { Component, For } from 'solid-js';

import styles from './Sidebar.module.css';

interface SidebarProps {
    projects: string[];
    selectedProject: string;
    onSelectProject: (project: string) => void;
}
const Sidebar: Component<SidebarProps> = (props) => {
    return (
        <nav class={styles.Sidebar}>
            <p>Projekte</p>
            <For each={props.projects}>
                {(project) => (
                    <a
                        class={props.selectedProject === project ? styles.selected : ''}
                        onclick={() => props.onSelectProject(project)}
                    >
                        # {project}
                    </a>
                )}
            </For>
        </nav>
    );
};

export default Sidebar;
