import React, { useState } from 'react'
import './List.css'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/SearchItem/SearchItem'

const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)
  const [openDate, setOpenDate] = useState(false)
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-search">
            <h1 className="list-title">Search</h1>
            <div className="list-item">
              <label className="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="list-item">
              <label htmlFor="">Check-in Date</label>
              <span onClick={() => setOpenDate((prev) => !prev)}>
                {format(date[0].startDate, 'dd/MM/yyyy')} đến{' '}
                {format(date[0].endDate, 'dd/MM/yyyy')}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="list-item">
              <label htmlFor="">Options</label>
              <div className="list-option-item">
                <span className="list-option-text">
                  Min price <small> per night</small>
                </span>
                <input type="number" className="list-option-input" />
              </div>
              <div className="list-option-item">
                <span className="list-option-text">
                  Max price <small> per night</small>
                </span>
                <input type="number" className="list-option-input" />
              </div>
              <div className="list-option-item">
                <span className="list-option-text">Người lớn</span>
                <input
                  type="number"
                  className="list-option-input"
                  min={1}
                  placeholder={options.adult}
                />
              </div>
              <div className="list-option-item">
                <span className="list-option-text">Trẻ em</span>
                <input
                  type="number"
                  className="list-option-input"
                  min={0}
                  placeholder={options.children}
                />
              </div>
              <div className="list-option-item">
                <span className="list-option-text">Phòng</span>
                <input
                  type="number"
                  className="list-option-input"
                  min={1}
                  placeholder={options.room}
                />
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="list-result">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
