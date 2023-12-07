
import propTypes from 'prop-types';

function Card(props){
    
    return (
        <div className='card'>
            <img src={props.picture} alt="" />
            <h3>{props.title}</h3>
            <p>{props.detail}</p>
        </div>
    )

}

Card.propTypes = {
    picture: propTypes.string,
    title: propTypes.string,
    detail: propTypes.string
}

export default Card;