import { TodoItem } from "./TodoItem"
import { Segment, Grid, Table } from 'semantic-ui-react'

export function TodoList({ todos, toggleTodo, deleteTodo, darkTheme }) {
    return (
        <Segment basic className= 'center' >
            <Grid>
                <Grid.Column>
                    <Table className= {darkTheme}>
                        <Table.Body>
                            {todos.length === 0 && "No Todos"}
                            {todos.map(todo => {
                                return (
                                    <TodoItem
                                        {...todo}
                                        key={todo.id}
                                        toggleTodo={toggleTodo}
                                        deleteTodo={deleteTodo}
                                        darkTheme={darkTheme}
                                    />
                                )
                            })}
                        </Table.Body>
                    </Table>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}