import React from 'react'
import {Button} from 'reactstrap'

const PostStatusFilter = () => {
return (
<div className="btn-group">
    <Button outline color='info'>Все</Button>
    <button className="btn secondary" type="button">Понравилось</button>
</div>)
}

export default PostStatusFilter;