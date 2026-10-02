// Fixture copied from user_global_native_identity: userGlobalNativeIdentitySchemaSource.
// Declaration ownership and shape are the test input.
import typia from "typia";

export const jsonSchema = typia.json.schema<File>();
export const jsonStringify = typia.json.createStringify<File>();
export const jsonIsStringify = typia.json.createIsStringify<File>();
export const protobufMessage = typia.protobuf.message<Blob>();
export const protobufEncode = typia.protobuf.createIsEncode<Blob>();
export const llmSchema = typia.llm.schema<File>({});
