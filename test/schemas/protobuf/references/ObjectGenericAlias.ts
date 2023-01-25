/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ObjectGenericAlias {
}

export interface ObjectGenericAlias_Alias {
  value: string;
}

function createBaseObjectGenericAlias(): ObjectGenericAlias {
  return {};
}

export const ObjectGenericAlias = {
  encode(_: ObjectGenericAlias, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectGenericAlias {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectGenericAlias();
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

  fromJSON(_: any): ObjectGenericAlias {
    return {};
  },

  toJSON(_: ObjectGenericAlias): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectGenericAlias>, I>>(base?: I): ObjectGenericAlias {
    return ObjectGenericAlias.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectGenericAlias>, I>>(_: I): ObjectGenericAlias {
    const message = createBaseObjectGenericAlias();
    return message;
  },
};

function createBaseObjectGenericAlias_Alias(): ObjectGenericAlias_Alias {
  return { value: "" };
}

export const ObjectGenericAlias_Alias = {
  encode(message: ObjectGenericAlias_Alias, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectGenericAlias_Alias {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectGenericAlias_Alias();
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

  fromJSON(object: any): ObjectGenericAlias_Alias {
    return { value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: ObjectGenericAlias_Alias): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectGenericAlias_Alias>, I>>(base?: I): ObjectGenericAlias_Alias {
    return ObjectGenericAlias_Alias.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectGenericAlias_Alias>, I>>(object: I): ObjectGenericAlias_Alias {
    const message = createBaseObjectGenericAlias_Alias();
    message.value = object.value ?? "";
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
