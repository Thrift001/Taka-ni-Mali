const map = L.map('map').setView([0.2827, 34.7519], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
    minZoom: 10
}).addTo(map);

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

console.log('Map initialized successfully with', wasteData.features.length, 'waste management sites.');
