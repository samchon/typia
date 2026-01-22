import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_protobuf_createValidateDecode_ArraySimpleProtobufNullable =
  (): void =>
    _test_protobuf_validateDecode(
      "ArraySimpleProtobufNullable",
    )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
      decode:
        typia.protobuf.createValidateDecode<ArraySimpleProtobufNullable>(),
      encode: typia.protobuf.createEncode<ArraySimpleProtobufNullable>(),
    });
