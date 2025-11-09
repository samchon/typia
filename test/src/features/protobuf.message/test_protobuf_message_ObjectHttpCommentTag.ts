import typia from "typia";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_ObjectHttpCommentTag = (): void => _test_protobuf_message(
  "ObjectHttpCommentTag",
)(typia.protobuf.message<ObjectHttpCommentTag>());