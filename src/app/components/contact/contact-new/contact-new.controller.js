function ContactNewController(ContactService, $state) {
    let ctrl = this;
    ctrl.$onInit = () => {
        ctrl.contact = {
            name: '',
            email: '',
            job: '',
            location: '',
            social: {
                facebook: '',
                github: '',
                twitter: '',
                linkedin: '',
            },
            tag: 'none',
        };

        console.log('new contact created', ctrl.contact);
    };

    ctrl.createNewContact = event => {
        return ContactService.createNewContact(event.contact).then(contact => {
            console.log(contact);
            $state.go('contact', {
                id: contact.key,
            });
        });
    };
}

angular
    .module('components.contact')
    .controller('ContactNewController', ContactNewController);
