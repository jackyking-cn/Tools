function $(id) {
  return document.getElementById(id);
}

function matchString() {
  var v = $("source").value,
    r = $("regular").value;

  if (!/^\//.test(r)) {
    r = "/" + r + "/";
  }

  if ($("row").checked) {
    var a = v.split(/\r?\n/);

    for (var i = 0; i < a.length; i++) {
      a[i] = a[i].match(eval(r));
    }

    $("result").value = a.join("\n");
  } else {
    $("result").value = v.match(eval(r));
  }
}

function replaceString() {
  var v = $("source").value,
    r = $("regular").value,
    s = $("replace").value;

  if (!/^\//.test(r)) {
    r = "/" + r + "/";
  }

  if ($("row").checked) {
    var a = v.split(/\r?\n/);

    for (var i = 0; i < a.length; i++) {
      a[i] = a[i].replace(eval(r), s);
    }

    $("result").value = a.join("\n");
  } else {
    $("result").value = v.replace(eval(r), s);
  }
}
