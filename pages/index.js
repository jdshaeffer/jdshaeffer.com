import Header from '../components/Header';
import Content from '../components/Content';
import { ContentLinkText } from '../components/LinkComponents';
import Img from '../components/Img';

const indexContent = (
	<>
		<Header />
		<Content>
			<h2>hey, i&apos;m j.d.</h2>
			<p>6&apos;9&quot; full stack javascript developer, avid traveler. working remotely, currently in utah.</p>
			<Img
				src='/IMG_0992.jpg'
				alt='hiking underneath highway 87 on the arizona trail'
			/>
			<p>i&apos;m glad you&apos;re here, stay as long as you like.</p>
			<p>
				learn more about me <ContentLinkText href='/about' name='here' />,
				read my <ContentLinkText href='/blog' name='blog' />,
				or take a look at my <ContentLinkText href='/portfolio' name='portfolio' />.
			</p>
		</Content>
	</>
);

const Index = () => {
	return indexContent;
};

export default Index;
