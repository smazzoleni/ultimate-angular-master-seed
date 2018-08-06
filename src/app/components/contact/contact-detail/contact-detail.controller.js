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

    ctrl.updateContact = () => {
        ctrl.onUpdate({
            $event: {
                contact: ctrl.contact,
            },
        });
    };

    ctrl.deleteContact = () => {
        ctrl.onDelete({
            $event: {
                contact: ctrl.contact,
            },
        });
    };
}

angular
    .module('components.contact')
    .controller('ContactDetailController', ContactDetailController);
