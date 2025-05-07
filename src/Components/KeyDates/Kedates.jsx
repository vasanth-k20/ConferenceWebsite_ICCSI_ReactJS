import React from 'react'
import './Keydates.css'

export default function Keydates() {
  return (
    // <!--keydates-->
<div class="key-dates-container">

    <div class="keyheading">
        <h3>TAKE A LOOK AT OUR <span>KEY DATES</span> </h3>
    </div>

    <div class="key-dates-grid">
        <div class="key-date-item">
            <div class="icon"><i class="fa-regular fa-calendar"></i></div>
            <h2 class="key-date-heading">Last Date for Full Paper Submission</h2>
            <hr class="divider" />
            <h2 class="key-date">17‐05‐2025</h2>
        </div>
        <div class="key-date-item">
            <div class="icon"><i class="fa-regular fa-calendar-minus"></i></div>
            <h2 class="key-date-heading">Notification of Paper Acceptance</h2>
            <hr class="divider" />
            <h2 class="key-date">18‐06‐2025</h2>
        </div>
        <div class="key-date-item">
            <div class="icon"><i class="fa-regular fa-calendar-plus"></i></div>
            <h2 class="key-date-heading">Camera Ready Paper Submission</h2>
            <hr class="divider" />
            <h2 class="key-date">20‐06‐2025</h2>
        </div>
        <div class="key-date-item">
            <div class="icon"><i class="fa-regular fa-calendar-check"></i></div>
            <h2 class="key-date-heading">Last Date for Register/Payment</h2>
            <hr class="divider" />
            <h2 class="key-date">02‐07‐2025</h2>
        </div>
    </div>
</div>

  )
}
