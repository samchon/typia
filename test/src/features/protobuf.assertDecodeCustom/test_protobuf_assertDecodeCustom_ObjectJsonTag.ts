import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_ObjectJsonTag = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)({
  decode: (input) => typia.protobuf.assertDecode<ObjectJsonTag>(input, (p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<ObjectJsonTag>(),
});
