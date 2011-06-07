// jquery.ajaxDom-0.0.1.js
// copyright jeshua borges
// https://github.com/jeshuaborges/ajax-dom

// USAGE:
//  <div id="report" data-ajax-dom="#report .results ^= path.to.fragment">
//    <a href="/pull_results" data-remote="true">get</a>
//    <div class=".results"></div>
//  </div>
(function($) {
  
  // returns the json object reflected in the string
  // Arguments
  //  json: Plain object
  //  path: string to path
  // Example:
  //  jQuery.navJSON({foo:{bar:'zeitgeist'}}, 'foo.bar') => 'zeitgeist'
  jQuery.navJSON = function( json, path ) {
    $.each(path.split('.'), function(i, part) {
      json = json[part];
    });
    return json;
  };

  $(function() {
    doc.delegate('[data-ajax-dom]', 'ajax:success', function(e, json) {
      var operations = {
        '^=': 'prepend',
        '&=': 'append',
        '==': 'replaceWith',
        '<=': 'html'
      };

      var me        = $(this),
          action    = me.data('ajax-dom'),
          meta      = action.match(/(.+) (.=) ([.\w]+)/),
          selector  = meta[1],
          // lookup coorelating method name
          operation = operations[meta[2]],
          fragPath  = meta[3];

      // navigate json response to find fragment
      fragment = $.navJSON(json, fragPath);

      // update dom!
      $(selector)[operation](fragment);
    });
  });
})(jQuery);