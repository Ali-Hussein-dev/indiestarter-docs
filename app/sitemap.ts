import { type MetadataRoute } from "next";
import { headers } from "next/headers";
import { urls } from "@/constants/urls";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const headersList = await headers();
    const host = headersList.get("host");
    const paths = Object.values(urls.docs);
    return [
        {
            url: `https://${host}`,
            lastModified: new Date(),
        },
        ...paths.map((path) => ({
            url: `https://${host}/${path}`,
            lastModified: new Date(),
        })),
    ];
}
