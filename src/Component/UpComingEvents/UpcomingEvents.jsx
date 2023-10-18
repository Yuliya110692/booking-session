import React from 'react'

export default function UpcomingEvents() {
  return (
    <div>
          <div className="events-container">
              <span className="events__title">Upcoming events</span>
              <ul className="events__list">
                <li className="events__item">
                  <div className="events__item--left">
                    <span className="events__name">Town hall meeting</span>
                    <span className="events__date">Oct 5</span>
                  </div>
                  <span className="events__tag">16:00</span>
                </li>
               
              </ul>
            </div>
 </div>
  )
}
