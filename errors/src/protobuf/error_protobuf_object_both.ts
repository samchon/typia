import typia from "typia";

interface IPointer<T> {
  value: T;
}
type Something = {
  id: string;
} & {
  [key: string]: number;
};

// MESSAGE
typia.protobuf.message<Something>();
typia.protobuf.message<IPointer<Something[]>>();
typia.protobuf.message<IPointer<Map<string, Something>>>();
typia.protobuf.message<IPointer<Record<string, Something>>>();

// DECODE
typia.protobuf.createDecode<Something>();
typia.protobuf.createDecode<IPointer<Something[]>>();
typia.protobuf.createDecode<IPointer<Map<string, Something>>>();
typia.protobuf.createDecode<IPointer<Record<string, Something>>>();

// ENCODE
typia.protobuf.createEncode<Something>();
typia.protobuf.createEncode<IPointer<Something[]>>();
typia.protobuf.createEncode<IPointer<Map<string, Something>>>();
typia.protobuf.createEncode<IPointer<Record<string, Something>>>();
