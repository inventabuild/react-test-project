
import propTypes from 'prop-types'

function Header(props){

    return(
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

Header.propTypes = {
    title: propTypes.string
}

export default Header;