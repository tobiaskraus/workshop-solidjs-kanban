import { Column } from './column';

export interface Project {
    id: number;
    slug: string;
    columns: Column[];
}
