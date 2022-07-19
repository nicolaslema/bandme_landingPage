import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Container, MainHeading} from '../../globalStyles';
import {HeroSection, HeroText, ButtonWrapper, HeroButton} from './HeroStyle';



const Hero = () => {
	return (
		<HeroSection>
			<Container>
				<MainHeading>Bandme</MainHeading>
				<HeroText>
					Connect with people, Share your music, Discover other artists
				</HeroText>
				<ButtonWrapper>
					<Link to="download">
						<Button>Download</Button>
					</Link>
					<HeroButton>Pricing</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero