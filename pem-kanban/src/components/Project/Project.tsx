import { Component } from 'solid-js';
import { selectedProject } from '../../store';

import styles from './Project.module.css';

const Project: Component = () => {
    return <h1>Project view: {selectedProject}</h1>;
};

export default Project;
