import React from 'react';
import ButtonAppBar from 'ButtonAppBar.jsx'
import ControlledExpansionPanels from 'SimpleTabs.jsx'
import FloatingActionButton from 'FloatingActionButton.jsx';

function Home() {
return (<div>
        <ButtonAppBar logout={true}/>
        <ControlledExpansionPanels/>
        <FloatingActionButton/>
        </div>
        );
}

export default Home;