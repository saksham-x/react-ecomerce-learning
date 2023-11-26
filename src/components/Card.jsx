import React from 'react'

const Card = (props) => {
    const {image,title,price,id}=props.data
    return (
        <>

            <div className="col">
                <div className="card">
                    <img src={image} className="card-img-top" alt={props.data.title} />
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0,20)}...</h5>
                        <h5>${price}</h5>
                        <button type="button" class="btn btn-info">Details</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
