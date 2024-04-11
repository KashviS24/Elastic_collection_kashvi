function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

const tasks = [
    {
      "title": "Red",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait1.jpg",
      "scenery": "sceneries/scenery1.jpg"
    },
    {
      "title": "Blue",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait2.jpg",
      "scenery": "sceneries/scenery2.jpg"
    },
    {
      "title": "Green",
      "type": ["all","India", "India"],
      "portrait": "portraits/portrait3.jpg",
      "scenery": "sceneries/scenery3.jpg"
    },
    {
      "title": "Yellow",
      "type": ["all","Europe", "USA"],
      "portrait": "portraits/portrait4.jpg",
      "scenery": "sceneries/scenery4.jpg"
    },
    {
      "title": "Orange",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait5.jpg",
      "scenery": "sceneries/scenery5.jpg"
    },
    {
      "title": "Purple",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait6.jpg",
      "scenery": "sceneries/scenery6.jpg"
    },
    {
      "title": "Pink",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait7.jpg",
      "scenery": "sceneries/scenery7.jpg"
    },
    {
      "title": "Turquoise",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait8.jpg",
      "scenery": "sceneries/scenery8.jpg"
    },
    {
      "title": "Cyan",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait9.jpg",
      "scenery": "sceneries/scenery9.jpg"
    },
    {
      "title": "Magenta",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait10.jpg",
      "scenery": "sceneries/scenery10.jpg"
    },
    {
      "title": "Lavender",
      "type": ["all","India", "India"],
      "portrait": "portraits/portrait11.jpg",
      "scenery": "sceneries/scenery11.jpg"
    },
    {
      "title": "Indigo",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait12.jpg",
      "scenery": "sceneries/scenery12.jpg"
    },
    {
      "title": "Violet",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait13.jpg",
      "scenery": "sceneries/scenery13.jpg"
    },
    {
      "title": "Maroon",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait14.jpg",
      "scenery": "sceneries/scenery14.jpg"
    },
    {
      "title": "Teal",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait15.jpg",
      "scenery": "sceneries/scenery15.jpg"
    },
    {
      "title": "Coral",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait16.jpg",
      "scenery": "sceneries/scenery16.jpg"
    },
    {
      "title": "Olive",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait17.jpg",
      "scenery": "sceneries/scenery17.jpg"
    },
    {
      "title": "Peach",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait18.jpg",
      "scenery": "sceneries/scenery18.jpg"
    },
    {
      "title": "Gold",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait19.jpg",
      "scenery": "sceneries/scenery19.jpg"
    },
    {
      "title": "Silver",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait20.jpg",
      "scenery": "sceneries/scenery20.jpg"
    },
    {
      "title": "Charcoal",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait21.jpg",
      "scenery": "sceneries/scenery21.jpg"
    },
    {
      "title": "Beige",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait22.jpg",
      "scenery": "sceneries/scenery22.jpg"
    },
    {
      "title": "Brown",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait23.jpg",
      "scenery": "sceneries/scenery23.jpg"
    },
    {
      "title": "Tan",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait24.jpg",
      "scenery": "sceneries/scenery24.jpg"
    },
    {
      "title": "Cream",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait25.jpg",
      "scenery": "sceneries/scenery25.jpg"
    },
    {
      "title": "Ivory",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait26.jpg",
      "scenery": "sceneries/scenery26.jpg"
    },
    {
      "title": "Slate",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait27.jpg",
      "scenery": "sceneries/scenery27.jpg"
    },
    {
      "title": "Periwinkle",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait28.jpg",
      "scenery": "sceneries/scenery28.jpg"
    },
    {
      "title": "Crimson",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait29.jpg",
      "scenery": "sceneries/scenery29.jpg"
    },
    {
      "title": "Ruby",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait30.jpg",
      "scenery": "sceneries/scenery30.jpg"
    },
    {
      "title": "Emerald",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait31.jpg",
      "scenery": "sceneries/scenery31.jpg"
    },
    {
      "title": "Sapphire",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait32.jpg",
      "scenery": "sceneries/scenery32.jpg"
    },
    {
      "title": "Azure",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait33.jpg",
      "scenery": "sceneries/scenery33.jpg"
    },
    {
      "title": "Lemon",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait34.jpg",
      "scenery": "sceneries/scenery34.jpg"
    },
    {
      "title": "Mint",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait35.jpg",
      "scenery": "sceneries/scenery35.jpg"
    },
    {
      "title": "Lilac",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait36.jpg",
      "scenery": "sceneries/scenery36.jpg"
    },
    {
      "title": "Tangerine",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait37.jpg",
      "scenery": "sceneries/scenery37.jpg"
    },
    {
      "title": "Fuchsia",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait38.jpg",
      "scenery": "sceneries/scenery38.jpg"
    },
    {
      "title": "Burgundy",
      "type": ["all","USA", "Europe"],
      "portrait": "portraits/portrait39.jpg",
      "scenery": "sceneries/scenery39.jpg"
    },
    {
      "title": "Aquamarine",
      "type": ["all","USA", "Europe"],
      "portrait": "portraits/portrait40.jpg",
      "scenery": "sceneries/scenery40.jpg"
    },
    {
      "title": "Mauve",
      "type": ["all","India", "Europe"],
      "portrait": "portraits/portrait41.jpg",
      "scenery": "sceneries/scenery41.jpg"
    },
    {
      "title": "Orchid",
      "type": ["all","India", "Europe"],
      "portrait": "portraits/portrait42.jpg",
      "scenery": "sceneries/scenery42.jpg"
    },
    {
      "title": "Salmon",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait43.jpg",
      "scenery": "sceneries/scenery43.jpg"
    },
    {
      "title": "Sky Blue",
      "type": ["all","Europe", "USA"],
      "portrait": "portraits/portrait44.jpg",
      "scenery": "sceneries/scenery44.jpg"
    },
    {
      "title": "Navy",
      "type": ["all","Europe", "USA"],
      "portrait": "portraits/portrait45.jpg",
      "scenery": "sceneries/scenery45.jpg"
    },
    {
      "title": "Mustard",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait46.jpg",
      "scenery": "sceneries/scenery46.jpg"
    },
    {
      "title": "Olive Green",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait47.jpg",
      "scenery": "sceneries/scenery47.jpg"
    },
    {
      "title": "Rose",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait48.jpg",
      "scenery": "sceneries/scenery48.jpg"
    },
    {
      "title": "Sand",
      "type": ["all","India", "Europe"],
      "portrait": "portraits/portrait49.jpg",
      "scenery": "sceneries/scenery49.jpg"
    },
    {
      "title": "Coral Reef",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait50.jpg",
      "scenery": "sceneries/scenery50.jpg"
    }
  ];

  shuffle(tasks);
  
  const filters = {
    location: document.querySelector('#location-filter')
};

const tasksContainer = document.querySelector('#tasks');
let selectedLocation = 'all';

function generateTask(task) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    const sceneryImg = document.createElement('img');
    sceneryImg.src = task.scenery;
    sceneryImg.alt = task.title;
    sceneryImg.classList.add('scenery');

    const portraitImg = document.createElement('img');
    portraitImg.src = task.portrait;
    portraitImg.alt = task.title;
    portraitImg.classList.add('portrait');

    const titlePara = document.createElement('p');
    titlePara.textContent = task.title;

    taskElement.appendChild(sceneryImg);
    taskElement.appendChild(portraitImg);
    taskElement.appendChild(titlePara);

    return taskElement;
}

function renderInitialTask() {
    tasksContainer.innerHTML = '';

    const randomIndex = Math.floor(Math.random() * tasks.length);
    const randomTask = tasks[randomIndex];
    const taskElement = generateTask(randomTask);
    tasksContainer.appendChild(taskElement);
}

function renderTasks() {
    tasksContainer.innerHTML = '';

    const filteredTasks = tasks.filter(task => selectedLocation === 'all' || task.type.includes(selectedLocation));

    filteredTasks.forEach(task => {
        const taskElement = generateTask(task);
        tasksContainer.appendChild(taskElement);
    });
}

function handleLocationFilterChange() {
    selectedLocation = filters.location.value;
    renderTasks();
}

function initializeEventListeners() {
    filters.location.addEventListener('change', handleLocationFilterChange);

    // Add click event listener to tasks container
    tasksContainer.addEventListener("click", function(event) {
        // Check if the clicked element is an image
        if (event.target.tagName === "IMG") {
            addRandomTask();
        }
    });
}

function addRandomTask() {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    const randomTask = tasks[randomIndex];
    tasksContainer.appendChild(generateTask(randomTask));
}

initializeEventListeners();
renderInitialTask();