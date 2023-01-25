/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface TemplateAtomic {
  prefix: string;
  postfix: string;
  middleString: string;
  middleStringEmpty: string;
  middleNumeric: string;
  middleBoolean: string;
  ipv4: string;
  email: string;
}

function createBaseTemplateAtomic(): TemplateAtomic {
  return {
    prefix: "",
    postfix: "",
    middleString: "",
    middleStringEmpty: "",
    middleNumeric: "",
    middleBoolean: "",
    ipv4: "",
    email: "",
  };
}

export const TemplateAtomic = {
  encode(message: TemplateAtomic, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.prefix !== "") {
      writer.uint32(10).string(message.prefix);
    }
    if (message.postfix !== "") {
      writer.uint32(18).string(message.postfix);
    }
    if (message.middleString !== "") {
      writer.uint32(26).string(message.middleString);
    }
    if (message.middleStringEmpty !== "") {
      writer.uint32(34).string(message.middleStringEmpty);
    }
    if (message.middleNumeric !== "") {
      writer.uint32(42).string(message.middleNumeric);
    }
    if (message.middleBoolean !== "") {
      writer.uint32(50).string(message.middleBoolean);
    }
    if (message.ipv4 !== "") {
      writer.uint32(58).string(message.ipv4);
    }
    if (message.email !== "") {
      writer.uint32(66).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TemplateAtomic {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTemplateAtomic();
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
          message.middleString = reader.string();
          break;
        case 4:
          message.middleStringEmpty = reader.string();
          break;
        case 5:
          message.middleNumeric = reader.string();
          break;
        case 6:
          message.middleBoolean = reader.string();
          break;
        case 7:
          message.ipv4 = reader.string();
          break;
        case 8:
          message.email = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TemplateAtomic {
    return {
      prefix: isSet(object.prefix) ? String(object.prefix) : "",
      postfix: isSet(object.postfix) ? String(object.postfix) : "",
      middleString: isSet(object.middleString) ? String(object.middleString) : "",
      middleStringEmpty: isSet(object.middleStringEmpty) ? String(object.middleStringEmpty) : "",
      middleNumeric: isSet(object.middleNumeric) ? String(object.middleNumeric) : "",
      middleBoolean: isSet(object.middleBoolean) ? String(object.middleBoolean) : "",
      ipv4: isSet(object.ipv4) ? String(object.ipv4) : "",
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: TemplateAtomic): unknown {
    const obj: any = {};
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.postfix !== undefined && (obj.postfix = message.postfix);
    message.middleString !== undefined && (obj.middleString = message.middleString);
    message.middleStringEmpty !== undefined && (obj.middleStringEmpty = message.middleStringEmpty);
    message.middleNumeric !== undefined && (obj.middleNumeric = message.middleNumeric);
    message.middleBoolean !== undefined && (obj.middleBoolean = message.middleBoolean);
    message.ipv4 !== undefined && (obj.ipv4 = message.ipv4);
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  create<I extends Exact<DeepPartial<TemplateAtomic>, I>>(base?: I): TemplateAtomic {
    return TemplateAtomic.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TemplateAtomic>, I>>(object: I): TemplateAtomic {
    const message = createBaseTemplateAtomic();
    message.prefix = object.prefix ?? "";
    message.postfix = object.postfix ?? "";
    message.middleString = object.middleString ?? "";
    message.middleStringEmpty = object.middleStringEmpty ?? "";
    message.middleNumeric = object.middleNumeric ?? "";
    message.middleBoolean = object.middleBoolean ?? "";
    message.ipv4 = object.ipv4 ?? "";
    message.email = object.email ?? "";
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
