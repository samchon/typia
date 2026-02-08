import typia from "typia";

interface IPointer<T> {
  value: T;
}
interface Something {
  id: string;
}

// MESSAGE
typia.protobuf.message<IPointer<number[][]>>();
typia.protobuf.message<IPointer<Something[][]>>();

// DECODE
typia.protobuf.createDecode<IPointer<number[][]>>();
typia.protobuf.createDecode<IPointer<Something[][]>>();

// ENCODE
typia.protobuf.createEncode<IPointer<number[][]>>();
typia.protobuf.createEncode<IPointer<Something[][]>>();
