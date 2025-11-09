import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_protobuf_createEncode_ObjectHttpCommentTag = (): void => _test_protobuf_encode(
  "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)({
  encode: typia.protobuf.createEncode<ObjectHttpCommentTag>(),
  decode: typia.protobuf.createDecode<ObjectHttpCommentTag>(),
  message: typia.protobuf.message<ObjectHttpCommentTag>(),
});
