import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Award = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="award" id="award">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="award-bx wow zoomIn">
                        <h2>Awards</h2>
                        <br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme award-slider">
                            <div className="item">
                                <h4>Alberta Innovates</h4> 
                                <h6>Data Enabled Innovations Graduate Student Scholarship Alberta Innovates</h6> 
                                <h6>(Sep 2020-Aug 2024)</h6>
                            </div>
                            <div className="item">
                                <h4>Alberta Innovates</h4> 
                                <h6>Alberta Graduate Excellence Scholarship</h6> 
                                <h6>(September 2020)</h6>
                            </div>
                            <div className="item">
                                <h4>University of Lethbridge Graduate Research Award</h4> 
                                <h6>. During Ph.D. admission (Fall 2020) at University of Lethbridge, Canada</h6> 
                                <h6>. During M.Sc. admission (Fall 2018) at University of Lethbridge, Canada</h6>
                            </div>
                            <div className="item">
                                <h4>Coca-Cola Master's Admissions Scholarship</h4> 
                                <h6>M.Sc. award from the University of Lethbridge, 2018</h6> 
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}