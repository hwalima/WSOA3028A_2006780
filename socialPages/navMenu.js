
// All items we'd like to add
const aboutItems = [
    { href: '../myStory.html', text: 'My story'},
    { href: '../jamesDladla.html', text: 'James' },
    { href: '../wireframes.html', text: 'Wireframes' }
];
const portfolioItems = [
    { href: '../closePictures.html', text: 'Close', color: "purple", },
    { href: '../Search_Images.html', text: 'Search' },
    { href: '../joburgAnimals.html', text: 'Joburg cats and dogs' }
];
const blogItems = [
    { href: '../blogs/theoryBlogs.html', text: 'Theory' },
    { href: '../blogs/creativeBlogs.html', text: 'Creative' },
    { href: '../blogs/bonus.html', text: 'Bonus' }
];

const navItems = [
    { href: '../index.html', text: 'Home', className: 'fa fa-fw fa-home' },
    { href: '#', text: 'About', subItems: aboutItems },
    { href: '#', text: 'Portfolio', subItems: portfolioItems },
    { href: '#', text: 'Blogs', subItems: blogItems },
    { href: '../contact.html', text: 'Contact' },
    

];

window.addEventListener('DOMContentLoaded', (event) => {
    rendeMenu();
});

// create elements
const navElem = document.createElement("nav");
navElem.className = "menu";
const navList = document.createElement("ol");


//run the Rendermenu function
const rendeMenu = () => {
    const navBar = document.querySelector(".menu-item");

    for (let i = 0; i < navItems.length; i++) {

        let navItem = document.createElement("li");
        navItem.className = "menu-item";
        let navLink = document.createElement("a");
        navLink.href = navItems[i].href;
        navLink.innerHTML = navItems[i].text;
        navItem.appendChild(navLink);


        //if subitems exists , then render them.
        let subItems = navItems[i].subItems;

        if (!!subItems && !!subItems.length) { 
            let subList = document.createElement("ol");
            subItems.forEach(subItem => {
                let subnavItem = document.createElement("li");
                let subnavLink = document.createElement("a");
                subnavItem.className = "menu-item";
                subList.className = "sub-menu";
               
                subnavLink.href = subItem.href;
                subnavLink.innerHTML = subItem.text;
                subnavItem.appendChild(subnavLink);
                subList.appendChild(subnavItem);
            });

            navItem.appendChild(subList);
        }
        // Add anchor to list item, and list item to list

        navList.appendChild(navItem);
        navElem.appendChild(navList);
    }
}

// Add list to body (or anywhere else)
window.onload = function () {
    document.body.appendChild(navElem);
}

class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="container"></section>
        <footer id="mainFooter">
          <!-- Footer main -->
          <section class="ft-main">
            <section class="ft-main-item">
              <ul>
                <li><a href="../index.html"><h2 class="ft-title"> <i class="fa fa-fw fa-home"></i>  Home</h2></a></li> 
              </ul>
              
                
              </section>
            <section class="ft-main-item">
              <h2 class="ft-title"><i class="far fa-person-sign"></i>  About</h2>
              <ul>
              <li><a href="../myStory.html">My story</a></li>
                <li><a href="../jamesDladla.html">James Dladla</a></li>
                <li><a href="../wireframes.html">Wireframes</a></li>
                
              </ul>
            </section>
           
            <section class="ft-main-item">
              <h2 class="ft-title"><i class="fas fa-briefcase"></i>  Portfolio</h2>
              <ul>
              <li><a href="../closePictures.html">gallery</a></li>
              <li><a href="../Search_Images.html">Search</a></li>
              <li><a href="../joburgAnimals.html">Joburg cats and dogs</a></li>
               
              </ul>
            </section>
            <section class="ft-main-item">
              <h2 class="ft-title"><i class="fal fa-blog"></i>  Blogs</h2>
              <ul>
                <li><a href="../blogs/theoryBlogs.html">Theory</a></li>
                <li><a href="../blogs/creativeBlogs.html">Creative</a></li>
                <li><a href="../blogs/bonus.html">Bonus</a></li>
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
              <li><a href="facebook.html"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="twitter.html"><i class="fab fa-twitter"></i></a></li>
              <li><a href="instagram.html"><i class="fab fa-instagram"></i></a></li>
               <li><a href="linkedin.html"><i class="fab fa-linkedin"></i></a></li>
              <li><a href="youtube.html"><i class="fab fa-youtube"></i></a></li>
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
