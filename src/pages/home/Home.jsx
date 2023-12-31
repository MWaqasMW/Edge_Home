import Carousel from "../../componets/silder/Silder"
import Header from "../../componets/header/Header"
import Silder from "../../componets/side_silder/Silder"
import Desination from "../../componets/desination/Desination"
import Is from "../../assets/images/islamabad.jpg"
import Kr from "../../assets/images/mazare-quid.jpg"
import Lr from "../../assets/images/badshai.jpg"
import Mu from "../../assets/images/multan.jpeg"
import Rp from "../../assets/images/rawalpindi.jpg"
import Sk from "../../assets/images/silakot.jpg"
import Sh from "../../assets/images/sahiwal.jpg"
import Sw from "../../assets/images/swat.jpg"
import Kash from "../../assets/images/bhera.jpg"
import "./home.css"
import VenuType from "../../componets/venueType/VenuType"
import Feedback from "../../componets/leter/Feedback"
import Footer from "../../componets/Footer/Footer"
const Home = () => {
  const data = [
    {

      location: "Islamabad",
      img: Is,
      property: 111
    }, {

      location: "Karachi",
      img: Kr,
      property: 129
    }, {

      location: "Lahore",
      img: Lr,
      property: 169
    }, {

      location: "Multan",
      img: Mu,
      property: 73
    }, {

      location: "Rawalpindi",
      img: Rp,
      property: 102
    },
    {

      location: "Silakot",
      img: Sk,
      property: 66
    },
    {

      location: "Sahiwal",
      img: Sh,
      property: 87
    },
    {

      location: "Swat",
      img: Sw,
      property: 57
    },
    {

      location: "Kashmir",
      img: Kash,
      property: 13
    }

  ]
  return (
    <div >
      <Header />
      <Carousel />
      <div className="space "></div>
      <div className="container">
        <h2 className="heading">
          Explore Pakistan
        </h2>
        <p>These popular destinations have a lot to offer</p>
      </div>
      <Silder data={data} sildes={6} />
      <Desination />
      <VenuType />
      <div className="space "></div>
<Feedback/>
<Footer/>

    </div>

  )
}

export default Home