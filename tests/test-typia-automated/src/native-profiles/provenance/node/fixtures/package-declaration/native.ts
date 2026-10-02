// Fixture copied from package_declaration_native_identity_is: packageDeclarationNativeIdentityNativeSource.
// Declaration ownership and shape are the test input.
import typia from "typia";

export const isNativeDate = typia.createIs<Date>();
export const isNativeMap = typia.createIs<Map<string, number>>();
export const isNativeSet = typia.createIs<Set<string>>();
export const isNativeWeakMap = typia.createIs<WeakMap<object, string>>();
export const isNativeWeakSet = typia.createIs<WeakSet<object>>();
export const isNativeFile = typia.createIs<File>();
export const isNativeBlob = typia.createIs<Blob>();
