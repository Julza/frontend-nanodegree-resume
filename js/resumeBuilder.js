var bio = {
  "firstNames": "Julia Ramaila",
  "role" : "FrontEnd developer Intern",
  "contacts":
  {
  "mobile":"072-566-7782",
  "email":"ramailajulia@gmail.com",
  "github":"Julza",
  "twitter":"@juliaramaila",
  "location":"Cape Town, South Africa"
  },
  "message":"This is all about me! Ramaila MJ Resume",
  "skills" :
  [
    "C#","JS","SQL","Html/Css","C++"
  ],
  "picture":"images/fry.jpg"
  }

if(bio.skills.length > 0)
{
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
  $("#skills").append(formattedSkill);

  formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
  $("#skills").append(formattedSkill);

  formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
  $("#skills").append(formattedSkill);

  formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
  $("#skills").append(formattedSkill);

  formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
  $("#skills").append(formattedSkill);
}

  var work = {
    "jobs": [
      {
        "employer": "Skywalk Innovations",
        "title": "FrontEnd Developer Intern",
        "location": "CPUT, Cape Town",
        "dates": "May 2015 - Current",
        "description": "Designing Websites"
      },
      {
        "employer": "Capacity",
        "title": "C# Programming Learnership",
        "location": "Belville, Cape Town",
        "dates": "June 2014 - Feb 2015",
        "description": "Software development and Web development"
      },
      {
        "employer": "Limpopo Legislature",
        "title": "IT Support Technician Intern",
        "location": "Lebowakgomo, Limpopo",
        "dates": "Jul 2012 - Jun 2013",
        "description": "Troubleshooting hardware and software"
      },
      {
        "employer": "Department of Education",
        "title": "IT Support Technician",
        "location": "Lebowakgomo, Limpopo",
        "dates": "Jan 2011 - Jun 2012",
        "description": "Troubleshooting hardware and software"
      }
    ]
  }

  function locationizer(work_obj){
    var locationArray=[];
    for(job in work_obj.jobs){
      var newLocation=work_obj.jobs[job].location;
      locationArray.push(newLocation);
    }
    return locationArray;
  }
  console.log(locationizer(work));

  var projects = {
    "projects": [
      {
        "title": "SAJ Bus Booking System Project",
        "dates": "Feb 2015",
        "description": "SAJ Bus Booking is for customer to book their tickets online and view status of the buses, mostly is all  designed for Hostess to allocate the   passengers in  the bus using mobile app.",
        "images":["images/SAJ.png"]
      },
      {
        "title": "Online Electronics Project",
        "dates": "Sep 2014",
        "description": "Online Electronics sells various laptops online with a reasonable price.",
        "images":["images/image.jpg","images/laptops.jpg","images/laptop.jpg"]
      },
      {"title": "Online Blood Donation Project",
      "dates": "Nov 2014",
      "description": "the main impact of developing this project is for good volunteered people to donates blood to patience whose who are in need of blood donations.",
      "images":["images/donate.jpg","images/images(1).jpg"]
    }
    ]
  }

  var education =
  {
    "schools": [
      {
        "schoolName":"TUT",
        "schoolcity":"Pretoria",
        "degree":"NDIP",
        "majors":[
         "Information Systems","Support Services"
         ],
        "dates":2012,
        "Url":"www.tut.co.za"
      },
      {
        "schoolName":"Ngwanamala Senior Secondary",
        "schoolcity":"Polokwane",
        "degree":" Grade 12 Senior Certificate",
        "majors":
        [
          "Mathematics","Physical Science"
        ],
        "dates":2004,
        "Url":"www.ngwanamalasen.co.za"
      }
       /*"onlineCourses":[
         {
           "title": "Java Script Course",
           "school": "Udacity",
           "dates": "May 2015",
           "url": "http://www.udacity.com"
         ]
       }*/
    ]
  }

//*****************************************************************************
//$("#header").append(HTMLcontactGeneric);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.firstNames);
$("#header").prepend(formattedName);

var formattedBioPic=HTMLbioPic.replace("%data%",bio.picture);
$("#topContacts").append(formattedBioPic);

var formattedMessage=HTMLwelcomeMsg.replace("%data%",bio.message);
$("#topContacts").append(formattedMessage);

var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedTwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedGitHub=HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formattedGitHub);

var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(formattedLocation);

//*****************************************************************************

function DisplayWork(){
for(job in work.jobs){
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
  var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
  var formattedEmployerTitle=formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription= HTMLworkDescription.replace("%data%",work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);

}
}
DisplayWork();

//**************************************************************************

function DisplayProject(){
  for(project in projects.projects)
  {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle= HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription= HTMLprojectDescription.replace("%data%",
        projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

if(projects.projects[project].images.length > 0)
{
  for (image in projects.projects[project].images)
  {
    var formattedImage= HTMLprojectImage.replace("%data%",
        projects.projects[project].images[image]);
    $(".project-entry:last").append(formattedImage);
  };
}
  }
}
DisplayProject();

//*****************************************************************************

function DisplaySchool(){
for(educations in education.schools)
{
$("#education").append(HTMLschoolStart);

 var formattedSchoolName = HTMLschoolName.replace("%data%",
     education.schools[educations].schoolName);
$(".education-entry:last").append(formattedSchoolName);

 var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",
     education.schools[educations].degree);
$(".education-entry:last").append(formattedSchoolDegree);

 var formattedSchoolDates = HTMLschoolDates.replace("%data%",
     education.schools[educations].dates);
$(".education-entry:last").append(formattedSchoolDates);

 var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",
     education.schools[educations].schoolcity);
$(".education-entry:last").append(formattedSchoolLocation);

 var formattedSchoolmajor = HTMLschoolMajor.replace("%data%",
     education.schools[educations].majors);
$(".education-entry:last").append(formattedSchoolmajor);

/*var formattedOnlineTitle= HTMLonlineTitle.replace("%data%",
    education.onlineCourses.title);
    $(".education-entry:last").append(formattedOnlineTitle);*/

}
}
DisplaySchool();

//********************************************************************************

$("#mapDiv").append(googleMap);
