# [jQuery pagination plugin (bootstrap powered)](http://esimakin.github.io/twbs-pagination/)

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

## Contributing
For development use grunt build to make minified file.
To use grunt install packages by using: npm install

## Demo and Docs
For more information see [docs on github pages](http://esimakin.github.io/twbs-pagination/)