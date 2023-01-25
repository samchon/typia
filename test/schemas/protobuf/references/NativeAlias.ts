/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface NativeAlias {
  date: Timestamp | undefined;
  uint8Array: Uint8Array;
  uint8ClampedArray: Uint8Array;
  uint16Array: Uint8Array;
  uint32Array: Uint8Array;
  bigUint64Array: Uint8Array;
  int8Array: Uint8Array;
  int16Array: Uint8Array;
  int32Array: Uint8Array;
  bigInt64Array: Uint8Array;
  float32Array: Uint8Array;
  float64Array: Uint8Array;
  buffer: Uint8Array;
  arrayBuffer: Uint8Array;
  sharedArrayBuffer: Uint8Array;
  dataView: Uint8Array;
  weakSet: Uint8Array;
  weakMap: Uint8Array;
}

export interface Timestamp {
  seconds: number;
  nanos: number;
}

function createBaseNativeAlias(): NativeAlias {
  return {
    date: undefined,
    uint8Array: new Uint8Array(),
    uint8ClampedArray: new Uint8Array(),
    uint16Array: new Uint8Array(),
    uint32Array: new Uint8Array(),
    bigUint64Array: new Uint8Array(),
    int8Array: new Uint8Array(),
    int16Array: new Uint8Array(),
    int32Array: new Uint8Array(),
    bigInt64Array: new Uint8Array(),
    float32Array: new Uint8Array(),
    float64Array: new Uint8Array(),
    buffer: new Uint8Array(),
    arrayBuffer: new Uint8Array(),
    sharedArrayBuffer: new Uint8Array(),
    dataView: new Uint8Array(),
    weakSet: new Uint8Array(),
    weakMap: new Uint8Array(),
  };
}

export const NativeAlias = {
  encode(message: NativeAlias, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.date !== undefined) {
      Timestamp.encode(message.date, writer.uint32(10).fork()).ldelim();
    }
    if (message.uint8Array.length !== 0) {
      writer.uint32(18).bytes(message.uint8Array);
    }
    if (message.uint8ClampedArray.length !== 0) {
      writer.uint32(26).bytes(message.uint8ClampedArray);
    }
    if (message.uint16Array.length !== 0) {
      writer.uint32(34).bytes(message.uint16Array);
    }
    if (message.uint32Array.length !== 0) {
      writer.uint32(42).bytes(message.uint32Array);
    }
    if (message.bigUint64Array.length !== 0) {
      writer.uint32(50).bytes(message.bigUint64Array);
    }
    if (message.int8Array.length !== 0) {
      writer.uint32(58).bytes(message.int8Array);
    }
    if (message.int16Array.length !== 0) {
      writer.uint32(66).bytes(message.int16Array);
    }
    if (message.int32Array.length !== 0) {
      writer.uint32(74).bytes(message.int32Array);
    }
    if (message.bigInt64Array.length !== 0) {
      writer.uint32(82).bytes(message.bigInt64Array);
    }
    if (message.float32Array.length !== 0) {
      writer.uint32(90).bytes(message.float32Array);
    }
    if (message.float64Array.length !== 0) {
      writer.uint32(98).bytes(message.float64Array);
    }
    if (message.buffer.length !== 0) {
      writer.uint32(106).bytes(message.buffer);
    }
    if (message.arrayBuffer.length !== 0) {
      writer.uint32(114).bytes(message.arrayBuffer);
    }
    if (message.sharedArrayBuffer.length !== 0) {
      writer.uint32(122).bytes(message.sharedArrayBuffer);
    }
    if (message.dataView.length !== 0) {
      writer.uint32(130).bytes(message.dataView);
    }
    if (message.weakSet.length !== 0) {
      writer.uint32(138).bytes(message.weakSet);
    }
    if (message.weakMap.length !== 0) {
      writer.uint32(146).bytes(message.weakMap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NativeAlias {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNativeAlias();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.date = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.uint8Array = reader.bytes();
          break;
        case 3:
          message.uint8ClampedArray = reader.bytes();
          break;
        case 4:
          message.uint16Array = reader.bytes();
          break;
        case 5:
          message.uint32Array = reader.bytes();
          break;
        case 6:
          message.bigUint64Array = reader.bytes();
          break;
        case 7:
          message.int8Array = reader.bytes();
          break;
        case 8:
          message.int16Array = reader.bytes();
          break;
        case 9:
          message.int32Array = reader.bytes();
          break;
        case 10:
          message.bigInt64Array = reader.bytes();
          break;
        case 11:
          message.float32Array = reader.bytes();
          break;
        case 12:
          message.float64Array = reader.bytes();
          break;
        case 13:
          message.buffer = reader.bytes();
          break;
        case 14:
          message.arrayBuffer = reader.bytes();
          break;
        case 15:
          message.sharedArrayBuffer = reader.bytes();
          break;
        case 16:
          message.dataView = reader.bytes();
          break;
        case 17:
          message.weakSet = reader.bytes();
          break;
        case 18:
          message.weakMap = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NativeAlias {
    return {
      date: isSet(object.date) ? Timestamp.fromJSON(object.date) : undefined,
      uint8Array: isSet(object.uint8Array) ? bytesFromBase64(object.uint8Array) : new Uint8Array(),
      uint8ClampedArray: isSet(object.uint8ClampedArray) ? bytesFromBase64(object.uint8ClampedArray) : new Uint8Array(),
      uint16Array: isSet(object.uint16Array) ? bytesFromBase64(object.uint16Array) : new Uint8Array(),
      uint32Array: isSet(object.uint32Array) ? bytesFromBase64(object.uint32Array) : new Uint8Array(),
      bigUint64Array: isSet(object.bigUint64Array) ? bytesFromBase64(object.bigUint64Array) : new Uint8Array(),
      int8Array: isSet(object.int8Array) ? bytesFromBase64(object.int8Array) : new Uint8Array(),
      int16Array: isSet(object.int16Array) ? bytesFromBase64(object.int16Array) : new Uint8Array(),
      int32Array: isSet(object.int32Array) ? bytesFromBase64(object.int32Array) : new Uint8Array(),
      bigInt64Array: isSet(object.bigInt64Array) ? bytesFromBase64(object.bigInt64Array) : new Uint8Array(),
      float32Array: isSet(object.float32Array) ? bytesFromBase64(object.float32Array) : new Uint8Array(),
      float64Array: isSet(object.float64Array) ? bytesFromBase64(object.float64Array) : new Uint8Array(),
      buffer: isSet(object.buffer) ? bytesFromBase64(object.buffer) : new Uint8Array(),
      arrayBuffer: isSet(object.arrayBuffer) ? bytesFromBase64(object.arrayBuffer) : new Uint8Array(),
      sharedArrayBuffer: isSet(object.sharedArrayBuffer) ? bytesFromBase64(object.sharedArrayBuffer) : new Uint8Array(),
      dataView: isSet(object.dataView) ? bytesFromBase64(object.dataView) : new Uint8Array(),
      weakSet: isSet(object.weakSet) ? bytesFromBase64(object.weakSet) : new Uint8Array(),
      weakMap: isSet(object.weakMap) ? bytesFromBase64(object.weakMap) : new Uint8Array(),
    };
  },

  toJSON(message: NativeAlias): unknown {
    const obj: any = {};
    message.date !== undefined && (obj.date = message.date ? Timestamp.toJSON(message.date) : undefined);
    message.uint8Array !== undefined &&
      (obj.uint8Array = base64FromBytes(message.uint8Array !== undefined ? message.uint8Array : new Uint8Array()));
    message.uint8ClampedArray !== undefined &&
      (obj.uint8ClampedArray = base64FromBytes(
        message.uint8ClampedArray !== undefined ? message.uint8ClampedArray : new Uint8Array(),
      ));
    message.uint16Array !== undefined &&
      (obj.uint16Array = base64FromBytes(message.uint16Array !== undefined ? message.uint16Array : new Uint8Array()));
    message.uint32Array !== undefined &&
      (obj.uint32Array = base64FromBytes(message.uint32Array !== undefined ? message.uint32Array : new Uint8Array()));
    message.bigUint64Array !== undefined &&
      (obj.bigUint64Array = base64FromBytes(
        message.bigUint64Array !== undefined ? message.bigUint64Array : new Uint8Array(),
      ));
    message.int8Array !== undefined &&
      (obj.int8Array = base64FromBytes(message.int8Array !== undefined ? message.int8Array : new Uint8Array()));
    message.int16Array !== undefined &&
      (obj.int16Array = base64FromBytes(message.int16Array !== undefined ? message.int16Array : new Uint8Array()));
    message.int32Array !== undefined &&
      (obj.int32Array = base64FromBytes(message.int32Array !== undefined ? message.int32Array : new Uint8Array()));
    message.bigInt64Array !== undefined &&
      (obj.bigInt64Array = base64FromBytes(
        message.bigInt64Array !== undefined ? message.bigInt64Array : new Uint8Array(),
      ));
    message.float32Array !== undefined &&
      (obj.float32Array = base64FromBytes(
        message.float32Array !== undefined ? message.float32Array : new Uint8Array(),
      ));
    message.float64Array !== undefined &&
      (obj.float64Array = base64FromBytes(
        message.float64Array !== undefined ? message.float64Array : new Uint8Array(),
      ));
    message.buffer !== undefined &&
      (obj.buffer = base64FromBytes(message.buffer !== undefined ? message.buffer : new Uint8Array()));
    message.arrayBuffer !== undefined &&
      (obj.arrayBuffer = base64FromBytes(message.arrayBuffer !== undefined ? message.arrayBuffer : new Uint8Array()));
    message.sharedArrayBuffer !== undefined &&
      (obj.sharedArrayBuffer = base64FromBytes(
        message.sharedArrayBuffer !== undefined ? message.sharedArrayBuffer : new Uint8Array(),
      ));
    message.dataView !== undefined &&
      (obj.dataView = base64FromBytes(message.dataView !== undefined ? message.dataView : new Uint8Array()));
    message.weakSet !== undefined &&
      (obj.weakSet = base64FromBytes(message.weakSet !== undefined ? message.weakSet : new Uint8Array()));
    message.weakMap !== undefined &&
      (obj.weakMap = base64FromBytes(message.weakMap !== undefined ? message.weakMap : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<NativeAlias>, I>>(base?: I): NativeAlias {
    return NativeAlias.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NativeAlias>, I>>(object: I): NativeAlias {
    const message = createBaseNativeAlias();
    message.date = (object.date !== undefined && object.date !== null) ? Timestamp.fromPartial(object.date) : undefined;
    message.uint8Array = object.uint8Array ?? new Uint8Array();
    message.uint8ClampedArray = object.uint8ClampedArray ?? new Uint8Array();
    message.uint16Array = object.uint16Array ?? new Uint8Array();
    message.uint32Array = object.uint32Array ?? new Uint8Array();
    message.bigUint64Array = object.bigUint64Array ?? new Uint8Array();
    message.int8Array = object.int8Array ?? new Uint8Array();
    message.int16Array = object.int16Array ?? new Uint8Array();
    message.int32Array = object.int32Array ?? new Uint8Array();
    message.bigInt64Array = object.bigInt64Array ?? new Uint8Array();
    message.float32Array = object.float32Array ?? new Uint8Array();
    message.float64Array = object.float64Array ?? new Uint8Array();
    message.buffer = object.buffer ?? new Uint8Array();
    message.arrayBuffer = object.arrayBuffer ?? new Uint8Array();
    message.sharedArrayBuffer = object.sharedArrayBuffer ?? new Uint8Array();
    message.dataView = object.dataView ?? new Uint8Array();
    message.weakSet = object.weakSet ?? new Uint8Array();
    message.weakMap = object.weakMap ?? new Uint8Array();
    return message;
  },
};

function createBaseTimestamp(): Timestamp {
  return { seconds: 0, nanos: 0 };
}

export const Timestamp = {
  encode(message: Timestamp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seconds !== 0) {
      writer.uint32(8).int64(message.seconds);
    }
    if (message.nanos !== 0) {
      writer.uint32(16).int32(message.nanos);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Timestamp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seconds = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.nanos = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Timestamp {
    return {
      seconds: isSet(object.seconds) ? Number(object.seconds) : 0,
      nanos: isSet(object.nanos) ? Number(object.nanos) : 0,
    };
  },

  toJSON(message: Timestamp): unknown {
    const obj: any = {};
    message.seconds !== undefined && (obj.seconds = Math.round(message.seconds));
    message.nanos !== undefined && (obj.nanos = Math.round(message.nanos));
    return obj;
  },

  create<I extends Exact<DeepPartial<Timestamp>, I>>(base?: I): Timestamp {
    return Timestamp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Timestamp>, I>>(object: I): Timestamp {
    const message = createBaseTimestamp();
    message.seconds = object.seconds ?? 0;
    message.nanos = object.nanos ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
