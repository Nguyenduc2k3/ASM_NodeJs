import React from 'react';
import { Card, Image } from 'antd';

const { Meta } = Card;

const Home = (props) => {
  return (
    <div className="khung-product">
      <div className="product">
        {props?.data?.data?.map((data) => (
          <Card
            key={data._id}
            hoverable
            cover={<Image src={data.image} />}
            onClick={() => window.location.href=`/productDeltail/${data._id}`}
          >
            <Meta title={data.name} description={`$ ${data.price}`} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
