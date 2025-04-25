// UV config

// L bare stealers, we use wisp ;)

self.__uv$config = {
  prefix: "/b/uv/service/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/b/uv/uv.handler.js",
  client: "/b/uv/uv.client.js",
  bundle: "/b/uv/uv.bundle.js",
  config: "/b/uv/uv.config.js",
  sw: "/b/uv/uv.sw.js",
};
