import typia from "typia";

interface IPointer<T> {
    value: T;
}
interface Something {
    id: string;
}

// MESSAGE
typia.protobuf.message<IPointer<Map<number | bigint, string>>>();
typia.protobuf.message<IPointer<Map<number | bigint, Something>>>();
typia.protobuf.message<IPointer<Map<number | bigint, boolean[]>>>();

// DECODE
typia.protobuf.createDecode<IPointer<Map<number | bigint, string>>>();
typia.protobuf.createDecode<IPointer<Map<number | bigint, Something>>>();
typia.protobuf.createDecode<IPointer<Map<number | bigint, boolean[]>>>();

// ENCODE
typia.protobuf.createEncode<IPointer<Map<number | bigint, string>>>();
typia.protobuf.createEncode<IPointer<Map<number | bigint, Something>>>();
typia.protobuf.createEncode<IPointer<Map<number | bigint, boolean[]>>>();
