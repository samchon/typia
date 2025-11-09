import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_ObjectSequenceProtobuf = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ObjectSequenceProtobuf",
)<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)({
  encode: typia.protobuf.createAssertEncode<ObjectSequenceProtobuf>((p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ObjectSequenceProtobuf>(),
  message: typia.protobuf.message<ObjectSequenceProtobuf>(),
});
