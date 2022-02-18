import { Component } from 'solid-js';
import { selectedProject } from '../../store';

import styles from './Header.module.css';

const Header: Component = () => {
    return (
        <header class={styles.Header}>
            <h1># {selectedProject()}</h1>
            <span>icon</span>
        </header>
    );
};

export default Header;
