import React, { Component } from "react";

export default class PostListItem extends Component {

   

    render() {
        const { label, id, onDelete, onToggleImportant, onToggleLike, important, like } = this.props;
        let iconStarColor = { color: "grey" };
        let iconLikeColor = { color: "grey" };
        if (important) {
            iconStarColor = { color: "gold" };
        }
        if (like) {
            iconLikeColor = { color: "red" }
        }
        return (<div>
            <li className="app-list-item d-flex justify-content-between" key={id}>
                <span className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-star btn-sm" onClick={onToggleImportant}>
                        <i className="fa fa-star" style={iconStarColor}></i></button>
                    <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
                        <i className="fa fa-trash"></i></button>
                    <i className="fa fa-heart" onClick={onToggleLike} style={iconLikeColor}></i>
                </div>
            </li>
        </div>);
    }
}