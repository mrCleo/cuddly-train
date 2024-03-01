# URBAN BOULEVARD EVENT SPACE BOOKER
Urban Boulevard is a concise, straightforward booking system allowing for users looking for event spaces for hosting of events and activities to browse the range of spaces included and with a simple few clicks, successfully enabling the reservation of a specific venue at the desired date and time.
## CORE FUNCTIONALITIES
### LOGIN PAGE
![image](https://github.com/wzngekj/EventSpaceBooker/assets/147592707/f2db5a7a-a0c5-491a-a9ae-ac3eb3e1ab7c)
![image](https://github.com/wzngekj/EventSpaceBooker/assets/147592707/532f6c95-5bb1-4a79-87b5-42bf664314dd)
- On loading of the flask application, users are routed to `"/"` where `login.html` is loaded
- Offers the basic functionalities of a login page, inclusive of signing in with the user's distinct email and his password
  * A key feature implemented is the toggling of the eye icon switching from eye-no-slash and eye-slash allowing the user to conceal and reveal the password
- Upon submitting the form, 2 kinds of backend verification are conducted by querying using SQL on the credentials table in `credentials.db`
  * To check for valid email, if no valid email is found, the system redirects the user to `relogin.html` where the page prompts the user to re-enter the password and username, displaying an incorrect password or username message
  * After a valid email is found, the system further checks if the password registered and associated with the matches with the password input, if not `relogin.html` is rendered. In this software, a library specialising in giving hashing functions is used and each password when registered is hashed with a hashing algorithm, in which in the login page, can be checked by passing the user's password input into the `check_password_hash` and if hashed and matches the password in the database, is guranteed entry
- Upon successful authentication, the user is redirected to `"/area"`
  * session is used in the software for temporary memory logging
- If the user is new and wishes to register, a click on the `Register Now` will bring the user to the register page from `register.html` by the re-routing to `/register`
### RELOGIN PAGE
![image](https://github.com/wzngekj/EventSpaceBooker/assets/147592707/56ae2f2e-bc9e-4a57-b8f0-b38bb34adc8f)
### REGISTER PAGE
![image](https://github.com/wzngekj/EventSpaceBooker/assets/147592707/9663236a-ccac-4cef-a3c8-592e6fd9e6cf)
- Disabled register button as conditions are not met
![image](https://github.com/wzngekj/EventSpaceBooker/assets/147592707/4a5103f1-651b-40b7-9de0-dd7e937ec7f0)
- Register button enabled
![image](https://github.com/wzngekj/EventSpaceBooker/assets/147592707/b0fc97b7-1857-4629-8970-30736aca261b)
- Prompt after clicking register
![image](https://github.com/wzngekj/EventSpaceBooker/assets/147592707/121d22e4-ba4c-48b6-b839-6cd75542734a)
- Users are routed to the register page by `"/register"`
- Mandates the fundamentals of a register page, including the name, email, password and re-enter password fields
- There are multiple key features starting with the red bolded `INVALID EMAIL!` and `WEAK PASSWORD!` message, and the disabled button to prevent unsuccessful registration. The disabled register button will be enabled when the below conditions are met
  * `Condition 1`: Javascript used to verify if the name field has NULL input. Upon valid input, the boolean condition1 is true
  * `Condition 2`: Javascript and RegEx is used to verify if the email input ends with a specific pattern ` pattern = ".+@.+\.com"`. Upon valid pattern, condition 2 is true and additionally, the `INVALID EMAIL!` will disappear
  * `Condition 3`: Javascript is used to verify whether the password entered is strong enough, in which in the software, is determined by the length. Once the password is longer than 8 characters, the `WEAK PASSWORD!` will disappear and this condition is now true.
  * `Condition 4`: Lastly, javascript is used to verify whether the 2 password field matches, if valid the last condition is true and the register button is enabled. At the top has demonstrated a few cases of the register button activation
- Password is hashed using `generate_password_hash` and stored in `credentials.db`
- Once registered, the program re-routes you back to `"/login"` and prompts you to log in with the user's new credentials
### AREA PAGE
![image](https://github.com/wzngekj/EventSpaceBooker/assets/147592707/729f6c51-a204-41f5-a92e-59b9822d2a53)
- Dropdown to view the event space
![image](https://github.com/wzngekj/EventSpaceBooker/assets/147592707/c6930600-2f1f-4493-bf57-fdf9964977ba)
- Dropdown to choose the event space
![image](https://github.com/wzngekj/EventSpaceBooker/assets/147592707/d5229392-35ae-4e09-8d6b-83f4c2f42240)
- Users can view the event spaces along with the respective details for the area by clicking on the bottom left dropdown button
- Once decided, users can lock in their choice on the bottom right dropdown menu and choose their desired event space
- Upon choosing the event space desired, users are re-routed to `"/particulars"` to fill in the necessary details from `particulars.html`
- Via the use of session, the `particulars` page will remember the event space chosen to be displayed on the page
### PARTICULARS PAGE
![image](https://github.com/wzngekj/EventSpaceBooker/assets/147592707/d102b7b2-bec3-430e-9c40-33cf4d1a19f0)
- Selection of date
![image](https://github.com/wzngekj/EventSpaceBooker/assets/147592707/55d0a1f6-640a-4c83-888e-bde7ae187c95)
- Selection of time
![image](https://github.com/wzngekj/EventSpaceBooker/assets/147592707/62f23dcf-3836-496a-a7f8-8b5f64139748)
- Invalid timing
![image](https://github.com/wzngekj/EventSpaceBooker/assets/147592707/3153deac-ac20-4713-9ec8-0acff45bc2b7)
- Overlapped timing
![image](https://github.com/wzngekj/EventSpaceBooker/assets/147592707/01a23fe1-c5f7-4c29-ad89-abb2e20f9034)
- Users essentially fill up the fields required which are `name, purpose, date, timestart and timeend`
- A feature of this page is the disabled button which has the same principles as the above making sure all fields are filled up
- Since the opening hours is only from 8am to 11pm, any invalid timing will cause the booking button to be disabled until an appropriate value is chosen
- Backend authentication is used to ensure that new bookings do not overlap the old bookings by using querying from SQL and sessions
  * By using sessions, it enables the correct database out of the 3 to be opened and queried as each session["space"] is associated with one of the database
  * SQL is then utitlized to check for overlapping and prevent the overlap, in which if the booking overlaps, a prompt will be shown to the user to pick a new timing
- Upon successful booking, users are re-routed to `"/table"`
### TABLE PAGE
![image](https://github.com/wzngekj/EventSpaceBooker/assets/147592707/38c4771d-de08-48f9-9594-d9d97eb36a17)
- `table.html` is rendered and with the help of sessions, allows the software to display the event space they chosen, therefore opening the appropriate database associated with the eventspace, in which the user can view the table displaying everyone who booked that eventspace on different dates and different timings
  * the SQL query `ORDER BY` and `ASC` is used to make sure the dates displayed are in ascending order
- Once the user is satisfied, the user can press log out which redirects the user back to `login.html` with the session cleared
## FILE STRUCTURE
- `Templates`
  * `login.html`: For logging in
  * `relogin.html`: For reprompting of incorrect password or username
  * `register.html`: For registering
  * `area.html`: For choosing of venue
  * `particulars.html`: For filling of event space and confirmation of booking
  * `table.html`: For viewing other bookings
  * `templates.html`: For easy "copy and pasting" of html file structure using jinja for files that have roughly the same outline
- `Static`
  * Contains all images required
  * `script.js`: To handle events
  * `styles.css`: To handle styling
- `Data`
  * `credentials.db`: To handle the username and password authentication
  * `bookingsX.db`: To handle the particulars of users who book event space X at a specific date and timing
- `Framework`: Flask
- `Additional libraries`
  * `Bootstrap`








