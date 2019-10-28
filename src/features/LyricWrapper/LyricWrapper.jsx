import React from 'react';

import './LyricWrapper.scss';

class LyricWrapper extends React.Component {
    shouldComponentUpdate(nextProps) {
        console.log(nextProps);
    }
    
    render(){
        return (
            <section className="songWrapper">
                Song wrapper - recebe uma lista de musicas ou uma unica musica
            </section>
        )        
    }
}

export default LyricWrapper;
