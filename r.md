<img src="/i/Cindyfive.png" width="129">

# SinDy V.69 

This project is being developed. This is a web-based voicebot built with ~~api.ai~~ [Dialogflow](https://api.ai) backend. It implements a static client app, and tries to communicate through natural language dialog and webhook interface.

## Demo

This is running at [nullality.github.io](https://nullality.github.io)

## But why?

Many people suffer from different __stress disorders__ ranging from PTSD to General Anxiety. This project came from a real world need. I hope to apply natural language coding, and multiple technologies into a self contained audio recognition mobile diagnostic assistant with varying range of portability and form solidarity. While it may not work 'out-the-box' entirely for everyone, (or anyone for a while,) my goal is to help achieve an assistive AI that can help others in [but not limited to] grounding, disengaging, coping, identifying triggers and even building better habits. 

 
 Please feel free to message me with support, comments, suggestions, inquiries, or even donations = p I'd love help!  

------------------    
## Implementations / Global Body
* __1 :__ Simple Web App
* __2 :__ React Native App
* __3 :__ Embedded System
  * __A :__ Raspberry Pi 3 + Google AIY Board
  * __B :__ Raspberry Pi Zero W + Pimoroni Speaker board  
* __4 :__  Configure extensions  
  * __A :__ Alexa Skill
  * __B :__ Facebook Messenger Bot
  * __C :__ Slack Messenger Bot   
  
### Goals for Sindys' Capabilities
 * Recognizes your voice, responds.
 * Relief
   * Plain old Distraction
     * Small Talk 
     * Webhooks for Videos / app suggestions
   * Venting
     * Record note entry
     * Create Worry List from note entry
     * Export / save list
   * Grounding
	 * Mental
		* Play Simple Game
  			* Suggestions e.g. Flappybird
  			* Snake, Rock Paper Scissors, puzle, a self contained game?
		* Play deeper game 
  			* Suggestions e.g. Stranger things 2
		* Say statements
  			* Name 5 olympic sports, 5 types of dog, 5 green things in the room, etc..
  			* Affirmation Statements
		* Read something
  			* Poems, Speeches, Philosophy excerpts from public domain.
  			* Suggestions, articles, reddit.
		* Watch / Listen to Something
  			* Youtube (Cat Videos, Cute or Funny videos, People playing video games, Music)
  			* Music app / suggestions
  			* Built in atmospheric sounds or suggestion to other app (rain, meadow, ocean, soothing sounds).
	 * Physical
		 * suggestion to other app
  		 * Breathing exercises 
  		 * Touch various objects around you.
    	   * e.g. What texture do you feel? Something else, is it colder? smoother? continue for 5 instances.
----------

## General 'What's next'?  

### Sindys' Conversation Capabilities:  
 * Learn your name, or hold small bits of preferencial information.
 * Transcribe / save notes
 * Webhooks i.e. Youtube, 'smarter' weather, calendar(?)  
 
### __1:__  
 * Create multiple interval for listening events
 * Create 'stop' button for Sindy to STFU
 * Proper Cards for display of image/link?  
 * Adding more style code  
 
### __2:__  
 * Start Building.  
 
### __3.A:__   
* Create Startup / Shutdown scripts
* Change identifier from 'Okay Google' to 'Okay Sindy' or 'I need help!'
* Get a better power supply
* Be able to: Boot, run headless, run Sindy, shut down on command.  

### __3.B:__  
* Mimic __3.A__ 
* assign GPIO for button / create route for identifier / add addEventListener in app.js etc..   

### __4:__  
* Start Building  

------------
 
 ### Version /  Deployment Status.  
 * __V.69__ Just after my Birthday 'Break'.  
 	* Added simple weather webhook only does weather today, must have location in query.  
 	* GA Update  
	* Added .CTreply Timestamp - Doesn't fuckign work after first reply.  
	* Testing Sindy, using test subjects to refine context and flows.
	* Removed chrome authentication in app.js. For whatever reason mobile chrome on oreo was not verifying as chrome so fuuckkiiitt..
   It will still verify if you have speech synthesis, etc.. but at least it won't get denied just for chrome.
	* Update to __3.A__ Purchased, received, set up RPi 3(B) with Google AIY Board and Dev Kit
		* Assembled, running, works with initial identifier "Okay Google" and button tests. Communicates.
		
	* Update to __3.B__ mimicing movements of __3.A__ except sometimes it doesn't go as well lol.
	* Rewrote README files.
	
 * __V.5__ 
	* Design / apply temporary logo, reassign bot svg.
	* Add some style code
	* Added / Fine tuned nullality.github.io/r
	* Update to __3.B__ found issue, amperage drop in charger = (
		* Need new 5v ~2.5a charger (didn't find one at goodwill yet)
		* Works with USB battery dedicated 2a charger. Temporary Success = )  
 * __V.4__ 
	* Adjusted speech intervals a bit (still needs fine tuning).
    * Added style code - rainbow motion gradient.
 * __V.3__
	* Started Github Repo, README file this
    * Update to __3.B__ Purchased, received, set up RPi Zero W with Pimoroni Speaker pHat and misc button.
		* OS, audio interface all set up. Running into issues.
		* Troubleshooting
	* Wrote ~15 pages of dialogue that needs to be transcribed into API.AI / Dialogflow
    * Researching. Researching. Researching.
 
 #### Random unsorted thoughts
* Python Library for RPi
* Use AIML at all?
* Touch screen enabled raspberry pi? 
* Design website / landing for whole project (don't really want to focus on this right now.)
 
~~[RPi Research Wishlist](https://github.com/nullality/nullality.github.io/blob/master/RPiList.md)~~

## Android Apps I used for resources / inspiration. 
 * AFA Grounding by Boud Digital
 * Break Free by Abele Apps
 * PTSD Coach by US Dept of Veterans Affairs (VA)

### Huge Credit
#### Original Design - [Voicebot by Jaanus](https://github.com/jaanus/voicebot)
#### Backend - ~~api.ai~~ [Dialogflow](https://www.api.ai/)
