import db from '../../../lib/db';
import a from 'sql-template-strings';

export default async (req, res) => {
  console.log(process.env.STUFF);
  res.end('hi');
  // if (req.headers.authorization === process.env.API_KEY) {
  //   // get all articles
  //   if (req.method === 'GET') {
  //     const articles = await db.query(a`
  //       select * from article order by id
  //     `);

  //     res.status(200).json({ articles });

  //   // post an article
  //   } else if (req.method === 'POST') {

  //     const title = req.body.title;
  //     const content = req.body.content;

  //     // await db.query(a`

  //     // `)

  //     res.status(200).json({ 'yooo': 'yep' })
  //   }
  // }
};
