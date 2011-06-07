# AJAX DOM

Designed to play nice with Ruby on Rails and the data-remote pattern.

## How to use

```html
<script type="text/javascript" src="/javascript/jQuery.ajaxDom-0.0.1.js"></script>

<form action="/my_action" data-remote="true" data-ajax-dom="#results <= partial.path" id="search">
<input type="text" name="whatever"/>
<input type="submit"/>
</form>

<div id="results"></div>
```

```ruby
class MyController < ActionController::Base
  def my_action
    respond_to do |format|
      format.json do
        render :json => {:results => 5, :partial => {:path => render_to_string(:partial => 'my_partial.html')}}
      end
    end
  end
end
```

## Operations
```javascript
var operations = {
  '^=': 'prepend',
  '&=': 'append',
  '==': 'replaceWith',
  '<=': 'html'
};
```

This pseudo code is incomplete but was designed to give a basic idea of usage.