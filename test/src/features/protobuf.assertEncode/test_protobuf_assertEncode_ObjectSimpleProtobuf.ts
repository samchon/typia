import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_protobuf_assertEncode_ObjectSimpleProtobuf =
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectSimpleProtobuf",
  )<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)({
    encode: (input) => typia.protobuf.assertEncode<ObjectSimpleProtobuf>(input),
    decode: typia.protobuf.createDecode<ObjectSimpleProtobuf>(),
    message: typia.protobuf.message<ObjectSimpleProtobuf>(),
  });
