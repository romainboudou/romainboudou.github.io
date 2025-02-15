const projects = [
    {
        id: "nine-winds",
        title: "The Nine Winds",
        date: "2024",
        description: "The Nine Winds is the debut of an atmospheric Metroidvania game steeped in ancient Aztec mythology, developed in just one week.",
        detailedDescription: "<p><strong>The Nine Winds</strong> is my response to a 3rd year project on Unity. This is the first game that I developed alone. It's the beginning of Metroidvania in which we play an avatar of an Aztec God who must find 9 spheres in order to restore balance. The game is intended to be labyrinthine where we must retrace our steps to advance in the game. A sphere gives us a skill which will therefore allow us to move forward. Some voice lines are available for a bit of LoRe of the game.</p> <p><h4>Skills worked:</h4> <ul><li>Game design of a complete game</li><li>Level design of a map for MetroidVania</li> <li>Added animations</li> <li>Creation of user interfaces</li> <li>Use of voice lines and music to give an atmosphere to the game</li> <li>Unique designs made by me</li></ul></p>",
        teamSize: 1,
        time: "1 week",
        tools: "Unity",
        category: "game-programming",
        image: "../img/the-nine-winds-thumbnail.png",
        photos: [
            "../img/the-nine-winds-1.png",
            "../img/the-nine-winds-2.png",
            "../img/the-nine-winds-3.png",
            "../img/the-nine-winds-4.png",
            "../img/the-nine-winds-5.png"
        ],
        link: "./project.html?id=nine-winds",
    },
    {
        id: "age-of-guild",
        title: "Age of Guild",
        date: "2024",
        description: "Age of War is an \"Age of War\" type game revisited with new graphics, audio and characters, developed in groups of 4 in 3 months.",
        detailedDescription: "<p><strong>Age of Guild</strong> is my response to a 3-month end-of-year project on Unity. In a group of 4 we had to develop an \"Age of War\" game with freedom on the assets used. The goal of the game is to destroy the enemy base by sending different types of troops, placing turrets, improving the statistics of our troops/turrets and activating skills. There are 7 Ages that we can cross which will have the effect of improving our troops that we send. The game is available in 4 languages, English, French, Spanish and German. Options are also available to change the volume of sound effects and music. </p> <p><h4>Skills worked:</h4> <ul><li>Reproduction of an existing game with new features</li><li>Creation of user interfaces</li> <li>Added animations</li> <li>Use of languages, sound and musi</li> <li>Unique designs outside of the Background</li><li>Teamwork</li><li>Unique designs made by me</li></ul></p>",
        teamSize: 4,
        time: "3 months",
        tools: "Unity",
        category: "game-programming",
        image: "../img/age-of-guild-thumbnail.png",
        photos: [
            "../img/age-of-guild-1.jpg",
            "../img/age-of-guild-2.jpg",
            "../img/age-of-guild-3.jpg",
            "../img/age-of-guild-4.jpg",
            "../img/age-of-guild-5.jpg"
        ],
        link: "./project.html?id=age-of-guild",
    },
    {
        id: "quoridor",
        title: "Quoridor",
        date: "2023",
        description: "Quoridor is a game based on the board game of the same name in PC version with additional features, developed in groups of 4 in 3 months.",
        detailedDescription: "<p><strong>Quoridor</strong> is my response to a 3-month end-of-year project in Python using a graphics library (PyGame). In groups of 4 we had to redo the Quoridor board game on PC by adding a local mode and sound and theme settings. The game is played by 2, 4 or alone against AI on 4 different board sizes. The goal is to reach the opposite line first. We can place barriers to block and slow down the opponent.</p> <p><h4>Skills worked:</h4> <ul><li>Production of a game in PC version</li><li>Use of a pathfinding AI</li> <li>Play local multiplayer</li> <li>Use of a graphics library</li> <li>Creation of themes</li><li>Teamwork</li></ul></p>",
        teamSize: 4,
        time: "3 months",
        tools: "Python / PyGame",
        category: "game-programming",
        image: "../img/quoridor-thumbnail.png",
        photos: [
            "../img/quoridor-thumbnail.png",
            "../img/quoridor-1.png",
            "../img/quoridor-2.png",
            "../img/quoridor-3.png",
            "../img/quoridor-4.png"
        ],
        link: "./project.html?id=quoridor",
    },
    {
        id: "foraine",
        title: "Dynamic Attraction Carnival",
        date: "2025",
        description: "Small funfair game with several attractions (Chamboule Tout and Bumper Car) and NPCs who wander around or steal your money, developed in 1 week.",
        detailedDescription: "<p>Following a Blueprint course on Unreal Engine 5, I had to create a party game where we can make an Upset and Bumper Cars. In the funfair we had to find NPCs who greet us as we pass and another who steals our money as soon as he sees us.</p><p>Here are some details about each attraction and feature...</p><h4>Chamboule-Tout</h4><ul><li>UI with viewfinder, shot power gauge.</li><li>After 3 shots the cans return to their place.</li><li>Change camera to first person.</li><li>Checking the number of cans dropped, if you are more than halfway through you win 1 coin and if you spill everything you win 2 coins.</li></ul><h4>Bumper Car</h4><ul><li>Change of camera, player to vehicle.</li><li>Vehicle physics to lightly bounce against others.</li><li>The goal is to take out all the vehicles to win the game before the end of the timer.</li><li>Random color of the bumper cars each game.</li><li>Changed player controls.</li></ul><h4>NPCs</h4><ul><li>AI that moves to a NavMesh and Target Points on the ground.</li><li>3 types of TargetPoints (\"Normal\", \"Creation\", \"Destruction\").</li><li>Creation of an animation to greet the player as soon as he is nearby.</li><li>AI that follows the player to steal 1 coin and leaves for a certain time before returning to chase the player.</li></ul><h4>Pause Menu</h4><ul><li>Menu that pauses the game.</li><li>Buttons to resume the game, to restart the game and to quit the game.</li></ul>",
        teamSize: 1,
        time: "1 week",
        tools: "Unreal Engine 5 / Blueprint",
        category: "game-programming",
        image: "../img/foraine-thumbnail.png",
        photos: [
            "../img/foraine-thumbnail.png",
            "../img/foraine-1.png",
            "../img/foraine-2.png",
            "../img/foraine-3.png",
            "../img/foraine-4.png"
        ],
        link: "./project.html?id=foraine",
    },
    {
        id: "cuisine",
        title: "Little cooking game",
        date: "2024",
        description: "UI cooking game with cooking system, inventory and item placement systems with different UI style World Space and Screen Space, developed in 1 week.",
        detailedDescription: "<p>As part of a course on UI in Unity, I had to create a cooking game system with adapted user interfaces. The game contains a system with buttons to choose in which hand we want to put the object. A recipe book where you can browse the different pages and add more. A fridge which serves as an inventory for ingredients where you can choose to collect an object or put it in, a magic fridge allows you to generate a random inventory</p>",
        teamSize: 1,
        time: "1 week",
        tools: "Unity",
        category: "game-programming",
        image: "../img/cuisine-thumbnail.png",
        photos: [
            "../img/cuisine-thumbnail.png",
            "../img/cuisine-1.png",
            "../img/cuisine-2.png",
            "../img/cuisine-3.png"
        ],
        link: "./project.html?id=cuisine",
    },
    {
        id: "prototype-plateformer",
        title: "3D Platform Prototype",
        date: "2022",
        description: "3D platformer prototype with the movements of a character in addition to a jump and a hovering ability made in 1 weekend by discovering Unreal Engine 4.",
        detailedDescription: "<p>In my desire to learn the Unreal Engine and the Blueprint, I set out to make a small prototype of a 3D platformer where I would code the character's movements and where I would create a scene. The character can move, jump and hover in a 3D map. Everything is done in Blueprint on Unreal Engine 4 in one weekend, the time to get started and understand the software.</p>",
        teamSize: 1,
        time: "1 week-end",
        tools: "Unreal Engine 4 / Blueprint",
        category: "game-programming",
        image: "../img/prototype-plateformer-thumbnail.png",
        photos: [
            "../img/prototype-plateformer-thumbnail.png",
            "../img/prototype-plateformer-1.png",
            "../img/prototype-plateformer-2.png"
        ],
        link: "./project.html?id=prototype-plateformer",
    },
    {
        id: "cardinal-chains",
        title: "Cardinal Chains",
        date: "2022",
        description: "Cardinal Chains is a puzzle game on the concept of increasing sequences, you have to connect the numbers together in an ascending order so that everything is colorful, done in 1 week.",
        detailedDescription: "<p>Cardinal Chains is a minimalist puzzle game centered around the concept of increasing sequences. Each puzzle is a grid of numbers with an X. Starting from the numbers and the X which is the starting point, you must connect the The game is accompanied by a visual with the RayLib library, all in C. </p>",
        teamSize: 2,
        time: "1 week",
        tools: "C / Raylib",
        category: "game-programming",
        image: "../img/cardinal-chains-thumbnail.png",
        photos: [
            "../img/cardinal-chains-thumbnail.png",
            "../img/cardinal-chains-1.png",
            "../img/cardinal-chains-2.png"
        ],
        link: "./project.html?id=cardinal-chains",
    },
    {
        id: "laying-grass",
        title: "Laying Grass",
        date: "2023",
        description: "Laying Grass is a board game inspired by a series. We can place tiles around our base to form the largest square. The game was made in C++ in 1 week.",
        detailedDescription: "<p>Laying Grass is a game from the Devil's plan series. The game can be played by 2 to 8 players. The goal is to make the largest square surface using tiles that are placed each turn. We start, we put a base on the board. Then, we have the choice of tiles from a waiting list, we can choose to rotate it, to reverse it before placing it. You can also choose to use powers to exchange tiles, or take a tile from the first 5 on the list. After a few rounds, the game ends and the player who made the largest square wins. </p>",
        teamSize: 2,
        time: "1 week",
        tools: "C++",
        category: "game-programming",
        image: "../img/laying-grass-thumbnail.png",
        photos: [
            "../img/laying-grass-thumbnail.png",
        ],
        link: "./project.html?id=laying-grass",
    },
    {
        id: "chess",
        title: "Chess games + AI",
        date: "2024",
        description: "Classic chess game on PC with an AI which calculates each of the possibilities which ensures victory in each round, done in 1 week by 2.",
        detailedDescription: "<p>A classic chess game on PC, the rules remain the same as the traditional game with all the specificities. In addition, an AI is present to defeat the enemy. She will calculate the best move each time based on how the player plays and based on the rules she knows. The game is made in C++ with the SFML library. </p>",
        teamSize: 2,
        time: "1 week",
        tools: "C++ / SFML",
        category: "game-programming",
        image: "../img/chess-thumbnail.png",
        photos: [
            "../img/chess-thumbnail.png",
        ],
        link: "./project.html?id=chess",
    },
    {
        id: "dessin-creations",
        title: "Dess'in Créations",
        date: "2024",
        description: "Website of the micro-enterprise Dess'In Création, a graphic site for a window painting company created in 2 months during an end-of-year internship.",
        detailedDescription: "<p>During a 2-month internship, I had to create the website of the micro-enterprise Dess'In Créations. I had to respect a very precise charter on many particularities, the colors, the images, the appearance of the site, the shapes. The model made on Figma was able to easily develop the company's wishes for the site. The code was made in React Typescript in order to facilitate functionalities such as changing pages and then for functionalities such as sending emails done with EmailJS and the use of Next.js to allow search engines to access the content complete as soon as the page loads. The display of the company's creations is stored using JSON on the site. </p>",
        teamSize: 1,
        time: "2 months",
        tools: "React / TypeScript",
        category: "web-programming",
        image: "../img/dessin-creations-thumbnail.png",
        photos: [
            "../img/dessin-creations-thumbnail.png",
            "../img/dessin-creations-1.png",
            "../img/dessin-creations-2.png"
        ],
        link: "./project.html?id=dessin-creations",
    },
    {
        id: "cherrybee-design",
        title: "CherryBee Design",
        date: "2023",
        description: "Website of the micro-enterprise CherryBee Design, a graphic and representative site of the company. Done in 1 month during an end-of-year internship.",
        detailedDescription: "<p>During a 1-month internship, I had to design the website for the micro-enterprise CherryBee Design. I had to respect a specific charter based on colors, style and models. I started by making the models on Figma, then the code was done in HTML/CSS with some animations and functionalities in JavaScript. It needed 4 pages, a home page, an “about” page, a page for creations and a page to place orders. The most interesting page is the order page, because I used PHPMailer to create an email sending system to place an order. I also had to manage the security of the site to avoid any abuse by email.</p>",
        teamSize: 1,
        time: "1 month",
        tools: "HTML-CSS / JavaScript",
        category: "web-programming",
        image: "../img/cherrybee-design-thumbnail.png",
        photos: [
            "../img/cherrybee-design-thumbnail.png",
            "../img/cherrybee-design-1.png",
            "../img/cherrybee-design-2.png",
            "../img/cherrybee-design-3.png"
        ],
        link: "./project.html?id=cherrybee-design",
    },
];
