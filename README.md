# REMI - Dreaming Big with AI-Generated Ambient Music

## Inspiration
At Hack the North 11, dreaming big is a key theme. I wanted to play off of this theme, in combination with my growing interest in AI, to create a chill platform to help people realize and achieve their best _literal_ dreams!

I enjoy listening to ambient music to wind down before I go to sleep, and I'm sure I'm not the only one who does, so I wanted to create something where people could, with the help of AI, make their own custom ambient tracks to listen to before or as they're falling asleep, overall enriching their pre-sleep routine and (hopefully) having better dreams.

## What it does
The user, when making a custom track, enters up to three keywords (or "ambiances") that are then provided to the AI music generating platform soundraw.io to create ambient music that closely aligns with their desired sound. There are also pre-made "templates" of ambient tracks that a user can easily click play and listen to at their leisure.

## Installation and Setup
To run this project on your computer, follow these steps:

### Prerequisites
- **Node.js** (v14 or higher)
- **Vue CLI** (v4 or higher)

### Installation Steps
1. **Clone the Repo:**
   ```bash
   git clone https://github.com/JDBeach1503/remi.git
   cd remi
2. **Install Dependencies Using npm:**
    ```bash
    npm install
3. **Run the Dev Server:**
    ```bash
    npm run serve
4. **Access the Application:** Open the browser and go to http://localhost:8080 (or click link from terminal) to see REMI in action!

## How we built it
AI ambient tracks were generated using [soundraw.io](https://soundraw.io/). The web app interface was built using the Vue.js framework, with additional JavaScript, HTML, and CSS code as needed.

## Challenges we ran into
In all honesty, this project was mostly to push my own limits and expand my knowledge in front-end development. I had very little experience in that area of development coming into HTN 11, so I faced a number of challenges in building an interface from scratch, such as playing around with HTML and CSS for the first time and properly creating transitions between different pages based on which icons I clicked.

## Accomplishments that we're proud of
I have never done a solo hack before, nor have I ever built a web app interface myself, so these were some major personal milestones that I am very proud of and I did a lot of learning when it came to front end development!

## What we learned
How to create a web app interface from scratch, more about AI text-to-sound.

## What's next for REMI
Future improvements could include (but are not limited to):
- Refining the appearance of the interface (i.e. making it cleaner and prettier)
- Providing actual functionality to the next song/previous song buttons
- Matching the track slider element to the actual progress of the track
- Ability to go back in and edit a custom track after generating it
- Ability to delete custom tracks
- The capability to search and add other pre-made templates
- Allowing user more freedom to customize track icons (ex: choose images for icons, rather than just colours)
