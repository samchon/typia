import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_protobuf_createDecode_ArraySimpleProtobufNullable =
  _test_protobuf_decode(
    "ArraySimpleProtobufNullable",
  )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
    decode: (input) =>
      typia.protobuf.decode<ArraySimpleProtobufNullable>(input),
    encode: typia.protobuf.createEncode<ArraySimpleProtobufNullable>(),
  });
