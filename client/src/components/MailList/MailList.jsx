import React from 'react'
import './MailList.css'

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mail-title">Tiết kiệm thời gian, Tiết kiệm tiền!</h1>
      <span className="mail-desc">
        Đăng ký để giúp chúng tôi có thể gửi những khuyến mãi tốt nhất cho bạn
      </span>
      <div className="mail-input-container">
        <input type="text" placeholder="Email của bạn" />
        <button>Đăng ký</button>
      </div>
    </div>
  )
}

export default MailList
