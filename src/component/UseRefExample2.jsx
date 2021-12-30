import { useState, useEffect, useRef} from 'react'

function UseRefExample2() {
  const [name, setName] = useState('')

  const renders = useRef(1)
  const prevName = useRef('')
  
  useEffect(() => {
    renders.current = renders.current + 1
    prevName.current = name
  }, [name])

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>Prev Name: {prevName.current}</h2>
      <input 
        type='text'
        value={name}
        onChange={handleChange}
        className="form-control mb-3"
      />
    </div>
  )
}

export default UseRefExample2
