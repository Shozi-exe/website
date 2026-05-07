function getInput() {
    let input = document.getElementById("type").value;

    let email = "shozabdocx@gmail.com";
    let subject = "Hello Shozab";
    let body = "Hi, I visited your website. I am " + input;

    let gmailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = gmailUrl;

    document.getElementById("type").value = "";
}