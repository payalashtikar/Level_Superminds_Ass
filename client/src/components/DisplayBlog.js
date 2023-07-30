import { Col, Row } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { icons } from 'antd/es/image/PreviewGroup';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './DisplayBlog.css'

const DisplayBlog = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const params = useParams();


    const gotohome = () => { navigate('\home') }

    useEffect(() => {
        fetchData();
    }, [])


    async function fetchData() {
        console.log(params.id)
        try {
            const response = await axios.get("http://localhost:4848/getalldata")
            console.log(response, 'response')
            // console.log(setData(response?.data?.results), 'response')
            return setData(response?.data)
        }
        // try {
        //     const response = await axios.get(`http://localhost:4848/usersdatawithblog/${params.id}`)
        //     console.log("response:", response)
        //     return setData(response?.data)
        // }
        catch (error) {
            console.error(error)
        }

    }
    // console.log(data, 'state')



    //DELETING FUNCTION
    const deleteblog = async (id) => {
        console.log("id:", id)
        let result = await fetch(`http://localhost:4848/deletesinglerecord/${id}`, {
            method: 'DELETE',
        });
        result = await result.json();
        console.log("result:", result)

        return setData("deleted result :", result)
    }

    //EDITING FUNCTION
    // const editblog = async (id) => {
    //     let result = await fetch(`http://localhost:3030/editblog/${id}`, {
    //         method: "PUT",
    //     });
    //     result = await result.json();
    //     return setData("Edited result :", result)
    // }
    // <EditOutlined
    //     style={{ float: 'right', cursor: 'pointer', padding: '5px', marginBottom: "10px" }}
    //     onClick={() => editblog(data._id)}
    //  />
    // const blogHandler=()=>{
    //     navigate('/createblog')
    // }
    return (
        <>
            <div className="displayblog">
                <i>Find your Blog here..</i>
                <div className='blog-card' >

                    {data && Array.isArray(data) && data.length > 0 ? (
                        data.map((item, index) => (
                            <div className='cards'
                                key={index}

                            >
                                <div className='card-data'>
                                    <div className='icons'>
                                        <Link to={"/updateblog/" + item.id}>
                                            <EditOutlined
                                                style={{
                                                    float: 'right',
                                                    cursor: 'pointer',
                                                    padding: '5px',
                                                    marginBottom: '10px',
                                                }}
                                            />
                                        </Link>
                                        <DeleteOutlined
                                            style={{
                                                float: 'right',
                                                cursor: 'pointer',
                                                padding: '5px',
                                                marginBottom: '10px',
                                            }}
                                            onClick={() => deleteblog(item.id)}
                                        />
                                    </div>
                                    <div>
                                        <div className='blog-topic'>{item.title}</div>
                                        <div className='blog-content'>{item.content}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>Deleted
                            <a href='/home' >Go back</a>
                        </div>
                    )}
                </div>
                <br></br>
            </div>

            {/* <div className="displayblog">
                <i>Find your Blog here..</i>
                <div className="blog-card">
                    <div className="user-info">
                        <h3>{data.username}</h3>
                    </div>
                    {data.blogPosts && data.blogPosts.length > 0 ? (
                        data.blogPosts.map((item) => (
                            <div className="cards" key={item.id}>
                                <div className="card-data">
                                    <div className="icons">
                                        <Link to={"/updateblog/" + item.id}>
                                            <EditOutlined
                                                style={{
                                                    float: 'right',
                                                    cursor: 'pointer',
                                                    padding: '5px',
                                                    marginBottom: '10px',
                                                }}
                                            />
                                        </Link>
                                    </div>
                                    <div>
                                        <div className="blog-topic">{item.title}</div>
                                        <div className="blog-content">{item.content}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>No blog posts found.</div>
                    )}
                </div>
                <br />
            </div> */}
        </>
    )
}
export default DisplayBlog;
