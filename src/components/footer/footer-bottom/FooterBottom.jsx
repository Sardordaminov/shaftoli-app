import React from 'react'
import "./FooterBottom.css"

export default function FooterBottom() {
  return (
    <div className='footerbottom'>
      <p className='copyright'>Copyright © 2023</p>
      <div className="payments">
        <a target='_blank' href="https://cis.visa.com/ru_TJ/visa-in-uzbekistan.html"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="visa" /></a>
        <a target='_blank' href="https://www.mastercard.ru/ru-ru.html"><img src="https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png" alt="mastercard" /></a>
        <a target='_blank' href="https://humocard.uz/ru/"><img src="https://kapital24.uz/upload/media/icons/cards/system-humo_c.png" alt="humo" /></a>
        <a target='_blank' href="https://uzcard.uz/ru"><img src="https://uzoplata.com/wp-content/uploads/2017/01/uzcard1.png" alt="uzcard" /></a>
      </div>
      <p className="creator">
        Created By <a href="https://sd-portfolio.vercel.app/">Sardorbek Daminov</a>
      </p>
    </div>
  )
}
