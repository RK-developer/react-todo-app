import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import storeFactory from './store/index'
//import TestAudio from './components/TestAudio'
import TodoListApp from './Components/TodoList/TodoListApp'
window.React = React



const store_ = storeFactory()

render(
  //<TestAudio />,
  <Provider store={store_}>
      <TodoListApp />
  </Provider>,
  document.getElementById("react-container")
)
