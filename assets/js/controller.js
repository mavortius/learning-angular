angular.module("app", []).controller("AppCtrl", AppCtrl);

function AppCtrl($scope) {
    $scope.contacts = [
        {
            name: 'John Doe',
            phone: '01234567890',
            email: 'john@example.com'
        },
        {
            name: 'Karan Bromwich',
            phone: '09876543210',
            email: 'karan@email.com'
        },
        {
            "name":"Declan Proud",
            "phone":"2341234231",
            "email":"declan@email.com"
        },
        {
            "name":"Paul McKay",
            "phone":"912345678",
            "email":"p.mckay@domain.com"
        }
    ];

    $scope.styleDemo = function () {
        if(!$scope.styler) {
            return;
        }

        return {
            background: 'red',
            fontWeight: 'bold'
        };
    };
}