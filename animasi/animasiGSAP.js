gsap.to('#imageBanner', { duration: 2, x: 200 });

gsap.to('#logo-detail', {
    rotation: 360,
    x: '50vw',
    xPercent: -50,
    duration: 2,  
    repeat: 2,    
    yoyo: true,   
    onComplete: function() {
      gsap.to('#logo-detail', {
        duration: 2,
        rotation: 0,
        x: 0,
        xPercent: 0,
        ease: "power1.inOut"
      });
    }
  });
