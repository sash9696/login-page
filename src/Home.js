import React, {useEffect,useState} from 'react';
import './Home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const BASE_URL = 'http://13.235.87.215:4000';
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        const data = {
            token: localStorage.getItem("token")
        }
        axios.post(BASE_URL + '/api/v1/category/all', data)
            .then(function (response) {
               
                if (response.data.success) {
                    setCategoryList(response.data.categories);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

  return (
    <div id='homePage'>
        <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="home-title text-center">Welcome to Ecommerce</h2>
                        <div className="category-list d-flex flex-row justify-content-center align-items-center">
                            <div className="category-item rounded-3 d-flex justify-content-center align-items-center">
                                <Link className="text-decoration-none text-white" to={"/products"}>All Products</Link>
                            </div>
                            {
                                categoryList.map((category) => (
                                    <div key={category.categoryId} className="category-item rounded-3 d-flex justify-content-center align-items-center">
                                        <Link to={`/products${category.categoryId ? `?categoryId=${category.categoryId}` : ''}`} className="text-decoration-none text-white">{category.name}</Link>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="category-title text-center">Select a category to start shopping</div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Home