// // import { useState, useEffect } from 'react';
// // import './App.css';
// // import Product from './Product';
// // import{Container, List,Paper} from "@mui/material";
// // import AddProduct from './AddProduct';
// // import {call} from "./service/ApiService"
// // import ProductRow from './ProductRow';
// // import SearchProduct from './SearchProduct';

// // function App() {
// //   const [items, setItems] = useState([]);

// //   useEffect(()=>{
// //     call("/product", "GET", null)
// //     .then((response) => setItems(response.data));
// //   },[]);

// //   const addItem = (item) => {
// //     call("/product", "POST", item)
// //     .then((response) => setItems(response.data));
// //   }

// //   const onSearch = (title) => {
// //     call(`/product/search?title=${title}`, "GET")
// //     .then((response) => setItems(response.data));
// //   };
  

// //   const editItem = (item) =>{
// //     call("/product", "PUT", item)
// //     .then((response) => setItems(response.data));
// //   }

// //   const deleteItem = (item) => {
// //     call("/product", "DELETE", item)
// //     .then((response) => setItems(response.data));
// //   }

// //   let productItems = 
// //     items.length > 0 && (
// //       <Paper style={{margin: 16}}>
// //         <List>
// //           {items.map((item)=>(
// //             <Product item={item} key={item.id} deleteItem={deleteItem}/>
// //           ))}
// //         </List>
// //       </Paper>
// //         );

// //   const productRows = items.length > 0 && (
// //     <Paper style={{ margin: 16 }}>
// //       <table>
// //         <caption>Product List</caption>
// //         <thead>
// //           <tr>
// //             <th>ID</th>
// //             <th>userID</th>
// //             <th>Title</th>
// //             <th>description</th>
// //             <th>price</th>
// //             <th>삭제버튼</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {items.map(item => (
// //             <ProductRow key={item.id} item={item} editItem={editItem} deleteItem={deleteItem} />
// //           ))}
// //         </tbody>
// //       </table>
// //     </Paper>
// //   );

// //   return (
// //     <div className='App'>
// //       <Container maxWidth="md">
// //         <AddProduct addItem={addItem}/>
// //         <SearchProduct onSearch={onSearch}/>
// //         <div className='ProductList'>{productItems}</div>
// //         <div className='ProductList'>{productRows}</div>
// //       </Container>
// //     </div>
// //   );
// // }

// // export default App;

// import { useState, useEffect } from 'react';
// import './App.css';
// import Product from './Product';
// import{Container, List,Paper, Grid, TextField, Button, AppBar, Toolbar, Typography} from "@mui/material";
// import AddProduct from './AddProduct';
// import {call} from "./service/ApiService"
// import ProductRow from './ProductRow';
// import SearchProduct from './SearchProduct';
// import {signout} from './service/ApiService'

// function App() {
//   const [items, setItems] = useState([]);

//   useEffect(()=>{
//     call("/product", "GET", null)
//     .then((response) => setItems(response.data));
//   },[]);

//   const addItem = (item) => {
//     call("/product", "POST", item)
//     .then((response) => setItems(response.data));
//   }

//   const onSearch = (title) => {
//     call(`/product/search?title=${title}`, "GET")
//     .then((response) => setItems(response.data));
//   };
  

//   const editItem = (item) =>{
//     call("/product", "PUT", item)
//     .then((response) => setItems(response.data));
//   }

//   const deleteItem = (item) => {
//     call("/product", "DELETE", item)
//     .then((response) => setItems(response.data));
//   }

//   let productItems = 
//     items.length > 0 && (
//       <Paper style={{margin: 16}}>
//         <List>
//           {items.map((item)=>(
//             <Product item={item} key={item.id} deleteItem={deleteItem}/>
//           ))}
//         </List>
//       </Paper>
//         );

//   const productRows = items.length > 0 && (
//     <Paper style={{ margin: 16 }}>
//       <table>
//         <caption>Product List</caption>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>userID</th>
//             <th>Title</th>
//             <th>description</th>
//             <th>price</th>
//             <th>삭제버튼</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map(item => (
//             <ProductRow key={item.id} item={item} editItem={editItem} deleteItem={deleteItem} />
//           ))}
//         </tbody>
//       </table>
//     </Paper>
//   );

//   let navigationBar = (
//     <AppBar position="static">
//       <Toolbar>
//         <Grid justifyContent="space-between" container>
//           <Grid item>
//             <Typography variant="h6">product</Typography>
//           </Grid>
//           <Grid item>
//             <Button color='inherit' raised onClick={signout}>
//               로그 아웃
//             </Button>
//           </Grid>
//         </Grid>
//       </Toolbar>
//     </AppBar>
//   );

//   return (
//     <div className='App'>
//       {navigationBar}
//       <Container maxWidth="md">
//         <Grid container spacing={2} style={{ marginTop: 20 }}>
//             <Grid item xs={12} sm={6}>
//                 <TextField label="User ID" name="userId" fullWidth/>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//                 <TextField label="Title" name="title" fullWidth/>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//                 <TextField label="Description" name="description" fullWidth/>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//                 <TextField label="Price" name="price" type="number" fullWidth/>
//             </Grid>
//             <Grid item xs={12} sm={3}>
//               <AddProduct addItem={addItem}/>
//             </Grid>
//             <Grid item xs={12} sm={3}>
//               <SearchProduct onSearch={onSearch}/>
//             </Grid>
//             <Grid item xs={12} sm={3}>
//               <Button fullWidth style={{ height: '56px' }} color="primary" variant="contained" onClick={deleteItem}>
//                 Delete Product
//               </Button>
//             </Grid>
//             <Grid item xs={12} sm={3}>
//               <Button fullWidth style={{ height: '56px' }} color="primary" variant="contained" onClick={editItem}>
//                 Edit Product
//               </Button>
//             </Grid>
//         </Grid>
//         <div className='ProductList'>{productItems}</div>
//         <div className='ProductList'>{productRows}</div>
//       </Container>
//     </div>
//   );
// }

// export default App;
import './App.css';
import Product from './Product';
import React,{useState, useEffect} from 'react';
import {Container, List, Paper} from "@mui/material"
import AddProduct from './AddProduct';
import {call} from "./service/ApiService"

function App() {
  const [items, setItems] = useState([]);

  useEffect(() =>{
    call("/list", "GET", null)
    .then((response) => setItems(response.data));
  },[]);
  
  

  const addItem = (item) => {
    call("/list", "POST", item)
    .then((response) => setItems(response.data));
  }

  const editItem = () =>{
    setItems([...items]);
  }

  const deleteItem = (item) => {
    call("/list", "DELETE", item)
    .then((response) => setItems(response.data));
  }

  // JSX 결과를 변수에 저장
  let todoItems = items.length > 0 && (
    <Paper style={{margin:16}}>
      <List>
        {items.map((item)=> (
          <Product item={item} key={item.id} editItem = {editItem} deleteItem={deleteItem}/>
        ))}
      </List>
    </Paper>
  )
// 변수를 반환
  return (
    <div className='App'>
      <Container maxWidth="md">
        <AddProduct addItem = {addItem}/>
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
