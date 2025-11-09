import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_ObjectHttpUndefindable = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)({
  decode: (input) => typia.protobuf.assertDecode<ObjectHttpUndefindable>(input),
  encode: typia.protobuf.createEncode<ObjectHttpUndefindable>(),
});
