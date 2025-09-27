import React from "react";

const PostAddForm = ({onAdd}) => {
    return (<div>
        <div className="bottom-panel d-flex">
            <input type="text" placeholder="О чем вы думаете сейчас?" className="form-control new-port-label"/>
            <button type="submit" className="btn btn-outline-secondary" onClick={()=>onAdd('Hello')}>Добавить</button>
        </div>
    </div>)
} 

export default PostAddForm;