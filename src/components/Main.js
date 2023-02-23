
import Icon from '@mdi/react';
import { mdiEmail, mdiLinkedin } from '@mdi/js';


function Main() {
    return ( 
        <section className="main">
            <h1 className="user-name">Tom Holland</h1>
            <p className="user-job">Frontend Developer</p>
            <p className="user-website">tomholland.website</p>
            <div className="user-social">
                <button className="btn btn-email">
                    <Icon path={mdiEmail} size={1.4} />
                    <span>Email</span>
                </button>
                <button className="btn btn-linked">
                    <Icon path={mdiLinkedin} size={1.4} />
                    <span>LinkedIn</span>
                </button>
            </div>
            <div className="user-about">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className="user-interests">
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </section>
     );
}

export default Main;