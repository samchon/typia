// Fixture copied from native_collection_identity_is: nativeCollectionIdentityUserSource.
// Declaration ownership and shape are the test input.
import typia from "typia";

interface Map<K, V> {
  brandMap: string;
  keyMap: K;
  valMap: V;
}
interface Set<T> {
  brandSet: string;
  elemSet: T;
}
interface WeakMap<K extends object, V> {
  brandWeakMap: string;
}
interface WeakSet<T extends object> {
  brandWeakSet: string;
}

export const isUserMap = typia.createIs<Map<string, number>>();
export const isUserSet = typia.createIs<Set<number>>();
export const isUserWeakMap = typia.createIs<WeakMap<object, number>>();
export const isUserWeakSet = typia.createIs<WeakSet<object>>();
