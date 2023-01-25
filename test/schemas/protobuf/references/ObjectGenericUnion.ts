/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ObjectGenericUnion {
}

export interface ObjectGenericUnion_ISaleQuestion {
  writer: string;
  answer?: ObjectGenericUnion_ISaleAnswer | undefined;
  id: string;
  hit: number;
  contents: ObjectGenericUnion_ISaleArticle_IContent[];
  createdAt: string;
}

export interface ObjectGenericUnion_ISaleAnswer {
  id: string;
  hit: number;
  contents: ObjectGenericUnion_ISaleArticle_IContent[];
  createdAt: string;
}

export interface ObjectGenericUnion_ISaleArticle {
}

export interface ObjectGenericUnion_ISaleArticle_IContent {
  id: string;
  createdAt: string;
  title: string;
  body: string;
  files: OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt[];
}

export interface ObjectGenericUnion_ISaleReview {
  writer: string;
  answer?: ObjectGenericUnion_ISaleAnswer | undefined;
  id: string;
  hit: number;
  contents: ObjectGenericUnion_ISaleReview_IContent[];
  createdAt: string;
}

export interface ObjectGenericUnion_ISaleReview_IContent {
  score: number;
  id: string;
  createdAt: string;
  title: string;
  body: string;
  files: OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt[];
}

export interface OmitLtObjectGenericUnion {
}

export interface OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt {
  url: string;
  name: string;
  extension?: string | undefined;
}

export interface Main {
  valueO0?: ObjectGenericUnion_ISaleQuestion | undefined;
  valueO1?: ObjectGenericUnion_ISaleReview | undefined;
}

function createBaseObjectGenericUnion(): ObjectGenericUnion {
  return {};
}

export const ObjectGenericUnion = {
  encode(_: ObjectGenericUnion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectGenericUnion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectGenericUnion();
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

  fromJSON(_: any): ObjectGenericUnion {
    return {};
  },

  toJSON(_: ObjectGenericUnion): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectGenericUnion>, I>>(base?: I): ObjectGenericUnion {
    return ObjectGenericUnion.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectGenericUnion>, I>>(_: I): ObjectGenericUnion {
    const message = createBaseObjectGenericUnion();
    return message;
  },
};

function createBaseObjectGenericUnion_ISaleQuestion(): ObjectGenericUnion_ISaleQuestion {
  return { writer: "", answer: undefined, id: "", hit: 0, contents: [], createdAt: "" };
}

export const ObjectGenericUnion_ISaleQuestion = {
  encode(message: ObjectGenericUnion_ISaleQuestion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.writer !== "") {
      writer.uint32(10).string(message.writer);
    }
    if (message.answer !== undefined) {
      ObjectGenericUnion_ISaleAnswer.encode(message.answer, writer.uint32(18).fork()).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.hit !== 0) {
      writer.uint32(33).double(message.hit);
    }
    for (const v of message.contents) {
      ObjectGenericUnion_ISaleArticle_IContent.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.createdAt !== "") {
      writer.uint32(50).string(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectGenericUnion_ISaleQuestion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectGenericUnion_ISaleQuestion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.writer = reader.string();
          break;
        case 2:
          message.answer = ObjectGenericUnion_ISaleAnswer.decode(reader, reader.uint32());
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.hit = reader.double();
          break;
        case 5:
          message.contents.push(ObjectGenericUnion_ISaleArticle_IContent.decode(reader, reader.uint32()));
          break;
        case 6:
          message.createdAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectGenericUnion_ISaleQuestion {
    return {
      writer: isSet(object.writer) ? String(object.writer) : "",
      answer: isSet(object.answer) ? ObjectGenericUnion_ISaleAnswer.fromJSON(object.answer) : undefined,
      id: isSet(object.id) ? String(object.id) : "",
      hit: isSet(object.hit) ? Number(object.hit) : 0,
      contents: Array.isArray(object?.contents)
        ? object.contents.map((e: any) => ObjectGenericUnion_ISaleArticle_IContent.fromJSON(e))
        : [],
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : "",
    };
  },

  toJSON(message: ObjectGenericUnion_ISaleQuestion): unknown {
    const obj: any = {};
    message.writer !== undefined && (obj.writer = message.writer);
    message.answer !== undefined &&
      (obj.answer = message.answer ? ObjectGenericUnion_ISaleAnswer.toJSON(message.answer) : undefined);
    message.id !== undefined && (obj.id = message.id);
    message.hit !== undefined && (obj.hit = message.hit);
    if (message.contents) {
      obj.contents = message.contents.map((e) => e ? ObjectGenericUnion_ISaleArticle_IContent.toJSON(e) : undefined);
    } else {
      obj.contents = [];
    }
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectGenericUnion_ISaleQuestion>, I>>(
    base?: I,
  ): ObjectGenericUnion_ISaleQuestion {
    return ObjectGenericUnion_ISaleQuestion.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectGenericUnion_ISaleQuestion>, I>>(
    object: I,
  ): ObjectGenericUnion_ISaleQuestion {
    const message = createBaseObjectGenericUnion_ISaleQuestion();
    message.writer = object.writer ?? "";
    message.answer = (object.answer !== undefined && object.answer !== null)
      ? ObjectGenericUnion_ISaleAnswer.fromPartial(object.answer)
      : undefined;
    message.id = object.id ?? "";
    message.hit = object.hit ?? 0;
    message.contents = object.contents?.map((e) => ObjectGenericUnion_ISaleArticle_IContent.fromPartial(e)) || [];
    message.createdAt = object.createdAt ?? "";
    return message;
  },
};

function createBaseObjectGenericUnion_ISaleAnswer(): ObjectGenericUnion_ISaleAnswer {
  return { id: "", hit: 0, contents: [], createdAt: "" };
}

export const ObjectGenericUnion_ISaleAnswer = {
  encode(message: ObjectGenericUnion_ISaleAnswer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.hit !== 0) {
      writer.uint32(17).double(message.hit);
    }
    for (const v of message.contents) {
      ObjectGenericUnion_ISaleArticle_IContent.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.createdAt !== "") {
      writer.uint32(34).string(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectGenericUnion_ISaleAnswer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectGenericUnion_ISaleAnswer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.hit = reader.double();
          break;
        case 3:
          message.contents.push(ObjectGenericUnion_ISaleArticle_IContent.decode(reader, reader.uint32()));
          break;
        case 4:
          message.createdAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectGenericUnion_ISaleAnswer {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      hit: isSet(object.hit) ? Number(object.hit) : 0,
      contents: Array.isArray(object?.contents)
        ? object.contents.map((e: any) => ObjectGenericUnion_ISaleArticle_IContent.fromJSON(e))
        : [],
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : "",
    };
  },

  toJSON(message: ObjectGenericUnion_ISaleAnswer): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.hit !== undefined && (obj.hit = message.hit);
    if (message.contents) {
      obj.contents = message.contents.map((e) => e ? ObjectGenericUnion_ISaleArticle_IContent.toJSON(e) : undefined);
    } else {
      obj.contents = [];
    }
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectGenericUnion_ISaleAnswer>, I>>(base?: I): ObjectGenericUnion_ISaleAnswer {
    return ObjectGenericUnion_ISaleAnswer.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectGenericUnion_ISaleAnswer>, I>>(
    object: I,
  ): ObjectGenericUnion_ISaleAnswer {
    const message = createBaseObjectGenericUnion_ISaleAnswer();
    message.id = object.id ?? "";
    message.hit = object.hit ?? 0;
    message.contents = object.contents?.map((e) => ObjectGenericUnion_ISaleArticle_IContent.fromPartial(e)) || [];
    message.createdAt = object.createdAt ?? "";
    return message;
  },
};

function createBaseObjectGenericUnion_ISaleArticle(): ObjectGenericUnion_ISaleArticle {
  return {};
}

export const ObjectGenericUnion_ISaleArticle = {
  encode(_: ObjectGenericUnion_ISaleArticle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectGenericUnion_ISaleArticle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectGenericUnion_ISaleArticle();
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

  fromJSON(_: any): ObjectGenericUnion_ISaleArticle {
    return {};
  },

  toJSON(_: ObjectGenericUnion_ISaleArticle): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectGenericUnion_ISaleArticle>, I>>(base?: I): ObjectGenericUnion_ISaleArticle {
    return ObjectGenericUnion_ISaleArticle.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectGenericUnion_ISaleArticle>, I>>(_: I): ObjectGenericUnion_ISaleArticle {
    const message = createBaseObjectGenericUnion_ISaleArticle();
    return message;
  },
};

function createBaseObjectGenericUnion_ISaleArticle_IContent(): ObjectGenericUnion_ISaleArticle_IContent {
  return { id: "", createdAt: "", title: "", body: "", files: [] };
}

export const ObjectGenericUnion_ISaleArticle_IContent = {
  encode(message: ObjectGenericUnion_ISaleArticle_IContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== "") {
      writer.uint32(18).string(message.createdAt);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(34).string(message.body);
    }
    for (const v of message.files) {
      OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt.encode(v!, writer.uint32(42).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectGenericUnion_ISaleArticle_IContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectGenericUnion_ISaleArticle_IContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.createdAt = reader.string();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.body = reader.string();
          break;
        case 5:
          message.files.push(
            OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt.decode(
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

  fromJSON(object: any): ObjectGenericUnion_ISaleArticle_IContent {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : "",
      title: isSet(object.title) ? String(object.title) : "",
      body: isSet(object.body) ? String(object.body) : "",
      files: Array.isArray(object?.files)
        ? object.files.map((e: any) =>
          OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: ObjectGenericUnion_ISaleArticle_IContent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.title !== undefined && (obj.title = message.title);
    message.body !== undefined && (obj.body = message.body);
    if (message.files) {
      obj.files = message.files.map((e) =>
        e ? OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt.toJSON(e) : undefined
      );
    } else {
      obj.files = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectGenericUnion_ISaleArticle_IContent>, I>>(
    base?: I,
  ): ObjectGenericUnion_ISaleArticle_IContent {
    return ObjectGenericUnion_ISaleArticle_IContent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectGenericUnion_ISaleArticle_IContent>, I>>(
    object: I,
  ): ObjectGenericUnion_ISaleArticle_IContent {
    const message = createBaseObjectGenericUnion_ISaleArticle_IContent();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? "";
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.files =
      object.files?.map((e) =>
        OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseObjectGenericUnion_ISaleReview(): ObjectGenericUnion_ISaleReview {
  return { writer: "", answer: undefined, id: "", hit: 0, contents: [], createdAt: "" };
}

export const ObjectGenericUnion_ISaleReview = {
  encode(message: ObjectGenericUnion_ISaleReview, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.writer !== "") {
      writer.uint32(10).string(message.writer);
    }
    if (message.answer !== undefined) {
      ObjectGenericUnion_ISaleAnswer.encode(message.answer, writer.uint32(18).fork()).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.hit !== 0) {
      writer.uint32(33).double(message.hit);
    }
    for (const v of message.contents) {
      ObjectGenericUnion_ISaleReview_IContent.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.createdAt !== "") {
      writer.uint32(50).string(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectGenericUnion_ISaleReview {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectGenericUnion_ISaleReview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.writer = reader.string();
          break;
        case 2:
          message.answer = ObjectGenericUnion_ISaleAnswer.decode(reader, reader.uint32());
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.hit = reader.double();
          break;
        case 5:
          message.contents.push(ObjectGenericUnion_ISaleReview_IContent.decode(reader, reader.uint32()));
          break;
        case 6:
          message.createdAt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectGenericUnion_ISaleReview {
    return {
      writer: isSet(object.writer) ? String(object.writer) : "",
      answer: isSet(object.answer) ? ObjectGenericUnion_ISaleAnswer.fromJSON(object.answer) : undefined,
      id: isSet(object.id) ? String(object.id) : "",
      hit: isSet(object.hit) ? Number(object.hit) : 0,
      contents: Array.isArray(object?.contents)
        ? object.contents.map((e: any) => ObjectGenericUnion_ISaleReview_IContent.fromJSON(e))
        : [],
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : "",
    };
  },

  toJSON(message: ObjectGenericUnion_ISaleReview): unknown {
    const obj: any = {};
    message.writer !== undefined && (obj.writer = message.writer);
    message.answer !== undefined &&
      (obj.answer = message.answer ? ObjectGenericUnion_ISaleAnswer.toJSON(message.answer) : undefined);
    message.id !== undefined && (obj.id = message.id);
    message.hit !== undefined && (obj.hit = message.hit);
    if (message.contents) {
      obj.contents = message.contents.map((e) => e ? ObjectGenericUnion_ISaleReview_IContent.toJSON(e) : undefined);
    } else {
      obj.contents = [];
    }
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectGenericUnion_ISaleReview>, I>>(base?: I): ObjectGenericUnion_ISaleReview {
    return ObjectGenericUnion_ISaleReview.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectGenericUnion_ISaleReview>, I>>(
    object: I,
  ): ObjectGenericUnion_ISaleReview {
    const message = createBaseObjectGenericUnion_ISaleReview();
    message.writer = object.writer ?? "";
    message.answer = (object.answer !== undefined && object.answer !== null)
      ? ObjectGenericUnion_ISaleAnswer.fromPartial(object.answer)
      : undefined;
    message.id = object.id ?? "";
    message.hit = object.hit ?? 0;
    message.contents = object.contents?.map((e) => ObjectGenericUnion_ISaleReview_IContent.fromPartial(e)) || [];
    message.createdAt = object.createdAt ?? "";
    return message;
  },
};

function createBaseObjectGenericUnion_ISaleReview_IContent(): ObjectGenericUnion_ISaleReview_IContent {
  return { score: 0, id: "", createdAt: "", title: "", body: "", files: [] };
}

export const ObjectGenericUnion_ISaleReview_IContent = {
  encode(message: ObjectGenericUnion_ISaleReview_IContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.score !== 0) {
      writer.uint32(9).double(message.score);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.createdAt !== "") {
      writer.uint32(26).string(message.createdAt);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(42).string(message.body);
    }
    for (const v of message.files) {
      OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt.encode(v!, writer.uint32(50).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObjectGenericUnion_ISaleReview_IContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObjectGenericUnion_ISaleReview_IContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.score = reader.double();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.createdAt = reader.string();
          break;
        case 4:
          message.title = reader.string();
          break;
        case 5:
          message.body = reader.string();
          break;
        case 6:
          message.files.push(
            OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt.decode(
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

  fromJSON(object: any): ObjectGenericUnion_ISaleReview_IContent {
    return {
      score: isSet(object.score) ? Number(object.score) : 0,
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : "",
      title: isSet(object.title) ? String(object.title) : "",
      body: isSet(object.body) ? String(object.body) : "",
      files: Array.isArray(object?.files)
        ? object.files.map((e: any) =>
          OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt.fromJSON(e)
        )
        : [],
    };
  },

  toJSON(message: ObjectGenericUnion_ISaleReview_IContent): unknown {
    const obj: any = {};
    message.score !== undefined && (obj.score = message.score);
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.title !== undefined && (obj.title = message.title);
    message.body !== undefined && (obj.body = message.body);
    if (message.files) {
      obj.files = message.files.map((e) =>
        e ? OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt.toJSON(e) : undefined
      );
    } else {
      obj.files = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ObjectGenericUnion_ISaleReview_IContent>, I>>(
    base?: I,
  ): ObjectGenericUnion_ISaleReview_IContent {
    return ObjectGenericUnion_ISaleReview_IContent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ObjectGenericUnion_ISaleReview_IContent>, I>>(
    object: I,
  ): ObjectGenericUnion_ISaleReview_IContent {
    const message = createBaseObjectGenericUnion_ISaleReview_IContent();
    message.score = object.score ?? 0;
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? "";
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.files =
      object.files?.map((e) =>
        OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseOmitLtObjectGenericUnion(): OmitLtObjectGenericUnion {
  return {};
}

export const OmitLtObjectGenericUnion = {
  encode(_: OmitLtObjectGenericUnion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OmitLtObjectGenericUnion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOmitLtObjectGenericUnion();
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

  fromJSON(_: any): OmitLtObjectGenericUnion {
    return {};
  },

  toJSON(_: OmitLtObjectGenericUnion): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<OmitLtObjectGenericUnion>, I>>(base?: I): OmitLtObjectGenericUnion {
    return OmitLtObjectGenericUnion.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OmitLtObjectGenericUnion>, I>>(_: I): OmitLtObjectGenericUnion {
    const message = createBaseOmitLtObjectGenericUnion();
    return message;
  },
};

function createBaseOmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt(): OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt {
  return { url: "", name: "", extension: undefined };
}

export const OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt = {
  encode(
    message: OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.extension !== undefined) {
      writer.uint32(26).string(message.extension);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.extension = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt {
    return {
      url: isSet(object.url) ? String(object.url) : "",
      name: isSet(object.name) ? String(object.name) : "",
      extension: isSet(object.extension) ? String(object.extension) : undefined,
    };
  },

  toJSON(message: OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.name !== undefined && (obj.name = message.name);
    message.extension !== undefined && (obj.extension = message.extension);
    return obj;
  },

  create<I extends Exact<DeepPartial<OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt>, I>>(
    base?: I,
  ): OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt {
    return OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt>, I>,
  >(object: I): OmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt {
    const message = createBaseOmitLtObjectGenericUnion_IAttachmentFileCommaSpaceDoublequoteIdDoublequoteGt();
    message.url = object.url ?? "";
    message.name = object.name ?? "";
    message.extension = object.extension ?? undefined;
    return message;
  },
};

function createBaseMain(): Main {
  return { valueO0: undefined, valueO1: undefined };
}

export const Main = {
  encode(message: Main, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valueO0 !== undefined) {
      ObjectGenericUnion_ISaleQuestion.encode(message.valueO0, writer.uint32(10).fork()).ldelim();
    }
    if (message.valueO1 !== undefined) {
      ObjectGenericUnion_ISaleReview.encode(message.valueO1, writer.uint32(18).fork()).ldelim();
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
          message.valueO0 = ObjectGenericUnion_ISaleQuestion.decode(reader, reader.uint32());
          break;
        case 2:
          message.valueO1 = ObjectGenericUnion_ISaleReview.decode(reader, reader.uint32());
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
      valueO0: isSet(object.valueO0) ? ObjectGenericUnion_ISaleQuestion.fromJSON(object.valueO0) : undefined,
      valueO1: isSet(object.valueO1) ? ObjectGenericUnion_ISaleReview.fromJSON(object.valueO1) : undefined,
    };
  },

  toJSON(message: Main): unknown {
    const obj: any = {};
    message.valueO0 !== undefined &&
      (obj.valueO0 = message.valueO0 ? ObjectGenericUnion_ISaleQuestion.toJSON(message.valueO0) : undefined);
    message.valueO1 !== undefined &&
      (obj.valueO1 = message.valueO1 ? ObjectGenericUnion_ISaleReview.toJSON(message.valueO1) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Main>, I>>(base?: I): Main {
    return Main.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Main>, I>>(object: I): Main {
    const message = createBaseMain();
    message.valueO0 = (object.valueO0 !== undefined && object.valueO0 !== null)
      ? ObjectGenericUnion_ISaleQuestion.fromPartial(object.valueO0)
      : undefined;
    message.valueO1 = (object.valueO1 !== undefined && object.valueO1 !== null)
      ? ObjectGenericUnion_ISaleReview.fromPartial(object.valueO1)
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
