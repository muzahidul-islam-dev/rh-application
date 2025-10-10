import React, { useEffect, useState } from 'react'
import AppItem from './AppItem';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import ItemNotFound from './NotFound/ItemNotFound';
import Loading from './Loading';

function TrandingApp({ isShowMore = false, items, isLoading, count = null, title, content, showTotalResults = false, showSearch = false }) {

    const [filter, setFilter] = useState(items);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (isLoading === false && count !== null) {
            const result = items?.slice(0, count);
            setFilter(result)
        } else {
            setFilter(items)
        }

        setLoading(false)
    }, [count, isLoading])

    const handleSearch = (e) => {


        setLoading(true)
        fetch(`/data.json`).then(res => res.json()).then(resposne => {
            setLoading(false)
            const data = resposne?.filter((item) => {
                return item?.title?.toLowerCase()?.includes(e.target.value?.toLowerCase());
            })
            setFilter(data)
        })
    }

    return (
        <section className='py-20'>
            <div className="max-w-[1440px] mx-auto px-5">
                <h3 className='text-center font-bold text-4xl md:text-5xl'>{title || 'Trending Apps'}</h3>
                <p className='text-center text-[#627382] leading-[32px] my-4'>{content || 'Explore All Trending Apps on the Market developed by us'}</p>
                {
                    (showTotalResults || showSearch) && (
                        <div className="grid gap-5 md:flex md:justify-between mt-14 mb-5">
                            {
                                showTotalResults && <h3 className='font-semibold text-2xl text-[#001931]'>({filter?.length}) Apps Found</h3>
                            }
                            {
                                showSearch && <div className='relative'>
                                    <CiSearch className='absolute text-xl top-0 bottom-0 left-3 right-full m-auto text-[#627382]' />
                                    <input onChange={(e) => handleSearch(e)} type="text" className='border border-[#D2D2D2] text-[#627382] outline-none rounded py-1 px-5 pl-10' placeholder='Search Apps' />
                                </div>
                            }
                        </div>
                    )
                }
                {
                    (isLoading || loading) ? <Loading /> : (
                        filter?.length !== 0 ? <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ${!showTotalResults ? 'my-14' : 'mb-14'}`}>
                            {
                                filter?.map((item, index) => <AppItem key={index} item={item} />)
                            }
                        </div> : <ItemNotFound />
                    )
                }
                {
                    isShowMore && <div className="flex justify-center">
                        <Link to={'/apps'} className='bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] text-white py-3 px-10 rounded cursor-pointer'>Show All</Link>
                    </div>
                }
            </div>
        </section>
    )
}

export default TrandingApp
