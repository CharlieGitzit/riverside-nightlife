# riverside-nightlife
🌙 Riverside After Dark

An immersive nightlife discovery experience for Riverside, California

A mobile-first, interactive nightlife recommendation web app that guides users through a
conversational chat interface to find "The Fun" -- clubs, bars, lounges, or alternative nighttime
activities — all with a cinematic, modern UI.

Built with pure HTML, CSS, and JavaScript. No frameworks. No installs. Just open and run.

✨ Features
🎭 Immersive Landing Experience

Full-screen hero section with Riverside background

Animated fade-in header

Nightlife SVG icon branding

Smooth transition into interactive chat system

💬 Smart Chat Recommendation System

Guides users step-by-step through preferences:

Riverside area

Type of venue (club / bar / lounge)

Music preference

Maximum drink budget

Food preference

The system:

Collects user input into a preferences object

Scores and ranks venues

Displays the top 3 matches

Explains why alternatives may be more suitable for customers

Shows fallback activities if no venues match

🧠 Intelligent Matching Logic

Venues are scored by:

Category match

Music match

Budget compatibility

Food availability

If no strong matches are found, the site  suggests safe, free alternative activities based on time-of-day context.

🎨 Modern UI Design

Mobile-first layout

Responsive on desktop

Dark immersive overlay styling

Animated header fade-in

Chat message styling (bot vs user)

Venue & activity cards with:

Background images

Semi-transparent readability overlay

Icons for type

Google Maps direction links

```
🗂 Project Structure
riverside-nightlife/
│
├── index.html      → Landing page + chat UI
├── styles.css      → All styling & animations
├── script.js       → Chat logic, scoring, rendering
├── data.js         → Venue, activity, and question data
│
└── assets/
    ├── images/
    │   ├── riverside_bg.jpg
    │   ├── club1.jpg
    │   ├── bar1.jpg
    │   ├── lounge1.jpg
    │   ├── food_night.jpg
    │   └── downtown_walk.jpg
    │
    └── icons/
        ├── nightlife.svg
        ├── club.svg
        ├── bar.svg
        ├── lounge.svg
        ├── food.svg
        └── activity.svg
```

Minimal, clean, and easy to manage.

🚀 Running the Project

No dependencies required.

Option 1 — Local
git clone <repo-url>
cd riverside-nightlife
open index.html

Option 2 — GitHub Pages

Push project to GitHub

Go to Settings → Pages

Select branch: main → root

Save

Your site will be live.

⚙️ How It Works
File	Purpose
index.html	Layout, hero, chat interface
styles.css	Visual design, responsiveness, overlays, animations
data.js	Structured venue & activity data
script.js	Chat flow, user input, scoring algorithm, card rendering
🧩 Customization

To add more venues, update:

// data.js
const venues = [ { ... } ];


Fields include:

name

category

music

drinkRange

cover

food

availability

address

icon

background image

dress code

🎯 Project Goals

Provide a unique alternative to traditional nightlife search

Combine UI design + logic + user interaction

Be deployable using only:

Browser: (ios/android/smart-phone equivalent)

🛠 Built With

HTML5

CSS3

Vanilla JavaScript

🌌 Future Enhancements
To be determined...

📜 License

For educational and portfolio use.
All venues and activities reference publicly available locations.

Riverside After Dark — where code meets nightlife.
