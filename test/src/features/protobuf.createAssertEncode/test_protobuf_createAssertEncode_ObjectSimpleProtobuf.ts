import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_protobuf_createAssertEncode_ObjectSimpleProtobuf = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectSimpleProtobuf",
  )<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)({
    encode: typia.protobuf.createAssertEncode<ObjectSimpleProtobuf>(),
    decode: typia.protobuf.createDecode<ObjectSimpleProtobuf>(),
    message: typia.protobuf.message<ObjectSimpleProtobuf>(),
  });
