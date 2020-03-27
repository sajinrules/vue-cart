import { EventBus } from '@/services/bus';
export default {
    setToken(token) {
        localStorage.setItem('access_token', token);
    },
    
    getToken() {
        return localStorage.getItem('access_token');
    },

    isAuthenticated() {
        return !!localStorage.getItem('access_token')
    },

    removeToken() {
        localStorage.removeItem('access_token');
    },

    setProfile(profile) {
        EventBus.$emit('loggedIn', profile);
        localStorage.setItem('user', JSON.stringify(profile));
    },
    getProfile() {
        if(localStorage.getItem('user')) {
            return JSON.parse(localStorage.getItem('user'));
        } else {
            return {}
        }
    }, 
    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
        EventBus.$emit('loggedIn',{});
    }
}