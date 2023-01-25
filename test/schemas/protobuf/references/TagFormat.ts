/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface TagFormat {
  uuid: string;
  email: string;
  url: string;
  ipv4: string;
  ipv6: string;
  custom: string;
}

function createBaseTagFormat(): TagFormat {
  return { uuid: "", email: "", url: "", ipv4: "", ipv6: "", custom: "" };
}

export const TagFormat = {
  encode(message: TagFormat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    if (message.ipv4 !== "") {
      writer.uint32(34).string(message.ipv4);
    }
    if (message.ipv6 !== "") {
      writer.uint32(42).string(message.ipv6);
    }
    if (message.custom !== "") {
      writer.uint32(50).string(message.custom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TagFormat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagFormat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.url = reader.string();
          break;
        case 4:
          message.ipv4 = reader.string();
          break;
        case 5:
          message.ipv6 = reader.string();
          break;
        case 6:
          message.custom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TagFormat {
    return {
      uuid: isSet(object.uuid) ? String(object.uuid) : "",
      email: isSet(object.email) ? String(object.email) : "",
      url: isSet(object.url) ? String(object.url) : "",
      ipv4: isSet(object.ipv4) ? String(object.ipv4) : "",
      ipv6: isSet(object.ipv6) ? String(object.ipv6) : "",
      custom: isSet(object.custom) ? String(object.custom) : "",
    };
  },

  toJSON(message: TagFormat): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.email !== undefined && (obj.email = message.email);
    message.url !== undefined && (obj.url = message.url);
    message.ipv4 !== undefined && (obj.ipv4 = message.ipv4);
    message.ipv6 !== undefined && (obj.ipv6 = message.ipv6);
    message.custom !== undefined && (obj.custom = message.custom);
    return obj;
  },

  create<I extends Exact<DeepPartial<TagFormat>, I>>(base?: I): TagFormat {
    return TagFormat.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TagFormat>, I>>(object: I): TagFormat {
    const message = createBaseTagFormat();
    message.uuid = object.uuid ?? "";
    message.email = object.email ?? "";
    message.url = object.url ?? "";
    message.ipv4 = object.ipv4 ?? "";
    message.ipv6 = object.ipv6 ?? "";
    message.custom = object.custom ?? "";
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
