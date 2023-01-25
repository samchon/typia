/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Main {
  value: AltBooleanCommaSpaceNumberCommaSpaceStringAgt | undefined;
}

export interface AltBooleanCommaSpaceNumberCommaSpaceStringAgt {
  v0: boolean;
  v1: number;
  v2: string;
}

function createBaseMain(): Main {
  return { value: undefined };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      AltBooleanCommaSpaceNumberCommaSpaceStringAgt.encode(message.value, writer.uint32(10).fork()).ldelim();
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
          message.value = AltBooleanCommaSpaceNumberCommaSpaceStringAgt.decode(reader, reader.uint32());
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
      value: isSet(object.value) ? AltBooleanCommaSpaceNumberCommaSpaceStringAgt.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = message.value ? AltBooleanCommaSpaceNumberCommaSpaceStringAgt.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Main>, I>>(base?: I): Main {
    return Main.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Main>, I>>(object: I): Main {
    const message = createBaseMain();
    message.value = (object.value !== undefined && object.value !== null)
      ? AltBooleanCommaSpaceNumberCommaSpaceStringAgt.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseAltBooleanCommaSpaceNumberCommaSpaceStringAgt(): AltBooleanCommaSpaceNumberCommaSpaceStringAgt {
  return { v0: false, v1: 0, v2: "" };
}

export const AltBooleanCommaSpaceNumberCommaSpaceStringAgt = {
  encode(message: AltBooleanCommaSpaceNumberCommaSpaceStringAgt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.v0 === true) {
      writer.uint32(8).bool(message.v0);
    }
    if (message.v1 !== 0) {
      writer.uint32(17).double(message.v1);
    }
    if (message.v2 !== "") {
      writer.uint32(26).string(message.v2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AltBooleanCommaSpaceNumberCommaSpaceStringAgt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltBooleanCommaSpaceNumberCommaSpaceStringAgt();
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
          message.v2 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AltBooleanCommaSpaceNumberCommaSpaceStringAgt {
    return {
      v0: isSet(object.v0) ? Boolean(object.v0) : false,
      v1: isSet(object.v1) ? Number(object.v1) : 0,
      v2: isSet(object.v2) ? String(object.v2) : "",
    };
  },

  toJSON(message: AltBooleanCommaSpaceNumberCommaSpaceStringAgt): unknown {
    const obj: any = {};
    message.v0 !== undefined && (obj.v0 = message.v0);
    message.v1 !== undefined && (obj.v1 = message.v1);
    message.v2 !== undefined && (obj.v2 = message.v2);
    return obj;
  },

  create<I extends Exact<DeepPartial<AltBooleanCommaSpaceNumberCommaSpaceStringAgt>, I>>(
    base?: I,
  ): AltBooleanCommaSpaceNumberCommaSpaceStringAgt {
    return AltBooleanCommaSpaceNumberCommaSpaceStringAgt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AltBooleanCommaSpaceNumberCommaSpaceStringAgt>, I>>(
    object: I,
  ): AltBooleanCommaSpaceNumberCommaSpaceStringAgt {
    const message = createBaseAltBooleanCommaSpaceNumberCommaSpaceStringAgt();
    message.v0 = object.v0 ?? false;
    message.v1 = object.v1 ?? 0;
    message.v2 = object.v2 ?? "";
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
