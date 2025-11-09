import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_ObjectJsonTag = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)({
  encode: typia.protobuf.createAssertEncode<ObjectJsonTag>((p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ObjectJsonTag>(),
  message: typia.protobuf.message<ObjectJsonTag>(),
});
