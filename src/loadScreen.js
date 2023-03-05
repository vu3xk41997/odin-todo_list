export function loadNav(){
    const element = document.createElement('h1');
    element.innerHTML = "Todo List";

    return element;
};

export function loadList() {
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

export function loadContent() {
    const element = document.createElement('h1');
    element.innerHTML = "This is content";

    return element;
}