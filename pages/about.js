import Header from '../components/Header';
import { Content } from '../components/Content';
import Img from '../components/Img';
import { ContentLinkText } from '../components/LinkComponents';

const aboutContent = (
	<>
		<Header />
		<Content>
			<h1 style={{fontSize: '40px'}}>about</h1>
			<p>
				my name is j.d.
			</p>
			<Img
				src='/grandcanyon.jpg'
				alt='portrait at grand canyon'
			/>
			<ul>
				<li>grew up in phoenix, az.</li>
				<li>served a 2-year mission for my church in asuncion, paraguay.</li>
				<li>thru-hiked the appalachian trail.</li>
				<li>graduated from asu with a bs in computer science.</li>
			</ul>
			<h2>coding</h2>
			<ul>
				<li>started in high school where i made text-based adventure games in java.</li>
				<li>
					been doing web development professionaly for a couple years - see my <ContentLinkText href='/resume.pdf' name='resume' />.
				</li>
				<li>i enjoy web dev tech including javascript, react.js (with next.js) and node.js.</li>
				<li>i love editing in vscode with vim keybindings.</li>
				<li>check out my <ContentLinkText href='/portfolio' name='portfolio' />.</li>
			</ul>
			<h2>hiking</h2>
			<Img
				src='/katahdin.JPG'
				alt='summit of mount katahdin'
			/>
			<ul>
				<li>2016-2017 sections of the pacific crest trail.</li>
				<li>2018 appalachian trail - 2190 miles in 103 days.</li>
				<li>2019 sections of the arizona trail.</li>
			</ul>
			<h2>travel</h2>
			<ul>
				<li>been to 43/50 states in the united states.</li>
				<li>lived in paraguay for 2 years.</li>
				<li>currently in south harlem, new york city.</li>
			</ul>
		</Content>
	</>
);

const About = () => {
	return aboutContent;
};

export default About;
