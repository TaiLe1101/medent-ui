import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouter } from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';
import TitleNavCurrent from './component/TitleNavCurrent/TitleNavCurrent';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouter.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    {route.navCurrent && (
                      <TitleNavCurrent currentRoute={route.path} background={route.backgroundImage}>
                        {route.navCurrent}
                      </TitleNavCurrent>
                    )}
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
