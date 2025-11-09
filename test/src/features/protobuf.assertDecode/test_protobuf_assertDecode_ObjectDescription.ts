import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectDescription } from "../../structures/ObjectDescription";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_ObjectDescription = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)({
  decode: (input) => typia.protobuf.assertDecode<ObjectDescription>(input),
  encode: typia.protobuf.createEncode<ObjectDescription>(),
});
