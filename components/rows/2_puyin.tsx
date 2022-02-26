import React from 'react'
import { Grid} from 'styled-css-grid';
import {Cell} from '../GridStyles';

const PreSpace = () => {
    return (
        <span style={{whiteSpace: "pre"}}>{"    "}</span>
    )
}

const comp_2 = () => {
    return (
        <Grid columns={8}>
            <Cell className='detail'>
                <img 
                    src="https://pbs.twimg.com/profile_images/856758315358969857/1Na4sv15_400x400.jpg"
                    alt="Puyin_Logo"
                />                    
            </Cell>
            <Cell>
                2018/08/03
            </Cell>
            <Cell>
                Puyin Coin
            </Cell>
            <Cell>
                Puyin
            </Cell>
            <Cell>
                <a href="https://diar.co/volume-2-issue-32/" target={"_blank"} rel={"noopener noreferrer"}>Link1</a><PreSpace/>
                <a href="https://coingeek.com/ico-exit-scams-made-off-60m-investors-money-august-report/" target={"_blank"} rel={"noopener noreferrer"}>Link2</a><PreSpace/>
                <a href="https://toshitimes.com/acchain-exit-scam-with-60-million/" target={"_blank"} rel={"noopener noreferrer"}>Link3</a><PreSpace/>
                <a href="https://coinyuppie.com/cryptocurrency-survivor-report-here-are-100-ways-to-die-more-addictive-than-drugs/" target={"_blank"} rel={"noopener noreferrer"}>Link4</a><PreSpace/>
            </Cell>
            <Cell>
                Puyin
            </Cell>
            <Cell>
            </Cell>
            <Cell>
                Exit Scam
            </Cell>
        </Grid>
    )
}

export default comp_2;