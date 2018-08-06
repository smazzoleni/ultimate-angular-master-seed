function ContactDetailController() {
    let ctrl = this;

    ctrl.$onInit = () => {
        console.log(ctrl);
        ctrl.isNewContact = !ctrl.contact.$id;
    };

    ctrl.$onChanges = () => {};

    ctrl.saveContact = () => {
        ctrl.onSave({
            $event: {
                contact: ctrl.contact,
            },
        });
    };
}

angular
    .module('components.contact')
    .controller('ContactDetailController', ContactDetailController);
