// export function loadNav(){
//     const element = document.createElement('div');
//     const header = document.createElement('h1');
//     header.classList.add('header');
//     header.innerHTML = "Todo List";

//     return element;
// };

export function loadNav() {
    const list = document.createElement('ul');
    list.setAttribute('id','nav-list');
    const general = document.createElement('li');
    general.innerHTML = "General";
    general.setAttribute('id','general');
    const project = document.createElement('li');
    project.setAttribute('id','project');
    project.innerHTML = "Projects";
    const note = document.createElement('li');
    note.setAttribute('id','note');
    note.innerHTML = "Notes";

    list.appendChild(general);
    list.appendChild(project);
    list.appendChild(note);

    return list
}

export function loadGeneral() {
    const element = document.createElement('div');
    const header = document.createElement('div');
    const general = document.createElement('p');
    const add = document.createElement('p');
    element.classList.add('general-list');
    header.classList.add('groupName');
    general.innerHTML = "General";
    add.innerHTML = "+";
    header.appendChild(general);
    header.appendChild(add);
    element.appendChild(header)

    return element;
}

export function showTodo(title, dueDate, ) {
    const element = document.createElement('div');
    element.classList.add('todo-element');
}