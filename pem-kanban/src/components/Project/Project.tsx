import { Component, For } from 'solid-js';

import { Column } from '../../models/column';
import { selectedProject, tickets } from '../../store';
import ProjectColumn from '../ProjectColumn/ProjectColumn';
import styles from './Project.module.css';

const Project: Component = () => {
    const ticketsOfColumn = (column: Column) =>
        tickets().filter((ticket) => ticket.column === column);

    return (
        <div class={styles.columns}>
            <For each={selectedProject().columns}>
                {(column) => (
                    <ProjectColumn columnName={column} tickets={ticketsOfColumn(column)} />
                )}
            </For>
        </div>
    );
};

export default Project;
