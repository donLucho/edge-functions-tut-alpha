export default async (request, context) => {
  
  // context.log("Calling hello.js Edge Function!");

  // console.log("request", request);
  // EdgeRequest {
  //   bodyUsed: false,
  //   headers: Headers {
  //   accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  //   "accept-encoding": "gzip, deflate, br",
  //   "accept-language": "en-US,en;q=0.5",
  //   connection: "close",
  //   dnt: "1",
  //   host: "localhost:8888",
  //   "sec-fetch-dest": "document",
  //   "sec-fetch-mode": "navigate",
  //   "sec-fetch-site": "none",
  //   "sec-fetch-user": "?1",
  //   "upgrade-insecure-requests": "1",
  //   "user-agent": "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/119.0",
  //   "x-forwarded-for": "::ffff:127.0.0.1",
  //   "x-nf-deploy-id": "0",
  //   "x-nf-request-id": "01HDQB728BG2D7MMP77N2BCNYQ"
  // },
  //   method: "GET",
  //   redirect: "follow",
  //   url: "http://localhost:8888/hello"
  // }

  // console.log("context", context);
  /* {
    cookies: {
      delete: [Function: bound delete],
      get: [Function: bound get],
      set: [Function: bound set]
    },
    deploy: { id: "0" },
    geo: {
      city: "Heredia",
      country: { code: "CR", name: "Costa Rica" },
      subdivision: { code: "H", name: "Heredia Province" },
      timezone: "America/Costa_Rica",
      latitude: 9.9983,
      longitude: -84.1171
    },
    ip: "127.0.0.1",
    json: [Function: bound json],
    log: [Function (anonymous)],
    next: [Function: next],
    params: [Getter],
    requestId: "01HDQBAZ1YM7RDQE70FNW821KW",
    rewrite: [Function: bound rewrite],
    site: {},
    account: {},
    server: { region: "local" }
  }*/

  return new Response("Hello World from the edge!", {
    headers: {
      "content-type": "text/html"
    }
  });
};