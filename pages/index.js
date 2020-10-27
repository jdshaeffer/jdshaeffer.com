import Header from '../components/Header';
import { Content } from '../components/Content';
import { ContentLinkText } from '../components/LinkComponents';
import Img from '../components/Img';

const indexContent = (
	<>
		<Header />
		<Content>
			<h1>Hi, I&apos;m J.D.</h1>
			<p>Full stack JavaScript developer. Working remotely, currently in New York City.</p>
			<Img
				src='/weddingPic.JPG'
				alt='cheesin'
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
