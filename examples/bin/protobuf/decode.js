import typia from "typia";
import * as __typia_transform__ProtobufReader from "typia/lib/internal/_ProtobufReader.js";
import * as __typia_transform__ProtobufSizer from "typia/lib/internal/_ProtobufSizer.js";
import * as __typia_transform__ProtobufWriter from "typia/lib/internal/_ProtobufWriter.js";
import * as __typia_transform__isFormatEmail from "typia/lib/internal/_isFormatEmail.js";
import * as __typia_transform__isFormatUri from "typia/lib/internal/_isFormatUri.js";
import * as __typia_transform__isFormatUuid from "typia/lib/internal/_isFormatUuid.js";
import * as __typia_transform__isTypeUint64 from "typia/lib/internal/_isTypeUint64.js";
import * as __typia_transform__randomArray from "typia/lib/internal/_randomArray.js";
import * as __typia_transform__randomBoolean from "typia/lib/internal/_randomBoolean.js";
import * as __typia_transform__randomFormatEmail from "typia/lib/internal/_randomFormatEmail.js";
import * as __typia_transform__randomFormatUri from "typia/lib/internal/_randomFormatUri.js";
import * as __typia_transform__randomFormatUuid from "typia/lib/internal/_randomFormatUuid.js";
import * as __typia_transform__randomInteger from "typia/lib/internal/_randomInteger.js";
import * as __typia_transform__randomPick from "typia/lib/internal/_randomPick.js";
import * as __typia_transform__randomString from "typia/lib/internal/_randomString.js";
import * as __typia_transform__throwTypeGuardError from "typia/lib/internal/_throwTypeGuardError.js";

const member = (() => {
  const _ro0 = (_recursive = true, _depth = 0) => ({
    id: __typia_transform__randomPick._randomPick([
      () =>
        (_generator?.string ?? __typia_transform__randomString._randomString)({
          type: "string",
          "x-protobuf-sequence": 11,
        }),
      () =>
        (
          _generator?.integer ?? __typia_transform__randomInteger._randomInteger
        )({
          type: "integer",
          minimum: 0,
          "x-protobuf-sequence": 12,
        }),
      () =>
        new Uint8Array(
          5 >= _depth
            ? (
                _generator?.array ?? __typia_transform__randomArray._randomArray
              )({
                type: "array",
                element: () =>
                  (
                    _generator?.integer ??
                    __typia_transform__randomInteger._randomInteger
                  )({
                    type: "integer",
                    minimum: 0,
                    maximum: 255,
                  }),
              })
            : [],
        ),
    ])(),
    name: __typia_transform__randomPick._randomPick([
      () => null,
      () =>
        (_generator?.string ?? __typia_transform__randomString._randomString)({
          type: "string",
          "x-protobuf-sequence": 20,
        }),
    ])(),
    children:
      5 >= _depth
        ? (_generator?.array ?? __typia_transform__randomArray._randomArray)({
            type: "array",
            "x-protobuf-sequence": 30,
            element: () => _ro0(true, _recursive ? 1 + _depth : _depth),
          })
        : [],
    keywords: new Map(
      5 >= _depth
        ? (_generator?.array ?? __typia_transform__randomArray._randomArray)({
            type: "array",
            element: () => [
              (
                _generator?.string ??
                __typia_transform__randomString._randomString
              )({
                type: "string",
              }),
              (
                _generator?.string ??
                __typia_transform__randomString._randomString
              )({
                type: "string",
              }),
            ],
          })
        : [],
    ),
    thumbnail: __typia_transform__randomPick._randomPick([
      () =>
        (
          _generator?.uri ?? __typia_transform__randomFormatUri._randomFormatUri
        )(),
      () =>
        new Uint8Array(
          5 >= _depth
            ? (
                _generator?.array ?? __typia_transform__randomArray._randomArray
              )({
                type: "array",
                element: () =>
                  (
                    _generator?.integer ??
                    __typia_transform__randomInteger._randomInteger
                  )({
                    type: "integer",
                    minimum: 0,
                    maximum: 255,
                  }),
              })
            : [],
        ),
    ])(),
    email: (
      _generator?.email ??
      __typia_transform__randomFormatEmail._randomFormatEmail
    )(),
    hobbies:
      5 >= _depth
        ? (_generator?.array ?? __typia_transform__randomArray._randomArray)({
            type: "array",
            element: () => _ro1(true, _recursive ? 1 + _depth : _depth),
          })
        : [],
  });
  const _ro1 = (_recursive = false, _depth = 0) => ({
    id: (
      _generator?.uuid ?? __typia_transform__randomFormatUuid._randomFormatUuid
    )(),
    name: (_generator?.string ?? __typia_transform__randomString._randomString)(
      {
        type: "string",
      },
    ),
    valid: (
      _generator?.boolean ?? __typia_transform__randomBoolean._randomBoolean
    )({
      type: "boolean",
    }),
  });
  let _generator;
  return (generator) => {
    _generator = generator;
    return _ro0();
  };
})()();
const encoded = (() => {
  const encoder = (writer, input) => {
    const _peo0 = (input) => {
      // property "id": ((Uint8Array & Sequence<13>) | (number & Type<"uint64"> & Sequence<12>) | (string & Sequence<11>));
      if (input.id instanceof Uint8Array) {
        writer.uint32(106);
        writer.bytes(input.id);
      } else if ("number" === typeof input.id) {
        writer.uint32(96);
        writer.uint64(input.id);
      } else if ("string" === typeof input.id) {
        writer.uint32(90);
        writer.string(input.id);
      } else
        __typia_transform__throwTypeGuardError._throwTypeGuardError({
          method: "typia.protobuf.encode",
          expected:
            '((Uint8Array & Sequence<13>) | (number & Type<"uint64"> & Sequence<12>) | (string & Sequence<11>))',
          value: input.id,
        });
      // property "name": ((string & Sequence<20>) | null);
      if (null !== input.name) {
        writer.uint32(162);
        writer.string(input.name);
      }
      // property "children": (Array<IMember> & Sequence<30>);
      if (0 !== input.children.length) {
        for (const elem of input.children) {
          writer.uint32(242);
          writer.fork();
          _peo0(elem);
          writer.ldelim();
        }
      }
      // property "keywords": (Map<string, string> & Sequence<40>);
      for (const [key, value] of input.keywords) {
        writer.uint32(322);
        writer.fork();
        writer.uint32(10);
        writer.string(key);
        writer.uint32(18);
        writer.string(value);
        writer.ldelim();
      }
      // property "thumbnail": ((string & Format<"uri"> & ContentMediaType<"image/*">) | Uint8Array);
      if (input.thumbnail instanceof Uint8Array) {
        writer.uint32(330);
        writer.bytes(input.thumbnail);
      } else if ("string" === typeof input.thumbnail) {
        writer.uint32(338);
        writer.string(input.thumbnail);
      } else
        __typia_transform__throwTypeGuardError._throwTypeGuardError({
          method: "typia.protobuf.encode",
          expected:
            '((string & Format<"uri"> & ContentMediaType<"image/*">) | Uint8Array)',
          value: input.thumbnail,
        });
      // property "email": (string & Format<"email">);
      writer.uint32(346);
      writer.string(input.email);
      // property "hobbies": Array<IHobby>;
      if (0 !== input.hobbies.length) {
        for (const elem of input.hobbies) {
          writer.uint32(354);
          writer.fork();
          _peo1(elem);
          writer.ldelim();
        }
      }
    };
    const _peo1 = (input) => {
      // property "id": (string & Format<"uuid">);
      writer.uint32(10);
      writer.string(input.id);
      // property "name": string;
      writer.uint32(18);
      writer.string(input.name);
      // property "valid": boolean;
      writer.uint32(24);
      writer.bool(input.valid);
    };
    const _io0 = (input) =>
      null !== input.id &&
      undefined !== input.id &&
      ("string" === typeof input.id ||
        ("number" === typeof input.id &&
          __typia_transform__isTypeUint64._isTypeUint64(input.id)) ||
        input.id instanceof Uint8Array) &&
      (null === input.name || "string" === typeof input.name) &&
      Array.isArray(input.children) &&
      input.children.every(
        (elem) => "object" === typeof elem && null !== elem && _io0(elem),
      ) &&
      input.keywords instanceof Map &&
      (() =>
        [...input.keywords].every(
          (elem) =>
            Array.isArray(elem) &&
            elem.length === 2 &&
            "string" === typeof elem[0] &&
            "string" === typeof elem[1],
        ))() &&
      null !== input.thumbnail &&
      undefined !== input.thumbnail &&
      (("string" === typeof input.thumbnail &&
        __typia_transform__isFormatUri._isFormatUri(input.thumbnail)) ||
        input.thumbnail instanceof Uint8Array) &&
      "string" === typeof input.email &&
      __typia_transform__isFormatEmail._isFormatEmail(input.email) &&
      Array.isArray(input.hobbies) &&
      input.hobbies.every(
        (elem) => "object" === typeof elem && null !== elem && _io1(elem),
      );
    const _io1 = (input) =>
      "string" === typeof input.id &&
      __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
      "string" === typeof input.name &&
      "boolean" === typeof input.valid;
    _peo0(input);
    return writer;
  };
  return (input) => {
    const sizer = encoder(
      new __typia_transform__ProtobufSizer._ProtobufSizer(),
      input,
    );
    const writer = encoder(
      new __typia_transform__ProtobufWriter._ProtobufWriter(sizer),
      input,
    );
    return writer.buffer();
  };
})()(member);
const decoded = (() => {
  const _pdo0 = (reader, length = -1) => {
    length = length < 0 ? reader.size() : reader.index() + length;
    const output = {
      id: new Uint8Array([]),
      name: null,
      children: [],
      keywords: new Map(),
      thumbnail: new Uint8Array([]),
      email: "",
      hobbies: [],
    };
    while (reader.index() < length) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 13:
          // bytes;
          output.id = reader.bytes();
          break;
        case 12:
          // uint64;
          output.id = Number(reader.uint64());
          break;
        case 11:
          // string;
          output.id = reader.string();
          break;
        case 20:
          // string;
          output.name = reader.string();
          break;
        case 30:
          // Array<IMember>;
          output.children.push(_pdo0(reader, reader.uint32()));
          break;
        case 40:
          // Map<string, string>;
          (() => {
            output.keywords ??= new Map();
            const piece = reader.uint32() + reader.index();
            const entry = {
              key: "",
              value: "",
            };
            while (reader.index() < piece) {
              const kind = reader.uint32();
              switch (kind >>> 3) {
                case 1:
                  // string;
                  entry.key = reader.string();
                  break;
                case 2:
                  // string;
                  entry.value = reader.string();
                  break;
                default:
                  reader.skipType(kind & 7);
                  break;
              }
            }
            output.keywords.set(entry.key, entry.value);
          })();
          break;
        case 41:
          // bytes;
          output.thumbnail = reader.bytes();
          break;
        case 42:
          // string;
          output.thumbnail = reader.string();
          break;
        case 43:
          // string;
          output.email = reader.string();
          break;
        case 44:
          // Array<IHobby>;
          output.hobbies.push(_pdo1(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return output;
  };
  const _pdo1 = (reader, length = -1) => {
    length = length < 0 ? reader.size() : reader.index() + length;
    const output = {
      id: "",
      name: "",
      valid: undefined,
    };
    while (reader.index() < length) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          // string;
          output.id = reader.string();
          break;
        case 2:
          // string;
          output.name = reader.string();
          break;
        case 3:
          // bool;
          output.valid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return output;
  };
  return (input) => {
    const reader = new __typia_transform__ProtobufReader._ProtobufReader(input);
    return _pdo0(reader);
  };
})()(encoded);
console.log(member, decoded);
