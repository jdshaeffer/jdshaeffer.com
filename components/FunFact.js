import { useState, useEffect } from 'react';

const FunFact = () => {
  const [suffix, setSuffix] = useState('')
  const [factObject, setFactObject] = useState({})

  const url = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/fact'
    : 'https://jdshaeffer.com/api/fact'

  const months = [
    'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august',
    'september', 'october', 'november', 'december'
  ];

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url)
        const json = await res.json()
        setFactObject(json)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  useEffect(() => {
    if (factObject.day === 1) {
      setSuffix('st')
    } else if (factObject.day === 2) {
      setSuffix('nd')
    } else if (factObject.day === 3) {
      setSuffix('rd')
    } else {
      setSuffix('th')
    }
  }, [])

  return (
    <>
      <br />
      <p>today is {months[factObject.month]} {factObject.day}{suffix}!</p>
      <p>rando fact: {factObject.fact.toLocaleLowerCase()}</p>
    </>
  );
}

export default FunFact;
