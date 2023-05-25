import { memo, useState } from "react";
import { loadTreatyData } from "../Controller";
import Accordion from "../Accordion/Accordion"

import './chapters.css';

const Chapters = memo((props) => {
  const { treatyData } = loadTreatyData(props.whichTreaty);
  const treatyKeys = Object.keys(treatyData);

  const chapterContentObject = (number) => {
    return treatyData[treatyKeys[number]]
  }

  const renderChapterContent = (chapter) => {
    const chapterArticles = Object.keys(chapterContentObject(chapter));
    const chapterContent = Object.values(chapterContentObject(chapter));
    if (chapter === 0){
      return chapterContent.map((article, id) => <p key={`paragprah-${id}`} className="preamble" dangerouslySetInnerHTML={{__html: article}} />);
    } else {
      return chapterArticles.map((article, id) => {
        return(
          <Accordion key={`article-${chapter}-${id}`} chapterID={chapter} articleName={article} articleIndex={id} chapterContentObject={chapterContentObject}/>
        )
      });
    }
  }

  return (
    <div className="chapter-content">
      {
        renderChapterContent(props.chapter)
      }
    </div>
  )
});

export default Chapters;
