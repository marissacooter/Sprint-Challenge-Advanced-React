import react from 'react';

const Navbar = ({darkMode, setDarkMode}) => {
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className="navbar">
            <h1 style={{textDecoration: 'underline', color: '#FF69B4', display: 'flex', justifyContent: 'center'}}>Player List</h1>
            <div className='dark-mode_toggle'>

                <button 
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                    style={{backgroundColor:'#FF69B4', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                    > Dark Mode 
                </button>


            </div>
        </nav>
    );
};

export default Navbar;