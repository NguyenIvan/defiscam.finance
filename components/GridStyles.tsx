import styled from 'styled-components'
import { Cell as GridCell} from 'styled-css-grid';

const Cell = styled(GridCell)`
    overflow: hidden;
    text-align: center;
    &.header {
        font-size: 1.4rem;
        text-align: center;
        line-height: 7rem;
    }
    >img {
        width: 5rem;
    }
`;



export {Cell};