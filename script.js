document.addEventListener('DOMContentLoaded', function() {
    var gifts = [
        { 
            name: "Blonde Vinyl", 
            url: "https://fiirt.github.io/emi/", 
            img: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg",
            description: "You're Pretty Sweet"
        },
        { 
            name: "Gift 2", 
            url: "link-to-gift-2.html", 
            img: "path-to-image-2.jpg",
            description: "A brief description of Gift 2."
        },
        // Add more gifts here
    ];

    var giftList = document.getElementById('gift-list');

    gifts.forEach(function(gift) {
        var giftItem = document.createElement('div');
        giftItem.classList.add('gift-item');

        var img = document.createElement('img');
        img.src = gift.img;
        img.alt = gift.name;
        img.style.width = '100%'; // Adjust as necessary
        giftItem.appendChild(img);

        var title = document.createElement('h3');
        title.textContent = gift.name;
        giftItem.appendChild(title);

        var description = document.createElement('p');
        description.textContent = gift.description;
        giftItem.appendChild(description);

        giftItem.onclick = function() {
            window.location.href = gift.url;
        };

        giftList.appendChild(giftItem);
    });
});
