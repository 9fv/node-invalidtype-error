# API reference of :

An exception class to throw &#x27;invalid type&#x27; errors.

---
&#x1F34E; **__Warning !__ Work in progress...**
---
## API

<a name="module_invalidtype-error"></a>

### invalidtype-error
An exception class to throw "not implemented" error.

**Example**  
```js
const {InvalidTypeError} = require('@9fv.io/invalidtype-error')

function test(o) {
  if (typeof o !== 'object') {
    throw new InvalidTypeError('Provided paramater must be an object!')
  }
}

test('string') // throw an error of type {InvalidTypeError}.
```
<a name="module_invalidtype-error..InvalidTypeError"></a>

#### invalidtype-error~InvalidTypeError
An exception class to throw invalidtype error.

**Kind**: inner class of [<code>invalidtype-error</code>](#module_invalidtype-error)  
**Category**: error  
**Access**: public  
## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 [SAS 9 Février](https://9fevrier.com/)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>

***

_Documentation generated on Wed, 21 Feb 2018 13:46:35 GMT_

**Copyright &copy; 2018 [SAS 9 Février](https://9fevrier.com/)**
