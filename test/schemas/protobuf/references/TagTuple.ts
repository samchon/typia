/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface TagTuple {
  tuple: AltStringCommaSpaceNumberCommaSpaceArrayLtStringGtCommaSpaceArrayLtNumberGtAgt | undefined;
}

export interface AltStringCommaSpaceNumberCommaSpaceArrayLtStringGtCommaSpaceArrayLtNumberGtAgt {
  v0: string;
  v1: number;
  v2: string[];
  v3: number[];
}

function createBaseTagTuple(): TagTuple {
  return { tuple: undefined };
}

export const TagTuple = {
  encode(message: TagTuple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tuple !== undefined) {
      AltStringCommaSpaceNumberCommaSpaceArrayLtStringGtCommaSpaceArrayLtNumberGtAgt.encode(
        message.tuple,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TagTuple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagTuple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tuple = AltStringCommaSpaceNumberCommaSpaceArrayLtStringGtCommaSpaceArrayLtNumberGtAgt.decode(
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

  fromJSON(object: any): TagTuple {
    return {
      tuple: isSet(object.tuple)
        ? AltStringCommaSpaceNumberCommaSpaceArrayLtStringGtCommaSpaceArrayLtNumberGtAgt.fromJSON(object.tuple)
        : undefined,
    };
  },

  toJSON(message: TagTuple): unknown {
    const obj: any = {};
    message.tuple !== undefined && (obj.tuple = message.tuple
      ? AltStringCommaSpaceNumberCommaSpaceArrayLtStringGtCommaSpaceArrayLtNumberGtAgt.toJSON(message.tuple)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<TagTuple>, I>>(base?: I): TagTuple {
    return TagTuple.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TagTuple>, I>>(object: I): TagTuple {
    const message = createBaseTagTuple();
    message.tuple = (object.tuple !== undefined && object.tuple !== null)
      ? AltStringCommaSpaceNumberCommaSpaceArrayLtStringGtCommaSpaceArrayLtNumberGtAgt.fromPartial(object.tuple)
      : undefined;
    return message;
  },
};

function createBaseAltStringCommaSpaceNumberCommaSpaceArrayLtStringGtCommaSpaceArrayLtNumberGtAgt(): AltStringCommaSpaceNumberCommaSpaceArrayLtStringGtCommaSpaceArrayLtNumberGtAgt {
  return { v0: "", v1: 0, v2: [], v3: [] };
}

export const AltStringCommaSpaceNumberCommaSpaceArrayLtStringGtCommaSpaceArrayLtNumberGtAgt = {
  encode(
    message: AltStringCommaSpaceNumberCommaSpaceArrayLtStringGtCommaSpaceArrayLtNumberGtAgt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.v0 !== "") {
      writer.uint32(10).string(message.v0);
    }
    if (message.v1 !== 0) {
      writer.uint32(17).double(message.v1);
    }
    for (const v of message.v2) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(34).fork();
    for (const v of message.v3) {
      writer.double(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AltStringCommaSpaceNumberCommaSpaceArrayLtStringGtCommaSpaceArrayLtNumberGtAgt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltStringCommaSpaceNumberCommaSpaceArrayLtStringGtCommaSpaceArrayLtNumberGtAgt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.v0 = reader.string();
          break;
        case 2:
          message.v1 = reader.double();
          break;
        case 3:
          message.v2.push(reader.string());
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.v3.push(reader.double());
            }
          } else {
            message.v3.push(reader.double());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AltStringCommaSpaceNumberCommaSpaceArrayLtStringGtCommaSpaceArrayLtNumberGtAgt {
    return {
      v0: isSet(object.v0) ? String(object.v0) : "",
      v1: isSet(object.v1) ? Number(object.v1) : 0,
      v2: Array.isArray(object?.v2) ? object.v2.map((e: any) => String(e)) : [],
      v3: Array.isArray(object?.v3) ? object.v3.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: AltStringCommaSpaceNumberCommaSpaceArrayLtStringGtCommaSpaceArrayLtNumberGtAgt): unknown {
    const obj: any = {};
    message.v0 !== undefined && (obj.v0 = message.v0);
    message.v1 !== undefined && (obj.v1 = message.v1);
    if (message.v2) {
      obj.v2 = message.v2.map((e) => e);
    } else {
      obj.v2 = [];
    }
    if (message.v3) {
      obj.v3 = message.v3.map((e) => e);
    } else {
      obj.v3 = [];
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<AltStringCommaSpaceNumberCommaSpaceArrayLtStringGtCommaSpaceArrayLtNumberGtAgt>, I>,
  >(base?: I): AltStringCommaSpaceNumberCommaSpaceArrayLtStringGtCommaSpaceArrayLtNumberGtAgt {
    return AltStringCommaSpaceNumberCommaSpaceArrayLtStringGtCommaSpaceArrayLtNumberGtAgt.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<AltStringCommaSpaceNumberCommaSpaceArrayLtStringGtCommaSpaceArrayLtNumberGtAgt>, I>,
  >(object: I): AltStringCommaSpaceNumberCommaSpaceArrayLtStringGtCommaSpaceArrayLtNumberGtAgt {
    const message = createBaseAltStringCommaSpaceNumberCommaSpaceArrayLtStringGtCommaSpaceArrayLtNumberGtAgt();
    message.v0 = object.v0 ?? "";
    message.v1 = object.v1 ?? 0;
    message.v2 = object.v2?.map((e) => e) || [];
    message.v3 = object.v3?.map((e) => e) || [];
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
