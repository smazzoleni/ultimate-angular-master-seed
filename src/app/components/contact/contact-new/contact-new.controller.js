function ContactNewController(ContactService) {
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
        });
    };
}

angular
    .module('components.contact')
    .controller('ContactNewController', ContactNewController);
