/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ObjectNullable {
}

export interface ObjectNullable_IProduct {
  name: string;
  manufacturer: ObjectNullable_IManufacturer | undefined;
  brand?: ObjectNullable_IBrand | undefined;
  similarO0?: ObjectNullable_IManufacturer | undefined;
  similarO1?: ObjectNullable_IBrand | undefined;
}

export interface ObjectNullable_IManufacturer {
  type: string;
  name: string;
}

export interface ObjectNullable_IBrand {
  type: string;
  name: string;
}

export interface Main {
  value: AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable_IProductAgt | undefined;
}

export interface AltObjectNullable {
}

export interface AltObjectNullable_IProductCommaSpaceObjectNullable {
}

export interface AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable {
}

export interface AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable_IProductAgt {
  v0: ObjectNullable_IProduct | undefined;
  v1: ObjectNullable_IProduct | undefined;
  v2: ObjectNullable_IProduct | undefined;
}

function createBaseObjectNullable(): ObjectNullable {
  return {};
}

export const ObjectNullable = {
  encode(_: ObjectNullable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectNullable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectNullable();
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

  fromJSON(_: any): ObjectNullable {
    return {};
  },

  toJSON(_: ObjectNullable): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectNullable>, I>>(base?: I): ObjectNullable {
    return ObjectNullable.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectNullable>, I>>(_: I): ObjectNullable {
    const message = createBaseObjectNullable();
    return message;
  },
};

function createBaseObjectNullable_IProduct(): ObjectNullable_IProduct {
  return { name: "", manufacturer: undefined, brand: undefined, similarO0: undefined, similarO1: undefined };
}

export const ObjectNullable_IProduct = {
  encode(message: ObjectNullable_IProduct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.manufacturer !== undefined) {
      ObjectNullable_IManufacturer.encode(message.manufacturer, writer.uint32(18).fork()).ldelim();
    }
    if (message.brand !== undefined) {
      ObjectNullable_IBrand.encode(message.brand, writer.uint32(26).fork()).ldelim();
    }
    if (message.similarO0 !== undefined) {
      ObjectNullable_IManufacturer.encode(message.similarO0, writer.uint32(34).fork()).ldelim();
    }
    if (message.similarO1 !== undefined) {
      ObjectNullable_IBrand.encode(message.similarO1, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectNullable_IProduct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectNullable_IProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.manufacturer = ObjectNullable_IManufacturer.decode(reader, reader.uint32());
          break;
        case 3:
          message.brand = ObjectNullable_IBrand.decode(reader, reader.uint32());
          break;
        case 4:
          message.similarO0 = ObjectNullable_IManufacturer.decode(reader, reader.uint32());
          break;
        case 5:
          message.similarO1 = ObjectNullable_IBrand.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectNullable_IProduct {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      manufacturer: isSet(object.manufacturer) ? ObjectNullable_IManufacturer.fromJSON(object.manufacturer) : undefined,
      brand: isSet(object.brand) ? ObjectNullable_IBrand.fromJSON(object.brand) : undefined,
      similarO0: isSet(object.similarO0) ? ObjectNullable_IManufacturer.fromJSON(object.similarO0) : undefined,
      similarO1: isSet(object.similarO1) ? ObjectNullable_IBrand.fromJSON(object.similarO1) : undefined,
    };
  },

  toJSON(message: ObjectNullable_IProduct): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.manufacturer !== undefined &&
      (obj.manufacturer = message.manufacturer ? ObjectNullable_IManufacturer.toJSON(message.manufacturer) : undefined);
    message.brand !== undefined &&
      (obj.brand = message.brand ? ObjectNullable_IBrand.toJSON(message.brand) : undefined);
    message.similarO0 !== undefined &&
      (obj.similarO0 = message.similarO0 ? ObjectNullable_IManufacturer.toJSON(message.similarO0) : undefined);
    message.similarO1 !== undefined &&
      (obj.similarO1 = message.similarO1 ? ObjectNullable_IBrand.toJSON(message.similarO1) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectNullable_IProduct>, I>>(base?: I): ObjectNullable_IProduct {
    return ObjectNullable_IProduct.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectNullable_IProduct>, I>>(object: I): ObjectNullable_IProduct {
    const message = createBaseObjectNullable_IProduct();
    message.name = object.name ?? "";
    message.manufacturer = (object.manufacturer !== undefined && object.manufacturer !== null)
      ? ObjectNullable_IManufacturer.fromPartial(object.manufacturer)
      : undefined;
    message.brand = (object.brand !== undefined && object.brand !== null)
      ? ObjectNullable_IBrand.fromPartial(object.brand)
      : undefined;
    message.similarO0 = (object.similarO0 !== undefined && object.similarO0 !== null)
      ? ObjectNullable_IManufacturer.fromPartial(object.similarO0)
      : undefined;
    message.similarO1 = (object.similarO1 !== undefined && object.similarO1 !== null)
      ? ObjectNullable_IBrand.fromPartial(object.similarO1)
      : undefined;
    return message;
  },
};

function createBaseObjectNullable_IManufacturer(): ObjectNullable_IManufacturer {
  return { type: "", name: "" };
}

export const ObjectNullable_IManufacturer = {
  encode(message: ObjectNullable_IManufacturer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectNullable_IManufacturer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectNullable_IManufacturer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectNullable_IManufacturer {
    return { type: isSet(object.type) ? String(object.type) : "", name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: ObjectNullable_IManufacturer): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectNullable_IManufacturer>, I>>(base?: I): ObjectNullable_IManufacturer {
    return ObjectNullable_IManufacturer.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectNullable_IManufacturer>, I>>(object: I): ObjectNullable_IManufacturer {
    const message = createBaseObjectNullable_IManufacturer();
    message.type = object.type ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseObjectNullable_IBrand(): ObjectNullable_IBrand {
  return { type: "", name: "" };
}

export const ObjectNullable_IBrand = {
  encode(message: ObjectNullable_IBrand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectNullable_IBrand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectNullable_IBrand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectNullable_IBrand {
    return { type: isSet(object.type) ? String(object.type) : "", name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: ObjectNullable_IBrand): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectNullable_IBrand>, I>>(base?: I): ObjectNullable_IBrand {
    return ObjectNullable_IBrand.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectNullable_IBrand>, I>>(object: I): ObjectNullable_IBrand {
    const message = createBaseObjectNullable_IBrand();
    message.type = object.type ?? "";
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
      AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable_IProductAgt.encode(
        message.value,
        writer.uint32(10).fork(),
      ).ldelim();
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
            AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable_IProductAgt.decode(
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

  fromJSON(object: any): Main {
    return {
      value: isSet(object.value)
        ? AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable_IProductAgt.fromJSON(
          object.value,
        )
        : undefined,
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value
      ? AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable_IProductAgt.toJSON(
        message.value,
      )
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Main>, I>>(base?: I): Main {
    return Main.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Main>, I>>(object: I): Main {
    const message = createBaseMain();
    message.value = (object.value !== undefined && object.value !== null)
      ? AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable_IProductAgt.fromPartial(
        object.value,
      )
      : undefined;
    return message;
  },
};

function createBaseAltObjectNullable(): AltObjectNullable {
  return {};
}

export const AltObjectNullable = {
  encode(_: AltObjectNullable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AltObjectNullable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltObjectNullable();
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

  fromJSON(_: any): AltObjectNullable {
    return {};
  },

  toJSON(_: AltObjectNullable): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AltObjectNullable>, I>>(base?: I): AltObjectNullable {
    return AltObjectNullable.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AltObjectNullable>, I>>(_: I): AltObjectNullable {
    const message = createBaseAltObjectNullable();
    return message;
  },
};

function createBaseAltObjectNullable_IProductCommaSpaceObjectNullable(): AltObjectNullable_IProductCommaSpaceObjectNullable {
  return {};
}

export const AltObjectNullable_IProductCommaSpaceObjectNullable = {
  encode(_: AltObjectNullable_IProductCommaSpaceObjectNullable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AltObjectNullable_IProductCommaSpaceObjectNullable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltObjectNullable_IProductCommaSpaceObjectNullable();
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

  fromJSON(_: any): AltObjectNullable_IProductCommaSpaceObjectNullable {
    return {};
  },

  toJSON(_: AltObjectNullable_IProductCommaSpaceObjectNullable): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AltObjectNullable_IProductCommaSpaceObjectNullable>, I>>(
    base?: I,
  ): AltObjectNullable_IProductCommaSpaceObjectNullable {
    return AltObjectNullable_IProductCommaSpaceObjectNullable.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AltObjectNullable_IProductCommaSpaceObjectNullable>, I>>(
    _: I,
  ): AltObjectNullable_IProductCommaSpaceObjectNullable {
    const message = createBaseAltObjectNullable_IProductCommaSpaceObjectNullable();
    return message;
  },
};

function createBaseAltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable(): AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable {
  return {};
}

export const AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable = {
  encode(
    _: AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable();
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

  fromJSON(_: any): AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable {
    return {};
  },

  toJSON(_: AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable>,
      I
    >,
  >(base?: I): AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable {
    return AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<
      DeepPartial<AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable>,
      I
    >,
  >(_: I): AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable {
    const message = createBaseAltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable();
    return message;
  },
};

function createBaseAltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable_IProductAgt(): AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable_IProductAgt {
  return { v0: undefined, v1: undefined, v2: undefined };
}

export const AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable_IProductAgt = {
  encode(
    message: AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable_IProductAgt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.v0 !== undefined) {
      ObjectNullable_IProduct.encode(message.v0, writer.uint32(10).fork()).ldelim();
    }
    if (message.v1 !== undefined) {
      ObjectNullable_IProduct.encode(message.v1, writer.uint32(18).fork()).ldelim();
    }
    if (message.v2 !== undefined) {
      ObjectNullable_IProduct.encode(message.v2, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable_IProductAgt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseAltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable_IProductAgt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.v0 = ObjectNullable_IProduct.decode(reader, reader.uint32());
          break;
        case 2:
          message.v1 = ObjectNullable_IProduct.decode(reader, reader.uint32());
          break;
        case 3:
          message.v2 = ObjectNullable_IProduct.decode(reader, reader.uint32());
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
  ): AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable_IProductAgt {
    return {
      v0: isSet(object.v0) ? ObjectNullable_IProduct.fromJSON(object.v0) : undefined,
      v1: isSet(object.v1) ? ObjectNullable_IProduct.fromJSON(object.v1) : undefined,
      v2: isSet(object.v2) ? ObjectNullable_IProduct.fromJSON(object.v2) : undefined,
    };
  },

  toJSON(
    message: AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable_IProductAgt,
  ): unknown {
    const obj: any = {};
    message.v0 !== undefined && (obj.v0 = message.v0 ? ObjectNullable_IProduct.toJSON(message.v0) : undefined);
    message.v1 !== undefined && (obj.v1 = message.v1 ? ObjectNullable_IProduct.toJSON(message.v1) : undefined);
    message.v2 !== undefined && (obj.v2 = message.v2 ? ObjectNullable_IProduct.toJSON(message.v2) : undefined);
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable_IProductAgt>,
      I
    >,
  >(base?: I): AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable_IProductAgt {
    return AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable_IProductAgt.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable_IProductAgt>,
      I
    >,
  >(object: I): AltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable_IProductAgt {
    const message =
      createBaseAltObjectNullable_IProductCommaSpaceObjectNullable_IProductCommaSpaceObjectNullable_IProductAgt();
    message.v0 = (object.v0 !== undefined && object.v0 !== null)
      ? ObjectNullable_IProduct.fromPartial(object.v0)
      : undefined;
    message.v1 = (object.v1 !== undefined && object.v1 !== null)
      ? ObjectNullable_IProduct.fromPartial(object.v1)
      : undefined;
    message.v2 = (object.v2 !== undefined && object.v2 !== null)
      ? ObjectNullable_IProduct.fromPartial(object.v2)
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
