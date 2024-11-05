import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import CONFIG from "src/config/config.json";
import { NewsResponse } from "src/types/Home/news/news.type";

const useNews = () => {
  const [keyword, setKeyword] = useState<string>("pizza");
  const [mainNews, setMainNews] = useState<NewsResponse>();
  const [interestNews, setInterestNews] = useState<NewsResponse>();

  const handlekKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const getMainNews = async () => {
    try {
      await axios
        .get<NewsResponse>(`https://newsapi.org/v2/top-headlines?source=google-news&country=us`, {
          headers: {
            "X-Api-Key": CONFIG.NEWS_API_KEY,
          },
        })
        .then((res) => {
          setMainNews(res.data);
          console.log(res);
        });
    } catch (error) {}
  };

  const getInterestNews = async () => {
    try {
      await axios
        .get<NewsResponse>(`https://newsapi.org/v2/top-headlines?category=technology`, {
          headers: {
            "X-Api-Key": CONFIG.NEWS_API_KEY,
          },
        })
        .then((res) => {
          setInterestNews(res.data);
          console.log(res);
        });
    } catch (error) {}
  };

  useEffect(() => {
    getMainNews();
    getInterestNews();
  }, []);

  return {
    keyword,
    mainNews,
    interestNews,
    handlekKeyword,
    getMainNews,
  };
};

export default useNews;
