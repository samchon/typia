/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface TagStep {
}

export interface TagStep_Type {
  exclusiveMinimum: number;
  minimum: number;
  range: number;
  multipleOf: number;
}

export interface Main {
  value: TagStep_Type[];
}

function createBaseTagStep(): TagStep {
  return {};
}

export const TagStep = {
  encode(_: TagStep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TagStep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagStep();
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

  fromJSON(_: any): TagStep {
    return {};
  },

  toJSON(_: TagStep): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TagStep>, I>>(base?: I): TagStep {
    return TagStep.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TagStep>, I>>(_: I): TagStep {
    const message = createBaseTagStep();
    return message;
  },
};

function createBaseTagStep_Type(): TagStep_Type {
  return { exclusiveMinimum: 0, minimum: 0, range: 0, multipleOf: 0 };
}

export const TagStep_Type = {
  encode(message: TagStep_Type, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exclusiveMinimum !== 0) {
      writer.uint32(9).double(message.exclusiveMinimum);
    }
    if (message.minimum !== 0) {
      writer.uint32(17).double(message.minimum);
    }
    if (message.range !== 0) {
      writer.uint32(25).double(message.range);
    }
    if (message.multipleOf !== 0) {
      writer.uint32(33).double(message.multipleOf);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TagStep_Type {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagStep_Type();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exclusiveMinimum = reader.double();
          break;
        case 2:
          message.minimum = reader.double();
          break;
        case 3:
          message.range = reader.double();
          break;
        case 4:
          message.multipleOf = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TagStep_Type {
    return {
      exclusiveMinimum: isSet(object.exclusiveMinimum) ? Number(object.exclusiveMinimum) : 0,
      minimum: isSet(object.minimum) ? Number(object.minimum) : 0,
      range: isSet(object.range) ? Number(object.range) : 0,
      multipleOf: isSet(object.multipleOf) ? Number(object.multipleOf) : 0,
    };
  },

  toJSON(message: TagStep_Type): unknown {
    const obj: any = {};
    message.exclusiveMinimum !== undefined && (obj.exclusiveMinimum = message.exclusiveMinimum);
    message.minimum !== undefined && (obj.minimum = message.minimum);
    message.range !== undefined && (obj.range = message.range);
    message.multipleOf !== undefined && (obj.multipleOf = message.multipleOf);
    return obj;
  },

  create<I extends Exact<DeepPartial<TagStep_Type>, I>>(base?: I): TagStep_Type {
    return TagStep_Type.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TagStep_Type>, I>>(object: I): TagStep_Type {
    const message = createBaseTagStep_Type();
    message.exclusiveMinimum = object.exclusiveMinimum ?? 0;
    message.minimum = object.minimum ?? 0;
    message.range = object.range ?? 0;
    message.multipleOf = object.multipleOf ?? 0;
    return message;
  },
};

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      TagStep_Type.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.value.push(TagStep_Type.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Main {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => TagStep_Type.fromJSON(e)) : [] };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e ? TagStep_Type.toJSON(e) : undefined);
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
    message.value = object.value?.map((e) => TagStep_Type.fromPartial(e)) || [];
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
