import React from 'react'

const Card = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="https://img.freepik.com/premium-photo/eco-leather-shoes-pair-beige-sneakers-with-dry-flowers-brown-background-casual-sport-lifestyle-concept_75163-3098.jpg?size=626&ext=jpg&ga=GA1.1.2080787872.1700838004&semt=sph" className="card-img-top" alt="Jordan" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <button type="button" class="btn btn-info">Info</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://img.freepik.com/free-photo/colorful-sneaker-is-being-spray-painted-with-purple-spray-paint_123827-23438.jpg?w=996&t=st=1700838064~exp=1700838664~hmac=873f76cfdf57ad50711bf5cd1f5cb1df707ea7af270f9980d8fbd475ebe1ee5a" className="card-img-top" alt="AF1" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <button type="button" class="btn btn-info">Info</button>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://img.freepik.com/free-photo/yellow-sports-shoe-with-elegant-design-generated-by-ai_188544-19644.jpg?size=626&ext=jpg&ga=GA1.1.2080787872.1700838004&semt=sph" className="card-img-top" alt="Pandas" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <button type="button" class="btn btn-info">Info</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://img.freepik.com/free-photo/white-high-top-sneakers-unisex-footwear-fashion_53876-106036.jpg?size=626&ext=jpg&ga=GA1.1.2080787872.1700838004&semt=sph" className="card-img-top" alt="White" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <button type="button" class="btn btn-info">Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
