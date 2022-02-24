import { Column } from './column';
import { Project } from './project';
import { User } from './user';

export interface Ticket {
    id: number;
    title: string;
    description: string;
    assignee: User;
    project: Project;
    column: Column;
}
