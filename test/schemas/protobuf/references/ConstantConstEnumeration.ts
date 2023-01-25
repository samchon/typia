/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Main {
  value:
    Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace0SpaceOrSpace1SpaceOrSpace2RpGt[];
}

export interface Array {
}

export interface Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace0SpaceOrSpace1SpaceOrSpace2RpGt {
  valueO0?: number | undefined;
  valueO1?: string | undefined;
}

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace0SpaceOrSpace1SpaceOrSpace2RpGt
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
            Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace0SpaceOrSpace1SpaceOrSpace2RpGt
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
          Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace0SpaceOrSpace1SpaceOrSpace2RpGt
            .fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e
        ? Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace0SpaceOrSpace1SpaceOrSpace2RpGt
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
        Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace0SpaceOrSpace1SpaceOrSpace2RpGt
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

function createBaseArray_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace0SpaceOrSpace1SpaceOrSpace2RpGt(): Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace0SpaceOrSpace1SpaceOrSpace2RpGt {
  return { valueO0: undefined, valueO1: undefined };
}

export const Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace0SpaceOrSpace1SpaceOrSpace2RpGt =
  {
    encode(
      message:
        Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace0SpaceOrSpace1SpaceOrSpace2RpGt,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.valueO0 !== undefined) {
        writer.uint32(8).uint32(message.valueO0);
      }
      if (message.valueO1 !== undefined) {
        writer.uint32(18).string(message.valueO1);
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace0SpaceOrSpace1SpaceOrSpace2RpGt {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace0SpaceOrSpace1SpaceOrSpace2RpGt();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.valueO0 = reader.uint32();
            break;
          case 2:
            message.valueO1 = reader.string();
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
    ): Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace0SpaceOrSpace1SpaceOrSpace2RpGt {
      return {
        valueO0: isSet(object.valueO0) ? Number(object.valueO0) : undefined,
        valueO1: isSet(object.valueO1) ? String(object.valueO1) : undefined,
      };
    },

    toJSON(
      message:
        Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace0SpaceOrSpace1SpaceOrSpace2RpGt,
    ): unknown {
      const obj: any = {};
      message.valueO0 !== undefined && (obj.valueO0 = Math.round(message.valueO0));
      message.valueO1 !== undefined && (obj.valueO1 = message.valueO1);
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace0SpaceOrSpace1SpaceOrSpace2RpGt
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace0SpaceOrSpace1SpaceOrSpace2RpGt {
      return Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace0SpaceOrSpace1SpaceOrSpace2RpGt
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace0SpaceOrSpace1SpaceOrSpace2RpGt
        >,
        I
      >,
    >(
      object: I,
    ): Array_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace0SpaceOrSpace1SpaceOrSpace2RpGt {
      const message =
        createBaseArray_ElementLtLpDoublequoteFourDoublequoteSpaceOrSpaceDoublequoteThreeDoublequoteSpaceOrSpace0SpaceOrSpace1SpaceOrSpace2RpGt();
      message.valueO0 = object.valueO0 ?? undefined;
      message.valueO1 = object.valueO1 ?? undefined;
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
