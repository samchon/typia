/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface TagObjectUnion {
}

export interface TagObjectUnion_Numeric {
  value: number;
}

export interface TagObjectUnion_Literal {
  value: string;
}

export interface Main {
  value: Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion_NumericRpGt[];
}

export interface Array {
}

export interface Array_ElementLtLpTagObjectUnion {
}

export interface Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion {
}

export interface Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion_NumericRpGt {
  valueO0?: TagObjectUnion_Numeric | undefined;
  valueO1?: TagObjectUnion_Literal | undefined;
}

function createBaseTagObjectUnion(): TagObjectUnion {
  return {};
}

export const TagObjectUnion = {
  encode(_: TagObjectUnion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TagObjectUnion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagObjectUnion();
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

  fromJSON(_: any): TagObjectUnion {
    return {};
  },

  toJSON(_: TagObjectUnion): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TagObjectUnion>, I>>(base?: I): TagObjectUnion {
    return TagObjectUnion.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TagObjectUnion>, I>>(_: I): TagObjectUnion {
    const message = createBaseTagObjectUnion();
    return message;
  },
};

function createBaseTagObjectUnion_Numeric(): TagObjectUnion_Numeric {
  return { value: 0 };
}

export const TagObjectUnion_Numeric = {
  encode(message: TagObjectUnion_Numeric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TagObjectUnion_Numeric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagObjectUnion_Numeric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TagObjectUnion_Numeric {
    return { value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: TagObjectUnion_Numeric): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<TagObjectUnion_Numeric>, I>>(base?: I): TagObjectUnion_Numeric {
    return TagObjectUnion_Numeric.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TagObjectUnion_Numeric>, I>>(object: I): TagObjectUnion_Numeric {
    const message = createBaseTagObjectUnion_Numeric();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTagObjectUnion_Literal(): TagObjectUnion_Literal {
  return { value: "" };
}

export const TagObjectUnion_Literal = {
  encode(message: TagObjectUnion_Literal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TagObjectUnion_Literal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagObjectUnion_Literal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TagObjectUnion_Literal {
    return { value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: TagObjectUnion_Literal): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<TagObjectUnion_Literal>, I>>(base?: I): TagObjectUnion_Literal {
    return TagObjectUnion_Literal.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TagObjectUnion_Literal>, I>>(object: I): TagObjectUnion_Literal {
    const message = createBaseTagObjectUnion_Literal();
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion_NumericRpGt.encode(v!, writer.uint32(10).fork())
        .ldelim();
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
            Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion_NumericRpGt.decode(
              reader,
              reader.uint32(),
            ),
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
          Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion_NumericRpGt.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) =>
        e ? Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion_NumericRpGt.toJSON(e) : undefined
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
        Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion_NumericRpGt.fromPartial(e)
      ) || [];
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

function createBaseArray_ElementLtLpTagObjectUnion(): Array_ElementLtLpTagObjectUnion {
  return {};
}

export const Array_ElementLtLpTagObjectUnion = {
  encode(_: Array_ElementLtLpTagObjectUnion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array_ElementLtLpTagObjectUnion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_ElementLtLpTagObjectUnion();
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

  fromJSON(_: any): Array_ElementLtLpTagObjectUnion {
    return {};
  },

  toJSON(_: Array_ElementLtLpTagObjectUnion): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_ElementLtLpTagObjectUnion>, I>>(base?: I): Array_ElementLtLpTagObjectUnion {
    return Array_ElementLtLpTagObjectUnion.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_ElementLtLpTagObjectUnion>, I>>(_: I): Array_ElementLtLpTagObjectUnion {
    const message = createBaseArray_ElementLtLpTagObjectUnion();
    return message;
  },
};

function createBaseArray_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion(): Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion {
  return {};
}

export const Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion = {
  encode(
    _: Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion();
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

  fromJSON(_: any): Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion {
    return {};
  },

  toJSON(_: Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion>, I>>(
    base?: I,
  ): Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion {
    return Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion>, I>>(
    _: I,
  ): Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion {
    const message = createBaseArray_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion();
    return message;
  },
};

function createBaseArray_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion_NumericRpGt(): Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion_NumericRpGt {
  return { valueO0: undefined, valueO1: undefined };
}

export const Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion_NumericRpGt = {
  encode(
    message: Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion_NumericRpGt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.valueO0 !== undefined) {
      TagObjectUnion_Numeric.encode(message.valueO0, writer.uint32(10).fork()).ldelim();
    }
    if (message.valueO1 !== undefined) {
      TagObjectUnion_Literal.encode(message.valueO1, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion_NumericRpGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion_NumericRpGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valueO0 = TagObjectUnion_Numeric.decode(reader, reader.uint32());
          break;
        case 2:
          message.valueO1 = TagObjectUnion_Literal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion_NumericRpGt {
    return {
      valueO0: isSet(object.valueO0) ? TagObjectUnion_Numeric.fromJSON(object.valueO0) : undefined,
      valueO1: isSet(object.valueO1) ? TagObjectUnion_Literal.fromJSON(object.valueO1) : undefined,
    };
  },

  toJSON(message: Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion_NumericRpGt): unknown {
    const obj: any = {};
    message.valueO0 !== undefined &&
      (obj.valueO0 = message.valueO0 ? TagObjectUnion_Numeric.toJSON(message.valueO0) : undefined);
    message.valueO1 !== undefined &&
      (obj.valueO1 = message.valueO1 ? TagObjectUnion_Literal.toJSON(message.valueO1) : undefined);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion_NumericRpGt>, I>,
  >(base?: I): Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion_NumericRpGt {
    return Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion_NumericRpGt.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion_NumericRpGt>, I>,
  >(object: I): Array_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion_NumericRpGt {
    const message = createBaseArray_ElementLtLpTagObjectUnion_LiteralSpaceOrSpaceTagObjectUnion_NumericRpGt();
    message.valueO0 = (object.valueO0 !== undefined && object.valueO0 !== null)
      ? TagObjectUnion_Numeric.fromPartial(object.valueO0)
      : undefined;
    message.valueO1 = (object.valueO1 !== undefined && object.valueO1 !== null)
      ? TagObjectUnion_Literal.fromPartial(object.valueO1)
      : undefined;
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
