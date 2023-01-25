/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ArrayHierarchical {
}

export interface ArrayHierarchical_ICompany {
  id: number;
  serial: number;
  name: string;
  establishedAt: ArrayHierarchical_ITimestamp | undefined;
  departments: ArrayHierarchical_IDepartment[];
}

export interface ArrayHierarchical_ITimestamp {
  time: number;
  zone: number;
}

export interface ArrayHierarchical_IDepartment {
  id: number;
  code: string;
  sales: number;
  createdAt: ArrayHierarchical_ITimestamp | undefined;
  employees: ArrayHierarchical_IEmployee[];
}

export interface ArrayHierarchical_IEmployee {
  id: number;
  name: string;
  age: number;
  grade: number;
  employeedAt: ArrayHierarchical_ITimestamp | undefined;
}

export interface Main {
  value: ArrayHierarchical_ICompany[];
}

function createBaseArrayHierarchical(): ArrayHierarchical {
  return {};
}

export const ArrayHierarchical = {
  encode(_: ArrayHierarchical, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayHierarchical {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayHierarchical();
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

  fromJSON(_: any): ArrayHierarchical {
    return {};
  },

  toJSON(_: ArrayHierarchical): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayHierarchical>, I>>(base?: I): ArrayHierarchical {
    return ArrayHierarchical.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayHierarchical>, I>>(_: I): ArrayHierarchical {
    const message = createBaseArrayHierarchical();
    return message;
  },
};

function createBaseArrayHierarchical_ICompany(): ArrayHierarchical_ICompany {
  return { id: 0, serial: 0, name: "", establishedAt: undefined, departments: [] };
}

export const ArrayHierarchical_ICompany = {
  encode(message: ArrayHierarchical_ICompany, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(9).double(message.id);
    }
    if (message.serial !== 0) {
      writer.uint32(17).double(message.serial);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.establishedAt !== undefined) {
      ArrayHierarchical_ITimestamp.encode(message.establishedAt, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.departments) {
      ArrayHierarchical_IDepartment.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayHierarchical_ICompany {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayHierarchical_ICompany();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.double();
          break;
        case 2:
          message.serial = reader.double();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.establishedAt = ArrayHierarchical_ITimestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.departments.push(ArrayHierarchical_IDepartment.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArrayHierarchical_ICompany {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      serial: isSet(object.serial) ? Number(object.serial) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      establishedAt: isSet(object.establishedAt)
        ? ArrayHierarchical_ITimestamp.fromJSON(object.establishedAt)
        : undefined,
      departments: Array.isArray(object?.departments)
        ? object.departments.map((e: any) => ArrayHierarchical_IDepartment.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ArrayHierarchical_ICompany): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.serial !== undefined && (obj.serial = message.serial);
    message.name !== undefined && (obj.name = message.name);
    message.establishedAt !== undefined && (obj.establishedAt = message.establishedAt
      ? ArrayHierarchical_ITimestamp.toJSON(message.establishedAt)
      : undefined);
    if (message.departments) {
      obj.departments = message.departments.map((e) => e ? ArrayHierarchical_IDepartment.toJSON(e) : undefined);
    } else {
      obj.departments = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayHierarchical_ICompany>, I>>(base?: I): ArrayHierarchical_ICompany {
    return ArrayHierarchical_ICompany.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayHierarchical_ICompany>, I>>(object: I): ArrayHierarchical_ICompany {
    const message = createBaseArrayHierarchical_ICompany();
    message.id = object.id ?? 0;
    message.serial = object.serial ?? 0;
    message.name = object.name ?? "";
    message.establishedAt = (object.establishedAt !== undefined && object.establishedAt !== null)
      ? ArrayHierarchical_ITimestamp.fromPartial(object.establishedAt)
      : undefined;
    message.departments = object.departments?.map((e) => ArrayHierarchical_IDepartment.fromPartial(e)) || [];
    return message;
  },
};

function createBaseArrayHierarchical_ITimestamp(): ArrayHierarchical_ITimestamp {
  return { time: 0, zone: 0 };
}

export const ArrayHierarchical_ITimestamp = {
  encode(message: ArrayHierarchical_ITimestamp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    if (message.zone !== 0) {
      writer.uint32(17).double(message.zone);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayHierarchical_ITimestamp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayHierarchical_ITimestamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = reader.double();
          break;
        case 2:
          message.zone = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArrayHierarchical_ITimestamp {
    return { time: isSet(object.time) ? Number(object.time) : 0, zone: isSet(object.zone) ? Number(object.zone) : 0 };
  },

  toJSON(message: ArrayHierarchical_ITimestamp): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    message.zone !== undefined && (obj.zone = message.zone);
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayHierarchical_ITimestamp>, I>>(base?: I): ArrayHierarchical_ITimestamp {
    return ArrayHierarchical_ITimestamp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayHierarchical_ITimestamp>, I>>(object: I): ArrayHierarchical_ITimestamp {
    const message = createBaseArrayHierarchical_ITimestamp();
    message.time = object.time ?? 0;
    message.zone = object.zone ?? 0;
    return message;
  },
};

function createBaseArrayHierarchical_IDepartment(): ArrayHierarchical_IDepartment {
  return { id: 0, code: "", sales: 0, createdAt: undefined, employees: [] };
}

export const ArrayHierarchical_IDepartment = {
  encode(message: ArrayHierarchical_IDepartment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(9).double(message.id);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.sales !== 0) {
      writer.uint32(25).double(message.sales);
    }
    if (message.createdAt !== undefined) {
      ArrayHierarchical_ITimestamp.encode(message.createdAt, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.employees) {
      ArrayHierarchical_IEmployee.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayHierarchical_IDepartment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayHierarchical_IDepartment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.double();
          break;
        case 2:
          message.code = reader.string();
          break;
        case 3:
          message.sales = reader.double();
          break;
        case 4:
          message.createdAt = ArrayHierarchical_ITimestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.employees.push(ArrayHierarchical_IEmployee.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArrayHierarchical_IDepartment {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      code: isSet(object.code) ? String(object.code) : "",
      sales: isSet(object.sales) ? Number(object.sales) : 0,
      createdAt: isSet(object.createdAt) ? ArrayHierarchical_ITimestamp.fromJSON(object.createdAt) : undefined,
      employees: Array.isArray(object?.employees)
        ? object.employees.map((e: any) => ArrayHierarchical_IEmployee.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ArrayHierarchical_IDepartment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.code !== undefined && (obj.code = message.code);
    message.sales !== undefined && (obj.sales = message.sales);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt ? ArrayHierarchical_ITimestamp.toJSON(message.createdAt) : undefined);
    if (message.employees) {
      obj.employees = message.employees.map((e) => e ? ArrayHierarchical_IEmployee.toJSON(e) : undefined);
    } else {
      obj.employees = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayHierarchical_IDepartment>, I>>(base?: I): ArrayHierarchical_IDepartment {
    return ArrayHierarchical_IDepartment.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayHierarchical_IDepartment>, I>>(
    object: I,
  ): ArrayHierarchical_IDepartment {
    const message = createBaseArrayHierarchical_IDepartment();
    message.id = object.id ?? 0;
    message.code = object.code ?? "";
    message.sales = object.sales ?? 0;
    message.createdAt = (object.createdAt !== undefined && object.createdAt !== null)
      ? ArrayHierarchical_ITimestamp.fromPartial(object.createdAt)
      : undefined;
    message.employees = object.employees?.map((e) => ArrayHierarchical_IEmployee.fromPartial(e)) || [];
    return message;
  },
};

function createBaseArrayHierarchical_IEmployee(): ArrayHierarchical_IEmployee {
  return { id: 0, name: "", age: 0, grade: 0, employeedAt: undefined };
}

export const ArrayHierarchical_IEmployee = {
  encode(message: ArrayHierarchical_IEmployee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(9).double(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.age !== 0) {
      writer.uint32(25).double(message.age);
    }
    if (message.grade !== 0) {
      writer.uint32(33).double(message.grade);
    }
    if (message.employeedAt !== undefined) {
      ArrayHierarchical_ITimestamp.encode(message.employeedAt, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayHierarchical_IEmployee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayHierarchical_IEmployee();
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
          message.age = reader.double();
          break;
        case 4:
          message.grade = reader.double();
          break;
        case 5:
          message.employeedAt = ArrayHierarchical_ITimestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ArrayHierarchical_IEmployee {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      age: isSet(object.age) ? Number(object.age) : 0,
      grade: isSet(object.grade) ? Number(object.grade) : 0,
      employeedAt: isSet(object.employeedAt) ? ArrayHierarchical_ITimestamp.fromJSON(object.employeedAt) : undefined,
    };
  },

  toJSON(message: ArrayHierarchical_IEmployee): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.age !== undefined && (obj.age = message.age);
    message.grade !== undefined && (obj.grade = message.grade);
    message.employeedAt !== undefined &&
      (obj.employeedAt = message.employeedAt ? ArrayHierarchical_ITimestamp.toJSON(message.employeedAt) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayHierarchical_IEmployee>, I>>(base?: I): ArrayHierarchical_IEmployee {
    return ArrayHierarchical_IEmployee.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayHierarchical_IEmployee>, I>>(object: I): ArrayHierarchical_IEmployee {
    const message = createBaseArrayHierarchical_IEmployee();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.age = object.age ?? 0;
    message.grade = object.grade ?? 0;
    message.employeedAt = (object.employeedAt !== undefined && object.employeedAt !== null)
      ? ArrayHierarchical_ITimestamp.fromPartial(object.employeedAt)
      : undefined;
    return message;
  },
};

function createBaseMain(): Main {
  return { value: [] };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
      ArrayHierarchical_ICompany.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.value.push(ArrayHierarchical_ICompany.decode(reader, reader.uint32()));
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
      value: Array.isArray(object?.value) ? object.value.map((e: any) => ArrayHierarchical_ICompany.fromJSON(e)) : [],
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e ? ArrayHierarchical_ICompany.toJSON(e) : undefined);
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
    message.value = object.value?.map((e) => ArrayHierarchical_ICompany.fromPartial(e)) || [];
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
