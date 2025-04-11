import React from "react";
import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });

const [allArticles, setAllArticles] = useState([]);
const [copied, setCopied] = useState("");

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'));

    if(articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url});

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary};
      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
      
      localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
    }
  }

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({
              ...article, url: e.target.value
            })}
            required
            className="url_input peer"
          />

          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
          >
            Enter
          </button>
        </form>
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div key={`link-${index}`} onClick={() => setArticle(item)} className="link_card">
              <div className="copy_btn bg-white/10 hover:bg-white/20" onClick={() => handleCopy(item.url)}>
                <img src={copied === item.url ? tick: copy} alt="copy_icon" className="w-[40%] h-[40%] object-contain invert brightness-200" />
              </div>
              <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">{item.url}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <div className="flex flex-col items-center gap-2">
            <img src={loader} alt="loader" className="w-20 h-20 object-contain invert brightness-200" />
            <p className="text-white font-satoshi">Loading summary...</p>
          </div>
        ) : error ? (
          <p className="font-inter font-bold text-white text-center bg-red-500/20 p-4 rounded-lg">
            An error occurred
            <br />
            <span className="font-satoshi font-normal text-red-200">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-white text-xl">
                Article <span className="blue_gradient">Summary</span>
              </h2>
              <div className="summary_box p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                <div className="space-y-4">
                  {article.summary.split('\n').map((paragraph, index) => (
                    <p key={index} className="font-inter font-medium text-sm text-white leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
