import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_protobuf_createIsDecode_ObjectHttpCommentTag =
  _test_protobuf_isDecode("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )({
    decode: typia.protobuf.createIsDecode<ObjectHttpCommentTag>(),
    encode: typia.protobuf.createEncode<ObjectHttpCommentTag>(),
  });
