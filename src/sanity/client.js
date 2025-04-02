import SanityClientConstructor from "@sanity/client";

export const client = SanityClientConstructor({
    projctId: "zccxe3md",
    dataset: "production", 
    apiVersion: "v2025-03-24",
    useCdn: false,
})