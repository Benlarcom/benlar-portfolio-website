export default function About(){
    return(
        <section className="about-section">
            <div className="about-card">
                <input id="toggle" type="checkbox" />

                <h2>PROFESSIONAL SUMMARY</h2>
                    <p>I have completed a National Diploma in Information Technology with specialization in Software Development at Belgium 
                    Campus iTversity. I'm looking forward to building a career in Information Technology with specific interest in 
                    Software and Applications Development and Testing as well as Cloud Computing.</p>

                    <div className="about-content">
                    <p>I have knowledge of networks including operating systems and security as well as database development. I can solve 
                    information technology problems using programming techniques and tools. I have practical knowledge of graphical user 
                    interface (GUI) development and an understanding of object-oriented programming (OOP). I have knowledge of ADO.Net 
                    and file I/O as well as version control with GitHub.</p>

                    <p>I have knowledge of software development and software architecture, as well as software development lifecycle (SDLC) and 
                    software testing lifecycle (STLC) and related processes, techniques and tools. I further have practical knowledge of scripting 
                    and syntax.</p>

                    <p>I am highly motivated and enthusiastic with a keen interest in information technology software development and interrelation 
                    with other areas such as database development and management. I am well well-organized individual with willingness to learn; 
                    a team player, proactive and adapts well in complex and dynamic environments.</p>
                    
                    <label htmlFor="toggle">Show Less</label>
                </div>
                
                <label htmlFor="toggle">READ MORE</label>
            </div>
        </section>
    );
}