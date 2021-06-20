
// All items we'd like to add
const aboutItems = [
    { href: 'jamesDladla.html', text: 'James' },
    { href: 'wireframes.html', text: 'Wireframes' }
];
const portfolioItems = [
    { href: 'closePictures.html', text: 'Close', color: "purple", },
    { href: 'widePictures.html', text: 'Wide' },
    { href: 'sowetoPictures.html', text: 'Soweto' }
];
const blogItems = [
    { href: './blogs/theoryBlogs.html', text: 'Theory' },
    { href: './blogs/creativeBlogs.html', text: 'Creative' },
    { href: './blogs/bonus.html', text: 'Bonus' }
];

const navItems = [
    { href: 'index.html', text: 'Home', className: 'fa fa-fw fa-home' },
    { href: '#', text: 'About', subItems: aboutItems },
    { href: '#', text: 'Portfolio', subItems: portfolioItems },
    { href: '#', text: 'Blogs', subItems: blogItems },
    { href: 'contact.html', text: 'Contact' },
    

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
    let mainPath=window.location.pathname==="/WSOA3028A_2006780/"?'.':'..'
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


