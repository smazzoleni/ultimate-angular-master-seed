function RegisterController(AuthService, $state) {
    let ctrl = this;
    ctrl.$onInit = function() {
        ctrl.error = null;
        ctrl.user = {
            email: '',
            password: '',
        };
    };

    ctrl.createUser = function(event) {
        ctrl.error = null;
        return AuthService.register(event.user).then(
            function(user) {
                console.log('Register success', user);
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
    .controller('RegisterController', RegisterController);
