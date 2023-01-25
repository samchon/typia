/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface TagAtomicUnion {
}

export interface TagAtomicUnion_Type {
  valueO0?: string | undefined;
  valueO1?: number | undefined;
}

export interface Main {
  value: TagAtomicUnion_Type[];
}

function createBaseTagAtomicUnion(): TagAtomicUnion {
  return {};
}

export const TagAtomicUnion = {
  encode(_: TagAtomicUnion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TagAtomicUnion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagAtomicUnion();
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

  fromJSON(_: any): TagAtomicUnion {
    return {};
  },

  toJSON(_: TagAtomicUnion): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TagAtomicUnion>, I>>(base?: I): TagAtomicUnion {
    return TagAtomicUnion.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TagAtomicUnion>, I>>(_: I): TagAtomicUnion {
    const message = createBaseTagAtomicUnion();
    return message;
  },
};

function createBaseTagAtomicUnion_Type(): TagAtomicUnion_Type {
  return { valueO0: undefined, valueO1: undefined };
}

export const TagAtomicUnion_Type = {
  encode(message: TagAtomicUnion_Type, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valueO0 !== undefined) {
      writer.uint32(10).string(message.valueO0);
    }
    if (message.valueO1 !== undefined) {
      writer.uint32(17).double(message.valueO1);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TagAtomicUnion_Type {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagAtomicUnion_Type();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valueO0 = reader.string();
          break;
        case 2:
          message.valueO1 = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TagAtomicUnion_Type {
    return {
      valueO0: isSet(object.valueO0) ? String(object.valueO0) : undefined,
      valueO1: isSet(object.valueO1) ? Number(object.valueO1) : undefined,
    };
  },

  toJSON(message: TagAtomicUnion_Type): unknown {
    const obj: any = {};
    message.valueO0 !== undefined && (obj.valueO0 = message.valueO0);
    message.valueO1 !== undefined && (obj.valueO1 = message.valueO1);
    return obj;
  },

  create<I extends Exact<DeepPartial<TagAtomicUnion_Type>, I>>(base?: I): TagAtomicUnion_Type {
    return TagAtomicUnion_Type.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TagAtomicUnion_Type>, I>>(object: I): TagAtomicUnion_Type {
    const message = createBaseTagAtomicUnion_Type();
    message.valueO0 = object.valueO0 ?? undefined;
    message.valueO1 = object.valueO1 ?? undefined;
    return message;
  },
};

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      TagAtomicUnion_Type.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.value.push(TagAtomicUnion_Type.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Main {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => TagAtomicUnion_Type.fromJSON(e)) : [] };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e ? TagAtomicUnion_Type.toJSON(e) : undefined);
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
    message.value = object.value?.map((e) => TagAtomicUnion_Type.fromPartial(e)) || [];
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
