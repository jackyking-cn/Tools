function $(id) {
    return document.getElementById(id);
}

function matchString() {
    var v = $('source').value,
        r = $('regular').value;
    
    if (!/^\//.test(r)) {
        r = '/' + r + '/';
    }
    
    $('result').value = v.match(eval(r));
}

function replaceString() {
    var v = $('source').value,
        r = $('regular').value,
        s = $('replace').value;
    
    if (!/^\//.test(r)) {
        r = '/' + r + '/';
    }
    
    $('result').value = v.replace(eval(r), s);
}