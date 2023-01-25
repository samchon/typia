/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ObjectLiteralProperty {
}

export interface ObjectLiteralProperty_ISomething {
  v2: string;
  v3: string;
}

function createBaseObjectLiteralProperty(): ObjectLiteralProperty {
  return {};
}

export const ObjectLiteralProperty = {
  encode(_: ObjectLiteralProperty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectLiteralProperty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectLiteralProperty();
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

  fromJSON(_: any): ObjectLiteralProperty {
    return {};
  },

  toJSON(_: ObjectLiteralProperty): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectLiteralProperty>, I>>(base?: I): ObjectLiteralProperty {
    return ObjectLiteralProperty.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectLiteralProperty>, I>>(_: I): ObjectLiteralProperty {
    const message = createBaseObjectLiteralProperty();
    return message;
  },
};

function createBaseObjectLiteralProperty_ISomething(): ObjectLiteralProperty_ISomething {
  return { v2: "", v3: "" };
}

export const ObjectLiteralProperty_ISomething = {
  encode(message: ObjectLiteralProperty_ISomething, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.v2 !== "") {
      writer.uint32(10).string(message.v2);
    }
    if (message.v3 !== "") {
      writer.uint32(18).string(message.v3);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectLiteralProperty_ISomething {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectLiteralProperty_ISomething();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.v2 = reader.string();
          break;
        case 2:
          message.v3 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectLiteralProperty_ISomething {
    return { v2: isSet(object.v2) ? String(object.v2) : "", v3: isSet(object.v3) ? String(object.v3) : "" };
  },

  toJSON(message: ObjectLiteralProperty_ISomething): unknown {
    const obj: any = {};
    message.v2 !== undefined && (obj.v2 = message.v2);
    message.v3 !== undefined && (obj.v3 = message.v3);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectLiteralProperty_ISomething>, I>>(
    base?: I,
  ): ObjectLiteralProperty_ISomething {
    return ObjectLiteralProperty_ISomething.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectLiteralProperty_ISomething>, I>>(
    object: I,
  ): ObjectLiteralProperty_ISomething {
    const message = createBaseObjectLiteralProperty_ISomething();
    message.v2 = object.v2 ?? "";
    message.v3 = object.v3 ?? "";
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
