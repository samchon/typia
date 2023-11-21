import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_protobuf_createDecode_ArraySimpleProtobuf =
  _test_protobuf_decode("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
    ArraySimpleProtobuf,
  )({
    decode: typia.protobuf.createDecode<ArraySimpleProtobuf>(),
    encode: typia.protobuf.createEncode<ArraySimpleProtobuf>(),
  });
