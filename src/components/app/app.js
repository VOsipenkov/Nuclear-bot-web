import React from 'react'
import AppHeader from '../app-header'
import Search from '../search-panel'
import PostStatusFilter from '../post-status-filter/post-status-filter'
import PostList from '../post-list' 
import PostAddForm from '../post-add-form'
import './app.css'

const App = () => (
     (<div className="app">
        <AppHeader />
        <div className="search-panel d-flex">
            <Search />
            <PostStatusFilter/>
        </div>
        <PostList/>
        <PostAddForm/>
    </div>)
)

export default App;