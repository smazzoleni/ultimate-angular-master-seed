function ContactEditController(ContactService, cfpLoadingBar, $window, $state) {
    let ctrl = this;

    ctrl.updateContact = event => {
        cfpLoadingBar.start();
        return ContactService.updateContact(event.contact)
            .then(() => {
                cfpLoadingBar.complete();
            })
            .catch(() => {
                cfpLoadingBar.complete();
            });
    };
    ctrl.deleteContact = event => {
        var message = `Delete ${event.contact.name} from contacts ?`;
        if ($window.confirm(message)) {
            return ContactService.deleteContact(event.contact).then(() => {
                $state.go('contacts');
            });
        }
    };
}

angular
    .module('components.contact')
    .controller('ContactEditController', ContactEditController);
