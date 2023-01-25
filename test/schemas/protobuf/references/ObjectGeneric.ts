/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ObjectGeneric {
}

export interface ObjectGeneric_ISomethingLtBooleanGt {
  value: boolean;
  child: ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt | undefined;
  elements: ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt[];
}

export interface ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt {
  childValue: boolean;
  childNext: boolean;
}

export interface ObjectGeneric_ISomethingLtNumberGt {
  value: number;
  child: ObjectGeneric_IChildLtNumberCommaSpaceNumberGt | undefined;
  elements: ObjectGeneric_IChildLtNumberCommaSpaceNumberGt[];
}

export interface ObjectGeneric_IChildLtNumberCommaSpaceNumberGt {
  childValue: number;
  childNext: number;
}

export interface ObjectGeneric_ISomethingLtStringGt {
  value: string;
  child: ObjectGeneric_IChildLtStringCommaSpaceStringGt | undefined;
  elements: ObjectGeneric_IChildLtStringCommaSpaceStringGt[];
}

export interface ObjectGeneric_IChildLtStringCommaSpaceStringGt {
  childValue: string;
  childNext: string;
}

export interface Main {
  value:
    | AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric_ISomethingLtStringGtAgt
    | undefined;
}

export interface AltObjectGeneric {
}

export interface AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric {
}

export interface AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric {
}

export interface AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric_ISomethingLtStringGtAgt {
  v0: ObjectGeneric_ISomethingLtBooleanGt | undefined;
  v1: ObjectGeneric_ISomethingLtNumberGt | undefined;
  v2: ObjectGeneric_ISomethingLtStringGt | undefined;
}

function createBaseObjectGeneric(): ObjectGeneric {
  return {};
}

export const ObjectGeneric = {
  encode(_: ObjectGeneric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectGeneric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectGeneric();
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

  fromJSON(_: any): ObjectGeneric {
    return {};
  },

  toJSON(_: ObjectGeneric): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectGeneric>, I>>(base?: I): ObjectGeneric {
    return ObjectGeneric.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectGeneric>, I>>(_: I): ObjectGeneric {
    const message = createBaseObjectGeneric();
    return message;
  },
};

function createBaseObjectGeneric_ISomethingLtBooleanGt(): ObjectGeneric_ISomethingLtBooleanGt {
  return { value: false, child: undefined, elements: [] };
}

export const ObjectGeneric_ISomethingLtBooleanGt = {
  encode(message: ObjectGeneric_ISomethingLtBooleanGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    if (message.child !== undefined) {
      ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt.encode(message.child, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.elements) {
      ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectGeneric_ISomethingLtBooleanGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectGeneric_ISomethingLtBooleanGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bool();
          break;
        case 2:
          message.child = ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt.decode(reader, reader.uint32());
          break;
        case 3:
          message.elements.push(ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectGeneric_ISomethingLtBooleanGt {
    return {
      value: isSet(object.value) ? Boolean(object.value) : false,
      child: isSet(object.child) ? ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt.fromJSON(object.child) : undefined,
      elements: Array.isArray(object?.elements)
        ? object.elements.map((e: any) => ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ObjectGeneric_ISomethingLtBooleanGt): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.child !== undefined &&
      (obj.child = message.child ? ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt.toJSON(message.child) : undefined);
    if (message.elements) {
      obj.elements = message.elements.map((e) =>
        e ? ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt.toJSON(e) : undefined
      );
    } else {
      obj.elements = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectGeneric_ISomethingLtBooleanGt>, I>>(
    base?: I,
  ): ObjectGeneric_ISomethingLtBooleanGt {
    return ObjectGeneric_ISomethingLtBooleanGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectGeneric_ISomethingLtBooleanGt>, I>>(
    object: I,
  ): ObjectGeneric_ISomethingLtBooleanGt {
    const message = createBaseObjectGeneric_ISomethingLtBooleanGt();
    message.value = object.value ?? false;
    message.child = (object.child !== undefined && object.child !== null)
      ? ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt.fromPartial(object.child)
      : undefined;
    message.elements = object.elements?.map((e) => ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt(): ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt {
  return { childValue: false, childNext: false };
}

export const ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt = {
  encode(
    message: ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.childValue === true) {
      writer.uint32(8).bool(message.childValue);
    }
    if (message.childNext === true) {
      writer.uint32(16).bool(message.childNext);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.childValue = reader.bool();
          break;
        case 2:
          message.childNext = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt {
    return {
      childValue: isSet(object.childValue) ? Boolean(object.childValue) : false,
      childNext: isSet(object.childNext) ? Boolean(object.childNext) : false,
    };
  },

  toJSON(message: ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt): unknown {
    const obj: any = {};
    message.childValue !== undefined && (obj.childValue = message.childValue);
    message.childNext !== undefined && (obj.childNext = message.childNext);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt>, I>>(
    base?: I,
  ): ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt {
    return ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt>, I>>(
    object: I,
  ): ObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt {
    const message = createBaseObjectGeneric_IChildLtBooleanCommaSpaceBooleanGt();
    message.childValue = object.childValue ?? false;
    message.childNext = object.childNext ?? false;
    return message;
  },
};

function createBaseObjectGeneric_ISomethingLtNumberGt(): ObjectGeneric_ISomethingLtNumberGt {
  return { value: 0, child: undefined, elements: [] };
}

export const ObjectGeneric_ISomethingLtNumberGt = {
  encode(message: ObjectGeneric_ISomethingLtNumberGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }
    if (message.child !== undefined) {
      ObjectGeneric_IChildLtNumberCommaSpaceNumberGt.encode(message.child, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.elements) {
      ObjectGeneric_IChildLtNumberCommaSpaceNumberGt.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectGeneric_ISomethingLtNumberGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectGeneric_ISomethingLtNumberGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.double();
          break;
        case 2:
          message.child = ObjectGeneric_IChildLtNumberCommaSpaceNumberGt.decode(reader, reader.uint32());
          break;
        case 3:
          message.elements.push(ObjectGeneric_IChildLtNumberCommaSpaceNumberGt.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectGeneric_ISomethingLtNumberGt {
    return {
      value: isSet(object.value) ? Number(object.value) : 0,
      child: isSet(object.child) ? ObjectGeneric_IChildLtNumberCommaSpaceNumberGt.fromJSON(object.child) : undefined,
      elements: Array.isArray(object?.elements)
        ? object.elements.map((e: any) => ObjectGeneric_IChildLtNumberCommaSpaceNumberGt.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ObjectGeneric_ISomethingLtNumberGt): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.child !== undefined &&
      (obj.child = message.child ? ObjectGeneric_IChildLtNumberCommaSpaceNumberGt.toJSON(message.child) : undefined);
    if (message.elements) {
      obj.elements = message.elements.map((e) =>
        e ? ObjectGeneric_IChildLtNumberCommaSpaceNumberGt.toJSON(e) : undefined
      );
    } else {
      obj.elements = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectGeneric_ISomethingLtNumberGt>, I>>(
    base?: I,
  ): ObjectGeneric_ISomethingLtNumberGt {
    return ObjectGeneric_ISomethingLtNumberGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectGeneric_ISomethingLtNumberGt>, I>>(
    object: I,
  ): ObjectGeneric_ISomethingLtNumberGt {
    const message = createBaseObjectGeneric_ISomethingLtNumberGt();
    message.value = object.value ?? 0;
    message.child = (object.child !== undefined && object.child !== null)
      ? ObjectGeneric_IChildLtNumberCommaSpaceNumberGt.fromPartial(object.child)
      : undefined;
    message.elements = object.elements?.map((e) => ObjectGeneric_IChildLtNumberCommaSpaceNumberGt.fromPartial(e)) || [];
    return message;
  },
};

function createBaseObjectGeneric_IChildLtNumberCommaSpaceNumberGt(): ObjectGeneric_IChildLtNumberCommaSpaceNumberGt {
  return { childValue: 0, childNext: 0 };
}

export const ObjectGeneric_IChildLtNumberCommaSpaceNumberGt = {
  encode(
    message: ObjectGeneric_IChildLtNumberCommaSpaceNumberGt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.childValue !== 0) {
      writer.uint32(9).double(message.childValue);
    }
    if (message.childNext !== 0) {
      writer.uint32(17).double(message.childNext);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectGeneric_IChildLtNumberCommaSpaceNumberGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectGeneric_IChildLtNumberCommaSpaceNumberGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.childValue = reader.double();
          break;
        case 2:
          message.childNext = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectGeneric_IChildLtNumberCommaSpaceNumberGt {
    return {
      childValue: isSet(object.childValue) ? Number(object.childValue) : 0,
      childNext: isSet(object.childNext) ? Number(object.childNext) : 0,
    };
  },

  toJSON(message: ObjectGeneric_IChildLtNumberCommaSpaceNumberGt): unknown {
    const obj: any = {};
    message.childValue !== undefined && (obj.childValue = message.childValue);
    message.childNext !== undefined && (obj.childNext = message.childNext);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectGeneric_IChildLtNumberCommaSpaceNumberGt>, I>>(
    base?: I,
  ): ObjectGeneric_IChildLtNumberCommaSpaceNumberGt {
    return ObjectGeneric_IChildLtNumberCommaSpaceNumberGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectGeneric_IChildLtNumberCommaSpaceNumberGt>, I>>(
    object: I,
  ): ObjectGeneric_IChildLtNumberCommaSpaceNumberGt {
    const message = createBaseObjectGeneric_IChildLtNumberCommaSpaceNumberGt();
    message.childValue = object.childValue ?? 0;
    message.childNext = object.childNext ?? 0;
    return message;
  },
};

function createBaseObjectGeneric_ISomethingLtStringGt(): ObjectGeneric_ISomethingLtStringGt {
  return { value: "", child: undefined, elements: [] };
}

export const ObjectGeneric_ISomethingLtStringGt = {
  encode(message: ObjectGeneric_ISomethingLtStringGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    if (message.child !== undefined) {
      ObjectGeneric_IChildLtStringCommaSpaceStringGt.encode(message.child, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.elements) {
      ObjectGeneric_IChildLtStringCommaSpaceStringGt.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectGeneric_ISomethingLtStringGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectGeneric_ISomethingLtStringGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        case 2:
          message.child = ObjectGeneric_IChildLtStringCommaSpaceStringGt.decode(reader, reader.uint32());
          break;
        case 3:
          message.elements.push(ObjectGeneric_IChildLtStringCommaSpaceStringGt.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectGeneric_ISomethingLtStringGt {
    return {
      value: isSet(object.value) ? String(object.value) : "",
      child: isSet(object.child) ? ObjectGeneric_IChildLtStringCommaSpaceStringGt.fromJSON(object.child) : undefined,
      elements: Array.isArray(object?.elements)
        ? object.elements.map((e: any) => ObjectGeneric_IChildLtStringCommaSpaceStringGt.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ObjectGeneric_ISomethingLtStringGt): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.child !== undefined &&
      (obj.child = message.child ? ObjectGeneric_IChildLtStringCommaSpaceStringGt.toJSON(message.child) : undefined);
    if (message.elements) {
      obj.elements = message.elements.map((e) =>
        e ? ObjectGeneric_IChildLtStringCommaSpaceStringGt.toJSON(e) : undefined
      );
    } else {
      obj.elements = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectGeneric_ISomethingLtStringGt>, I>>(
    base?: I,
  ): ObjectGeneric_ISomethingLtStringGt {
    return ObjectGeneric_ISomethingLtStringGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectGeneric_ISomethingLtStringGt>, I>>(
    object: I,
  ): ObjectGeneric_ISomethingLtStringGt {
    const message = createBaseObjectGeneric_ISomethingLtStringGt();
    message.value = object.value ?? "";
    message.child = (object.child !== undefined && object.child !== null)
      ? ObjectGeneric_IChildLtStringCommaSpaceStringGt.fromPartial(object.child)
      : undefined;
    message.elements = object.elements?.map((e) => ObjectGeneric_IChildLtStringCommaSpaceStringGt.fromPartial(e)) || [];
    return message;
  },
};

function createBaseObjectGeneric_IChildLtStringCommaSpaceStringGt(): ObjectGeneric_IChildLtStringCommaSpaceStringGt {
  return { childValue: "", childNext: "" };
}

export const ObjectGeneric_IChildLtStringCommaSpaceStringGt = {
  encode(
    message: ObjectGeneric_IChildLtStringCommaSpaceStringGt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.childValue !== "") {
      writer.uint32(10).string(message.childValue);
    }
    if (message.childNext !== "") {
      writer.uint32(18).string(message.childNext);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectGeneric_IChildLtStringCommaSpaceStringGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectGeneric_IChildLtStringCommaSpaceStringGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.childValue = reader.string();
          break;
        case 2:
          message.childNext = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectGeneric_IChildLtStringCommaSpaceStringGt {
    return {
      childValue: isSet(object.childValue) ? String(object.childValue) : "",
      childNext: isSet(object.childNext) ? String(object.childNext) : "",
    };
  },

  toJSON(message: ObjectGeneric_IChildLtStringCommaSpaceStringGt): unknown {
    const obj: any = {};
    message.childValue !== undefined && (obj.childValue = message.childValue);
    message.childNext !== undefined && (obj.childNext = message.childNext);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectGeneric_IChildLtStringCommaSpaceStringGt>, I>>(
    base?: I,
  ): ObjectGeneric_IChildLtStringCommaSpaceStringGt {
    return ObjectGeneric_IChildLtStringCommaSpaceStringGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectGeneric_IChildLtStringCommaSpaceStringGt>, I>>(
    object: I,
  ): ObjectGeneric_IChildLtStringCommaSpaceStringGt {
    const message = createBaseObjectGeneric_IChildLtStringCommaSpaceStringGt();
    message.childValue = object.childValue ?? "";
    message.childNext = object.childNext ?? "";
    return message;
  },
};

function createBaseMain(): Main {
  return { value: undefined };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric_ISomethingLtStringGtAgt
        .encode(message.value, writer.uint32(10).fork()).ldelim();
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
          message.value =
            AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric_ISomethingLtStringGtAgt
              .decode(reader, reader.uint32());
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
        ? AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric_ISomethingLtStringGtAgt
          .fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value
      ? AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric_ISomethingLtStringGtAgt
        .toJSON(message.value)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Main>, I>>(base?: I): Main {
    return Main.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Main>, I>>(object: I): Main {
    const message = createBaseMain();
    message.value = (object.value !== undefined && object.value !== null)
      ? AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric_ISomethingLtStringGtAgt
        .fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseAltObjectGeneric(): AltObjectGeneric {
  return {};
}

export const AltObjectGeneric = {
  encode(_: AltObjectGeneric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AltObjectGeneric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltObjectGeneric();
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

  fromJSON(_: any): AltObjectGeneric {
    return {};
  },

  toJSON(_: AltObjectGeneric): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AltObjectGeneric>, I>>(base?: I): AltObjectGeneric {
    return AltObjectGeneric.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AltObjectGeneric>, I>>(_: I): AltObjectGeneric {
    const message = createBaseAltObjectGeneric();
    return message;
  },
};

function createBaseAltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric(): AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric {
  return {};
}

export const AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric = {
  encode(
    _: AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric();
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

  fromJSON(_: any): AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric {
    return {};
  },

  toJSON(_: AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric>, I>>(
    base?: I,
  ): AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric {
    return AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric>, I>>(
    _: I,
  ): AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric {
    const message = createBaseAltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric();
    return message;
  },
};

function createBaseAltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric(): AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric {
  return {};
}

export const AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric =
  {
    encode(
      _: AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseAltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric();
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
    ): AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric {
      return {};
    },

    toJSON(
      _: AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric
        >,
        I
      >,
    >(
      base?: I,
    ): AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric {
      return AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric
        >,
        I
      >,
    >(_: I): AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric {
      const message =
        createBaseAltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric();
      return message;
    },
  };

function createBaseAltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric_ISomethingLtStringGtAgt(): AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric_ISomethingLtStringGtAgt {
  return { v0: undefined, v1: undefined, v2: undefined };
}

export const AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric_ISomethingLtStringGtAgt =
  {
    encode(
      message:
        AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric_ISomethingLtStringGtAgt,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.v0 !== undefined) {
        ObjectGeneric_ISomethingLtBooleanGt.encode(message.v0, writer.uint32(10).fork()).ldelim();
      }
      if (message.v1 !== undefined) {
        ObjectGeneric_ISomethingLtNumberGt.encode(message.v1, writer.uint32(18).fork()).ldelim();
      }
      if (message.v2 !== undefined) {
        ObjectGeneric_ISomethingLtStringGt.encode(message.v2, writer.uint32(26).fork()).ldelim();
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric_ISomethingLtStringGtAgt {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseAltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric_ISomethingLtStringGtAgt();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.v0 = ObjectGeneric_ISomethingLtBooleanGt.decode(reader, reader.uint32());
            break;
          case 2:
            message.v1 = ObjectGeneric_ISomethingLtNumberGt.decode(reader, reader.uint32());
            break;
          case 3:
            message.v2 = ObjectGeneric_ISomethingLtStringGt.decode(reader, reader.uint32());
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
    ): AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric_ISomethingLtStringGtAgt {
      return {
        v0: isSet(object.v0) ? ObjectGeneric_ISomethingLtBooleanGt.fromJSON(object.v0) : undefined,
        v1: isSet(object.v1) ? ObjectGeneric_ISomethingLtNumberGt.fromJSON(object.v1) : undefined,
        v2: isSet(object.v2) ? ObjectGeneric_ISomethingLtStringGt.fromJSON(object.v2) : undefined,
      };
    },

    toJSON(
      message:
        AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric_ISomethingLtStringGtAgt,
    ): unknown {
      const obj: any = {};
      message.v0 !== undefined &&
        (obj.v0 = message.v0 ? ObjectGeneric_ISomethingLtBooleanGt.toJSON(message.v0) : undefined);
      message.v1 !== undefined &&
        (obj.v1 = message.v1 ? ObjectGeneric_ISomethingLtNumberGt.toJSON(message.v1) : undefined);
      message.v2 !== undefined &&
        (obj.v2 = message.v2 ? ObjectGeneric_ISomethingLtStringGt.toJSON(message.v2) : undefined);
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric_ISomethingLtStringGtAgt
        >,
        I
      >,
    >(
      base?: I,
    ): AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric_ISomethingLtStringGtAgt {
      return AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric_ISomethingLtStringGtAgt
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric_ISomethingLtStringGtAgt
        >,
        I
      >,
    >(
      object: I,
    ): AltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric_ISomethingLtStringGtAgt {
      const message =
        createBaseAltObjectGeneric_ISomethingLtBooleanGtCommaSpaceObjectGeneric_ISomethingLtNumberGtCommaSpaceObjectGeneric_ISomethingLtStringGtAgt();
      message.v0 = (object.v0 !== undefined && object.v0 !== null)
        ? ObjectGeneric_ISomethingLtBooleanGt.fromPartial(object.v0)
        : undefined;
      message.v1 = (object.v1 !== undefined && object.v1 !== null)
        ? ObjectGeneric_ISomethingLtNumberGt.fromPartial(object.v1)
        : undefined;
      message.v2 = (object.v2 !== undefined && object.v2 !== null)
        ? ObjectGeneric_ISomethingLtStringGt.fromPartial(object.v2)
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
