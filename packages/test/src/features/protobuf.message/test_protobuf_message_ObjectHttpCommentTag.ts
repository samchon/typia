import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_protobuf_message_ObjectHttpCommentTag =
  _test_protobuf_message("ObjectHttpCommentTag")(
    typia.protobuf.message<ObjectHttpCommentTag>(),
  );
