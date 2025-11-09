import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_ObjectHttpCommentTag = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)({
  encode: (input) => typia.protobuf.assertEncode<ObjectHttpCommentTag>(input, (p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ObjectHttpCommentTag>(),
  message: typia.protobuf.message<ObjectHttpCommentTag>(),
});
