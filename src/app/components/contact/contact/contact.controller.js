function ContactController() {
    let ctrl = this;

    ctrl.selectContact = () => {
        ctrl.onSelect({
            $event: {
                contactId: ctrl.contact.$id,
            },
        });
    };
}

angular
    .module('components.contact')
    .controller('ContactController', ContactController);
