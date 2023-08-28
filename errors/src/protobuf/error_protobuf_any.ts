import typia from "typia";

interface IPointer<T> {
    value: T;
}

// MESSAGE
typia.protobuf.message<any>();
typia.protobuf.message<IPointer<any>>();
typia.protobuf.message<IPointer<Map<string, any>>>();
typia.protobuf.message<IPointer<Record<string, any>>>();
typia.protobuf.message<IPointer<any[]>>();
typia.protobuf.message<IPointer<IPointer<any>>>();

// DECODE
typia.protobuf.createDecode<any>();
typia.protobuf.createDecode<IPointer<any>>();
typia.protobuf.createDecode<IPointer<Map<string, any>>>();
typia.protobuf.createDecode<IPointer<Record<string, any>>>();
typia.protobuf.createDecode<IPointer<any[]>>();
typia.protobuf.createDecode<IPointer<IPointer<any>>>();

// ENCODE
typia.protobuf.createEncode<any>();
typia.protobuf.createEncode<IPointer<any>>();
typia.protobuf.createEncode<IPointer<Map<string, any>>>();
typia.protobuf.createEncode<IPointer<Record<string, any>>>();
typia.protobuf.createEncode<IPointer<any[]>>();
typia.protobuf.createEncode<IPointer<IPointer<any>>>();
