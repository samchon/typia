/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Main {
  value: AltFalseCommaSpaceTrueCommaSpace2CommaSpaceDoublequoteThreeDoublequoteAgt | undefined;
}

export interface AltFalseCommaSpaceTrueCommaSpace2CommaSpaceDoublequoteThreeDoublequoteAgt {
  v0: boolean;
  v1: boolean;
  v2: number;
  v3: string;
}

function createBaseMain(): Main {
  return { value: undefined };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      AltFalseCommaSpaceTrueCommaSpace2CommaSpaceDoublequoteThreeDoublequoteAgt.encode(
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
          message.value = AltFalseCommaSpaceTrueCommaSpace2CommaSpaceDoublequoteThreeDoublequoteAgt.decode(
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
        ? AltFalseCommaSpaceTrueCommaSpace2CommaSpaceDoublequoteThreeDoublequoteAgt.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value
      ? AltFalseCommaSpaceTrueCommaSpace2CommaSpaceDoublequoteThreeDoublequoteAgt.toJSON(message.value)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Main>, I>>(base?: I): Main {
    return Main.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Main>, I>>(object: I): Main {
    const message = createBaseMain();
    message.value = (object.value !== undefined && object.value !== null)
      ? AltFalseCommaSpaceTrueCommaSpace2CommaSpaceDoublequoteThreeDoublequoteAgt.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseAltFalseCommaSpaceTrueCommaSpace2CommaSpaceDoublequoteThreeDoublequoteAgt(): AltFalseCommaSpaceTrueCommaSpace2CommaSpaceDoublequoteThreeDoublequoteAgt {
  return { v0: false, v1: false, v2: 0, v3: "" };
}

export const AltFalseCommaSpaceTrueCommaSpace2CommaSpaceDoublequoteThreeDoublequoteAgt = {
  encode(
    message: AltFalseCommaSpaceTrueCommaSpace2CommaSpaceDoublequoteThreeDoublequoteAgt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.v0 === true) {
      writer.uint32(8).bool(message.v0);
    }
    if (message.v1 === true) {
      writer.uint32(16).bool(message.v1);
    }
    if (message.v2 !== 0) {
      writer.uint32(24).uint32(message.v2);
    }
    if (message.v3 !== "") {
      writer.uint32(34).string(message.v3);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AltFalseCommaSpaceTrueCommaSpace2CommaSpaceDoublequoteThreeDoublequoteAgt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltFalseCommaSpaceTrueCommaSpace2CommaSpaceDoublequoteThreeDoublequoteAgt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.v0 = reader.bool();
          break;
        case 2:
          message.v1 = reader.bool();
          break;
        case 3:
          message.v2 = reader.uint32();
          break;
        case 4:
          message.v3 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AltFalseCommaSpaceTrueCommaSpace2CommaSpaceDoublequoteThreeDoublequoteAgt {
    return {
      v0: isSet(object.v0) ? Boolean(object.v0) : false,
      v1: isSet(object.v1) ? Boolean(object.v1) : false,
      v2: isSet(object.v2) ? Number(object.v2) : 0,
      v3: isSet(object.v3) ? String(object.v3) : "",
    };
  },

  toJSON(message: AltFalseCommaSpaceTrueCommaSpace2CommaSpaceDoublequoteThreeDoublequoteAgt): unknown {
    const obj: any = {};
    message.v0 !== undefined && (obj.v0 = message.v0);
    message.v1 !== undefined && (obj.v1 = message.v1);
    message.v2 !== undefined && (obj.v2 = Math.round(message.v2));
    message.v3 !== undefined && (obj.v3 = message.v3);
    return obj;
  },

  create<I extends Exact<DeepPartial<AltFalseCommaSpaceTrueCommaSpace2CommaSpaceDoublequoteThreeDoublequoteAgt>, I>>(
    base?: I,
  ): AltFalseCommaSpaceTrueCommaSpace2CommaSpaceDoublequoteThreeDoublequoteAgt {
    return AltFalseCommaSpaceTrueCommaSpace2CommaSpaceDoublequoteThreeDoublequoteAgt.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<AltFalseCommaSpaceTrueCommaSpace2CommaSpaceDoublequoteThreeDoublequoteAgt>, I>,
  >(object: I): AltFalseCommaSpaceTrueCommaSpace2CommaSpaceDoublequoteThreeDoublequoteAgt {
    const message = createBaseAltFalseCommaSpaceTrueCommaSpace2CommaSpaceDoublequoteThreeDoublequoteAgt();
    message.v0 = object.v0 ?? false;
    message.v1 = object.v1 ?? false;
    message.v2 = object.v2 ?? 0;
    message.v3 = object.v3 ?? "";
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
