//src/application/Recommend/index.js

import React, {useEffect} from 'react';
import Slider from '../../components/slider';
import RecommendList from '../../components/list/list';
import Scroll from '../../baseUI/scroll.js';
import {Content} from './style';
import {connect} from 'react-redux';
import * as actionTypes from './store/actionCreators';
import {forceCheck} from 'react-lazyload';
import Loading from '../../baseUI/loading';

function Recommend (props) {
  // mock data
  // const bannerList = [1, 2, 3, 4].map(() => {
  //     return {imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg"}
  // })

  // const recommendList = [...Array(10).keys()].map(item => {
  //     return {
  //         id: 1,
  //         picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
  //         playCount: 114514,
  //         name: "朴树、许巍、李健、郑钧、老狼、赵雷"
  //     }
  // })

  const {bannerList, recommendList, enterLoading} = props;

  const {getBannerDataDispatch, getRecommendListDataDispatch} = props;

  useEffect (() => {
    // 如果页面有数据，则不发请求
    // immutable数据结构中长度属性size
    if (!bannerList.size) {
      getBannerDataDispatch ();
    }
    if (!recommendList.size) {
      getRecommendListDataDispatch ();
    }
    // eslint-disable-next-line
  }, []);

  const bannerListJS = bannerList ? bannerList.toJS () : [];
  const recommendListJS = recommendList ? recommendList.toJS () : [];

  return (
    <Content>
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJS} />
          <RecommendList recommendList={recommendListJS} />
        </div>
      </Scroll>
      {enterLoading ? <Loading /> : null}
    </Content>
  );
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = state => ({
  bannerList: state.getIn (['recommend', 'bannerList']),
  recommendList: state.getIn (['recommend', 'recommendList']),
  enterLoading: state.getIn (['recommend', 'enterLoading']),
});
// 映射dispatch到props上
const mapDispatchToProps = dispatch => {
  return {
    getBannerDataDispatch () {
      dispatch (actionTypes.getBannerList ());
    },
    getRecommendListDataDispatch () {
      dispatch (actionTypes.getRecommendList ());
    },
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (
  React.memo (Recommend)
);
