// Fixture copied from node_buffer_native_exports_is: nodeBufferNativeExportsAmbientDeclarations.
// Declaration ownership and shape are the test input.
declare module "user-buffer-lookalike" {
  export interface Blob {
    ambientBrand: string;
    size: number;
    type: string;
  }
  export interface File extends Blob {
    lastModified: number;
    name: string;
    webkitRelativePath: string;
  }
}
