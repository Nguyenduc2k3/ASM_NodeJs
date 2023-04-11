import React, { useState } from 'react'
import { Space, Table, Tag , Image, Button, Typography, Input  } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Delete } from '../../API/product';

interface DataType {
    key: string;
    name: string;
    price: number;
    description: string;
    image: string;
  };

const ShowProduct = (props:any) => {
  const [Search, setSeach] = useState("");
  const OnRemove = (id:any) => {
    props.OnRemove(id);
  }   
const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
      filteredValue : [Search],
      onFilter : (value:any, record) => {
        return (
          String(record.name).toLowerCase().includes(value.toLowerCase())
          )
      }
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'image',
      key: 'image',
      dataIndex: 'image',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" style={{backgroundColor:"#19A7CE", color: "white"}} onClick={() => window.location.href = '/Admin/Update/'+record.key}>Sửa</Button>
          <Button type='default' style={{backgroundColor: "#FC2947", color:'white'}} onClick={() => OnRemove(record.key)} >Xóa</Button>
        </Space>
      ),
    },
];
const data = props.product.data?.map((item:any) => {
    return {
        key: item._id,
        name: item.name,
        price: item.price,
        description : item.description,
        image : <Image width={100} src={item.image} />
    }
});
// console.log(data);

  return (
    <div>
      <Input.Search placeholder='Search here...' onSearch={(value) => {
        setSeach(value)
      }} />
        <Table columns={columns} dataSource={data} pagination={{pageSize: 3, showQuickJumper : true}} />
    </div>
  )
}

export default ShowProduct