import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_ObjectHttpUndefindable = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)({
  decode: typia.protobuf.createAssertDecode<ObjectHttpUndefindable>(),
  encode: typia.protobuf.createEncode<ObjectHttpUndefindable>(),
});
