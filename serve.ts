// DENO DEPLOY FUNCTION TO SERVE FILES INSIDE /build DIRECTORY

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request) {
    const { pathname } = new URL(request.url);
    try {
        const file = await Deno.readFile(`./build${pathname}`);
        return new Response(file, {
            /*headers: {
                "content-type": "text/css",
            }, ONLY USE IF NEEDED */
        });
    }
    catch {
        return new Response(null, {
            status: 404,
            statusText: "Not found",
        });
    }
}
