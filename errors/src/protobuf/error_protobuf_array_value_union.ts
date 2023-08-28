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
typia.protobuf.message<IPointer<Array<string | number>>>();
typia.protobuf.message<IPointer<Array<Something | Nothing>>>();

// DECODE
typia.protobuf.createDecode<IPointer<Array<string | number>>>();
typia.protobuf.createDecode<IPointer<Array<Something | Nothing>>>();

// ENCODE
typia.protobuf.createEncode<IPointer<Array<string | number>>>();
typia.protobuf.createEncode<IPointer<Array<Something | Nothing>>>();
