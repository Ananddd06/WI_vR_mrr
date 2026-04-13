import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const carouselImages = [
    '/IMGL3080.JPG',
    '/IMGL2846.JPG',
    '/IMGL3070.JPG',
    '/IMGL3089.JPG',
    '/IMGL3103.JPG',
    '/IMGL3142.JPG',
    '/IMGL3061.JPG',
    '/IMGL3137.JPG'
  ]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const gopuramOffset = Math.min(scrollY * 0.3, 200)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="wedding-container">
      <section className="hero-section">
        <div className="background-layer">
          <img src="/pillar.webp" alt="" className="pillar-bg" />
        </div>
        
        <h1 className="wedding-title">Vineel @ Sriram<br/><span className="weds-text">weds</span><br/>Ramya</h1>
        
        <div className="gopuram-container" style={{ transform: `translateY(${gopuramOffset}px)` }}>
          <img src="/gopuram.png.webp" alt="Temple Gopuram" className="gopuram" />
        </div>
      </section>
      
      <section className="invitation-section">
        <div className="invitation-content">
          <img src="/ganapathu.webp" alt="Ganapathi" className="ganapathi-icon" />
          <p className="blessing-text">With the divine blessings of</p>
          <p className="parents-text">Mr Ganesan , Mrs Rajeshwari </p>
          <h2 className="invitation-heading">Inviting</h2>
          <p className="invitation-text">We warmly invite you to join us in our wedding celebration</p>
        </div>
      </section>

      <section className="couple-section">
        <div className="couple-content">
          <div className="groom-info">
            <p className="parent-label">Son of</p>
            <p className="parent-name">Mr Ganesan , Mrs Rajeshwari</p>
          </div>
          
          <h2 className="couple-names">Vineel @ Sriram<br/>weds<br/>Ramya</h2>
          
          <div className="bride-info">
            <p className="parent-label">Daughter of</p>
            <p className="parent-name">Mr Narayanan , Mrs Valli Narayanan</p>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <h2 className="gallery-heading">Introducing</h2>
        <h3 className="gallery-subheading">The Groom and Bride</h3>
        <div className="carousel">
          {carouselImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`carousel-image ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="carousel-dots">
          {carouselImages.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="savethedate-section">
        <h2 className="savethedate-heading">SAVE THE DATE</h2>
        <div className="event-container">
          <div className="event-left">
            <h3 className="event-name">Subamuhurtham</h3>
            <p className="event-date">On Thursday, 4th June 2026</p>
            <p className="event-time">At 10:30am to 11:30am</p>
            <p className="event-location">Erachakulam</p>
          </div>
          
          <div className="car-image">
            <img src="/car.webp" alt="Car" />
            <p className="venue-title">Venue</p>
            <p className="venue-text">Erachakulam, Vellalar Thirumana Mandapam</p>
          </div>
          
          <div className="event-right">
            <h3 className="event-name">Reception</h3>
            <p className="event-date">On Thursday, 4th June 2026</p>
            <p className="event-time">At 6:30pm</p>
            <p className="event-location">Erachakulam, Vellalar Thirumana Mandapam</p>
          </div>
        </div>
      </section>

      <section className="footer-section">
        <img src="/Subject.png" alt="Decorative" className="footer-overlay-image" />
      </section>
    </div>
  )
}

export default App
