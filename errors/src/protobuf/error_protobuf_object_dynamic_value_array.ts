import typia from "typia";

interface IPointer<T> {
    value: T;
}
interface Something {
    id: string;
}

// MESSAGE
typia.protobuf.message<IPointer<Record<string, number[]>>>();
typia.protobuf.message<IPointer<Record<string, Something[]>>>();

// DECODE
typia.protobuf.createDecode<IPointer<Record<string, number[]>>>();
typia.protobuf.createDecode<IPointer<Record<string, Something[]>>>();

// ENCODE
typia.protobuf.createEncode<IPointer<Record<string, number[]>>>();
typia.protobuf.createEncode<IPointer<Record<string, Something[]>>>();
