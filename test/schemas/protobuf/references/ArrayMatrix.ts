/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Main {
  value: Array_ElementLtArrayLtArrayLtNumberGtGtGt[];
}

export interface Array {
}

export interface Array_ElementLtArrayLtArrayLtNumberGtGtGt {
  value: Array_ElementLtArrayLtNumberGtGt[];
}

export interface Array_ElementLtArrayLtNumberGtGt {
  value: number[];
}

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      Array_ElementLtArrayLtArrayLtNumberGtGtGt.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.value.push(Array_ElementLtArrayLtArrayLtNumberGtGtGt.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Main {
    return {
      value: Array.isArray(object?.value)
        ? object.value.map((e: any) => Array_ElementLtArrayLtArrayLtNumberGtGtGt.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e ? Array_ElementLtArrayLtArrayLtNumberGtGtGt.toJSON(e) : undefined);
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
    message.value = object.value?.map((e) => Array_ElementLtArrayLtArrayLtNumberGtGtGt.fromPartial(e)) || [];
    return message;
  },
};

function createBaseArray(): Array {
  return {};
}

export const Array = {
  encode(_: Array, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray();
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

  fromJSON(_: any): Array {
    return {};
  },

  toJSON(_: Array): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Array>, I>>(base?: I): Array {
    return Array.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array>, I>>(_: I): Array {
    const message = createBaseArray();
    return message;
  },
};

function createBaseArray_ElementLtArrayLtArrayLtNumberGtGtGt(): Array_ElementLtArrayLtArrayLtNumberGtGtGt {
  return { value: [] };
}

export const Array_ElementLtArrayLtArrayLtNumberGtGtGt = {
  encode(message: Array_ElementLtArrayLtArrayLtNumberGtGtGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      Array_ElementLtArrayLtNumberGtGt.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array_ElementLtArrayLtArrayLtNumberGtGtGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_ElementLtArrayLtArrayLtNumberGtGtGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value.push(Array_ElementLtArrayLtNumberGtGt.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Array_ElementLtArrayLtArrayLtNumberGtGtGt {
    return {
      value: Array.isArray(object?.value)
        ? object.value.map((e: any) => Array_ElementLtArrayLtNumberGtGt.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Array_ElementLtArrayLtArrayLtNumberGtGtGt): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e ? Array_ElementLtArrayLtNumberGtGt.toJSON(e) : undefined);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_ElementLtArrayLtArrayLtNumberGtGtGt>, I>>(
    base?: I,
  ): Array_ElementLtArrayLtArrayLtNumberGtGtGt {
    return Array_ElementLtArrayLtArrayLtNumberGtGtGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_ElementLtArrayLtArrayLtNumberGtGtGt>, I>>(
    object: I,
  ): Array_ElementLtArrayLtArrayLtNumberGtGtGt {
    const message = createBaseArray_ElementLtArrayLtArrayLtNumberGtGtGt();
    message.value = object.value?.map((e) => Array_ElementLtArrayLtNumberGtGt.fromPartial(e)) || [];
    return message;
  },
};

function createBaseArray_ElementLtArrayLtNumberGtGt(): Array_ElementLtArrayLtNumberGtGt {
  return { value: [] };
}

export const Array_ElementLtArrayLtNumberGtGt = {
  encode(message: Array_ElementLtArrayLtNumberGtGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.value) {
      writer.double(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array_ElementLtArrayLtNumberGtGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_ElementLtArrayLtNumberGtGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.value.push(reader.double());
            }
          } else {
            message.value.push(reader.double());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Array_ElementLtArrayLtNumberGtGt {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: Array_ElementLtArrayLtNumberGtGt): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_ElementLtArrayLtNumberGtGt>, I>>(
    base?: I,
  ): Array_ElementLtArrayLtNumberGtGt {
    return Array_ElementLtArrayLtNumberGtGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_ElementLtArrayLtNumberGtGt>, I>>(
    object: I,
  ): Array_ElementLtArrayLtNumberGtGt {
    const message = createBaseArray_ElementLtArrayLtNumberGtGt();
    message.value = object.value?.map((e) => e) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };
