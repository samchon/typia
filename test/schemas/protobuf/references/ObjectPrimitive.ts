/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ObjectPrimitive {
}

export interface ObjectPrimitive_IArticle {
  id: string;
  extension: string;
  title: string;
  body: string;
  files: ObjectPrimitive_IFile[];
  secret: boolean;
  createdAt: string;
}

export interface ObjectPrimitive_IFile {
  id: string;
  name: string;
  extension: string;
  url: string;
  createdAt: string;
}

function createBaseObjectPrimitive(): ObjectPrimitive {
  return {};
}

export const ObjectPrimitive = {
  encode(_: ObjectPrimitive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectPrimitive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectPrimitive();
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

  fromJSON(_: any): ObjectPrimitive {
    return {};
  },

  toJSON(_: ObjectPrimitive): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectPrimitive>, I>>(base?: I): ObjectPrimitive {
    return ObjectPrimitive.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectPrimitive>, I>>(_: I): ObjectPrimitive {
    const message = createBaseObjectPrimitive();
    return message;
  },
};

function createBaseObjectPrimitive_IArticle(): ObjectPrimitive_IArticle {
  return { id: "", extension: "", title: "", body: "", files: [], secret: false, createdAt: "" };
}

export const ObjectPrimitive_IArticle = {
  encode(message: ObjectPrimitive_IArticle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.extension !== "") {
      writer.uint32(18).string(message.extension);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(34).string(message.body);
    }
    for (const v of message.files) {
      ObjectPrimitive_IFile.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.secret === true) {
      writer.uint32(48).bool(message.secret);
    }
    if (message.createdAt !== "") {
      writer.uint32(58).string(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectPrimitive_IArticle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectPrimitive_IArticle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.extension = reader.string();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.body = reader.string();
          break;
        case 5:
          message.files.push(ObjectPrimitive_IFile.decode(reader, reader.uint32()));
          break;
        case 6:
          message.secret = reader.bool();
          break;
        case 7:
          message.createdAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectPrimitive_IArticle {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      extension: isSet(object.extension) ? String(object.extension) : "",
      title: isSet(object.title) ? String(object.title) : "",
      body: isSet(object.body) ? String(object.body) : "",
      files: Array.isArray(object?.files) ? object.files.map((e: any) => ObjectPrimitive_IFile.fromJSON(e)) : [],
      secret: isSet(object.secret) ? Boolean(object.secret) : false,
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : "",
    };
  },

  toJSON(message: ObjectPrimitive_IArticle): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.extension !== undefined && (obj.extension = message.extension);
    message.title !== undefined && (obj.title = message.title);
    message.body !== undefined && (obj.body = message.body);
    if (message.files) {
      obj.files = message.files.map((e) => e ? ObjectPrimitive_IFile.toJSON(e) : undefined);
    } else {
      obj.files = [];
    }
    message.secret !== undefined && (obj.secret = message.secret);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectPrimitive_IArticle>, I>>(base?: I): ObjectPrimitive_IArticle {
    return ObjectPrimitive_IArticle.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectPrimitive_IArticle>, I>>(object: I): ObjectPrimitive_IArticle {
    const message = createBaseObjectPrimitive_IArticle();
    message.id = object.id ?? "";
    message.extension = object.extension ?? "";
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.files = object.files?.map((e) => ObjectPrimitive_IFile.fromPartial(e)) || [];
    message.secret = object.secret ?? false;
    message.createdAt = object.createdAt ?? "";
    return message;
  },
};

function createBaseObjectPrimitive_IFile(): ObjectPrimitive_IFile {
  return { id: "", name: "", extension: "", url: "", createdAt: "" };
}

export const ObjectPrimitive_IFile = {
  encode(message: ObjectPrimitive_IFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.extension !== "") {
      writer.uint32(26).string(message.extension);
    }
    if (message.url !== "") {
      writer.uint32(34).string(message.url);
    }
    if (message.createdAt !== "") {
      writer.uint32(42).string(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectPrimitive_IFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectPrimitive_IFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.extension = reader.string();
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.createdAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectPrimitive_IFile {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      extension: isSet(object.extension) ? String(object.extension) : "",
      url: isSet(object.url) ? String(object.url) : "",
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : "",
    };
  },

  toJSON(message: ObjectPrimitive_IFile): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.extension !== undefined && (obj.extension = message.extension);
    message.url !== undefined && (obj.url = message.url);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectPrimitive_IFile>, I>>(base?: I): ObjectPrimitive_IFile {
    return ObjectPrimitive_IFile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectPrimitive_IFile>, I>>(object: I): ObjectPrimitive_IFile {
    const message = createBaseObjectPrimitive_IFile();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.extension = object.extension ?? "";
    message.url = object.url ?? "";
    message.createdAt = object.createdAt ?? "";
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
