// Fixture copied from node_buffer_native_exports_is: nodeBufferNativeExportsAugmentation.
// Declaration ownership and shape are the test input.
import "node:buffer";

declare module "node:buffer" {
  interface Blob {
    readonly __typiaNodeBufferAugmentation?: never;
  }
  interface File {
    readonly __typiaNodeBufferAugmentation?: never;
  }
}
