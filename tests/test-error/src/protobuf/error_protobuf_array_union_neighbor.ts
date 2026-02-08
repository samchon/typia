import typia from "typia";

interface IPointer<T> {
  value: T;
}
interface Something {
  id: string;
}

// MESSAGE
typia.protobuf.message<IPointer<number[] | bigint>>();
typia.protobuf.message<IPointer<Something[] | number>>();
typia.protobuf.message<IPointer<Something[] | Map<string, boolean>>>();
typia.protobuf.message<IPointer<Something[] | Record<string, string>>>();

// DECODE
typia.protobuf.createDecode<IPointer<number[] | bigint>>();
typia.protobuf.createDecode<IPointer<Something[] | number>>();
typia.protobuf.createDecode<IPointer<Something[] | Map<string, boolean>>>();
typia.protobuf.createDecode<IPointer<Something[] | Record<string, string>>>();

// ENCODE
typia.protobuf.createEncode<IPointer<number[] | bigint>>();
typia.protobuf.createEncode<IPointer<Something[] | number>>();
typia.protobuf.createEncode<IPointer<Something[] | Map<string, boolean>>>();
typia.protobuf.createEncode<IPointer<Something[] | Record<string, string>>>();
