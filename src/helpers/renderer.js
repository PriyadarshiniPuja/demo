import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';

export default (req, store, context) => {
  let content = '';

  content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();
  return `<!DOCTYPE html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <style>
                  @font-face {
                    font-family: 'Dejavu Sans';
                    src: url(/fonts/DejaVuSans-webfont.woff),
                    url(/fonts/DejaVuSans-Bold-webfont.woff),
                    url(/fonts/DejaVuSansCondensed-Bold-webfont.woff);
                    font-weight: normal;
                    font-style: normal;
                }
            </style>

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"  />

                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                <link rel="preload" href="/bundle.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
              <noscript><link rel="stylesheet" href="/bundle.css"></noscript>

            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${serialize(store.getState()).replace(
                      /</g,
                      '\\u003c'
                    )}
                </script>
                <script src="/bundle.js"></script>


            </body>
    </html>`;
};
