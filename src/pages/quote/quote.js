import React from 'react';
import Navbar from '../../components/navbar/navbar';

function Quote() {
  // eslint-disable-next-line no-unused-vars
  const quotes = [
    {
      quote: 'Pure mathematics is, in its way, the poetry of logical ideas. - Albert Einstein, German theoretical physicist',
    },
    {
      quote: 'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers. — Shakuntala Devi, Indian writer and mental calculator',
    },
    {
      quote: 'Mathematics is the most beautiful and most powerful creation of the human spirit. — Stefan Banach, Polish mathematician',
    },
    {
      quote: 'We will always have STEM with us. Some things will drop out of the public eye and go away, but there will always be science, engineering, and technology. And there will always, always be mathematics. — Katherine Johnson, African-American mathematician',
    },
    {
      quote: 'As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality. — Albert Einstein',
    },
    {
      quote: 'What is mathematics? It is only a systematic effort of solving puzzles posed by nature. — Shakuntala Devi',
    },
    {
      quote: 'Mathematics is the music of reason. — James Joseph Sylvester, English mathematician',
    },
    {
      quote: 'There should be no such thing as boring mathematics. — Edsger W. Dijkstra, Dutch systems scientist',
    },
    {
      quote: 'Mathematics allows for no hypocrisy and no vagueness.— Stendhal (pen name of Marie-Henri Beyle), French writer',
    },
    {
      quote: 'I’ve always enjoyed mathematics. It is the most precise and concise way of expressing an idea. — N.R. Narayana Murthy, Indian IT industrialist',
    },
  ];

  const ramdonQuote = () => {
    // eslint-disable-next-line no-unused-vars
    const tes = Math.floor(Math.random() * 10);
    return quotes[tes];
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1> Todays random Quote </h1>
        <blockquote>
          {ramdonQuote().quote}
        </blockquote>
      </div>
    </div>
  );
}

export default Quote;
