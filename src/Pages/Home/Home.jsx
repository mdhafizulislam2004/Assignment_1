import { useLoaderData } from 'react-router';
import Apps from '../Apps/Apps';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner2/Banner2';

const Home = () => {
    const AppsData=useLoaderData()
    console.log(AppsData);
    
    return (
        <div>
            <Banner></Banner>
            <Banner2></Banner2>
            <Apps AppsData={AppsData}></Apps>
        </div>
    );
};

export default Home;