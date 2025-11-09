import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_ObjectSequenceProtobuf = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "ObjectSequenceProtobuf",
)<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)({
  encode: typia.protobuf.createAssertEncode<ObjectSequenceProtobuf>(),
  decode: typia.protobuf.createDecode<ObjectSequenceProtobuf>(),
  message: typia.protobuf.message<ObjectSequenceProtobuf>(),
});
