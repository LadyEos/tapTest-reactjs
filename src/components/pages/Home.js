import React from 'react'


const Home = () => {
    return (
        <React.Fragment>
            <div className='div-body'>
                <div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/TestResults">Test Results</a></li>
                        <li><a href="/Subjects">Subjects</a></li>
                        <li><a href="/Programs">Programs</a></li>
                        <li><a href="/Settings">Settings</a></li>                
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;
