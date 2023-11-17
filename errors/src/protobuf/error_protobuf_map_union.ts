import typia from "typia";

interface IPointer<T> {
  value: T;
}
interface Something {
  id: string;
}

// MESSAGE
typia.protobuf.message<IPointer<Map<boolean, string> | Map<number, bigint>>>();
typia.protobuf.message<
  IPointer<Map<boolean, string> | Map<number, boolean[]>>
>();
typia.protobuf.message<
  IPointer<Map<boolean, string> | Map<number, Something>>
>();
typia.protobuf.message<
  IPointer<Map<boolean, string> | Map<number, string>[]>
>();

// DECODE
typia.protobuf.createDecode<
  IPointer<Map<boolean, string> | Map<number, bigint>>
>();
typia.protobuf.createDecode<
  IPointer<Map<boolean, string> | Map<number, boolean[]>>
>();
typia.protobuf.createDecode<
  IPointer<Map<boolean, string> | Map<number, Something>>
>();
typia.protobuf.createDecode<
  IPointer<Map<boolean, string> | Map<number, string>[]>
>();

// ENCODE
typia.protobuf.createEncode<
  IPointer<Map<boolean, string> | Map<number, bigint>>
>();
typia.protobuf.createEncode<
  IPointer<Map<boolean, string> | Map<number, boolean[]>>
>();
typia.protobuf.createEncode<
  IPointer<Map<boolean, string> | Map<number, Something>>
>();
typia.protobuf.createEncode<
  IPointer<Map<boolean, string> | Map<number, string>[]>
>();
