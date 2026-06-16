import typia from "typia";

interface IPointer<T> {
  value: T;
}
interface Something {
  id: string;
}

typia.plain.createClone<IPointer<WeakMap<Something, string>>>();
typia.plain.createClone<IPointer<WeakMap<Something, number[]>>>();
typia.plain.createClone<
  IPointer<Record<string, WeakMap<Something, boolean>>>
>();
