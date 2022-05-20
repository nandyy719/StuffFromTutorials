export default function Header({title, onToggle, showForm}) {
  return (
    <div>
      <header className='header'>
        <h1>{title}</h1>
        <button style  = {showForm ? {backgroundColor: 'red'} : {backgroundColor: 'green'}} className='btn' onClick= {() => onToggle()}>{showForm ? 'Hide' : 'Show Form'}</button>
      </header>
    </div>
  )
}

Header.defaultProps = {title: 'Todo List'}