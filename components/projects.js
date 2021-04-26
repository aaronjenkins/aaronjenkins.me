import { FaEnvelopeSquare } from 'react-icons/fa'
import styles from '../styles/Home.module.css'
import React from 'react'

export class Projects extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <React.Fragment>
            {this.props.projects.map((props, key) => {
                if (props.display === true)
                return (
                    <a href={props.url} className={styles.card}>
                        <h3>{props.name}</h3>
                        <p>{props.description}</p>
                    </a>
                )
            })}
            </React.Fragment>
        )
    }
}
