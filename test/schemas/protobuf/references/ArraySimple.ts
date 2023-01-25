/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ArraySimple {
}

export interface ArraySimple_IPerson {
  name: string;
  email: string;
  hobbiesO0?: Array_WrapperLtStringGt | undefined;
  hobbiesO1?: Array_WrapperLtArraySimple_IHobbyGt | undefined;
  hobbiesO2?: Array_WrapperLtArraySimple_IContentGt | undefined;
}

export interface ArraySimple_IHobby {
  name: string;
  rank: number;
}

export interface ArraySimple_IContent {
  body: string;
}

export interface Array {
}

export interface Array_WrapperLtStringGt {
  value: string[];
}

export interface Array_WrapperLtArraySimple {
}

export interface Array_WrapperLtArraySimple_IHobbyGt {
  value: ArraySimple_IHobby[];
}

export interface Array_WrapperLtArraySimple_IContentGt {
  value: ArraySimple_IContent[];
}

export interface Main {
  value: ArraySimple_IPerson[];
}

function createBaseArraySimple(): ArraySimple {
  return {};
}

export const ArraySimple = {
  encode(_: ArraySimple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArraySimple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArraySimple();
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

  fromJSON(_: any): ArraySimple {
    return {};
  },

  toJSON(_: ArraySimple): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ArraySimple>, I>>(base?: I): ArraySimple {
    return ArraySimple.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArraySimple>, I>>(_: I): ArraySimple {
    const message = createBaseArraySimple();
    return message;
  },
};

function createBaseArraySimple_IPerson(): ArraySimple_IPerson {
  return { name: "", email: "", hobbiesO0: undefined, hobbiesO1: undefined, hobbiesO2: undefined };
}

export const ArraySimple_IPerson = {
  encode(message: ArraySimple_IPerson, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.hobbiesO0 !== undefined) {
      Array_WrapperLtStringGt.encode(message.hobbiesO0, writer.uint32(26).fork()).ldelim();
    }
    if (message.hobbiesO1 !== undefined) {
      Array_WrapperLtArraySimple_IHobbyGt.encode(message.hobbiesO1, writer.uint32(34).fork()).ldelim();
    }
    if (message.hobbiesO2 !== undefined) {
      Array_WrapperLtArraySimple_IContentGt.encode(message.hobbiesO2, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArraySimple_IPerson {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArraySimple_IPerson();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.email = reader.string();
          break;
        case 3:
          message.hobbiesO0 = Array_WrapperLtStringGt.decode(reader, reader.uint32());
          break;
        case 4:
          message.hobbiesO1 = Array_WrapperLtArraySimple_IHobbyGt.decode(reader, reader.uint32());
          break;
        case 5:
          message.hobbiesO2 = Array_WrapperLtArraySimple_IContentGt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArraySimple_IPerson {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
      hobbiesO0: isSet(object.hobbiesO0) ? Array_WrapperLtStringGt.fromJSON(object.hobbiesO0) : undefined,
      hobbiesO1: isSet(object.hobbiesO1) ? Array_WrapperLtArraySimple_IHobbyGt.fromJSON(object.hobbiesO1) : undefined,
      hobbiesO2: isSet(object.hobbiesO2) ? Array_WrapperLtArraySimple_IContentGt.fromJSON(object.hobbiesO2) : undefined,
    };
  },

  toJSON(message: ArraySimple_IPerson): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.email !== undefined && (obj.email = message.email);
    message.hobbiesO0 !== undefined &&
      (obj.hobbiesO0 = message.hobbiesO0 ? Array_WrapperLtStringGt.toJSON(message.hobbiesO0) : undefined);
    message.hobbiesO1 !== undefined &&
      (obj.hobbiesO1 = message.hobbiesO1 ? Array_WrapperLtArraySimple_IHobbyGt.toJSON(message.hobbiesO1) : undefined);
    message.hobbiesO2 !== undefined &&
      (obj.hobbiesO2 = message.hobbiesO2 ? Array_WrapperLtArraySimple_IContentGt.toJSON(message.hobbiesO2) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ArraySimple_IPerson>, I>>(base?: I): ArraySimple_IPerson {
    return ArraySimple_IPerson.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArraySimple_IPerson>, I>>(object: I): ArraySimple_IPerson {
    const message = createBaseArraySimple_IPerson();
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.hobbiesO0 = (object.hobbiesO0 !== undefined && object.hobbiesO0 !== null)
      ? Array_WrapperLtStringGt.fromPartial(object.hobbiesO0)
      : undefined;
    message.hobbiesO1 = (object.hobbiesO1 !== undefined && object.hobbiesO1 !== null)
      ? Array_WrapperLtArraySimple_IHobbyGt.fromPartial(object.hobbiesO1)
      : undefined;
    message.hobbiesO2 = (object.hobbiesO2 !== undefined && object.hobbiesO2 !== null)
      ? Array_WrapperLtArraySimple_IContentGt.fromPartial(object.hobbiesO2)
      : undefined;
    return message;
  },
};

function createBaseArraySimple_IHobby(): ArraySimple_IHobby {
  return { name: "", rank: 0 };
}

export const ArraySimple_IHobby = {
  encode(message: ArraySimple_IHobby, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.rank !== 0) {
      writer.uint32(17).double(message.rank);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArraySimple_IHobby {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArraySimple_IHobby();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.rank = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArraySimple_IHobby {
    return { name: isSet(object.name) ? String(object.name) : "", rank: isSet(object.rank) ? Number(object.rank) : 0 };
  },

  toJSON(message: ArraySimple_IHobby): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.rank !== undefined && (obj.rank = message.rank);
    return obj;
  },

  create<I extends Exact<DeepPartial<ArraySimple_IHobby>, I>>(base?: I): ArraySimple_IHobby {
    return ArraySimple_IHobby.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArraySimple_IHobby>, I>>(object: I): ArraySimple_IHobby {
    const message = createBaseArraySimple_IHobby();
    message.name = object.name ?? "";
    message.rank = object.rank ?? 0;
    return message;
  },
};

function createBaseArraySimple_IContent(): ArraySimple_IContent {
  return { body: "" };
}

export const ArraySimple_IContent = {
  encode(message: ArraySimple_IContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.body !== "") {
      writer.uint32(10).string(message.body);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArraySimple_IContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArraySimple_IContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArraySimple_IContent {
    return { body: isSet(object.body) ? String(object.body) : "" };
  },

  toJSON(message: ArraySimple_IContent): unknown {
    const obj: any = {};
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  create<I extends Exact<DeepPartial<ArraySimple_IContent>, I>>(base?: I): ArraySimple_IContent {
    return ArraySimple_IContent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArraySimple_IContent>, I>>(object: I): ArraySimple_IContent {
    const message = createBaseArraySimple_IContent();
    message.body = object.body ?? "";
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

function createBaseArray_WrapperLtArraySimple(): Array_WrapperLtArraySimple {
  return {};
}

export const Array_WrapperLtArraySimple = {
  encode(_: Array_WrapperLtArraySimple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array_WrapperLtArraySimple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_WrapperLtArraySimple();
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

  fromJSON(_: any): Array_WrapperLtArraySimple {
    return {};
  },

  toJSON(_: Array_WrapperLtArraySimple): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_WrapperLtArraySimple>, I>>(base?: I): Array_WrapperLtArraySimple {
    return Array_WrapperLtArraySimple.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_WrapperLtArraySimple>, I>>(_: I): Array_WrapperLtArraySimple {
    const message = createBaseArray_WrapperLtArraySimple();
    return message;
  },
};

function createBaseArray_WrapperLtArraySimple_IHobbyGt(): Array_WrapperLtArraySimple_IHobbyGt {
  return { value: [] };
}

export const Array_WrapperLtArraySimple_IHobbyGt = {
  encode(message: Array_WrapperLtArraySimple_IHobbyGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      ArraySimple_IHobby.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array_WrapperLtArraySimple_IHobbyGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_WrapperLtArraySimple_IHobbyGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value.push(ArraySimple_IHobby.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Array_WrapperLtArraySimple_IHobbyGt {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => ArraySimple_IHobby.fromJSON(e)) : [] };
  },

  toJSON(message: Array_WrapperLtArraySimple_IHobbyGt): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e ? ArraySimple_IHobby.toJSON(e) : undefined);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_WrapperLtArraySimple_IHobbyGt>, I>>(
    base?: I,
  ): Array_WrapperLtArraySimple_IHobbyGt {
    return Array_WrapperLtArraySimple_IHobbyGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_WrapperLtArraySimple_IHobbyGt>, I>>(
    object: I,
  ): Array_WrapperLtArraySimple_IHobbyGt {
    const message = createBaseArray_WrapperLtArraySimple_IHobbyGt();
    message.value = object.value?.map((e) => ArraySimple_IHobby.fromPartial(e)) || [];
    return message;
  },
};

function createBaseArray_WrapperLtArraySimple_IContentGt(): Array_WrapperLtArraySimple_IContentGt {
  return { value: [] };
}

export const Array_WrapperLtArraySimple_IContentGt = {
  encode(message: Array_WrapperLtArraySimple_IContentGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      ArraySimple_IContent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array_WrapperLtArraySimple_IContentGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_WrapperLtArraySimple_IContentGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value.push(ArraySimple_IContent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Array_WrapperLtArraySimple_IContentGt {
    return {
      value: Array.isArray(object?.value) ? object.value.map((e: any) => ArraySimple_IContent.fromJSON(e)) : [],
    };
  },

  toJSON(message: Array_WrapperLtArraySimple_IContentGt): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e ? ArraySimple_IContent.toJSON(e) : undefined);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_WrapperLtArraySimple_IContentGt>, I>>(
    base?: I,
  ): Array_WrapperLtArraySimple_IContentGt {
    return Array_WrapperLtArraySimple_IContentGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_WrapperLtArraySimple_IContentGt>, I>>(
    object: I,
  ): Array_WrapperLtArraySimple_IContentGt {
    const message = createBaseArray_WrapperLtArraySimple_IContentGt();
    message.value = object.value?.map((e) => ArraySimple_IContent.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      ArraySimple_IPerson.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.value.push(ArraySimple_IPerson.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Main {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => ArraySimple_IPerson.fromJSON(e)) : [] };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e ? ArraySimple_IPerson.toJSON(e) : undefined);
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
    message.value = object.value?.map((e) => ArraySimple_IPerson.fromPartial(e)) || [];
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
