import React , {Component} from 'react';
import { Header,Divider} from 'semantic-ui-react';
import "./AddForm";
import './App.css';
import AddForm from './AddForm';
import Listview from './Listview';

class App extends Component{
  constructor(props){
    super(props);

    this.state={
        item :'',

        listItems:[
         
        ],
        completed:false
      
    }

    this.handleChangeItem = this.handleChangeItem.bind(this);

  }

  handleChangeItem = event => {
    this.setState({
      item: event.target.value
    });
    
  };

  onSubmit =(event)=>{
    event.preventDefault();
    this.setState({
        item:'',
        listItems:[...this.state.listItems,this.state.item]
    })
    console.log("onsubmit")
  }

  addItem =()=>{
    this.setState({
      item:this.state.item,
    })
    console.log("added item "+this.state.item)
  }

  reset=()=>{
    this.setState({
      item:''

    })
  }


  deleteListItem = (key) => {
    const newArr = [...this.state.listItems];
    newArr.splice(key, 1);
    this.setState({listItems: newArr});
}

// updateItem=(key,item)=>{
//   const newlistItems = [...this.state.listItems]
//   newlistItems.map(list=>{
//     if(list.key===key){
//       list.item = item;
//     }
//   }
//     )

//     this.setState({
//       listItems:newlistItems
//     })
// }

updateItem = (key, item) => {
  const newlistItems = [...this.state.listItems]
  this.setState( {
     
     listItems:newlistItems.map(list => {
        if(list.key === key){
           list.item = item;
        }

        return list;
     })
  })
}

completeTask=()=>{
  this.setState({
    completed:!this.state.completed
  })
}


  render(){
    return(
      <div class="App">
          <Header as='h1'>To Do App</Header>
          <Divider horizontal/>
          <AddForm
            item={this.state.item}
            handleChangeItem = {this.handleChangeItem}
            addItem={this.addItem}
            reset={this.reset}
            onSubmit={this.onSubmit}
          />
          <Divider horizontal/>
          <Listview
             listItems={this.state.listItems}
             deleteListItem={this.deleteListItem}
             completeTask={this.completeTask}
             updateItem={this.updateItem}
             completed={this.props.completed}
      
           
          />
      </div>
    )
  }
}

export default App;
