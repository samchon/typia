import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_ObjectHttpCommentTag = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)({
  decode: typia.protobuf.createAssertDecode<ObjectHttpCommentTag>((p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<ObjectHttpCommentTag>(),
});
