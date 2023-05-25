import Conventions from '../db/Database';

export function loadTreatyData(treaty = 'Deepfake', lang = 'Russian') {
  const treatyData = Conventions[treaty][lang];
  const treatyChapters = [...Object.keys(treatyData)];

  return { treatyData, treatyChapters };
}

export function allTreaties() {
  const treatiesKeys = Object.keys(Conventions);
  const treatiesMap = [];

  treatiesKeys.map((trt) => {
    switch (trt) {
      case 'Deepfake':
        treatiesMap.push({
          route: 'deepfake',
          name: 'Конвенция О регулировании технологии дипфейк',
        });
        break;
      case 'VirtualReality':
        treatiesMap.push({
          route: 'virtual-reality',
          name: 'Конвенция О технологии гиперреальной виртуальной реальности',
        });
        break;
    }
  });

  return treatiesMap;
}
