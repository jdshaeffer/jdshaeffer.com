import Header from '../../components/Header';
import { Content } from '../../components/Content';
import { LinkText } from '../../components/LinkComponents';

const BlogIndex = () => {
	// let entries = [
	// 	{
	// 		title: 'entry 0',
	// 		id: 0
	// 	},
	// 	{
	// 		title: 'entry 1',
	// 		id: 1
	// 	},
	// 	{
	// 		title: 'entry 2',
	// 		id: 2
	// 	}
	// ];

	return (
		<>
			<Header />
			<Content>
				<div style={{marginBottom: '100px'}}>
					<h1 style={{fontSize: '40px'}}>blog</h1>
					<h2>!!! under construction !!!</h2>
				</div>
				<p>
					come back soon for cool articles about my life, ponderings, and
					interesting tech opinions and learnings, i promise it'll be cool
				</p>
			</Content>
		</>
	);
};

export default BlogIndex;
