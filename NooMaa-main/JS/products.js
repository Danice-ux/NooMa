const url = new URLSearchParams(window.location.search);
const model = url.get("model");

const banken = {
    serein: {
        name: "Model Serein",
        price: "€ 2.450",
        description: "240 cm breed • Ivoor Bouclé • Koudschuim vulling"
    },

    bordeaux: {
        name: "Model Bordeaux",
        price: "€ 3.190",
        description: "310 x 210 cm • Wijnrood Linnen • Dons-topper"
    },

    terra: {
        name: "Model Terra",
        price: "€ 1.680",
        description: "145 cm breed • Koper Velours • Massief eiken poten"
    },

    nuage: {
        name: "Model Nuage",
        price: "€ 2.890",
        description: "280 cm breed • Oudroze Chenille • 4 losse elementen"
    }
};

const bank = banken[model];

if (bank) {
    document.querySelector("#name").textContent = bank.name;
    document.querySelector("#price").textContent = bank.price;
    document.querySelector("#description").textContent = bank.description;
} else {
    document.querySelector("#name").textContent = "Bank niet gevonden";
}