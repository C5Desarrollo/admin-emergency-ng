export interface AuthResponse {
    token: string;
}

export interface AuthUserData {
    data: {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
    },
    support: {
        url: string;
        text: string;
    }
}    