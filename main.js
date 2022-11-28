$(document).ready(function(){
    let bikes = [
        {name: 'ENDUREX', price: '$2.500', img: 'Endurex', value: '3'},
        {name: 'SCORCHER', price: '$1.000', img: 'scorcher', value: '2'},
        {name: 'CRUISER', price: '$3.000', img: 'cruiser', value: '4'},
        {name: 'BMX', price: '$500', img: 'bmx', value: '1'},
        {name: 'WHIPPET', price: '$2.500', img: 'Whippet', value: '3'},
        {name: 'TRI-CYCLES', price: '$2.500', img: 'TriCycles', value: '3'}
    ]


    bikes.forEach(bike => {

        let template = $($(".template-card").html());

        let cardName = template.find('.card-name')

        let cardPrice = template.find('.card-price')

        let cardImd = template.find('.card-img')

        cardName.text(bike.name)

        cardPrice.text(bike.price)

        cardImd.attr('src', `/img/ImgCard/${bike.img}.png`)

        let cardContainer = $('.card-container') 

        cardContainer.append(template)

    })
})

$('#button-select').on('click', function(){
    

    let option = $(".selec").val()

    if(option == '1'){

        $(".card-container").empty();

        let bikes1 = [
            {name: 'BMX', price: '$500', img: 'bmx', value: '1'},
            {name: 'SCORCHER', price: '$1.000', img: 'scorcher', value: '2'},
            {name: 'WHIPPET', price: '$2.500', img: 'Whippet', value: '3'},
            {name: 'ENDUREX', price: '$2.500', img: 'Endurex', value: '3'},
            {name: 'TRI-CYCLES', price: '$2.500', img: 'TriCycles', value: '3'},
            {name: 'CRUISER', price: '$3.000', img: 'cruiser', value: '4'}
        ]
    
    
        let bikeCre =  bikes1.sort(function (a, b) {
            if (a.value > b.value) {
              return 1;
            }
            if (a.value < b.value) {
              return -1;
            }
            return 0;
        });
    
        bikeCre.forEach(bike => {
    
            let template = $($(".template-card").html());
    
            let cardName = template.find('.card-name')
    
            let cardPrice = template.find('.card-price')
    
            let cardImd = template.find('.card-img')
    
            cardName.text(bike.name)
    
            cardPrice.text(bike.price)
    
            cardImd.attr('src', `/img/ImgCard/${bike.img}.png`)
    
            let cardContainer = $('.card-container') 
    
            cardContainer.append(template)
    
        })
    }

    if(option == '2'){

        $(".card-container").empty();

        let bikes2 = [
            {name: 'BMX', price: '$500', img: 'bmx', value: '1'},
            {name: 'SCORCHER', price: '$1.000', img: 'scorcher', value: '2'},
            {name: 'WHIPPET', price: '$2.500', img: 'Whippet', value: '3'},
            {name: 'ENDUREX', price: '$2.500', img: 'Endurex', value: '3'},
            {name: 'TRI-CYCLES', price: '$2.500', img: 'TriCycles', value: '3'},
            {name: 'CRUISER', price: '$3.000', img: 'cruiser', value: '4'}
        ]
    
        let bikeDec =  bikes2.sort(function (a, b) {
            if (a.value > b.value) {
              return -1;
            }
            if (a.value < b.value) {
              return 1;
            }
            return 0;
        });
    
        bikeDec.forEach(bike => {
    
            let template = $($(".template-card").html());
    
            let cardName = template.find('.card-name')
    
            let cardPrice = template.find('.card-price')
    
            let cardImd = template.find('.card-img')
    
            cardName.text(bike.name)
    
            cardPrice.text(bike.price)
    
            cardImd.attr('src', `/img/ImgCard/${bike.img}.png`)
    
            let cardContainer = $('.card-container') 
    
            cardContainer.append(template)
    
        })
    }
    
})

