import React from "react";
import Navigationbar from "../component/inc/Navigationbar";
import Container from 'react-bootstrap/Container';

function Stats()
{
    return (
        
        <>
        <Navigationbar />
        <Container>
                <h1 className="p-3 text-center display-1">Stats </h1>
                <hr/>
        </Container>
        </>

    );
}

export default Stats;