/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ObjectJsonTag {
  vulnerable: string;
  description: string;
  title: string;
  complicateTitle: string;
}

function createBaseObjectJsonTag(): ObjectJsonTag {
  return { vulnerable: "", description: "", title: "", complicateTitle: "" };
}

export const ObjectJsonTag = {
  encode(message: ObjectJsonTag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vulnerable !== "") {
      writer.uint32(10).string(message.vulnerable);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.complicateTitle !== "") {
      writer.uint32(34).string(message.complicateTitle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectJsonTag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectJsonTag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vulnerable = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.complicateTitle = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectJsonTag {
    return {
      vulnerable: isSet(object.vulnerable) ? String(object.vulnerable) : "",
      description: isSet(object.description) ? String(object.description) : "",
      title: isSet(object.title) ? String(object.title) : "",
      complicateTitle: isSet(object.complicateTitle) ? String(object.complicateTitle) : "",
    };
  },

  toJSON(message: ObjectJsonTag): unknown {
    const obj: any = {};
    message.vulnerable !== undefined && (obj.vulnerable = message.vulnerable);
    message.description !== undefined && (obj.description = message.description);
    message.title !== undefined && (obj.title = message.title);
    message.complicateTitle !== undefined && (obj.complicateTitle = message.complicateTitle);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectJsonTag>, I>>(base?: I): ObjectJsonTag {
    return ObjectJsonTag.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectJsonTag>, I>>(object: I): ObjectJsonTag {
    const message = createBaseObjectJsonTag();
    message.vulnerable = object.vulnerable ?? "";
    message.description = object.description ?? "";
    message.title = object.title ?? "";
    message.complicateTitle = object.complicateTitle ?? "";
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
