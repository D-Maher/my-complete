// shorthand for calling React.createElement() below
const ce = React.createElement

const MyTitle = function (props) {
  return (
    ce('div', null, 
      ce('h1', { style: { color: props.color } }, props.title)
    )
  )
}

const MyFirstComponent = function () {
  return ce('div', { id: 'my-first-component' },
    ce(MyTitle, { title: 'Game of Thrones', color: 'yellowgreen' }), 
    ce(MyTitle, { title: 'Stranger Things', color: 'greenyellow' }), 
    ce(MyTitle, { title: 'Rick and Morty', color: 'limegreen' }), 
    ce(MyTitle, { title: 'Silicon Valley', color: 'aquamarine' }) 
  )
}

ReactDOM.render(
  ce(MyFirstComponent),
  document.getElementById('app')
)
