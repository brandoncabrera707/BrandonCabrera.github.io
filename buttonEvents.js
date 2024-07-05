function projectsPage(){
  const projPage = document.querySelector('.all-box');
  projPage.innerHTML = 
  `
  <div class=" all-box">
    <div class ="parent-container">
    <div>This is project page</div>
    </div>
  </div>
  `;
  
}

function aboutPage(){
  const renderHome = document.querySelector('.all-box');
  renderHome.innerHTML = 
  `
  <div class=" all-box">
  <div class ="parent-container">
   <div class="welcome-box">
   
   
   <div class="profile-box">
     <div class="opening-text">
       Brandon Cabrera 
     </div>
   
     <img class = "profile_picture"src="./pictures/profile_picture">
   </div>
 </div>
 <div class = "brief">
   Aspiring Software Engineer, Mt. San Antonio College - Software Engineering transfer 2023-2025, Target Schools: UC Irvine and UC San Diego - B.S Computer Science
 </div>
   <div class="all_text">
 
 <div>
 
 <div class="welcome_text" >

 
 <a class="linkedn_profile " target="_blank" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
 > 
 <img class=" linkedin-image " src="./pictures/linkedinicon.png">
 </a>

 <a class = "gmail-icon" target="_blank" href="mailto: brandoncabrera707@gmail.com">
   <img class = "gmail-pic" src="./pictures/emailicon.png">
 </a>
 <a class = "github-pic" target="_blank" href="https://github.com/brandoncabrera707">
   <img class="github-icon" src="./pictures/githubicon.jpg">
 </a>
 <div class="resume">
   <a class=" resume-link" target="_blank" >
     Take a look at my Resume!>>
   </a>
 </div>
 <div class = "about-me-box">
   About Me
 </div>

 <div class = "about-me-text">
   Hello my name is Brandon Cabrera I am currently a frehsman at Mt. San Antonio Community College 
   taking software engineering and computer science related courses with plans to transfer into one
   of my target schools with hopes of pursuing a B.S in Computer Science
 </div>
   </div>

   <div class=" projects_header">
     Projects
    
   </div>
   <div class="project_text">
     Current Projects: Personal Website
     </div>
   </div>
 </div>
   </div>
   </div>
 </div>
 </body>
`;
}
function experincePage(){
  const expPage = document.querySelector('.all-box');
  expPage.innerHTML = 
  `
  <div class=" all-box">
    <div class ="parent-container">
    <div>This is experince page</div>
    </div>
  </div>
  `;

}
