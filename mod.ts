import { getPageID } from "./utils.ts";

interface GLASS_OPTIONS {

}

// https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#language
interface ClientMeta {
    clientID: string
    device?: {
        screen_resolution: string
        viewport_size: string
        user_language: string
    },
    content: {
        document_path: string
        document_title: string
    }
}

const GLASS_API_URL = "https://glass-api.deno.dev/api/v1"

class GLASS {

    readonly clientID: string;
    readonly pageID: string;

    constructor() {
        this.clientID = "add";
        this.pageID = getPageID();
    }

    /**
     * Aggregates and returns an object containing the client meta data 
     * according to the configured privacy settings.
     */
    getClientMeta(): ClientMeta {

        // ClientID
        //

        return {
            clientID: this.clientID,
            content: {
                document_path: window.location.pathname,
                // @ts-ignore
                document_title: document.title
            }
        };
    }

    async ping() {
        const meta = this.getClientMeta();
        // HTTP Send meta
        console.log(this.pageID);
        console.log(meta);

        const body = JSON.stringify({
            pageID: this.pageID,
            clientMeta: meta
        });
        
        // We use the same hack as Google to ignore CORS 
        // by sending the payload through an img GET request
        // @ts-ignore
        let img = document.createElement("img");
        //img.src = `${GLASS_API_URL}/ping?payload=${window.encodeURI(window.btoa(body))}`
        img.src = `${GLASS_API_URL}/ping?payload=${window.btoa(body)}`
    }

}

// @ts-ignore TODO: REMOVE FOR DIST
window.GLASS = new GLASS();
// @ts-ignore
window.GLASS.ping();