# Travelo Tour Planner

My project site link: (https://tour-planner-e58a4.web.app/).

## Simple React Project

In the project, I try to build MPA using react-router, context api, firebase for authentication, used css framework bootstrap for responsive site and mongodb and express for database.

### React authentication and database

In the project, I try to authenticate users by google. I used firebase authentication approach. I also do private route authentication for specific page. Then i used node js, express js for server side and mongodb for database side.

### Context api and Custom hook

In the project, I used one custom hook for firebase authentication approaches. Then lastly i used alternative of custom hook, context api for whole app control. Context api used custom hooks data and handle all code easily from app.

### My project Concepts and features

I try to build a simple react MPA based on Travel Planner related information. In my project, Header section shows navigation of home,login first, then after login user logout, my booking, manage all booking and add new service will show. Header and Footer section is same for all pages.
Body section will change depending on page switch. In home page, At first top section start with title and banner then there are some cards of tour services. When click any card book now button it will navigate to another page for more details and booking form. Details page is private route, after login user can show all details. Then in my booking  page, user will there booked service and they can cancel any services.In manage all booking page, it is mainly handle by page admins they can see all booked services and they can remove any service. Also In add new service page, it is also mainly handle by page admins they can add any new service in home page using form.Lastly for authentication login option here, user can use google for login  After user login their name will appear in header section. We used no fake data here. we directly used data from mongodb database. User when try to visit any page that does not exist site will show 404 error.

In future, I will try to add more features in site and update my MPA.

