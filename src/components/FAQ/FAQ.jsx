import React, { useState } from 'react';
import { HiArrowSmRight } from 'react-icons/hi';
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai';

import { data as quest } from './faqData'

import './FAQ.css';
export default function FAQ() {
  const [accord, setAccord] = useState(null);
  function toggle(index) {

    if (accord === index) {
      return setAccord(null)
    }
    setAccord(index)
  }

  return (

    < section className="container faq" id='faq' >
      <div className="leftSide">
        <h1 className='head'>Any questions?
          We got you.</h1>
        <p className="body">Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
        <div className="morefaq">
          <span className="more">More FAQs</span>
          < HiArrowSmRight className='icon' />
        </div>
      </div>

      <div className="rightSide">
        {quest.map((item, index) => {
          return (
            <div className="accord" onClick={() => toggle(index)} key={index}>
              <div className="question" >
                <h1>{item.Question}</h1>
                {accord === index ? <AiFillMinusCircle className='icon' /> : <AiFillPlusCircle className='icon' />}
              </div>
              <div className="desc" >
                <p className={accord === index ? "body open" : "body"}>{item.Ans}</p>
              </div>

            </div>

          )
        })}

      </div>
    </section >
  )

}