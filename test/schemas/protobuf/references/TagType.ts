/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface TagType {
}

export interface TagType_Type {
  int: number;
  uint: number;
}

export interface Main {
  value: TagType_Type[];
}

function createBaseTagType(): TagType {
  return {};
}

export const TagType = {
  encode(_: TagType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TagType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagType();
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

  fromJSON(_: any): TagType {
    return {};
  },

  toJSON(_: TagType): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TagType>, I>>(base?: I): TagType {
    return TagType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TagType>, I>>(_: I): TagType {
    const message = createBaseTagType();
    return message;
  },
};

function createBaseTagType_Type(): TagType_Type {
  return { int: 0, uint: 0 };
}

export const TagType_Type = {
  encode(message: TagType_Type, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.int !== 0) {
      writer.uint32(8).int32(message.int);
    }
    if (message.uint !== 0) {
      writer.uint32(16).uint32(message.uint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TagType_Type {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagType_Type();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.int = reader.int32();
          break;
        case 2:
          message.uint = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TagType_Type {
    return { int: isSet(object.int) ? Number(object.int) : 0, uint: isSet(object.uint) ? Number(object.uint) : 0 };
  },

  toJSON(message: TagType_Type): unknown {
    const obj: any = {};
    message.int !== undefined && (obj.int = Math.round(message.int));
    message.uint !== undefined && (obj.uint = Math.round(message.uint));
    return obj;
  },

  create<I extends Exact<DeepPartial<TagType_Type>, I>>(base?: I): TagType_Type {
    return TagType_Type.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TagType_Type>, I>>(object: I): TagType_Type {
    const message = createBaseTagType_Type();
    message.int = object.int ?? 0;
    message.uint = object.uint ?? 0;
    return message;
  },
};

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      TagType_Type.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.value.push(TagType_Type.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Main {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => TagType_Type.fromJSON(e)) : [] };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e ? TagType_Type.toJSON(e) : undefined);
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
    message.value = object.value?.map((e) => TagType_Type.fromPartial(e)) || [];
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
