import Sad from '../assets/error.png';
import './PageNotFound.css';

export const PageNotFound = () => {
  return (
    <main className="page">
      <div>
        <img src={Sad} alt="error image" />
      </div>
      <h1>Error 404</h1>
      <h2>Page not Found!</h2>
    </main>
  )
 
};
