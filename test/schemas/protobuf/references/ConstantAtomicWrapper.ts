/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ConstantAtomicWrapper {
}

export interface ConstantAtomicWrapper_IPointerLtBooleanGt {
  value: boolean;
}

export interface ConstantAtomicWrapper_IPointerLtNumberGt {
  value: number;
}

export interface ConstantAtomicWrapper_IPointerLtStringGt {
  value: string;
}

export interface Main {
  value:
    | AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper_IPointerLtStringGtAgt
    | undefined;
}

export interface AltConstantAtomicWrapper {
}

export interface AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper {
}

export interface AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper {
}

export interface AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper_IPointerLtStringGtAgt {
  v0: ConstantAtomicWrapper_IPointerLtBooleanGt | undefined;
  v1: ConstantAtomicWrapper_IPointerLtNumberGt | undefined;
  v2: ConstantAtomicWrapper_IPointerLtStringGt | undefined;
}

function createBaseConstantAtomicWrapper(): ConstantAtomicWrapper {
  return {};
}

export const ConstantAtomicWrapper = {
  encode(_: ConstantAtomicWrapper, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConstantAtomicWrapper {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConstantAtomicWrapper();
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

  fromJSON(_: any): ConstantAtomicWrapper {
    return {};
  },

  toJSON(_: ConstantAtomicWrapper): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ConstantAtomicWrapper>, I>>(base?: I): ConstantAtomicWrapper {
    return ConstantAtomicWrapper.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConstantAtomicWrapper>, I>>(_: I): ConstantAtomicWrapper {
    const message = createBaseConstantAtomicWrapper();
    return message;
  },
};

function createBaseConstantAtomicWrapper_IPointerLtBooleanGt(): ConstantAtomicWrapper_IPointerLtBooleanGt {
  return { value: false };
}

export const ConstantAtomicWrapper_IPointerLtBooleanGt = {
  encode(message: ConstantAtomicWrapper_IPointerLtBooleanGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConstantAtomicWrapper_IPointerLtBooleanGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConstantAtomicWrapper_IPointerLtBooleanGt();
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

  fromJSON(object: any): ConstantAtomicWrapper_IPointerLtBooleanGt {
    return { value: isSet(object.value) ? Boolean(object.value) : false };
  },

  toJSON(message: ConstantAtomicWrapper_IPointerLtBooleanGt): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<ConstantAtomicWrapper_IPointerLtBooleanGt>, I>>(
    base?: I,
  ): ConstantAtomicWrapper_IPointerLtBooleanGt {
    return ConstantAtomicWrapper_IPointerLtBooleanGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConstantAtomicWrapper_IPointerLtBooleanGt>, I>>(
    object: I,
  ): ConstantAtomicWrapper_IPointerLtBooleanGt {
    const message = createBaseConstantAtomicWrapper_IPointerLtBooleanGt();
    message.value = object.value ?? false;
    return message;
  },
};

function createBaseConstantAtomicWrapper_IPointerLtNumberGt(): ConstantAtomicWrapper_IPointerLtNumberGt {
  return { value: 0 };
}

export const ConstantAtomicWrapper_IPointerLtNumberGt = {
  encode(message: ConstantAtomicWrapper_IPointerLtNumberGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConstantAtomicWrapper_IPointerLtNumberGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConstantAtomicWrapper_IPointerLtNumberGt();
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

  fromJSON(object: any): ConstantAtomicWrapper_IPointerLtNumberGt {
    return { value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: ConstantAtomicWrapper_IPointerLtNumberGt): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<ConstantAtomicWrapper_IPointerLtNumberGt>, I>>(
    base?: I,
  ): ConstantAtomicWrapper_IPointerLtNumberGt {
    return ConstantAtomicWrapper_IPointerLtNumberGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConstantAtomicWrapper_IPointerLtNumberGt>, I>>(
    object: I,
  ): ConstantAtomicWrapper_IPointerLtNumberGt {
    const message = createBaseConstantAtomicWrapper_IPointerLtNumberGt();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseConstantAtomicWrapper_IPointerLtStringGt(): ConstantAtomicWrapper_IPointerLtStringGt {
  return { value: "" };
}

export const ConstantAtomicWrapper_IPointerLtStringGt = {
  encode(message: ConstantAtomicWrapper_IPointerLtStringGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConstantAtomicWrapper_IPointerLtStringGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConstantAtomicWrapper_IPointerLtStringGt();
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

  fromJSON(object: any): ConstantAtomicWrapper_IPointerLtStringGt {
    return { value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: ConstantAtomicWrapper_IPointerLtStringGt): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<ConstantAtomicWrapper_IPointerLtStringGt>, I>>(
    base?: I,
  ): ConstantAtomicWrapper_IPointerLtStringGt {
    return ConstantAtomicWrapper_IPointerLtStringGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConstantAtomicWrapper_IPointerLtStringGt>, I>>(
    object: I,
  ): ConstantAtomicWrapper_IPointerLtStringGt {
    const message = createBaseConstantAtomicWrapper_IPointerLtStringGt();
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseMain(): Main {
  return { value: undefined };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper_IPointerLtStringGtAgt
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
            AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper_IPointerLtStringGtAgt
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
        ? AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper_IPointerLtStringGtAgt
          .fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value
      ? AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper_IPointerLtStringGtAgt
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
      ? AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper_IPointerLtStringGtAgt
        .fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseAltConstantAtomicWrapper(): AltConstantAtomicWrapper {
  return {};
}

export const AltConstantAtomicWrapper = {
  encode(_: AltConstantAtomicWrapper, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AltConstantAtomicWrapper {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltConstantAtomicWrapper();
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

  fromJSON(_: any): AltConstantAtomicWrapper {
    return {};
  },

  toJSON(_: AltConstantAtomicWrapper): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AltConstantAtomicWrapper>, I>>(base?: I): AltConstantAtomicWrapper {
    return AltConstantAtomicWrapper.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AltConstantAtomicWrapper>, I>>(_: I): AltConstantAtomicWrapper {
    const message = createBaseAltConstantAtomicWrapper();
    return message;
  },
};

function createBaseAltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper(): AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper {
  return {};
}

export const AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper = {
  encode(
    _: AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper();
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

  fromJSON(_: any): AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper {
    return {};
  },

  toJSON(_: AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper>, I>>(
    base?: I,
  ): AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper {
    return AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper>, I>,
  >(_: I): AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper {
    const message = createBaseAltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper();
    return message;
  },
};

function createBaseAltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper(): AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper {
  return {};
}

export const AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper =
  {
    encode(
      _: AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseAltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper();
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
    ): AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper {
      return {};
    },

    toJSON(
      _: AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper,
    ): unknown {
      const obj: any = {};
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper
        >,
        I
      >,
    >(
      base?: I,
    ): AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper {
      return AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper
        >,
        I
      >,
    >(
      _: I,
    ): AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper {
      const message =
        createBaseAltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper();
      return message;
    },
  };

function createBaseAltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper_IPointerLtStringGtAgt(): AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper_IPointerLtStringGtAgt {
  return { v0: undefined, v1: undefined, v2: undefined };
}

export const AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper_IPointerLtStringGtAgt =
  {
    encode(
      message:
        AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper_IPointerLtStringGtAgt,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.v0 !== undefined) {
        ConstantAtomicWrapper_IPointerLtBooleanGt.encode(message.v0, writer.uint32(10).fork()).ldelim();
      }
      if (message.v1 !== undefined) {
        ConstantAtomicWrapper_IPointerLtNumberGt.encode(message.v1, writer.uint32(18).fork()).ldelim();
      }
      if (message.v2 !== undefined) {
        ConstantAtomicWrapper_IPointerLtStringGt.encode(message.v2, writer.uint32(26).fork()).ldelim();
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper_IPointerLtStringGtAgt {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseAltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper_IPointerLtStringGtAgt();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.v0 = ConstantAtomicWrapper_IPointerLtBooleanGt.decode(reader, reader.uint32());
            break;
          case 2:
            message.v1 = ConstantAtomicWrapper_IPointerLtNumberGt.decode(reader, reader.uint32());
            break;
          case 3:
            message.v2 = ConstantAtomicWrapper_IPointerLtStringGt.decode(reader, reader.uint32());
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
    ): AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper_IPointerLtStringGtAgt {
      return {
        v0: isSet(object.v0) ? ConstantAtomicWrapper_IPointerLtBooleanGt.fromJSON(object.v0) : undefined,
        v1: isSet(object.v1) ? ConstantAtomicWrapper_IPointerLtNumberGt.fromJSON(object.v1) : undefined,
        v2: isSet(object.v2) ? ConstantAtomicWrapper_IPointerLtStringGt.fromJSON(object.v2) : undefined,
      };
    },

    toJSON(
      message:
        AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper_IPointerLtStringGtAgt,
    ): unknown {
      const obj: any = {};
      message.v0 !== undefined &&
        (obj.v0 = message.v0 ? ConstantAtomicWrapper_IPointerLtBooleanGt.toJSON(message.v0) : undefined);
      message.v1 !== undefined &&
        (obj.v1 = message.v1 ? ConstantAtomicWrapper_IPointerLtNumberGt.toJSON(message.v1) : undefined);
      message.v2 !== undefined &&
        (obj.v2 = message.v2 ? ConstantAtomicWrapper_IPointerLtStringGt.toJSON(message.v2) : undefined);
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper_IPointerLtStringGtAgt
        >,
        I
      >,
    >(
      base?: I,
    ): AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper_IPointerLtStringGtAgt {
      return AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper_IPointerLtStringGtAgt
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper_IPointerLtStringGtAgt
        >,
        I
      >,
    >(
      object: I,
    ): AltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper_IPointerLtStringGtAgt {
      const message =
        createBaseAltConstantAtomicWrapper_IPointerLtBooleanGtCommaSpaceConstantAtomicWrapper_IPointerLtNumberGtCommaSpaceConstantAtomicWrapper_IPointerLtStringGtAgt();
      message.v0 = (object.v0 !== undefined && object.v0 !== null)
        ? ConstantAtomicWrapper_IPointerLtBooleanGt.fromPartial(object.v0)
        : undefined;
      message.v1 = (object.v1 !== undefined && object.v1 !== null)
        ? ConstantAtomicWrapper_IPointerLtNumberGt.fromPartial(object.v1)
        : undefined;
      message.v2 = (object.v2 !== undefined && object.v2 !== null)
        ? ConstantAtomicWrapper_IPointerLtStringGt.fromPartial(object.v2)
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
