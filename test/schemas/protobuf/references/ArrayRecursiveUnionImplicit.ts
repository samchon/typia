/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ArrayRecursiveUnionImplicit {
}

export interface ArrayRecursiveUnionImplicit_IDirectory {
  id: number;
  name: string;
  path: string;
  children:
    Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt[];
}

export interface ArrayRecursiveUnionImplicit_ISharedDirectory {
  access: string;
  id: number;
  name: string;
  path: string;
  children:
    Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt[];
}

export interface ArrayRecursiveUnionImplicit_IImageFile {
  id: number;
  name: string;
  path: string;
  width: number;
  height: number;
  url: string;
  size: number;
}

export interface ArrayRecursiveUnionImplicit_ITextFile {
  id: number;
  name: string;
  path: string;
  size: number;
  content: string;
}

export interface ArrayRecursiveUnionImplicit_IZipFile {
  id: number;
  name: string;
  path: string;
  size: number;
  count: number;
}

export interface ArrayRecursiveUnionImplicit_IShortcut {
  id: number;
  name: string;
  path: string;
  targetO0?: ArrayRecursiveUnionImplicit_IDirectory | undefined;
  targetO1?: ArrayRecursiveUnionImplicit_ISharedDirectory | undefined;
  targetO2?: ArrayRecursiveUnionImplicit_IImageFile | undefined;
  targetO3?: ArrayRecursiveUnionImplicit_ITextFile | undefined;
  targetO4?: ArrayRecursiveUnionImplicit_IZipFile | undefined;
  targetO5?: ArrayRecursiveUnionImplicit_IShortcut | undefined;
}

export interface Array {
}

export interface Array_ElementLtLpArrayRecursiveUnionImplicit {
}

export interface Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit {
}

export interface Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit {
}

export interface Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit {
}

export interface Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit {
}

export interface Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit {
}

export interface Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt {
  valueO0?: ArrayRecursiveUnionImplicit_IDirectory | undefined;
  valueO1?: ArrayRecursiveUnionImplicit_ISharedDirectory | undefined;
  valueO2?: ArrayRecursiveUnionImplicit_IImageFile | undefined;
  valueO3?: ArrayRecursiveUnionImplicit_ITextFile | undefined;
  valueO4?: ArrayRecursiveUnionImplicit_IZipFile | undefined;
  valueO5?: ArrayRecursiveUnionImplicit_IShortcut | undefined;
}

export interface Main {
  value:
    Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt[];
}

function createBaseArrayRecursiveUnionImplicit(): ArrayRecursiveUnionImplicit {
  return {};
}

export const ArrayRecursiveUnionImplicit = {
  encode(_: ArrayRecursiveUnionImplicit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayRecursiveUnionImplicit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayRecursiveUnionImplicit();
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

  fromJSON(_: any): ArrayRecursiveUnionImplicit {
    return {};
  },

  toJSON(_: ArrayRecursiveUnionImplicit): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayRecursiveUnionImplicit>, I>>(base?: I): ArrayRecursiveUnionImplicit {
    return ArrayRecursiveUnionImplicit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayRecursiveUnionImplicit>, I>>(_: I): ArrayRecursiveUnionImplicit {
    const message = createBaseArrayRecursiveUnionImplicit();
    return message;
  },
};

function createBaseArrayRecursiveUnionImplicit_IDirectory(): ArrayRecursiveUnionImplicit_IDirectory {
  return { id: 0, name: "", path: "", children: [] };
}

export const ArrayRecursiveUnionImplicit_IDirectory = {
  encode(message: ArrayRecursiveUnionImplicit_IDirectory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(9).double(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    for (const v of message.children) {
      Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt
        .encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayRecursiveUnionImplicit_IDirectory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayRecursiveUnionImplicit_IDirectory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.double();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.path = reader.string();
          break;
        case 4:
          message.children.push(
            Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt
              .decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArrayRecursiveUnionImplicit_IDirectory {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      path: isSet(object.path) ? String(object.path) : "",
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) =>
          Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt
            .fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: ArrayRecursiveUnionImplicit_IDirectory): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.path !== undefined && (obj.path = message.path);
    if (message.children) {
      obj.children = message.children.map((e) => e
        ? Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt
          .toJSON(e)
        : undefined
      );
    } else {
      obj.children = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayRecursiveUnionImplicit_IDirectory>, I>>(
    base?: I,
  ): ArrayRecursiveUnionImplicit_IDirectory {
    return ArrayRecursiveUnionImplicit_IDirectory.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayRecursiveUnionImplicit_IDirectory>, I>>(
    object: I,
  ): ArrayRecursiveUnionImplicit_IDirectory {
    const message = createBaseArrayRecursiveUnionImplicit_IDirectory();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.path = object.path ?? "";
    message.children =
      object.children?.map((e) =>
        Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt
          .fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseArrayRecursiveUnionImplicit_ISharedDirectory(): ArrayRecursiveUnionImplicit_ISharedDirectory {
  return { access: "", id: 0, name: "", path: "", children: [] };
}

export const ArrayRecursiveUnionImplicit_ISharedDirectory = {
  encode(message: ArrayRecursiveUnionImplicit_ISharedDirectory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.access !== "") {
      writer.uint32(10).string(message.access);
    }
    if (message.id !== 0) {
      writer.uint32(17).double(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.path !== "") {
      writer.uint32(34).string(message.path);
    }
    for (const v of message.children) {
      Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt
        .encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayRecursiveUnionImplicit_ISharedDirectory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayRecursiveUnionImplicit_ISharedDirectory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.access = reader.string();
          break;
        case 2:
          message.id = reader.double();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.path = reader.string();
          break;
        case 5:
          message.children.push(
            Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt
              .decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArrayRecursiveUnionImplicit_ISharedDirectory {
    return {
      access: isSet(object.access) ? String(object.access) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      path: isSet(object.path) ? String(object.path) : "",
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) =>
          Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt
            .fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: ArrayRecursiveUnionImplicit_ISharedDirectory): unknown {
    const obj: any = {};
    message.access !== undefined && (obj.access = message.access);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.path !== undefined && (obj.path = message.path);
    if (message.children) {
      obj.children = message.children.map((e) => e
        ? Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt
          .toJSON(e)
        : undefined
      );
    } else {
      obj.children = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayRecursiveUnionImplicit_ISharedDirectory>, I>>(
    base?: I,
  ): ArrayRecursiveUnionImplicit_ISharedDirectory {
    return ArrayRecursiveUnionImplicit_ISharedDirectory.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayRecursiveUnionImplicit_ISharedDirectory>, I>>(
    object: I,
  ): ArrayRecursiveUnionImplicit_ISharedDirectory {
    const message = createBaseArrayRecursiveUnionImplicit_ISharedDirectory();
    message.access = object.access ?? "";
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.path = object.path ?? "";
    message.children =
      object.children?.map((e) =>
        Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt
          .fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseArrayRecursiveUnionImplicit_IImageFile(): ArrayRecursiveUnionImplicit_IImageFile {
  return { id: 0, name: "", path: "", width: 0, height: 0, url: "", size: 0 };
}

export const ArrayRecursiveUnionImplicit_IImageFile = {
  encode(message: ArrayRecursiveUnionImplicit_IImageFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(9).double(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.width !== 0) {
      writer.uint32(33).double(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(41).double(message.height);
    }
    if (message.url !== "") {
      writer.uint32(50).string(message.url);
    }
    if (message.size !== 0) {
      writer.uint32(57).double(message.size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayRecursiveUnionImplicit_IImageFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayRecursiveUnionImplicit_IImageFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.double();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.path = reader.string();
          break;
        case 4:
          message.width = reader.double();
          break;
        case 5:
          message.height = reader.double();
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.size = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArrayRecursiveUnionImplicit_IImageFile {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      path: isSet(object.path) ? String(object.path) : "",
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      size: isSet(object.size) ? Number(object.size) : 0,
    };
  },

  toJSON(message: ArrayRecursiveUnionImplicit_IImageFile): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.path !== undefined && (obj.path = message.path);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.url !== undefined && (obj.url = message.url);
    message.size !== undefined && (obj.size = message.size);
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayRecursiveUnionImplicit_IImageFile>, I>>(
    base?: I,
  ): ArrayRecursiveUnionImplicit_IImageFile {
    return ArrayRecursiveUnionImplicit_IImageFile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayRecursiveUnionImplicit_IImageFile>, I>>(
    object: I,
  ): ArrayRecursiveUnionImplicit_IImageFile {
    const message = createBaseArrayRecursiveUnionImplicit_IImageFile();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.path = object.path ?? "";
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.url = object.url ?? "";
    message.size = object.size ?? 0;
    return message;
  },
};

function createBaseArrayRecursiveUnionImplicit_ITextFile(): ArrayRecursiveUnionImplicit_ITextFile {
  return { id: 0, name: "", path: "", size: 0, content: "" };
}

export const ArrayRecursiveUnionImplicit_ITextFile = {
  encode(message: ArrayRecursiveUnionImplicit_ITextFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(9).double(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.size !== 0) {
      writer.uint32(33).double(message.size);
    }
    if (message.content !== "") {
      writer.uint32(42).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayRecursiveUnionImplicit_ITextFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayRecursiveUnionImplicit_ITextFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.double();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.path = reader.string();
          break;
        case 4:
          message.size = reader.double();
          break;
        case 5:
          message.content = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArrayRecursiveUnionImplicit_ITextFile {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      path: isSet(object.path) ? String(object.path) : "",
      size: isSet(object.size) ? Number(object.size) : 0,
      content: isSet(object.content) ? String(object.content) : "",
    };
  },

  toJSON(message: ArrayRecursiveUnionImplicit_ITextFile): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.path !== undefined && (obj.path = message.path);
    message.size !== undefined && (obj.size = message.size);
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayRecursiveUnionImplicit_ITextFile>, I>>(
    base?: I,
  ): ArrayRecursiveUnionImplicit_ITextFile {
    return ArrayRecursiveUnionImplicit_ITextFile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayRecursiveUnionImplicit_ITextFile>, I>>(
    object: I,
  ): ArrayRecursiveUnionImplicit_ITextFile {
    const message = createBaseArrayRecursiveUnionImplicit_ITextFile();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.path = object.path ?? "";
    message.size = object.size ?? 0;
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseArrayRecursiveUnionImplicit_IZipFile(): ArrayRecursiveUnionImplicit_IZipFile {
  return { id: 0, name: "", path: "", size: 0, count: 0 };
}

export const ArrayRecursiveUnionImplicit_IZipFile = {
  encode(message: ArrayRecursiveUnionImplicit_IZipFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(9).double(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.size !== 0) {
      writer.uint32(33).double(message.size);
    }
    if (message.count !== 0) {
      writer.uint32(41).double(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayRecursiveUnionImplicit_IZipFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayRecursiveUnionImplicit_IZipFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.double();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.path = reader.string();
          break;
        case 4:
          message.size = reader.double();
          break;
        case 5:
          message.count = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArrayRecursiveUnionImplicit_IZipFile {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      path: isSet(object.path) ? String(object.path) : "",
      size: isSet(object.size) ? Number(object.size) : 0,
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: ArrayRecursiveUnionImplicit_IZipFile): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.path !== undefined && (obj.path = message.path);
    message.size !== undefined && (obj.size = message.size);
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayRecursiveUnionImplicit_IZipFile>, I>>(
    base?: I,
  ): ArrayRecursiveUnionImplicit_IZipFile {
    return ArrayRecursiveUnionImplicit_IZipFile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayRecursiveUnionImplicit_IZipFile>, I>>(
    object: I,
  ): ArrayRecursiveUnionImplicit_IZipFile {
    const message = createBaseArrayRecursiveUnionImplicit_IZipFile();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.path = object.path ?? "";
    message.size = object.size ?? 0;
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseArrayRecursiveUnionImplicit_IShortcut(): ArrayRecursiveUnionImplicit_IShortcut {
  return {
    id: 0,
    name: "",
    path: "",
    targetO0: undefined,
    targetO1: undefined,
    targetO2: undefined,
    targetO3: undefined,
    targetO4: undefined,
    targetO5: undefined,
  };
}

export const ArrayRecursiveUnionImplicit_IShortcut = {
  encode(message: ArrayRecursiveUnionImplicit_IShortcut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(9).double(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.targetO0 !== undefined) {
      ArrayRecursiveUnionImplicit_IDirectory.encode(message.targetO0, writer.uint32(34).fork()).ldelim();
    }
    if (message.targetO1 !== undefined) {
      ArrayRecursiveUnionImplicit_ISharedDirectory.encode(message.targetO1, writer.uint32(42).fork()).ldelim();
    }
    if (message.targetO2 !== undefined) {
      ArrayRecursiveUnionImplicit_IImageFile.encode(message.targetO2, writer.uint32(50).fork()).ldelim();
    }
    if (message.targetO3 !== undefined) {
      ArrayRecursiveUnionImplicit_ITextFile.encode(message.targetO3, writer.uint32(58).fork()).ldelim();
    }
    if (message.targetO4 !== undefined) {
      ArrayRecursiveUnionImplicit_IZipFile.encode(message.targetO4, writer.uint32(66).fork()).ldelim();
    }
    if (message.targetO5 !== undefined) {
      ArrayRecursiveUnionImplicit_IShortcut.encode(message.targetO5, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayRecursiveUnionImplicit_IShortcut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayRecursiveUnionImplicit_IShortcut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.double();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.path = reader.string();
          break;
        case 4:
          message.targetO0 = ArrayRecursiveUnionImplicit_IDirectory.decode(reader, reader.uint32());
          break;
        case 5:
          message.targetO1 = ArrayRecursiveUnionImplicit_ISharedDirectory.decode(reader, reader.uint32());
          break;
        case 6:
          message.targetO2 = ArrayRecursiveUnionImplicit_IImageFile.decode(reader, reader.uint32());
          break;
        case 7:
          message.targetO3 = ArrayRecursiveUnionImplicit_ITextFile.decode(reader, reader.uint32());
          break;
        case 8:
          message.targetO4 = ArrayRecursiveUnionImplicit_IZipFile.decode(reader, reader.uint32());
          break;
        case 9:
          message.targetO5 = ArrayRecursiveUnionImplicit_IShortcut.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArrayRecursiveUnionImplicit_IShortcut {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      path: isSet(object.path) ? String(object.path) : "",
      targetO0: isSet(object.targetO0) ? ArrayRecursiveUnionImplicit_IDirectory.fromJSON(object.targetO0) : undefined,
      targetO1: isSet(object.targetO1)
        ? ArrayRecursiveUnionImplicit_ISharedDirectory.fromJSON(object.targetO1)
        : undefined,
      targetO2: isSet(object.targetO2) ? ArrayRecursiveUnionImplicit_IImageFile.fromJSON(object.targetO2) : undefined,
      targetO3: isSet(object.targetO3) ? ArrayRecursiveUnionImplicit_ITextFile.fromJSON(object.targetO3) : undefined,
      targetO4: isSet(object.targetO4) ? ArrayRecursiveUnionImplicit_IZipFile.fromJSON(object.targetO4) : undefined,
      targetO5: isSet(object.targetO5) ? ArrayRecursiveUnionImplicit_IShortcut.fromJSON(object.targetO5) : undefined,
    };
  },

  toJSON(message: ArrayRecursiveUnionImplicit_IShortcut): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.path !== undefined && (obj.path = message.path);
    message.targetO0 !== undefined &&
      (obj.targetO0 = message.targetO0 ? ArrayRecursiveUnionImplicit_IDirectory.toJSON(message.targetO0) : undefined);
    message.targetO1 !== undefined && (obj.targetO1 = message.targetO1
      ? ArrayRecursiveUnionImplicit_ISharedDirectory.toJSON(message.targetO1)
      : undefined);
    message.targetO2 !== undefined &&
      (obj.targetO2 = message.targetO2 ? ArrayRecursiveUnionImplicit_IImageFile.toJSON(message.targetO2) : undefined);
    message.targetO3 !== undefined &&
      (obj.targetO3 = message.targetO3 ? ArrayRecursiveUnionImplicit_ITextFile.toJSON(message.targetO3) : undefined);
    message.targetO4 !== undefined &&
      (obj.targetO4 = message.targetO4 ? ArrayRecursiveUnionImplicit_IZipFile.toJSON(message.targetO4) : undefined);
    message.targetO5 !== undefined &&
      (obj.targetO5 = message.targetO5 ? ArrayRecursiveUnionImplicit_IShortcut.toJSON(message.targetO5) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayRecursiveUnionImplicit_IShortcut>, I>>(
    base?: I,
  ): ArrayRecursiveUnionImplicit_IShortcut {
    return ArrayRecursiveUnionImplicit_IShortcut.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayRecursiveUnionImplicit_IShortcut>, I>>(
    object: I,
  ): ArrayRecursiveUnionImplicit_IShortcut {
    const message = createBaseArrayRecursiveUnionImplicit_IShortcut();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.path = object.path ?? "";
    message.targetO0 = (object.targetO0 !== undefined && object.targetO0 !== null)
      ? ArrayRecursiveUnionImplicit_IDirectory.fromPartial(object.targetO0)
      : undefined;
    message.targetO1 = (object.targetO1 !== undefined && object.targetO1 !== null)
      ? ArrayRecursiveUnionImplicit_ISharedDirectory.fromPartial(object.targetO1)
      : undefined;
    message.targetO2 = (object.targetO2 !== undefined && object.targetO2 !== null)
      ? ArrayRecursiveUnionImplicit_IImageFile.fromPartial(object.targetO2)
      : undefined;
    message.targetO3 = (object.targetO3 !== undefined && object.targetO3 !== null)
      ? ArrayRecursiveUnionImplicit_ITextFile.fromPartial(object.targetO3)
      : undefined;
    message.targetO4 = (object.targetO4 !== undefined && object.targetO4 !== null)
      ? ArrayRecursiveUnionImplicit_IZipFile.fromPartial(object.targetO4)
      : undefined;
    message.targetO5 = (object.targetO5 !== undefined && object.targetO5 !== null)
      ? ArrayRecursiveUnionImplicit_IShortcut.fromPartial(object.targetO5)
      : undefined;
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

function createBaseArray_ElementLtLpArrayRecursiveUnionImplicit(): Array_ElementLtLpArrayRecursiveUnionImplicit {
  return {};
}

export const Array_ElementLtLpArrayRecursiveUnionImplicit = {
  encode(_: Array_ElementLtLpArrayRecursiveUnionImplicit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array_ElementLtLpArrayRecursiveUnionImplicit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_ElementLtLpArrayRecursiveUnionImplicit();
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

  fromJSON(_: any): Array_ElementLtLpArrayRecursiveUnionImplicit {
    return {};
  },

  toJSON(_: Array_ElementLtLpArrayRecursiveUnionImplicit): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_ElementLtLpArrayRecursiveUnionImplicit>, I>>(
    base?: I,
  ): Array_ElementLtLpArrayRecursiveUnionImplicit {
    return Array_ElementLtLpArrayRecursiveUnionImplicit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_ElementLtLpArrayRecursiveUnionImplicit>, I>>(
    _: I,
  ): Array_ElementLtLpArrayRecursiveUnionImplicit {
    const message = createBaseArray_ElementLtLpArrayRecursiveUnionImplicit();
    return message;
  },
};

function createBaseArray_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit(): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit {
  return {};
}

export const Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit = {
  encode(
    _: Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseArray_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit();
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

  fromJSON(_: any): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit {
    return {};
  },

  toJSON(_: Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit>,
      I
    >,
  >(base?: I): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit {
    return Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit>,
      I
    >,
  >(_: I): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit {
    const message =
      createBaseArray_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit();
    return message;
  },
};

function createBaseArray_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit(): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit {
  return {};
}

export const Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit =
  {
    encode(
      _: Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit();
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

    fromJSON(
      _: any,
    ): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit {
      return Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit {
      const message =
        createBaseArray_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit(): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit {
  return {};
}

export const Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit =
  {
    encode(
      _: Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit();
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

    fromJSON(
      _: any,
    ): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit {
      return Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit {
      const message =
        createBaseArray_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit(): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit {
  return {};
}

export const Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit =
  {
    encode(
      _: Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit();
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

    fromJSON(
      _: any,
    ): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit {
      return Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit {
      const message =
        createBaseArray_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit(): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit {
  return {};
}

export const Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit =
  {
    encode(
      _: Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit();
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

    fromJSON(
      _: any,
    ): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit {
      return Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit {
      const message =
        createBaseArray_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt(): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt {
  return {
    valueO0: undefined,
    valueO1: undefined,
    valueO2: undefined,
    valueO3: undefined,
    valueO4: undefined,
    valueO5: undefined,
  };
}

export const Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt =
  {
    encode(
      message:
        Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.valueO0 !== undefined) {
        ArrayRecursiveUnionImplicit_IDirectory.encode(message.valueO0, writer.uint32(10).fork()).ldelim();
      }
      if (message.valueO1 !== undefined) {
        ArrayRecursiveUnionImplicit_ISharedDirectory.encode(message.valueO1, writer.uint32(18).fork()).ldelim();
      }
      if (message.valueO2 !== undefined) {
        ArrayRecursiveUnionImplicit_IImageFile.encode(message.valueO2, writer.uint32(26).fork()).ldelim();
      }
      if (message.valueO3 !== undefined) {
        ArrayRecursiveUnionImplicit_ITextFile.encode(message.valueO3, writer.uint32(34).fork()).ldelim();
      }
      if (message.valueO4 !== undefined) {
        ArrayRecursiveUnionImplicit_IZipFile.encode(message.valueO4, writer.uint32(42).fork()).ldelim();
      }
      if (message.valueO5 !== undefined) {
        ArrayRecursiveUnionImplicit_IShortcut.encode(message.valueO5, writer.uint32(50).fork()).ldelim();
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.valueO0 = ArrayRecursiveUnionImplicit_IDirectory.decode(reader, reader.uint32());
            break;
          case 2:
            message.valueO1 = ArrayRecursiveUnionImplicit_ISharedDirectory.decode(reader, reader.uint32());
            break;
          case 3:
            message.valueO2 = ArrayRecursiveUnionImplicit_IImageFile.decode(reader, reader.uint32());
            break;
          case 4:
            message.valueO3 = ArrayRecursiveUnionImplicit_ITextFile.decode(reader, reader.uint32());
            break;
          case 5:
            message.valueO4 = ArrayRecursiveUnionImplicit_IZipFile.decode(reader, reader.uint32());
            break;
          case 6:
            message.valueO5 = ArrayRecursiveUnionImplicit_IShortcut.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    },

    fromJSON(
      object: any,
    ): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt {
      return {
        valueO0: isSet(object.valueO0) ? ArrayRecursiveUnionImplicit_IDirectory.fromJSON(object.valueO0) : undefined,
        valueO1: isSet(object.valueO1)
          ? ArrayRecursiveUnionImplicit_ISharedDirectory.fromJSON(object.valueO1)
          : undefined,
        valueO2: isSet(object.valueO2) ? ArrayRecursiveUnionImplicit_IImageFile.fromJSON(object.valueO2) : undefined,
        valueO3: isSet(object.valueO3) ? ArrayRecursiveUnionImplicit_ITextFile.fromJSON(object.valueO3) : undefined,
        valueO4: isSet(object.valueO4) ? ArrayRecursiveUnionImplicit_IZipFile.fromJSON(object.valueO4) : undefined,
        valueO5: isSet(object.valueO5) ? ArrayRecursiveUnionImplicit_IShortcut.fromJSON(object.valueO5) : undefined,
      };
    },

    toJSON(
      message:
        Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt,
    ): unknown {
      const obj: any = {};
      message.valueO0 !== undefined &&
        (obj.valueO0 = message.valueO0 ? ArrayRecursiveUnionImplicit_IDirectory.toJSON(message.valueO0) : undefined);
      message.valueO1 !== undefined && (obj.valueO1 = message.valueO1
        ? ArrayRecursiveUnionImplicit_ISharedDirectory.toJSON(message.valueO1)
        : undefined);
      message.valueO2 !== undefined &&
        (obj.valueO2 = message.valueO2 ? ArrayRecursiveUnionImplicit_IImageFile.toJSON(message.valueO2) : undefined);
      message.valueO3 !== undefined &&
        (obj.valueO3 = message.valueO3 ? ArrayRecursiveUnionImplicit_ITextFile.toJSON(message.valueO3) : undefined);
      message.valueO4 !== undefined &&
        (obj.valueO4 = message.valueO4 ? ArrayRecursiveUnionImplicit_IZipFile.toJSON(message.valueO4) : undefined);
      message.valueO5 !== undefined &&
        (obj.valueO5 = message.valueO5 ? ArrayRecursiveUnionImplicit_IShortcut.toJSON(message.valueO5) : undefined);
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt {
      return Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt
        >,
        I
      >,
    >(
      object: I,
    ): Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt {
      const message =
        createBaseArray_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt();
      message.valueO0 = (object.valueO0 !== undefined && object.valueO0 !== null)
        ? ArrayRecursiveUnionImplicit_IDirectory.fromPartial(object.valueO0)
        : undefined;
      message.valueO1 = (object.valueO1 !== undefined && object.valueO1 !== null)
        ? ArrayRecursiveUnionImplicit_ISharedDirectory.fromPartial(object.valueO1)
        : undefined;
      message.valueO2 = (object.valueO2 !== undefined && object.valueO2 !== null)
        ? ArrayRecursiveUnionImplicit_IImageFile.fromPartial(object.valueO2)
        : undefined;
      message.valueO3 = (object.valueO3 !== undefined && object.valueO3 !== null)
        ? ArrayRecursiveUnionImplicit_ITextFile.fromPartial(object.valueO3)
        : undefined;
      message.valueO4 = (object.valueO4 !== undefined && object.valueO4 !== null)
        ? ArrayRecursiveUnionImplicit_IZipFile.fromPartial(object.valueO4)
        : undefined;
      message.valueO5 = (object.valueO5 !== undefined && object.valueO5 !== null)
        ? ArrayRecursiveUnionImplicit_IShortcut.fromPartial(object.valueO5)
        : undefined;
      return message;
    },
  };

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt
        .encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.value.push(
            Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt
              .decode(reader, reader.uint32()),
          );
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
        ? object.value.map((e: any) =>
          Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt
            .fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e
        ? Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt
          .toJSON(e)
        : undefined
      );
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
    message.value =
      object.value?.map((e) =>
        Array_ElementLtLpArrayRecursiveUnionImplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionImplicit_ISharedDirectorySpaceOrSpaceArrayRecursiveUnionImplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionImplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionImplicit_IZipFileRpGt
          .fromPartial(e)
      ) || [];
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
