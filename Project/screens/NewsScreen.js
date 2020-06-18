import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import News from '../components/News';
import { getGeneralNews } from '../scr/actions';

export default function NewsScreen() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const generalNews = useSelector(state => state.generalNews);

  useEffect(() => {setLoading(false);});
  return(
    <View>
      {loading && dispatch(getGeneralNews())}
      {!loading && <News news={generalNews}/>}
    </View>
  );
}