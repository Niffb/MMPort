import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Work from './pages/Work';
import Placeholder from './pages/Placeholder';

// Hash routing (#/work etc.) so every page works on any static host without rewrites.
const getPath = () => window.location.hash.replace(/^#/, '') || '/';

const App: React.FC = () => {
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const onHash = () => {
      setPath(getPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  let page: React.ReactNode;
  switch (path) {
    case '/work': page = <Work />; break;
    case '/exhibitions': page = <Placeholder title="Exhibitions" />; break;
    case '/shop': page = <Placeholder title="Shop" />; break;
    case '/contact': page = <Placeholder title="Contact" />; break;
    default: page = <Home />;
  }

  return (
    <div className="min-h-screen font-sans text-stone-900 selection:bg-stone-900 selection:text-white">
      <Nav current={path} overImage={path === '/'} />
      <main>{page}</main>
      <footer className="py-10 bg-stone-900 text-stone-500 text-xs text-center">
        © {new Date().getFullYear()} Mia Maya
      </footer>
    </div>
  );
};

export default App;
