import style from './icon.module.css';

function Icon({size, src}){
    const iconStyle = {
        height: size + 'px',
        width: 'auto'
    };

    return <div className={style.container}>
        <img style={iconStyle} src={src} alt=""/>
    </div>
}

export default Icon;