/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface TupleRestObject {
}

export interface TupleRestObject_IObject {
  value: string;
}

export interface Main {
  value: AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject_IObjectGtAgt | undefined;
}

export interface AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject {
}

export interface AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject_IObjectGtAgt {
  v0: boolean;
  v1: number;
  v2: TupleRestObject_IObject[];
}

function createBaseTupleRestObject(): TupleRestObject {
  return {};
}

export const TupleRestObject = {
  encode(_: TupleRestObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TupleRestObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTupleRestObject();
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

  fromJSON(_: any): TupleRestObject {
    return {};
  },

  toJSON(_: TupleRestObject): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TupleRestObject>, I>>(base?: I): TupleRestObject {
    return TupleRestObject.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TupleRestObject>, I>>(_: I): TupleRestObject {
    const message = createBaseTupleRestObject();
    return message;
  },
};

function createBaseTupleRestObject_IObject(): TupleRestObject_IObject {
  return { value: "" };
}

export const TupleRestObject_IObject = {
  encode(message: TupleRestObject_IObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TupleRestObject_IObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTupleRestObject_IObject();
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

  fromJSON(object: any): TupleRestObject_IObject {
    return { value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: TupleRestObject_IObject): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<TupleRestObject_IObject>, I>>(base?: I): TupleRestObject_IObject {
    return TupleRestObject_IObject.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TupleRestObject_IObject>, I>>(object: I): TupleRestObject_IObject {
    const message = createBaseTupleRestObject_IObject();
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseMain(): Main {
  return { value: undefined };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject_IObjectGtAgt.encode(
        message.value,
        writer.uint32(10).fork(),
      ).ldelim();
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
          message.value = AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject_IObjectGtAgt.decode(
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
        ? AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject_IObjectGtAgt.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value
      ? AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject_IObjectGtAgt.toJSON(message.value)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Main>, I>>(base?: I): Main {
    return Main.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Main>, I>>(object: I): Main {
    const message = createBaseMain();
    message.value = (object.value !== undefined && object.value !== null)
      ? AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject_IObjectGtAgt.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseAltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject(): AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject {
  return {};
}

export const AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject = {
  encode(
    _: AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject();
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

  fromJSON(_: any): AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject {
    return {};
  },

  toJSON(_: AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject>, I>>(
    base?: I,
  ): AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject {
    return AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject>, I>>(
    _: I,
  ): AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject {
    const message = createBaseAltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject();
    return message;
  },
};

function createBaseAltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject_IObjectGtAgt(): AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject_IObjectGtAgt {
  return { v0: false, v1: 0, v2: [] };
}

export const AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject_IObjectGtAgt = {
  encode(
    message: AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject_IObjectGtAgt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.v0 === true) {
      writer.uint32(8).bool(message.v0);
    }
    if (message.v1 !== 0) {
      writer.uint32(17).double(message.v1);
    }
    for (const v of message.v2) {
      TupleRestObject_IObject.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject_IObjectGtAgt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject_IObjectGtAgt();
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
          message.v2.push(TupleRestObject_IObject.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject_IObjectGtAgt {
    return {
      v0: isSet(object.v0) ? Boolean(object.v0) : false,
      v1: isSet(object.v1) ? Number(object.v1) : 0,
      v2: Array.isArray(object?.v2) ? object.v2.map((e: any) => TupleRestObject_IObject.fromJSON(e)) : [],
    };
  },

  toJSON(message: AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject_IObjectGtAgt): unknown {
    const obj: any = {};
    message.v0 !== undefined && (obj.v0 = message.v0);
    message.v1 !== undefined && (obj.v1 = message.v1);
    if (message.v2) {
      obj.v2 = message.v2.map((e) => e ? TupleRestObject_IObject.toJSON(e) : undefined);
    } else {
      obj.v2 = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject_IObjectGtAgt>, I>>(
    base?: I,
  ): AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject_IObjectGtAgt {
    return AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject_IObjectGtAgt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject_IObjectGtAgt>, I>>(
    object: I,
  ): AltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject_IObjectGtAgt {
    const message = createBaseAltBooleanCommaSpaceNumberCommaSpaceRestLtTupleRestObject_IObjectGtAgt();
    message.v0 = object.v0 ?? false;
    message.v1 = object.v1 ?? 0;
    message.v2 = object.v2?.map((e) => TupleRestObject_IObject.fromPartial(e)) || [];
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
