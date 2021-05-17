import Link from 'next/link';
import Header from '../../components/Header';
import { Content } from '../../components/Content';
import BlogCard from '../../components/BlogCard';

const BlogIndex = () => {
	const img = 'https://lh3.googleusercontent.com/ODKcbyOYJv6DwiY--mzgCpMqWdMomNOYWBFM5Gu3LhliQcj2yF5V2CzSOBIp-M38rBy8sCh_y1z11jAYo8VVwYg1GzmOjKnmqSzdJD0EUIFmIxX7fYZtwVGsSEfqG4gTWBFgnXP8ag=w2400'
	const imgAlt = ''
	const title = 'How I Got Into Coding'
	const description = 'TL;DR Daft Punk'

	return (
		<>
      <Content>
        leaving this page intentionally blank for now, will return
      </Content>
			{/* <Header />
			<Content>
				<div style={{marginBottom: '100px'}}>
					<h1 style={{fontSize: '40px'}}>blog</h1>
					<h2>my takes on tech, my interests, and life. enjoy.</h2>
				</div> */}
				{/* put all article previews here */}
				{/* <Link href='/blog/0'>
					<a style={{color: '#FAE0C5'}}>
						<BlogCard title={title} description={description} alt={imgAlt} src={img} />
					</a>
				</Link>
			</Content> */}
		</>
	);
};

export default BlogIndex;
