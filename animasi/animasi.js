gsap.to('#imageBanner', { duration: 2, x: 200 });

gsap.to('#logo-detail', {
    rotation: 360,
    x: '42.6vw',
    xPercent: -42.6,
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

  gsap.to('.judul', { duration: 2, x: 450 });

  document.addEventListener("DOMContentLoaded", function () {
    const bannerImage = document.getElementById("imageBanner");
    const bannerTitle = document.getElementById("judul");
    const bannerDescription = document.getElementById("description").querySelector("p");

    const carouselItems = document.querySelectorAll(".carousel-item");

    carouselItems.forEach(item => {
      item.addEventListener("mouseover", function () {
        const imageSrc = item.getAttribute("data-image");
        const title = item.getAttribute("data-title");
        const description = item.getAttribute("data-description");

        bannerImage.src = imageSrc;
        bannerTitle.textContent = title;
        bannerDescription.textContent = description;
      });
    });
  });