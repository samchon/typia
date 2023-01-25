/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ObjectUnionNonPredictable {
}

export interface ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable {
}

export interface ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable_IUnionGt {
  value: ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable_IUnionGt | undefined;
}

export interface ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable {
}

export interface ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable_IUnionGt {
  valueO0?: ObjectUnionNonPredictable_IWrapperLtBooleanGt | undefined;
  valueO1?: ObjectUnionNonPredictable_IWrapperLtNumberGt | undefined;
  valueO2?: ObjectUnionNonPredictable_IWrapperLtStringGt | undefined;
}

export interface ObjectUnionNonPredictable_IWrapperLtBooleanGt {
  value: ObjectUnionNonPredictable_IPointerLtBooleanGt | undefined;
}

export interface ObjectUnionNonPredictable_IPointerLtBooleanGt {
  value: boolean;
}

export interface ObjectUnionNonPredictable_IWrapperLtNumberGt {
  value: ObjectUnionNonPredictable_IPointerLtNumberGt | undefined;
}

export interface ObjectUnionNonPredictable_IPointerLtNumberGt {
  value: number;
}

export interface ObjectUnionNonPredictable_IWrapperLtStringGt {
  value: ObjectUnionNonPredictable_IPointerLtStringGt | undefined;
}

export interface ObjectUnionNonPredictable_IPointerLtStringGt {
  value: string;
}

export interface Main {
  value: ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable_IUnionGt[];
}

function createBaseObjectUnionNonPredictable(): ObjectUnionNonPredictable {
  return {};
}

export const ObjectUnionNonPredictable = {
  encode(_: ObjectUnionNonPredictable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionNonPredictable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionNonPredictable();
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

  fromJSON(_: any): ObjectUnionNonPredictable {
    return {};
  },

  toJSON(_: ObjectUnionNonPredictable): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionNonPredictable>, I>>(base?: I): ObjectUnionNonPredictable {
    return ObjectUnionNonPredictable.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionNonPredictable>, I>>(_: I): ObjectUnionNonPredictable {
    const message = createBaseObjectUnionNonPredictable();
    return message;
  },
};

function createBaseObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable(): ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable {
  return {};
}

export const ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable = {
  encode(
    _: ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable();
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

  fromJSON(_: any): ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable {
    return {};
  },

  toJSON(_: ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable>, I>>(
    base?: I,
  ): ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable {
    return ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable>, I>>(
    _: I,
  ): ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable {
    const message = createBaseObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable();
    return message;
  },
};

function createBaseObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable_IUnionGt(): ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable_IUnionGt {
  return { value: undefined };
}

export const ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable_IUnionGt = {
  encode(
    message: ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable_IUnionGt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== undefined) {
      ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable_IUnionGt.encode(
        message.value,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable_IUnionGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable_IUnionGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable_IUnionGt.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable_IUnionGt {
    return {
      value: isSet(object.value)
        ? ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable_IUnionGt.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable_IUnionGt): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value
      ? ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable_IUnionGt.toJSON(message.value)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable_IUnionGt>, I>>(
    base?: I,
  ): ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable_IUnionGt {
    return ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable_IUnionGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable_IUnionGt>, I>>(
    object: I,
  ): ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable_IUnionGt {
    const message = createBaseObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable_IUnionGt();
    message.value = (object.value !== undefined && object.value !== null)
      ? ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable_IUnionGt.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable(): ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable {
  return {};
}

export const ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable = {
  encode(
    _: ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable();
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

  fromJSON(_: any): ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable {
    return {};
  },

  toJSON(_: ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable>, I>>(
    base?: I,
  ): ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable {
    return ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable>, I>>(
    _: I,
  ): ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable {
    const message = createBaseObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable();
    return message;
  },
};

function createBaseObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable_IUnionGt(): ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable_IUnionGt {
  return { valueO0: undefined, valueO1: undefined, valueO2: undefined };
}

export const ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable_IUnionGt = {
  encode(
    message: ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable_IUnionGt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.valueO0 !== undefined) {
      ObjectUnionNonPredictable_IWrapperLtBooleanGt.encode(message.valueO0, writer.uint32(10).fork()).ldelim();
    }
    if (message.valueO1 !== undefined) {
      ObjectUnionNonPredictable_IWrapperLtNumberGt.encode(message.valueO1, writer.uint32(18).fork()).ldelim();
    }
    if (message.valueO2 !== undefined) {
      ObjectUnionNonPredictable_IWrapperLtStringGt.encode(message.valueO2, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable_IUnionGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable_IUnionGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valueO0 = ObjectUnionNonPredictable_IWrapperLtBooleanGt.decode(reader, reader.uint32());
          break;
        case 2:
          message.valueO1 = ObjectUnionNonPredictable_IWrapperLtNumberGt.decode(reader, reader.uint32());
          break;
        case 3:
          message.valueO2 = ObjectUnionNonPredictable_IWrapperLtStringGt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable_IUnionGt {
    return {
      valueO0: isSet(object.valueO0)
        ? ObjectUnionNonPredictable_IWrapperLtBooleanGt.fromJSON(object.valueO0)
        : undefined,
      valueO1: isSet(object.valueO1)
        ? ObjectUnionNonPredictable_IWrapperLtNumberGt.fromJSON(object.valueO1)
        : undefined,
      valueO2: isSet(object.valueO2)
        ? ObjectUnionNonPredictable_IWrapperLtStringGt.fromJSON(object.valueO2)
        : undefined,
    };
  },

  toJSON(message: ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable_IUnionGt): unknown {
    const obj: any = {};
    message.valueO0 !== undefined &&
      (obj.valueO0 = message.valueO0
        ? ObjectUnionNonPredictable_IWrapperLtBooleanGt.toJSON(message.valueO0)
        : undefined);
    message.valueO1 !== undefined &&
      (obj.valueO1 = message.valueO1
        ? ObjectUnionNonPredictable_IWrapperLtNumberGt.toJSON(message.valueO1)
        : undefined);
    message.valueO2 !== undefined &&
      (obj.valueO2 = message.valueO2
        ? ObjectUnionNonPredictable_IWrapperLtStringGt.toJSON(message.valueO2)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable_IUnionGt>, I>>(
    base?: I,
  ): ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable_IUnionGt {
    return ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable_IUnionGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable_IUnionGt>, I>>(
    object: I,
  ): ObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable_IUnionGt {
    const message = createBaseObjectUnionNonPredictable_IPointerLtObjectUnionNonPredictable_IUnionGt();
    message.valueO0 = (object.valueO0 !== undefined && object.valueO0 !== null)
      ? ObjectUnionNonPredictable_IWrapperLtBooleanGt.fromPartial(object.valueO0)
      : undefined;
    message.valueO1 = (object.valueO1 !== undefined && object.valueO1 !== null)
      ? ObjectUnionNonPredictable_IWrapperLtNumberGt.fromPartial(object.valueO1)
      : undefined;
    message.valueO2 = (object.valueO2 !== undefined && object.valueO2 !== null)
      ? ObjectUnionNonPredictable_IWrapperLtStringGt.fromPartial(object.valueO2)
      : undefined;
    return message;
  },
};

function createBaseObjectUnionNonPredictable_IWrapperLtBooleanGt(): ObjectUnionNonPredictable_IWrapperLtBooleanGt {
  return { value: undefined };
}

export const ObjectUnionNonPredictable_IWrapperLtBooleanGt = {
  encode(message: ObjectUnionNonPredictable_IWrapperLtBooleanGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      ObjectUnionNonPredictable_IPointerLtBooleanGt.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionNonPredictable_IWrapperLtBooleanGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionNonPredictable_IWrapperLtBooleanGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = ObjectUnionNonPredictable_IPointerLtBooleanGt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionNonPredictable_IWrapperLtBooleanGt {
    return {
      value: isSet(object.value) ? ObjectUnionNonPredictable_IPointerLtBooleanGt.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ObjectUnionNonPredictable_IWrapperLtBooleanGt): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = message.value ? ObjectUnionNonPredictable_IPointerLtBooleanGt.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionNonPredictable_IWrapperLtBooleanGt>, I>>(
    base?: I,
  ): ObjectUnionNonPredictable_IWrapperLtBooleanGt {
    return ObjectUnionNonPredictable_IWrapperLtBooleanGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionNonPredictable_IWrapperLtBooleanGt>, I>>(
    object: I,
  ): ObjectUnionNonPredictable_IWrapperLtBooleanGt {
    const message = createBaseObjectUnionNonPredictable_IWrapperLtBooleanGt();
    message.value = (object.value !== undefined && object.value !== null)
      ? ObjectUnionNonPredictable_IPointerLtBooleanGt.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseObjectUnionNonPredictable_IPointerLtBooleanGt(): ObjectUnionNonPredictable_IPointerLtBooleanGt {
  return { value: false };
}

export const ObjectUnionNonPredictable_IPointerLtBooleanGt = {
  encode(message: ObjectUnionNonPredictable_IPointerLtBooleanGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionNonPredictable_IPointerLtBooleanGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionNonPredictable_IPointerLtBooleanGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionNonPredictable_IPointerLtBooleanGt {
    return { value: isSet(object.value) ? Boolean(object.value) : false };
  },

  toJSON(message: ObjectUnionNonPredictable_IPointerLtBooleanGt): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionNonPredictable_IPointerLtBooleanGt>, I>>(
    base?: I,
  ): ObjectUnionNonPredictable_IPointerLtBooleanGt {
    return ObjectUnionNonPredictable_IPointerLtBooleanGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionNonPredictable_IPointerLtBooleanGt>, I>>(
    object: I,
  ): ObjectUnionNonPredictable_IPointerLtBooleanGt {
    const message = createBaseObjectUnionNonPredictable_IPointerLtBooleanGt();
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseObjectUnionNonPredictable_IWrapperLtNumberGt(): ObjectUnionNonPredictable_IWrapperLtNumberGt {
  return { value: undefined };
}

export const ObjectUnionNonPredictable_IWrapperLtNumberGt = {
  encode(message: ObjectUnionNonPredictable_IWrapperLtNumberGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      ObjectUnionNonPredictable_IPointerLtNumberGt.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionNonPredictable_IWrapperLtNumberGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionNonPredictable_IWrapperLtNumberGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = ObjectUnionNonPredictable_IPointerLtNumberGt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionNonPredictable_IWrapperLtNumberGt {
    return {
      value: isSet(object.value) ? ObjectUnionNonPredictable_IPointerLtNumberGt.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ObjectUnionNonPredictable_IWrapperLtNumberGt): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = message.value ? ObjectUnionNonPredictable_IPointerLtNumberGt.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionNonPredictable_IWrapperLtNumberGt>, I>>(
    base?: I,
  ): ObjectUnionNonPredictable_IWrapperLtNumberGt {
    return ObjectUnionNonPredictable_IWrapperLtNumberGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionNonPredictable_IWrapperLtNumberGt>, I>>(
    object: I,
  ): ObjectUnionNonPredictable_IWrapperLtNumberGt {
    const message = createBaseObjectUnionNonPredictable_IWrapperLtNumberGt();
    message.value = (object.value !== undefined && object.value !== null)
      ? ObjectUnionNonPredictable_IPointerLtNumberGt.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseObjectUnionNonPredictable_IPointerLtNumberGt(): ObjectUnionNonPredictable_IPointerLtNumberGt {
  return { value: 0 };
}

export const ObjectUnionNonPredictable_IPointerLtNumberGt = {
  encode(message: ObjectUnionNonPredictable_IPointerLtNumberGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionNonPredictable_IPointerLtNumberGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionNonPredictable_IPointerLtNumberGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionNonPredictable_IPointerLtNumberGt {
    return { value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: ObjectUnionNonPredictable_IPointerLtNumberGt): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionNonPredictable_IPointerLtNumberGt>, I>>(
    base?: I,
  ): ObjectUnionNonPredictable_IPointerLtNumberGt {
    return ObjectUnionNonPredictable_IPointerLtNumberGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionNonPredictable_IPointerLtNumberGt>, I>>(
    object: I,
  ): ObjectUnionNonPredictable_IPointerLtNumberGt {
    const message = createBaseObjectUnionNonPredictable_IPointerLtNumberGt();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseObjectUnionNonPredictable_IWrapperLtStringGt(): ObjectUnionNonPredictable_IWrapperLtStringGt {
  return { value: undefined };
}

export const ObjectUnionNonPredictable_IWrapperLtStringGt = {
  encode(message: ObjectUnionNonPredictable_IWrapperLtStringGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      ObjectUnionNonPredictable_IPointerLtStringGt.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionNonPredictable_IWrapperLtStringGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionNonPredictable_IWrapperLtStringGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = ObjectUnionNonPredictable_IPointerLtStringGt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectUnionNonPredictable_IWrapperLtStringGt {
    return {
      value: isSet(object.value) ? ObjectUnionNonPredictable_IPointerLtStringGt.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ObjectUnionNonPredictable_IWrapperLtStringGt): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = message.value ? ObjectUnionNonPredictable_IPointerLtStringGt.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionNonPredictable_IWrapperLtStringGt>, I>>(
    base?: I,
  ): ObjectUnionNonPredictable_IWrapperLtStringGt {
    return ObjectUnionNonPredictable_IWrapperLtStringGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionNonPredictable_IWrapperLtStringGt>, I>>(
    object: I,
  ): ObjectUnionNonPredictable_IWrapperLtStringGt {
    const message = createBaseObjectUnionNonPredictable_IWrapperLtStringGt();
    message.value = (object.value !== undefined && object.value !== null)
      ? ObjectUnionNonPredictable_IPointerLtStringGt.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseObjectUnionNonPredictable_IPointerLtStringGt(): ObjectUnionNonPredictable_IPointerLtStringGt {
  return { value: "" };
}

export const ObjectUnionNonPredictable_IPointerLtStringGt = {
  encode(message: ObjectUnionNonPredictable_IPointerLtStringGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectUnionNonPredictable_IPointerLtStringGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectUnionNonPredictable_IPointerLtStringGt();
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

  fromJSON(object: any): ObjectUnionNonPredictable_IPointerLtStringGt {
    return { value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: ObjectUnionNonPredictable_IPointerLtStringGt): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectUnionNonPredictable_IPointerLtStringGt>, I>>(
    base?: I,
  ): ObjectUnionNonPredictable_IPointerLtStringGt {
    return ObjectUnionNonPredictable_IPointerLtStringGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectUnionNonPredictable_IPointerLtStringGt>, I>>(
    object: I,
  ): ObjectUnionNonPredictable_IPointerLtStringGt {
    const message = createBaseObjectUnionNonPredictable_IPointerLtStringGt();
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable_IUnionGt.encode(v!, writer.uint32(10).fork())
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
            ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable_IUnionGt.decode(reader, reader.uint32()),
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
          ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable_IUnionGt.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) =>
        e ? ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable_IUnionGt.toJSON(e) : undefined
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
      object.value?.map((e) => ObjectUnionNonPredictable_IWrapperLtObjectUnionNonPredictable_IUnionGt.fromPartial(e)) ||
      [];
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
