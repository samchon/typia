// Fixture copied from node_buffer_native_exports_is: nodeBufferNativeExportsSpoofSource.
// Declaration ownership and shape are the test input.
import type { Blob as LegacyBlob, File as LegacyFile } from "buffer";
import type { Blob as NodeBlob, File as NodeFile } from "node:buffer";
import typia from "typia";

export const isNodeBlob = typia.createIs<NodeBlob>();
export const isNodeFile = typia.createIs<NodeFile>();
export const isLegacyBlob = typia.createIs<LegacyBlob>();
export const isLegacyFile = typia.createIs<LegacyFile>();
