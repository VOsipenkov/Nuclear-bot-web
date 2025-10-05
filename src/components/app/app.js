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
                    important: true,
                    like: false
                },
                {
                    id: "1",
                    label: "That is so good",
                    important: true,
                    like: false
                },
                {
                    id: "2",
                    label: "I need a break..",
                    important: false,
                    like: false,
                }],
            term: '',
            filter: 'all'
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.searchPost = this.searchPost.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.filterPost = this.filterPost.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        this.maxId = 4;
    }

    searchPost(items, term) {
        if (term.length === 0) { return items }
        console.log(items);
        console.log(term);
        return items.filter(item => {
            return (item.label.indexOf(term) > -1)
        })
    }

    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id === id);
            const before = data.splice(0, index);
            const after = data.splice(index + 1);
            const newArr = [...before, ...after];
            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        console.log(body)
        const newItem = {
            label: body,
            important: false,
            id: this.maxId + 1
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleImportant(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const oldElem = data[index];
            const newItem = { ...oldElem, important: !oldElem.important };
            const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArray
            };
        })
    }

    onToggleLike(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const oldElem = data[index];
            const newItem = { ...oldElem, like: !oldElem.like };
            const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArray
            };
        })
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items;
        }
    }

    onFilterSelect(filter) {
        this.setState({ filter })
    }

    onUpdateSearch(term) {
        this.setState({ term });
    }

    render() {
        const { data, term, filter } = this.state;
        const liked = data.filter(elem => elem.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
        return (<div className="app">
            <AppHeader liked={liked} allPosts={allPosts} />
            <div className="search-panel d-flex">
                <Search onUpdateSearch={this.onUpdateSearch} />
                <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect} />
            </div>
            <PostList
                data={visiblePosts}
                onDelete={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleLike={this.onToggleLike}
            />
            <PostAddForm onAdd={this.addItem} />
        </div>)
    }
};
