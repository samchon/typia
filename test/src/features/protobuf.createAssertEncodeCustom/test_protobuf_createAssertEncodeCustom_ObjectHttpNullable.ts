import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_ObjectHttpNullable = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)({
  encode: typia.protobuf.createAssertEncode<ObjectHttpNullable>((p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ObjectHttpNullable>(),
  message: typia.protobuf.message<ObjectHttpNullable>(),
});
