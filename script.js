document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Event listener for click on figure
            document.addEventListener('click', function(event) {
                if (event.target.closest('figure')) {
                    const newRandomIndex = Math.floor(Math.random() * data.length);
                    const newRandomObject = data[newRandomIndex];
                    renderMarkup(newRandomObject);
                }
            });

            // Initial rendering
            renderRandomObject(data);
        })
        .catch(error => console.error('Error fetching data:', error));

    // Function to render a random object
    function renderRandomObject(data) {
        let randomIndex = Math.floor(Math.random() * data.length);
        const randomObject = data[randomIndex];
        renderMarkup(randomObject);
    }

    // Function to render markup
    function renderMarkup(object) {
        const wrapper = document.createElement('figure');
        wrapper.style.backgroundColor = 'black';
        wrapper.style.height = '13em';
        wrapper.style.width = '13em';
        wrapper.style.float = 'left';

        // Type
        wrapper.dataset.item = object.type;

        // Title
        const titleLink = document.createElement('a');
        titleLink.href = object.title;
        titleLink.textContent = object.title;
        const figCaption = document.createElement('figcaption');
        figCaption.style.textDecoration = 'none';
        figCaption.appendChild(titleLink);
        wrapper.appendChild(figCaption);

        // Container for images
        const imagesContainer = document.createElement('div');
        imagesContainer.classList.add('images-container'); // Add class
        imagesContainer.style.position = 'relative';
        imagesContainer.style.width = '100%';
        imagesContainer.style.height = '100%';
        wrapper.appendChild(imagesContainer);

        // Scenery
    const sceneryImg = document.createElement('img');
    sceneryImg.src = object.scenery;
    sceneryImg.style.position = 'absolute';
    sceneryImg.style.top = '50%';
    sceneryImg.style.left = '50%';
    sceneryImg.style.transform = 'translate(-50%, -50%)';
    sceneryImg.style.opacity = '100%';
    imagesContainer.appendChild(sceneryImg);

    // Portrait
    const portraitImg = document.createElement('img');
portraitImg.src = object.portrait;
portraitImg.classList.add('portrait-img'); 
portraitImg.style.position = 'absolute';
portraitImg.style.top = '50%';
portraitImg.style.left = '50%';
portraitImg.style.transform = 'translate(-50%, -50%)';
imagesContainer.appendChild(portraitImg);

// Add event listeners for hover effect
wrapper.addEventListener('mouseenter', function() {
    sceneryImg.style.opacity = '0.7'; // Reduce opacity of scenery image on hover
    portraitImg.style.opacity = '1';
});

wrapper.addEventListener('mouseleave', function() {
    sceneryImg.style.opacity = '0.7'; // Restore opacity of scenery image on mouse leave
    portraitImg.style.opacity = '0';
});
         // Append to DOM
    document.getElementById('randomObjectsContainer').appendChild(wrapper);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let previousObjects = []; // Track the last 15 generated objects

    // Fetch JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Event listener for click on figure
            document.addEventListener('click', function(event) {
                if (event.target.closest('figure')) {
                    let newRandomObject = getRandomUniqueObject(data);
                    renderMarkup(newRandomObject);
                }
            });

            // Initial rendering
            let initialRandomObject = getRandomUniqueObject(data);
            renderMarkup(initialRandomObject);
        })
        .catch(error => console.error('Error fetching data:', error));

    // Function to render markup
    function renderMarkup(object) {
        const wrapper = document.createElement('figure');
        // Rest of your rendering logic...
        // ...
    }

    // Function to get a random object that is not too similar to the last 15 objects
    function getRandomUniqueObject(data) {
        let newRandomObject = null;
        do {
            let randomIndex = Math.floor(Math.random() * data.length);
            newRandomObject = data[randomIndex];
        } while (isTooSimilar(newRandomObject, previousObjects));
        
        previousObjects.push(newRandomObject);
        if (previousObjects.length > 15) {
            previousObjects.shift(); // Remove the oldest object if the history exceeds 15
        }
        return newRandomObject;
    }

    // Function to check if a new object is too similar to the last 15 objects
    function isTooSimilar(newObject, previousObjects) {
        for (let i = 0; i < previousObjects.length; i++) {
            // Compare multiple properties to determine similarity
            if (areObjectsSimilar(newObject, previousObjects[i])) {
                return true;
            }
        }
        return false;
    }

    // Function to check if two objects are similar based on multiple properties
    function areObjectsSimilar(obj1, obj2) {
        // You can define your own criteria for similarity here
        // For example, you can compare titles, types, and other properties
        // For simplicity, let's compare titles and types
        if (obj1.title === obj2.title || obj1.type === obj2.type) {
            return true;
        }
        return false;
    }
});

