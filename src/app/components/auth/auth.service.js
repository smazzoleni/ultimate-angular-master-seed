function AuthService($firebaseAuth) {
    let auth = $firebaseAuth();
    let authData = null;

    const storeAuthData = response => {
        authData = response;
        return authData;
    };
    const onSignIn = user => {
        console.log('sign in ?');
        authData = user;
        return auth.$requireSignIn();
    };
    const clearAuthData = () => {
        authData = null;
    };

    this.register = function(user) {
        return auth
            .$createUserWithEmailAndPassword(user.email, user.password)
            .then(storeAuthData);
    };

    this.login = function(user) {
        return auth
            .$signInWithEmailAndPassword(user.email, user.password)
            .then(storeAuthData);
    };

    this.requireAuthentication = function() {
        console.log('waiting for sign in ?');
        return auth.$waitForSignIn().then(onSignIn);
    };

    this.isAuthenticated = function() {
        return !!authData;
    };

    this.getUser = () => {
        if (authData) {
            return authData;
        }
    };

    this.logout = () => {
        return auth.$signOut().then(clearAuthData);
    };
}

angular.module('components.auth').service('AuthService', AuthService);
