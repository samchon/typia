/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface TagLength {
}

export interface TagLength_Type {
  fixed: string;
  greater: string;
  greaterEqual: string;
  less: string;
  lessEqual: string;
  greaterLess: string;
  greaterEqualLess: string;
  greaterLessEqual: string;
  greaterEqualLessEqual: string;
  minimum: string;
  maximum: string;
  minimumAndMaximum: string;
}

export interface Main {
  value: TagLength_Type[];
}

function createBaseTagLength(): TagLength {
  return {};
}

export const TagLength = {
  encode(_: TagLength, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TagLength {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagLength();
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

  fromJSON(_: any): TagLength {
    return {};
  },

  toJSON(_: TagLength): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TagLength>, I>>(base?: I): TagLength {
    return TagLength.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TagLength>, I>>(_: I): TagLength {
    const message = createBaseTagLength();
    return message;
  },
};

function createBaseTagLength_Type(): TagLength_Type {
  return {
    fixed: "",
    greater: "",
    greaterEqual: "",
    less: "",
    lessEqual: "",
    greaterLess: "",
    greaterEqualLess: "",
    greaterLessEqual: "",
    greaterEqualLessEqual: "",
    minimum: "",
    maximum: "",
    minimumAndMaximum: "",
  };
}

export const TagLength_Type = {
  encode(message: TagLength_Type, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fixed !== "") {
      writer.uint32(10).string(message.fixed);
    }
    if (message.greater !== "") {
      writer.uint32(18).string(message.greater);
    }
    if (message.greaterEqual !== "") {
      writer.uint32(26).string(message.greaterEqual);
    }
    if (message.less !== "") {
      writer.uint32(34).string(message.less);
    }
    if (message.lessEqual !== "") {
      writer.uint32(42).string(message.lessEqual);
    }
    if (message.greaterLess !== "") {
      writer.uint32(50).string(message.greaterLess);
    }
    if (message.greaterEqualLess !== "") {
      writer.uint32(58).string(message.greaterEqualLess);
    }
    if (message.greaterLessEqual !== "") {
      writer.uint32(66).string(message.greaterLessEqual);
    }
    if (message.greaterEqualLessEqual !== "") {
      writer.uint32(74).string(message.greaterEqualLessEqual);
    }
    if (message.minimum !== "") {
      writer.uint32(82).string(message.minimum);
    }
    if (message.maximum !== "") {
      writer.uint32(90).string(message.maximum);
    }
    if (message.minimumAndMaximum !== "") {
      writer.uint32(98).string(message.minimumAndMaximum);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TagLength_Type {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagLength_Type();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fixed = reader.string();
          break;
        case 2:
          message.greater = reader.string();
          break;
        case 3:
          message.greaterEqual = reader.string();
          break;
        case 4:
          message.less = reader.string();
          break;
        case 5:
          message.lessEqual = reader.string();
          break;
        case 6:
          message.greaterLess = reader.string();
          break;
        case 7:
          message.greaterEqualLess = reader.string();
          break;
        case 8:
          message.greaterLessEqual = reader.string();
          break;
        case 9:
          message.greaterEqualLessEqual = reader.string();
          break;
        case 10:
          message.minimum = reader.string();
          break;
        case 11:
          message.maximum = reader.string();
          break;
        case 12:
          message.minimumAndMaximum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TagLength_Type {
    return {
      fixed: isSet(object.fixed) ? String(object.fixed) : "",
      greater: isSet(object.greater) ? String(object.greater) : "",
      greaterEqual: isSet(object.greaterEqual) ? String(object.greaterEqual) : "",
      less: isSet(object.less) ? String(object.less) : "",
      lessEqual: isSet(object.lessEqual) ? String(object.lessEqual) : "",
      greaterLess: isSet(object.greaterLess) ? String(object.greaterLess) : "",
      greaterEqualLess: isSet(object.greaterEqualLess) ? String(object.greaterEqualLess) : "",
      greaterLessEqual: isSet(object.greaterLessEqual) ? String(object.greaterLessEqual) : "",
      greaterEqualLessEqual: isSet(object.greaterEqualLessEqual) ? String(object.greaterEqualLessEqual) : "",
      minimum: isSet(object.minimum) ? String(object.minimum) : "",
      maximum: isSet(object.maximum) ? String(object.maximum) : "",
      minimumAndMaximum: isSet(object.minimumAndMaximum) ? String(object.minimumAndMaximum) : "",
    };
  },

  toJSON(message: TagLength_Type): unknown {
    const obj: any = {};
    message.fixed !== undefined && (obj.fixed = message.fixed);
    message.greater !== undefined && (obj.greater = message.greater);
    message.greaterEqual !== undefined && (obj.greaterEqual = message.greaterEqual);
    message.less !== undefined && (obj.less = message.less);
    message.lessEqual !== undefined && (obj.lessEqual = message.lessEqual);
    message.greaterLess !== undefined && (obj.greaterLess = message.greaterLess);
    message.greaterEqualLess !== undefined && (obj.greaterEqualLess = message.greaterEqualLess);
    message.greaterLessEqual !== undefined && (obj.greaterLessEqual = message.greaterLessEqual);
    message.greaterEqualLessEqual !== undefined && (obj.greaterEqualLessEqual = message.greaterEqualLessEqual);
    message.minimum !== undefined && (obj.minimum = message.minimum);
    message.maximum !== undefined && (obj.maximum = message.maximum);
    message.minimumAndMaximum !== undefined && (obj.minimumAndMaximum = message.minimumAndMaximum);
    return obj;
  },

  create<I extends Exact<DeepPartial<TagLength_Type>, I>>(base?: I): TagLength_Type {
    return TagLength_Type.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TagLength_Type>, I>>(object: I): TagLength_Type {
    const message = createBaseTagLength_Type();
    message.fixed = object.fixed ?? "";
    message.greater = object.greater ?? "";
    message.greaterEqual = object.greaterEqual ?? "";
    message.less = object.less ?? "";
    message.lessEqual = object.lessEqual ?? "";
    message.greaterLess = object.greaterLess ?? "";
    message.greaterEqualLess = object.greaterEqualLess ?? "";
    message.greaterLessEqual = object.greaterLessEqual ?? "";
    message.greaterEqualLessEqual = object.greaterEqualLessEqual ?? "";
    message.minimum = object.minimum ?? "";
    message.maximum = object.maximum ?? "";
    message.minimumAndMaximum = object.minimumAndMaximum ?? "";
    return message;
  },
};

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      TagLength_Type.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.value.push(TagLength_Type.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Main {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => TagLength_Type.fromJSON(e)) : [] };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e ? TagLength_Type.toJSON(e) : undefined);
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
    message.value = object.value?.map((e) => TagLength_Type.fromPartial(e)) || [];
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
