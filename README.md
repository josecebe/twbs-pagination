## jQuery pagination plugin (bootstrap powered) ##

### Basic usage ###

Plugin requires jQuery (min - 1.11.1, recomended - 1.7.1 or higher).

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

For more information see [docs on github pages](http://esimakin.github.io/twbs-pagination/)

#### Changelog ####

v1.1.2
- Bug with multiple call 'onPageClick' in case multi-pagination fixed

v1.1.1
- Fix bug with incorrect next\prev page link in href attribute

v1.1
- Added 'hold current page on center'

v1.0
- Simple pagination

#### License ####

Copyright 2014 &copy; Eugene Simakin

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
