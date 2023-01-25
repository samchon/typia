/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Main {
  value: AltArrayLtBooleanGtCommaSpaceArrayLtNumberGtCommaSpaceArrayLtStringGtAgt | undefined;
}

export interface AltArrayLtBooleanGtCommaSpaceArrayLtNumberGtCommaSpaceArrayLtStringGtAgt {
  v0: boolean[];
  v1: number[];
  v2: string[];
}

function createBaseMain(): Main {
  return { value: undefined };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      AltArrayLtBooleanGtCommaSpaceArrayLtNumberGtCommaSpaceArrayLtStringGtAgt.encode(
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
          message.value = AltArrayLtBooleanGtCommaSpaceArrayLtNumberGtCommaSpaceArrayLtStringGtAgt.decode(
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
        ? AltArrayLtBooleanGtCommaSpaceArrayLtNumberGtCommaSpaceArrayLtStringGtAgt.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value
      ? AltArrayLtBooleanGtCommaSpaceArrayLtNumberGtCommaSpaceArrayLtStringGtAgt.toJSON(message.value)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Main>, I>>(base?: I): Main {
    return Main.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Main>, I>>(object: I): Main {
    const message = createBaseMain();
    message.value = (object.value !== undefined && object.value !== null)
      ? AltArrayLtBooleanGtCommaSpaceArrayLtNumberGtCommaSpaceArrayLtStringGtAgt.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseAltArrayLtBooleanGtCommaSpaceArrayLtNumberGtCommaSpaceArrayLtStringGtAgt(): AltArrayLtBooleanGtCommaSpaceArrayLtNumberGtCommaSpaceArrayLtStringGtAgt {
  return { v0: [], v1: [], v2: [] };
}

export const AltArrayLtBooleanGtCommaSpaceArrayLtNumberGtCommaSpaceArrayLtStringGtAgt = {
  encode(
    message: AltArrayLtBooleanGtCommaSpaceArrayLtNumberGtCommaSpaceArrayLtStringGtAgt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.v0) {
      writer.bool(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.v1) {
      writer.double(v);
    }
    writer.ldelim();
    for (const v of message.v2) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AltArrayLtBooleanGtCommaSpaceArrayLtNumberGtCommaSpaceArrayLtStringGtAgt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltArrayLtBooleanGtCommaSpaceArrayLtNumberGtCommaSpaceArrayLtStringGtAgt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.v0.push(reader.bool());
            }
          } else {
            message.v0.push(reader.bool());
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.v1.push(reader.double());
            }
          } else {
            message.v1.push(reader.double());
          }
          break;
        case 3:
          message.v2.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AltArrayLtBooleanGtCommaSpaceArrayLtNumberGtCommaSpaceArrayLtStringGtAgt {
    return {
      v0: Array.isArray(object?.v0) ? object.v0.map((e: any) => Boolean(e)) : [],
      v1: Array.isArray(object?.v1) ? object.v1.map((e: any) => Number(e)) : [],
      v2: Array.isArray(object?.v2) ? object.v2.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: AltArrayLtBooleanGtCommaSpaceArrayLtNumberGtCommaSpaceArrayLtStringGtAgt): unknown {
    const obj: any = {};
    if (message.v0) {
      obj.v0 = message.v0.map((e) => e);
    } else {
      obj.v0 = [];
    }
    if (message.v1) {
      obj.v1 = message.v1.map((e) => e);
    } else {
      obj.v1 = [];
    }
    if (message.v2) {
      obj.v2 = message.v2.map((e) => e);
    } else {
      obj.v2 = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AltArrayLtBooleanGtCommaSpaceArrayLtNumberGtCommaSpaceArrayLtStringGtAgt>, I>>(
    base?: I,
  ): AltArrayLtBooleanGtCommaSpaceArrayLtNumberGtCommaSpaceArrayLtStringGtAgt {
    return AltArrayLtBooleanGtCommaSpaceArrayLtNumberGtCommaSpaceArrayLtStringGtAgt.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<AltArrayLtBooleanGtCommaSpaceArrayLtNumberGtCommaSpaceArrayLtStringGtAgt>, I>,
  >(object: I): AltArrayLtBooleanGtCommaSpaceArrayLtNumberGtCommaSpaceArrayLtStringGtAgt {
    const message = createBaseAltArrayLtBooleanGtCommaSpaceArrayLtNumberGtCommaSpaceArrayLtStringGtAgt();
    message.v0 = object.v0?.map((e) => e) || [];
    message.v1 = object.v1?.map((e) => e) || [];
    message.v2 = object.v2?.map((e) => e) || [];
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
