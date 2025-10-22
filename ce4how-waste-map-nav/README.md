# CE4HOW "Taka ni Mali" - Kakamega Waste Management Map

An interactive web map for the Circular Economy for Household Organic Waste (CE4HOW) project in Kakamega Municipality, Kenya.

## Overview

This web map visualizes waste collection points, processing facilities, and community engagement data to support the CE4HOW project's Social Behavior Change Communication (SBCC) strategy. The map promotes the "Taka ni Mali" (Waste is Wealth) campaign message and helps stakeholders understand the waste management infrastructure in Kakamega.

## Features

- **Interactive Map**: Built with Leaflet.js and OpenStreetMap
- **Multiple Layers**: Toggle between formal collection points, informal dumping sites, processing facilities, and plastic waste collection yards
- **Detailed Information**: Click on markers to view site-specific information, status, and challenges
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Offline Capability**: Can be hosted locally without internet connection

## Hosting Options

### Option 1: Local Hosting (Offline)

To run the map locally on your computer:

1. **Download the files**: Ensure you have all files in the `ce4how-waste-map` directory:
   - `index.html`
   - `style.css`
   - `script.js`
   - `waste_data.geojson`
   - `README.md`

2. **Open the map**: Simply double-click on `index.html` to open it in your web browser.

3. **Alternative - Use a local server** (recommended for better performance):
   ```bash
   # If you have Python installed:
   cd ce4how-waste-map
   python3 -m http.server 8000
   # Then open http://localhost:8000 in your browser
   ```

### Option 2: Online Hosting

#### GitHub Pages (Free)

1. **Create a GitHub account** at https://github.com (if you don't have one)

2. **Create a new repository**:
   - Click "New repository"
   - Name it `ce4how-waste-map`
   - Make it public
   - Don't initialize with README

3. **Upload files**:
   ```bash
   cd ce4how-waste-map
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/ce4how-waste-map.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your map will be available at: `https://YOUR-USERNAME.github.io/ce4how-waste-map/`

#### Other Hosting Options

- **Netlify**: Drag and drop the folder at https://app.netlify.com/drop
- **Vercel**: Connect your GitHub repository at https://vercel.com
- **Web Server**: Upload files to any web hosting service (e.g., shared hosting, VPS)

## Technical Details

### Technology Stack

- **Mapping Library**: Leaflet.js 1.9.4
- **Base Map**: OpenStreetMap
- **Data Format**: GeoJSON
- **Frontend**: HTML5, CSS3, JavaScript (ES6)

### Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

### Data Structure

The map uses GeoJSON format for geographic data. Each feature includes:
- **Coordinates**: Latitude and longitude
- **Properties**: Name, type, category, description, status, and challenges

## Customization

### Adding New Locations

To add new waste management sites, edit the `wasteData` object in `script.js`:

```javascript
{
    "type": "Feature",
    "properties": {
        "name": "New Site Name",
        "type": "formal", // or "informal", "processing", "plastic"
        "category": "Site Category",
        "description": "Site description",
        "status": "Active",
        "challenges": "Any challenges"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [longitude, latitude]
    }
}
```

### Changing Map Center and Zoom

Edit the map initialization in `script.js`:

```javascript
const map = L.map('map').setView([latitude, longitude], zoomLevel);
```

### Styling

Modify `style.css` to change colors, fonts, and layout.

## Data Sources

Geographic data was extracted from the CE4HOW SBCC Strategy document (Draft for Review, October 2025) and supplemented with online geocoding services.

## Project Partners

- **Practical Action**: Project implementation
- **Regen Organics**: Fertilizer processing
- **Kakamega County**: Government partner
- **GeoPsy Research**: SBCC strategy development

## License

© 2025 Practical Action/CE4HOW. All rights reserved.

## Contact

For questions or support regarding this map, please contact the CE4HOW project team at Practical Action.

---

**Campaign Message**: "Taka ni Mali" - Waste is Wealth

Segregate organic waste at source and contribute to a circular economy that creates environmental and economic value for our community.
