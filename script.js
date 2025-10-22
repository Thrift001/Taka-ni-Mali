const map = L.map('map'); // Initialize map without setting the view yet

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
    minZoom: 10
}).addTo(map);

// --- START: Load and Display Kakamega County GeoJSON ---
fetch('Kakamega County.geojson')
    .then(response => response.json()) // Parse the JSON from the response
    .then(data => {
        // Create a GeoJSON layer for the Area of Interest (AOI)
        const aoiLayer = L.geoJSON(data, {
            style: {
                color: "black",     // Outline color
                weight: 2,          // Outline width
                opacity: 1,         // Outline opacity
                fillOpacity: 0      // No fill
            }
        });

        // Add the AOI layer to the map
        aoiLayer.addTo(map);

        
    })
    .catch(error => console.error('Error loading the GeoJSON file:', error));
// --- END: Load and Display Kakamega County GeoJSON ---


const icons = {
    formal: L.divIcon({
        className: 'custom-marker',
        html: '<div style="background-color: #006400; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(0,0,0,0.3); font-size: 18px;">📍</div>',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
    }),
    informal: L.divIcon({
        className: 'custom-marker',
        html: '<div style="background-color: #e74c3c; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(0,0,0,0.3); font-size: 18px;">📍</div>',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
    }),
    processing: L.divIcon({
        className: 'custom-marker',
        html: '<div style="background-color: #3498db; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(0,0,0,0.3); font-size: 18px;">📍</div>',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
    }),
    plastic: L.divIcon({
        className: 'custom-marker',
        html: '<div style="background-color: #f39c12; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(0,0,0,0.3); font-size: 18px;">📍</div>',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
    })
};

const wasteData = {
    "type": "FeatureCollection",
    "features": [
         {
            "type": "Feature",
            "properties": {
                "name": "Rosterman Dumpsite",
                "type": "informal",
                "category": "Informal Dumping Site",
                "description": "Main dumping site in Rosterman. Over 95% of waste arriving is mixed. County government collaborates with local community groups to manage the site.",
                "status": "Active",
                "challenges": "Mixed waste, lack of segregation at source",
                "image": "images/disposal worker.jpg"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [34.72066, 0.25509]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Regen Organics Fertilizer Processing Plant",
                "type": "processing",
                "category": "Waste Processing Facility",
                "description": "Located in Mumias, processes organic waste into fertilizer. Accepts only organic waste for composting.",
                "status": "Operational",
                "challenges": "Small amounts of plastic often mixed in, requiring segregation"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [34.48796, 0.33474]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Khayenga Refuse Chamber",
                "type": "formal",
                "category": "Formal Waste Receptacle",
                "description": "Located near Khayenga Market. Managed by Khayenga Self Help Group. Compartments for biodegradable and non-biodegradable waste are clearly marked.",
                "status": "Active",
                "challenges": "Local community unaware of need to separate waste",
                "image": "images/khayega refuse.jpg"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [34.77152, 0.20819]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Lurambi Refuse Chamber",
                "type": "formal",
                "category": "Formal Waste Receptacle",
                "description": "Located in Lurambi Market. Operated by well-organized youth and community groups. Compartments for biodegradable and non-biodegradable waste.",
                "status": "Active",
                "challenges": "Waste often mixed despite compartmentalization",
                "image": "images/lurambi waste.jpg"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [34.76485, 0.2998]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Sichirayi Refuse Chamber",
                "type": "formal",
                "category": "Formal Waste Receptacle",
                "description": "Formal waste collection point in Sichirayi area. Part of the municipal waste management system.",
                "status": "Active",
                "challenges": "Requires better community awareness for waste segregation"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [34.745, 0.315]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Masingo Refuse Chamber",
                "type": "formal",
                "category": "Formal Waste Receptacle",
                "description": "Located close to fresh food market. Majority of waste is organic. Informal dumping site exists nearby.",
                "status": "Active",
                "challenges": "Informal dumping site just 10 meters away",
                "image": "images/bird image.jpg"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [34.7505, 0.285]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Amelemba Scheme Refuse Chamber",
                "type": "formal",
                "category": "Formal Waste Receptacle",
                "description": "Formal waste collection point in Amelemba Scheme area.",
                "status": "Active",
                "challenges": "Community engagement needed for proper waste segregation"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [34.755, 0.295]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Mevic Waste Management",
                "type": "plastic",
                "category": "Plastic Waste Collection Yard",
                "description": "Plastic waste collection yard managed by Mevic Waste Management. Specializes in plastic, metal, and paper/carton collection.",
                "status": "Operational",
                "challenges": "Vested interests in plastic/metal discourage organic waste focus"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [34.753, 0.283]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Kambi Somali Refuse Chamber",
                "type": "formal",
                "category": "Formal Waste Receptacle",
                "description": "Refuse chamber in Kambi Somali area. Built within market walls with narrow passages.",
                "status": "Active",
                "challenges": "Narrow passages limit proper waste collection and segregation"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [34.752, 0.286]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Shirere Waste Collection",
                "type": "formal",
                "category": "Formal Waste Receptacle",
                "description": "Waste collection point in Shirere Ward.",
                "status": "Active",
                "challenges": "Community awareness needed"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [34.735, 0.265]
            }
        }
    ]
};


// 1. Create a layer from your wasteData to get its collective bounds.
const wasteSitesLayer = L.geoJSON(wasteData);

// 2. Set the map's initial view to fit the bounds of your dumpsites.
map.fitBounds(wasteSitesLayer.getBounds());

const layers = {
    formal: L.layerGroup(),
    informal: L.layerGroup(),
    processing: L.layerGroup(),
    plastic: L.layerGroup()
};

Object.values(layers).forEach(layer => layer.addTo(map));

wasteData.features.forEach(feature => {
    const coords = feature.geometry.coordinates;
    const props = feature.properties;
    const type = props.type;
    
    let popupContent = `
        <div>
            <h3>${props.name}</h3>
            <p><strong>Category:</strong> ${props.category}</p>
            <p><strong>Status:</strong> ${props.status}</p>
            <p><strong>Description:</strong> ${props.description}</p>
            <p><strong>Challenges:</strong> ${props.challenges}</p>
            <button class="get-directions-btn" data-lat="${coords[1]}" data-lon="${coords[0]}">Get Directions</button>
    `;

    if (props.image) {
        popupContent += `<img src="${props.image}" alt="${props.name}" class="popup-image">`;
    }

    popupContent += `</div>`;
    
    const marker = L.marker([coords[1], coords[0]], { icon: icons[type] })
        .bindPopup(popupContent);
    
    layers[type].addLayer(marker);
});

document.getElementById('layer-formal').addEventListener('change', function(e) {
    if (e.target.checked) {
        map.addLayer(layers.formal);
    } else {
        map.removeLayer(layers.formal);
    }
});

document.getElementById('layer-informal').addEventListener('change', function(e) {
    if (e.target.checked) {
        map.addLayer(layers.informal);
    } else {
        map.removeLayer(layers.informal);
    }
});

document.getElementById('layer-processing').addEventListener('change', function(e) {
    if (e.target.checked) {
        map.addLayer(layers.processing);
    } else {
        map.removeLayer(layers.processing);
    }
});

document.getElementById('layer-plastic').addEventListener('change', function(e) {
    if (e.target.checked) {
        map.addLayer(layers.plastic);
    } else {
        map.removeLayer(layers.plastic);
    }
});

L.control.scale({
    imperial: false,
    metric: true
}).addTo(map);

map.attributionControl.addAttribution('CE4HOW Project | Practical Action & Regen Organics');

console.log("Map initialized successfully with", wasteData.features.length, "waste management sites.");

// Add event listener for Get Directions buttons
document.addEventListener("click", function(e) {
    if (e.target && e.target.matches(".get-directions-btn")) {
        const destLat = parseFloat(e.target.dataset.lat);
        const destLon = parseFloat(e.target.dataset.lon);
        
        // Request user's current location
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const startLat = position.coords.latitude;
                const startLon = position.coords.longitude;

                if (window.routingControl) {
                    map.removeControl(window.routingControl);
                }

                // Step 1: Define a custom Plan class to add the button (from previous update)
                const CustomPlan = L.Routing.Plan.extend({
                    createGeocoders: function() {
                        const container = L.Routing.Plan.prototype.createGeocoders.call(this);
                        
                        const calculateButton = L.DomUtil.create('button', 'leaflet-routing-calculate-button', container);
                        calculateButton.setAttribute('type', 'button');
                        calculateButton.innerHTML = 'Calculate Route';
                        
                        L.DomEvent.on(calculateButton, 'click', function() {
                            window.routingControl.route();
                        });

                        return container;
                    }
                });

                // Step 2: Create an instance of the custom plan
                const customPlan = new CustomPlan([
                    L.latLng(startLat, startLon),
                    L.latLng(destLat, destLon)
                ], {
                    geocoder: L.Control.Geocoder.nominatim({ serviceUrl: 'https://nominatim.openstreetmap.org/search/' }),
                    addWaypoints: true,
                    draggableWaypoints: true
                });

                // Step 3: Create the routing control
                window.routingControl = L.Routing.control({
                    plan: customPlan,
                    waypoints: [
                        L.latLng(startLat, startLon),
                        L.latLng(destLat, destLon)
                    ],
                    routeWhileDragging: true,
                    autoRoute: false,
                    router: L.Routing.osrmv1({
                        serviceUrl: 'https://router.project-osrm.org/route/v1'
                    }),
                    showAlternatives: false,
                    altLineOptions: {
                        styles: [
                            {color: 'black', opacity: 0.15, weight: 9},
                            {color: 'white', opacity: 0.8, weight: 6},
                            {color: 'blue', opacity: 0.5, weight: 2}
                        ]
                    }
                }).addTo(map);

                // NEW: Create a loading indicator element (dynamic div)
                let loadingDiv = document.createElement('div');
                loadingDiv.id = 'routing-loading-indicator';
                loadingDiv.style.position = 'absolute';
                loadingDiv.style.top = '50%';
                loadingDiv.style.left = '50%';
                loadingDiv.style.transform = 'translate(-50%, -50%)';
                loadingDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                loadingDiv.style.padding = '20px';
                loadingDiv.style.borderRadius = '8px';
                loadingDiv.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                loadingDiv.style.zIndex = '1000';  // Ensure it's on top
                loadingDiv.style.display = 'none';  // Hidden by default
                loadingDiv.innerHTML = '<p style="font-size: 16px; margin: 0;">Please wait as route is being calculated...</p>';
                document.body.appendChild(loadingDiv);  // Or append to map.getContainer() for map-only overlay

                // NEW: Attach event listeners for loading popup
                window.routingControl.on('routingstart', function() {
                    loadingDiv.style.display = 'block';  // Show on start
                });

                window.routingControl.on('routesfound', function() {
                    loadingDiv.style.display = 'none';  // Hide on success
                });

                window.routingControl.on('routingerror', function() {
                    loadingDiv.style.display = 'none';  // Hide on error
                    alert('Error calculating route. Please try again.');  // Optional user feedback
                });

                // Manually trigger initial route calculation (optional)
                window.routingControl.route();

                // Close all popups
                map.closePopup();

                // Cleanup: Remove loading div when control is removed (good practice)
                window.routingControl.on('remove', function() {
                    if (loadingDiv && loadingDiv.parentNode) {
                        loadingDiv.parentNode.removeChild(loadingDiv);
                    }
                });

            }, function(error) {
                alert("Geolocation failed: " + error.message + ". Please allow location access or manually set your start point.");
            });
        } else {
            alert("Geolocation is not supported by your browser. Please manually set your start point.");
        }
    }
});
