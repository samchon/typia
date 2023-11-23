import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_message_TemplateUnion = _test_protobuf_message(
  "TemplateUnion",
)(typia.protobuf.message<TemplateUnion>());
