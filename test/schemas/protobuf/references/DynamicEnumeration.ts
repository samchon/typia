/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface DynamicEnumeration {
  ar?: string | undefined;
  v3?: string | undefined;
  v4?: string | undefined;
  en?: string | undefined;
  fr?: string | undefined;
  de?: string | undefined;
  ja?: string | undefined;
  ko?: string | undefined;
  pt?: string | undefined;
  ru?: string | undefined;
}

function createBaseDynamicEnumeration(): DynamicEnumeration {
  return {
    ar: undefined,
    v3: undefined,
    v4: undefined,
    en: undefined,
    fr: undefined,
    de: undefined,
    ja: undefined,
    ko: undefined,
    pt: undefined,
    ru: undefined,
  };
}

export const DynamicEnumeration = {
  encode(message: DynamicEnumeration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ar !== undefined) {
      writer.uint32(10).string(message.ar);
    }
    if (message.v3 !== undefined) {
      writer.uint32(18).string(message.v3);
    }
    if (message.v4 !== undefined) {
      writer.uint32(26).string(message.v4);
    }
    if (message.en !== undefined) {
      writer.uint32(34).string(message.en);
    }
    if (message.fr !== undefined) {
      writer.uint32(42).string(message.fr);
    }
    if (message.de !== undefined) {
      writer.uint32(50).string(message.de);
    }
    if (message.ja !== undefined) {
      writer.uint32(58).string(message.ja);
    }
    if (message.ko !== undefined) {
      writer.uint32(66).string(message.ko);
    }
    if (message.pt !== undefined) {
      writer.uint32(74).string(message.pt);
    }
    if (message.ru !== undefined) {
      writer.uint32(82).string(message.ru);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DynamicEnumeration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDynamicEnumeration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ar = reader.string();
          break;
        case 2:
          message.v3 = reader.string();
          break;
        case 3:
          message.v4 = reader.string();
          break;
        case 4:
          message.en = reader.string();
          break;
        case 5:
          message.fr = reader.string();
          break;
        case 6:
          message.de = reader.string();
          break;
        case 7:
          message.ja = reader.string();
          break;
        case 8:
          message.ko = reader.string();
          break;
        case 9:
          message.pt = reader.string();
          break;
        case 10:
          message.ru = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DynamicEnumeration {
    return {
      ar: isSet(object.ar) ? String(object.ar) : undefined,
      v3: isSet(object.v3) ? String(object.v3) : undefined,
      v4: isSet(object.v4) ? String(object.v4) : undefined,
      en: isSet(object.en) ? String(object.en) : undefined,
      fr: isSet(object.fr) ? String(object.fr) : undefined,
      de: isSet(object.de) ? String(object.de) : undefined,
      ja: isSet(object.ja) ? String(object.ja) : undefined,
      ko: isSet(object.ko) ? String(object.ko) : undefined,
      pt: isSet(object.pt) ? String(object.pt) : undefined,
      ru: isSet(object.ru) ? String(object.ru) : undefined,
    };
  },

  toJSON(message: DynamicEnumeration): unknown {
    const obj: any = {};
    message.ar !== undefined && (obj.ar = message.ar);
    message.v3 !== undefined && (obj.v3 = message.v3);
    message.v4 !== undefined && (obj.v4 = message.v4);
    message.en !== undefined && (obj.en = message.en);
    message.fr !== undefined && (obj.fr = message.fr);
    message.de !== undefined && (obj.de = message.de);
    message.ja !== undefined && (obj.ja = message.ja);
    message.ko !== undefined && (obj.ko = message.ko);
    message.pt !== undefined && (obj.pt = message.pt);
    message.ru !== undefined && (obj.ru = message.ru);
    return obj;
  },

  create<I extends Exact<DeepPartial<DynamicEnumeration>, I>>(base?: I): DynamicEnumeration {
    return DynamicEnumeration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DynamicEnumeration>, I>>(object: I): DynamicEnumeration {
    const message = createBaseDynamicEnumeration();
    message.ar = object.ar ?? undefined;
    message.v3 = object.v3 ?? undefined;
    message.v4 = object.v4 ?? undefined;
    message.en = object.en ?? undefined;
    message.fr = object.fr ?? undefined;
    message.de = object.de ?? undefined;
    message.ja = object.ja ?? undefined;
    message.ko = object.ko ?? undefined;
    message.pt = object.pt ?? undefined;
    message.ru = object.ru ?? undefined;
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
