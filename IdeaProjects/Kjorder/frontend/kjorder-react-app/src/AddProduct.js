// import React, { useState } from "react";
// import { Button, Grid, TextField } from "@mui/material";

// const AddProduct = ({ addItem }) => {
//     // 초기값 설정, 모든 필드를 빈 문자열로 초기화
//     const [item, setItem] = useState({
//         userId: '',
//         title: '',
//         description: '',
//         price: ''
//     });

//     // 입력 필드 변경 처리 함수
//     const onInputChange = (e) => {
//         const { name, value } = e.target;
//         setItem(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     // 제품 추가 버튼 클릭 처리 함수
//     const onButtonClick = () => {
//         addItem(item);
//         setItem({ userId: '', title: '', description: '', price: '' });
//     };

//     // 엔터 키 입력 처리 함수
//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             onButtonClick();
//         }
//     };

//     return (
//         <Grid container spacing={2} style={{ marginTop: 20 }}>
//             <Grid item xs={12} sm={6}>
//                 <TextField label="User ID" name="userId" fullWidth
//                     value={item.userId} onChange={onInputChange} onKeyPress={handleKeyPress} />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//                 <TextField label="Title" name="title" fullWidth
//                     value={item.title} onChange={onInputChange} onKeyPress={handleKeyPress} />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//                 <TextField label="Description" name="description" fullWidth
//                     value={item.description} onChange={onInputChange} onKeyPress={handleKeyPress} />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//                 <TextField label="Price" name="price" type="number" fullWidth
//                     value={item.price} onChange={onInputChange} onKeyPress={handleKeyPress} />
//             </Grid>
//             <Grid item xs={12} sm={12}>
//                 <Button fullWidth style={{ height: '56px' }} color="primary" variant="contained" onClick={onButtonClick}>
//                     Add Product
//                 </Button>
//             </Grid>
//         </Grid>
//     );
// }

// export default AddProduct;

import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

const AddProduct = ({ addItem }) => {
    // 초기값 설정, 모든 필드를 빈 문자열로 초기화
    const [item, setItem] = useState({
        userId: '',
        title: '',
        description: '',
        price: ''
    });

    // 입력 필드 변경 처리 함수
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setItem(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // 제품 추가 버튼 클릭 처리 함수
    const onButtonClick = () => {
        addItem(item);
        setItem({ userId: '', title: '', description: '', price: '' });
    };

    // 엔터 키 입력 처리 함수
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onButtonClick();
        }
    };

    return (
        <Button fullWidth style={{ height: '56px' }} color="primary" variant="contained" onClick={onButtonClick}>
            Add Product
        </Button>
    );
}

export default AddProduct;
