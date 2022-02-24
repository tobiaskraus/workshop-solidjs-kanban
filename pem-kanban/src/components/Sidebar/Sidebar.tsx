import { Component, For } from 'solid-js';
import { NavLink } from 'solid-app-router';

import styles from './Sidebar.module.css';
import * as store from '../../store';

const Sidebar: Component = () => {
    return (
        <nav class={styles.Sidebar}>
            <p>Projekte</p>
            <For each={store.projects()}>
                {(project) => (
                    <NavLink
                        class={styles.link}
                        onclick={() => store.setSelectedProject(project)}
                        activeClass={styles.active}
                        href={`/projects/${project.slug}`}
                    >
                        # {project.slug}
                    </NavLink>
                )}
            </For>
        </nav>
    );
};

export default Sidebar;
