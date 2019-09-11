var app=angular.module("signup",[]);
app.controller("mycontrol",['$scope',function($scope){
$scope.demo="This is an registration form";
$scope.user=
    {
    name:'',
    email:'',
    gender:'',
    nationality:'',
    Address:'',
    indian:'',
    nonindian:'',
}
$scope.submitvalues=function()
{
alert("data u enterd is as fallow"+$scope.user.indian);
if($scope.user.indian="indian")
{
    $scope.user.nationality=$scope.user.indian; 
}
else{
    $scope.user.nationality=$scope.user.nonindian; 
}  
$scope.disp="user-Name : "+$scope.user.name+",  user-Email : "+$scope.user.email+",  user-Gender : "+$scope.user.gender+",  user-Nationality : "+$scope.user.nationality+",  user-Address : "+$scope.user.address;
}
}])
