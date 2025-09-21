import React from "react";

const PostAddForm = () => {
    return (<div>
        <form className="bottom-panel d-flex">
            <input type="text" placeholder="О чем вы думаете сейчас?" className="form-control new-port-label"/>
            <button type="submit" className="btn btn-outline-secondary">Добавить</button>
        </form>
    </div>)
} 

export default PostAddForm;