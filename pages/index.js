import Header from '../components/Header';
import Content from '../components/Content';
import { ContentLinkText } from '../components/LinkComponents';
import Img from '../components/Img';

const Index = () => {
	return (
		<>
			<Header />
			<Content>
				<h2>hey, i'm j.d.</h2>
				<p>6'9" full stack javascript developer, avid traveler. working remotely, currently in utah.</p>
				<Img src='/hwy87.jpg' alt='hiking underneath highway 87 on the arizona trail' />
				<p>i'm glad you're here, stay as long as you like.</p>
				<p>
					learn more about me <ContentLinkText href='/about' name='here' />,
					read my <ContentLinkText href='/blog' name='blog' />,
					or take a look at my <ContentLinkText href='/portfolio' name='portfolio' />.
				</p>
			</Content>
		</>
	);
};

export default Index;
