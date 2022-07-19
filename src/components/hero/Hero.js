import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Container, MainHeading} from '../../globalStyles';
import {HeroSection, HeroText, ButtonWrapper, HeroButton, HeroText2, HeroText3} from './HeroStyle';



const Hero = () => {
	return (
		<HeroSection>
			<Container>
				<MainHeading>Bandme</MainHeading>
				<HeroText>
					Connect with people, Share your music, Discover other artists
				</HeroText>
				<HeroText2>
				An application to connect with people and places, so that your musical career takes off.
				Share what you know how to do, find the right people, and amazes people in the best places available.
				</HeroText2>
				<HeroText3>
					Avaible download on Google Play Store & iOS AppStore	
				</HeroText3>
				<ButtonWrapper>
					<Link to="/download">
						<Button>Download</Button>
					</Link>
					<Link to="/pricing">
					<HeroButton>Pricing</HeroButton>
					</Link>
				</ButtonWrapper>
			
			</Container>
			
		</HeroSection>
	);
};

export default Hero