import React from 'react'
import { Grid} from 'styled-css-grid';
import {Cell} from '../GridStyles';

const PreSpace = () => {
    return (
        <span style={{whiteSpace: "pre"}}>{"    "}</span>
    )
}

const comp_1 = () => {
    return (
        <Grid columns={8}>
            <Cell className='detail'>
                <img 
                    src="https://pbs.twimg.com/profile_images/859226306189434880/lr6IalqS_400x400.jpg"
                    alt="ACChain_Logo"
                />                    
            </Cell>
            <Cell>
                2018/08/03
            </Cell>
            <Cell>
                ACChain
            </Cell>
            <Cell>
                ACChain
            </Cell>
            <Cell>
                <a href="https://diar.co/volume-2-issue-32/" target={"_blank"} rel={"noopener noreferrer"}>Link1</a><PreSpace/>
                <a href="https://www.reddit.com/r/CryptoCurrency/comments/95kqvh/acchain_exit_scam_blacklist/" target={"_blank"} rel={"noopener noreferrer"}>Link2</a><PreSpace/>
                <a href="https://www.reddit.com/r/CryptoCurrency/comments/94hoqb/acchain_office_photo_exit_scam/" target={"_blank"} rel={"noopener noreferrer"}>Link3</a><PreSpace/>
                <a href="https://tradersofcrypto.com/guides/crypto-scams/>" target={"_blank"} rel={"noopener noreferrer"}>Link4</a><PreSpace/>
            </Cell>
            <Cell>
                ACChain
            </Cell>
            <Cell>
            </Cell>
            <Cell>
                Exit Scam
            </Cell>
        </Grid>
    )
}

export default comp_1;