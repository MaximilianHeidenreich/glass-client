import { Sha256 } from "./deps.ts";

export function getPageID(): string {
    const hash = new Sha256();
    hash.update("window.location.hostname");
    return hash.toString();
}