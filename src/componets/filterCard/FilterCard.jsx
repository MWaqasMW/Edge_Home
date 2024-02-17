import "./filter.css"
import Detail from "../../assets/images/Hotel.jpeg"
const FilterCard = () => {
  
    return (
        <div className="container main_filter">
            <div className="d-flex row apart_desc_col m-0 p-4" >
                <div className="col-lg-4 col-md-12 col-12 justify-content-center">
                    <div className="img_container_filter">
                        <img src={Detail} alt="" />
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 col-12 second_col justify-content-start">
                    <h3>Tower Street Apartments</h3>
                    <p>500m from center</p>
                    <div className="badge">free apartment</div>
                    <h5>Studio Apartment with air condition</h5>
                    <p>Enter studio * 1 bathrom * 21m2 1 full bed</p>
                    <div className="cancel">Free cancelaition</div>
                    <div className="cancel_des">You can cancel later,so lock in the great price today</div>
                </div>
                <div className="col-lg-3 col-md-12 col-12 third_col ">
                    <div className="top d-flex justify-content-between">
                        <div className="rate_des">Excelence</div>
                        <div className="rate">8.9</div>
                    </div>
                </div>
                {/* <div className="p-5 col-3"></div>
                <div className="d-flex row apart_desc_col m-0 p-4 col-9">
                    <div className="col-lg-4 col-md-12 col-12 ">
                        <div className="img_container_filter justify-content-center">
                            <img src={Detail} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-12 second_col justify-content-start">
                        <h3>Tower Street Apartments</h3>
                        <p>500m from center</p>
                        <div className="badge">free apartment</div>
                        <h5>Studio Apartment with air condition</h5>
                        <p>Enter studio * 1 bathrom * 21m2 1 full bed</p>
                        <div className="cancel">Free cancelaition</div>
                        <div className="cancel_des">You can cancel later,so lock in the great price today</div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-12 third_col ">
                        <div className="top d-flex justify-content-between">
                            <div className="rate_des">Excelence</div>
                            <div className="rate">8.9</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>)
}

export default FilterCard