import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_ObjectHttpCommentTag = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)({
  encode: typia.protobuf.createAssertEncode<ObjectHttpCommentTag>((p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ObjectHttpCommentTag>(),
  message: typia.protobuf.message<ObjectHttpCommentTag>(),
});
