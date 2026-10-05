import './About.css'

/**
 * A React component that represents one About entry in the list of About Us entries.
 * @param {*} param0 an object holding any props and a few function definitions passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = ({ about }) => {
    return (
        <>
            <div className="about-container">
                <article className="about-article">
                    <div className="about-text">
                        <h2>{about.name}</h2>
                        <p>{about.description}</p>
                    </div>
                    <img src={`${import.meta.env.VITE_SERVER_HOSTNAME}${about.image}`} alt={`Photo of ${about.name}`}/>
                </article>
            </div>
        </>
    )
}

// make this component available to be imported into any other file
export default About