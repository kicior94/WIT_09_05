const Tasks = () => {
    const table = $(document.createElement('table'));
    table.attr({
        class: 'table table-dark table-borderless'
    });

    // 1). Create table headers
    const thead = $(document.createElement('thead'));
    const columnHeaders = $(document.createElement('tr'));
    const taskHeader = $(document.createElement('th'));
    taskHeader.attr({
        scope: 'col'
    });
    taskHeader.html('Task name');
    const taskDescriptionHeader = $(document.createElement('th'));
    taskDescriptionHeader.attr({
        scope: 'col'
    });
    taskDescriptionHeader.html('Task Description');
    const taskNumberHeader = $(document.createElement('th'));
    taskNumberHeader.attr({
        scope: 'col'
    });
    taskNumberHeader.html('#');
    columnHeaders.append([taskNumberHeader, taskHeader, taskDescriptionHeader]);
    thead.append(columnHeaders);

    // 2). Create table body
    const tbody = $(document.createElement('tbody'));
    const task1 = $(document.createElement('tr'));
    const task1Number = $(document.createElement('td'));
    task1Number.html('1');
    const task1TaskName = $(document.createElement('td'));
    const task1TaskDescription = $(document.createElement('td'));
    task1TaskName.html('Example task name');
    task1TaskDescription.html('Example task description');
    task1.append([task1Number,task1TaskName, task1TaskDescription]);
    tbody.append(task1);

    //3). Append thead and tbody to the table
    table.append([thead, tbody]);

    return table;
};

export default Tasks;