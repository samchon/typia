/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Main {
  value: Array_ElementLtLpArrayLtBooleanGtSpaceOrSpaceArrayLtNumberGtSpaceOrSpaceArrayLtStringGtRpGt[];
}

export interface Array {
}

export interface Array_ElementLtLpArrayLtBooleanGtSpaceOrSpaceArrayLtNumberGtSpaceOrSpaceArrayLtStringGtRpGt {
  valueO0?: Array_WrapperLtStringGt | undefined;
  valueO1?: Array_WrapperLtBooleanGt | undefined;
  valueO2?: Array_WrapperLtNumberGt | undefined;
}

export interface Array_WrapperLtStringGt {
  value: string[];
}

export interface Array_WrapperLtBooleanGt {
  value: boolean[];
}

export interface Array_WrapperLtNumberGt {
  value: number[];
}

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      Array_ElementLtLpArrayLtBooleanGtSpaceOrSpaceArrayLtNumberGtSpaceOrSpaceArrayLtStringGtRpGt.encode(
        v!,
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
          message.value.push(
            Array_ElementLtLpArrayLtBooleanGtSpaceOrSpaceArrayLtNumberGtSpaceOrSpaceArrayLtStringGtRpGt.decode(
              reader,
              reader.uint32(),
            ),
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
          Array_ElementLtLpArrayLtBooleanGtSpaceOrSpaceArrayLtNumberGtSpaceOrSpaceArrayLtStringGtRpGt.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e
        ? Array_ElementLtLpArrayLtBooleanGtSpaceOrSpaceArrayLtNumberGtSpaceOrSpaceArrayLtStringGtRpGt.toJSON(e)
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
        Array_ElementLtLpArrayLtBooleanGtSpaceOrSpaceArrayLtNumberGtSpaceOrSpaceArrayLtStringGtRpGt.fromPartial(e)
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

function createBaseArray_ElementLtLpArrayLtBooleanGtSpaceOrSpaceArrayLtNumberGtSpaceOrSpaceArrayLtStringGtRpGt(): Array_ElementLtLpArrayLtBooleanGtSpaceOrSpaceArrayLtNumberGtSpaceOrSpaceArrayLtStringGtRpGt {
  return { valueO0: undefined, valueO1: undefined, valueO2: undefined };
}

export const Array_ElementLtLpArrayLtBooleanGtSpaceOrSpaceArrayLtNumberGtSpaceOrSpaceArrayLtStringGtRpGt = {
  encode(
    message: Array_ElementLtLpArrayLtBooleanGtSpaceOrSpaceArrayLtNumberGtSpaceOrSpaceArrayLtStringGtRpGt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.valueO0 !== undefined) {
      Array_WrapperLtStringGt.encode(message.valueO0, writer.uint32(10).fork()).ldelim();
    }
    if (message.valueO1 !== undefined) {
      Array_WrapperLtBooleanGt.encode(message.valueO1, writer.uint32(18).fork()).ldelim();
    }
    if (message.valueO2 !== undefined) {
      Array_WrapperLtNumberGt.encode(message.valueO2, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Array_ElementLtLpArrayLtBooleanGtSpaceOrSpaceArrayLtNumberGtSpaceOrSpaceArrayLtStringGtRpGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseArray_ElementLtLpArrayLtBooleanGtSpaceOrSpaceArrayLtNumberGtSpaceOrSpaceArrayLtStringGtRpGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valueO0 = Array_WrapperLtStringGt.decode(reader, reader.uint32());
          break;
        case 2:
          message.valueO1 = Array_WrapperLtBooleanGt.decode(reader, reader.uint32());
          break;
        case 3:
          message.valueO2 = Array_WrapperLtNumberGt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Array_ElementLtLpArrayLtBooleanGtSpaceOrSpaceArrayLtNumberGtSpaceOrSpaceArrayLtStringGtRpGt {
    return {
      valueO0: isSet(object.valueO0) ? Array_WrapperLtStringGt.fromJSON(object.valueO0) : undefined,
      valueO1: isSet(object.valueO1) ? Array_WrapperLtBooleanGt.fromJSON(object.valueO1) : undefined,
      valueO2: isSet(object.valueO2) ? Array_WrapperLtNumberGt.fromJSON(object.valueO2) : undefined,
    };
  },

  toJSON(
    message: Array_ElementLtLpArrayLtBooleanGtSpaceOrSpaceArrayLtNumberGtSpaceOrSpaceArrayLtStringGtRpGt,
  ): unknown {
    const obj: any = {};
    message.valueO0 !== undefined &&
      (obj.valueO0 = message.valueO0 ? Array_WrapperLtStringGt.toJSON(message.valueO0) : undefined);
    message.valueO1 !== undefined &&
      (obj.valueO1 = message.valueO1 ? Array_WrapperLtBooleanGt.toJSON(message.valueO1) : undefined);
    message.valueO2 !== undefined &&
      (obj.valueO2 = message.valueO2 ? Array_WrapperLtNumberGt.toJSON(message.valueO2) : undefined);
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<Array_ElementLtLpArrayLtBooleanGtSpaceOrSpaceArrayLtNumberGtSpaceOrSpaceArrayLtStringGtRpGt>,
      I
    >,
  >(base?: I): Array_ElementLtLpArrayLtBooleanGtSpaceOrSpaceArrayLtNumberGtSpaceOrSpaceArrayLtStringGtRpGt {
    return Array_ElementLtLpArrayLtBooleanGtSpaceOrSpaceArrayLtNumberGtSpaceOrSpaceArrayLtStringGtRpGt.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Array_ElementLtLpArrayLtBooleanGtSpaceOrSpaceArrayLtNumberGtSpaceOrSpaceArrayLtStringGtRpGt>,
      I
    >,
  >(object: I): Array_ElementLtLpArrayLtBooleanGtSpaceOrSpaceArrayLtNumberGtSpaceOrSpaceArrayLtStringGtRpGt {
    const message =
      createBaseArray_ElementLtLpArrayLtBooleanGtSpaceOrSpaceArrayLtNumberGtSpaceOrSpaceArrayLtStringGtRpGt();
    message.valueO0 = (object.valueO0 !== undefined && object.valueO0 !== null)
      ? Array_WrapperLtStringGt.fromPartial(object.valueO0)
      : undefined;
    message.valueO1 = (object.valueO1 !== undefined && object.valueO1 !== null)
      ? Array_WrapperLtBooleanGt.fromPartial(object.valueO1)
      : undefined;
    message.valueO2 = (object.valueO2 !== undefined && object.valueO2 !== null)
      ? Array_WrapperLtNumberGt.fromPartial(object.valueO2)
      : undefined;
    return message;
  },
};

function createBaseArray_WrapperLtStringGt(): Array_WrapperLtStringGt {
  return { value: [] };
}

export const Array_WrapperLtStringGt = {
  encode(message: Array_WrapperLtStringGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array_WrapperLtStringGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_WrapperLtStringGt();
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

  fromJSON(object: any): Array_WrapperLtStringGt {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => String(e)) : [] };
  },

  toJSON(message: Array_WrapperLtStringGt): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_WrapperLtStringGt>, I>>(base?: I): Array_WrapperLtStringGt {
    return Array_WrapperLtStringGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_WrapperLtStringGt>, I>>(object: I): Array_WrapperLtStringGt {
    const message = createBaseArray_WrapperLtStringGt();
    message.value = object.value?.map((e) => e) || [];
    return message;
  },
};

function createBaseArray_WrapperLtBooleanGt(): Array_WrapperLtBooleanGt {
  return { value: [] };
}

export const Array_WrapperLtBooleanGt = {
  encode(message: Array_WrapperLtBooleanGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.value) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array_WrapperLtBooleanGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_WrapperLtBooleanGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.value.push(reader.bool());
            }
          } else {
            message.value.push(reader.bool());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Array_WrapperLtBooleanGt {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => Boolean(e)) : [] };
  },

  toJSON(message: Array_WrapperLtBooleanGt): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_WrapperLtBooleanGt>, I>>(base?: I): Array_WrapperLtBooleanGt {
    return Array_WrapperLtBooleanGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_WrapperLtBooleanGt>, I>>(object: I): Array_WrapperLtBooleanGt {
    const message = createBaseArray_WrapperLtBooleanGt();
    message.value = object.value?.map((e) => e) || [];
    return message;
  },
};

function createBaseArray_WrapperLtNumberGt(): Array_WrapperLtNumberGt {
  return { value: [] };
}

export const Array_WrapperLtNumberGt = {
  encode(message: Array_WrapperLtNumberGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.value) {
      writer.double(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array_WrapperLtNumberGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_WrapperLtNumberGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.value.push(reader.double());
            }
          } else {
            message.value.push(reader.double());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Array_WrapperLtNumberGt {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: Array_WrapperLtNumberGt): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_WrapperLtNumberGt>, I>>(base?: I): Array_WrapperLtNumberGt {
    return Array_WrapperLtNumberGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_WrapperLtNumberGt>, I>>(object: I): Array_WrapperLtNumberGt {
    const message = createBaseArray_WrapperLtNumberGt();
    message.value = object.value?.map((e) => e) || [];
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
