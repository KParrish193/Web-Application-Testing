import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const BoardContainer = styled.div`
    display: flex;
    background-color: #3A5311
`
const BoardLabel = styled.h3`
    color: white;
`
const Displaybox = styled.div`
    background-color: black;
    border: solid 2px white;
`

const Display = () => {
    return(
        <BoardContainer>

            <DisplayContainer />
                <Displaybox>
                    <div>
                        //Strike Dashboard Output
                    </div>
                    <BoardLabel> Strike </BoardLabel>
                </Displaybox>
                <Displaybox>
                    <div>
                        //Ball Dashboard Output
                    </div>
                    <BoardLabel> Ball</BoardLabel>
                </Displaybox>
                <Displaybox>
                    <div>
                        //Out Dashboard Output
                    </div>
                    <BoardLabel>
                        Outs
                    </BoardLabel>
                </Displaybox>
            <DisplayContainer />

        </BoardContainer>
    );
};

export default Display