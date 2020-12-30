/*
 * @Author: your name
 * @Date: 2020-12-27 20:49:17
 * @LastEditTime: 2020-12-28 08:38:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-zsgc\my-zsgc\src\App.js
 */

import './App.css';
import RouterView from './routes'
import routes from './routes/config'
function App() {
  return (
    <div className="App">
      <RouterView routes={routes}/>
    </div>
  );
}

export default App;
