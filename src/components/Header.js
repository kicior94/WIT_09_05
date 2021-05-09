const Header = () => {
    const header = document.createElement('h1');
    const headerText = document.createTextNode('Hello World');
    header.appendChild(headerText);

    return header
};

export default Header;