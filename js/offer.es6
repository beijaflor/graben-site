---
---
var validator = new FormValidator('offer-form', [{
    name: 'name',
    rules: 'required'
}, {
    name: 'email',
    rules: 'required|valid_email'
}, {
    name: 'org_type',
    rules: 'required'
}, {
    name: 'freeform',
    rules: 'required'
}, {
    name: 'ws_type',
    rules: 'required'
}, {
    name: 'place',
    rules: 'required'
}, {
    name: 'request_date',
    rules: 'required'
}, {
    name: 'num_perticipant',
    rules: 'required'
}, {
    name: 'type_perticipant',
    rules: 'required'
}], function(errors, evt) {
      if (event && evt.preventDefault) {
          evt.preventDefault();
      } else if (event) {
          event.returnValue = false;
      }

    var i, j, e;
    if (errors.length > 0) {
      console.log("error");
      console.log(errors);

      (function() {
        var i, obj, index, objectList, classList, className = "-error";
        objectList = document.querySelectorAll("."+className);
        for(i=0; i < objectList.length; i++) {
          obj = objectList[i];
          classList = obj.className.split(' ');
          index = classList.indexOf(className);
          if(index >= 0) {
            classList.splice(index, 1);
            obj.className = classList.join(' ');
          }
        }
      })();

      for(i=0; i < errors.length; i++) {
        e = document.getElementsByName(errors[i].name);
        for(j=0; j < e.length; j++) {
          e[j].className = (e[j].className) === "" ? "-error" : e[j].className + " " + "-error";
        };
      }

    }
});
