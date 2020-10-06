const $botaoPlay = document.querySelector('.play')
const $botaoPause = document.querySelector('.pause')

$botaoPlay.addEventListener('click', () => {
    $botaoPause.classList.toggle('hide')
    $botaoPlay.classList.toggle('hide')

    const selectRate = document.querySelector('#rate')
    const rate = selectRate.options[selectRate.selectedIndex].value

    const selectIdioma = document.querySelector('#voz')
    const voz = selectIdioma.options[selectIdioma.selectedIndex].value
    
    const $textarea = document.querySelector(".campo-texto").value
    responsiveVoice.speak($textarea, voz, {rate: rate});
})

$botaoPause.addEventListener('click', () => {
    $botaoPause.classList.toggle('hide')
    $botaoPlay.classList.toggle('hide')
    responsiveVoice.cancel();
})