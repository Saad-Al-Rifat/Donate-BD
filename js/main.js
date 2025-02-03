// Active route
function activeRoute(id, btn) {
    const routDivs = document.getElementsByClassName('rout-div');
    for (const routDiv of routDivs) {
        routDiv.classList.add('hidden');
    }
    const buttons = document.getElementsByClassName('button-zbz');
    for (const button of buttons) {
        button.classList.remove('active-rout')
        button.classList.add('rout')
    }

    document.getElementById(btn).classList.add('active-rout');
    document.getElementById(btn).classList.remove('rout');
    document.getElementById(id).classList.remove('hidden');
}

// Donate Now Button
function donate(howMuchIDonated, inputField) {
    const inputTag = document.getElementById(inputField);
    const coin = document.getElementById(howMuchIDonated);
    const balance = document.getElementById('balance');
    if (parseFloat(inputTag.value) <= parseFloat(balance.innerHTML) && parseFloat(inputTag.value) > 0) {
        coin.innerText = `${parseFloat(coin.innerText) + parseFloat(inputTag.value)}`;
        balance.innerText = `${parseFloat(balance.innerText) - parseFloat(inputTag.value)}`;
        inputTag.value = '';
        popup2();
        allDonationHistory();
    } else {
        popup1();
    }
}

// popup-01
function popup1() {
    const audio = document.getElementById('audio-file');//audio file
    audio.play()//play the audio file
    const popup = document.getElementById('popup-01');//Get the dialog
    popup.classList.add('top-to-bottom');
    popup.showModal();//show the dialog
    const cancelBtn = document.getElementById('dialogue-cancel-1');//get the cancel button inside the dialog
    cancelBtn.addEventListener('click', () => {
        popup.close();//click the cancel button to clode the dialog
        popup.classList.remove('top-to-bottom');
    })
}
// popup-02
function popup2(){
    const dialog = document.getElementById('popup-02');
    dialog.showModal();
    const okBtn = document.getElementById('dialogue-cancel-2')
    okBtn.addEventListener('click', ()=>{
        dialog.close();
    })
}

// History Section
function allDonationHistory(){
    const historyDiv = document.getElementById('history-btn');
    const div = document.createElement('div')
    div.classList.add('history-box')
    historyDiv.appendChild(div);
    const p1 = document.createElement('p');
    p1.innerText = `You Have Donated for Humankind`
    p1.classList.add('p1');
    const p2 = document.createElement('p');
    p2.innerText = new Date();
    p2.classList.add('p2');
    div.appendChild(p1);
    div.appendChild(p2);
}