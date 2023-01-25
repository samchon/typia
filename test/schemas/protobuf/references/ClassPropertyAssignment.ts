/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ClassPropertyAssignment {
  id: number;
  name: string;
  note: string;
  editable: boolean;
  incremental: boolean;
}

function createBaseClassPropertyAssignment(): ClassPropertyAssignment {
  return { id: 0, name: "", note: "", editable: false, incremental: false };
}

export const ClassPropertyAssignment = {
  encode(message: ClassPropertyAssignment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(9).double(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.note !== "") {
      writer.uint32(26).string(message.note);
    }
    if (message.editable === true) {
      writer.uint32(32).bool(message.editable);
    }
    if (message.incremental === true) {
      writer.uint32(40).bool(message.incremental);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassPropertyAssignment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassPropertyAssignment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.double();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.note = reader.string();
          break;
        case 4:
          message.editable = reader.bool();
          break;
        case 5:
          message.incremental = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClassPropertyAssignment {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      note: isSet(object.note) ? String(object.note) : "",
      editable: isSet(object.editable) ? Boolean(object.editable) : false,
      incremental: isSet(object.incremental) ? Boolean(object.incremental) : false,
    };
  },

  toJSON(message: ClassPropertyAssignment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.note !== undefined && (obj.note = message.note);
    message.editable !== undefined && (obj.editable = message.editable);
    message.incremental !== undefined && (obj.incremental = message.incremental);
    return obj;
  },

  create<I extends Exact<DeepPartial<ClassPropertyAssignment>, I>>(base?: I): ClassPropertyAssignment {
    return ClassPropertyAssignment.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClassPropertyAssignment>, I>>(object: I): ClassPropertyAssignment {
    const message = createBaseClassPropertyAssignment();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.note = object.note ?? "";
    message.editable = object.editable ?? false;
    message.incremental = object.incremental ?? false;
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
