/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ClassMethod {
}

export interface ClassMethod_Animal {
  name: string;
  age: number;
}

function createBaseClassMethod(): ClassMethod {
  return {};
}

export const ClassMethod = {
  encode(_: ClassMethod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassMethod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassMethod();
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

  fromJSON(_: any): ClassMethod {
    return {};
  },

  toJSON(_: ClassMethod): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ClassMethod>, I>>(base?: I): ClassMethod {
    return ClassMethod.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClassMethod>, I>>(_: I): ClassMethod {
    const message = createBaseClassMethod();
    return message;
  },
};

function createBaseClassMethod_Animal(): ClassMethod_Animal {
  return { name: "", age: 0 };
}

export const ClassMethod_Animal = {
  encode(message: ClassMethod_Animal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.age !== 0) {
      writer.uint32(17).double(message.age);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassMethod_Animal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassMethod_Animal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.age = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClassMethod_Animal {
    return { name: isSet(object.name) ? String(object.name) : "", age: isSet(object.age) ? Number(object.age) : 0 };
  },

  toJSON(message: ClassMethod_Animal): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.age !== undefined && (obj.age = message.age);
    return obj;
  },

  create<I extends Exact<DeepPartial<ClassMethod_Animal>, I>>(base?: I): ClassMethod_Animal {
    return ClassMethod_Animal.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClassMethod_Animal>, I>>(object: I): ClassMethod_Animal {
    const message = createBaseClassMethod_Animal();
    message.name = object.name ?? "";
    message.age = object.age ?? 0;
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
