# MiddleGround
Basic utility module for center an element in the middle of a text string. Used for loading icons, or countdowns that appear inline or in place after a user event.

### Installation
`npm install --save middleground`

### Usage
<img src="loader_icon_middleground.gif" />

```javascript

import { setMiddle } from 'middleground';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoader: false
        }
    }

    setLoader = (e) => {
        e.preventDefault();
        this.setState(({ showLoader }) => ({ showLoader: !showLoader }));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">React Application</h1>
                </header>
                <div className="content">
                <p className="App-intro">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="App-intro">
                    If any information is incorrect, please feel free to <a style={{textDecoration: 'none'}} onClick={this.setLoader} href="#">{setMiddle('edit your profile', this.state.showLoader && <img height="16px" src="https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif" />)}</a>. 
                </p>
            </div>
        </div>
    }
}

export default App
```