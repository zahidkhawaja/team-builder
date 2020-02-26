import React, { useState } from "react";

const ListForm = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    const handleChanges = event => {
        setMember({...member, [event.target.name]: [event.target.value]})
    }

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({name: "", email: "", role: ""});
    };

    return (
        <form onSubmit = {submitForm}>

            <label htmlFor = "name">Name</label>
            <input id = "name" name = "name" type = "text" onChange = {handleChanges} value = {member.name}></input>
            <br/>

            <label htmlFor = "email">Email</label>
            <input id = "email" name = "email" type = "email" onChange = {handleChanges} value = {member.email}></input>
            <br/>

            <label htmlFor = "role">Role</label>
            <input id = "role" name = "role" type = "text" onChange = {handleChanges} value = {member.role}></input>
            <br/>

            <button type = "submit">Add</button>
        </form>
    );
};

export default ListForm;