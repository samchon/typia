// Fixture copied from node_buffer_native_exports_is: nodeBufferNativeExportsSource.
// Declaration ownership and shape are the test input.
import type { Blob as LegacyBlob, File as LegacyFile } from "buffer";
import type { Blob as NodeBlob, File as NodeFile } from "node:buffer";
import typia from "typia";

declare const nodeBlobBrand: unique symbol;
declare const nodeFileBrand: unique symbol;
type BrandedNodeBlob = NodeBlob & { readonly [nodeBlobBrand]?: never };
type BrandedNodeFile = NodeFile & { readonly [nodeFileBrand]?: never };
type NodeBlobIntersectionUnion =
  | (NodeBlob & { blobLabel: string })
  | { nodeBlobOk: boolean };
type NodeFileIntersectionUnion =
  | (NodeFile & { fileLabel: string })
  | { nodeFileOk: boolean };

export const isNodeBlob = typia.createIs<NodeBlob>();
export const isNodeFile = typia.createIs<NodeFile>();
export const isLegacyBlob = typia.createIs<LegacyBlob>();
export const isLegacyFile = typia.createIs<LegacyFile>();
export const isGlobalBlob = typia.createIs<Blob>();
export const isGlobalFile = typia.createIs<File>();
export const isBrandedNodeBlob = typia.createIs<BrandedNodeBlob>();
export const isBrandedNodeFile = typia.createIs<BrandedNodeFile>();
export const isNodeBlobIntersectionUnion =
  typia.createIs<NodeBlobIntersectionUnion>();
export const isNodeFileIntersectionUnion =
  typia.createIs<NodeFileIntersectionUnion>();
