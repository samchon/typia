import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectDescription } from "../../structures/ObjectDescription";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_ObjectDescription = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)({
  encode: (input) => typia.protobuf.assertEncode<ObjectDescription>(input),
  decode: typia.protobuf.createDecode<ObjectDescription>(),
  message: typia.protobuf.message<ObjectDescription>(),
});
