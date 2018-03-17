import React from 'react';
import ButtonAppBar from 'ButtonAppBar.jsx'
import SimpleTabs from 'SimpleTabs.jsx'
import FloatingActionButton from 'FloatingActionButton.jsx';

function Home() {
return (<div>
        <ButtonAppBar logout={true}/>
        <SimpleTabs/>
        <FloatingActionButton/>
        </div>
        );
}

export default Home;