// import React, { useState } from 'react';
// import { TextField, Button, Box } from '@mui/material';

// function SearchProduct({ onSearch }) { // searchItem을 onSearch로 수정, 올바른 prop 이름 사용
//     const [title, setTitle] = useState(''); // title만 상태로 관리합니다.

//     // 입력 필드 변경 처리 함수
//     const onInputChange = (e) => {
//         setTitle(e.target.value); // 입력 값에 대해 title 상태 업데이트
//     };

//     // 엔터 키 입력 처리 함수
//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             onButtonClick(); // 엔터 키 입력 시 검색 실행
//         }
//     };

//     const onButtonClick = () => {
//         onSearch(title); // 검색 함수 실행
//     };

//     return (
//         <Box style={{ margin: '16px', display: 'flex', alignItems: 'center' }}>
//             <TextField
//                 label="Search Product by Title"
//                 variant="outlined"
//                 name="title"
//                 value={title}
//                 onChange={onInputChange}
//                 onKeyPress={handleKeyPress}
//                 fullWidth
//                 style={{ marginRight: '8px' }}  // 여기서 오른쪽 마진을 추가합니다.
//             />
//             <Button
//                 onClick={onButtonClick}
//                 variant="contained"
//                 color="primary"
//                 style={{ minWidth: '120px', padding: '10px 15px' }}  // 버튼의 최소 너비와 패딩 조정
//             >
//                 제품 검색
//             </Button>
//         </Box>
//     );
// }

// export default SearchProduct;

import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

function SearchProduct({ onSearch }) { // searchItem을 onSearch로 수정, 올바른 prop 이름 사용
    const [title, setTitle] = useState(''); // title만 상태로 관리합니다.

    // 입력 필드 변경 처리 함수
    const onInputChange = (e) => {
        setTitle(e.target.value); // 입력 값에 대해 title 상태 업데이트
    };

    // 엔터 키 입력 처리 함수
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onButtonClick(); // 엔터 키 입력 시 검색 실행
        }
    };

    const onButtonClick = () => {
        onSearch(title); // 검색 함수 실행
    };

    return (
        <Button fullWidth style={{ height: '56px' }} color="primary" variant="contained" onClick={onButtonClick}>
            Search Product
        </Button>
    );
}

export default SearchProduct;