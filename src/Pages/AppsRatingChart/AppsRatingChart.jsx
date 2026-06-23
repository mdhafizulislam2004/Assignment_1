import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, } from 'recharts';
const AppsRatingChart = ({ ratings }) => {
    console.log(ratings);

    return (
        <div className='mt-5 mx-8 h-[400px] sm:h-[500px]'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width="100%" height="100%" data={ratings} layout="vertical">
                <YAxis dataKey="name" type="category"></YAxis>

                    {/* Aine Bole Dite Hobe je Number Type Data Bose Karon (x)Serial A All Time Text Type Data Hoy & Y te number Type Data Hoy */}

                <XAxis type="number"></XAxis>

                <Bar dataKey="count" fill='red'></Bar>
            </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
export default AppsRatingChart;