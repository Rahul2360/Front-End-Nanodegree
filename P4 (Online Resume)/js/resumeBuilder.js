var bio = {
    "name": "Rahul Bansal",
    "role": "Front end Developer",
    "contacts": {
        "mobile": "9915721070",
        "email": "rahulbansal2360@gmail.com",
        "github": "Rahul2360",
        "location": "India"
    },
    "skills": ["Hacker", "Programmer", "Developer", "Data Scientist"],
    "biopic": "images/fry.jpg",
    "welcomeMessage": "Hello Udacity. I am Rahul"
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName + formattedRole);
    var message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    //$("#header").append(mobile);
    var email = HTMLemail.replace("%data%", bio.contacts.email);
    //$("#header").append(email);
    var git = HTMLgithub.replace("%data%", bio.contacts.github);
    //$("#header").append(git);
    var loc = HTMLlocation.replace("%data%", bio.contacts.location);
    var rahul = mobile + email + git + loc;
    $("#topContacts").prepend(rahul);
    $("#footerContacts").append(rahul);
    $("#header").append(message);
    var pic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(pic);
    if (bio.skills.length > 0) {
        var ski;
        $("#header").append(HTMLskillsStart);
        for (ski = 0; ski < bio.skills.length; ski++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[ski]);
            $("#skills").append(formattedSkill);
        }
    }
};
bio.display();
//bio.city="Mountain view";
//bio["city"]="mountain view";
//$("#main").append(bio.city);

var education = {
    "schools": [{
        "name": "Chitkara University",
        "degree": "B-Tech",
        "dates": "1-jan-2000",
        "location": "Patiala",
        "majors": ["CS", "ME"],
        "url": "http://www.chitkara.edu.in/"
    }, {
        "name": "Punjab Engineering College",
        "degree": "B-Tech",
        "dates": "1-april-1996",
        "location": "Chandigarh",
        "majors": ["CS", "ME"],
        "url": "http://pec.ac.in/"
    }],
    "onlineCourses": [{
        "title": "Front end developing",
        "school": "Udacity",
        "dates": "11-sep-2016",
        "url": "https://in.udacity.com/"
    }]
};
education.display = function() {
    var edu;
    for (edu = 0; edu < education.schools.length; edu++) {
        $("#education").append(HTMLschoolStart);
        var HTMLschoolName = '<a href="http://www.chitkara.edu.in/">%data%';
        var schoolname = HTMLschoolName.replace("%data%", education.schools[edu].name);
        var schooldegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        $(".education-entry:last").append(schoolname + schooldegree);
        var schooldates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        $(".education-entry:last").append(schooldates);
        var schoollocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        $(".education-entry:last").append(schoollocation);
        var schoolmajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
        $(".education-entry:last").append(schoolmajor);
    }
    var cou;
    for (cou = 0; cou < education.onlineCourses.length; cou++) {
        $(".education-entry:last").append(HTMLonlineClasses);
        var title1 = HTMLonlineTitle.replace("%data%", education.onlineCourses[cou].title);
        var school1 = HTMLonlineSchool.replace("%data%", education.onlineCourses[cou].school);
        $(".education-entry:last").append(title1 + school1);
        var date1 = HTMLonlineDates.replace("%data%", education.onlineCourses[cou].dates);
        $(".education-entry:last").append(date1);
        var url = HTMLonlineURL.replace("%data%", education.onlineCourses[cou].url);
        $(".education-entry:last").append(url);
    }
};
education.display();


var work = {
    "jobs": [{
        "employer": "Google",
        "title": "Web Developer",
        "dates": "21-sep-2010",
        "location": "New York",
        "description": "The role is responsible for designing, coding and modifying websites, from layout to function and according to a client's specifications. Strive to create visually appealing sites that feature user-friendly design and clear navigation."
    }, {
        "employer": "Microsoft",
        "title": "Web Developer",
        "dates": "01-sep-2014",
        "location": "New York",
        "description": "This web developer job description sample template is optimized for advertising for a website developer on online job boards or careers pages. It is easy to customize with key duties and responsibilities. Feel free to modify this posting to a web designer job description, or for your specific needs."
    }]
};
work.display = function() {
    var job;
    for (job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var date = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(date);
        var worklocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(worklocation);
        var description = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(description);
    }
};
work.display();

var projects = {
    "projects": [{
        "title": "Remote Control Car",
        "dates": "10-April-2016",
        "description": "Radio controlled (or R/C) cars are battery/gas-powered model cars or trucks that can be controlled from a distance using a specialized transmitter or remote. The term RC has been used to mean both remote controlled and radio controlled, where remote controlled includes vehicles that are connected to their controller by a wire, but common use of RC today usually refers to vehicles controlled by a radio-frequency link.",
        "images": ["images/project.jpg", "images/circuit.png"]
    }]
};
projects.display = function() {
    var pro;
    for (pro = 0; pro < projects.projects.length; pro++) {
        $("#projects").append(HTMLprojectStart);
        var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[pro].title);
        $(".project-entry:last").append(projectTitle);
        var projectDates = HTMLprojectDates.replace("%data%", projects.projects[pro].dates);
        $(".project-entry:last").append(projectDates);
        var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[pro].description);
        $(".project-entry:last").append(projectDescription);
        var images;
        if (projects.projects[pro].images.length > 0) {
            for (images = 0; images < projects.projects[pro].images.length; images++) {
                var projectImage = HTMLprojectImage.replace("%data%", projects.projects[pro].images[images]);
                $(".project-entry:last").append(projectImage);
            }
        }
    }
};
projects.display();


$("#mapDiv").append(googleMap);
