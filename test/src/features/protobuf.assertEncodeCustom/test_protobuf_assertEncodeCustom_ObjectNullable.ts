import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_ObjectNullable = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ObjectNullable",
)<ObjectNullable>(ObjectNullable)({
  encode: (input) => typia.protobuf.assertEncode<ObjectNullable>(input, (p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ObjectNullable>(),
  message: typia.protobuf.message<ObjectNullable>(),
});
