/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ObjectUnionDouble {
}

export interface ObjectUnionDouble_IA {
  value: Type | undefined;
  childO0?: ObjectUnionDouble_IAA | undefined;
  childO1?: ObjectUnionDouble_IAB | undefined;
}

export interface ObjectUnionDouble_IAA {
  value: Type_o1 | undefined;
}

export interface ObjectUnionDouble_IAB {
  value: Type_o2 | undefined;
}

export interface ObjectUnionDouble_IB {
  value: Type_o3 | undefined;
  childO0?: ObjectUnionDouble_IBA | undefined;
  childO1?: ObjectUnionDouble_IBB | undefined;
}

export interface ObjectUnionDouble_IBA {
  value: Type_o4 | undefined;
}

export interface ObjectUnionDouble_IBB {
  value: Type_o5 | undefined;
}

export interface Type {
  x: number;
}

export interface Type_o1 {
  y: boolean;
}

export interface Type_o2 {
  y: number;
}

export interface Type_o3 {
  x: string;
}

export interface Type_o4 {
  y: string;
}

export interface Type_o5 {
  y: number[];
}

export interface Main {
  value: Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble_IBRpGt[];
}

export interface Array {
}

export interface Array_ElementLtLpObjectUnionDouble {
}

export interface Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble {
}

export interface Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble_IBRpGt {
  valueO0?: ObjectUnionDouble_IA | undefined;
  valueO1?: ObjectUnionDouble_IB | undefined;
}

function createBaseObjectUnionDouble(): ObjectUnionDouble {
  return {};
}

export const ObjectUnionDouble = {
  encode(_: ObjectUnionDouble, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionDouble {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionDouble();
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

  fromJSON(_: any): ObjectUnionDouble {
    return {};
  },

  toJSON(_: ObjectUnionDouble): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionDouble>, I>>(base?: I): ObjectUnionDouble {
    return ObjectUnionDouble.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionDouble>, I>>(_: I): ObjectUnionDouble {
    const message = createBaseObjectUnionDouble();
    return message;
  },
};

function createBaseObjectUnionDouble_IA(): ObjectUnionDouble_IA {
  return { value: undefined, childO0: undefined, childO1: undefined };
}

export const ObjectUnionDouble_IA = {
  encode(message: ObjectUnionDouble_IA, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      Type.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    if (message.childO0 !== undefined) {
      ObjectUnionDouble_IAA.encode(message.childO0, writer.uint32(18).fork()).ldelim();
    }
    if (message.childO1 !== undefined) {
      ObjectUnionDouble_IAB.encode(message.childO1, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionDouble_IA {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionDouble_IA();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = Type.decode(reader, reader.uint32());
          break;
        case 2:
          message.childO0 = ObjectUnionDouble_IAA.decode(reader, reader.uint32());
          break;
        case 3:
          message.childO1 = ObjectUnionDouble_IAB.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionDouble_IA {
    return {
      value: isSet(object.value) ? Type.fromJSON(object.value) : undefined,
      childO0: isSet(object.childO0) ? ObjectUnionDouble_IAA.fromJSON(object.childO0) : undefined,
      childO1: isSet(object.childO1) ? ObjectUnionDouble_IAB.fromJSON(object.childO1) : undefined,
    };
  },

  toJSON(message: ObjectUnionDouble_IA): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? Type.toJSON(message.value) : undefined);
    message.childO0 !== undefined &&
      (obj.childO0 = message.childO0 ? ObjectUnionDouble_IAA.toJSON(message.childO0) : undefined);
    message.childO1 !== undefined &&
      (obj.childO1 = message.childO1 ? ObjectUnionDouble_IAB.toJSON(message.childO1) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionDouble_IA>, I>>(base?: I): ObjectUnionDouble_IA {
    return ObjectUnionDouble_IA.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionDouble_IA>, I>>(object: I): ObjectUnionDouble_IA {
    const message = createBaseObjectUnionDouble_IA();
    message.value = (object.value !== undefined && object.value !== null) ? Type.fromPartial(object.value) : undefined;
    message.childO0 = (object.childO0 !== undefined && object.childO0 !== null)
      ? ObjectUnionDouble_IAA.fromPartial(object.childO0)
      : undefined;
    message.childO1 = (object.childO1 !== undefined && object.childO1 !== null)
      ? ObjectUnionDouble_IAB.fromPartial(object.childO1)
      : undefined;
    return message;
  },
};

function createBaseObjectUnionDouble_IAA(): ObjectUnionDouble_IAA {
  return { value: undefined };
}

export const ObjectUnionDouble_IAA = {
  encode(message: ObjectUnionDouble_IAA, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      Type_o1.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionDouble_IAA {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionDouble_IAA();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = Type_o1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionDouble_IAA {
    return { value: isSet(object.value) ? Type_o1.fromJSON(object.value) : undefined };
  },

  toJSON(message: ObjectUnionDouble_IAA): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? Type_o1.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionDouble_IAA>, I>>(base?: I): ObjectUnionDouble_IAA {
    return ObjectUnionDouble_IAA.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionDouble_IAA>, I>>(object: I): ObjectUnionDouble_IAA {
    const message = createBaseObjectUnionDouble_IAA();
    message.value = (object.value !== undefined && object.value !== null)
      ? Type_o1.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseObjectUnionDouble_IAB(): ObjectUnionDouble_IAB {
  return { value: undefined };
}

export const ObjectUnionDouble_IAB = {
  encode(message: ObjectUnionDouble_IAB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      Type_o2.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionDouble_IAB {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionDouble_IAB();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = Type_o2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionDouble_IAB {
    return { value: isSet(object.value) ? Type_o2.fromJSON(object.value) : undefined };
  },

  toJSON(message: ObjectUnionDouble_IAB): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? Type_o2.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionDouble_IAB>, I>>(base?: I): ObjectUnionDouble_IAB {
    return ObjectUnionDouble_IAB.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionDouble_IAB>, I>>(object: I): ObjectUnionDouble_IAB {
    const message = createBaseObjectUnionDouble_IAB();
    message.value = (object.value !== undefined && object.value !== null)
      ? Type_o2.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseObjectUnionDouble_IB(): ObjectUnionDouble_IB {
  return { value: undefined, childO0: undefined, childO1: undefined };
}

export const ObjectUnionDouble_IB = {
  encode(message: ObjectUnionDouble_IB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      Type_o3.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    if (message.childO0 !== undefined) {
      ObjectUnionDouble_IBA.encode(message.childO0, writer.uint32(18).fork()).ldelim();
    }
    if (message.childO1 !== undefined) {
      ObjectUnionDouble_IBB.encode(message.childO1, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionDouble_IB {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionDouble_IB();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = Type_o3.decode(reader, reader.uint32());
          break;
        case 2:
          message.childO0 = ObjectUnionDouble_IBA.decode(reader, reader.uint32());
          break;
        case 3:
          message.childO1 = ObjectUnionDouble_IBB.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionDouble_IB {
    return {
      value: isSet(object.value) ? Type_o3.fromJSON(object.value) : undefined,
      childO0: isSet(object.childO0) ? ObjectUnionDouble_IBA.fromJSON(object.childO0) : undefined,
      childO1: isSet(object.childO1) ? ObjectUnionDouble_IBB.fromJSON(object.childO1) : undefined,
    };
  },

  toJSON(message: ObjectUnionDouble_IB): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? Type_o3.toJSON(message.value) : undefined);
    message.childO0 !== undefined &&
      (obj.childO0 = message.childO0 ? ObjectUnionDouble_IBA.toJSON(message.childO0) : undefined);
    message.childO1 !== undefined &&
      (obj.childO1 = message.childO1 ? ObjectUnionDouble_IBB.toJSON(message.childO1) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionDouble_IB>, I>>(base?: I): ObjectUnionDouble_IB {
    return ObjectUnionDouble_IB.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionDouble_IB>, I>>(object: I): ObjectUnionDouble_IB {
    const message = createBaseObjectUnionDouble_IB();
    message.value = (object.value !== undefined && object.value !== null)
      ? Type_o3.fromPartial(object.value)
      : undefined;
    message.childO0 = (object.childO0 !== undefined && object.childO0 !== null)
      ? ObjectUnionDouble_IBA.fromPartial(object.childO0)
      : undefined;
    message.childO1 = (object.childO1 !== undefined && object.childO1 !== null)
      ? ObjectUnionDouble_IBB.fromPartial(object.childO1)
      : undefined;
    return message;
  },
};

function createBaseObjectUnionDouble_IBA(): ObjectUnionDouble_IBA {
  return { value: undefined };
}

export const ObjectUnionDouble_IBA = {
  encode(message: ObjectUnionDouble_IBA, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      Type_o4.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionDouble_IBA {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionDouble_IBA();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = Type_o4.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionDouble_IBA {
    return { value: isSet(object.value) ? Type_o4.fromJSON(object.value) : undefined };
  },

  toJSON(message: ObjectUnionDouble_IBA): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? Type_o4.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionDouble_IBA>, I>>(base?: I): ObjectUnionDouble_IBA {
    return ObjectUnionDouble_IBA.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionDouble_IBA>, I>>(object: I): ObjectUnionDouble_IBA {
    const message = createBaseObjectUnionDouble_IBA();
    message.value = (object.value !== undefined && object.value !== null)
      ? Type_o4.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseObjectUnionDouble_IBB(): ObjectUnionDouble_IBB {
  return { value: undefined };
}

export const ObjectUnionDouble_IBB = {
  encode(message: ObjectUnionDouble_IBB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      Type_o5.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionDouble_IBB {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionDouble_IBB();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = Type_o5.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionDouble_IBB {
    return { value: isSet(object.value) ? Type_o5.fromJSON(object.value) : undefined };
  },

  toJSON(message: ObjectUnionDouble_IBB): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? Type_o5.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionDouble_IBB>, I>>(base?: I): ObjectUnionDouble_IBB {
    return ObjectUnionDouble_IBB.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionDouble_IBB>, I>>(object: I): ObjectUnionDouble_IBB {
    const message = createBaseObjectUnionDouble_IBB();
    message.value = (object.value !== undefined && object.value !== null)
      ? Type_o5.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseType(): Type {
  return { x: 0 };
}

export const Type = {
  encode(message: Type, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(9).double(message.x);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Type {
    return { x: isSet(object.x) ? Number(object.x) : 0 };
  },

  toJSON(message: Type): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    return obj;
  },

  create<I extends Exact<DeepPartial<Type>, I>>(base?: I): Type {
    return Type.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Type>, I>>(object: I): Type {
    const message = createBaseType();
    message.x = object.x ?? 0;
    return message;
  },
};

function createBaseType_o1(): Type_o1 {
  return { y: false };
}

export const Type_o1 = {
  encode(message: Type_o1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.y === true) {
      writer.uint32(8).bool(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type_o1 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_o1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.y = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Type_o1 {
    return { y: isSet(object.y) ? Boolean(object.y) : false };
  },

  toJSON(message: Type_o1): unknown {
    const obj: any = {};
    message.y !== undefined && (obj.y = message.y);
    return obj;
  },

  create<I extends Exact<DeepPartial<Type_o1>, I>>(base?: I): Type_o1 {
    return Type_o1.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Type_o1>, I>>(object: I): Type_o1 {
    const message = createBaseType_o1();
    message.y = object.y ?? false;
    return message;
  },
};

function createBaseType_o2(): Type_o2 {
  return { y: 0 };
}

export const Type_o2 = {
  encode(message: Type_o2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.y !== 0) {
      writer.uint32(9).double(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type_o2 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_o2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.y = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Type_o2 {
    return { y: isSet(object.y) ? Number(object.y) : 0 };
  },

  toJSON(message: Type_o2): unknown {
    const obj: any = {};
    message.y !== undefined && (obj.y = message.y);
    return obj;
  },

  create<I extends Exact<DeepPartial<Type_o2>, I>>(base?: I): Type_o2 {
    return Type_o2.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Type_o2>, I>>(object: I): Type_o2 {
    const message = createBaseType_o2();
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseType_o3(): Type_o3 {
  return { x: "" };
}

export const Type_o3 = {
  encode(message: Type_o3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== "") {
      writer.uint32(10).string(message.x);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type_o3 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_o3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Type_o3 {
    return { x: isSet(object.x) ? String(object.x) : "" };
  },

  toJSON(message: Type_o3): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    return obj;
  },

  create<I extends Exact<DeepPartial<Type_o3>, I>>(base?: I): Type_o3 {
    return Type_o3.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Type_o3>, I>>(object: I): Type_o3 {
    const message = createBaseType_o3();
    message.x = object.x ?? "";
    return message;
  },
};

function createBaseType_o4(): Type_o4 {
  return { y: "" };
}

export const Type_o4 = {
  encode(message: Type_o4, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.y !== "") {
      writer.uint32(10).string(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type_o4 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_o4();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.y = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Type_o4 {
    return { y: isSet(object.y) ? String(object.y) : "" };
  },

  toJSON(message: Type_o4): unknown {
    const obj: any = {};
    message.y !== undefined && (obj.y = message.y);
    return obj;
  },

  create<I extends Exact<DeepPartial<Type_o4>, I>>(base?: I): Type_o4 {
    return Type_o4.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Type_o4>, I>>(object: I): Type_o4 {
    const message = createBaseType_o4();
    message.y = object.y ?? "";
    return message;
  },
};

function createBaseType_o5(): Type_o5 {
  return { y: [] };
}

export const Type_o5 = {
  encode(message: Type_o5, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.y) {
      writer.double(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type_o5 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType_o5();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.y.push(reader.double());
            }
          } else {
            message.y.push(reader.double());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Type_o5 {
    return { y: Array.isArray(object?.y) ? object.y.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: Type_o5): unknown {
    const obj: any = {};
    if (message.y) {
      obj.y = message.y.map((e) => e);
    } else {
      obj.y = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Type_o5>, I>>(base?: I): Type_o5 {
    return Type_o5.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Type_o5>, I>>(object: I): Type_o5 {
    const message = createBaseType_o5();
    message.y = object.y?.map((e) => e) || [];
    return message;
  },
};

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble_IBRpGt.encode(v!, writer.uint32(10).fork())
        .ldelim();
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
          message.value.push(
            Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble_IBRpGt.decode(reader, reader.uint32()),
          );
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
      value: Array.isArray(object?.value)
        ? object.value.map((e: any) =>
          Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble_IBRpGt.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) =>
        e ? Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble_IBRpGt.toJSON(e) : undefined
      );
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
    message.value =
      object.value?.map((e) =>
        Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble_IBRpGt.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseArray(): Array {
  return {};
}

export const Array = {
  encode(_: Array, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray();
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

  fromJSON(_: any): Array {
    return {};
  },

  toJSON(_: Array): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Array>, I>>(base?: I): Array {
    return Array.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array>, I>>(_: I): Array {
    const message = createBaseArray();
    return message;
  },
};

function createBaseArray_ElementLtLpObjectUnionDouble(): Array_ElementLtLpObjectUnionDouble {
  return {};
}

export const Array_ElementLtLpObjectUnionDouble = {
  encode(_: Array_ElementLtLpObjectUnionDouble, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array_ElementLtLpObjectUnionDouble {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_ElementLtLpObjectUnionDouble();
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

  fromJSON(_: any): Array_ElementLtLpObjectUnionDouble {
    return {};
  },

  toJSON(_: Array_ElementLtLpObjectUnionDouble): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_ElementLtLpObjectUnionDouble>, I>>(
    base?: I,
  ): Array_ElementLtLpObjectUnionDouble {
    return Array_ElementLtLpObjectUnionDouble.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_ElementLtLpObjectUnionDouble>, I>>(
    _: I,
  ): Array_ElementLtLpObjectUnionDouble {
    const message = createBaseArray_ElementLtLpObjectUnionDouble();
    return message;
  },
};

function createBaseArray_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble(): Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble {
  return {};
}

export const Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble = {
  encode(
    _: Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble();
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

  fromJSON(_: any): Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble {
    return {};
  },

  toJSON(_: Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble>, I>>(
    base?: I,
  ): Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble {
    return Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble>, I>>(
    _: I,
  ): Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble {
    const message = createBaseArray_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble();
    return message;
  },
};

function createBaseArray_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble_IBRpGt(): Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble_IBRpGt {
  return { valueO0: undefined, valueO1: undefined };
}

export const Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble_IBRpGt = {
  encode(
    message: Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble_IBRpGt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.valueO0 !== undefined) {
      ObjectUnionDouble_IA.encode(message.valueO0, writer.uint32(10).fork()).ldelim();
    }
    if (message.valueO1 !== undefined) {
      ObjectUnionDouble_IB.encode(message.valueO1, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble_IBRpGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble_IBRpGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valueO0 = ObjectUnionDouble_IA.decode(reader, reader.uint32());
          break;
        case 2:
          message.valueO1 = ObjectUnionDouble_IB.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble_IBRpGt {
    return {
      valueO0: isSet(object.valueO0) ? ObjectUnionDouble_IA.fromJSON(object.valueO0) : undefined,
      valueO1: isSet(object.valueO1) ? ObjectUnionDouble_IB.fromJSON(object.valueO1) : undefined,
    };
  },

  toJSON(message: Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble_IBRpGt): unknown {
    const obj: any = {};
    message.valueO0 !== undefined &&
      (obj.valueO0 = message.valueO0 ? ObjectUnionDouble_IA.toJSON(message.valueO0) : undefined);
    message.valueO1 !== undefined &&
      (obj.valueO1 = message.valueO1 ? ObjectUnionDouble_IB.toJSON(message.valueO1) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble_IBRpGt>, I>>(
    base?: I,
  ): Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble_IBRpGt {
    return Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble_IBRpGt.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble_IBRpGt>, I>,
  >(object: I): Array_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble_IBRpGt {
    const message = createBaseArray_ElementLtLpObjectUnionDouble_IASpaceOrSpaceObjectUnionDouble_IBRpGt();
    message.valueO0 = (object.valueO0 !== undefined && object.valueO0 !== null)
      ? ObjectUnionDouble_IA.fromPartial(object.valueO0)
      : undefined;
    message.valueO1 = (object.valueO1 !== undefined && object.valueO1 !== null)
      ? ObjectUnionDouble_IB.fromPartial(object.valueO1)
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
