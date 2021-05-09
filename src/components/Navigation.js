const Navigation = (title) => {
    const nav = $(document.createElement('nav'));
    nav.attr({
        class: 'navbar navbar-dark bg-dark'
    });

    const container = $(document.createElement('div'));
    container.attr({
        class: 'container-fluid'
    });

    const anchor = $(document.createElement('a'));
    anchor.attr({
        class: 'navbar-brand'
    });
    anchor.html(title);

    container.append(anchor);
    nav.append(container);

    return nav;
};

export default Navigation;