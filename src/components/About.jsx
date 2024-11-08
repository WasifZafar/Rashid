import React, { useRef, useEffect } from 'react';
import './styles/about.css'
import  CV from './CV';


const About = React.forwardRef((props, ref) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            svgRef.current.classList.add('visible');
          } else {
            svgRef.current.classList.remove('visible'); 
          }
        });
      },
      { threshold: 0.1 }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={ref} className="section">

      <div className='out-box'>
      <div className='about-me'>
         <p>
         "I am a dedicated <span>Civil Engineer
         <svg
                        ref={svgRef}
                        className="rough-annotation2"
                        style={{
                            position: 'absolute',
                            top: '-183px',
                            left: '-96px',
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
    </svg>
          </span> with a passion for designing and overseeing large-scale infrastructure projects. With a strong foundation in structural analysis and project management, I excel at delivering sustainable and innovative solutions that enhance community development and ensure long-term resilience."
         </p>
         <div className='about-cv'>    <CV/>   </div>
        </div>
        <div className='image'>  
        </div>

      </div>
  
         <div className="highlight">
            <div className="high-line"></div>
              <div className="line3"> <i className="fa-solid fa-graduation-cap"></i></div>
              <h2>Education</h2>
              <div className="high-line h-line"></div>
            </div>

          <div className="education">
            
            <div className="education-content">
             <div className="education-logo"> <div className="edu logo-p1 "></div><h3 className='collage'>"AL-Kabir Polytechnic Collage"(Jharkhand University Of technology)</h3></div>
              <h4>Diploma In Civil Engineering</h4>
              <h5>Session: 2019 - 2022</h5>
              <p >
              "As a skilled civil engineer, I am committed to designing and implementing innovative, sustainable infrastructure solutions. With a strong focus on efficiency, safety, and environmental responsibility, I deliver high-quality projects that meet client needs and improve communities. My expertise drives long-term success in both structural and environmental engineering projects."
              </p>
            </div>

            <div className="education-content">
              <div className="education-logo"> <div className="edu logo-p2"></div><h3 className='school'>"Sri Agrasen School."</h3></div>
              <h4 >Intermediate In Science ("I.Sc.")</h4>
              <h5>Session: May 2018 - May 2020</h5>
              <p>
                Gained a solid foundation in core scientific subjects including
                Physics, Chemistry, and Mathematics, fostering analytical and
                problem-solving skills. Developed a strong understanding of
                logical reasoning, which supports my technical aptitude in the
                field of Engineering.
              </p>
            </div>
          </div>

          <div className="skill">
            <div className="highlight2">
          <div className="high-line"></div>
          <div className="line3"><i class="fa-solid fa-screwdriver-wrench"></i></div>
            <h2>My Skill</h2>
            <div className="high-line h-line"></div>
            </div>
            <div className="skill-cover">
              <div className="tech-skill">
                <h3>TECHNICAL SKILLS</h3>
                <ul>
            <li>Item Wise detailed Estimation of a complete building as per CPWD-DSR rate with the help of
                              the EPR model ( Quantity Take-off Tool ).</li>
            <li>AutoCAD – Submission drawing , Elevation and Section drawing.</li>
            <li>Quantity of materials and Rate Analysis Under CPWD guideline and rule.</li>
            <li>BBS ( Bar Bending Schedule ) – Preparing detailed BBS of complete Building Structure using
                    MS EXCEL. As per my responsibilities , I meticulously prepared a Bar Bending Schedule,
                    ensuring the correct placement of Steel Reinforcement in the Concrete Structure.</li>
            <li>This involved specification the exact Location , Length, and Shape of the Bar , ensuring
                  optimal strength and durability in accordance with the projects design and engineering
                  specification.</li>
            <li>Surveying – Prepare Contouring Levelling , Profile levelling using AUTO-LEVEL
                 instrument.</li>
            <li>DPR – Maintain Daily Progress Report in MS Excel and Sheet Paper.</li>
             <li>Layout – Centreline Layout , Brickwork and Township Layout.</li>      
             <li>Deals with contractor and Client with their Mutual understanding.</li>    
             <li>Site Inspection , Supervision , Organizing and Co-ordination of the Site Activities.</li>   
             <li>Good Communication Skill and Time Management.</li>
             <li>Effective Team Building and Negotiating Skills.</li>
             </ul>
             
             </div>
             </div>
             </div>

             <div className="soft-skill">
              <h3 className='soft-h'>SOFTWARE SKILLS</h3> 
       
              <div className="skill-cover2">
               
      
               <div className="skill-card">
                <div className="skill-image imga1"></div>
                <div className="skill-content">
                <h3 className='soft1'>AutoCAD 2D</h3>
                <p>2D designing and making of a complete submission drawing including Floor
                Plan, Section Plan , Elevation , Site Plan , Location Plan and Area Schedule.</p>
               </div>
              </div>

                 <div className="skill-card">
                <div className="skill-image imga2"></div>
                <div className="skill-content">
                <h3 className='soft2'>AutoCAD 3D</h3>
                <p>3D Drawing to making designing of Exterior and Interior.</p>
               </div>
              </div>

              <div className="skill-card">
                <div className="skill-image imga3"></div>
                <div className="skill-content">
                <h3 className='soft3'>Google Sketchup</h3>
                <p>Using for 3D modelling , making detailing work of interior and Exterior
                of drawing and doing some detailing work of structural plan.</p>
               </div>
              </div>

              <div className="skill-card">
                <div className="skill-image imga4"></div>
                <div className="skill-content">
                <h3 className='soft4'>Lumion & Enscape</h3>
                <p>Using for Rendering of 3D drawing to make realistic and Aesthetic
                view of exterior and interior of the drawing to so more clearing concept of client.</p>
               </div>
              </div>

              <div className="skill-card">
                <div className="skill-image imga5"></div>
                <div className="skill-content">
                <h3 className='soft5'>MS Excel</h3>
                <p>I used MS Excel to create Surveying Task , Profile Levelling , Contouring ,
                Billing and many more .</p>
               </div>
              </div>

              <div className="skill-card">
                <div className="skill-image imga6"></div>
                <div className="skill-content">
                <h3 className='soft6'>EPR–My Build Cost  </h3>
                <p>I used Build Cost Application that serves a versatile
                Estimation Tool , encompassing a wide range of Construction Element such as Excavation ,
               Concrete Quantities , Plastering , Painting , Flooring And More.</p>
               </div>
              </div>

              
              </div>

           
             </div>
    
          
        
    </section>
  );
});

export default About;
