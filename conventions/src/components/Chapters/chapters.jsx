import { memo } from "react";
import { loadTreatyData } from "../Controller";

import './chapters.css';

const Chapters = memo((props) => {

  const { treatyData } = loadTreatyData(props.whichTreaty);
  const treatyKeys = Object.keys(treatyData);

  const chapterContentObject = (number) => {
    return treatyData[treatyKeys[number]]
  }

  const renderChapterContent = (chapter) => {
    const chapterContent = Object.values(chapterContentObject(chapter));

    return chapterContent.map((article) => {
      return (
        chapter === 0
          ? <div className="preamble" dangerouslySetInnerHTML={{__html: article}} />
          : <p className="article">{article[0]}</p>
      )
    });
  }

  return (
    <div className="chapter-content">
      {
        Number.isFinite(props.chapter) && renderChapterContent(props.chapter)
      }
    </div>
  )
});

export default Chapters;
