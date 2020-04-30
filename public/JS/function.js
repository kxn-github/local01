//upload file function
$scope.upload = function(){
  var form = new FormData();
  var file = document.getElementById("fileUpload").files[0];
  form.append('file', file);
  $http({
    method: 'POST',
    url: '/upload',
    data: form,
    headers: {'Content-Type': undefined},
    transformRequest: angular.identity
     }).success(function (data) {
       console.log('upload success');
     }).error(function (data) {
       console.log('upload fail');
     })
}

