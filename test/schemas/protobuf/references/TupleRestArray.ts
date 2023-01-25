/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Main {
  value: AltBooleanCommaSpaceNumberCommaSpaceRestLtArrayLtStringGtGtAgt | undefined;
}

export interface AltBooleanCommaSpaceNumberCommaSpaceRestLtArrayLtStringGtGtAgt {
  v0: boolean;
  v1: number;
  v2: Array_ElementLtArrayLtStringGtGt[];
}

export interface Array {
}

export interface Array_ElementLtArrayLtStringGtGt {
  value: string[];
}

function createBaseMain(): Main {
  return { value: undefined };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      AltBooleanCommaSpaceNumberCommaSpaceRestLtArrayLtStringGtGtAgt.encode(message.value, writer.uint32(10).fork())
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
          message.value = AltBooleanCommaSpaceNumberCommaSpaceRestLtArrayLtStringGtGtAgt.decode(
            reader,
            reader.uint32(),
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
      value: isSet(object.value)
        ? AltBooleanCommaSpaceNumberCommaSpaceRestLtArrayLtStringGtGtAgt.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value
      ? AltBooleanCommaSpaceNumberCommaSpaceRestLtArrayLtStringGtGtAgt.toJSON(message.value)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Main>, I>>(base?: I): Main {
    return Main.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Main>, I>>(object: I): Main {
    const message = createBaseMain();
    message.value = (object.value !== undefined && object.value !== null)
      ? AltBooleanCommaSpaceNumberCommaSpaceRestLtArrayLtStringGtGtAgt.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseAltBooleanCommaSpaceNumberCommaSpaceRestLtArrayLtStringGtGtAgt(): AltBooleanCommaSpaceNumberCommaSpaceRestLtArrayLtStringGtGtAgt {
  return { v0: false, v1: 0, v2: [] };
}

export const AltBooleanCommaSpaceNumberCommaSpaceRestLtArrayLtStringGtGtAgt = {
  encode(
    message: AltBooleanCommaSpaceNumberCommaSpaceRestLtArrayLtStringGtGtAgt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.v0 === true) {
      writer.uint32(8).bool(message.v0);
    }
    if (message.v1 !== 0) {
      writer.uint32(17).double(message.v1);
    }
    for (const v of message.v2) {
      Array_ElementLtArrayLtStringGtGt.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AltBooleanCommaSpaceNumberCommaSpaceRestLtArrayLtStringGtGtAgt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltBooleanCommaSpaceNumberCommaSpaceRestLtArrayLtStringGtGtAgt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.v0 = reader.bool();
          break;
        case 2:
          message.v1 = reader.double();
          break;
        case 3:
          message.v2.push(Array_ElementLtArrayLtStringGtGt.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AltBooleanCommaSpaceNumberCommaSpaceRestLtArrayLtStringGtGtAgt {
    return {
      v0: isSet(object.v0) ? Boolean(object.v0) : false,
      v1: isSet(object.v1) ? Number(object.v1) : 0,
      v2: Array.isArray(object?.v2) ? object.v2.map((e: any) => Array_ElementLtArrayLtStringGtGt.fromJSON(e)) : [],
    };
  },

  toJSON(message: AltBooleanCommaSpaceNumberCommaSpaceRestLtArrayLtStringGtGtAgt): unknown {
    const obj: any = {};
    message.v0 !== undefined && (obj.v0 = message.v0);
    message.v1 !== undefined && (obj.v1 = message.v1);
    if (message.v2) {
      obj.v2 = message.v2.map((e) => e ? Array_ElementLtArrayLtStringGtGt.toJSON(e) : undefined);
    } else {
      obj.v2 = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AltBooleanCommaSpaceNumberCommaSpaceRestLtArrayLtStringGtGtAgt>, I>>(
    base?: I,
  ): AltBooleanCommaSpaceNumberCommaSpaceRestLtArrayLtStringGtGtAgt {
    return AltBooleanCommaSpaceNumberCommaSpaceRestLtArrayLtStringGtGtAgt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AltBooleanCommaSpaceNumberCommaSpaceRestLtArrayLtStringGtGtAgt>, I>>(
    object: I,
  ): AltBooleanCommaSpaceNumberCommaSpaceRestLtArrayLtStringGtGtAgt {
    const message = createBaseAltBooleanCommaSpaceNumberCommaSpaceRestLtArrayLtStringGtGtAgt();
    message.v0 = object.v0 ?? false;
    message.v1 = object.v1 ?? 0;
    message.v2 = object.v2?.map((e) => Array_ElementLtArrayLtStringGtGt.fromPartial(e)) || [];
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

function createBaseArray_ElementLtArrayLtStringGtGt(): Array_ElementLtArrayLtStringGtGt {
  return { value: [] };
}

export const Array_ElementLtArrayLtStringGtGt = {
  encode(message: Array_ElementLtArrayLtStringGtGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array_ElementLtArrayLtStringGtGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_ElementLtArrayLtStringGtGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Array_ElementLtArrayLtStringGtGt {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => String(e)) : [] };
  },

  toJSON(message: Array_ElementLtArrayLtStringGtGt): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_ElementLtArrayLtStringGtGt>, I>>(
    base?: I,
  ): Array_ElementLtArrayLtStringGtGt {
    return Array_ElementLtArrayLtStringGtGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_ElementLtArrayLtStringGtGt>, I>>(
    object: I,
  ): Array_ElementLtArrayLtStringGtGt {
    const message = createBaseArray_ElementLtArrayLtStringGtGt();
    message.value = object.value?.map((e) => e) || [];
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
