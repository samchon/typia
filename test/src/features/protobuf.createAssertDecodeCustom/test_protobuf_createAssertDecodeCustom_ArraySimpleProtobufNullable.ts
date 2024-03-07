import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_ArraySimpleProtobufNullable =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ArraySimpleProtobufNullable",
  )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
    decode: typia.protobuf.createAssertDecode<ArraySimpleProtobufNullable>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<ArraySimpleProtobufNullable>(),
  });
