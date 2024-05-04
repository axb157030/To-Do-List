import {memo, useState } from "react"
import { Form, Input, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const Taskbar = memo(function({ onSubmit }) {
    const [newItem, setNewItem] = useState("");
    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")
    }

    return (
        <Form onSubmit={handleSubmit} className="new-item-form" >
            <Segment basic textAlign='center'>
                <Input
                    action={{ color: 'blue', content: 'Add' }}
                    icon='plus'
                    iconPosition='left'
                    placeholder='Add Task'
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    id="item" />
            </Segment>
        </Form>
    );

});
export default Taskbar;