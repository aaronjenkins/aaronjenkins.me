import { FaGithubSquare } from 'react-icons/fa'
import React from 'react'
import styles from '../styles/Home.module.css'

export class GitHub extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <React.Fragment>
                <a href={this.props.url}>
                    <FaGithubSquare className={styles.socialIcons} />
                </a>
            </React.Fragment>
        )
    }
}
