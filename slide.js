var imgs = Array.from(document.querySelectorAll('.item img'));
var box = document.querySelector('.box');
var boxItem = document.querySelector('.box-item')
var close = document.getElementById('close');
var previous = document.getElementById('previous');
var next = document.getElementById('next');
var currentIndex = 0;
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function (e) {
        openSlider(e);
    })
}

// open
function openSlider(e) {
    var currentImg = e.target.getAttribute('src');
    currentIndex = imgs.indexOf(e.target)
    box.style.display = 'flex';
    boxItem.style.backgroundImage = `url(${currentImg})`;
}

// close
close.addEventListener('click', closeItem)

function closeItem() {
    box.style.display = 'none';
}

// next slide
next.addEventListener('click', nextItem)

function nextItem() {
    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0;
    }
    var currentSrc = imgs[currentIndex].src;
    boxItem.style.backgroundImage = `url(${currentSrc})`;

}

// previous slide
previous.addEventListener('click', preItem)

function preItem() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }
    var currentSrc = imgs[currentIndex].src;
    boxItem.style.backgroundImage = `url(${currentSrc})`;
}

// keyboard keys
document.addEventListener('keydown', function (e) {
    if (e.key == 'ArrowRight') {
        nextItem()
    }
    else if (e.key == 'ArrowLeft') {
        preItem()
    }
    else if (e.key == 'Escape') {
        closeItem()
    }
})