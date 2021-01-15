import React from "react";
import {Link,Outlet} from "react-router-dom";

export function Home(){
    return(
        <div>
            <h2>Home component...</h2>
            <Link to="/about">About!!</Link>
            <Link to="/contacts">Contacts!!</Link>
            <Link to="events">Events!!</Link>
        </div>
    );
}

export function About(){
    return(
        <div>
            <h2>In About component...</h2>
            <Outlet/>
        </div>
    );
}


export function Contacts(){
    return(
        <div>
            <h2>Contact us...</h2>
        </div>
    );
}


export function Events(){
    return(
        <div>
            <h2>See all Events...</h2>
        </div>
    );
}

export function History() {
    return(
        <div>
            <h2>Company History...</h2>
        </div>
    );
    
}


