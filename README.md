# PBL Report: Currency Exchange Converter

## 1. Problem Statement
The need for a simple, accessible tool to convert between multiple world currencies in real-time using current exchange rates from a reliable API.

## 2. Project Objectives
- Develop a web application that allows users to convert between different currencies
- Integrate with an exchange rate API (RapidAPI - ExchangeRate API)
- Display currency flags to enhance user experience
- Provide real-time, accurate exchange rates
- Create an intuitive and responsive user interface

## 3. Technical Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **API**: ExchangeRate-API (RapidAPI)
- **External Resources**: 
  - Font Awesome 6.5.1 (for icons)
  - Flags API (for country flags)
- **Browser APIs**: Fetch API for HTTP requests

## 4. Features Implemented

### 4.1 Core Features
1. **Currency Selection**: Dropdown menus to select source and target currencies
2. **Amount Input**: User can enter the amount to convert
3. **Real-time Conversion**: Fetches live exchange rates and calculates conversion
4. **Currency Flags**: Displays country flags alongside currency codes
5. **Convert Button**: Triggers the conversion calculation
6. **Result Display**: Shows conversion result in readable format

### 4.2 User Interface Components
- Navigation panel with header
- Input field for amount
- Two dropdown sections: "From" and "To" currencies
- Currency flag images
- Exchange rate display area
- Convert button

## 5. How It Works (Implementation Details)

### 5.1 Data Flow
1. User enters amount and selects currencies
2. User clicks "Convert" button
3. Application fetches exchange rates from API using selected currency
4. Exchange rate is retrieved and multiplied by user input
5. Result is displayed to the user

### 5.2 Key Functions

**updateflag()**: Updates the flag image when currency selection changes

**getrate()**: 
- Retrieves the amount from input field
- Constructs API URL with source currency
- Fetches exchange rate data
- Calculates final amount
- Displays formatted result

**Event Listeners**:
- Dropdown change event: Updates flag when currency changes
- Button click event: Triggers conversion

### 5.3 API Integration
- Endpoint: `https://exchangerate-api.com/rapid/latest/{currency}`
- Method: GET request
- Authentication: RapidAPI key in headers
- Response: JSON object containing exchange rates for all currencies

## 6. Key Learning Outcomes

### 6.1 Technical Skills Learned
1. **Async JavaScript**: Understanding async/await for API calls
2. **DOM Manipulation**: Using querySelectorAll, appendChild, event listeners
3. **Fetch API**: Making HTTP requests and handling responses
4. **API Integration**: Working with third-party APIs and authentication
5. **Event Handling**: Managing user interactions
6. **CSS Styling**: Creating responsive, modern UI

### 6.2 Problem-Solving Skills
1. Real-time data fetching and processing
2. Error handling for API calls
3. Dynamic DOM element creation
4. State management

## 7. Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| Getting live exchange rates | Used RapidAPI's ExchangeRate-API |
| Displaying appropriate flags | Integrated Flags API with currency codes |
| Dynamic currency population | Used for loop with countryList object |
| Real-time UI updates | Implemented event listeners for immediate feedback |

## 8. Code Architecture

- **concode.js**: Country-to-currency code mapping (countryList object)
- **scripts.js**: Main application logic and event handlers
- **index.html**: Semantic structure and form elements
- **style.css**: Styling and responsive design

## 9. Testing & Validation

The application successfully:
- ✓ Converts between any two currencies
- ✓ Updates flags when currency selection changes
- ✓ Handles decimal amounts
- ✓ Displays formatted conversion results
- ✓ Responds to button clicks

## 10. Conclusion

This project demonstrates proficiency in web development fundamentals including DOM manipulation, API integration, asynchronous JavaScript, and creating user-friendly interfaces. The currency converter serves as a practical application of real-world problem-solving through technology.

## 11. Future Enhancements

- Add historical exchange rate charts
- Implement offline caching
- Add multiple currency conversion
- Create mobile-responsive design
- Add error handling for API failures
- Implement currency favorites
