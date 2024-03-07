import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_ObjectSimpleProtobuf =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectSimpleProtobuf",
  )<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)({
    decode: (input) => typia.protobuf.assertDecode<ObjectSimpleProtobuf>(input),
    encode: typia.protobuf.createEncode<ObjectSimpleProtobuf>(),
  });
