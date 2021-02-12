webpackHotUpdate(6,{

/***/ "../posts-built/2020/sqlite-performance-tuning.md.json":
/*!*************************************************************!*\
  !*** ../posts-built/2020/sqlite-performance-tuning.md.json ***!
  \*************************************************************/
/*! exports provided: filename, frontmatter, preview, content_ast, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"filename\\\":\\\"2020/sqlite-performance-tuning.md\\\",\\\"frontmatter\\\":{\\\"references\\\":[],\\\"date\\\":\\\"2020-06-26\\\",\\\"subtitle\\\":\\\"Scaling SQLite databases to many concurrent readers and multiple gigabytes while maintaining 100k SELECTs per second\\\",\\\"csl\\\":\\\"../ieee-with-url.csl\\\",\\\"hidden\\\":false,\\\"url2cite-link-output\\\":\\\"sup\\\",\\\"title\\\":\\\"SQLite performance tuning\\\"},\\\"preview\\\":\\\"undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined \\\",\\\"content_ast\\\":[{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined\\\"}]},{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined\\\"}]},{\\\"t\\\":\\\"Header\\\",\\\"c\\\":[2,[\\\"run-these-every-time-you-connect-to-the-db\\\",[],[]],[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"Run these every time you connect to the db\\\"}]]},{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined\\\"}]},{\\\"t\\\":\\\"BulletList\\\",\\\"c\\\":[[{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined\\\"}]},{\\\"t\\\":\\\"CodeBlock\\\",\\\"c\\\":[[\\\"\\\",[\\\"sql\\\"],[]],\\\"pragma journal_mode = WAL;\\\"]},{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined\\\"}]}],[{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined\\\"}]},{\\\"t\\\":\\\"CodeBlock\\\",\\\"c\\\":[[\\\"\\\",[\\\"sql\\\"],[]],\\\"pragma synchronous = normal;\\\"]},{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined \\\"},{\\\"t\\\":\\\"Code\\\",\\\"c\\\":[[\\\"\\\",[],[]],\\\"synchronous=off\\\"]},{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined undefined \\\"},{\\\"t\\\":\\\"Code\\\",\\\"c\\\":[[\\\"\\\",[],[]],\\\"full\\\"]},{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined \\\"},{\\\"t\\\":\\\"Link\\\",\\\"c\\\":[[\\\"\\\",[],[]],[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"FSYNC\\\"}],[\\\"https://en.wikipedia.org/wiki/Sync_(Unix)\\\",\\\"\\\"]]},{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined \\\"},{\\\"t\\\":\\\"Link\\\",\\\"c\\\":[[\\\"\\\",[\\\"uri\\\"],[]],[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"https://www.sqlite.org/pragma.html#pragma_synchronous\\\"}],[\\\"https://www.sqlite.org/pragma.html#pragma_synchronous\\\",\\\"\\\"]]}]}],[{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined\\\"}]},{\\\"t\\\":\\\"CodeBlock\\\",\\\"c\\\":[[\\\"\\\",[\\\"sql\\\"],[]],\\\"pragma temp_store = memory;\\\"]},{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined undefined undefined undefined undefined undefined undefined \\\"},{\\\"t\\\":\\\"Link\\\",\\\"c\\\":[[\\\"\\\",[],[]],[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"creates temporary indices\\\"}],[\\\"https://www.sqlite.org/tempfiles.html#transient_indices\\\",\\\"\\\"]]},{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\" undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined\\\"}]}],[{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined\\\"}]},{\\\"t\\\":\\\"CodeBlock\\\",\\\"c\\\":[[\\\"\\\",[\\\"sql\\\"],[]],\\\"pragma mmap_size = 30000000000;\\\"]},{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined\\\"}]}],[{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined undefined\\\"}]},{\\\"t\\\":\\\"CodeBlock\\\",\\\"c\\\":[[\\\"\\\",[\\\"sql\\\"],[]],\\\"pragma page_size = 32768;\\\"]},{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined\\\"}]}]]},{\\\"t\\\":\\\"Header\\\",\\\"c\\\":[3,[\\\"summary\\\",[],[]],[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"Summary\\\"}]]},{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined\\\"}]},{\\\"t\\\":\\\"CodeBlock\\\",\\\"c\\\":[[\\\"\\\",[\\\"sql\\\"],[]],\\\"pragma journal_mode = WAL;\\\\npragma synchronous = normal;\\\\npragma temp_store = memory;\\\\npragma mmap_size = 30000000000;\\\"]},{\\\"t\\\":\\\"Header\\\",\\\"c\\\":[2,[\\\"more-things-that-must-be-run-manually\\\",[],[]],[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"More things that must be run manually\\\"}]]},{\\\"t\\\":\\\"BulletList\\\",\\\"c\\\":[[{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined\\\"}]},{\\\"t\\\":\\\"CodeBlock\\\",\\\"c\\\":[[\\\"\\\",[\\\"sql\\\"],[]],\\\"pragma vacuum;\\\"]},{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined\\\"}]}],[{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined\\\"}]},{\\\"t\\\":\\\"CodeBlock\\\",\\\"c\\\":[[\\\"\\\",[\\\"sql\\\"],[]],\\\"pragma optimize;\\\"]},{\\\"t\\\":\\\"BlockQuote\\\",\\\"c\\\":[{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined \\\"},{\\\"t\\\":\\\"Quoted\\\",\\\"c\\\":[{\\\"t\\\":\\\"DoubleQuote\\\"},[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"PRAGMA optimize\\\"}]]},{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\" undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined \\\"},{\\\"t\\\":\\\"Quoted\\\",\\\"c\\\":[{\\\"t\\\":\\\"DoubleQuote\\\"},[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"PRAGMA optimize\\\"}]]},{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\" undefined undefined undefined \\\"},{\\\"t\\\":\\\"Span\\\",\\\"c\\\":[[\\\"\\\",[\\\"source\\\"],[]],[{\\\"t\\\":\\\"Link\\\",\\\"c\\\":[[\\\"\\\",[\\\"uri\\\"],[]],[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"https://www.sqlite.org/pragma.html#pragma_optimize\\\"}],[\\\"https://www.sqlite.org/pragma.html#pragma_optimize\\\",\\\"\\\"]]}]]}]}]}],[{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined\\\"}]},{\\\"t\\\":\\\"CodeBlock\\\",\\\"c\\\":[[\\\"\\\",[\\\"sql\\\"],[]],\\\"pragma auto_vacuum = incremental; -- once on first DB create\\\\npragma incremental_vacuum; -- regularily\\\"]},{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined\\\"}]},{\\\"t\\\":\\\"BlockQuote\\\",\\\"c\\\":[{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined \\\"},{\\\"t\\\":\\\"Span\\\",\\\"c\\\":[[\\\"\\\",[\\\"source\\\"],[]],[{\\\"t\\\":\\\"Link\\\",\\\"c\\\":[[\\\"\\\",[\\\"uri\\\"],[]],[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"https://www.sqlite.org/pragma.html#pragma_incremental_vacuum\\\"}],[\\\"https://www.sqlite.org/pragma.html#pragma_incremental_vacuum\\\",\\\"\\\"]]}]]}]}]}]]},{\\\"t\\\":\\\"Header\\\",\\\"c\\\":[2,[\\\"regarding-wal-mode\\\",[],[]],[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"Regarding WAL mode\\\"}]]},{\\\"t\\\":\\\"Para\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined \\\"},{\\\"t\\\":\\\"Link\\\",\\\"c\\\":[[\\\"\\\",[],[]],[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"doing wal_autocheckpoint\\\"}],[\\\"https://www.sqlite.org/wal.html#ckpt\\\",\\\"\\\"]]},{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined undefined undefined undefined undefined undefined\\\"}]},{\\\"t\\\":\\\"OrderedList\\\",\\\"c\\\":[[1,{\\\"t\\\":\\\"Decimal\\\"},{\\\"t\\\":\\\"Period\\\"}],[[{\\\"t\\\":\\\"Plain\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined \\\"},{\\\"t\\\":\\\"Link\\\",\\\"c\\\":[[\\\"\\\",[],[]],[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"wal_autocheckpoint interval\\\"}],[\\\"https://www.sqlite.org/pragma.html#pragma_wal_autocheckpoint\\\",\\\"\\\"]]},{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined undefined undefined undefined undefined undefined\\\"}]}],[{\\\"t\\\":\\\"Plain\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined \\\"},{\\\"t\\\":\\\"Code\\\",\\\"c\\\":[[\\\"\\\",[],[]],\\\"pragma wal_checkpoint(full)\\\"]},{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\" undefined \\\"},{\\\"t\\\":\\\"Code\\\",\\\"c\\\":[[\\\"\\\",[],[]],\\\"pragma wal_checkpoint(truncate)\\\"]},{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\" undefined undefined \\\"},{\\\"t\\\":\\\"Code\\\",\\\"c\\\":[[\\\"\\\",[],[]],\\\"full\\\"]},{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined \\\"},{\\\"t\\\":\\\"Code\\\",\\\"c\\\":[[\\\"\\\",[],[]],\\\"truncate\\\"]},{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\" undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined undefined \\\"},{\\\"t\\\":\\\"Emph\\\",\\\"c\\\":[{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\"can\\\"}]},{\\\"t\\\":\\\"Str\\\",\\\"c\\\":\\\" undefined undefined undefined undefined undefined undefined\\\"}]}]]]}]}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9wb3N0cy1idWlsdC8yMDIwL3NxbGl0ZS1wZXJmb3JtYW5jZS10dW5pbmcubWQuanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../posts-built/2020/sqlite-performance-tuning.md.json\n");

/***/ })

})