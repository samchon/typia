/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ArrayRecursiveUnionExplicit {
}

export interface ArrayRecursiveUnionExplicit_IDirectory {
  id: number;
  name: string;
  path: string;
  children:
    Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt[];
  type: string;
}

export interface ArrayRecursiveUnionExplicit_IImageFile {
  id: number;
  name: string;
  path: string;
  width: number;
  height: number;
  url: string;
  size: number;
  type: string;
  extension: string;
}

export interface ArrayRecursiveUnionExplicit_ITextFile {
  id: number;
  name: string;
  path: string;
  size: number;
  content: string;
  type: string;
  extension: string;
}

export interface ArrayRecursiveUnionExplicit_IZipFile {
  id: number;
  name: string;
  path: string;
  size: number;
  count: number;
  type: string;
  extension: string;
}

export interface ArrayRecursiveUnionExplicit_IShortcut {
  id: number;
  name: string;
  path: string;
  targetO0?: ArrayRecursiveUnionExplicit_IDirectory | undefined;
  targetO1?: ArrayRecursiveUnionExplicit_IImageFile | undefined;
  targetO2?: ArrayRecursiveUnionExplicit_ITextFile | undefined;
  targetO3?: ArrayRecursiveUnionExplicit_IZipFile | undefined;
  targetO4?: ArrayRecursiveUnionExplicit_IShortcut | undefined;
  type: string;
  extension: string;
}

export interface Array {
}

export interface Array_ElementLtLpArrayRecursiveUnionExplicit {
}

export interface Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit {
}

export interface Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit {
}

export interface Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit {
}

export interface Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit {
}

export interface Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt {
  valueO0?: ArrayRecursiveUnionExplicit_IDirectory | undefined;
  valueO1?: ArrayRecursiveUnionExplicit_IImageFile | undefined;
  valueO2?: ArrayRecursiveUnionExplicit_ITextFile | undefined;
  valueO3?: ArrayRecursiveUnionExplicit_IZipFile | undefined;
  valueO4?: ArrayRecursiveUnionExplicit_IShortcut | undefined;
}

export interface Main {
  value:
    Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt[];
}

function createBaseArrayRecursiveUnionExplicit(): ArrayRecursiveUnionExplicit {
  return {};
}

export const ArrayRecursiveUnionExplicit = {
  encode(_: ArrayRecursiveUnionExplicit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayRecursiveUnionExplicit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayRecursiveUnionExplicit();
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

  fromJSON(_: any): ArrayRecursiveUnionExplicit {
    return {};
  },

  toJSON(_: ArrayRecursiveUnionExplicit): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayRecursiveUnionExplicit>, I>>(base?: I): ArrayRecursiveUnionExplicit {
    return ArrayRecursiveUnionExplicit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayRecursiveUnionExplicit>, I>>(_: I): ArrayRecursiveUnionExplicit {
    const message = createBaseArrayRecursiveUnionExplicit();
    return message;
  },
};

function createBaseArrayRecursiveUnionExplicit_IDirectory(): ArrayRecursiveUnionExplicit_IDirectory {
  return { id: 0, name: "", path: "", children: [], type: "" };
}

export const ArrayRecursiveUnionExplicit_IDirectory = {
  encode(message: ArrayRecursiveUnionExplicit_IDirectory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt
        .encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(42).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayRecursiveUnionExplicit_IDirectory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayRecursiveUnionExplicit_IDirectory();
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
            Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt
              .decode(reader, reader.uint32()),
          );
          break;
        case 5:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArrayRecursiveUnionExplicit_IDirectory {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      path: isSet(object.path) ? String(object.path) : "",
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) =>
          Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt
            .fromJSON(e)
        )
        : [],
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: ArrayRecursiveUnionExplicit_IDirectory): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.path !== undefined && (obj.path = message.path);
    if (message.children) {
      obj.children = message.children.map((e) => e
        ? Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt
          .toJSON(e)
        : undefined
      );
    } else {
      obj.children = [];
    }
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayRecursiveUnionExplicit_IDirectory>, I>>(
    base?: I,
  ): ArrayRecursiveUnionExplicit_IDirectory {
    return ArrayRecursiveUnionExplicit_IDirectory.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayRecursiveUnionExplicit_IDirectory>, I>>(
    object: I,
  ): ArrayRecursiveUnionExplicit_IDirectory {
    const message = createBaseArrayRecursiveUnionExplicit_IDirectory();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.path = object.path ?? "";
    message.children =
      object.children?.map((e) =>
        Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt
          .fromPartial(e)
      ) || [];
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseArrayRecursiveUnionExplicit_IImageFile(): ArrayRecursiveUnionExplicit_IImageFile {
  return { id: 0, name: "", path: "", width: 0, height: 0, url: "", size: 0, type: "", extension: "" };
}

export const ArrayRecursiveUnionExplicit_IImageFile = {
  encode(message: ArrayRecursiveUnionExplicit_IImageFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.type !== "") {
      writer.uint32(66).string(message.type);
    }
    if (message.extension !== "") {
      writer.uint32(74).string(message.extension);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayRecursiveUnionExplicit_IImageFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayRecursiveUnionExplicit_IImageFile();
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
        case 8:
          message.type = reader.string();
          break;
        case 9:
          message.extension = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArrayRecursiveUnionExplicit_IImageFile {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      path: isSet(object.path) ? String(object.path) : "",
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      size: isSet(object.size) ? Number(object.size) : 0,
      type: isSet(object.type) ? String(object.type) : "",
      extension: isSet(object.extension) ? String(object.extension) : "",
    };
  },

  toJSON(message: ArrayRecursiveUnionExplicit_IImageFile): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.path !== undefined && (obj.path = message.path);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.url !== undefined && (obj.url = message.url);
    message.size !== undefined && (obj.size = message.size);
    message.type !== undefined && (obj.type = message.type);
    message.extension !== undefined && (obj.extension = message.extension);
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayRecursiveUnionExplicit_IImageFile>, I>>(
    base?: I,
  ): ArrayRecursiveUnionExplicit_IImageFile {
    return ArrayRecursiveUnionExplicit_IImageFile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayRecursiveUnionExplicit_IImageFile>, I>>(
    object: I,
  ): ArrayRecursiveUnionExplicit_IImageFile {
    const message = createBaseArrayRecursiveUnionExplicit_IImageFile();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.path = object.path ?? "";
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.url = object.url ?? "";
    message.size = object.size ?? 0;
    message.type = object.type ?? "";
    message.extension = object.extension ?? "";
    return message;
  },
};

function createBaseArrayRecursiveUnionExplicit_ITextFile(): ArrayRecursiveUnionExplicit_ITextFile {
  return { id: 0, name: "", path: "", size: 0, content: "", type: "", extension: "" };
}

export const ArrayRecursiveUnionExplicit_ITextFile = {
  encode(message: ArrayRecursiveUnionExplicit_ITextFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.type !== "") {
      writer.uint32(50).string(message.type);
    }
    if (message.extension !== "") {
      writer.uint32(58).string(message.extension);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayRecursiveUnionExplicit_ITextFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayRecursiveUnionExplicit_ITextFile();
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
        case 6:
          message.type = reader.string();
          break;
        case 7:
          message.extension = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArrayRecursiveUnionExplicit_ITextFile {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      path: isSet(object.path) ? String(object.path) : "",
      size: isSet(object.size) ? Number(object.size) : 0,
      content: isSet(object.content) ? String(object.content) : "",
      type: isSet(object.type) ? String(object.type) : "",
      extension: isSet(object.extension) ? String(object.extension) : "",
    };
  },

  toJSON(message: ArrayRecursiveUnionExplicit_ITextFile): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.path !== undefined && (obj.path = message.path);
    message.size !== undefined && (obj.size = message.size);
    message.content !== undefined && (obj.content = message.content);
    message.type !== undefined && (obj.type = message.type);
    message.extension !== undefined && (obj.extension = message.extension);
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayRecursiveUnionExplicit_ITextFile>, I>>(
    base?: I,
  ): ArrayRecursiveUnionExplicit_ITextFile {
    return ArrayRecursiveUnionExplicit_ITextFile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayRecursiveUnionExplicit_ITextFile>, I>>(
    object: I,
  ): ArrayRecursiveUnionExplicit_ITextFile {
    const message = createBaseArrayRecursiveUnionExplicit_ITextFile();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.path = object.path ?? "";
    message.size = object.size ?? 0;
    message.content = object.content ?? "";
    message.type = object.type ?? "";
    message.extension = object.extension ?? "";
    return message;
  },
};

function createBaseArrayRecursiveUnionExplicit_IZipFile(): ArrayRecursiveUnionExplicit_IZipFile {
  return { id: 0, name: "", path: "", size: 0, count: 0, type: "", extension: "" };
}

export const ArrayRecursiveUnionExplicit_IZipFile = {
  encode(message: ArrayRecursiveUnionExplicit_IZipFile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.type !== "") {
      writer.uint32(50).string(message.type);
    }
    if (message.extension !== "") {
      writer.uint32(58).string(message.extension);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayRecursiveUnionExplicit_IZipFile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayRecursiveUnionExplicit_IZipFile();
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
        case 6:
          message.type = reader.string();
          break;
        case 7:
          message.extension = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArrayRecursiveUnionExplicit_IZipFile {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      path: isSet(object.path) ? String(object.path) : "",
      size: isSet(object.size) ? Number(object.size) : 0,
      count: isSet(object.count) ? Number(object.count) : 0,
      type: isSet(object.type) ? String(object.type) : "",
      extension: isSet(object.extension) ? String(object.extension) : "",
    };
  },

  toJSON(message: ArrayRecursiveUnionExplicit_IZipFile): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.path !== undefined && (obj.path = message.path);
    message.size !== undefined && (obj.size = message.size);
    message.count !== undefined && (obj.count = message.count);
    message.type !== undefined && (obj.type = message.type);
    message.extension !== undefined && (obj.extension = message.extension);
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayRecursiveUnionExplicit_IZipFile>, I>>(
    base?: I,
  ): ArrayRecursiveUnionExplicit_IZipFile {
    return ArrayRecursiveUnionExplicit_IZipFile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayRecursiveUnionExplicit_IZipFile>, I>>(
    object: I,
  ): ArrayRecursiveUnionExplicit_IZipFile {
    const message = createBaseArrayRecursiveUnionExplicit_IZipFile();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.path = object.path ?? "";
    message.size = object.size ?? 0;
    message.count = object.count ?? 0;
    message.type = object.type ?? "";
    message.extension = object.extension ?? "";
    return message;
  },
};

function createBaseArrayRecursiveUnionExplicit_IShortcut(): ArrayRecursiveUnionExplicit_IShortcut {
  return {
    id: 0,
    name: "",
    path: "",
    targetO0: undefined,
    targetO1: undefined,
    targetO2: undefined,
    targetO3: undefined,
    targetO4: undefined,
    type: "",
    extension: "",
  };
}

export const ArrayRecursiveUnionExplicit_IShortcut = {
  encode(message: ArrayRecursiveUnionExplicit_IShortcut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      ArrayRecursiveUnionExplicit_IDirectory.encode(message.targetO0, writer.uint32(34).fork()).ldelim();
    }
    if (message.targetO1 !== undefined) {
      ArrayRecursiveUnionExplicit_IImageFile.encode(message.targetO1, writer.uint32(42).fork()).ldelim();
    }
    if (message.targetO2 !== undefined) {
      ArrayRecursiveUnionExplicit_ITextFile.encode(message.targetO2, writer.uint32(50).fork()).ldelim();
    }
    if (message.targetO3 !== undefined) {
      ArrayRecursiveUnionExplicit_IZipFile.encode(message.targetO3, writer.uint32(58).fork()).ldelim();
    }
    if (message.targetO4 !== undefined) {
      ArrayRecursiveUnionExplicit_IShortcut.encode(message.targetO4, writer.uint32(66).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(74).string(message.type);
    }
    if (message.extension !== "") {
      writer.uint32(82).string(message.extension);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayRecursiveUnionExplicit_IShortcut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayRecursiveUnionExplicit_IShortcut();
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
          message.targetO0 = ArrayRecursiveUnionExplicit_IDirectory.decode(reader, reader.uint32());
          break;
        case 5:
          message.targetO1 = ArrayRecursiveUnionExplicit_IImageFile.decode(reader, reader.uint32());
          break;
        case 6:
          message.targetO2 = ArrayRecursiveUnionExplicit_ITextFile.decode(reader, reader.uint32());
          break;
        case 7:
          message.targetO3 = ArrayRecursiveUnionExplicit_IZipFile.decode(reader, reader.uint32());
          break;
        case 8:
          message.targetO4 = ArrayRecursiveUnionExplicit_IShortcut.decode(reader, reader.uint32());
          break;
        case 9:
          message.type = reader.string();
          break;
        case 10:
          message.extension = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArrayRecursiveUnionExplicit_IShortcut {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      path: isSet(object.path) ? String(object.path) : "",
      targetO0: isSet(object.targetO0) ? ArrayRecursiveUnionExplicit_IDirectory.fromJSON(object.targetO0) : undefined,
      targetO1: isSet(object.targetO1) ? ArrayRecursiveUnionExplicit_IImageFile.fromJSON(object.targetO1) : undefined,
      targetO2: isSet(object.targetO2) ? ArrayRecursiveUnionExplicit_ITextFile.fromJSON(object.targetO2) : undefined,
      targetO3: isSet(object.targetO3) ? ArrayRecursiveUnionExplicit_IZipFile.fromJSON(object.targetO3) : undefined,
      targetO4: isSet(object.targetO4) ? ArrayRecursiveUnionExplicit_IShortcut.fromJSON(object.targetO4) : undefined,
      type: isSet(object.type) ? String(object.type) : "",
      extension: isSet(object.extension) ? String(object.extension) : "",
    };
  },

  toJSON(message: ArrayRecursiveUnionExplicit_IShortcut): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.path !== undefined && (obj.path = message.path);
    message.targetO0 !== undefined &&
      (obj.targetO0 = message.targetO0 ? ArrayRecursiveUnionExplicit_IDirectory.toJSON(message.targetO0) : undefined);
    message.targetO1 !== undefined &&
      (obj.targetO1 = message.targetO1 ? ArrayRecursiveUnionExplicit_IImageFile.toJSON(message.targetO1) : undefined);
    message.targetO2 !== undefined &&
      (obj.targetO2 = message.targetO2 ? ArrayRecursiveUnionExplicit_ITextFile.toJSON(message.targetO2) : undefined);
    message.targetO3 !== undefined &&
      (obj.targetO3 = message.targetO3 ? ArrayRecursiveUnionExplicit_IZipFile.toJSON(message.targetO3) : undefined);
    message.targetO4 !== undefined &&
      (obj.targetO4 = message.targetO4 ? ArrayRecursiveUnionExplicit_IShortcut.toJSON(message.targetO4) : undefined);
    message.type !== undefined && (obj.type = message.type);
    message.extension !== undefined && (obj.extension = message.extension);
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayRecursiveUnionExplicit_IShortcut>, I>>(
    base?: I,
  ): ArrayRecursiveUnionExplicit_IShortcut {
    return ArrayRecursiveUnionExplicit_IShortcut.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayRecursiveUnionExplicit_IShortcut>, I>>(
    object: I,
  ): ArrayRecursiveUnionExplicit_IShortcut {
    const message = createBaseArrayRecursiveUnionExplicit_IShortcut();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.path = object.path ?? "";
    message.targetO0 = (object.targetO0 !== undefined && object.targetO0 !== null)
      ? ArrayRecursiveUnionExplicit_IDirectory.fromPartial(object.targetO0)
      : undefined;
    message.targetO1 = (object.targetO1 !== undefined && object.targetO1 !== null)
      ? ArrayRecursiveUnionExplicit_IImageFile.fromPartial(object.targetO1)
      : undefined;
    message.targetO2 = (object.targetO2 !== undefined && object.targetO2 !== null)
      ? ArrayRecursiveUnionExplicit_ITextFile.fromPartial(object.targetO2)
      : undefined;
    message.targetO3 = (object.targetO3 !== undefined && object.targetO3 !== null)
      ? ArrayRecursiveUnionExplicit_IZipFile.fromPartial(object.targetO3)
      : undefined;
    message.targetO4 = (object.targetO4 !== undefined && object.targetO4 !== null)
      ? ArrayRecursiveUnionExplicit_IShortcut.fromPartial(object.targetO4)
      : undefined;
    message.type = object.type ?? "";
    message.extension = object.extension ?? "";
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

function createBaseArray_ElementLtLpArrayRecursiveUnionExplicit(): Array_ElementLtLpArrayRecursiveUnionExplicit {
  return {};
}

export const Array_ElementLtLpArrayRecursiveUnionExplicit = {
  encode(_: Array_ElementLtLpArrayRecursiveUnionExplicit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array_ElementLtLpArrayRecursiveUnionExplicit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_ElementLtLpArrayRecursiveUnionExplicit();
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

  fromJSON(_: any): Array_ElementLtLpArrayRecursiveUnionExplicit {
    return {};
  },

  toJSON(_: Array_ElementLtLpArrayRecursiveUnionExplicit): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_ElementLtLpArrayRecursiveUnionExplicit>, I>>(
    base?: I,
  ): Array_ElementLtLpArrayRecursiveUnionExplicit {
    return Array_ElementLtLpArrayRecursiveUnionExplicit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_ElementLtLpArrayRecursiveUnionExplicit>, I>>(
    _: I,
  ): Array_ElementLtLpArrayRecursiveUnionExplicit {
    const message = createBaseArray_ElementLtLpArrayRecursiveUnionExplicit();
    return message;
  },
};

function createBaseArray_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit(): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit {
  return {};
}

export const Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit = {
  encode(
    _: Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseArray_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit();
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

  fromJSON(_: any): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit {
    return {};
  },

  toJSON(_: Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit>,
      I
    >,
  >(base?: I): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit {
    return Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit>,
      I
    >,
  >(_: I): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit {
    const message =
      createBaseArray_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit();
    return message;
  },
};

function createBaseArray_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit(): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit {
  return {};
}

export const Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit =
  {
    encode(
      _: Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit();
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
    ): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit {
      return Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit {
      const message =
        createBaseArray_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit(): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit {
  return {};
}

export const Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit =
  {
    encode(
      _: Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit();
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
    ): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit {
      return Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit {
      const message =
        createBaseArray_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit(): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit {
  return {};
}

export const Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit =
  {
    encode(
      _: Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit();
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
    ): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit {
      return Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit {
      const message =
        createBaseArray_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt(): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt {
  return { valueO0: undefined, valueO1: undefined, valueO2: undefined, valueO3: undefined, valueO4: undefined };
}

export const Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt =
  {
    encode(
      message:
        Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.valueO0 !== undefined) {
        ArrayRecursiveUnionExplicit_IDirectory.encode(message.valueO0, writer.uint32(10).fork()).ldelim();
      }
      if (message.valueO1 !== undefined) {
        ArrayRecursiveUnionExplicit_IImageFile.encode(message.valueO1, writer.uint32(18).fork()).ldelim();
      }
      if (message.valueO2 !== undefined) {
        ArrayRecursiveUnionExplicit_ITextFile.encode(message.valueO2, writer.uint32(26).fork()).ldelim();
      }
      if (message.valueO3 !== undefined) {
        ArrayRecursiveUnionExplicit_IZipFile.encode(message.valueO3, writer.uint32(34).fork()).ldelim();
      }
      if (message.valueO4 !== undefined) {
        ArrayRecursiveUnionExplicit_IShortcut.encode(message.valueO4, writer.uint32(42).fork()).ldelim();
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.valueO0 = ArrayRecursiveUnionExplicit_IDirectory.decode(reader, reader.uint32());
            break;
          case 2:
            message.valueO1 = ArrayRecursiveUnionExplicit_IImageFile.decode(reader, reader.uint32());
            break;
          case 3:
            message.valueO2 = ArrayRecursiveUnionExplicit_ITextFile.decode(reader, reader.uint32());
            break;
          case 4:
            message.valueO3 = ArrayRecursiveUnionExplicit_IZipFile.decode(reader, reader.uint32());
            break;
          case 5:
            message.valueO4 = ArrayRecursiveUnionExplicit_IShortcut.decode(reader, reader.uint32());
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
    ): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt {
      return {
        valueO0: isSet(object.valueO0) ? ArrayRecursiveUnionExplicit_IDirectory.fromJSON(object.valueO0) : undefined,
        valueO1: isSet(object.valueO1) ? ArrayRecursiveUnionExplicit_IImageFile.fromJSON(object.valueO1) : undefined,
        valueO2: isSet(object.valueO2) ? ArrayRecursiveUnionExplicit_ITextFile.fromJSON(object.valueO2) : undefined,
        valueO3: isSet(object.valueO3) ? ArrayRecursiveUnionExplicit_IZipFile.fromJSON(object.valueO3) : undefined,
        valueO4: isSet(object.valueO4) ? ArrayRecursiveUnionExplicit_IShortcut.fromJSON(object.valueO4) : undefined,
      };
    },

    toJSON(
      message:
        Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt,
    ): unknown {
      const obj: any = {};
      message.valueO0 !== undefined &&
        (obj.valueO0 = message.valueO0 ? ArrayRecursiveUnionExplicit_IDirectory.toJSON(message.valueO0) : undefined);
      message.valueO1 !== undefined &&
        (obj.valueO1 = message.valueO1 ? ArrayRecursiveUnionExplicit_IImageFile.toJSON(message.valueO1) : undefined);
      message.valueO2 !== undefined &&
        (obj.valueO2 = message.valueO2 ? ArrayRecursiveUnionExplicit_ITextFile.toJSON(message.valueO2) : undefined);
      message.valueO3 !== undefined &&
        (obj.valueO3 = message.valueO3 ? ArrayRecursiveUnionExplicit_IZipFile.toJSON(message.valueO3) : undefined);
      message.valueO4 !== undefined &&
        (obj.valueO4 = message.valueO4 ? ArrayRecursiveUnionExplicit_IShortcut.toJSON(message.valueO4) : undefined);
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt {
      return Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt
        >,
        I
      >,
    >(
      object: I,
    ): Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt {
      const message =
        createBaseArray_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt();
      message.valueO0 = (object.valueO0 !== undefined && object.valueO0 !== null)
        ? ArrayRecursiveUnionExplicit_IDirectory.fromPartial(object.valueO0)
        : undefined;
      message.valueO1 = (object.valueO1 !== undefined && object.valueO1 !== null)
        ? ArrayRecursiveUnionExplicit_IImageFile.fromPartial(object.valueO1)
        : undefined;
      message.valueO2 = (object.valueO2 !== undefined && object.valueO2 !== null)
        ? ArrayRecursiveUnionExplicit_ITextFile.fromPartial(object.valueO2)
        : undefined;
      message.valueO3 = (object.valueO3 !== undefined && object.valueO3 !== null)
        ? ArrayRecursiveUnionExplicit_IZipFile.fromPartial(object.valueO3)
        : undefined;
      message.valueO4 = (object.valueO4 !== undefined && object.valueO4 !== null)
        ? ArrayRecursiveUnionExplicit_IShortcut.fromPartial(object.valueO4)
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
      Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt
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
            Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt
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
          Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt
            .fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e
        ? Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt
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
        Array_ElementLtLpArrayRecursiveUnionExplicit_IDirectorySpaceOrSpaceArrayRecursiveUnionExplicit_IImageFileSpaceOrSpaceArrayRecursiveUnionExplicit_IShortcutSpaceOrSpaceArrayRecursiveUnionExplicit_ITextFileSpaceOrSpaceArrayRecursiveUnionExplicit_IZipFileRpGt
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
