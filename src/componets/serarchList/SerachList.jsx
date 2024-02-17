import "./serachList.css"
const SerachList = () => {
    return (
        <div>

            <div className=" seach_list_container  p-5">
                <h2 className="fs-1 fw-bold">Serach</h2>

                <div>
                    <label htmlFor="designation">
                        Designation
                    </label>
                    <input type="text" placeholder="what are you looking" name="designation" />
                </div>
                <div>
                    <label htmlFor="date">
                        Check in Date
                    </label>
                    <input type="text" placeholder="date" name="designation" />
                </div>
                <div>
                    <label htmlFor="date">
                        Option
                    </label>
                    <div className="options d-flex justify-content-between align-items-center m-2">
                        <label htmlFor="">,opt</label>
                        <input type="text" placeholder="what are you looking" name="designation" className="w-50"/>
                    </div>
                    <div className="options d-flex justify-content-between align-items-center m-2">
                        <label htmlFor="">,opt</label>
                        <input type="text" placeholder="what are you looking" name="designation" className="w-50"/>
                    </div>
                    <div className="options d-flex justify-content-between align-items-center m-2">
                        <label htmlFor="">,opt</label>
                        <input type="text" placeholder="what are you looking" name="designation" className="w-50"/>
                    </div>
                        <div className="options d-flex justify-content-between align-items-center m-2">
                            <label htmlFor="">,opt</label>
                            <input type="text" placeholder="what are you looking" name="designation" className="w-50"/>
                        </div>
                </div>
            </div>

        </div>
    )
}

export default SerachList