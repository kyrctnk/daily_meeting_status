# daily_meeting_status
Browser (Client)                               Node.js Server (Backend)
----------------------------------------       ---------------------------------------
| 1. User clicks on a "Yes" or "No" button   | 2. Server receives the POST request
| (for gym attendance status).               | with user's status.
|                                            | 
| 3. JavaScript fetch API sends a POST       | 
| request to the '/status' endpoint          | 4. Server processes the request:
| with user ID and attendance status.        |    - Checks if the user exists in 
|                                            |      the userStatus object.
| URL:                                       |    - Updates the user status (true or false).
| https://yourapp.glitch.me/status           |
|                                            | 
|                                            | 5. Server responds with the updated 
|                                            | userStatus object in JSON format.
|                                            | 
|                                            | Response example:
|                                            | {
|                                            |    "user1": true,
|                                            |    "user2": false,
|                                            |    "user3": true,
|                                            |    "user4": null
|                                            | }
|
|                                            |
| 6. Browser receives the updated            |
| userStatus in JSON format.                 |
|                                            |
| 7. JavaScript updates the user interface   |
| to reflect the new status.                 |
|                                            |
| 8. If the page is refreshed, a GET         | 9. Server handles GET requests
| request is sent to the same '/status'      | at the '/status' endpoint, returning 
| endpoint to retrieve the latest statuses.  | the current userStatus object.
----------------------------------------       ---------------------------------------

