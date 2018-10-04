# [jQuery pagination plugin (bootstrap powered)](http://josecebe.github.io/twbs-pagination/)

### Basic usage ###

Plugin requires jQuery (required - 1.7.0 or higher).

You can use Bootstrap CSS styles and markup (or use your own).

The following code shows call the function on `<ul>` tag (it can be also `<div>` tag).

```javascript
$('#pagination-demo').twbsPagination({
  totalPages: 35,
  visiblePages: 7,
  onPageClick: function (event, page) {
    $('#page-content').text('Page ' + page);
  }
});
```
if no of Pages is only 1 then variable 'totalPages' would be '1' & variable 'visiblePages' would be '2'.

## Contributing
For development use grunt build to make minified file.
To use grunt install packages by using: npm install

## Demo and Docs
For more information see [docs on github pages](http://josecebe.github.io/twbs-pagination/) (not completed yet)
