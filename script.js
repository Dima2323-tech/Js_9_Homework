window.onload = () =>{

    // 1) Створити 100 елементів div зі стилями (задані через js стилі) при кліку на елемен, він повинен змінити бекграунд на червоний.
    let divContainer = document.createElement('div')
    divContainer.setAttribute('class' , 'container')
    document.body.appendChild(divContainer)

    let divFirst = document.createElement('div')
    divFirst.setAttribute('class' , 'divFirst')
    divFirst.setAttribute('style' , 'display:flex ; flex-direction:row ; margin-bottom: 100px')
    divContainer.appendChild(divFirst)
    for (i = 0 ; i < 100 ; i++){
        let divBlock = document.createElement('div')
        divBlock.setAttribute('class' , 'divBlock')
        divBlock.setAttribute('style' , 'width:50px ; height:30px ; margin-right:5px; border:2px solid black')
        divFirst.appendChild(divBlock)

        divBlock.addEventListener('click' , function (){
            this.style.backgroundColor = 'red'
        } , true)
        // Додаткове завдання.
        //   2) В першому завданні зробити функціонал, якщо натиснути ctrl і зроблений клік, елемент видаляється або зникає
        divBlock.addEventListener('click' ,function ctrl(event){
            if (event.ctrlKey){
                divBlock.remove()
            }
        } )
    }



    //2) Створити кнопку, по натисканню на кнопку повино зявлятись модальне вікно, в модалці повинна бути кнопка закрити вікно.
    // Під модальним вікном повиний бути блок підкладка при кліку на який модальне вікно закривається

    let divModalContainer = document.createElement('div')
    divModalContainer.setAttribute('class' , 'divModalContainer')
    divModalContainer.setAttribute('style' , 'margin-bottom:100px')
    divContainer.appendChild(divModalContainer)

    let btnModal = document.createElement('button')
    btnModal.setAttribute('class' , 'btnModal')
    btnModal.innerHTML = 'Кнопка Модального Окна'
    divModalContainer.appendChild(btnModal)

    let divModal = document.createElement('div')
    divModal.setAttribute('class' , 'divModal')
    divModalContainer.appendChild(divModal)

    let hideDiv = document.createElement('div')
    hideDiv.setAttribute('class' , 'hideDiv')

    divModalContainer.appendChild(hideDiv)

    let btnClose = document.createElement('button')
    btnClose.setAttribute('class' , 'close')
    btnClose.setAttribute('style' , 'position:relative ; top:15px; left:15px ; display:none')
    btnClose.innerHTML = 'Close Btn'
    divModal.appendChild(btnClose)

    btnModal.onclick = function() {
        divModal.style = "position: fixed; left: 700px; margin: 0 auto ; width:400px; height:300px; background-color:red; z-index:3";
        btnClose.style.display = 'block'
        hideDiv.style = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index:2 ';
    }

    btnClose.onclick = function() {
       divModal.style.display = "none";
       hideDiv.style.display = "none"
    }

    window.onclick = function(event) {
        if (event.target == hideDiv) {
            divModal.style.display = "none";
            hideDiv.style.display = "none"
        }
    }

    // 3) Створити слайдер, через 2 секунди в ньому повино мінятись зображення
    let slider = document.createElement('div')
    slider.setAttribute('class' , 'slider')
    slider.setAttribute('style' , 'margin: 0 auto ; overflow:hidden; width:333px ; height:300px')
    divContainer.appendChild(slider)

    let slide = document.createElement('div')
    slide.setAttribute('class' ,'slide')
    slide.setAttribute('style' , 'display:flex ; position:relative ;width:auto; height:254px; margin: 0 25px ; transition:all ease 0.5s')
    slider.appendChild(slide)

    let arrSlidePhoto = ['img/323.jpg' , 'img/2323.jpg' , 'img/23232323.jpg' , 'img/2323.jpg']

    let counter = 0

    for (i=0; i<arrSlidePhoto.length; i++){
        let SliederElem = document.createElement('img')
        SliederElem.setAttribute('src' , arrSlidePhoto[i])
        SliederElem.setAttribute('style' , 'margin-left:40px')
        slide.appendChild(SliederElem)
    }

    function nextSlide(){
        counter += 300;
        if(counter > 900){
            counter = 0
        }
        slide.style.left = -counter + 'px';
    }
    setInterval(nextSlide,2000)

    // 4) Створити div  і 3 кнопки ( вперед, н  азад, вправо, вліво) при кліку на кожну з кнопок змінювати позицію кнопки ( відноно заданого напрямку на 15 рх)

    let positionContainer = document.createElement('div')
    positionContainer.setAttribute('class' , 'positionContainer')
    divContainer.appendChild(positionContainer)

    let divPosition = document.createElement('div')
    divPosition.setAttribute('class' , 'divPositon')
    divPosition.setAttribute('style' , 'width:75px ; height:75px ; background-color:black ; position:relative ')
    positionContainer.appendChild(divPosition)

    let x = 0
    let y = 0

    let leftBtn = document.createElement('button')
    leftBtn.setAttribute("class" , 'leftBtn')
    leftBtn.innerHTML = 'Left'
    positionContainer.appendChild(leftBtn)

        leftBtn.addEventListener('click' , function (){
             x += 10
            divPosition.style.right = x + 'px'
        })

    let rightBtn = document.createElement('button')
    rightBtn.setAttribute("class" , 'rightBtn')
    rightBtn.innerHTML = 'Right'
    positionContainer.appendChild(rightBtn)

        rightBtn.addEventListener('click' , function (){
            x -= 10
            divPosition.style.right = x + 'px'
        })

    let UpBtn = document.createElement('button')
    UpBtn.setAttribute("class" , 'UpBtn')
    UpBtn.innerHTML = 'Up'
    positionContainer.appendChild(UpBtn)

        UpBtn.addEventListener('click' , function (){
            y -= 10
            divPosition.style.top = y + 'px'
        })

    let downBtn = document.createElement('button')
    downBtn.setAttribute("class" , 'downBtn')
    downBtn.innerHTML = 'Down'
    positionContainer.appendChild(downBtn)

        downBtn.addEventListener('click' , function (){
            y += 10
            divPosition.style.top = y + 'px'
        })


}