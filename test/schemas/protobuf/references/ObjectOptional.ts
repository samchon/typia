/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ObjectOptional {
  id?: string | undefined;
  name?: string | undefined;
  email?: string | undefined;
  sequence?: number | undefined;
}

function createBaseObjectOptional(): ObjectOptional {
  return { id: undefined, name: undefined, email: undefined, sequence: undefined };
}

export const ObjectOptional = {
  encode(message: ObjectOptional, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== undefined) {
      writer.uint32(26).string(message.email);
    }
    if (message.sequence !== undefined) {
      writer.uint32(33).double(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectOptional {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectOptional();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.email = reader.string();
          break;
        case 4:
          message.sequence = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectOptional {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      email: isSet(object.email) ? String(object.email) : undefined,
      sequence: isSet(object.sequence) ? Number(object.sequence) : undefined,
    };
  },

  toJSON(message: ObjectOptional): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.email !== undefined && (obj.email = message.email);
    message.sequence !== undefined && (obj.sequence = message.sequence);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectOptional>, I>>(base?: I): ObjectOptional {
    return ObjectOptional.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectOptional>, I>>(object: I): ObjectOptional {
    const message = createBaseObjectOptional();
    message.id = object.id ?? undefined;
    message.name = object.name ?? undefined;
    message.email = object.email ?? undefined;
    message.sequence = object.sequence ?? undefined;
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
