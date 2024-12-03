import typia from "typia";

interface IPointer<T> {
  value: T;
}
interface Something {
  id: string;
}

// MESSAGE
typia.protobuf.message<IPointer<Something | Record<string, number>>>();

// DECODE
typia.protobuf.createDecode<IPointer<Something | Record<string, number>>>();

// ENCODE
typia.protobuf.createEncode<IPointer<Something | Record<string, number>>>();
