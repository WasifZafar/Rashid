
import React, { useEffect, useRef } from 'react';
import './styles/info.css';

const Info = React.forwardRef((props, ref) => { 
    const svgRef = useRef(null);

    useEffect(() => {
        // Start animation by adding the 'visible' class after a delay
        const timer = setTimeout(() => {
            if (svgRef.current) {
                svgRef.current.classList.add('visible');
            }
        }, 2000); // Animation starts after 2 seconds

        return () => clearTimeout(timer);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" ref={ref} className="section">
            <div className="info-content">
             
                    <svg viewBox="0 0 500 100">
                        <text x="50%" y="50%" textAnchor="middle" dy=".3em">Rashid Qamar</text>
                    </svg>
              
                <p>A passionate <span>Civil Engineer
                    <svg
                        ref={svgRef}
                        className="rough-annotation"
                        style={{
                            position: 'absolute',
                            top: '-185px',
                            left: '-100px',
                            overflow: 'visible',
                            pointerEvents: 'none',
                            
                        }}
                    >
                        <path class="path" d="M93.71278418041766 209.86767294071615 C152.61610768696923 204.34530063956535, 212.27981670682647 209.45085456460274, 252.7221655342728 210.69538207910955" fill="none" stroke="#ff7700" stroke-width="1"></path>
    <path class="path" d="M254.808908065781 211.84412051178515 C221.21931937113342 205.7620184536873, 184.09392402060206 205.43690485915528, 93.77941848896444 210.37238080240786" fill="none" stroke="#ff7700" stroke-width="1"></path>
    <path class="path" d="M96.4379605744034 206.8573870267719 C146.55746025716167 210.7988465453795, 194.2445353946318 208.30782950178894, 251.70424843765795 208.81921138428152" fill="none" stroke="#ff7700" stroke-width="1"></path>
    <path class="path" d="M252.56985666416585 208.59391314722598 C221.81723492202394 210.44411685880794, 189.388608770092 208.66366383251324, 95.66917224787176 206.6760770175606" fill="none" stroke="#ff7700" stroke-width="1"></path>
    <path class="path" d="M98.493880758062 208.18057241104543 C129.99505271321073 209.5124513143965, 168.80263068947758 211.16979738420926, 251.98637444712222 207.323814233765" fill="none" stroke="#ff7700" stroke-width="1"></path>
    <path class="path" d="M251.63699384592474 208.37281383015215 C214.23559137573733 205.29574316503033, 174.30509611685363 210.18122756244168, 95.84405746124685 206.56021184660494" fill="none" stroke="#ff7700" stroke-width="1"></path>
    <path class="path" d="M96.3434963915497 206.97681649588048 C160.28787083101182 207.09392936406985, 220.27162248299834 207.7402757543172, 251.90063584782183 208.63588740490377" fill="none" stroke="#ff7700" stroke-width="1"></path>
    <path class="path" d="M255.3159226384014 211.94455547071993 C220.6148607720402 210.68380968438703, 180.75622711307648 211.35455523597318, 96.95928653143346 207.78265882469714" fill="none" stroke="#ff7700" stroke-width="1"></path>
    <path class="path" d="M96.05327476002276 207.6884410586208 C154.45104350937186 210.49019285995382, 208.6778012876516 210.374379902667, 255.44514054991305 209.42236205004156" fill="none" stroke="#ff7700" stroke-width="1"></path>
    <path class="path" d="M251.77748044393957 209.80138660408556 C209.58080113020853 211.5381186532581, 158.7601803949687 206.7989959644878, 93.47280623577535 211.89230711199343" fill="none" stroke="#ff7700" stroke-width="1"></path>
                    </svg>
                </span> dedicated to innovative design <br /><span className='and'>&</span> <br />sustainable infrastructure solutions for a better future.</p>
                <div className="button-cover">
                    <button className="scroll-button" onClick={() => scrollToSection('about')}>
                        About Me.
                    </button>
                    <button className="scroll-button1" onClick={() => scrollToSection('contact')}>
                        Contact Me.
                    </button>
                </div>
            </div>

            <div className="home-out">
                <div className="photo"></div>
            </div>
        </section>
    );
});

export default Info;


