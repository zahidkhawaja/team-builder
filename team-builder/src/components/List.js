import React from "react";

const List = props => {
    return (
        <div className = "list-person">
            {props.list.map(item => (
                <div className = "person" key = {item.id}>
                    <h4>Name: {item.name}</h4>
                    <h4>Email: {item.email}</h4>
                    <h4>Role: {item.role}</h4>
                    <button className = "button">EDIT</button>
                    </div>
            ))}
        </div>
    );
};

export default List;