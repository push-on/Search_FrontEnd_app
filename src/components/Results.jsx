import React, { useEffect, } from "react";
import { useLocation } from "react-router-dom";

import { useResultContext } from "../contexts/ResultContextProvider";
import { Loading } from "./Loading";

export const Results = () => {
  const { getResults, results, searchTerm, isLoading } = useResultContext();
  const location = useLocation();

  let baseUrl = "";
  switch (location.pathname) {
    case "/search":
      baseUrl = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI";
      break;
    case "/images":
      baseUrl = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI";
      break;
    case "/news":
      baseUrl = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI";
      break;
    case "/videos":
      baseUrl = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI";
      break;
    default:
      baseUrl = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/";
  }

  useEffect(() => {
    getResults(baseUrl, `/?q=${searchTerm}&pageNumber=1&pageSize=10&autoCorrect=true`);
  }, [searchTerm, location.pathname]);

  if (isLoading) { return <Loading />; }
  console.log(results?.value);
  console.log(results);

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex justify-center">
          <div className="flex flex-col sm:w-[650px]">
            {results?.value?.map(({ title, url, description }, index) => (
              <div key={index} className=" w-2xl p-3 rounded-lg transition ease-in-out dark:hover:bg-slate-800 hover:bg-slate-200">
                <a href={url} target="_blank" rel="noreferrer" >
                  <p className="font-semibold text-lg hover:underline underline-offset-4 dark:text-blue-300 text-blue-600">
                    {title}
                  </p>
                </a>
                <p className="text-sm italic ">
                  {url?.length > 30 ? url?.substring(0, 30) : url}
                </p>
                <p className="text-justify cursor-text text-sm text-slate-600 dark:text-slate-400" >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify-center">
          {results?.value?.map(({ title, thumbnail, url }, index) => (
            <a className="w-64 h-fit m-2 overflow-hidden rounded-md shadow-md hover:shadow-lg" key={index} href={url} target="_blank" rel="noreferrer">
              <img className="h-52" src={thumbnail} alt={title} />
              <p className="m-2 text-xs hover:underline font-semibold">
                {title?.length > 55 ? title?.substring(0, 55) : title}
              </p>
            </a>
          ))}
        </div>
      );
    case "/news":
      return (
        <div className="flex justify-center ">

          <div className="flex flex-col sm:w-[650px]">
            {results?.value?.map(({ title, url, description, thumbnail }, index) => (
              <div key={index} className="flex w-2xl p-3 rounded-lg transition ease-in-out dark:hover:bg-slate-800 hover:bg-slate-200">
                <div className="container  w-32 pt-2">
                  {/* <img className=" object-fill object-center rounded-md bg-slate-200 dark:bg-slate-900" src={thumbnail} alt="" /> */}
                </div>
                <div className="container">
                  <a href={url} target="_blank" rel="noreferrer" >
                    <p className="font-semibold text-lg hover:underline underline-offset-4 dark:text-blue-300 text-blue-600">
                      {title}
                    </p>
                  </a>
                  <p className="text-sm italic">
                    {url?.length > 50 ? url?.substring(0, 50) : url}
                  </p>
                  <p className="text-justify cursor-text	text-sm text-slate-600 dark:text-slate-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case "/videos":
      return (
        <div className="flex flex-wrap justify-center">
          {results?.value?.map(({ name, thumbnailUrl, contentUrl }, index) => (
            <a className="w-64 h-fit m-2 overflow-hidden rounded-md shadow-md hover:shadow-lg" key={index} href={contentUrl} target="_blank" rel="noreferrer">
              <img className="h-52" src={thumbnailUrl} alt={name} />
              <p className="m-2 text-xs hover:underline font-semibold">
                {name?.length > 55 ? name?.substring(0, 55) : name}
              </p>
            </a>
          ))}
        </div>
      );
    default:
      return "Error";
  }
};
