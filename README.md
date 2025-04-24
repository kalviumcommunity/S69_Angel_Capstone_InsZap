## Project Overview: Universal EV charging platform for India

### Introduction:

Electric Vehicle (EV) adoption in India is growing rapidly, but the fragmented nature of charging infrastructure creates a major inconvenience for EV users. Different networks operate their own apps, making it cumbersome to locate, access, and pay for charging across different providers. Our capstone project aims to solve this problem by creating a universal EV charging platform that aggregates all charging stations, regardless of network, into a single web-based Progressive Web App (PWA).

This platform will provide real-time information on charger availability, support multiple payment methods, and use AI-driven recommendations for route optimization and charging station suggestions. The goal is to simplify the EV charging experience and make it seamless and efficient.

## Key Features
Aggregator Model: The platform will act as a central hub, pulling data from multiple charging networks via APIs.
Real-Time Availability: Users will see the live status of charging stations (occupied, available, or faulty).
Payment Integration: Support for UPI, digital wallets, and credit/debit cards for seamless transactions.
Location-Based Services: GPS integration to guide users to the nearest compatible charging station.
AI-Driven Recommendations: Personalized charging suggestions based on usage history, traffic conditions, and battery level.
Route Planning: Optimized stop suggestions based on current battery status and charger availability.
User Reviews & Ratings: Crowdsourced feedback to help users choose the best stations.
Standardized Compatibility: Support for all major charger types (CCS, CHAdeMO, Type 2, Bharat DC001).
Web + PWA Approach: Accessible on any device with offline functionality and push notifications.

## Pages & Functionality

### Home Page:
Overview of the platform’s features.
Search bar to find nearby charging stations.
Option to view charging stations on a map .

### Search & Results Page:
Filter by charger type, price, and availability.
Real-time station status (occupied/available/faulty).

### Station Details Page:
Charger type, power output, and pricing.
Live availability and estimated waiting time.
User reviews and ratings.
Navigation option via integrated maps.

### Route Planning Page:
AI-driven suggestions for charging stops based on battery level and route.
Optimized routes with minimal detours and charging time.

### Payment Page:
Unified payment gateway supporting UPI, wallets, and cards.
Transaction history and e-receipts.

### User Profile Page:
Vehicle details and charger compatibility.
Past charging sessions and payment history.
Saved routes and preferred stations.

## Challenges & Solutions

Different Charging Networks & Protocols:
API integrations with major charging networks.
Collaboration with government-backed aggregators like the National Electric Mobility Mission.
Standardization of Charging Protocols:
Universal front-end displaying compatible chargers based on the EV model.
Real-Time Data & Availability:
Use of real-time APIs and crowdsourced user updates.
Payment Integration Across Providers:
Unified payment system for various gateways and subscription models.
Regulatory & Business Cooperation:
Start with open networks and gradually onboard private providers.

## Conclusion

This universal EV charging platform will significantly enhance the EV ownership experience in India by eliminating the need for multiple apps and offering a seamless, efficient charging process. By integrating real-time availability, AI-driven recommendations, and a wide range of payment options, the platform aims to become the go-to solution for all EV users. The web-based PWA approach ensures accessibility across devices with minimal friction, and the scalability potential makes it a promising project for future expansion. Starting with one city as an MVP, the platform can gradually expand nationwide, providing a unified solution for India's growing EV ecosystem.

## Daily Plan:

### Week 1: Project Setup and wireframing

Day 1: Make a low fid design on figma and set up a github repository
Day 2: Make a high fid design and prototype on figma
Day 3: Set up the React project with vite and configure routing
Day 4: Establish folder structure and install all the necessary dependencies.
Day 5: Create basic component structure and implement initial layout.

### Week 2: Frontend Development
Day 6: Build the homepage with navigation and basic layout.
Day 7: Develop the charging station map interface (redirect to Google Maps for station locations).
Day 8: Create the user profile page with customizable preferences.
Day 9: Implement responsive design and basic styling.
Day 10: Test and refine frontend components.


### Week 3: Backend Development
Day 11: Set up the Express server and connect MongoDB.
Day 12: Create APIs for user management (signup, login, profile updates).
Day 13:  Build charging station data APIs (fetch station info, availability, pricing).
Day 14: Test API endpoints with Postman and ensure error handling.
Day 15: Connect frontend with backend APIs.

### Week 4: Integration and testing 
Day 16: Implement real-time station availability and pricing updates.
Day 17: Add user authentication and session management.
Day 18: Test end-to-end functionality.
Day 19: Collect feedback from potential users and refine UX/UI.
Day 20: Finalize core features and ensure stability.

### Week 5: Deployment 
Day 21: Deploy backend on cloud platform
Day 22: Deploy frontend on Netlify
Day 23: Test deployment and fix deployment-specific issues.
Day 24: Test one last time and submit the project.


## Frontend Deployed link : https://inszappp.netlify.app/
