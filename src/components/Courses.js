import React from 'react'

const Courses = () => {
    return <div className='courses'>
        <div className='containner'>
            <div className='courses__text'>
                <div className='courses__heading'>
                    <h1>COURSES</h1>
                    <h2>Popular Courses</h2>
                </div>
            </div>
        </div>
        <div className='courses__row'>
            <div className='col-3'>
                <div className='courses__img'>
                    <img src='/img/html.jpg' alt='html' />
                    <h2>A guide to HTML</h2>
                    <h4>Adobe Guide, Layes etc..</h4>
                    <div className='courses__btn'>
                    <a href='' className='btn btn-smart'>ENROLL IN THE COURSE!!</a>
                    </div>
                </div>
            </div>
            <div className='col-3'>
                <div className='courses__img'>
                    <img src='/img/design.jpg' alt='design' />
                    <h2>A guide to design</h2>
                    <h4>Adobe Guide, Layes etc...</h4>
                    <div className='courses__btn'>
                    <a href='' className='btn btn-smart'>ENROLL IN THE COURSE!!</a>
                    </div>
                </div>
            </div>
            <div className='col-3'>
                <div className='courses__img'>
                    <img src='/img/spoken.jpg' alt='spoken' />
                    <h2>Spoken English</h2>
                    <h4>Spkoen, Written etc...</h4>
                    <div className='courses__btn'>
                    <a href='' className='btn btn-smart'>ENROLL IN THE COURSE!!</a>
                    </div>
                </div>
            </div>
        </div>

    </div>

}

export default Courses