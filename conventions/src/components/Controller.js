import Conventions from '../db/Database';

export function loadTreatyData(treaty = 'Deepfake', lang = 'Russian') {
  const treatyData = Conventions[treaty][lang];

  const treatyChapters = [...Object.keys(treatyData)];
  // const treatyArticles
  // const ArticlesParagraphs

  return { treatyData, treatyChapters };
}

export function allTreaties() {
  const treatiesKeys = Object.keys(Conventions);
  const treatiesMap = [];

  treatiesKeys.map((trt) => {
    switch (trt) {
      case 'Deepfake':
        treatiesMap.push('Конвенция О регулировании технологии дипфейк');
        break;
      case 'VirtualReality':
        treatiesMap.push('Конвенция О технологии гиперреальной виртуальной реальности');
        break;
    }
  });

  return treatiesMap;
}
