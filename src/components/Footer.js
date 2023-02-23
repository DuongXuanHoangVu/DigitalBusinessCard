import Icon from '@mdi/react';
import { mdiTwitter, mdiFacebook, mdiInstagram, mdiGithub } from '@mdi/js';

function Footer() {
    return ( 
        <div className="footer">
            <span className="icon">
                <Icon path={mdiTwitter} size={2} color="#918E9B" />
            </span>
            <span className="icon">
                <Icon path={mdiFacebook} size={2} color="#918E9B" />
            </span>
            <span className="icon">
                <Icon path={mdiInstagram} size={2} color="#918E9B" />
            </span>
            <span className="icon">
                <Icon path={mdiGithub} size={2} color="#918E9B" />
            </span>
        </div>
     );
}

export default Footer;