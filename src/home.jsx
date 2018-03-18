import React from 'react';
import ButtonAppBar from 'ButtonAppBar.jsx'
import NestedList from 'SimpleTabs.jsx'
import FloatingActionButton from 'FloatingActionButton.jsx';

function Home() {
return (<div>
        <ButtonAppBar logout={true}/>
        <NestedList/>
        <FloatingActionButton/>
        </div>
        );
}

export default Home;