import typia, { tags } from "typia";

interface IPointer<T> {
  value: T;
}
interface Something {
  id:
    | (number & tags.Type<"uint32"> & tags.Sequence<1>)
    | (number & tags.Type<"double"> & tags.Sequence<2>)
    | string;
}

// MESSAGE
typia.protobuf.message<Something>();
typia.protobuf.message<IPointer<Something>>();
typia.protobuf.message<IPointer<Something[]>>();
typia.protobuf.message<IPointer<Map<string, Something>>>();

// DECODE
typia.protobuf.createDecode<Something>();
typia.protobuf.createDecode<IPointer<Something>>();
typia.protobuf.createDecode<IPointer<Something[]>>();
typia.protobuf.createDecode<IPointer<Map<string, Something>>>();

// ENCODE
typia.protobuf.createEncode<Something>();
typia.protobuf.createEncode<IPointer<Something>>();
typia.protobuf.createEncode<IPointer<Something[]>>();
typia.protobuf.createEncode<IPointer<Map<string, Something>>>();
