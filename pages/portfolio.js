import Grid from '@material-ui/core/Grid';
import Header from '../components/Header';
import { ContentWrapper } from '../components/Content';
import Img from '../components/Img';

const PortfolioIndex = () => {
	return (
		<>
			<Content>
				leaving this page intentionally blank for now, will return
			</Content>
			{/* <Header />
			<ContentWrapper>
				<div style={{width: '800px', margin: '0 auto', marginBottom: '100px'}}>
					<h1 style={{fontSize: '40px'}}>portfolio</h1>
					<h2>below are some of my notable side projects and open source
					contributions. peruse at your leisure.</h2>
				</div>
				<div style={{width: '90%', margin: '0 auto'}}>
					<Grid container spacing={3} style={{textAlign: 'center'}}>
						<Grid item xs={6}>
							<a href='https://saytheirnames.io/'>
								<Img
									src='/sayTheirNames.png'
									alt='screen shot of say their names app'
									style={{width: '500px'}}
								/>
							</a>
						</Grid>
						<Grid item xs={6} style={{marginBottom: '100px'}}>
							<h2>Say Their Names</h2>
							<p>Around the height of the BLM protests in June 2020 began an
							open source project whose goal was to provide a mobile and web
							presence where people could commemorate the black men and women
							who lost their lives recently due to police brutality. I jumped
							on the project at its inception, helped in design, and
							contributed more than 500 lines of code to create the base
							React UI for 2 pages of the web app. Click <a
								href='https://github.com/Say-Their-Name/say-their-names-web'
								style={{color: '#FAE0C5'}}
							>here</a> to see
							the project's code.</p>
						</Grid>
						<Grid item xs={6} style={{marginBottom: '100px'}}>
							<h2>NASA Psyche Meteorite Image Analysis System</h2>
							<p>Senior capstone project at ASU along with my buddies Kohl
							Stark, Michael St. Onge, and Jacob Peters. We developed a system
							that detects the chemical composition of meteorites by their
							digital image alone. This enables meteorite experts to automate
							this process which they'd normally have to do manually, allowing
							them to make more analyses, equipping them with more knowledge in
							preparation for NASA's mission to Psyche.</p>
						</Grid>
						<Grid item xs={6}>
							<a href='https://psyche.asu.edu/get-involved/capstone-projects/meteorite-image-analysis-system-tempe/'>
								<Img
									src='/capstone.png'
									alt='screenshot of meteorite image analysis system'
									style={{width: '400px'}}
								/>
							</a>
						</Grid>
						<Grid item xs={6}>
							<a href='https://rando-scrip.vercel.app/'>
								<Img
									src='/randoScrip.png'
									alt='screenshot of rando scrip'
									style={{width: '500px'}}
								/>
							</a>
						</Grid>
						<Grid item xs={6} style={{marginBottom: '100px'}}>
							<h2>rando-scrip</h2>
							<p>'rando-scrip' was a small statistical experiment where I was
							curious about the weight distribution behind the Latter-day Saint
							canon of scriptures. It turned into a crash course on rejection
							sampling and proved to be a productive use of finding true
							weighted random numbers in JavaScript.</p>
						</Grid>
						<Grid item xs={6} style={{marginBottom: '100px'}}>
							<h2>dunnet-solver</h2>
							<p>'dunnet-solver' reflects my love for text-based adventure
							games as well as shell scripting. It took me 3ish years of
							on-and-off work to solve Dunnet by Ron Schnell, a challenging
							text-based dungeon crawler hidden in the Emacs editor. I loved
							it so much, I decided to create an automatic solver. I used <a 
								href='https://github.com/Gallopsled/pwntools'
								style={{color: '#FAE0C5'}}
							>pwntools</a> and python.</p>
						</Grid>
						<Grid item xs={6}>
							<a href='https://github.com/jdshaeffer/dunnet-solver'>
								<Img
									src='/dunnet.png'
									alt='screenshot of dunnet solver'
									style={{width: '500px'}}
								/>
							</a>
						</Grid>
					</Grid>
				</div>
			</ContentWrapper> */}
		</>
	);
};

export default PortfolioIndex;
