/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ObjectUnionImplicit {
}

export interface ObjectUnionImplicit_IPoint {
  x: number;
  y: number;
  slope?: number | undefined;
}

export interface ObjectUnionImplicit_ILine {
  p1: ObjectUnionImplicit_IPoint | undefined;
  p2: ObjectUnionImplicit_IPoint | undefined;
  width?: number | undefined;
  distance?: number | undefined;
}

export interface ObjectUnionImplicit_ITriangle {
  p1: ObjectUnionImplicit_IPoint | undefined;
  p2: ObjectUnionImplicit_IPoint | undefined;
  p3: ObjectUnionImplicit_IPoint | undefined;
  width?: number | undefined;
  height?: number | undefined;
  area?: number | undefined;
}

export interface ObjectUnionImplicit_IRectangle {
  p1: ObjectUnionImplicit_IPoint | undefined;
  p2: ObjectUnionImplicit_IPoint | undefined;
  p3: ObjectUnionImplicit_IPoint | undefined;
  p4: ObjectUnionImplicit_IPoint | undefined;
  width?: number | undefined;
  height?: number | undefined;
  area?: number | undefined;
}

export interface ObjectUnionImplicit_IPolyline {
  points: ObjectUnionImplicit_IPoint[];
  length?: number | undefined;
}

export interface ObjectUnionImplicit_IPolygon {
  outer: ObjectUnionImplicit_IPolyline | undefined;
  inner: ObjectUnionImplicit_IPolyline[];
  area?: number | undefined;
}

export interface ObjectUnionImplicit_ICircle {
  centroid?: ObjectUnionImplicit_IPoint | undefined;
  radius: number;
  area?: number | undefined;
}

export interface Main {
  value:
    Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit_ITriangleRpGt[];
}

export interface Array {
}

export interface Array_ElementLtLpObjectUnionImplicit {
}

export interface Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit {
}

export interface Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit {
}

export interface Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit {
}

export interface Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit {
}

export interface Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit {
}

export interface Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit {
}

export interface Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit_ITriangleRpGt {
  valueO0?: ObjectUnionImplicit_IPoint | undefined;
  valueO1?: ObjectUnionImplicit_ILine | undefined;
  valueO2?: ObjectUnionImplicit_ITriangle | undefined;
  valueO3?: ObjectUnionImplicit_IRectangle | undefined;
  valueO4?: ObjectUnionImplicit_IPolyline | undefined;
  valueO5?: ObjectUnionImplicit_IPolygon | undefined;
  valueO6?: ObjectUnionImplicit_ICircle | undefined;
}

function createBaseObjectUnionImplicit(): ObjectUnionImplicit {
  return {};
}

export const ObjectUnionImplicit = {
  encode(_: ObjectUnionImplicit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionImplicit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionImplicit();
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

  fromJSON(_: any): ObjectUnionImplicit {
    return {};
  },

  toJSON(_: ObjectUnionImplicit): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionImplicit>, I>>(base?: I): ObjectUnionImplicit {
    return ObjectUnionImplicit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionImplicit>, I>>(_: I): ObjectUnionImplicit {
    const message = createBaseObjectUnionImplicit();
    return message;
  },
};

function createBaseObjectUnionImplicit_IPoint(): ObjectUnionImplicit_IPoint {
  return { x: 0, y: 0, slope: undefined };
}

export const ObjectUnionImplicit_IPoint = {
  encode(message: ObjectUnionImplicit_IPoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(9).double(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(17).double(message.y);
    }
    if (message.slope !== undefined) {
      writer.uint32(25).double(message.slope);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionImplicit_IPoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionImplicit_IPoint();
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
          message.slope = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionImplicit_IPoint {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      slope: isSet(object.slope) ? Number(object.slope) : undefined,
    };
  },

  toJSON(message: ObjectUnionImplicit_IPoint): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.slope !== undefined && (obj.slope = message.slope);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionImplicit_IPoint>, I>>(base?: I): ObjectUnionImplicit_IPoint {
    return ObjectUnionImplicit_IPoint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionImplicit_IPoint>, I>>(object: I): ObjectUnionImplicit_IPoint {
    const message = createBaseObjectUnionImplicit_IPoint();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.slope = object.slope ?? undefined;
    return message;
  },
};

function createBaseObjectUnionImplicit_ILine(): ObjectUnionImplicit_ILine {
  return { p1: undefined, p2: undefined, width: undefined, distance: undefined };
}

export const ObjectUnionImplicit_ILine = {
  encode(message: ObjectUnionImplicit_ILine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.p1 !== undefined) {
      ObjectUnionImplicit_IPoint.encode(message.p1, writer.uint32(10).fork()).ldelim();
    }
    if (message.p2 !== undefined) {
      ObjectUnionImplicit_IPoint.encode(message.p2, writer.uint32(18).fork()).ldelim();
    }
    if (message.width !== undefined) {
      writer.uint32(25).double(message.width);
    }
    if (message.distance !== undefined) {
      writer.uint32(33).double(message.distance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionImplicit_ILine {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionImplicit_ILine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p1 = ObjectUnionImplicit_IPoint.decode(reader, reader.uint32());
          break;
        case 2:
          message.p2 = ObjectUnionImplicit_IPoint.decode(reader, reader.uint32());
          break;
        case 3:
          message.width = reader.double();
          break;
        case 4:
          message.distance = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionImplicit_ILine {
    return {
      p1: isSet(object.p1) ? ObjectUnionImplicit_IPoint.fromJSON(object.p1) : undefined,
      p2: isSet(object.p2) ? ObjectUnionImplicit_IPoint.fromJSON(object.p2) : undefined,
      width: isSet(object.width) ? Number(object.width) : undefined,
      distance: isSet(object.distance) ? Number(object.distance) : undefined,
    };
  },

  toJSON(message: ObjectUnionImplicit_ILine): unknown {
    const obj: any = {};
    message.p1 !== undefined && (obj.p1 = message.p1 ? ObjectUnionImplicit_IPoint.toJSON(message.p1) : undefined);
    message.p2 !== undefined && (obj.p2 = message.p2 ? ObjectUnionImplicit_IPoint.toJSON(message.p2) : undefined);
    message.width !== undefined && (obj.width = message.width);
    message.distance !== undefined && (obj.distance = message.distance);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionImplicit_ILine>, I>>(base?: I): ObjectUnionImplicit_ILine {
    return ObjectUnionImplicit_ILine.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionImplicit_ILine>, I>>(object: I): ObjectUnionImplicit_ILine {
    const message = createBaseObjectUnionImplicit_ILine();
    message.p1 = (object.p1 !== undefined && object.p1 !== null)
      ? ObjectUnionImplicit_IPoint.fromPartial(object.p1)
      : undefined;
    message.p2 = (object.p2 !== undefined && object.p2 !== null)
      ? ObjectUnionImplicit_IPoint.fromPartial(object.p2)
      : undefined;
    message.width = object.width ?? undefined;
    message.distance = object.distance ?? undefined;
    return message;
  },
};

function createBaseObjectUnionImplicit_ITriangle(): ObjectUnionImplicit_ITriangle {
  return { p1: undefined, p2: undefined, p3: undefined, width: undefined, height: undefined, area: undefined };
}

export const ObjectUnionImplicit_ITriangle = {
  encode(message: ObjectUnionImplicit_ITriangle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.p1 !== undefined) {
      ObjectUnionImplicit_IPoint.encode(message.p1, writer.uint32(10).fork()).ldelim();
    }
    if (message.p2 !== undefined) {
      ObjectUnionImplicit_IPoint.encode(message.p2, writer.uint32(18).fork()).ldelim();
    }
    if (message.p3 !== undefined) {
      ObjectUnionImplicit_IPoint.encode(message.p3, writer.uint32(26).fork()).ldelim();
    }
    if (message.width !== undefined) {
      writer.uint32(33).double(message.width);
    }
    if (message.height !== undefined) {
      writer.uint32(41).double(message.height);
    }
    if (message.area !== undefined) {
      writer.uint32(49).double(message.area);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionImplicit_ITriangle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionImplicit_ITriangle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p1 = ObjectUnionImplicit_IPoint.decode(reader, reader.uint32());
          break;
        case 2:
          message.p2 = ObjectUnionImplicit_IPoint.decode(reader, reader.uint32());
          break;
        case 3:
          message.p3 = ObjectUnionImplicit_IPoint.decode(reader, reader.uint32());
          break;
        case 4:
          message.width = reader.double();
          break;
        case 5:
          message.height = reader.double();
          break;
        case 6:
          message.area = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionImplicit_ITriangle {
    return {
      p1: isSet(object.p1) ? ObjectUnionImplicit_IPoint.fromJSON(object.p1) : undefined,
      p2: isSet(object.p2) ? ObjectUnionImplicit_IPoint.fromJSON(object.p2) : undefined,
      p3: isSet(object.p3) ? ObjectUnionImplicit_IPoint.fromJSON(object.p3) : undefined,
      width: isSet(object.width) ? Number(object.width) : undefined,
      height: isSet(object.height) ? Number(object.height) : undefined,
      area: isSet(object.area) ? Number(object.area) : undefined,
    };
  },

  toJSON(message: ObjectUnionImplicit_ITriangle): unknown {
    const obj: any = {};
    message.p1 !== undefined && (obj.p1 = message.p1 ? ObjectUnionImplicit_IPoint.toJSON(message.p1) : undefined);
    message.p2 !== undefined && (obj.p2 = message.p2 ? ObjectUnionImplicit_IPoint.toJSON(message.p2) : undefined);
    message.p3 !== undefined && (obj.p3 = message.p3 ? ObjectUnionImplicit_IPoint.toJSON(message.p3) : undefined);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.area !== undefined && (obj.area = message.area);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionImplicit_ITriangle>, I>>(base?: I): ObjectUnionImplicit_ITriangle {
    return ObjectUnionImplicit_ITriangle.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionImplicit_ITriangle>, I>>(
    object: I,
  ): ObjectUnionImplicit_ITriangle {
    const message = createBaseObjectUnionImplicit_ITriangle();
    message.p1 = (object.p1 !== undefined && object.p1 !== null)
      ? ObjectUnionImplicit_IPoint.fromPartial(object.p1)
      : undefined;
    message.p2 = (object.p2 !== undefined && object.p2 !== null)
      ? ObjectUnionImplicit_IPoint.fromPartial(object.p2)
      : undefined;
    message.p3 = (object.p3 !== undefined && object.p3 !== null)
      ? ObjectUnionImplicit_IPoint.fromPartial(object.p3)
      : undefined;
    message.width = object.width ?? undefined;
    message.height = object.height ?? undefined;
    message.area = object.area ?? undefined;
    return message;
  },
};

function createBaseObjectUnionImplicit_IRectangle(): ObjectUnionImplicit_IRectangle {
  return {
    p1: undefined,
    p2: undefined,
    p3: undefined,
    p4: undefined,
    width: undefined,
    height: undefined,
    area: undefined,
  };
}

export const ObjectUnionImplicit_IRectangle = {
  encode(message: ObjectUnionImplicit_IRectangle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.p1 !== undefined) {
      ObjectUnionImplicit_IPoint.encode(message.p1, writer.uint32(10).fork()).ldelim();
    }
    if (message.p2 !== undefined) {
      ObjectUnionImplicit_IPoint.encode(message.p2, writer.uint32(18).fork()).ldelim();
    }
    if (message.p3 !== undefined) {
      ObjectUnionImplicit_IPoint.encode(message.p3, writer.uint32(26).fork()).ldelim();
    }
    if (message.p4 !== undefined) {
      ObjectUnionImplicit_IPoint.encode(message.p4, writer.uint32(34).fork()).ldelim();
    }
    if (message.width !== undefined) {
      writer.uint32(41).double(message.width);
    }
    if (message.height !== undefined) {
      writer.uint32(49).double(message.height);
    }
    if (message.area !== undefined) {
      writer.uint32(57).double(message.area);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionImplicit_IRectangle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionImplicit_IRectangle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p1 = ObjectUnionImplicit_IPoint.decode(reader, reader.uint32());
          break;
        case 2:
          message.p2 = ObjectUnionImplicit_IPoint.decode(reader, reader.uint32());
          break;
        case 3:
          message.p3 = ObjectUnionImplicit_IPoint.decode(reader, reader.uint32());
          break;
        case 4:
          message.p4 = ObjectUnionImplicit_IPoint.decode(reader, reader.uint32());
          break;
        case 5:
          message.width = reader.double();
          break;
        case 6:
          message.height = reader.double();
          break;
        case 7:
          message.area = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionImplicit_IRectangle {
    return {
      p1: isSet(object.p1) ? ObjectUnionImplicit_IPoint.fromJSON(object.p1) : undefined,
      p2: isSet(object.p2) ? ObjectUnionImplicit_IPoint.fromJSON(object.p2) : undefined,
      p3: isSet(object.p3) ? ObjectUnionImplicit_IPoint.fromJSON(object.p3) : undefined,
      p4: isSet(object.p4) ? ObjectUnionImplicit_IPoint.fromJSON(object.p4) : undefined,
      width: isSet(object.width) ? Number(object.width) : undefined,
      height: isSet(object.height) ? Number(object.height) : undefined,
      area: isSet(object.area) ? Number(object.area) : undefined,
    };
  },

  toJSON(message: ObjectUnionImplicit_IRectangle): unknown {
    const obj: any = {};
    message.p1 !== undefined && (obj.p1 = message.p1 ? ObjectUnionImplicit_IPoint.toJSON(message.p1) : undefined);
    message.p2 !== undefined && (obj.p2 = message.p2 ? ObjectUnionImplicit_IPoint.toJSON(message.p2) : undefined);
    message.p3 !== undefined && (obj.p3 = message.p3 ? ObjectUnionImplicit_IPoint.toJSON(message.p3) : undefined);
    message.p4 !== undefined && (obj.p4 = message.p4 ? ObjectUnionImplicit_IPoint.toJSON(message.p4) : undefined);
    message.width !== undefined && (obj.width = message.width);
    message.height !== undefined && (obj.height = message.height);
    message.area !== undefined && (obj.area = message.area);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionImplicit_IRectangle>, I>>(base?: I): ObjectUnionImplicit_IRectangle {
    return ObjectUnionImplicit_IRectangle.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionImplicit_IRectangle>, I>>(
    object: I,
  ): ObjectUnionImplicit_IRectangle {
    const message = createBaseObjectUnionImplicit_IRectangle();
    message.p1 = (object.p1 !== undefined && object.p1 !== null)
      ? ObjectUnionImplicit_IPoint.fromPartial(object.p1)
      : undefined;
    message.p2 = (object.p2 !== undefined && object.p2 !== null)
      ? ObjectUnionImplicit_IPoint.fromPartial(object.p2)
      : undefined;
    message.p3 = (object.p3 !== undefined && object.p3 !== null)
      ? ObjectUnionImplicit_IPoint.fromPartial(object.p3)
      : undefined;
    message.p4 = (object.p4 !== undefined && object.p4 !== null)
      ? ObjectUnionImplicit_IPoint.fromPartial(object.p4)
      : undefined;
    message.width = object.width ?? undefined;
    message.height = object.height ?? undefined;
    message.area = object.area ?? undefined;
    return message;
  },
};

function createBaseObjectUnionImplicit_IPolyline(): ObjectUnionImplicit_IPolyline {
  return { points: [], length: undefined };
}

export const ObjectUnionImplicit_IPolyline = {
  encode(message: ObjectUnionImplicit_IPolyline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.points) {
      ObjectUnionImplicit_IPoint.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.length !== undefined) {
      writer.uint32(17).double(message.length);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionImplicit_IPolyline {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionImplicit_IPolyline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.points.push(ObjectUnionImplicit_IPoint.decode(reader, reader.uint32()));
          break;
        case 2:
          message.length = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionImplicit_IPolyline {
    return {
      points: Array.isArray(object?.points)
        ? object.points.map((e: any) => ObjectUnionImplicit_IPoint.fromJSON(e))
        : [],
      length: isSet(object.length) ? Number(object.length) : undefined,
    };
  },

  toJSON(message: ObjectUnionImplicit_IPolyline): unknown {
    const obj: any = {};
    if (message.points) {
      obj.points = message.points.map((e) => e ? ObjectUnionImplicit_IPoint.toJSON(e) : undefined);
    } else {
      obj.points = [];
    }
    message.length !== undefined && (obj.length = message.length);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionImplicit_IPolyline>, I>>(base?: I): ObjectUnionImplicit_IPolyline {
    return ObjectUnionImplicit_IPolyline.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionImplicit_IPolyline>, I>>(
    object: I,
  ): ObjectUnionImplicit_IPolyline {
    const message = createBaseObjectUnionImplicit_IPolyline();
    message.points = object.points?.map((e) => ObjectUnionImplicit_IPoint.fromPartial(e)) || [];
    message.length = object.length ?? undefined;
    return message;
  },
};

function createBaseObjectUnionImplicit_IPolygon(): ObjectUnionImplicit_IPolygon {
  return { outer: undefined, inner: [], area: undefined };
}

export const ObjectUnionImplicit_IPolygon = {
  encode(message: ObjectUnionImplicit_IPolygon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.outer !== undefined) {
      ObjectUnionImplicit_IPolyline.encode(message.outer, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.inner) {
      ObjectUnionImplicit_IPolyline.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.area !== undefined) {
      writer.uint32(25).double(message.area);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionImplicit_IPolygon {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionImplicit_IPolygon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.outer = ObjectUnionImplicit_IPolyline.decode(reader, reader.uint32());
          break;
        case 2:
          message.inner.push(ObjectUnionImplicit_IPolyline.decode(reader, reader.uint32()));
          break;
        case 3:
          message.area = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionImplicit_IPolygon {
    return {
      outer: isSet(object.outer) ? ObjectUnionImplicit_IPolyline.fromJSON(object.outer) : undefined,
      inner: Array.isArray(object?.inner)
        ? object.inner.map((e: any) => ObjectUnionImplicit_IPolyline.fromJSON(e))
        : [],
      area: isSet(object.area) ? Number(object.area) : undefined,
    };
  },

  toJSON(message: ObjectUnionImplicit_IPolygon): unknown {
    const obj: any = {};
    message.outer !== undefined &&
      (obj.outer = message.outer ? ObjectUnionImplicit_IPolyline.toJSON(message.outer) : undefined);
    if (message.inner) {
      obj.inner = message.inner.map((e) => e ? ObjectUnionImplicit_IPolyline.toJSON(e) : undefined);
    } else {
      obj.inner = [];
    }
    message.area !== undefined && (obj.area = message.area);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionImplicit_IPolygon>, I>>(base?: I): ObjectUnionImplicit_IPolygon {
    return ObjectUnionImplicit_IPolygon.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionImplicit_IPolygon>, I>>(object: I): ObjectUnionImplicit_IPolygon {
    const message = createBaseObjectUnionImplicit_IPolygon();
    message.outer = (object.outer !== undefined && object.outer !== null)
      ? ObjectUnionImplicit_IPolyline.fromPartial(object.outer)
      : undefined;
    message.inner = object.inner?.map((e) => ObjectUnionImplicit_IPolyline.fromPartial(e)) || [];
    message.area = object.area ?? undefined;
    return message;
  },
};

function createBaseObjectUnionImplicit_ICircle(): ObjectUnionImplicit_ICircle {
  return { centroid: undefined, radius: 0, area: undefined };
}

export const ObjectUnionImplicit_ICircle = {
  encode(message: ObjectUnionImplicit_ICircle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.centroid !== undefined) {
      ObjectUnionImplicit_IPoint.encode(message.centroid, writer.uint32(10).fork()).ldelim();
    }
    if (message.radius !== 0) {
      writer.uint32(17).double(message.radius);
    }
    if (message.area !== undefined) {
      writer.uint32(25).double(message.area);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionImplicit_ICircle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionImplicit_ICircle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.centroid = ObjectUnionImplicit_IPoint.decode(reader, reader.uint32());
          break;
        case 2:
          message.radius = reader.double();
          break;
        case 3:
          message.area = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionImplicit_ICircle {
    return {
      centroid: isSet(object.centroid) ? ObjectUnionImplicit_IPoint.fromJSON(object.centroid) : undefined,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
      area: isSet(object.area) ? Number(object.area) : undefined,
    };
  },

  toJSON(message: ObjectUnionImplicit_ICircle): unknown {
    const obj: any = {};
    message.centroid !== undefined &&
      (obj.centroid = message.centroid ? ObjectUnionImplicit_IPoint.toJSON(message.centroid) : undefined);
    message.radius !== undefined && (obj.radius = message.radius);
    message.area !== undefined && (obj.area = message.area);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionImplicit_ICircle>, I>>(base?: I): ObjectUnionImplicit_ICircle {
    return ObjectUnionImplicit_ICircle.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionImplicit_ICircle>, I>>(object: I): ObjectUnionImplicit_ICircle {
    const message = createBaseObjectUnionImplicit_ICircle();
    message.centroid = (object.centroid !== undefined && object.centroid !== null)
      ? ObjectUnionImplicit_IPoint.fromPartial(object.centroid)
      : undefined;
    message.radius = object.radius ?? 0;
    message.area = object.area ?? undefined;
    return message;
  },
};

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit_ITriangleRpGt
        .encode(v!, writer.uint32(10).fork()).ldelim();
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
            Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit_ITriangleRpGt
              .decode(reader, reader.uint32()),
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
          Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit_ITriangleRpGt
            .fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e
        ? Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit_ITriangleRpGt
          .toJSON(e)
        : undefined
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
        Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit_ITriangleRpGt
          .fromPartial(e)
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

function createBaseArray_ElementLtLpObjectUnionImplicit(): Array_ElementLtLpObjectUnionImplicit {
  return {};
}

export const Array_ElementLtLpObjectUnionImplicit = {
  encode(_: Array_ElementLtLpObjectUnionImplicit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array_ElementLtLpObjectUnionImplicit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_ElementLtLpObjectUnionImplicit();
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

  fromJSON(_: any): Array_ElementLtLpObjectUnionImplicit {
    return {};
  },

  toJSON(_: Array_ElementLtLpObjectUnionImplicit): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_ElementLtLpObjectUnionImplicit>, I>>(
    base?: I,
  ): Array_ElementLtLpObjectUnionImplicit {
    return Array_ElementLtLpObjectUnionImplicit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_ElementLtLpObjectUnionImplicit>, I>>(
    _: I,
  ): Array_ElementLtLpObjectUnionImplicit {
    const message = createBaseArray_ElementLtLpObjectUnionImplicit();
    return message;
  },
};

function createBaseArray_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit(): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit {
  return {};
}

export const Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit = {
  encode(
    _: Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit();
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

  fromJSON(_: any): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit {
    return {};
  },

  toJSON(_: Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit>, I>>(
    base?: I,
  ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit {
    return Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit>, I>,
  >(_: I): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit {
    const message = createBaseArray_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit();
    return message;
  },
};

function createBaseArray_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit(): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit {
  return {};
}

export const Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit =
  {
    encode(
      _: Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit();
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

    fromJSON(
      _: any,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit {
      return Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit {
      const message =
        createBaseArray_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit(): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit {
  return {};
}

export const Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit =
  {
    encode(
      _: Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit();
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

    fromJSON(
      _: any,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit {
      return Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit {
      const message =
        createBaseArray_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit(): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit {
  return {};
}

export const Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit =
  {
    encode(
      _: Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit();
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

    fromJSON(
      _: any,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit {
      return Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit {
      const message =
        createBaseArray_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit(): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit {
  return {};
}

export const Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit =
  {
    encode(
      _: Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit();
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

    fromJSON(
      _: any,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit {
      return Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit {
      const message =
        createBaseArray_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit(): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit {
  return {};
}

export const Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit =
  {
    encode(
      _: Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit();
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

    fromJSON(
      _: any,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit {
      return Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit {
      const message =
        createBaseArray_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit_ITriangleRpGt(): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit_ITriangleRpGt {
  return {
    valueO0: undefined,
    valueO1: undefined,
    valueO2: undefined,
    valueO3: undefined,
    valueO4: undefined,
    valueO5: undefined,
    valueO6: undefined,
  };
}

export const Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit_ITriangleRpGt =
  {
    encode(
      message:
        Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit_ITriangleRpGt,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.valueO0 !== undefined) {
        ObjectUnionImplicit_IPoint.encode(message.valueO0, writer.uint32(10).fork()).ldelim();
      }
      if (message.valueO1 !== undefined) {
        ObjectUnionImplicit_ILine.encode(message.valueO1, writer.uint32(18).fork()).ldelim();
      }
      if (message.valueO2 !== undefined) {
        ObjectUnionImplicit_ITriangle.encode(message.valueO2, writer.uint32(26).fork()).ldelim();
      }
      if (message.valueO3 !== undefined) {
        ObjectUnionImplicit_IRectangle.encode(message.valueO3, writer.uint32(34).fork()).ldelim();
      }
      if (message.valueO4 !== undefined) {
        ObjectUnionImplicit_IPolyline.encode(message.valueO4, writer.uint32(42).fork()).ldelim();
      }
      if (message.valueO5 !== undefined) {
        ObjectUnionImplicit_IPolygon.encode(message.valueO5, writer.uint32(50).fork()).ldelim();
      }
      if (message.valueO6 !== undefined) {
        ObjectUnionImplicit_ICircle.encode(message.valueO6, writer.uint32(58).fork()).ldelim();
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit_ITriangleRpGt {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit_ITriangleRpGt();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.valueO0 = ObjectUnionImplicit_IPoint.decode(reader, reader.uint32());
            break;
          case 2:
            message.valueO1 = ObjectUnionImplicit_ILine.decode(reader, reader.uint32());
            break;
          case 3:
            message.valueO2 = ObjectUnionImplicit_ITriangle.decode(reader, reader.uint32());
            break;
          case 4:
            message.valueO3 = ObjectUnionImplicit_IRectangle.decode(reader, reader.uint32());
            break;
          case 5:
            message.valueO4 = ObjectUnionImplicit_IPolyline.decode(reader, reader.uint32());
            break;
          case 6:
            message.valueO5 = ObjectUnionImplicit_IPolygon.decode(reader, reader.uint32());
            break;
          case 7:
            message.valueO6 = ObjectUnionImplicit_ICircle.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    },

    fromJSON(
      object: any,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit_ITriangleRpGt {
      return {
        valueO0: isSet(object.valueO0) ? ObjectUnionImplicit_IPoint.fromJSON(object.valueO0) : undefined,
        valueO1: isSet(object.valueO1) ? ObjectUnionImplicit_ILine.fromJSON(object.valueO1) : undefined,
        valueO2: isSet(object.valueO2) ? ObjectUnionImplicit_ITriangle.fromJSON(object.valueO2) : undefined,
        valueO3: isSet(object.valueO3) ? ObjectUnionImplicit_IRectangle.fromJSON(object.valueO3) : undefined,
        valueO4: isSet(object.valueO4) ? ObjectUnionImplicit_IPolyline.fromJSON(object.valueO4) : undefined,
        valueO5: isSet(object.valueO5) ? ObjectUnionImplicit_IPolygon.fromJSON(object.valueO5) : undefined,
        valueO6: isSet(object.valueO6) ? ObjectUnionImplicit_ICircle.fromJSON(object.valueO6) : undefined,
      };
    },

    toJSON(
      message:
        Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit_ITriangleRpGt,
    ): unknown {
      const obj: any = {};
      message.valueO0 !== undefined &&
        (obj.valueO0 = message.valueO0 ? ObjectUnionImplicit_IPoint.toJSON(message.valueO0) : undefined);
      message.valueO1 !== undefined &&
        (obj.valueO1 = message.valueO1 ? ObjectUnionImplicit_ILine.toJSON(message.valueO1) : undefined);
      message.valueO2 !== undefined &&
        (obj.valueO2 = message.valueO2 ? ObjectUnionImplicit_ITriangle.toJSON(message.valueO2) : undefined);
      message.valueO3 !== undefined &&
        (obj.valueO3 = message.valueO3 ? ObjectUnionImplicit_IRectangle.toJSON(message.valueO3) : undefined);
      message.valueO4 !== undefined &&
        (obj.valueO4 = message.valueO4 ? ObjectUnionImplicit_IPolyline.toJSON(message.valueO4) : undefined);
      message.valueO5 !== undefined &&
        (obj.valueO5 = message.valueO5 ? ObjectUnionImplicit_IPolygon.toJSON(message.valueO5) : undefined);
      message.valueO6 !== undefined &&
        (obj.valueO6 = message.valueO6 ? ObjectUnionImplicit_ICircle.toJSON(message.valueO6) : undefined);
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit_ITriangleRpGt
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit_ITriangleRpGt {
      return Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit_ITriangleRpGt
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit_ITriangleRpGt
        >,
        I
      >,
    >(
      object: I,
    ): Array_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit_ITriangleRpGt {
      const message =
        createBaseArray_ElementLtLpObjectUnionImplicit_ICircleSpaceOrSpaceObjectUnionImplicit_ILineSpaceOrSpaceObjectUnionImplicit_IPointSpaceOrSpaceObjectUnionImplicit_IPolygonSpaceOrSpaceObjectUnionImplicit_IPolylineSpaceOrSpaceObjectUnionImplicit_IRectangleSpaceOrSpaceObjectUnionImplicit_ITriangleRpGt();
      message.valueO0 = (object.valueO0 !== undefined && object.valueO0 !== null)
        ? ObjectUnionImplicit_IPoint.fromPartial(object.valueO0)
        : undefined;
      message.valueO1 = (object.valueO1 !== undefined && object.valueO1 !== null)
        ? ObjectUnionImplicit_ILine.fromPartial(object.valueO1)
        : undefined;
      message.valueO2 = (object.valueO2 !== undefined && object.valueO2 !== null)
        ? ObjectUnionImplicit_ITriangle.fromPartial(object.valueO2)
        : undefined;
      message.valueO3 = (object.valueO3 !== undefined && object.valueO3 !== null)
        ? ObjectUnionImplicit_IRectangle.fromPartial(object.valueO3)
        : undefined;
      message.valueO4 = (object.valueO4 !== undefined && object.valueO4 !== null)
        ? ObjectUnionImplicit_IPolyline.fromPartial(object.valueO4)
        : undefined;
      message.valueO5 = (object.valueO5 !== undefined && object.valueO5 !== null)
        ? ObjectUnionImplicit_IPolygon.fromPartial(object.valueO5)
        : undefined;
      message.valueO6 = (object.valueO6 !== undefined && object.valueO6 !== null)
        ? ObjectUnionImplicit_ICircle.fromPartial(object.valueO6)
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
