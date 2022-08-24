import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [{
    src:"https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsJTIwcm9vbSUyMGFsbCUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    src:"https://images.unsplash.com/photo-1594563703937-fdc640497dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    src:"https://images.unsplash.com/photo-1461988625982-7e46a099bf4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwcm9vbSUyMGFsbCUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    src:"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    src:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tJTIwYWxsJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    src:"https://media.istockphoto.com/photos/modern-blue-bathroom-interior-with-mirror-picture-id1253081385?k=20&m=1253081385&s=612x612&w=0&h=Hh4yAYMNCEzxrJe_VWeV676NuUSE0VEvOBgUKYQiuHg="
  },

  ];
  const handleOpen = (i) =>{
    setSlideNumber(i);
    setOpen(true);

  };
  const handleMove = (direction) =>{
    let newSlideNumber;
    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
    }
    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=> setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=> handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=> handleMove("r")}/>

        </div>

        }
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">Excellnt location- 500m from center</span>
          <span className="hotelPriceHighlight">Book a stay over $114 at this property and get a free airport taxi</span>
          <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}

          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St.Florian's Gate in Krakow,Tower Street Apartments has accommodations with air conditioning and  free WiFi. The units come with hardwood floors and features a fully equipped  kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall,Main Market Square and Town Hall Tower.The nearest airport is kepmgowda international ,1.6km from Tower Street Apartment, and the property offers a paid airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of krakow,this property has an excellent location score of 9.9!
              </span>
              <h2><b>$945</b> (9 nights)</h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>

        </div>
        <MailList />
        <Footer />

      </div>


    </div>
  )
}

export default Hotel