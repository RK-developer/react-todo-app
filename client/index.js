import React from 'react'
import { render } from 'react-dom'
window.React = React

import TestAudio from './components/TestAudio'

render(
  <TestAudio />,
  document.getElementById("react-container")
)
