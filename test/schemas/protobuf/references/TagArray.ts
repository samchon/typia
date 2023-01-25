/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface TagArray {
}

export interface TagArray_Type {
  items: string[];
  minItems: number[];
  maxItems: Array_ElementLtLpNumberSpaceOrSpaceStringRpGt[];
  both: string[];
}

export interface Array {
}

export interface Array_ElementLtLpNumberSpaceOrSpaceStringRpGt {
  valueO0?: string | undefined;
  valueO1?: number | undefined;
}

export interface Main {
  value: TagArray_Type[];
}

function createBaseTagArray(): TagArray {
  return {};
}

export const TagArray = {
  encode(_: TagArray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TagArray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagArray();
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

  fromJSON(_: any): TagArray {
    return {};
  },

  toJSON(_: TagArray): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TagArray>, I>>(base?: I): TagArray {
    return TagArray.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TagArray>, I>>(_: I): TagArray {
    const message = createBaseTagArray();
    return message;
  },
};

function createBaseTagArray_Type(): TagArray_Type {
  return { items: [], minItems: [], maxItems: [], both: [] };
}

export const TagArray_Type = {
  encode(message: TagArray_Type, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      writer.uint32(10).string(v!);
    }
    writer.uint32(18).fork();
    for (const v of message.minItems) {
      writer.double(v);
    }
    writer.ldelim();
    for (const v of message.maxItems) {
      Array_ElementLtLpNumberSpaceOrSpaceStringRpGt.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.both) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TagArray_Type {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagArray_Type();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(reader.string());
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.minItems.push(reader.double());
            }
          } else {
            message.minItems.push(reader.double());
          }
          break;
        case 3:
          message.maxItems.push(Array_ElementLtLpNumberSpaceOrSpaceStringRpGt.decode(reader, reader.uint32()));
          break;
        case 4:
          message.both.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TagArray_Type {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => String(e)) : [],
      minItems: Array.isArray(object?.minItems) ? object.minItems.map((e: any) => Number(e)) : [],
      maxItems: Array.isArray(object?.maxItems)
        ? object.maxItems.map((e: any) => Array_ElementLtLpNumberSpaceOrSpaceStringRpGt.fromJSON(e))
        : [],
      both: Array.isArray(object?.both) ? object.both.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: TagArray_Type): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e);
    } else {
      obj.items = [];
    }
    if (message.minItems) {
      obj.minItems = message.minItems.map((e) => e);
    } else {
      obj.minItems = [];
    }
    if (message.maxItems) {
      obj.maxItems = message.maxItems.map((e) =>
        e ? Array_ElementLtLpNumberSpaceOrSpaceStringRpGt.toJSON(e) : undefined
      );
    } else {
      obj.maxItems = [];
    }
    if (message.both) {
      obj.both = message.both.map((e) => e);
    } else {
      obj.both = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TagArray_Type>, I>>(base?: I): TagArray_Type {
    return TagArray_Type.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TagArray_Type>, I>>(object: I): TagArray_Type {
    const message = createBaseTagArray_Type();
    message.items = object.items?.map((e) => e) || [];
    message.minItems = object.minItems?.map((e) => e) || [];
    message.maxItems = object.maxItems?.map((e) => Array_ElementLtLpNumberSpaceOrSpaceStringRpGt.fromPartial(e)) || [];
    message.both = object.both?.map((e) => e) || [];
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

function createBaseArray_ElementLtLpNumberSpaceOrSpaceStringRpGt(): Array_ElementLtLpNumberSpaceOrSpaceStringRpGt {
  return { valueO0: undefined, valueO1: undefined };
}

export const Array_ElementLtLpNumberSpaceOrSpaceStringRpGt = {
  encode(message: Array_ElementLtLpNumberSpaceOrSpaceStringRpGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valueO0 !== undefined) {
      writer.uint32(10).string(message.valueO0);
    }
    if (message.valueO1 !== undefined) {
      writer.uint32(17).double(message.valueO1);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array_ElementLtLpNumberSpaceOrSpaceStringRpGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_ElementLtLpNumberSpaceOrSpaceStringRpGt();
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

  fromJSON(object: any): Array_ElementLtLpNumberSpaceOrSpaceStringRpGt {
    return {
      valueO0: isSet(object.valueO0) ? String(object.valueO0) : undefined,
      valueO1: isSet(object.valueO1) ? Number(object.valueO1) : undefined,
    };
  },

  toJSON(message: Array_ElementLtLpNumberSpaceOrSpaceStringRpGt): unknown {
    const obj: any = {};
    message.valueO0 !== undefined && (obj.valueO0 = message.valueO0);
    message.valueO1 !== undefined && (obj.valueO1 = message.valueO1);
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_ElementLtLpNumberSpaceOrSpaceStringRpGt>, I>>(
    base?: I,
  ): Array_ElementLtLpNumberSpaceOrSpaceStringRpGt {
    return Array_ElementLtLpNumberSpaceOrSpaceStringRpGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_ElementLtLpNumberSpaceOrSpaceStringRpGt>, I>>(
    object: I,
  ): Array_ElementLtLpNumberSpaceOrSpaceStringRpGt {
    const message = createBaseArray_ElementLtLpNumberSpaceOrSpaceStringRpGt();
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
      TagArray_Type.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.value.push(TagArray_Type.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Main {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => TagArray_Type.fromJSON(e)) : [] };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e ? TagArray_Type.toJSON(e) : undefined);
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
    message.value = object.value?.map((e) => TagArray_Type.fromPartial(e)) || [];
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
