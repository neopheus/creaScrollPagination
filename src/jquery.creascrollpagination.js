/**
 * Created by Neo on 25/01/2017.
 */
(function( $ ) {
  "use strict";

  $.fn.creaScrollPagination = function(options)
  {
    return this.each(function()
    {
      $.fn.creaScrollPagination.init($(this), options);
    });
  };
  $.fn.creaScrollPagination.defaults =
  {
    offsetBottom: 0,
    nextSelector: 'a.next:last',
    pagerSelector: '.pagination',
    contentSelector: '#products-content',
    callback: function() { return true; }
  };
  $.fn.creaScrollPagination.init = function($e, options){
    var _options = $.extend({}, $.fn.creaScrollPagination.defaults, options ),
        _$window = $(window),
        _lastUrl = null,
        _newUrl = null,
        _loading = false;

    $(_options.pagerSelector).hide();

    _$window.scroll(function(){
      if ($(document).height() - _$window.height() - _options.offsetBottom <= _$window.scrollTop()) {
        if (!_loading){
          _loading = true;
          _newUrl = $(_options.nextSelector).attr('href');
          if (_newUrl != _lastUrl){
            _lastUrl = _newUrl;
            $.ajax({
              url: _newUrl,
              dataType: 'html',
              success: function(html) {
                var mydata = $(html).find(_options.contentSelector);
                $e.append(mydata);
                _loading = false;
                $(_options.pagerSelector).hide();
                _options.callback();
              }
            });
          }
        }
      }
    });
  };
})(jQuery);
