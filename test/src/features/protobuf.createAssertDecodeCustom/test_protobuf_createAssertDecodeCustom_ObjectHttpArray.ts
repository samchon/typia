import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_ObjectHttpArray = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)({
  decode: typia.protobuf.createAssertDecode<ObjectHttpArray>((p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<ObjectHttpArray>(),
});
