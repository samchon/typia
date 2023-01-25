/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface DynamicArray {
}

export interface DynamicArray_Wrapper {
  value: string[];
}

export interface Main {
  value: { [key: string]: DynamicArray_Wrapper };
}

export interface Main_ValueEntry {
  key: string;
  value: DynamicArray_Wrapper | undefined;
}

function createBaseDynamicArray(): DynamicArray {
  return {};
}

export const DynamicArray = {
  encode(_: DynamicArray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DynamicArray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDynamicArray();
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

  fromJSON(_: any): DynamicArray {
    return {};
  },

  toJSON(_: DynamicArray): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DynamicArray>, I>>(base?: I): DynamicArray {
    return DynamicArray.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DynamicArray>, I>>(_: I): DynamicArray {
    const message = createBaseDynamicArray();
    return message;
  },
};

function createBaseDynamicArray_Wrapper(): DynamicArray_Wrapper {
  return { value: [] };
}

export const DynamicArray_Wrapper = {
  encode(message: DynamicArray_Wrapper, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DynamicArray_Wrapper {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDynamicArray_Wrapper();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DynamicArray_Wrapper {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => String(e)) : [] };
  },

  toJSON(message: DynamicArray_Wrapper): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DynamicArray_Wrapper>, I>>(base?: I): DynamicArray_Wrapper {
    return DynamicArray_Wrapper.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DynamicArray_Wrapper>, I>>(object: I): DynamicArray_Wrapper {
    const message = createBaseDynamicArray_Wrapper();
    message.value = object.value?.map((e) => e) || [];
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
        ? Object.entries(object.value).reduce<{ [key: string]: DynamicArray_Wrapper }>((acc, [key, value]) => {
          acc[key] = DynamicArray_Wrapper.fromJSON(value);
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
        obj.value[k] = DynamicArray_Wrapper.toJSON(v);
      });
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Main>, I>>(base?: I): Main {
    return Main.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Main>, I>>(object: I): Main {
    const message = createBaseMain();
    message.value = Object.entries(object.value ?? {}).reduce<{ [key: string]: DynamicArray_Wrapper }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = DynamicArray_Wrapper.fromPartial(value);
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
      DynamicArray_Wrapper.encode(message.value, writer.uint32(18).fork()).ldelim();
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
          message.value = DynamicArray_Wrapper.decode(reader, reader.uint32());
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
      value: isSet(object.value) ? DynamicArray_Wrapper.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Main_ValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? DynamicArray_Wrapper.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Main_ValueEntry>, I>>(base?: I): Main_ValueEntry {
    return Main_ValueEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Main_ValueEntry>, I>>(object: I): Main_ValueEntry {
    const message = createBaseMain_ValueEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? DynamicArray_Wrapper.fromPartial(object.value)
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
