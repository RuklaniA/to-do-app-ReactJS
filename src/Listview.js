import React , {Component} from 'react';
import { Form,List,Button } from 'semantic-ui-react'
import './App.css';

class Listview extends Component{
    render(){
        return(
            <div className="ListView">
            <Form>
             <b>TO-DO-LIST</b>

             <List  selection verticalAlign='middle' >
                 
             <List.Item>
               <List.Content>
                   
                     <div className="inline-block">
                     { 
                     this.props.listItems.map((item, index) => <List.Header key={index}   > 
                       <span style={{textDecoration:this.props.completed?'line-through':'null'}}> 
                            <input 
                            size="50%"
                             id={index}
                             value={item}
                             onChange={(event)=>{this.props.updateItem(event.target.value,item)}}
                             />
                        </span>         
                     <Button color='olive' padding='5px 5px ' onClick={this.props.completeTask} >Complete</Button>
                     <Button onClick={this.props.deleteListItem} color="red" padding="5px">Delete</Button>
                     
                     
                     </List.Header>
                    
                     )
                     }
                    
                 </div>
               </List.Content>
             </List.Item>
           
             </List>
            </Form>
            </div>

        )
    }
}

export default Listview;