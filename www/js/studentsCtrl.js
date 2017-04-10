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
    .controller('StudentController', function($scope,StudentDataFactory,$stateParams,$state){
        var _this = this;   
        $scope.totalDisplayed=5; 
        $scope.stuId = $stateParams.stuId;
        StudentDataFactory.getSomeData().then(function(response){
            //do something with response
                $scope.students = response.data;
                if($scope.stuId){
                    for(var i=0; i<$scope.students.length; i++){

                        if($scope.students[i]['id'] == $scope.stuId){

                            $scope.student_detail =$scope.students[i];   
                           console.log($scope.student_detail)
                        }
                    }
                    
                }
                console.log('hi')
        }).catch(function(response){
            //handle the error
        });

        console.log($scope.stuId)
          
        

        $scope.loadMore = function(){
           console.log($scope.totalDisplayed);
            $scope.totalDisplayed +=5;
             $scope.$broadcast('scroll.infiniteScrollComplete');
        } 
    });

    