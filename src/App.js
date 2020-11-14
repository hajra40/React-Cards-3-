import Cards from './Cards';

const titles = [
  { 
    id: 1,
    title: 'Card One',
    content: 'Using Props and Map function - 1',
    btn: 'Click - 1'
  },
  { 
    id: 2,
    title: 'Card Two',
    content: 'Using Props and Map function - 2',
    btn: 'Click - 2'
  },
  { 
    id: 3,
    title: 'Card Three',
    content: 'Using Props and Map function - 3',
    btn: 'Click - 3'
  },
]


function App() {
  return (
    <div className="container">
      <Cards titles={titles} />
    </div>
  );
}

export default App;
