class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="container"></section>
        <footer id="mainFooter">
          <!-- Footer main -->
          <section class="ft-main">
            <section class="ft-main-item">
              <ul>
                <li><a href="./index.html"><h2 class="ft-title"> <i class="fa fa-fw fa-home"></i>  Home</h2></a></li> 
              </ul>
              
                
              </section>
            <section class="ft-main-item">
              <h2 class="ft-title"><i class="far fa-person-sign"></i>  About</h2>
              <ul>
                <li><a href="./jamesDladla.html">James Dladla</a></li>
                <li><a href="./wireframes.html">Wireframes</a></li>
                
              </ul>
            </section>
           
            <section class="ft-main-item">
              <h2 class="ft-title"><i class="fas fa-briefcase"></i>  Portfolio</h2>
              <ul>
                <li><a href="./closePictures.html">Close</a></li>
                <li><a href="./widePictures.html">Wide</a></li>
                <li><a href="./sowetoPictures.html">Soweto</a></li>
               
              </ul>
            </section>
            <section class="ft-main-item">
              <h2 class="ft-title"><i class="fal fa-blog"></i>  Blogs</h2>
              <ul>
                <li><a href="./blogs/theoryBlogs.html">Theory</a></li>
                <li><a href="./blogs/creativeBlogs.html">Creative</a></li>
                <li><a href="./blogs/bonus.html">Bonus</a></li>
              </ul>
            </section>
            <section class="ft-main-item">
              <h2 class="ft-title">Stay Updated</h2>
              <p>Subscribe to our newsletter to get our latest news.</p>
              <form>
                <input type="email" name="email" placeholder="Enter email address">
                <input type="submit" value="Subscribe">
              </form>
            </section>
          </section>
        
          <!-- Footer social -->
          <section class="ft-social">
            <ul class="ft-social-list">
              <li><a href="./socialPages/facebook.html"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="./socialPages/twitter.html"><i class="fab fa-twitter"></i></a></li>
              <li><a href="./socialPages/instagram.html"><i class="fab fa-instagram"></i></a></li>
               <li><a href="./socialPages/linkedin.html"><i class="fab fa-linkedin"></i></a></li>
              <li><a href="./socialPages/youtube.html"><i class="fab fa-youtube"></i></a></li>
            </ul>
          </section>
        
          <!-- Footer legal -->
          <section class="ft-legal">
            <ul class="ft-legal-list">
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li>&copy; 2021 Copyright Sikhulile Dube.</li>
            </ul>
          </section>
        </footer>

        `
    }
}
customElements.define('my-footer', myFooter)