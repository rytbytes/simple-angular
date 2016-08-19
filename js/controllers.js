angular.module('ClientManager.controllers', [])

.controller('clientsController', function($scope,$http,$location,$filter) {
    $scope.clientList = null;
    $scope.orderByField = 'clientID';
    
    $http.get('http://localhost:8000/initial_data.json')
      .success(function(data){
        console.log(data);
        $scope.clientList = data.clientList;
        $scope.totalClients = data.clientList.length;
      })
      .error(function (data, status, headers, config) {
            alert("No initial data loaded into JSON");
         });

    // edit a client info
    $scope.editClient = function(client){
      $scope.givenClient = client;
      $location.path('edit_client');
    }

    // delete function for client
    $scope.deleteClient = function(client){
      var index = $scope.clientList.indexOf(client);
      $scope.clientList.splice(index,1);
    }


})

.controller('newclientController',function($scope){
    $scope.firstName = null;
    $scope.lastName = null;
	$scope.firstName = null;
    $scope.lastName = null;
	$scope.email=null;
	$scope.phoneNumber=null;
	$scope.businessName=null;
	$scope.bankAccount=null;
	$scope.address={
						street1: null,
						street2: null,
						city: null,
						state: null,
						country: null,
						pinCode: null,
					};
	$scope.status=null;
    $scope.createClient = function(){
      $scope.clientList.push(
        {
          'firstName':$scope.firstName,
          'lastName':$scope.lastName,
		  'email':$scope.email,
		  'phoneNumber':$scope.phoneNumber,
		  'businessName':$scope.businessName,
		  'bankAccount':$scope.bankAccount,
		  'address':{
						'street1':$scope.street1,
						'street2':$scope.street2,
						'city':$scope.city,
						'state':$scope.state,
						'country':$scope.country,
						'pinCode':$scope.pinCode,
					},
		  'status':$scope.status
        }
        );
		
      };
    }
)


.controller('editclientController',function($scope){
    
    $scope.updateClient = function(client){
	  $scope.firstName = client.firstName;
      $scope.lastName = client.lastName;
	  $scope.email = client.email;
	  $scope.phoneNumber = client.phoneNumber;
	  $scope.businessName = client.businessName;
	  $scope.bankAccount = client.bankAccount;
	  $scope.street1 = client.address.street1;
	  $scope.street2 = client.address.street2;
	  $scope.city = client.address.city;
	  $scope.state = client.address.state;
	  $scope.country = client.address.country;
	  $scope.pinCode = client.address.pinCode;
	  $scope.status = client.status;
    }
})

;