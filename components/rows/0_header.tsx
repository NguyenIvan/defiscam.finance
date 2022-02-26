import React from 'react'

import { Grid} from 'styled-css-grid';
import {Cell} from '../GridStyles';
 

const header = () => {
    return (
        <Grid columns={8}>
            <Cell className="header">
                Logo
            </Cell>
            <Cell className="header">
                Date
            </Cell>
            <Cell className="header">
                Name
            </Cell>
            <Cell className="header">
                Symbol
            </Cell>
            <Cell className="header">
                Links
            </Cell>
            <Cell className="header">
                Platform
            </Cell>
            <Cell className="header">
                Articles
            </Cell>
            <Cell className="header">
                Method
            </Cell>
        </Grid>
    )
}

export default header;