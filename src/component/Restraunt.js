import React, { useState } from 'react'
import './style.css'
import Menu from './Menuapi'
import Menucard from './Menucard'

const categories = [
    ...new Set(Menu.map((cur) => {
        return cur.category;
    }))
]

const Restraunt = () => {

    const [menudata, setmenudata] = useState(Menu);
    const filterItem = ({ category }) => {
        const updateddata = Menu.filter((cur) => {
            return cur.category === category;
        })
        setmenudata(updateddata);
    }

    function ncat(category) {
        return (
            <>
                <li className="nav-item active cz">
                    <a className="nav-link cr" aria-current="page" onClick={() => filterItem({ category })}>{category}</a>
                </li>
            </>
        )
    }


    return (
        <>


            {/* first navbar */}
            <nav className="navbar navbar-expand-md navbar-light bg-light ">
            <div className="container-fluid ch">
                <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">

                        {categories.map(ncat)}

                        <li className="nav-item cz">
                            <a className="nav-link cr" onClick={() => setmenudata(Menu)}>ALL</a>
                        </li>

                    </ul>
                </div>
                </div>
            </nav>







            {/* then insert cards */}
            <div className="row">
                <Menucard menudata={menudata} />
            </div>

        </>
    )
}

export default Restraunt


{/* 
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Restraunt</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            
        </ul>
    </div>
</nav>

*/}