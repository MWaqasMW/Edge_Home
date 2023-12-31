import "./desination.css"
import Mr from "../../assets/images/mardan.png"
import Flag from "../../assets/images/pak_flag.png"
import Fs from "../../assets/images/peshawer.jpg"
import Fb from "../../assets/images/faislabad.jpg"
import Qe from "../../assets/images/quetta.png"
import Mure from "../../assets/images/muree.jpg"
const Desination = () => {
    return (
        <>
            <div className="container">
                <section>

                    <h2 className="heading mt-5">
                        Trending destinations
                    </h2>
                    <p>Most popular choices for travellers from Pakistan</p>
                    <div className="row ">
                        <div className="col-lg-6 col-12">
                            <div className="img_container_des">
                                <img src={Mr} alt="" />
                                <div className="overlay_des"></div>
                                <div className="img_content_des d-flex gap-2">
                                    <div className="flag_container"><img src={Flag} alt="" width={"100%"} /></div>
                                    <div className="">Mardan</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 ">
                            <div className="img_container_des">
                                <img src={Fs} alt="" />
                                <div className="overlay_des"></div>
                                <div className="img_content_des d-flex gap-2">
                                    <div className="flag_container"><img src={Flag} alt="" width={"100%"} /></div>
                                    <div className="">Peshawer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row ">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="img_container_des_contain2">
                                <img src={Fb} alt="" />
                                <div className="overlay_des"></div>
                                <div className="img_content_des d-flex gap-2">
                                    <div className="flag_container"><img src={Flag} alt="" width={"100%"} /></div>
                                    <div className="">Faislabad</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="img_container_des_contain2">
                                <img src={Mure} alt="" />
                                <div className="overlay_des"></div>
                                <div className="img_content_des d-flex gap-2">
                                    <div className="flag_container"><img src={Flag} alt="" width={"100%"} /></div>
                                    <div className="">Muree</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="img_container_des_contain2">
                                <img src={Qe} alt="" />
                                <div className="overlay_des"></div>
                                <div className="img_content_des d-flex gap-2">
                                    <div className="flag_container"><img src={Flag} alt="" width={"100%"} /></div>
                                    <div className="">Quetta</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

        </>
    )
}

export default Desination