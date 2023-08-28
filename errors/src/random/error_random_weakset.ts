import typia from "typia";

interface IPointer<T> {
    value: T;
}
interface Something {
    id: string;
}

typia.createRandom<IPointer<WeakSet<Something>>>();
typia.createRandom<IPointer<WeakSet<Something[]>>>();
typia.createRandom<IPointer<Record<string, WeakSet<Something>>>>();
