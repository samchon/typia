import typia from "typia";
import * as __typia_transform__ProtobufReader from "typia/lib/internal/_ProtobufReader.js";
import * as __typia_transform__ProtobufSizer from "typia/lib/internal/_ProtobufSizer.js";
import * as __typia_transform__ProtobufWriter from "typia/lib/internal/_ProtobufWriter.js";
import * as __typia_transform__isTypeFloat from "typia/lib/internal/_isTypeFloat.js";
import * as __typia_transform__isTypeInt32 from "typia/lib/internal/_isTypeInt32.js";
import * as __typia_transform__isTypeInt64 from "typia/lib/internal/_isTypeInt64.js";
import * as __typia_transform__isTypeUint32 from "typia/lib/internal/_isTypeUint32.js";
import * as __typia_transform__throwTypeGuardError from "typia/lib/internal/_throwTypeGuardError.js";

//----
// PROTOBUF MESSAGE SCHEMA
//----
[
  'syntax = "proto3";',
  "",
  "message TypeTagExample {",
  "  required int32 int32 = 10;",
  "  required uint32 uint32 = 20;",
  "  required uint64 uint64 = 30;",
  "  required int64 int64 = 40;",
  "  required float float = 50;",
  "  optional double double = 60;",
  "  optional string string = 70;",
  "  oneof uint32_or_double {",
  "    uint32 v61 = 61;",
  "    double v62 = 62;",
  "  }",
  "  oneof int32_or_uint64 {",
  "    int32 v71 = 71;",
  "    uint64 v72 = 72;",
  "  }",
  "  oneof int32_or_float_or_uint64 {",
  "    int32 v81 = 81;",
  "    uint64 v83 = 83;",
  "    float v82 = 82;",
  "  }",
  "  repeated uint64 uint64_array = 90;",
  "  map<int32, string> int32_map = 100;",
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
      uint32: undefined,
      uint64: undefined,
      int64: undefined,
      float: undefined,
      double: undefined,
      string: null,
      uint32_or_double: undefined,
      int32_or_uint64: undefined,
      int32_or_float_or_uint64: undefined,
      uint64_array: [],
      int32_map: null,
    };
    while (reader.index() < length) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 10:
          // int32;
          output.int32 = reader.int32();
          break;
        case 20:
          // uint32;
          output.uint32 = reader.uint32();
          break;
        case 30:
          // uint64;
          output.uint64 = reader.uint64();
          break;
        case 40:
          // int64;
          output.int64 = Number(reader.int64());
          break;
        case 50:
          // float;
          output.float = reader.float();
          break;
        case 60:
          // double;
          output.double = reader.double();
          break;
        case 70:
          // string;
          output.string = reader.string();
          break;
        case 61:
          // uint32;
          output.uint32_or_double = reader.uint32();
          break;
        case 62:
          // double;
          output.uint32_or_double = reader.double();
          break;
        case 71:
          // int32;
          output.int32_or_uint64 = reader.int32();
          break;
        case 72:
          // uint64;
          output.int32_or_uint64 = reader.uint64();
          break;
        case 81:
          // int32;
          output.int32_or_float_or_uint64 = reader.int32();
          break;
        case 83:
          // uint64;
          output.int32_or_float_or_uint64 = reader.uint64();
          break;
        case 82:
          // float;
          output.int32_or_float_or_uint64 = reader.float();
          break;
        case 90:
          // Array<(bigint & Type<"uint64">)>;
          if (2 === (tag & 7)) {
            const piece = reader.uint32() + reader.index();
            while (reader.index() < piece)
              output.uint64_array.push(reader.uint64());
          } else output.uint64_array.push(reader.uint64());
          break;
        case 100:
          // Map<(number & Type<"int32">), string>;
          (() => {
            const piece = reader.uint32() + reader.index();
            const entry = {
              key: undefined,
              value: "",
            };
            while (reader.index() < piece) {
              const kind = reader.uint32();
              switch (kind >>> 3) {
                case 1:
                  // int32;
                  entry.key = reader.int32();
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
            output.int32_map ??= new Map();
            output.int32_map.set(entry.key, entry.value);
          })();
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
      // property "int32": (number & Type<"int32"> & Sequence<10>);
      writer.uint32(80);
      writer.int32(input.int32);
      // property "uint32": (number & Type<"uint32"> & Sequence<20>);
      writer.uint32(160);
      writer.uint32(input.uint32);
      // property "uint64": (bigint & Type<"uint64"> & Sequence<30>);
      writer.uint32(240);
      writer.uint64(input.uint64);
      // property "int64": (number & Type<"int64"> & Sequence<40>);
      writer.uint32(320);
      writer.int64(input.int64);
      // property "float": (number & Type<"float"> & Sequence<50>);
      writer.uint32(405);
      writer.float(input.float);
      // property "double": ((number & Sequence<60>) | undefined);
      if (undefined !== input.double) {
        writer.uint32(481);
        writer.double(input.double);
      }
      // property "string": ((string & Sequence<70>) | null);
      if (null !== input.string) {
        writer.uint32(562);
        writer.string(input.string);
      }
      // property "uint32_or_double": (number & ((Type<"uint32"> & Sequence<61>) | (Type<"double"> & Sequence<62>)));
      if (
        "number" === typeof input.uint32_or_double &&
        Math.floor(input.uint32_or_double) === input.uint32_or_double &&
        0 <= input.uint32_or_double &&
        input.uint32_or_double <= 4294967295
      ) {
        writer.uint32(488);
        writer.uint32(input.uint32_or_double);
      } else if ("number" === typeof input.uint32_or_double && true) {
        writer.uint32(497);
        writer.double(input.uint32_or_double);
      } else
        __typia_transform__throwTypeGuardError._throwTypeGuardError({
          method: "typia.protobuf.createEncode",
          expected:
            '(number & ((Type<"uint32"> & Sequence<61>) | (Type<"double"> & Sequence<62>)))',
          value: input.uint32_or_double,
        });
      // property "int32_or_uint64": ((bigint & Type<"uint64"> & Sequence<72>) | (number & Type<"int32"> & Sequence<71>));
      if ("number" === typeof input.int32_or_uint64) {
        writer.uint32(568);
        writer.int32(input.int32_or_uint64);
      } else if ("bigint" === typeof input.int32_or_uint64) {
        writer.uint32(576);
        writer.uint64(input.int32_or_uint64);
      } else
        __typia_transform__throwTypeGuardError._throwTypeGuardError({
          method: "typia.protobuf.createEncode",
          expected:
            '((bigint & Type<"uint64"> & Sequence<72>) | (number & Type<"int32"> & Sequence<71>))',
          value: input.int32_or_uint64,
        });
      // property "int32_or_float_or_uint64": ((bigint & Type<"uint64"> & Sequence<83>) | (number & ((Type<"int32"> & Sequence<81>) | (Type<"float"> & Sequence<82>))));
      if (
        "number" === typeof input.int32_or_float_or_uint64 &&
        Math.floor(input.int32_or_float_or_uint64) ===
          input.int32_or_float_or_uint64 &&
        -2147483648 <= input.int32_or_float_or_uint64 &&
        input.int32_or_float_or_uint64 <= 2147483647
      ) {
        writer.uint32(648);
        writer.int32(input.int32_or_float_or_uint64);
      } else if ("bigint" === typeof input.int32_or_float_or_uint64) {
        writer.uint32(664);
        writer.uint64(input.int32_or_float_or_uint64);
      } else if (
        "number" === typeof input.int32_or_float_or_uint64 &&
        -1.175494351e38 <= input.int32_or_float_or_uint64 &&
        input.int32_or_float_or_uint64 <= 3.4028235e38
      ) {
        writer.uint32(661);
        writer.float(input.int32_or_float_or_uint64);
      } else
        __typia_transform__throwTypeGuardError._throwTypeGuardError({
          method: "typia.protobuf.createEncode",
          expected:
            '((bigint & Type<"uint64"> & Sequence<83>) | (number & ((Type<"int32"> & Sequence<81>) | (Type<"float"> & Sequence<82>))))',
          value: input.int32_or_float_or_uint64,
        });
      // property "uint64_array": (Array<bigint & Type<"uint64">> & Sequence<90>);
      if (0 !== input.uint64_array.length) {
        writer.uint32(722);
        writer.fork();
        for (const elem of input.uint64_array) {
          writer.uint64(elem);
        }
        writer.ldelim();
      }
      // property "int32_map": ((Map<(number & Type<"int32">), string> & Sequence<100>) | null | undefined);
      if (undefined !== input.int32_map && null !== input.int32_map) {
        for (const [key, value] of input.int32_map) {
          writer.uint32(802);
          writer.fork();
          writer.uint32(8);
          writer.int32(key);
          writer.uint32(18);
          writer.string(value);
          writer.ldelim();
        }
      }
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
