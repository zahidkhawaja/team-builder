import React from "react";

const List = props => {
    return (
        <div className = "list-person">
            {props.list.map(item => (
                <div className = "person" key = {item.id}>
                    <h2>{item.name}</h2>
                    <h2>{item.email}</h2>
                    <h2>{item.role}</h2>
                    </div>
            ))}
        </div>
    );
};

export default List;