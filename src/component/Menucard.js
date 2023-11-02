import React from 'react'

const Menucard = ({ menudata }) => {

    function ncard(val) {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="card s1" key={val.id}>
                    <img src={val.image} className="card-img-top" alt="IMAGE" />
                    <div className="card-body">
                        <h5 className="card-title">{val.name}</h5>
                        <p className="card-text">{val.desc}</p>
                        <div className="btn btn-primary">{val.cost} Rs. only</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {menudata.map(ncard)};
        </>
    )
}
export default Menucard
