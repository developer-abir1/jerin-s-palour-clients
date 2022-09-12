import React from 'react';
import Header from '../components/Home/Header';
import Service from '../components/Home/Service';
import Layout from '../components/layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Header />
      <Service />
    </Layout>
  );
};

export default Home;
