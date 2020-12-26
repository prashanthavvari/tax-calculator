let taxService;

window.onload = function () {
    document.querySelector('#salary_total').value = 0;
    taxService = new FreeTaxPlanService();

}
document.querySelector('#pf_checkbox').addEventListener('change', (e) => {
    let pfEles = document.querySelectorAll('#pf');
    if (!e.target.checked) {
        pfEles[0].style.display = 'flex';
        pfEles[1].style.display = 'flex';
    } else {
        pfEles[0].style.display = 'none';
        pfEles[1].style.display = 'none';
    }
})
document.querySelector('.form-section').addEventListener('change', (event) => {
    let parentElement = event.target.parentElement.parentElement.id;
    if (parentElement === 'salary') {
        if (event.target.tagName === 'INPUT') {
            taxService.salaryObject.set(event.target.id, event.target.value);
        }
    } else if (parentElement === 'deductions') {
        if (event.target.tagName === 'INPUT') {
            taxService.deductionsObject.set(event.target.id, event.target.value);
        }
    }
});
