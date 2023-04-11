import React, { useState } from 'react'
import { Space, Table, Tag , Image, Button, Typography, Input  } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Delete } from '../../API/product';

interface DataType {
    key: string;
    name: string;
    product : string
  };

const ShowCategory = (props:any) => {
  const [Search, setSeach] = useState("");
  const OnRemove = (id:any) => {
    props.OnRemove(id);
  }   
const columns: ColumnsType<DataType> = [
    {
      title: 'id',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'name',
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
        title: 'Số lượng sản phẩm',
        dataIndex: 'Product',
        key: 'Product',
        render: (text) => <a>{text}</a>,
      },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" style={{backgroundColor:"#19A7CE", color: "white"}} onClick={() => window.location.href = '/Admin/Show/Category/'+record.key}>Sửa</Button>
          <Button type='default' style={{backgroundColor: "#FC2947", color:'white'}} onClick={() => OnRemove(record.key)} >Xóa</Button>
        </Space>
      ),
    },
];
const data = props.data.data?.map((item:any) => {
    return {
        key: item._id,
        name: item.name,
        Product : item.Product.length
    }
});
console.log(data);

// const data = [
//     {
//         id : "sadasdsa",
//         name : "sadasdasd"
//     }
// ]

  return (
    <div>
         <Input.Search placeholder='Search here...' onSearch={(value) => {
        setSeach(value)
      }} />
        <Table  columns={columns} dataSource={data} pagination={{pageSize: 2, showQuickJumper : true}} />
    </div>
  )
}

export default ShowCategory