/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ObjectPropertyNullable {
}

export interface ObjectPropertyNullable_IPointerLtBooleanGt {
  value?: boolean | undefined;
}

export interface ObjectPropertyNullable_IPointerLtNumberGt {
  value?: number | undefined;
}

export interface ObjectPropertyNullable_IPointerLtStringGt {
  value?: string | undefined;
}

export interface ObjectPropertyNullable_IPointerLtObjectPropertyNullable {
}

export interface ObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGt {
  value?: ObjectPropertyNullable_IMember | undefined;
}

export interface ObjectPropertyNullable_IMember {
  id: string;
  name?: string | undefined;
  grade?: number | undefined;
  serial?: number | undefined;
  activated?: boolean | undefined;
}

export interface Main {
  value:
    | AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGtGtAgt
    | undefined;
}

export interface AltArrayLtObjectPropertyNullable {
}

export interface AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable {
}

export interface AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable {
}

export interface AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable {
}

export interface AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable {
}

export interface AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGtGtAgt {
  v0: ObjectPropertyNullable_IPointerLtBooleanGt[];
  v1: ObjectPropertyNullable_IPointerLtNumberGt[];
  v2: ObjectPropertyNullable_IPointerLtStringGt[];
  v3: ObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGt[];
}

function createBaseObjectPropertyNullable(): ObjectPropertyNullable {
  return {};
}

export const ObjectPropertyNullable = {
  encode(_: ObjectPropertyNullable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectPropertyNullable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectPropertyNullable();
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

  fromJSON(_: any): ObjectPropertyNullable {
    return {};
  },

  toJSON(_: ObjectPropertyNullable): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectPropertyNullable>, I>>(base?: I): ObjectPropertyNullable {
    return ObjectPropertyNullable.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectPropertyNullable>, I>>(_: I): ObjectPropertyNullable {
    const message = createBaseObjectPropertyNullable();
    return message;
  },
};

function createBaseObjectPropertyNullable_IPointerLtBooleanGt(): ObjectPropertyNullable_IPointerLtBooleanGt {
  return { value: undefined };
}

export const ObjectPropertyNullable_IPointerLtBooleanGt = {
  encode(message: ObjectPropertyNullable_IPointerLtBooleanGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectPropertyNullable_IPointerLtBooleanGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectPropertyNullable_IPointerLtBooleanGt();
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

  fromJSON(object: any): ObjectPropertyNullable_IPointerLtBooleanGt {
    return { value: isSet(object.value) ? Boolean(object.value) : undefined };
  },

  toJSON(message: ObjectPropertyNullable_IPointerLtBooleanGt): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectPropertyNullable_IPointerLtBooleanGt>, I>>(
    base?: I,
  ): ObjectPropertyNullable_IPointerLtBooleanGt {
    return ObjectPropertyNullable_IPointerLtBooleanGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectPropertyNullable_IPointerLtBooleanGt>, I>>(
    object: I,
  ): ObjectPropertyNullable_IPointerLtBooleanGt {
    const message = createBaseObjectPropertyNullable_IPointerLtBooleanGt();
    message.value = object.value ?? undefined;
    return message;
  },
};

function createBaseObjectPropertyNullable_IPointerLtNumberGt(): ObjectPropertyNullable_IPointerLtNumberGt {
  return { value: undefined };
}

export const ObjectPropertyNullable_IPointerLtNumberGt = {
  encode(message: ObjectPropertyNullable_IPointerLtNumberGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      writer.uint32(9).double(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectPropertyNullable_IPointerLtNumberGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectPropertyNullable_IPointerLtNumberGt();
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

  fromJSON(object: any): ObjectPropertyNullable_IPointerLtNumberGt {
    return { value: isSet(object.value) ? Number(object.value) : undefined };
  },

  toJSON(message: ObjectPropertyNullable_IPointerLtNumberGt): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectPropertyNullable_IPointerLtNumberGt>, I>>(
    base?: I,
  ): ObjectPropertyNullable_IPointerLtNumberGt {
    return ObjectPropertyNullable_IPointerLtNumberGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectPropertyNullable_IPointerLtNumberGt>, I>>(
    object: I,
  ): ObjectPropertyNullable_IPointerLtNumberGt {
    const message = createBaseObjectPropertyNullable_IPointerLtNumberGt();
    message.value = object.value ?? undefined;
    return message;
  },
};

function createBaseObjectPropertyNullable_IPointerLtStringGt(): ObjectPropertyNullable_IPointerLtStringGt {
  return { value: undefined };
}

export const ObjectPropertyNullable_IPointerLtStringGt = {
  encode(message: ObjectPropertyNullable_IPointerLtStringGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectPropertyNullable_IPointerLtStringGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectPropertyNullable_IPointerLtStringGt();
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

  fromJSON(object: any): ObjectPropertyNullable_IPointerLtStringGt {
    return { value: isSet(object.value) ? String(object.value) : undefined };
  },

  toJSON(message: ObjectPropertyNullable_IPointerLtStringGt): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectPropertyNullable_IPointerLtStringGt>, I>>(
    base?: I,
  ): ObjectPropertyNullable_IPointerLtStringGt {
    return ObjectPropertyNullable_IPointerLtStringGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectPropertyNullable_IPointerLtStringGt>, I>>(
    object: I,
  ): ObjectPropertyNullable_IPointerLtStringGt {
    const message = createBaseObjectPropertyNullable_IPointerLtStringGt();
    message.value = object.value ?? undefined;
    return message;
  },
};

function createBaseObjectPropertyNullable_IPointerLtObjectPropertyNullable(): ObjectPropertyNullable_IPointerLtObjectPropertyNullable {
  return {};
}

export const ObjectPropertyNullable_IPointerLtObjectPropertyNullable = {
  encode(
    _: ObjectPropertyNullable_IPointerLtObjectPropertyNullable,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectPropertyNullable_IPointerLtObjectPropertyNullable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectPropertyNullable_IPointerLtObjectPropertyNullable();
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

  fromJSON(_: any): ObjectPropertyNullable_IPointerLtObjectPropertyNullable {
    return {};
  },

  toJSON(_: ObjectPropertyNullable_IPointerLtObjectPropertyNullable): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectPropertyNullable_IPointerLtObjectPropertyNullable>, I>>(
    base?: I,
  ): ObjectPropertyNullable_IPointerLtObjectPropertyNullable {
    return ObjectPropertyNullable_IPointerLtObjectPropertyNullable.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectPropertyNullable_IPointerLtObjectPropertyNullable>, I>>(
    _: I,
  ): ObjectPropertyNullable_IPointerLtObjectPropertyNullable {
    const message = createBaseObjectPropertyNullable_IPointerLtObjectPropertyNullable();
    return message;
  },
};

function createBaseObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGt(): ObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGt {
  return { value: undefined };
}

export const ObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGt = {
  encode(
    message: ObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== undefined) {
      ObjectPropertyNullable_IMember.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = ObjectPropertyNullable_IMember.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGt {
    return { value: isSet(object.value) ? ObjectPropertyNullable_IMember.fromJSON(object.value) : undefined };
  },

  toJSON(message: ObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGt): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = message.value ? ObjectPropertyNullable_IMember.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGt>, I>>(
    base?: I,
  ): ObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGt {
    return ObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGt>, I>>(
    object: I,
  ): ObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGt {
    const message = createBaseObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGt();
    message.value = (object.value !== undefined && object.value !== null)
      ? ObjectPropertyNullable_IMember.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseObjectPropertyNullable_IMember(): ObjectPropertyNullable_IMember {
  return { id: "", name: undefined, grade: undefined, serial: undefined, activated: undefined };
}

export const ObjectPropertyNullable_IMember = {
  encode(message: ObjectPropertyNullable_IMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.grade !== undefined) {
      writer.uint32(25).double(message.grade);
    }
    if (message.serial !== undefined) {
      writer.uint32(33).double(message.serial);
    }
    if (message.activated !== undefined) {
      writer.uint32(40).bool(message.activated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectPropertyNullable_IMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectPropertyNullable_IMember();
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
          message.grade = reader.double();
          break;
        case 4:
          message.serial = reader.double();
          break;
        case 5:
          message.activated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectPropertyNullable_IMember {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : undefined,
      grade: isSet(object.grade) ? Number(object.grade) : undefined,
      serial: isSet(object.serial) ? Number(object.serial) : undefined,
      activated: isSet(object.activated) ? Boolean(object.activated) : undefined,
    };
  },

  toJSON(message: ObjectPropertyNullable_IMember): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.grade !== undefined && (obj.grade = message.grade);
    message.serial !== undefined && (obj.serial = message.serial);
    message.activated !== undefined && (obj.activated = message.activated);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectPropertyNullable_IMember>, I>>(base?: I): ObjectPropertyNullable_IMember {
    return ObjectPropertyNullable_IMember.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectPropertyNullable_IMember>, I>>(
    object: I,
  ): ObjectPropertyNullable_IMember {
    const message = createBaseObjectPropertyNullable_IMember();
    message.id = object.id ?? "";
    message.name = object.name ?? undefined;
    message.grade = object.grade ?? undefined;
    message.serial = object.serial ?? undefined;
    message.activated = object.activated ?? undefined;
    return message;
  },
};

function createBaseMain(): Main {
  return { value: undefined };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGtGtAgt
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
            AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGtGtAgt
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
        ? AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGtGtAgt
          .fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value
      ? AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGtGtAgt
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
      ? AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGtGtAgt
        .fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseAltArrayLtObjectPropertyNullable(): AltArrayLtObjectPropertyNullable {
  return {};
}

export const AltArrayLtObjectPropertyNullable = {
  encode(_: AltArrayLtObjectPropertyNullable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AltArrayLtObjectPropertyNullable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltArrayLtObjectPropertyNullable();
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

  fromJSON(_: any): AltArrayLtObjectPropertyNullable {
    return {};
  },

  toJSON(_: AltArrayLtObjectPropertyNullable): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AltArrayLtObjectPropertyNullable>, I>>(
    base?: I,
  ): AltArrayLtObjectPropertyNullable {
    return AltArrayLtObjectPropertyNullable.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AltArrayLtObjectPropertyNullable>, I>>(
    _: I,
  ): AltArrayLtObjectPropertyNullable {
    const message = createBaseAltArrayLtObjectPropertyNullable();
    return message;
  },
};

function createBaseAltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable(): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable {
  return {};
}

export const AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable = {
  encode(
    _: AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseAltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable();
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

  fromJSON(_: any): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable {
    return {};
  },

  toJSON(_: AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable>,
      I
    >,
  >(base?: I): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable {
    return AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable>,
      I
    >,
  >(_: I): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable {
    const message =
      createBaseAltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable();
    return message;
  },
};

function createBaseAltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable(): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable {
  return {};
}

export const AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable =
  {
    encode(
      _: AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseAltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable();
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
    ): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable {
      return {};
    },

    toJSON(
      _: AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable
        >,
        I
      >,
    >(
      base?: I,
    ): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable {
      return AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable
        >,
        I
      >,
    >(
      _: I,
    ): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable {
      const message =
        createBaseAltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable();
      return message;
    },
  };

function createBaseAltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable(): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable {
  return {};
}

export const AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable =
  {
    encode(
      _: AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseAltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable();
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
    ): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable {
      return {};
    },

    toJSON(
      _: AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable
        >,
        I
      >,
    >(
      base?: I,
    ): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable {
      return AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable
        >,
        I
      >,
    >(
      _: I,
    ): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable {
      const message =
        createBaseAltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable();
      return message;
    },
  };

function createBaseAltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable(): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable {
  return {};
}

export const AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable =
  {
    encode(
      _: AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseAltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable();
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
    ): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable {
      return {};
    },

    toJSON(
      _: AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable
        >,
        I
      >,
    >(
      base?: I,
    ): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable {
      return AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable
        >,
        I
      >,
    >(
      _: I,
    ): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable {
      const message =
        createBaseAltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable();
      return message;
    },
  };

function createBaseAltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGtGtAgt(): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGtGtAgt {
  return { v0: [], v1: [], v2: [], v3: [] };
}

export const AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGtGtAgt =
  {
    encode(
      message:
        AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGtGtAgt,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      for (const v of message.v0) {
        ObjectPropertyNullable_IPointerLtBooleanGt.encode(v!, writer.uint32(10).fork()).ldelim();
      }
      for (const v of message.v1) {
        ObjectPropertyNullable_IPointerLtNumberGt.encode(v!, writer.uint32(18).fork()).ldelim();
      }
      for (const v of message.v2) {
        ObjectPropertyNullable_IPointerLtStringGt.encode(v!, writer.uint32(26).fork()).ldelim();
      }
      for (const v of message.v3) {
        ObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGt.encode(v!, writer.uint32(34).fork()).ldelim();
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGtGtAgt {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseAltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGtGtAgt();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.v0.push(ObjectPropertyNullable_IPointerLtBooleanGt.decode(reader, reader.uint32()));
            break;
          case 2:
            message.v1.push(ObjectPropertyNullable_IPointerLtNumberGt.decode(reader, reader.uint32()));
            break;
          case 3:
            message.v2.push(ObjectPropertyNullable_IPointerLtStringGt.decode(reader, reader.uint32()));
            break;
          case 4:
            message.v3.push(
              ObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGt.decode(reader, reader.uint32()),
            );
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
    ): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGtGtAgt {
      return {
        v0: Array.isArray(object?.v0)
          ? object.v0.map((e: any) => ObjectPropertyNullable_IPointerLtBooleanGt.fromJSON(e))
          : [],
        v1: Array.isArray(object?.v1)
          ? object.v1.map((e: any) => ObjectPropertyNullable_IPointerLtNumberGt.fromJSON(e))
          : [],
        v2: Array.isArray(object?.v2)
          ? object.v2.map((e: any) => ObjectPropertyNullable_IPointerLtStringGt.fromJSON(e))
          : [],
        v3: Array.isArray(object?.v3)
          ? object.v3.map((e: any) => ObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGt.fromJSON(e))
          : [],
      };
    },

    toJSON(
      message:
        AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGtGtAgt,
    ): unknown {
      const obj: any = {};
      if (message.v0) {
        obj.v0 = message.v0.map((e) => e ? ObjectPropertyNullable_IPointerLtBooleanGt.toJSON(e) : undefined);
      } else {
        obj.v0 = [];
      }
      if (message.v1) {
        obj.v1 = message.v1.map((e) => e ? ObjectPropertyNullable_IPointerLtNumberGt.toJSON(e) : undefined);
      } else {
        obj.v1 = [];
      }
      if (message.v2) {
        obj.v2 = message.v2.map((e) => e ? ObjectPropertyNullable_IPointerLtStringGt.toJSON(e) : undefined);
      } else {
        obj.v2 = [];
      }
      if (message.v3) {
        obj.v3 = message.v3.map((e) =>
          e ? ObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGt.toJSON(e) : undefined
        );
      } else {
        obj.v3 = [];
      }
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGtGtAgt
        >,
        I
      >,
    >(
      base?: I,
    ): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGtGtAgt {
      return AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGtGtAgt
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGtGtAgt
        >,
        I
      >,
    >(
      object: I,
    ): AltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGtGtAgt {
      const message =
        createBaseAltArrayLtObjectPropertyNullable_IPointerLtBooleanGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtNumberGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtStringGtGtCommaSpaceArrayLtObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGtGtAgt();
      message.v0 = object.v0?.map((e) => ObjectPropertyNullable_IPointerLtBooleanGt.fromPartial(e)) || [];
      message.v1 = object.v1?.map((e) => ObjectPropertyNullable_IPointerLtNumberGt.fromPartial(e)) || [];
      message.v2 = object.v2?.map((e) => ObjectPropertyNullable_IPointerLtStringGt.fromPartial(e)) || [];
      message.v3 =
        object.v3?.map((e) => ObjectPropertyNullable_IPointerLtObjectPropertyNullable_IMemberGt.fromPartial(e)) || [];
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
