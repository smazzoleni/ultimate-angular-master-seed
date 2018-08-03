angular
    .module('components.auth', ['ui.router', 'firebase'])
    .config(function($firebaseRefProvider) {
        var config = {
            apiKey: 'AIzaSyDyGVDC9fH9GxRoQqMzDdYFxdDvI0MFpHo',
            authDomain: 'contacts-manager-8ebb4.firebaseapp.com',
            databaseURL: 'https://contacts-manager-8ebb4.firebaseio.com',
            projectId: 'contacts-manager-8ebb4',
            storageBucket: 'contacts-manager-8ebb4.appspot.com',
            messagingSenderId: '389599506332',
        };
        $firebaseRefProvider.registerUrl({
            default: config.databaseURL,
            contacts: config.databaseURL + 'contacts',
        });
        firebase.initializeApp(config);
    })
    .run(function($transitions, $state, AuthService) {
        $transitions.onStart(
            {
                to: function(state) {
                    console.log('to', state);
                    return !!(state.data && state.data.requiredAuth);
                },
            },
            function() {
                console.log('on start ?');
                return AuthService.requireAuthentication().catch(function() {
                    return $state.target('auth.login');
                });
            }
        );
        $transitions.onStart(
            {
                to: 'auth.*',
            },
            function() {
                if (AuthService.isAuthenticated()) {
                    return $state.target('app');
                }
            }
        );
    });
