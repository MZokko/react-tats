import {useState} from 'react'
import {Button} from '../Button/ButtonStyle'
import {
  WelcomeSectionContainer,
  WelcomeBg,
  VideoBg,
  WelcomeContent,
  WelcomeTitle,
  WelcomeP,
  WelcomeBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './welcomeSectionStyle';
import Video from '../../Videos/inkBanner2.mp4'

const WelcomeSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <WelcomeSectionContainer>
        <WelcomeBg>
          <VideoBg autoPlay loop muted src={Video} type='/video/mp4' />
        </WelcomeBg>
        <WelcomeContent>
          <WelcomeTitle>Zokko Digital Web Agency</WelcomeTitle>
          <WelcomeP>
          Tattoo at home are now is now a reality, check our artist work and location.
          <br/>for more informations.
          </WelcomeP>
          <WelcomeBtnWrapper>
            <Button
              to='signup'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true'
              dark='true'
            >
              Contact us {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </WelcomeBtnWrapper>
        </WelcomeContent>
      </WelcomeSectionContainer>
    </>
  );
};

export default WelcomeSection;
