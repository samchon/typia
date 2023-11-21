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
typia.protobuf.message<IPointer<Record<string, number | string>>>();
typia.protobuf.message<IPointer<Record<string, number | Something>>>();
typia.protobuf.message<IPointer<Record<string, Something | Nothing>>>();

// DECODE
typia.protobuf.createDecode<IPointer<Record<string, number | string>>>();
typia.protobuf.createDecode<IPointer<Record<string, number | Something>>>();
typia.protobuf.createDecode<IPointer<Record<string, Something | Nothing>>>();

// ENCODE
typia.protobuf.createEncode<IPointer<Record<string, number | string>>>();
typia.protobuf.createEncode<IPointer<Record<string, number | Something>>>();
typia.protobuf.createEncode<IPointer<Record<string, Something | Nothing>>>();
