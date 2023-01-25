/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface DynamicConstant {
  a: number;
  b: number;
  c: number;
  d: number;
}

function createBaseDynamicConstant(): DynamicConstant {
  return { a: 0, b: 0, c: 0, d: 0 };
}

export const DynamicConstant = {
  encode(message: DynamicConstant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.a !== 0) {
      writer.uint32(9).double(message.a);
    }
    if (message.b !== 0) {
      writer.uint32(17).double(message.b);
    }
    if (message.c !== 0) {
      writer.uint32(25).double(message.c);
    }
    if (message.d !== 0) {
      writer.uint32(33).double(message.d);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DynamicConstant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDynamicConstant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.a = reader.double();
          break;
        case 2:
          message.b = reader.double();
          break;
        case 3:
          message.c = reader.double();
          break;
        case 4:
          message.d = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DynamicConstant {
    return {
      a: isSet(object.a) ? Number(object.a) : 0,
      b: isSet(object.b) ? Number(object.b) : 0,
      c: isSet(object.c) ? Number(object.c) : 0,
      d: isSet(object.d) ? Number(object.d) : 0,
    };
  },

  toJSON(message: DynamicConstant): unknown {
    const obj: any = {};
    message.a !== undefined && (obj.a = message.a);
    message.b !== undefined && (obj.b = message.b);
    message.c !== undefined && (obj.c = message.c);
    message.d !== undefined && (obj.d = message.d);
    return obj;
  },

  create<I extends Exact<DeepPartial<DynamicConstant>, I>>(base?: I): DynamicConstant {
    return DynamicConstant.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DynamicConstant>, I>>(object: I): DynamicConstant {
    const message = createBaseDynamicConstant();
    message.a = object.a ?? 0;
    message.b = object.b ?? 0;
    message.c = object.c ?? 0;
    message.d = object.d ?? 0;
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
