import React, { useState } from 'react'
import "./faq.css"
import { faqData } from '../../data/data'

const Faq = () => {
  const [open, setOpen] = useState(false)
  document.title = "FAQ"
  return (
    <div className="faq">
      <h1 className="title">Frequently asked questions</h1>
      {faqData.map((el) => (
        <div className={`faq-box ${open && "active"}`} key={el.id}>
          <div className='faq-box-title'>
            <p>{el.question}</p>
            <i onClick={() => setOpen(!open)} class="fa-solid fa-chevron-down"></i>
          </div>
          <div className="faq-answer">
            {el.answer}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Faq