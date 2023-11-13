//import logo from './logo.svg';
import './App.css';
import TravelBlog from './components/TravelBlog/TravelBlog';
import Hero from './components/Hero/Hero';
import TravelData from './TravelData';

function App() {
  const TravelBlogComponents = TravelData.map((place) => (
    <TravelBlog
      key={place.id}
      heading={place.heading}
      img1={place.img1}
      img2={place.img2}
      img3={place.img3}
      description={place.description}
    />
  ));
  return (
    <div className="App Container">
      <Hero />
      {TravelBlogComponents}
    </div>

    
  );
}
export default App;
