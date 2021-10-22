import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Note from './Note'

test('Renders Content', () => {
  const note = {
    content: 'Component testing with react testing library',
    important: true
  }

  const component = render(
    <Note note={note} />
  )

  expect(component.container).toHaveTextContent('Component testing with react testing library')
})