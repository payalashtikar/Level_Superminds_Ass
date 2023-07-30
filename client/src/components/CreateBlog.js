import React, { Fragment, useState } from "react";
import { Form, Input, Button, } from "antd";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;

const CreateBlog = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    //CREATING STORY FUNCTION
    const onFinish = async (values) => {
        console.log("values : ", values);
        let result = await fetch("http://localhost:4848/createblog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: values.title,
                content: values.content,
                user_id : values.user_id
            }),
        });
        result = await result.json();
        console.log("result :", result);
        if (result.error) {
            console.log(result.error)
        } else {
            form.resetFields();
        }
        navigate('/home')
        return result
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div
            className="CreateBlog"
            style={{ padding: '5px', margin: '10px', width: '98%' , }}
        >
            <h4>Create Your Blog</h4>
            <Form
                form={form}
                name="basic"
                layout={"vertical"}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                style={{ width: '500px', padding: '25px', margin: '0 auto',backgroundColor:'#2c3e50',borderRadius:'10px',color:'white',fontSize:'medium' }}
            >
                <Form.Item
                    label="Title"
                    name='title'
                    style={{color:'white' ,}}>
                    <Input placeholder="Basic usage"  style={{background:'whitesmoke'}}/>
                </Form.Item>

                <Form.Item
                    label="Content"
                    name='content'
                    style={{color:'white' ,}}>
                    <TextArea rows={4} style={{background:'whitesmoke'}}/>
                </Form.Item>
                <Form.Item
                    label="userr"
                    name='user_id'
                    style={{color:'white' ,}}>
                    <Input placeholder="related to which user" style={{background:'whitesmoke'}}/>
                </Form.Item>

                <Form.Item shouldUpdate>
                    {() => (
                        <Fragment>
                            <Button
                                style={{ width: "25%", padding: "5px",backgroundColor:'#2c3e50',border:'1px groove #eee' }}
                                type="primary"
                                htmlType="submit"
                                // onClick={gotoDisplayBlog}
                            >
                                Create
                            </Button>

                            <Button
                                style={{ width: "25%", padding: "5px", marginLeft: "10px" }}
                                htmlType="button"
                                onClick={() => form.resetFields()}
                            >
                                {" "}
                                Reset
                            </Button>
                        </Fragment>
                    )}
                </Form.Item>
                <a href="/home">Go back</a>
            </Form>
            

        </div>
    );
};
export default CreateBlog;
