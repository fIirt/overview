document.addEventListener('DOMContentLoaded', function() {
    var gifts = [
        { 
            name: "Blonde Vinyl", 
            url: "https://fiirt.github.io/emi/", 
            img: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg",
            description: "You're Pretty Sweet"
        },
        { 
            name: "Letter for Emmy", 
            url: "https://fiirt.github.io/letter", 
            img: "https://cdn.discordapp.com/attachments/614217380121280547/1175592343592779897/image.png",
            description: "A letter with a surprise when u open it."
        },
        { 
            name: "Finding Kamen (An Emmy Adventure)", 
            url: "", 
            img: "https://cdn.discordapp.com/attachments/614217380121280547/1175592942669406269/image.png",
            description: "COMING SOON.!"
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
