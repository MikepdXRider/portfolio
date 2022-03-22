// assets
import gmail from '../assets/email.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import resumepng from '../assets/resume.png';

export const connectOptions = [
  {
    imgSrc: gmail,
    imgAlt: 'email icon',
    linkHref: 'mailto:mikepdxrider@gmail.com',
    linkText: 'MikepdXRider@gmail.com',
    linkAriaLabel: 'Opens Inbox or alternative email application',
  },
  {
    imgSrc: linkedin,
    imgAlt: 'linkedin icon',
    linkHref: 'https://linkedin.com/in/MikepdXRider',
    linkText: '/MichaelpdXRider',
    linkAriaLabel: 'Opens linkedin profile page in new tab',
  },
  {
    imgSrc: github,
    imgAlt: 'github icon',
    linkHref: 'https://github.com/MikepdXRider',
    linkText: '/MikepdXRider',
    linkAriaLabel: 'Opens github profile page in new tab',
  },
  {
    imgSrc: resumepng,
    imgAlt: 'resume icon',
    linkHref: 'Michael_Rider_Resume.pdf',
    linkText: 'Download Resume',
    linkAriaLabel: 'Downloads resume',
    isDownload: true,
  },
];
