import html from '../core.js'

function todoItem({ todo }) {
    return html`
    <li class="completed">
        <div class="view">
            <input class="toggle" type="checkbox" checked>
            <label>${todo.title}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `
}

export default todoItem