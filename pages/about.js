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
				<li>Grew up in Phoenix, AZ</li>
				<li>Served a 2-year mission for The Church of Jesus Christ of Latter-day Saints in Asuncion, Paraguay</li>
				<li>Thru-hiked the Appalachian Trail</li>
				<li>Graduated from ASU with a BS in computer science</li>
				<li>Currently working as a JavaScript full stack developer for a small team (Vue, Node, MySQL, AWS/Azure, etc.)</li>
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
			<h2>hiking & running</h2>
			<Img
				src='/katahdin.JPG'
				alt='summit of mount katahdin'
			/>
			<ul>
				<li>2016-2017 sections of the pacific crest trail.</li>
				<li>2018 appalachian trail - 2190 miles - 103 days.</li>
				<li>2019 mcdowell mountain frenzy 50k - 6 hr 8 min.</li>
				<li>2020 sections of the arizona trail.</li>
			</ul>
		</Content>
	</>
);

const About = () => {
	return aboutContent;
};

export default About;
