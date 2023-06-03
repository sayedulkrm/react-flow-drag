// import { AddButton } from "../AddButton/AddButton.jsx";
// import { Menu, Dropdown } from "antd";
// import "./EdgeAddButton.scss";

// const EdgeAddButton = (props) => {
//     const { style, data, id } = props;
//     console.log(id);

//     const content = (
//         <Menu
//             onClick={(event) => data.onAddNodeCallback({ id, type: event.key })}
//         >
//             <Menu.Item key="email">Email</Menu.Item>
//             <Menu.Item key="sms">SMS</Menu.Item>
//             <Menu.Item key="waitThenCheck">Rule</Menu.Item>
//             <Menu.Item key="end">End</Menu.Item>
//         </Menu>
//     );
//     return (
//         <div className="EdgeAddButton" style={style}>
//             <Dropdown overlay={content} trigger={["click"]}>
//                 <AddButton {...props} />
//             </Dropdown>
//         </div>
//     );
// };

// export default EdgeAddButton;

// ============================

import { AddButton } from "../AddButton/AddButton.jsx";
import { Menu, Dropdown, Button } from "antd";
import "./EdgeAddButton.scss";
import { useState } from "react";
import { Handle, Position } from "reactflow";
import styles from "./nodes.module.scss";

// import DropzoneNode from "./DropzoneNode.jsx";

const EdgeAddButton = (props) => {
    const { style, data, id } = props;

    const dropzone = (
        <div
            className="node-dropzone"
            onDrop={(event) =>
                data.onAddNodeCallback({
                    id,
                    type: event.dataTransfer.getData("nodeType"),
                })
            }
        >
            {" "}
            +
        </div>
    );
    return (
        <div className="EdgeAddButton" style={style}>
            {dropzone}
        </div>
    );
};

export default EdgeAddButton;
