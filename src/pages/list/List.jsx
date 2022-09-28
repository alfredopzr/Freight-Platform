import React from 'react'
import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Datatable from "../../components/datatable/Datatable"
import Navbar from "../../components/navbar/Navbar"
const List = ({title}) => {
    return (
        <div>
            <div className="list">
                <Sidebar />
                <div className="listContainer">
                    
                    <Navbar />
                    <Datatable title={title} />
                    
                </div>
            </div>
        </div>
    )
}

export default List
