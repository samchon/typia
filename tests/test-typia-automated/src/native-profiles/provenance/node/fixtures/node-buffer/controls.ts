// Fixture copied from node_buffer_native_exports_is: nodeBufferNativeExportsControlSource.
// Declaration ownership and shape are the test input.
import type {
  Blob as PackageBlob,
  File as PackageFile,
} from "native-buffer-lookalike";
import typia from "typia";
import type {
  Blob as AmbientBlob,
  File as AmbientFile,
} from "user-buffer-lookalike";

export const isPackageBlob = typia.createIs<PackageBlob>();
export const isPackageFile = typia.createIs<PackageFile>();
export const isAmbientBlob = typia.createIs<AmbientBlob>();
export const isAmbientFile = typia.createIs<AmbientFile>();
