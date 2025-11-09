import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_ObjectHttpNullable = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)({
  encode: (input) => typia.protobuf.assertEncode<ObjectHttpNullable>(input, (p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ObjectHttpNullable>(),
  message: typia.protobuf.message<ObjectHttpNullable>(),
});
