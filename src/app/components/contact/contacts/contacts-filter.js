function contactsFilter() {
    return function(collection, params) {
        console.log('collection passed in', collection);
        return collection.filter(item => {
            return (
                item.tag ===
                (params.filter === 'none' ? item.tag : params.filter)
            );
        });
    };
}

angular.module('components.contact').filter('contactsFilter', contactsFilter);
