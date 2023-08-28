import typia from "typia";

interface IPointer<T> {
    value: T;
}
interface Something {
    id: string;
}

typia.misc.createClone<IPointer<WeakMap<Something, string>>>();
typia.misc.createClone<IPointer<WeakMap<Something, number[]>>>();
typia.misc.createClone<IPointer<Record<string, WeakMap<Something, boolean>>>>();
