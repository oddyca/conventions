import Conventions from '../db/Database';

export default function loadChapters(treaty = 'Deepfake', lang = 'Russian') {
  const treatyData = Conventions[lang][treaty];

  const treatyChapters = [...Object.keys(treatyData)];
  // const treatyArticles
  // const ArticlesParagraphs

  return { treatyData, treatyChapters };
};
