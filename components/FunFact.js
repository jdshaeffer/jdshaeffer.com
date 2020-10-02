import { useState, useEffect } from 'react';

const FunFact = () => {
  const [fact, setFact] = useState('')
  const [suffix, setSuffix] = useState('')

  const months = [
    'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august',
    'september', 'october', 'november', 'december'
  ];
  const month = new Date().getMonth();
  const day = new Date().getDate();

  useEffect(() => {
    if (day === 1) {
      setSuffix('st')
    } else if (day === 2) {
      setSuffix('nd')
    } else if (day === 3) {
      setSuffix('rd')
    } else {
      setSuffix('th')
    }
  }, [])

  useEffect(() => {
    (async () => { 
      try {
        const res = await fetch(`http://numbersapi.com/${month+1}/${day}/date`)
        const text = await res.text()
        setFact(text)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  return (
    <>
      <br />
      <p>today is {months[month]} {day}{suffix}!</p>
      <p>rando fact: {fact.toLocaleLowerCase()}</p>
    </>
  );
}

export default FunFact;
