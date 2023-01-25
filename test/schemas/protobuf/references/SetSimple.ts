/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface SetSimple {
  booleans: boolean[];
  numbers: number[];
  strings: string[];
  arrays: Set_ElementLtArrayLtNumberGtGt[];
  objects: SetSimple_Person[];
}

export interface SetSimple_Person {
  id: string;
  name: string;
  age: number;
}

export interface Set {
}

export interface Set_ElementLtArrayLtNumberGtGt {
  value: number[];
}

function createBaseSetSimple(): SetSimple {
  return { booleans: [], numbers: [], strings: [], arrays: [], objects: [] };
}

export const SetSimple = {
  encode(message: SetSimple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.booleans) {
      writer.bool(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.numbers) {
      writer.double(v);
    }
    writer.ldelim();
    for (const v of message.strings) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.arrays) {
      Set_ElementLtArrayLtNumberGtGt.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.objects) {
      SetSimple_Person.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetSimple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetSimple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.booleans.push(reader.bool());
            }
          } else {
            message.booleans.push(reader.bool());
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.numbers.push(reader.double());
            }
          } else {
            message.numbers.push(reader.double());
          }
          break;
        case 3:
          message.strings.push(reader.string());
          break;
        case 4:
          message.arrays.push(Set_ElementLtArrayLtNumberGtGt.decode(reader, reader.uint32()));
          break;
        case 5:
          message.objects.push(SetSimple_Person.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetSimple {
    return {
      booleans: Array.isArray(object?.booleans) ? object.booleans.map((e: any) => Boolean(e)) : [],
      numbers: Array.isArray(object?.numbers) ? object.numbers.map((e: any) => Number(e)) : [],
      strings: Array.isArray(object?.strings) ? object.strings.map((e: any) => String(e)) : [],
      arrays: Array.isArray(object?.arrays)
        ? object.arrays.map((e: any) => Set_ElementLtArrayLtNumberGtGt.fromJSON(e))
        : [],
      objects: Array.isArray(object?.objects) ? object.objects.map((e: any) => SetSimple_Person.fromJSON(e)) : [],
    };
  },

  toJSON(message: SetSimple): unknown {
    const obj: any = {};
    if (message.booleans) {
      obj.booleans = message.booleans.map((e) => e);
    } else {
      obj.booleans = [];
    }
    if (message.numbers) {
      obj.numbers = message.numbers.map((e) => e);
    } else {
      obj.numbers = [];
    }
    if (message.strings) {
      obj.strings = message.strings.map((e) => e);
    } else {
      obj.strings = [];
    }
    if (message.arrays) {
      obj.arrays = message.arrays.map((e) => e ? Set_ElementLtArrayLtNumberGtGt.toJSON(e) : undefined);
    } else {
      obj.arrays = [];
    }
    if (message.objects) {
      obj.objects = message.objects.map((e) => e ? SetSimple_Person.toJSON(e) : undefined);
    } else {
      obj.objects = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetSimple>, I>>(base?: I): SetSimple {
    return SetSimple.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SetSimple>, I>>(object: I): SetSimple {
    const message = createBaseSetSimple();
    message.booleans = object.booleans?.map((e) => e) || [];
    message.numbers = object.numbers?.map((e) => e) || [];
    message.strings = object.strings?.map((e) => e) || [];
    message.arrays = object.arrays?.map((e) => Set_ElementLtArrayLtNumberGtGt.fromPartial(e)) || [];
    message.objects = object.objects?.map((e) => SetSimple_Person.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSetSimple_Person(): SetSimple_Person {
  return { id: "", name: "", age: 0 };
}

export const SetSimple_Person = {
  encode(message: SetSimple_Person, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.age !== 0) {
      writer.uint32(25).double(message.age);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetSimple_Person {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetSimple_Person();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.age = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetSimple_Person {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      age: isSet(object.age) ? Number(object.age) : 0,
    };
  },

  toJSON(message: SetSimple_Person): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.age !== undefined && (obj.age = message.age);
    return obj;
  },

  create<I extends Exact<DeepPartial<SetSimple_Person>, I>>(base?: I): SetSimple_Person {
    return SetSimple_Person.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SetSimple_Person>, I>>(object: I): SetSimple_Person {
    const message = createBaseSetSimple_Person();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.age = object.age ?? 0;
    return message;
  },
};

function createBaseSet(): Set {
  return {};
}

export const Set = {
  encode(_: Set, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Set {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSet();
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

  fromJSON(_: any): Set {
    return {};
  },

  toJSON(_: Set): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Set>, I>>(base?: I): Set {
    return Set.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Set>, I>>(_: I): Set {
    const message = createBaseSet();
    return message;
  },
};

function createBaseSet_ElementLtArrayLtNumberGtGt(): Set_ElementLtArrayLtNumberGtGt {
  return { value: [] };
}

export const Set_ElementLtArrayLtNumberGtGt = {
  encode(message: Set_ElementLtArrayLtNumberGtGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.value) {
      writer.double(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Set_ElementLtArrayLtNumberGtGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSet_ElementLtArrayLtNumberGtGt();
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

  fromJSON(object: any): Set_ElementLtArrayLtNumberGtGt {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: Set_ElementLtArrayLtNumberGtGt): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Set_ElementLtArrayLtNumberGtGt>, I>>(base?: I): Set_ElementLtArrayLtNumberGtGt {
    return Set_ElementLtArrayLtNumberGtGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Set_ElementLtArrayLtNumberGtGt>, I>>(
    object: I,
  ): Set_ElementLtArrayLtNumberGtGt {
    const message = createBaseSet_ElementLtArrayLtNumberGtGt();
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
