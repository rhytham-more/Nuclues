// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Preloader
    window.addEventListener("load", () => {
      const preloader = document.querySelector(".preloader")
      preloader.style.opacity = "0"
      setTimeout(() => {
        preloader.style.display = "none"
      }, 500)
    })
  
    // Mobile Menu Toggle
    const menuBtn = document.querySelector(".mobile-menu-btn")
    const closeBtn = document.querySelector(".close-btn")
    const mobileMenu = document.querySelector(".mobile-menu")
  
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.add("active")
    })
  
    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
    })
  
    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll(".mobile-menu ul li a")
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
      })
    })
  
    // Sticky Header
    const header = document.getElementById("header")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.style.height = "70px"
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
      } else {
        header.style.height = "80px"
        header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"
      }
    })
  
    // Active Navigation Link
    const sections = document.querySelectorAll("section[id]")
    const navLinks = document.querySelectorAll(".navbar ul li a")
    const mobileNavLinks = document.querySelectorAll(".mobile-menu ul li a")
  
    function highlightNavLink() {
      const scrollY = window.pageYOffset
  
      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 100
        const sectionId = section.getAttribute("id")
  
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove("active")
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active")
            }
          })
  
          mobileNavLinks.forEach((link) => {
            link.classList.remove("active")
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active")
            }
          })
        }
      })
    }
  
    window.addEventListener("scroll", highlightNavLink)
  
    // Testimonial Slider
    const testimonials = document.querySelectorAll(".testimonial")
    const dots = document.querySelectorAll(".dot")
    const prevBtn = document.querySelector(".prev-btn")
    const nextBtn = document.querySelector(".next-btn")
    let currentIndex = 0
  
    function showTestimonial(index) {
      testimonials.forEach((testimonial) => {
        testimonial.classList.remove("active")
      })
  
      dots.forEach((dot) => {
        dot.classList.remove("active")
      })
  
      testimonials[index].classList.add("active")
      dots[index].classList.add("active")
    }
  
    nextBtn.addEventListener("click", () => {
      currentIndex++
      if (currentIndex >= testimonials.length) {
        currentIndex = 0
      }
      showTestimonial(currentIndex)
    })
  
    prevBtn.addEventListener("click", () => {
      currentIndex--
      if (currentIndex < 0) {
        currentIndex = testimonials.length - 1
      }
      showTestimonial(currentIndex)
    })
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index
        showTestimonial(currentIndex)
      })
    })
  
    // Auto slide testimonials
    let testimonialInterval = setInterval(() => {
      currentIndex++
      if (currentIndex >= testimonials.length) {
        currentIndex = 0
      }
      showTestimonial(currentIndex)
    }, 5000)
  
    // Stop auto slide on hover
    const testimonialSlider = document.querySelector(".testimonial-slider")
    testimonialSlider.addEventListener("mouseenter", () => {
      clearInterval(testimonialInterval)
    })
  
    testimonialSlider.addEventListener("mouseleave", () => {
      testimonialInterval = setInterval(() => {
        currentIndex++
        if (currentIndex >= testimonials.length) {
          currentIndex = 0
        }
        showTestimonial(currentIndex)
      }, 5000)
    })
  
    // Back to Top Button
    const backToTopBtn = document.querySelector(".back-to-top")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("active")
      } else {
        backToTopBtn.classList.remove("active")
      }
    })
  
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  
    // Form Submission
    const contactForm = document.getElementById("contact-form")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const phone = document.getElementById("phone").value
        const service = document.getElementById("service").value
        const message = document.getElementById("message").value
  
        // Simple form validation
        if (!name || !email || !phone || !service || !message) {
          alert("Please fill in all fields")
          return
        }
  
        // Here you would typically send the form data to a server
        // For demo purposes, we'll just show an alert
        alert("Thank you for your message! We will contact you soon.")
  
        // Reset form
        contactForm.reset()
      })
    }
  
    // Animate on scroll (simple implementation)
    const animateElements = document.querySelectorAll("[data-aos]")
  
    function checkIfInView() {
      animateElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect()
        const windowHeight = window.innerHeight
  
        if (elementPosition.top < windowHeight * 0.8) {
          element.classList.add("aos-animate")
        }
      })
    }
  
    // Initial check
    checkIfInView()
  
    // Check on scroll
    window.addEventListener("scroll", checkIfInView)
  
    // Add animation classes
    animateElements.forEach((element) => {
      element.classList.add("aos-init")
  
      const delay = element.getAttribute("data-aos-delay")
      if (delay) {
        element.style.transitionDelay = `${delay}ms`
      }
    })
  
    // Add CSS for animations
    const style = document.createElement("style")
    style.textContent = `
          [data-aos] {
              opacity: 0;
              transform: translateY(50px);
              transition: opacity 0.6s ease, transform 0.6s ease;
          }
          
          [data-aos].aos-animate {
              opacity: 1;
              transform: translateY(0);
          }
      `
    document.head.appendChild(style)
  })
  
  