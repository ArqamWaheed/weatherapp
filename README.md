# Weather App 🌤️

A modern, responsive weather application built with vanilla JavaScript that provides real-time weather information for any city worldwide.

## ✨ Features

- **Real-time Weather Data**: Get current weather conditions for any city
- **Temperature Conversion**: Switch between Celsius and Fahrenheit with a simple click
- **Beautiful Weather Icons**: Custom SVG icons for different weather conditions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Glass-morphism design with smooth animations and transitions
- **Loading States**: Elegant loading screen while fetching data
- **Error Handling**: User-friendly error messages for invalid city names

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Modular code structure with async/await
- **Visual Crossing Weather API**: Reliable weather data source
- **Date-fns**: Date formatting and manipulation

## 📁 Project Structure

```
src/
├── index.html              # Main HTML file
├── index.js                # Entry point
├── styles.css              # Main stylesheet
├── core/
│   ├── weatherAPI.js       # API integration
│   ├── weatherModel.js     # Data models and business logic
│   └── weatherServices.js  # Utility services (temperature conversion)
├── ui/
│   ├── Display.js          # UI rendering functions
│   ├── EventListenersDOM.js # Event handlers
│   ├── Validation.js       # Input validation
│   └── cacheDOM.js         # DOM element caching
└── weather-icons/          # Custom SVG weather icons
    ├── clear-day.svg
    ├── clear-night.svg
    ├── cloudy.svg
    ├── rain.svg
    └── ... (more weather icons)
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API calls

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Open the application**
   - Simply open `src/index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server src/
     ```

3. **Start using the app**
   - Enter a city name in the search field
   - Press Enter or click the "+" button
   - View real-time weather information

## 🔧 Configuration

### API Key

The application uses the Visual Crossing Weather API. The current API key is included in the code, but for production use, you should:

1. Get your own API key from [Visual Crossing Weather](https://www.visualcrossing.com/weather-api)
2. Replace the API key in `src/core/weatherAPI.js`:
   ```javascript
   const API_key = "YOUR_API_KEY_HERE";
   ```

## 🎨 UI Features

### Design Elements
- **Glass-morphism**: Semi-transparent cards with backdrop blur
- **Gradient Backgrounds**: Beautiful color gradients
- **Smooth Animations**: CSS transitions and keyframe animations
- **Responsive Grid**: Adapts to different screen sizes
- **Interactive Elements**: Hover effects and micro-interactions

### Weather Icons
The app includes custom SVG icons for various weather conditions:
- Clear day/night
- Cloudy conditions
- Rain and showers
- Snow and sleet
- Thunderstorms
- Fog and wind
- And more...

## 📱 Responsive Design

The application is fully responsive and works on:
- **Desktop**: Full-featured experience
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Touch-friendly interface with stacked layout

## 🔄 Temperature Conversion

Users can easily switch between temperature units:
- Click on **°C** for Celsius
- Click on **°F** for Fahrenheit
- The conversion applies to both current temperature and "feels like" temperature

## ⚡ Performance Features

- **DOM Caching**: Elements are cached for better performance
- **Modular Code**: Separated concerns for maintainability
- **Async Operations**: Non-blocking API calls
- **Error Boundaries**: Graceful error handling

## 🧪 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 16+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

The project follows these conventions:
- **ES6+ syntax**: Modern JavaScript features
- **Modular structure**: Separation of concerns
- **Camel case**: Variable and function naming
- **Semantic HTML**: Accessible markup
- **CSS custom properties**: For consistent theming

## 🐛 Known Issues

- API rate limits may apply with the included API key
- Some weather conditions may not have specific icons

## 🔮 Future Enhancements

- [ ] 5-day weather forecast
- [ ] Geolocation support
- [ ] Weather maps integration
- [ ] Favorite cities feature
- [ ] Weather alerts and notifications
- [ ] Dark/light theme toggle

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ for learning and demonstration purposes.

---

**Note**: This is a demonstration project. For production use, consider implementing additional security measures, error handling, and performance optimizations.
