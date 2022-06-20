// Get modal element
var modal = document.getElementById('simplemodal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
//Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
// Listen for open click
modalBtn.addEventListener(click,openModal);
// Listen for close click
closeBtn.addEventListener(click,closeModal);
// Listen for outside click
window.addEventListener('click',clickoutside)


// function to open modal
function openmodal(){
  modal.style.display = 'block';
}

// function to close modal
function closemodal(){
    modal.style.display = 'none';
}

// function to close modal if
function closemodal(){
    modal.style.display = 'none';
  }
