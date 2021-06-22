import React, {useState} from "react";

function CreateNote(props) {

    const [note, setNote] = useState({
        title:"",
        content:""
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return(
            <div className="new-note">
                <form className="form">
                    <input 
                    onChange={handleChange}
                    value={note.title}
                    className="title-content" 
                    type="text" 
                    id="title" 
                    name="title" 
                    placeholder="Title"></input>
                    
                    <br></br>

                    <textarea 
                    onChange={handleChange}
                    value={note.content}
                    className="title-content" 
                    type="text" 
                    id="content" 
                    name="content" 
                    placeholder="Make a note..."></textarea>

                    <button className="hvr-icon-grow hvr-grow" id="add-btn" onClick={submitNote}><i class="fas fa-plus hvr-icon"></i></button>
                </form>
            </div>
    );
}

export default CreateNote;