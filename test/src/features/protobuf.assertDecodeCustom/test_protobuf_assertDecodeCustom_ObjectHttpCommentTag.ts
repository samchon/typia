import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_ObjectHttpCommentTag =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)({
    decode: (input) =>
      typia.protobuf.assertDecode<ObjectHttpCommentTag>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<ObjectHttpCommentTag>(),
  });
