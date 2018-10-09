const ParticlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 600
      }
    }
  },
  interactivity: {
  	detect_on: 'window',
  	events: {
  		onhover: {
  			enable: true,
  			mode: 'repulse'
  		}
  	}
  }
}

export default ParticlesOptions