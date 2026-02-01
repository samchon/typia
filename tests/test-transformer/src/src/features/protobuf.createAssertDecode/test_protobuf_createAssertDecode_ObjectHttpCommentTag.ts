import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_ObjectHttpCommentTag = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)({
  decode: typia.protobuf.createAssertDecode<ObjectHttpCommentTag>(),
  encode: typia.protobuf.createEncode<ObjectHttpCommentTag>(),
});
