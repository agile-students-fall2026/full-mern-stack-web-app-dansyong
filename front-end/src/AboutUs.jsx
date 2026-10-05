import { useState, useEffect } from 'react'
import axios from 'axios'
import loadingIcon from './loading.gif'
import About from './About'
import './AboutUs.css'

// For exercise: modeled after Message pages, fetches personal about information that was imported by aboutImport.js

/**
 * A React component that represents the About Us page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent.
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
    const [about, setAbout] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState('')

    const fetchAboutUs = () => {
        axios
            .get(`${import.meta.env.VITE_SERVER_HOSTNAME}/aboutus`)
            .then(response => {
                // axios bundles up all response data in response.data property
                const aboutUs = response.data.aboutUs
                setAbout(aboutUs)
            })
            .catch(err => {
                const errMsg = JSON.stringify(err, null, 2) // convert error object to a string so we can simply dump it to the screen
                setError(errMsg)
            })
            .finally(() => {
                setLoaded(true)
            })
    }

    // set up loading data from server when the component first loads
    useEffect(() => {
        // fetch about us once
        fetchAboutUs()
    }, []) // putting a blank array as second argument will cause this function to run only once when component first loads

    return (
        <>
            <h1>About Us</h1>

            {error && <p className="about-error">{error}</p>}
            {!loaded && <img src={loadingIcon} alt="loading"/>}

            {about.map(about => (
                <About key={about.id} about={about} />
            ))}
        </>
    )
}

// make this component available to be imported into any other file
export default AboutUs