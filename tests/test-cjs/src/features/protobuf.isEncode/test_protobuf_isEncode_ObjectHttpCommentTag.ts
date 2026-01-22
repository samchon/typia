import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_protobuf_isEncode_ObjectHttpCommentTag = (): void =>
  _test_protobuf_isEncode("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )({
    encode: (input) => typia.protobuf.isEncode<ObjectHttpCommentTag>(input),
    decode: typia.protobuf.createDecode<ObjectHttpCommentTag>(),
    message: typia.protobuf.message<ObjectHttpCommentTag>(),
  });
