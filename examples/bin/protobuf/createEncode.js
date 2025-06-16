import typia from "typia";
import * as __typia_transform__ProtobufSizer from "typia/lib/internal/_ProtobufSizer.js";
import * as __typia_transform__ProtobufWriter from "typia/lib/internal/_ProtobufWriter.js";
import * as __typia_transform__isFormatEmail from "typia/lib/internal/_isFormatEmail.js";
import * as __typia_transform__isFormatUri from "typia/lib/internal/_isFormatUri.js";
import * as __typia_transform__isFormatUuid from "typia/lib/internal/_isFormatUuid.js";
import * as __typia_transform__isTypeUint64 from "typia/lib/internal/_isTypeUint64.js";
import * as __typia_transform__throwTypeGuardError from "typia/lib/internal/_throwTypeGuardError.js";

export const encode = (() => {
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
          method: "typia.protobuf.createEncode",
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
          method: "typia.protobuf.createEncode",
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
})();
