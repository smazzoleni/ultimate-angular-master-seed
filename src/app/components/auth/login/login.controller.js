function LoginController(AuthService, $state) {
    let ctrl = this;
    ctrl.$onInit = function() {
        ctrl.error = null;
        ctrl.user = {
            email: '',
            password: '',
        };
    };

    ctrl.loginUser = function(event) {
        ctrl.error = null;
        return AuthService.login(event.user).then(
            function(user) {
                console.log('Login success', user);
                $state.go('app');
            },
            function(err) {
                ctrl.error = err.message;
            }
        );
    };
}

angular
    .module('components.auth')
    .controller('LoginController', LoginController);
