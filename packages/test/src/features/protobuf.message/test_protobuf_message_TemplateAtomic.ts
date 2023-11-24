import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_protobuf_message_TemplateAtomic = _test_protobuf_message(
  "TemplateAtomic",
)(typia.protobuf.message<TemplateAtomic>());
