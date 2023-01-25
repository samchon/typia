/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ObjectRecursive {
}

export interface ObjectRecursive_IDepartment {
  parent?: ObjectRecursive_IDepartment | undefined;
  id: number;
  code: string;
  name: string;
  sequence: number;
  createdAt: ObjectRecursive_ITimestamp | undefined;
}

export interface ObjectRecursive_ITimestamp {
  time: number;
  zone: number;
}

function createBaseObjectRecursive(): ObjectRecursive {
  return {};
}

export const ObjectRecursive = {
  encode(_: ObjectRecursive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectRecursive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectRecursive();
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

  fromJSON(_: any): ObjectRecursive {
    return {};
  },

  toJSON(_: ObjectRecursive): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectRecursive>, I>>(base?: I): ObjectRecursive {
    return ObjectRecursive.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectRecursive>, I>>(_: I): ObjectRecursive {
    const message = createBaseObjectRecursive();
    return message;
  },
};

function createBaseObjectRecursive_IDepartment(): ObjectRecursive_IDepartment {
  return { parent: undefined, id: 0, code: "", name: "", sequence: 0, createdAt: undefined };
}

export const ObjectRecursive_IDepartment = {
  encode(message: ObjectRecursive_IDepartment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== undefined) {
      ObjectRecursive_IDepartment.encode(message.parent, writer.uint32(10).fork()).ldelim();
    }
    if (message.id !== 0) {
      writer.uint32(17).double(message.id);
    }
    if (message.code !== "") {
      writer.uint32(26).string(message.code);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.sequence !== 0) {
      writer.uint32(41).double(message.sequence);
    }
    if (message.createdAt !== undefined) {
      ObjectRecursive_ITimestamp.encode(message.createdAt, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectRecursive_IDepartment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectRecursive_IDepartment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = ObjectRecursive_IDepartment.decode(reader, reader.uint32());
          break;
        case 2:
          message.id = reader.double();
          break;
        case 3:
          message.code = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.sequence = reader.double();
          break;
        case 6:
          message.createdAt = ObjectRecursive_ITimestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectRecursive_IDepartment {
    return {
      parent: isSet(object.parent) ? ObjectRecursive_IDepartment.fromJSON(object.parent) : undefined,
      id: isSet(object.id) ? Number(object.id) : 0,
      code: isSet(object.code) ? String(object.code) : "",
      name: isSet(object.name) ? String(object.name) : "",
      sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
      createdAt: isSet(object.createdAt) ? ObjectRecursive_ITimestamp.fromJSON(object.createdAt) : undefined,
    };
  },

  toJSON(message: ObjectRecursive_IDepartment): unknown {
    const obj: any = {};
    message.parent !== undefined &&
      (obj.parent = message.parent ? ObjectRecursive_IDepartment.toJSON(message.parent) : undefined);
    message.id !== undefined && (obj.id = message.id);
    message.code !== undefined && (obj.code = message.code);
    message.name !== undefined && (obj.name = message.name);
    message.sequence !== undefined && (obj.sequence = message.sequence);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt ? ObjectRecursive_ITimestamp.toJSON(message.createdAt) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectRecursive_IDepartment>, I>>(base?: I): ObjectRecursive_IDepartment {
    return ObjectRecursive_IDepartment.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectRecursive_IDepartment>, I>>(object: I): ObjectRecursive_IDepartment {
    const message = createBaseObjectRecursive_IDepartment();
    message.parent = (object.parent !== undefined && object.parent !== null)
      ? ObjectRecursive_IDepartment.fromPartial(object.parent)
      : undefined;
    message.id = object.id ?? 0;
    message.code = object.code ?? "";
    message.name = object.name ?? "";
    message.sequence = object.sequence ?? 0;
    message.createdAt = (object.createdAt !== undefined && object.createdAt !== null)
      ? ObjectRecursive_ITimestamp.fromPartial(object.createdAt)
      : undefined;
    return message;
  },
};

function createBaseObjectRecursive_ITimestamp(): ObjectRecursive_ITimestamp {
  return { time: 0, zone: 0 };
}

export const ObjectRecursive_ITimestamp = {
  encode(message: ObjectRecursive_ITimestamp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    if (message.zone !== 0) {
      writer.uint32(17).double(message.zone);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectRecursive_ITimestamp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectRecursive_ITimestamp();
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

  fromJSON(object: any): ObjectRecursive_ITimestamp {
    return { time: isSet(object.time) ? Number(object.time) : 0, zone: isSet(object.zone) ? Number(object.zone) : 0 };
  },

  toJSON(message: ObjectRecursive_ITimestamp): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    message.zone !== undefined && (obj.zone = message.zone);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectRecursive_ITimestamp>, I>>(base?: I): ObjectRecursive_ITimestamp {
    return ObjectRecursive_ITimestamp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectRecursive_ITimestamp>, I>>(object: I): ObjectRecursive_ITimestamp {
    const message = createBaseObjectRecursive_ITimestamp();
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
