
//Add click event listeners to each card 
const cards= document.querySelectorAll('.card');
cards.forEach(card=> {
    card.addEventListener('click', event => {
        const id = event.target.id;
        switch (id) {
            case 'cold' :
                // Show natural food remedies for cold
                break;
                case 'sore-throat':
                    // Show natural food remedies for sore throat
                    break;
                    case 'fever':
                    // Show natural food remedies for fever
                    break;
                    case 'diarrhea':
                        // Show natural food remedies fo diarrhea
                        break;
                        case 'acne':
                            // Show natural food remedies for acne
                            break;
                        case 'constipation':
                            // Show natural food remedies for constipation
                            break;
        }
    });
});
// Define natural food remedies for each ailment 
const remedies = {
    cold: [
        "Drink hot Lemon,Ginger and Cinnamon tea",
        "Eat a hot vegetable soup",
        "Drink citrus fruits like lime and lemon in hot water",
        "Take non acidic vitamin C",
        "Cut a red onion and put it at both heels of your feet, then put a sock over it and sleep",
    
    ],
      soreThroat: [
        "Gargle with warm salt water",
        "Drink honey and lemon tea",
        "Eat chicken soup",
        "Eat garlic for its antibacterial properties",
        "Drink ginger tea",
        "Eat marshallow root for its soothing properties",
    ],
    fever: [
        "Drink plenty of water to stay hydrated",
        "Eat foods high in vitamin C",
        "Eat garlic for its antibacterial properties",
        "Drink herbal tea with chamomile or elderflower"
    ],
    diarrhea: [
        "Eat bannas for their high potassium content",
        "Eat white rice for its binding properties",
        "Eat probiotic-rich foods like yogurt",
        "Drink coconut water for its electrolytes",
        "Eat bone broth for its healing properties",
    ],
    acne: [
        "Eat high-fiber foods like fruits and vegetables",
        "Eat prunes or drink prune juice",
        "drink chlorophyll water",
        "Eat chia seeds for their fiber and omega-3 fatty acids",
        "Eat fermented foods like sauerkraut for their probiotics",
    ],
    constipation: [
        "Eat high-fiber foods like fruits and vegetables ",
        "Eat prunes or drink prune juice",
        "Drink plenty of water to stay hydrated",
        "Eat fermented foods like sauerkraut for probiotics",
        "Eat beans for their fiber and protein",
    ]
};
// show natural food remedies for each ailment
function showRemedies(id) {
    const container = document.querySelector('.container');
    container. innerHTML = '';
    const title = document.createElement('h2');
    title.textContent= id.chartAt(0).toUpperCase() + id.slice(1);
    container.appendChild(title);
    const list = document.createElement('ul');
    remedies[id].forEach(remedy => {
        const item = document.createElement('li');
        item.textContent = remedy;
        list.appendChild(item);
    ]);
    container.appendChild(item);
    </script>
    </body>
    
