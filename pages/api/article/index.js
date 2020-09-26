import db from '../../../lib/db';
import a from 'sql-template-strings';

export default async (req, res) => {
  if (req.headers.authorization === process.env.API_KEY) {
    // get all articles
    if (req.method === 'GET') {
      const articles = await db.query(a`
        select * from article order by id
      `);

      res.status(200).json({ articles });

    // post an article
    } else if (req.method === 'POST') {
      const title = req.body.title;
      const content = req.body.content;
      const dbRes = await db.query(a`
        insert into article (title, content) values (${title}, ${content})
      `)

      console.log(dbRes)
      res.status(200).json({ 'yooo': 'yep' });
    }
  } else {
    res.status(401).end('Not authorized!');
  }
};
