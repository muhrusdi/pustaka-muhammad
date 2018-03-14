import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { extractCritical } from 'emotion-server'
import store from './src/store'

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
    const ConnectedBody = () => (
      <Provider store={store}>{bodyComponent}</Provider>
    )
    const { html, ids, css } = extractCritical(
      renderToString(<ConnectedBody />)
    );

    const criticalStyle = <style dangerouslySetInnerHTML={{ __html: css }} />;
    const criticalIds = (
      <script
        dangerouslySetInnerHTML={{
          __html: `window._emotion = ${JSON.stringify(ids)};`,
        }}
      />
    );
    setHeadComponents([criticalIds, criticalStyle]);
    replaceBodyHTMLString(html);
}