import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Products from './component/Products/Products';
import Main from './layouts/Main';
import Friends from './component/Friends/Friends';
import FriendDetails from './component/FriendDetails/FriendDetails';
import Posts from './component/Posts/Posts';
import PostDetails from './component/PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
    //****system no-1****
    // {path: '/', element: <div>This is default page</div>},
    // {path: '/home', element: <div>Home Page</div>},
    // {path: '/about', element: <div>About page</div>}

    // //*****System no -2*****
    // {path: '/', element: <div>This is default page</div>},
    // {path: '/home', element: <Home></Home>},
    // {path: '/about', element: <About></About>},
    // {path: '/products', element: <Products></Products>}

    //****system no -3*** Nested router */
    {
      path: '/', 
      element: <Main></Main>,
      children: [
        {path: '/', element: <Home></Home>},
        {path: '/home', element: <Home></Home>},
        {path: '/products', element: <Products></Products>},
        {path: '/friends',
        // data load from api link
        loader: async () => {
          return fetch ('https://jsonplaceholder.typicode.com/users')
        }, 
        element: <Friends></Friends>},
        {
          path: '/friend/:friendId',
          loader: async ({params}) => {
            // console.log(params.friendId)
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendDetails></FriendDetails>
        },
        {
          path: '/posts',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          element: <Posts></Posts>
        },
        {
          path: '/post/:postId',
          loader: async ({params}) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <PostDetails></PostDetails>
        }
      ]
    },
    {path: '/about', element: <About></About>},
    {path: '*', element: <div><h1>This route is not found</h1></div>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
