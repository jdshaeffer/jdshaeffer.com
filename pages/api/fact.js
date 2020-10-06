export default async (req, res) => {
  const month = new Date().getMonth();
  const day = new Date().getDate();

  let suffix
  if (day === 1) {
    suffix = 'st'
  } else if (day === 2) {
    suffix = 'nd'
  } else if (day === 3) {
    suffix = 'rd'
  } else {
    suffix = 'th'
  }

  try {
    const factRes = await fetch(`http://numbersapi.com/${month+1}/${day}/date`)
    const fact = await factRes.text()
    res.json({ month: month, day: day, fact: fact })
  } catch (e) {
    console.log(e)
  }
}
