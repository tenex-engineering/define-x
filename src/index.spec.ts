import { define } from './index.js'
import { expect } from 'vitest'
import { test } from 'vitest'

test('define', () => {
  const x = define<string>('hello')

  expect(x).toBe('hello')
})
