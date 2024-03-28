import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_protobuf_assertEncode_ObjectHttpCommentTag =
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)({
    encode: (input) => typia.protobuf.assertEncode<ObjectHttpCommentTag>(input),
    decode: typia.protobuf.createDecode<ObjectHttpCommentTag>(),
    message: typia.protobuf.message<ObjectHttpCommentTag>(),
  });
