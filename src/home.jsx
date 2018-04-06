import React from 'react';
import ButtonAppBar from 'ButtonAppBar.jsx'
import NestedLists from 'SimpleTabs.jsx'
import FloatingActionButton from 'FloatingActionButton.jsx';
import { withRouter } from 'react-router'

function Home() {
return (<div>
        <ButtonAppBar logout={true}/>
        <NestedLists/>
        <FloatingActionButton/>
        </div>
        );
}


export default Home;