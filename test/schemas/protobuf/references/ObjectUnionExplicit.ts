/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ObjectUnionExplicit {
}

export interface ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit {
}

export interface ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGt {
  x: number;
  y: number;
  type: string;
}

export interface ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit {
}

export interface ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGt {
  p1: ObjectUnionExplicit_IPoint | undefined;
  p2: ObjectUnionExplicit_IPoint | undefined;
  type: string;
}

export interface ObjectUnionExplicit_IPoint {
  x: number;
  y: number;
}

export interface ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit {
}

export interface ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGt {
  p1: ObjectUnionExplicit_IPoint | undefined;
  p2: ObjectUnionExplicit_IPoint | undefined;
  p3: ObjectUnionExplicit_IPoint | undefined;
  type: string;
}

export interface ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit {
}

export interface ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGt {
  p1: ObjectUnionExplicit_IPoint | undefined;
  p2: ObjectUnionExplicit_IPoint | undefined;
  p3: ObjectUnionExplicit_IPoint | undefined;
  p4: ObjectUnionExplicit_IPoint | undefined;
  type: string;
}

export interface ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit {
}

export interface ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGt {
  points: ObjectUnionExplicit_IPoint[];
  type: string;
}

export interface ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit {
}

export interface ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGt {
  outer: ObjectUnionExplicit_IPolyline | undefined;
  inner: ObjectUnionExplicit_IPolyline[];
  type: string;
}

export interface ObjectUnionExplicit_IPolyline {
  points: ObjectUnionExplicit_IPoint[];
}

export interface ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit {
}

export interface ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGt {
  centroid: ObjectUnionExplicit_IPoint | undefined;
  radius: number;
  type: string;
}

export interface Main {
  value:
    Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGtRpGt[];
}

export interface Array {
}

export interface Array_ElementLtLpObjectUnionExplicit {
}

export interface Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit {
}

export interface Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit {
}

export interface Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit {
}

export interface Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit {
}

export interface Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit {
}

export interface Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit {
}

export interface Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit {
}

export interface Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit {
}

export interface Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit {
}

export interface Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit {
}

export interface Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit {
}

export interface Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit {
}

export interface Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit {
}

export interface Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGtRpGt {
  valueO0?:
    | ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGt
    | undefined;
  valueO1?:
    | ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGt
    | undefined;
  valueO2?:
    | ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGt
    | undefined;
  valueO3?:
    | ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGt
    | undefined;
  valueO4?:
    | ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGt
    | undefined;
  valueO5?:
    | ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGt
    | undefined;
  valueO6?:
    | ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGt
    | undefined;
}

function createBaseObjectUnionExplicit(): ObjectUnionExplicit {
  return {};
}

export const ObjectUnionExplicit = {
  encode(_: ObjectUnionExplicit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionExplicit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionExplicit();
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

  fromJSON(_: any): ObjectUnionExplicit {
    return {};
  },

  toJSON(_: ObjectUnionExplicit): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionExplicit>, I>>(base?: I): ObjectUnionExplicit {
    return ObjectUnionExplicit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionExplicit>, I>>(_: I): ObjectUnionExplicit {
    const message = createBaseObjectUnionExplicit();
    return message;
  },
};

function createBaseObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit(): ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit {
  return {};
}

export const ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit = {
  encode(
    _: ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit();
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

  fromJSON(_: any): ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit {
    return {};
  },

  toJSON(_: ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit>,
      I
    >,
  >(base?: I): ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit {
    return ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit>,
      I
    >,
  >(_: I): ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit {
    const message =
      createBaseObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit();
    return message;
  },
};

function createBaseObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGt(): ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGt {
  return { x: 0, y: 0, type: "" };
}

export const ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGt = {
  encode(
    message: ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(9).double(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(17).double(message.y);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGt();
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
          message.type = reader.string();
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
  ): ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGt {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(
    message: ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGt,
  ): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGt>,
      I
    >,
  >(base?: I): ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGt {
    return ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGt
      .fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGt>,
      I
    >,
  >(object: I): ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGt {
    const message =
      createBaseObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGt();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit(): ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit {
  return {};
}

export const ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit = {
  encode(
    _: ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit();
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

  fromJSON(_: any): ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit {
    return {};
  },

  toJSON(_: ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit>,
      I
    >,
  >(base?: I): ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit {
    return ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit>,
      I
    >,
  >(_: I): ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit {
    const message =
      createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit();
    return message;
  },
};

function createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGt(): ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGt {
  return { p1: undefined, p2: undefined, type: "" };
}

export const ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGt = {
  encode(
    message: ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.p1 !== undefined) {
      ObjectUnionExplicit_IPoint.encode(message.p1, writer.uint32(10).fork()).ldelim();
    }
    if (message.p2 !== undefined) {
      ObjectUnionExplicit_IPoint.encode(message.p2, writer.uint32(18).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p1 = ObjectUnionExplicit_IPoint.decode(reader, reader.uint32());
          break;
        case 2:
          message.p2 = ObjectUnionExplicit_IPoint.decode(reader, reader.uint32());
          break;
        case 3:
          message.type = reader.string();
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
  ): ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGt {
    return {
      p1: isSet(object.p1) ? ObjectUnionExplicit_IPoint.fromJSON(object.p1) : undefined,
      p2: isSet(object.p2) ? ObjectUnionExplicit_IPoint.fromJSON(object.p2) : undefined,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(
    message: ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGt,
  ): unknown {
    const obj: any = {};
    message.p1 !== undefined && (obj.p1 = message.p1 ? ObjectUnionExplicit_IPoint.toJSON(message.p1) : undefined);
    message.p2 !== undefined && (obj.p2 = message.p2 ? ObjectUnionExplicit_IPoint.toJSON(message.p2) : undefined);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGt>,
      I
    >,
  >(base?: I): ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGt {
    return ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGt
      .fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGt>,
      I
    >,
  >(object: I): ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGt {
    const message =
      createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGt();
    message.p1 = (object.p1 !== undefined && object.p1 !== null)
      ? ObjectUnionExplicit_IPoint.fromPartial(object.p1)
      : undefined;
    message.p2 = (object.p2 !== undefined && object.p2 !== null)
      ? ObjectUnionExplicit_IPoint.fromPartial(object.p2)
      : undefined;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseObjectUnionExplicit_IPoint(): ObjectUnionExplicit_IPoint {
  return { x: 0, y: 0 };
}

export const ObjectUnionExplicit_IPoint = {
  encode(message: ObjectUnionExplicit_IPoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(9).double(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(17).double(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionExplicit_IPoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionExplicit_IPoint();
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

  fromJSON(object: any): ObjectUnionExplicit_IPoint {
    return { x: isSet(object.x) ? Number(object.x) : 0, y: isSet(object.y) ? Number(object.y) : 0 };
  },

  toJSON(message: ObjectUnionExplicit_IPoint): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionExplicit_IPoint>, I>>(base?: I): ObjectUnionExplicit_IPoint {
    return ObjectUnionExplicit_IPoint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionExplicit_IPoint>, I>>(object: I): ObjectUnionExplicit_IPoint {
    const message = createBaseObjectUnionExplicit_IPoint();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit(): ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit {
  return {};
}

export const ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit = {
  encode(
    _: ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit();
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

  fromJSON(_: any): ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit {
    return {};
  },

  toJSON(_: ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit>,
      I
    >,
  >(base?: I): ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit {
    return ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit>,
      I
    >,
  >(_: I): ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit {
    const message =
      createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit();
    return message;
  },
};

function createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGt(): ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGt {
  return { p1: undefined, p2: undefined, p3: undefined, type: "" };
}

export const ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGt =
  {
    encode(
      message:
        ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGt,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.p1 !== undefined) {
        ObjectUnionExplicit_IPoint.encode(message.p1, writer.uint32(10).fork()).ldelim();
      }
      if (message.p2 !== undefined) {
        ObjectUnionExplicit_IPoint.encode(message.p2, writer.uint32(18).fork()).ldelim();
      }
      if (message.p3 !== undefined) {
        ObjectUnionExplicit_IPoint.encode(message.p3, writer.uint32(26).fork()).ldelim();
      }
      if (message.type !== "") {
        writer.uint32(34).string(message.type);
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGt {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGt();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.p1 = ObjectUnionExplicit_IPoint.decode(reader, reader.uint32());
            break;
          case 2:
            message.p2 = ObjectUnionExplicit_IPoint.decode(reader, reader.uint32());
            break;
          case 3:
            message.p3 = ObjectUnionExplicit_IPoint.decode(reader, reader.uint32());
            break;
          case 4:
            message.type = reader.string();
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
    ): ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGt {
      return {
        p1: isSet(object.p1) ? ObjectUnionExplicit_IPoint.fromJSON(object.p1) : undefined,
        p2: isSet(object.p2) ? ObjectUnionExplicit_IPoint.fromJSON(object.p2) : undefined,
        p3: isSet(object.p3) ? ObjectUnionExplicit_IPoint.fromJSON(object.p3) : undefined,
        type: isSet(object.type) ? String(object.type) : "",
      };
    },

    toJSON(
      message:
        ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGt,
    ): unknown {
      const obj: any = {};
      message.p1 !== undefined && (obj.p1 = message.p1 ? ObjectUnionExplicit_IPoint.toJSON(message.p1) : undefined);
      message.p2 !== undefined && (obj.p2 = message.p2 ? ObjectUnionExplicit_IPoint.toJSON(message.p2) : undefined);
      message.p3 !== undefined && (obj.p3 = message.p3 ? ObjectUnionExplicit_IPoint.toJSON(message.p3) : undefined);
      message.type !== undefined && (obj.type = message.type);
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGt
        >,
        I
      >,
    >(
      base?: I,
    ): ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGt {
      return ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGt
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGt
        >,
        I
      >,
    >(
      object: I,
    ): ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGt {
      const message =
        createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGt();
      message.p1 = (object.p1 !== undefined && object.p1 !== null)
        ? ObjectUnionExplicit_IPoint.fromPartial(object.p1)
        : undefined;
      message.p2 = (object.p2 !== undefined && object.p2 !== null)
        ? ObjectUnionExplicit_IPoint.fromPartial(object.p2)
        : undefined;
      message.p3 = (object.p3 !== undefined && object.p3 !== null)
        ? ObjectUnionExplicit_IPoint.fromPartial(object.p3)
        : undefined;
      message.type = object.type ?? "";
      return message;
    },
  };

function createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit(): ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit {
  return {};
}

export const ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit = {
  encode(
    _: ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit();
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

  fromJSON(_: any): ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit {
    return {};
  },

  toJSON(_: ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit>,
      I
    >,
  >(base?: I): ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit {
    return ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit>,
      I
    >,
  >(_: I): ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit {
    const message =
      createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit();
    return message;
  },
};

function createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGt(): ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGt {
  return { p1: undefined, p2: undefined, p3: undefined, p4: undefined, type: "" };
}

export const ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGt =
  {
    encode(
      message:
        ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGt,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.p1 !== undefined) {
        ObjectUnionExplicit_IPoint.encode(message.p1, writer.uint32(10).fork()).ldelim();
      }
      if (message.p2 !== undefined) {
        ObjectUnionExplicit_IPoint.encode(message.p2, writer.uint32(18).fork()).ldelim();
      }
      if (message.p3 !== undefined) {
        ObjectUnionExplicit_IPoint.encode(message.p3, writer.uint32(26).fork()).ldelim();
      }
      if (message.p4 !== undefined) {
        ObjectUnionExplicit_IPoint.encode(message.p4, writer.uint32(34).fork()).ldelim();
      }
      if (message.type !== "") {
        writer.uint32(42).string(message.type);
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGt {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGt();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.p1 = ObjectUnionExplicit_IPoint.decode(reader, reader.uint32());
            break;
          case 2:
            message.p2 = ObjectUnionExplicit_IPoint.decode(reader, reader.uint32());
            break;
          case 3:
            message.p3 = ObjectUnionExplicit_IPoint.decode(reader, reader.uint32());
            break;
          case 4:
            message.p4 = ObjectUnionExplicit_IPoint.decode(reader, reader.uint32());
            break;
          case 5:
            message.type = reader.string();
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
    ): ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGt {
      return {
        p1: isSet(object.p1) ? ObjectUnionExplicit_IPoint.fromJSON(object.p1) : undefined,
        p2: isSet(object.p2) ? ObjectUnionExplicit_IPoint.fromJSON(object.p2) : undefined,
        p3: isSet(object.p3) ? ObjectUnionExplicit_IPoint.fromJSON(object.p3) : undefined,
        p4: isSet(object.p4) ? ObjectUnionExplicit_IPoint.fromJSON(object.p4) : undefined,
        type: isSet(object.type) ? String(object.type) : "",
      };
    },

    toJSON(
      message:
        ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGt,
    ): unknown {
      const obj: any = {};
      message.p1 !== undefined && (obj.p1 = message.p1 ? ObjectUnionExplicit_IPoint.toJSON(message.p1) : undefined);
      message.p2 !== undefined && (obj.p2 = message.p2 ? ObjectUnionExplicit_IPoint.toJSON(message.p2) : undefined);
      message.p3 !== undefined && (obj.p3 = message.p3 ? ObjectUnionExplicit_IPoint.toJSON(message.p3) : undefined);
      message.p4 !== undefined && (obj.p4 = message.p4 ? ObjectUnionExplicit_IPoint.toJSON(message.p4) : undefined);
      message.type !== undefined && (obj.type = message.type);
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGt
        >,
        I
      >,
    >(
      base?: I,
    ): ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGt {
      return ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGt
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGt
        >,
        I
      >,
    >(
      object: I,
    ): ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGt {
      const message =
        createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGt();
      message.p1 = (object.p1 !== undefined && object.p1 !== null)
        ? ObjectUnionExplicit_IPoint.fromPartial(object.p1)
        : undefined;
      message.p2 = (object.p2 !== undefined && object.p2 !== null)
        ? ObjectUnionExplicit_IPoint.fromPartial(object.p2)
        : undefined;
      message.p3 = (object.p3 !== undefined && object.p3 !== null)
        ? ObjectUnionExplicit_IPoint.fromPartial(object.p3)
        : undefined;
      message.p4 = (object.p4 !== undefined && object.p4 !== null)
        ? ObjectUnionExplicit_IPoint.fromPartial(object.p4)
        : undefined;
      message.type = object.type ?? "";
      return message;
    },
  };

function createBaseObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit(): ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit {
  return {};
}

export const ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit = {
  encode(
    _: ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit();
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

  fromJSON(_: any): ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit {
    return {};
  },

  toJSON(_: ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit>,
      I
    >,
  >(base?: I): ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit {
    return ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit>,
      I
    >,
  >(_: I): ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit {
    const message =
      createBaseObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit();
    return message;
  },
};

function createBaseObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGt(): ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGt {
  return { points: [], type: "" };
}

export const ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGt =
  {
    encode(
      message:
        ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGt,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      for (const v of message.points) {
        ObjectUnionExplicit_IPoint.encode(v!, writer.uint32(10).fork()).ldelim();
      }
      if (message.type !== "") {
        writer.uint32(18).string(message.type);
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGt {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGt();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.points.push(ObjectUnionExplicit_IPoint.decode(reader, reader.uint32()));
            break;
          case 2:
            message.type = reader.string();
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
    ): ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGt {
      return {
        points: Array.isArray(object?.points)
          ? object.points.map((e: any) => ObjectUnionExplicit_IPoint.fromJSON(e))
          : [],
        type: isSet(object.type) ? String(object.type) : "",
      };
    },

    toJSON(
      message:
        ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGt,
    ): unknown {
      const obj: any = {};
      if (message.points) {
        obj.points = message.points.map((e) => e ? ObjectUnionExplicit_IPoint.toJSON(e) : undefined);
      } else {
        obj.points = [];
      }
      message.type !== undefined && (obj.type = message.type);
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGt
        >,
        I
      >,
    >(
      base?: I,
    ): ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGt {
      return ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGt
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGt
        >,
        I
      >,
    >(
      object: I,
    ): ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGt {
      const message =
        createBaseObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGt();
      message.points = object.points?.map((e) => ObjectUnionExplicit_IPoint.fromPartial(e)) || [];
      message.type = object.type ?? "";
      return message;
    },
  };

function createBaseObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit(): ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit {
  return {};
}

export const ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit = {
  encode(
    _: ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit();
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

  fromJSON(_: any): ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit {
    return {};
  },

  toJSON(_: ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit>,
      I
    >,
  >(base?: I): ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit {
    return ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit>,
      I
    >,
  >(_: I): ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit {
    const message =
      createBaseObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit();
    return message;
  },
};

function createBaseObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGt(): ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGt {
  return { outer: undefined, inner: [], type: "" };
}

export const ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGt =
  {
    encode(
      message: ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGt,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.outer !== undefined) {
        ObjectUnionExplicit_IPolyline.encode(message.outer, writer.uint32(10).fork()).ldelim();
      }
      for (const v of message.inner) {
        ObjectUnionExplicit_IPolyline.encode(v!, writer.uint32(18).fork()).ldelim();
      }
      if (message.type !== "") {
        writer.uint32(26).string(message.type);
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGt {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGt();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.outer = ObjectUnionExplicit_IPolyline.decode(reader, reader.uint32());
            break;
          case 2:
            message.inner.push(ObjectUnionExplicit_IPolyline.decode(reader, reader.uint32()));
            break;
          case 3:
            message.type = reader.string();
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
    ): ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGt {
      return {
        outer: isSet(object.outer) ? ObjectUnionExplicit_IPolyline.fromJSON(object.outer) : undefined,
        inner: Array.isArray(object?.inner)
          ? object.inner.map((e: any) => ObjectUnionExplicit_IPolyline.fromJSON(e))
          : [],
        type: isSet(object.type) ? String(object.type) : "",
      };
    },

    toJSON(
      message: ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGt,
    ): unknown {
      const obj: any = {};
      message.outer !== undefined &&
        (obj.outer = message.outer ? ObjectUnionExplicit_IPolyline.toJSON(message.outer) : undefined);
      if (message.inner) {
        obj.inner = message.inner.map((e) => e ? ObjectUnionExplicit_IPolyline.toJSON(e) : undefined);
      } else {
        obj.inner = [];
      }
      message.type !== undefined && (obj.type = message.type);
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGt
        >,
        I
      >,
    >(
      base?: I,
    ): ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGt {
      return ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGt
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGt
        >,
        I
      >,
    >(
      object: I,
    ): ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGt {
      const message =
        createBaseObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGt();
      message.outer = (object.outer !== undefined && object.outer !== null)
        ? ObjectUnionExplicit_IPolyline.fromPartial(object.outer)
        : undefined;
      message.inner = object.inner?.map((e) => ObjectUnionExplicit_IPolyline.fromPartial(e)) || [];
      message.type = object.type ?? "";
      return message;
    },
  };

function createBaseObjectUnionExplicit_IPolyline(): ObjectUnionExplicit_IPolyline {
  return { points: [] };
}

export const ObjectUnionExplicit_IPolyline = {
  encode(message: ObjectUnionExplicit_IPolyline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.points) {
      ObjectUnionExplicit_IPoint.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionExplicit_IPolyline {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionExplicit_IPolyline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.points.push(ObjectUnionExplicit_IPoint.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionExplicit_IPolyline {
    return {
      points: Array.isArray(object?.points)
        ? object.points.map((e: any) => ObjectUnionExplicit_IPoint.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ObjectUnionExplicit_IPolyline): unknown {
    const obj: any = {};
    if (message.points) {
      obj.points = message.points.map((e) => e ? ObjectUnionExplicit_IPoint.toJSON(e) : undefined);
    } else {
      obj.points = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionExplicit_IPolyline>, I>>(base?: I): ObjectUnionExplicit_IPolyline {
    return ObjectUnionExplicit_IPolyline.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionExplicit_IPolyline>, I>>(
    object: I,
  ): ObjectUnionExplicit_IPolyline {
    const message = createBaseObjectUnionExplicit_IPolyline();
    message.points = object.points?.map((e) => ObjectUnionExplicit_IPoint.fromPartial(e)) || [];
    return message;
  },
};

function createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit(): ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit {
  return {};
}

export const ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit = {
  encode(
    _: ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit();
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

  fromJSON(_: any): ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit {
    return {};
  },

  toJSON(_: ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit>,
      I
    >,
  >(base?: I): ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit {
    return ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit>,
      I
    >,
  >(_: I): ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit {
    const message =
      createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit();
    return message;
  },
};

function createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGt(): ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGt {
  return { centroid: undefined, radius: 0, type: "" };
}

export const ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGt = {
  encode(
    message: ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.centroid !== undefined) {
      ObjectUnionExplicit_IPoint.encode(message.centroid, writer.uint32(10).fork()).ldelim();
    }
    if (message.radius !== 0) {
      writer.uint32(17).double(message.radius);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.centroid = ObjectUnionExplicit_IPoint.decode(reader, reader.uint32());
          break;
        case 2:
          message.radius = reader.double();
          break;
        case 3:
          message.type = reader.string();
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
  ): ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGt {
    return {
      centroid: isSet(object.centroid) ? ObjectUnionExplicit_IPoint.fromJSON(object.centroid) : undefined,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(
    message: ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGt,
  ): unknown {
    const obj: any = {};
    message.centroid !== undefined &&
      (obj.centroid = message.centroid ? ObjectUnionExplicit_IPoint.toJSON(message.centroid) : undefined);
    message.radius !== undefined && (obj.radius = message.radius);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<
        ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGt
      >,
      I
    >,
  >(base?: I): ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGt {
    return ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGt
      .fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<
      DeepPartial<
        ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGt
      >,
      I
    >,
  >(object: I): ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGt {
    const message =
      createBaseObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGt();
    message.centroid = (object.centroid !== undefined && object.centroid !== null)
      ? ObjectUnionExplicit_IPoint.fromPartial(object.centroid)
      : undefined;
    message.radius = object.radius ?? 0;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGtRpGt
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
            Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGtRpGt
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
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGtRpGt
            .fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e
        ? Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGtRpGt
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
        Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGtRpGt
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

function createBaseArray_ElementLtLpObjectUnionExplicit(): Array_ElementLtLpObjectUnionExplicit {
  return {};
}

export const Array_ElementLtLpObjectUnionExplicit = {
  encode(_: Array_ElementLtLpObjectUnionExplicit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array_ElementLtLpObjectUnionExplicit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_ElementLtLpObjectUnionExplicit();
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

  fromJSON(_: any): Array_ElementLtLpObjectUnionExplicit {
    return {};
  },

  toJSON(_: Array_ElementLtLpObjectUnionExplicit): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_ElementLtLpObjectUnionExplicit>, I>>(
    base?: I,
  ): Array_ElementLtLpObjectUnionExplicit {
    return Array_ElementLtLpObjectUnionExplicit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_ElementLtLpObjectUnionExplicit>, I>>(
    _: I,
  ): Array_ElementLtLpObjectUnionExplicit {
    const message = createBaseArray_ElementLtLpObjectUnionExplicit();
    return message;
  },
};

function createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit(): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit {
  return {};
}

export const Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit =
  {
    encode(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit();
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
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit {
      return Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit {
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit(): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit {
  return {};
}

export const Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit =
  {
    encode(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit();
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
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit {
      return Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit {
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit(): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit {
  return {};
}

export const Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit =
  {
    encode(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit();
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
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit {
      return Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit {
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit(): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit {
  return {};
}

export const Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit =
  {
    encode(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit();
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
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit {
      return Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit {
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit(): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit {
  return {};
}

export const Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit =
  {
    encode(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit();
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
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit {
      return Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit {
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit(): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit {
  return {};
}

export const Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit =
  {
    encode(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit();
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
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit {
      return Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit {
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit(): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit {
  return {};
}

export const Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit =
  {
    encode(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit();
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
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit {
      return Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit {
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit(): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit {
  return {};
}

export const Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit =
  {
    encode(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit();
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
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit {
      return Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit {
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit(): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit {
  return {};
}

export const Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit =
  {
    encode(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit();
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
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit {
      return Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit {
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit(): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit {
  return {};
}

export const Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit =
  {
    encode(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit();
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
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit {
      return Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit {
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit(): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit {
  return {};
}

export const Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit =
  {
    encode(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit();
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
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit {
      return Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit {
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit(): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit {
  return {};
}

export const Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit =
  {
    encode(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit();
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
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit {
      return Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit {
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit(): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit {
  return {};
}

export const Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit =
  {
    encode(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit();
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
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit {
      return {};
    },

    toJSON(
      _: Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit {
      return Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit
        >,
        I
      >,
    >(
      _: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit {
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit();
      return message;
    },
  };

function createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGtRpGt(): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGtRpGt {
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

export const Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGtRpGt =
  {
    encode(
      message:
        Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGtRpGt,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.valueO0 !== undefined) {
        ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGt.encode(
          message.valueO0,
          writer.uint32(10).fork(),
        ).ldelim();
      }
      if (message.valueO1 !== undefined) {
        ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGt.encode(
          message.valueO1,
          writer.uint32(18).fork(),
        ).ldelim();
      }
      if (message.valueO2 !== undefined) {
        ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGt
          .encode(message.valueO2, writer.uint32(26).fork()).ldelim();
      }
      if (message.valueO3 !== undefined) {
        ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGt
          .encode(message.valueO3, writer.uint32(34).fork()).ldelim();
      }
      if (message.valueO4 !== undefined) {
        ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGt
          .encode(message.valueO4, writer.uint32(42).fork()).ldelim();
      }
      if (message.valueO5 !== undefined) {
        ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGt.encode(
          message.valueO5,
          writer.uint32(50).fork(),
        ).ldelim();
      }
      if (message.valueO6 !== undefined) {
        ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGt.encode(
          message.valueO6,
          writer.uint32(58).fork(),
        ).ldelim();
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGtRpGt {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGtRpGt();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.valueO0 =
              ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGt
                .decode(reader, reader.uint32());
            break;
          case 2:
            message.valueO1 =
              ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGt.decode(
                reader,
                reader.uint32(),
              );
            break;
          case 3:
            message.valueO2 =
              ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGt
                .decode(reader, reader.uint32());
            break;
          case 4:
            message.valueO3 =
              ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGt
                .decode(reader, reader.uint32());
            break;
          case 5:
            message.valueO4 =
              ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGt
                .decode(reader, reader.uint32());
            break;
          case 6:
            message.valueO5 =
              ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGt
                .decode(reader, reader.uint32());
            break;
          case 7:
            message.valueO6 =
              ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGt
                .decode(reader, reader.uint32());
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
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGtRpGt {
      return {
        valueO0: isSet(object.valueO0)
          ? ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGt
            .fromJSON(object.valueO0)
          : undefined,
        valueO1: isSet(object.valueO1)
          ? ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGt.fromJSON(
            object.valueO1,
          )
          : undefined,
        valueO2: isSet(object.valueO2)
          ? ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGt
            .fromJSON(object.valueO2)
          : undefined,
        valueO3: isSet(object.valueO3)
          ? ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGt
            .fromJSON(object.valueO3)
          : undefined,
        valueO4: isSet(object.valueO4)
          ? ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGt
            .fromJSON(object.valueO4)
          : undefined,
        valueO5: isSet(object.valueO5)
          ? ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGt
            .fromJSON(object.valueO5)
          : undefined,
        valueO6: isSet(object.valueO6)
          ? ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGt
            .fromJSON(object.valueO6)
          : undefined,
      };
    },

    toJSON(
      message:
        Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGtRpGt,
    ): unknown {
      const obj: any = {};
      message.valueO0 !== undefined && (obj.valueO0 = message.valueO0
        ? ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGt.toJSON(
          message.valueO0,
        )
        : undefined);
      message.valueO1 !== undefined && (obj.valueO1 = message.valueO1
        ? ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGt.toJSON(
          message.valueO1,
        )
        : undefined);
      message.valueO2 !== undefined && (obj.valueO2 = message.valueO2
        ? ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGt
          .toJSON(message.valueO2)
        : undefined);
      message.valueO3 !== undefined && (obj.valueO3 = message.valueO3
        ? ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGt
          .toJSON(message.valueO3)
        : undefined);
      message.valueO4 !== undefined && (obj.valueO4 = message.valueO4
        ? ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGt
          .toJSON(message.valueO4)
        : undefined);
      message.valueO5 !== undefined && (obj.valueO5 = message.valueO5
        ? ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGt
          .toJSON(message.valueO5)
        : undefined);
      message.valueO6 !== undefined && (obj.valueO6 = message.valueO6
        ? ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGt.toJSON(
          message.valueO6,
        )
        : undefined);
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGtRpGt
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGtRpGt {
      return Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGtRpGt
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGtRpGt
        >,
        I
      >,
    >(
      object: I,
    ): Array_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGtRpGt {
      const message =
        createBaseArray_ElementLtLpObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGtSpaceOrSpaceObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGtRpGt();
      message.valueO0 = (object.valueO0 !== undefined && object.valueO0 !== null)
        ? ObjectUnionExplicit_DiscriminatorLtDoublequotePointDoublequoteCommaSpaceObjectUnionExplicit_IPointGt
          .fromPartial(object.valueO0)
        : undefined;
      message.valueO1 = (object.valueO1 !== undefined && object.valueO1 !== null)
        ? ObjectUnionExplicit_DiscriminatorLtDoublequoteLineDoublequoteCommaSpaceObjectUnionExplicit_ILineGt
          .fromPartial(object.valueO1)
        : undefined;
      message.valueO2 = (object.valueO2 !== undefined && object.valueO2 !== null)
        ? ObjectUnionExplicit_DiscriminatorLtDoublequoteTriangleDoublequoteCommaSpaceObjectUnionExplicit_ITriangleGt
          .fromPartial(object.valueO2)
        : undefined;
      message.valueO3 = (object.valueO3 !== undefined && object.valueO3 !== null)
        ? ObjectUnionExplicit_DiscriminatorLtDoublequoteRectangleDoublequoteCommaSpaceObjectUnionExplicit_IRectangleGt
          .fromPartial(object.valueO3)
        : undefined;
      message.valueO4 = (object.valueO4 !== undefined && object.valueO4 !== null)
        ? ObjectUnionExplicit_DiscriminatorLtDoublequotePolylineDoublequoteCommaSpaceObjectUnionExplicit_IPolylineGt
          .fromPartial(object.valueO4)
        : undefined;
      message.valueO5 = (object.valueO5 !== undefined && object.valueO5 !== null)
        ? ObjectUnionExplicit_DiscriminatorLtDoublequotePolygonDoublequoteCommaSpaceObjectUnionExplicit_IPolygonGt
          .fromPartial(object.valueO5)
        : undefined;
      message.valueO6 = (object.valueO6 !== undefined && object.valueO6 !== null)
        ? ObjectUnionExplicit_DiscriminatorLtDoublequoteCircleDoublequoteCommaSpaceObjectUnionExplicit_ICircleGt
          .fromPartial(object.valueO6)
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
