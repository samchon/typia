import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_ArraySimpleProtobuf =
  _test_protobuf_assertEncode(TypeGuardError)(
    "ArraySimpleProtobuf",
  )<ArraySimpleProtobuf>(ArraySimpleProtobuf)({
    encode: (input) => typia.protobuf.assertEncode<ArraySimpleProtobuf>(input),
    decode: typia.protobuf.createDecode<ArraySimpleProtobuf>(),
    message: typia.protobuf.message<ArraySimpleProtobuf>(),
  });
