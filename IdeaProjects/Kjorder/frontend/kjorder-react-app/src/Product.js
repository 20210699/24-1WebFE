import React,{useState} from "react";
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@mui/material";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined"

const Product = (props) =>{
    const [item, setItem] = useState(props.item);
    const [readOnly, setReadOnly] = useState(true);

    const editItem = props.editItem;

    const editEventHandler = (e) => {
        setItem({...item, title: e.target.value})
    };

    const turnOffReadOnly = (e) =>{
        if(e.key === "Enter" && readOnly === false){
            setReadOnly(true);
            editItem(item);
        }
    }

    const deleteItem = props.deleteItem;
    const deleteEventHandler = () => {
        deleteItem(item);
    }

    return(
        <ListItem>
            <Checkbox checked={item.done}/>
            <ListItemText>
                <InputBase
                    inputProps={{
                        "aria-label": "naked",
                        readOnly : readOnly
                        }}
                    onClick={turnOffReadOnly}
                    onKeyDown={turnOffReadOnly}
                    onChange={editEventHandler}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}/>
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Product"
                    onClick={deleteEventHandler}>
                    <DeleteOutlineOutlined/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default Product;