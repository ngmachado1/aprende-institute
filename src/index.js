import React from 'react'
import ReactDOM from 'react-dom'
import CardList from './components/CardList'


document.querySelector('.dropdown-toggle').addEventListener('click', (e) =>{
    e.preventDefault()
    document.querySelector('.dropdown-menu').classList.toggle('d-none')
    document.querySelector('.fa-angle-down').classList.toggle('rotate')
}

)


ReactDOM.render(<CardList/>, document.getElementById('root'))