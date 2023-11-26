import React from 'react'

const Card = (props) => {
    return (
        <>

            <div className="col">
                <div className="card">
                    <img src={props.data.image} className="card-img-top" alt={props.data.title} />
                    <div className="card-body">
                        <h5 className="card-title">{props.data.title}</h5>
                        <h5>${props.data.price}</h5>
                        <button type="button" class="btn btn-info">Details</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
