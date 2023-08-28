import typia from "typia";

interface IPointer<T> {
    value: T;
}
interface Something {
    id: string;
}

// MESSAGE
typia.protobuf.message<
    IPointer<Record<string, string> | Record<number, bigint>>
>();
typia.protobuf.message<
    IPointer<Record<string, string> | Record<number, boolean[]>>
>();
typia.protobuf.message<
    IPointer<Record<string, string> | Record<number, Something>>
>();
typia.protobuf.message<
    IPointer<Record<string, string> | Record<number, string>[]>
>();

// DECODE
typia.protobuf.createDecode<
    IPointer<Record<string, string> | Record<number, bigint>>
>();
typia.protobuf.createDecode<
    IPointer<Record<string, string> | Record<number, boolean[]>>
>();
typia.protobuf.createDecode<
    IPointer<Record<string, string> | Record<number, Something>>
>();
typia.protobuf.createDecode<
    IPointer<Record<string, string> | Record<number, string>[]>
>();

// ENCODE
typia.protobuf.createEncode<
    IPointer<Record<string, string> | Record<number, bigint>>
>();
typia.protobuf.createEncode<
    IPointer<Record<string, string> | Record<number, boolean[]>>
>();
typia.protobuf.createEncode<
    IPointer<Record<string, string> | Record<number, Something>>
>();
typia.protobuf.createEncode<
    IPointer<Record<string, string> | Record<number, string>[]>
>();
