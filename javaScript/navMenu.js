
// All items we'd like to add
const aboutItems = [
    { href: 'WSOA3028A_2006780/jamesDladla.html', text: 'James' },
    { href: 'WSOA3028A_2006780/wireframes.html', text: 'Wireframes' }
];
const portfolioItems = [
    { href: 'WSOA3028A_2006780/closePictures.html', text: 'Close', color: "purple", },
    { href: 'WSOA3028A_2006780/widePictures.html', text: 'Wide' },
    { href: 'WSOA3028A_2006780/sowetoPictures.html', text: 'Soweto' }
];
const blogItems = [
    { href: 'WSOA3028A_2006780/blogs/theoryBlogs.html', text: 'Theory' },
    { href: 'WSOA3028A_2006780/blogs/creativeBlogs.html', text: 'Creative' },
    { href: 'WSOA3028A_2006780/blogs/bonus.html', text: 'Bonus' }
];

const navItems = [
    { href: 'WSOA3028A_2006780/index.html', text: 'Home', className: 'fa fa-fw fa-home' },
    { href: '#', text: 'About', subItems: aboutItems },
    { href: '#', text: 'Portfolio', subItems: portfolioItems },
    { href: '#', text: 'Blogs', subItems: blogItems },
    { href: 'WSOA3028A_2006780/contact.html', text: 'Contact' },
    

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
    let pathPrefix=window.location.pathname==="WSOA3028A_2006780"?'./':'../'
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


