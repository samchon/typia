import typia from "typia";

interface IPointer<T> {
    value: T;
}
interface Something {
    id: string;
    "something-strange": boolean;
}

// MESSAGE
typia.protobuf.message<Something>();
typia.protobuf.message<IPointer<Something>>();
typia.protobuf.message<IPointer<Something>[]>();

// DECODE
typia.protobuf.createDecode<Something>();
typia.protobuf.createDecode<IPointer<Something>>();
typia.protobuf.createDecode<IPointer<Something>[]>();

// ENCODE
typia.protobuf.createEncode<Something>();
typia.protobuf.createEncode<IPointer<Something>>();
typia.protobuf.createEncode<IPointer<Something>[]>();
