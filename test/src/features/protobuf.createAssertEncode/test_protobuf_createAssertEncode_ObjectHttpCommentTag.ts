import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_protobuf_createAssertEncode_ObjectHttpCommentTag = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)({
    encode: typia.protobuf.createAssertEncode<ObjectHttpCommentTag>(),
    decode: typia.protobuf.createDecode<ObjectHttpCommentTag>(),
    message: typia.protobuf.message<ObjectHttpCommentTag>(),
  });
