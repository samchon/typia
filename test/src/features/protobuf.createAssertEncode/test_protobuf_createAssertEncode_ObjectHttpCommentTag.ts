import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_ObjectHttpCommentTag =
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)({
    encode: typia.protobuf.createAssertEncode<ObjectHttpCommentTag>(),
    decode: typia.protobuf.createDecode<ObjectHttpCommentTag>(),
    message: typia.protobuf.message<ObjectHttpCommentTag>(),
  });
