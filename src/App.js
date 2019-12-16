import React from 'react';

import { BurgerBuilder } from './containers';
import { Layout } from './components';


function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
