app.controller('manageCtrl', function ($scope) {
  $scope.title = "Form Manager"
  $scope.componentList = [
    {
      name: "Textbox",
      template:"textbox"
    },
    {
      name: "Textarea",
      template:"textarea"
    },
    {
      name: "CourseSelector",
      template:"courseSelectorDetails.html"
    },
    {
      name: "Radio Options",
      template:"radioOptionsDetails.html"
    },
    {
      name: "B Number",
      template:"bnumber"
    }]
  $scope.comp = {
    label: ""
  }
  $scope.addComp = function() {
    //console.log(JSON.parse($scope.comp.singleSelect));
    document.getElementById('component_attributes').innerHTML = $scope.comp.singleSelect
  };

  $scope.addElements = {
    addTextbox: function(){
      var tb = `<div><label>`+ $scope.comp.label +`</label>
      <input type="text" value="">
      </div>
      `
      document.getElementById('preview').innerHTML += tb
      $scope.comp.label = null
    },
    addBnumber: function(){
      var bn = `<div><label>`+ $scope.comp.label +`</label>
      <input onblur="validate_bnumber(event)" type="text" value="">
      </div>
      `
      document.getElementById('preview').innerHTML += bn
      $scope.comp.label = null
    }
  }
})
