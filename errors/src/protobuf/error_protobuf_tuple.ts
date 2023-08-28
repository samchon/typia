import typia from "typia";

interface IPointer<T> {
    value: T;
}
interface Something {
    a: number;
}
interface Nothing {
    b: string;
}

// MESSAGE
typia.protobuf.message<IPointer<[number, string]>>();
typia.protobuf.message<IPointer<[Something, Nothing]>>();

// DECODE
typia.protobuf.createDecode<IPointer<[number, string]>>();
typia.protobuf.createDecode<IPointer<[Something, Nothing]>>();

// ENCODE
typia.protobuf.createEncode<IPointer<[number, string]>>();
typia.protobuf.createEncode<IPointer<[Something, Nothing]>>();
