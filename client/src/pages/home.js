import React from "react";
import Navigationbar from "../component/inc/Navigationbar";
import Container from 'react-bootstrap/Container';


function Home()
{
    return (
        
        <>
        <Navigationbar />
        <Container>
                <h1 className="p-3 text-center display-1">HOME PAGE</h1>
        </Container>
        </>

    );
}

export default Home;