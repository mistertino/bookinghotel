import React from 'react'
import './SearchItem.css'

const SearchItem = () => {
  return (
    <div className="search-item">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/413231893.webp?k=9b7e75cecad4611cde59267bbbfffce19cd59a6a83a188398426650e5c6e985c&o=&s=1"
        alt=""
        className="search-item-img"
      />
      <div className="search-item-desc">
        <h1 className="search-item-title">Camellia Residence Hanoi</h1>
        <span className="search-item-distance">1.5 km from centre</span>
        <span className="search-item-taxi">Travel Sustainable property</span>
        <span className="search-item-subtitle">
          Studio Apartment with Ải conditioning
        </span>
        <span className="search-item-features">
          Entire studio . 1 bathroom . 21m2 1 full bed
        </span>
        <span className="search-item-cancel">Free cancellation</span>
        <span className="search-item-cancel-subtitle">
          {' '}
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="search-item-detail">
        <div className="search-item-rating">
          <span>Excellent</span>
          <button>9.8</button>
        </div>
        <div className="search-item-detail-text">
          <span className="search-item-price">1.200.000VND</span>
          <span className="search-item-tax">Includes taxes and fees</span>
          <button className="search-item-check-btn">See avaibility</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
