/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface DynamicTemplate {
}

export interface DynamicTemplate_Wrapper {
  valueO0?: string | undefined;
  valueO1?: number | undefined;
  valueO2?: boolean | undefined;
}

export interface Main {
  value: { [key: string]: DynamicTemplate_Wrapper };
}

export interface Main_ValueEntry {
  key: string;
  value: DynamicTemplate_Wrapper | undefined;
}

function createBaseDynamicTemplate(): DynamicTemplate {
  return {};
}

export const DynamicTemplate = {
  encode(_: DynamicTemplate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DynamicTemplate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDynamicTemplate();
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

  fromJSON(_: any): DynamicTemplate {
    return {};
  },

  toJSON(_: DynamicTemplate): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DynamicTemplate>, I>>(base?: I): DynamicTemplate {
    return DynamicTemplate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DynamicTemplate>, I>>(_: I): DynamicTemplate {
    const message = createBaseDynamicTemplate();
    return message;
  },
};

function createBaseDynamicTemplate_Wrapper(): DynamicTemplate_Wrapper {
  return { valueO0: undefined, valueO1: undefined, valueO2: undefined };
}

export const DynamicTemplate_Wrapper = {
  encode(message: DynamicTemplate_Wrapper, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valueO0 !== undefined) {
      writer.uint32(10).string(message.valueO0);
    }
    if (message.valueO1 !== undefined) {
      writer.uint32(17).double(message.valueO1);
    }
    if (message.valueO2 !== undefined) {
      writer.uint32(24).bool(message.valueO2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DynamicTemplate_Wrapper {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDynamicTemplate_Wrapper();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valueO0 = reader.string();
          break;
        case 2:
          message.valueO1 = reader.double();
          break;
        case 3:
          message.valueO2 = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DynamicTemplate_Wrapper {
    return {
      valueO0: isSet(object.valueO0) ? String(object.valueO0) : undefined,
      valueO1: isSet(object.valueO1) ? Number(object.valueO1) : undefined,
      valueO2: isSet(object.valueO2) ? Boolean(object.valueO2) : undefined,
    };
  },

  toJSON(message: DynamicTemplate_Wrapper): unknown {
    const obj: any = {};
    message.valueO0 !== undefined && (obj.valueO0 = message.valueO0);
    message.valueO1 !== undefined && (obj.valueO1 = message.valueO1);
    message.valueO2 !== undefined && (obj.valueO2 = message.valueO2);
    return obj;
  },

  create<I extends Exact<DeepPartial<DynamicTemplate_Wrapper>, I>>(base?: I): DynamicTemplate_Wrapper {
    return DynamicTemplate_Wrapper.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DynamicTemplate_Wrapper>, I>>(object: I): DynamicTemplate_Wrapper {
    const message = createBaseDynamicTemplate_Wrapper();
    message.valueO0 = object.valueO0 ?? undefined;
    message.valueO1 = object.valueO1 ?? undefined;
    message.valueO2 = object.valueO2 ?? undefined;
    return message;
  },
};

function createBaseMain(): Main {
  return { value: {} };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.value).forEach(([key, value]) => {
      Main_ValueEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
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
          const entry1 = Main_ValueEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.value[entry1.key] = entry1.value;
          }
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
      value: isObject(object.value)
        ? Object.entries(object.value).reduce<{ [key: string]: DynamicTemplate_Wrapper }>((acc, [key, value]) => {
          acc[key] = DynamicTemplate_Wrapper.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    obj.value = {};
    if (message.value) {
      Object.entries(message.value).forEach(([k, v]) => {
        obj.value[k] = DynamicTemplate_Wrapper.toJSON(v);
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Main>, I>>(base?: I): Main {
    return Main.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Main>, I>>(object: I): Main {
    const message = createBaseMain();
    message.value = Object.entries(object.value ?? {}).reduce<{ [key: string]: DynamicTemplate_Wrapper }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = DynamicTemplate_Wrapper.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseMain_ValueEntry(): Main_ValueEntry {
  return { key: "", value: undefined };
}

export const Main_ValueEntry = {
  encode(message: Main_ValueEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      DynamicTemplate_Wrapper.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Main_ValueEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMain_ValueEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = DynamicTemplate_Wrapper.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Main_ValueEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? DynamicTemplate_Wrapper.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Main_ValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? DynamicTemplate_Wrapper.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Main_ValueEntry>, I>>(base?: I): Main_ValueEntry {
    return Main_ValueEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Main_ValueEntry>, I>>(object: I): Main_ValueEntry {
    const message = createBaseMain_ValueEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? DynamicTemplate_Wrapper.fromPartial(object.value)
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
