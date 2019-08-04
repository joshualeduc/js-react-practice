function List (props) {
  return (
    <ul>
    {props.items.map((item) => (
      <li key={item.id}>
        <span
        onClick={() => props.toggle && props.toggle(item.id)}
        style={{textDecoration: item.complete ? 'line-through' : 'none'}}>
          {item.name}
        </span>
        <button onClick={() => props.remove(item)}>X</button>
      </li>
    ))}
    </ul>
  )
}

class Todos extends React.Component {

  addItem = (e) => {
    e.preventDefault()
    const name = this.input.value

    this.props.dispatch(handleAddTodo(
      name,
      () => this.input.value = ''
    ))
  }

  removeItem = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo))      
  }

  toggleItem = (id) => {
    this.props.dispatch(handleToggleTodo(id))
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type='text'
          placeholder='Add Todo'
          ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List
          items={this.props.todos}
          remove={this.removeItem}
          toggle={this.toggleItem}
        />
      </div>
    )
  }
}

const ConnectedTodos = ReactRedux.connect((state) => ({
  todos: state.todos
}))(Todos)

class Goals extends React.Component {

  addItem = (e) => {
    e.preventDefault()
    const name = this.input.value
    
    this.props.dispatch(handleAddGoal(
      name,
      () => this.input.value = ''
    ))
  }

  removeItem = (goal) => {
    this.props.dispatch(handleDeleteGoal(goal))
  }

  render() {
    return (
      <div>
        <h1>Goals</h1>
        <input
          type='text'
          placeholder='Add Goal'
          ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add Goal</button>
        <List
          items={this.props.goals}
          remove={this.removeItem}
        />
      </div>
    )
  }
}

const ConnectedGoals = ReactRedux.connect((state) => ({
  goals: state.goals
}))(Goals)

class App extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props

    dispatch(handleInit())
  }
  render() {
    const { loading } = this.props

    if (loading === true) {
      return <h1>Loading</h1>
    }

    return (
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    )
  }
}

const ConnectedApp = ReactRedux.connect((state) => ({
  loading: state.loading
}))(App)

const Context = React.createContext()

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <ConnectedApp />
  </ReactRedux.Provider>, 
  document.getElementById('app')
)
