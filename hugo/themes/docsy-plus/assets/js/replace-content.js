function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++)
  {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam)
    {
      return sParameterName[1];
    }
  }
}

function replaceInText(element, pattern, replacement) {
  for (let node of element.childNodes) {
    switch (node.nodeType) {
      case Node.ELEMENT_NODE:
        replaceInText(node, pattern, replacement);
        break;
      case Node.TEXT_NODE:
        node.textContent = node.textContent.replace(pattern, replacement);
        break;
      case Node.DOCUMENT_NODE:
        replaceInText(node, pattern, replacement);
    }
  }
  // replace href
  if(element.hasAttribute("href")){
    element.setAttribute("href", element.getAttribute("href").replace(pattern, replacement));
  }
}

var replaceContent = getUrlParameter('h');
var replaceContent = (replaceContent === undefined) ? localStorage.getItem('replaceContent') : replaceContent;
if (replaceContent == '' || replaceContent == '_') {
  localStorage.removeItem('replaceContent');
  replaceInText(document.body, "{{ .Site.Params.ReplaceLabContent }}", "localhost" );
} else if (typeof replaceContent !== undefined && replaceContent !== null ) {
  localStorage.setItem('replaceContent', replaceContent);
  replaceInText(document.body, "{{ .Site.Params.ReplaceLabContent }}", replaceContent);
} else{
  replaceInText(document.body, "{{ .Site.Params.ReplaceLabContent }}", "localhost" );
}
