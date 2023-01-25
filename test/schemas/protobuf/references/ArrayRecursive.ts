/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ArrayRecursive {
}

export interface ArrayRecursive_ICategory {
  children: ArrayRecursive_ICategory[];
  id: number;
  code: string;
  sequence: number;
  createdAt: ArrayRecursive_ITimestamp | undefined;
}

export interface ArrayRecursive_ITimestamp {
  time: number;
  zone: number;
}

function createBaseArrayRecursive(): ArrayRecursive {
  return {};
}

export const ArrayRecursive = {
  encode(_: ArrayRecursive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayRecursive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayRecursive();
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

  fromJSON(_: any): ArrayRecursive {
    return {};
  },

  toJSON(_: ArrayRecursive): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayRecursive>, I>>(base?: I): ArrayRecursive {
    return ArrayRecursive.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayRecursive>, I>>(_: I): ArrayRecursive {
    const message = createBaseArrayRecursive();
    return message;
  },
};

function createBaseArrayRecursive_ICategory(): ArrayRecursive_ICategory {
  return { children: [], id: 0, code: "", sequence: 0, createdAt: undefined };
}

export const ArrayRecursive_ICategory = {
  encode(message: ArrayRecursive_ICategory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.children) {
      ArrayRecursive_ICategory.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.id !== 0) {
      writer.uint32(17).double(message.id);
    }
    if (message.code !== "") {
      writer.uint32(26).string(message.code);
    }
    if (message.sequence !== 0) {
      writer.uint32(33).double(message.sequence);
    }
    if (message.createdAt !== undefined) {
      ArrayRecursive_ITimestamp.encode(message.createdAt, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayRecursive_ICategory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayRecursive_ICategory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.children.push(ArrayRecursive_ICategory.decode(reader, reader.uint32()));
          break;
        case 2:
          message.id = reader.double();
          break;
        case 3:
          message.code = reader.string();
          break;
        case 4:
          message.sequence = reader.double();
          break;
        case 5:
          message.createdAt = ArrayRecursive_ITimestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArrayRecursive_ICategory {
    return {
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) => ArrayRecursive_ICategory.fromJSON(e))
        : [],
      id: isSet(object.id) ? Number(object.id) : 0,
      code: isSet(object.code) ? String(object.code) : "",
      sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
      createdAt: isSet(object.createdAt) ? ArrayRecursive_ITimestamp.fromJSON(object.createdAt) : undefined,
    };
  },

  toJSON(message: ArrayRecursive_ICategory): unknown {
    const obj: any = {};
    if (message.children) {
      obj.children = message.children.map((e) => e ? ArrayRecursive_ICategory.toJSON(e) : undefined);
    } else {
      obj.children = [];
    }
    message.id !== undefined && (obj.id = message.id);
    message.code !== undefined && (obj.code = message.code);
    message.sequence !== undefined && (obj.sequence = message.sequence);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt ? ArrayRecursive_ITimestamp.toJSON(message.createdAt) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayRecursive_ICategory>, I>>(base?: I): ArrayRecursive_ICategory {
    return ArrayRecursive_ICategory.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayRecursive_ICategory>, I>>(object: I): ArrayRecursive_ICategory {
    const message = createBaseArrayRecursive_ICategory();
    message.children = object.children?.map((e) => ArrayRecursive_ICategory.fromPartial(e)) || [];
    message.id = object.id ?? 0;
    message.code = object.code ?? "";
    message.sequence = object.sequence ?? 0;
    message.createdAt = (object.createdAt !== undefined && object.createdAt !== null)
      ? ArrayRecursive_ITimestamp.fromPartial(object.createdAt)
      : undefined;
    return message;
  },
};

function createBaseArrayRecursive_ITimestamp(): ArrayRecursive_ITimestamp {
  return { time: 0, zone: 0 };
}

export const ArrayRecursive_ITimestamp = {
  encode(message: ArrayRecursive_ITimestamp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    if (message.zone !== 0) {
      writer.uint32(17).double(message.zone);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayRecursive_ITimestamp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayRecursive_ITimestamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = reader.double();
          break;
        case 2:
          message.zone = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArrayRecursive_ITimestamp {
    return { time: isSet(object.time) ? Number(object.time) : 0, zone: isSet(object.zone) ? Number(object.zone) : 0 };
  },

  toJSON(message: ArrayRecursive_ITimestamp): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    message.zone !== undefined && (obj.zone = message.zone);
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayRecursive_ITimestamp>, I>>(base?: I): ArrayRecursive_ITimestamp {
    return ArrayRecursive_ITimestamp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayRecursive_ITimestamp>, I>>(object: I): ArrayRecursive_ITimestamp {
    const message = createBaseArrayRecursive_ITimestamp();
    message.time = object.time ?? 0;
    message.zone = object.zone ?? 0;
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
