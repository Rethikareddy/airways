import React from 'react'

export default function Contact() {
  return (
      <div class="container">
        <img  className=" contact_img" height="100vh"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2H2jLV7-vBMhrsbUQbnhY3svSx7a7q30ZLy39hQoV&s"></img>
        
      <div class="content">
        <div class="left-side">
          <div class="address details">
            <i class="fas fa-map-marker-alt"></i>
            <div class="topic">Address</div>
            <div class="text-one">Surkhet, NP12</div>
            <div class="text-two">Birendranagar 06</div>
          </div>
          <div class="phone details">
            <i class="fas fa-phone-alt"></i>
            <div class="topic">Phone</div>
            <div class="text-one">+0098 9893 5647</div>
            <div class="text-two">+0096 3434 5678</div>
          </div>
          <div class="email details">
            <i class="fas fa-envelope"></i>
            <div class="topic">Email</div>
            <div class="text-one">codinglab@gmail.com</div>
            <div class="text-two">info.codinglab@gmail.com</div>
          </div>
        </div>
        <div class="right-side">
          <div class="topic-text">Send us a message</div>
          <p>Any queries?? It's my pleasure to help you.</p>
        <form action="#">
          <div class="input-box">
            <input type="text" placeholder="Enter your name"/>
          </div>
          <div class="input-box">
            <input type="email" placeholder="Enter your email"/>
          </div>
          <div class="input-box message-box">
            <textarea placeholder='feedback'>feedback</textarea>
            
          </div>
          <div class="button">
            <input type="button" value="Send Now" />
          </div>
        </form>
      </div>
      </div>
    </div>
    
  
  )
}
