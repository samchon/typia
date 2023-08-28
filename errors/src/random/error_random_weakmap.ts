import typia from "typia";

interface IPointer<T> {
    value: T;
}
interface Something {
    id: string;
}

typia.createRandom<IPointer<WeakMap<Something, string>>>();
typia.createRandom<IPointer<WeakMap<Something, number[]>>>();
typia.createRandom<IPointer<Record<string, WeakMap<Something, boolean>>>>();
