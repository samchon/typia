/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface SetUnion {
}

export interface SetUnion_Person {
  id: string;
  name: string;
  age: number;
}

export interface Main {
  value:
    Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion_PersonGtSpaceOrSpaceSetLtBooleanGtSpaceOrSpaceSetLtNumberGtSpaceOrSpaceSetLtStringGtRpGt[];
}

export interface Array {
}

export interface Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion {
}

export interface Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion_PersonGtSpaceOrSpaceSetLtBooleanGtSpaceOrSpaceSetLtNumberGtSpaceOrSpaceSetLtStringGtRpGt {
  valueO0?: Set_WrapperLtStringGt | undefined;
  valueO1?: Set_WrapperLtBooleanGt | undefined;
  valueO2?: Set_WrapperLtNumberGt | undefined;
  valueO3?: Set_WrapperLtArrayLtNumberGtGt | undefined;
  valueO4?: Set_WrapperLtSetUnion_PersonGt | undefined;
}

export interface Array_ElementLtArrayLtNumberGtGt {
  value: number[];
}

export interface Set {
}

export interface Set_WrapperLtStringGt {
  value: string[];
}

export interface Set_WrapperLtBooleanGt {
  value: boolean[];
}

export interface Set_WrapperLtNumberGt {
  value: number[];
}

export interface Set_WrapperLtArrayLtNumberGtGt {
  value: Array_ElementLtArrayLtNumberGtGt[];
}

export interface Set_WrapperLtSetUnion {
}

export interface Set_WrapperLtSetUnion_PersonGt {
  value: SetUnion_Person[];
}

function createBaseSetUnion(): SetUnion {
  return {};
}

export const SetUnion = {
  encode(_: SetUnion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetUnion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetUnion();
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

  fromJSON(_: any): SetUnion {
    return {};
  },

  toJSON(_: SetUnion): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SetUnion>, I>>(base?: I): SetUnion {
    return SetUnion.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SetUnion>, I>>(_: I): SetUnion {
    const message = createBaseSetUnion();
    return message;
  },
};

function createBaseSetUnion_Person(): SetUnion_Person {
  return { id: "", name: "", age: 0 };
}

export const SetUnion_Person = {
  encode(message: SetUnion_Person, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SetUnion_Person {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetUnion_Person();
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

  fromJSON(object: any): SetUnion_Person {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      age: isSet(object.age) ? Number(object.age) : 0,
    };
  },

  toJSON(message: SetUnion_Person): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.age !== undefined && (obj.age = message.age);
    return obj;
  },

  create<I extends Exact<DeepPartial<SetUnion_Person>, I>>(base?: I): SetUnion_Person {
    return SetUnion_Person.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SetUnion_Person>, I>>(object: I): SetUnion_Person {
    const message = createBaseSetUnion_Person();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.age = object.age ?? 0;
    return message;
  },
};

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion_PersonGtSpaceOrSpaceSetLtBooleanGtSpaceOrSpaceSetLtNumberGtSpaceOrSpaceSetLtStringGtRpGt
        .encode(v!, writer.uint32(10).fork()).ldelim();
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
            Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion_PersonGtSpaceOrSpaceSetLtBooleanGtSpaceOrSpaceSetLtNumberGtSpaceOrSpaceSetLtStringGtRpGt
              .decode(reader, reader.uint32()),
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
          Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion_PersonGtSpaceOrSpaceSetLtBooleanGtSpaceOrSpaceSetLtNumberGtSpaceOrSpaceSetLtStringGtRpGt
            .fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e
        ? Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion_PersonGtSpaceOrSpaceSetLtBooleanGtSpaceOrSpaceSetLtNumberGtSpaceOrSpaceSetLtStringGtRpGt
          .toJSON(e)
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
        Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion_PersonGtSpaceOrSpaceSetLtBooleanGtSpaceOrSpaceSetLtNumberGtSpaceOrSpaceSetLtStringGtRpGt
          .fromPartial(e)
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

function createBaseArray_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion(): Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion {
  return {};
}

export const Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion = {
  encode(
    _: Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion();
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

  fromJSON(_: any): Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion {
    return {};
  },

  toJSON(_: Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion>, I>>(
    base?: I,
  ): Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion {
    return Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion>, I>>(
    _: I,
  ): Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion {
    const message = createBaseArray_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion();
    return message;
  },
};

function createBaseArray_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion_PersonGtSpaceOrSpaceSetLtBooleanGtSpaceOrSpaceSetLtNumberGtSpaceOrSpaceSetLtStringGtRpGt(): Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion_PersonGtSpaceOrSpaceSetLtBooleanGtSpaceOrSpaceSetLtNumberGtSpaceOrSpaceSetLtStringGtRpGt {
  return { valueO0: undefined, valueO1: undefined, valueO2: undefined, valueO3: undefined, valueO4: undefined };
}

export const Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion_PersonGtSpaceOrSpaceSetLtBooleanGtSpaceOrSpaceSetLtNumberGtSpaceOrSpaceSetLtStringGtRpGt =
  {
    encode(
      message:
        Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion_PersonGtSpaceOrSpaceSetLtBooleanGtSpaceOrSpaceSetLtNumberGtSpaceOrSpaceSetLtStringGtRpGt,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.valueO0 !== undefined) {
        Set_WrapperLtStringGt.encode(message.valueO0, writer.uint32(10).fork()).ldelim();
      }
      if (message.valueO1 !== undefined) {
        Set_WrapperLtBooleanGt.encode(message.valueO1, writer.uint32(18).fork()).ldelim();
      }
      if (message.valueO2 !== undefined) {
        Set_WrapperLtNumberGt.encode(message.valueO2, writer.uint32(26).fork()).ldelim();
      }
      if (message.valueO3 !== undefined) {
        Set_WrapperLtArrayLtNumberGtGt.encode(message.valueO3, writer.uint32(34).fork()).ldelim();
      }
      if (message.valueO4 !== undefined) {
        Set_WrapperLtSetUnion_PersonGt.encode(message.valueO4, writer.uint32(42).fork()).ldelim();
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion_PersonGtSpaceOrSpaceSetLtBooleanGtSpaceOrSpaceSetLtNumberGtSpaceOrSpaceSetLtStringGtRpGt {
      const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseArray_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion_PersonGtSpaceOrSpaceSetLtBooleanGtSpaceOrSpaceSetLtNumberGtSpaceOrSpaceSetLtStringGtRpGt();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.valueO0 = Set_WrapperLtStringGt.decode(reader, reader.uint32());
            break;
          case 2:
            message.valueO1 = Set_WrapperLtBooleanGt.decode(reader, reader.uint32());
            break;
          case 3:
            message.valueO2 = Set_WrapperLtNumberGt.decode(reader, reader.uint32());
            break;
          case 4:
            message.valueO3 = Set_WrapperLtArrayLtNumberGtGt.decode(reader, reader.uint32());
            break;
          case 5:
            message.valueO4 = Set_WrapperLtSetUnion_PersonGt.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    },

    fromJSON(
      object: any,
    ): Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion_PersonGtSpaceOrSpaceSetLtBooleanGtSpaceOrSpaceSetLtNumberGtSpaceOrSpaceSetLtStringGtRpGt {
      return {
        valueO0: isSet(object.valueO0) ? Set_WrapperLtStringGt.fromJSON(object.valueO0) : undefined,
        valueO1: isSet(object.valueO1) ? Set_WrapperLtBooleanGt.fromJSON(object.valueO1) : undefined,
        valueO2: isSet(object.valueO2) ? Set_WrapperLtNumberGt.fromJSON(object.valueO2) : undefined,
        valueO3: isSet(object.valueO3) ? Set_WrapperLtArrayLtNumberGtGt.fromJSON(object.valueO3) : undefined,
        valueO4: isSet(object.valueO4) ? Set_WrapperLtSetUnion_PersonGt.fromJSON(object.valueO4) : undefined,
      };
    },

    toJSON(
      message:
        Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion_PersonGtSpaceOrSpaceSetLtBooleanGtSpaceOrSpaceSetLtNumberGtSpaceOrSpaceSetLtStringGtRpGt,
    ): unknown {
      const obj: any = {};
      message.valueO0 !== undefined &&
        (obj.valueO0 = message.valueO0 ? Set_WrapperLtStringGt.toJSON(message.valueO0) : undefined);
      message.valueO1 !== undefined &&
        (obj.valueO1 = message.valueO1 ? Set_WrapperLtBooleanGt.toJSON(message.valueO1) : undefined);
      message.valueO2 !== undefined &&
        (obj.valueO2 = message.valueO2 ? Set_WrapperLtNumberGt.toJSON(message.valueO2) : undefined);
      message.valueO3 !== undefined &&
        (obj.valueO3 = message.valueO3 ? Set_WrapperLtArrayLtNumberGtGt.toJSON(message.valueO3) : undefined);
      message.valueO4 !== undefined &&
        (obj.valueO4 = message.valueO4 ? Set_WrapperLtSetUnion_PersonGt.toJSON(message.valueO4) : undefined);
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion_PersonGtSpaceOrSpaceSetLtBooleanGtSpaceOrSpaceSetLtNumberGtSpaceOrSpaceSetLtStringGtRpGt
        >,
        I
      >,
    >(
      base?: I,
    ): Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion_PersonGtSpaceOrSpaceSetLtBooleanGtSpaceOrSpaceSetLtNumberGtSpaceOrSpaceSetLtStringGtRpGt {
      return Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion_PersonGtSpaceOrSpaceSetLtBooleanGtSpaceOrSpaceSetLtNumberGtSpaceOrSpaceSetLtStringGtRpGt
        .fromPartial(base ?? {});
    },

    fromPartial<
      I extends Exact<
        DeepPartial<
          Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion_PersonGtSpaceOrSpaceSetLtBooleanGtSpaceOrSpaceSetLtNumberGtSpaceOrSpaceSetLtStringGtRpGt
        >,
        I
      >,
    >(
      object: I,
    ): Array_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion_PersonGtSpaceOrSpaceSetLtBooleanGtSpaceOrSpaceSetLtNumberGtSpaceOrSpaceSetLtStringGtRpGt {
      const message =
        createBaseArray_ElementLtLpSetLtArrayLtNumberGtGtSpaceOrSpaceSetLtSetUnion_PersonGtSpaceOrSpaceSetLtBooleanGtSpaceOrSpaceSetLtNumberGtSpaceOrSpaceSetLtStringGtRpGt();
      message.valueO0 = (object.valueO0 !== undefined && object.valueO0 !== null)
        ? Set_WrapperLtStringGt.fromPartial(object.valueO0)
        : undefined;
      message.valueO1 = (object.valueO1 !== undefined && object.valueO1 !== null)
        ? Set_WrapperLtBooleanGt.fromPartial(object.valueO1)
        : undefined;
      message.valueO2 = (object.valueO2 !== undefined && object.valueO2 !== null)
        ? Set_WrapperLtNumberGt.fromPartial(object.valueO2)
        : undefined;
      message.valueO3 = (object.valueO3 !== undefined && object.valueO3 !== null)
        ? Set_WrapperLtArrayLtNumberGtGt.fromPartial(object.valueO3)
        : undefined;
      message.valueO4 = (object.valueO4 !== undefined && object.valueO4 !== null)
        ? Set_WrapperLtSetUnion_PersonGt.fromPartial(object.valueO4)
        : undefined;
      return message;
    },
  };

function createBaseArray_ElementLtArrayLtNumberGtGt(): Array_ElementLtArrayLtNumberGtGt {
  return { value: [] };
}

export const Array_ElementLtArrayLtNumberGtGt = {
  encode(message: Array_ElementLtArrayLtNumberGtGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.value) {
      writer.double(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Array_ElementLtArrayLtNumberGtGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArray_ElementLtArrayLtNumberGtGt();
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

  fromJSON(object: any): Array_ElementLtArrayLtNumberGtGt {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: Array_ElementLtArrayLtNumberGtGt): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Array_ElementLtArrayLtNumberGtGt>, I>>(
    base?: I,
  ): Array_ElementLtArrayLtNumberGtGt {
    return Array_ElementLtArrayLtNumberGtGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Array_ElementLtArrayLtNumberGtGt>, I>>(
    object: I,
  ): Array_ElementLtArrayLtNumberGtGt {
    const message = createBaseArray_ElementLtArrayLtNumberGtGt();
    message.value = object.value?.map((e) => e) || [];
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

function createBaseSet_WrapperLtStringGt(): Set_WrapperLtStringGt {
  return { value: [] };
}

export const Set_WrapperLtStringGt = {
  encode(message: Set_WrapperLtStringGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Set_WrapperLtStringGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSet_WrapperLtStringGt();
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

  fromJSON(object: any): Set_WrapperLtStringGt {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => String(e)) : [] };
  },

  toJSON(message: Set_WrapperLtStringGt): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Set_WrapperLtStringGt>, I>>(base?: I): Set_WrapperLtStringGt {
    return Set_WrapperLtStringGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Set_WrapperLtStringGt>, I>>(object: I): Set_WrapperLtStringGt {
    const message = createBaseSet_WrapperLtStringGt();
    message.value = object.value?.map((e) => e) || [];
    return message;
  },
};

function createBaseSet_WrapperLtBooleanGt(): Set_WrapperLtBooleanGt {
  return { value: [] };
}

export const Set_WrapperLtBooleanGt = {
  encode(message: Set_WrapperLtBooleanGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.value) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Set_WrapperLtBooleanGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSet_WrapperLtBooleanGt();
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

  fromJSON(object: any): Set_WrapperLtBooleanGt {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => Boolean(e)) : [] };
  },

  toJSON(message: Set_WrapperLtBooleanGt): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Set_WrapperLtBooleanGt>, I>>(base?: I): Set_WrapperLtBooleanGt {
    return Set_WrapperLtBooleanGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Set_WrapperLtBooleanGt>, I>>(object: I): Set_WrapperLtBooleanGt {
    const message = createBaseSet_WrapperLtBooleanGt();
    message.value = object.value?.map((e) => e) || [];
    return message;
  },
};

function createBaseSet_WrapperLtNumberGt(): Set_WrapperLtNumberGt {
  return { value: [] };
}

export const Set_WrapperLtNumberGt = {
  encode(message: Set_WrapperLtNumberGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.value) {
      writer.double(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Set_WrapperLtNumberGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSet_WrapperLtNumberGt();
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

  fromJSON(object: any): Set_WrapperLtNumberGt {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: Set_WrapperLtNumberGt): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Set_WrapperLtNumberGt>, I>>(base?: I): Set_WrapperLtNumberGt {
    return Set_WrapperLtNumberGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Set_WrapperLtNumberGt>, I>>(object: I): Set_WrapperLtNumberGt {
    const message = createBaseSet_WrapperLtNumberGt();
    message.value = object.value?.map((e) => e) || [];
    return message;
  },
};

function createBaseSet_WrapperLtArrayLtNumberGtGt(): Set_WrapperLtArrayLtNumberGtGt {
  return { value: [] };
}

export const Set_WrapperLtArrayLtNumberGtGt = {
  encode(message: Set_WrapperLtArrayLtNumberGtGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      Array_ElementLtArrayLtNumberGtGt.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Set_WrapperLtArrayLtNumberGtGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSet_WrapperLtArrayLtNumberGtGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value.push(Array_ElementLtArrayLtNumberGtGt.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Set_WrapperLtArrayLtNumberGtGt {
    return {
      value: Array.isArray(object?.value)
        ? object.value.map((e: any) => Array_ElementLtArrayLtNumberGtGt.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Set_WrapperLtArrayLtNumberGtGt): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e ? Array_ElementLtArrayLtNumberGtGt.toJSON(e) : undefined);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Set_WrapperLtArrayLtNumberGtGt>, I>>(base?: I): Set_WrapperLtArrayLtNumberGtGt {
    return Set_WrapperLtArrayLtNumberGtGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Set_WrapperLtArrayLtNumberGtGt>, I>>(
    object: I,
  ): Set_WrapperLtArrayLtNumberGtGt {
    const message = createBaseSet_WrapperLtArrayLtNumberGtGt();
    message.value = object.value?.map((e) => Array_ElementLtArrayLtNumberGtGt.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSet_WrapperLtSetUnion(): Set_WrapperLtSetUnion {
  return {};
}

export const Set_WrapperLtSetUnion = {
  encode(_: Set_WrapperLtSetUnion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Set_WrapperLtSetUnion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSet_WrapperLtSetUnion();
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

  fromJSON(_: any): Set_WrapperLtSetUnion {
    return {};
  },

  toJSON(_: Set_WrapperLtSetUnion): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Set_WrapperLtSetUnion>, I>>(base?: I): Set_WrapperLtSetUnion {
    return Set_WrapperLtSetUnion.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Set_WrapperLtSetUnion>, I>>(_: I): Set_WrapperLtSetUnion {
    const message = createBaseSet_WrapperLtSetUnion();
    return message;
  },
};

function createBaseSet_WrapperLtSetUnion_PersonGt(): Set_WrapperLtSetUnion_PersonGt {
  return { value: [] };
}

export const Set_WrapperLtSetUnion_PersonGt = {
  encode(message: Set_WrapperLtSetUnion_PersonGt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      SetUnion_Person.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Set_WrapperLtSetUnion_PersonGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSet_WrapperLtSetUnion_PersonGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value.push(SetUnion_Person.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Set_WrapperLtSetUnion_PersonGt {
    return { value: Array.isArray(object?.value) ? object.value.map((e: any) => SetUnion_Person.fromJSON(e)) : [] };
  },

  toJSON(message: Set_WrapperLtSetUnion_PersonGt): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e ? SetUnion_Person.toJSON(e) : undefined);
    } else {
      obj.value = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Set_WrapperLtSetUnion_PersonGt>, I>>(base?: I): Set_WrapperLtSetUnion_PersonGt {
    return Set_WrapperLtSetUnion_PersonGt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Set_WrapperLtSetUnion_PersonGt>, I>>(
    object: I,
  ): Set_WrapperLtSetUnion_PersonGt {
    const message = createBaseSet_WrapperLtSetUnion_PersonGt();
    message.value = object.value?.map((e) => SetUnion_Person.fromPartial(e)) || [];
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
