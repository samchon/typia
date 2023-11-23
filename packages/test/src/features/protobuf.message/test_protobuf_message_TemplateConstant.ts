import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_message_TemplateConstant = _test_protobuf_message(
  "TemplateConstant",
)(typia.protobuf.message<TemplateConstant>());
