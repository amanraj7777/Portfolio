from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    profile_info = {
        "name": "Aman Raj",
        "tagline": "AI Engineer & Data Science Student",
        "bio": "I am a second-year BS Data Science and Applications student at IIT Madras with a strong focus on data analytics, backend development, and AI tools."
    }
    
    # New social links dictionary
    socials = {
        "linkedin": "https://www.linkedin.com/in/aman-raj-158126342?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "instagram": "https://www.instagram.com/wu_kong._?stkn=ejg1djBpd21wMW1y",
        "email": "https://mail.google.com/mail/?view=cm&fs=1&to=amanraj51696@gmail.com"
    }
    
    skills = ["Python", "SQL", "Flask", "SQLAlchemy", "HTML/CSS", "Data Analytics"]
    
    projects = [
        {
            "title": "Kisanseva Plus",
            "description": "An agriculture branding and startup project focused on farming solutions.",
            "tech": "Branding, Strategy"
        },
        {
            "title": "Hospital Management System",
            "description": "A full-stack web application for managing hospital records, staff, and patients.",
            "tech": "Flask, SQLAlchemy, HTML, CSS"
        },
        {
            "title": "Student Placement Portal",
            "description": "A web platform designed to streamline the student placement process.",
            "tech": "Flask, SQLAlchemy, HTML, CSS"
        }
    ]

    return render_template('index.html', profile=profile_info, socials=socials, skills=skills, projects=projects)

if __name__ == '__main__':
    app.run(debug=True)

   
