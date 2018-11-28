import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';
import './App.css';
import Main from './components/MainComponent';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter} from 'react-router-dom';
const store = ConfigureStore();

class App extends Component {


  render() {
    return (
      <div >
		  <Provider store={store}>
			<BrowserRouter>
			  <MuiThemeProvider muiTheme={getMuiTheme()}>
				<Main/>
			  </MuiThemeProvider>
			</BrowserRouter>
		  </Provider>
       </div>
    );
  }
}


export default App;
