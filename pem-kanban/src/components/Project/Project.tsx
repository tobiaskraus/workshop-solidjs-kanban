import { Component, For } from 'solid-js';
import { Column } from '../../models/column';
import { Ticket } from '../../models/ticket';
import { selectedProject, tickets } from '../../store';

import styles from './Project.module.css';

type ProjectData = { [key in Column]: Ticket[] };

const Project: Component = () => {
    const ticketsOfProject = tickets().filter(
        (ticket) => ticket.project.id === selectedProject()?.id
    );
    const columnsOfProject = selectedProject().columns;
    const projectData = columnsOfProject.reduce(
        (acc, val) => ({
            ...acc,
            [val]: ticketsOfProject.filter((ticket) => ticket.column === val),
        }),
        {} as ProjectData
    );

    return (
        <>
            <h1>Project view: {selectedProject()?.slug}</h1>
            <div class={styles.columns}>
                <For each={Object.entries(projectData)}>
                    {([column, tickets]) => (
                        <div class={styles.column}>
                            <p>{column}</p>
                            <Tickets tickets={tickets} />
                        </div>
                    )}
                </For>
            </div>
        </>
    );
};

export default Project;

interface TicketsProps {
    tickets: Ticket[];
}
const Tickets: Component<TicketsProps> = (props) => (
    <For each={props.tickets}>{(ticket) => <div class={styles.ticket}>{ticket.title}</div>}</For>
);
