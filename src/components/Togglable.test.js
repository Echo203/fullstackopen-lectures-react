import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Togglable from './Toggleable'

describe('<Togglable />', () => {
  let component

  beforeEach(() => {
    component = render(
      <Togglable buttonLabel='Show...'>
        <div className='testDiv' />
      </Togglable>
    )
  })

  test('children is rendered', () => {
    expect(component.container.querySelector('.testDiv')).toBeDefined()
  })

  test('at start children is not displayed', () => {
    const div = component.container.querySelector('.togglableContent')
    expect(div).toHaveStyle('display: none')
  })

  test('after clicking the button, children are displayed', () => {
    const button = component.getByText('Show...')
    fireEvent.click(button)

    const div = component.container.querySelector('.togglableContent')
    expect(div).not.toHaveStyle('display: none')
  })

  test('after using close button, children are not displayed', () => {
    const button = component.getByText('Show...')
    fireEvent.click(button)

    const closingButton = component.getByText('Cancel')
    fireEvent.click(closingButton)

    const div = component.container.querySelector('.togglableContent')
    expect(div).toHaveStyle('display: none')
  })
})