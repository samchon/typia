/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface TagDefault {
  boolean: boolean;
  number: number;
  string: string;
  text: string;
  template: string;
  booleanAndNumberAndStringO0?: string | undefined;
  booleanAndNumberAndStringO1?: number | undefined;
  booleanAndNumberAndStringO2?: boolean | undefined;
  unionButBooleanO0?: string | undefined;
  unionButBooleanO1?: number | undefined;
  unionButBooleanO2?: boolean | undefined;
  unionButNumberO0?: string | undefined;
  unionButNumberO1?: number | undefined;
  unionButNumberO2?: boolean | undefined;
  unionButStringO0?: string | undefined;
  unionButStringO1?: number | undefined;
  unionButStringO2?: boolean | undefined;
  vulnerableRange: number;
  vulnerableTemplate: string;
  booleanAndNumberAndTemplateO0?: number | undefined;
  booleanAndNumberAndTemplateO1?: boolean | undefined;
  booleanAndNumberAndTemplateO2?: string | undefined;
}

function createBaseTagDefault(): TagDefault {
  return {
    boolean: false,
    number: 0,
    string: "",
    text: "",
    template: "",
    booleanAndNumberAndStringO0: undefined,
    booleanAndNumberAndStringO1: undefined,
    booleanAndNumberAndStringO2: undefined,
    unionButBooleanO0: undefined,
    unionButBooleanO1: undefined,
    unionButBooleanO2: undefined,
    unionButNumberO0: undefined,
    unionButNumberO1: undefined,
    unionButNumberO2: undefined,
    unionButStringO0: undefined,
    unionButStringO1: undefined,
    unionButStringO2: undefined,
    vulnerableRange: 0,
    vulnerableTemplate: "",
    booleanAndNumberAndTemplateO0: undefined,
    booleanAndNumberAndTemplateO1: undefined,
    booleanAndNumberAndTemplateO2: undefined,
  };
}

export const TagDefault = {
  encode(message: TagDefault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.boolean === true) {
      writer.uint32(8).bool(message.boolean);
    }
    if (message.number !== 0) {
      writer.uint32(17).double(message.number);
    }
    if (message.string !== "") {
      writer.uint32(26).string(message.string);
    }
    if (message.text !== "") {
      writer.uint32(34).string(message.text);
    }
    if (message.template !== "") {
      writer.uint32(42).string(message.template);
    }
    if (message.booleanAndNumberAndStringO0 !== undefined) {
      writer.uint32(50).string(message.booleanAndNumberAndStringO0);
    }
    if (message.booleanAndNumberAndStringO1 !== undefined) {
      writer.uint32(57).double(message.booleanAndNumberAndStringO1);
    }
    if (message.booleanAndNumberAndStringO2 !== undefined) {
      writer.uint32(64).bool(message.booleanAndNumberAndStringO2);
    }
    if (message.unionButBooleanO0 !== undefined) {
      writer.uint32(74).string(message.unionButBooleanO0);
    }
    if (message.unionButBooleanO1 !== undefined) {
      writer.uint32(81).double(message.unionButBooleanO1);
    }
    if (message.unionButBooleanO2 !== undefined) {
      writer.uint32(88).bool(message.unionButBooleanO2);
    }
    if (message.unionButNumberO0 !== undefined) {
      writer.uint32(98).string(message.unionButNumberO0);
    }
    if (message.unionButNumberO1 !== undefined) {
      writer.uint32(105).double(message.unionButNumberO1);
    }
    if (message.unionButNumberO2 !== undefined) {
      writer.uint32(112).bool(message.unionButNumberO2);
    }
    if (message.unionButStringO0 !== undefined) {
      writer.uint32(122).string(message.unionButStringO0);
    }
    if (message.unionButStringO1 !== undefined) {
      writer.uint32(129).double(message.unionButStringO1);
    }
    if (message.unionButStringO2 !== undefined) {
      writer.uint32(136).bool(message.unionButStringO2);
    }
    if (message.vulnerableRange !== 0) {
      writer.uint32(145).double(message.vulnerableRange);
    }
    if (message.vulnerableTemplate !== "") {
      writer.uint32(154).string(message.vulnerableTemplate);
    }
    if (message.booleanAndNumberAndTemplateO0 !== undefined) {
      writer.uint32(161).double(message.booleanAndNumberAndTemplateO0);
    }
    if (message.booleanAndNumberAndTemplateO1 !== undefined) {
      writer.uint32(168).bool(message.booleanAndNumberAndTemplateO1);
    }
    if (message.booleanAndNumberAndTemplateO2 !== undefined) {
      writer.uint32(178).string(message.booleanAndNumberAndTemplateO2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TagDefault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagDefault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.boolean = reader.bool();
          break;
        case 2:
          message.number = reader.double();
          break;
        case 3:
          message.string = reader.string();
          break;
        case 4:
          message.text = reader.string();
          break;
        case 5:
          message.template = reader.string();
          break;
        case 6:
          message.booleanAndNumberAndStringO0 = reader.string();
          break;
        case 7:
          message.booleanAndNumberAndStringO1 = reader.double();
          break;
        case 8:
          message.booleanAndNumberAndStringO2 = reader.bool();
          break;
        case 9:
          message.unionButBooleanO0 = reader.string();
          break;
        case 10:
          message.unionButBooleanO1 = reader.double();
          break;
        case 11:
          message.unionButBooleanO2 = reader.bool();
          break;
        case 12:
          message.unionButNumberO0 = reader.string();
          break;
        case 13:
          message.unionButNumberO1 = reader.double();
          break;
        case 14:
          message.unionButNumberO2 = reader.bool();
          break;
        case 15:
          message.unionButStringO0 = reader.string();
          break;
        case 16:
          message.unionButStringO1 = reader.double();
          break;
        case 17:
          message.unionButStringO2 = reader.bool();
          break;
        case 18:
          message.vulnerableRange = reader.double();
          break;
        case 19:
          message.vulnerableTemplate = reader.string();
          break;
        case 20:
          message.booleanAndNumberAndTemplateO0 = reader.double();
          break;
        case 21:
          message.booleanAndNumberAndTemplateO1 = reader.bool();
          break;
        case 22:
          message.booleanAndNumberAndTemplateO2 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TagDefault {
    return {
      boolean: isSet(object.boolean) ? Boolean(object.boolean) : false,
      number: isSet(object.number) ? Number(object.number) : 0,
      string: isSet(object.string) ? String(object.string) : "",
      text: isSet(object.text) ? String(object.text) : "",
      template: isSet(object.template) ? String(object.template) : "",
      booleanAndNumberAndStringO0: isSet(object.booleanAndNumberAndStringO0)
        ? String(object.booleanAndNumberAndStringO0)
        : undefined,
      booleanAndNumberAndStringO1: isSet(object.booleanAndNumberAndStringO1)
        ? Number(object.booleanAndNumberAndStringO1)
        : undefined,
      booleanAndNumberAndStringO2: isSet(object.booleanAndNumberAndStringO2)
        ? Boolean(object.booleanAndNumberAndStringO2)
        : undefined,
      unionButBooleanO0: isSet(object.unionButBooleanO0) ? String(object.unionButBooleanO0) : undefined,
      unionButBooleanO1: isSet(object.unionButBooleanO1) ? Number(object.unionButBooleanO1) : undefined,
      unionButBooleanO2: isSet(object.unionButBooleanO2) ? Boolean(object.unionButBooleanO2) : undefined,
      unionButNumberO0: isSet(object.unionButNumberO0) ? String(object.unionButNumberO0) : undefined,
      unionButNumberO1: isSet(object.unionButNumberO1) ? Number(object.unionButNumberO1) : undefined,
      unionButNumberO2: isSet(object.unionButNumberO2) ? Boolean(object.unionButNumberO2) : undefined,
      unionButStringO0: isSet(object.unionButStringO0) ? String(object.unionButStringO0) : undefined,
      unionButStringO1: isSet(object.unionButStringO1) ? Number(object.unionButStringO1) : undefined,
      unionButStringO2: isSet(object.unionButStringO2) ? Boolean(object.unionButStringO2) : undefined,
      vulnerableRange: isSet(object.vulnerableRange) ? Number(object.vulnerableRange) : 0,
      vulnerableTemplate: isSet(object.vulnerableTemplate) ? String(object.vulnerableTemplate) : "",
      booleanAndNumberAndTemplateO0: isSet(object.booleanAndNumberAndTemplateO0)
        ? Number(object.booleanAndNumberAndTemplateO0)
        : undefined,
      booleanAndNumberAndTemplateO1: isSet(object.booleanAndNumberAndTemplateO1)
        ? Boolean(object.booleanAndNumberAndTemplateO1)
        : undefined,
      booleanAndNumberAndTemplateO2: isSet(object.booleanAndNumberAndTemplateO2)
        ? String(object.booleanAndNumberAndTemplateO2)
        : undefined,
    };
  },

  toJSON(message: TagDefault): unknown {
    const obj: any = {};
    message.boolean !== undefined && (obj.boolean = message.boolean);
    message.number !== undefined && (obj.number = message.number);
    message.string !== undefined && (obj.string = message.string);
    message.text !== undefined && (obj.text = message.text);
    message.template !== undefined && (obj.template = message.template);
    message.booleanAndNumberAndStringO0 !== undefined &&
      (obj.booleanAndNumberAndStringO0 = message.booleanAndNumberAndStringO0);
    message.booleanAndNumberAndStringO1 !== undefined &&
      (obj.booleanAndNumberAndStringO1 = message.booleanAndNumberAndStringO1);
    message.booleanAndNumberAndStringO2 !== undefined &&
      (obj.booleanAndNumberAndStringO2 = message.booleanAndNumberAndStringO2);
    message.unionButBooleanO0 !== undefined && (obj.unionButBooleanO0 = message.unionButBooleanO0);
    message.unionButBooleanO1 !== undefined && (obj.unionButBooleanO1 = message.unionButBooleanO1);
    message.unionButBooleanO2 !== undefined && (obj.unionButBooleanO2 = message.unionButBooleanO2);
    message.unionButNumberO0 !== undefined && (obj.unionButNumberO0 = message.unionButNumberO0);
    message.unionButNumberO1 !== undefined && (obj.unionButNumberO1 = message.unionButNumberO1);
    message.unionButNumberO2 !== undefined && (obj.unionButNumberO2 = message.unionButNumberO2);
    message.unionButStringO0 !== undefined && (obj.unionButStringO0 = message.unionButStringO0);
    message.unionButStringO1 !== undefined && (obj.unionButStringO1 = message.unionButStringO1);
    message.unionButStringO2 !== undefined && (obj.unionButStringO2 = message.unionButStringO2);
    message.vulnerableRange !== undefined && (obj.vulnerableRange = message.vulnerableRange);
    message.vulnerableTemplate !== undefined && (obj.vulnerableTemplate = message.vulnerableTemplate);
    message.booleanAndNumberAndTemplateO0 !== undefined &&
      (obj.booleanAndNumberAndTemplateO0 = message.booleanAndNumberAndTemplateO0);
    message.booleanAndNumberAndTemplateO1 !== undefined &&
      (obj.booleanAndNumberAndTemplateO1 = message.booleanAndNumberAndTemplateO1);
    message.booleanAndNumberAndTemplateO2 !== undefined &&
      (obj.booleanAndNumberAndTemplateO2 = message.booleanAndNumberAndTemplateO2);
    return obj;
  },

  create<I extends Exact<DeepPartial<TagDefault>, I>>(base?: I): TagDefault {
    return TagDefault.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TagDefault>, I>>(object: I): TagDefault {
    const message = createBaseTagDefault();
    message.boolean = object.boolean ?? false;
    message.number = object.number ?? 0;
    message.string = object.string ?? "";
    message.text = object.text ?? "";
    message.template = object.template ?? "";
    message.booleanAndNumberAndStringO0 = object.booleanAndNumberAndStringO0 ?? undefined;
    message.booleanAndNumberAndStringO1 = object.booleanAndNumberAndStringO1 ?? undefined;
    message.booleanAndNumberAndStringO2 = object.booleanAndNumberAndStringO2 ?? undefined;
    message.unionButBooleanO0 = object.unionButBooleanO0 ?? undefined;
    message.unionButBooleanO1 = object.unionButBooleanO1 ?? undefined;
    message.unionButBooleanO2 = object.unionButBooleanO2 ?? undefined;
    message.unionButNumberO0 = object.unionButNumberO0 ?? undefined;
    message.unionButNumberO1 = object.unionButNumberO1 ?? undefined;
    message.unionButNumberO2 = object.unionButNumberO2 ?? undefined;
    message.unionButStringO0 = object.unionButStringO0 ?? undefined;
    message.unionButStringO1 = object.unionButStringO1 ?? undefined;
    message.unionButStringO2 = object.unionButStringO2 ?? undefined;
    message.vulnerableRange = object.vulnerableRange ?? 0;
    message.vulnerableTemplate = object.vulnerableTemplate ?? "";
    message.booleanAndNumberAndTemplateO0 = object.booleanAndNumberAndTemplateO0 ?? undefined;
    message.booleanAndNumberAndTemplateO1 = object.booleanAndNumberAndTemplateO1 ?? undefined;
    message.booleanAndNumberAndTemplateO2 = object.booleanAndNumberAndTemplateO2 ?? undefined;
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
