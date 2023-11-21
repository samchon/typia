import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_createDecode_ObjectSimpleProtobufNullable =
  _test_protobuf_decode(
    "ObjectSimpleProtobufNullable",
  )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
    decode: typia.protobuf.createDecode<ObjectSimpleProtobufNullable>(),
    encode: typia.protobuf.createEncode<ObjectSimpleProtobufNullable>(),
  });
