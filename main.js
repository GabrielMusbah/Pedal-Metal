$(document).ready(function(){
    let bikes = [
        {name: 'ENDUREX', price: 2500, img: 'Endurex'},
        {name: 'SCORCHER', price: 1000, img: 'scorcher'},
        {name: 'CRUISER', price: 3000, img: 'cruiser'},
        {name: 'BMX', price: 500, img: 'bmx'},
        {name: 'WHIPPET', price: 2500, img: 'Whippet'},
        {name: 'TRI-CYCLES', price: 2500, img: 'TriCycles'}
    ]


    bikes.forEach(bike => {

        let template = $($(".template-card").html());

        let cardName = template.find('.card-name')

        let cardPrice = template.find('.card-price')

        let cardImd = template.find('.card-img')

        cardName.text(bike.name)

        const formartValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 3 })

        let valor = formartValue.format(bike.price)

        cardPrice.text(valor)

        cardImd.attr('src', `/img/ImgCard/${bike.img}.png`)

        let cardContainer = $('.card-container') 

        cardContainer.append(template)

    })
})

$('#button-select').on('click', function(){
    
    let bikes = [
        {name: 'BMX', price: 500, img: 'bmx'},
        {name: 'SCORCHER', price: 1000, img: 'scorcher'},
        {name: 'WHIPPET', price: 2500, img: 'Whippet'},
        {name: 'ENDUREX', price: 2500, img: 'Endurex'},
        {name: 'TRI-CYCLES', price: 2500, img: 'TriCycles'},
        {name: 'CRUISER', price: 3000, img: 'cruiser'}
    ]

    let option = $(".selec").val()

    if(option == '1'){

        $(".card-container").empty();

        let bikeCre =  bikes.sort(function (a, b) {
            return a.price - b.price;
        });
    
        bikeCre.forEach(bike => {
    
            let template = $($(".template-card").html());
    
            let cardName = template.find('.card-name')
    
            let cardPrice = template.find('.card-price')
    
            let cardImd = template.find('.card-img')
    
            cardName.text(bike.name)

            const formartValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 3 })

            let valor = formartValue.format(bike.price)
    
            cardPrice.text(valor)
    
            cardImd.attr('src', `/img/ImgCard/${bike.img}.png`)
    
            let cardContainer = $('.card-container') 
    
            cardContainer.append(template)
    
        })
    }

    if(option == '2'){

        $(".card-container").empty();
    
        let bikeDec =  bikes.sort(function (a, b) {
            return b.price - a.price;
        });
    
        bikeDec.forEach(bike => {
    
            let template = $($(".template-card").html());
    
            let cardName = template.find('.card-name')
    
            let cardPrice = template.find('.card-price')
    
            let cardImd = template.find('.card-img')
    
            cardName.text(bike.name)

            const formartValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 3 })

            let valor = formartValue.format(bike.price)
    
            cardPrice.text(valor)
    
            cardImd.attr('src', `/img/ImgCard/${bike.img}.png`)
    
            let cardContainer = $('.card-container') 
    
            cardContainer.append(template)
    
        })
    }
    
})

