const inp = document.getElementById("Password") as HTMLInputElement | null;
const btn = document.getElementById("toggleVisibility") as HTMLButtonElement | null;

if (inp && btn) {
    btn.addEventListener("click", () => {
        if (inp.type === "password") {
            inp.type = "text";
            btn.textContent = "Shown";
        } else {
            inp.type = "password";
            btn.textContent = "Hidden";
        }
    });
}