import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_ObjectJsonTag = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)({
  decode: (input) => typia.protobuf.assertDecode<ObjectJsonTag>(input),
  encode: typia.protobuf.createEncode<ObjectJsonTag>(),
});
