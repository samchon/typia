/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ObjectGenericArray {
  pagination: ObjectGenericArray_IPagination | undefined;
  data: ObjectGenericArray_IPerson[];
}

export interface ObjectGenericArray_IPagination {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
}

export interface ObjectGenericArray_IPerson {
  name: string;
  age: number;
}

function createBaseObjectGenericArray(): ObjectGenericArray {
  return { pagination: undefined, data: [] };
}

export const ObjectGenericArray = {
  encode(message: ObjectGenericArray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      ObjectGenericArray_IPagination.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.data) {
      ObjectGenericArray_IPerson.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectGenericArray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectGenericArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = ObjectGenericArray_IPagination.decode(reader, reader.uint32());
          break;
        case 2:
          message.data.push(ObjectGenericArray_IPerson.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectGenericArray {
    return {
      pagination: isSet(object.pagination) ? ObjectGenericArray_IPagination.fromJSON(object.pagination) : undefined,
      data: Array.isArray(object?.data) ? object.data.map((e: any) => ObjectGenericArray_IPerson.fromJSON(e)) : [],
    };
  },

  toJSON(message: ObjectGenericArray): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? ObjectGenericArray_IPagination.toJSON(message.pagination) : undefined);
    if (message.data) {
      obj.data = message.data.map((e) => e ? ObjectGenericArray_IPerson.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectGenericArray>, I>>(base?: I): ObjectGenericArray {
    return ObjectGenericArray.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectGenericArray>, I>>(object: I): ObjectGenericArray {
    const message = createBaseObjectGenericArray();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? ObjectGenericArray_IPagination.fromPartial(object.pagination)
      : undefined;
    message.data = object.data?.map((e) => ObjectGenericArray_IPerson.fromPartial(e)) || [];
    return message;
  },
};

function createBaseObjectGenericArray_IPagination(): ObjectGenericArray_IPagination {
  return { page: 0, limit: 0, totalCount: 0, totalPages: 0 };
}

export const ObjectGenericArray_IPagination = {
  encode(message: ObjectGenericArray_IPagination, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== 0) {
      writer.uint32(9).double(message.page);
    }
    if (message.limit !== 0) {
      writer.uint32(17).double(message.limit);
    }
    if (message.totalCount !== 0) {
      writer.uint32(25).double(message.totalCount);
    }
    if (message.totalPages !== 0) {
      writer.uint32(33).double(message.totalPages);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectGenericArray_IPagination {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectGenericArray_IPagination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.page = reader.double();
          break;
        case 2:
          message.limit = reader.double();
          break;
        case 3:
          message.totalCount = reader.double();
          break;
        case 4:
          message.totalPages = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectGenericArray_IPagination {
    return {
      page: isSet(object.page) ? Number(object.page) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      totalCount: isSet(object.totalCount) ? Number(object.totalCount) : 0,
      totalPages: isSet(object.totalPages) ? Number(object.totalPages) : 0,
    };
  },

  toJSON(message: ObjectGenericArray_IPagination): unknown {
    const obj: any = {};
    message.page !== undefined && (obj.page = message.page);
    message.limit !== undefined && (obj.limit = message.limit);
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    message.totalPages !== undefined && (obj.totalPages = message.totalPages);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectGenericArray_IPagination>, I>>(base?: I): ObjectGenericArray_IPagination {
    return ObjectGenericArray_IPagination.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectGenericArray_IPagination>, I>>(
    object: I,
  ): ObjectGenericArray_IPagination {
    const message = createBaseObjectGenericArray_IPagination();
    message.page = object.page ?? 0;
    message.limit = object.limit ?? 0;
    message.totalCount = object.totalCount ?? 0;
    message.totalPages = object.totalPages ?? 0;
    return message;
  },
};

function createBaseObjectGenericArray_IPerson(): ObjectGenericArray_IPerson {
  return { name: "", age: 0 };
}

export const ObjectGenericArray_IPerson = {
  encode(message: ObjectGenericArray_IPerson, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.age !== 0) {
      writer.uint32(17).double(message.age);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectGenericArray_IPerson {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectGenericArray_IPerson();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.age = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectGenericArray_IPerson {
    return { name: isSet(object.name) ? String(object.name) : "", age: isSet(object.age) ? Number(object.age) : 0 };
  },

  toJSON(message: ObjectGenericArray_IPerson): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.age !== undefined && (obj.age = message.age);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectGenericArray_IPerson>, I>>(base?: I): ObjectGenericArray_IPerson {
    return ObjectGenericArray_IPerson.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectGenericArray_IPerson>, I>>(object: I): ObjectGenericArray_IPerson {
    const message = createBaseObjectGenericArray_IPerson();
    message.name = object.name ?? "";
    message.age = object.age ?? 0;
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
