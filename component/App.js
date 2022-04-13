import html from '../core.js'
import Header from '../component/header.js'
import Footer from '../component/footer.js'
import todoList from '../component/todoList.js'

function App() {
    return html`
    <section class="todoapp">
        ${Header()}
        ${todoList()}
        ${Footer()}
    </section>
    `
}

export default App