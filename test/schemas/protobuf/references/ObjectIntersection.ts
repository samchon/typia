/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ObjectIntersection {
  email: string;
  name: string;
  vulnerable: boolean;
}

function createBaseObjectIntersection(): ObjectIntersection {
  return { email: "", name: "", vulnerable: false };
}

export const ObjectIntersection = {
  encode(message: ObjectIntersection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.vulnerable === true) {
      writer.uint32(24).bool(message.vulnerable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectIntersection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectIntersection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.vulnerable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectIntersection {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      name: isSet(object.name) ? String(object.name) : "",
      vulnerable: isSet(object.vulnerable) ? Boolean(object.vulnerable) : false,
    };
  },

  toJSON(message: ObjectIntersection): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.name !== undefined && (obj.name = message.name);
    message.vulnerable !== undefined && (obj.vulnerable = message.vulnerable);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectIntersection>, I>>(base?: I): ObjectIntersection {
    return ObjectIntersection.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectIntersection>, I>>(object: I): ObjectIntersection {
    const message = createBaseObjectIntersection();
    message.email = object.email ?? "";
    message.name = object.name ?? "";
    message.vulnerable = object.vulnerable ?? false;
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
