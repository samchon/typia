import typia from "typia";

interface IPointer<T> {
    value: T;
}
interface Something {
    id: string;
}
interface Nothing {
    x: number;
}

// MESSAGE
typia.protobuf.message<IPointer<Map<string, number | string>>>();
typia.protobuf.message<IPointer<Map<string, number | Something>>>();
typia.protobuf.message<IPointer<Map<string, Something | Nothing>>>();

// DECODE
typia.protobuf.createDecode<IPointer<Map<string, number | string>>>();
typia.protobuf.createDecode<IPointer<Map<string, number | Something>>>();
typia.protobuf.createDecode<IPointer<Map<string, Something | Nothing>>>();

// ENCODE
typia.protobuf.createEncode<IPointer<Map<string, number | string>>>();
typia.protobuf.createEncode<IPointer<Map<string, number | Something>>>();
typia.protobuf.createEncode<IPointer<Map<string, Something | Nothing>>>();
