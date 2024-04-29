 const video = document.querySelector('#video')
    const play = document.querySelector('#play')
    const pause = document.querySelector('#pause')
    const backward = document.querySelector('#backward')
    const fordward = document.querySelector('#fordward')
    
    play.addEventListener ('click', handlePlay)
    pause.addEventListener ('click', handlePause)

    function handlePlay () {
      video.play()
      play.hidden = true
      pause.hidden = false
      console.log ('le diste click al botón de play')
    }

    function handlePause () {
      video.pause()
      pause.hidden = true
      play.hidden = false
      console.log ('le diste click al botón de pause')
    }

    backward.addEventListener ('click', handleBackward)

    function handleBackward () {
        // video.currentTime = video.currentTime - 10
        video.currentTime -= 10
        console.log('para atras 10 segundos', video.currentTime)
    }

    fordward.addEventListener ('click', handleFordward)

    function handleFordward () {
        video.currentTime = video.currentTime + 10
        console.log('para Adelante 10 segundos', video.currentTime)
    }

    const progress = document.querySelector ('#progress')

    video.addEventListener ('loadedmetadata', handleLoaded)
    video.addEventListener ('timeupdate', handleTimeupdate)
   
    function handleLoaded () {
      progress.max = video.duration
      console.log ('Ha cargado mi video', video.duration)
    }

    function handleTimeupdate () {
      progress.value = video.currentTime
      // console.log ('tiempo actual', video.currentTime)
    }

    progress.addEventListener('input', handleInput)

    function handleInput () {
      video.currentTime = progress.value
      console.log (progress.value)
    }