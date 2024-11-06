import axios from 'axios';
import React, { useState } from 'react';
import CONFIG from 'src/config/config.json';
import { NewsResponse } from 'src/types/Home/news/news.type';

const useNews = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [news, setNews] = useState<NewsResponse>();

  const handlekKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const getSearchNews = async (keyword: string) => {
    try {
      await axios
        .get<NewsResponse>(`https://newsapi.org/v2/everything?q=${keyword}`, {
          headers: {
            'X-Api-Key': CONFIG.NEWS_API_KEY,
          },
        })
        .then((res) => setNews(res.data));
    } catch {}
  };

  return {
    keyword,
    handlekKeyword,
    getSearchNews,
  };
};

export default useNews;
