import typia from "typia";

interface IPointer<T> {
    value: T;
}

// MESSAGE
typia.protobuf.message<IPointer<Set<string>>>();
typia.protobuf.message<IPointer<Set<number[]>>>();
typia.protobuf.message<IPointer<Set<IPointer<string>>>>();

// DECODE
typia.protobuf.createDecode<IPointer<Set<string>>>();
typia.protobuf.createDecode<IPointer<Set<number[]>>>();
typia.protobuf.createDecode<IPointer<Set<IPointer<string>>>>();

// ENCODE
typia.protobuf.createEncode<IPointer<Set<string>>>();
typia.protobuf.createEncode<IPointer<Set<number[]>>>();
typia.protobuf.createEncode<IPointer<Set<IPointer<string>>>>();
