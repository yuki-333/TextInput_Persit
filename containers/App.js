import App from "../components/App";
import { connect } from "react-redux";

import { addTodo } from '../actions'


const mapStateToProps = state => {
   return {
       title: state.title,
       todo: state.todos.list,
   };
};

const mapDispatchToProps = dispatch => {
   return {
       onAddToDo: todo => {
           dispatch(addTodo(todo))
       }
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
