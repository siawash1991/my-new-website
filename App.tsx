import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { BlogPage } from './pages/BlogPage';
import { CoursesPage } from './pages/CoursesPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { Page, Language } from './types';

function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [lang, setLang] = useState<Language>('en'); // Default to English, change to 'fa' for Persian default

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <LandingPage onNavigate={setActivePage} lang={lang} />;
      case 'blog':
        return <BlogPage lang={lang} />;
      case 'courses':
        return <CoursesPage lang={lang} />;
      case 'resources':
        return <ResourcesPage onNavigate={setActivePage} lang={lang} />;
      default:
        return <LandingPage onNavigate={setActivePage} lang={lang} />;
    }
  };

  return (
    <Layout activePage={activePage} onNavigate={setActivePage} lang={lang} setLang={setLang}>
      {renderPage()}
    </Layout>
  );
}

export default App;