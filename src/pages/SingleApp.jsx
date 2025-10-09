import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading';
import DownloadIcon from './../assets/icon-downloads.png'
import IconRating from './../assets/icon-ratings.png'
import IconReview from './../assets/icon-review.png'
import ReviewChart from '../components/ReviewChart';
function SingleApp() {

    const { id } = useParams();

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        fetch('/data.json').then(res => res.json()).then(response => {
            if (response?.length) {
                const result = response?.find((item) => item.id == id)
                setItem(result)
            }
            setLoading(false)
        });

        const storedItems = localStorage.getItem('installed');
        const storedData = JSON.parse(storedItems)?.find(item => item.id == id);
        if(storedData){
            setInstalled(true)
        }
    }, [id, loading])

    if (loading) {
        return <Loading />
    }

    const countRating = (ratings) => {
        let result = 0;
        ratings.forEach(ratingItem => {
            result += ratingItem.count;
        })
        return result;
    }

    const formatPrice = (num) => {
        if (num >= 1_000_000_000) {
            return (num / 1_000_000_000).toFixed(1) + 'B';
        } else if (num >= 1_000_000) {
            return (num / 1_000_000).toFixed(1) + 'M';
        } else if (num >= 1_000) {
            return (num / 1_000).toFixed(1) + 'K';
        } else {
            return num.toString();
        }
    }

    const handleInstall = (item) => {
        const previouseItem = localStorage.getItem('installed');
        console.log(previouseItem)
        let data;
        if (previouseItem !== null) {
            data = [
                ...previouseItem,
                item
            ]
        }else{
            data = [item];
        }
        localStorage.setItem('installed', JSON.stringify(data))
        setInstalled(true)
    }

    return (
        <div>
            <section className="max-w-[1420px] mx-auto my-20">
                <div className="grid grid-cols-12 gap-7">
                    <div className="col-span-4">
                        <img src={item?.image} className='rounded' alt="" />
                    </div>
                    <div className="col-span-8">
                        <h3 className='text-3xl font-bold text-[#001931]'>{item?.title}</h3>
                        <p className='text-[#627382] my-2 pb-5 text-xl border-b border-[#001931]/20'>Developed by <span className='font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{item?.companyName}</span></p>
                        <div className="flex gap-18 my-10">
                            <div>
                                <img src={DownloadIcon} className='h-10 w-10' alt="" />
                                <span className='text-[#001931] my-1 inline-block'>Downloads</span>
                                <h3 className='font-extrabold text-4xl'>{item?.downloads}M</h3>
                            </div>
                            <div>
                                <img src={IconRating} className='h-10 w-10' alt="" />
                                <span className='text-[#001931] my-1 inline-block'>Average Ratings</span>
                                <h3 className='font-extrabold text-4xl'>{item?.ratingAvg}</h3>
                            </div>
                            <div>
                                <img src={IconReview} className='h-10 w-10' alt="" />
                                <span className='text-[#001931] my-1 inline-block'>Total Reviews</span>
                                <h3 className='font-extrabold text-4xl'>{formatPrice(countRating(item?.ratings))}</h3>
                            </div>
                        </div>
                        <button className={`bg-[#00D390] py-3 px-5 rounded text-white text-xl ${installed ? 'cursor-not-allowed' : 'cursor-pointer'}`} disabled={installed} onClick={() => handleInstall(item)}>
                            {
                                installed ? 'Installed' : `Install Now (${item?.size} MB)`
                            }
                        </button>
                    </div>
                </div>
            </section>
            <section className="max-w-[1420px] mx-auto my-14">
                <ReviewChart ratingsData={item?.ratings} />
            </section>
            <section className="max-w-[1420px] mx-auto">
                <h3 className='text-[#001931] text-2xl font-semibold'>Description</h3>
                <p className='text-[#627382] text-xl'>{item?.description}</p>
            </section>
        </div>
    )
}

export default SingleApp
