import style from './space.module.css';

function Space({h, w=null}){
    let space;
    switch(w){
        case null:
             space = {
                height: h+'px',
             }
            break;
        default:
            space = {
                height: h+'px',
                width: w + 'px',
            }
            break;
    }

    return <div style={space}>
    </div>
}

export default Space;