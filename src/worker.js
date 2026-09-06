// Minimal asset-serving Worker for the CairnStone 3D Console.
// index.html does all the real work (fetches CairnStone V6 directly);
// this Worker only exists to serve it as static assets on Cloudflare.
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
