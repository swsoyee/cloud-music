//src/application/Singers/index.js

import React, {useState} from 'react';
import Horizon from '../../baseUI/horizon-item';
import {categoryTypes, alphaTypes} from '../../api/config';
import {NavContainer, List, ListContainer, ListItem} from './style';
import Scroll from '../../baseUI/scroll';

function Singers (props) {
  // Mock Data
  const singerList = [...Array (12).keys ()].map (item => {
    return {
      picUrl: 'https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg',
      name: '隔壁老苏',
      accountId: 274537807,
    };
  });

  const renderSingerList = () => {
    return (
      <List>
        {singerList.map ((item, index) => {
          return (
            <ListItem key={item.accountId + '' + index}>
              <div className="img_wrapper">
                <img
                  src={`${item.picUrl}?param=300x300}`}
                  width="100%"
                  height="100%"
                  alt="music"
                />
              </div>
              <span className="name">{item.name}</span>
            </ListItem>
          );
        })}
      </List>
    );
  };

  let [category, setCategory] = useState ('');
  let [alpha, setAlpha] = useState ('');

  let handleUpdateAlpha = val => {
    setAlpha (val);
  };

  let handleUpdateCatetory = val => {
    setCategory (val);
  };

  return (
    <div>
      <NavContainer>
        <Horizon
          list={categoryTypes}
          title={'分类(默认热门):'}
          handleClick={val => handleUpdateCatetory (val)}
          oldVal={category}
        />
        <Horizon
          list={alphaTypes}
          title={'首字母:'}
          handleClick={val => handleUpdateAlpha (val)}
          oldVal={alpha}
        />
      </NavContainer>
      <ListContainer>
        <Scroll>
          {renderSingerList ()}
        </Scroll>
      </ListContainer>
    </div>
  );
}

export default React.memo (Singers);
