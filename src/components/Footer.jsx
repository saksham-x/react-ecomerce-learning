import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div class="container-fluid">
                <footer class="py-5">
                    <div class="row">
                        <div class="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Home</Link></li>
                                <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Features</Link></li>
                                <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Pricing</Link></li>
                                <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">FAQs</Link></li>
                                <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">About</Link></li>
                            </ul>
                        </div>

                        <div class="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Home</Link></li>
                                <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Features</Link></li>
                                <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Pricing</Link></li>
                                <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">FAQs</Link></li>
                                <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">About</Link></li>
                            </ul>
                        </div>

                        <div class="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Home</Link></li>
                                <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Features</Link></li>
                                <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Pricing</Link></li>
                                <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">FAQs</Link></li>
                                <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">About</Link></li>
                            </ul>
                        </div>

                        <div class="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label for="newsletter1" class="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                                        <button class="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>&copy; 2022 Company, Inc. All rights reserved.</p>
                        <ul class="list-unstyled d-flex">
                            <li class="ms-3"><Link class="link-dark" to="#"><svg class="bi" width="24" height="24"></svg></Link></li>
                            <li class="ms-3"><Link class="link-dark" to="#"><svg class="bi" width="24" height="24"></svg></Link></li>
                            <li class="ms-3"><Link class="link-dark" to="#"><svg class="bi" width="24" height="24"></svg></Link></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer
