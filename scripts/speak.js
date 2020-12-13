function christmasGreet (name) {
    let utterance = new SpeechSynthesisUtterance(`Merry Christmas, ${name}!`)
    var voices = window.speechSynthesis.getVoices()
    msg.voice = voices[0]
    window.speechSynthesis.speak(utterance)
  }