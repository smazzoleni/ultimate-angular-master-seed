function ContactsController($state) {
    let ctrl = this;

    ctrl.goToContact = event => {
        // $state.go('contact', {id: event.contactId})
    };
}

angular
    .module('components.contact')
    .controller('ContactsController', ContactsController);
