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

  // prevent to send form if there's an error
  if (event && evt.preventDefault) {
    evt.preventDefault();
  } else if (event) {
    event.returnValue = false;
  }

  let i, j, e;
  if (errors.length > 0) {
    console.log("error");
    console.log(errors);

    var getParent = function (elem) {
      const parentClass = "form-item";
      let parentNode;

      for ( ; elem && elem !== document; elem = elem.parentNode ) {
        console.log(elem.className.split(' '));
        if ( elem.className.split(' ').indexOf(parentClass) >= 0 ) {
            parentNode = elem;
        }
      }
      return parentNode;
    };

    // remove error all class
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
      let parentNode = getParent(e[0]);
      parentNode.className = (parentNode.className === "") ? "-error" : parentNode.className + " " + "-error";
    }

  }
});
