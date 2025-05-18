import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("Not able to load the form");
}

app.innerHTML = `
  <form id="register">
    <div class="form">
      <input type="text" name="name" placeholder="Enter name" />
      <input type="email" name="email" placeholder="Enter name" />
      <input type="password" name="password" placeholder="Enter name" />
      <button>Submit</button>
    </div>
  </form>
`;

const registerForm = document.getElementById(
  "register"
) as HTMLFormElement | null;

registerForm?.addEventListener("submit", registerUser);

type FormValues = {
  name: string;
  email: string;
  password: string;
};

function registerUser(event: Event): void {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const formValue = { name, email, password };

  console.log("Form submitted:", formValue);

  listUser(formValue);
}

function listUser(formValue: FormValues) {
  app!.innerHTML += `
    <div class="card">
      <ul>
        <li>${formValue.name}</li>
        <li>${formValue.email}</li>
        <li>${formValue.password}</li>
      </ul>
    </div>
  `;
}
