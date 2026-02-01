import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_ObjectHttpArray = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)({
  decode: (input) => typia.protobuf.assertDecode<ObjectHttpArray>(input),
  encode: typia.protobuf.createEncode<ObjectHttpArray>(),
});
