import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_protobuf_createValidateEncode_ArraySimpleProtobuf =
  (): void =>
    _test_protobuf_validateEncode("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
      ArraySimpleProtobuf,
    )({
      encode: typia.protobuf.createValidateEncode<ArraySimpleProtobuf>(),
      decode: typia.protobuf.createDecode<ArraySimpleProtobuf>(),
      message: typia.protobuf.message<ArraySimpleProtobuf>(),
    });
