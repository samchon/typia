/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ObjectSimple {
}

export interface ObjectSimple_IBox3D {
  scale: ObjectSimple_IPoint3D | undefined;
  position: ObjectSimple_IPoint3D | undefined;
  rotate: ObjectSimple_IPoint3D | undefined;
  pivot: ObjectSimple_IPoint3D | undefined;
}

export interface ObjectSimple_IPoint3D {
  x: number;
  y: number;
  z: number;
}

function createBaseObjectSimple(): ObjectSimple {
  return {};
}

export const ObjectSimple = {
  encode(_: ObjectSimple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectSimple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectSimple();
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

  fromJSON(_: any): ObjectSimple {
    return {};
  },

  toJSON(_: ObjectSimple): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectSimple>, I>>(base?: I): ObjectSimple {
    return ObjectSimple.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectSimple>, I>>(_: I): ObjectSimple {
    const message = createBaseObjectSimple();
    return message;
  },
};

function createBaseObjectSimple_IBox3D(): ObjectSimple_IBox3D {
  return { scale: undefined, position: undefined, rotate: undefined, pivot: undefined };
}

export const ObjectSimple_IBox3D = {
  encode(message: ObjectSimple_IBox3D, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scale !== undefined) {
      ObjectSimple_IPoint3D.encode(message.scale, writer.uint32(10).fork()).ldelim();
    }
    if (message.position !== undefined) {
      ObjectSimple_IPoint3D.encode(message.position, writer.uint32(18).fork()).ldelim();
    }
    if (message.rotate !== undefined) {
      ObjectSimple_IPoint3D.encode(message.rotate, writer.uint32(26).fork()).ldelim();
    }
    if (message.pivot !== undefined) {
      ObjectSimple_IPoint3D.encode(message.pivot, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectSimple_IBox3D {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectSimple_IBox3D();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scale = ObjectSimple_IPoint3D.decode(reader, reader.uint32());
          break;
        case 2:
          message.position = ObjectSimple_IPoint3D.decode(reader, reader.uint32());
          break;
        case 3:
          message.rotate = ObjectSimple_IPoint3D.decode(reader, reader.uint32());
          break;
        case 4:
          message.pivot = ObjectSimple_IPoint3D.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectSimple_IBox3D {
    return {
      scale: isSet(object.scale) ? ObjectSimple_IPoint3D.fromJSON(object.scale) : undefined,
      position: isSet(object.position) ? ObjectSimple_IPoint3D.fromJSON(object.position) : undefined,
      rotate: isSet(object.rotate) ? ObjectSimple_IPoint3D.fromJSON(object.rotate) : undefined,
      pivot: isSet(object.pivot) ? ObjectSimple_IPoint3D.fromJSON(object.pivot) : undefined,
    };
  },

  toJSON(message: ObjectSimple_IBox3D): unknown {
    const obj: any = {};
    message.scale !== undefined &&
      (obj.scale = message.scale ? ObjectSimple_IPoint3D.toJSON(message.scale) : undefined);
    message.position !== undefined &&
      (obj.position = message.position ? ObjectSimple_IPoint3D.toJSON(message.position) : undefined);
    message.rotate !== undefined &&
      (obj.rotate = message.rotate ? ObjectSimple_IPoint3D.toJSON(message.rotate) : undefined);
    message.pivot !== undefined &&
      (obj.pivot = message.pivot ? ObjectSimple_IPoint3D.toJSON(message.pivot) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectSimple_IBox3D>, I>>(base?: I): ObjectSimple_IBox3D {
    return ObjectSimple_IBox3D.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectSimple_IBox3D>, I>>(object: I): ObjectSimple_IBox3D {
    const message = createBaseObjectSimple_IBox3D();
    message.scale = (object.scale !== undefined && object.scale !== null)
      ? ObjectSimple_IPoint3D.fromPartial(object.scale)
      : undefined;
    message.position = (object.position !== undefined && object.position !== null)
      ? ObjectSimple_IPoint3D.fromPartial(object.position)
      : undefined;
    message.rotate = (object.rotate !== undefined && object.rotate !== null)
      ? ObjectSimple_IPoint3D.fromPartial(object.rotate)
      : undefined;
    message.pivot = (object.pivot !== undefined && object.pivot !== null)
      ? ObjectSimple_IPoint3D.fromPartial(object.pivot)
      : undefined;
    return message;
  },
};

function createBaseObjectSimple_IPoint3D(): ObjectSimple_IPoint3D {
  return { x: 0, y: 0, z: 0 };
}

export const ObjectSimple_IPoint3D = {
  encode(message: ObjectSimple_IPoint3D, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(9).double(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(17).double(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(25).double(message.z);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectSimple_IPoint3D {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectSimple_IPoint3D();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.double();
          break;
        case 2:
          message.y = reader.double();
          break;
        case 3:
          message.z = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectSimple_IPoint3D {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
    };
  },

  toJSON(message: ObjectSimple_IPoint3D): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectSimple_IPoint3D>, I>>(base?: I): ObjectSimple_IPoint3D {
    return ObjectSimple_IPoint3D.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectSimple_IPoint3D>, I>>(object: I): ObjectSimple_IPoint3D {
    const message = createBaseObjectSimple_IPoint3D();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
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
