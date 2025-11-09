import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_ObjectHttpUndefindable = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)({
  decode: typia.protobuf.createAssertDecode<ObjectHttpUndefindable>((p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<ObjectHttpUndefindable>(),
});
