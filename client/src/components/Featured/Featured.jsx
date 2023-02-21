import React from 'react'
import './Featured.css'
import useFetch from '../../hooks/useFetch'

const Featured = () => {
  const { data, loading, error } = useFetch(
    '/hotels/countByCity?cities=berlin,madrid,london',
  )
  return (
    <div className="featured">
      <div className="featured-item">
        <img
          src="https://r-xx.bstatic.com/xdata/images/city/300x240/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o="
          alt=""
          className="feature-img"
        />
        <div className="featured-title">
          <h1>Đà Lạt</h1>
          <h2>2.146 điểm đến</h2>
        </div>
      </div>
      <div className="featured-item">
        <img
          src="https://q-xx.bstatic.com/xdata/images/city/300x240/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o="
          alt=""
          className="feature-img"
        />
        <div className="featured-title">
          <h1>Hà Nội</h1>
          <h2>3.146 điểm đến</h2>
        </div>
      </div>
      <div className="featured-item">
        <img
          src="https://cf.bstatic.com/xdata/images/city/300x240/688893.jpg?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o="
          alt=""
          className="feature-img"
        />
        <div className="featured-title">
          <h1>TP.Hồ Chí Minh</h1>
          <h2>2.222 điểm đến</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured
