// Pulls the browser's built-in speech synthesis function to say a greeting aloud

function christmasGreet (name) {
    let utterance = new SpeechSynthesisUtterance(`Merrrrry Christmas ${name}!`)
    var voices = window.speechSynthesis.getVoices()
    utterance.voice = voices[0]
    window.speechSynthesis.speak(utterance)
  }