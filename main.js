/* --- Toggle Content Displayed --- */
let conceptList = document.querySelectorAll('.concept-list li')
let conceptIcons = document.querySelectorAll('.concept-list li i')
let contentList = document.querySelectorAll('.content-container > div')

conceptList.forEach(concept => {
    concept.addEventListener('click', function(e) {
        let selectedConcept = e.target.parentElement
        let selectedConceptIcon = e.target.previousElementSibling
        let selectedContent = document.getElementById('contenido-'+selectedConcept.id)

        toggleActive(conceptList, selectedConcept)
        conceptIcons.forEach(icon => icon.classList.replace('fas', 'far'))
        selectedConceptIcon.classList.replace('far', 'fas')

        toggleActive(contentList, selectedContent)

        document.querySelector('.content-container').scrollTop = 0
    })
})

let toggleActive = function(listOfElements, selectedElement) {
    listOfElements.forEach(element => {
        element.classList.remove('active')
    })
    selectedElement.classList.add('active')
}

/* --- Toggle Drop Content Section --- */
let contentSectionsTitles = document.querySelectorAll('.content-section .title h2')

contentSectionsTitles.forEach(contentSection => {
    contentSection.addEventListener('click', function(e) {
        let selectedContentSection = e.target.parentElement.parentElement
        selectedContentSection.classList.toggle('active')

        // if (e.target.tagName === 'I') {
        //     if (e.target.className === 'fas fa-chevron-down') {
        //         e.target.className = 'fas fa-chevron-up'
        //     }
        //     else e.target.className = 'fas fa-chevron-down'
        // } 
        // else {
        //     if (e.target.nextElementSibling.className === 'fas fa-chevron-down') {
        //         e.target.nextElementSibling.className = 'fas fa-chevron-up'
        //     }
        //     else e.target.nextElementSibling.className = 'fas fa-chevron-down'
        // }
        if (e.target.nextElementSibling.className === 'fas fa-chevron-down') {
            e.target.nextElementSibling.className = 'fas fa-chevron-up'
        }
        else e.target.nextElementSibling.className = 'fas fa-chevron-down'
    })
})

/* --- Top Arrow --- */
let topArrow = document.querySelector('.topArrow')

window.addEventListener('scroll', function() {
    if (window.scrollY > 600) {
        topArrow.classList.add('active')
    } else {
        topArrow.classList.remove('active')
    }
})

topArrow.addEventListener('click', function() {
    window.scroll({top: 0, behavior: 'smooth'})
})

/* --- Cards Animations --- */
let homeHeader = document.querySelector('.home-header')
let aboutMe = document.querySelector('.about-me')
let aboutPortfolio = document.querySelector('.about-portfolio')
let activityGallery = document.querySelector('.activity-gallery')

window.addEventListener('load', function() {
    showCascade(homeHeader, 400, 450)
})

window.addEventListener('scroll', function() {
    if (window.scrollY > 200 && aboutMe.classList.contains('hidden')) {
        showCascade(aboutMe, -250, 500)
    }
    if (window.scrollY > 800 && aboutPortfolio.classList.contains('hidden')) {
        showCascade(aboutPortfolio, -300, 350)
    }
    if (window.scrollY > 1700 && activityGallery.classList.contains('hidden')) {
        showCascade(activityGallery, -300, 300)
    }
})

let showCascade = function(element, initialTimeout, timeoutSteps) {
    let timer = initialTimeout

    element.classList.remove('hidden')
    element.classList.remove('hidden-left')
    element.classList.remove('hidden-right')

    Array.from(element.children).forEach(child => {
        if (child.classList.contains('body')) {
            Array.from(child.children).forEach(grandchild => {
                timer += timeoutSteps
                window.setTimeout(function() {
                    grandchild.classList.remove('hidden')
                }, timer)
            })
        } else {
            timer += timeoutSteps
            window.setTimeout(function() {
                child.classList.remove('hidden')
            }, timer)
        }
    })
}
