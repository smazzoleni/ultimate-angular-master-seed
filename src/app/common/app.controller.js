function AppController(AuthService, $state) {
    var ctrl = this;
    ctrl.user = AuthService.getUser();

    ctrl.logout = () => {
        AuthService.logout().then(() => {
            $state.go('auth.login');
        });
    };
}

angular.module('common').controller('AppController', AppController);
