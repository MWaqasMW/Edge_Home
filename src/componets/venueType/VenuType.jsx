import Silder from '../side_silder/Silder'
import Hostel from "../../assets/images/hostels.webp"
import Service from "../../assets/images/service_apart.jpg"
import cotage from "../../assets/images/cotage.jpg"
import Cabines from "../../assets/images/cabines.jpg"
import Vilas from "../../assets/images/villas.jpg"
import Apart from "../../assets/images/apartment.jpeg"
import Hotel from "../../assets/images/Hotel.jpeg"
const VenuType = () => {

    const data = [
        {

            location: "Hostel",
            img: Hostel,
            property: 111
        }, {

            location: "Service Apartment",
            img: Service,
            property: 129
        },
        {

            location: "Villas",
            img: Vilas,
            property: 87
        },
        {

            location: "Cabines",
            img: Cabines,
            property: 57
        },
        {

            location: "Hotel",
            img: Hotel,
            property: 13
        },
        {

            location: "Apartment",
            img: Apart,
            property: 13
        },
        {

            location: "Cotage",
            img: cotage,
            property: 13
        }

    ]


    return (


        <div>
            <div className="container mt-5">
                <h2 className="heading">
                    Browser type
                </h2>
                <p>These hotel Type destinations have a lot to offer</p>
            </div>
            <Silder data={data} sildes={4} />
        </div>
    )
}

export default VenuType