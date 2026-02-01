import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_ObjectSimpleProtobuf = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)({
  encode: (input) => typia.protobuf.assertEncode<ObjectSimpleProtobuf>(input),
  decode: typia.protobuf.createDecode<ObjectSimpleProtobuf>(),
  message: typia.protobuf.message<ObjectSimpleProtobuf>(),
});
