import { Bar, BarChart, XAxis, YAxis, } from 'recharts';
const AppsRatingChart = ({ ratings }) => {
    console.log(ratings);


    return (
        <div className='flex justify-center mt-5'>
            <BarChart width={800} height={500} data={ratings}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="count" fill='red'></Bar>
                {/* <Bar dataKey="name" fill='blue'></Bar> */}
            </BarChart>
        </div>
    );
};

export default AppsRatingChart;