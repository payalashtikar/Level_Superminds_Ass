import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const UpdateBlog = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    fetchBlogData();
  }, []);

  const fetchBlogData = async () => {
    try {
      const response = await fetch(`http://localhost:4848/updateblogposts/${params.id}`);
      const data = await response.json();
      if (!response.ok) {
        console.error(data.error);
      } else {
        setBlogData(data);
        form.setFieldsValue({
          title: data.title,
          content: data.content,
        });
      }
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };

  const onFinish = async (values) => {
    try {
      const result = await fetch(`http://localhost:4848/updateblogposts/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: values.title,
          content: values.content,
        }),
      });
      if (!result.ok) {
        const errorData = await result.json();
        console.error(errorData.error);
      } else {
        navigate('/home');
      }
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Update blog failed', errorInfo);
  };

  return (
    <div className='Homepage' style={{ padding: '5px', margin: '10px', width: '98%' }}>
      <h4>Update Your blog</h4>
      <Form
        form={form}
        name='basic'
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
        // style={{ width: '500px', padding: '5px', margin: '0 auto' }}
        style={{ width: '500px', padding: '25px', margin: '0 auto',backgroundColor:'#2c3e50',borderRadius:'10px',color:'white',fontSize:'medium' }}

      >
        <Form.Item label='Title' name='title'>
          <Input placeholder='Basic usage'  style={{background:'whitesmoke'}}/>
        </Form.Item>

        <Form.Item label='Content' name='content'>
          <TextArea rows={4}  style={{background:'whitesmoke'}}/>
        </Form.Item>

        <Form.Item shouldUpdate>
          {() => (
            <>
              <Button style={{ width: '25%', padding: '5px',backgroundColor:'#2c3e50',border:'1px groove #eee' }} type='primary' htmlType='submit'>
                Update
              </Button>

              <Link to={'/'}>
                <Button
                  style={{ width: '25%', padding: '5px', marginLeft: '10px' }}
                  htmlType='button'
                //   onClick={() => form.resetFields()}
                >
                  <a href='/home'>Cancel</a>
                </Button>
              </Link>
            </>
          )}
        </Form.Item>
        <a href="/home">Go back</a>

      </Form>
    </div>
  );
};

export default UpdateBlog;
