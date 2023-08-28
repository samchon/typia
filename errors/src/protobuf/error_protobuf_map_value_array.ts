import typia from "typia";

interface IPointer<T> {
    value: T;
}
interface Something {
    id: string;
}

// MESSAGE
typia.protobuf.message<IPointer<Map<string, number[]>>>();
typia.protobuf.message<IPointer<Map<string, Something[]>>>();

// DECODE
typia.protobuf.createDecode<IPointer<Map<string, number[]>>>();
typia.protobuf.createDecode<IPointer<Map<string, Something[]>>>();

// ENCODE
typia.protobuf.createEncode<IPointer<Map<string, number[]>>>();
typia.protobuf.createEncode<IPointer<Map<string, Something[]>>>();
