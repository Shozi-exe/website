function getInput() {
    let input = document.getElementById("type").value;

    let email = "shozabdocx@gmail.com";
    let subject = "Hello Shozab";
    let body = "Hi, I visited your website. I am " + input;

    let gmailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = gmailUrl;

    document.getElementById("type").value = "";
}

function openWP(){
    let message = "Hi Shozab , I visited your vebsite .";
    let url = `https://wa.me/923316903192?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}