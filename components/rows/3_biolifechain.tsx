import React from 'react'
import { Grid} from 'styled-css-grid';
import {Cell} from '../GridStyles';

const PreSpace = () => {
    return (
        <span style={{whiteSpace: "pre"}}>{"    "}</span>
    )
}

const comp = () => {
    return (
        <Grid columns={8}>
            <Cell className='detail'>
                <img 
                    src="https://yt3.ggpht.com/ytc/AKedOLSN1LWmqAAkHirbI7e-WLAtjeNw2m0bkQkBMhPx=s176-c-k-c0x00ffffff-no-rj"
                    alt="ACChain_Logo"
                />                    
            </Cell>
            <Cell>
                2018/08/03
            </Cell>
            <Cell>
                BioLifeChain
            </Cell>
            <Cell>
                BioLifeChain
            </Cell>
            <Cell>
                <a href="https://diar.co/volume-2-issue-32/" target={"_blank"} rel={"noopener noreferrer"}>Link1</a><PreSpace/>
                <a href="https://www.finder.com.au/cryptocurrency-exit-scams-almost-100-million-report" target={"_blank"} rel={"noopener noreferrer"}>Link2</a><PreSpace/>
            </Cell>
            <Cell>
                BioLifeChain
            </Cell>
            <Cell>
            </Cell>
            <Cell>
                Exit Scam
            </Cell>
        </Grid>
    )
}

export default comp;