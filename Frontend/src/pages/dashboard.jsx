import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../css/dashboard.css";

const RentoraDashboard = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();

  const properties = [
    { id: 1, location: "Udaipur, India", price: "₹30,013", image: "image1.jpg" },
    { id: 2, location: "Pimplad Nasik, India", price: "₹19,086", image: "image2.jpg" },
    { id: 3, location: "Mahagaon, India", price: "₹6,847", image: "image3.jpg" },
    { id: 4, location: "Kamshet, India", price: "₹6,500", image: "image4.jpg" },
    { id: 5, location: "Lonavala, India", price: "₹8,000", image: "image5.jpg" }
  ];

  const slideLeft = () => {
    setScrollPosition((prev) => Math.max(prev - 1, 0));
  };

  const slideRight = () => {
    setScrollPosition((prev) => Math.min(prev + 1, properties.length - 3));
  };

  return (
    <div className="rentora-dashboard">
      <h1 className="brand-title">RENTORA</h1>
      <div className="properties-container">
        <button className="scroll-button left" onClick={slideLeft}>
          <FaChevronLeft />
        </button>

        <div className="properties-list" style={{ transform: `translateX(-${scrollPosition * 250}px)` }}>
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <img src={property.image} alt={property.location} />
              <div className="property-info">
                <h3>{property.location}</h3>
                <p>{property.price} / night</p>
              </div>
            </div>
          ))}
        </div>

        <button className="scroll-button right" onClick={slideRight}>
          <FaChevronRight />
        </button>
      </div>

      <nav className="bottom-nav">
        <p>Home</p>
        <p>Explore</p>
        <p>Bookings</p>
        <p onClick={() => navigate('/account')}>Profile</p>
      </nav>
    </div>
  );
};

export default RentoraDashboard;