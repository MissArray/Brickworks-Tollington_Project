import React from 'react';
 
const Resources = () => (
    <div className='wrapper'>
        <h1 data-testid="resources-page">Resources</h1>
        <div id='sidebar'></div>
            <main>
            <p className='strong-txt-L'>Engaging in social action takes time, energy and passion.
            <br/>
            Here are our <span className='bold-txt'>top 10 tips</span> to get you started.</p>

           <ol className='ol-num'>
               <li>
               Identify a problem, challenge or issue in your neighbourhood and be specific about what you want to tackle.
               </li>
               <li>
                Do some research so that you have a good picture of the current situation, then develop and plan how to go about tackling the problem.
                </li>
                <li>
                Get together with others to share your research and explore the problem and potential solutions.
                </li>
                <li>
                Build a wider, more diverse community of collaborators who support your aims.
                </li>
                <li>
                Collaborate with those who might not share your opinions or support your aims so that you can overcome objections and gain different perspectives.           
                </li>
                <li>
                Promote your social action in your community and through the media; create a video and post it on the Brickworks website.
                </li>
                <li>
                Take action!
                </li>
                <li>
                Evaluate, reflect and record the impact of your action on the community.
                </li>
                <li>
                Share the impact of your action in creative and imaginative ways to capture attention.
                </li>
                <li>Don't give up, have patience and be committed.</li>
           </ol>
           
          <p className='strong-txt-M'>Useful links</p>

                <div className='container-M'> 
                <span className='strong-txt-M'>&#8226; Social action explained: &nbsp;
                    <a className='resource-link' href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/591797/A_description_of_social_action.pdf">A description of Social Action</a>
                    </span>
                    <br/>
                <span className='strong-txt-M'>&#8226; How to lead social action: &nbsp;
                    <a className='resource-link' href='https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/591799/Leadership_and_culture_change_to_enable_social_action.pdf'>Leadership and culture change</a>
                   </span>
                <span className='strong-txt-M'>&#8226; How to carry out a social action: &nbsp;
                    <a className='resource-link' href='https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/591805/Enabling_social_action_methodology.pdf'>Methodology</a>
                </span>
                </div>
        
            </main>
    </div>

)

export {Resources};