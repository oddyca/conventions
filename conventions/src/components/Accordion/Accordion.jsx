import arrow from '../../assets/arrow.svg';

const Accordion = ({ chapterID, articleName, articleIndex, chapterContentObject}) => {

  const handleArticleDrop = (e) => {
    const clickedArticle = e.currentTarget.nextSibling;
    clickedArticle.classList.toggle('article-active');
    e.currentTarget.children[1].classList.toggle('rotated');
  }

  const renderArticleContent = (chapter, article) => {
    const chapterArticles = Object.values(chapterContentObject(chapter))[article];
    return chapterArticles.map((paragrapgh, id) => {
      const regTest = /^[a-z]\)/.test(paragrapgh)
      if (regTest) {
        return <p key={`art-par-${id}`}>{paragrapgh}</p>
      }
      return <p key={`art-par-${id}`}>{id+1}. {paragrapgh}</p>
    });
  }

  return (
    <div key={`article-${chapterID}-${articleIndex}`} className="article-dropdown">
      <div className='article-row' onClick={handleArticleDrop}>
        <p>{`Статья ${articleName.split('').slice(1).join('')}`}</p>
        <img src={arrow} className="dropdown-arrow" alt='dropdown arrow'/>
      </div>
      <div className={`article-cotent`}>
        {
          renderArticleContent(chapterID, articleIndex)
        }
      </div>
    </div>
  );
};

export default Accordion;