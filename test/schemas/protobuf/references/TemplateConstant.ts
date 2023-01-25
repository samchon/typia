/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface TemplateConstant {
}

export interface TemplateConstant_Type {
  prefix: string;
  postfix: string;
  combined: string;
}

export interface Main {
  value: TemplateConstant_Type[];
}

function createBaseTemplateConstant(): TemplateConstant {
  return {};
}

export const TemplateConstant = {
  encode(_: TemplateConstant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TemplateConstant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTemplateConstant();
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

  fromJSON(_: any): TemplateConstant {
    return {};
  },

  toJSON(_: TemplateConstant): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TemplateConstant>, I>>(base?: I): TemplateConstant {
    return TemplateConstant.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TemplateConstant>, I>>(_: I): TemplateConstant {
    const message = createBaseTemplateConstant();
    return message;
  },
};

function createBaseTemplateConstant_Type(): TemplateConstant_Type {
  return { prefix: "", postfix: "", combined: "" };
}

export const TemplateConstant_Type = {
  encode(message: TemplateConstant_Type, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prefix !== "") {
      writer.uint32(10).string(message.prefix);
    }
    if (message.postfix !== "") {
      writer.uint32(18).string(message.postfix);
    }
    if (message.combined !== "") {
      writer.uint32(26).string(message.combined);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TemplateConstant_Type {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTemplateConstant_Type();
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
          message.combined = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TemplateConstant_Type {
    return {
      prefix: isSet(object.prefix) ? String(object.prefix) : "",
      postfix: isSet(object.postfix) ? String(object.postfix) : "",
      combined: isSet(object.combined) ? String(object.combined) : "",
    };
  },

  toJSON(message: TemplateConstant_Type): unknown {
    const obj: any = {};
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.postfix !== undefined && (obj.postfix = message.postfix);
    message.combined !== undefined && (obj.combined = message.combined);
    return obj;
  },

  create<I extends Exact<DeepPartial<TemplateConstant_Type>, I>>(base?: I): TemplateConstant_Type {
    return TemplateConstant_Type.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TemplateConstant_Type>, I>>(object: I): TemplateConstant_Type {
    const message = createBaseTemplateConstant_Type();
    message.prefix = object.prefix ?? "";
    message.postfix = object.postfix ?? "";
    message.combined = object.combined ?? "";
    return message;
  },
};

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      TemplateConstant_Type.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.value.push(TemplateConstant_Type.decode(reader, reader.uint32()));
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
      value: Array.isArray(object?.value) ? object.value.map((e: any) => TemplateConstant_Type.fromJSON(e)) : [],
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e ? TemplateConstant_Type.toJSON(e) : undefined);
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
    message.value = object.value?.map((e) => TemplateConstant_Type.fromPartial(e)) || [];
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
