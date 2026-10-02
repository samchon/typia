// Fixture copied from user_global_native_identity: userGlobalNativeIdentityAliasSource.
// Declaration ownership and shape are the test input.
import typia from "typia";

export const isAliasFile = (input: unknown): boolean => typia.is<File>(input);
export const createdIsAliasBlob = typia.createIs<Blob>();
