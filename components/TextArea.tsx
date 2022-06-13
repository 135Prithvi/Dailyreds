import React, { useState } from 'react'
import HomePage, { GradientBackground } from './Hompage'

export default function TextArea() {
  const [text, setText] = useState('') // React hook
  const [placeholder, setplaceholder] = useState('')
  // Fu

  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  function generateString(length: string | number) {
    let result = ' '
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result
  }

  const randomlist = () => {
    let randno = generateString(text)
    setText(randno)
    setplaceholder('Secure key')
  }
  const sorter = () => {
    let newText = text.toUpperCase()
    setText(newText)
    setplaceholder('To big')
  }

  const onchange = (event: any) => {
    setText(event.target.value)
  }
  return (
    <HomePage>
      <div className="h-screen overscroll-none px-28 pt-14   ">
        <label
          htmlFor="message"
          className="x- block text-xl font-medium text-gray-900 dark:text-gray-900"
        >
          Alphabetical Sorter
        </label>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          {placeholder}
        </label>
        <textarea
          onChange={onchange}
          value={text}
          id="message"
          rows={4}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-cyan-100 dark:text-black dark:placeholder-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder=""
        ></textarea>
        <button
          disabled={text.length === 0}
          type="button"
          onClick={sorter}
          className="mx-5 mt-5 mb-2 rounded-lg bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-blue-900"
        >
          CAPITILIZE
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          onClick={randomlist}
          className="mx-5 mb-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-yellow-500 focus:ring-4  focus:ring-yellow-300 dark:focus:ring-blue-900"
        >
          Secure Key
        </button>
        <div className="preview_container rounded-2xl border-4 border-double border-gray-300 py-2">
          <h1 className=" font-bold">Preview</h1>

          <p className="mt-1">
            {' '}
            {
              text.split(' ').filter((element) => {
                return element.length !== 0
              }).length
            }{' '}
            words {text.length} characters
          </p>
          <p>
            {0.008 *
              text.split(' ').filter((element) => {
                return element.length !== 0
              }).length}{' '}
            minutes
          </p>
        </div>
      </div>
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </HomePage>
  )
}
