import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev';
import webpackDev from 'webpack-dev-middleware';

const port = 4200;
const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDev(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {

    if (err) console.log('Error occured !');
    else {
        open('http://127.0.0.1:' + port);
    }
});