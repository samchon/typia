// Fixture copied from user_global_native_identity: userGlobalNativeIdentityProvidedSource.
// Declaration ownership and shape are the test input.
import typia from "typia";

export const createdIsDate = typia.createIs<Date>();
export const createdIsRegExp = typia.createIs<RegExp>();
export const createdIsBytes = typia.createIs<Uint8Array>();
export const createdIsMap = typia.createIs<Map<string, number>>();
export const createdIsSet = typia.createIs<Set<string>>();
export const createdIsWeakMap = typia.createIs<WeakMap<object, string>>();
export const createdIsWeakSet = typia.createIs<WeakSet<object>>();
export const createdIsFile = typia.createIs<File>();
export const createdIsBlob = typia.createIs<Blob>();
