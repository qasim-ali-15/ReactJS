import React from 'react'

const About = () => {
    return (
        <div className='About'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <h3>About Us</h3>
                        <h1>Welcome To Academia</h1>
                        <p>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include storytelling, discussion, teaching, training, and directed research. Education frequently takes place under the guidance of educators, but learners may also educate themselves. Education can take place in formal or informal settings and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational.
                            <br />Education is commonly divided into stages such as preschool, primary school, secondary school, and then college, university, or apprenticeship. A right to education has been recognized by some governments and the United Nations. In most regions, education is compulsory up to a certain age. There is a movement for education reform, and in particular for evidence-based education.
                        </p>
                        <div className='about__btn'>
                            <a href='' className='btn btn-smart'>READ MORE</a>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='about__image'>
                        <img src='/img/about.jpg' alt='edu' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;