/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ObjectAlias {
}

export interface ObjectAlias_IMember {
  id?: string | undefined;
  email: string;
  name: string;
  sexO0?: number | undefined;
  sexO1?: string | undefined;
  age?: number | undefined;
  dead?: boolean | undefined;
}

export interface Main {
  value: ObjectAlias_IMember[];
}

function createBaseObjectAlias(): ObjectAlias {
  return {};
}

export const ObjectAlias = {
  encode(_: ObjectAlias, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectAlias {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectAlias();
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

  fromJSON(_: any): ObjectAlias {
    return {};
  },

  toJSON(_: ObjectAlias): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectAlias>, I>>(base?: I): ObjectAlias {
    return ObjectAlias.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectAlias>, I>>(_: I): ObjectAlias {
    const message = createBaseObjectAlias();
    return message;
  },
};

function createBaseObjectAlias_IMember(): ObjectAlias_IMember {
  return { id: undefined, email: "", name: "", sexO0: undefined, sexO1: undefined, age: undefined, dead: undefined };
}

export const ObjectAlias_IMember = {
  encode(message: ObjectAlias_IMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.sexO0 !== undefined) {
      writer.uint32(32).uint32(message.sexO0);
    }
    if (message.sexO1 !== undefined) {
      writer.uint32(42).string(message.sexO1);
    }
    if (message.age !== undefined) {
      writer.uint32(49).double(message.age);
    }
    if (message.dead !== undefined) {
      writer.uint32(56).bool(message.dead);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectAlias_IMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectAlias_IMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.sexO0 = reader.uint32();
          break;
        case 5:
          message.sexO1 = reader.string();
          break;
        case 6:
          message.age = reader.double();
          break;
        case 7:
          message.dead = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectAlias_IMember {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      email: isSet(object.email) ? String(object.email) : "",
      name: isSet(object.name) ? String(object.name) : "",
      sexO0: isSet(object.sexO0) ? Number(object.sexO0) : undefined,
      sexO1: isSet(object.sexO1) ? String(object.sexO1) : undefined,
      age: isSet(object.age) ? Number(object.age) : undefined,
      dead: isSet(object.dead) ? Boolean(object.dead) : undefined,
    };
  },

  toJSON(message: ObjectAlias_IMember): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.email !== undefined && (obj.email = message.email);
    message.name !== undefined && (obj.name = message.name);
    message.sexO0 !== undefined && (obj.sexO0 = Math.round(message.sexO0));
    message.sexO1 !== undefined && (obj.sexO1 = message.sexO1);
    message.age !== undefined && (obj.age = message.age);
    message.dead !== undefined && (obj.dead = message.dead);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectAlias_IMember>, I>>(base?: I): ObjectAlias_IMember {
    return ObjectAlias_IMember.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectAlias_IMember>, I>>(object: I): ObjectAlias_IMember {
    const message = createBaseObjectAlias_IMember();
    message.id = object.id ?? undefined;
    message.email = object.email ?? "";
    message.name = object.name ?? "";
    message.sexO0 = object.sexO0 ?? undefined;
    message.sexO1 = object.sexO1 ?? undefined;
    message.age = object.age ?? undefined;
    message.dead = object.dead ?? undefined;
    return message;
  },
};

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      ObjectAlias_IMember.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.value.push(ObjectAlias_IMember.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Main {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => ObjectAlias_IMember.fromJSON(e)) : [] };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e ? ObjectAlias_IMember.toJSON(e) : undefined);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Main>, I>>(base?: I): Main {
    return Main.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Main>, I>>(object: I): Main {
    const message = createBaseMain();
    message.value = object.value?.map((e) => ObjectAlias_IMember.fromPartial(e)) || [];
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
