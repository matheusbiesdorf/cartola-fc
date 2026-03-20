import './MainContent.css';
import SoccerField from '../SoccerField/SoccerField';
import RoundMatches from '../RoundMatches/RoundMatches';
import Players from '../Players/Players';

function MainContent() {
  return (
    <main className="main-content">
      <SoccerField />
      <RoundMatches />
      <Players />
    </main>
  );
}

export default MainContent;