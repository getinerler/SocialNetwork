
export function getToken(): string | null {
    if (typeof window === "undefined") {
        return null;
    }

    return localStorage.getItem("token");
}

export function getUser() {
    const userJson = localStorage.getItem("user");
    if (!userJson) {
        return null;
    }
    return JSON.parse(userJson);
}

export function isLoggedIn(): boolean {
    return getToken() !== null;
}

export function logout(): void {
    localStorage.removeItem("token");
}