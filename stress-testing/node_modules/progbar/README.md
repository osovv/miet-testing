# node-progbar

`node-progbar` is a library for drawing progress bars in `xterm`-like (or
hopefully any somewhat *ECMA-48*-compatible) terminals.

## Usage

```javascript
var mod_progbar = require('progbar');

/*
 * Instantiate the ProgressBar class, like so.  This instance
 * represents a single transfer operation, and will draw one
 * final status report when the transfer is deemed over.
 *
 * NB: you may also set 'nosize' to true, instead of passing
 *     'size', if you do not know the length of the stream
 *     in advance.
 */
var bar = new mod_progbar.ProgressBar({
	filename: 'whatever.zip', // filename to display
	size: 10048               // filesize in bytes
});

/*
 * Usually, you would use the progress bar in Stream data
 * events, like so:
 */
stream.on('data', function (data) {
	bar.advance(data.length);
});
stream.on('end', function (data) {
	bar.end();
});

/*
 * You may also use the stream() method to get a passthrough stream
 * that you may pipe your data through.  The bar will advance with
 * the passage of bytes through the stream, and end() will be called
 * at the end of the stream.
 */
input_stream.pipe(bar.stream()).pipe(output_stream);
```
