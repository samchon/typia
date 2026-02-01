import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_protobuf_decode_ObjectHttpCommentTag = (): void => _test_protobuf_decode(
  "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)({
  decode: (input) => typia.protobuf.decode<ObjectHttpCommentTag>(input),
  encode: typia.protobuf.createEncode<ObjectHttpCommentTag>(),
});
