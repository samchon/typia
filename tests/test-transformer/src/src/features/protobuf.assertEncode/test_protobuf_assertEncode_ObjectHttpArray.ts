import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_ObjectHttpArray = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)({
  encode: (input) => typia.protobuf.assertEncode<ObjectHttpArray>(input),
  decode: typia.protobuf.createDecode<ObjectHttpArray>(),
  message: typia.protobuf.message<ObjectHttpArray>(),
});
