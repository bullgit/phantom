function phantomify(s) {
       var scene = $('body');
  var ghost_recipe = '<style>.ghost{position:absolute;top:0;-webkit-animation:ghosty 2s cubic-bezier(0.18,1.69,0,.11) infinite;-moz-animation:ghosty 2s cubic-bezier(0.18,1.69,0,.11) infinite;animation:ghosty 2s cubic-bezier(0.18,1.69,0,.11) infinite;-webkit-transform-origin:10% 50%;-moz-transform-origin:10% 50%;-ms-transform-origin:10% 50%;-o-transform-origin:10% 50%;transform-origin:10% 50%}@-webkit-keyframes ghosty{33%{-webkit-transform:rotate(15deg)}66%{opacity:0}}@-moz-keyframes ghosty{33%{-moz-transform:rotate(15deg)}66%{opacity:0}}@-o-keyframes ghosty{33%{-o-transform:rotate(15deg)}66%{opacity:0}}@keyframes ghosty{33%{transform:rotate(15deg)}66%{opacity:0}}</style>';
  var elms = scene.find('> *');
  var ghost = elms.clone();
  var ghost = ghost.css('webkit-filter','blur('+s+')').addClass('ghost');
  scene.prepend(ghost_recipe).append(ghost);
 }

