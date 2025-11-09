import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_ObjectRequired = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)({
  decode: (input) => typia.protobuf.assertDecode<ObjectRequired>(input),
  encode: typia.protobuf.createEncode<ObjectRequired>(),
});
