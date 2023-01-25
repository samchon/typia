/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ClassGetter {
}

export interface ClassGetter_Person {
  id: string;
  name: string;
  dead?: boolean | undefined;
}

function createBaseClassGetter(): ClassGetter {
  return {};
}

export const ClassGetter = {
  encode(_: ClassGetter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassGetter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassGetter();
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

  fromJSON(_: any): ClassGetter {
    return {};
  },

  toJSON(_: ClassGetter): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ClassGetter>, I>>(base?: I): ClassGetter {
    return ClassGetter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClassGetter>, I>>(_: I): ClassGetter {
    const message = createBaseClassGetter();
    return message;
  },
};

function createBaseClassGetter_Person(): ClassGetter_Person {
  return { id: "", name: "", dead: undefined };
}

export const ClassGetter_Person = {
  encode(message: ClassGetter_Person, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.dead !== undefined) {
      writer.uint32(24).bool(message.dead);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassGetter_Person {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassGetter_Person();
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
          message.dead = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClassGetter_Person {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      dead: isSet(object.dead) ? Boolean(object.dead) : undefined,
    };
  },

  toJSON(message: ClassGetter_Person): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.dead !== undefined && (obj.dead = message.dead);
    return obj;
  },

  create<I extends Exact<DeepPartial<ClassGetter_Person>, I>>(base?: I): ClassGetter_Person {
    return ClassGetter_Person.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClassGetter_Person>, I>>(object: I): ClassGetter_Person {
    const message = createBaseClassGetter_Person();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.dead = object.dead ?? undefined;
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
