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
    })
})

let toggleActive = function(listOfElements, selectedElement) {
    listOfElements.forEach(element => {
        element.classList.remove('active')
    })
    selectedElement.classList.add('active')
}

/* --- Toggle Drop Content Section --- */
let contentSectionsTitles = document.querySelectorAll('.content-section .title')

contentSectionsTitles.forEach(contentSection => {
    contentSection.addEventListener('click', function(e) {
        let selectedContentSection = e.target.parentElement.parentElement
        selectedContentSection.classList.toggle('active')

        e.target.tagName === 'I' ? console.log(e.target) : console.log(e.target.nextElementSibling)
        if (e.target.tagName === 'I') {
            if (e.target.className === 'fas fa-chevron-down') {
                e.target.className = 'fas fa-chevron-up'
            }
            else e.target.className = 'fas fa-chevron-down'
        } 
        else {
            if (e.target.nextElementSibling.className === 'fas fa-chevron-down') {
                e.target.nextElementSibling.className = 'fas fa-chevron-up'
            }
            else e.target.nextElementSibling.className = 'fas fa-chevron-down'
        }
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
