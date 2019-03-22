import React, {Component} from 'react';
import {Container, Tab, Grid, Header, Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import CardGrid from './components/CardGrid';

const panes = [
    {menuItem: 'Tab 1', render: () => <Tab.Pane attached={false} className="borderless"><CardGrid/></Tab.Pane>},
    {menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>},
    {menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>},
]

class App extends Component {
    render() {
        return (
            <div>
                <header className="App-header">

                </header>
                <Container>
                    <Header as='h2' inverted textAlign='center'>
                        Vertically Divided
                    </Header>
                    <Tab menu={{secondary: true}} panes={panes}/>
                </Container>
            </div>
        );
    }
}

export default App;
