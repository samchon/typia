/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ObjectHierarchical {
}

export interface ObjectHierarchical_ICustomer {
  id: number;
  channel: ObjectHierarchical_IChannel | undefined;
  member?: ObjectHierarchical_IMember | undefined;
  account?: ObjectHierarchical_IAccount | undefined;
  href: string;
  referrer: string;
  ip: AltNumberCommaSpaceNumberCommaSpaceNumberCommaSpaceNumberAgt | undefined;
  createdAt: ObjectHierarchical_ITimestamp | undefined;
}

export interface ObjectHierarchical_IChannel {
  id: number;
  code: string;
  name: string;
  sequence: number;
  exclusive: boolean;
  priority: number;
  createdAt: ObjectHierarchical_ITimestamp | undefined;
}

export interface ObjectHierarchical_ITimestamp {
  time: number;
  zone: number;
}

export interface ObjectHierarchical_IMember {
  id: number;
  account: ObjectHierarchical_IAccount | undefined;
  enterprise?: ObjectHierarchical_IEnterprise | undefined;
  emails: string[];
  createdAt: ObjectHierarchical_ITimestamp | undefined;
  authorized: boolean;
}

export interface ObjectHierarchical_IAccount {
  id: number;
  code: string;
  createdAt: ObjectHierarchical_ITimestamp | undefined;
}

export interface ObjectHierarchical_IEnterprise {
  id: number;
  account: ObjectHierarchical_IAccount | undefined;
  name: string;
  grade: number;
  createdAt: ObjectHierarchical_ITimestamp | undefined;
}

export interface AltNumberCommaSpaceNumberCommaSpaceNumberCommaSpaceNumberAgt {
  v0: number;
  v1: number;
  v2: number;
  v3: number;
}

function createBaseObjectHierarchical(): ObjectHierarchical {
  return {};
}

export const ObjectHierarchical = {
  encode(_: ObjectHierarchical, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectHierarchical {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectHierarchical();
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

  fromJSON(_: any): ObjectHierarchical {
    return {};
  },

  toJSON(_: ObjectHierarchical): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectHierarchical>, I>>(base?: I): ObjectHierarchical {
    return ObjectHierarchical.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectHierarchical>, I>>(_: I): ObjectHierarchical {
    const message = createBaseObjectHierarchical();
    return message;
  },
};

function createBaseObjectHierarchical_ICustomer(): ObjectHierarchical_ICustomer {
  return {
    id: 0,
    channel: undefined,
    member: undefined,
    account: undefined,
    href: "",
    referrer: "",
    ip: undefined,
    createdAt: undefined,
  };
}

export const ObjectHierarchical_ICustomer = {
  encode(message: ObjectHierarchical_ICustomer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(9).double(message.id);
    }
    if (message.channel !== undefined) {
      ObjectHierarchical_IChannel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }
    if (message.member !== undefined) {
      ObjectHierarchical_IMember.encode(message.member, writer.uint32(26).fork()).ldelim();
    }
    if (message.account !== undefined) {
      ObjectHierarchical_IAccount.encode(message.account, writer.uint32(34).fork()).ldelim();
    }
    if (message.href !== "") {
      writer.uint32(42).string(message.href);
    }
    if (message.referrer !== "") {
      writer.uint32(50).string(message.referrer);
    }
    if (message.ip !== undefined) {
      AltNumberCommaSpaceNumberCommaSpaceNumberCommaSpaceNumberAgt.encode(message.ip, writer.uint32(58).fork())
        .ldelim();
    }
    if (message.createdAt !== undefined) {
      ObjectHierarchical_ITimestamp.encode(message.createdAt, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectHierarchical_ICustomer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectHierarchical_ICustomer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.double();
          break;
        case 2:
          message.channel = ObjectHierarchical_IChannel.decode(reader, reader.uint32());
          break;
        case 3:
          message.member = ObjectHierarchical_IMember.decode(reader, reader.uint32());
          break;
        case 4:
          message.account = ObjectHierarchical_IAccount.decode(reader, reader.uint32());
          break;
        case 5:
          message.href = reader.string();
          break;
        case 6:
          message.referrer = reader.string();
          break;
        case 7:
          message.ip = AltNumberCommaSpaceNumberCommaSpaceNumberCommaSpaceNumberAgt.decode(reader, reader.uint32());
          break;
        case 8:
          message.createdAt = ObjectHierarchical_ITimestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectHierarchical_ICustomer {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      channel: isSet(object.channel) ? ObjectHierarchical_IChannel.fromJSON(object.channel) : undefined,
      member: isSet(object.member) ? ObjectHierarchical_IMember.fromJSON(object.member) : undefined,
      account: isSet(object.account) ? ObjectHierarchical_IAccount.fromJSON(object.account) : undefined,
      href: isSet(object.href) ? String(object.href) : "",
      referrer: isSet(object.referrer) ? String(object.referrer) : "",
      ip: isSet(object.ip)
        ? AltNumberCommaSpaceNumberCommaSpaceNumberCommaSpaceNumberAgt.fromJSON(object.ip)
        : undefined,
      createdAt: isSet(object.createdAt) ? ObjectHierarchical_ITimestamp.fromJSON(object.createdAt) : undefined,
    };
  },

  toJSON(message: ObjectHierarchical_ICustomer): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.channel !== undefined &&
      (obj.channel = message.channel ? ObjectHierarchical_IChannel.toJSON(message.channel) : undefined);
    message.member !== undefined &&
      (obj.member = message.member ? ObjectHierarchical_IMember.toJSON(message.member) : undefined);
    message.account !== undefined &&
      (obj.account = message.account ? ObjectHierarchical_IAccount.toJSON(message.account) : undefined);
    message.href !== undefined && (obj.href = message.href);
    message.referrer !== undefined && (obj.referrer = message.referrer);
    message.ip !== undefined &&
      (obj.ip = message.ip
        ? AltNumberCommaSpaceNumberCommaSpaceNumberCommaSpaceNumberAgt.toJSON(message.ip)
        : undefined);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt ? ObjectHierarchical_ITimestamp.toJSON(message.createdAt) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectHierarchical_ICustomer>, I>>(base?: I): ObjectHierarchical_ICustomer {
    return ObjectHierarchical_ICustomer.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectHierarchical_ICustomer>, I>>(object: I): ObjectHierarchical_ICustomer {
    const message = createBaseObjectHierarchical_ICustomer();
    message.id = object.id ?? 0;
    message.channel = (object.channel !== undefined && object.channel !== null)
      ? ObjectHierarchical_IChannel.fromPartial(object.channel)
      : undefined;
    message.member = (object.member !== undefined && object.member !== null)
      ? ObjectHierarchical_IMember.fromPartial(object.member)
      : undefined;
    message.account = (object.account !== undefined && object.account !== null)
      ? ObjectHierarchical_IAccount.fromPartial(object.account)
      : undefined;
    message.href = object.href ?? "";
    message.referrer = object.referrer ?? "";
    message.ip = (object.ip !== undefined && object.ip !== null)
      ? AltNumberCommaSpaceNumberCommaSpaceNumberCommaSpaceNumberAgt.fromPartial(object.ip)
      : undefined;
    message.createdAt = (object.createdAt !== undefined && object.createdAt !== null)
      ? ObjectHierarchical_ITimestamp.fromPartial(object.createdAt)
      : undefined;
    return message;
  },
};

function createBaseObjectHierarchical_IChannel(): ObjectHierarchical_IChannel {
  return { id: 0, code: "", name: "", sequence: 0, exclusive: false, priority: 0, createdAt: undefined };
}

export const ObjectHierarchical_IChannel = {
  encode(message: ObjectHierarchical_IChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(9).double(message.id);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.sequence !== 0) {
      writer.uint32(33).double(message.sequence);
    }
    if (message.exclusive === true) {
      writer.uint32(40).bool(message.exclusive);
    }
    if (message.priority !== 0) {
      writer.uint32(49).double(message.priority);
    }
    if (message.createdAt !== undefined) {
      ObjectHierarchical_ITimestamp.encode(message.createdAt, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectHierarchical_IChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectHierarchical_IChannel();
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
          message.name = reader.string();
          break;
        case 4:
          message.sequence = reader.double();
          break;
        case 5:
          message.exclusive = reader.bool();
          break;
        case 6:
          message.priority = reader.double();
          break;
        case 7:
          message.createdAt = ObjectHierarchical_ITimestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectHierarchical_IChannel {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      code: isSet(object.code) ? String(object.code) : "",
      name: isSet(object.name) ? String(object.name) : "",
      sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
      exclusive: isSet(object.exclusive) ? Boolean(object.exclusive) : false,
      priority: isSet(object.priority) ? Number(object.priority) : 0,
      createdAt: isSet(object.createdAt) ? ObjectHierarchical_ITimestamp.fromJSON(object.createdAt) : undefined,
    };
  },

  toJSON(message: ObjectHierarchical_IChannel): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.code !== undefined && (obj.code = message.code);
    message.name !== undefined && (obj.name = message.name);
    message.sequence !== undefined && (obj.sequence = message.sequence);
    message.exclusive !== undefined && (obj.exclusive = message.exclusive);
    message.priority !== undefined && (obj.priority = message.priority);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt ? ObjectHierarchical_ITimestamp.toJSON(message.createdAt) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectHierarchical_IChannel>, I>>(base?: I): ObjectHierarchical_IChannel {
    return ObjectHierarchical_IChannel.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectHierarchical_IChannel>, I>>(object: I): ObjectHierarchical_IChannel {
    const message = createBaseObjectHierarchical_IChannel();
    message.id = object.id ?? 0;
    message.code = object.code ?? "";
    message.name = object.name ?? "";
    message.sequence = object.sequence ?? 0;
    message.exclusive = object.exclusive ?? false;
    message.priority = object.priority ?? 0;
    message.createdAt = (object.createdAt !== undefined && object.createdAt !== null)
      ? ObjectHierarchical_ITimestamp.fromPartial(object.createdAt)
      : undefined;
    return message;
  },
};

function createBaseObjectHierarchical_ITimestamp(): ObjectHierarchical_ITimestamp {
  return { time: 0, zone: 0 };
}

export const ObjectHierarchical_ITimestamp = {
  encode(message: ObjectHierarchical_ITimestamp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    if (message.zone !== 0) {
      writer.uint32(17).double(message.zone);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectHierarchical_ITimestamp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectHierarchical_ITimestamp();
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

  fromJSON(object: any): ObjectHierarchical_ITimestamp {
    return { time: isSet(object.time) ? Number(object.time) : 0, zone: isSet(object.zone) ? Number(object.zone) : 0 };
  },

  toJSON(message: ObjectHierarchical_ITimestamp): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    message.zone !== undefined && (obj.zone = message.zone);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectHierarchical_ITimestamp>, I>>(base?: I): ObjectHierarchical_ITimestamp {
    return ObjectHierarchical_ITimestamp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectHierarchical_ITimestamp>, I>>(
    object: I,
  ): ObjectHierarchical_ITimestamp {
    const message = createBaseObjectHierarchical_ITimestamp();
    message.time = object.time ?? 0;
    message.zone = object.zone ?? 0;
    return message;
  },
};

function createBaseObjectHierarchical_IMember(): ObjectHierarchical_IMember {
  return { id: 0, account: undefined, enterprise: undefined, emails: [], createdAt: undefined, authorized: false };
}

export const ObjectHierarchical_IMember = {
  encode(message: ObjectHierarchical_IMember, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(9).double(message.id);
    }
    if (message.account !== undefined) {
      ObjectHierarchical_IAccount.encode(message.account, writer.uint32(18).fork()).ldelim();
    }
    if (message.enterprise !== undefined) {
      ObjectHierarchical_IEnterprise.encode(message.enterprise, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.emails) {
      writer.uint32(34).string(v!);
    }
    if (message.createdAt !== undefined) {
      ObjectHierarchical_ITimestamp.encode(message.createdAt, writer.uint32(42).fork()).ldelim();
    }
    if (message.authorized === true) {
      writer.uint32(48).bool(message.authorized);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectHierarchical_IMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectHierarchical_IMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.double();
          break;
        case 2:
          message.account = ObjectHierarchical_IAccount.decode(reader, reader.uint32());
          break;
        case 3:
          message.enterprise = ObjectHierarchical_IEnterprise.decode(reader, reader.uint32());
          break;
        case 4:
          message.emails.push(reader.string());
          break;
        case 5:
          message.createdAt = ObjectHierarchical_ITimestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.authorized = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectHierarchical_IMember {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      account: isSet(object.account) ? ObjectHierarchical_IAccount.fromJSON(object.account) : undefined,
      enterprise: isSet(object.enterprise) ? ObjectHierarchical_IEnterprise.fromJSON(object.enterprise) : undefined,
      emails: Array.isArray(object?.emails) ? object.emails.map((e: any) => String(e)) : [],
      createdAt: isSet(object.createdAt) ? ObjectHierarchical_ITimestamp.fromJSON(object.createdAt) : undefined,
      authorized: isSet(object.authorized) ? Boolean(object.authorized) : false,
    };
  },

  toJSON(message: ObjectHierarchical_IMember): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.account !== undefined &&
      (obj.account = message.account ? ObjectHierarchical_IAccount.toJSON(message.account) : undefined);
    message.enterprise !== undefined &&
      (obj.enterprise = message.enterprise ? ObjectHierarchical_IEnterprise.toJSON(message.enterprise) : undefined);
    if (message.emails) {
      obj.emails = message.emails.map((e) => e);
    } else {
      obj.emails = [];
    }
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt ? ObjectHierarchical_ITimestamp.toJSON(message.createdAt) : undefined);
    message.authorized !== undefined && (obj.authorized = message.authorized);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectHierarchical_IMember>, I>>(base?: I): ObjectHierarchical_IMember {
    return ObjectHierarchical_IMember.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectHierarchical_IMember>, I>>(object: I): ObjectHierarchical_IMember {
    const message = createBaseObjectHierarchical_IMember();
    message.id = object.id ?? 0;
    message.account = (object.account !== undefined && object.account !== null)
      ? ObjectHierarchical_IAccount.fromPartial(object.account)
      : undefined;
    message.enterprise = (object.enterprise !== undefined && object.enterprise !== null)
      ? ObjectHierarchical_IEnterprise.fromPartial(object.enterprise)
      : undefined;
    message.emails = object.emails?.map((e) => e) || [];
    message.createdAt = (object.createdAt !== undefined && object.createdAt !== null)
      ? ObjectHierarchical_ITimestamp.fromPartial(object.createdAt)
      : undefined;
    message.authorized = object.authorized ?? false;
    return message;
  },
};

function createBaseObjectHierarchical_IAccount(): ObjectHierarchical_IAccount {
  return { id: 0, code: "", createdAt: undefined };
}

export const ObjectHierarchical_IAccount = {
  encode(message: ObjectHierarchical_IAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(9).double(message.id);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.createdAt !== undefined) {
      ObjectHierarchical_ITimestamp.encode(message.createdAt, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectHierarchical_IAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectHierarchical_IAccount();
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
          message.createdAt = ObjectHierarchical_ITimestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectHierarchical_IAccount {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      code: isSet(object.code) ? String(object.code) : "",
      createdAt: isSet(object.createdAt) ? ObjectHierarchical_ITimestamp.fromJSON(object.createdAt) : undefined,
    };
  },

  toJSON(message: ObjectHierarchical_IAccount): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.code !== undefined && (obj.code = message.code);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt ? ObjectHierarchical_ITimestamp.toJSON(message.createdAt) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectHierarchical_IAccount>, I>>(base?: I): ObjectHierarchical_IAccount {
    return ObjectHierarchical_IAccount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectHierarchical_IAccount>, I>>(object: I): ObjectHierarchical_IAccount {
    const message = createBaseObjectHierarchical_IAccount();
    message.id = object.id ?? 0;
    message.code = object.code ?? "";
    message.createdAt = (object.createdAt !== undefined && object.createdAt !== null)
      ? ObjectHierarchical_ITimestamp.fromPartial(object.createdAt)
      : undefined;
    return message;
  },
};

function createBaseObjectHierarchical_IEnterprise(): ObjectHierarchical_IEnterprise {
  return { id: 0, account: undefined, name: "", grade: 0, createdAt: undefined };
}

export const ObjectHierarchical_IEnterprise = {
  encode(message: ObjectHierarchical_IEnterprise, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(9).double(message.id);
    }
    if (message.account !== undefined) {
      ObjectHierarchical_IAccount.encode(message.account, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.grade !== 0) {
      writer.uint32(33).double(message.grade);
    }
    if (message.createdAt !== undefined) {
      ObjectHierarchical_ITimestamp.encode(message.createdAt, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectHierarchical_IEnterprise {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectHierarchical_IEnterprise();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.double();
          break;
        case 2:
          message.account = ObjectHierarchical_IAccount.decode(reader, reader.uint32());
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.grade = reader.double();
          break;
        case 5:
          message.createdAt = ObjectHierarchical_ITimestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectHierarchical_IEnterprise {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      account: isSet(object.account) ? ObjectHierarchical_IAccount.fromJSON(object.account) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      grade: isSet(object.grade) ? Number(object.grade) : 0,
      createdAt: isSet(object.createdAt) ? ObjectHierarchical_ITimestamp.fromJSON(object.createdAt) : undefined,
    };
  },

  toJSON(message: ObjectHierarchical_IEnterprise): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.account !== undefined &&
      (obj.account = message.account ? ObjectHierarchical_IAccount.toJSON(message.account) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.grade !== undefined && (obj.grade = message.grade);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt ? ObjectHierarchical_ITimestamp.toJSON(message.createdAt) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectHierarchical_IEnterprise>, I>>(base?: I): ObjectHierarchical_IEnterprise {
    return ObjectHierarchical_IEnterprise.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectHierarchical_IEnterprise>, I>>(
    object: I,
  ): ObjectHierarchical_IEnterprise {
    const message = createBaseObjectHierarchical_IEnterprise();
    message.id = object.id ?? 0;
    message.account = (object.account !== undefined && object.account !== null)
      ? ObjectHierarchical_IAccount.fromPartial(object.account)
      : undefined;
    message.name = object.name ?? "";
    message.grade = object.grade ?? 0;
    message.createdAt = (object.createdAt !== undefined && object.createdAt !== null)
      ? ObjectHierarchical_ITimestamp.fromPartial(object.createdAt)
      : undefined;
    return message;
  },
};

function createBaseAltNumberCommaSpaceNumberCommaSpaceNumberCommaSpaceNumberAgt(): AltNumberCommaSpaceNumberCommaSpaceNumberCommaSpaceNumberAgt {
  return { v0: 0, v1: 0, v2: 0, v3: 0 };
}

export const AltNumberCommaSpaceNumberCommaSpaceNumberCommaSpaceNumberAgt = {
  encode(
    message: AltNumberCommaSpaceNumberCommaSpaceNumberCommaSpaceNumberAgt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.v0 !== 0) {
      writer.uint32(9).double(message.v0);
    }
    if (message.v1 !== 0) {
      writer.uint32(17).double(message.v1);
    }
    if (message.v2 !== 0) {
      writer.uint32(25).double(message.v2);
    }
    if (message.v3 !== 0) {
      writer.uint32(33).double(message.v3);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AltNumberCommaSpaceNumberCommaSpaceNumberCommaSpaceNumberAgt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAltNumberCommaSpaceNumberCommaSpaceNumberCommaSpaceNumberAgt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.v0 = reader.double();
          break;
        case 2:
          message.v1 = reader.double();
          break;
        case 3:
          message.v2 = reader.double();
          break;
        case 4:
          message.v3 = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AltNumberCommaSpaceNumberCommaSpaceNumberCommaSpaceNumberAgt {
    return {
      v0: isSet(object.v0) ? Number(object.v0) : 0,
      v1: isSet(object.v1) ? Number(object.v1) : 0,
      v2: isSet(object.v2) ? Number(object.v2) : 0,
      v3: isSet(object.v3) ? Number(object.v3) : 0,
    };
  },

  toJSON(message: AltNumberCommaSpaceNumberCommaSpaceNumberCommaSpaceNumberAgt): unknown {
    const obj: any = {};
    message.v0 !== undefined && (obj.v0 = message.v0);
    message.v1 !== undefined && (obj.v1 = message.v1);
    message.v2 !== undefined && (obj.v2 = message.v2);
    message.v3 !== undefined && (obj.v3 = message.v3);
    return obj;
  },

  create<I extends Exact<DeepPartial<AltNumberCommaSpaceNumberCommaSpaceNumberCommaSpaceNumberAgt>, I>>(
    base?: I,
  ): AltNumberCommaSpaceNumberCommaSpaceNumberCommaSpaceNumberAgt {
    return AltNumberCommaSpaceNumberCommaSpaceNumberCommaSpaceNumberAgt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AltNumberCommaSpaceNumberCommaSpaceNumberCommaSpaceNumberAgt>, I>>(
    object: I,
  ): AltNumberCommaSpaceNumberCommaSpaceNumberCommaSpaceNumberAgt {
    const message = createBaseAltNumberCommaSpaceNumberCommaSpaceNumberCommaSpaceNumberAgt();
    message.v0 = object.v0 ?? 0;
    message.v1 = object.v1 ?? 0;
    message.v2 = object.v2 ?? 0;
    message.v3 = object.v3 ?? 0;
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
