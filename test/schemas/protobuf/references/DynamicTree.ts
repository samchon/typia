/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface DynamicTree {
  id: string;
  sequence: number;
  children: { [key: string]: DynamicTree };
}

export interface DynamicTree_ChildrenEntry {
  key: string;
  value: DynamicTree | undefined;
}

export interface RecordLtStringCommaSpaceDynamicTreeGt {
}

function createBaseDynamicTree(): DynamicTree {
  return { id: "", sequence: 0, children: {} };
}

export const DynamicTree = {
  encode(message: DynamicTree, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sequence !== 0) {
      writer.uint32(17).double(message.sequence);
    }
    Object.entries(message.children).forEach(([key, value]) => {
      DynamicTree_ChildrenEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DynamicTree {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDynamicTree();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.sequence = reader.double();
          break;
        case 3:
          const entry3 = DynamicTree_ChildrenEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.children[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DynamicTree {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
      children: isObject(object.children)
        ? Object.entries(object.children).reduce<{ [key: string]: DynamicTree }>((acc, [key, value]) => {
          acc[key] = DynamicTree.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: DynamicTree): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.sequence !== undefined && (obj.sequence = message.sequence);
    obj.children = {};
    if (message.children) {
      Object.entries(message.children).forEach(([k, v]) => {
        obj.children[k] = DynamicTree.toJSON(v);
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DynamicTree>, I>>(base?: I): DynamicTree {
    return DynamicTree.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DynamicTree>, I>>(object: I): DynamicTree {
    const message = createBaseDynamicTree();
    message.id = object.id ?? "";
    message.sequence = object.sequence ?? 0;
    message.children = Object.entries(object.children ?? {}).reduce<{ [key: string]: DynamicTree }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = DynamicTree.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseDynamicTree_ChildrenEntry(): DynamicTree_ChildrenEntry {
  return { key: "", value: undefined };
}

export const DynamicTree_ChildrenEntry = {
  encode(message: DynamicTree_ChildrenEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      DynamicTree.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DynamicTree_ChildrenEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDynamicTree_ChildrenEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = DynamicTree.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DynamicTree_ChildrenEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? DynamicTree.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: DynamicTree_ChildrenEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? DynamicTree.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DynamicTree_ChildrenEntry>, I>>(base?: I): DynamicTree_ChildrenEntry {
    return DynamicTree_ChildrenEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DynamicTree_ChildrenEntry>, I>>(object: I): DynamicTree_ChildrenEntry {
    const message = createBaseDynamicTree_ChildrenEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? DynamicTree.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseRecordLtStringCommaSpaceDynamicTreeGt(): RecordLtStringCommaSpaceDynamicTreeGt {
  return {};
}

export const RecordLtStringCommaSpaceDynamicTreeGt = {
  encode(_: RecordLtStringCommaSpaceDynamicTreeGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordLtStringCommaSpaceDynamicTreeGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordLtStringCommaSpaceDynamicTreeGt();
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

  fromJSON(_: any): RecordLtStringCommaSpaceDynamicTreeGt {
    return {};
  },

  toJSON(_: RecordLtStringCommaSpaceDynamicTreeGt): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordLtStringCommaSpaceDynamicTreeGt>, I>>(
    base?: I,
  ): RecordLtStringCommaSpaceDynamicTreeGt {
    return RecordLtStringCommaSpaceDynamicTreeGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RecordLtStringCommaSpaceDynamicTreeGt>, I>>(
    _: I,
  ): RecordLtStringCommaSpaceDynamicTreeGt {
    const message = createBaseRecordLtStringCommaSpaceDynamicTreeGt();
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
