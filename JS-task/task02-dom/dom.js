function changeOuterLinks() {
    
    //format outer links//
    const links = document.querySelectorAll("#link-list > a");
    const emphasizeOuterLinks = link => {
        if (link.innerHTML.toLowerCase().includes("outer-link")) {
            link.setAttribute('target', '_blank')
            link.innerHTML = `<strong>${link.innerHTML}</strong>`
        }
    }
    links.forEach(link => emphasizeOuterLinks(link));

    //format navigation links//
    const navbar = document.querySelector("#link-list");
    navbar.style.display = 'flex';
    navbar.style.flexDirection = 'column';
    navbar.style.margin = '0px auto';
    navbar.style.width = '30%';
    navbar.style.border = '1px solid blue';
    navbar.style.padding = '16px';
}

export { changeOuterLinks };