// import React from "react";

// export default () => {
//     const onDragStart = (event, nodeType) => {
//         event.dataTransfer.setData("application/reactflow", nodeType);
//         event.dataTransfer.effectAllowed = "move";
//     };

//     return (
//         <aside>
//             <div className="description">
//                 You can drag these nodes to the pane on the right.
//             </div>
//             <div
//                 className="dndnode input"
//                 onDragStart={(event) => onDragStart(event, "input")}
//                 draggable
//             >
//                 Input Node
//             </div>
//             <div
//                 className="dndnode"
//                 onDragStart={(event) => onDragStart(event, "default")}
//                 draggable
//             >
//                 Default Node
//             </div>
//             <div
//                 className="dndnode output"
//                 onDragStart={(event) => onDragStart(event, "output")}
//                 draggable
//             >
//                 Output Node
//             </div>
//         </aside>
//     );
// };

// =================================================================================================
import React from "react";

const Sidebar = ({ onAddNodeCallback }) => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData("application/reactflow", nodeType);
    };

    return (
        <div className="Sidebar">
            <div
                className="SidebarItem"
                draggable
                onDragStart={(event) => onDragStart(event, "email")}
            >
                Email
            </div>
            <div
                className="SidebarItem"
                draggable
                onDragStart={(event) => onDragStart(event, "sms")}
            >
                SMS
            </div>
            <div
                className="SidebarItem"
                draggable
                onDragStart={(event) => onDragStart(event, "waitThenCheck")}
            >
                Wait and Check
            </div>
            <div
                className="SidebarItem"
                draggable
                onDragStart={(event) => onDragStart(event, "end")}
            >
                End
            </div>
        </div>
    );
};

export default Sidebar;
