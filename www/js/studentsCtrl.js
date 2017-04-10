//a factory
app
    .factory('StudentDataFactory', function($http){
        var url = 'data/students.json';
        return {
            getSomeData: function(){
                return $http({ method: 'GET', url: url});
            }
        }
    });

//a controller
app
    .controller('StudentController', function($scope,StudentDataFactory,$stateParams){
        var _this = this;   
        $scope.totalDisplayed=5; 
        $scope.stuId = $stateParams.stuId;
        $scope.loadMore = function(){
            $scope.totalDisplayed +=5;
            console.log($scope.totalDisplayed);
        }    
        StudentDataFactory.getSomeData().then(function(response){
            //do something with response
                $scope.students = response.data;
        }).catch(function(response){
        	//handle the error
        });
    });

    