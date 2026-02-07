module.exports = {
  email: 'saif.messaoudi@esprit.tn',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/saifmessaoudi',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/saif-messaoudi',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/saif.messaoudi',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#7c6aff',
    navy: '#f8f9fe',
    darkNavy: '#f0f1fa',
  },

  srConfig: (delay = 200, viewFactor = 0.2) => ({
    origin: 'bottom',
    distance: '24px',
    duration: 600,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 0.98,
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
