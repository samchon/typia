import typia from "typia";

interface IPointer<T> {
    value: T;
}
interface Something {
    id: string;
}

typia.misc.createClone<IPointer<WeakSet<Something>>>();
typia.misc.createClone<IPointer<WeakSet<Something[]>>>();
typia.misc.createClone<IPointer<Record<string, WeakSet<Something>>>>();
