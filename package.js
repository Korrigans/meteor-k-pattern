Package.describe({
  name: 'korrigans:k-pattern',
  version: '0.1.0',
  summary: 'A pattern API compatible with check package. Used by k-schema.',
  git: 'https://github.com/Korrigans/meteor-k-pattern.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use([
    'ecmascript',
    'check',
    'stevezhu:lodash@3.10.1',
    'stampitorg:stampit@2.1.1',
    'korrigans:k'
  ]);

  api.imply('korrigans:k');

  api.export('KP');

  api.addFiles([
    'k-pattern.js',
    'symbols.js',
    'check-hook.js',
    'checks/type.js',
    'stamps/base.js',
    'stamps/primitives/undefined.js',
    'stamps/primitives/null.js',
    'stamps/primitives/function.js',
    'stamps/primitives/boolean.js',
    'stamps/primitives/number.js',
    'stamps/primitives/integer.js',
    'stamps/primitives/string.js'
  ]);
});

Package.onTest(function(api) {
  api.use([
    'ecmascript',
    'check',
    'stevezhu:lodash@3.10.1',
    'stampitorg:stampit@2.1.1',
    'sanjo:jasmine@0.20.2'
  ]);

  api.use('korrigans:k-pattern');

  // TODO: Remove, it's dev purpose !
  api.imply('check');
  api.imply('stevezhu:lodash@3.10.1');
  api.imply('stampitorg:stampit@2.1.1');
  api.export('K');
  api.export('KP');

  api.addFiles([
    'tests/units/namespaces.js',
    'tests/units/stamps/base.js',
    'tests/units/stamps/primitives/undefined.js',
    'tests/units/stamps/primitives/null.js',
    'tests/units/stamps/primitives/function.js',
    'tests/units/stamps/primitives/boolean.js',
    'tests/units/stamps/primitives/number.js',
    'tests/units/stamps/primitives/integer.js',
    'tests/units/stamps/primitives/string.js'
  ]);
});
