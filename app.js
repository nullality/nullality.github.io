function gotoListeningState() {
  const micListening = document.querySelector(".mic .listening");
  const micReady = document.querySelector(".mic .ready");

  micListening.style.display = "block";
  micReady.style.display = "none";
}

function gotoReadyState() {
  const micListening = document.querySelector(".mic .listening");
  const micReady = document.querySelector(".mic .ready");

  micListening.style.display = "none";
  micReady.style.display = "block";
}

function addBotItem(text) {
  const appContent = document.querySelector(".app-content");
  appContent.innerHTML += '<div class="item-container item-container-bot"><div class="item"><p>' + text + '</p></div></div>';
  appContent.scrollTop = appContent.scrollHeight; // scroll to bottom
}

function displayCTReply() {
  const timeContent = document.querySelector(".time-indicator-content-2");
  const d = new Date();
  const s = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  timeContent.innerHTML = s;
}
var timeStampp = '<div class="time-indicator-2"><div class="time-indicator-content-2"></div><hr /></div>';

function addUserItem(text) {
  const appContent = document.querySelector(".app-content");
  appContent.innerHTML += timeStampp + '<div class="item-container item-container-user"><div class="item"><p>' + text + '</p></div></div>';
  displayCTReply();
  appContent.scrollTop = appContent.scrollHeight; // scroll to bottom
}

function displayCurrentTime() {
  const timeContent = document.querySelector(".time-indicator-content");
  const d = new Date();
  const s = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  timeContent.innerHTML = s;
}

function addError(text) {
  addBotItem(text);
  const footer = document.querySelector(".app-footer");
  footer.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function(event) {

  // test for relevant API-s
  // for (let api of ['speechSynthesis', 'webkitSpeechSynthesis', 'speechRecognition', 'webkitSpeechRecognition']) {
  //   console.log('api ' + api + " and if browser has it: " + (api in window));
  // }

  displayCurrentTime();

  // check for Chrome

  if (!('speechSynthesis' in window)) {
    addError("Your browser doesn’t support speech synthesis. This demo won’t work.");
    return;
  }

  if (!('webkitSpeechRecognition' in window)) {
    addError("Your browser cannot record voice. This demo won’t work.");
    return;
  }

  // Now we’ve established that the browser is Chrome with proper speech API-s.

  // api.ai client
  const apiClient = new ApiAi.ApiAiClient({accessToken: '52d1e346eb464870aff0ff578ee153bd'});

  // Initial feedback message.
  addBotItem("Hi! I’m Sindy. I'm in development, but feel free to tap the microphone and start talking to me.");

  var recognition = new webkitSpeechRecognition();
  var recognizedText = null;
  recognition.continuous = false;
  recognition.onstart = function() {
    recognizedText = null;
  };
  recognition.onresult = function(ev) {
    recognizedText = ev["results"][0][0]["transcript"];

    addUserItem(recognizedText);
    ga('send', 'event', 'Message', 'add', 'user');

    let promise = apiClient.textRequest(recognizedText);

    promise
        .then(handleResponse)
        .catch(handleError);

    function handleResponse(serverResponse) {

      // Set a timer just in case. so if there was an error speaking or whatever, there will at least be a prompt to continue
      var timer = window.setTimeout(function() { startListening(5000); }, 22000);

      const speech = serverResponse["result"]["fulfillment"]["speech"];
      var msg = new SpeechSynthesisUtterance(speech);
      addBotItem(speech);
      ga('send', 'event', 'Message', 'add', 'bot');
      msg.addEventListener("end", function(ev) {
        window.clearTimeout(timer);
        startListening();
      });
      msg.addEventListener("error", function(ev) {
        window.clearTimeout(timer);
        startListening();
      });

      window.speechSynthesis.speak(msg);
    }
    function handleError(serverError) {
      console.log("Error from api.ai server: ", serverError);
    }
  };

  recognition.onerror = function(ev) {
    console.log("Speech recognition error", ev);
  };
  recognition.onend = function() {
    gotoReadyState();
  };

  function startListening() {
    gotoListeningState();
    recognition.start();
  }

  const startButton = document.querySelector("#start");
  startButton.addEventListener("click", function(ev) {
    ga('send', 'event', 'Button', 'click');
    startListening();
    displayCTReply();
    ev.preventDefault();
  });

  // Esc key handler - cancel listening if pressed
  // http://stackoverflow.com/questions/3369593/how-to-detect-escape-key-press-with-javascript-or-jquery
  document.addEventListener("keydown", function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key == "Escape" || evt.key == "Esc");
    } else {
        isEscape = (evt.keyCode == 27);
    }
    if (isEscape) {
        recognition.abort();
    }
  });


});
