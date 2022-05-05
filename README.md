# <b>ADHD Facts App</b>
*This application is single page, meaning only one HTML file, the text content viewable by the user, is used. CSS and Javascript are used for styling and DOM manipulation.*"
## <i>Getting Around</i>
There are 5 separate event listeners, one used for page load notification and the others for navigation.

## <i>JSON Server</i>
Data was collected and compiled from web sources into the attached db.json file. The application is programmed so the user can navigate from, and back to the home page, the facts page, and the about me page. When the user clicks on the "Read the Facts" button, a list of 10 facts about ADHD, fetched from the attached db.json file, are iterated through using javascript and then rendered to the facts page.

## <i>User Input</i>
The user can share their input (feedback, story, etc.) by populating a simple form that captures their data, posts it to the db.json file and renders their new comment to the page. This data will persist to the local JSON Server and is now viewable by the current user and to future users.

## <b><u>Run the Application</u></b>
<i>To run this application:</i>
1.  go to https://github.com/ROsmundson/adhd-spa
2.  locate and click the "code" button
3.  copy the SSH version of the provided link address.
4.  create and name a local directory ("mkdir name-of-file") in your computer's terminal, then clone the repo to that file:
    - type "get clone https://github.com/ROsmundson/adhd-spa"
    - open your new directory and enter command "code ."<br><br>
    
    <i>You now have access to the application files.</i><br><br>

5. <b><u>To make the page interactive</u></b> , go to your terminal, navigate to the correct file, enter command "json-server -w db.json" into your terminal. You now have access to the facts database and the page is interactive.</b>
6. type 'open index.html to view the application.

Content was collected from the following ADHD related websites:
<br>
  <cite>
    <a href="https://chadd.org/about-adhd/overview/#:~:text=Attention%2Ddeficit%2Fhyperactivity%20disorder%20(,of%20inattention%2C%20impulsivity%20and%20hyperactivity./">chadd.org
    </a>
  </cite>
<br>
  <cite>
    <a href="https://add.org/adhd-facts">add.org/adhd-facts>
    </a>
  </cite>
<br>
  <cite>
    <a href="https://www.additudemag.com/adhd-myths-and-facts-learn-the-truth-about-attention-deficit/">additudemag.com
    </a>
  </cite>
<br>
  <cite>
    <a href="https://www.additudemag.com/adhd-myths-and-facts-learn-the-truth-about-attention-deficit/">additudemag.com
    </a>
  </cite>
<br>
  <cite>
    <a href="https://villadevida.org/blog/2020-10-19-adhd">villadevida.org/blog September 19, 2020
    </a>
  </cite>
<br>
  <cite>
    <a href="https://www.mayoclinic.org/diseases-conditions/adult-adhd/symptoms-causessyc-20350878">mayoclinic.org/adult-adhd
    </a>
  </cite>
<br><br>
Thank you. I had a great time putting my first SPA together!!
--------------------
