fetch("../data.json")
    .then((response) => response.json())
    .then((data) => displayquestion(data.question1))

function displayquestion(info){
    const allServ = document.getElementById("reponse");
    allServ.innerHTML = info.map((item)=>{
        return `
        <button class="border-solid border-2 border-white p-10 font-[poppins] mb-5">${item.rep1}</button>
        <button class="border-solid border-2 border-white p-10 font-[poppins] mb-5">${item.rep2}</button>
        <button class="border-solid border-2 border-white p-10 font-[poppins] mb-5">${item.rep3}</button>
        <button class="border-solid border-2 border-white p-10 font-[poppins] mb-5">${item.rep4}</button>
        `

    })
    .join( ``);
    const question = document.getElementById("question");
    question.innerHTML = info.map((item)=>{
        return `
        
        <h1 class="flex justify-center text-5xl mb-5 text-orange-500 font-bold font-[poppins]">${item.questions}</h1>
        `

    })
    .join( ``);
}