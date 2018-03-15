import React from 'react';
import { render } from 'react-dom'
import ButtonAppBar from 'ButtonAppBar.jsx'
import SimpleTabs from 'SimpleTabs.jsx'
import FloatingActionButton from 'FloatingActionButton.jsx';

function Home() {
return (<div>
        <ButtonAppBar/>
        <SimpleTabs/>
        <FloatingActionButton/>
        </div>
        );
}

export default (Home);