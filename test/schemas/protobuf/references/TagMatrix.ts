/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface TagMatrix {
  matrix: Array_ElementLtArrayLtStringGtGt[];
}

export interface Array {
}

export interface Array_ElementLtArrayLtStringGtGt {
  value: string[];
}

function createBaseTagMatrix(): TagMatrix {
  return { matrix: [] };
}

export const TagMatrix = {
  encode(message: TagMatrix, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.matrix) {
      Array_ElementLtArrayLtStringGtGt.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TagMatrix {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagMatrix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.matrix.push(Array_ElementLtArrayLtStringGtGt.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TagMatrix {
    return {
      matrix: Array.isArray(object?.matrix)
        ? object.matrix.map((e: any) => Array_ElementLtArrayLtStringGtGt.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TagMatrix): unknown {
    const obj: any = {};
    if (message.matrix) {
      obj.matrix = message.matrix.map((e) => e ? Array_ElementLtArrayLtStringGtGt.toJSON(e) : undefined);
    } else {
      obj.matrix = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TagMatrix>, I>>(base?: I): TagMatrix {
    return TagMatrix.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TagMatrix>, I>>(object: I): TagMatrix {
    const message = createBaseTagMatrix();
    message.matrix = object.matrix?.map((e) => Array_ElementLtArrayLtStringGtGt.fromPartial(e)) || [];
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

function createBaseArray_ElementLtArrayLtStringGtGt(): Array_ElementLtArrayLtStringGtGt {
  return { value: [] };
}

export const Array_ElementLtArrayLtStringGtGt = {
  encode(message: Array_ElementLtArrayLtStringGtGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array_ElementLtArrayLtStringGtGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_ElementLtArrayLtStringGtGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Array_ElementLtArrayLtStringGtGt {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => String(e)) : [] };
  },

  toJSON(message: Array_ElementLtArrayLtStringGtGt): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_ElementLtArrayLtStringGtGt>, I>>(
    base?: I,
  ): Array_ElementLtArrayLtStringGtGt {
    return Array_ElementLtArrayLtStringGtGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_ElementLtArrayLtStringGtGt>, I>>(
    object: I,
  ): Array_ElementLtArrayLtStringGtGt {
    const message = createBaseArray_ElementLtArrayLtStringGtGt();
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
