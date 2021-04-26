import { FaEnvelopeSquare } from 'react-icons/fa'
import React from 'react'
import styles from '../styles/Home.module.css'

export class Email extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <React.Fragment>
                <a className="App-link" href={`mailto:${this.props.email}`}>
                    <FaEnvelopeSquare className={styles.socialIcons} />
                </a>
            </React.Fragment>
        )
    }
}
