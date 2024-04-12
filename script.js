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
      "scenery": "sceneries/scenery1.jpg",
      "page": "entry-1.html"
    },
    {
      "title": "Blue",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait2.jpg",
      "scenery": "sceneries/scenery2.jpg",
      "page": "entry-2.html"
    },
    {
      "title": "Green",
      "type": ["all","Europe", "India"],
      "portrait": "portraits/portrait3.jpg",
      "scenery": "sceneries/scenery3.jpg",
      "page": "entry-3.html"
    },
    {
      "title": "Yellow",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait4.jpg",
      "scenery": "sceneries/scenery4.jpg",
      "page": "entry-4.html"
    },
    {
      "title": "Orange",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait5.jpg",
      "scenery": "sceneries/scenery5.jpg",
      "page": "entry-5.html"
    },
    {
      "title": "Purple",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait6.jpg",
      "scenery": "sceneries/scenery6.jpg",
      "page": "entry-6.html"
    },
    {
      "title": "Pink",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait7.jpg",
      "scenery": "sceneries/scenery7.jpg",
      "page": "entry-7.html"
    },
    {
      "title": "Turquoise",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait8.jpg",
      "scenery": "sceneries/scenery8.jpg",
      "page": "entry-8.html"
    },
    {
      "title": "Cyan",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait9.jpg",
      "scenery": "sceneries/scenery9.jpg",
      "page": "entry-9.html"
    },
    {
      "title": "Magenta",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait10.jpg",
      "scenery": "sceneries/scenery10.jpg",
      "page": "entry-10.html"
    },
    {
      "title": "Lavender",
      "type": ["all","India", "India"],
      "portrait": "portraits/portrait11.jpg",
      "scenery": "sceneries/scenery11.jpg",
      "page": "entry-11.html"
    },
    {
      "title": "Indigo",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait12.jpg",
      "scenery": "sceneries/scenery12.jpg",
      "page": "entry-12.html"
    },
    {
      "title": "Violet",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait13.jpg",
      "scenery": "sceneries/scenery13.jpg",
      "page": "entry-13.html"
    },
    {
      "title": "Maroon",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait14.jpg",
      "scenery": "sceneries/scenery14.jpg",
      "page": "entry-14.html"
    },
    {
      "title": "Teal",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait15.jpg",
      "scenery": "sceneries/scenery15.jpg",
      "page": "entry-15.html"
    },
    {
      "title": "Coral",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait16.jpg",
      "scenery": "sceneries/scenery16.jpg",
      "page": "entry-16.html"
    },
    {
      "title": "Olive",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait17.jpg",
      "scenery": "sceneries/scenery17.jpg",
      "page": "entry-17.html"
    },
    {
      "title": "Peach",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait18.jpg",
      "scenery": "sceneries/scenery18.jpg",
      "page": "entry-18.html"
    },
    {
      "title": "Gold",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait19.jpg",
      "scenery": "sceneries/scenery19.jpg",
      "page": "entry-19.html"
    },
    {
      "title": "Silver",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait20.jpg",
      "scenery": "sceneries/scenery20.jpg",
      "page": "entry-20.html"
    },
    {
      "title": "Charcoal",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait21.jpg",
      "scenery": "sceneries/scenery21.jpg",
      "page": "entry-21.html"
    },
    {
      "title": "Beige",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait22.jpg",
      "scenery": "sceneries/scenery22.jpg",
      "page": "entry-22.html"
    },
    {
      "title": "Brown",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait23.jpg",
      "scenery": "sceneries/scenery23.jpg",
      "page": "entry-23.html"
    },
    {
      "title": "Tan",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait24.jpg",
      "scenery": "sceneries/scenery24.jpg",
      "page": "entry-24.html"
    },
    {
      "title": "Cream",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait25.jpg",
      "scenery": "sceneries/scenery25.jpg",
      "page": "entry-25.html"
    },
    {
      "title": "Ivory",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait26.jpg",
      "scenery": "sceneries/scenery26.jpg",
      "page": "entry-26.html"
    },
    {
      "title": "Slate",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait27.jpg",
      "scenery": "sceneries/scenery27.jpg",
      "page": "entry-27.html"
    },
    {
      "title": "Periwinkle",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait28.jpg",
      "scenery": "sceneries/scenery28.jpg",
      "page": "entry-28.html"
    },
    {
      "title": "Crimson",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait29.jpg",
      "scenery": "sceneries/scenery29.jpg",
      "page": "entry-29.html"
    },
    {
      "title": "Ruby",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait30.jpg",
      "scenery": "sceneries/scenery30.jpg",
      "page": "entry-30.html"
    },
    {
      "title": "Emerald",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait31.jpg",
      "scenery": "sceneries/scenery31.jpg",
      "page": "entry-31.html"
    },
    {
      "title": "Sapphire",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait32.jpg",
      "scenery": "sceneries/scenery32.jpg",
      "page": "entry-32.html"
    },
    {
      "title": "Azure",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait33.jpg",
      "scenery": "sceneries/scenery33.jpg",
      "page": "entry-33.html"
    },
    {
      "title": "Lemon",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait34.jpg",
      "scenery": "sceneries/scenery34.jpg",
      "page": "entry-34.html"
    },
    {
      "title": "Mint",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait35.jpg",
      "scenery": "sceneries/scenery35.jpg",
      "page": "entry-35.html"
    },
    {
      "title": "Lilac",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait36.jpg",
      "scenery": "sceneries/scenery36.jpg",
      "page": "entry-36.html"
    },
    {
      "title": "Tangerine",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait37.jpg",
      "scenery": "sceneries/scenery37.jpg",
      "page": "entry-37.html"
    },
    {
      "title": "Fuchsia",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait38.jpg",
      "scenery": "sceneries/scenery38.jpg",
      "page": "entry-38.html"
    },
    {
      "title": "Burgundy",
      "type": ["all","USA", "Europe"],
      "portrait": "portraits/portrait39.jpg",
      "scenery": "sceneries/scenery39.jpg",
      "page": "entry-39.html"
    },
    {
      "title": "Aquamarine",
      "type": ["all","Europe", "Europe"],
      "portrait": "portraits/portrait40.jpg",
      "scenery": "sceneries/scenery40.jpg",
      "page": "entry-40.html"
    },
    {
      "title": "Mauve",
      "type": ["all","India", "Europe"],
      "portrait": "portraits/portrait41.jpg",
      "scenery": "sceneries/scenery41.jpg",
      "page": "entry-41.html"
    },
    {
      "title": "Orchid",
      "type": ["all","USA", "Europe"],
      "portrait": "portraits/portrait42.jpg",
      "scenery": "sceneries/scenery42.jpg",
      "page": "entry-42.html"
    },
    {
      "title": "Salmon",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait43.jpg",
      "scenery": "sceneries/scenery43.jpg",
      "page": "entry-43.html"
    },
    {
      "title": "Sky Blue",
      "type": ["all","Europe", "USA"],
      "portrait": "portraits/portrait44.jpg",
      "scenery": "sceneries/scenery44.jpg",
      "page": "entry-44.html"
    },
    {
      "title": "Navy",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait45.jpg",
      "scenery": "sceneries/scenery45.jpg",
      "page": "entry-45.html"
    },
    {
      "title": "Mustard",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait46.jpg",
      "scenery": "sceneries/scenery46.jpg",
      "page": "entry-46.html"
    },
    {
      "title": "Olive Green",
      "type": ["all","India", "USA"],
      "portrait": "portraits/portrait47.jpg",
      "scenery": "sceneries/scenery47.jpg",
      "page": "entry-47.html"
    },
    {
      "title": "Rose",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait48.jpg",
      "scenery": "sceneries/scenery48.jpg",
      "page": "entry-48.html"
    },
    {
      "title": "Sand",
      "type": ["all","USA", "Europe"],
      "portrait": "portraits/portrait49.jpg",
      "scenery": "sceneries/scenery49.jpg",
      "page": "entry-49.html"
    },
    {
      "title": "Coral Reef",
      "type": ["all","USA", "USA"],
      "portrait": "portraits/portrait50.jpg",
      "scenery": "sceneries/scenery50.jpg",
      "page": "entry-50.html"
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

    const link = document.createElement('a');
    link.href = "#"; // Initially set href to "#"
    link.target = "_blank";

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
    titlePara.classList.add('title');

    taskElement.appendChild(sceneryImg);
    taskElement.appendChild(portraitImg);
    taskElement.appendChild(titlePara);

    taskElement.appendChild(link);

    const imgHeight = Math.max(sceneryImg.clientHeight, portraitImg.clientHeight);
    titlePara.style.top = imgHeight + 'px';

    return taskElement;
}

function updateLinks() {
    console.log('updateLinks function called');

    const filteredTasks = tasks.filter(task => selectedLocation === 'all' || task.type.includes(selectedLocation));
    console.log('Filtered Tasks:', filteredTasks);

    // Loop through each task element and update the link href
    const taskElements = tasksContainer.querySelectorAll('.task');
    taskElements.forEach((taskElement, index) => {
        const link = taskElement.querySelector('a');
        console.log('Link Element:', link);
        if (filteredTasks[index]) {
            link.href = filteredTasks[index].page;
        }
    });

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

    updateLinks();
}

function handleLocationFilterChange() {
    selectedLocation = filters.location.value;
    renderTasks();
}

function initializeEventListeners() {
    filters.location.addEventListener('change', handleLocationFilterChange);

    console.log("Initializing event listener...");
    console.log(tasksContainer);
    
    tasksContainer.addEventListener("click", function(event) {
        console.log("Click event detected on tasks container.");
        if (event.target.closest(".task")) {
            console.log("Clicked on a task.");
            addRandomTask();
        }
    });
}

function addRandomTask() {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    const randomTask = tasks[randomIndex];
    tasksContainer.appendChild(generateTask(randomTask));
}

function initializeEventListeners() {
    filters.location.addEventListener('change', handleLocationFilterChange);

    const clickSound = document.getElementById("clickSound");

    tasksContainer.addEventListener("click", function(event) {
        if (event.target.closest(".task")) {
            // Play the click sound
            clickSound.play();
            // Add a random task
            addRandomTask();
        }
    });
}

initializeEventListeners();
renderInitialTask();