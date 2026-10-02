// Fixture copied from user_global_native_identity: userGlobalNativeIdentityControlSource.
// Declaration ownership and shape are the test input.
import typia from "typia";

interface FileEntry {
  nearMissBrand: string;
}
interface Blobby {
  prefixBrand: string;
}

export const createdIsFileEntry = typia.createIs<FileEntry>();
export const createdIsBlobby = typia.createIs<Blobby>();
