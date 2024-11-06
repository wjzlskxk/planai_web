import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CONFIG from 'src/config/config.json';
import { NewsResponse } from 'src/types/Home/news/news.type';

const useNews = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [mainNews, setMainNews] = useState<NewsResponse>();
  const [interestNews, setInterestNews] = useState<NewsResponse>();
  const [recommandNews, setRecommandNews] = useState<NewsResponse>();
  const [news, setNews] = useState<NewsResponse>();

  const handlekKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const getMainNews = async () => {
    try {
      await axios
        .get<NewsResponse>(`https://newsapi.org/v2/top-headlines?source=google-news&country=us`, {
          headers: {
            'X-Api-Key': CONFIG.NEWS_API_KEY,
          },
        })
        .then((res) => {
          console.log(res.data);

          setMainNews(res.data);
        });
    } catch (error) {}
  };

  const getInterestNews = async () => {
    try {
      await axios
        .get<NewsResponse>(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com`, {
          headers: {
            'X-Api-Key': CONFIG.NEWS_API_KEY,
          },
        })
        .then((res) => {
          setInterestNews(res.data);
        });
    } catch (error) {}
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

  const getNaverNews = async () => {
    try {
      await axios
        .get<NewsResponse>(`https://newsapi.org/v2/top-headlines?category=technology`, {
          headers: {
            'X-Api-Key': CONFIG.NEWS_API_KEY,
          },
        })
        .then((res) => setRecommandNews(res.data));
    } catch (error) {}
  };

  useEffect(() => {
    getMainNews();
    getInterestNews();
    getNaverNews();
  }, []);

  return {
    keyword,
    mainNews,
    interestNews,
    recommandNews,
    handlekKeyword,
    getMainNews,
    getSearchNews,
  };
};

export default useNews;
