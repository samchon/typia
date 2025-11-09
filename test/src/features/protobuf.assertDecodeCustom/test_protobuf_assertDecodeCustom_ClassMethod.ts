import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ClassMethod } from "../../structures/ClassMethod";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_ClassMethod = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "ClassMethod",
)<ClassMethod>(ClassMethod)({
  decode: (input) => typia.protobuf.assertDecode<ClassMethod>(input, (p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<ClassMethod>(),
});
