import React from 'react';
import { Link } from 'react-router-dom';

const GambitoR = () => {
  return (
    <div>
      <header>
        <h1>GambitoR</h1>
        <p>Calling all Brainiacs! Test Your Skills!</p>
      </header>
      <main>
        <section className="about">
          <h2>What is it?</h2>
          <p>Think you're a whiz at puzzles and critical thinking? Then GambitoR is the challenge for you! It's a
            nationwide brain game organized by the famous IIT Roorkee, open to high schoolers (grades 9-12) in
            India.</p>
        </section>
        <section className="challenge">
          <h2>What's the challenge?</h2>
          <p>The focus is on flexing your mental muscles with logical reasoning and tricky puzzles (all grades). For
            higher grades, there's an extra twist:</p>
          <ul>
            <li>Grade 11: Get ready for some math problems alongside the puzzles.</li>
            <li>Grade 12: Brace yourself for the ultimate test! Physics, Chemistry, and Math (PCM) join the party.
            </li>
          </ul>
        </section>
        <section className="how">
          <h2>How does it work?</h2>
          <p>There are two rounds to conquer:</p>
          <ul>
            <li><strong>Inception (Online):</strong> This is your chance to shine from anywhere! Take the online
              test and show off your thinking skills.</li>
            <li><strong>Pinnacle (Offline):</strong> Aced the online round? Top scorers get an exclusive invite to
              IIT Roorkee's campus for the final challenge - Pinnacle!</li>
          </ul>
        </section>
        <section className="why">
          <h2>Why should you participate?</h2>
          <ul>
            <li>Bragging rights: Earn recognition from a prestigious institute like IIT Roorkee!</li>
            <li>IIT Roorkee experience: Qualify for the Pinnacle round and get a glimpse of the exciting campus life
              at IIT Roorkee.</li>
            <li>Sharpen your mind: It's a fantastic opportunity to challenge yourself and develop valuable
              problem-solving skills.</li>
          </ul>
        </section>
        <section className="ready">
          <h2>Ready to take the test?</h2>
          <p>Keep an eye on the <Link to="https://gambitor.iitr.ac.in/" target="_blank" >Official GambitoR Website</Link>
            for registration
            a dates and any fees (past info suggests it might be free!).</p>
          <p>Remember, there's no official study guide. But you can prepare by practicing online puzzles and brain
            teasers. For grades 11 and 12, brush up on your math and science skills too.</p>
          <button><Link to="https://gambitor.iitr.ac.in/" target="_blank">Register Now</Link></button>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 GambitoR</p>
        <p> Designed by Deepak Bhagat</p>
      </footer>
    </div>
  );
}

export default GambitoR;
