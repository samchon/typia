import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_protobuf_createAssertDecode_ArraySimpleProtobuf = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "ArraySimpleProtobuf",
  )<ArraySimpleProtobuf>(ArraySimpleProtobuf)({
    decode: typia.protobuf.createAssertDecode<ArraySimpleProtobuf>(),
    encode: typia.protobuf.createEncode<ArraySimpleProtobuf>(),
  });
