// Fixture copied from native_collection_identity_is: nativeCollectionIdentityRealSource.
// Declaration ownership and shape are the test input.
import typia from "typia";

export const isRealMap = typia.createIs<Map<string, number>>();
export const isRealSet = typia.createIs<Set<number>>();
export const isRealWeakMap = typia.createIs<WeakMap<object, number>>();
export const isRealWeakSet = typia.createIs<WeakSet<object>>();
