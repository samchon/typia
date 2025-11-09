import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_ObjectHttpConstant = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)({
  decode: typia.protobuf.createAssertDecode<ObjectHttpConstant>(),
  encode: typia.protobuf.createEncode<ObjectHttpConstant>(),
});
