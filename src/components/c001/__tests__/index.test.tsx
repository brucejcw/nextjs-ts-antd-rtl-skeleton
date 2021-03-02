import React from 'react'
import { render } from '@testing-library/react'

import App from '../index'

describe('With RTL', () => {
  it('App shows "A simple example repo"', () => {
    const data = {
      title: 'Welcome!',
      list: [
        {
          message: 'A template for nextjs + ant-design + styled-components + typescript + jest + rtl',
        },
      ],
    }
    const { queryByText } = render(<App data={data} />)
    expect(
      queryByText('A template for nextjs + ant-design + styled-components + typescript + jest + rtl'),
    ).toBeInTheDocument()
  })
})
