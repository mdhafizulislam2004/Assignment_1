import { Bar, BarChart, XAxis, YAxis, } from 'recharts';
const AppsRatingChart = ({ ratings }) => {
    console.log(ratings);

    return (
        <div className='max-w-full mt-5 mx-8'>
            <BarChart width={800} height={500} data={ratings} layout="vertical">
                <YAxis dataKey="name" type="category"></YAxis>

                    {/* Aine Bole Dite Hobe je Number Type Data Bose Karon (x)Serial A All Time Text Type Data Hoy & Y te number Type Data Hoy */}

                <XAxis type="number"></XAxis>

                <Bar dataKey="count" fill='red'></Bar>
            </BarChart>
        </div>
    );
};

export default AppsRatingChart;