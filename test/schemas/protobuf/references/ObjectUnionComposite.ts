/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ObjectUnionComposite {
}

export interface ObjectUnionComposite_IPoint {
  x: number;
  y: number;
}

export interface ObjectUnionComposite_ILine {
  p1: ObjectUnionComposite_IPoint | undefined;
  p2: ObjectUnionComposite_IPoint | undefined;
}

export interface ObjectUnionComposite_ITriangle {
  p1: ObjectUnionComposite_IPoint | undefined;
  p2: ObjectUnionComposite_IPoint | undefined;
  p3: ObjectUnionComposite_IPoint | undefined;
}

export interface ObjectUnionComposite_IRectangle {
  p1: ObjectUnionComposite_IPoint | undefined;
  p2: ObjectUnionComposite_IPoint | undefined;
  p3: ObjectUnionComposite_IPoint | undefined;
  p4: ObjectUnionComposite_IPoint | undefined;
}

export interface ObjectUnionComposite_IPolyline {
  points: ObjectUnionComposite_IPoint[];
}

export interface ObjectUnionComposite_IPolygon {
  outer: ObjectUnionComposite_IPolyline | undefined;
  inner: ObjectUnionComposite_IPolyline[];
}

export interface ObjectUnionComposite_IPointedShape {
  outer: ObjectUnionComposite_IPoint[];
  inner: ObjectUnionComposite_IPoint | undefined;
}

export interface ObjectUnionComposite_ICircle {
  centroid: ObjectUnionComposite_IPoint | undefined;
  radius: number;
}

export interface Main {
  value:
    Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite_ITriangleRpGt[];
}

export interface Array {
}

export interface Array_ElementLtLpObjectUnionComposite {
}

export interface Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite {
}

export interface Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite {
}

export interface Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite {
}

export interface Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite {
}

export interface Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite {
}

export interface Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite {
}

export interface Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite {
}

export interface Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite_ITriangleRpGt {
  valueO0?: ObjectUnionComposite_IPoint | undefined;
  valueO1?: ObjectUnionComposite_ILine | undefined;
  valueO2?: ObjectUnionComposite_ITriangle | undefined;
  valueO3?: ObjectUnionComposite_IRectangle | undefined;
  valueO4?: ObjectUnionComposite_IPolyline | undefined;
  valueO5?: ObjectUnionComposite_IPolygon | undefined;
  valueO6?: ObjectUnionComposite_IPointedShape | undefined;
  valueO7?: ObjectUnionComposite_ICircle | undefined;
}

function createBaseObjectUnionComposite(): ObjectUnionComposite {
  return {};
}

export const ObjectUnionComposite = {
  encode(_: ObjectUnionComposite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionComposite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionComposite();
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

  fromJSON(_: any): ObjectUnionComposite {
    return {};
  },

  toJSON(_: ObjectUnionComposite): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionComposite>, I>>(base?: I): ObjectUnionComposite {
    return ObjectUnionComposite.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionComposite>, I>>(_: I): ObjectUnionComposite {
    const message = createBaseObjectUnionComposite();
    return message;
  },
};

function createBaseObjectUnionComposite_IPoint(): ObjectUnionComposite_IPoint {
  return { x: 0, y: 0 };
}

export const ObjectUnionComposite_IPoint = {
  encode(message: ObjectUnionComposite_IPoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(9).double(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(17).double(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionComposite_IPoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionComposite_IPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.double();
          break;
        case 2:
          message.y = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionComposite_IPoint {
    return { x: isSet(object.x) ? Number(object.x) : 0, y: isSet(object.y) ? Number(object.y) : 0 };
  },

  toJSON(message: ObjectUnionComposite_IPoint): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionComposite_IPoint>, I>>(base?: I): ObjectUnionComposite_IPoint {
    return ObjectUnionComposite_IPoint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionComposite_IPoint>, I>>(object: I): ObjectUnionComposite_IPoint {
    const message = createBaseObjectUnionComposite_IPoint();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseObjectUnionComposite_ILine(): ObjectUnionComposite_ILine {
  return { p1: undefined, p2: undefined };
}

export const ObjectUnionComposite_ILine = {
  encode(message: ObjectUnionComposite_ILine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.p1 !== undefined) {
      ObjectUnionComposite_IPoint.encode(message.p1, writer.uint32(10).fork()).ldelim();
    }
    if (message.p2 !== undefined) {
      ObjectUnionComposite_IPoint.encode(message.p2, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionComposite_ILine {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionComposite_ILine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p1 = ObjectUnionComposite_IPoint.decode(reader, reader.uint32());
          break;
        case 2:
          message.p2 = ObjectUnionComposite_IPoint.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionComposite_ILine {
    return {
      p1: isSet(object.p1) ? ObjectUnionComposite_IPoint.fromJSON(object.p1) : undefined,
      p2: isSet(object.p2) ? ObjectUnionComposite_IPoint.fromJSON(object.p2) : undefined,
    };
  },

  toJSON(message: ObjectUnionComposite_ILine): unknown {
    const obj: any = {};
    message.p1 !== undefined && (obj.p1 = message.p1 ? ObjectUnionComposite_IPoint.toJSON(message.p1) : undefined);
    message.p2 !== undefined && (obj.p2 = message.p2 ? ObjectUnionComposite_IPoint.toJSON(message.p2) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionComposite_ILine>, I>>(base?: I): ObjectUnionComposite_ILine {
    return ObjectUnionComposite_ILine.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionComposite_ILine>, I>>(object: I): ObjectUnionComposite_ILine {
    const message = createBaseObjectUnionComposite_ILine();
    message.p1 = (object.p1 !== undefined && object.p1 !== null)
      ? ObjectUnionComposite_IPoint.fromPartial(object.p1)
      : undefined;
    message.p2 = (object.p2 !== undefined && object.p2 !== null)
      ? ObjectUnionComposite_IPoint.fromPartial(object.p2)
      : undefined;
    return message;
  },
};

function createBaseObjectUnionComposite_ITriangle(): ObjectUnionComposite_ITriangle {
  return { p1: undefined, p2: undefined, p3: undefined };
}

export const ObjectUnionComposite_ITriangle = {
  encode(message: ObjectUnionComposite_ITriangle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.p1 !== undefined) {
      ObjectUnionComposite_IPoint.encode(message.p1, writer.uint32(10).fork()).ldelim();
    }
    if (message.p2 !== undefined) {
      ObjectUnionComposite_IPoint.encode(message.p2, writer.uint32(18).fork()).ldelim();
    }
    if (message.p3 !== undefined) {
      ObjectUnionComposite_IPoint.encode(message.p3, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionComposite_ITriangle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionComposite_ITriangle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p1 = ObjectUnionComposite_IPoint.decode(reader, reader.uint32());
          break;
        case 2:
          message.p2 = ObjectUnionComposite_IPoint.decode(reader, reader.uint32());
          break;
        case 3:
          message.p3 = ObjectUnionComposite_IPoint.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionComposite_ITriangle {
    return {
      p1: isSet(object.p1) ? ObjectUnionComposite_IPoint.fromJSON(object.p1) : undefined,
      p2: isSet(object.p2) ? ObjectUnionComposite_IPoint.fromJSON(object.p2) : undefined,
      p3: isSet(object.p3) ? ObjectUnionComposite_IPoint.fromJSON(object.p3) : undefined,
    };
  },

  toJSON(message: ObjectUnionComposite_ITriangle): unknown {
    const obj: any = {};
    message.p1 !== undefined && (obj.p1 = message.p1 ? ObjectUnionComposite_IPoint.toJSON(message.p1) : undefined);
    message.p2 !== undefined && (obj.p2 = message.p2 ? ObjectUnionComposite_IPoint.toJSON(message.p2) : undefined);
    message.p3 !== undefined && (obj.p3 = message.p3 ? ObjectUnionComposite_IPoint.toJSON(message.p3) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionComposite_ITriangle>, I>>(base?: I): ObjectUnionComposite_ITriangle {
    return ObjectUnionComposite_ITriangle.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionComposite_ITriangle>, I>>(
    object: I,
  ): ObjectUnionComposite_ITriangle {
    const message = createBaseObjectUnionComposite_ITriangle();
    message.p1 = (object.p1 !== undefined && object.p1 !== null)
      ? ObjectUnionComposite_IPoint.fromPartial(object.p1)
      : undefined;
    message.p2 = (object.p2 !== undefined && object.p2 !== null)
      ? ObjectUnionComposite_IPoint.fromPartial(object.p2)
      : undefined;
    message.p3 = (object.p3 !== undefined && object.p3 !== null)
      ? ObjectUnionComposite_IPoint.fromPartial(object.p3)
      : undefined;
    return message;
  },
};

function createBaseObjectUnionComposite_IRectangle(): ObjectUnionComposite_IRectangle {
  return { p1: undefined, p2: undefined, p3: undefined, p4: undefined };
}

export const ObjectUnionComposite_IRectangle = {
  encode(message: ObjectUnionComposite_IRectangle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.p1 !== undefined) {
      ObjectUnionComposite_IPoint.encode(message.p1, writer.uint32(10).fork()).ldelim();
    }
    if (message.p2 !== undefined) {
      ObjectUnionComposite_IPoint.encode(message.p2, writer.uint32(18).fork()).ldelim();
    }
    if (message.p3 !== undefined) {
      ObjectUnionComposite_IPoint.encode(message.p3, writer.uint32(26).fork()).ldelim();
    }
    if (message.p4 !== undefined) {
      ObjectUnionComposite_IPoint.encode(message.p4, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionComposite_IRectangle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionComposite_IRectangle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p1 = ObjectUnionComposite_IPoint.decode(reader, reader.uint32());
          break;
        case 2:
          message.p2 = ObjectUnionComposite_IPoint.decode(reader, reader.uint32());
          break;
        case 3:
          message.p3 = ObjectUnionComposite_IPoint.decode(reader, reader.uint32());
          break;
        case 4:
          message.p4 = ObjectUnionComposite_IPoint.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionComposite_IRectangle {
    return {
      p1: isSet(object.p1) ? ObjectUnionComposite_IPoint.fromJSON(object.p1) : undefined,
      p2: isSet(object.p2) ? ObjectUnionComposite_IPoint.fromJSON(object.p2) : undefined,
      p3: isSet(object.p3) ? ObjectUnionComposite_IPoint.fromJSON(object.p3) : undefined,
      p4: isSet(object.p4) ? ObjectUnionComposite_IPoint.fromJSON(object.p4) : undefined,
    };
  },

  toJSON(message: ObjectUnionComposite_IRectangle): unknown {
    const obj: any = {};
    message.p1 !== undefined && (obj.p1 = message.p1 ? ObjectUnionComposite_IPoint.toJSON(message.p1) : undefined);
    message.p2 !== undefined && (obj.p2 = message.p2 ? ObjectUnionComposite_IPoint.toJSON(message.p2) : undefined);
    message.p3 !== undefined && (obj.p3 = message.p3 ? ObjectUnionComposite_IPoint.toJSON(message.p3) : undefined);
    message.p4 !== undefined && (obj.p4 = message.p4 ? ObjectUnionComposite_IPoint.toJSON(message.p4) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionComposite_IRectangle>, I>>(base?: I): ObjectUnionComposite_IRectangle {
    return ObjectUnionComposite_IRectangle.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionComposite_IRectangle>, I>>(
    object: I,
  ): ObjectUnionComposite_IRectangle {
    const message = createBaseObjectUnionComposite_IRectangle();
    message.p1 = (object.p1 !== undefined && object.p1 !== null)
      ? ObjectUnionComposite_IPoint.fromPartial(object.p1)
      : undefined;
    message.p2 = (object.p2 !== undefined && object.p2 !== null)
      ? ObjectUnionComposite_IPoint.fromPartial(object.p2)
      : undefined;
    message.p3 = (object.p3 !== undefined && object.p3 !== null)
      ? ObjectUnionComposite_IPoint.fromPartial(object.p3)
      : undefined;
    message.p4 = (object.p4 !== undefined && object.p4 !== null)
      ? ObjectUnionComposite_IPoint.fromPartial(object.p4)
      : undefined;
    return message;
  },
};

function createBaseObjectUnionComposite_IPolyline(): ObjectUnionComposite_IPolyline {
  return { points: [] };
}

export const ObjectUnionComposite_IPolyline = {
  encode(message: ObjectUnionComposite_IPolyline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.points) {
      ObjectUnionComposite_IPoint.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionComposite_IPolyline {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionComposite_IPolyline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.points.push(ObjectUnionComposite_IPoint.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionComposite_IPolyline {
    return {
      points: Array.isArray(object?.points)
        ? object.points.map((e: any) => ObjectUnionComposite_IPoint.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ObjectUnionComposite_IPolyline): unknown {
    const obj: any = {};
    if (message.points) {
      obj.points = message.points.map((e) => e ? ObjectUnionComposite_IPoint.toJSON(e) : undefined);
    } else {
      obj.points = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionComposite_IPolyline>, I>>(base?: I): ObjectUnionComposite_IPolyline {
    return ObjectUnionComposite_IPolyline.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionComposite_IPolyline>, I>>(
    object: I,
  ): ObjectUnionComposite_IPolyline {
    const message = createBaseObjectUnionComposite_IPolyline();
    message.points = object.points?.map((e) => ObjectUnionComposite_IPoint.fromPartial(e)) || [];
    return message;
  },
};

function createBaseObjectUnionComposite_IPolygon(): ObjectUnionComposite_IPolygon {
  return { outer: undefined, inner: [] };
}

export const ObjectUnionComposite_IPolygon = {
  encode(message: ObjectUnionComposite_IPolygon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.outer !== undefined) {
      ObjectUnionComposite_IPolyline.encode(message.outer, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.inner) {
      ObjectUnionComposite_IPolyline.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionComposite_IPolygon {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionComposite_IPolygon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.outer = ObjectUnionComposite_IPolyline.decode(reader, reader.uint32());
          break;
        case 2:
          message.inner.push(ObjectUnionComposite_IPolyline.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionComposite_IPolygon {
    return {
      outer: isSet(object.outer) ? ObjectUnionComposite_IPolyline.fromJSON(object.outer) : undefined,
      inner: Array.isArray(object?.inner)
        ? object.inner.map((e: any) => ObjectUnionComposite_IPolyline.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ObjectUnionComposite_IPolygon): unknown {
    const obj: any = {};
    message.outer !== undefined &&
      (obj.outer = message.outer ? ObjectUnionComposite_IPolyline.toJSON(message.outer) : undefined);
    if (message.inner) {
      obj.inner = message.inner.map((e) => e ? ObjectUnionComposite_IPolyline.toJSON(e) : undefined);
    } else {
      obj.inner = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionComposite_IPolygon>, I>>(base?: I): ObjectUnionComposite_IPolygon {
    return ObjectUnionComposite_IPolygon.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionComposite_IPolygon>, I>>(
    object: I,
  ): ObjectUnionComposite_IPolygon {
    const message = createBaseObjectUnionComposite_IPolygon();
    message.outer = (object.outer !== undefined && object.outer !== null)
      ? ObjectUnionComposite_IPolyline.fromPartial(object.outer)
      : undefined;
    message.inner = object.inner?.map((e) => ObjectUnionComposite_IPolyline.fromPartial(e)) || [];
    return message;
  },
};

function createBaseObjectUnionComposite_IPointedShape(): ObjectUnionComposite_IPointedShape {
  return { outer: [], inner: undefined };
}

export const ObjectUnionComposite_IPointedShape = {
  encode(message: ObjectUnionComposite_IPointedShape, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.outer) {
      ObjectUnionComposite_IPoint.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.inner !== undefined) {
      ObjectUnionComposite_IPoint.encode(message.inner, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionComposite_IPointedShape {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionComposite_IPointedShape();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.outer.push(ObjectUnionComposite_IPoint.decode(reader, reader.uint32()));
          break;
        case 2:
          message.inner = ObjectUnionComposite_IPoint.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionComposite_IPointedShape {
    return {
      outer: Array.isArray(object?.outer) ? object.outer.map((e: any) => ObjectUnionComposite_IPoint.fromJSON(e)) : [],
      inner: isSet(object.inner) ? ObjectUnionComposite_IPoint.fromJSON(object.inner) : undefined,
    };
  },

  toJSON(message: ObjectUnionComposite_IPointedShape): unknown {
    const obj: any = {};
    if (message.outer) {
      obj.outer = message.outer.map((e) => e ? ObjectUnionComposite_IPoint.toJSON(e) : undefined);
    } else {
      obj.outer = [];
    }
    message.inner !== undefined &&
      (obj.inner = message.inner ? ObjectUnionComposite_IPoint.toJSON(message.inner) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionComposite_IPointedShape>, I>>(
    base?: I,
  ): ObjectUnionComposite_IPointedShape {
    return ObjectUnionComposite_IPointedShape.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionComposite_IPointedShape>, I>>(
    object: I,
  ): ObjectUnionComposite_IPointedShape {
    const message = createBaseObjectUnionComposite_IPointedShape();
    message.outer = object.outer?.map((e) => ObjectUnionComposite_IPoint.fromPartial(e)) || [];
    message.inner = (object.inner !== undefined && object.inner !== null)
      ? ObjectUnionComposite_IPoint.fromPartial(object.inner)
      : undefined;
    return message;
  },
};

function createBaseObjectUnionComposite_ICircle(): ObjectUnionComposite_ICircle {
  return { centroid: undefined, radius: 0 };
}

export const ObjectUnionComposite_ICircle = {
  encode(message: ObjectUnionComposite_ICircle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.centroid !== undefined) {
      ObjectUnionComposite_IPoint.encode(message.centroid, writer.uint32(10).fork()).ldelim();
    }
    if (message.radius !== 0) {
      writer.uint32(17).double(message.radius);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionComposite_ICircle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionComposite_ICircle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.centroid = ObjectUnionComposite_IPoint.decode(reader, reader.uint32());
          break;
        case 2:
          message.radius = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionComposite_ICircle {
    return {
      centroid: isSet(object.centroid) ? ObjectUnionComposite_IPoint.fromJSON(object.centroid) : undefined,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
    };
  },

  toJSON(message: ObjectUnionComposite_ICircle): unknown {
    const obj: any = {};
    message.centroid !== undefined &&
      (obj.centroid = message.centroid ? ObjectUnionComposite_IPoint.toJSON(message.centroid) : undefined);
    message.radius !== undefined && (obj.radius = message.radius);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionComposite_ICircle>, I>>(base?: I): ObjectUnionComposite_ICircle {
    return ObjectUnionComposite_ICircle.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionComposite_ICircle>, I>>(object: I): ObjectUnionComposite_ICircle {
    const message = createBaseObjectUnionComposite_ICircle();
    message.centroid = (object.centroid !== undefined && object.centroid !== null)
      ? ObjectUnionComposite_IPoint.fromPartial(object.centroid)
      : undefined;
    message.radius = object.radius ?? 0;
    return message;
  },
};

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite_ITriangleRpGt
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
            Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite_ITriangleRpGt
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
          Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite_ITriangleRpGt
            .fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e
        ? Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite_ITriangleRpGt
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
        Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite_ITriangleRpGt
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

function createBaseArray_ElementLtLpObjectUnionComposite(): Array_ElementLtLpObjectUnionComposite {
  return {};
}

export const Array_ElementLtLpObjectUnionComposite = {
  encode(_: Array_ElementLtLpObjectUnionComposite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array_ElementLtLpObjectUnionComposite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_ElementLtLpObjectUnionComposite();
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

  fromJSON(_: any): Array_ElementLtLpObjectUnionComposite {
    return {};
  },

  toJSON(_: Array_ElementLtLpObjectUnionComposite): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_ElementLtLpObjectUnionComposite>, I>>(
    base?: I,
  ): Array_ElementLtLpObjectUnionComposite {
    return Array_ElementLtLpObjectUnionComposite.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_ElementLtLpObjectUnionComposite>, I>>(
    _: I,
  ): Array_ElementLtLpObjectUnionComposite {
    const message = createBaseArray_ElementLtLpObjectUnionComposite();
    return message;
  },
};

function createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite(): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite {
  return {};
}

export const Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite = {
  encode(
    _: Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite();
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

  fromJSON(_: any): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite {
    return {};
  },

  toJSON(_: Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite>, I>,
  >(base?: I): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite {
    return Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite>, I>,
  >(_: I): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite {
    const message = createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite();
    return message;
  },
};

function createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite(): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite {
  return {};
}

export const Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite =
  {
    encode(
      _: Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite();
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
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite {
      return Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite {
      const message =
        createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite(): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite {
  return {};
}

export const Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite =
  {
    encode(
      _: Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite();
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
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite {
      return Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite {
      const message =
        createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite(): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite {
  return {};
}

export const Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite =
  {
    encode(
      _: Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite();
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
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite {
      return Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite {
      const message =
        createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite(): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite {
  return {};
}

export const Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite =
  {
    encode(
      _: Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite();
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
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite {
      return Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite {
      const message =
        createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite(): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite {
  return {};
}

export const Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite =
  {
    encode(
      _: Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite();
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
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite {
      return Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite {
      const message =
        createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite(): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite {
  return {};
}

export const Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite =
  {
    encode(
      _: Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite();
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
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite {
      return Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite {
      const message =
        createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite_ITriangleRpGt(): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite_ITriangleRpGt {
  return {
    valueO0: undefined,
    valueO1: undefined,
    valueO2: undefined,
    valueO3: undefined,
    valueO4: undefined,
    valueO5: undefined,
    valueO6: undefined,
    valueO7: undefined,
  };
}

export const Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite_ITriangleRpGt =
  {
    encode(
      message:
        Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite_ITriangleRpGt,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.valueO0 !== undefined) {
        ObjectUnionComposite_IPoint.encode(message.valueO0, writer.uint32(10).fork()).ldelim();
      }
      if (message.valueO1 !== undefined) {
        ObjectUnionComposite_ILine.encode(message.valueO1, writer.uint32(18).fork()).ldelim();
      }
      if (message.valueO2 !== undefined) {
        ObjectUnionComposite_ITriangle.encode(message.valueO2, writer.uint32(26).fork()).ldelim();
      }
      if (message.valueO3 !== undefined) {
        ObjectUnionComposite_IRectangle.encode(message.valueO3, writer.uint32(34).fork()).ldelim();
      }
      if (message.valueO4 !== undefined) {
        ObjectUnionComposite_IPolyline.encode(message.valueO4, writer.uint32(42).fork()).ldelim();
      }
      if (message.valueO5 !== undefined) {
        ObjectUnionComposite_IPolygon.encode(message.valueO5, writer.uint32(50).fork()).ldelim();
      }
      if (message.valueO6 !== undefined) {
        ObjectUnionComposite_IPointedShape.encode(message.valueO6, writer.uint32(58).fork()).ldelim();
      }
      if (message.valueO7 !== undefined) {
        ObjectUnionComposite_ICircle.encode(message.valueO7, writer.uint32(66).fork()).ldelim();
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite_ITriangleRpGt {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite_ITriangleRpGt();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.valueO0 = ObjectUnionComposite_IPoint.decode(reader, reader.uint32());
            break;
          case 2:
            message.valueO1 = ObjectUnionComposite_ILine.decode(reader, reader.uint32());
            break;
          case 3:
            message.valueO2 = ObjectUnionComposite_ITriangle.decode(reader, reader.uint32());
            break;
          case 4:
            message.valueO3 = ObjectUnionComposite_IRectangle.decode(reader, reader.uint32());
            break;
          case 5:
            message.valueO4 = ObjectUnionComposite_IPolyline.decode(reader, reader.uint32());
            break;
          case 6:
            message.valueO5 = ObjectUnionComposite_IPolygon.decode(reader, reader.uint32());
            break;
          case 7:
            message.valueO6 = ObjectUnionComposite_IPointedShape.decode(reader, reader.uint32());
            break;
          case 8:
            message.valueO7 = ObjectUnionComposite_ICircle.decode(reader, reader.uint32());
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
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite_ITriangleRpGt {
      return {
        valueO0: isSet(object.valueO0) ? ObjectUnionComposite_IPoint.fromJSON(object.valueO0) : undefined,
        valueO1: isSet(object.valueO1) ? ObjectUnionComposite_ILine.fromJSON(object.valueO1) : undefined,
        valueO2: isSet(object.valueO2) ? ObjectUnionComposite_ITriangle.fromJSON(object.valueO2) : undefined,
        valueO3: isSet(object.valueO3) ? ObjectUnionComposite_IRectangle.fromJSON(object.valueO3) : undefined,
        valueO4: isSet(object.valueO4) ? ObjectUnionComposite_IPolyline.fromJSON(object.valueO4) : undefined,
        valueO5: isSet(object.valueO5) ? ObjectUnionComposite_IPolygon.fromJSON(object.valueO5) : undefined,
        valueO6: isSet(object.valueO6) ? ObjectUnionComposite_IPointedShape.fromJSON(object.valueO6) : undefined,
        valueO7: isSet(object.valueO7) ? ObjectUnionComposite_ICircle.fromJSON(object.valueO7) : undefined,
      };
    },

    toJSON(
      message:
        Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite_ITriangleRpGt,
    ): unknown {
      const obj: any = {};
      message.valueO0 !== undefined &&
        (obj.valueO0 = message.valueO0 ? ObjectUnionComposite_IPoint.toJSON(message.valueO0) : undefined);
      message.valueO1 !== undefined &&
        (obj.valueO1 = message.valueO1 ? ObjectUnionComposite_ILine.toJSON(message.valueO1) : undefined);
      message.valueO2 !== undefined &&
        (obj.valueO2 = message.valueO2 ? ObjectUnionComposite_ITriangle.toJSON(message.valueO2) : undefined);
      message.valueO3 !== undefined &&
        (obj.valueO3 = message.valueO3 ? ObjectUnionComposite_IRectangle.toJSON(message.valueO3) : undefined);
      message.valueO4 !== undefined &&
        (obj.valueO4 = message.valueO4 ? ObjectUnionComposite_IPolyline.toJSON(message.valueO4) : undefined);
      message.valueO5 !== undefined &&
        (obj.valueO5 = message.valueO5 ? ObjectUnionComposite_IPolygon.toJSON(message.valueO5) : undefined);
      message.valueO6 !== undefined &&
        (obj.valueO6 = message.valueO6 ? ObjectUnionComposite_IPointedShape.toJSON(message.valueO6) : undefined);
      message.valueO7 !== undefined &&
        (obj.valueO7 = message.valueO7 ? ObjectUnionComposite_ICircle.toJSON(message.valueO7) : undefined);
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite_ITriangleRpGt
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite_ITriangleRpGt {
      return Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite_ITriangleRpGt
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite_ITriangleRpGt
        >,
        I
      >,
    >(
      object: I,
    ): Array_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite_ITriangleRpGt {
      const message =
        createBaseArray_ElementLtLpObjectUnionComposite_ICircleSpaceOrSpaceObjectUnionComposite_ILineSpaceOrSpaceObjectUnionComposite_IPointSpaceOrSpaceObjectUnionComposite_IPointedShapeSpaceOrSpaceObjectUnionComposite_IPolygonSpaceOrSpaceObjectUnionComposite_IPolylineSpaceOrSpaceObjectUnionComposite_IRectangleSpaceOrSpaceObjectUnionComposite_ITriangleRpGt();
      message.valueO0 = (object.valueO0 !== undefined && object.valueO0 !== null)
        ? ObjectUnionComposite_IPoint.fromPartial(object.valueO0)
        : undefined;
      message.valueO1 = (object.valueO1 !== undefined && object.valueO1 !== null)
        ? ObjectUnionComposite_ILine.fromPartial(object.valueO1)
        : undefined;
      message.valueO2 = (object.valueO2 !== undefined && object.valueO2 !== null)
        ? ObjectUnionComposite_ITriangle.fromPartial(object.valueO2)
        : undefined;
      message.valueO3 = (object.valueO3 !== undefined && object.valueO3 !== null)
        ? ObjectUnionComposite_IRectangle.fromPartial(object.valueO3)
        : undefined;
      message.valueO4 = (object.valueO4 !== undefined && object.valueO4 !== null)
        ? ObjectUnionComposite_IPolyline.fromPartial(object.valueO4)
        : undefined;
      message.valueO5 = (object.valueO5 !== undefined && object.valueO5 !== null)
        ? ObjectUnionComposite_IPolygon.fromPartial(object.valueO5)
        : undefined;
      message.valueO6 = (object.valueO6 !== undefined && object.valueO6 !== null)
        ? ObjectUnionComposite_IPointedShape.fromPartial(object.valueO6)
        : undefined;
      message.valueO7 = (object.valueO7 !== undefined && object.valueO7 !== null)
        ? ObjectUnionComposite_ICircle.fromPartial(object.valueO7)
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
