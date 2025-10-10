import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'Page B',
        uv: 868,
        pv: 967,
        amt: 1506,
    },
    {
        name: 'Page C',
        uv: 1397,
        pv: 1098,
        amt: 989,
    },
    {
        name: 'Page D',
        uv: 1480,
        pv: 1200,
        amt: 1228,
    },
    {
        name: 'Page E',
        uv: 1520,
        pv: 1108,
        amt: 1100,
    },
    {
        name: 'Page F',
        uv: 1400,
        pv: 680,
        amt: 1700,
    },
];



const ReviewChart = ({ ratingsData }) => {
    const filterData = ratingsData?.map((item) => ({
        name: item?.name,
        totalreview: item?.count,
    }));


    return (
        <div className='border-y border-gray-300 py-14'>
            <h3 className='text-[#001931] text-2xl font-semibold'>Reviews</h3>
            <ResponsiveContainer className="!h-[354px]" style={{
                outline: 'none !important'
            }}>
                <ComposedChart
                    layout="vertical"
                    data={filterData}
                >
                    <XAxis axisLine={false} tickLine={false} type="number" />
                    <YAxis reversed axisLine={false} tickLine={false} tick={{
                        dy: 30,
                        fontSize: 18,
                        fill: "#627382",
                    }} dataKey="name" type="category" scale="band" />
                    <Tooltip cursor={false} />
                    <Bar dataKey="totalreview" barSize={32} fill="#FF8811" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ReviewChart;