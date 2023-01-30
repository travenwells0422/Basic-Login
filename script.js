document.querySelector("#submit").addEventListener("click", submitClick);

function submitClick(e) {
    const info = [
        {
            username: "travenwells0422",
            password: "1234",
        },
        {
            username: "jessicawells0427",
            password: "1991$",
        },

        {
            username: "prominentco1",
            password: "IceMan0476$",
        },

        {
            username: "travendwells@outlook.com",
            password: "Tray04221994$",
        },
    ];
    //
    // const username = "travenwells0422";
    // const password = "1234";

    const usernameInput = document.querySelector("#usernameID").value;
    const passwordInput = document.querySelector("#passwordID").value;

    for (let i = 0; i < info.length; i++) {
        if (
            usernameInput == info[i].username &&
            passwordInput == info[i].password
        ) {
            console.log("You're logged in!!");
            location.href = "/account.html";
        }
    }

    e.preventDefault();
}

// Inline Style
document.querySelector("body").style.background = "lightBlue";
