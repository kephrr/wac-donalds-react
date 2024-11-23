import style from './space.module.css';

function Space({w, h}){
    const space = {
        width: w + 'px',
        height: h+'px',
    };

    return <div style={space}>
    </div>
}

export default Space;