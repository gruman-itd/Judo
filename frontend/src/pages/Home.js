import hero1 from '../img/hero1.png';
import { Row, Col } from 'react-bootstrap';

import characters from '../constants/characters';
import { useNavigate } from "react-router-dom";

export default function App() {

  let navigate = useNavigate();
  function Char(item) {
    return (
      <div className="char" onClick={() => navigate('/judo/' + item.item)}>
        <img src={require('../img/' + characters[item.item].img)} alt="Soheil" />
        <h5>{characters[item.item].charName}</h5>
        <p>STR: {characters[item.item].str}<br />
          DEF: {characters[item.item].def}</p>
      </div>
    )
  }
  return (
    <div>
      <div className="hero">
        <div>
          <h2>Pacific Judo Club</h2>
          <p>A subsidiary of ITD Institute of Technology Development Canada.</p>
          <input type="button" value="Join Now" />
        </div>
        <img src={hero1} />
      </div>
      <blockquote>Judo is an amazing sport, and it is a way of life. it literally means a gentle way. we believe it’s a gentle way to keep your mind and body healthy.
        not only it improves and maintains physical health, but it is also a great way to keep your mental health.
      </blockquote>
      <h3>10 Important Aspects of Judo </h3>
      <ul className="aspects">
        <li>Judo Is An Amazing Form Of Physical Exercise</li>
        <li>Judo Is More Than Just Sport It Is Education For Life</li>
        <li>Judo improves self-control and discipline</li>
        <li>Judo is A Martial Art and An Olympic Sport</li>
        <li>In Judo respect Is Taught From The First Lesson</li>
        <li>Judo is a very scientific sport and works based on the law of physics</li>
        <li>Judo improves the ability of problem-solving</li>
        <li>Judo has a great social side in it</li>
        <li>Judo gives you exhilarating feeling when you spar</li>
        <li>Judo is an effective self-defense method</li>
      </ul>
      <h3>About Pacific Judo Club</h3>
      <p>Pacific Judo club is conveniently located in downtown Vancouver. The club has been registered with Judo BC since 2011.</p>
      <p>In 2019 we found a new home in the heart of downtown on Granville street near waterfront station inside the premises of the Institute of Technology Development of Canada.</p>
      <p>Our head coach, Soheil Gorji, has been involved with Judo since 1987. during the past few decades, he has been a high-performance athlete, professional NCCP certified coach, and a national level referee. His passion for teaching and martial arts makes him an ideal coach. During the pandemic, he has published a few videos on the internet with his own kid that has been viral on the internet. Soheil is a knowledgeable and innovative coach and while he respects the roots of Judo, he has his own innovative methods to teach young children, cadets, high-performance adults, and recreational judokas. To learn more about our hours of operations and our classes including self-defence classes, please see our schedule page.</p>
      <h3>Our Services</h3>
      <div className="services">
        <div>
          <h4>Grass Roots</h4>
          <p>Kids between 7 - 12 years.</p>
          <input type="button" value="More Info" />
        </div>
        <div>
          <h4>Cadets</h4>
          <p>Kids between 12 - 19 years.</p>
          <input type="button" value="More Info" />
        </div>
        <div>
          <h4>Adult</h4>
          <p>Recreational and Competitive</p>
          <input type="button" value="More Info" />
        </div>
      </div>
      <h3>Do you need judo lessons?</h3>
      <p>Pick a character to find out.</p>

      <Row>
        {
          Object.keys(characters).map(i => (
            <Col xs="3" className="charBox">
              <Char item={i} />
            </Col>
          ))
        }

      </Row>
      <h3>Contact Us</h3>
      <input type="text" className="form-control" placeholder="Your name" /><br />
      <input type="email" className="form-control" placeholder="Your email" />
      <textarea className="form-control" placeholder="Your message"></textarea>
      <input type="button" value="Submit" />
    </div>
  )
}