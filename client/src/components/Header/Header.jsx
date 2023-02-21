import React, { useState } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

const Header = ({ type }) => {
  const navigate = useNavigate()
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])
  const [destination, setDestination] = useState('')
  const [openDate, setOpenDate] = useState(false)
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })

  //Func
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      }
    })
  }

  const handleSearch = () => {
    navigate('/hotels', { state: { destination, date, options } })
  }

  return (
    <div className="header">
      <div
        className={
          type === 'list' ? 'header-container list-mode' : 'header-container'
        }
      >
        <div className="header-list">
          <div className="header-list-item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Nghỉ</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Chuyến Bay</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faCar} />
            <span>Xe</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi</span>
          </div>
        </div>
        {type !== 'list' && (
          <>
            {' '}
            <h1 className="header-title">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="header-desc">
              Get rewwarded for your travles - unlock instant savings of 10% or
              more with a free Booking account
            </p>
            <button className="header-btn">Đăng ký / Đăng nhập</button>
            <div className="header-search">
              <div className="header-search-item">
                <FontAwesomeIcon icon={faBed} className="header-icon" />
                <input
                  type="text"
                  placeholder="Bạn muốn ở đâu...?"
                  className="header-search-input"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="header-search-item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="header-icon"
                />
                <span
                  className="header-search-text"
                  onClick={() => setOpenDate((prev) => !prev)}
                >
                  {format(date[0].startDate, 'dd/MM/yyyy')} đến{' '}
                  {format(date[0].endDate, 'dd/MM/yyyy')}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="header-search-item">
                <FontAwesomeIcon icon={faPerson} className="header-icon" />

                <span
                  className="header-search-text"
                  onClick={() => setOpenOptions((prev) => !prev)}
                >
                  {options.adult} người lớn . {options.children} trẻ em .{' '}
                  {options.room} phòng
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="options-item">
                      <span className="option-text">Người lớn</span>
                      <div className="options-counter">
                        <button
                          className="options-counter-btn"
                          disabled={options.adult <= 1}
                          onClick={() => handleOption('adult', 'd')}
                        >
                          -
                        </button>
                        <span className="option-counter-number">
                          {options.adult}
                        </span>
                        <button
                          className="options-counter-btn"
                          onClick={() => handleOption('adult', 'i')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="options-item">
                      <span className="option-text">Trẻ em</span>
                      <div className="options-counter">
                        <button
                          className="options-counter-btn"
                          disabled={options.children <= 0}
                          onClick={() => handleOption('children', 'd')}
                        >
                          -
                        </button>
                        <span className="option-counter-number">
                          {options.children}
                        </span>
                        <button
                          className="options-counter-btn"
                          onClick={() => handleOption('children', 'i')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="options-item">
                      <span className="option-text">Phòng</span>
                      <div className="options-counter">
                        <button
                          className="options-counter-btn"
                          disabled={options.room <= 1}
                          onClick={() => handleOption('room', 'd')}
                        >
                          -
                        </button>
                        <span className="option-counter-number">
                          {options.room}
                        </span>
                        <button
                          className="options-counter-btn"
                          onClick={() => handleOption('room', 'i')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="header-search-item">
                <button className="header-btn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>{' '}
          </>
        )}
      </div>
    </div>
  )
}

export default Header
