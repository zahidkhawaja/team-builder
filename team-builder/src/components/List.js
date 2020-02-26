import React from "react";

const List = props => {
    return (
        <div className = "list-person">
            {props.list.map(item => (
                <div className = "person" key = {item.id}>
                    <h2>{item.name}</h2>
                    <h4>{item.email}</h4>
                    <h4>{item.role}</h4>
                    </div>
            ))}
        </div>
    );
};

export default List;