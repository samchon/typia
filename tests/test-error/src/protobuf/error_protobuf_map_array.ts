import typia from "typia";

interface IPointer<T> {
  value: T;
}
interface Something {
  id: string;
}

// MESSAGE
typia.protobuf.message<IPointer<Map<boolean, number>[]>>();
typia.protobuf.message<IPointer<Map<number, string>[]>>();
typia.protobuf.message<IPointer<Map<bigint, Something>[]>>();

// DECODE
typia.protobuf.createDecode<IPointer<Map<boolean, number>[]>>();
typia.protobuf.createDecode<IPointer<Map<number, string>[]>>();
typia.protobuf.createDecode<IPointer<Map<bigint, Something>[]>>();

// ENCODE
typia.protobuf.createEncode<IPointer<Map<boolean, number>[]>>();
typia.protobuf.createEncode<IPointer<Map<number, string>[]>>();
typia.protobuf.createEncode<IPointer<Map<bigint, Something>[]>>();
