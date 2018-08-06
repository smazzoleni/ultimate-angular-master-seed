function ContactService(
    AuthService,
    $firebaseRef,
    $firebaseArray,
    $firebaseObject
) {
    let ref = $firebaseRef.contacts;
    let uid = AuthService.getUser().uid;
    return {
        createNewContact,
        getContactById,
        updateContact,
        deleteContact,
    };

    function createNewContact(contact) {
        return $firebaseArray(ref.child(uid)).$add(contact);
    }

    function getContactById(id) {
        return $firebaseObject(ref.child(uid).child(id));
    }

    function updateContact(contact) {
        return contact.$save();
    }

    function deleteContact(contact) {
        return contact.$remove();
    }
}

angular.module('components.contact').factory('ContactService', ContactService);
