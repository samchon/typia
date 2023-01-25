/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ObjectTuple {
}

export interface ObjectTuple_ISection {
  id: string;
  code: string;
  name: string;
}

export interface ObjectTuple_ICitizen {
  id: string;
  mobile: string;
  name: string;
}

export interface Main {
  value: AltObjectTuple_ISectionCommaSpaceObjectTuple_ICitizenAgt | undefined;
}

export interface AltObjectTuple {
}

export interface AltObjectTuple_ISectionCommaSpaceObjectTuple {
}

export interface AltObjectTuple_ISectionCommaSpaceObjectTuple_ICitizenAgt {
  v0: ObjectTuple_ISection | undefined;
  v1: ObjectTuple_ICitizen | undefined;
}

function createBaseObjectTuple(): ObjectTuple {
  return {};
}

export const ObjectTuple = {
  encode(_: ObjectTuple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectTuple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectTuple();
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

  fromJSON(_: any): ObjectTuple {
    return {};
  },

  toJSON(_: ObjectTuple): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectTuple>, I>>(base?: I): ObjectTuple {
    return ObjectTuple.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectTuple>, I>>(_: I): ObjectTuple {
    const message = createBaseObjectTuple();
    return message;
  },
};

function createBaseObjectTuple_ISection(): ObjectTuple_ISection {
  return { id: "", code: "", name: "" };
}

export const ObjectTuple_ISection = {
  encode(message: ObjectTuple_ISection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectTuple_ISection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectTuple_ISection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.code = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectTuple_ISection {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      code: isSet(object.code) ? String(object.code) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: ObjectTuple_ISection): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.code !== undefined && (obj.code = message.code);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectTuple_ISection>, I>>(base?: I): ObjectTuple_ISection {
    return ObjectTuple_ISection.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectTuple_ISection>, I>>(object: I): ObjectTuple_ISection {
    const message = createBaseObjectTuple_ISection();
    message.id = object.id ?? "";
    message.code = object.code ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseObjectTuple_ICitizen(): ObjectTuple_ICitizen {
  return { id: "", mobile: "", name: "" };
}

export const ObjectTuple_ICitizen = {
  encode(message: ObjectTuple_ICitizen, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.mobile !== "") {
      writer.uint32(18).string(message.mobile);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectTuple_ICitizen {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectTuple_ICitizen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.mobile = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectTuple_ICitizen {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      mobile: isSet(object.mobile) ? String(object.mobile) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: ObjectTuple_ICitizen): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.mobile !== undefined && (obj.mobile = message.mobile);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectTuple_ICitizen>, I>>(base?: I): ObjectTuple_ICitizen {
    return ObjectTuple_ICitizen.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectTuple_ICitizen>, I>>(object: I): ObjectTuple_ICitizen {
    const message = createBaseObjectTuple_ICitizen();
    message.id = object.id ?? "";
    message.mobile = object.mobile ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMain(): Main {
  return { value: undefined };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      AltObjectTuple_ISectionCommaSpaceObjectTuple_ICitizenAgt.encode(message.value, writer.uint32(10).fork()).ldelim();
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
          message.value = AltObjectTuple_ISectionCommaSpaceObjectTuple_ICitizenAgt.decode(reader, reader.uint32());
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
        ? AltObjectTuple_ISectionCommaSpaceObjectTuple_ICitizenAgt.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value
      ? AltObjectTuple_ISectionCommaSpaceObjectTuple_ICitizenAgt.toJSON(message.value)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Main>, I>>(base?: I): Main {
    return Main.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Main>, I>>(object: I): Main {
    const message = createBaseMain();
    message.value = (object.value !== undefined && object.value !== null)
      ? AltObjectTuple_ISectionCommaSpaceObjectTuple_ICitizenAgt.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseAltObjectTuple(): AltObjectTuple {
  return {};
}

export const AltObjectTuple = {
  encode(_: AltObjectTuple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AltObjectTuple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltObjectTuple();
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

  fromJSON(_: any): AltObjectTuple {
    return {};
  },

  toJSON(_: AltObjectTuple): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AltObjectTuple>, I>>(base?: I): AltObjectTuple {
    return AltObjectTuple.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AltObjectTuple>, I>>(_: I): AltObjectTuple {
    const message = createBaseAltObjectTuple();
    return message;
  },
};

function createBaseAltObjectTuple_ISectionCommaSpaceObjectTuple(): AltObjectTuple_ISectionCommaSpaceObjectTuple {
  return {};
}

export const AltObjectTuple_ISectionCommaSpaceObjectTuple = {
  encode(_: AltObjectTuple_ISectionCommaSpaceObjectTuple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AltObjectTuple_ISectionCommaSpaceObjectTuple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltObjectTuple_ISectionCommaSpaceObjectTuple();
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

  fromJSON(_: any): AltObjectTuple_ISectionCommaSpaceObjectTuple {
    return {};
  },

  toJSON(_: AltObjectTuple_ISectionCommaSpaceObjectTuple): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AltObjectTuple_ISectionCommaSpaceObjectTuple>, I>>(
    base?: I,
  ): AltObjectTuple_ISectionCommaSpaceObjectTuple {
    return AltObjectTuple_ISectionCommaSpaceObjectTuple.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AltObjectTuple_ISectionCommaSpaceObjectTuple>, I>>(
    _: I,
  ): AltObjectTuple_ISectionCommaSpaceObjectTuple {
    const message = createBaseAltObjectTuple_ISectionCommaSpaceObjectTuple();
    return message;
  },
};

function createBaseAltObjectTuple_ISectionCommaSpaceObjectTuple_ICitizenAgt(): AltObjectTuple_ISectionCommaSpaceObjectTuple_ICitizenAgt {
  return { v0: undefined, v1: undefined };
}

export const AltObjectTuple_ISectionCommaSpaceObjectTuple_ICitizenAgt = {
  encode(
    message: AltObjectTuple_ISectionCommaSpaceObjectTuple_ICitizenAgt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.v0 !== undefined) {
      ObjectTuple_ISection.encode(message.v0, writer.uint32(10).fork()).ldelim();
    }
    if (message.v1 !== undefined) {
      ObjectTuple_ICitizen.encode(message.v1, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AltObjectTuple_ISectionCommaSpaceObjectTuple_ICitizenAgt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltObjectTuple_ISectionCommaSpaceObjectTuple_ICitizenAgt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.v0 = ObjectTuple_ISection.decode(reader, reader.uint32());
          break;
        case 2:
          message.v1 = ObjectTuple_ICitizen.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AltObjectTuple_ISectionCommaSpaceObjectTuple_ICitizenAgt {
    return {
      v0: isSet(object.v0) ? ObjectTuple_ISection.fromJSON(object.v0) : undefined,
      v1: isSet(object.v1) ? ObjectTuple_ICitizen.fromJSON(object.v1) : undefined,
    };
  },

  toJSON(message: AltObjectTuple_ISectionCommaSpaceObjectTuple_ICitizenAgt): unknown {
    const obj: any = {};
    message.v0 !== undefined && (obj.v0 = message.v0 ? ObjectTuple_ISection.toJSON(message.v0) : undefined);
    message.v1 !== undefined && (obj.v1 = message.v1 ? ObjectTuple_ICitizen.toJSON(message.v1) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AltObjectTuple_ISectionCommaSpaceObjectTuple_ICitizenAgt>, I>>(
    base?: I,
  ): AltObjectTuple_ISectionCommaSpaceObjectTuple_ICitizenAgt {
    return AltObjectTuple_ISectionCommaSpaceObjectTuple_ICitizenAgt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AltObjectTuple_ISectionCommaSpaceObjectTuple_ICitizenAgt>, I>>(
    object: I,
  ): AltObjectTuple_ISectionCommaSpaceObjectTuple_ICitizenAgt {
    const message = createBaseAltObjectTuple_ISectionCommaSpaceObjectTuple_ICitizenAgt();
    message.v0 = (object.v0 !== undefined && object.v0 !== null)
      ? ObjectTuple_ISection.fromPartial(object.v0)
      : undefined;
    message.v1 = (object.v1 !== undefined && object.v1 !== null)
      ? ObjectTuple_ICitizen.fromPartial(object.v1)
      : undefined;
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
