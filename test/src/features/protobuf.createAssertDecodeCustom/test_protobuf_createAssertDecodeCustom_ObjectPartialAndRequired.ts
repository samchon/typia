import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_ObjectPartialAndRequired = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
  decode: typia.protobuf.createAssertDecode<ObjectPartialAndRequired>((p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<ObjectPartialAndRequired>(),
});
