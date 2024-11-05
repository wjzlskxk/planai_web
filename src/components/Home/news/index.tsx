import React from "react";
import Sidebar from "src/components/common/sidebar";
import Header from "src/components/common/header";
import * as S from "./style";
import Search from "src/assets/images/search.svg";
import useNews from "src/hooks/Home/news/useNews";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

const News = () => {
  dayjs.locale("ko");
  dayjs.extend(relativeTime);
  const { keyword, handlekKeyword, mainNews, interestNews } = useNews();
  return (
    <S.NewsWrap>
      <Header />
      <S.Main>
        <Sidebar />
        <S.NewsContainer>
          <S.SearchWrap>
            <input type="text" placeholder="기획 의도에 맞는 뉴스를 찾아보세요!" />
            <img src={Search} alt="" />
          </S.SearchWrap>
          <S.NewsBox>
            <S.MainNewsWrap>
              <S.Title>주요</S.Title>
              <S.MainNews>
                <S.NewsWrapper>
                  {mainNews?.articles.map((mainNews, idx) => (
                    <S.News onClick={() => (window.location.href = mainNews.url)}>
                      <img src={mainNews.urlToImage} />
                      <div key={idx}>
                        <span>{mainNews.title}</span>
                        <span style={{ color: "#a1a1a1", fontSize: "16px" }}>
                          {dayjs(mainNews.publishedAt).fromNow()}
                        </span>
                      </div>
                    </S.News>
                  ))}
                </S.NewsWrapper>
              </S.MainNews>
            </S.MainNewsWrap>
            <S.InterestNewsWrap>
              <S.Title>관심 항목</S.Title>
              <S.InterestNews>
                {interestNews?.articles.map((interest, idx) => (
                  <div key={idx}>
                    <span style={{ color: "#a1a1a1", fontSize: "18px" }}>{interest.source.name}</span>
                    <span>{interest.title}</span>
                  </div>
                ))}
              </S.InterestNews>
            </S.InterestNewsWrap>
          </S.NewsBox>
          <S.RecommanedWrap>
            <S.Title>추천</S.Title>
            <S.Recommaned></S.Recommaned>
          </S.RecommanedWrap>
        </S.NewsContainer>
      </S.Main>
    </S.NewsWrap>
  );
};

export default News;
