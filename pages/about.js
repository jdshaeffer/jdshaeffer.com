import Header from '../components/Header';
import { ContentWrapper, Content } from '../components/StyledDivs';

const content = 'asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf asdfa sdf asdf asdf asdf asf asdf asfd asfd asfd asf ';

const About = () => {
	return (
		<>
			<Header />
			<ContentWrapper>
				<Content>
					{content}
				</Content>
			</ContentWrapper>
		</>
	);
};

export default About;
