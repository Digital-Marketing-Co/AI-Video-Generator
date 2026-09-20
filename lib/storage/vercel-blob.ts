import { del, head, put } from "@vercel/blob";
import type { MediaStorageProvider } from "./types";

export class VercelBlobStorage implements MediaStorageProvider {
  async upload({pathname,body,contentType}:{pathname:string;body:Blob|ArrayBuffer|ReadableStream;contentType?:string}){
    const b=await put(pathname,body,{access:"public",contentType,addRandomSuffix:true});
    return {url:b.url,contentType:b.contentType};
  }
  async delete(url:string){await del(url)}
  async getMetadata(url:string){return await head(url) as unknown as Record<string,unknown>}
  async createDownloadAccess(url:string){return url}
}
