import React, { Component } from 'react'
import AppHeader from '../app-header'
import Search from '../search-panel'
import PostStatusFilter from '../post-status-filter/post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'
import './app.css'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: "0",
                    label: "Goind to learn React",
                    important: true
                },
                {
                    id: "1",
                    label: "That is so good",
                    important: true
                },
                {
                    id: "2",
                    label: "I need a break.."
                }]
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        
        this.maxId = 4;
    }

    deleteItem(id){
        this.setState(({data})=>{
            const index = data.findIndex((elem)=>elem.id===id);
            const before = data.splice(0, index);
            const after = data.splice(index +1);
            const newArr = [...before, ...after];
            return {
                data: newArr
            }
        });
    }

    addItem(body){
        console.log(body)
        const newItem = {
            label: body,
            important: false,
            id:this.maxId + 1
        }
        this.setState(({data})=>{
           const newArr = [...data, newItem];
           return {
            data: newArr
           }
        });
    }

    render() {
        return (<div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <Search />
                <PostStatusFilter />
            </div>
            <PostList data={this.state.data} onDelete={this.deleteItem} />
            <PostAddForm onAdd={this.addItem} />
        </div>)
    }
};
