import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';

function Footer() {
    return <div>
        {/* <!-- Footer --> */}
<footer class=" page-footer font-small cyan darken-3">

  {/* <!-- Footer Elements --> */}
  <div class="y">

    {/* <!-- Grid row--> */}
    <div class="x">

      {/* <!-- Grid column --> */}
      <div class="text-center col-mr-12 py-1">
        <div class="mb-1 flex-center">

          {/* <!-- Facebook --> */}
          <a href="https://facebook.com" class="fb-ic">
            <FacebookIcon style={{fontSize:50}} />
          </a>
          {/* <!--Linkedin --> */}
          <a href="https://linkedin.com" class="li-ic">
            <LinkedInIcon style={{fontSize:50}} />
          </a>
          {/* <!--Instagram--> */}
          <a href="https://www.instagram.com/?hl=en" class="ins-ic">
            <InstagramIcon style={{fontSize:50}} />
          </a>
          {/* <!--Pinterest--> */}
          <a href="https://pinterest.com" class="pin-ic">
            <PinterestIcon style={{fontSize:50}} />
          </a>
        </div>
      </div>
      {/* <!-- Grid column --> */}

    </div>
    {/* <!-- Grid row--> */}

  </div>
  {/* <!-- Footer Elements --> */}

  {/* <!-- Copyright --> */}
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://sadrachm.github.io/MySite/"> Sadrach Martinez</a>
  </div>
  {/* <!-- Copyright --> */}

</footer>
{/* <!-- Footer --> */}
    </div>
}

export default Footer;