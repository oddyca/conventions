import { Route, Routes, useParams } from 'react-router-dom';
import Deepfake from './Deepfake/Deepfake';
import VirtualReality from './Virtual-reality/VirtualReality';
import Chapters from './Chapters/chapters';

export default function Treaty() {
  const { treaty } = useParams();

  const renderTreatyComponent = () => {
    switch (treaty) {
      case 'deepfake':
        return <Deepfake />;
      case 'virtual-reality':
        return <VirtualReality />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Routes>
        <Route path="chapter-:chapterNum" element={<Chapters />} />
      </Routes>
      
      {renderTreatyComponent()}
    </div>
  );
}
