import typia from "typia";
import * as __typia_transform__ProtobufReader from "typia/lib/internal/_ProtobufReader.js";
import * as __typia_transform__ProtobufSizer from "typia/lib/internal/_ProtobufSizer.js";
import * as __typia_transform__ProtobufWriter from "typia/lib/internal/_ProtobufWriter.js";

//----
// PROTOBUF MESSAGE SCHEMA
//----
[
  'syntax = "proto3";',
  "",
  "message CommentTagExample {",
  "  required int32 int32 = 1;",
  "  optional uint32 uint32 = 2;",
  "  optional uint64 uint64 = 3;",
  "  required int64 int64 = 4;",
  "  optional float float = 5;",
  "  required double double = 6;",
  "  required string string = 7;",
  "}",
].join("\n");
//----
// DECODE FUNCTION
//----
(() => {
  const _pdo0 = (reader, length = -1) => {
    length = length < 0 ? reader.size() : reader.index() + length;
    const output = {
      int32: undefined,
      uint32: null,
      uint64: undefined,
      int64: undefined,
      float: null,
      double: undefined,
      string: "",
    };
    while (reader.index() < length) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          // int32;
          output.int32 = reader.int32();
          break;
        case 2:
          // uint32;
          output.uint32 = reader.uint32();
          break;
        case 3:
          // uint64;
          output.uint64 = Number(reader.uint64());
          break;
        case 4:
          // int64;
          output.int64 = Number(reader.int64());
          break;
        case 5:
          // float;
          output.float = reader.float();
          break;
        case 6:
          // double;
          output.double = reader.double();
          break;
        case 7:
          // string;
          output.string = reader.string();
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
})();
//----
// ENCODE FUNCTION
//----
(() => {
  const encoder = (writer, input) => {
    const _peo0 = (input) => {
      // property "int32": (number & Type<"int32">);
      writer.uint32(8);
      writer.int32(input.int32);
      // property "uint32": ((number & Type<"uint32">) | null | undefined);
      if (undefined !== input.uint32 && null !== input.uint32) {
        writer.uint32(16);
        writer.uint32(input.uint32);
      }
      // property "uint64": ((number & Type<"uint64">) | undefined);
      if (undefined !== input.uint64) {
        writer.uint32(24);
        writer.uint64(input.uint64);
      }
      // property "int64": (number & Type<"int64">);
      writer.uint32(32);
      writer.int64(input.int64);
      // property "float": ((number & Type<"float">) | null);
      if (null !== input.float) {
        writer.uint32(45);
        writer.float(input.float);
      }
      // property "double": number;
      writer.uint32(49);
      writer.double(input.double);
      // property "string": string;
      writer.uint32(58);
      writer.string(input.string);
    };
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
