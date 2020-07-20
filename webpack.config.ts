import webpackGenius from 'webpack-genius';
import path from 'path';
import fs from 'fs';

export default webpackGenius(3100, (genius) => {
  const entries = {};
  const dirs = fs.readdirSync('./src/demos');

  dirs.forEach((name) => {
    entries[name] = `./src/demos/${name}/index.tsx`;
  });

  genius.entry(entries)
    .pluginHtml((plugin) => {
      dirs.forEach((name, index) => {
        const newHtml = index === 0 ? plugin : plugin.clone();

        newHtml.mergeConfig({
          filename: name + '.html',
          chunks: [name],
        });
      });
    })
    .output((output) => {
      output.path = path.resolve('./docs');
    });
});
