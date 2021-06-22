import React from "react";

function Notes(props) {

    function handleClick() {
        props.onDelete(props.id);
    }

    return(
        <div>
            <div className="note">
                <h4>{props.title}</h4>
                <p>{props.content}</p>
            </div>
            <button className="hvr-icon-shrink hvr-shrink" id="delete-btn" onClick={handleClick}><i class="fas fa-trash hvr-icon"></i></button>
        </div>
        

    );
}

export default Notes;