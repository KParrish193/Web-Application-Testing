import React from 'react';
import styled from 'styled-components';

const BoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3A5311;
    padding: 5%;
`
const BoardLabel = styled.h3`
    color: white;
    padding: 0;
    margin: 2%;
`
const Typelabel = styled.h1`
    color: white;
    font-size: 4rem;
    padding: 0;
    margin: 0;
`

const DisplayContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    min-height: 300px;
    border: solid 5px grey;
`
const Displaybox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    border: solid 2px white;
    width: 100px;
    min-height: 95px;
    max-height: 95px;
    color: white;
`


const Display = (props) => {
    return(
        <BoardContainer>
            <h1>At Bat</h1>

            <DisplayContainer >
                <div>
                    <Displaybox>
                        <Typelabel>{props.strikeCount}</Typelabel>
                    </Displaybox>
                    <BoardLabel> Strike </BoardLabel>
                </div>
                <div>
                    <Displaybox>
                        <Typelabel>{props.ballCount}</Typelabel>
                    </Displaybox>
                    <BoardLabel> Ball </BoardLabel>
                </div>
                <div>
                    <Displaybox>
                    <Typelabel>{props.outCount}</Typelabel>
                    </Displaybox>
                    <BoardLabel> Out </BoardLabel>
                </div>
            </DisplayContainer >

        </BoardContainer>
    );
};

export default Display