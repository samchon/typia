/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface TemplateUnion {
}

export interface TemplateUnion_Type {
  prefix: string;
  postfix: string;
  middle: string;
  mixedO0?: number | undefined;
  mixedO1?: boolean | undefined;
  mixedO2?: string | undefined;
  mixedO3?: Type | undefined;
}

export interface Type {
  name: string;
}

export interface Main {
  value: TemplateUnion_Type[];
}

function createBaseTemplateUnion(): TemplateUnion {
  return {};
}

export const TemplateUnion = {
  encode(_: TemplateUnion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TemplateUnion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTemplateUnion();
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

  fromJSON(_: any): TemplateUnion {
    return {};
  },

  toJSON(_: TemplateUnion): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TemplateUnion>, I>>(base?: I): TemplateUnion {
    return TemplateUnion.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TemplateUnion>, I>>(_: I): TemplateUnion {
    const message = createBaseTemplateUnion();
    return message;
  },
};

function createBaseTemplateUnion_Type(): TemplateUnion_Type {
  return {
    prefix: "",
    postfix: "",
    middle: "",
    mixedO0: undefined,
    mixedO1: undefined,
    mixedO2: undefined,
    mixedO3: undefined,
  };
}

export const TemplateUnion_Type = {
  encode(message: TemplateUnion_Type, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prefix !== "") {
      writer.uint32(10).string(message.prefix);
    }
    if (message.postfix !== "") {
      writer.uint32(18).string(message.postfix);
    }
    if (message.middle !== "") {
      writer.uint32(26).string(message.middle);
    }
    if (message.mixedO0 !== undefined) {
      writer.uint32(33).double(message.mixedO0);
    }
    if (message.mixedO1 !== undefined) {
      writer.uint32(40).bool(message.mixedO1);
    }
    if (message.mixedO2 !== undefined) {
      writer.uint32(50).string(message.mixedO2);
    }
    if (message.mixedO3 !== undefined) {
      Type.encode(message.mixedO3, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TemplateUnion_Type {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTemplateUnion_Type();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prefix = reader.string();
          break;
        case 2:
          message.postfix = reader.string();
          break;
        case 3:
          message.middle = reader.string();
          break;
        case 4:
          message.mixedO0 = reader.double();
          break;
        case 5:
          message.mixedO1 = reader.bool();
          break;
        case 6:
          message.mixedO2 = reader.string();
          break;
        case 7:
          message.mixedO3 = Type.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TemplateUnion_Type {
    return {
      prefix: isSet(object.prefix) ? String(object.prefix) : "",
      postfix: isSet(object.postfix) ? String(object.postfix) : "",
      middle: isSet(object.middle) ? String(object.middle) : "",
      mixedO0: isSet(object.mixedO0) ? Number(object.mixedO0) : undefined,
      mixedO1: isSet(object.mixedO1) ? Boolean(object.mixedO1) : undefined,
      mixedO2: isSet(object.mixedO2) ? String(object.mixedO2) : undefined,
      mixedO3: isSet(object.mixedO3) ? Type.fromJSON(object.mixedO3) : undefined,
    };
  },

  toJSON(message: TemplateUnion_Type): unknown {
    const obj: any = {};
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.postfix !== undefined && (obj.postfix = message.postfix);
    message.middle !== undefined && (obj.middle = message.middle);
    message.mixedO0 !== undefined && (obj.mixedO0 = message.mixedO0);
    message.mixedO1 !== undefined && (obj.mixedO1 = message.mixedO1);
    message.mixedO2 !== undefined && (obj.mixedO2 = message.mixedO2);
    message.mixedO3 !== undefined && (obj.mixedO3 = message.mixedO3 ? Type.toJSON(message.mixedO3) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<TemplateUnion_Type>, I>>(base?: I): TemplateUnion_Type {
    return TemplateUnion_Type.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TemplateUnion_Type>, I>>(object: I): TemplateUnion_Type {
    const message = createBaseTemplateUnion_Type();
    message.prefix = object.prefix ?? "";
    message.postfix = object.postfix ?? "";
    message.middle = object.middle ?? "";
    message.mixedO0 = object.mixedO0 ?? undefined;
    message.mixedO1 = object.mixedO1 ?? undefined;
    message.mixedO2 = object.mixedO2 ?? undefined;
    message.mixedO3 = (object.mixedO3 !== undefined && object.mixedO3 !== null)
      ? Type.fromPartial(object.mixedO3)
      : undefined;
    return message;
  },
};

function createBaseType(): Type {
  return { name: "" };
}

export const Type = {
  encode(message: Type, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Type {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: Type): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<Type>, I>>(base?: I): Type {
    return Type.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Type>, I>>(object: I): Type {
    const message = createBaseType();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      TemplateUnion_Type.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.value.push(TemplateUnion_Type.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Main {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => TemplateUnion_Type.fromJSON(e)) : [] };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e ? TemplateUnion_Type.toJSON(e) : undefined);
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
    message.value = object.value?.map((e) => TemplateUnion_Type.fromPartial(e)) || [];
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
