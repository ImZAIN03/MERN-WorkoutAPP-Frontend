import { Link } from 'react-router-dom'

const Navbar = () => {

    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout Force</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar