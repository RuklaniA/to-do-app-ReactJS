import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'
import './App.css';

class AddForm extends Component {
    render() {
        return (
            <div className="AddForm">
                <Form onSubmit={this.props.onSubmit}>
                    <Form.Input
                        fluid
                        label="ADD FORM"
                        labelPosition="left"
                        placeholder="Add item"
                        size="medium"
                        value={this.props.item}
                        onChange={this.props.handleChangeItem}
                    />
                    <Button content='Add' primary onClick={this.props.addItem} />

                </Form>
            </div>
        )
    }
}

export default AddForm;