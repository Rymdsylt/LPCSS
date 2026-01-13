import './App.css'
import { useState } from 'react'


const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Listings', href: '#listings' },
  { label: "Let's Move", href: '#contact' },
  { label: 'About Us', href: '#about' }
]


const galleryImages = [
  { src: '/images/property3.jpg', alt: '4460 Roseworthy' },
  { src: '/images/property4.jpg', alt: '5570 Ailanto' },
  { src: '/images/property5.jpg', alt: '5570 Ailanto Kitchen' },
  { src: '/images/property6.jpg', alt: '5570 Ailanto Living' },
  { src: '/images/property7.jpg', alt: '5570 Ailanto Master' },
  { src: '/images/property1.jpg', alt: '4787 E Beacon Ridge' },
  { src: '/images/property2.jpg', alt: '4787 E Beacon Ridge Interior' }
]


const partnerLogos = [
  { src: '/images/big-circle.png', alt: 'The Ridge Realty Group' },
  { src: '/images/equal-housing.png', alt: 'Equal Housing Opportunity' },
  { src: '/images/realtor-pin.jpg', alt: 'Realtor' },
  { src: '/images/chamber.jpg', alt: 'Chamber of Commerce' }
]


const services = [
  {
    title: 'Real Estate Done Right',
    subtitle: 'Commercial & Residential',
    description: "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!"
  },
  {
    title: 'Commercial & Residential',
    subtitle: '',
    description: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community."
  },
  {
    title: 'Rely on Expertise',
    subtitle: '',
    description: 'If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion.'
  }
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="page">
      {/* Header - matching template header-9 */}
      <header className="site-header">
        <nav className="header-nav">
          <div className="logo">
            <a href="#home">
              <img src="/images/logo.png" alt="Marci Metzger" className="logo-img" />
            </a>
          </div>
          
          <button 
            className={`hamburger-menu ${mobileMenuOpen ? 'menu-open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                <path fillRule="evenodd" d="M17.999 4l-6.293 6.293L5.413 4 4 5.414l6.292 6.293L4 18l1.413 1.414 6.293-6.292 6.293 6.292L19.414 18l-6.294-6.293 6.294-6.293z"></path>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                <path fillRule="evenodd" d="M4 8h16V6H4z"></path>
                <path fillRule="evenodd" d="M4 13.096h16v-2.001H4z"></path>
                <path fillRule="evenodd" d="M4 18.346h16v-2H4z"></path>
              </svg>
            )}
          </button>

          <div className={`nav-links ${mobileMenuOpen ? 'nav-open' : ''}`}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero Section */}
        <div className="hero" id="home">
          <div className="hero-bg" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}></div>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <p className="hero-subtitle">MARCI METZGER - THE RIDGE REALTY GROUP</p>
            <h1 className="hero-title">Pahrump Realtor</h1>
            <a href="tel:2069196886" className="btn btn-primary">CALL NOW</a>
          </div>
        </div>
      </header>

      <main>

        {/* Section 1: MARCI METZGER (About Card) */}
        <section className="about-card-section">
          <div className="container">
            <h2 className="section-heading">MARCI METZGER</h2>
            <div className="about-card">
              <a href="#about">
                <img src="/images/marci-profile.jpg" alt="Marci Metzger" className="about-card-img" />
              </a>
              <h4 className="about-card-title">REALTOR FOR NEARLY 3 DECADES!</h4>
              <p className="about-card-phone">
                <a href="tel:2069196886">206-919-6886</a>
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: GET IT SOLD */}
        <section className="get-it-sold-section">
          <div className="container">
            <h2 className="section-heading">GET IT SOLD</h2>
            <div className="sold-grid">
              <div className="sold-card">
                <div className="sold-card-img" style={{ backgroundImage: 'url(https://img1.wsimg.com/isteam/stock/3395)' }}></div>
                <div className="sold-card-content">
                  <h4>Top Residential Sales Last 5 Years</h4>
                  <p>We helped nearly 90 clients in 2021, and closed 28.5 million in sales!</p>
                  <p>Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.</p>
                </div>
              </div>
              <div className="sold-card">
                <div className="sold-card-img" style={{ backgroundImage: 'url(https://img1.wsimg.com/isteam/stock/107927)' }}></div>
                <div className="sold-card-content">
                  <h4>Don't Just List it...</h4>
                  <p>Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.</p>
                </div>
              </div>
              <div className="sold-card">
                <div className="sold-card-img" style={{ backgroundImage: 'url(https://img1.wsimg.com/isteam/stock/771)' }}></div>
                <div className="sold-card-content">
                  <h4>Guide to Buyers</h4>
                  <p>Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Find Your Dream Home (MLS Search) */}
        <section id="listings" className="mls-search-section">
          <div className="mls-search-bg"></div>
          <div className="container">
            <h2 className="section-heading section-heading-light">Find Your Dream Home</h2>
            <div className="search-form-card">
              <h4>Search Listings</h4>
              <form className="search-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Location</label>
                    <select>
                      <option value="">Select Location</option>
                      <option value="pahrump">Pahrump</option>
                      <option value="las-vegas">Las Vegas</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Type</label>
                    <select>
                      <option value="">Select Type</option>
                      <option value="single-family">Single Family</option>
                      <option value="condo">Condo</option>
                      <option value="land">Land</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Sort By</label>
                    <select>
                      <option value="newest">Newest</option>
                      <option value="oldest">Oldest</option>
                      <option value="price-low">Least Expensive to Most</option>
                      <option value="price-high">Most Expensive to Least</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Bedrooms</label>
                    <select>
                      <option value="">Any Number</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Baths</label>
                    <select>
                      <option value="">Any Number</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Min Price</label>
                    <input type="text" placeholder="$" />
                  </div>
                  <div className="form-group">
                    <label>Max Price</label>
                    <input type="text" placeholder="$" />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Search Now</button>
              </form>
            </div>
          </div>
        </section>

        {/* Section 4: Partner Logos */}
        <section className="logos-section">
          <div className="container">
            <div className="logos-grid">
              {partnerLogos.map((logo, i) => (
                <div key={i} className="logo-item">
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Photo Gallery */}
        <section id="gallery" className="gallery-section">
          <div className="container">
            <h2 className="section-heading">Photo Gallery</h2>
            <div className="gallery-carousel">
              <button className="carousel-arrow carousel-prev" onClick={prevSlide} aria-label="Previous slide">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path fillRule="evenodd" d="M15.485 4L7 11.769l.499.484-.002.001L15.463 20l1.48-1.394-6.984-6.794 6.963-6.375z"></path>
                </svg>
              </button>
              <div 
                className="carousel-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {galleryImages.map((img, i) => (
                  <div 
                    key={i} 
                    className={`carousel-slide ${i === currentSlide ? 'active' : ''}`}
                  >
                    <img src={img.src} alt={img.alt} />
                  </div>
                ))}
              </div>
              <button className="carousel-arrow carousel-next" onClick={nextSlide} aria-label="Next slide">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path fillRule="evenodd" d="M8.49 4L7 5.395l7.024 6.793-7.001 6.375L8.467 20 17 12.232l-.501-.485z"></path>
                </svg>
              </button>
            </div>
            <div className="gallery-thumbnails">
              {galleryImages.map((img, i) => (
                <button 
                  key={i} 
                  className={`thumbnail ${i === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={img.src} alt={img.alt} />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Our Services */}
        <section id="services" className="services-section">
          <div className="container">
            <h2 className="section-heading">Our Services</h2>
            <div className="services-grid">
              {services.map((service, i) => (
                <div key={i} className="service-card">
                  <img src="https://img1.wsimg.com/isteam/stock/12792" alt={service.title} className="service-img" />
                  <h4>{service.title}</h4>
                  {service.subtitle && <h5>{service.subtitle}</h5>}
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Call or Visit (Contact) */}
        <section id="about" className="contact-section">
          <div className="container">
            <h2 className="section-heading">Call or Visit</h2>
            <div className="contact-grid">
              <div className="contact-info">
                <div className="office-card">
                  <h3>Marci Metzger</h3>
                  <p>THE RIDGE REALTY GROUP</p>
                  <address>
                    3190 HW-160, Suite F<br />
                    Pahrump, Nevada 89048
                  </address>
                  <p className="phone">
                    <a href="tel:2069196886">(206) 919-6886</a>
                  </p>
                </div>
                <div className="hours-card">
                  <h4>Hours</h4>
                  <p>Open today: 8:00 AM - 7:00 PM</p>
                </div>
                <a 
                  href="https://wa.me/14259412560" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  Message us on WhatsApp
                </a>
              </div>
              
              <div className="contact-map">
                <iframe 
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.123456789!2d-116.0!3d36.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDEyJzAwLjAiTiAxMTbCsDAwJzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              <div className="contact-form-wrapper" id="contact">
                <h3>Send Message</h3>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src="/images/logo.png" alt="Marci Metzger" className="footer-logo" />
            </div>
            <div className="footer-links">
              {navItems.map((item) => (
                <a key={item.label} href={item.href}>{item.label}</a>
              ))}
            </div>
            <div className="footer-social">
              <a href="https://www.facebook.com/MarciHomes/" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/marciandlauren_nvrealtors/" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/marci-metzger-30642496/" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Marci Metzger - The Ridge Realty Group. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
