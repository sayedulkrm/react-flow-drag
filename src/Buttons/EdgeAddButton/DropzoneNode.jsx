import { Button } from "antd";
import { useState, DragEvent, memo } from "react";
import { Handle, Position } from "react-flow-renderer";

import styles from "./nodes.module.scss";

const DropzoneNode = (props) => {
    const [isDropzoneActive, setDropzoneActive] = useState(false);

    const onDrop = () => {
        setDropzoneActive(false);
    };

    const onDragOver = (evt) => {
        evt.preventDefault();
    };

    const onDragEnter = () => {
        setDropzoneActive(true);
    };

    const onDragLeave = () => {
        setDropzoneActive(false);
    };

    return (
        <div
            className={`${styles.NextStepComponent} ${
                isDropzoneActive ? styles.dropzoneNode : ""
            }`}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
        >
            <Handle
                type="target"
                id="b"
                className={styles.handle}
                position={Position.Top}
                style={{
                    background: "#ffff",
                    border: "1px dotted gray",
                    zIndex: "-1",
                }}
            />
            <Handle
                type="source"
                id="a"
                position={Position.Bottom}
                style={{
                    background: "#ffff",
                    border: "1px dotted gray",
                    padding: 0,
                    zIndex: "-1",
                }}
            />

            {isDropzoneActive && (
                <p style={{ textAlign: "center" }}>Drop here</p>
            )}
            <div className={styles.cancelButton}>
                <Button
                    style={{
                        margin: "-1px -19px",
                        padding: "0 0",
                        zIndex: "10",
                    }}
                    size="small"
                ></Button>
            </div>
        </div>
    );
};

export default memo(DropzoneNode);
