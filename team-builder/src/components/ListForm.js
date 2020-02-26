import React, { useState } from "react";

const ListForm = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    return (
        <form>
            <label>Name</label>
            <input type = "text"></input>
            <br/>
            <label>Email</label>
            <input type = "text"></input>
            <br/>
            <label>Role</label>
            <input type = "text"></input>
            <br/>
            <button>Add</button>
        </form>
    );
};

export default ListForm;