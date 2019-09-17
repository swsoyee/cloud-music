//src/application/Recommend/index.js

import React from 'react';
import Slider from '../../components/slider';
import RecommendList from '../../components/list/list';

function Recommend() {

    // mock data
    const bannerList = [1, 2, 3, 4].map(() => {
        return {imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg"}
    })

    const recommendList = [...Array(10).keys()].map(item => {
        return {
            id: 1,
            picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
            playCount: 114514,
            name: "朴树、许巍、李健、郑钧、老狼、赵雷"
        }
    })

    return (
        <div>
            <Slider bannerList={bannerList}></Slider>
            <RecommendList recommendList={recommendList}></RecommendList>
        </div>
    )
}

export default React.memo(Recommend);