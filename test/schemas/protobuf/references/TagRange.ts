/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface TagRange {
}

export interface TagRange_Type {
  minimum: number;
  maximum: number;
  minimumAndMaximum: number;
  greater: number;
  greaterEqual: number;
  less: number;
  lessEqual: number;
  greaterLess: number;
  greaterEqualLess: number;
  greaterLessEqual: number;
  greaterEqualLessEqual: number;
}

export interface Main {
  value: TagRange_Type[];
}

function createBaseTagRange(): TagRange {
  return {};
}

export const TagRange = {
  encode(_: TagRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TagRange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagRange();
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

  fromJSON(_: any): TagRange {
    return {};
  },

  toJSON(_: TagRange): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TagRange>, I>>(base?: I): TagRange {
    return TagRange.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TagRange>, I>>(_: I): TagRange {
    const message = createBaseTagRange();
    return message;
  },
};

function createBaseTagRange_Type(): TagRange_Type {
  return {
    minimum: 0,
    maximum: 0,
    minimumAndMaximum: 0,
    greater: 0,
    greaterEqual: 0,
    less: 0,
    lessEqual: 0,
    greaterLess: 0,
    greaterEqualLess: 0,
    greaterLessEqual: 0,
    greaterEqualLessEqual: 0,
  };
}

export const TagRange_Type = {
  encode(message: TagRange_Type, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minimum !== 0) {
      writer.uint32(9).double(message.minimum);
    }
    if (message.maximum !== 0) {
      writer.uint32(17).double(message.maximum);
    }
    if (message.minimumAndMaximum !== 0) {
      writer.uint32(25).double(message.minimumAndMaximum);
    }
    if (message.greater !== 0) {
      writer.uint32(33).double(message.greater);
    }
    if (message.greaterEqual !== 0) {
      writer.uint32(41).double(message.greaterEqual);
    }
    if (message.less !== 0) {
      writer.uint32(49).double(message.less);
    }
    if (message.lessEqual !== 0) {
      writer.uint32(57).double(message.lessEqual);
    }
    if (message.greaterLess !== 0) {
      writer.uint32(65).double(message.greaterLess);
    }
    if (message.greaterEqualLess !== 0) {
      writer.uint32(73).double(message.greaterEqualLess);
    }
    if (message.greaterLessEqual !== 0) {
      writer.uint32(81).double(message.greaterLessEqual);
    }
    if (message.greaterEqualLessEqual !== 0) {
      writer.uint32(89).double(message.greaterEqualLessEqual);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TagRange_Type {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagRange_Type();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minimum = reader.double();
          break;
        case 2:
          message.maximum = reader.double();
          break;
        case 3:
          message.minimumAndMaximum = reader.double();
          break;
        case 4:
          message.greater = reader.double();
          break;
        case 5:
          message.greaterEqual = reader.double();
          break;
        case 6:
          message.less = reader.double();
          break;
        case 7:
          message.lessEqual = reader.double();
          break;
        case 8:
          message.greaterLess = reader.double();
          break;
        case 9:
          message.greaterEqualLess = reader.double();
          break;
        case 10:
          message.greaterLessEqual = reader.double();
          break;
        case 11:
          message.greaterEqualLessEqual = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TagRange_Type {
    return {
      minimum: isSet(object.minimum) ? Number(object.minimum) : 0,
      maximum: isSet(object.maximum) ? Number(object.maximum) : 0,
      minimumAndMaximum: isSet(object.minimumAndMaximum) ? Number(object.minimumAndMaximum) : 0,
      greater: isSet(object.greater) ? Number(object.greater) : 0,
      greaterEqual: isSet(object.greaterEqual) ? Number(object.greaterEqual) : 0,
      less: isSet(object.less) ? Number(object.less) : 0,
      lessEqual: isSet(object.lessEqual) ? Number(object.lessEqual) : 0,
      greaterLess: isSet(object.greaterLess) ? Number(object.greaterLess) : 0,
      greaterEqualLess: isSet(object.greaterEqualLess) ? Number(object.greaterEqualLess) : 0,
      greaterLessEqual: isSet(object.greaterLessEqual) ? Number(object.greaterLessEqual) : 0,
      greaterEqualLessEqual: isSet(object.greaterEqualLessEqual) ? Number(object.greaterEqualLessEqual) : 0,
    };
  },

  toJSON(message: TagRange_Type): unknown {
    const obj: any = {};
    message.minimum !== undefined && (obj.minimum = message.minimum);
    message.maximum !== undefined && (obj.maximum = message.maximum);
    message.minimumAndMaximum !== undefined && (obj.minimumAndMaximum = message.minimumAndMaximum);
    message.greater !== undefined && (obj.greater = message.greater);
    message.greaterEqual !== undefined && (obj.greaterEqual = message.greaterEqual);
    message.less !== undefined && (obj.less = message.less);
    message.lessEqual !== undefined && (obj.lessEqual = message.lessEqual);
    message.greaterLess !== undefined && (obj.greaterLess = message.greaterLess);
    message.greaterEqualLess !== undefined && (obj.greaterEqualLess = message.greaterEqualLess);
    message.greaterLessEqual !== undefined && (obj.greaterLessEqual = message.greaterLessEqual);
    message.greaterEqualLessEqual !== undefined && (obj.greaterEqualLessEqual = message.greaterEqualLessEqual);
    return obj;
  },

  create<I extends Exact<DeepPartial<TagRange_Type>, I>>(base?: I): TagRange_Type {
    return TagRange_Type.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TagRange_Type>, I>>(object: I): TagRange_Type {
    const message = createBaseTagRange_Type();
    message.minimum = object.minimum ?? 0;
    message.maximum = object.maximum ?? 0;
    message.minimumAndMaximum = object.minimumAndMaximum ?? 0;
    message.greater = object.greater ?? 0;
    message.greaterEqual = object.greaterEqual ?? 0;
    message.less = object.less ?? 0;
    message.lessEqual = object.lessEqual ?? 0;
    message.greaterLess = object.greaterLess ?? 0;
    message.greaterEqualLess = object.greaterEqualLess ?? 0;
    message.greaterLessEqual = object.greaterLessEqual ?? 0;
    message.greaterEqualLessEqual = object.greaterEqualLessEqual ?? 0;
    return message;
  },
};

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      TagRange_Type.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.value.push(TagRange_Type.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Main {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => TagRange_Type.fromJSON(e)) : [] };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e ? TagRange_Type.toJSON(e) : undefined);
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
    message.value = object.value?.map((e) => TagRange_Type.fromPartial(e)) || [];
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
