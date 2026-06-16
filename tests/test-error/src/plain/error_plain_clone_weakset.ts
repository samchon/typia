import typia from "typia";

interface IPointer<T> {
  value: T;
}
interface Something {
  id: string;
}

typia.plain.createClone<IPointer<WeakSet<Something>>>();
typia.plain.createClone<IPointer<WeakSet<Something[]>>>();
typia.plain.createClone<IPointer<Record<string, WeakSet<Something>>>>();
