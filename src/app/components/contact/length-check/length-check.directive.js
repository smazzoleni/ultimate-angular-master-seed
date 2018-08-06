function lengthCheck() {
    return {
        restrict: 'A',
        require: 'ng-model',
        compile: function($element) {
            $element.addClass('dynamic-input');
            return function($scope, $element, $attrs, $ctrl) {
                const dynamicClass = 'dynamic-input--no-contents';
                $scope.$watch(
                    () => $ctrl.$viewValue,
                    newValue => {
                        if (newValue) {
                            $element.removeClass(dynamicClass);
                        } else {
                            $element.addClass(dynamicClass);
                        }
                    }
                );
            };
        },
    };
}

angular.module('components.contact').directive('lengthCheck', lengthCheck);
