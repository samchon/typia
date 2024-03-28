import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_protobuf_message_ObjectHttpConstant = _test_protobuf_message(
  "ObjectHttpConstant",
)(typia.protobuf.message<ObjectHttpConstant>());
