import { VUE_APP_PROXY_URL } from './config';

function generateProxyUrl(url: string): string {
  const proxyUrl = VUE_APP_PROXY_URL;
  return proxyUrl + url;
}

async function getRequest(url: string): Promise<any> {
  const option = {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return new Promise<any>((resolve, reject) => {
    fetch(url)
      .then((res) => {
        // logger.debug(res);
        if (res.ok) {
          return res.json();
        }
        return reject(new Error(`${res.status}`));
      })
      .then((json) => resolve(json))
      .catch(() => {
        // logger.debug('Retry Fetch data', error);
        fetch(generateProxyUrl(url), option)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return reject(new Error(`Proxy ${res.status}`));
          })
          .then((json) => resolve(json))
          .catch((exception) => reject(new Error(`GET ${url} ${(exception as Error).message}`)));
      });
  });
}

export default {
  getRequest,
};
