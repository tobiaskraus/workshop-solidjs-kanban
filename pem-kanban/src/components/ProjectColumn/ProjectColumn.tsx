import { Component, For } from 'solid-js';

import { Ticket } from '../../models/ticket';
import { Column } from '../../models/column';
import styles from './ProjectColumn.module.css';

interface ProjectColumnProps {
    columnName: Column;
    tickets: Ticket[];
}
const ProjectColumn: Component<ProjectColumnProps> = (props) => {
    return (
        <div class={styles.Column}>
            <h3 class={styles.columnTitle}>{props.columnName}</h3>
            <For each={props.tickets}>
                {(ticket) => (
                    <div style={{ background: 'var(--color-gray-dark1)', padding: '10px' }}>
                        {ticket.title}
                    </div>
                )}
            </For>
        </div>
    );
};

export default ProjectColumn;
