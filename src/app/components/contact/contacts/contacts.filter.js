function contactsFilter() {
    return function(collection, params) {
        return collection.filter(item => {
            return (
                item.tag ===
                (params.filter === 'none' ? item.tag : params.filter)
            );
        });
    };
}

angular.module('components.contact').filter('contactsFilter', contactsFilter);
