$(document).ready(function() {
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        $('html').addClass('safari')
    }




//     $('div .main-slogan1').css('background-color', 'blue')
//     $('.main-slogan1, a').fadeOut(5000) //fedeOut - powoli znika przez 5 sekund

//     setTimeout(function(){ //opóżnij tą fukcje o 5000 czasu. Function to handler(cos co ma sie wykonać)
//         $('.main-slogan1').fadeIn() //fadeIn zanimuj na wejscie, a FadeOut zanimuj na wyjscie

//     }, 5000)



//     $('a').attr('href', 'http://google.com') //attr zmienia wartość atrybutu

//     $('a').css('cursor', 'copy') //zmieniam css czyli atrybut o nazwie cursor na wartosc copy


//     $('.main-slogan1').on('click', function() {
//         $('.sub-slogan2').slideToggle()
//     }) //pojawia się tekst i znika 



//     $('.main-slogan1').on('click', function() {
//         $('.logoFOCUSS').hide()
//     })

//     $('.sub-slogan2').on('click', function() {
//         $('.logoFOCUSS').show()
//     })

//     $('.sub-slogan2').show()

//     $('.priceHeader p').on('click', function() {
//         // $('.picture').attr('src', './focusson-images/analizowany.png') //sciezka wzgledem nie pliku js ale indeksu- wzgledem pliku który jest obecnie wysietlony (ma sie tam pojawić)
//         // $('.picture:first').attr('src', './focusson-images/analizowany.png') //dodaje pseudoklase :first bo ona sprawi że zmnieni mi sie tylko pierwsze zdjęcie na stornie które ma tę klasę z 4 na stronie (cztery monitory koło siebie)
//         // $('.picture:last').attr('src', './focusson-images/analizowany.png') //zmieniam tylko ostatni element z plasą .picture ale NA CAŁEJ STRONIE - czyli jak kilka razy użytą klase to wybierze ostatni ktory ma go na stornie
//         // $('.picture').last().attr('src', './focusson-images/analizowany.png') //drugi przyklad z lastem i tak samo można dać firt (mniej wydajny ale to z czasem!)
//         // $('.screensWrap div div:nth-child(1) .picture').attr('src', './focusson-images/analizowany.png') //drugi przyklad z lastem i tak samo można dać firt (mniej wydajny ale to z czasem!)
//     }) 

//     $('.picture').on('click', function() {
//         // $('.sectionTools').css('background-image', 'url(./focusson-images/analizowany.png)')//adres do zdjęcia identyczne jak w css. I UWAGA SPRAWDZIC CZY ZDJECIE NA BACGROUNDZIE CZYLI W CSS CZY W HTML, BO JAK W HTML TO ATTR.

//         // Opcja 1 - bezposrednia, w jednej linijce
//         $('.sectionTools').css('background-image', 'url(' + $(this).attr('src') + ')') //


//         // Opcja 2 - rozbite na kawalki
//         var sciezka = $(this).attr('src') // prosimy jquery o wartosc atrybutu 'src' z obecnego (this) elentu - tego na ktprego kliknelam
//         // focusson-images/analizowany.png   to u gory daje nam tylko to po lewej

//         var prefix = 'url('
//         var sufix = ')'
       
//         var pelnaSciezka = prefix + sciezka + sufix // skladamy cala sciezke z elementow 
//         // var pelnaSciezka = 'url(' + sciezka + ')'
//         // 'url(./focusson-images/analizowany.png)' // chcemy taka sciezke i skladamy ja z elementow

//         $('.sectionTools').css('background-image', pelnaSciezka) // podstawiamy wartosc z wiaderka (zmiennej) pelna sciezka do cssa
//     })

//     // $('.logoFOCUSS').on('click', function(){
//     //     alert($('#name').val())//val to wartośc valiu
//     // })

//     // $('.logoFOCUSS').on('click', function(){
//     //     $('.logoFOCUSS').text($('#name').val())//po wpisaniu cos w formularz to zostaje jakby logiem
//     // })

//     $('#name').on('keyup', function(){
//         $('.logoFOCUSS').text($('#name').val())//W ELEMENCIE LOGOFOCUSSON USTAWILA TEKT O WARTOSCI Z INPUTA NAME
//     })

})



// console.log(2)


