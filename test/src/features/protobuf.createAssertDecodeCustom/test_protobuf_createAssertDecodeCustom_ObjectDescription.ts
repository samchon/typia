import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectDescription } from "../../structures/ObjectDescription";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_ObjectDescription = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)({
  decode: typia.protobuf.createAssertDecode<ObjectDescription>((p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<ObjectDescription>(),
});
