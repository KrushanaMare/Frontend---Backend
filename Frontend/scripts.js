
const apiBaseUrl = "http://localhost:8080/api";

// Handle login form submission
document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await axios.post(`${apiBaseUrl}/auth/login`, { email, password });

        // Check user role and redirect to the appropriate dashboard
        if (response.data.role === "ADMIN") {
            showAdminDashboard();
        } else if (response.data.role === "USER") {
            showUserDashboard();
        }
    } catch (error) {
        alert("Login failed. Please check your credentials.");
    }
});

function showAdminDashboard() {
    document.getElementById("login-section").classList.add("d-none");
    document.getElementById("admin-dashboard").classList.remove("d-none");
    loadUsers();
    loadStores();
}

function showUserDashboard() {
    document.getElementById("login-section").classList.add("d-none");
    document.getElementById("user-dashboard").classList.remove("d-none");
    loadStoresForUser();
}

function logout() {
    document.getElementById("login-section").classList.remove("d-none");
    document.getElementById("admin-dashboard").classList.add("d-none");
    document.getElementById("user-dashboard").classList.add("d-none");
}

async function loadUsers() {
    try {
        const response = await axios.get(`${apiBaseUrl}/admin/users`);
        const users = response.data;

        const userList = document.getElementById("users");
        userList.innerHTML = "";

        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} (${user.email})`;
            li.classList.add("list-group-item");
            userList.appendChild(li);
        });
    } catch (error) {
        alert("Failed to load users.");
    }
}

async function loadStores() {
    try {
        const response = await axios.get(`${apiBaseUrl}/admin/stores`);
        const stores = response.data;

        const storeList = document.getElementById("stores");
        storeList.innerHTML = "";

        stores.forEach(store => {
            const li = document.createElement("li");
            li.textContent = `${store.name} - ${store.address}`;
            li.classList.add("list-group-item");
            storeList.appendChild(li);
        });
    } catch (error) {
        alert("Failed to load stores.");
    }
}

async function loadStoresForUser() {
    try {
        const response = await axios.get(`${apiBaseUrl}/user/stores`);
        const stores = response.data;

        const storeList = document.getElementById("stores-user");
        storeList.innerHTML = "";

        stores.forEach(store => {
            const li = document.createElement("li");
            li.textContent = `${store.name} - ${store.address}`;
            li.classList.add("list-group-item");
            storeList.appendChild(li);
        });
    } catch (error) {
        alert("Failed to load stores.");
    }
}
