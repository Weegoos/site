let language_input = document.querySelector('.language_input')
let lan_btn = document.querySelector('#lan_btn')

// local storage
let local_lan = localStorage.getItem('language')

lan_btn.onclick = function (){
    localStorage.setItem('language', language_input.value)
    window.location.reload()
}

if (local_lan == "Русский"){
    lan_btn.innerHTML = "Завершить"
    language_input.placeholder  = "Выберите язык..."
}
if (local_lan == "English" || local_lan == null){
    lan_btn.innerHTML = "Finish"
    language_input.placeholder  = "Select a language..."

}

if (local_lan == "Қазақ тілі"){
    language_input.placeholder  = "Тілді таңдаңыз..."

    lan_btn.innerHTML = "Аяқтау"
}

if (local_lan == "中文"){
    language_input.placeholder  = "选择一种语言..."

    lan_btn.innerHTML = "完成"
}