/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface NativeUnion {
}

export interface NativeUnion_Union {
  date?: Timestamp | undefined;
  unsigned: Uint8Array;
  signed: Uint8Array;
  float: Uint8Array;
  buffer: Uint8Array;
  weak: Uint8Array;
}

export interface Timestamp {
  seconds: number;
  nanos: number;
}

export interface Main {
  value: NativeUnion_Union[];
}

function createBaseNativeUnion(): NativeUnion {
  return {};
}

export const NativeUnion = {
  encode(_: NativeUnion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NativeUnion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNativeUnion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): NativeUnion {
    return {};
  },

  toJSON(_: NativeUnion): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<NativeUnion>, I>>(base?: I): NativeUnion {
    return NativeUnion.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NativeUnion>, I>>(_: I): NativeUnion {
    const message = createBaseNativeUnion();
    return message;
  },
};

function createBaseNativeUnion_Union(): NativeUnion_Union {
  return {
    date: undefined,
    unsigned: new Uint8Array(),
    signed: new Uint8Array(),
    float: new Uint8Array(),
    buffer: new Uint8Array(),
    weak: new Uint8Array(),
  };
}

export const NativeUnion_Union = {
  encode(message: NativeUnion_Union, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.date !== undefined) {
      Timestamp.encode(message.date, writer.uint32(10).fork()).ldelim();
    }
    if (message.unsigned.length !== 0) {
      writer.uint32(18).bytes(message.unsigned);
    }
    if (message.signed.length !== 0) {
      writer.uint32(26).bytes(message.signed);
    }
    if (message.float.length !== 0) {
      writer.uint32(34).bytes(message.float);
    }
    if (message.buffer.length !== 0) {
      writer.uint32(42).bytes(message.buffer);
    }
    if (message.weak.length !== 0) {
      writer.uint32(50).bytes(message.weak);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NativeUnion_Union {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNativeUnion_Union();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.date = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.unsigned = reader.bytes();
          break;
        case 3:
          message.signed = reader.bytes();
          break;
        case 4:
          message.float = reader.bytes();
          break;
        case 5:
          message.buffer = reader.bytes();
          break;
        case 6:
          message.weak = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NativeUnion_Union {
    return {
      date: isSet(object.date) ? Timestamp.fromJSON(object.date) : undefined,
      unsigned: isSet(object.unsigned) ? bytesFromBase64(object.unsigned) : new Uint8Array(),
      signed: isSet(object.signed) ? bytesFromBase64(object.signed) : new Uint8Array(),
      float: isSet(object.float) ? bytesFromBase64(object.float) : new Uint8Array(),
      buffer: isSet(object.buffer) ? bytesFromBase64(object.buffer) : new Uint8Array(),
      weak: isSet(object.weak) ? bytesFromBase64(object.weak) : new Uint8Array(),
    };
  },

  toJSON(message: NativeUnion_Union): unknown {
    const obj: any = {};
    message.date !== undefined && (obj.date = message.date ? Timestamp.toJSON(message.date) : undefined);
    message.unsigned !== undefined &&
      (obj.unsigned = base64FromBytes(message.unsigned !== undefined ? message.unsigned : new Uint8Array()));
    message.signed !== undefined &&
      (obj.signed = base64FromBytes(message.signed !== undefined ? message.signed : new Uint8Array()));
    message.float !== undefined &&
      (obj.float = base64FromBytes(message.float !== undefined ? message.float : new Uint8Array()));
    message.buffer !== undefined &&
      (obj.buffer = base64FromBytes(message.buffer !== undefined ? message.buffer : new Uint8Array()));
    message.weak !== undefined &&
      (obj.weak = base64FromBytes(message.weak !== undefined ? message.weak : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<NativeUnion_Union>, I>>(base?: I): NativeUnion_Union {
    return NativeUnion_Union.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NativeUnion_Union>, I>>(object: I): NativeUnion_Union {
    const message = createBaseNativeUnion_Union();
    message.date = (object.date !== undefined && object.date !== null) ? Timestamp.fromPartial(object.date) : undefined;
    message.unsigned = object.unsigned ?? new Uint8Array();
    message.signed = object.signed ?? new Uint8Array();
    message.float = object.float ?? new Uint8Array();
    message.buffer = object.buffer ?? new Uint8Array();
    message.weak = object.weak ?? new Uint8Array();
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

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      NativeUnion_Union.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Main {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value.push(NativeUnion_Union.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Main {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => NativeUnion_Union.fromJSON(e)) : [] };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e ? NativeUnion_Union.toJSON(e) : undefined);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Main>, I>>(base?: I): Main {
    return Main.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Main>, I>>(object: I): Main {
    const message = createBaseMain();
    message.value = object.value?.map((e) => NativeUnion_Union.fromPartial(e)) || [];
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
