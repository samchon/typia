import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_protobuf_createIsDecode_ObjectHttpCommentTag =
  _test_protobuf_isDecode("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )({
    decode: (input) => typia.protobuf.isDecode<ObjectHttpCommentTag>(input),
    encode: typia.protobuf.createEncode<ObjectHttpCommentTag>(),
  });
