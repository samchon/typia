// Fixture copied from lib_replacement_native_identity: libReplacementNativeIdentitySource.
// Declaration ownership and shape are the test input.
import typia from "typia";

export const createdIsProbe = typia.createIs<LibReplacementProbe>();
export const createdIsMap = typia.createIs<Map<string, number>>();
export const createdIsSet = typia.createIs<Set<string>>();
export const createdIsWeakMap = typia.createIs<WeakMap<object, string>>();
export const createdIsWeakSet = typia.createIs<WeakSet<object>>();
export const createdIsDate = typia.createIs<Date>();
export const createdIsBytes = typia.createIs<Uint8Array>();
