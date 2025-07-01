// Mobile Navigation Toggle
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  })
})

// Header scroll effect
const header = document.getElementById("header")
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// Smooth scrolling for navigation links (only for valid anchors)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")

    // Only prevent default and scroll if it's a valid anchor (not just "#")
    if (href !== "#" && href.length > 1) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        const headerHeight = header.offsetHeight
        const targetPosition = target.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    }
  })
})

// Testimonials slider
let currentSlide = 0
const testimonialCards = document.querySelectorAll(".testimonial-card")
const navDots = document.querySelectorAll(".nav-dot")

function showSlide(index) {
  // Hide all slides
  testimonialCards.forEach((card) => card.classList.remove("active"))
  navDots.forEach((dot) => dot.classList.remove("active"))

  // Show current slide
  testimonialCards[index].classList.add("active")
  navDots[index].classList.add("active")
}

// Navigation dots click handlers
navDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index
    showSlide(currentSlide)
  })
})

// Auto-advance testimonials
setInterval(() => {
  currentSlide = (currentSlide + 1) % testimonialCards.length
  showSlide(currentSlide)
}, 5000)

// Contact form handling
const contactForm = document.getElementById("contactForm")
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // Simple validation
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields")
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address")
    return
  }

  // Simulate form submission
  alert("Thank you for your message! We'll get back to you soon.")
  contactForm.reset()
})

// Contact page form handling
const contactPageForm = document.getElementById("contactPageForm")
if (contactPageForm) {
  contactPageForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactPageForm)
    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const company = formData.get("company")
    const service = formData.get("service")
    const subject = formData.get("subject")
    const message = formData.get("message")
    const newsletter = formData.get("newsletter")

    // Simple validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all required fields")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address")
      return
    }

    // Phone validation (if provided)
    if (phone && phone.length > 0) {
      const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
      if (!phoneRegex.test(phone.replace(/[\s\-$$$$]/g, ""))) {
        alert("Please enter a valid phone number")
        return
      }
    }

    // Simulate form submission with loading state
    const submitBtn = contactPageForm.querySelector('button[type="submit"]')
    const originalText = submitBtn.innerHTML
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
    submitBtn.disabled = true

    // Simulate API call
    setTimeout(() => {
      alert("Thank you for your message! We'll get back to you within 24 hours.")
      contactPageForm.reset()
      submitBtn.innerHTML = originalText
      submitBtn.disabled = false
    }, 2000)
  })
}

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Add fade-in class to elements and observe them
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(".feature-card, .service-card, .section-header")
  elementsToAnimate.forEach((el) => {
    el.classList.add("fade-in")
    observer.observe(el)
  })
})

// Floating animation for hero cards
document.addEventListener("DOMContentLoaded", () => {
  const floatingCards = document.querySelectorAll(".floating-card")

  floatingCards.forEach((card, index) => {
    // Add random delay and duration for more natural movement
    const delay = index * 0.5
    const duration = 3 + Math.random() * 2

    card.style.animationDelay = `${delay}s`
    card.style.animationDuration = `${duration}s`
  })
})

// Add active state to navigation links based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]')

  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    const sectionHeight = section.offsetHeight

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero")
  const heroContent = document.querySelector(".hero-container")

  if (hero && heroContent) {
    const rate = scrolled * -0.5
    heroContent.style.transform = `translateY(${rate}px)`
  }
})

// Button hover effects
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)"
  })

  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
  // Header scroll effect
  if (window.scrollY > 100) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
}, 10)

window.addEventListener("scroll", throttledScrollHandler)

// Add navigation functionality for buttons and links
document.addEventListener("DOMContentLoaded", () => {
  // Hero section buttons
  const startJourneyBtn = document.querySelector(".btn-primary")
  const watchDemoBtn = document.querySelector(".btn-secondary")

  if (startJourneyBtn) {
    startJourneyBtn.addEventListener("click", (e) => {
      e.preventDefault()
      showPage("get-started")
    })
  }

  if (watchDemoBtn) {
    watchDemoBtn.addEventListener("click", (e) => {
      e.preventDefault()
      showPage("demo")
    })
  }

  // Service learn more buttons
  document.querySelectorAll(".service-link").forEach((link, index) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const services = [
        "web-development",
        "mobile-apps",
        "cloud-solutions",
        "shopify-development",
        "brands-we-worked-with",
      ]
      showServiceDetail(services[index])
    })
  })

  // Footer links
  document.querySelectorAll('.footer-section a[href="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const linkText = link.textContent.toLowerCase().replace(/\s+/g, "-")
      handleFooterLinkClick(linkText, "contact") // Footer links originate from contact/footer area
    })
  })
})

// Page navigation functions
function showPage(pageName) {
  // Store origin section based on the page being accessed
  let originSection = "home" // default

  if (pageName === "get-started") {
    originSection = "home" // Get started usually comes from hero section
  } else if (pageName === "demo") {
    originSection = "home" // Demo usually comes from hero section
  } else if (
    pageName.includes("web-development") ||
    pageName.includes("mobile-apps") ||
    pageName.includes("cloud-solutions")
  ) {
    originSection = "services"
  } else if (pageName.includes("about")) {
    originSection = "about"
  } else if (pageName.includes("contact")) {
    originSection = "contact"
  }

  sessionStorage.setItem("originSection", originSection)

  // Hide main content and footer
  const mainContent = document.querySelector("main")
  const footer = document.querySelector(".footer")

  if (mainContent) mainContent.style.display = "none"
  if (footer) footer.style.display = "none"

  // Show specific page
  const pageElement = document.getElementById(pageName + "-page")
  if (pageElement) {
    pageElement.style.display = "block"
    // Scroll to top of the page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }
}

function showServiceDetail(serviceName) {
  // Store the origin section for proper back navigation
  sessionStorage.setItem("originSection", "services")

  // Hide main content and footer
  const mainContent = document.querySelector("main")
  const footer = document.querySelector(".footer")

  if (mainContent) mainContent.style.display = "none"
  if (footer) footer.style.display = "none"

  // Show service detail page
  const serviceDetailPage = document.getElementById("service-detail-page")
  if (serviceDetailPage) {
    serviceDetailPage.style.display = "block"
    loadServiceContent(serviceName)
    // Scroll to top of the page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }
}

function goBack() {
  // Hide all pages
  document.querySelectorAll(".page").forEach((page) => {
    page.style.display = "none"
  })

  // Show main content and footer
  const mainContent = document.querySelector("main")
  const footer = document.querySelector(".footer")

  if (mainContent) mainContent.style.display = "block"
  if (footer) footer.style.display = "block"

  // Get the origin section and scroll to it
  const originSection = sessionStorage.getItem("originSection")

  setTimeout(() => {
    if (originSection) {
      const targetSection = document.getElementById(originSection)
      if (targetSection) {
        const headerHeight = document.getElementById("header").offsetHeight
        const targetPosition = targetSection.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
      // Clear the stored origin section
      sessionStorage.removeItem("originSection")
    } else {
      // Default to top if no origin section is stored
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, 100)
}

// Service content data
const serviceContent = {
  "web-development": {
    title: "Web Development",
    description: "Custom web applications built with modern technologies for optimal performance and user experience.",
    price: "Starting from ₹25,000",
    features: [
      "Responsive Design for all devices",
      "Custom Website Development",
      "E-commerce Solutions",
      "Content Management Systems",
      "SEO Optimization",
      "Performance Optimization",
      "Cross-browser Compatibility",
      "Database Integration",
      "API Development & Integration",
      "Maintenance & Support",
    ],
    technologies: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
    ],
  },
  "mobile-apps": {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that engage users and drive business growth.",
    price: "Starting from ₹40,000",
    features: [
      "Native iOS Development",
      "Native Android Development",
      "Cross-platform Solutions",
      "UI/UX Design",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
      "Social Media Integration",
      "Payment Gateway Integration",
      "Analytics & Reporting",
      "App Maintenance & Updates",
    ],
    technologies: [
      { name: "React Native", icon: "https://reactnative.dev/img/header_logo.svg" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  "cloud-solutions": {
    title: "Cloud Solutions & Infrastructure",
    description: "Scalable cloud infrastructure and migration services to modernize your business operations.",
    price: "Starting from ₹30,000",
    features: [
      "Cloud Migration Services",
      "Infrastructure as Code",
      "DevOps Implementation",
      "Auto-scaling Solutions",
      "Load Balancing",
      "Security & Compliance",
      "Backup & Disaster Recovery",
      "Monitoring & Analytics",
      "Cost Optimization",
      "24/7 Support & Maintenance",
    ],
    technologies: [
      {
        name: "AWS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      {
        name: "Google Cloud",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      {
        name: "Kubernetes",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "Terraform",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
      },
    ],
  },
  "shopify-development": {
    title: "Shopify Development",
    description:
      "Custom Shopify store development, theme customization, and app integration tailored for eCommerce growth.",
    price: "Starting from ₹35,000",
    features: [
      "Custom Shopify Theme Development",
      "Shopify App Integration",
      "Payment Gateway Setup",
      "Inventory Management",
      "SEO Optimization for Shopify",
      "Mobile-Responsive Design",
      "Third-party API Integration",
      "Performance Optimization",
      "Multi-language Support",
      "Analytics & Reporting Setup",
      "Ongoing Maintenance & Support",
    ],
    technologies: [
      {
        name: "Shopify",
        icon: "https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png",
      },
      {
        name: "Liquid",
        icon: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "GraphQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
    ],
  },
  "brands-we-worked-with": {
    title: "Brands We Worked With",
    description: "A showcase of top D2C brands we've partnered with to deliver scalable Shopify and digital solutions.",
    price: "Portfolio Showcase",
    features: [
      "50+ Successful D2C Brand Partnerships",
      "Fashion & Apparel Brands",
      "Health & Wellness Companies",
      "Beauty & Cosmetics Brands",
      "Home & Lifestyle Products",
      "Food & Beverage Brands",
      "Electronics & Gadgets",
      "Sustainable & Eco-friendly Brands",
      "Luxury & Premium Brands",
      "Startup to Enterprise Solutions",
      "International Market Expansion",
    ],
    technologies: [
      {
        name: "Shopify Plus",
        icon: "https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png",
      },
      {
        name: "Google Analytics",
        icon: "https://developers.google.com/analytics/images/terms/logo_lockup_analytics_icon_vertical_black_2x.png",
      },
      {
        name: "Facebook Ads",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png",
      },
      {
        name: "Klaviyo",
        icon: "https://logos-world.net/wp-content/uploads/2021/02/Klaviyo-Logo.png",
      },
      {
        name: "Mailchimp",
        icon: "https://logos-world.net/wp-content/uploads/2021/02/Mailchimp-Logo.png",
      },
      {
        name: "Zendesk",
        icon: "https://logos-world.net/wp-content/uploads/2021/02/Zendesk-Logo.png",
      },
    ],
  },
}

// Load service content function
function loadServiceContent(serviceName) {
  const content = serviceContent[serviceName]
  if (content) {
    // Update title, description, and price
    document.getElementById("service-detail-title").textContent = content.title
    document.getElementById("service-detail-description").textContent = content.description
    document.getElementById("service-detail-price").textContent = content.price

    // Update features list
    const featuresList = document.getElementById("service-detail-features")
    featuresList.innerHTML = content.features.map((feature) => `<li>${feature}</li>`).join("")

    // Update technologies with icons
    const techContainer = document.getElementById("service-detail-technologies")
    techContainer.innerHTML = content.technologies
      .map(
        (tech) =>
          `<div class="tech-item-detail">
        <img src="${tech.icon}" alt="${tech.name}" onerror="this.style.display='none'; this.nextElementSibling.style.marginTop='0';" />
        <span>${tech.name}</span>
      </div>`,
      )
      .join("")
  }
}

// Handle footer link navigation with proper origin tracking
function handleFooterLinkClick(linkText, originSection = "contact") {
  sessionStorage.setItem("originSection", originSection)
  showPage(linkText)
}
