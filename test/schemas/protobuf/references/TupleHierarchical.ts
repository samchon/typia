/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Main {
  value:
    | AltBooleanCommaSpaceNullCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgtCommaSpaceAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgtAgt
    | undefined;
}

export interface AltBooleanCommaSpaceNullCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgtCommaSpaceAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgtAgt {
  v0: boolean;
  v1?: number | undefined;
  v2: number;
  v3: AltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgt | undefined;
  v4:
    | AltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgt
    | undefined;
}

export interface AltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgt {
  v0: boolean;
  v1?: number | undefined;
  v2: AltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt | undefined;
}

export interface AltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt {
  v0: number;
  v1: AltBooleanCommaSpaceStringAgt | undefined;
}

export interface AltBooleanCommaSpaceStringAgt {
  v0: boolean;
  v1: string;
}

export interface AltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgt {
  v0: number;
  v1:
    Array_ElementLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGt[];
}

export interface Array {
}

export interface Array_ElementLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGt {
  value:
    | AltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgt
    | undefined;
}

export interface Array_ElementLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGt {
  value: AltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt | undefined;
}

export interface AltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgt {
  v0: string;
  v1: boolean;
  v2: Array_ElementLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGt[];
}

export interface AltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt {
  v0: number;
  v1: number;
  v2: AltBooleanCommaSpaceStringAgt | undefined;
}

function createBaseMain(): Main {
  return { value: undefined };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      AltBooleanCommaSpaceNullCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgtCommaSpaceAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgtAgt
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
            AltBooleanCommaSpaceNullCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgtCommaSpaceAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgtAgt
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
        ? AltBooleanCommaSpaceNullCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgtCommaSpaceAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgtAgt
          .fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value
      ? AltBooleanCommaSpaceNullCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgtCommaSpaceAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgtAgt
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
      ? AltBooleanCommaSpaceNullCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgtCommaSpaceAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgtAgt
        .fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseAltBooleanCommaSpaceNullCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgtCommaSpaceAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgtAgt(): AltBooleanCommaSpaceNullCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgtCommaSpaceAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgtAgt {
  return { v0: false, v1: undefined, v2: 0, v3: undefined, v4: undefined };
}

export const AltBooleanCommaSpaceNullCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgtCommaSpaceAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgtAgt =
  {
    encode(
      message:
        AltBooleanCommaSpaceNullCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgtCommaSpaceAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgtAgt,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.v0 === true) {
        writer.uint32(8).bool(message.v0);
      }
      if (message.v1 !== undefined) {
        writer.uint32(16).uint32(message.v1);
      }
      if (message.v2 !== 0) {
        writer.uint32(25).double(message.v2);
      }
      if (message.v3 !== undefined) {
        AltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgt.encode(
          message.v3,
          writer.uint32(34).fork(),
        ).ldelim();
      }
      if (message.v4 !== undefined) {
        AltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgt
          .encode(message.v4, writer.uint32(42).fork()).ldelim();
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): AltBooleanCommaSpaceNullCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgtCommaSpaceAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgtAgt {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseAltBooleanCommaSpaceNullCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgtCommaSpaceAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgtAgt();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.v0 = reader.bool();
            break;
          case 2:
            message.v1 = reader.uint32();
            break;
          case 3:
            message.v2 = reader.double();
            break;
          case 4:
            message.v3 = AltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgt
              .decode(reader, reader.uint32());
            break;
          case 5:
            message.v4 =
              AltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgt
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
    ): AltBooleanCommaSpaceNullCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgtCommaSpaceAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgtAgt {
      return {
        v0: isSet(object.v0) ? Boolean(object.v0) : false,
        v1: isSet(object.v1) ? Number(object.v1) : undefined,
        v2: isSet(object.v2) ? Number(object.v2) : 0,
        v3: isSet(object.v3)
          ? AltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgt.fromJSON(object.v3)
          : undefined,
        v4: isSet(object.v4)
          ? AltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgt
            .fromJSON(object.v4)
          : undefined,
      };
    },

    toJSON(
      message:
        AltBooleanCommaSpaceNullCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgtCommaSpaceAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgtAgt,
    ): unknown {
      const obj: any = {};
      message.v0 !== undefined && (obj.v0 = message.v0);
      message.v1 !== undefined && (obj.v1 = Math.round(message.v1));
      message.v2 !== undefined && (obj.v2 = message.v2);
      message.v3 !== undefined && (obj.v3 = message.v3
        ? AltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgt.toJSON(message.v3)
        : undefined);
      message.v4 !== undefined && (obj.v4 = message.v4
        ? AltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgt
          .toJSON(message.v4)
        : undefined);
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          AltBooleanCommaSpaceNullCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgtCommaSpaceAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgtAgt
        >,
        I
      >,
    >(
      base?: I,
    ): AltBooleanCommaSpaceNullCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgtCommaSpaceAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgtAgt {
      return AltBooleanCommaSpaceNullCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgtCommaSpaceAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgtAgt
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          AltBooleanCommaSpaceNullCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgtCommaSpaceAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgtAgt
        >,
        I
      >,
    >(
      object: I,
    ): AltBooleanCommaSpaceNullCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgtCommaSpaceAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgtAgt {
      const message =
        createBaseAltBooleanCommaSpaceNullCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgtCommaSpaceAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgtAgt();
      message.v0 = object.v0 ?? false;
      message.v1 = object.v1 ?? undefined;
      message.v2 = object.v2 ?? 0;
      message.v3 = (object.v3 !== undefined && object.v3 !== null)
        ? AltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgt.fromPartial(
          object.v3,
        )
        : undefined;
      message.v4 = (object.v4 !== undefined && object.v4 !== null)
        ? AltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgt
          .fromPartial(object.v4)
        : undefined;
      return message;
    },
  };

function createBaseAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgt(): AltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgt {
  return { v0: false, v1: undefined, v2: undefined };
}

export const AltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgt = {
  encode(
    message: AltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.v0 === true) {
      writer.uint32(8).bool(message.v0);
    }
    if (message.v1 !== undefined) {
      writer.uint32(16).uint32(message.v1);
    }
    if (message.v2 !== undefined) {
      AltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt.encode(message.v2, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.v0 = reader.bool();
          break;
        case 2:
          message.v1 = reader.uint32();
          break;
        case 3:
          message.v2 = AltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgt {
    return {
      v0: isSet(object.v0) ? Boolean(object.v0) : false,
      v1: isSet(object.v1) ? Number(object.v1) : undefined,
      v2: isSet(object.v2) ? AltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt.fromJSON(object.v2) : undefined,
    };
  },

  toJSON(message: AltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgt): unknown {
    const obj: any = {};
    message.v0 !== undefined && (obj.v0 = message.v0);
    message.v1 !== undefined && (obj.v1 = Math.round(message.v1));
    message.v2 !== undefined &&
      (obj.v2 = message.v2 ? AltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt.toJSON(message.v2) : undefined);
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<AltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgt>,
      I
    >,
  >(base?: I): AltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgt {
    return AltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgt.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<AltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgt>,
      I
    >,
  >(object: I): AltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgt {
    const message =
      createBaseAltBooleanCommaSpaceNullCommaSpaceAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtAgt();
    message.v0 = object.v0 ?? false;
    message.v1 = object.v1 ?? undefined;
    message.v2 = (object.v2 !== undefined && object.v2 !== null)
      ? AltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt.fromPartial(object.v2)
      : undefined;
    return message;
  },
};

function createBaseAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt(): AltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt {
  return { v0: 0, v1: undefined };
}

export const AltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt = {
  encode(
    message: AltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.v0 !== 0) {
      writer.uint32(9).double(message.v0);
    }
    if (message.v1 !== undefined) {
      AltBooleanCommaSpaceStringAgt.encode(message.v1, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.v0 = reader.double();
          break;
        case 2:
          message.v1 = AltBooleanCommaSpaceStringAgt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt {
    return {
      v0: isSet(object.v0) ? Number(object.v0) : 0,
      v1: isSet(object.v1) ? AltBooleanCommaSpaceStringAgt.fromJSON(object.v1) : undefined,
    };
  },

  toJSON(message: AltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt): unknown {
    const obj: any = {};
    message.v0 !== undefined && (obj.v0 = message.v0);
    message.v1 !== undefined && (obj.v1 = message.v1 ? AltBooleanCommaSpaceStringAgt.toJSON(message.v1) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt>, I>>(
    base?: I,
  ): AltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt {
    return AltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt>, I>>(
    object: I,
  ): AltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt {
    const message = createBaseAltNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt();
    message.v0 = object.v0 ?? 0;
    message.v1 = (object.v1 !== undefined && object.v1 !== null)
      ? AltBooleanCommaSpaceStringAgt.fromPartial(object.v1)
      : undefined;
    return message;
  },
};

function createBaseAltBooleanCommaSpaceStringAgt(): AltBooleanCommaSpaceStringAgt {
  return { v0: false, v1: "" };
}

export const AltBooleanCommaSpaceStringAgt = {
  encode(message: AltBooleanCommaSpaceStringAgt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.v0 === true) {
      writer.uint32(8).bool(message.v0);
    }
    if (message.v1 !== "") {
      writer.uint32(18).string(message.v1);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AltBooleanCommaSpaceStringAgt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltBooleanCommaSpaceStringAgt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.v0 = reader.bool();
          break;
        case 2:
          message.v1 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AltBooleanCommaSpaceStringAgt {
    return { v0: isSet(object.v0) ? Boolean(object.v0) : false, v1: isSet(object.v1) ? String(object.v1) : "" };
  },

  toJSON(message: AltBooleanCommaSpaceStringAgt): unknown {
    const obj: any = {};
    message.v0 !== undefined && (obj.v0 = message.v0);
    message.v1 !== undefined && (obj.v1 = message.v1);
    return obj;
  },

  create<I extends Exact<DeepPartial<AltBooleanCommaSpaceStringAgt>, I>>(base?: I): AltBooleanCommaSpaceStringAgt {
    return AltBooleanCommaSpaceStringAgt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AltBooleanCommaSpaceStringAgt>, I>>(
    object: I,
  ): AltBooleanCommaSpaceStringAgt {
    const message = createBaseAltBooleanCommaSpaceStringAgt();
    message.v0 = object.v0 ?? false;
    message.v1 = object.v1 ?? "";
    return message;
  },
};

function createBaseAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgt(): AltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgt {
  return { v0: 0, v1: [] };
}

export const AltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgt =
  {
    encode(
      message:
        AltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgt,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.v0 !== 0) {
        writer.uint32(9).double(message.v0);
      }
      for (const v of message.v1) {
        Array_ElementLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGt
          .encode(v!, writer.uint32(18).fork()).ldelim();
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): AltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgt {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgt();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.v0 = reader.double();
            break;
          case 2:
            message.v1.push(
              Array_ElementLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGt
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

    fromJSON(
      object: any,
    ): AltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgt {
      return {
        v0: isSet(object.v0) ? Number(object.v0) : 0,
        v1: Array.isArray(object?.v1)
          ? object.v1.map((e: any) =>
            Array_ElementLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGt
              .fromJSON(e)
          )
          : [],
      };
    },

    toJSON(
      message:
        AltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgt,
    ): unknown {
      const obj: any = {};
      message.v0 !== undefined && (obj.v0 = message.v0);
      if (message.v1) {
        obj.v1 = message.v1.map((e) =>
          e
            ? Array_ElementLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGt
              .toJSON(e)
            : undefined
        );
      } else {
        obj.v1 = [];
      }
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          AltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgt
        >,
        I
      >,
    >(
      base?: I,
    ): AltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgt {
      return AltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgt
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          AltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgt
        >,
        I
      >,
    >(
      object: I,
    ): AltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgt {
      const message =
        createBaseAltNumberCommaSpaceArrayLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGtAgt();
      message.v0 = object.v0 ?? 0;
      message.v1 =
        object.v1?.map((e) =>
          Array_ElementLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGt
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

function createBaseArray_ElementLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGt(): Array_ElementLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGt {
  return { value: undefined };
}

export const Array_ElementLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGt =
  {
    encode(
      message:
        Array_ElementLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGt,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.value !== undefined) {
        AltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgt
          .encode(message.value, writer.uint32(10).fork()).ldelim();
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGt {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGt();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value =
              AltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgt
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
    ): Array_ElementLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGt {
      return {
        value: isSet(object.value)
          ? AltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgt
            .fromJSON(object.value)
          : undefined,
      };
    },

    toJSON(
      message:
        Array_ElementLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGt,
    ): unknown {
      const obj: any = {};
      message.value !== undefined && (obj.value = message.value
        ? AltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgt
          .toJSON(message.value)
        : undefined);
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGt
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGt {
      return Array_ElementLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGt
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGt
        >,
        I
      >,
    >(
      object: I,
    ): Array_ElementLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGt {
      const message =
        createBaseArray_ElementLtAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgtGt();
      message.value = (object.value !== undefined && object.value !== null)
        ? AltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgt
          .fromPartial(object.value)
        : undefined;
      return message;
    },
  };

function createBaseArray_ElementLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGt(): Array_ElementLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGt {
  return { value: undefined };
}

export const Array_ElementLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGt = {
  encode(
    message: Array_ElementLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== undefined) {
      AltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt.encode(
        message.value,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Array_ElementLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_ElementLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = AltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt.decode(
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

  fromJSON(object: any): Array_ElementLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGt {
    return {
      value: isSet(object.value)
        ? AltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: Array_ElementLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGt): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value
      ? AltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt.toJSON(message.value)
      : undefined);
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<Array_ElementLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGt>,
      I
    >,
  >(base?: I): Array_ElementLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGt {
    return Array_ElementLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGt.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Array_ElementLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGt>,
      I
    >,
  >(object: I): Array_ElementLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGt {
    const message = createBaseArray_ElementLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGt();
    message.value = (object.value !== undefined && object.value !== null)
      ? AltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgt(): AltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgt {
  return { v0: "", v1: false, v2: [] };
}

export const AltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgt =
  {
    encode(
      message:
        AltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgt,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.v0 !== "") {
        writer.uint32(10).string(message.v0);
      }
      if (message.v1 === true) {
        writer.uint32(16).bool(message.v1);
      }
      for (const v of message.v2) {
        Array_ElementLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGt.encode(
          v!,
          writer.uint32(26).fork(),
        ).ldelim();
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): AltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgt {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgt();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.v0 = reader.string();
            break;
          case 2:
            message.v1 = reader.bool();
            break;
          case 3:
            message.v2.push(
              Array_ElementLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGt.decode(
                reader,
                reader.uint32(),
              ),
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
    ): AltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgt {
      return {
        v0: isSet(object.v0) ? String(object.v0) : "",
        v1: isSet(object.v1) ? Boolean(object.v1) : false,
        v2: Array.isArray(object?.v2)
          ? object.v2.map((e: any) =>
            Array_ElementLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGt.fromJSON(e)
          )
          : [],
      };
    },

    toJSON(
      message:
        AltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgt,
    ): unknown {
      const obj: any = {};
      message.v0 !== undefined && (obj.v0 = message.v0);
      message.v1 !== undefined && (obj.v1 = message.v1);
      if (message.v2) {
        obj.v2 = message.v2.map((e) =>
          e ? Array_ElementLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGt.toJSON(e) : undefined
        );
      } else {
        obj.v2 = [];
      }
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          AltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgt
        >,
        I
      >,
    >(
      base?: I,
    ): AltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgt {
      return AltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgt
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          AltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgt
        >,
        I
      >,
    >(
      object: I,
    ): AltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgt {
      const message =
        createBaseAltStringCommaSpaceBooleanCommaSpaceArrayLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGtAgt();
      message.v0 = object.v0 ?? "";
      message.v1 = object.v1 ?? false;
      message.v2 =
        object.v2?.map((e) =>
          Array_ElementLtAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgtGt.fromPartial(e)
        ) || [];
      return message;
    },
  };

function createBaseAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt(): AltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt {
  return { v0: 0, v1: 0, v2: undefined };
}

export const AltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt = {
  encode(
    message: AltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.v0 !== 0) {
      writer.uint32(9).double(message.v0);
    }
    if (message.v1 !== 0) {
      writer.uint32(17).double(message.v1);
    }
    if (message.v2 !== undefined) {
      AltBooleanCommaSpaceStringAgt.encode(message.v2, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.v0 = reader.double();
          break;
        case 2:
          message.v1 = reader.double();
          break;
        case 3:
          message.v2 = AltBooleanCommaSpaceStringAgt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt {
    return {
      v0: isSet(object.v0) ? Number(object.v0) : 0,
      v1: isSet(object.v1) ? Number(object.v1) : 0,
      v2: isSet(object.v2) ? AltBooleanCommaSpaceStringAgt.fromJSON(object.v2) : undefined,
    };
  },

  toJSON(message: AltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt): unknown {
    const obj: any = {};
    message.v0 !== undefined && (obj.v0 = message.v0);
    message.v1 !== undefined && (obj.v1 = message.v1);
    message.v2 !== undefined && (obj.v2 = message.v2 ? AltBooleanCommaSpaceStringAgt.toJSON(message.v2) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt>, I>>(
    base?: I,
  ): AltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt {
    return AltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt>, I>>(
    object: I,
  ): AltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt {
    const message = createBaseAltNumberCommaSpaceNumberCommaSpaceAltBooleanCommaSpaceStringAgtAgt();
    message.v0 = object.v0 ?? 0;
    message.v1 = object.v1 ?? 0;
    message.v2 = (object.v2 !== undefined && object.v2 !== null)
      ? AltBooleanCommaSpaceStringAgt.fromPartial(object.v2)
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
