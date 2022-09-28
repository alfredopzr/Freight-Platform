import React from 'react'
import "./widget.scss"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";



const Widget = ({ type }) => {

    let data;

    //temporary
    const amount = 100;
    const diff = 20;


    switch(type) {
        case "user":
            data={
                title:"USERS",
                isMoney: false,
                link: "See all users",
                icon: <Person2Icon 
                    className="icon"
                    style={{color:"blue", backgroundColor: "lightblue"}}
                    />,
            };
            break;
            case "order":
            data={
                title:"ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlinedIcon 
                className="icon"
                style={{color:"orange", backgroundColor: "yellow"}}
                />,
            };
            break;
            case "earning":
            data={
                title:"EARNING",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlinedIcon 
                className="icon" 
                style={{color:"green", backgroundColor: "lightgreen"}}/>,
            };
            break;
            case "balance":
            data={
                title:"BALANCE",
                isMoney: true,
                link: "See balance details",
                icon: <AccountBalanceWalletOutlinedIcon 
                className="icon" 
                style={{color:"crimson", backgroundColor: "pink"}}/>,
            };
            break;
            default:
                break;
    }
    return (
        <div className="widget">
            <div className="left">
                <span className="title">
                    {data.title}
                </span>
                <span className="counter">
                    {data.isMoney && "$"}
                    {amount}
                </span>
                <span className="link">
                    {data.link}
                </span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ArrowUpwardIcon className="icon" />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget
