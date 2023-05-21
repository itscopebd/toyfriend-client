import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import { Link, useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import FeatureProduct from '../../components/FeatureProduct/FeatureProduct';
import BestSeller from '../../components/BestSeller/BestSeller';
import Card from '../../components/Card/Card';

const HomePage = () => {
    const toys = useLoaderData();
    // const [cat, setCat] = useState([]);
    // const [subCat, setSubCat] = useState(toys)
    const sportsCar=toys.filter(sportsCar=>sportsCar.subCatid==1)
    const regularCar=toys.filter(sportsCar=>sportsCar.subCatid==3)
    const truckCar=toys.filter(sportsCar=>sportsCar.subCatid==2)
    return (
        <div className=''>
            <Banner></Banner>



            <div className='container mx-auto my-10'>
            <h3 className='text-3xl font-bold text-center mb-10'>Shop By Category</h3>
                <Tabs>
                    <TabList>
                        <Tab>Sports Cars</Tab>
                        <Tab>Truck</Tab>
                        <Tab>Regular Car</Tab>
                    </TabList>

                    <TabPanel>
                       <div className='grid grid-cols-3 gap-10'>
                       {
                            sportsCar.splice(0, 3).map(single=><Card single={single}></Card>)
                        }
                       </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid grid-cols-3 gap-10'>
                       {
                            regularCar.splice(0, 3).map(single=><Card single={single}></Card>)
                        }
                       </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid grid-cols-3 gap-10'>
                       {
                            truckCar.splice(0, 3).map(single=><Card single={single}></Card>)
                        }
                       </div>
                    </TabPanel>


                </Tabs>
            </div>













            <FeatureProduct></FeatureProduct>
            <BestSeller></BestSeller>
            <ImageGallery></ImageGallery>
        </div>
    );
};

export default HomePage;