import { Table, Checkbox, Button } from 'semantic-ui-react'
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, darkTheme }) {
    return (
        <Table.Row>
            <Table.Cell collapsing className={darkTheme}>
                    <Checkbox className={darkTheme}
                        type="checkbox"
                        checked={completed}
                        onChange={e => toggleTodo(id, e.target.checked)}
                    /> &nbsp; &nbsp; {title}
            </Table.Cell>
            <Table.Cell className= {darkTheme}>
                <Button  className="far-right" onClick={() => deleteTodo(id)} color='red'>
                    Delete
                </Button>
            </Table.Cell>
        </Table.Row>
    )
}