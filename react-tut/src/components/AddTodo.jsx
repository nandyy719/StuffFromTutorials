import { useState } from "react"


export default function AddTodo({onAdd}) {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text || !day){
            alert('Must add a todo with a date and text')
            return
        }

        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)    
    }

  return (
      <form className='add-form' onSubmit= {onSubmit}>

          <div className='form-control'>
              <label>Todo</label>
              <input type= 'text' placeholder= 'Add Todo' value= {text} onChange= {(e) => setText(e.target.value)}/>
          </div>

          <div className='form-control'>
              <label>Day & Time</label>
              <input type= 'text' placeholder= 'Add Day & Time' value= {day} onChange= {(e) => setDay(e.target.value)}/>
          </div>

          <div className='form-control'>
              <label>Set Reminder</label>
              <input type= 'checkbox' checked = {reminder} value= {reminder} onChange= {(e) => setReminder(e.currentTarget.checked)} />
          </div>

          <input type="submit" value= 'Save Todo' />

      </form>
  )
}
