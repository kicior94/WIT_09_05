const TaskList = (tasks) => {

    const container = $(document.createElement('div'));
    container.attr({
        class: 'container'
    });

    const card = $(document.createElement('div'));
    card.attr({
        class: 'card'
    });

    const cardBody = $(document.createElement('div'));
    cardBody.attr({
        class: 'card-body'
    });

    const cardTitle = $(document.createElement('h5'));
    cardTitle.attr({
        class: 'card-title'
    });
    cardTitle.html('Task list');

    const cardSubtitle = $(document.createElement('h6'));
    cardSubtitle.attr({
        class: 'card-subtitle mb-2 text-muted'
    });
    cardSubtitle.html('This is our task list');
    
    cardBody.append([cardTitle, cardSubtitle, tasks]);
    card.append(cardBody);
    container.append(card)

    return container;
}

export default TaskList;