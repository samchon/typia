/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Type {
  key: string;
}

export interface Main {
  value:
    Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace1SpaceOrSpace2SpaceOrSpaceTypeSpaceOrSpaceFalseRpGt[];
}

export interface Array {
}

export interface Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace1SpaceOrSpace2SpaceOrSpaceTypeSpaceOrSpaceFalseRpGt {
  valueO0?: boolean | undefined;
  valueO1?: number | undefined;
  valueO2?: string | undefined;
  valueO3?: Type | undefined;
}

function createBaseType(): Type {
  return { key: "" };
}

export const Type = {
  encode(message: Type, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Type {
    return { key: isSet(object.key) ? String(object.key) : "" };
  },

  toJSON(message: Type): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  create<I extends Exact<DeepPartial<Type>, I>>(base?: I): Type {
    return Type.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Type>, I>>(object: I): Type {
    const message = createBaseType();
    message.key = object.key ?? "";
    return message;
  },
};

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace1SpaceOrSpace2SpaceOrSpaceTypeSpaceOrSpaceFalseRpGt
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
            Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace1SpaceOrSpace2SpaceOrSpaceTypeSpaceOrSpaceFalseRpGt
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
          Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace1SpaceOrSpace2SpaceOrSpaceTypeSpaceOrSpaceFalseRpGt
            .fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e
        ? Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace1SpaceOrSpace2SpaceOrSpaceTypeSpaceOrSpaceFalseRpGt
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
        Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace1SpaceOrSpace2SpaceOrSpaceTypeSpaceOrSpaceFalseRpGt
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

function createBaseArray_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace1SpaceOrSpace2SpaceOrSpaceTypeSpaceOrSpaceFalseRpGt(): Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace1SpaceOrSpace2SpaceOrSpaceTypeSpaceOrSpaceFalseRpGt {
  return { valueO0: undefined, valueO1: undefined, valueO2: undefined, valueO3: undefined };
}

export const Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace1SpaceOrSpace2SpaceOrSpaceTypeSpaceOrSpaceFalseRpGt =
  {
    encode(
      message:
        Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace1SpaceOrSpace2SpaceOrSpaceTypeSpaceOrSpaceFalseRpGt,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.valueO0 !== undefined) {
        writer.uint32(8).bool(message.valueO0);
      }
      if (message.valueO1 !== undefined) {
        writer.uint32(16).uint32(message.valueO1);
      }
      if (message.valueO2 !== undefined) {
        writer.uint32(26).string(message.valueO2);
      }
      if (message.valueO3 !== undefined) {
        Type.encode(message.valueO3, writer.uint32(34).fork()).ldelim();
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace1SpaceOrSpace2SpaceOrSpaceTypeSpaceOrSpaceFalseRpGt {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace1SpaceOrSpace2SpaceOrSpaceTypeSpaceOrSpaceFalseRpGt();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.valueO0 = reader.bool();
            break;
          case 2:
            message.valueO1 = reader.uint32();
            break;
          case 3:
            message.valueO2 = reader.string();
            break;
          case 4:
            message.valueO3 = Type.decode(reader, reader.uint32());
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
    ): Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace1SpaceOrSpace2SpaceOrSpaceTypeSpaceOrSpaceFalseRpGt {
      return {
        valueO0: isSet(object.valueO0) ? Boolean(object.valueO0) : undefined,
        valueO1: isSet(object.valueO1) ? Number(object.valueO1) : undefined,
        valueO2: isSet(object.valueO2) ? String(object.valueO2) : undefined,
        valueO3: isSet(object.valueO3) ? Type.fromJSON(object.valueO3) : undefined,
      };
    },

    toJSON(
      message:
        Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace1SpaceOrSpace2SpaceOrSpaceTypeSpaceOrSpaceFalseRpGt,
    ): unknown {
      const obj: any = {};
      message.valueO0 !== undefined && (obj.valueO0 = message.valueO0);
      message.valueO1 !== undefined && (obj.valueO1 = Math.round(message.valueO1));
      message.valueO2 !== undefined && (obj.valueO2 = message.valueO2);
      message.valueO3 !== undefined && (obj.valueO3 = message.valueO3 ? Type.toJSON(message.valueO3) : undefined);
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace1SpaceOrSpace2SpaceOrSpaceTypeSpaceOrSpaceFalseRpGt
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace1SpaceOrSpace2SpaceOrSpaceTypeSpaceOrSpaceFalseRpGt {
      return Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace1SpaceOrSpace2SpaceOrSpaceTypeSpaceOrSpaceFalseRpGt
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace1SpaceOrSpace2SpaceOrSpaceTypeSpaceOrSpaceFalseRpGt
        >,
        I
      >,
    >(
      object: I,
    ): Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace1SpaceOrSpace2SpaceOrSpaceTypeSpaceOrSpaceFalseRpGt {
      const message =
        createBaseArray_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace1SpaceOrSpace2SpaceOrSpaceTypeSpaceOrSpaceFalseRpGt();
      message.valueO0 = object.valueO0 ?? undefined;
      message.valueO1 = object.valueO1 ?? undefined;
      message.valueO2 = object.valueO2 ?? undefined;
      message.valueO3 = (object.valueO3 !== undefined && object.valueO3 !== null)
        ? Type.fromPartial(object.valueO3)
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
