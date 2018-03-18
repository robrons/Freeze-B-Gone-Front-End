import React from 'react';
import ButtonAppBar from 'ButtonAppBar.jsx'
import SimpleList from 'SimpleTabs.jsx'
import FloatingActionButton from 'FloatingActionButton.jsx';

function Home() {
return (<div>
        <ButtonAppBar logout={true}/>
        <SimpleList/>
        <FloatingActionButton/>
        </div>
        );
}

export default Home;