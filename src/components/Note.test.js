import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
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

test('Clicking button calls event handler once', () => {
  const note = {
    content: 'Component testing with react testing library',
    important: true
  }

  const mockHandler = jest.fn()

  const component = render(
    <Note note={note} toggleImportance={mockHandler}/>
  )

  const button = component.getByText('make not important')
  fireEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})