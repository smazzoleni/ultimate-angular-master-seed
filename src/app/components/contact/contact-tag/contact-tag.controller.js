function ContactTagController() {
    let ctrl = this;

    ctrl.$onInit = () => {
        ctrl.tags = ['friends', 'family', 'acquaintances', 'following'];
    };

    ctrl.$onChanges = changes => {
        if (changes.tag) {
            ctrl.tag = angular.copy(ctrl.tag);
        }
    };

    ctrl.updateTag = tag => {
        ctrl.onChange({
            $event: {
                tag: tag,
            },
        });
    };
}

angular
    .module('components.contact')
    .controller('ContactTagController', ContactTagController);
