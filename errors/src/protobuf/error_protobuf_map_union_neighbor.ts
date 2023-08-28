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
typia.protobuf.message<
    IPointer<Map<number | bigint, Record<string, number>>>
>();
typia.protobuf.message<IPointer<Map<number | bigint, Something[]>>>();

// DECODE
typia.protobuf.createDecode<IPointer<Map<number | bigint, string>>>();
typia.protobuf.createDecode<IPointer<Map<number | bigint, Something>>>();
typia.protobuf.createDecode<
    IPointer<Map<number | bigint, Record<string, number>>>
>();
typia.protobuf.createDecode<IPointer<Map<number | bigint, Something[]>>>();

// ENCODE
typia.protobuf.createEncode<IPointer<Map<number | bigint, string>>>();
typia.protobuf.createEncode<IPointer<Map<number | bigint, Something>>>();
typia.protobuf.createEncode<
    IPointer<Map<number | bigint, Record<string, number>>>
>();
typia.protobuf.createEncode<IPointer<Map<number | bigint, Something[]>>>();
