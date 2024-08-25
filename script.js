window.onscroll = function() {
    var nav = document.querySelector("nav");
    if (window.pageYOffset > 0) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
};
function copyEmail(){
    const CopyEmail="maharjanrustam@gmail.com";
    const tempEmail = document.createElement("input");
    tempEmail.value=CopyEmail;
    document.body.appendChild(tempEmail);

    tempEmail.select();
    tempEmail.setSelectionRange(0,99999);

    document.execCommand("copy");

    document.body.removeChild(tempEmail);

    alert("Email copied to clipboard!");
}