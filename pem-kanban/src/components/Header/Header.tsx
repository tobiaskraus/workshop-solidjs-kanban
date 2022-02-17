import { Component } from 'solid-js';

import styles from './Header.module.css';

interface HeaderProps {
    selectedProject: string;
}
const Header: Component<HeaderProps> = (props) => {
    return (
        <header class={styles.Header}>
            <h1># {props.selectedProject}</h1>
            <span>icon</span>
        </header>
    );
};

export default Header;
