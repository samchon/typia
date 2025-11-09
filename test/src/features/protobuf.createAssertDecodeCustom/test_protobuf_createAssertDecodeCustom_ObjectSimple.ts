import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimple } from "../../structures/ObjectSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_ObjectSimple = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)({
  decode: typia.protobuf.createAssertDecode<ObjectSimple>((p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<ObjectSimple>(),
});
