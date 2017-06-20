angular.module('app').controller('myMainCtrl', function($scope){
    $scope.courses = [
        {name: 'C for beginners', featured: true, published: new Date('10/15/2014')},
        {name: 'Java', featured: false, published: new Date('2/27/2015')},
        {name: 'Javascript', featured: true, published: new Date('9/6/2015')},
        {name: 'C#', featured: false, published: new Date('2/16/2014')},
        {name: 'C++', featured: true, published: new Date('3/8/2016')},
        {name: 'Linux  for beginners', featured: false, published: new Date('6/20/2013')},
        {name: 'Python', featured: true, published: new Date('9/10/2014')},
        {name: 'Operating System', featured: false, published: new Date('10/2/2014')},
        {name: 'Theory of Algorithm', featured: true, published: new Date('11/19/2015')},
        {name: 'Computer Architecture', featured: true, published: new Date('5/14/2013')},
        {name: 'Software Engineer', featured: false, published: new Date('7/23/2016')},
        {name: 'Senior Project', featured: true, published: new Date('5/14/2014')}
    ]
});
