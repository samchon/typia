import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_protobuf_createAssertDecode_ObjectSimpleProtobuf = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectSimpleProtobuf",
  )<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)({
    decode: typia.protobuf.createAssertDecode<ObjectSimpleProtobuf>(),
    encode: typia.protobuf.createEncode<ObjectSimpleProtobuf>(),
  });
